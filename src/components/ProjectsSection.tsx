
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Github, ExternalLink, Filter } from 'lucide-react';

const ProjectsSection = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'DevTracker',
      description: 'A productivity app for developers to log tasks, track commits, and manage project timelines with real-time analytics.',
      tags: ['React', 'Node.js', 'MongoDB', 'Express'],
      category: 'fullstack',
      image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=500&h=300&fit=crop',
      github: 'https://github.com/nitishnaik/devtracker',
      demo: 'https://devtracker-demo.vercel.app',
      featured: true
    },
    {
      id: 2,
      title: 'Code Collab',
      description: 'Real-time collaborative code editor with live syntax highlighting, multiple language support, and integrated chat.',
      tags: ['Next.js', 'Socket.io', 'TypeScript', 'Redis'],
      category: 'frontend',
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=500&h=300&fit=crop',
      github: 'https://github.com/nitishnaik/code-collab',
      demo: 'https://codecollab-live.vercel.app',
      featured: true
    },
    {
      id: 3,
      title: 'AI Study Buddy',
      description: 'An intelligent study companion that creates personalized quizzes, tracks learning progress, and provides smart recommendations.',
      tags: ['Python', 'FastAPI', 'OpenAI', 'PostgreSQL'],
      category: 'ai',
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=500&h=300&fit=crop',
      github: 'https://github.com/nitishnaik/ai-study-buddy',
      demo: 'https://ai-study-buddy.herokuapp.com',
      featured: false
    },
    {
      id: 4,
      title: 'Smart Expense Tracker',
      description: 'Personal finance management app with OCR receipt scanning, budget alerts, and expense categorization.',
      tags: ['React Native', 'Firebase', 'TensorFlow', 'Chart.js'],
      category: 'mobile',
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=500&h=300&fit=crop',
      github: 'https://github.com/nitishnaik/expense-tracker',
      demo: 'https://play.google.com/store/apps/details?id=com.expense.tracker',
      featured: false
    },
    {
      id: 5,
      title: 'Open Source Dashboard',
      description: 'Analytics dashboard for tracking GitHub contributions, repository stats, and community engagement metrics.',
      tags: ['Vue.js', 'D3.js', 'GitHub API', 'Tailwind'],
      category: 'opensource',
      image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=500&h=300&fit=crop',
      github: 'https://github.com/nitishnaik/oss-dashboard',
      demo: 'https://oss-dashboard.netlify.app',
      featured: false
    },
    {
      id: 6,
      title: 'Climate Data Visualizer',
      description: 'Interactive web application for visualizing climate change data with predictive models and trend analysis.',
      tags: ['React', 'Python', 'Pandas', 'Plotly'],
      category: 'dataviz',
      image: 'https://images.unsplash.com/photo-1500673922987-e212871fec22?w=500&h=300&fit=crop',
      github: 'https://github.com/nitishnaik/climate-viz',
      demo: 'https://climate-data-viz.vercel.app',
      featured: false
    }
  ];

  const filters = [
    { key: 'all', label: 'All Projects' },
    { key: 'fullstack', label: 'Full Stack' },
    { key: 'frontend', label: 'Frontend' },
    { key: 'ai', label: 'AI/ML' },
    { key: 'mobile', label: 'Mobile' },
    { key: 'opensource', label: 'Open Source' },
    { key: 'dataviz', label: 'Data Viz' }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="py-20 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-cyber font-bold gradient-text mb-4">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-purple to-cyber-blue mx-auto mb-6"></div>
          <p className="text-gray-300 max-w-2xl mx-auto">
            A showcase of my technical skills and creative problem-solving through various projects
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {filters.map((filter) => (
            <button
              key={filter.key}
              onClick={() => setActiveFilter(filter.key)}
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-300 ${
                activeFilter === filter.key
                  ? 'cyber-button text-sm'
                  : 'bg-cyber-gray/30 border border-neon-purple/30 text-gray-300 hover:border-neon-purple/60 text-sm'
              }`}
            >
              <Filter className="w-4 h-4" />
              <span>{filter.label}</span>
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className={`cyber-card group hover:scale-105 transition-all duration-300 ${
                project.featured ? 'ring-2 ring-neon-purple/50' : ''
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Project Image */}
              <div className="relative overflow-hidden rounded-lg mb-4">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-cyber-dark/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {project.featured && (
                  <div className="absolute top-3 right-3 bg-gradient-to-r from-neon-purple to-cyber-blue text-white text-xs px-2 py-1 rounded-full">
                    Featured
                  </div>
                )}
              </div>

              {/* Project Info */}
              <div className="space-y-4">
                <h3 className="text-xl font-cyber font-bold text-white group-hover:text-neon-purple transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-gray-300 text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-neon-purple/20 border border-neon-purple/30 rounded text-xs text-neon-purple"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-3 pt-4">
                  <Button
                    size="sm"
                    variant="outline"
                    className="flex-1 neon-border hover:bg-neon-purple/10 group/btn"
                    onClick={() => window.open(project.github, '_blank')}
                  >
                    <Github className="w-4 h-4 mr-2 group-hover/btn:rotate-12 transition-transform" />
                    Code
                  </Button>
                  
                  <Button
                    size="sm"
                    className="flex-1 cyber-button group/btn"
                    onClick={() => window.open(project.demo, '_blank')}
                  >
                    <ExternalLink className="w-4 h-4 mr-2 group-hover/btn:scale-110 transition-transform" />
                    Demo
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center mt-12">
          <Button
            className="cyber-button group"
            onClick={() => window.open('https://github.com/nitishnaik', '_blank')}
          >
            <Github className="w-4 h-4 mr-2 group-hover:rotate-12 transition-transform" />
            View All Projects on GitHub
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
