import { useState, useRef, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Play, Pause, RotateCcw, Settings, ExternalLink, Upload, Info } from "lucide-react";

interface NetLogoIntegrationProps {
  co2: number;
  onModelChange?: (modelData: any) => void;
}

const NetLogoIntegration = ({ co2, onModelChange }: NetLogoIntegrationProps) => {
  const [modelUrl, setModelUrl] = useState("https://www.netlogoweb.org/launch#https://www.netlogoweb.org/assets/modelslib/Sample%20Models/Earth%20Science/Climate%20Change.nlogo");
  const [customModel, setCustomModel] = useState<File | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isRunning, setIsRunning] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [modelInfo, setModelInfo] = useState<any>(null);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  // Default NetLogo Web models for climate simulation
  const defaultModels = [
    {
      name: "Climate Change",
      url: "https://www.netlogoweb.org/launch#https://www.netlogoweb.org/assets/modelslib/Sample%20Models/Earth%20Science/Climate%20Change.nlogo",
      description: "Interactive climate change model showing temperature and CO₂ relationship"
    }
  ];

  // Handle file upload for custom NetLogo models
  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file && file.name.endsWith('.nlogo')) {
      setCustomModel(file);
      setError(null);
    } else {
      setError("Please upload a valid .nlogo file");
    }
  };

  // Load custom model to NetLogo Web
  const loadCustomModel = async () => {
    if (!customModel) return;
    
    try {
      // For now, we'll use a placeholder approach
      // In a real implementation, you'd upload to NetLogo Web or use a local NetLogo Web instance
      setError("Custom model upload requires NetLogo Web hosting. Please use the default models or host your model on NetLogo Web.");
    } catch (err) {
      setError("Failed to load custom model");
    }
  };

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
      // Try different common variable names for CO2 in NetLogo models
      const co2Commands = [
        `set co2-level ${co2}`,
        `set co2 ${co2}`,
        `set carbon-dioxide ${co2}`,
        `set greenhouse-gas ${co2}`,
        `set pollution ${co2}`
      ];
      
      co2Commands.forEach(cmd => {
        try {
          sendCommand(cmd);
        } catch (e) {
          // Ignore errors for commands that don't exist in the model
        }
      });
      
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
    setError("Failed to load NetLogo model. Please check the model URL or try a different model.");
    setIsLoaded(false);
  };

  const handleModelSelect = (model: typeof defaultModels[0]) => {
    setModelUrl(model.url);
    setModelInfo(model);
    setIsLoaded(false);
    setError(null);
  };

  return (
    <div className="space-y-4 sm:space-y-6">
      <Card className="shadow-medium border-border">
        <CardHeader className="pb-4">
          <CardTitle className="flex items-center gap-2 text-lg sm:text-xl">
            <Settings className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
            NetLogo Model Integration
          </CardTitle>
          <CardDescription className="text-sm">
            Choose a NetLogo model to integrate with your climate simulation
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4 sm:space-y-6">
          {/* Model Selection */}
          <div className="space-y-3 sm:space-y-4">
            <Label className="text-sm font-medium">Select a Model</Label>
            <div className="grid gap-2 sm:gap-3">
              {defaultModels.map((model, index) => (
                <div
                  key={index}
                  className={`p-3 border rounded-lg cursor-pointer transition-colors ${
                    modelUrl === model.url 
                      ? 'border-primary bg-primary/5' 
                      : 'border-border hover:border-primary/50'
                  }`}
                  onClick={() => handleModelSelect(model)}
                >
                  <div className="font-medium text-sm">{model.name}</div>
                  <div className="text-xs text-muted-foreground mt-1">{model.description}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Custom Model Upload */}
          <div className="space-y-3">
            <Label className="text-sm font-medium">Upload Custom Model</Label>
            <div className="flex flex-col sm:flex-row gap-2">
              <Input
                type="file"
                accept=".nlogo"
                onChange={handleFileUpload}
                className="flex-1 text-xs sm:text-sm"
              />
              <Button
                onClick={loadCustomModel}
                disabled={!customModel}
                variant="outline"
                size="sm"
                className="flex items-center gap-2 w-full sm:w-auto"
              >
                <Upload className="h-3 w-3 sm:h-4 sm:w-4" />
                Load
              </Button>
            </div>
            {customModel && (
              <div className="text-xs sm:text-sm text-muted-foreground">
                Selected: {customModel.name}
              </div>
            )}
          </div>

          {/* Model URL Input */}
          <div className="space-y-3">
            <Label className="text-sm font-medium">Or enter NetLogo Web URL</Label>
            <Input
              value={modelUrl}
              onChange={(e) => setModelUrl(e.target.value)}
              placeholder="https://www.netlogoweb.org/launch#..."
              className="font-mono text-xs sm:text-sm"
            />
          </div>

          {error && (
            <Alert variant="destructive">
              <AlertDescription className="text-xs sm:text-sm">{error}</AlertDescription>
            </Alert>
          )}

          {/* Model Controls */}
          <div className="flex flex-wrap gap-2">
            <Button
              onClick={handleSetup}
              variant="outline"
              size="sm"
              className="flex items-center gap-1 sm:gap-2 text-xs sm:text-sm"
            >
              <Settings className="h-3 w-3 sm:h-4 sm:w-4" />
              <span className="hidden xs:inline">Setup</span>
            </Button>
            <Button
              onClick={isRunning ? handlePause : handlePlay}
              variant={isRunning ? "destructive" : "default"}
              size="sm"
              className="flex items-center gap-1 sm:gap-2 text-xs sm:text-sm"
            >
              {isRunning ? <Pause className="h-3 w-3 sm:h-4 sm:w-4" /> : <Play className="h-3 w-3 sm:h-4 sm:w-4" />}
              <span className="hidden xs:inline">{isRunning ? "Pause" : "Play"}</span>
            </Button>
            <Button
              onClick={handleReset}
              variant="outline"
              size="sm"
              className="flex items-center gap-1 sm:gap-2 text-xs sm:text-sm"
            >
              <RotateCcw className="h-3 w-3 sm:h-4 sm:w-4" />
              <span className="hidden xs:inline">Reset</span>
            </Button>
            <Button
              onClick={() => window.open(modelUrl, '_blank')}
              variant="outline"
              size="sm"
              className="flex items-center gap-1 sm:gap-2 text-xs sm:text-sm"
            >
              <ExternalLink className="h-3 w-3 sm:h-4 sm:w-4" />
              <span className="hidden xs:inline">Open Full</span>
            </Button>
          </div>

          {/* Model Display */}
          <div className="relative">
            <iframe
              ref={iframeRef}
              src={modelUrl}
              width="100%"
              height="300"
              className="border border-border rounded-lg w-full"
              onLoad={handleLoad}
              onError={handleError}
              title="NetLogo Model"
              sandbox="allow-scripts allow-same-origin"
            />
            {!isLoaded && !error && (
              <div className="absolute inset-0 flex items-center justify-center bg-muted/50 rounded-lg">
                <div className="text-center">
                  <div className="animate-spin rounded-full h-6 w-6 sm:h-8 sm:w-8 border-b-2 border-primary mx-auto mb-2"></div>
                  <p className="text-xs sm:text-sm text-muted-foreground">Loading NetLogo model...</p>
                </div>
              </div>
            )}
          </div>

          {/* Model Information */}
          {modelInfo && (
            <div className="bg-muted/50 rounded-lg p-3 sm:p-4">
              <div className="flex items-start gap-2">
                <Info className="h-3 w-3 sm:h-4 sm:w-4 text-primary mt-0.5 flex-shrink-0" />
                <div className="text-xs sm:text-sm">
                  <div className="font-medium">{modelInfo.name}</div>
                  <div className="text-muted-foreground mt-1">{modelInfo.description}</div>
                </div>
              </div>
            </div>
          )}

          {/* Status Information */}
          <div className="text-xs sm:text-sm text-muted-foreground space-y-1 pt-2 border-t border-border">
            <p>
              <strong>Current CO₂ level:</strong> {co2} ppm
            </p>
            <p>
              <strong>Model Status:</strong> {isLoaded ? (isRunning ? "Running" : "Ready") : "Loading..."}
            </p>
            <p className="text-xs">
              The NetLogo model will automatically receive CO₂ level updates from the simulation controls.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default NetLogoIntegration;
