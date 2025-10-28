import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { ExternalLink, Info } from "lucide-react";
import { Button } from "@/components/ui/button";

interface SimpleNetLogoModelProps {
  co2?: number;
}

const SimpleNetLogoModel = ({ co2 }: SimpleNetLogoModelProps) => {
  const modelUrl = "https://www.netlogoweb.org/launch#https://www.netlogoweb.org/assets/modelslib/Sample%20Models/Earth%20Science/Climate%20Change.nlogo";

  return (
    <Card className="shadow-medium border-border">
      <CardHeader>
        <div className="flex items-start justify-between">
          <div>
            <CardTitle className="flex items-center gap-2">
              <Info className="h-5 w-5 text-primary" />
              Climate Change Model
            </CardTitle>
            <CardDescription className="mt-2">
              Interactive NetLogo climate simulation
            </CardDescription>
          </div>
          <Button
            onClick={() => window.open(modelUrl, '_blank')}
            variant="outline"
            size="sm"
            className="flex items-center gap-2"
          >
            <ExternalLink className="h-4 w-4" />
            <span className="hidden sm:inline">Open Full</span>
          </Button>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <Alert>
          <AlertDescription className="text-xs sm:text-sm">
            <strong>Interactive Model:</strong> This is the official NetLogo Climate Change model. 
            Use the controls in the simulation to adjust sun brightness, add CO₂, clouds, and observe 
            temperature changes in real-time.
          </AlertDescription>
        </Alert>

        {/* NetLogo Web iframe */}
        <div className="relative border border-border rounded-lg overflow-hidden bg-muted/50">
          <iframe
            src={modelUrl}
            className="w-full h-[calc(100vh-400px)] min-h-[600px]"
            title="NetLogo Climate Change Model"
            sandbox="allow-scripts allow-same-origin allow-forms"
          />
        </div>

        <Alert>
          <AlertDescription className="text-xs">
            <strong>How to use:</strong>
            <ol className="list-decimal list-inside mt-2 space-y-1">
              <li>Click "setup" in the model to initialize</li>
              <li>Click "go" to start the simulation</li>
              <li>Use buttons to add/remove clouds and CO₂</li>
              <li>Adjust sliders for sun brightness and albedo</li>
              <li>Watch the temperature monitor change!</li>
            </ol>
          </AlertDescription>
        </Alert>

        <div className="text-sm text-muted-foreground pt-2 border-t border-border">
          <p><strong>Current CO₂ from slider:</strong> {co2} ppm</p>
          <p className="text-xs mt-1">
            Note: The NetLogo model runs independently. Adjust CO₂ using the model's controls.
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default SimpleNetLogoModel;

