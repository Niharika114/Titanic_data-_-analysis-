
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { summaryStatistics } from "@/data/titanicData";
import { toPercentage } from "@/utils/dataUtils";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

export function SurvivalAnalysis() {
  // Prepare data for charts
  const classSurvivalData = summaryStatistics.byClass.map(item => ({
    name: item.class,
    "Survival Rate": parseFloat((item.survivalRate * 100).toFixed(1)),
    count: item.count
  }));
  
  const sexSurvivalData = summaryStatistics.bySex.map(item => ({
    name: item.sex,
    "Survival Rate": parseFloat((item.survivalRate * 100).toFixed(1)),
    count: item.count
  }));
  
  const ageSurvivalData = summaryStatistics.byAge.map(item => ({
    name: item.group,
    "Survival Rate": parseFloat((item.survivalRate * 100).toFixed(1)),
    count: item.count
  }));
  
  return (
    <Card className="border border-blueprint-line bg-card/80 backdrop-blur-sm">
      <CardHeader className="border-b border-blueprint-line">
        <CardTitle className="text-xl text-primary flex items-center">
          <div className="h-6 w-6 mr-2 rounded-full bg-primary/20 flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
              <path d="M5 22h14" />
              <path d="M5 2h14" />
              <path d="M17 22v-4.172a2 2 0 0 0-.586-1.414L12 12l-4.414 4.414A2 2 0 0 0 7 17.828V22" />
              <path d="M7 2v4.172a2 2 0 0 0 .586 1.414L12 12l4.414-4.414A2 2 0 0 0 17 6.172V2" />
            </svg>
          </div>
          Survival Analysis
        </CardTitle>
        <CardDescription>
          Analyzing survival patterns across different passenger attributes
        </CardDescription>
      </CardHeader>
      <CardContent className="pt-6">
        <div className="text-center mb-4">
          <div className="text-4xl font-bold text-primary">{toPercentage(summaryStatistics.survivalRate)}</div>
          <div className="text-sm text-muted-foreground">Overall Survival Rate</div>
        </div>
        
        <Tabs defaultValue="class">
          <TabsList className="grid grid-cols-3 mb-4">
            <TabsTrigger value="class">By Class</TabsTrigger>
            <TabsTrigger value="sex">By Sex</TabsTrigger>
            <TabsTrigger value="age">By Age</TabsTrigger>
          </TabsList>
          
          <TabsContent value="class" className="mt-0">
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={classSurvivalData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(var(--blueprint-line) / 0.3)" />
                <XAxis dataKey="name" />
                <YAxis label={{ value: 'Survival Rate (%)', angle: -90, position: 'insideLeft' }} />
                <Tooltip formatter={(value) => [`${value}%`, 'Survival Rate']} />
                <Legend />
                <Bar dataKey="Survival Rate" fill="hsl(var(--primary))" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </TabsContent>
          
          <TabsContent value="sex" className="mt-0">
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={sexSurvivalData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(var(--blueprint-line) / 0.3)" />
                <XAxis dataKey="name" />
                <YAxis label={{ value: 'Survival Rate (%)', angle: -90, position: 'insideLeft' }} />
                <Tooltip formatter={(value) => [`${value}%`, 'Survival Rate']} />
                <Legend />
                <Bar dataKey="Survival Rate" fill="hsl(var(--accent))" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </TabsContent>
          
          <TabsContent value="age" className="mt-0">
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={ageSurvivalData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(var(--blueprint-line) / 0.3)" />
                <XAxis dataKey="name" />
                <YAxis label={{ value: 'Survival Rate (%)', angle: -90, position: 'insideLeft' }} />
                <Tooltip formatter={(value) => [`${value}%`, 'Survival Rate']} />
                <Legend />
                <Bar dataKey="Survival Rate" fill="hsl(var(--secondary-foreground))" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
}
