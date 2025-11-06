
'use client';

import { Camera, Menu, UserCog } from "lucide-react";
import Link from "next/link";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "../ui/button";
import { photographyCategories } from "@/lib/photography-data";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from 'react';
import { cn } from "@/lib/utils";

export default function Header() {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    if (previous !== undefined && latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });


  return (
    <motion.header 
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className={cn("sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60")}
    >
      <div className="container flex h-14 max-w-screen-2xl items-center justify-between">
        <Link href="/" className="flex items-center gap-2" aria-label="PK Photography Home">
          <Camera className="h-6 w-6 text-primary" />
          <span className="font-headline text-xl font-bold tracking-wide text-foreground">
            PK Photography
          </span>
        </Link>

        <div className="flex items-center gap-2 md:hidden">
           <Link href="/admin">
            <Button variant="ghost" size="icon">
                <UserCog />
                <span className="sr-only">Admin Panel</span>
            </Button>
           </Link>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left">
                <SheetHeader>
                    <SheetTitle className="sr-only">Navigation</SheetTitle>
                    <SheetDescription className="sr-only">Main navigation menu for mobile.</SheetDescription>
                </SheetHeader>
                <div className="flex flex-col gap-4 p-4">
                    <Link href="/" className="flex items-center gap-2 mb-4" aria-label="PK Photography Home">
                        <Camera className="h-6 w-6 text-primary" />
                        <span className="font-headline text-xl font-bold tracking-wide text-foreground">
                            PK Photography
                        </span>
                    </Link>
                    <nav className="flex flex-col gap-4">
                        <Button asChild variant="link" className="justify-start">
                            <Link href="/#services">All Services</Link>
                        </Button>
                        {photographyCategories.map((category) => (
                            <Button asChild variant="link" className="justify-start" key={category.id}>
                                <Link href={`/?category=${category.id}`}>{category.name}</Link>
                            </Button>
                        ))}
                    </nav>
                </div>
            </SheetContent>
          </Sheet>
        </div>
        <nav className="hidden md:flex items-center gap-6 text-sm">
            <Link href="/#services" className="transition-colors hover:text-foreground/80 text-foreground/60">Services</Link>
            <Link href="/#contact" className="transition-colors hover:text-foreground/80 text-foreground/60">Contact</Link>
            <Link href="/admin">
                <Button variant="ghost" size="sm">
                    <UserCog className="mr-2"/>
                    Admin
                </Button>
            </Link>
        </nav>
      </div>
    </motion.header>
  );
}
