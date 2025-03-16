import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

export default function MusicLabel() {
  return (
    <div className="min-h-screen">
      <Head>
        <title>AI-Powered Music Label | Red Vision Creative Studio</title>
        <meta name="description" content="Red Vision Music - AI-powered record label revolutionizing artist discovery, production, and promotion as part of the first AI-powered lifestyle agency" />
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
            <Link href="/music-label" className="text-[#D4AF37] transition-colors">Music Label</Link>
            <Link href="/marketing" className="hover:text-[#D4AF37] transition-colors">Marketing</Link>
            <Link href="/merchandise" className="hover:text-[#D4AF37] transition-colors">Merchandise</Link>
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
          <h1 className="text-4xl md:text-5xl font-bold text-[#990000] mb-8 text-center">
            AI-Powered Record Label
          </h1>
          <div className="max-w-4xl mx-auto">
            <p className="text-xl text-center mb-10">
              Revolutionizing how music is discovered, produced, and promoted through cutting-edge artificial intelligence within our integrated lifestyle ecosystem.
            </p>
          </div>
        </section>

        {/* Our Approach */}
        <section className="py-12 bg-gray-100 rounded-lg">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="section-title text-center">Our AI-Powered Approach</h2>
            <p className="text-lg mb-10 text-center">
              Red Vision Music combines traditional industry expertise with AI-powered innovation to create a new paradigm for the music industry as part of the world's first AI-powered lifestyle agency.
            </p>
            
            <div className="grid md:grid-cols-2 gap-10">
              <div className="card">
                <h3 className="text-xl font-bold mb-4 text-[#990000]">AI-Driven Talent Discovery</h3>
                <p className="mb-4">
                  Our proprietary AI systems analyze vast amounts of data from streaming platforms, social media, and cultural trends to identify emerging artists and musical movements before they break mainstream.
                </p>
                <p>
                  By leveraging machine learning algorithms that continuously improve through our integrated lifestyle data network, we can predict which artists are gaining momentum and have the potential for significant growth, allowing us to discover talent earlier and more efficiently than traditional methods.
                </p>
              </div>
              
              <div className="card">
                <h3 className="text-xl font-bold mb-4 text-[#990000]">AI-Enhanced Production</h3>
                <p className="mb-4">
                  We provide artists with access to cutting-edge AI tools that assist in the production process, from composition and arrangement to mixing and mastering, all integrated with our cross-division intelligence network.
                </p>
                <p>
                  These tools don't replace human creativity—they enhance it, allowing artists to explore new sounds, refine their work, and achieve professional-quality results more efficiently while maintaining their authentic artistic voice.
                </p>
              </div>
              
              <div className="card">
                <h3 className="text-xl font-bold mb-4 text-[#990000]">Lifestyle-Integrated Marketing</h3>
                <p className="mb-4">
                  Our AI systems analyze audience demographics, listening habits, lifestyle preferences, and engagement patterns to create highly targeted marketing campaigns that connect artists with their ideal audiences across multiple lifestyle touchpoints.
                </p>
                <p>
                  This integrated approach ensures that marketing resources are allocated efficiently, maximizing impact and return on investment while helping artists build genuine connections with fans through a cohesive lifestyle experience.
                </p>
              </div>
              
              <div className="card">
                <h3 className="text-xl font-bold mb-4 text-[#990000]">Optimized Distribution & Lifestyle Integration</h3>
                <p className="mb-4">
                  We use AI to analyze market trends and platform algorithms to determine the optimal release strategy for each artist and track, while simultaneously identifying lifestyle integration opportunities across fashion, content, and brand partnerships.
                </p>
                <p>
                  From release timing and platform selection to merchandise drops and content collaborations, our data-driven approach maximizes visibility, engagement, and revenue across the entire lifestyle ecosystem.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Artist Benefits */}
        <section className="py-12">
          <div className="max-w-4xl mx-auto">
            <h2 className="section-title text-center">Benefits for Artists</h2>
            <div className="space-y-8 mt-8">
              <div className="flex items-start space-x-4">
                <div className="bg-[#990000] text-white rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0">1</div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Comprehensive Lifestyle Strategy</h3>
                  <p className="text-lg">
                    Access to our integrated AI ecosystem that optimizes not just your music, but your entire artistic lifestyle brand across music, marketing, merchandise, and content creation.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-[#990000] text-white rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0">2</div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Enhanced Creative Tools</h3>
                  <p className="text-lg">
                    Access to cutting-edge AI production tools that expand your creative possibilities while maintaining your unique artistic voice, supported by our AI executive team that continuously learns your preferences and style.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-[#990000] text-white rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0">3</div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Targeted Audience Building</h3>
                  <p className="text-lg">
                    Precision marketing that connects your music with listeners most likely to become dedicated fans, creating a sustainable career foundation through our lifestyle data integration that identifies authentic connection points.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-[#990000] text-white rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0">4</div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Integrated Lifestyle Ecosystem</h3>
                  <p className="text-lg">
                    Seamless connection to our AI marketing, merchandise, and content divisions, creating multiple revenue streams and brand-building opportunities that reinforce each other through our cross-division intelligence network.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-[#990000] text-white rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0">5</div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Fair, Transparent Partnerships</h3>
                  <p className="text-lg">
                    Artist-friendly agreements with clear terms, transparent reporting, and equitable revenue sharing that respects your creative ownership while providing access to our revolutionary AI-powered lifestyle agency resources.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Success Stories */}
        <section className="py-12 bg-gray-100 rounded-lg">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="section-title text-center">Future Success Stories</h2>
            <p className="text-lg mb-10 text-center">
              While we're just beginning our journey as the world's first AI-powered lifestyle agency, here's how our integrated approach will transform artists' careers.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="card">
                <h3 className="text-xl font-bold mb-2 text-[#990000]">Case Study: Lifestyle-Integrated Artist Launch</h3>
                <p className="text-sm text-gray-500 mb-4">Future Success</p>
                <p>
                  Our AI systems will identify emerging artists months before traditional industry metrics, allowing us to develop a comprehensive lifestyle strategy that launches their music, merchandise, and content simultaneously for maximum impact and audience connection.
                </p>
              </div>
              
              <div className="card">
                <h3 className="text-xl font-bold mb-2 text-[#990000]">Case Study: AI-Enhanced Creative Development</h3>
                <p className="text-sm text-gray-500 mb-4">Future Success</p>
                <p>
                  Artists will use our AI tools to explore new sounds and production techniques while our lifestyle data integration identifies authentic brand extension opportunities, resulting in breakthrough tracks and merchandise that maintain their unique artistic voice while reaching new creative and commercial heights.
                </p>
              </div>
              
              <div className="card">
                <h3 className="text-xl font-bold mb-2 text-[#990000]">Case Study: Cross-Division Audience Building</h3>
                <p className="text-sm text-gray-500 mb-4">Future Success</p>
                <p>
                  Our integrated approach will connect artists with their ideal audience segments across music, fashion, and content, resulting in higher engagement rates, more efficient fan acquisition, and stronger lifestyle brand development that creates multiple revenue streams.
                </p>
              </div>
              
              <div className="card">
                <h3 className="text-xl font-bold mb-2 text-[#990000]">Case Study: Lifestyle Trend Anticipation</h3>
                <p className="text-sm text-gray-500 mb-4">Future Success</p>
                <p>
                  By analyzing platform algorithms, listener behavior, and lifestyle trends, our AI will identify emerging cultural movements before they break mainstream, allowing our artists to authentically position themselves at the forefront of these trends across music, fashion, and content.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Join Us CTA */}
        <section className="py-16 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-[#990000]">Ready to Revolutionize Your Music Career?</h2>
            <p className="text-xl mb-8">
              Join Red Vision Music and become part of the world's first AI-powered lifestyle agency. Together, we'll create a new paradigm for success in the music industry that extends beyond streaming to build a comprehensive lifestyle brand.
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
