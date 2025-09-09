const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-surface">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 
            className="text-4xl md:text-5xl font-bold text-cyan-primary mb-8"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
             About Jeevan Innovation
          </h2>
          
          <p 
            className="text-xl text-muted-foreground leading-relaxed mb-8"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="300"
          >
            At Jeevan Innovation, we believe that every startup has the potential to change the world. 
            Our mission is to empower entrepreneurs and growing businesses with cutting-edge digital 
            solutions that drive growth, enhance user experience, and create lasting impact.
          </p>
          
          <p 
            className="text-lg text-muted-foreground leading-relaxed"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="600"
          >
            Founded by passionate technologists and business strategists, we combine technical 
            expertise with deep understanding of startup challenges. We don't just build software – 
            we craft digital experiences that resonate with your audience and scale with your ambitions.
          </p>
          
          <div 
            className="grid md:grid-cols-3 gap-8 mt-12"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="900"
          >
            <div className="text-center">
              <div className="text-4xl font-bold text-cyan-primary mb-2">50+</div>
              <p className="text-muted-foreground">Projects Delivered</p>
            </div>
            
            <div className="text-center">
              <div className="text-4xl font-bold text-cyan-primary mb-2">25+</div>
              <p className="text-muted-foreground">Happy Clients</p>
            </div>
            
            <div className="text-center">
              <div className="text-4xl font-bold text-cyan-primary mb-2">3+</div>
              <p className="text-muted-foreground">Years Experience</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;