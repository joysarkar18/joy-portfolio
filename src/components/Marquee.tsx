import { marquee } from '../data';

export default function Marquee() {
  const items = [...marquee, ...marquee];
  return (
    <div className="relative border-y border-line bg-surface/60 py-4">
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-base to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-base to-transparent" />
      <div className="flex w-max animate-marquee gap-10 whitespace-nowrap">
        {items.map((item, i) => (
          <span key={`${item}-${i}`} className="flex items-center gap-10 font-mono text-sm text-muted">
            {item}
            <span className="h-1 w-1 rounded-full bg-sky/70" />
          </span>
        ))}
      </div>
    </div>
  );
}
