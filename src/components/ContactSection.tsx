const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-surface">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 
            className="text-4xl md:text-5xl font-bold text-cyan-primary mb-8"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            📞 Contact Us
          </h2>
          
          <p 
            className="text-xl text-muted-foreground leading-relaxed mb-12"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="300"
          >
            Ready to transform your startup idea into a digital reality? Let's discuss your project 
            and explore how we can help you achieve your goals. We're excited to hear from you!
          </p>
          
          <div 
            className="grid md:grid-cols-3 gap-8 mb-12"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="600"
          >
            <div className="text-center">
              <div className="w-16 h-16 bg-cyan-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📧</span>
              </div>
              <h3 className="font-bold text-foreground mb-2">Email</h3>
              <p className="text-muted-foreground">jeevantechinnovations@gmail.com</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-cyan-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📱</span>
              </div>
              <h3 className="font-bold text-foreground mb-2">Phone</h3>
              <p className="text-muted-foreground">+91 9389848096</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-cyan-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💬</span>
              </div>
              <h3 className="font-bold text-foreground mb-2">Response Time</h3>
              <p className="text-muted-foreground">Within 24 hours</p>
            </div>
          </div>
          
          <a 
            href="mailto:jeevantechinnovations@gmail.com"
            className="btn-primary text-lg px-8 py-4 inline-block"
            data-aos="zoom-in"
            data-aos-duration="800"
            data-aos-delay="900"
          >
            Get In Touch
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;