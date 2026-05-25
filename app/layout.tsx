import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Kahvila Kiikku | Ainolanpuisto, Oulu',
  description: 'Kahvila Kiikku in Ainolanpuisto, Oulu. Coffee, pastries, grill favourites, wine, beer, cocktails, private events and Hupikioski theatre refreshments.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
