
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Github, Linkedin, Mail, Send, CheckCircle, AlertCircle, MapPin, Phone } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({});
  const { toast } = useToast();

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 30) {
      newErrors.message = 'Message must be at least 30 characters long';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      toast({
        title: "Validation Error",
        description: "Please fix the errors in the form",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setFormData({ name: '', email: '', message: '' });
      setErrors({});
      
      toast({
        title: "Message Sent! ✨",
        description: "Thanks for reaching out! I'll get back to you soon.",
      });
    }, 2000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const socialLinks = [
    {
      name: 'GitHub',
      icon: Github,
      url: 'https://github.com/nitishnaik',
      color: 'hover:text-gray-300',
      description: 'Check out my code'
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      url: 'https://linkedin.com/in/nitishnaik',
      color: 'hover:text-blue-400',
      description: 'Let\'s connect professionally'
    },
    {
      name: 'Email',
      icon: Mail,
      url: 'mailto:nitish@example.com',
      color: 'hover:text-neon-purple',
      description: 'Send me an email'
    }
  ];

  const contactInfo = [
    {
      icon: MapPin,
      label: 'Location',
      value: 'Hyderabad, India',
      subtext: 'Open to remote opportunities'
    },
    {
      icon: Mail,
      label: 'Email',
      value: 'nitish@example.com',
      subtext: 'Response within 24 hours'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 98765 43210',
      subtext: 'Available Mon-Fri, 9 AM - 6 PM IST'
    }
  ];

  return (
    <section id="contact" className="py-20 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-cyber font-bold gradient-text mb-4">
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-purple to-cyber-blue mx-auto mb-6"></div>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Ready to collaborate on exciting projects? Let's discuss how we can work together to build something amazing.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="cyber-card">
            <h3 className="text-2xl font-cyber font-bold text-white mb-6">
              Send a Message
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Field */}
              <div>
                <Input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`neon-border bg-cyber-gray/50 text-white placeholder-gray-400 focus:border-neon-purple transition-all duration-300 ${
                    errors.name ? 'border-red-500' : ''
                  }`}
                />
                {errors.name && (
                  <div className="flex items-center mt-2 text-red-400 text-sm">
                    <AlertCircle className="w-4 h-4 mr-1" />
                    {errors.name}
                  </div>
                )}
              </div>

              {/* Email Field */}
              <div>
                <Input
                  type="email"
                  name="email"
                  placeholder="your.email@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  className={`neon-border bg-cyber-gray/50 text-white placeholder-gray-400 focus:border-neon-purple transition-all duration-300 ${
                    errors.email ? 'border-red-500' : ''
                  }`}
                />
                {errors.email && (
                  <div className="flex items-center mt-2 text-red-400 text-sm">
                    <AlertCircle className="w-4 h-4 mr-1" />
                    {errors.email}
                  </div>
                )}
              </div>

              {/* Message Field */}
              <div>
                <Textarea
                  name="message"
                  placeholder="Tell me about your project or just say hello! (minimum 30 characters)"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className={`neon-border bg-cyber-gray/50 text-white placeholder-gray-400 focus:border-neon-purple transition-all duration-300 resize-none ${
                    errors.message ? 'border-red-500' : ''
                  }`}
                />
                <div className="flex justify-between mt-2">
                  {errors.message && (
                    <div className="flex items-center text-red-400 text-sm">
                      <AlertCircle className="w-4 h-4 mr-1" />
                      {errors.message}
                    </div>
                  )}
                  <div className="text-xs text-gray-400 ml-auto">
                    {formData.message.length}/30 minimum
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                disabled={isSubmitting}
                className={`w-full cyber-button group ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
              >
                {isSubmitting ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform" />
                    Send Message
                  </>
                )}
              </Button>
            </form>
          </div>

          {/* Contact Info & Social Links */}
          <div className="space-y-8">
            {/* Contact Information */}
            <div className="cyber-card">
              <h3 className="text-2xl font-cyber font-bold text-white mb-6">
                Contact Information
              </h3>
              
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="p-3 bg-gradient-to-br from-neon-purple to-cyber-blue rounded-lg">
                      <info.icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold">{info.label}</h4>
                      <p className="text-neon-purple font-medium">{info.value}</p>
                      <p className="text-gray-400 text-sm">{info.subtext}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div className="cyber-card">
              <h3 className="text-2xl font-cyber font-bold text-white mb-6">
                Connect With Me
              </h3>
              
              <div className="space-y-4">
                {socialLinks.map((link, index) => (
                  <button
                    key={index}
                    onClick={() => window.open(link.url, '_blank')}
                    className={`w-full flex items-center space-x-4 p-4 bg-cyber-gray/30 border border-neon-purple/30 rounded-lg transition-all duration-300 hover:border-neon-purple/60 hover:scale-105 group ${link.color}`}
                  >
                    <link.icon className="w-6 h-6 text-neon-purple group-hover:animate-pulse" />
                    <div className="text-left">
                      <div className="text-white font-semibold">{link.name}</div>
                      <div className="text-gray-400 text-sm">{link.description}</div>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Quick Hire CTA */}
            <div className="cyber-card bg-gradient-to-r from-neon-purple/20 to-cyber-blue/20 border-neon-purple/50">
              <div className="text-center">
                <h4 className="text-xl font-cyber font-bold text-white mb-2">
                  Ready to Hire Me?
                </h4>
                <p className="text-gray-300 mb-4">
                  Let's discuss your project requirements and how I can contribute to your team's success.
                </p>
                <Button
                  className="cyber-button group"
                  onClick={() => window.open('mailto:nitish@example.com?subject=Job Opportunity', '_blank')}
                >
                  <Mail className="w-4 h-4 mr-2 group-hover:animate-pulse" />
                  Hire Nitish
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
