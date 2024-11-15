"use client"

import Link from "next/link";
import Shortcuts from "./shortcuts/shortcuts";
import { Bean, Github, Linkedin, Map, Newspaper, PocketKnife, Share2 } from "lucide-react";
import { useAppContext } from "@/context/app-context";
import SubscribeNewsletter from "@/app/utils/subscribe-newsletter";
import Cookies from "@/app/utils/legal/cookies";
import DataProtection from "@/app/utils/legal/data-protection";
import Terms from "@/app/utils/legal/terms";


type props = {
    isMobile: boolean,
    isMac: boolean,
}

// TODO: language
export default function Footer({isMobile, isMac} : props) {

    const { setShowSharePanel } = useAppContext();
    const githubUrl = process.env.NEXT_PUBLIC_GITHUB_URL ?? "";
    const linkedInUrl = process.env.NEXT_PUBLIC_LINKEDIN_URL ?? "";
      
    return (
        <footer className="bg-muted py-12">
      <div className="container max-w-7xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        <div className="flex flex-col items-start gap-4">
          <Link href="/" className="flex items-center gap-2" prefetch={false}>
            <Bean className="w-6 h-6" />
            <span className="font-bold text-lg">Fabio TIETZ</span>
          </Link>
          <p className="text-muted-foreground text-sm">Building, Launching and Supporting.</p>
        </div>
        <div className="grid gap-2">
          <h4 className="font-medium">Socials</h4>
          <Link href={linkedInUrl} target="_blank" className="text-sm hover:underline inline-flex gap-4" prefetch={false}>
          <Linkedin /> LinkedIn
          </Link>
          <Link href={githubUrl} target="_blank" className="text-sm hover:underline inline-flex gap-4" prefetch={false}>
          <Github /> Github
          </Link>
          <button className="text-sm hover:underline inline-flex gap-4" onClick={() => setShowSharePanel(true)}>
            <Share2 /> Share
          </button>
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
          <Link href={"/blog"} className="text-sm hover:underline inline-flex gap-4" prefetch={false}>
            <Newspaper /> Blog
          </Link>
        </div>
        <div className="grid gap-2">
          <h4 className="font-medium">Legal</h4>
            <Terms />
            <DataProtection />
            <Cookies />
          <Link href="/sitemap.xml" className="text-sm hover:underline inline-flex gap-4" prefetch={false}>
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