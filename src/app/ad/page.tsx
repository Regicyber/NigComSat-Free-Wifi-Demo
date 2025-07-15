"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { ArrowRight } from "lucide-react";

const AD_DURATION = 5000; // 5 seconds

export default function AdPage() {
  const router = useRouter();
  const [progress, setProgress] = useState(0);
  const [isAdFinished, setIsAdFinished] = useState(false);

  useEffect(() => {
    if (isAdFinished) return;

    const startTime = Date.now();
    const interval = setInterval(() => {
      const elapsedTime = Date.now() - startTime;
      const newProgress = Math.min((elapsedTime / AD_DURATION) * 100, 100);
      setProgress(newProgress);

      if (elapsedTime >= AD_DURATION) {
        clearInterval(interval);
        setIsAdFinished(true);
      }
    }, 100);

    return () => clearInterval(interval);
  }, [isAdFinished]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-background p-4">
      <Card className="w-full max-w-lg text-center">
        <CardHeader>
          <CardTitle className="font-headline">
            A message from our sponsors
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-muted-foreground">
            Your free WiFi access is made possible by our partners.
          </p>
          <div className="aspect-video w-full rounded-lg overflow-hidden bg-muted">
            <Image
              src="https://placehold.co/1600x900.png"
              alt="Advertisement"
              width={1600}
              height={900}
              className="object-cover w-full h-full"
              data-ai-hint="business travel"
              priority
            />
          </div>
          <Progress value={progress} className="w-full" />
          <p className="text-sm text-muted-foreground">
            {isAdFinished
              ? "You can now proceed."
              : "Please wait to continue..."}
          </p>
        </CardContent>
        <CardFooter>
          <Button
            className="w-full"
            size="lg"
            onClick={() => router.push("/dashboard")}
            disabled={!isAdFinished}
          >
            Proceed to WiFi <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
