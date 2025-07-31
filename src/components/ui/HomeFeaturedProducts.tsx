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

const categoryLabels = {
  'produtos-bv-boaventura': 'BV Boaventura',
  'feitos-na-bv': 'Feitos na BV',
  'vendidos-pela-bv': 'Vendidos pela BV',
  'servicos-terceiros': 'Serviços'
};

const categoryColors = {
  'produtos-bv-boaventura': 'bg-yellow-500 text-white',
  'feitos-na-bv': 'bg-blue-500 text-white',
  'vendidos-pela-bv': 'bg-green-500 text-white',
  'servicos-terceiros': 'bg-purple-500 text-white'
};

export default function HomeFeaturedProducts() {
  const [produtos, setProdutos] = useState<Produto[]>([]);
  const [displayedProdutos, setDisplayedProdutos] = useState<Produto[]>([]);
  const [loading, setLoading] = useState(true);
  const [showAll, setShowAll] = useState(false);
  const [totalCount, setTotalCount] = useState(0);

  const INITIAL_LIMIT = 3;

  useEffect(() => {
    async function fetchProducts() {
      const { data, error } = await supabase
        .from('produtos')
        .select('*')
        .order('created_at', { ascending: false });

      if (!error && data) {
        setProdutos(data);
        setTotalCount(data.length);
        
        // Mostrar apenas os primeiros 3 produtos inicialmente
        setDisplayedProdutos(data.slice(0, INITIAL_LIMIT));
      }
      setLoading(false);
    }

    fetchProducts();
  }, []);

  const handleShowMore = () => {
    if (showAll) {
      setDisplayedProdutos(produtos.slice(0, INITIAL_LIMIT));
      setShowAll(false);
    } else {
      setDisplayedProdutos(produtos);
      setShowAll(true);
    }
  };

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
            {[...Array(3)].map((_, index) => (
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
    return (
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-text mb-4">
              Produtos em Destaque
            </h2>
            <p className="text-lg text-gray-600">
              Nenhum produto encontrado no momento.
            </p>
          </div>
        </div>
      </section>
    );
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

        {/* Products Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {displayedProdutos.map((produto, index) => (
            <motion.div
              key={produto.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
            >
              <Link href={`/produtos/${produto.category}/${produto.id}`}>
                <div className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group cursor-pointer">
                  {produto.cover_image && (
                    <div className="h-48 overflow-hidden relative">
                      <img
                        src={produto.cover_image}
                        alt={produto.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      {/* Category Badge */}
                      <div className="absolute top-3 left-3">
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                          categoryColors[produto.category as keyof typeof categoryColors] || 'bg-gray-500 text-white'
                        }`}>
                          {categoryLabels[produto.category as keyof typeof categoryLabels] || produto.category}
                        </span>
                      </div>
                    </div>
                  )}
                  <div className="p-6">
                    <h3 className="text-lg font-semibold text-text mb-2 group-hover:text-yellow-600 transition-colors">
                      {produto.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">
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
        </motion.div>

        {/* Action Buttons */}
        <div className="text-center mt-12 space-y-4">
          {/* Show More/Less Button - only if there are more than 3 products */}
          {totalCount > INITIAL_LIMIT && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <button
                onClick={handleShowMore}
                className="inline-flex items-center px-6 py-3 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-all duration-300 mr-4"
              >
                {showAll ? 'Ver Menos Produtos' : `Ver Mais Produtos (${totalCount - INITIAL_LIMIT} restantes)`}
              </button>
            </motion.div>
          )}
          
          {/* View All Categories Button */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Link
              href="/produtos"
              className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-yellow-400 to-yellow-600 text-white rounded-lg hover:from-yellow-500 hover:to-yellow-700 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Explorar Todas as Categorias
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}