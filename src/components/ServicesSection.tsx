const ServicesSection = () => {
  const services = [
    {
      id: 1,
      title: "🌐 Web Development",
      description: "Modern, responsive websites and web applications built with cutting-edge technologies for optimal performance and user experience.",
      technologies: [
        { name: "HTML5", icon: "🌐" },
        { name: "CSS3", icon: "🎨" },
        { name: "JavaScript", icon: "⚡" },
        { name: "React", icon: "⚛️" }
      ],
      aosEffect: "fade-right"
    },
    {
      id: 2,
      title: "📱 Mobile App Development",
      description: "Native and cross-platform mobile applications that deliver seamless user experiences across iOS and Android devices.",
      technologies: [
        { name: "React Native", icon: "📱" },
        { name: "Flutter", icon: "🦋" },
        { name: "Android", icon: "🤖" },
        { name: "iOS", icon: "🍎" }
      ],
      aosEffect: "fade-left"
    },
    {
      id: 3,
      title: "🎨 UI/UX Design",
      description: "Intuitive and visually appealing designs that enhance user engagement and drive business growth through thoughtful user experience.",
      technologies: [
        { name: "Figma", icon: "🎯" },
        { name: "Adobe XD", icon: "✨" },
        { name: "Sketch", icon: "📐" },
        { name: "Prototyping", icon: "🔄" }
      ],
      aosEffect: "fade-up"
    }
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <h2 
          className="text-4xl md:text-5xl font-bold text-center text-cyan-primary mb-16"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          🚀 Our Services
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <div
              key={service.id}
              className="card-hover p-8"
              data-aos={service.aosEffect}
              data-aos-duration="1000"
              data-aos-delay={index * 200}
            >
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-cyan-primary mb-4">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>
              
              {/* Technology Icons */}
              <div className="flex flex-wrap gap-3 mt-6">
                {service.technologies.map((tech, techIndex) => (
                  <div
                    key={techIndex}
                    className="flex items-center space-x-2 bg-surface-elevated px-3 py-2 rounded-lg hover:bg-hover-surface transition-colors duration-300"
                  >
                    <span className="text-lg">{tech.icon}</span>
                    <span className="text-sm text-foreground font-medium">
                      {tech.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;