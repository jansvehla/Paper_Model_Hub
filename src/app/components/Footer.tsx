import { Facebook, Twitter, Instagram, Youtube, Mail } from 'lucide-react';
import logo from '../../assets/e69166f1ae95a8c8bd6567f546a87a62b547778b.png'

export function Footer() {
  const footerLinks = {
    'Models': ['Aircraft', 'Cars & Vehicles', 'Architecture', 'Ships', 'Military', 'Beginner'],
    'Community': ['Meetups', 'Exhibitions', 'Galleries', 'Forums', 'Builder Profiles'],
    'Resources': ['Tutorials', 'Tips & Tricks', 'Tools Guide', 'Paper Types', 'FAQ'],
    'About': ['Our Story', 'Contact Us', 'Partnerships', 'Privacy Policy', 'Terms of Service'],
  };

  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-white mb-4">{category}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <a href="#" className="hover:text-white transition-colors text-sm">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter Section */}
        <div className="border-t border-gray-800 pt-8 mb-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-white mb-2">Subscribe to our newsletter</h3>
              <p className="text-sm">Get the latest models, tips, and community updates delivered to your inbox</p>
            </div>
            <div className="flex gap-2 w-full md:w-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:border-[#4A90E2] flex-1 md:w-64"
              />
              <button className="px-6 py-2 bg-gradient-to-r from-[#FF6B6B] to-[#4A90E2] text-white rounded-lg hover:opacity-90 transition-opacity flex items-center gap-2">
                <Mail className="w-4 h-4" />
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <img 
              src={logo} 
              alt="The Paper Model Hub" 
              className="h-8 w-auto"
            />
            <p className="text-sm">© 2026 The Paper Model Hub. All rights reserved.</p>
          </div>
          
          <div className="flex items-center gap-4">
            {[Facebook, Twitter, Instagram, Youtube].map((Icon, index) => (
              <a
                key={index}
                href="#"
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-gray-700 transition-colors"
              >
                <Icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
