import './globals.css';
import Link from 'next/link';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="flicker">
        {children}

        {/* Навигация как архив */}
        <nav className="fixed bottom-6 right-6 text-xs opacity-50 hover:opacity-40 transition">
          <div className="flex flex-col items-end space-y-2">
            <Link href="/" className="hover:underline">/root</Link>
            <Link href="/lore" className="hover:underline">/lore</Link>
            <Link href="/relics" className="hover:underline">/relics</Link>
          </div>
        </nav>

        <div className="film-overlay" />
      </body>
    </html>
  );
}