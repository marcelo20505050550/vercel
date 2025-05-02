"use client";

import React, { useState, useRef } from 'react';

export default function SimpleCurriculumUpload() {
  // Refs
  const fileInputRef = useRef<HTMLInputElement>(null);
  const formRef = useRef<HTMLFormElement>(null);

  // Estados para controle da UI
  const [isLoading, setIsLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [fileError, setFileError] = useState('');
  const [fileName, setFileName] = useState('');

  // Função de validação de arquivo
  const validateFile = (file: File | undefined): boolean => {
    setFileError('');
    
    if (!file) {
      setFileError('Por favor, selecione um arquivo');
      return false;
    }

    // Validar tamanho (máximo 5MB)
    if (file.size > 5 * 1024 * 1024) {
      setFileError('O arquivo deve ter no máximo 5MB');
      return false;
    }

    // Validar tipo de arquivo (PDF, DOC, DOCX)
    const allowedTypes = [
      'application/pdf',
      'application/msword',
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
    ];
    
    if (!allowedTypes.includes(file.type)) {
      setFileError('Formato inválido. Por favor, envie um arquivo PDF, DOC ou DOCX');
      return false;
    }

    return true;
  };

  // Handler para seleção de arquivo
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    
    if (file) {
      if (validateFile(file)) {
        setFileName(file.name);
        console.log('Arquivo selecionado:', file.name, file.type, `${(file.size / 1024).toFixed(2)}KB`);
      } else {
        // Reset the file input
        if (fileInputRef.current) {
          fileInputRef.current.value = '';
        }
        setFileName('');
      }
    } else {
      setFileName('');
    }
  };

  // Submit handler
  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    setIsLoading(true);
    setSuccessMessage('');
    setErrorMessage('');

    // Verificar se há um arquivo selecionado
    const fileInput = fileInputRef.current;
    const file = fileInput?.files?.[0];
    
    if (!file || !validateFile(file)) {
      setErrorMessage('Por favor, selecione um arquivo válido para o currículo');
      setIsLoading(false);
      return;
    }

    try {
      // Preparar dados para envio
      const formData = new FormData();
      formData.append('resume', file);

      console.log('Enviando currículo:', {
        arquivo: file.name,
        tamanho: `${(file.size / 1024).toFixed(2)}KB`,
        tipo: file.type
      });

      // Enviar para a API
      const response = await fetch('/api/send-curriculum', {
        method: 'POST',
        body: formData,
      });

      const result = await response.json();
      console.log('Resposta da API:', result);

      if (!response.ok) {
        throw new Error(result.error || 'Ocorreu um erro ao enviar o currículo');
      }

      // Sucesso
      setSuccessMessage(result.message || 'Currículo enviado com sucesso! Entraremos em contato em breve.');
      setFileName('');
      
      // Limpar o campo de arquivo
      if (fileInputRef.current) {
        fileInputRef.current.value = '';
      }
      
      // Reset form
      if (formRef.current) {
        formRef.current.reset();
      }
    } catch (err) {
      console.error('Erro ao enviar currículo:', err);
      const errorMsg = err instanceof Error ? err.message : 'Ocorreu um erro ao enviar o currículo. Tente novamente mais tarde.';
      setErrorMessage(errorMsg);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form ref={formRef} onSubmit={onSubmit} className="space-y-6" encType="multipart/form-data">
      {/* Mensagens de status */}
      {successMessage && (
        <div className="rounded-md bg-green-50 p-4 mb-6 border border-green-200">
          <div className="flex">
            <div className="flex-shrink-0">
              <svg className="h-5 w-5 text-green-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="ml-3">
              <h3 className="text-sm font-medium text-green-800">Envio realizado com sucesso!</h3>
              <div className="mt-2 text-sm text-green-700">
                <p>{successMessage}</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {errorMessage && (
        <div className="rounded-md bg-red-50 p-4 mb-6 border border-red-200">
          <div className="flex">
            <div className="flex-shrink-0">
              <svg className="h-5 w-5 text-red-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="ml-3">
              <h3 className="text-sm font-medium text-red-800">Erro no envio</h3>
              <div className="mt-2 text-sm text-red-700">
                <p>{errorMessage}</p>
                <p className="mt-2 text-xs">Se o problema persistir, por favor entre em contato por WhatsApp ou email.</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Upload de arquivo */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Anexar currículo <span className="text-red-500">*</span>
        </label>
        <div className="mt-1 flex flex-col sm:flex-row items-start sm:items-center">
          <label className="relative flex flex-col items-center px-4 py-2 bg-white text-primary rounded-md border border-primary cursor-pointer hover:bg-primary/10 transition-colors">
            <span className="text-base leading-normal flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
              </svg>
              Selecionar arquivo
            </span>
            <input
              type="file"
              name="resume"
              className="hidden"
              accept=".pdf,.doc,.docx"
              ref={fileInputRef}
              onChange={handleFileChange}
            />
          </label>
          <span className="mt-2 sm:mt-0 sm:ml-3 truncate max-w-xs sm:max-w-sm md:max-w-md text-sm sm:text-base">
            {fileName || 'Nenhum arquivo selecionado'}
          </span>
        </div>
        <p className="mt-1 text-xs text-gray-500">
          Formatos aceitos: PDF, DOC, DOCX. Tamanho máximo: 5MB
        </p>
        {fileError && (
          <p className="mt-1 text-sm text-red-600">
            {fileError}
          </p>
        )}
      </div>

      {/* Botão de envio */}
      <div className="flex justify-end mt-6">
        <button
          type="submit"
          disabled={isLoading}
          className={`inline-flex items-center px-5 py-2.5 sm:px-6 sm:py-3 border border-transparent text-sm sm:text-base font-medium rounded-md shadow-sm text-white bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-colors ${isLoading ? 'opacity-75 cursor-not-allowed' : ''}`}
        >
          {isLoading ? (
            <>
              <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Enviando...
            </>
          ) : (
            <>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
              </svg>
              Enviar currículo
            </>
          )}
        </button>
      </div>
    </form>
  );
} 