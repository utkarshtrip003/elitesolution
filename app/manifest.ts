import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Elite Solutions - Creative Digital Agency',
    short_name: 'Elite Solutions',
    description: 'We build high-performance web experiences and drive growth through strategic social media advertising.',
    start_url: '/',
    display: 'standalone',
    background_color: '#000000',
    theme_color: '#3B82F6',
    icons: [
      {
        src: '/icon-192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/icon-512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  };
}

