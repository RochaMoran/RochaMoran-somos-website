import "../../styles/globals.scss";
import type { Metadata } from "next";
import { Exo_2 } from "next/font/google";

const exo_2 = Exo_2({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "SOMOS COMMUNITY CARE",
  description:
    "SOMOS is the only successful total cost of care Value-Based Payment model implemented by a physician-led group.",
  icons: [
    {
      rel: "icon",
      href: "/icons/favicon.ico",
      url: "/icons/favicon.ico",
    }
  ]
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body suppressHydrationWarning={true} className={exo_2.className}>
        {children}
      </body>
    </html>
  );
}
