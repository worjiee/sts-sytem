import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin, Github, Linkedin, Twitter, Instagram, Facebook } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = () => {
    if (formData.name && formData.email && formData.subject && formData.message) {
      console.log("Form submitted:", formData);
      alert("Thank you for your message! We'll get back to you soon.");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } else {
      alert("Please fill in all fields");
    }
  };

  const [expandedCard, setExpandedCard] = useState<number | null>(null);

  const teamMembers = [
    {
      id: 1,
      name: "Karl Santino Sacayan",
      role: "Team Leader",
      image: "/lrak.jpg",
      bio: "Leading the team with strategic vision and coordination. Oversees project development and ensures alignment with climate education goals.",
      expertise: ["Project Management", "Team Coordination", "Strategic Planning"],
      social: {
        instagram: "https://www.instagram.com/karl.morgann/"
      }
    },
    {
      id: 2,
      name: "Andrei Shinjiro Pelayo",
      role: "Presenter",
      image: "/jiro.png",
      bio: "Expert in communicating complex climate science concepts. Delivers engaging presentations on climate modeling and simulation results.",
      expertise: ["Public Speaking", "Data Visualization", "Science Communication"],
      social: {
        instagram: "https://www.instagram.com/jirosaurr_/"
      }
    },
    {
      id: 3,
      name: "John Carl Escultura",
      role: "Researcher",
      image: "/carl.png",
      bio: "Conducts in-depth research on climate patterns and environmental impact. Contributes to data analysis and scientific documentation.",
      expertise: ["Climate Research", "Data Analysis", "Environmental Science"],
      social: {
        instagram: "https://www.instagram.com/whoisjcarl/"
      }
    },
    {
      id: 4,
      name: "James Archie Ebora",
      role: "Researcher",
      image: "/jeebora.png",
      bio: "Focuses on climate change mitigation strategies and sustainable development. Researches innovative solutions for environmental challenges.",
      expertise: ["Sustainability Research", "Climate Mitigation", "Policy Analysis"],
      social: {
        instagram: "https://www.instagram.com/vntgchie_/"
      }
    },
    {
      id: 5,
      name: "Mark Dustine Cadiente",
      role: "Researcher",
      image: "/dustinee.png",
      bio: "Analyzes climate data trends and patterns. Contributes to research documentation and scientific literature review.",
      expertise: ["Data Analysis", "Research Documentation", "Statistical Analysis"],
      social: {
        instagram: "https://www.instagram.com/markyyeyyy/"
      }
    },
    {
      id: 6,
      name: "Raven Mendoza",
      role: "Simulation Operator",
      image: "/venn.jpg",
      bio: "Manages and operates climate simulation models. Ensures accurate data input and monitors simulation performance.",
      expertise: ["NetLogo Modeling", "Simulation Management", "Technical Operations"],
      social: {
        instagram: "https://www.instagram.com/ravenmndz_/"
      }
    },
    {
      id: 7,
      name: "Dwayne Lee",
      role: "Presenter",
      image: "/lee.png",
      bio: "Specializes in presenting research findings and simulation outcomes. Creates engaging narratives around climate data.",
      expertise: ["Presentation Design", "Storytelling", "Audience Engagement"],
      social: {
        instagram: "https://www.instagram.com/kerrvin_/"
      }
    },
    {
      id: 8,
      name: "Navin Kumar",
      role: "SDG Analyst",
      image: "/kumar.png",
      bio: "Analyzes alignment with UN Sustainable Development Goals. Evaluates project impact on global sustainability targets.",
      expertise: ["SDG Framework", "Impact Assessment", "Sustainability Metrics"],
      social: {
        instagram: "https://www.instagram.com/nnav_.0/"
      }
    }
  ];

  const getSocialIcon = (platform) => {
    switch (platform) {
      case 'github':
        return <Github className="h-4 w-4" />;
      case 'linkedin':
        return <Linkedin className="h-4 w-4" />;
      case 'twitter':
        return <Twitter className="h-4 w-4" />;
      case 'instagram':
        return <Instagram className="h-4 w-4" />;
      case 'facebook':
        return <Facebook className="h-4 w-4" />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      {/* Add padding-top to account for fixed/sticky navbar */}
      <main className="flex-1 pt-20 sm:pt-24 pb-6 sm:pb-8 lg:pb-12 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-7xl">
          {/* Header */}
          <div className="mb-8 sm:mb-10 lg:mb-12 animate-fade-in">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-3 sm:mb-4">
              Contact Us
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-3xl">
              Get in touch with our team of climate experts and developers. We're here to help you understand climate change and explore our interactive simulations.
            </p>
          </div>

          {/* Contact Form */}
          <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 mb-10 sm:mb-12">
            <Card className="shadow-medium border-border">
              <CardHeader className="space-y-1 p-4 sm:p-6">
                <CardTitle className="flex items-center gap-2 text-lg sm:text-xl">
                  <Mail className="h-5 w-5 text-primary flex-shrink-0" />
                  Send us a Message
                </CardTitle>
                <CardDescription className="text-sm sm:text-base">
                  Have questions about our climate simulator? We'd love to hear from you.
                </CardDescription>
              </CardHeader>
              <CardContent className="p-4 sm:p-6 pt-0 sm:pt-0">
                <div className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-sm">Name</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Your name"
                        className="w-full"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-sm">Email</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="your.email@example.com"
                        className="w-full"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="subject" className="text-sm">Subject</Label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      placeholder="What's this about?"
                      className="w-full"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-sm">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell us more about your inquiry..."
                      rows={5}
                      className="w-full resize-none"
                    />
                  </div>
                  <Button onClick={handleSubmit} className="w-full">
                    Send Message
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-4 sm:space-y-6">
              <Card className="shadow-medium border-border">
                <CardHeader className="p-4 sm:p-6">
                  <CardTitle className="flex items-center gap-2 text-lg sm:text-xl">
                    <MapPin className="h-5 w-5 text-primary flex-shrink-0" />
                    Get in Touch
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 p-4 sm:p-6 pt-0 sm:pt-0">
                  <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-muted-foreground flex-shrink-0" />
                    <span className="text-sm sm:text-base break-all">kfsacayan@fit.edu.ph</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="h-5 w-5 text-muted-foreground flex-shrink-0" />
                    <span className="text-sm sm:text-base">+63 (910) 609-1322</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="h-5 w-5 text-muted-foreground flex-shrink-0" />
                    <span className="text-sm sm:text-base">FEU Institute of Technology, Manila</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-medium border-border">
                <CardHeader className="p-4 sm:p-6">
                  <CardTitle className="text-lg sm:text-xl">Follow Us</CardTitle>
                  <CardDescription className="text-sm sm:text-base">
                    Stay updated with our latest climate research and simulations.
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-4 sm:p-6 pt-0 sm:pt-0">
                  <div className="flex flex-wrap gap-2 sm:gap-3">
                    <Button variant="outline" size="sm" className="flex items-center gap-2 text-xs sm:text-sm">
                      <Github className="h-4 w-4" />
                      <span className="hidden xs:inline">GitHub</span>
                    </Button>
                    <Button variant="outline" size="sm" className="flex items-center gap-2 text-xs sm:text-sm">
                      <Twitter className="h-4 w-4" />
                      <span className="hidden xs:inline">Twitter</span>
                    </Button>
                    <Button variant="outline" size="sm" className="flex items-center gap-2 text-xs sm:text-sm">
                      <Linkedin className="h-4 w-4" />
                      <span className="hidden xs:inline">LinkedIn</span>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Team Section */}
          <div className="mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4 sm:mb-6 text-center">
              Meet Our Team
            </h2>
            <p className="text-sm sm:text-base text-muted-foreground text-center mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
              Our diverse team of climate scientists, developers, and researchers work together to create meaningful climate education tools.
            </p>
            
            <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {teamMembers.map((member) => {
                const isExpanded = expandedCard === member.id;
                return (
                  <Card 
                    key={member.id} 
                    className={`bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950 dark:to-purple-950 shadow-medium border-border hover:shadow-lg transition-all duration-300 cursor-pointer ${
                      isExpanded ? 'ring-2 ring-primary' : ''
                    }`}
                    onClick={() => setExpandedCard(isExpanded ? null : member.id)}
                  >
                    <CardContent className="p-4 sm:p-6 text-center">
                      <div className="mb-3 sm:mb-4">
                        <img
                          src={member.image}
                          alt={member.name}
                          className={`mx-auto object-cover border-2 border-border rounded-full transition-all duration-300 ${
                            isExpanded 
                              ? 'w-24 h-24 sm:w-32 sm:h-32 ring-4 ring-primary/20' 
                              : 'w-16 h-16 sm:w-20 sm:h-20'
                          }`}
                        />
                      </div>
                      <h3 className="font-semibold text-foreground mb-1 text-sm sm:text-base">{member.name}</h3>
                      <p className="text-xs sm:text-sm text-muted-foreground mb-3 sm:mb-4">{member.role}</p>
                      
                      {/* Expanded Content */}
                      <div 
                        className={`overflow-hidden transition-all duration-300 ${
                          isExpanded ? 'max-h-96 opacity-100 mb-4' : 'max-h-0 opacity-0'
                        }`}
                      >
                        <div className="text-left space-y-3 pt-2 border-t border-border/50">
                          <p className="text-xs sm:text-sm text-foreground/80 leading-relaxed">
                            {member.bio}
                          </p>
                          <div>
                            <h4 className="text-xs font-semibold text-foreground mb-2">Expertise:</h4>
                            <div className="flex flex-wrap gap-1.5">
                              {member.expertise.map((skill, index) => (
                                <span 
                                  key={index}
                                  className="px-2 py-1 bg-primary/10 text-primary rounded-full text-xs"
                                >
                                  {skill}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex justify-center gap-1 sm:gap-2">
                        {Object.entries(member.social).map(([platform, url]) => (
                          <Button
                            key={platform}
                            variant="ghost"
                            size="sm"
                            className="h-7 w-7 sm:h-8 sm:w-8 p-0"
                            onClick={(e) => {
                              e.stopPropagation();
                              window.open(url, '_blank');
                            }}
                          >
                            {getSocialIcon(platform)}
                          </Button>
                        ))}
                      </div>
                      
                      {/* Expand/Collapse Indicator */}
                      <div className="mt-3 text-xs text-muted-foreground">
                        {isExpanded ? '▲ Click to collapse' : '▼ Click for details'}
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;