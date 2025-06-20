import Image from 'next/image';
import Link from 'next/link';
import { Project } from '@/lib/supabase';

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="group bg-gray-light rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
      <div className="relative h-72 overflow-hidden">
        <Image
          src={project.cover_image || '/image/project-placeholder.png'}
          alt={project.title}
          width={600}
          height={450}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        
        {/* Status Badge */}
        {project.status && (
          <div className="absolute top-4 left-4">
            <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${
              project.status === 'disponível' ? 'bg-green-500 text-white' : 
              project.status === 'vendido' ? 'bg-red-500 text-white' : 
              'bg-yellow-500 text-white'
            }`}>
              <span className={`w-1.5 h-1.5 rounded-full mr-1.5 ${
                project.status === 'disponível' ? 'bg-white' : 
                project.status === 'vendido' ? 'bg-white' : 
                'bg-white'
              }`}></span>
              {project.status === 'disponível' ? 'Disponível' : 
               project.status === 'vendido' ? 'Vendido' : 
               'Em Desenvolvimento'}
            </span>
          </div>
        )}
        
        <div className="absolute bottom-0 left-0 right-0 p-6 text-white translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
          <span className="bg-primary text-text text-sm font-semibold py-1 px-3 rounded-full">{project.category}</span>
          <h3 className="text-2xl font-bold mt-2">{project.title}</h3>
        </div>
      </div>
      <div className="p-6">
        <p className="text-gray-dark mb-4 line-clamp-3">
          {project.short_description}
        </p>
        
        {/* Price */}
        {project.price && (
          <div className="mb-4">
            {project.discount_price ? (
              <div className="flex items-baseline gap-2">
                <span className="text-gray-500 text-sm line-through">
                  {new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(project.price)}
                </span>
                <span className="text-primary font-bold text-lg">
                  {new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(project.discount_price)}
                </span>
              </div>
            ) : (
              <span className="text-primary font-bold text-lg">
                {new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(project.price)}
              </span>
            )}
          </div>
        )}
        
        <div className="flex items-center justify-between">
          <span className="text-sm font-medium text-gray-500">Conclusão: {project.completion_date}</span>
          <Link 
            href={`/projetos/${project.slug}`} 
            className="inline-flex items-center text-primary font-bold group/link"
          >
            Ver detalhes
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-5 w-5 ml-1 transform transition-transform group-hover/link:translate-x-1" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
} 