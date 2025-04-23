
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { missingDataSummary } from "@/data/titanicData";
import { toPercentage } from "@/utils/dataUtils";
import { Progress } from "./ui/progress";

export function DataCleaningModule() {
  return (
    <Card className="border border-blueprint-line bg-card/80 backdrop-blur-sm">
      <CardHeader className="border-b border-blueprint-line">
        <CardTitle className="text-xl text-primary flex items-center">
          <div className="h-6 w-6 mr-2 rounded-full bg-primary/20 flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
              <path d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
            </svg>
          </div>
          Data Cleaning
        </CardTitle>
        <CardDescription>
          Identify and handle missing values in the Titanic dataset
        </CardDescription>
      </CardHeader>
      <CardContent className="pt-6">
        <Tabs defaultValue="missing">
          <TabsList className="grid grid-cols-2 mb-4">
            <TabsTrigger value="missing">Missing Values</TabsTrigger>
            <TabsTrigger value="strategy">Imputation Strategy</TabsTrigger>
          </TabsList>
          
          <TabsContent value="missing" className="mt-0">
            <div className="space-y-4">
              {missingDataSummary.map((item, index) => (
                <div key={index} className="space-y-1">
                  <div className="flex justify-between items-center">
                    <div className="font-medium">{item.feature}</div>
                    <div className="text-xs text-muted-foreground">
                      {item.missingCount} records ({toPercentage(item.missingPercentage/100)})
                    </div>
                  </div>
                  <Progress value={item.missingPercentage} className="h-2" />
                </div>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="strategy" className="mt-0">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Feature</TableHead>
                  <TableHead>Strategy</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {missingDataSummary.map((item, index) => (
                  <TableRow key={index}>
                    <TableCell className="font-medium">{item.feature}</TableCell>
                    <TableCell>{item.strategy}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
}
