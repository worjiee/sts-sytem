import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Target, Globe, Leaf, Users } from "lucide-react";

const SDGInfo = () => {
  const impacts = [
    {
      icon: Globe,
      title: "Climate Action",
      description: "SDG 13 aims to take urgent action to combat climate change and its impacts through mitigation and adaptation strategies.",
    },
    {
      icon: Leaf,
      title: "Environmental Impact",
      description: "Rising CO₂ levels lead to global warming, extreme weather events, and ecosystem disruption affecting biodiversity worldwide.",
    },
    {
      icon: Users,
      title: "Human Consequences",
      description: "Climate change threatens food security, water availability, and human health, particularly affecting vulnerable communities.",
    },
    {
      icon: Target,
      title: "Action Required",
      description: "We must reduce greenhouse gas emissions, transition to renewable energy, and implement sustainable practices globally.",
    },
  ];
  
  return (
    <section className="py-16 px-4 bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            <Target className="h-4 w-4" />
            <span>UN Sustainable Development Goal 13</span>
          </div>
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Climate Action: Our Global Challenge
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Understanding the connection between CO₂ emissions and global temperature is crucial for taking meaningful climate action.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {impacts.map((impact, index) => (
            <Card 
              key={index} 
              className="shadow-soft border-border hover:shadow-medium transition-shadow animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10">
                    <impact.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <CardTitle className="text-xl mb-2">{impact.title}</CardTitle>
                    <CardDescription className="text-base">
                      {impact.description}
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
            </Card>
          ))}
        </div>
        
        <div className="mt-12 p-8 rounded-2xl bg-gradient-hero text-white text-center max-w-3xl mx-auto shadow-strong animate-slide-up" style={{ animationDelay: "0.4s" }}>
          <h3 className="text-2xl font-bold mb-3">
            The Paris Agreement Goal
          </h3>
          <p className="text-lg text-white/90 mb-4">
            Limit global temperature increase to well below 2°C above pre-industrial levels, 
            with efforts to limit it to 1.5°C.
          </p>
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/20 backdrop-blur-sm font-semibold">
            <span>Current trajectory: </span>
            <span className="text-yellow-300">+2.7°C by 2100</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SDGInfo;
