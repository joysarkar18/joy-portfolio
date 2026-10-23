import { useEffect, useState } from 'react';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import Section from './Section';
import Reveal from './Reveal';
import { doctorLines, profile } from '../data';

/** `flutter doctor`-style terminal that types its lines in once visible. */
function DoctorTerminal() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const [shown, setShown] = useState(0);

  useEffect(() => {
    if (!inView) return;
    if (shown >= doctorLines.length + 1) return;
    const id = setTimeout(() => setShown((n) => n + 1), shown === 0 ? 500 : 260);
    return () => clearTimeout(id);
  }, [inView, shown]);

  const done = shown > doctorLines.length;

  return (
    <div ref={ref} className="card overflow-hidden font-mono text-[13px] leading-relaxed md:text-sm">
      <div className="flex items-center gap-2 border-b border-line px-4 py-3">
        <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
        <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
        <span className="h-3 w-3 rounded-full bg-[#28c840]" />
        <span className="ml-3 text-xs text-muted">joy@kolkata — zsh</span>
      </div>
      <div className="px-5 py-4">
        <p>
          <span className="text-lime">➜</span> <span className="text-sky">~</span> flutter doctor -v
        </p>
        <p className="mt-2 text-muted">Doctor summary (to see all details, run flutter doctor -v):</p>
        <ul className="mt-2 space-y-1">
          {doctorLines.slice(0, shown).map((l) => (
            <li key={l.text}>
              <span className="text-lime">[✓]</span> {l.text}
            </li>
          ))}
        </ul>
        {done && (
          <p className="mt-3">
            <span className="text-lime">•</span> No issues found!{' '}
            <span className="animate-blink text-sky">▍</span>
          </p>
        )}
        {!done && <span className="animate-blink text-sky">▍</span>}
      </div>
    </div>
  );
}

export default function About() {
  return (
    <Section
      id="about"
      eyebrow="About"
      title="Three years, one lesson: ship it, then measure it."
    >
      <div className="grid items-start gap-10 lg:grid-cols-2">
        <Reveal className="space-y-5 text-base leading-relaxed text-muted md:text-lg">
          <p>
            I'm a Senior Flutter Developer from {profile.location}. Since May 2024 I've been the lead
            mobile engineer at <span className="text-fg">CabsWale</span>, an outstation cab marketplace,
            where I own the architecture and releases of two apps used by half a million drivers and
            riders.
          </p>
          <p>
            The work I'm proudest of is <span className="text-fg">Raahi AI</span> — a voice-first
            assistant that lets a driver ask for the nearest trip and get a spoken answer in real time.
            Building it meant stitching together speech-to-text, LLM APIs, LiveKit/WebRTC and an
            open-source TTS model I deployed myself.
          </p>
          <p>
            I care about the unglamorous parts too: moving both apps to Clean Architecture, pushing
            crash-free sessions to 99.8%, and halving the Firebase bill by fixing how we read and write
            Firestore.
          </p>
          <p className="text-sm text-muted/80">
            Off the clock I build small things for Bengal — a kids' Bengali learning app and a
            paperwork-assistance service — and publish Flutter packages on pub.dev.
          </p>
        </Reveal>
        <Reveal delay={0.15}>
          <DoctorTerminal />
        </Reveal>
      </div>
    </Section>
  );
}
