'use client';

import { usePathname } from 'next/navigation';
import { Footer } from '@/sections/Footer';

export function SiteFooter() {
  const pathname = usePathname();
  if (pathname?.startsWith('/WGOA')) return null;
  return <Footer />;
}
