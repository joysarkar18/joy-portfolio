import { lazy, Suspense } from 'react';
import { motion } from 'framer-motion';
import { profile, stats } from '../data';
import { scrollToId } from '../hooks/useLenis';

// The 3D scene (three.js) is the heaviest thing on the page; load it after
// the text has painted.
const PhoneScene = lazy(() => import('../three/PhoneScene'));

const fade = (delay: number) => ({
  initial: { opacity: 0, y: 22 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const, delay },
});

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-32 pb-16 md:pt-40 md:pb-24">
      {/* ambient background */}
      <div className="grid-bg pointer-events-none absolute inset-0" />
      <div className="pointer-events-none absolute -left-40 top-20 h-[32rem] w-[32rem] rounded-full bg-sky/15 blur-[140px]" />
      <div className="pointer-events-none absolute -right-32 top-40 h-[28rem] w-[28rem] rounded-full bg-violet/15 blur-[140px]" />

      <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-6 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <motion.div {...fade(0)} className="flex items-center gap-3">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-pulse-ring rounded-full bg-lime" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-lime" />
            </span>
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-muted">
              {profile.role} · {profile.tagline}
            </p>
          </motion.div>

          <motion.h1
            {...fade(0.08)}
            className="mt-6 font-display text-[2.6rem] font-extrabold leading-[1.05] tracking-tight sm:text-6xl lg:text-[4.2rem]"
          >
            I build mobile apps <span className="text-gradient">people actually use.</span>
          </motion.h1>

          <motion.p {...fade(0.16)} className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
            Hi, I'm <span className="text-fg">Joy</span> — lead mobile engineer at CabsWale, where the
            apps I architect serve 500,000+ drivers and riders across India. I ship Flutter on Android
            and iOS, and lately I spend most of my time on voice-first AI features.
          </motion.p>

          <motion.div {...fade(0.24)} className="mt-8 flex flex-wrap items-center gap-3">
            <button
              onClick={() => scrollToId('work')}
              className="rounded-xl bg-fg px-5 py-3 text-sm font-semibold text-base transition hover:-translate-y-0.5 hover:bg-white"
            >
              See my work
            </button>
            <a
              href={profile.resume}
              target="_blank"
              rel="noreferrer"
              className="rounded-xl border border-line bg-surface px-5 py-3 text-sm font-semibold transition hover:-translate-y-0.5 hover:border-sky hover:text-sky"
            >
              Download resume ↗
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="px-2 py-3 text-sm text-muted transition hover:text-fg"
            >
              GitHub →
            </a>
          </motion.div>

          <motion.dl {...fade(0.32)} className="mt-12 grid grid-cols-2 gap-6 sm:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label} className="border-l border-line pl-4">
                <dt className="font-display text-2xl font-bold tracking-tight md:text-3xl">{s.value}</dt>
                <dd className="mt-1 text-xs uppercase tracking-wider text-muted">{s.label}</dd>
              </div>
            ))}
          </motion.dl>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          className="relative h-[440px] sm:h-[520px] lg:-mr-12 lg:h-[640px] xl:-ml-16 xl:-mr-24"
        >
          <Suspense fallback={null}>
            <PhoneScene />
          </Suspense>
          <p className="pointer-events-none absolute -bottom-7 left-1/2 hidden -translate-x-1/2 font-mono text-[11px] uppercase tracking-[0.3em] text-muted/60 lg:block">
            move your cursor
          </p>
        </motion.div>
      </div>
    </section>
  );
}
