import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 flicker">
      {<img src="/assets/ash-sigil.png" alt="Ash Sigil" />}
      <div className="mb-10 w-32 h-32 flex items-center justify-center">
        <img
          src="/assets/ash-sigil.png"
          alt="Ash Sigil"
          className="max-w-full max-h-full opacity-90"
        />
      </div>

      <div className="space-y-4">
        <Link
          href="/lore"
          className="block text-xs opacity-50 hover:opacity-90 transition group flex items-center gap-1"
        >
          <span className="w-1 h-1 rounded-full bg-amber-600 group-hover:animate-pulse"></span>
          <span>access.lore</span>
        </Link>

        <Link
          href="/relics"
          className="block text-xs opacity-50 hover:opacity-90 transition group flex items-center gap-1"
        >
          <span className="w-1 h-1 rounded-full bg-amber-600 group-hover:animate-pulse"></span>
          <span>view.relics</span>
        </Link>
      </div>

      <div className="mt-16 text-[10px] opacity-20">
        sigil.active
      </div>
    </div>
  );
}