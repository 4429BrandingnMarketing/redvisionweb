import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

export default function Blog() {
  return (
    <div className="min-h-screen">
      <Head>
        <title>A Tragic Mulatto | Red Vision Creative Studio</title>
        <meta name="description" content="A Tragic Mulatto - AI-enhanced perspectives on music, culture, technology, and lifestyle from the world's first AI-powered lifestyle agency" />
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
            <Link href="/blog" className="text-[#D4AF37] transition-colors">Blog</Link>
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
            A Tragic Mulatto
          </h1>
          <div className="max-w-4xl mx-auto">
            <p className="text-xl text-center mb-10">
              AI-enhanced perspectives on music, culture, technology, and lifestyle at the intersection of creativity and innovation, powered by our integrated lifestyle intelligence.
            </p>
          </div>
        </section>

        {/* Featured Article */}
        <section className="py-12 bg-gray-100 rounded-lg">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="section-title text-center">Featured Article</h2>
            
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="bg-gray-200 h-64 flex items-center justify-center">
                <span className="text-4xl text-gray-400">Featured Image</span>
              </div>
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <span className="bg-[#990000] text-white text-xs px-2 py-1 rounded-full mr-2">AI & Lifestyle</span>
                  <span className="text-gray-500 text-sm">March 10, 2025</span>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-[#990000]">The Rise of AI-Powered Lifestyle Agencies: A New Paradigm</h3>
                <p className="text-lg mb-6">
                  As artificial intelligence continues to transform industries across the globe, we're witnessing the emergence of an entirely new category: the AI-powered lifestyle agency. This revolutionary approach integrates AI across music, marketing, merchandise, and content creation to deliver unprecedented value and authentic experiences.
                </p>
                <p className="text-lg mb-6">
                  In this in-depth exploration, we examine how AI is being integrated across lifestyle domains, how creators and audiences are responding to these new capabilities, and what this means for the future of entertainment, fashion, and culture as a whole.
                </p>
                <button className="btn-primary">Read Full Article</button>
              </div>
            </div>
          </div>
        </section>

        {/* Latest Articles */}
        <section className="py-12">
          <div className="max-w-4xl mx-auto">
            <h2 className="section-title text-center">Latest Articles</h2>
            <div className="grid md:grid-cols-2 gap-8 mt-8">
              <div className="card">
                <div className="bg-gray-200 h-48 rounded-lg mb-4 flex items-center justify-center">
                  <span className="text-2xl text-gray-400">Article Image</span>
                </div>
                <div className="flex items-center mb-2">
                  <span className="bg-[#990000] text-white text-xs px-2 py-1 rounded-full mr-2">Lifestyle Trends</span>
                  <span className="text-gray-500 text-sm">February 28, 2025</span>
                </div>
                <h3 className="text-xl font-bold mb-2 text-[#990000]">Emerging Artists Shaping Lifestyle Culture in 2025</h3>
                <p className="mb-4">
                  Our AI-powered cross-domain analysis reveals the next generation of artists who are influencing not just music, but fashion, content, and broader cultural movements.
                </p>
                <a href="#" className="text-[#D4AF37] hover:underline">Read More</a>
              </div>
              
              <div className="card">
                <div className="bg-gray-200 h-48 rounded-lg mb-4 flex items-center justify-center">
                  <span className="text-2xl text-gray-400">Article Image</span>
                </div>
                <div className="flex items-center mb-2">
                  <span className="bg-[#990000] text-white text-xs px-2 py-1 rounded-full mr-2">Industry Evolution</span>
                  <span className="text-gray-500 text-sm">February 15, 2025</span>
                </div>
                <h3 className="text-xl font-bold mb-2 text-[#990000]">The Evolution of Entertainment Companies</h3>
                <p className="mb-4">
                  From traditional models to AI-driven lifestyle agencies: how forward-thinking companies are adapting to survive and thrive in the integrated experience economy.
                </p>
                <a href="#" className="text-[#D4AF37] hover:underline">Read More</a>
              </div>
              
              <div className="card">
                <div className="bg-gray-200 h-48 rounded-lg mb-4 flex items-center justify-center">
                  <span className="text-2xl text-gray-400">Article Image</span>
                </div>
                <div className="flex items-center mb-2">
                  <span className="bg-[#990000] text-white text-xs px-2 py-1 rounded-full mr-2">AI Ethics</span>
                  <span className="text-gray-500 text-sm">February 5, 2025</span>
                </div>
                <h3 className="text-xl font-bold mb-2 text-[#990000]">Responsible AI in Lifestyle Creation</h3>
                <p className="mb-4">
                  As AI becomes increasingly integrated into creative processes, the industry faces important questions about authenticity, attribution, and ethical development.
                </p>
                <a href="#" className="text-[#D4AF37] hover:underline">Read More</a>
              </div>
              
              <div className="card">
                <div className="bg-gray-200 h-48 rounded-lg mb-4 flex items-center justify-center">
                  <span className="text-2xl text-gray-400">Article Image</span>
                </div>
                <div className="flex items-center mb-2">
                  <span className="bg-[#990000] text-white text-xs px-2 py-1 rounded-full mr-2">Lifestyle Integration</span>
                  <span className="text-gray-500 text-sm">January 22, 2025</span>
                </div>
                <h3 className="text-xl font-bold mb-2 text-[#990000]">Physical Experiences in a Digital World</h3>
                <p className="mb-4">
                  Exploring the paradoxical growth of tangible lifestyle elements in an era dominated by digital consumption and how AI is bridging these worlds.
                </p>
                <a href="#" className="text-[#D4AF37] hover:underline">Read More</a>
              </div>
            </div>
            
            <div className="text-center mt-10">
              <button className="btn-primary">View All Articles</button>
            </div>
          </div>
        </section>

        {/* Categories */}
        <section className="py-12 bg-gray-100 rounded-lg">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="section-title text-center">Lifestyle Categories</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
              <a href="#" className="bg-white rounded-lg p-4 text-center shadow hover:shadow-lg transition-all">
                <h3 className="text-lg font-bold text-[#990000]">AI & Lifestyle</h3>
                <p className="text-sm text-gray-500">14 Articles</p>
              </a>
              
              <a href="#" className="bg-white rounded-lg p-4 text-center shadow hover:shadow-lg transition-all">
                <h3 className="text-lg font-bold text-[#990000]">Trend Forecasting</h3>
                <p className="text-sm text-gray-500">9 Articles</p>
              </a>
              
              <a href="#" className="bg-white rounded-lg p-4 text-center shadow hover:shadow-lg transition-all">
                <h3 className="text-lg font-bold text-[#990000]">Creator Spotlights</h3>
                <p className="text-sm text-gray-500">15 Articles</p>
              </a>
              
              <a href="#" className="bg-white rounded-lg p-4 text-center shadow hover:shadow-lg transition-all">
                <h3 className="text-lg font-bold text-[#990000]">Technology</h3>
                <p className="text-sm text-gray-500">11 Articles</p>
              </a>
              
              <a href="#" className="bg-white rounded-lg p-4 text-center shadow hover:shadow-lg transition-all">
                <h3 className="text-lg font-bold text-[#990000]">Industry Evolution</h3>
                <p className="text-sm text-gray-500">8 Articles</p>
              </a>
              
              <a href="#" className="bg-white rounded-lg p-4 text-center shadow hover:shadow-lg transition-all">
                <h3 className="text-lg font-bold text-[#990000]">Culture & Society</h3>
                <p className="text-sm text-gray-500">10 Articles</p>
              </a>
              
              <a href="#" className="bg-white rounded-lg p-4 text-center shadow hover:shadow-lg transition-all">
                <h3 className="text-lg font-bold text-[#990000]">Creative Process</h3>
                <p className="text-sm text-gray-500">12 Articles</p>
              </a>
              
              <a href="#" className="bg-white rounded-lg p-4 text-center shadow hover:shadow-lg transition-all">
                <h3 className="text-lg font-bold text-[#990000]">Lifestyle Marketing</h3>
                <p className="text-sm text-gray-500">7 Articles</p>
              </a>
            </div>
          </div>
        </section>

        {/* AI Content Creation */}
        <section className="py-12">
          <div className="max-w-4xl mx-auto">
            <h2 className="section-title text-center">Our AI-Enhanced Content Approach</h2>
            <p className="text-lg mb-8 text-center">
              How we leverage artificial intelligence to create thought-provoking content while maintaining authentic human perspectives
            </p>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="card text-center">
                <div className="bg-[#990000] text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">1</span>
                </div>
                <h3 className="text-xl font-bold mb-2 text-[#990000]">Trend Identification</h3>
                <p>
                  Our AI systems analyze vast amounts of data across music, fashion, technology, and culture to identify emerging trends and topics worthy of exploration.
                </p>
              </div>
              
              <div className="card text-center">
                <div className="bg-[#990000] text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">2</span>
                </div>
                <h3 className="text-xl font-bold mb-2 text-[#990000]">Human-AI Collaboration</h3>
                <p>
                  Our writers collaborate with AI to research, outline, and refine articles, combining human creativity and perspective with AI's analytical capabilities.
                </p>
              </div>
              
              <div className="card text-center">
                <div className="bg-[#990000] text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">3</span>
                </div>
                <h3 className="text-xl font-bold mb-2 text-[#990000]">Cross-Domain Insights</h3>
                <p>
                  Our integrated AI ecosystem identifies connections between different lifestyle domains, enabling unique perspectives that traditional analysis might miss.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Newsletter */}
        <section className="py-12">
          <div className="max-w-3xl mx-auto">
            <div className="bg-[#990000] text-white p-8 rounded-lg text-center">
              <h2 className="text-3xl font-bold mb-4">Subscribe to Our Lifestyle Intelligence</h2>
              <p className="text-lg mb-6">
                Stay updated with the latest insights on AI, music, fashion, and the future of lifestyle. No spam, just valuable content delivered to your inbox, curated by our AI-human collaboration team.
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

        {/* Contribute */}
        <section className="py-12 bg-gray-100 rounded-lg">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="section-title text-center">Contribute to A Tragic Mulatto</h2>
            <p className="text-lg mb-8 text-center">
              We welcome thought leaders, artists, and innovators to share their perspectives on the evolving lifestyle landscape
            </p>
            
            <div className="text-center">
              <p className="text-lg mb-6">
                If you have insights on the intersection of AI, creativity, and lifestyle, we'd love to hear from you. Our AI-human editorial team reviews all submissions and works with selected contributors to refine and publish their ideas.
              </p>
              <Link href="/contact">
                <button className="btn-primary">Contact Our Editorial Team</button>
              </Link>
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
