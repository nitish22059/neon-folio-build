
import { useState } from 'react';
import { Code, Palette, Database, Globe, Brain, Users } from 'lucide-react';

const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState('technical');

  const skillCategories = {
    technical: {
      icon: Code,
      title: 'Technical Skills',
      skills: [
        { name: 'JavaScript', level: 90, category: 'language' },
        { name: 'TypeScript', level: 85, category: 'language' },
        { name: 'Python', level: 80, category: 'language' },
        { name: 'C++', level: 75, category: 'language' },
        { name: 'React', level: 90, category: 'framework' },
        { name: 'Next.js', level: 85, category: 'framework' },
        { name: 'Node.js', level: 80, category: 'framework' },
        { name: 'Express', level: 75, category: 'framework' }
      ]
    },
    tools: {
      icon: Globe,
      title: 'Tools & Technologies',
      skills: [
        { name: 'Git', level: 90, category: 'tool' },
        { name: 'VSCode', level: 95, category: 'tool' },
        { name: 'Postman', level: 85, category: 'tool' },
        { name: 'MongoDB', level: 80, category: 'database' },
        { name: 'PostgreSQL', level: 75, category: 'database' },
        { name: 'Docker', level: 70, category: 'tool' },
        { name: 'AWS', level: 65, category: 'cloud' },
        { name: 'Vercel', level: 85, category: 'cloud' }
      ]
    },
    soft: {
      icon: Users,
      title: 'Soft Skills',
      skills: [
        { name: 'Problem Solving', level: 92, category: 'soft' },
        { name: 'Team Collaboration', level: 88, category: 'soft' },
        { name: 'Communication', level: 85, category: 'soft' },
        { name: 'Time Management', level: 80, category: 'soft' },
        { name: 'Leadership', level: 78, category: 'soft' },
        { name: 'Adaptability', level: 90, category: 'soft' },
        { name: 'Critical Thinking', level: 87, category: 'soft' },
        { name: 'Creativity', level: 85, category: 'soft' }
      ]
    }
  };

  const getSkillColor = (category: string) => {
    const colors = {
      language: 'from-neon-purple to-purple-600',
      framework: 'from-cyber-blue to-blue-600',
      tool: 'from-neon-green to-green-600',
      database: 'from-neon-pink to-pink-600',
      cloud: 'from-yellow-400 to-orange-500',
      soft: 'from-indigo-400 to-purple-500'
    };
    return colors[category] || 'from-neon-purple to-cyber-blue';
  };

  return (
    <section id="skills" className="py-20 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-cyber font-bold gradient-text mb-4">
            Skills & Expertise
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-purple to-cyber-blue mx-auto"></div>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {Object.entries(skillCategories).map(([key, category]) => (
            <button
              key={key}
              onClick={() => setActiveCategory(key)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-lg transition-all duration-300 ${
                activeCategory === key
                  ? 'cyber-button'
                  : 'bg-cyber-gray/30 border border-neon-purple/30 text-gray-300 hover:border-neon-purple/60'
              }`}
            >
              <category.icon className="w-5 h-5" />
              <span>{category.title}</span>
            </button>
          ))}
        </div>

        {/* Skills Display */}
        <div className="cyber-card">
          <h3 className="text-2xl font-cyber font-bold text-center mb-8 gradient-text">
            {skillCategories[activeCategory].title}
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skillCategories[activeCategory].skills.map((skill, index) => (
              <div key={skill.name} className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-white font-medium">{skill.name}</span>
                  <span className="text-neon-purple font-mono text-sm">{skill.level}%</span>
                </div>
                
                <div className="w-full bg-cyber-gray rounded-full h-3 overflow-hidden">
                  <div
                    className={`h-full bg-gradient-to-r ${getSkillColor(skill.category)} rounded-full transition-all duration-1000 ease-out relative`}
                    style={{ 
                      width: `${skill.level}%`,
                      animationDelay: `${index * 0.1}s`
                    }}
                  >
                    {/* Animated shine effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent transform -skew-x-12 animate-gradient-shift"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Skill Tags Cloud */}
        <div className="mt-16 text-center">
          <h4 className="text-xl font-cyber font-semibold mb-6 text-neon-purple">
            Technology Stack
          </h4>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              'React', 'TypeScript', 'Node.js', 'Python', 'MongoDB', 'PostgreSQL',
              'AWS', 'Docker', 'Git', 'Next.js', 'Express', 'Tailwind CSS',
              'GraphQL', 'REST APIs', 'Jest', 'Cypress'
            ].map((tech, index) => (
              <span
                key={tech}
                className="px-4 py-2 bg-gradient-to-r from-neon-purple/20 to-cyber-blue/20 border border-neon-purple/30 rounded-full text-sm text-gray-300 hover:border-neon-purple hover:text-white transition-all duration-300 cursor-default hover:scale-105"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
