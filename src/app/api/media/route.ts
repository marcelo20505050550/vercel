import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const folder = searchParams.get('folder');

    if (!folder) {
      return NextResponse.json({ error: 'Folder parameter is required' }, { status: 400 });
    }

    const publicPath = path.join(process.cwd(), 'public', folder);

    // Verifica se a pasta existe
    if (!fs.existsSync(publicPath)) {
      return NextResponse.json([]);
    }

    // Lê os arquivos da pasta
    const files = fs.readdirSync(publicPath);

    // Filtra apenas imagens e vídeos
    const mediaFiles = files.filter(file => {
      const ext = path.extname(file).toLowerCase();
      return ['.jpg', '.jpeg', '.png', '.gif', '.webp', '.mp4', '.webm', '.mov'].includes(ext);
    });

    // Mapeia os arquivos para o formato esperado
    const media = mediaFiles.map(file => {
      const ext = path.extname(file).toLowerCase();
      const isVideo = ['.mp4', '.webm', '.mov'].includes(ext);
      
      return {
        type: isVideo ? 'video' : 'image',
        src: `/${folder}/${file}`
      };
    });

    return NextResponse.json(media);
  } catch (error) {
    console.error('Error reading media files:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
