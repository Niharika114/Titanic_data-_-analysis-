
import { DataCleaningModule } from "@/components/DataCleaningModule";
import { FeatureEngineeringModule } from "@/components/FeatureEngineeringModule";
import { ModelComparisonModule } from "@/components/ModelComparisonModule";
import { SurvivalAnalysis } from "@/components/SurvivalAnalysis";
import { TitanicHeader } from "@/components/TitanicHeader";

const Index = () => {
  return (
    <div className="min-h-screen pt-12 pb-20 bg-background bg-blueprint-grid-lg relative">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-blueprint-highlight/5 to-transparent pointer-events-none"></div>
      <div className="absolute top-0 left-0 h-full w-1 bg-blueprint-line/50"></div>
      <div className="absolute top-0 right-0 h-full w-1 bg-blueprint-line/50"></div>
      <div className="absolute top-0 left-0 w-full h-1 bg-blueprint-line/50"></div>
      <div className="absolute bottom-0 left-0 w-full h-1 bg-blueprint-line/50"></div>
      
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header */}
        <TitanicHeader />
        
        {/* Main content */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          <DataCleaningModule />
          <FeatureEngineeringModule />
          <SurvivalAnalysis />
          <ModelComparisonModule />
        </div>
        
        {/* Footer */}
        <div className="mt-16 text-center text-sm text-muted-foreground">
          <p>Titanic Data Analysis Blueprint | Created with React, TypeScript, and Recharts</p>
        </div>
      </div>
    </div>
  );
};

export default Index;
