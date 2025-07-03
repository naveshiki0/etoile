import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";

export const metadata = {
  title: "YourCompany",
  description: "会社紹介サイト",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body className="font-sans antialiased">
        {/* ヘッダーをトップに重ねる前提なので fixed */}
        <Header />
        {/* 上に余白を入れないようにする */}
        <main className="relative z-0">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
