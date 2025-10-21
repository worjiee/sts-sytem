import { useState } from "react";
import Navbar from "@/components/Navbar";
import SimulationPanel from "@/components/SimulationPanel";
import TemperatureChart from "@/components/TemperatureChart";
import Footer from "@/components/Footer";
import { Info } from "lucide-react";

const Simulation = () => {
  const [co2, setCO2] = useState(420); // Current approximate CO₂ level
  
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <main className="flex-1 pt-24 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-7xl">
          <div className="mb-6 sm:mb-8 animate-fade-in">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-2 sm:mb-3">
              Interactive Climate Simulator
            </h1>
            <p className="text-base sm:text-lg text-muted-foreground">
              Adjust the CO₂ levels and observe the impact on global temperature in real-time
            </p>
          </div>
          
          <div className="bg-accent/10 border border-accent/30 rounded-lg p-3 sm:p-4 mb-6 sm:mb-8 flex flex-col sm:flex-row items-start gap-3 animate-fade-in">
            <Info className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
            <div className="text-sm text-foreground">
              <p className="font-medium mb-1">How this works:</p>
              <p className="text-muted-foreground">
                This simplified model shows the relationship between atmospheric CO₂ concentration and global temperature. 
                Each 100 ppm increase in CO₂ results in approximately 1°C temperature rise. Real climate systems are more complex, 
                but this demonstrates the fundamental relationship.
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 lg:gap-8">
            <div className="order-1 xl:order-1">
              <SimulationPanel co2={co2} setCO2={setCO2} />
            </div>
            <div className="order-2 xl:order-2">
              <TemperatureChart co2={co2} />
            </div>
          </div>
          
          <div className="mt-6 sm:mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            <div className="p-4 sm:p-6 rounded-lg bg-card border border-border shadow-soft animate-slide-up" style={{ animationDelay: "0.2s" }}>
              <div className="text-2xl sm:text-3xl font-bold text-accent mb-2">280 ppm</div>
              <div className="text-sm font-medium text-foreground mb-1">Pre-Industrial Era</div>
              <div className="text-xs text-muted-foreground">
                Baseline CO₂ level before the industrial revolution (1750)
              </div>
            </div>
            
            <div className="p-4 sm:p-6 rounded-lg bg-card border border-border shadow-soft animate-slide-up" style={{ animationDelay: "0.3s" }}>
              <div className="text-2xl sm:text-3xl font-bold text-primary mb-2">420 ppm</div>
              <div className="text-sm font-medium text-foreground mb-1">Current Level (2024)</div>
              <div className="text-xs text-muted-foreground">
                Highest CO₂ concentration in human history
              </div>
            </div>
            
            <div className="p-4 sm:p-6 rounded-lg bg-card border border-destructive shadow-soft animate-slide-up sm:col-span-2 lg:col-span-1" style={{ animationDelay: "0.4s" }}>
              <div className="text-2xl sm:text-3xl font-bold text-destructive mb-2">500+ ppm</div>
              <div className="text-sm font-medium text-foreground mb-1">Danger Zone</div>
              <div className="text-xs text-muted-foreground">
                Projected level if emissions continue unchecked
              </div>
            </div>
          </div>

        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Simulation;
