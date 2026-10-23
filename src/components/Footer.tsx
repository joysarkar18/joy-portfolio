import { profile } from '../data';
import { scrollToId } from '../hooks/useLenis';

export default function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-8 text-sm text-muted md:flex-row">
        <p>
          © {new Date().getFullYear()} {profile.name}. Built with React, Three.js and Tailwind.
        </p>
        <div className="flex items-center gap-5">
          <a href={profile.github} target="_blank" rel="noreferrer" className="transition hover:text-fg">
            GitHub
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" className="transition hover:text-fg">
            LinkedIn
          </a>
          <button onClick={() => scrollToId('top')} className="transition hover:text-fg">
            Back to top ↑
          </button>
        </div>
      </div>
    </footer>
  );
}
