import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Info, CheckCircle, AlertTriangle } from "lucide-react";

const NetLogoHelper = () => {
  const [showSteps, setShowSteps] = useState(false);

  const steps = [
    {
      title: "Prepare Your NetLogo Model",
      description: "Ensure your .nlogo file is compatible with NetLogo Web",
      details: [
        "Remove any unsupported extensions (like GIS)",
        "Test your model in NetLogo Web first",
        "Make sure CO₂ variables are clearly named (e.g., 'co2-level', 'co2', 'carbon-dioxide')"
      ],
      icon: CheckCircle,
      color: "text-green-600"
    },
    {
      title: "Upload to NetLogo Web",
      description: "Host your model on NetLogo Web platform",
      details: [
        "Visit netlogoweb.org",
        "Use the upload feature to add your .nlogo file",
        "Copy the generated URL for your model"
      ],
      icon: CheckCircle,
      color: "text-green-600"
    },
    {
      title: "Integrate with This App",
      description: "Add your model URL to the simulation",
      details: [
        "Paste the NetLogo Web URL in the 'Model URL' field",
        "The app will automatically send CO₂ updates to your model",
        "Use the controls to play, pause, and reset your simulation"
      ],
      icon: CheckCircle,
      color: "text-green-600"
    },
    {
      title: "Customize Integration",
      description: "Fine-tune the connection between your model and the app",
      details: [
        "Ensure your model accepts CO₂ level updates",
        "Test different variable names if needed",
        "Consider adding model-specific controls"
      ],
      icon: AlertTriangle,
      color: "text-yellow-600"
    }
  ];

  return (
    <Card className="shadow-medium border-border">
      <CardHeader className="pb-4">
        <CardTitle className="flex items-center gap-2 text-lg sm:text-xl">
          <Info className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
          NetLogo Integration Guide
        </CardTitle>
        <CardDescription className="text-sm">
          Learn how to integrate your own NetLogo models with this climate simulator
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4 sm:space-y-6">
        <Alert>
          <Info className="h-4 w-4" />
          <AlertDescription className="text-xs sm:text-sm">
            This app supports NetLogo Web integration. Your model will receive real-time CO₂ level updates 
            from the simulation controls and can be controlled through the embedded interface.
          </AlertDescription>
        </Alert>

        <div className="space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
            <h3 className="text-base sm:text-lg font-semibold">Integration Steps</h3>
            <Button
              variant="outline"
              size="sm"
              onClick={() => setShowSteps(!showSteps)}
              className="w-full sm:w-auto text-xs sm:text-sm"
            >
              {showSteps ? "Hide Details" : "Show Details"}
            </Button>
          </div>

          <div className="space-y-3">
            {steps.map((step, index) => {
              const IconComponent = step.icon;
              return (
                <div key={index} className="flex gap-3 p-3 border rounded-lg">
                  <div className={`flex-shrink-0 ${step.color}`}>
                    <IconComponent className="h-4 w-4 sm:h-5 sm:w-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="font-medium text-sm">{step.title}</div>
                    <div className="text-xs sm:text-sm text-muted-foreground mt-1">
                      {step.description}
                    </div>
                    {showSteps && step.details && (
                      <ul className="mt-2 space-y-1">
                        {step.details.map((detail, detailIndex) => (
                          <li key={detailIndex} className="text-xs text-muted-foreground flex items-start gap-2">
                            <span className="text-primary flex-shrink-0">•</span>
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="bg-muted/50 rounded-lg p-3 sm:p-4">
          <h4 className="font-medium text-sm mb-2">Quick Start</h4>
          <div className="text-xs sm:text-sm text-muted-foreground space-y-1">
            <p>1. Use one of the pre-loaded climate models to get started</p>
            <p>2. Adjust the CO₂ slider to see real-time updates in the NetLogo model</p>
            <p>3. Use the model controls to run, pause, and reset the simulation</p>
            <p>4. Upload your own model by following the integration steps above</p>
          </div>
        </div>

        <div className="text-xs text-muted-foreground pt-2 border-t border-border">
          <p>
            <strong>Note:</strong> NetLogo Web models run in iframe sandboxes for security. 
            Some advanced features may not be available in the embedded view.
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default NetLogoHelper;
