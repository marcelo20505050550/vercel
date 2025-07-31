'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowLeft, Share2, Heart, ShoppingCart, Eye, Calendar, MapPin, User, Tag, Star, ChevronLeft, ChevronRight } from 'lucide-react';

interface Produto {
  id: number;
  title: string;
  description: string;
  short_description: string;
  cover_image: string;
  category: string;
  price?: number;
  discount_price?: number;
  slug: string;
  status: string;
  tags: string[];
  gallery: string[];
  specifications: string[];
  challenges: string[];
  benefits: string[];
  about: string;
  solution: string;
  results: string;
  completion_date: string;
  location: string;
  client_sector: string;
  project_scope: string;
  technical_details: any;
  warranty_info: string;
  delivery_time: string;
  video_url: string;
  model_3d_url: string;
  created_at: string;
}

interface ProdutoDetailPageProps {
  produto: Produto;
}

export default function ProdutoDetailPage({ produto }: ProdutoDetailPageProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isLiked, setIsLiked] = useState(false);
  
  const images = produto.gallery && produto.gallery.length > 0 
    ? produto.gallery 
    : produto.cover_image 
    ? [produto.cover_image] 
    : [];

  const getCategoryInfo = (category: string) => {
    switch (category) {
      case 'produtos-bv-boaventura':
        return {
          name: 'Produtos da BV Boaventura',
          color: 'from-yellow-400 to-yellow-600',
          href: '/produtos/produtos-bv-boaventura'
        };
      case 'feitos-na-bv':
        return {
          name: 'Produtos de Terceiros Feitos na BV',
          color: 'from-yellow-300 to-yellow-500',
          href: '/produtos/feitos-na-bv'
        };
      case 'vendidos-pela-bv':
        return {
          name: 'Produtos de Terceiros Vendidos pela BV',
          color: 'from-yellow-200 to-yellow-400',
          href: '/produtos/vendidos-pela-bv'
        };
      case 'servicos-terceiros':
        return {
          name: 'Serviços em Produtos de Terceiros',
          color: 'from-yellow-500 to-yellow-700',
          href: '/produtos/servicos-terceiros'
        };
      default:
        return {
          name: 'Produtos',
          color: 'from-yellow-300 to-yellow-500',
          href: '/produtos'
        };
    }
  };

  const categoryInfo = getCategoryInfo(produto.category);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const handleSolicitarOrcamento = () => {
    const phoneNumber = "5516991624446"; // (16) 99162-4446
    const message = `Olá! Gostaria de solicitar um orçamento para o produto: ${produto.title}`;
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Link href="/produtos" className="hover:text-yellow-600">Produtos</Link>
            <span>/</span>
            <Link href={categoryInfo.href} className="hover:text-yellow-600">{categoryInfo.name}</Link>
            <span>/</span>
            <span className="text-gray-900">{produto.title}</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Image Gallery */}
          <div className="space-y-4">
            {images.length > 0 && (
              <div className="relative">
                <div className="aspect-square bg-white rounded-lg overflow-hidden shadow-lg">
                  <img
                    src={images[currentImageIndex]}
                    alt={produto.title}
                    className="w-full h-full object-cover"
                  />
                  {images.length > 1 && (
                    <>
                      <button
                        onClick={prevImage}
                        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow-lg transition-all"
                      >
                        <ChevronLeft className="h-5 w-5" />
                      </button>
                      <button
                        onClick={nextImage}
                        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow-lg transition-all"
                      >
                        <ChevronRight className="h-5 w-5" />
                      </button>
                    </>
                  )}
                </div>
                
                {/* Thumbnail Gallery */}
                {images.length > 1 && (
                  <div className="flex gap-2 mt-4 overflow-x-auto">
                    {images.map((image, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentImageIndex(index)}
                        className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-all ${
                          index === currentImageIndex ? 'border-yellow-500' : 'border-gray-200'
                        }`}
                      >
                        <img
                          src={image}
                          alt={`${produto.title} ${index + 1}`}
                          className="w-full h-full object-cover"
                        />
                      </button>
                    ))}
                  </div>
                )}
              </div>
            )}

            {/* Video */}
            {produto.video_url && (
              <div className="aspect-video bg-white rounded-lg overflow-hidden shadow-lg">
                <iframe
                  src={produto.video_url}
                  title={`Vídeo - ${produto.title}`}
                  className="w-full h-full"
                  allowFullScreen
                />
              </div>
            )}
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            {/* Header */}
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className={`px-3 py-1 text-sm rounded-full text-white bg-gradient-to-r ${categoryInfo.color}`}>
                  {categoryInfo.name}
                </span>
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
              
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                {produto.title}
              </h1>
              
              <p className="text-lg text-gray-600 mb-6">
                {produto.short_description}
              </p>

              {/* Price */}
              {produto.price && (
                <div className="flex items-center gap-4 mb-6">
                  {produto.discount_price && (
                    <span className="text-3xl font-bold text-yellow-600">
                      R$ {produto.discount_price.toLocaleString('pt-BR')}
                    </span>
                  )}
                  <span className={`${produto.discount_price ? 'text-xl text-gray-500 line-through' : 'text-3xl font-bold text-yellow-600'}`}>
                    R$ {produto.price.toLocaleString('pt-BR')}
                  </span>
                  {produto.discount_price && (
                    <span className="bg-red-100 text-red-800 px-2 py-1 rounded text-sm font-medium">
                      {Math.round((1 - produto.discount_price / produto.price) * 100)}% OFF
                    </span>
                  )}
                </div>
              )}

              {/* Actions */}
              <div className="flex gap-3 mb-8">
                <button 
                  onClick={handleSolicitarOrcamento}
                  className="flex-1 bg-gradient-to-r from-yellow-400 to-yellow-600 text-white px-6 py-3 rounded-lg hover:from-yellow-500 hover:to-yellow-700 transition-colors flex items-center justify-center gap-2"
                >
                  <ShoppingCart className="h-5 w-5" />
                  Solicitar Orçamento
                </button>
                <button
                  onClick={() => setIsLiked(!isLiked)}
                  className={`p-3 rounded-lg border transition-colors ${
                    isLiked ? 'bg-red-50 border-red-200 text-red-600' : 'bg-white border-gray-200 text-gray-600 hover:bg-gray-50'
                  }`}
                >
                  <Heart className={`h-5 w-5 ${isLiked ? 'fill-current' : ''}`} />
                </button>
                <button className="p-3 rounded-lg border border-gray-200 text-gray-600 hover:bg-gray-50 transition-colors">
                  <Share2 className="h-5 w-5" />
                </button>
              </div>
            </div>

            {/* Quick Info */}
            <div className="grid grid-cols-2 gap-4 p-4 bg-white rounded-lg shadow-sm">
              {produto.completion_date && (
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-gray-400" />
                  <div>
                    <div className="text-xs text-gray-500">Data de Conclusão</div>
                    <div className="text-sm font-medium">{produto.completion_date}</div>
                  </div>
                </div>
              )}
              {produto.location && (
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-gray-400" />
                  <div>
                    <div className="text-xs text-gray-500">Localização</div>
                    <div className="text-sm font-medium">{produto.location}</div>
                  </div>
                </div>
              )}
              {produto.client_sector && (
                <div className="flex items-center gap-2">
                  <User className="h-4 w-4 text-gray-400" />
                  <div>
                    <div className="text-xs text-gray-500">Setor</div>
                    <div className="text-sm font-medium">{produto.client_sector}</div>
                  </div>
                </div>
              )}
              {produto.delivery_time && (
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-gray-400" />
                  <div>
                    <div className="text-xs text-gray-500">Prazo de Entrega</div>
                    <div className="text-sm font-medium">{produto.delivery_time}</div>
                  </div>
                </div>
              )}
            </div>

            {/* Tags */}
            {produto.tags && produto.tags.length > 0 && (
              <div>
                <h3 className="text-sm font-medium text-gray-900 mb-2">Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {produto.tags.map((tag, index) => (
                    <span key={index} className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Detailed Information */}
        <div className="mt-16 space-y-12">
          {/* Description */}
          {produto.description && (
            <section className="bg-white rounded-lg p-8 shadow-sm">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Descrição</h2>
              <div className="prose max-w-none text-gray-600">
                {produto.description.split('\n').map((paragraph, index) => (
                  <p key={index} className="mb-4">{paragraph}</p>
                ))}
              </div>
            </section>
          )}

          {/* About, Solution, Results */}
          {(produto.about || produto.solution || produto.results) && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {produto.about && (
                <section className="bg-white rounded-lg p-6 shadow-sm">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Sobre o Projeto</h3>
                  <p className="text-gray-600">{produto.about}</p>
                </section>
              )}
              {produto.solution && (
                <section className="bg-white rounded-lg p-6 shadow-sm">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Solução</h3>
                  <p className="text-gray-600">{produto.solution}</p>
                </section>
              )}
              {produto.results && (
                <section className="bg-white rounded-lg p-6 shadow-sm">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Resultados</h3>
                  <p className="text-gray-600">{produto.results}</p>
                </section>
              )}
            </div>
          )}

          {/* Specifications and Benefits */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {produto.specifications && produto.specifications.length > 0 && (
              <section className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Especificações</h3>
                <ul className="space-y-2">
                  {produto.specifications.map((spec, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-yellow-500 rounded-full mt-2 flex-shrink-0"></span>
                      <span className="text-gray-600">{spec}</span>
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {produto.benefits && produto.benefits.length > 0 && (
              <section className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Benefícios</h3>
                <ul className="space-y-2">
                  {produto.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></span>
                      <span className="text-gray-600">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </section>
            )}
          </div>

          {/* Challenges */}
          {produto.challenges && produto.challenges.length > 0 && (
            <section className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Desafios Superados</h3>
              <ul className="space-y-2">
                {produto.challenges.map((challenge, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></span>
                    <span className="text-gray-600">{challenge}</span>
                  </li>
                ))}
              </ul>
            </section>
          )}

          {/* Technical Details */}
          {produto.technical_details && Object.keys(produto.technical_details).length > 0 && (
            <section className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Detalhes Técnicos</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {Object.entries(produto.technical_details).map(([key, value]) => (
                  <div key={key} className="flex justify-between py-2 border-b border-gray-100">
                    <span className="font-medium text-gray-700">{key}:</span>
                    <span className="text-gray-600">{String(value)}</span>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Warranty and Delivery */}
          {(produto.warranty_info || produto.delivery_time) && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {produto.warranty_info && (
                <section className="bg-white rounded-lg p-6 shadow-sm">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Garantia</h3>
                  <p className="text-gray-600">{produto.warranty_info}</p>
                </section>
              )}
              {produto.delivery_time && (
                <section className="bg-white rounded-lg p-6 shadow-sm">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Prazo de Entrega</h3>
                  <p className="text-gray-600">{produto.delivery_time}</p>
                </section>
              )}
            </div>
          )}
        </div>

        {/* Back Button */}
        <div className="mt-12 text-center">
          <Link
            href={categoryInfo.href}
            className="inline-flex items-center gap-2 text-yellow-600 hover:text-yellow-700 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Voltar para {categoryInfo.name}
          </Link>
        </div>
      </div>
    </div>
  );
}