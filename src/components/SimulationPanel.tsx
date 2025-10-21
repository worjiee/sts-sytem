import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AlertCircle, TrendingUp, Brain, BarChart3 } from "lucide-react";
import NetLogoIntegration from "./NetLogoIntegration";

interface SimulationPanelProps {
  co2: number;
  setCO2: (value: number) => void;
}

const SimulationPanel = ({ co2, setCO2 }: SimulationPanelProps) => {
  const baseTemp = 14; // Pre-industrial baseline in °C
  const temperature = baseTemp + (co2 - 280) * 0.01;
  const tempIncrease = temperature - baseTemp;
  
  // Determine severity level
  const getSeverity = (temp: number) => {
    if (temp < 15) return { color: "text-accent", bg: "bg-accent/10", label: "Safe" };
    if (temp < 16) return { color: "text-yellow-600", bg: "bg-yellow-50", label: "Moderate" };
    if (temp < 17) return { color: "text-orange-600", bg: "bg-orange-50", label: "Concerning" };
    return { color: "text-destructive", bg: "bg-destructive/10", label: "Critical" };
  };
  
  const severity = getSeverity(temperature);
  
  return (
    <div className="space-y-4 sm:space-y-6">
      <Card className="shadow-medium border-border animate-slide-up">
        <CardHeader className="pb-4">
          <CardTitle className="flex items-center gap-2 text-lg sm:text-xl">
            <TrendingUp className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
            CO₂ Level Control
          </CardTitle>
          <CardDescription className="text-sm">
            Adjust atmospheric CO₂ concentration (parts per million)
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4 sm:space-y-6">
          <div className="space-y-3">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
              <Label htmlFor="co2-slider" className="text-sm font-medium">
                CO₂ Concentration
              </Label>
              <span className="text-xl sm:text-2xl font-bold text-primary">
                {co2} ppm
              </span>
            </div>
            
            <Slider
              id="co2-slider"
              min={280}
              max={500}
              step={5}
              value={[co2]}
              onValueChange={(value) => setCO2(value[0])}
              className="py-2 sm:py-4"
            />
            
            <div className="flex justify-between text-xs text-muted-foreground">
              <span>280 ppm (Pre-industrial)</span>
              <span>500 ppm</span>
            </div>
          </div>
          
          <div className={`rounded-lg p-4 sm:p-6 ${severity.bg} transition-colors duration-300`}>
            <div className="flex items-start gap-3">
              <AlertCircle className={`h-4 w-4 sm:h-5 sm:w-5 mt-1 flex-shrink-0 ${severity.color}`} />
              <div className="flex-1 min-w-0">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2 gap-2">
                  <span className="text-sm font-medium text-foreground">Temperature Impact</span>
                  <span className={`text-xs font-semibold px-2 py-1 rounded ${severity.bg} ${severity.color} self-start sm:self-auto`}>
                    {severity.label}
                  </span>
                </div>
                <div className={`text-2xl sm:text-3xl font-bold ${severity.color} mb-1`}>
                  {temperature.toFixed(2)}°C
                </div>
                <div className="text-xs sm:text-sm text-muted-foreground">
                  +{tempIncrease.toFixed(2)}°C above pre-industrial levels
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-xs sm:text-sm text-muted-foreground space-y-1 pt-2 border-t border-border">
            <p>
              <strong>Current CO₂ level:</strong> ~420 ppm (2024)
            </p>
            <p>
              <strong>Pre-industrial:</strong> 280 ppm (1750)
            </p>
            <p>
              <strong>Paris Agreement goal:</strong> Limit warming to 1.5°C
            </p>
          </div>
        </CardContent>
      </Card>

      <Tabs defaultValue="netlogo" className="w-full">
        <TabsList className="grid w-full grid-cols-2 h-auto">
          <TabsTrigger value="netlogo" className="flex items-center gap-1 sm:gap-2 text-xs sm:text-sm py-2 px-3">
            <Brain className="h-3 w-3 sm:h-4 sm:w-4" />
            <span className="hidden xs:inline">NetLogo Model</span>
            <span className="xs:hidden">Model</span>
          </TabsTrigger>
          <TabsTrigger value="chart" className="flex items-center gap-1 sm:gap-2 text-xs sm:text-sm py-2 px-3">
            <BarChart3 className="h-3 w-3 sm:h-4 sm:w-4" />
            <span className="hidden xs:inline">Data Chart</span>
            <span className="xs:hidden">Chart</span>
          </TabsTrigger>
        </TabsList>
        <TabsContent value="netlogo" className="mt-4">
          <NetLogoIntegration co2={co2} />
        </TabsContent>
        <TabsContent value="chart" className="mt-4">
          <div className="text-center py-6 sm:py-8 text-muted-foreground">
            <BarChart3 className="h-8 w-8 sm:h-12 sm:w-12 mx-auto mb-4 opacity-50" />
            <p className="text-sm sm:text-base">Temperature chart will be displayed here</p>
            <p className="text-xs sm:text-sm">Switch to the NetLogo tab to see the interactive model</p>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default SimulationPanel;
