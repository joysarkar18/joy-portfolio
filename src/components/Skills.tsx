import { useState, type ComponentType } from 'react';
import {
  Bell,
  Boxes,
  Brain,
  Bug,
  Cloud,
  Code2,
  Cog,
  CreditCard,
  Database,
  Layers,
  Mic,
  Package,
  Plug,
  Radio,
  ScanFace,
  ShieldCheck,
  Volume2,
  Zap,
  type LucideProps,
} from 'lucide-react';
import Section from './Section';
import Reveal from './Reveal';
import { skillGroups, type Glyph, type Skill } from '../data';

const glyphs: Record<Glyph, ComponentType<LucideProps>> = {
  mic: Mic,
  volume: Volume2,
  brain: Brain,
  scanFace: ScanFace,
  layers: Layers,
  boxes: Boxes,
  package: Package,
  zap: Zap,
  plug: Plug,
  bell: Bell,
  cog: Cog,
  database: Database,
  shield: ShieldCheck,
  creditCard: CreditCard,
  radio: Radio,
  cloud: Cloud,
  bug: Bug,
  code: Code2,
};

const accentClass: Record<string, string> = {
  sky: 'text-sky',
  lime: 'text-lime',
  violet: 'text-violet',
  amber: 'text-amber',
};

/**
 * Brand logo from the Simple Icons CDN (monochrome, matches the text
 * colour); falls back to a lucide glyph if the slug 404s or we're offline.
 */
function SkillIcon({ skill }: { skill: Skill }) {
  const [broken, setBroken] = useState(false);
  if (skill.si && !broken) {
    return (
      <img
        src={`https://cdn.simpleicons.org/${skill.si}/e8ecf4`}
        alt=""
        width={14}
        height={14}
        loading="lazy"
        className="h-3.5 w-3.5 opacity-90"
        onError={() => setBroken(true)}
      />
    );
  }
  const Glyph = glyphs[skill.lu ?? 'code'];
  return <Glyph className="h-3.5 w-3.5 text-muted" strokeWidth={1.9} aria-hidden />;
}

export default function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="Skills"
      title="The stack I reach for."
      intro="Mobile first, but comfortable one layer down (Firebase, Node, Postgres) and one layer up (voice, LLMs)."
    >
      <div className="grid gap-5 md:grid-cols-2">
        {skillGroups.map((g, i) => (
          <Reveal key={g.title} delay={i * 0.06}>
            <div className="card h-full p-6">
              <h3 className={`font-mono text-xs uppercase tracking-[0.25em] ${accentClass[g.accent]}`}>
                {g.title}
              </h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {g.items.map((s) => (
                  <li key={s.name} className="chip">
                    <SkillIcon skill={s} />
                    {s.name}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
