
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { featureEngineering } from "@/data/titanicData";
import { Badge } from "./ui/badge";

export function FeatureEngineeringModule() {
  return (
    <Card className="border border-blueprint-line bg-card/80 backdrop-blur-sm">
      <CardHeader className="border-b border-blueprint-line">
        <CardTitle className="text-xl text-primary flex items-center">
          <div className="h-6 w-6 mr-2 rounded-full bg-primary/20 flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
              <path d="M12 6V12M12 12V18M12 12H18M12 12H6" />
            </svg>
          </div>
          Feature Engineering
        </CardTitle>
        <CardDescription>
          Creating new features to improve model performance
        </CardDescription>
      </CardHeader>
      <CardContent className="pt-6">
        <Tabs defaultValue="title">
          <TabsList className="grid grid-cols-4 mb-4">
            {featureEngineering.map((feature, index) => (
              <TabsTrigger key={index} value={feature.name.toLowerCase().replace(/\s+/g, '')}>
                {feature.name.split(' ')[0]}
              </TabsTrigger>
            ))}
          </TabsList>
          
          {featureEngineering.map((feature, index) => (
            <TabsContent key={index} value={feature.name.toLowerCase().replace(/\s+/g, '')} className="mt-0">
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-lg">{feature.name}</h3>
                  <p className="text-sm text-muted-foreground mt-1">{feature.description}</p>
                </div>
                
                <div className="bg-blueprint-grid bg-opacity-20 p-4 rounded-md border border-dashed border-blueprint-line">
                  <h4 className="text-xs uppercase font-medium text-muted-foreground mb-2">Example</h4>
                  {Array.isArray(feature.example) ? (
                    <div className="flex flex-wrap gap-2">
                      {(feature.example as string[]).map((ex, i) => (
                        <Badge key={i} variant="outline" className="bg-secondary/50">
                          {ex}
                        </Badge>
                      ))}
                    </div>
                  ) : (
                    <code className="text-sm bg-secondary/50 px-1 py-0.5 rounded">
                      {feature.example as string}
                    </code>
                  )}
                </div>
                
                <div>
                  <h4 className="text-xs uppercase font-medium text-muted-foreground mb-2">Impact</h4>
                  <p className="text-sm">{feature.impact}</p>
                </div>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </CardContent>
    </Card>
  );
}
