"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import {
  Wifi,
  Clock,
  LogOut,
  Download,
  PlusCircle,
  WifiOff,
} from "lucide-react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

const TOTAL_TIME_SECONDS = 60 * 60; // 1 hour
const TOTAL_DATA_MB = 500;

export default function Dashboard() {
  const router = useRouter();
  const [timeRemaining, setTimeRemaining] = useState(TOTAL_TIME_SECONDS);
  const [dataUsed, setDataUsed] = useState(128); // Start with some data used
  const [isConnected, setIsConnected] = useState(true);

  useEffect(() => {
    if (!isConnected) return;

    const timer = setInterval(() => {
      setTimeRemaining((prevTime) => {
        if (prevTime > 0) {
          // Simulate data usage over time
          setDataUsed((d) => Math.min(d + Math.random() * 0.1, TOTAL_DATA_MB));
          return prevTime - 1;
        }
        setIsConnected(false);
        return 0;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [isConnected]);

  const formatTime = (seconds: number) => {
    const h = Math.floor(seconds / 3600)
      .toString()
      .padStart(2, "0");
    const m = Math.floor((seconds % 3600) / 60)
      .toString()
      .padStart(2, "0");
    const s = Math.floor(seconds % 60)
      .toString()
      .padStart(2, "0");
    return `${h}:${m}:${s}`;
  };

  const handleLogout = () => {
    router.push("/");
  };

  const dataPercentage = (dataUsed / TOTAL_DATA_MB) * 100;
  const timePercentage = (timeRemaining / TOTAL_TIME_SECONDS) * 100;

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <header className="px-4 lg:px-6 h-16 flex items-center justify-between bg-card shadow-sm">
        <Link
          href="/dashboard"
          className="flex items-center justify-center"
          prefetch={false}
        >
          <Wifi className="h-6 w-6 text-primary" />
          <span className="ml-2 text-lg font-semibold font-headline">
            Nigcomsat WiFi
          </span>
        </Link>
        <AlertDialog>
          <AlertDialogTrigger asChild>
            <Button variant="ghost" size="sm">
              <LogOut className="mr-2 h-4 w-4" />
              Logout
            </Button>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>
                Are you sure you want to log out?
              </AlertDialogTitle>
              <AlertDialogDescription>
                This will end your current WiFi session. You can sign back in at
                any time.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <AlertDialogAction onClick={handleLogout}>Logout</AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </header>

      <main className="flex-1 p-4 sm:p-6 md:p-8">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="text-center space-y-2">
            <h1 className="text-3xl font-bold font-headline">
              Your WiFi Dashboard
            </h1>
            <p
              className={`flex items-center justify-center gap-2 font-medium ${
                isConnected ? "text-green-600" : "text-destructive"
              }`}
            >
              {isConnected ? (
                <>
                  <Wifi className="h-5 w-5" /> Connected
                </>
              ) : (
                <>
                  <WifiOff className="h-5 w-5" /> Disconnected
                </>
              )}
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">
                  Time Remaining
                </CardTitle>
                <Clock className="w-4 h-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-4xl font-bold font-mono">
                  {formatTime(timeRemaining)}
                </div>
                <Progress value={timePercentage} className="mt-4" />
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">Data Usage</CardTitle>
                <Download className="w-4 h-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-4xl font-bold font-mono">
                  {dataUsed.toFixed(1)}{" "}
                  <span className="text-lg text-muted-foreground">MB</span>
                </div>
                <p className="text-xs text-muted-foreground">
                  of {TOTAL_DATA_MB} MB used
                </p>
                <Progress value={dataPercentage} className="mt-2" />
              </CardContent>
            </Card>
          </div>

          <Card className="text-center">
            <CardHeader>
              <CardTitle>Need More Time?</CardTitle>
              <CardDescription>
                Extend your session to stay connected longer.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button disabled={!isConnected}>
                <PlusCircle className="mr-2 h-4 w-4" /> Extend Session
              </Button>
            </CardContent>
          </Card>

          {!isConnected && (
            <Card className="border-destructive bg-destructive/10 text-center">
              <CardHeader>
                <CardTitle className="text-destructive">
                  Session Expired
                </CardTitle>
                <CardDescription className="text-destructive/80">
                  Your free WiFi session has ended. Please log in again to start
                  a new session.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button onClick={() => router.push("/login")}>
                  Start New Session
                </Button>
              </CardContent>
            </Card>
          )}
        </div>
      </main>
    </div>
  );
}
