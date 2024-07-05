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
import { NextIntlClientProvider } from 'next-intl';
import { getLocale, getMessages } from 'next-intl/server';
import { appWithTranslation } from "next-i18next";


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
  const locale = await getLocale();
 
  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  return (
    <html lang={locale} suppressHydrationWarning={true}>
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
            {/* <NextIntlClientProvider messages={messages}> */}
          <Header />
        <BackgroundShape top />
          {children}
          {isMobile ?
             null : <DownloadResume />}
          <BackgroundShape />
          <Footer isMobile={isMobile} isMac={isMac} />
          {/* </NextIntlClientProvider> */}
          </ThemeProvider>
        </div>
      <Toaster />
          </AppWrapper>
      </body>
    </html>
  );
}
