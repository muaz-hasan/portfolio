import { GeistMono } from "geist/font/mono";
import "./globals.css";
import Providers from "./ui/Providers";

export const metadata = {
  title: "Funsai",
  description: "Made with fun by sushipop",
};

export default function RootLayout({ children, project }) {
  return (
    <html lang="en">
      <body className={`bg-black text-white px-2 ${GeistMono.className}`}>
        <Providers>
          {project}
          {children}
        </Providers>
      </body>
    </html>
  );
}
