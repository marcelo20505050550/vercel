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

interface FeaturedProductsSectionProps {
  showFilters?: boolean;
  title?: string;
  description?: string;
}

export default function FeaturedProductsSection({ 
  showFilters = true, 
  title = "Produtos em Destaque",
  description = "Explore nossa linha completa de produtos industriais e máquinas especiais"
}: FeaturedProductsSectionProps) {
  const [produtos, setProdutos] = useState<Produto[]>([]);
  const [filteredProdutos, setFilteredProdutos] = useState<Produto[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState<string>('todos');
  const [categories, setCategories] = useState<string[]>([]);

  useEffect(() => {
    async function fetchAllProducts() {
      const { data, error } = await supabase
        .from('produtos')
        .select('*')
        .order('created_at', { ascending: false });

      if (!error && data) {
        setProdutos(data);
        setFilteredProdutos(data);
        
        // Extrair categorias únicas
        const uniqueCategories = Array.from(new Set(data.map(p => p.category)));
        setCategories(uniqueCategories);
      }
      setLoading(false);
    }

    fetchAllProducts();
  }, []);

  useEffect(() => {
    if (selectedCategory === 'todos') {
      setFilteredProdutos(produtos);
    } else {
      setFilteredProdutos(produtos.filter(p => p.category === selectedCategory));
    }
  }, [selectedCategory, produtos]);

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
          
          {/* Filter buttons skeleton */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {[...Array(5)].map((_, index) => (
              <div key={index} className="animate-pulse">
                <div className="h-10 bg-gray-200 rounded-full w-24"></div>
              </div>
            ))}
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
            {title}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {description}
          </p>
        </motion.div>

        {/* Category Filter */}
        {showFilters && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            <button
              onClick={() => setSelectedCategory('todos')}
              className={`px-6 py-2 rounded-full transition-all duration-300 ${
                selectedCategory === 'todos'
                  ? 'bg-yellow-500 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Todos ({produtos.length})
            </button>
            
            {categories.map((category) => {
              const count = produtos.filter(p => p.category === category).length;
              return (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-2 rounded-full transition-all duration-300 ${
                    selectedCategory === category
                      ? 'bg-yellow-500 text-white shadow-lg'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {categoryLabels[category as keyof typeof categoryLabels] || category} ({count})
                </button>
              );
            })}
          </motion.div>
        )}

        {/* Products Grid */}
        <motion.div
          key={selectedCategory}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProdutos.map((produto, index) => (
            <motion.div
              key={produto.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 * (index % 6) }}
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

        {/* Show message if no products in selected category */}
        {filteredProdutos.length === 0 && selectedCategory !== 'todos' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <p className="text-lg text-gray-600">
              Nenhum produto encontrado na categoria selecionada.
            </p>
          </motion.div>
        )}


      </div>
    </section>
  );
}