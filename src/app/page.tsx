import { Button } from "@/components/ui/button";
import { Wifi, Train, Clock } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-16 flex items-center bg-card shadow-sm">
        <Link href="/" className="flex items-center justify-center" prefetch={false}>
          <Wifi className="h-6 w-6 text-primary" />
          <span className="ml-2 text-lg font-semibold font-headline">
            Nigcomsat WiFi
          </span>
        </Link>
      </header>
      <main className="flex-1 flex items-center justify-center p-6">
        <div className="text-center space-y-6 max-w-2xl">
          <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary font-medium">
            Nigeria Rail Public WiFi
          </div>
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl font-headline">
            Stay Connected, On The Rails.
          </h1>
          <p className="text-lg text-muted-foreground md:text-xl">
            Enjoy complimentary high-speed internet access during your journey with
            Nigeria Rail, powered by Nigcomsat.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6">
            <div className="flex flex-col items-center space-y-2 p-4 rounded-lg bg-card shadow-sm">
              <Wifi className="h-10 w-10 text-primary" />
              <h3 className="text-lg font-semibold font-headline">
                High-Speed Access
              </h3>
              <p className="text-sm text-muted-foreground">
                Stream, browse, and work with our reliable network.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-2 p-4 rounded-lg bg-card shadow-sm">
              <Train className="h-10 w-10 text-primary" />
              <h3 className="text-lg font-semibold font-headline">
                Free for Commuters
              </h3>
              <p className="text-sm text-muted-foreground">
                No hidden fees. Get online in just a few clicks.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-2 p-4 rounded-lg bg-card shadow-sm">
              <Clock className="h-10 w-10 text-primary" />
              <h3 className="text-lg font-semibold font-headline">
                Generous Sessions
              </h3>
              <p className="text-sm text-muted-foreground">
                Enjoy long sessions with options to extend.
              </p>
            </div>
          </div>
          <Link href="/login" passHref>
            <Button size="lg" className="mt-8 font-semibold text-lg py-7 px-10">
              Get Free WiFi
            </Button>
          </Link>
        </div>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-muted-foreground">
          &copy; {new Date().getFullYear()} Nigcomsat. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
