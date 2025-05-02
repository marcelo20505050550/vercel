'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function TrabalheConoscoRedirect() {
  const router = useRouter();

  useEffect(() => {
    router.replace('/contato#curriculos');
  }, [router]);

  return (
    <div className="container mx-auto py-20 px-4 text-center">
      <p className="text-lg">Redirecionando para a página de contato...</p>
    </div>
  );
} 