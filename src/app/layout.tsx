import { AppConfig } from "@/app.config";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: AppConfig.title,
  description: AppConfig.description,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="px-4 py-10 bg-[url('/grid.svg')]">{children}</body>
    </html>
  );
}
