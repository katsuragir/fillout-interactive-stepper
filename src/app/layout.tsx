import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

export const metadata = {
  title: "Interactive Stepper",
  description: "Modular stepper with drag-and-drop and context menu",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-gray-100 w-screen h-screen flex flex-col items-center">
        {children}
      </body>
    </html>
  );
}
