"use client";

import { useState, useEffect } from 'react';
import { Parceiro } from '@/types/parceiros';
import { parceiros as parceirosIniciais } from '@/data/parceiros';

export function useParceiros() {
    const [parceiros, setParceiros] = useState<Parceiro[]>(parceirosIniciais);
    const [loading, setLoading] = useState(false);

    // Função para adicionar um novo parceiro
    const adicionarParceiro = async (novoParceiro: Omit<Parceiro, 'id'>) => {
        setLoading(true);
        try {
            // Gerar um ID único simples (em produção, isso viria do backend)
            const novoId = (Math.max(...parceiros.map(p => parseInt(p.id))) + 1).toString();

            const parceiroCompleto: Parceiro = {
                ...novoParceiro,
                id: novoId
            };

            setParceiros(prev => [...prev, parceiroCompleto]);

            // Aqui voocêe faria a chamada para a API para salvar no backend
            // await api.post('/parceiros', parceiroCompleto);

            return parceiroCompleto;
        } catch (error) {
            console.error('Erro ao adicionar parceiro:', error);
            throw error;
        } finally {
            setLoading(false);
        }
    };

    // Função para atualizar um parceiro existente
    const atualizarParceiro = async (id: string, dadosAtualizados: Partial<Parceiro>) => {
        setLoading(true);
        try {
            setParceiros(prev =>
                prev.map(parceiro =>
                    parceiro.id === id
                        ? { ...parceiro, ...dadosAtualizados }
                        : parceiro
                )
            );

            // Aqui você faria a chamada para a API para atualizar no backend
            // await api.put(`/parceiros/${id}`, dadosAtualizados);

        } catch (error) {
            console.error('Erro ao atualizar parceiro:', error);
            throw error;
        } finally {
            setLoading(false);
        }
    };

    // Função para remover um parceiro (desativar)
    const removerParceiro = async (id: string) => {
        setLoading(true);
        try {
            setParceiros(prev =>
                prev.map(parceiro =>
                    parceiro.id === id
                        ? { ...parceiro, ativo: false }
                        : parceiro
                )
            );

            // Aqui você faria a chamada para a API para desativar no backend
            // await api.patch(`/parceiros/${id}`, { ativo: false });

        } catch (error) {
            console.error('Erro ao remover parceiro:', error);
            throw error;
        } finally {
            setLoading(false);
        }
    };

    // Função para obter parceiros por categoria
    const getParceiroPorCategoria = (categoria: string) => {
        return parceiros.filter(parceiro =>
            parceiro.categoria === categoria && parceiro.ativo
        );
    };

    // Função para obter parceiros ativos
    const getParceirosAtivos = () => {
        return parceiros.filter(parceiro => parceiro.ativo);
    };

    // Função para buscar parceiros
    const buscarParceiros = (termo: string) => {
        const termoBusca = termo.toLowerCase();
        return parceiros.filter(parceiro =>
            parceiro.ativo && (
                parceiro.nome.toLowerCase().includes(termoBusca) ||
                parceiro.descricao.toLowerCase().includes(termoBusca)
            )
        );
    };

    return {
        parceiros,
        loading,
        adicionarParceiro,
        atualizarParceiro,
        removerParceiro,
        getParceiroPorCategoria,
        getParceirosAtivos,
        buscarParceiros
    };
}