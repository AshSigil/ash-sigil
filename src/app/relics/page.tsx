export default function Relics() {
  return (
    <div className="min-h-screen p-8">
      <div className="max-w-3xl mx-auto">
        <div className="text-sm opacity-60 mb-10">Relics of Ash</div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[1, 2, 3].map((id) => (
            <div
              key={id}
              className="border border-amber-900/10 p-6 hover:border-amber-800/30 transition"
            >
              <div className="h-32 bg-gradient-to-b from-amber-900/5 to-transparent mb-4" />
              <div className="text-xs opacity-70">Ash Fragment #{id}</div>
              <div className="mt-3 text-[10px] opacity-40">Take if you remember.</div>
            </div>
          ))}
        </div>
        <div className="mt-20 text-xs opacity-20 text-center">
          No mint. No sale. Only relic.
        </div>
      </div>
    </div>
  );
}