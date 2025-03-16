import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

export default function Contact() {
  return (
    <div className="min-h-screen">
      <Head>
        <title>Contact | Red Vision Creative Studio</title>
        <meta name="description" content="Contact Red Vision Creative Studio - The world's first AI-powered lifestyle agency revolutionizing music, marketing, fashion, and content creation" />
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
            <Link href="/contact" className="text-[#D4AF37] transition-colors">Contact</Link>
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
            Connect With The First AI-Powered Lifestyle Agency
          </h1>
          <div className="max-w-4xl mx-auto">
            <p className="text-xl text-center mb-10">
              Ready to revolutionize your approach to music, marketing, merchandise, or content with AI? We'd love to hear from you.
            </p>
          </div>
        </section>

        {/* Contact Form and Info */}
        <section className="py-12">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold mb-6 text-[#990000]">Send Us a Message</h2>
                <form className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-[#990000] focus:border-[#990000]" 
                      placeholder="Your name"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                    <input 
                      type="email" 
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-[#990000] focus:border-[#990000]" 
                      placeholder="Your email address"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                    <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-[#990000] focus:border-[#990000]">
                      <option value="">Select a subject</option>
                      <option value="music-label">AI-Powered Music Label</option>
                      <option value="marketing">Lifestyle Marketing Services</option>
                      <option value="merchandise">AI-Designed Merchandise</option>
                      <option value="blog">Blog Contribution</option>
                      <option value="partnership">AI Lifestyle Partnership</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                    <textarea 
                      rows="5" 
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-[#990000] focus:border-[#990000]" 
                      placeholder="Tell us about your project or inquiry"
                    ></textarea>
                  </div>
                  
                  <div>
                    <button type="submit" className="btn-primary w-full">Send Message</button>
                  </div>
                </form>
              </div>
              
              {/* Contact Information */}
              <div>
                <h2 className="text-2xl font-bold mb-6 text-[#990000]">Contact Information</h2>
                
                <div className="space-y-8">
                  <div className="flex items-start space-x-4">
                    <div className="bg-[#990000] text-white p-3 rounded-full flex-shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-[#990000]">Email</h3>
                      <p className="mt-1">info@redvisionstudio.com</p>
                      <p className="text-sm text-gray-500 mt-1">Our AI-human collaboration team aims to respond to all inquiries within 24-48 hours.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="bg-[#990000] text-white p-3 rounded-full flex-shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-[#990000]">Phone</h3>
                      <p className="mt-1">(555) 123-4567</p>
                      <p className="text-sm text-gray-500 mt-1">Available Monday-Friday, 9am-5pm PST</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="bg-[#990000] text-white p-3 rounded-full flex-shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-[#990000]">Location</h3>
                      <p className="mt-1">Los Angeles, CA</p>
                      <p className="text-sm text-gray-500 mt-1">The hub of our AI-powered lifestyle agency</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="bg-[#990000] text-white p-3 rounded-full flex-shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-[#990000]">Social Media</h3>
                      <div className="flex space-x-4 mt-2">
                        <a href="#" className="text-[#990000] hover:text-[#D4AF37]">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                          </svg>
                        </a>
                        <a href="#" className="text-[#990000] hover:text-[#D4AF37]">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                          </svg>
                        </a>
                        <a href="#" className="text-[#990000] hover:text-[#D4AF37]">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-12 bg-gray-100 p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-4 text-[#990000]">AI Collaboration Opportunities</h3>
                  <p className="mb-4">
                    As the world's first AI-powered lifestyle agency, we're always looking for innovative ways to collaborate with:
                  </p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Artists seeking AI-enhanced career development</li>
                    <li>Brands looking to integrate AI into their lifestyle strategy</li>
                    <li>Technology partners developing new AI tools</li>
                    <li>Content creators interested in AI collaboration</li>
                    <li>Investors passionate about the future of AI in lifestyle</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-12 bg-gray-100 rounded-lg">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="section-title text-center">Frequently Asked Questions</h2>
            <div className="space-y-6 mt-8">
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-xl font-bold mb-2 text-[#990000]">What makes Red Vision an AI-powered lifestyle agency?</h3>
                <p>
                  Unlike companies that merely use AI tools, we've embedded artificial intelligence at the strategic, creative, and operational levels across all our divisions. Our innovative AI Executive structure allows specialized AI systems to function as department heads, managing teams of task-specific AI assistants while collaborating with human experts to create an integrated lifestyle experience.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-xl font-bold mb-2 text-[#990000]">How does AI enhance your services?</h3>
                <p>
                  Our AI systems enhance every aspect of our services by analyzing vast amounts of cross-domain data, identifying emerging trends before they break mainstream, optimizing creative processes, and creating personalized experiences. This integrated approach allows us to deliver more authentic, effective, and innovative solutions across music, marketing, merchandise, and content.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-xl font-bold mb-2 text-[#990000]">Do you work with artists at all career stages?</h3>
                <p>
                  Yes, our AI-powered approach is designed to benefit artists at every stage of their career. For emerging artists, we offer discovery and development services. For established artists, we provide optimization and innovation. Our scalable AI systems adapt to each artist's unique needs and goals within the lifestyle context.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-xl font-bold mb-2 text-[#990000]">How do you balance AI and human creativity?</h3>
                <p>
                  We believe in augmenting human creativity rather than replacing it. Our model creates a symbiotic relationship between human vision and AI capabilities. This ensures that all our work maintains the human touch that connects emotionally while leveraging AI's analytical power and efficiency to enhance the creative process.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-[#990000]">Ready to Join the AI Lifestyle Revolution?</h2>
            <p className="text-xl mb-8">
              Contact us today to explore how the world's first AI-powered lifestyle agency can transform your approach to music, marketing, merchandise, and content creation.
            </p>
            <button className="btn-primary">Get Started Now</button>
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
