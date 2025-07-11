import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#1E1E1E] text-white py-12 sm:py-16 lg:py-20 fade-in-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and About Section */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">Patil Group</h2>
            <p className="text-gray-400">
              Leading the way in innovative railway solutions for a connected future.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-gray-400 hover:text-white">About Us</Link></li>
              <li><Link href="/products" className="text-gray-400 hover:text-white">Products</Link></li>
              <li><Link href="/contact" className="text-gray-400 hover:text-white">Contact</Link></li>
            </ul>
          </div>

          {/* Products */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Our Products</h3>
            <ul className="space-y-2">
              <li><Link href="/fasteners" className="text-gray-400 hover:text-white">Fasteners</Link></li>
              <li><Link href="/sleepers" className="text-gray-400 hover:text-white">Sleepers</Link></li>
              <li><Link href="/inserts" className="text-gray-400 hover:text-white">Inserts</Link></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Stay Updated</h3>
            <p className="text-gray-400">Subscribe to our newsletter for the latest updates.</p>
            <form className="flex">
              <input 
                type="email" 
                placeholder="Your email" 
                className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-l-md focus:outline-none focus:ring-2 focus:ring-amber-500"
              />
              <button 
                type="submit" 
                className="bg-amber-600 hover:bg-amber-700 px-4 py-2 rounded-r-md"
              >
                <ArrowRight size={20} />
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-gray-800 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-gray-500">&copy; {new Date().getFullYear()} Patil Group. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 sm:mt-0">
            <Link href="/privacy-policy" className="text-gray-500 hover:text-white">Privacy Policy</Link>
            <Link href="/terms-of-service" className="text-gray-500 hover:text-white">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 