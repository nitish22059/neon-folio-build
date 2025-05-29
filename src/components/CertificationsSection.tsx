
import { Award, Calendar, ExternalLink, CheckCircle } from 'lucide-react';

const CertificationsSection = () => {
  const certifications = [
    {
      id: 1,
      title: 'Meta Front-End Developer Certificate',
      issuer: 'Meta (via Coursera)',
      date: 'December 2024',
      description: 'Comprehensive program covering React, JavaScript, HTML/CSS, and modern front-end development practices.',
      skills: ['React', 'JavaScript', 'HTML/CSS', 'UI/UX Design', 'Version Control'],
      credentialUrl: 'https://coursera.org/verify/professional-cert/example',
      logo: '🎓',
      status: 'completed'
    },
    {
      id: 2,
      title: 'AWS Cloud Practitioner',
      issuer: 'Amazon Web Services',
      date: 'November 2024',
      description: 'Foundational understanding of AWS Cloud concepts, services, security, architecture, pricing, and support.',
      skills: ['AWS Services', 'Cloud Computing', 'Security', 'Architecture', 'Cost Management'],
      credentialUrl: 'https://aws.amazon.com/verification/example',
      logo: '☁️',
      status: 'completed'
    },
    {
      id: 3,
      title: 'CS50x: Introduction to Computer Science',
      issuer: 'Harvard University (via edX)',
      date: 'October 2024',
      description: 'Harvard\'s introduction to computer science and programming, covering algorithms, data structures, and web development.',
      skills: ['C', 'Python', 'SQL', 'Algorithms', 'Data Structures', 'Web Development'],
      credentialUrl: 'https://certificates.cs50.io/example',
      logo: '🎯',
      status: 'completed'
    },
    {
      id: 4,
      title: 'Machine Learning Specialization',
      issuer: 'Stanford University (via Coursera)',
      date: 'In Progress',
      description: 'Advanced course on machine learning algorithms, neural networks, and practical implementation techniques.',
      skills: ['Python', 'TensorFlow', 'Neural Networks', 'Supervised Learning', 'Unsupervised Learning'],
      credentialUrl: '#',
      logo: '🤖',
      status: 'in-progress'
    },
    {
      id: 5,
      title: 'Google Cloud Associate Cloud Engineer',
      issuer: 'Google Cloud',
      date: 'Planned for Q2 2025',
      description: 'Professional certification for deploying applications, monitoring operations, and managing enterprise solutions on Google Cloud.',
      skills: ['Google Cloud Platform', 'DevOps', 'Kubernetes', 'Cloud Architecture'],
      credentialUrl: '#',
      logo: '🌐',
      status: 'planned'
    },
    {
      id: 6,
      title: 'Full Stack Open',
      issuer: 'University of Helsinki',
      date: 'September 2024',
      description: 'Deep dive into modern web application development with React, Redux, Node.js, MongoDB, GraphQL and TypeScript.',
      skills: ['React', 'Node.js', 'MongoDB', 'GraphQL', 'TypeScript', 'Testing'],
      credentialUrl: 'https://fullstackopen.com/en/certificate/example',
      logo: '💻',
      status: 'completed'
    }
  ];

  const getStatusColor = (status: string) => {
    const colors = {
      completed: 'from-neon-green to-green-600',
      'in-progress': 'from-neon-blue to-blue-600',
      planned: 'from-neon-purple to-purple-600'
    };
    return colors[status] || 'from-neon-purple to-cyber-blue';
  };

  const getStatusLabel = (status: string) => {
    const labels = {
      completed: 'Completed',
      'in-progress': 'In Progress',
      planned: 'Planned'
    };
    return labels[status] || status;
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed':
        return CheckCircle;
      case 'in-progress':
        return Calendar;
      case 'planned':
        return Award;
      default:
        return Award;
    }
  };

  return (
    <section id="certifications" className="py-20 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-cyber font-bold gradient-text mb-4">
            Certifications & Courses
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-purple to-cyber-blue mx-auto mb-6"></div>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Continuous learning through industry-recognized certifications and courses
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {certifications.map((cert, index) => {
            const StatusIcon = getStatusIcon(cert.status);
            
            return (
              <div
                key={cert.id}
                className="cyber-card group hover:scale-105 transition-all duration-300"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="text-3xl">{cert.logo}</div>
                    <div>
                      <div className={`inline-flex items-center space-x-1 px-2 py-1 rounded text-xs font-medium bg-gradient-to-r ${getStatusColor(cert.status)} text-white mb-2`}>
                        <StatusIcon className="w-3 h-3" />
                        <span>{getStatusLabel(cert.status)}</span>
                      </div>
                      <h3 className="text-lg font-cyber font-bold text-white group-hover:text-neon-purple transition-colors">
                        {cert.title}
                      </h3>
                      <p className="text-neon-purple font-medium text-sm">{cert.issuer}</p>
                    </div>
                  </div>
                  
                  {cert.credentialUrl !== '#' && (
                    <button
                      onClick={() => window.open(cert.credentialUrl, '_blank')}
                      className="p-2 hover:bg-neon-purple/20 rounded-lg transition-colors group/btn"
                    >
                      <ExternalLink className="w-4 h-4 text-gray-400 group-hover/btn:text-neon-purple" />
                    </button>
                  )}
                </div>

                {/* Date */}
                <div className="flex items-center text-gray-400 text-sm mb-3">
                  <Calendar className="w-4 h-4 mr-1" />
                  {cert.date}
                </div>

                {/* Description */}
                <p className="text-gray-300 text-sm leading-relaxed mb-4">
                  {cert.description}
                </p>

                {/* Skills */}
                <div className="flex flex-wrap gap-2">
                  {cert.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2 py-1 bg-neon-purple/20 border border-neon-purple/30 rounded text-xs text-neon-purple"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Learning Stats */}
        <div className="cyber-card">
          <h3 className="text-2xl font-cyber font-bold text-center mb-8 gradient-text">
            Learning Journey
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { label: 'Certifications Earned', value: '4', icon: Award },
              { label: 'Hours of Learning', value: '200+', icon: Calendar },
              { label: 'Skills Acquired', value: '25+', icon: CheckCircle },
              { label: 'Platforms Used', value: '6', icon: ExternalLink }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="mb-3">
                  <stat.icon className="w-8 h-8 text-neon-purple mx-auto animate-pulse" />
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

        {/* Learning Philosophy */}
        <div className="mt-12 text-center">
          <div className="cyber-card max-w-3xl mx-auto">
            <h4 className="text-xl font-cyber font-semibold mb-4 text-neon-purple">
              Continuous Learning Philosophy
            </h4>
            <p className="text-gray-300 leading-relaxed">
              "Technology evolves rapidly, and staying current requires constant learning. I believe in 
              building a strong foundation through formal education while staying adaptable through 
              continuous skill development. Each certification represents not just knowledge gained, 
              but a commitment to excellence in software development."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
