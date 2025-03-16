import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

export default function Marketing() {
  return (
    <div className="min-h-screen">
      <Head>
        <title>AI Marketing & Branding | Red Vision Creative Studio</title>
        <meta name="description" content="#4429 Lifestyle + Marketing & Brands - AI-powered marketing and branding services as part of the first AI-powered lifestyle agency" />
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
            <Link href="/marketing" className="text-[#D4AF37] transition-colors">Marketing</Link>
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
          <div className="flex flex-col items-center justify-center mb-8">
            <Image 
              src="/images/Screenshot 2025-03-14 at 6.39.39 AM.png" 
              alt="#4429 Lifestyle + Marketing & Brands" 
              width={300} 
              height={300} 
              className="mb-6"
            />
            <h1 className="text-4xl md:text-5xl font-bold text-[#990000] text-center">
              #4429 Lifestyle + Marketing & Brands
            </h1>
          </div>
          <div className="max-w-4xl mx-auto">
            <p className="text-xl text-center mb-10">
              AI-powered lifestyle marketing strategies that create authentic connections between artists, brands, and audiences within our integrated ecosystem.
            </p>
          </div>
        </section>

        {/* Our Approach */}
        <section className="py-12 bg-gray-100 rounded-lg">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="section-title text-center">AI-Powered Lifestyle Marketing</h2>
            <p className="text-lg mb-10 text-center">
              As part of the world's first AI-powered lifestyle agency, we leverage artificial intelligence to transform how artists and brands connect with audiences across all lifestyle touchpoints.
            </p>
            
            <div className="grid md:grid-cols-2 gap-10">
              <div className="card">
                <h3 className="text-xl font-bold mb-4 text-[#990000]">Lifestyle Data Integration</h3>
                <p className="mb-4">
                  Our AI systems collect and analyze lifestyle data across music preferences, fashion choices, content consumption, and brand affinities to create comprehensive profiles that inform all marketing strategies.
                </p>
                <p>
                  This holistic understanding allows us to develop more authentic and effective approaches that resonate across multiple lifestyle dimensions simultaneously.
                </p>
              </div>
              
              <div className="card">
                <h3 className="text-xl font-bold mb-4 text-[#990000]">Cross-Domain Content Strategy</h3>
                <p className="mb-4">
                  We use AI to analyze trending topics, engagement patterns, and platform algorithms across music, fashion, and content domains to develop integrated strategies that maximize visibility and engagement.
                </p>
                <p>
                  From social media calendars to video concepts, our data-driven approach ensures that every piece of content serves a strategic purpose within the broader lifestyle ecosystem.
                </p>
              </div>
              
              <div className="card">
                <h3 className="text-xl font-bold mb-4 text-[#990000]">Adaptive Campaign Optimization</h3>
                <p className="mb-4">
                  Our AI continuously monitors campaign performance across all channels and lifestyle touchpoints, making real-time adjustments to targeting, messaging, and budget allocation to maximize results.
                </p>
                <p>
                  This adaptive approach ensures that marketing resources are used efficiently and ROI is continuously improved while maintaining a cohesive lifestyle narrative.
                </p>
              </div>
              
              <div className="card">
                <h3 className="text-xl font-bold mb-4 text-[#990000]">Integrated Lifestyle Analytics</h3>
                <p className="mb-4">
                  We provide comprehensive analytics that go beyond basic metrics to deliver actionable insights about audience lifestyle patterns, cross-domain content performance, and emerging cultural trends.
                </p>
                <p>
                  These insights inform not just marketing decisions but broader strategic planning for artists and brands seeking to authentically position themselves within the lifestyle landscape.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="py-12">
          <div className="max-w-4xl mx-auto">
            <h2 className="section-title text-center">Our Lifestyle Marketing Services</h2>
            <div className="space-y-8 mt-8">
              <div className="card border-l-4 border-[#990000] pl-6">
                <h3 className="text-xl font-bold mb-2 text-[#990000]">Lifestyle Brand Development</h3>
                <p className="text-lg mb-4">
                  We create cohesive lifestyle brand identities that span music, fashion, content, and experiences, resonating with target audiences across all touchpoints.
                </p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>AI-enhanced lifestyle positioning strategy</li>
                  <li>Cross-domain visual identity development</li>
                  <li>Integrated brand voice and messaging guidelines</li>
                  <li>Authentic lifestyle narrative creation</li>
                </ul>
              </div>
              
              <div className="card border-l-4 border-[#990000] pl-6">
                <h3 className="text-xl font-bold mb-2 text-[#990000]">Integrated Digital Marketing</h3>
                <p className="text-lg mb-4">
                  We leverage our AI ecosystem to create and optimize digital marketing campaigns that create a seamless lifestyle experience across multiple platforms.
                </p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Cross-platform lifestyle content strategy</li>
                  <li>AI-generated and human-refined content creation</li>
                  <li>Lifestyle-targeted paid advertising campaigns</li>
                  <li>Automated marketing with human oversight</li>
                  <li>Authentic influencer partnership matching</li>
                </ul>
              </div>
              
              <div className="card border-l-4 border-[#990000] pl-6">
                <h3 className="text-xl font-bold mb-2 text-[#990000]">Lifestyle Integration for Artists</h3>
                <p className="text-lg mb-4">
                  We develop comprehensive lifestyle strategies for artists that extend beyond music to fashion, content, and experiences, creating multiple connection points with audiences.
                </p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Integrated release and merchandise campaigns</li>
                  <li>Lifestyle-aligned tour and event experiences</li>
                  <li>Cross-domain press and media strategy</li>
                  <li>Lifestyle content development and distribution</li>
                  <li>Multi-dimensional fan engagement programs</li>
                </ul>
              </div>
              
              <div className="card border-l-4 border-[#990000] pl-6">
                <h3 className="text-xl font-bold mb-2 text-[#990000]">Lifestyle Trend Analytics</h3>
                <p className="text-lg mb-4">
                  We provide deep insights into emerging lifestyle trends, audience behavior patterns, and cross-domain opportunities before they become mainstream.
                </p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Lifestyle audience analysis and segmentation</li>
                  <li>Cross-domain competitive intelligence</li>
                  <li>Integrated performance reporting and visualization</li>
                  <li>Early lifestyle trend identification and forecasting</li>
                  <li>Multi-channel ROI analysis and optimization</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Case Studies */}
        <section className="py-12 bg-gray-100 rounded-lg">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="section-title text-center">Future Success Stories</h2>
            <p className="text-lg mb-10 text-center">
              While we're just beginning our journey as the world's first AI-powered lifestyle agency, here's how our integrated marketing approach will transform artists' and brands' success.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="card">
                <h3 className="text-xl font-bold mb-2 text-[#990000]">Integrated Artist Launch</h3>
                <p className="text-sm text-gray-500 mb-4">Future Success</p>
                <p>
                  Our AI will identify the perfect audience segments across music, fashion, and content domains for a new artist, creating a highly integrated launch campaign that builds a dedicated lifestyle community from day one, resulting in stronger engagement across all touchpoints than traditional single-domain approaches.
                </p>
              </div>
              
              <div className="card">
                <h3 className="text-xl font-bold mb-2 text-[#990000]">Cross-Domain Brand Partnerships</h3>
                <p className="text-sm text-gray-500 mb-4">Future Success</p>
                <p>
                  By analyzing lifestyle overlap and brand affinity data across multiple domains, our AI will identify unexpected but highly effective cross-domain partnerships for artists and brands, creating authentic collaborations that resonate with shared audience segments and open new revenue streams.
                </p>
              </div>
              
              <div className="card">
                <h3 className="text-xl font-bold mb-2 text-[#990000]">Lifestyle Content Ecosystem</h3>
                <p className="text-sm text-gray-500 mb-4">Future Success</p>
                <p>
                  Our AI content analysis will identify which types of content perform best across different lifestyle domains for specific artists and brands, allowing us to create an integrated content ecosystem that dramatically increases engagement while maintaining authentic brand positioning.
                </p>
              </div>
              
              <div className="card">
                <h3 className="text-xl font-bold mb-2 text-[#990000]">Trend Anticipation Strategy</h3>
                <p className="text-sm text-gray-500 mb-4">Future Success</p>
                <p>
                  By analyzing cross-domain data, consumer behavior, and cultural signals, our AI will identify emerging lifestyle trends months before they break mainstream, allowing our clients to authentically position themselves at the forefront of these movements across music, fashion, and content.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-[#990000]">Ready to Transform Your Marketing Approach?</h2>
            <p className="text-xl mb-8">
              Join #4429 Lifestyle + Marketing & Brands and become part of the world's first AI-powered lifestyle agency. Together, we'll create authentic connections between your brand and audiences across the entire lifestyle spectrum.
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
