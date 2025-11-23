import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 flicker">
      <div className="w-24 h-24 rounded-full border border-amber-800/30 mb-10" />

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