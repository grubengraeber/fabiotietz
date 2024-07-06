import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import BackgroundShape from "./components/general/backgroundShape";
import { ThemeProvider } from "next-themes";
import { Toaster } from "sonner";
import { Analytics } from "@vercel/analytics/react"
import { isMobileDevice } from "./utils/detection/is-mobile-server";
import { AppWrapper } from "../context/app-context";
import { isMacOS } from "./utils/detection/is-mac-device";
import { DownloadResume } from "./utils/download-resume";
import { SharePage } from "./utils/share-page";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Fabio Tietz",
  description: "Personal Website",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const isMobile = await isMobileDevice();
  const isMac = isMacOS();

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
          <Footer isMobile={isMobile} isMac={isMac} />
          </div>
          </ThemeProvider>
        </div>
      <Toaster />
          </AppWrapper>
      </body>
    </html>
  );
}
