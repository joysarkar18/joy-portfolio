import Reveal from './Reveal';
import { profile } from '../data';

const links = [
  { label: 'Email', value: profile.email, href: `mailto:${profile.email}` },
  { label: 'Phone', value: profile.phone, href: profile.phoneHref },
  { label: 'LinkedIn', value: 'joy-sarkar-667b47218', href: profile.linkedin },
  { label: 'GitHub', value: 'joysarkar18', href: profile.github },
];

export default function Contact() {
  return (
    <section id="contact" className="relative scroll-mt-20 py-24 md:py-32">
      <div className="grid-bg pointer-events-none absolute inset-0 opacity-70" />
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[30rem] w-[30rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-sky/10 blur-[160px]" />
      <div className="relative mx-auto max-w-6xl px-6">
        <Reveal className="text-center">
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-sky">Contact</p>
          <h2 className="mx-auto mt-4 max-w-3xl font-display text-4xl font-bold tracking-tight md:text-6xl">
            Let's build something <span className="text-gradient">people use every day.</span>
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base text-muted md:text-lg">
            Open to senior mobile roles and AI-powered product work. Based in {profile.location},
            happy to work with teams anywhere.
          </p>
          <a
            href={`mailto:${profile.email}`}
            className="mt-8 inline-block rounded-xl bg-fg px-6 py-3.5 font-semibold text-base transition hover:-translate-y-0.5 hover:bg-white"
          >
            Say hello →
          </a>
        </Reveal>

        <Reveal delay={0.1} className="mx-auto mt-14 grid max-w-4xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              target={l.href.startsWith('http') ? '_blank' : undefined}
              rel="noreferrer"
              className="card block p-5 text-left"
            >
              <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted">{l.label}</p>
              <p className="mt-2 truncate text-sm font-medium">{l.value}</p>
            </a>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
