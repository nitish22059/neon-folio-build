
import { Heart, Code, Coffee } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 px-6 border-t border-neon-purple/20 bg-cyber-dark/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center space-y-6">
          {/* Main Footer Content */}
          <div className="space-y-4">
            <h3 className="text-2xl font-cyber font-bold gradient-text">
              Nitish Naik
            </h3>
            <p className="text-gray-300 max-w-md mx-auto">
              "Let's build something amazing together. The future is written in code, and I'm here to help write it."
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            {[
              { label: 'About', href: '#about' },
              { label: 'Skills', href: '#skills' },
              { label: 'Projects', href: '#projects' },
              { label: 'Experience', href: '#experience' },
              { label: 'Contact', href: '#contact' }
            ].map((link) => (
              <button
                key={link.label}
                onClick={() => document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' })}
                className="text-gray-400 hover:text-neon-purple transition-colors duration-300"
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Divider */}
          <div className="w-full h-px bg-gradient-to-r from-transparent via-neon-purple/30 to-transparent"></div>

          {/* Copyright and Tech Stack */}
          <div className="space-y-3">
            <div className="flex items-center justify-center space-x-2 text-gray-400 text-sm">
              <span>© {currentYear} Nitish Naik. All rights reserved.</span>
            </div>
            
            <div className="flex items-center justify-center space-x-2 text-gray-500 text-sm">
              <span>Built with</span>
              <Heart className="w-4 h-4 text-red-400 animate-pulse" />
              <span>using</span>
              <Code className="w-4 h-4 text-neon-purple" />
              <span>React,</span>
              <span className="text-neon-purple">TypeScript</span>
              <span>&</span>
              <span className="text-cyber-blue">Tailwind CSS</span>
            </div>

            <div className="flex items-center justify-center space-x-2 text-gray-500 text-xs">
              <Coffee className="w-3 h-3 text-yellow-400" />
              <span>Powered by caffeine and curiosity</span>
            </div>
          </div>

          {/* Easter Egg */}
          <div className="text-xs text-gray-600 font-mono">
            <span className="hover:text-neon-purple transition-colors cursor-default">
              console.log("Thanks for visiting! 🚀");
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
