import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { LocationLessAds } from "./components/LocationLessAds";
// import AgeVerification from "./components/AgeVerification";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Free HQ Porn XXX",
  description: "Free high quality porn XXX videos",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-E083W140K0"
        ></script>
        <script>
          {`  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-E083W140K0');
`}
        </script>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* <AgeVerification /> */}
        <header className="bg-midnight-blue text-cream-white p-4">
          <nav className="flex flex-col items-center justify-between">
            <Link href="/">
              <h1 className="text-2xl font-bold">Free HQ Porn XXX</h1>
            </Link>
            <iframe
              id="horizontal-ad-3"
              className="mt-4 mb-4 hidden justify-self-center sm:block"
              src="//a.magsrv.com/iframe.php?idzone=5683714&size=728x90"
              width="728"
              height="90"
              scrolling="no"
              marginWidth={0}
              marginHeight={0}
              frameBorder={0}
            ></iframe>
            <iframe
              id="horizontal-ad-mobile-4"
              className="mt-4 mb-4 block justify-self-center sm:hidden"
              src="//a.magsrv.com/iframe.php?idzone=5683788&size=300x50"
              width="300"
              height="50"
              scrolling="no"
              marginWidth={0}
              marginHeight={0}
              frameBorder={0}
            ></iframe>
            <ul className="mt-0 flex flex-row space-y-0 space-x-10 text-lg font-bold">
              <li>
                <Link
                  href="/"
                  className="hover:text-velvet-plum hover:underline"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/categories"
                  className="hover:text-velvet-plum hover:underline"
                >
                  Categories
                </Link>
              </li>
              <li>
                <Link
                  href="/models"
                  className="hover:text-velvet-plum hover:underline"
                >
                  Models
                </Link>
              </li>
            </ul>
          </nav>
        </header>
        <main className="bg-cream-white text-slate-gray p-4">
          <div className="flex flex-row">
            <div className="mr-4 hidden lg:block">
              <div className="flex flex-col">
                <iframe
                  id="vertical-ad-1"
                  src="//a.magsrv.com/iframe.php?idzone=5683712&size=160x600"
                  width={160}
                  height={600}
                  scrolling="no"
                  marginWidth={0}
                  marginHeight={0}
                  frameBorder={0}
                />
                <iframe
                  id="vertical-ad-2"
                  src="//a.magsrv.com/iframe.php?idzone=5683830&size=160x600"
                  width="160"
                  height="600"
                  scrolling="no"
                  marginWidth={0}
                  marginHeight={0}
                  frameBorder={0}
                ></iframe>
              </div>
            </div>
            <div className="">{children}</div>
            <div className="ml-4 hidden sm:block">
              <div className="flex flex-col">
                <iframe
                  id="vertical-ad-3"
                  src="//a.magsrv.com/iframe.php?idzone=5683716&size=160x600"
                  width={160}
                  height={600}
                  scrolling="no"
                  marginWidth={0}
                  marginHeight={0}
                  frameBorder={0}
                />
                <iframe
                  id="vertical-ad-4"
                  src="//a.magsrv.com/iframe.php?idzone=5683834&size=160x600"
                  width="160"
                  height="600"
                  scrolling="no"
                  marginWidth={0}
                  marginHeight={0}
                  frameBorder={0}
                ></iframe>
              </div>
            </div>
          </div>
        </main>
        <footer className="bg-midnight-blue text-cream-white p-4 text-center">
          <iframe
            className="hidden justify-self-center lg:block"
            src={"//a.magsrv.com/iframe.php?idzone=5682442&amp;size=900x250"}
            width={900}
            height={250}
            scrolling="no"
            marginWidth={0}
            marginHeight={0}
            frameBorder="0"
          />
          <iframe
            id="horizontal-ad-2"
            className="hidden justify-self-center sm:block lg:hidden"
            src="//a.magsrv.com/iframe.php?idzone=5683786&size=728x90"
            width="728"
            height="90"
            scrolling="no"
            marginWidth={0}
            marginHeight={0}
            frameBorder="0"
          ></iframe>
          <iframe
            id="horizontal-ad-mobile-1"
            className="block justify-self-center sm:hidden"
            src="//a.magsrv.com/iframe.php?idzone=5683780&size=300x250"
            width="300"
            height="250"
            scrolling="no"
            marginWidth={0}
            marginHeight={0}
            frameBorder="0"
          ></iframe>
          © 2023 Free HQ Porn XXX
          <LocationLessAds />
        </footer>
      </body>
    </html>
  );
}
