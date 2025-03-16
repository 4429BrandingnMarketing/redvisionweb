import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function Ecommerce() {
  const [showAiAssistant, setShowAiAssistant] = useState(false);
  const [aiSuggestion, setAiSuggestion] = useState('');
  
  // Mock product data - would be fetched from Printful API in production
  const products = [
    {
      id: 1,
      name: "Red Vision Logo T-Shirt",
      price: 29.99,
      image: "/images/red_vision_logo.png",
      category: "Apparel",
      description: "Premium cotton t-shirt featuring the iconic Red Vision logo. AI-selected design based on current fashion trends and fan preferences."
    },
    {
      id: 2,
      name: "AI Lifestyle Hoodie",
      price: 59.99,
      image: "/images/red_vision_logo.png",
      category: "Apparel",
      description: "Comfortable hoodie with AI-generated design elements that reflect the intersection of music, technology, and lifestyle."
    },
    {
      id: 3,
      name: "Future of Music Cap",
      price: 24.99,
      image: "/images/red_vision_logo.png",
      category: "Accessories",
      description: "Stylish cap featuring AI-enhanced embroidery design, perfect for music enthusiasts embracing the future of the industry."
    },
    {
      id: 4,
      name: "Digital Revolution Poster",
      price: 19.99,
      image: "/images/red_vision_logo.png",
      category: "Art",
      description: "Limited edition poster with AI-generated artwork celebrating the digital revolution in music and lifestyle."
    },
    {
      id: 5,
      name: "Lifestyle Integration Tote",
      price: 34.99,
      image: "/images/red_vision_logo.png",
      category: "Accessories",
      description: "Eco-friendly tote bag with AI-designed pattern representing the integration of music, fashion, and technology."
    },
    {
      id: 6,
      name: "AI Visionary Notebook",
      price: 14.99,
      image: "/images/red_vision_logo.png",
      category: "Accessories",
      description: "Premium notebook with AI-generated cover art, perfect for capturing your creative ideas and visions."
    }
  ];

  // Mock AI suggestions for profit optimization
  const aiSuggestions = [
    "Based on current purchasing patterns, bundling the AI Lifestyle Hoodie with the Future of Music Cap could increase average order value by 15%.",
    "Customer data suggests that visitors who view the Digital Revolution Poster are 3x more likely to purchase when offered a 10% discount.",
    "Trending analysis indicates that featuring the Red Vision Logo T-Shirt more prominently could increase conversion rates by 22%.",
    "Seasonal data suggests launching a limited-time 'AI Summer Collection' next month could generate 30% higher sales.",
    "Cross-promotion analysis shows that customers who purchase merchandise are 4x more likely to engage with music content. Consider adding music samples to product pages."
  ];

  const toggleAiAssistant = () => {
    setShowAiAssistant(!showAiAssistant);
    if (!showAiAssistant) {
      // Randomly select an AI suggestion when opening the assistant
      const randomSuggestion = aiSuggestions[Math.floor(Math.random() * aiSuggestions.length)];
      setAiSuggestion(randomSuggestion);
    }
  };

  return (
    <div className="min-h-screen">
      <Head>
        <title>AI-Enhanced Merchandise | Red Vision Creative Studio</title>
        <meta name="description" content="Shop AI-designed merchandise from the world's first AI-powered lifestyle agency. Printful drop shipping with AI-optimized product selection." />
        <link rel="icon" href="/favicon.ico" />
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
          <nav className="hidden md:flex space-x-8">
            <Link href="/" className="hover:text-[#D4AF37] transition-colors">Home</Link>
            <Link href="/about" className="hover:text-[#D4AF37] transition-colors">About</Link>
            <Link href="/music-label" className="hover:text-[#D4AF37] transition-colors">Music Label</Link>
            <Link href="/marketing" className="hover:text-[#D4AF37] transition-colors">Marketing</Link>
            <Link href="/merchandise" className="hover:text-[#D4AF37] transition-colors">Merchandise</Link>
            <Link href="/blog" className="hover:text-[#D4AF37] transition-colors">Blog</Link>
            <Link href="/ecommerce" className="text-[#D4AF37] transition-colors">Shop</Link>
            <Link href="/contact" className="hover:text-[#D4AF37] transition-colors">Contact</Link>
          </nav>
          <div className="md:hidden">
            <button className="text-white focus:outline-none">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <section className="py-12 md:py-20">
          <h1 className="text-4xl md:text-5xl font-bold text-[#990000] mb-8 text-center">
            AI-Designed Lifestyle Merchandise
          </h1>
          <div className="max-w-4xl mx-auto">
            <p className="text-xl text-center mb-10">
              Shop our collection of AI-enhanced merchandise, designed to authentically extend your lifestyle experience. All products are fulfilled through Printful drop shipping for premium quality and efficient delivery.
            </p>
          </div>
        </section>

        {/* Featured Video */}
        <section className="py-8 bg-gray-100 rounded-lg mb-12">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="section-title text-center mb-8">Featured Collection</h2>
            <div className="aspect-w-16 aspect-h-9 bg-black rounded-lg overflow-hidden">
              {/* This would be replaced with an actual video component in production */}
              <div className="w-full h-96 bg-gray-800 flex items-center justify-center text-white">
                <div className="text-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-20 w-20 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <p className="text-xl">Spring 2025 Collection Promo Video</p>
                  <p className="text-sm text-gray-400 mt-2">AI-curated styles that define the future of lifestyle fashion</p>
                </div>
              </div>
            </div>
            <p className="text-center mt-4 text-gray-600">
              Our latest collection features AI-designed patterns and styles based on emerging lifestyle trends
            </p>
          </div>
        </section>

        {/* AI Profit Assistant */}
        <div className="fixed bottom-8 right-8 z-50">
          <button 
            onClick={toggleAiAssistant}
            className="bg-[#990000] text-white rounded-full w-16 h-16 flex items-center justify-center shadow-lg hover:bg-[#800000] transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
            </svg>
          </button>
          
          {showAiAssistant && (
            <div className="absolute bottom-20 right-0 w-80 bg-white rounded-lg shadow-xl p-4 border border-gray-200">
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-bold text-[#990000]">AI Profit Optimizer</h3>
                <button onClick={toggleAiAssistant} className="text-gray-500 hover:text-gray-700">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <div className="mb-4">
                <p className="text-sm">{aiSuggestion}</p>
              </div>
              <div className="flex justify-between">
                <button className="text-sm text-[#990000] hover:underline">Get More Insights</button>
                <button className="text-sm text-[#990000] hover:underline">Apply Suggestion</button>
              </div>
            </div>
          )}
        </div>

        {/* Products Grid */}
        <section className="py-12">
          <div className="max-w-6xl mx-auto">
            <h2 className="section-title text-center mb-12">Shop Our AI-Enhanced Collection</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.map(product => (
                <div key={product.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
                  <div className="bg-gray-200 h-64 flex items-center justify-center">
                    <Image 
                      src={product.image} 
                      alt={product.name} 
                      width={200} 
                      height={200} 
                      className="object-contain h-48"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-xl font-bold text-[#990000]">{product.name}</h3>
                      <span className="font-bold">${product.price}</span>
                    </div>
                    <p className="text-sm text-gray-500 mb-2">{product.category}</p>
                    <p className="mb-4">{product.description}</p>
                    <div className="flex space-x-2">
                      <button className="btn-primary flex-grow">Add to Cart</button>
                      <button className="btn-accent">Quick View</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* AI Shopping Experience */}
        <section className="py-12 bg-gray-100 rounded-lg">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="section-title text-center">AI-Enhanced Shopping Experience</h2>
            <p className="text-lg mb-10 text-center">
              How our AI systems enhance your shopping experience
            </p>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="card text-center">
                <div className="bg-[#990000] text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2 text-[#990000]">Personalized Recommendations</h3>
                <p>
                  Our AI analyzes your preferences and browsing behavior to suggest products that align with your unique lifestyle aesthetic.
                </p>
              </div>
              
              <div className="card text-center">
                <div className="bg-[#990000] text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2 text-[#990000]">Trend-Informed Design</h3>
                <p>
                  Products are designed using AI analysis of emerging fashion and lifestyle trends, ensuring you're always ahead of the curve.
                </p>
              </div>
              
              <div className="card text-center">
                <div className="bg-[#990000] text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2 text-[#990000]">Seamless Integration</h3>
                <p>
                  Our Printful drop shipping integration ensures high-quality production and efficient delivery while our AI optimizes the entire process.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Newsletter */}
        <section className="py-12">
          <div className="max-w-3xl mx-auto">
            <div className="bg-[#990000] text-white p-8 rounded-lg text-center">
              <h2 className="text-3xl font-bold mb-4">Get Early Access to New Drops</h2>
              <p className="text-lg mb-6">
                Subscribe to receive AI-curated product recommendations and early access to limited-edition merchandise drops.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="px-4 py-2 rounded-lg flex-grow text-gray-800"
                />
                <button className="btn-accent whitespace-nowrap">Subscribe Now</button>
              </div>
            </div>
          </div>
        </section>
      </main>

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
    </div>
  );
}
