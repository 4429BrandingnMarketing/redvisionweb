// Add this to your _app.js or create a new component to include in your layout
import Link from 'next/link';

export default function Navigation() {
  return (
    <nav className="hidden md:flex space-x-8">
      <Link href="/" className="hover:text-[#D4AF37] transition-colors">Home</Link>
      <Link href="/about" className="hover:text-[#D4AF37] transition-colors">About</Link>
      <Link href="/music-label" className="hover:text-[#D4AF37] transition-colors">Music Label</Link>
      <Link href="/marketing" className="hover:text-[#D4AF37] transition-colors">Marketing</Link>
      <Link href="/merchandise" className="hover:text-[#D4AF37] transition-colors">Merchandise</Link>
      <Link href="/blog" className="hover:text-[#D4AF37] transition-colors">Blog</Link>
      <Link href="/ecommerce" className="hover:text-[#D4AF37] transition-colors">Shop</Link>
      <Link href="/contact" className="hover:text-[#D4AF37] transition-colors">Contact</Link>
    </nav>
  );
}
