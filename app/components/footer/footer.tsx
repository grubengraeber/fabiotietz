"use client"

import Link from "next/link";
import Shortcuts from "./shortcuts/shortcuts";
import { Bean, Book, Code, Cookie, Github, GlobeLock, Home, Icon, Linkedin, Mails, Map, Newspaper, PocketKnife, ReceiptText, Share2, X } from "lucide-react";
import { useAppContext } from "@/context/app-context";
import SubscribeNewsletter from "@/app/utils/subscribe-newsletter";
import Cookies from "@/app/utils/legal/cookies";


type props = {
    isMobile: boolean,
    isMac: boolean,
}

// TODO: language
export default function Footer({isMobile, isMac} : props) {

    const { setShowSharePanel } = useAppContext();
      
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
          <Link href={process.env.NEXT_PUBLIC_LINKEDIN_URL!} target="_blank" className="text-sm hover:underline inline-flex gap-4" prefetch={false}>
          <Linkedin /> LinkedIn
          </Link>
          <Link href={process.env.NEXT_PUBLIC_GITHUB_URL!} target="_blank" className="text-sm hover:underline inline-flex gap-4" prefetch={false}>
          <Github /> Github
          </Link>
          <div className="text-sm hover:underline inline-flex gap-4" onClick={() => setShowSharePanel(true)}>
            <Share2 /> Share
          </div>
        </div>
        <div className="grid gap-2">
          <h4 className="font-medium">Resources</h4>
          <SubscribeNewsletter />
          <Link href="/tools" className="text-sm hover:underline inline-flex gap-4" prefetch={false}>
          <PocketKnife /> Tools I use
          </Link>
        {
            !isMobile ?
                    <Shortcuts  isMac={isMac} />
            : null
        }
          <Link href={process.env.NEXT_PUBLIC_BLOG_URL!} target="_blank" className="text-sm hover:underline inline-flex gap-4" prefetch={false}>
            <Newspaper /> Blog
          </Link>
        </div>
        <div className="grid gap-2">
          <h4 className="font-medium">Legal</h4>
          <Link href="#" className="text-sm hover:underline inline-flex gap-4" prefetch={false}>
            <ReceiptText /> Terms of Service {/* TODO */}
          </Link>
          <Link href="#" className="text-sm hover:underline inline-flex gap-4" prefetch={false}>
            <GlobeLock /> Privacy Policy {/* TODO */}
          </Link>
            <Cookies />
          <Link href="#" className="text-sm hover:underline inline-flex gap-4" prefetch={false}>
           <Map />  Sitemap
          </Link>
        </div>
      </div>
      <div className="container max-w-7xl mt-12 flex items-center text-center justify-center">
        <p className="text-sm text-muted-foreground">&copy; 2024 TIETZ Innovations e.U. All rights reserved.</p>
      </div>
    </footer>
    );
}