import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import BackgroundShape from "./components/general/backgroundShape";
import { ThemeProvider, useTheme } from "next-themes";
import { Toaster } from "sonner";

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

  return (
    <html lang="en" suppressHydrationWarning={true}>
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
          <Footer />
          </ThemeProvider>
        </div>
      <Toaster />
      </body>
    </html>
  );
}
