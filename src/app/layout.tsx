import "../styles/globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import NextAuthProvider from "@/lib/auth/Provider";
import TrpcProvider from "@/lib/trpc/Provider";
import { Toaster } from "@/components/ui/toaster";
import Navbar from "@/components/nav/Navbar";
import MobileNav from "@/components/nav/MobileNav";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CulinaryWizard",
  description: "Recipes without the life story",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "antialiased font-sans min-h-screen grainy",
          inter.className
        )}
      >
        <NextAuthProvider>
          <TrpcProvider>
            <ThemeProvider
              attribute="class"
              defaultTheme="system"
              enableSystem
              disableTransitionOnChange
            >
              <Navbar />
              <MobileNav />
              {children}
              <Toaster />
            </ThemeProvider>
          </TrpcProvider>
        </NextAuthProvider>
      </body>
    </html>
  );
}
