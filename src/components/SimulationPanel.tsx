import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { AlertCircle, TrendingUp } from "lucide-react";

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
        <CardHeader className="pb-6">
          <CardTitle className="flex items-center gap-2 text-xl sm:text-2xl">
            <TrendingUp className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
            CO₂ Level Control
          </CardTitle>
          <CardDescription className="text-sm sm:text-base">
            Adjust atmospheric CO₂ concentration (parts per million)
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6 sm:space-y-8">
          <div className="space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
              <Label htmlFor="co2-slider" className="text-base sm:text-lg font-medium">
                CO₂ Concentration
              </Label>
              <span className="text-3xl sm:text-4xl font-bold text-primary">
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
              className="py-4 sm:py-6"
            />
            
            <div className="flex justify-between text-xs text-muted-foreground">
              <span>280 ppm (Pre-industrial)</span>
              <span>500 ppm</span>
            </div>
          </div>
          
          <div className={`rounded-lg p-6 sm:p-8 ${severity.bg} transition-colors duration-300`}>
            <div className="flex items-start gap-4">
              <AlertCircle className={`h-6 w-6 sm:h-7 sm:w-7 mt-1 flex-shrink-0 ${severity.color}`} />
              <div className="flex-1 min-w-0">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3 gap-2">
                  <span className="text-base sm:text-lg font-medium text-foreground">Temperature Impact</span>
                  <span className={`text-sm font-semibold px-3 py-1.5 rounded ${severity.bg} ${severity.color} self-start sm:self-auto`}>
                    {severity.label}
                  </span>
                </div>
                <div className={`text-4xl sm:text-5xl font-bold ${severity.color} mb-2`}>
                  {temperature.toFixed(2)}°C
                </div>
                <div className="text-sm sm:text-base text-muted-foreground">
                  +{tempIncrease.toFixed(2)}°C above pre-industrial levels
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-sm sm:text-base text-muted-foreground space-y-2 pt-4 border-t border-border">
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
    </div>
  );
};

export default SimulationPanel;
