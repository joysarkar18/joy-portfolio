import Section from './Section';
import Reveal from './Reveal';
import { experience } from '../data';

export default function Experience() {
  return (
    <Section id="experience" eyebrow="Experience" title="Where I've shipped.">
      <ol className="relative border-l border-line pl-8 md:pl-12">
        {experience.map((job, i) => (
          <li key={job.company} className="relative pb-12 last:pb-0">
            <span
              className={`absolute -left-[2.05rem] top-1.5 grid h-4 w-4 place-items-center rounded-full border-2 md:-left-[3.05rem] ${
                i === 0 ? 'border-lime bg-lime/30' : 'border-line bg-base'
              }`}
            >
              {i === 0 && <span className="h-1.5 w-1.5 rounded-full bg-lime" />}
            </span>
            <Reveal delay={i * 0.05}>
              <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
                <h3 className="font-display text-xl font-semibold">
                  {job.url ? (
                    <a
                      href={job.url}
                      target="_blank"
                      rel="noreferrer"
                      className="transition hover:text-sky"
                    >
                      {job.company} <span className="text-sky">↗</span>
                    </a>
                  ) : (
                    job.company
                  )}
                  <span className="text-muted"> — {job.role}</span>
                </h3>
                <p className="font-mono text-xs text-muted">
                  {job.period}
                  {job.location ? ` · ${job.location}` : ''}
                </p>
              </div>
              {job.note && <p className="mt-1 text-sm text-lime/90">{job.note}</p>}
              <ul className="mt-4 space-y-2.5 text-[15px] leading-relaxed text-muted">
                {job.bullets.map((b) => (
                  <li key={b} className="flex gap-3">
                    <span className="mt-[0.6em] h-1.5 w-1.5 shrink-0 rounded-full bg-sky/80" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </li>
        ))}
      </ol>
    </Section>
  );
}
