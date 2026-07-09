import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./providers";

export const metadata: Metadata = {
  title: "ShkheeV MerA | The Black Exodus | Black Metal",
  description:
    "ShkheeV MerA is a solo black metal project from Israel. Listen to the debut EP The Black Exodus.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
