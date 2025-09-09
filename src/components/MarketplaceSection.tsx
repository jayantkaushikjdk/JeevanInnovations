const MarketplaceSection = () => {
  return (
    <section id="marketplace" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 
            className="text-4xl md:text-5xl font-bold text-cyan-primary mb-8"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
             Marketplace Solutions
          </h2>
          
          <p 
            className="text-xl text-muted-foreground leading-relaxed"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="300"
          >
            We specialize in building custom marketplace platforms that connect buyers and sellers 
            seamlessly. Our solutions include multi-vendor support, advanced search capabilities, 
            secure payment processing, real-time analytics, and comprehensive admin dashboards. 
            Whether you're launching a B2B marketplace, C2C platform, or specialized niche marketplace, 
            we have the expertise to bring your vision to life.
          </p>
          
          <div 
            className="grid md:grid-cols-3 gap-8 mt-12"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="600"
          >
            <div className="text-center">
              <div className="w-16 h-16 bg-cyan-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🏪</span>
              </div>
              <h3 className="font-bold text-foreground mb-2">Multi-Vendor</h3>
              <p className="text-muted-foreground text-sm">Support for multiple sellers with individual dashboards</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-cyan-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💳</span>
              </div>
              <h3 className="font-bold text-foreground mb-2">Secure Payments</h3>
              <p className="text-muted-foreground text-sm">Integrated payment gateways with fraud protection</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-cyan-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📊</span>
              </div>
              <h3 className="font-bold text-foreground mb-2">Analytics</h3>
              <p className="text-muted-foreground text-sm">Real-time insights and performance metrics</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MarketplaceSection;