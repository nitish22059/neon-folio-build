
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Github, Linkedin, Mail, Download, ChevronDown } from 'lucide-react';

const HeroBanner = () => {
  const [displayText, setDisplayText] = useState('');
  const fullText = '"Building clean code, one commit at a time."';

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index < fullText.length) {
        setDisplayText(fullText.slice(0, index + 1));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 100);

    return () => clearInterval(timer);
  }, []);

  const handleEmailClick = () => {
    window.location.href = 'mailto:nitish@example.com';
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated background grid */}
      <div className="absolute inset-0 grid-background opacity-20"></div>
      
      {/* Floating particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-neon-purple rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      <div className="text-center z-10 max-w-4xl mx-auto px-6">
        {/* Main content */}
        <div className="space-y-8 animate-fade-in">
          {/* Name with neon glow */}
          <h1 className="text-6xl md:text-8xl font-cyber font-black gradient-text mb-4">
            NITISH NAIK
          </h1>
          
          {/* Title */}
          <h2 className="text-xl md:text-2xl text-gray-300 font-medium tracking-wide">
            Aspiring Software Developer & Open Source Contributor
          </h2>
          
          {/* Typewriter tagline */}
          <div className="h-16 flex items-center justify-center">
            <p className="text-lg md:text-xl text-neon-purple font-mono">
              {displayText}
              <span className="animate-pulse">|</span>
            </p>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 justify-center mt-12">
            <Button className="cyber-button group">
              <Download className="w-4 h-4 mr-2 group-hover:animate-bounce" />
              Resume
            </Button>
            
            <Button 
              variant="outline" 
              className="neon-border hover:bg-neon-purple/10 group"
              onClick={() => window.open('https://github.com/nitishnaik', '_blank')}
            >
              <Github className="w-4 h-4 mr-2 group-hover:rotate-12 transition-transform" />
              GitHub
            </Button>
            
            <Button 
              variant="outline" 
              className="neon-border hover:bg-cyber-blue/10 group"
              onClick={() => window.open('https://linkedin.com/in/nitishnaik', '_blank')}
            >
              <Linkedin className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
              LinkedIn
            </Button>
            
            <Button 
              variant="outline" 
              className="neon-border hover:bg-neon-pink/10 group"
              onClick={handleEmailClick}
            >
              <Mail className="w-4 h-4 mr-2 group-hover:animate-pulse" />
              Email
            </Button>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-6 h-6 text-neon-purple animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
