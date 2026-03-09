import { Facebook, Twitter, Instagram, Youtube, Mail } from 'lucide-react';
import imgLogo from "figma:asset/e69166f1ae95a8c8bd6567f546a87a62b547778b.png";

export function Footer() {
  const footerLinks = {
    Models: ['Aircraft', 'Cars & Vehicles', 'Architecture', 'Ships', 'Military', 'Beginner'],
    Community: ['Meetups', 'Exhibitions', 'Galleries', 'Forums', 'Builder Profiles'],
    Resources: ['Tutorials', 'Tips & Tricks', 'Tools Guide', 'Paper Types', 'FAQ'],
    About: ['Our Story', 'Contact Us', 'Partnerships', 'Privacy Policy', 'Terms of Service'],
  };

  return (
    <footer className="bg-gray-900 pb-8 pt-16 text-gray-300">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 grid grid-cols-2 gap-8 md:grid-cols-4">
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="mb-4 text-white">{category}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-sm transition-colors hover:text-white">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mb-8 border-t border-gray-800 pt-8">
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
            <div>
              <h3 className="mb-2 text-white">Subscribe to our newsletter</h3>
              <p className="text-sm">
                Get the latest models, tips, and community updates delivered to your inbox
              </p>
            </div>

            <div className="flex w-full gap-2 md:w-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 rounded-lg border border-gray-700 bg-gray-800 px-4 py-2 focus:border-[#4A90E2] focus:outline-none md:w-64"
              />
              <button className="flex items-center gap-2 rounded-lg bg-gradient-to-r from-[#FF6B6B] to-[#4A90E2] px-6 py-2 text-white transition-opacity hover:opacity-90">
                <Mail className="h-4 w-4" />
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-gray-800 pt-8 md:flex-row">
          <div className="flex items-center gap-3">
            <img src={imgLogo} alt="The Paper Model Hub" className="h-8 w-auto" />
            <p className="text-sm">© 2026 The Paper Model Hub. All rights reserved.</p>
          </div>

          <div className="flex items-center gap-4">
            {[Facebook, Twitter, Instagram, Youtube].map((Icon, index) => (
              <a
                key={index}
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-800 transition-colors hover:bg-gray-700"
              >
                <Icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
