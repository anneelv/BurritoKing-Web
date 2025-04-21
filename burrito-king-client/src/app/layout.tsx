// import icon
import "bootstrap-icons/font/bootstrap-icons.css";
import "boxicons/css/boxicons.css";

// import bootstrap
import "bootstrap/dist/css/bootstrap.css";

// import glightbox
import "glightbox/dist/css/glightbox.css";

import type { Metadata } from "next";
import { Agbalumo, Noto_Serif } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";

const agbalumo = Agbalumo({
  weight: "400",
  subsets: ["latin"],
});

const notoSerif = Noto_Serif({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Burrito King",
  description: "Online order website for Burrito King",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${notoSerif.className}`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
