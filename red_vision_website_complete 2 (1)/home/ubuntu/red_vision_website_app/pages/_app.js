import '../styles/globals.css';
import Head from 'next/head';
import Navigation from '../components/Navigation';
import Image from 'next/image';
import Link from 'next/link';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Red Vision Creative Studio - The world's first AI-powered lifestyle agency" />
      </Head>
      
      <header className="bg-[#990000] text-white">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center">
            <Link href="/">
              <Image 
                src="/images/red_vision_logo.png" 
                alt="Red Vision Creative Studio" 
                width={150} 
                height={150} 
                className="mr-4"
              />
            </Link>
          </div>
          <Navigation />
          <div className="md:hidden">
            <button className="text-white focus:outline-none">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </header>
      
      <Component {...pageProps} />
      
      <footer className="bg-[#333333] text-white py-10">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <Image 
                src="/images/red_vision_logo.png" 
                alt="Red Vision Creative Studio" 
                width={150} 
                height={150} 
                className="mb-4"
              />
              <p>The world's first AI-powered lifestyle agency, revolutionizing music, marketing, fashion, and content creation.</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4 text-[#D4AF37]">Quick Links</h3>
              <ul className="space-y-2">
                <li><Link href="/" className="hover:text-[#D4AF37]">Home</Link></li>
                <li><Link href="/about" className="hover:text-[#D4AF37]">About</Link></li>
                <li><Link href="/music-label" className="hover:text-[#D4AF37]">Music Label</Link></li>
                <li><Link href="/marketing" className="hover:text-[#D4AF37]">Marketing</Link></li>
                <li><Link href="/merchandise" className="hover:text-[#D4AF37]">Merchandise</Link></li>
                <li><Link href="/blog" className="hover:text-[#D4AF37]">Blog</Link></li>
                <li><Link href="/ecommerce" className="hover:text-[#D4AF37]">Shop</Link></li>
                <li><Link href="/contact" className="hover:text-[#D4AF37]">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4 text-[#D4AF37]">Connect With Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="hover:text-[#D4AF37]">Twitter</a>
                <a href="#" className="hover:text-[#D4AF37]">Instagram</a>
                <a href="#" className="hover:text-[#D4AF37]">LinkedIn</a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center">
            <p>&copy; {new Date().getFullYear()} Red Vision Creative Studio. All rights reserved.</p>
            <p className="text-sm text-gray-400 mt-2">
              MUSIC+MARKETING+FASHION+BRANDS+DESIGN+E-COMM+CONTENT+TECH+AI
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default MyApp;
