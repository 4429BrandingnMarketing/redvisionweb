import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

export default function Merchandise() {
  return (
    <div className="min-h-screen">
      <Head>
        <title>AI-Designed Merchandise | Red Vision Creative Studio</title>
        <meta name="description" content="GiFTD n' PrVLGD Co. - AI-designed merchandise and fashion as part of the first AI-powered lifestyle agency" />
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
            <Link href="/merchandise" className="text-[#D4AF37] transition-colors">Merchandise</Link>
            <Link href="/blog" className="hover:text-[#D4AF37] transition-colors">Blog</Link>
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
          <div className="flex flex-col items-center justify-center mb-8">
            <Image 
              src="/images/giftd_logo.jpg" 
              alt="GiFTD n' PRVLGD Co." 
              width={300} 
              height={150} 
              className="mb-6"
            />
            <h1 className="text-4xl md:text-5xl font-bold text-[#990000] text-center">
              GiFTD n' PrVLGD Co.
            </h1>
          </div>
          <div className="max-w-4xl mx-auto">
            <p className="text-xl text-center mb-10">
              AI-designed merchandise that connects artists with fans through innovative fashion and products, integrated within our comprehensive lifestyle ecosystem.
            </p>
          </div>
        </section>

        {/* Our Approach */}
        <section className="py-12 bg-gray-100 rounded-lg">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="section-title text-center">AI-Enhanced Lifestyle Merchandise</h2>
            <p className="text-lg mb-10 text-center">
              As part of the world's first AI-powered lifestyle agency, we leverage artificial intelligence to revolutionize how artist and brand merchandise is designed, produced, and integrated into the broader lifestyle experience.
            </p>
            
            <div className="grid md:grid-cols-2 gap-10">
              <div className="card">
                <h3 className="text-xl font-bold mb-4 text-[#990000]">AI-Driven Design Collaboration</h3>
                <p className="mb-4">
                  Our AI systems analyze visual trends, artist aesthetics, fan preferences, and cross-domain lifestyle data to generate innovative design concepts that resonate with audiences on multiple levels.
                </p>
                <p>
                  This collaborative approach between human designers and AI allows us to create merchandise that feels authentic to the artist while incorporating cutting-edge design elements that connect with broader lifestyle trends.
                </p>
              </div>
              
              <div className="card">
                <h3 className="text-xl font-bold mb-4 text-[#990000]">Lifestyle-Integrated Demand Prediction</h3>
                <p className="mb-4">
                  We use our cross-division AI to analyze purchasing patterns, social media engagement, music consumption data, and cultural trends to predict demand for different merchandise items within the lifestyle context.
                </p>
                <p>
                  This integrated approach minimizes waste, optimizes inventory, and ensures that fans can access products that authentically extend their connection with artists across multiple lifestyle touchpoints.
                </p>
              </div>
              
              <div className="card">
                <h3 className="text-xl font-bold mb-4 text-[#990000]">Sustainable Production Innovation</h3>
                <p className="mb-4">
                  Our AI helps identify eco-friendly materials and production methods that align with artist values and fan expectations while continuously learning from performance data to improve sustainability metrics.
                </p>
                <p>
                  By optimizing production processes and sourcing sustainable materials, we create merchandise that fans can feel good about purchasing and wearing, enhancing the lifestyle value proposition beyond mere products.
                </p>
              </div>
              
              <div className="card">
                <h3 className="text-xl font-bold mb-4 text-[#990000]">Personalized Lifestyle Experiences</h3>
                <p className="mb-4">
                  We leverage our integrated AI ecosystem to create personalized shopping experiences that connect fans more deeply with artists through merchandise that reflects their unique lifestyle preferences.
                </p>
                <p>
                  From custom product recommendations to limited-edition drops based on cross-domain engagement data, our approach turns merchandise into a meaningful extension of the artist-fan relationship within the broader lifestyle context.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Product Categories */}
        <section className="py-12">
          <div className="max-w-4xl mx-auto">
            <h2 className="section-title text-center">Lifestyle Product Categories</h2>
            <div className="grid md:grid-cols-3 gap-8 mt-8">
              <div className="card text-center">
                <div className="bg-gray-200 h-48 rounded-lg mb-4 flex items-center justify-center">
                  <span className="text-4xl text-gray-400">👕</span>
                </div>
                <h3 className="text-xl font-bold mb-2 text-[#990000]">Lifestyle Apparel</h3>
                <p>
                  T-shirts, hoodies, jackets, and more, featuring AI-enhanced designs that capture artist aesthetics and integrate with broader lifestyle trends identified by our cross-domain intelligence.
                </p>
              </div>
              
              <div className="card text-center">
                <div className="bg-gray-200 h-48 rounded-lg mb-4 flex items-center justify-center">
                  <span className="text-4xl text-gray-400">🎧</span>
                </div>
                <h3 className="text-xl font-bold mb-2 text-[#990000]">Lifestyle Accessories</h3>
                <p>
                  Hats, bags, phone cases, and other accessories that complement the artist's brand and extend their creative expression into daily lifestyle touchpoints for fans.
                </p>
              </div>
              
              <div className="card text-center">
                <div className="bg-gray-200 h-48 rounded-lg mb-4 flex items-center justify-center">
                  <span className="text-4xl text-gray-400">🖼️</span>
                </div>
                <h3 className="text-xl font-bold mb-2 text-[#990000]">Collectible Experiences</h3>
                <p>
                  Limited-edition prints, vinyl, and other collectible items that create unique value for dedicated fans while serving as physical anchors for digital lifestyle experiences.
                </p>
              </div>
              
              <div className="card text-center">
                <div className="bg-gray-200 h-48 rounded-lg mb-4 flex items-center justify-center">
                  <span className="text-4xl text-gray-400">💎</span>
                </div>
                <h3 className="text-xl font-bold mb-2 text-[#990000]">Premium Lifestyle Items</h3>
                <p>
                  High-end merchandise for lifestyle enthusiasts, including custom jackets, premium materials, and exclusive designs that represent the pinnacle of artist-inspired fashion.
                </p>
              </div>
              
              <div className="card text-center">
                <div className="bg-gray-200 h-48 rounded-lg mb-4 flex items-center justify-center">
                  <span className="text-4xl text-gray-400">🌱</span>
                </div>
                <h3 className="text-xl font-bold mb-2 text-[#990000]">Sustainable Lifestyle Collection</h3>
                <p>
                  Eco-conscious merchandise made from recycled materials and produced using environmentally responsible methods, identified and optimized by our AI systems.
                </p>
              </div>
              
              <div className="card text-center">
                <div className="bg-gray-200 h-48 rounded-lg mb-4 flex items-center justify-center">
                  <span className="text-4xl text-gray-400">🎁</span>
                </div>
                <h3 className="text-xl font-bold mb-2 text-[#990000]">Lifestyle Integration Pieces</h3>
                <p>
                  Bespoke merchandise items created specifically for lifestyle moments, including special events, releases, or fan milestones identified through our cross-domain data analysis.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Artist Benefits */}
        <section className="py-12 bg-gray-100 rounded-lg">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="section-title text-center">Benefits for Artists & Brands</h2>
            <div className="space-y-6 mt-8">
              <div className="flex items-center space-x-4 bg-white p-4 rounded-lg shadow">
                <div className="bg-[#990000] text-white rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#990000]">Integrated Revenue Stream</h3>
                  <p>Create a significant additional income source that's strategically aligned with your music, marketing, and content through our AI-powered lifestyle integration approach.</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4 bg-white p-4 rounded-lg shadow">
                <div className="bg-[#990000] text-white rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#990000]">Lifestyle Brand Reinforcement</h3>
                  <p>Strengthen your artistic identity through cohesive, high-quality merchandise that extends your brand into the physical world while maintaining consistency across all lifestyle touchpoints.</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4 bg-white p-4 rounded-lg shadow">
                <div className="bg-[#990000] text-white rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#990000]">Enhanced Fan Connection</h3>
                  <p>Create deeper relationships with fans by offering merchandise that serves as physical touchpoints in an increasingly digital world, identified through our cross-domain audience analysis.</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4 bg-white p-4 rounded-lg shadow">
                <div className="bg-[#990000] text-white rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#990000]">AI-Powered Innovation</h3>
                  <p>Access cutting-edge design and production capabilities that leverage our AI systems to identify emerging trends and create merchandise that positions you at the forefront of lifestyle fashion.</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4 bg-white p-4 rounded-lg shadow">
                <div className="bg-[#990000] text-white rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#990000]">Integrated Growth Strategy</h3>
                  <p>Benefit from our cross-division intelligence that ensures your merchandise strategy complements and enhances your music, marketing, and content initiatives within a cohesive lifestyle approach.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Future Vision */}
        <section className="py-12">
          <div className="max-w-4xl mx-auto">
            <h2 className="section-title text-center">Future Merchandise Innovations</h2>
            <p className="text-lg mb-8 text-center">
              As part of the world's first AI-powered lifestyle agency, we're constantly exploring new frontiers in merchandise and fashion.
            </p>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="card">
                <h3 className="text-xl font-bold mb-2 text-[#990000]">AI-Generated Custom Designs</h3>
                <p>
                  Our next-generation AI will create personalized merchandise designs based on individual fan preferences, listening history, and lifestyle data, allowing for mass customization at scale.
                </p>
              </div>
              <div className="card">
                <h3 className="text-xl font-bold mb-2 text-[#990000]">Integrated Digital-Physical Products</h3>
                <p>
                  We're developing merchandise that bridges the digital and physical worlds, creating items that serve as access points to exclusive digital experiences and content.
                </p>
              </div>
              <div className="card">
                <h3 className="text-xl font-bold mb-2 text-[#990000]">Adaptive Production Systems</h3>
                <p>
                  Our AI is evolving to enable just-in-time production that responds to real-time demand signals, reducing waste while ensuring fans can always access the merchandise they want.
                </p>
              </div>
              <div className="card">
                <h3 className="text-xl font-bold mb-2 text-[#990000]">Cross-Domain Lifestyle Collections</h3>
                <p>
                  We're pioneering merchandise collections that span multiple lifestyle domains, creating cohesive experiences that integrate music, fashion, content, and technology.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-[#990000]">Ready to Revolutionize Your Merchandise Strategy?</h2>
            <p className="text-xl mb-8">
              Join GiFTD n' PrVLGD Co. and become part of the world's first AI-powered lifestyle agency. Together, we'll create innovative merchandise that authentically extends your brand into the physical world while enhancing your overall lifestyle strategy.
            </p>
            <Link href="/contact">
              <button className="btn-primary">Contact Us Today</button>
            </Link>
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
