import React from 'react';
import { Manrope } from 'next/font/google';
import Header from '../components/layout/header';
import '../styles/globals.css';

const manrope = Manrope({ subsets: ['latin'] });

export const metadata = {
  title: 'bot9 - Automate customer support',
  description: 'Automate your customer support with bot9',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${manrope.className} bg-sky-50`}>
        <Header />
        {children}
      </body>
    </html>
  );
}