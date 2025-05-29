
import { useState, useEffect } from 'react';
import { Eye, Users, Globe } from 'lucide-react';

const VisitorCounter = () => {
  const [stats, setStats] = useState({
    visitors: 1337,
    views: 2848,
    countries: 42
  });

  useEffect(() => {
    // Simulate real-time updates
    const interval = setInterval(() => {
      setStats(prev => ({
        visitors: prev.visitors + Math.floor(Math.random() * 3),
        views: prev.views + Math.floor(Math.random() * 5),
        countries: prev.countries + (Math.random() > 0.95 ? 1 : 0)
      }));
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  const statItems = [
    {
      icon: Users,
      value: stats.visitors.toLocaleString(),
      label: 'Visitors',
      color: 'text-neon-purple'
    },
    {
      icon: Eye,
      value: stats.views.toLocaleString(),
      label: 'Page Views',
      color: 'text-cyber-blue'
    },
    {
      icon: Globe,
      value: stats.countries.toString(),
      label: 'Countries',
      color: 'text-neon-pink'
    }
  ];

  return (
    <div className="fixed bottom-6 right-6 z-40">
      <div className="cyber-card p-4 bg-cyber-dark/95 backdrop-blur-sm">
        <h3 className="text-sm font-cyber font-bold text-center mb-3 gradient-text">
          Live Stats
        </h3>
        <div className="space-y-3">
          {statItems.map((item, index) => (
            <div key={index} className="flex items-center space-x-3">
              <item.icon className={`w-4 h-4 ${item.color}`} />
              <div className="flex-1">
                <div className={`text-lg font-cyber font-bold ${item.color}`}>
                  {item.value}
                </div>
                <div className="text-xs text-gray-400">{item.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VisitorCounter;
