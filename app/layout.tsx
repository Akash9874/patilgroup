import './globals.css';
import type { Metadata } from 'next';
import localFont from 'next/font/local';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const clashGrotesk = localFont({
  src: '../fonts/ClashGrotesk-Regular.woff2',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Patil Group - Delivering Track Solutions | Railway Infrastructure',
  description: 'Trusted leader in railway infrastructure, delivering high-quality track solutions for urban and interurban transport. Made in India with over 50 years of expertise.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Preload critical resources */}
        <link rel="preload" href="/fonts/ClashGrotesk-Regular.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="preload" href="/01_hero_train.jpg" as="image" />
        <link rel="preload" href="/pg.png" as="image" />
        <link rel="preload" href="/engineering-infra.jpg" as="image" />
        
        {/* Prefetch less critical resources */}
        <link rel="prefetch" href="/herovideo.mp4" as="video" type="video/mp4" />
        <link rel="prefetch" href="/lppatil.mp4" as="video" type="video/mp4" />
        
        {/* DNS prefetch for external resources */}
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        
        {/* Optimize resource hints */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className={clashGrotesk.className}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}