import { useState, useRef, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Play, Pause, RotateCcw, Settings, ExternalLink } from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";

interface NetLogoModelProps {
  co2: number;
  modelUrl?: string;
  width?: number;
  height?: number;
}

const NetLogoModel = ({ 
  co2, 
  modelUrl = "https://www.netlogoweb.org/launch#https://www.netlogoweb.org/assets/modelslib/Sample%20Models/Earth%20Science/Climate%20Change.nlogo",
  width = 600,
  height = 400 
}: NetLogoModelProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isRunning, setIsRunning] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  // NetLogo Web API communication
  const sendCommand = (command: string) => {
    if (iframeRef.current?.contentWindow) {
      iframeRef.current.contentWindow.postMessage({
        type: 'netlogo-command',
        command: command
      }, '*');
    }
  };

  const sendReporter = (reporter: string, callback: (result: any) => void) => {
    if (iframeRef.current?.contentWindow) {
      iframeRef.current.contentWindow.postMessage({
        type: 'netlogo-reporter',
        reporter: reporter,
        callback: callback
      }, '*');
    }
  };

  // Update CO2 level in the model
  useEffect(() => {
    if (isLoaded) {
      // Send CO2 level to NetLogo model
      sendCommand(`set co2-level ${co2}`);
      sendCommand("update-display");
    }
  }, [co2, isLoaded]);

  const handlePlay = () => {
    sendCommand("go");
    setIsRunning(true);
  };

  const handlePause = () => {
    sendCommand("stop");
    setIsRunning(false);
  };

  const handleReset = () => {
    sendCommand("reset-ticks");
    sendCommand("setup");
    setIsRunning(false);
  };

  const handleSetup = () => {
    sendCommand("setup");
    setIsRunning(false);
  };

  const handleLoad = () => {
    setIsLoaded(true);
    setError(null);
  };

  const handleError = () => {
    setError("Failed to load NetLogo model. Please check the model URL.");
    setIsLoaded(false);
  };

  return (
    <Card className="shadow-medium border-border">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Settings className="h-5 w-5 text-primary" />
          NetLogo Climate Model
        </CardTitle>
        <CardDescription>
          Interactive climate simulation model powered by NetLogo
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {error && (
          <Alert variant="destructive">
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        )}
        
        <div className="flex gap-2 mb-4">
          <Button
            onClick={handleSetup}
            variant="outline"
            size="sm"
            className="flex items-center gap-2"
          >
            <Settings className="h-4 w-4" />
            Setup
          </Button>
          <Button
            onClick={isRunning ? handlePause : handlePlay}
            variant={isRunning ? "destructive" : "default"}
            size="sm"
            className="flex items-center gap-2"
          >
            {isRunning ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
            {isRunning ? "Pause" : "Play"}
          </Button>
          <Button
            onClick={handleReset}
            variant="outline"
            size="sm"
            className="flex items-center gap-2"
          >
            <RotateCcw className="h-4 w-4" />
            Reset
          </Button>
          <Button
            onClick={() => window.open(modelUrl, '_blank')}
            variant="outline"
            size="sm"
            className="flex items-center gap-2"
          >
            <ExternalLink className="h-4 w-4" />
            Open Full
          </Button>
        </div>

        <div className="relative">
          <iframe
            ref={iframeRef}
            src={modelUrl}
            width={width}
            height={height}
            className="border border-border rounded-lg"
            onLoad={handleLoad}
            onError={handleError}
            title="NetLogo Climate Model"
            sandbox="allow-scripts allow-same-origin"
          />
          {!isLoaded && !error && (
            <div className="absolute inset-0 flex items-center justify-center bg-muted/50 rounded-lg">
              <div className="text-center">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto mb-2"></div>
                <p className="text-sm text-muted-foreground">Loading NetLogo model...</p>
              </div>
            </div>
          )}
        </div>

        <div className="text-sm text-muted-foreground space-y-1 pt-2 border-t border-border">
          <p>
            <strong>Current CO₂ level:</strong> {co2} ppm
          </p>
          <p>
            <strong>Model Status:</strong> {isLoaded ? (isRunning ? "Running" : "Ready") : "Loading..."}
          </p>
          <p className="text-xs">
            This NetLogo model demonstrates climate dynamics and the impact of CO₂ levels on global systems.
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default NetLogoModel;
