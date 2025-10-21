import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, GraduationCap, Target, Lightbulb } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <main className="flex-1 pt-24 pb-12 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="mb-12 text-center animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              About This Project
            </h1>
            <p className="text-xl text-muted-foreground">
              An educational tool to understand climate change through interactive simulation
            </p>
          </div>
          
          <div className="space-y-8">
            <Card className="shadow-medium border-border animate-slide-up">
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10">
                    <Target className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl mb-2">Project Purpose</CardTitle>
                    <CardDescription className="text-base">
                      The Global Temperature Simulator is an educational web application designed to help students, 
                      educators, and the general public understand the direct relationship between atmospheric CO₂ 
                      levels and global temperature changes. By providing an interactive, visual representation of 
                      climate science, we aim to make climate change more tangible and understandable.
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
            </Card>
            
            <Card className="shadow-medium border-border animate-slide-up" style={{ animationDelay: "0.1s" }}>
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-secondary/10">
                    <BookOpen className="h-6 w-6 text-secondary" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl mb-2">How It Works</CardTitle>
                    <CardDescription className="text-base space-y-3">
                      <p>
                        This simulator uses a simplified climate model based on established scientific relationships 
                        between greenhouse gases and temperature. The calculation follows this principle:
                      </p>
                      <div className="bg-muted/50 p-4 rounded-lg font-mono text-sm border border-border">
                        Temperature = 14°C + (CO₂ - 280 ppm) × 0.01
                      </div>
                      <p>
                        Where 14°C represents the pre-industrial global average temperature and 280 ppm is the 
                        pre-industrial CO₂ level. This linear approximation helps demonstrate the concept, though 
                        real climate systems involve many additional factors and feedback loops.
                      </p>
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
            </Card>
            
            <Card className="shadow-medium border-border animate-slide-up" style={{ animationDelay: "0.2s" }}>
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-accent/10">
                    <Lightbulb className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl mb-2">SDG 13: Climate Action</CardTitle>
                    <CardDescription className="text-base space-y-3">
                      <p>
                        This project directly supports United Nations Sustainable Development Goal 13: Climate Action. 
                        SDG 13 calls for urgent action to combat climate change and its impacts. The goal includes:
                      </p>
                      <ul className="list-disc list-inside space-y-2 ml-4">
                        <li>Strengthening resilience and adaptive capacity to climate-related hazards</li>
                        <li>Integrating climate change measures into national policies and planning</li>
                        <li>Improving education and awareness on climate change mitigation</li>
                        <li>Implementing commitments under the Paris Agreement</li>
                      </ul>
                      <p>
                        By making climate science accessible and interactive, we contribute to the educational 
                        component of climate action, empowering individuals to understand and address this 
                        global challenge.
                      </p>
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
            </Card>
            
            <Card className="shadow-medium border-border animate-slide-up" style={{ animationDelay: "0.3s" }}>
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10">
                    <GraduationCap className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl mb-2">Technical Implementation</CardTitle>
                    <CardDescription className="text-base space-y-3">
                      <p>
                        This application is built using modern web technologies to ensure a smooth, responsive 
                        user experience:
                      </p>
                      <ul className="list-disc list-inside space-y-2 ml-4">
                        <li><strong>React</strong> - Component-based UI framework for interactive interfaces</li>
                        <li><strong>TypeScript</strong> - Type-safe development for reliability</li>
                        <li><strong>Tailwind CSS</strong> - Utility-first styling for beautiful, responsive design</li>
                        <li><strong>Recharts</strong> - Data visualization library for interactive charts</li>
                        <li><strong>Vite</strong> - Fast build tool and development server</li>
                      </ul>
                      <p className="mt-4">
                        Developed as part of the GED0011 course project, this application demonstrates the 
                        practical application of web development skills to address real-world educational needs.
                      </p>
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
            </Card>
            
            <div className="mt-8 p-8 rounded-2xl bg-gradient-hero text-white text-center shadow-strong animate-slide-up" style={{ animationDelay: "0.4s" }}>
              <h3 className="text-2xl font-bold mb-3">
                Take Action Today
              </h3>
              <p className="text-lg text-white/90 mb-4">
                Understanding climate change is the first step. The next is taking action in your own life 
                to reduce emissions, support sustainable practices, and advocate for climate policies.
              </p>
              <p className="text-sm text-white/80">
                Every degree matters. Every action counts.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;
