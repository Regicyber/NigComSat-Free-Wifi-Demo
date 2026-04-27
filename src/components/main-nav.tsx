
"use client";

import * as React from "react";
import Link from "next/link";
import { Wifi, ChevronDown, User, ShieldCheck, Satellite, BarChart3, Menu } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const navItems = [
  {
    title: "End User",
    icon: User,
    links: [
      { name: "Login", href: "/login" },
      { name: "Dashboard", href: "/dashboard" },
    ],
  },
  {
    title: "NRC Staff",
    icon: ShieldCheck,
    links: [
      { name: "Login", href: "/nrc/login" },
      { name: "Dashboard", href: "/nrc/dashboard" },
    ],
  },
  {
    title: "Nigcomsat",
    icon: Satellite,
    links: [
      { name: "Login", href: "/nigcomsat/login" },
      { name: "Dashboard", href: "/nigcomsat/dashboard" },
    ],
  },
  {
    title: "Advertiser",
    icon: BarChart3,
    links: [
      { name: "Login", href: "/advertiser/login" },
      { name: "Dashboard", href: "/advertiser/dashboard" },
    ],
  },
];

export function MainNav() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-card shadow-sm">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2">
          <Wifi className="h-6 w-6 text-primary" />
          <span className="text-lg font-bold font-headline hidden sm:inline-block">
            Nigcomsat WiFi
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-4">
          {navItems.map((item) => (
            <DropdownMenu key={item.title}>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="flex items-center gap-2">
                  <item.icon className="h-4 w-4" />
                  {item.title}
                  <ChevronDown className="h-3 w-3 opacity-50" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-48">
                <DropdownMenuLabel>{item.title} Portal</DropdownMenuLabel>
                <DropdownMenuSeparator />
                {item.links.map((link) => (
                  <DropdownMenuItem key={link.href} asChild>
                    <Link href={link.href} className="w-full">
                      {link.name}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          ))}
        </nav>

        {/* Mobile Navigation */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <div className="flex flex-col gap-6 py-4">
                <Link href="/" className="flex items-center gap-2 mb-4">
                  <Wifi className="h-6 w-6 text-primary" />
                  <span className="text-xl font-bold font-headline">Nigcomsat WiFi</span>
                </Link>
                {navItems.map((item) => (
                  <div key={item.title} className="space-y-3">
                    <div className="flex items-center gap-2 font-semibold text-muted-foreground">
                      <item.icon className="h-4 w-4" />
                      {item.title}
                    </div>
                    <div className="grid gap-2 pl-6">
                      {item.links.map((link) => (
                        <Link
                          key={link.href}
                          href={link.href}
                          className="text-sm hover:text-primary py-1"
                        >
                          {link.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
