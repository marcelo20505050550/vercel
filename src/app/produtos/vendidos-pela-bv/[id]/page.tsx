import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import MainLayout from '@/components/layout/MainLayout';
import ProdutoDetailPage from '@/components/ui/ProdutoDetailPage';
import { supabase } from '@/lib/supabase';

interface Props {
  params: { id: string };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { data: produto } = await supabase
    .from('produtos')
    .select('title, short_description, seo_description, seo_keywords')
    .eq('id', params.id)
    .eq('category', 'vendidos-pela-bv')
    .single();

  if (!produto) {
    return {
      title: 'Produto não encontrado | BV Boaventura',
    };
  }

  return {
    title: `${produto.title} | BV Boaventura`,
    description: produto.seo_description || produto.short_description,
    keywords: produto.seo_keywords || [],
  };
}

export default async function VendidoPelaBVDetailPage({ params }: Props) {
  const { data: produto, error } = await supabase
    .from('produtos')
    .select('*')
    .eq('id', params.id)
    .eq('category', 'vendidos-pela-bv')
    .single();

  if (error || !produto) {
    notFound();
  }

  return (
    <MainLayout>
      <ProdutoDetailPage produto={produto} />
    </MainLayout>
  );
}