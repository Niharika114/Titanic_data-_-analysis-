
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { decisionTreeRules } from "@/data/titanicData";
import { Badge } from "./ui/badge";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

export function ModelComparisonModule() {
  // Model comparison data
  const modelPerformance = [
    { name: 'Decision Tree', accuracy: 80.4, precision: 78.6, recall: 82.1, f1: 80.3 },
    { name: 'Logistic Regression', accuracy: 78.9, precision: 76.3, recall: 79.2, f1: 77.7 },
    { name: 'Random Forest', accuracy: 82.1, precision: 81.5, recall: 80.9, f1: 81.2 },
    { name: 'Support Vector Machine', accuracy: 79.5, precision: 77.9, recall: 78.5, f1: 78.2 }
  ];
  
  // Feature importance data
  const featureImportance = [
    { name: 'Sex', importance: 41.2 },
    { name: 'Fare', importance: 15.7 },
    { name: 'Age', importance: 13.5 },
    { name: 'Pclass', importance: 12.8 },
    { name: 'Title', importance: 8.4 },
    { name: 'FamilySize', importance: 6.9 },
    { name: 'Embarked', importance: 1.5 }
  ];

  return (
    <Card className="border border-blueprint-line bg-card/80 backdrop-blur-sm">
      <CardHeader className="border-b border-blueprint-line">
        <CardTitle className="text-xl text-primary flex items-center">
          <div className="h-6 w-6 mr-2 rounded-full bg-primary/20 flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
              <path d="M3 3v18h18" />
              <path d="m7 15 3-3 3 3 4-4" />
              <path d="m13 9 4-4" />
              <path d="M17 9h-4V5" />
            </svg>
          </div>
          Model Comparison
        </CardTitle>
        <CardDescription>
          Comparing different machine learning models on the Titanic dataset
        </CardDescription>
      </CardHeader>
      <CardContent className="pt-6">
        <Tabs defaultValue="performance">
          <TabsList className="grid grid-cols-3 mb-4">
            <TabsTrigger value="performance">Performance</TabsTrigger>
            <TabsTrigger value="features">Feature Importance</TabsTrigger>
            <TabsTrigger value="tree">Decision Tree</TabsTrigger>
          </TabsList>
          
          <TabsContent value="performance" className="mt-0">
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={modelPerformance} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(var(--blueprint-line) / 0.3)" />
                <XAxis dataKey="name" />
                <YAxis domain={[70, 85]} label={{ value: 'Score (%)', angle: -90, position: 'insideLeft' }} />
                <Tooltip formatter={(value) => [`${value}%`, '']} />
                <Legend />
                <Bar dataKey="accuracy" name="Accuracy" fill="hsl(var(--primary))" radius={[4, 4, 0, 0]} />
                <Bar dataKey="precision" name="Precision" fill="hsl(var(--accent))" radius={[4, 4, 0, 0]} />
                <Bar dataKey="recall" name="Recall" fill="hsl(var(--secondary-foreground))" radius={[4, 4, 0, 0]} />
                <Bar dataKey="f1" name="F1 Score" fill="hsl(var(--muted-foreground))" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </TabsContent>
          
          <TabsContent value="features" className="mt-0">
            <ResponsiveContainer width="100%" height={300}>
              <BarChart layout="vertical" data={featureImportance} margin={{ top: 20, right: 30, left: 70, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(var(--blueprint-line) / 0.3)" />
                <XAxis type="number" domain={[0, 45]} />
                <YAxis dataKey="name" type="category" />
                <Tooltip formatter={(value) => [`${value}%`, 'Importance']} />
                <Legend />
                <Bar dataKey="importance" name="Importance" fill="hsl(var(--primary))" radius={[0, 4, 4, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </TabsContent>
          
          <TabsContent value="tree" className="mt-0">
            <div className="bg-blueprint-grid p-4 rounded-md border border-dashed border-blueprint-line space-y-4">
              <h3 className="font-semibold">Decision Tree Rules</h3>
              
              <div className="space-y-2">
                {decisionTreeRules.map((rule, index) => (
                  <div key={index} className="relative pl-6 py-1 border-l-2 border-blueprint-line">
                    <div className="absolute left-0 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-primary"></div>
                    
                    {rule.prediction ? (
                      <div className="flex flex-col">
                        <div className="font-medium">
                          If <Badge variant="outline" className="mx-1 bg-secondary/50">{rule.feature} = {rule.value}</Badge> 
                          then <Badge className={`ml-1 ${rule.prediction === "Survived" ? "bg-accent" : "bg-destructive"}`}>{rule.prediction}</Badge>
                        </div>
                        <div className="text-xs text-muted-foreground mt-1">
                          Probability: {(rule.probability * 100).toFixed(1)}% (based on {rule.samples} samples)
                        </div>
                      </div>
                    ) : (
                      <div className="font-medium">
                        If <Badge variant="outline" className="mx-1 bg-secondary/50">{rule.feature} = {Array.isArray(rule.value) ? rule.value.join(' or ') : rule.value}</Badge> 
                        then check <Badge variant="outline" className="ml-1">{rule.nextNode}</Badge>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
}
