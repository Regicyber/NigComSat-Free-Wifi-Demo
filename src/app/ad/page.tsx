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
        videoRef.current?.pause();
      }
    }, 100);

    // Start video playback
    videoRef.current?.play().catch(error => {
      // Autoplay was prevented.
      console.warn("Video autoplay was prevented.", error)
      // The ad timer will continue regardless.
    });


    return () => clearInterval(interval);
  }, [isAdFinished]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-background p-4">
      <Card className="w-full max-w-lg text-center">
        <CardHeader>
          <div className="flex justify-center mb-4">
             <Image 
                src="https://drive.google.com/uc?id=1lsJgNies4PyH1H7LxEPJGtol0O3s8DCZ"
                alt="Nigcomsat Logo"
                width={250}
                height={56}
                priority
              />
          </div>
          <CardTitle className="font-headline flex items-center justify-center space-x-2">
            <Image
              src="https://drive.google.com/uc?id=1lsJgNies4PyH1H7LxEPJGtol0O3s8DCZ"
              alt="Nigcomsat Logo"
              width={32}
              height={32}
            />
            <span>Nigcomsat Wifi</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-muted-foreground">
            Your free WiFi access is made possible by our partners.
          </p>
          <div className="aspect-video w-full rounded-lg overflow-hidden bg-muted">
            <video
              ref={videoRef}
              src="https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4"
              width="1600"
              height="900"
              className="object-cover w-full h-full"
              muted
              playsInline
              loop
            >
              Your browser does not support the video tag.
            </video>
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
