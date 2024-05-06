import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: {
    template: '%s | N.O.T.',
    default: 'Home | N.O.T.',
  },
  description: "Main Menu for the Portfolio of Nathan Trowers",
  keywords: ['Nathan Trowers', 'Software Engineering', 'Projects', 'Portfolio', 'Hire', 'NOT'],
  authors: [{name: 'Nathan Trowers'}],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body>{children}</body>
    </html>
  );
}
