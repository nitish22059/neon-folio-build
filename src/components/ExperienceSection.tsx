
import { Calendar, ExternalLink, Award, Briefcase, Code, Trophy } from 'lucide-react';

const ExperienceSection = () => {
  const experiences = [
    {
      id: 1,
      type: 'work',
      icon: Briefcase,
      title: 'Software Intern',
      company: 'OpenTech Labs',
      period: 'Jun 2024 - Aug 2024',
      description: 'Built internal tools using Node.js & React. Improved performance by 30% through code optimization and database query improvements.',
      achievements: [
        'Developed REST APIs serving 10k+ daily requests',
        'Implemented automated testing reducing bugs by 40%',
        'Collaborated with 5-person development team'
      ],
      tech: ['Node.js', 'React', 'PostgreSQL', 'Jest'],
      link: 'https://opentechlabs.com'
    },
    {
      id: 2,
      type: 'opensource',
      icon: Code,
      title: 'Core Contributor',
      company: 'Mattermost',
      period: 'Jan 2024 - Present',
      description: 'Fixed bugs, improved documentation, and reviewed PRs for the open-source team communication platform.',
      achievements: [
        'Merged 15+ pull requests improving user experience',
        'Enhanced mobile responsiveness for 2 major components',
        'Participated in community discussions and feature planning'
      ],
      tech: ['React', 'Redux', 'Go', 'PostgreSQL'],
      link: 'https://github.com/mattermost/mattermost-server'
    },
    {
      id: 3,
      type: 'hackathon',
      icon: Trophy,
      title: 'SmartIndia Hackathon 2024',
      company: 'Ministry of Education, India',
      period: 'Dec 2024',
      description: 'Finalist - Developed an AI-powered education platform for rural students with offline capabilities.',
      achievements: [
        'Built PWA with offline-first architecture',
        'Implemented AI tutoring system using TensorFlow',
        'Created multilingual support for 5 Indian languages'
      ],
      tech: ['React', 'TensorFlow.js', 'PWA', 'Firebase'],
      link: 'https://sih.gov.in'
    },
    {
      id: 4,
      type: 'hackathon',
      icon: Award,
      title: 'NASA Space Apps 2023',
      company: 'NASA',
      period: 'Oct 2023',
      description: 'Global Nominee - Created a climate visualization tool using NASA satellite data for environmental monitoring.',
      achievements: [
        'Processed 10GB+ of satellite imagery data',
        'Built real-time data visualization dashboard',
        'Ranked in top 1% globally among 47,000+ participants'
      ],
      tech: ['Python', 'NASA APIs', 'D3.js', 'Flask'],
      link: 'https://spaceapps.nasa.gov'
    }
  ];

  const getTypeColor = (type: string) => {
    const colors = {
      work: 'from-neon-purple to-purple-600',
      opensource: 'from-neon-green to-green-600',
      hackathon: 'from-neon-pink to-pink-600'
    };
    return colors[type] || 'from-neon-purple to-cyber-blue';
  };

  const getTypeLabel = (type: string) => {
    const labels = {
      work: 'Professional Experience',
      opensource: 'Open Source',
      hackathon: 'Competitions & Hackathons'
    };
    return labels[type] || type;
  };

  return (
    <section id="experience" className="py-20 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-cyber font-bold gradient-text mb-4">
            Experience & Achievements
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-purple to-cyber-blue mx-auto mb-6"></div>
          <p className="text-gray-300 max-w-2xl mx-auto">
            My journey through internships, open-source contributions, and competitive programming
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-neon-purple via-cyber-blue to-neon-pink"></div>

          {/* Experience Items */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={exp.id}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-8 h-8 rounded-full bg-gradient-to-r from-neon-purple to-cyber-blue border-4 border-cyber-dark flex items-center justify-center z-10">
                  <exp.icon className="w-4 h-4 text-white" />
                </div>

                {/* Content Card */}
                <div className={`ml-16 md:ml-0 ${index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'} md:w-1/2`}>
                  <div className="cyber-card group hover:scale-105 transition-all duration-300">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <div className={`inline-block px-2 py-1 rounded text-xs font-medium bg-gradient-to-r ${getTypeColor(exp.type)} text-white mb-2`}>
                          {getTypeLabel(exp.type)}
                        </div>
                        <h3 className="text-xl font-cyber font-bold text-white group-hover:text-neon-purple transition-colors">
                          {exp.title}
                        </h3>
                        <p className="text-neon-purple font-medium">{exp.company}</p>
                        <div className="flex items-center text-gray-400 text-sm mt-1">
                          <Calendar className="w-4 h-4 mr-1" />
                          {exp.period}
                        </div>
                      </div>
                      
                      {exp.link && (
                        <button
                          onClick={() => window.open(exp.link, '_blank')}
                          className="p-2 hover:bg-neon-purple/20 rounded-lg transition-colors group/btn"
                        >
                          <ExternalLink className="w-4 h-4 text-gray-400 group-hover/btn:text-neon-purple" />
                        </button>
                      )}
                    </div>

                    {/* Description */}
                    <p className="text-gray-300 mb-4 leading-relaxed">
                      {exp.description}
                    </p>

                    {/* Achievements */}
                    <ul className="space-y-2 mb-4">
                      {exp.achievements.map((achievement, idx) => (
                        <li key={idx} className="flex items-start text-sm text-gray-300">
                          <div className="w-1.5 h-1.5 bg-neon-purple rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          {achievement}
                        </li>
                      ))}
                    </ul>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2">
                      {exp.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 bg-neon-purple/20 border border-neon-purple/30 rounded text-xs text-neon-purple"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Summary */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
          {[
            { label: 'Years Coding', value: '3+', icon: Code },
            { label: 'Open Source PRs', value: '50+', icon: ExternalLink },
            { label: 'Hackathons Won', value: '5', icon: Trophy },
            { label: 'Team Projects', value: '12+', icon: Briefcase }
          ].map((stat, index) => (
            <div key={index} className="cyber-card text-center group hover:scale-105 transition-all duration-300">
              <div className="mb-3">
                <stat.icon className="w-8 h-8 text-neon-purple mx-auto group-hover:animate-pulse" />
              </div>
              <div className="text-2xl font-cyber font-bold gradient-text mb-1">
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

export default ExperienceSection;
