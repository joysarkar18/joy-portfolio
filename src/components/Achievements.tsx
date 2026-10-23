import Section from './Section';
import Reveal from './Reveal';
import { achievements } from '../data';

const bar: Record<string, string> = {
  sky: 'from-sky',
  lime: 'from-lime',
  violet: 'from-violet',
  amber: 'from-amber',
};

export default function Achievements() {
  return (
    <Section id="achievements" eyebrow="Highlights" title="Numbers I'm happy to be asked about.">
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {achievements.map((a, i) => (
          <Reveal key={a.title} delay={i * 0.06}>
            <div className="card relative h-full overflow-hidden p-6">
              <span
                className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${bar[a.accent]} to-transparent`}
              />
              <h3 className="font-display text-lg font-semibold leading-snug">{a.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">{a.body}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
