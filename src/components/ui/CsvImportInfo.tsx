"use client";

import { useState } from 'react';

export default function CsvImportInfo() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-8 right-8 z-50">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-primary hover:bg-primary-dark text-text font-medium rounded-full p-3 shadow-lg flex items-center justify-center"
        aria-label="Informações sobre importação CSV"
      >
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          className="h-6 w-6" 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" 
          />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute bottom-16 right-0 w-80 bg-white rounded-lg shadow-xl p-6 text-text">
          <button 
            onClick={() => setIsOpen(false)}
            className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
            aria-label="Fechar"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-5 w-5" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M6 18L18 6M6 6l12 12" 
              />
            </svg>
          </button>
          
          <h3 className="text-lg font-bold mb-3">Importação de Projetos</h3>
          <p className="text-sm text-gray-600 mb-4">
            Para adicionar ou editar projetos, faça upload de um arquivo CSV na interface do Supabase.
          </p>
          
          <h4 className="font-semibold text-sm mb-2">Colunas necessárias:</h4>
          <ul className="text-xs text-gray-600 space-y-1 mb-4 list-disc pl-4">
            <li>slug (identificador único)</li>
            <li>title (título do projeto)</li>
            <li>category (categoria)</li>
            <li>short_description (descrição curta)</li>
            <li>cover_image (URL da imagem de capa)</li>
            <li>featured (destaque: true/false)</li>
            <li>... e outros campos</li>
          </ul>
          
          <a 
            href="https://supabase.com/dashboard/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-xs bg-primary hover:bg-primary-dark text-text py-2 px-4 rounded inline-block w-full text-center font-medium"
          >
            Acessar Supabase Dashboard
          </a>
        </div>
      )}
    </div>
  );
} 