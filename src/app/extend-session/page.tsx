
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
import { PlayCircle, CreditCard, ChevronLeft } from "lucide-react";

export default function ExtendSessionPage() {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-64px)] bg-background p-4">
      <div className="w-full max-w-2xl space-y-8">
        <Button 
          variant="ghost" 
          onClick={() => router.back()}
          className="mb-4"
        >
          <ChevronLeft className="mr-2 h-4 w-4" /> Back to Dashboard
        </Button>

        <div className="text-center space-y-2">
          <h1 className="text-3xl font-bold font-headline">Extend Your Session</h1>
          <p className="text-muted-foreground">
            Choose how you'd like to stay connected.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <Card className="flex flex-col border-primary/20 hover:border-primary transition-colors cursor-pointer" onClick={() => router.push("/ad")}>
            <CardHeader>
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <PlayCircle className="h-6 w-6 text-primary" />
              </div>
              <CardTitle>Watch Ads</CardTitle>
              <CardDescription>
                Get 10 minutes of free high-speed WiFi by watching a short message from our sponsors.
              </CardDescription>
            </CardHeader>
            <CardFooter className="mt-auto">
              <Button className="w-full">Watch Now</Button>
            </CardFooter>
          </Card>

          <Card className="flex flex-col border-accent/20 hover:border-accent transition-colors cursor-pointer">
            <CardHeader>
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mb-4">
                <CreditCard className="h-6 w-6 text-accent" />
              </div>
              <CardTitle>Premium Pass</CardTitle>
              <CardDescription>
                Unlock unlimited high-speed WiFi for the rest of your journey. No ads, just pure speed.
              </CardDescription>
            </CardHeader>
            <CardFooter className="mt-auto">
              <Button variant="accent" className="w-full">Pay ₦500</Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
}
