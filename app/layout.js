import "./globals.css";

export const metadata = {
  title: "น้ำดื่มกำลังใจ | มูลนิธิเพื่อสังคม",
  description: "มูลนิธิกำลังใจ - โครงการเพื่อสังคม เพราะเราเชื่อว่า 'กำลังใจ' คือพลังที่ยิ่งใหญ่ที่สุด",
};

export default function RootLayout({ children }) {
  return (
    <html lang="th" className="h-full antialiased">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+Thai:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
