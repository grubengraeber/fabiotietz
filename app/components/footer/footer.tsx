"use client"

import Link from "next/link";
import Shortcuts from "./shortcuts/shortcuts";
import { Bean, Linkedin, X } from "lucide-react";


type props = {
    isMobile: boolean,
    isMac: boolean,
}

// TODO: language
export default function Footer({isMobile, isMac} : props) {
      
    return (
        <footer className="bg-muted py-12">
      <div className="container max-w-7xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        <div className="flex flex-col items-start gap-4">
          <Link href="#" className="flex items-center gap-2" prefetch={false}>
            <Bean className="w-6 h-6" />
            <span className="font-bold text-lg">Fabio TIETZ</span>
          </Link>
          <p className="text-muted-foreground text-sm">Building, Supporting and Launching.</p>
        </div>
        <div className="grid gap-2">
          <h4 className="font-medium">Socials</h4>
          <Link href="#" className="text-sm hover:underline" prefetch={false}>
            <Linkedin />
          </Link>
          <Link href="#" className="text-sm hover:underline" prefetch={false}>
            <X />
          </Link>
          <Link href="#" className="text-sm hover:underline" prefetch={false}>
            Github
          </Link>
        </div>
        <div className="grid gap-2">
          <h4 className="font-medium">Resources</h4>
          <Link href="#" className="text-sm hover:underline" prefetch={false}>
            Documentation {/* TODO */}
          </Link>
          <Link href="#" className="text-sm hover:underline" prefetch={false}>
            Tutorials {/* TODO */}
          </Link>
          <Link href="#" className="text-sm hover:underline" prefetch={false}>
        {
            !isMobile ?
            <Shortcuts isMac={isMac} />
            : null
        }
          </Link>
          <Link href="#" className="text-sm hover:underline" prefetch={false}>
            Blog {/* TODO */}
          </Link>
        </div>
        <div className="grid gap-2">
          <h4 className="font-medium">Legal</h4>
          <Link href="#" className="text-sm hover:underline" prefetch={false}>
            Terms of Service {/* TODO */}
          </Link>
          <Link href="#" className="text-sm hover:underline" prefetch={false}>
            Privacy Policy {/* TODO */}
          </Link>
          <Link href="#" className="text-sm hover:underline" prefetch={false}>
            Cookie Policy {/* TODO */}
          </Link>
          <Link href="#" className="text-sm hover:underline" prefetch={false}>
            Sitemap
          </Link>
        </div>
      </div>
      <div className="container max-w-7xl mt-12 flex items-center justify-between">
        <p className="text-sm text-muted-foreground">&copy; 2024 TIETZ Innovations e.U. All rights reserved.</p>
        <div className="flex items-center gap-4">
          <Link href="#" className="text-sm hover:underline" prefetch={false}>
            Privacy {/* TODO */}
          </Link>
          <Link href="#" className="text-sm hover:underline" prefetch={false}>
            Terms {/* TODO */}
          </Link>
        </div>
      </div>
    </footer>
    );
}