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
      <body className={clashGrotesk.className}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}