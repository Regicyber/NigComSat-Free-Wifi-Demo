
"use client";

import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { BarChart, Upload, MapPin, Eye, MousePointer2, Percent, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export default function AdvertiserDashboard() {
  return (
    <div className="p-4 sm:p-6 md:p-8 max-w-7xl mx-auto space-y-8">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold font-headline">Advertiser Console</h1>
          <p className="text-muted-foreground">Track your sponsor engagement and ROI.</p>
        </div>
        <Button>
          <Plus className="mr-2 h-4 w-4" /> Create Campaign
        </Button>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Impressions</CardTitle>
            <Eye className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">45,200</div>
            <p className="text-xs text-muted-foreground">+20% this week</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Conversions</CardTitle>
            <MousePointer2 className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1,890</div>
            <p className="text-xs text-muted-foreground">+5% this week</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Conversion Rate</CardTitle>
            <Percent className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">4.18%</div>
            <p className="text-xs text-muted-foreground text-green-600">Above average</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-8 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Upload New Ad Content</CardTitle>
            <CardDescription>Upload a video or image ad to your campaign.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid gap-2">
              <Label htmlFor="ad-name">Ad Name</Label>
              <Input id="ad-name" placeholder="Summer Promo 2025" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="location">Target Route</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select a railway route" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="lagos-ibadan">Lagos - Ibadan</SelectItem>
                  <SelectItem value="abuja-kaduna">Abuja - Kaduna</SelectItem>
                  <SelectItem value="itakpe-warri">Itakpe - Warri</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="border-2 border-dashed rounded-lg p-10 flex flex-col items-center justify-center text-muted-foreground">
              <Upload className="h-10 w-10 mb-2 opacity-50" />
              <p>Drag and drop your video file here</p>
              <Button variant="ghost" className="mt-4">Browse Files</Button>
            </div>
          </CardContent>
          <CardFooter>
            <Button className="w-full">Schedule Ad</Button>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Top Performing Locations</CardTitle>
            <CardDescription>Where your ads are getting the most views.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {[
                { name: "Lagos Terminus", views: "12,400", ctr: "5.2%" },
                { name: "Idu (Abuja) Station", views: "9,800", ctr: "4.8%" },
                { name: "Moniya (Ibadan) Station", views: "7,500", ctr: "3.9%" },
                { name: "Rigasa (Kaduna) Station", views: "6,200", ctr: "3.5%" },
              ].map((loc) => (
                <div key={loc.name} className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <MapPin className="h-4 w-4 text-primary" />
                    <div>
                      <div className="font-medium text-sm">{loc.name}</div>
                      <div className="text-xs text-muted-foreground">{loc.views} views</div>
                    </div>
                  </div>
                  <Badge variant="secondary">{loc.ctr} CTR</Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
