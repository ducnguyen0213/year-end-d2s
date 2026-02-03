import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin", "vietnamese"] });

export const metadata: Metadata = {
  title: "Thiệp mời Year End Party 2025 - D2S JSC",
  description: "Trân trọng kính mời Quý Khách tham dự Tiệc Tổng Kết Cuối Năm của Công ty Cổ phần Phần mềm D2S.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <body className={`antialiased bg-[#0f172a] text-white ${inter.className}`}>
        {children}
      </body>
    </html>
  );
}
