
import { Badge } from "./ui/badge";

export function TitanicHeader() {
  return (
    <div className="space-y-4 text-center">
      <div className="animate-pulse-glow relative inline-block">
        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          Titanic Data Analysis
        </h1>
        <svg width="100%" height="3" className="absolute -bottom-1">
          <line 
            x1="0" 
            y1="2" 
            x2="100%" 
            y2="2" 
            stroke="hsl(var(--accent))" 
            strokeWidth="3"
            strokeDasharray="3 6"
            className="animate-data-flow" 
          />
        </svg>
      </div>
      
      <p className="text-muted-foreground max-w-3xl mx-auto">
        A blueprint for predicting passenger survival with machine learning techniques, 
        from data cleaning and feature engineering to model comparison.
      </p>
      
      <div className="flex items-center justify-center space-x-3 pt-2">
        <Badge variant="outline" className="border-primary text-primary">891 Passengers</Badge>
        <Badge variant="outline" className="border-accent text-accent">38.4% Survival Rate</Badge>
        <Badge variant="outline" className="border-secondary-foreground text-secondary-foreground">4 ML Models</Badge>
      </div>
    </div>
  );
}
