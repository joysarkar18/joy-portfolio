import { useState } from 'react';
import { motion } from 'framer-motion';
import Section from './Section';
import Reveal from './Reveal';
import { projects, type Project } from '../data';

/**
 * A phone frame showing the app's real home screen. If the screenshot is
 * missing (not sent yet, or a bad path) it shows the icon on a gradient.
 */
function DeviceFrame({ p }: { p: Project }) {
  const [broken, setBroken] = useState(false);
  const hasShot = !!p.screen && !broken;

  return (
    <div className="relative mx-auto h-[320px] w-[156px] rounded-[2.1rem] border border-white/10 bg-[#0b0f17] p-[6px] shadow-[0_35px_60px_-25px_rgba(0,0,0,0.95)] ring-1 ring-black/70 transition-transform duration-500 ease-out group-hover:-translate-y-4">
      <div
        className="relative h-full w-full overflow-hidden rounded-[1.7rem]"
        style={hasShot ? undefined : { background: `linear-gradient(160deg, ${p.hue[0]}, ${p.hue[1]})` }}
      >
        {hasShot ? (
          <img
            src={p.screen}
            alt={`${p.name} home screen`}
            className="h-full w-full object-cover object-top"
            loading="lazy"
            onError={() => setBroken(true)}
          />
        ) : (
          <div className="flex h-full w-full flex-col items-center justify-center gap-3">
            {p.icon ? (
              <img src={p.icon} alt="" className="h-14 w-14 rounded-2xl shadow-lg" loading="lazy" />
            ) : (
              <span className="grid h-14 w-14 place-items-center rounded-2xl bg-black/35 font-display text-2xl font-bold text-white shadow-lg">
                {p.kind === 'package' ? '{ }' : p.name[0]}
              </span>
            )}
            <span className="px-3 text-center text-[11px] font-semibold leading-tight text-white/90">
              {p.name}
            </span>
          </div>
        )}
      </div>
      {/* dynamic island */}
      <span className="absolute left-1/2 top-[11px] h-[7px] w-10 -translate-x-1/2 rounded-full bg-black/85" />
    </div>
  );
}

function ProjectCard({ p, index }: { p: Project; index: number }) {
  return (
    <Reveal delay={(index % 3) * 0.07}>
      <motion.article
        whileHover={{ y: -4 }}
        transition={{ type: 'spring', stiffness: 300, damping: 24 }}
        className="group card flex h-full flex-col overflow-hidden"
      >
        {/* Phone peeks out of a tinted panel; the bottom is clipped on purpose. */}
        <div
          className="relative h-[250px] overflow-hidden border-b border-line"
          style={{
            background: `radial-gradient(120% 95% at 50% 100%, ${p.hue[0]}2e 0%, transparent 70%)`,
          }}
        >
          <div className="grid-bg absolute inset-0 opacity-60" />
          <div className="absolute inset-x-0 top-7">
            <DeviceFrame p={p} />
          </div>
          <span className="absolute left-5 top-5 font-mono text-[11px] uppercase tracking-[0.2em] text-muted">
            {p.kind === 'ai' ? 'AI feature' : p.kind === 'package' ? 'Open source' : 'Mobile app'}
          </span>
        </div>

        <div className="flex flex-1 flex-col p-6">
          <h3 className="font-display text-xl font-semibold">{p.name}</h3>
          <p className="mt-1 text-sm text-sky">{p.tagline}</p>
          <p className="mt-4 flex-1 text-[15px] leading-relaxed text-muted">{p.description}</p>

          <div className="mt-5 flex flex-wrap gap-2">
            {p.tags.map((t) => (
              <span key={t} className="chip !py-1 !text-xs">
                {t}
              </span>
            ))}
          </div>

          <div className="mt-6 flex items-center justify-between border-t border-line pt-4">
            <span className="font-mono text-xs text-lime">{p.metric ?? ''}</span>
            {p.link && (
              <a
                href={p.link.href}
                target="_blank"
                rel="noreferrer"
                className="text-sm font-medium text-fg transition hover:text-sky"
              >
                {p.link.label} ↗
              </a>
            )}
          </div>
        </div>
      </motion.article>
    </Reveal>
  );
}

export default function Projects() {
  return (
    <Section
      id="work"
      eyebrow="Selected work"
      title="Apps on real phones, with real numbers."
      intro="Everything here is live on the Play Store, App Store or pub.dev — no mockups, no side-quests that never shipped."
    >
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((p, i) => (
          <ProjectCard key={p.name} p={p} index={i} />
        ))}
      </div>
    </Section>
  );
}
