// Tipos customizados para Next.js 15
import { NextRequest } from 'next/server';

declare global {
  interface PageProps {
    params: Promise<{ [key: string]: string | string[] }>;
    searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
  }
}

export {};