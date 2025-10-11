import { supabase } from '@/lib/supabase';
import logger from '@/utils/logger';

export interface Produto {
    id: string;
    slug: string;
    title: string;
    short_description: string;
    full_description: string;
    category: 'feitos-na-bv' | 'produtos-bv-boaventura' | 'servicos-terceiros' | 'vendidos-pela-bv';
    image_url: string;
    gallery: string[];
    price?: number;
    specifications?: string;
    seo_description?: string;
    seo_keywords: string[];
    created_at: string;
    updated_at: string;
}

export async function getProdutosByCategory(category: string): Promise<Produto[]> {
    const { data, error } = await supabase
        .from('produtos')
        .select('*')
        .eq('category', category)
        .order('created_at', { ascending: false });

    if (error) {
        logger.error('Erro ao buscar produtos por categoria', error);
        return [];
    }

    // Map cover_image to image_url
    return (data || []).map(produto => ({
        ...produto,
        image_url: produto.cover_image,
        full_description: produto.description
    }));
}

export async function getProdutoBySlug(slug: string, category: string): Promise<Produto | null> {
    const { data, error } = await supabase
        .from('produtos')
        .select('*')
        .eq('slug', slug)
        .eq('category', category)
        .single();

    if (error) {
        logger.error('Erro ao buscar produto por slug', error);
        return null;
    }

    if (!data) return null;

    // Map cover_image to image_url
    return {
        ...data,
        image_url: data.cover_image,
        full_description: data.description
    };
}

export async function getAllProdutos(): Promise<Produto[]> {
    const { data, error } = await supabase
        .from('produtos')
        .select('*')
        .order('created_at', { ascending: false });

    if (error) {
        logger.error('Erro ao buscar todos os produtos', error);
        return [];
    }

    // Map cover_image to image_url
    return (data || []).map(produto => ({
        ...produto,
        image_url: produto.cover_image,
        full_description: produto.description
    }));
}

export async function getRandomProdutos(limit: number = 6): Promise<Produto[]> {
    const { data, error } = await supabase
        .from('produtos')
        .select('*')
        .limit(limit);

    if (error) {
        logger.error('Erro ao buscar produtos aleatórios', error);
        return [];
    }

    // Map cover_image to image_url and shuffle results
    const mapped = (data || []).map(produto => ({
        ...produto,
        image_url: produto.cover_image,
        full_description: produto.description
    }));
    
    const shuffled = mapped.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, limit);
}