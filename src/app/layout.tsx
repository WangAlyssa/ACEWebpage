import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "ACE 国际学分课程 | ACE International Credit Courses",
  description:
    "ACE 国际暑校 — 北美名校教授亲授，全球校区任你选，轻松转学分回校。让暑假成为大学里最值得的投资。",
  keywords: ["暑校", "国际学分", "转学分", "Summer School", "ACE", "留学"],
  icons: {
    icon: "/ace-logo.png",
    apple: "/ace-logo.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-CN" className={inter.variable}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
