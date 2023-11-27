import Image from 'next/image';
import { Inter } from 'next/font/google';
import Header from '@/pages/Header';
import Footer from '@/pages/Footer';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <main
      className={`flex  flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <Header />
      <div className="py-5 h-fit"> Home</div>
      <Footer />
    </main>
  );
}
