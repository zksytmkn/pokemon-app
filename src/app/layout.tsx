import { AppConfig } from "@/app.config";
import Browser from "@/components/browser";
import Footer from "@/components/footer";
import GithubLink from "@/components/github-link";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: AppConfig.title,
  description: AppConfig.description,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="px-4 py-10 bg-gray-50 bg-[url('/grid.svg')]">
        <Browser>
          <main className="p-6">{children}</main>
        </Browser>
        <Footer />
        <GithubLink href={AppConfig.githubURL} />
      </body>
    </html>
  );
}
