import {Facebook} from "lucide-react";
import {Instagram, X, Youtube} from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-zinc-800 bg-zinc-900 px-4 py-12">
      <div className="container mx-auto">
        <div className="mb-8 flex flex-col items-center justify-between gap-4 md:flex-row">
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold tracking-tighter text-white">ART&CLIMATE</span>
          </Link>
          <p className="text-sm text-zinc-400">
            A world where nature and art unite - developing a sustainable future
          </p>
          <div className="flex space-x-4">
            <Link href="#" className="text-zinc-400 hover:text-white">
              <Facebook className="h-5 w-5" />
              <span className="sr-only">Facebook</span>
            </Link>
            <Link href="#" className="text-zinc-400 hover:text-white">
              <Instagram className="h-5 w-5" />
              <span className="sr-only">Instagram</span>
            </Link>
            <Link href="#" className="text-zinc-400 hover:text-white">
              <X className="h-5 w-5" />
              <span className="sr-only">X</span>
            </Link>
            <Link href="#" className="text-zinc-400 hover:text-white">
              <Youtube className="h-5 w-5" />
              <span className="sr-only">YouTube</span>
            </Link>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-zinc-400">
              About
            </h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-sm text-zinc-500 hover:text-white">
                  Our Story
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-zinc-500 hover:text-white">
                  Mission
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-zinc-500 hover:text-white">
                  Team
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-zinc-500 hover:text-white">
                  Partners
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-zinc-400">
              Program
            </h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-sm text-zinc-500 hover:text-white">
                  Exhibitions
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-zinc-500 hover:text-white">
                  Performances
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-zinc-500 hover:text-white">
                  Workshops
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-zinc-500 hover:text-white">
                  Conferences
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-zinc-400">
              Visit
            </h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-sm text-zinc-500 hover:text-white">
                  Venues
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-zinc-500 hover:text-white">
                  Accommodation
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-zinc-500 hover:text-white">
                  Transportation
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-zinc-500 hover:text-white">
                  Local Guide
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-zinc-400">
              Contact
            </h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-sm text-zinc-500 hover:text-white">
                  Email Us
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-zinc-500 hover:text-white">
                  Press
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-zinc-500 hover:text-white">
                  Volunteer
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-zinc-500 hover:text-white">
                  Sponsorship
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-zinc-800 pt-8 text-center text-xs text-zinc-500">
          <p>© {new Date().getFullYear()} Halong Festival - Art & Climate. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
