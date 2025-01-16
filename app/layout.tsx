import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Kipepeo Aerospace',
  description: 'Creating sustainable UAVs for the future',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className="pt-32 relative overflow-hidden">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
