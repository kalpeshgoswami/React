import { useState } from 'react';
import { GitBranch } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'MohinKhan',
    username: 'mohinkhan16',
    initials: 'MK',
    feedback: 'Exceptional grip on Node.js and building solid REST API flows.',
    github: 'https://github.com/mohinkhan16',
  },
  {
    id: 2,
    name: 'Prince Nandoliya',
    username: 'Prince-Nandoliya',
    initials: 'PN',
    feedback: 'Writes clean, well-structured backend code and resolves blockers fast.',
    github: 'https://github.com/Prince-Nandoliya',
  },
  {
    id: 3,
    name: 'Yashgiri Goswami',
    username: 'yashgoswami3251-wq',
    initials: 'YG',
    feedback: 'Solid understanding of MongoDB modeling and secure route handling.',
    github: 'https://github.com/yashgoswami3251-wq',
  },
  {
    id: 4,
    name: 'Ankit Shiyal',
    username: 'Ankit-Shiyal',
    initials: 'AS',
    feedback: 'Super quick with CRUD operations and responsive UI integrations.',
    github: 'https://github.com/Ankit-Shiyal',
  },
  {
    id: 5,
    name: 'Dharmik Ragiya',
    username: 'dharmik-03',
    initials: 'DR',
    feedback: 'Passionate about clean architecture and dependable in team sprints.',
    github: 'https://github.com/dharmik-03',
  },
  {
    id: 6,
    name: 'Chavda Amit',
    username: 'chavdaamit',
    initials: 'CA',
    feedback: 'Sharp eye for detail and neat, maintainable web implementations.',
    github: 'https://github.com/chavdaamit',
  },
];

function MiniAvatar({ username, initials, name }) {
  const [imgError, setImgError] = useState(false);

  return (
    <div className="relative flex-shrink-0">
      {!imgError ? (
        <img
          src={`https://github.com/${username}.png`}
          alt={name}
          onError={() => setImgError(true)}
          className="w-9 h-9 rounded-full object-cover ring-2 ring-indigo-500/30 shadow-xs"
        />
      ) : (
        <div className="w-9 h-9 rounded-full ring-2 ring-indigo-500/30 bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center font-bold text-xs text-white shadow-xs">
          {initials}
        </div>
      )}
    </div>
  );
}

function MarqueeCard({ item }) {
  return (
    <div className="w-[310px] sm:w-[340px] flex-shrink-0 p-4 rounded-xl dark:bg-slate-900/90 bg-white/90 border border-slate-200 dark:border-slate-800/80 backdrop-blur-md shadow-md dark:shadow-none hover:border-indigo-500/50 transition-all duration-300 flex flex-col justify-between group">
      {/* Header: Mini Avatar, Dev Name, @Username, GitHub Link */}
      <div className="flex items-center justify-between gap-3 mb-3">
        <div className="flex items-center gap-2.5 min-w-0">
          <MiniAvatar
            username={item.username}
            initials={item.initials}
            name={item.name}
          />
          <div className="min-w-0">
            <h4 className="text-slate-900 dark:text-white font-semibold text-sm truncate leading-tight group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
              {item.name}
            </h4>
            <a
              href={item.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-600 dark:text-indigo-400/90 font-mono text-[11px] hover:underline truncate block"
            >
              @{item.username}
            </a>
          </div>
        </div>

        {/* Subtle GitHub Link Icon */}
        <a
          href={item.github}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`View ${item.name}'s GitHub`}
          className="p-1.5 rounded-lg text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors flex-shrink-0"
        >
          <GitBranch size={14} />
        </a>
      </div>

      {/* Quote Text */}
      <p className="text-sm dark:text-slate-300 text-slate-700 italic leading-snug">
        "{item.feedback}"
      </p>
    </div>
  );
}

export default function Testimonials() {
  // Duplicate list to achieve a seamless, continuous infinite marquee
  const marqueeItems = [...testimonials, ...testimonials];

  return (
    <section id="testimonials" className="py-20 relative overflow-hidden">
      {/* Ambient glowing blobs */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-indigo-500/10 dark:bg-indigo-900/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 bg-purple-500/10 dark:bg-purple-900/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10 text-center">
        {/* Section Header */}
        <span className="px-3.5 py-1.5 rounded-full bg-white dark:bg-slate-900/80 border border-indigo-200 dark:border-indigo-500/30 text-indigo-600 dark:text-indigo-400 text-xs font-semibold uppercase tracking-widest shadow-2xs">
          RECOMMENDATIONS
        </span>
        <h2 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white mt-3 mb-2 tracking-tight">
          What <span className="gradient-text">Peers Say</span>
        </h2>
        <p className="text-slate-600 dark:text-slate-400 text-sm max-w-xl mx-auto">
          Endorsements from fellow developers and collaborators.
        </p>
      </div>

      {/* Marquee Track Container with Left/Right Gradient Fades */}
      <div className="relative w-full overflow-hidden py-3">
        {/* Left Gradient Fade */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-16 sm:w-32 bg-gradient-to-r from-slate-50 dark:from-[#0a0f1e] to-transparent z-10" />

        {/* Right Gradient Fade */}
        <div className="pointer-events-none absolute inset-y-0 right-0 w-16 sm:w-32 bg-gradient-to-l from-slate-50 dark:from-[#0a0f1e] to-transparent z-10" />

        {/* Scrolling Strip */}
        <div className="flex w-max gap-4 animate-marquee hover:[animation-play-state:paused] px-4 cursor-grab active:cursor-grabbing">
          {marqueeItems.map((item, idx) => (
            <MarqueeCard key={`${item.id}-${idx}`} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
