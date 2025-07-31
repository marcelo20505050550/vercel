'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

const categories = [
  {
    id: 'produtos-bv-boaventura',
    title: 'Produtos da BV Boaventura',
    description: 'Produtos desenvolvidos e fabricados com nossa expertise',
    href: '/produtos/produtos-bv-boaventura',
    color: 'from-yellow-400 to-yellow-600'
  },
  {
    id: 'feitos-na-bv',
    title: 'Produtos de Terceiros Feitos na BV',
    description: 'Produtos de terceiros fabricados com nossa qualidade',
    href: '/produtos/feitos-na-bv',
    color: 'from-yellow-300 to-yellow-500'
  },
  {
    id: 'vendidos-pela-bv',
    title: 'Produtos de Terceiros Vendidos pela BV',
    description: 'Produtos selecionados e comercializados por nós',
    href: '/produtos/vendidos-pela-bv',
    color: 'from-yellow-200 to-yellow-400'
  },
  {
    id: 'servicos-terceiros',
    title: 'Serviços em Produtos de Terceiros',
    description: 'Serviços especializados com nossa expertise técnica',
    href: '/produtos/servicos-terceiros',
    color: 'from-yellow-500 to-yellow-700'
  }
];

export default function ProdutosPageContent() {

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-white py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Nossos Produtos
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Conheça nossa linha completa de produtos industriais, implementos agrícolas e serviços especializados
            </p>
          </motion.div>
        </div>
      </section>

      {/* Categories Menu */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-text mb-4">
              Categorias de Produtos
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Explore nossas diferentes categorias de produtos e serviços
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category, index) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
              >
                <Link href={category.href}>
                  <div className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group cursor-pointer">
                    <div className={`h-32 bg-gradient-to-r ${category.color} flex items-center justify-center`}>
                      <div className="text-white text-center">
                        <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-2">
                          <div className="w-8 h-8 bg-white rounded-full"></div>
                        </div>
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-lg font-semibold text-text mb-2 group-hover:text-yellow-600 transition-colors">
                        {category.title}
                      </h3>
                      <p className="text-gray-600 text-sm">
                        {category.description}
                      </p>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


    </div>
  );
}