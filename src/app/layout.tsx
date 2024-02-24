import "./globals.css";

import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
// GeistMono: --font-geist-mono
// font-family: var(--font-geist-mono) as an example

// import { Inter } from "next/font/google";
// const inter = Inter({
//     subsets: ["latin"],
//     variable: "--font-sans"
// });

import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
// No ssr
import { ThemeProvider } from "@/util/contexts/theme";
import Script from "next/script";

export const metadata = {
    title: "Create T3 App",
    description: "Generated by create-t3-app",
    icons: [{ rel: "icon", url: "/favicon.ico" }]
};

export default function RootLayout({
    children
}: {
    children: React.ReactNode;
}) {
    // Current idea is to have a script tag inside body that sets the theme to not have FOUC
    return (
        <html lang="en" suppressHydrationWarning>
            <head>
                <script type="text/javascript" src="/theme.js" />
                <Script src="/alert.js" strategy="beforeInteractive" />
            </head>
            <body
                className={`${GeistSans.className} ${GeistMono.variable} bg-white dark:bg-black`}
            >
                <ThemeProvider>
                    <Header />
                    {children}
                    <Footer />
                    <div id="portal" />
                </ThemeProvider>
            </body>
        </html>
    );
}
