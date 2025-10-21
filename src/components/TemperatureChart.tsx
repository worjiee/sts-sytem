import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Area, AreaChart } from "recharts";
import { Activity } from "lucide-react";

interface TemperatureChartProps {
  co2: number;
}

const TemperatureChart = ({ co2 }: TemperatureChartProps) => {
  const baseTemp = 14;
  
  // Generate data points for the chart
  const generateData = () => {
    const data = [];
    for (let ppm = 280; ppm <= 500; ppm += 10) {
      const temp = baseTemp + (ppm - 280) * 0.01;
      data.push({
        co2: ppm,
        temperature: parseFloat(temp.toFixed(2)),
        current: ppm === Math.round(co2 / 10) * 10,
      });
    }
    return data;
  };
  
  const data = generateData();
  const currentTemp = baseTemp + (co2 - 280) * 0.01;
  
  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-card border border-border rounded-lg shadow-medium p-3">
          <p className="text-sm font-medium text-foreground">
            {payload[0].payload.co2} ppm
          </p>
          <p className="text-sm text-primary font-bold">
            {payload[0].value}°C
          </p>
          <p className="text-xs text-muted-foreground mt-1">
            +{(payload[0].value - baseTemp).toFixed(2)}°C increase
          </p>
        </div>
      );
    }
    return null;
  };
  
  return (
    <Card className="shadow-medium border-border animate-slide-up" style={{ animationDelay: "0.1s" }}>
      <CardHeader className="pb-4">
        <CardTitle className="flex items-center gap-2 text-lg sm:text-xl">
          <Activity className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
          Temperature vs CO₂ Relationship
        </CardTitle>
        <CardDescription className="text-sm">
          Real-time visualization of temperature changes based on CO₂ levels
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="h-64 sm:h-80">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={data} margin={{ top: 10, right: 20, left: 10, bottom: 20 }}>
              <defs>
                <linearGradient id="tempGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="hsl(186 70% 38%)" stopOpacity={0.3}/>
                  <stop offset="95%" stopColor="hsl(0 72% 51%)" stopOpacity={0.1}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" opacity={0.3} />
              <XAxis 
                dataKey="co2" 
                stroke="hsl(var(--muted-foreground))"
                tick={{ fill: 'hsl(var(--muted-foreground))', fontSize: 12 }}
                label={{ value: 'CO₂ (ppm)', position: 'insideBottom', offset: -5, fill: 'hsl(var(--foreground))', fontSize: 12 }}
                interval="preserveStartEnd"
              />
              <YAxis 
                stroke="hsl(var(--muted-foreground))"
                tick={{ fill: 'hsl(var(--muted-foreground))', fontSize: 12 }}
                label={{ value: 'Temp (°C)', angle: -90, position: 'insideLeft', fill: 'hsl(var(--foreground))', fontSize: 12 }}
                domain={[13.5, 16.5]}
              />
              <Tooltip content={<CustomTooltip />} />
              <Area 
                type="monotone" 
                dataKey="temperature" 
                stroke="hsl(var(--primary))" 
                strokeWidth={2}
                fill="url(#tempGradient)"
                animationDuration={1000}
              />
              {/* Current position indicator */}
              <Line 
                type="monotone" 
                dataKey={(entry) => entry.co2 === Math.round(co2 / 10) * 10 ? entry.temperature : null}
                stroke="hsl(var(--destructive))"
                strokeWidth={3}
                dot={{ fill: 'hsl(var(--destructive))', r: 4 }}
                animationDuration={500}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
        
        <div className="p-3 sm:p-4 rounded-lg bg-muted/50 border border-border">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
            <span className="text-sm font-medium text-foreground">Current Reading</span>
            <div className="flex items-center justify-between sm:justify-end gap-4 sm:gap-6">
              <div className="text-center sm:text-right">
                <div className="text-xs text-muted-foreground">CO₂</div>
                <div className="text-base sm:text-lg font-bold text-primary">{co2} ppm</div>
              </div>
              <div className="text-center sm:text-right">
                <div className="text-xs text-muted-foreground">Temperature</div>
                <div className="text-base sm:text-lg font-bold text-destructive">{currentTemp.toFixed(2)}°C</div>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default TemperatureChart;
