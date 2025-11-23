import './globals.css';
import Link from 'next/link';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="flicker relative">
        {/* Верхняя шапка с сигилом и навигацией */}
        <header className="fixed top-0 left-0 right-0 z-10 bg-black/40 backdrop-blur-sm border-b border-amber-900/10">
          <div className="max-w-4xl mx-auto px-6 py-3 flex items-center justify-between">
            {/* Сигил слева */}
            <div className="w-100 h-100 flex items-center justify-center">
              <img
                src="/assets/ash-sigil.png"
                alt="Ash Sigil"
                className="w-100 h-100 opacity-80 sigil-header"
              />
            </div>

            {/* Навигация справа */}
            <nav className="text-xs opacity-50 hover:opacity-90 transition flex gap-6">
              
              <Link href="/lore" className="hover:underline">/lore</Link>
              <Link href="/relics" className="hover:underline">/relics</Link>
            </nav>
          </div>
        </header>

        {/* Основной контент с отступом под шапку */}
        <main className="pt-16">{children}</main>

        {/* Эффект цифровой плёнки */}
      
      </body>
    </html>
  );
}