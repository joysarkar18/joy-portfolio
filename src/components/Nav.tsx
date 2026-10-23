import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { profile } from '../data';
import { scrollToId } from '../hooks/useLenis';

const links = [
  { id: 'work', label: 'Work' },
  { id: 'experience', label: 'Experience' },
  { id: 'skills', label: 'Skills' },
  { id: 'contact', label: 'Contact' },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const go = (id: string) => {
    setOpen(false);
    scrollToId(id);
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4">
      <div
        className={`mx-auto flex max-w-6xl items-center justify-between rounded-2xl px-4 py-2.5 transition-all duration-300 ${
          scrolled ? 'glass shadow-lg shadow-black/30' : 'border border-transparent'
        }`}
      >
        <button
          onClick={() => go('top')}
          className="flex items-center gap-2.5 font-display text-sm font-semibold"
          aria-label="Back to top"
        >
          <span className="grid h-8 w-8 place-items-center rounded-lg bg-gradient-to-br from-sky to-violet font-bold text-base text-base">
            <span className="text-[#07090f]">J</span>
          </span>
          <span>{profile.name}</span>
        </button>

        <nav className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <button
              key={l.id}
              onClick={() => go(l.id)}
              className="rounded-lg px-3 py-1.5 text-sm text-muted transition hover:bg-surface-2 hover:text-fg"
            >
              {l.label}
            </button>
          ))}
          <a
            href={profile.resume}
            target="_blank"
            rel="noreferrer"
            className="ml-2 rounded-lg border border-line bg-surface px-3.5 py-1.5 text-sm font-medium transition hover:border-sky hover:text-sky"
          >
            Resume
          </a>
        </nav>

        <button
          onClick={() => setOpen((v) => !v)}
          className="grid h-9 w-9 place-items-center rounded-lg border border-line md:hidden"
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <span className="relative block h-3.5 w-4">
            <span
              className={`absolute left-0 top-0 h-0.5 w-full bg-fg transition ${open ? 'translate-y-1.5 rotate-45' : ''}`}
            />
            <span
              className={`absolute left-0 top-1.5 h-0.5 w-full bg-fg transition ${open ? 'opacity-0' : ''}`}
            />
            <span
              className={`absolute left-0 top-3 h-0.5 w-full bg-fg transition ${open ? '-translate-y-1.5 -rotate-45' : ''}`}
            />
          </span>
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="glass mx-auto mt-2 flex max-w-6xl flex-col rounded-2xl p-2 md:hidden"
          >
            {links.map((l) => (
              <button
                key={l.id}
                onClick={() => go(l.id)}
                className="rounded-lg px-3 py-2.5 text-left text-sm text-fg hover:bg-surface-2"
              >
                {l.label}
              </button>
            ))}
            <a
              href={profile.resume}
              target="_blank"
              rel="noreferrer"
              className="rounded-lg px-3 py-2.5 text-sm font-medium text-sky"
            >
              Resume ↗
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
