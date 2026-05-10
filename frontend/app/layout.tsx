import './globals.css';
import { Providers } from './providers';
import Navbar from '@/components/Navbar';

export const metadata = {
  title: 'Portfolio Website',
  description: 'My Developer Portfolio',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Providers>
          <Navbar />
          {children}
        </Providers>
      </body>
    </html>
  );
}