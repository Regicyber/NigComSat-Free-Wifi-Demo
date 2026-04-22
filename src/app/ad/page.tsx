"use client";

import { useState, useEffect, useRef } from "react";
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
import placeholderImages from "@/app/lib/placeholder-images.json";

const AD_DURATION = 5000; // 5 seconds

export default function AdPage() {
  const router = useRouter();
  const [progress, setProgress] = useState(0);
  const [isAdFinished, setIsAdFinished] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

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
        if (videoRef.current) {
          videoRef.current.pause();
        }
      }
    }, 1000);

    // Attempt to play the video (muted autoplay is usually allowed)
    if (videoRef.current) {
      videoRef.current.play().catch((error) => {
        console.warn("Video autoplay was prevented.", error);
      });
    }

    return () => clearInterval(interval);
  }, [isAdFinished]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-background p-4">
      <Card className="w-full max-w-lg text-center overflow-hidden border-none shadow-xl">
        <CardHeader className="pt-8 pb-4 bg-card">
          <div className="flex justify-center mb-6">
            <Image
              src={placeholderImages.logos.nigcomsat}
              alt="Nigcomsat Logo"
              width={220}
              height={50}
              priority
              className="h-auto w-auto"
              data-ai-hint="company logo"
            />
          </div>
          <CardTitle className="font-headline text-2xl tracking-tight">
            Nigcomsat WiFi Connect
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6 pt-2">
          <p className="text-muted-foreground text-sm">
            Your free high-speed WiFi is sponsored by Nigcomsat. 
            Please enjoy this brief message.
          </p>
          <div className="aspect-video w-full rounded-xl overflow-hidden bg-black shadow-inner ring-1 ring-border">
            <video
              ref={videoRef}
              src={placeholderImages.videos.adPlaceholder}
              className="object-contain w-full h-full"
              muted
              playsInline
              loop
            >
              Your browser does not support the video tag.
            </video>
          </div>
          <div className="space-y-3">
            <Progress value={progress} className="h-2 w-full" />
            <p className="text-xs font-medium text-muted-foreground animate-pulse">
              {isAdFinished
                ? "Connection ready!"
                : "Securing your rail connection..."}
            </p>
          </div>
        </CardContent>
        <CardFooter className="pb-8 bg-card">
          <Button
            className="w-full h-12 text-lg font-semibold transition-all"
            onClick={() => router.push("/dashboard")}
            disabled={!isAdFinished}
          >
            {isAdFinished ? "Access WiFi Now" : "Waiting for Sponsor..."} 
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
