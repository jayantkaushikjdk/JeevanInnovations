const TeamSection = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Jayant Kaushik",
      role: "Founder & CEO",
      image: "https://drive.google.com/file/d/1vnC12RRitBhCPwXQ5IfvBDo3j5nMQk_g/view?usp=drive_link",
      description: "Tech entrepreneur with 8+ years in digital transformation"
    },
    {
      id: 2,
      name: "Ankit Kumar",
      role: "Chief Technology Officer",
      image: "https://drive.google.com/file/d/1sAB3vUeIIYM4j3aVzObJgnkraelTV0p3/view?usp=drive_link",
      description: "Full-stack developer and system architecture expert"
    },
    {
      id: 3,
      name: "Fatima Zoya Ali Khan",
      role: "Marketing Head",
      image: "https://drive.google.com/file/d/1_xtOOU-gosq1eUmgfWlkLvwCDKtih4On/view?usp=drive_link",
      description: "UI/UX specialist with passion for user-centered design"
    }
  ];

  return (
    <section id="team" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <h2 
          className="text-4xl md:text-5xl font-bold text-center text-cyan-primary mb-16"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          👥 Founders & Board Members
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {teamMembers.map((member, index) => (
            <div
              key={member.id}
              className="card-hover p-8 text-center group"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay={index * 200}
            >
              <div className="relative mb-6">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-32 h-34 rounded-full mx-auto object-cover border-4 border-cyan-primary/20 group-hover:border-cyan-primary/50 transition-all duration-300"
                />
                <div className="absolute inset-0 w-32 h-32 rounded-full mx-auto bg-gradient-to-tr from-cyan-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <h3 className="text-xl font-bold text-cyan-primary mb-2">
                {member.name}
              </h3>
              
              <p className="text-muted-foreground font-medium mb-4">
                {member.role}
              </p>
              
              <p className="text-sm text-muted-foreground leading-relaxed">
                {member.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;