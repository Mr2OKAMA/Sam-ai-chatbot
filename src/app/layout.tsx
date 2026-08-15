import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Sam AI Chatbot',
  description: '下水処理場運転管理AIチャットボット',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body>
        {children}
      </body>
    </html>
  );
}
