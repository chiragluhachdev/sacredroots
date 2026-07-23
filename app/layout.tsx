import type { Metadata } from "next";
import { Inter, Cormorant_Garamond } from "next/font/google";
import { Footer } from "@/components/layout/Footer";
import { NavbarWrapper } from "@/components/layout/NavbarWrapper";
import { MaintenanceGate } from "@/components/MaintenanceGate";
import connectToDatabase from "@/lib/db/connect";
import SiteSettings from "@/lib/db/models/SiteSettings";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Indian Sacred Roots - India's Premium Temple Directory",
  description: "Discover India's sacred heritage, temples, and spiritual significance.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  let isMaintenance = false;
  try {
    await connectToDatabase();
    const settings = await SiteSettings.findOne().lean();
    isMaintenance = settings?.maintenanceMode || false;
  } catch (e) {
    console.error("Failed to fetch settings for layout", e);
  }

  return (
    <html
      lang="en"
      className={`${inter.variable} ${cormorant.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans bg-background text-foreground">
        <NavbarWrapper />
        <MaintenanceGate isMaintenance={isMaintenance}>
          <main className="flex-1">{children}</main>
          <Footer />
        </MaintenanceGate>
      </body>
    </html>
  );
}
