
import { GraduationCap, MapPin, Target } from 'lucide-react';

const AboutSection = () => {
  const quickInfo = [
    {
      icon: GraduationCap,
      label: 'Education',
      value: 'B.Tech in Computer Science, XYZ University'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Hyderabad, India'
    },
    {
      icon: Target,
      label: 'Interests',
      value: 'Full Stack Dev, AI, OSS, Hackathons'
    }
  ];

  return (
    <section id="about" className="py-20 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-cyber font-bold gradient-text mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-purple to-cyber-blue mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Profile Card */}
          <div className="cyber-card text-center md:text-left">
            <div className="w-48 h-48 mx-auto md:mx-0 mb-6 relative">
              <div className="w-full h-full bg-gradient-to-br from-neon-purple to-cyber-blue rounded-full p-1">
                <div className="w-full h-full bg-cyber-dark rounded-full flex items-center justify-center">
                  <div className="w-40 h-40 bg-gradient-to-br from-neon-purple/20 to-cyber-blue/20 rounded-full flex items-center justify-center">
                    <span className="text-6xl">👨‍💻</span>
                  </div>
                </div>
              </div>
              {/* Floating animation ring */}
              <div className="absolute inset-0 rounded-full border-2 border-neon-purple/30 animate-spin" style={{ animationDuration: '10s' }}></div>
            </div>
            
            <h3 className="text-2xl font-cyber font-bold text-white mb-4">Nitish Naik</h3>
            <p className="text-gray-300 leading-relaxed">
              I'm Nitish, a passionate software engineering student with a deep interest in building 
              scalable web applications, contributing to open source, and exploring the intersection 
              of technology and creativity. My journey in tech is driven by curiosity and the desire 
              to make meaningful contributions to the developer community.
            </p>
          </div>

          {/* Quick Info Grid */}
          <div className="space-y-6">
            {quickInfo.map((info, index) => (
              <div 
                key={index}
                className="cyber-card group hover:scale-105 transition-all duration-300"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-gradient-to-br from-neon-purple to-cyber-blue rounded-lg group-hover:animate-pulse">
                    <info.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold text-neon-purple mb-1">
                      {info.label}
                    </h4>
                    <p className="text-gray-300">
                      {info.value}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
          {[
            { label: 'Projects Built', value: '15+' },
            { label: 'Open Source Contributions', value: '50+' },
            { label: 'Technologies Learned', value: '20+' },
            { label: 'Hackathons Participated', value: '8' }
          ].map((stat, index) => (
            <div key={index} className="text-center cyber-card">
              <div className="text-3xl font-cyber font-bold gradient-text mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-gray-400">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
