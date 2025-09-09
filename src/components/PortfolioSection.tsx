const PortfolioSection = () => {
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A comprehensive marketplace solution with advanced search, payment processing, and vendor management systems.",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      category: "Web Development"
    },
    {
      id: 2,
      title: "FinTech Mobile App",
      description: "Secure financial application with real-time transactions, budget tracking, and investment portfolio management.",
      technologies: ["React Native", "Firebase", "Payment APIs"],
      category: "Mobile Development"
    },
    {
      id: 3,
      title: "Healthcare Dashboard",
      description: "Intuitive patient management system with appointment scheduling, medical records, and telemedicine features.",
      technologies: ["Vue.js", "Python", "PostgreSQL"],
      category: "Web Application"
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-surface">
      <div className="container mx-auto px-6">
        <h2 
          className="text-4xl md:text-5xl font-bold text-center text-cyan-primary mb-16"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
           Our Portfolio
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="card-hover p-8 group"
              data-aos="zoom-in"
              data-aos-duration="1000"
              data-aos-delay={index * 200}
            >
              <div className="mb-4">
                <span className="text-xs font-semibold text-cyan-secondary bg-cyan-secondary/10 px-3 py-1 rounded-full">
                  {project.category}
                </span>
              </div>
              
              <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-cyan-primary transition-colors duration-300">
                {project.title}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed mb-6">
                {project.description}
              </p>
              
              {/* Technology Tags */}
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="text-xs font-medium text-cyan-primary bg-cyan-primary/10 px-2 py-1 rounded-md border border-cyan-primary/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              {/* View Project Button */}
              <div className="mt-6 pt-4 border-t border-surface-elevated">
                <button className="text-cyan-primary hover:text-cyan-glow font-medium text-sm transition-colors duration-300 flex items-center space-x-1">
                  <span>View Project</span>
                  <span className="transform group-hover:translate-x-1 transition-transform duration-300">→</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;