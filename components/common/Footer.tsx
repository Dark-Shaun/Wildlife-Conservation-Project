import { motion } from 'framer-motion';
import { 
  FaTwitter, 
  FaFacebookF, 
  FaInstagram, 
  FaYoutube,
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhone
} from 'react-icons/fa';

const socialLinks = [
  { icon: FaTwitter, href: '#', color: '#1DA1F2' },
  { icon: FaFacebookF, href: '#', color: '#4267B2' },
  { icon: FaInstagram, href: '#', color: '#E1306C' },
  { icon: FaYoutube, href: '#', color: '#FF0000' },
];

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-emerald-900 via-green-900 to-green-950 text-white py-16 relative overflow-hidden">
      {/* Decorative Animal Silhouettes */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 text-6xl animate-float-slow">🦁</div>
        <div className="absolute top-20 right-20 text-6xl animate-float-medium">🐘</div>
        <div className="absolute bottom-10 left-1/4 text-6xl animate-float-fast">🐯</div>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Logo & Mission */}
          <div className="space-y-4">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3"
            >
              <div>
                <h3 className="text-xl font-bold bg-gradient-to-r from-green-400 to-emerald-300 bg-clip-text text-transparent">Wildlife Conservation</h3>
              </div>
            </motion.div>
            <p className="text-emerald-100/80">
              Dedicated to preserving Earth's magnificent wildlife and their natural habitats for future generations.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-emerald-300">Explore</h4>
            <ul className="space-y-3">
              {['Our Mission', 'Conservation Projects', 'Get Involved', 'Support Us'].map((link) => (
                <motion.li 
                  key={link}
                  whileHover={{ x: 5 }}
                  className="cursor-pointer hover:text-emerald-400 transition-colors flex items-center gap-2"
                >
                  <span className="text-sm">🌿</span>
                  {link}
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-emerald-300">Contact Us</h4>
            <motion.div 
              className="space-y-3"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              <p className="flex items-center gap-3 text-emerald-100/80">
                <FaMapMarkerAlt className="text-emerald-400" />
                <span>123 Wildlife Way, Nature Valley</span>
              </p>
              <p className="flex items-center gap-3 text-emerald-100/80">
                <FaEnvelope className="text-emerald-400" />
                <span>contact@wildlifeconserv.org</span>
              </p>
              <p className="flex items-center gap-3 text-emerald-100/80">
                <FaPhone className="text-emerald-400" />
                <span>+1 (555) 123-4567</span>
              </p>
            </motion.div>
          </div>

          {/* Social Media */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-emerald-300">Connect With Us</h4>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ 
                    scale: 1.2,
                    backgroundColor: social.color 
                  }}
                  className="w-10 h-10 bg-emerald-800/50 rounded-full flex items-center justify-center transition-colors backdrop-blur-sm shadow-lg"
                >
                  <social.icon className="text-xl" />
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Newsletter */}
        <motion.div 
          className="mt-16 p-8 bg-emerald-800/30 rounded-2xl backdrop-blur-sm border border-emerald-700/30"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="text-center max-w-2xl mx-auto">
            <h4 className="text-2xl font-bold mb-4 text-emerald-300">Join Our Conservation Community</h4>
            <p className="text-emerald-100/80 mb-6">Stay updated with our latest conservation efforts and wildlife stories.</p>
            <form className="max-w-2xl mx-auto">
              <div className="flex gap-4">
                <div className="relative flex-1 group">
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    className="w-full px-6 py-4 bg-emerald-800/30 backdrop-blur-sm border-2 border-emerald-700 rounded-full 
                    text-white placeholder-emerald-400 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/50 
                    focus:outline-none transition-all duration-300 shadow-lg"
                  />
                  <div className="absolute right-3 top-3 text-2xl animate-pulse">
                    🦋
                  </div>
                </div>
                <button
                  type="submit"
                  className="px-8 py-4 bg-gradient-to-r from-emerald-600 to-emerald-800 text-white rounded-full 
                  font-bold text-lg shadow-lg hover:shadow-emerald-500/30 hover:-translate-y-1 active:translate-y-0 
                  transform transition-all duration-300 group relative overflow-hidden whitespace-nowrap"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-emerald-600 opacity-0 
                  group-hover:opacity-20 transition-opacity duration-300"></div>
                  <span className="flex items-center justify-center gap-2">
                    <span>Subscribe</span>
                    <span className="group-hover:rotate-12 transition-transform duration-300">🌿</span>
                  </span>
                </button>
              </div>
            </form>
          </div>
        </motion.div>

        {/* Copyright */}
        <div className="mt-16 pt-8 border-t border-emerald-800/50 text-center text-emerald-100/60">
          <p>© 2024 Wildlife Conservation. Together for a Wilder Tomorrow.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;