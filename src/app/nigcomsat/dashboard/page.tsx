
"use client";

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Satellite, Zap, Signal, Globe, HardDrive, Cpu } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function NigcomsatDashboard() {
  return (
    <div className="p-4 sm:p-6 md:p-8 max-w-7xl mx-auto space-y-8">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold font-headline">Satellite Link Control</h1>
          <p className="text-muted-foreground">Telemetry and link health for NigComSat-1R assets.</p>
        </div>
        <Badge variant="outline" className="w-fit bg-primary/10 text-primary border-primary/20">
          Link Status: OPTIMAL
        </Badge>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card className="bg-primary/5 border-primary/10">
          <CardHeader className="pb-2">
            <div className="flex items-center justify-between">
              <CardTitle className="text-lg">Network Speed</CardTitle>
              <Zap className="h-5 w-5 text-primary" />
            </div>
            <CardDescription>Real-time throughput</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span>Download</span>
                <span className="font-bold">450 Mbps</span>
              </div>
              <div className="h-2 w-full bg-primary/10 rounded-full overflow-hidden">
                <div className="h-full bg-primary w-[85%]"></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span>Upload</span>
                <span className="font-bold">120 Mbps</span>
              </div>
              <div className="h-2 w-full bg-primary/10 rounded-full overflow-hidden">
                <div className="h-full bg-primary w-[60%]"></div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <div className="flex items-center justify-between">
              <CardTitle className="text-lg">Satellite Status</CardTitle>
              <Signal className="h-5 w-5 text-green-500" />
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between p-2 rounded-lg bg-muted/50">
              <div className="flex items-center gap-2 text-sm font-medium">
                <Globe className="h-4 w-4" /> NigComSat-1R
              </div>
              <Badge className="bg-green-500">ACTIVE</Badge>
            </div>
            <div className="flex items-center justify-between p-2 rounded-lg bg-muted/50">
              <div className="flex items-center gap-2 text-sm font-medium">
                <Signal className="h-4 w-4" /> Latency
              </div>
              <span className="text-sm font-bold text-green-600">540ms</span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
             <div className="flex items-center justify-between">
              <CardTitle className="text-lg">Ground Station</CardTitle>
              <Cpu className="h-5 w-5 text-muted-foreground" />
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="p-3 bg-muted/50 rounded-lg text-center">
                <HardDrive className="h-4 w-4 mx-auto mb-1 opacity-50" />
                <div className="text-xs text-muted-foreground">Storage</div>
                <div className="font-bold">78%</div>
              </div>
               <div className="p-3 bg-muted/50 rounded-lg text-center">
                <Cpu className="h-4 w-4 mx-auto mb-1 opacity-50" />
                <div className="text-xs text-muted-foreground">Compute</div>
                <div className="font-bold">34%</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
