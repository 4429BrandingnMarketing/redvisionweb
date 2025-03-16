import Head from 'next/head';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Head>
        <title>Red Vision Creative Studio | First AI-Powered Lifestyle Agency</title>
        <meta name="description" content="Red Vision Creative Studio - The world's first AI-powered lifestyle agency founded by Jason Salvador, revolutionizing music, marketing, fashion, and content creation." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="bg-[#990000] text-white">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center">
            <Image 
              src="/images/red_vision_logo.png" 
              alt="Red Vision Creative Studio" 
              width={150} 
              height={150} 
              className="mr-4"
            />
          </div>
          <nav className="hidden md:flex space-x-8">
            <a href="#" className="hover:text-[#D4AF37] transition-colors">Home</a>
            <a href="#" className="hover:text-[#D4AF37] transition-colors">About</a>
            <a href="#" className="hover:text-[#D4AF37] transition-colors">Music Label</a>
            <a href="#" className="hover:text-[#D4AF37] transition-colors">Marketing</a>
            <a href="#" className="hover:text-[#D4AF37] transition-colors">Merchandise</a>
            <a href="#" className="hover:text-[#D4AF37] transition-colors">Blog</a>
            <a href="#" className="hover:text-[#D4AF37] transition-colors">Contact</a>
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
        <section className="flex flex-col items-center justify-center text-center py-20">
          <div className="mb-8">
            <Image 
              src="/images/red_vision_logo.png" 
              alt="Red Vision Creative Studio" 
              width={300} 
              height={300} 
              className="mx-auto"
            />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-[#990000] mb-6">
            The First AI-Powered Lifestyle Agency
          </h1>
          <p className="text-xl md:text-2xl mb-10 max-w-3xl">
            Where creative vision meets artificial intelligence. A revolutionary ecosystem integrating AI across music, marketing, fashion, and content creation, founded by visionary executive Jason Salvador.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="btn-primary">Discover Our Vision</button>
            <button className="btn-accent">Contact Us</button>
          </div>
        </section>

        {/* About Section */}
        <section className="py-16">
          <h2 className="section-title">Revolutionizing Lifestyle Through AI</h2>
          <div className="grid md:grid-cols-2 gap-10">
            <div>
              <p className="text-lg mb-6">
                Founded by entertainment executive Jason Salvador, Red Vision Creative Studio is pioneering a new category in the industry—the AI-powered lifestyle agency. We've created an interconnected ecosystem where artificial intelligence enhances human creativity across music, marketing, merchandise, and media.
              </p>
              <p className="text-lg mb-6">
                Unlike companies that merely use AI tools, we've embedded artificial intelligence at the strategic, creative, and operational levels of our business. Our innovative AI Executive structure allows specialized AI systems to function as department heads, managing teams of task-specific AI assistants while collaborating with human experts.
              </p>
            </div>
            <div className="bg-gray-200 rounded-lg flex items-center justify-center p-10">
              {/* Placeholder for founder image */}
              <div className="text-center">
                <p className="text-xl font-bold">Jason Salvador</p>
                <p>Founder & CEO</p>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16">
          <h2 className="section-title">Our AI-Powered Divisions</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="card border-t-4 border-[#990000]">
              <h3 className="text-xl font-bold mb-4 text-[#990000]">Red Vision Music</h3>
              <p>Our AI-powered record label discovers, develops, and promotes artists using cutting-edge technology that identifies emerging talent, optimizes production, and creates data-driven marketing strategies.</p>
            </div>
            <div className="card border-t-4 border-[#990000]">
              <h3 className="text-xl font-bold mb-4 text-[#990000]">#4429 Lifestyle + Marketing</h3>
              <p>Our AI-enhanced marketing agency develops data-driven brand strategies, campaign optimization, and lifestyle integration for artists and brands seeking authentic audience connections.</p>
            </div>
            <div className="card border-t-4 border-[#990000]">
              <h3 className="text-xl font-bold mb-4 text-[#990000]">GiFTD n' PrVLGD Co.</h3>
              <p>Our AI-designed merchandise division creates innovative fashion and products using artificial intelligence to analyze trends, optimize designs, and create personalized shopping experiences.</p>
            </div>
          </div>
        </section>

        {/* AI Integration Section */}
        <section className="py-16 bg-gray-100 rounded-lg p-8">
          <h2 className="section-title">The AI Lifestyle Ecosystem</h2>
          <p className="text-lg mb-8 text-center">How our AI-powered approach creates unprecedented value across the lifestyle spectrum</p>
          
          <div className="grid md:grid-cols-2 gap-10">
            <div className="card">
              <h3 className="text-xl font-bold mb-4 text-[#990000]">Cross-Division Intelligence</h3>
              <p className="mb-4">
                Our proprietary AI systems share data and insights across all divisions, creating a unified intelligence network that enhances decision-making throughout the organization.
              </p>
              <p>
                This integrated approach allows us to identify connections between trends in music, fashion, marketing, and content that would be impossible to detect through traditional methods.
              </p>
            </div>
            
            <div className="card">
              <h3 className="text-xl font-bold mb-4 text-[#990000]">Human-AI Collaboration</h3>
              <p className="mb-4">
                We've developed a unique framework for collaboration between human experts and AI systems, creating a symbiotic relationship that amplifies creativity while maintaining authenticity.
              </p>
              <p>
                This approach ensures that all our work maintains the human touch that connects emotionally while leveraging AI's analytical power and efficiency.
              </p>
            </div>
            
            <div className="card">
              <h3 className="text-xl font-bold mb-4 text-[#990000]">Lifestyle Data Integration</h3>
              <p className="mb-4">
                By analyzing lifestyle data across music preferences, fashion choices, content consumption, and brand affinities, we create comprehensive profiles that inform all our strategies.
              </p>
              <p>
                This holistic understanding allows us to develop more authentic and effective approaches for artists, brands, and consumers.
              </p>
            </div>
            
            <div className="card">
              <h3 className="text-xl font-bold mb-4 text-[#990000]">Trend Synthesis</h3>
              <p className="mb-4">
                Our AI systems identify connections between emerging trends across different lifestyle domains, enabling us to anticipate cultural shifts before they become mainstream.
              </p>
              <p>
                This predictive capability gives our clients a significant competitive advantage in an increasingly fast-paced market.
              </p>
            </div>
          </div>
        </section>

        {/* Blog Section */}
        <section className="py-16 bg-gray-100 rounded-lg p-8">
          <h2 className="section-title">A Tragic Mulatto</h2>
          <p className="text-lg mb-8">AI-enhanced perspectives on music, culture, technology, and lifestyle.</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Blog post placeholders */}
            <div className="card">
              <h3 className="text-xl font-bold mb-2 text-[#990000]">The Future of AI in Music Production</h3>
              <p className="text-sm text-gray-500 mb-4">March 10, 2025</p>
              <p>How artificial intelligence is transforming the way music is created, produced, and distributed while enhancing human creativity rather than replacing it.</p>
              <a href="#" className="inline-block mt-4 text-[#D4AF37] hover:underline">Read More</a>
            </div>
            <div className="card">
              <h3 className="text-xl font-bold mb-2 text-[#990000]">Emerging Artists to Watch in 2025</h3>
              <p className="text-sm text-gray-500 mb-4">February 28, 2025</p>
              <p>Our AI-powered analysis reveals the next generation of breakout music stars and the lifestyle trends they're pioneering.</p>
              <a href="#" className="inline-block mt-4 text-[#D4AF37] hover:underline">Read More</a>
            </div>
            <div className="card">
              <h3 className="text-xl font-bold mb-2 text-[#990000]">Lifestyle Integration: The New Frontier</h3>
              <p className="text-sm text-gray-500 mb-4">February 15, 2025</p>
              <p>How the boundaries between music, fashion, content, and marketing are dissolving to create integrated lifestyle experiences powered by AI.</p>
              <a href="#" className="inline-block mt-4 text-[#D4AF37] hover:underline">Read More</a>
            </div>
          </div>
          <div className="text-center mt-8">
            <button className="btn-accent">View All Articles</button>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16">
          <h2 className="section-title">Get in Touch</h2>
          <div className="grid md:grid-cols-2 gap-10">
            <div>
              <p className="text-lg mb-6">
                Ready to revolutionize your approach to music, marketing, merchandise, or content with AI? Contact us to learn more about our services and how we can help you achieve your goals.
              </p>
              <p className="text-lg mb-6">
                Whether you're an artist looking for representation, a brand seeking innovative marketing, or a partner interested in collaboration with the world's first AI-powered lifestyle agency, we'd love to hear from you.
              </p>
            </div>
            <div className="card border border-[#990000]">
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Name</label>
                  <input type="text" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#990000] focus:ring focus:ring-[#990000] focus:ring-opacity-50" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Email</label>
                  <input type="email" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#990000] focus:ring focus:ring-[#990000] focus:ring-opacity-50" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Message</label>
                  <textarea rows="4" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#990000] focus:ring focus:ring-[#990000] focus:ring-opacity-50"></textarea>
                </div>
                <button type="submit" className="btn-primary w-full">Send Message</button>
              </form>
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
                <li><a href="#" className="hover:text-[#D4AF37]">Home</a></li>
                <li><a href="#" className="hover:text-[#D4AF37]">About</a></li>
                <li><a href="#" className="hover:text-[#D4AF37]">Music Label</a></li>
                <li><a href="#" className="hover:text-[#D4AF37]">Marketing</a></li>
                <li><a href="#" className="hover:text-[#D4AF37]">Merchandise</a></li>
                <li><a href="#" className="hover:text-[#D4AF37]">Blog</a></li>
                <li><a href="#" className="hover:text-[#D4AF37]">Contact</a></li>
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
