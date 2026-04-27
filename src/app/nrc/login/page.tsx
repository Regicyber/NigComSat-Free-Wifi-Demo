
"use client";

import Link from "next/link";
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
import { ShieldCheck } from "lucide-react";

export default function NRCLoginPage() {
  const router = useRouter();

  const handleSignIn = (e: React.FormEvent) => {
    e.preventDefault();
    router.push("/nrc/dashboard");
  };

  return (
    <div className="flex items-center justify-center min-h-[calc(100vh-64px)] bg-background">
      <Card className="w-full max-w-sm mx-4">
        <form onSubmit={handleSignIn}>
          <CardHeader className="text-center">
            <div className="flex justify-center mb-4">
              <ShieldCheck className="h-10 w-10 text-primary" />
            </div>
            <CardTitle className="text-2xl font-headline">NRC Staff Login</CardTitle>
            <CardDescription>
              Sign in to manage railway network operations.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="staff-id">Staff ID</Label>
              <Input
                id="staff-id"
                placeholder="NRC-XXXXX"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Security Password</Label>
              <Input id="password" type="password" required />
            </div>
          </CardContent>
          <CardFooter>
            <Button type="submit" className="w-full">
              Access Dashboard
            </Button>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
}
