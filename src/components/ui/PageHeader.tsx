import React from 'react';

interface PageHeaderProps {
  title: string;
  subtitle: string;
  imageUrl: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({ title, subtitle, imageUrl }) => {
  return (
    <div className="relative w-full h-80 bg-gray-900">
      {/* Imagem de fundo com overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center" 
        style={{ backgroundImage: `url(${imageUrl})` }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>
      
      {/* Conteúdo */}
      <div className="relative h-full container mx-auto px-4 flex flex-col justify-center items-center text-center z-10">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">{title}</h1>
        <p className="text-xl text-white max-w-2xl">{subtitle}</p>
      </div>
    </div>
  );
};

export default PageHeader; 