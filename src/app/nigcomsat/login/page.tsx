
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
import { Satellite } from "lucide-react";

export default function NigcomsatLoginPage() {
  const router = useRouter();

  const handleSignIn = (e: React.FormEvent) => {
    e.preventDefault();
    router.push("/nigcomsat/dashboard");
  };

  return (
    <div className="flex items-center justify-center min-h-[calc(100vh-64px)] bg-background">
      <Card className="w-full max-w-sm mx-4">
        <form onSubmit={handleSignIn}>
          <CardHeader className="text-center">
            <div className="flex justify-center mb-4">
              <Satellite className="h-10 w-10 text-primary" />
            </div>
            <CardTitle className="text-2xl font-headline">Nigcomsat Technical Login</CardTitle>
            <CardDescription>
              Authenticated portal for satellite link management.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Work Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="name@nigcomsat.gov.ng"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Security Key</Label>
              <Input id="password" type="password" required />
            </div>
          </CardContent>
          <CardFooter>
            <Button type="submit" className="w-full">
              Launch Console
            </Button>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
}
