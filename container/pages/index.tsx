import { Inter } from 'next/font/google';
import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';
//@ts-ignore
const Header = dynamic(() => import('home/Header'));
//@ts-ignore
const Footer = dynamic(() => import('home/Footer'));
const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  const [isMounted, setMounted] = useState(false);
  useEffect(() => {
    if (!isMounted) setMounted(true);
  }, []);
  if (!isMounted) return null;
  return (
    <main
      className={`flex flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <Header />
      <div className="py-5"> Container</div>
      <Footer />
    </main>
  );
}
