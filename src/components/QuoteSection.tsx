import { useState } from 'react';

const QuoteSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    budget: '',
    details: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  return (
    <section id="quote" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 
              className="text-4xl md:text-5xl font-bold text-cyan-primary mb-6"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
               Get Your Free Quote
            </h2>
            
            <p 
              className="text-xl text-muted-foreground leading-relaxed"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="300"
            >
              Tell us about your project and we'll provide you with a detailed proposal 
              tailored to your specific needs and budget.
            </p>
          </div>
          
          <div 
            className="bg-surface rounded-2xl p-8 md:p-12 shadow-card"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="600"
          >
            <form 
              action="https://formspree.io/f/your-formspree-id" 
              method="POST"
              onSubmit={handleSubmit}
              className="space-y-6"
            >
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-foreground font-medium mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="form-input"
                    placeholder="Your full name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-foreground font-medium mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="form-input"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-foreground font-medium mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="form-input"
                    placeholder="+91 98765 43210"
                  />
                </div>
                
                <div>
                  <label htmlFor="budget" className="block text-foreground font-medium mb-2">
                    Expected Budget
                  </label>
                  <input
                    type="text"
                    id="budget"
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    className="form-input"
                    placeholder="e.g., ₹50,000 - ₹2,00,000"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="details" className="block text-foreground font-medium mb-2">
                  Project Details *
                </label>
                <textarea
                  id="details"
                  name="details"
                  required
                  rows={6}
                  value={formData.details}
                  onChange={handleChange}
                  className="form-input resize-none"
                  placeholder="Please describe your project requirements, features needed, timeline, and any specific preferences..."
                ></textarea>
              </div>
              
              <div className="text-center pt-4">
                <button 
                  type="submit"
                  className="btn-primary text-lg px-8 py-4"
                >
                  Send Quote Request
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuoteSection;