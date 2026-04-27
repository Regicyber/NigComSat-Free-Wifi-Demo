
"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { BarChart3 } from "lucide-react";

export default function AdvertiserLoginPage() {
  const router = useRouter();

  const handleSignIn = (e: React.FormEvent) => {
    e.preventDefault();
    router.push("/advertiser/dashboard");
  };

  return (
    <div className="flex items-center justify-center min-h-[calc(100vh-64px)] bg-background">
      <Card className="w-full max-w-sm mx-4">
        <form onSubmit={handleSignIn}>
          <CardHeader className="text-center">
            <div className="flex justify-center mb-4">
              <BarChart3 className="h-10 w-10 text-primary" />
            </div>
            <CardTitle className="text-2xl font-headline">Advertiser Portal</CardTitle>
            <CardDescription>
              Manage campaigns and view engagement metrics.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Business Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="ads@company.com"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input id="password" type="password" required />
            </div>
          </CardContent>
          <CardFooter>
            <Button type="submit" className="w-full">
              Login to Ads Console
            </Button>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
}
