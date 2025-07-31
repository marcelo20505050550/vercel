'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { supabase } from '@/lib/supabase';
import { motion } from 'framer-motion';
import { Search, Filter, Grid, List } from 'lucide-react';

interface Produto {
  id: number;
  title: string;
  short_description: string;
  cover_image: string;
  category: string;
  price?: number;
  discount_price?: number;
  slug: string;
  status: string;
  tags: string[];
}

interface ProdutosCategoryPageProps {
  category: string;
  title: string;
  description: string;
}

export default function ProdutosCategoryPage({ category, title, description }: ProdutosCategoryPageProps) {
  const [produtos, setProdutos] = useState<Produto[]>([]);
  const [filteredProdutos, setFilteredProdutos] = useState<Produto[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  useEffect(() => {
    async function fetchProdutos() {
      const { data, error } = await supabase
        .from('produtos')
        .select('*')
        .eq('category', category)
        .order('created_at', { ascending: false });

      if (!error && data) {
        setProdutos(data);
        setFilteredProdutos(data);
      }
      setLoading(false);
    }

    fetchProdutos();
  }, [category]);

  useEffect(() => {
    let filtered = produtos;

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(produto =>
        produto.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        produto.short_description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        produto.tags?.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }

    // Filter by status
    if (statusFilter !== 'all') {
      filtered = filtered.filter(produto => produto.status === statusFilter);
    }

    setFilteredProdutos(filtered);
  }, [produtos, searchTerm, statusFilter]);

  const getCategoryColor = (cat: string) => {
    switch (cat) {
      case 'produtos-bv-boaventura':
        return 'from-yellow-400 to-yellow-600';
      case 'feitos-na-bv':
        return 'from-yellow-300 to-yellow-500';
      case 'vendidos-pela-bv':
        return 'from-yellow-200 to-yellow-400';
      case 'servicos-terceiros':
        return 'from-yellow-500 to-yellow-700';
      default:
        return 'from-yellow-300 to-yellow-500';
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-yellow-500 mx-auto"></div>
          <p className="mt-4 text-lg text-gray-600">Carregando produtos...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className={`bg-gradient-to-r ${getCategoryColor(category)} text-white py-20`}>
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              {title}
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              {description}
            </p>
            <div className="text-lg">
              {filteredProdutos.length} produto{filteredProdutos.length !== 1 ? 's' : ''} encontrado{filteredProdutos.length !== 1 ? 's' : ''}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Filters and Search */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <input
                type="text"
                placeholder="Buscar produtos..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
              />
            </div>

            {/* Filters */}
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <Filter className="h-4 w-4 text-gray-600" />
                <select
                  value={statusFilter}
                  onChange={(e) => setStatusFilter(e.target.value)}
                  className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                >
                  <option value="all">Todos os status</option>
                  <option value="disponível">Disponível</option>
                  <option value="vendido">Vendido</option>
                  <option value="em_desenvolvimento">Em Desenvolvimento</option>
                </select>
              </div>

              {/* View Mode Toggle */}
              <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 ${viewMode === 'grid' ? 'bg-gradient-to-r from-yellow-400 to-yellow-600 text-white' : 'bg-white text-gray-600 hover:bg-gray-50'}`}
                >
                  <Grid className="h-4 w-4" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 ${viewMode === 'list' ? 'bg-gradient-to-r from-yellow-400 to-yellow-600 text-white' : 'bg-white text-gray-600 hover:bg-gray-50'}`}
                >
                  <List className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid/List */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {filteredProdutos.length === 0 ? (
            <div className="text-center py-16">
              <div className="text-6xl mb-4">📦</div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Nenhum produto encontrado</h3>
              <p className="text-gray-600">Tente ajustar os filtros ou termos de busca.</p>
            </div>
          ) : (
            <div className={viewMode === 'grid' 
              ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8' 
              : 'space-y-6'
            }>
              {filteredProdutos.map((produto, index) => (
                <motion.div
                  key={produto.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                >
                  <Link href={`/produtos/${category}/${produto.id}`}>
                    <div className={`bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group cursor-pointer ${
                      viewMode === 'list' ? 'flex' : ''
                    }`}>
                      {produto.cover_image && (
                        <div className={`overflow-hidden ${viewMode === 'list' ? 'w-48 h-32' : 'h-48'}`}>
                          <img
                            src={produto.cover_image}
                            alt={produto.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                      )}
                      <div className={`p-6 ${viewMode === 'list' ? 'flex-1' : ''}`}>
                        <div className="flex items-start justify-between mb-2">
                          <h3 className="text-lg font-semibold text-text group-hover:text-yellow-600 transition-colors">
                            {produto.title}
                          </h3>
                          <span className={`px-2 py-1 text-xs rounded-full ${
                            produto.status === 'disponível' ? 'bg-green-100 text-green-800' :
                            produto.status === 'vendido' ? 'bg-red-100 text-red-800' :
                            'bg-yellow-100 text-yellow-800'
                          }`}>
                            {produto.status === 'disponível' ? 'Disponível' :
                             produto.status === 'vendido' ? 'Vendido' :
                             'Em Desenvolvimento'}
                          </span>
                        </div>
                        <p className="text-gray-600 text-sm mb-4">
                          {produto.short_description}
                        </p>
                        {produto.tags && produto.tags.length > 0 && (
                          <div className="flex flex-wrap gap-1 mb-4">
                            {produto.tags.slice(0, 3).map((tag, tagIndex) => (
                              <span key={tagIndex} className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded">
                                {tag}
                              </span>
                            ))}
                          </div>
                        )}
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
          )}
        </div>
      </section>
    </div>
  );
}