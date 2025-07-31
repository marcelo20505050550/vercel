'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { supabase } from '@/lib/supabase';
import { motion } from 'framer-motion';

interface Produto {
  id: number;
  title: string;
  short_description: string;
  cover_image: string;
  category: string;
  price?: number;
  discount_price?: number;
  slug: string;
}

export default function RandomProducts() {
  const [produtos, setProdutos] = useState<Produto[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchRandomProducts() {
      const { data, error } = await supabase
        .from('produtos')
        .select('*')
        .eq('featured', true)
        .limit(6);

      if (!error && data) {
        setProdutos(data);
      }
      setLoading(false);
    }

    fetchRandomProducts();
  }, []);

  if (loading) {
    return (
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-text mb-4">
              Produtos em Destaque
            </h2>
            <div className="animate-pulse">
              <div className="h-4 bg-gray-200 rounded w-64 mx-auto"></div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...Array(6)].map((_, index) => (
              <div key={index} className="animate-pulse">
                <div className="bg-gray-200 h-48 rounded-lg mb-4"></div>
                <div className="h-4 bg-gray-200 rounded mb-2"></div>
                <div className="h-3 bg-gray-200 rounded w-3/4"></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (produtos.length === 0) {
    return null;
  }

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-text mb-4">
            Produtos em Destaque
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Conheça alguns dos nossos produtos mais procurados e inovadores
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {produtos.map((produto, index) => (
            <motion.div
              key={produto.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
            >
              <Link href={`/produtos/${produto.category}/${produto.id}`}>
                <div className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group cursor-pointer">
                  {produto.cover_image && (
                    <div className="h-48 overflow-hidden">
                      <img
                        src={produto.cover_image}
                        alt={produto.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  )}
                  <div className="p-6">
                    <h3 className="text-lg font-semibold text-text mb-2 group-hover:text-yellow-600 transition-colors">
                      {produto.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4">
                      {produto.short_description}
                    </p>
                    {produto.price && (
                      <div className="flex items-center gap-2">
                        {produto.discount_price && (
                          <span className="text-lg font-bold text-yellow-600">
                            R$ {produto.discount_price.toLocaleString('pt-BR')}
                          </span>
                        )}
                        <span className={`${produto.discount_price ? 'text-sm text-gray-500 line-through' : 'text-lg font-bold text-yellow-600'}`}>
                          R$ {produto.price.toLocaleString('pt-BR')}
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/produtos"
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-yellow-400 to-yellow-600 text-white rounded-lg hover:from-yellow-500 hover:to-yellow-700 transition-colors"
          >
            Ver Todos os Produtos
          </Link>
        </div>
      </div>
    </section>
  );
}