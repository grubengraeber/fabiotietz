import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import BackgroundShape from "./components/general/backgroundShape";
import { ThemeProvider } from "next-themes";
import { Toaster } from "sonner";
import { Analytics } from "@vercel/analytics/react"
import { AppWrapper } from "../context/app-context";
import { DownloadResume } from "./utils/download-resume";
import { SharePage } from "./utils/share-page";
import FooterWrapper from "./components/footer/footer-wrapper";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Fabio Tietz",
  description: "Personal Website",
  icons: {
    icon: [
      {
        media: '(prefers-color-scheme: light)',
        url: '/favicons/head_light.svg',
        href: '/favicons/head_light.svg',
      },
      {
        media: '(prefers-color-scheme: dark)',
        url: '/favicons/head_dark.svg',
        href: '/favicons/head_dark.svg',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <Analytics />
      <body className={inter.className}>
          <AppWrapper>
        <div className="min-h-screen ">
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
          <Header />
        <BackgroundShape top />
        <div className="mt-16 min-h-screen">
          {children}
        </div>
          <DownloadResume />
             <SharePage />
          <BackgroundShape />
          <div className="bottom-0 w-full">
          <FooterWrapper />
          </div>
          </ThemeProvider>
        </div>
      <Toaster />
          </AppWrapper>
      </body>
    </html>
  );
}
