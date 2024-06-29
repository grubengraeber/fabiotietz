import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import BackgroundShape from "./components/general/backgroundShape";
import { ThemeProvider } from "next-themes";
import { Toaster } from "sonner";
import { Analytics } from "@vercel/analytics/react"
import { isMobileDevice } from "./utils/is-mobile-server";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Fabio Tietz",
  description: "Personal Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const isMobile = isMobileDevice();

  return (
    <html lang="en" suppressHydrationWarning={true}>
      <Analytics />
      <body className={inter.className}>

        <div className="min-h-screen ">
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
          <Header />
        <BackgroundShape top />

          {children}
          <BackgroundShape />
          <Footer isMobile={isMobile} />
          </ThemeProvider>
        </div>
      <Toaster />
      </body>
    </html>
  );
}
