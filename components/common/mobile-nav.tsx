"use client";

import {useState} from "react";
import Link from "next/link";
import {Button} from "@/components/ui/button";
import {Sheet, SheetContent, SheetTrigger} from "@/components/ui/sheet";
import {Menu} from "lucide-react";

export function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-5 w-5" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[300px] sm:w-[400px]">
        <div className="flex flex-col gap-6 py-6">
          <nav className="flex flex-col gap-4">
            <Link
              href="#features"
              className="text-lg font-medium hover:underline underline-offset-4"
              onClick={() => setOpen(false)}
            >
              Features
            </Link>
            <Link
              href="#testimonials"
              className="text-lg font-medium hover:underline underline-offset-4"
              onClick={() => setOpen(false)}
            >
              Testimonials
            </Link>
            <Link
              href="#pricing"
              className="text-lg font-medium hover:underline underline-offset-4"
              onClick={() => setOpen(false)}
            >
              Pricing
            </Link>
            <Link
              href="#contact"
              className="text-lg font-medium hover:underline underline-offset-4"
              onClick={() => setOpen(false)}
            >
              Contact
            </Link>
          </nav>
          <div className="flex flex-col gap-2">
            <Button asChild variant="outline" size="lg">
              <Link href="#" onClick={() => setOpen(false)}>
                Log in
              </Link>
            </Button>
            <Button asChild size="lg">
              <Link href="#" onClick={() => setOpen(false)}>
                Sign up
              </Link>
            </Button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
