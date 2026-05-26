import type { Metadata } from 'next';
import './globals.css';
import { Analytics } from '@vercel/analytics/react';

export const metadata: Metadata = {
  title: 'Kahvila Kiikku | Ainolanpuisto, Oulu',
  description:
    'Kahvila Kiikku in Ainolanpuisto, Oulu. Coffee, pastries, grill favourites, wine, beer, cocktails, private events and Hupikioski theatre refreshments.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fi">
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}