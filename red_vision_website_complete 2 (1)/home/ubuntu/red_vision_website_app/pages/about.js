import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

export default function About() {
  return (
    <div className="min-h-screen">
      <Head>
        <title>About | Red Vision Creative Studio</title>
        <meta name="description" content="Learn about Red Vision Creative Studio, the world's first AI-powered lifestyle agency founded by Jason Salvador" />
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
            <Link href="/about" className="text-[#D4AF37] transition-colors">About</Link>
            <Link href="/music-label" className="hover:text-[#D4AF37] transition-colors">Music Label</Link>
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
            About Red Vision Creative Studio
          </h1>
          <div className="max-w-4xl mx-auto">
            <div className="bg-gray-100 p-8 rounded-lg mb-12">
              <h2 className="text-2xl font-bold mb-4 text-[#990000]">Our Vision</h2>
              <p className="text-lg mb-6">
                Founded by visionary executive Jason Salvador, Red Vision Creative Studio represents a revolutionary approach to the entertainment and lifestyle industry. We're pioneering the world's first AI-powered lifestyle agency, integrating artificial intelligence across all aspects of music, marketing, merchandise, and content creation.
              </p>
              <p className="text-lg">
                Our vision is to create a more efficient, data-driven, and creator-friendly ecosystem that leverages cutting-edge AI technology to identify emerging talent, optimize creative processes, and connect artists and brands with their ideal audiences while enhancing authentic lifestyle experiences.
              </p>
            </div>
          </div>
        </section>

        {/* Founder's Journey */}
        <section className="py-12">
          <div className="max-w-4xl mx-auto">
            <h2 className="section-title text-center">The Last of the Independents</h2>
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div>
                <Image 
                  src="/images/Screenshot 2025-03-14 at 6.34.18 AM.png" 
                  alt="Jason Salvador - The Last of the Independents" 
                  width={500} 
                  height={600} 
                  className="rounded-lg shadow-xl"
                />
                <div className="mt-2 text-sm text-gray-500">
                  Featured in Duke Magazine
                </div>
              </div>
              <div>
                <p className="text-lg mb-6">
                  As a seasoned executive and innovator, Jason Salvador represents a new breed of industry leader - one who bridges the gap between traditional expertise and cutting-edge AI technology to create an entirely new business category: the AI-powered lifestyle agency.
                </p>
                <p className="text-lg mb-6">
                  "While Commercial Labels foremost try to sell a certain product, Independent Labels are more concerned with developing a sound story without the quarterly pressures of shareholders," Jason explains in his feature as "The Last of the Independents."
                </p>
                <p className="text-lg">
                  It's this independent spirit combined with a forward-thinking embrace of AI technology that makes Red Vision uniquely positioned to revolutionize the entertainment and lifestyle industry, creating an ecosystem that values creative development while leveraging innovative technology to enhance every aspect of the lifestyle experience.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Why AI? */}
        <section className="py-12 bg-gray-100 rounded-lg">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="section-title text-center">Why AI?</h2>
            <p className="text-lg mb-8 text-center">
              The entertainment and lifestyle industry stands at a crossroads. Those who embrace AI's potential will define the next era of music, marketing, fashion, and content creation.
            </p>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="card">
                <h3 className="text-xl font-bold mb-4 text-[#990000]">Enhanced Talent Discovery</h3>
                <p>Our proprietary AI systems analyze vast amounts of data from streaming platforms, social media, and other sources to identify emerging artists and trends before they break mainstream, creating opportunities for early collaboration and development.</p>
              </div>
              <div className="card">
                <h3 className="text-xl font-bold mb-4 text-[#990000]">Optimized Creative Processes</h3>
                <p>AI-assisted production and design tools help creators refine their work, experiment with new styles, and create higher quality output more efficiently while maintaining their unique artistic voice and vision.</p>
              </div>
              <div className="card">
                <h3 className="text-xl font-bold mb-4 text-[#990000]">Targeted Lifestyle Marketing</h3>
                <p>Data-driven marketing strategies ensure content reaches the right audiences at the right time, maximizing impact and engagement while creating authentic connections between creators and consumers.</p>
              </div>
              <div className="card">
                <h3 className="text-xl font-bold mb-4 text-[#990000]">Human Creativity Enhanced</h3>
                <p>Our AI systems don't replace human creativity—they amplify it, allowing artists and creators to focus on their unique vision while technology handles the analytical and repetitive aspects of the creative process.</p>
              </div>
            </div>
          </div>
        </section>

        {/* The AI Executive Structure */}
        <section className="py-12">
          <div className="max-w-4xl mx-auto">
            <h2 className="section-title text-center">The AI Executive Structure</h2>
            <p className="text-lg mb-8 text-center">
              What truly sets Red Vision apart is our innovative approach to AI integration
            </p>
            <div className="card border-l-4 border-[#990000] pl-6 mb-8">
              <h3 className="text-xl font-bold mb-2 text-[#990000]">Beyond Tools: AI as Executives</h3>
              <p className="text-lg">
                Unlike companies that merely use AI tools, Red Vision implements an innovative "AI Executive" structure where specialized AI systems function as department heads, managing teams of task-specific AI assistants. This approach creates a more sophisticated and integrated AI ecosystem that can handle complex, multi-dimensional challenges across the lifestyle spectrum.
              </p>
            </div>
            <div className="card border-l-4 border-[#990000] pl-6 mb-8">
              <h3 className="text-xl font-bold mb-2 text-[#990000]">Cross-Division Intelligence</h3>
              <p className="text-lg">
                Data and insights flow seamlessly between divisions, creating a unified intelligence network that enhances decision-making across the entire organization. This integrated approach allows us to identify connections between trends in music, fashion, marketing, and content that would be impossible to detect through traditional methods.
              </p>
            </div>
            <div className="card border-l-4 border-[#990000] pl-6 mb-8">
              <h3 className="text-xl font-bold mb-2 text-[#990000]">Human-AI Collaboration</h3>
              <p className="text-lg">
                Our model emphasizes augmenting human creativity and expertise rather than replacing it, creating a symbiotic relationship between human vision and AI capabilities. This ensures that all our work maintains the human touch that connects emotionally while leveraging AI's analytical power and efficiency.
              </p>
            </div>
            <div className="card border-l-4 border-[#990000] pl-6">
              <h3 className="text-xl font-bold mb-2 text-[#990000]">Lifestyle Integration</h3>
              <p className="text-lg">
                Beyond entertainment, Red Vision's AI systems help optimize personal and professional lifestyles through data-driven recommendations and personalized experiences. This holistic approach recognizes that music, fashion, content, and marketing are all interconnected elements of modern lifestyle.
              </p>
            </div>
          </div>
        </section>

        {/* Our Approach */}
        <section className="py-12">
          <div className="max-w-4xl mx-auto">
            <h2 className="section-title text-center">Our AI-Powered Divisions</h2>
            <div className="space-y-8">
              <div className="card border-l-4 border-[#990000] pl-6">
                <h3 className="text-xl font-bold mb-2 text-[#990000]">Red Vision Music (AI-Powered Record Label)</h3>
                <p className="text-lg">
                  At the core of our business is Red Vision Music, our AI-powered record label that discovers, develops, and promotes artists using cutting-edge technology. We identify emerging talent through data analysis, optimize production processes, and create targeted marketing campaigns that connect artists with their ideal audiences, all enhanced by our proprietary AI systems.
                </p>
              </div>
              <div className="card border-l-4 border-[#990000] pl-6">
                <h3 className="text-xl font-bold mb-2 text-[#990000]">#4429 Lifestyle + Marketing & Brands</h3>
                <p className="text-lg">
                  Our marketing division leverages AI to create data-driven strategies for artists and brands. We analyze audience demographics, engagement patterns, and cultural trends to develop campaigns that resonate and drive results, while our lifestyle integration approach ensures authentic connections with target audiences across all touchpoints.
                </p>
              </div>
              <div className="card border-l-4 border-[#990000] pl-6">
                <h3 className="text-xl font-bold mb-2 text-[#990000]">GiFTD n' PrVLGD Co. (AI-Enhanced Merchandise)</h3>
                <p className="text-lg">
                  Through our merchandise division, we design and distribute artist and brand merchandise using AI-enhanced creative processes. Our technology helps identify design trends, optimize pricing strategies, and streamline fulfillment for a seamless e-commerce experience while creating products that authentically extend the creator's vision.
                </p>
              </div>
              <div className="card border-l-4 border-[#990000] pl-6">
                <h3 className="text-xl font-bold mb-2 text-[#990000]">A Tragic Mulatto (AI-Powered Content)</h3>
                <p className="text-lg">
                  Our blog provides thought-provoking perspectives on music, culture, and technology, enhanced by AI content analysis and trend identification. We share insights on industry developments, showcase emerging artists, and explore the intersection of AI and creativity, creating a platform for forward-thinking discourse.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Future Vision */}
        <section className="py-12 bg-[#990000] text-white rounded-lg">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-6 text-center text-white">Future Vision</h2>
            <p className="text-lg mb-8 text-center">
              Red Vision Creative Studio is just the beginning. Our long-term vision includes expanding our AI-powered approach across the entire entertainment and lifestyle ecosystem.
            </p>
            <div className="text-center">
              <p className="text-lg mb-6">
                "We're not just building a record label or marketing agency; we're creating a new paradigm for how lifestyle is experienced, expressed, and enhanced in the AI era. As the world's first AI-powered lifestyle agency, we're defining an entirely new category that will transform how creators and audiences connect."
              </p>
              <p className="text-xl font-bold">- Jason Salvador, Founder</p>
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
