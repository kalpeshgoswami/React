import { useState, useEffect, useRef, useCallback } from 'react';
import { ChevronLeft, ChevronRight, MapPin, Cpu, Brain, Sparkles, Code2 } from 'lucide-react';
import profileImg from '../assets/profile.jpg';

const slides = [
  {
    id: 0,
    tag: 'Available for Work',
    icon: <MapPin size={18} className="text-emerald-500 dark:text-emerald-400" />,
    headline: "Hi, I'm Kalpesh Goswami",
    subheadline: 'Full Stack Web Developer',
    stack: 'MERN Stack',
    description:
      'Passionate developer based in Bhavnagar, Gujarat — building scalable web applications with hands-on experience in REST APIs, MVC architecture, and modern tooling.',
    cta1: { label: 'View Work', href: '#projects' },
    cta2: { label: 'Contact Me', href: '#contact' },
    badge: '📍 Bhavnagar, Gujarat',
    accent: 'from-indigo-500 to-purple-600',
    skills: ['Node.js', 'React', 'MongoDB', 'Express.js'],
  },
  {
    id: 1,
    tag: 'Technical Expertise',
    icon: <Cpu size={18} className="text-cyan-500 dark:text-cyan-400" />,
    headline: 'Core Technical Expertise',
    subheadline: 'Modern Full-Stack Technologies',
    stack: 'Battle-tested stack',
    description:
      'Proficient in building complete web solutions from frontend to backend, leveraging the most effective tools in the modern JavaScript ecosystem.',
    cta1: { label: 'See Projects', href: '#projects' },
    cta2: { label: 'Get In Touch', href: '#contact' },
    badge: '⚡ 10+ Technologies',
    accent: 'from-cyan-500 to-blue-600',
    skills: ['HTML5', 'CSS3', 'JavaScript', 'TypeScript', 'Node.js', 'Express.js', 'MongoDB', 'Mongoose', 'REST APIs', 'Bootstrap'],
  },
  {
    id: 2,
    tag: 'Problem Solver',
    icon: <Brain size={18} className="text-violet-500 dark:text-violet-400" />,
    headline: 'Problem Solver & Quick Learner',
    subheadline: 'Architecture & Modern Tooling',
    stack: 'AI-augmented development',
    description:
      'Skilled in MVC Architecture, API Integration, and leveraging modern AI tools to deliver elegant solutions efficiently. Certified in Future Forward 2026 & Tech War 2026.',
    cta1: { label: 'View Projects', href: '#projects' },
    cta2: { label: 'Contact Me', href: '#contact' },
    badge: '🏆 Certified Developer',
    accent: 'from-violet-500 to-purple-600',
    skills: ['MVC Architecture', 'API Integration', 'ChatGPT', 'Antigravity', 'Postman', 'Git & GitHub'],
  },
];

export default function Slider() {
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [direction, setDirection] = useState(1); // 1=forward, -1=back
  const [imgError, setImgError] = useState(false);
  const autoRef = useRef(null);

  const goTo = useCallback((idx, dir = 1) => {
    if (animating) return;
    setAnimating(true);
    setDirection(dir);
    setTimeout(() => {
      setCurrent(idx);
      setAnimating(false);
    }, 400);
  }, [animating]);

  const next = useCallback(() => {
    goTo((current + 1) % slides.length, 1);
  }, [current, goTo]);

  const prev = useCallback(() => {
    goTo((current - 1 + slides.length) % slides.length, -1);
  }, [current, goTo]);

  const resetTimer = () => {
    clearInterval(autoRef.current);
    autoRef.current = setInterval(next, 6000);
  };

  useEffect(() => {
    autoRef.current = setInterval(next, 6000);
    return () => clearInterval(autoRef.current);
  }, [next]);

  const slide = slides[current];

  const handleCTA = (href) => {
    document.getElementById(href.replace('#', ''))?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center hero-gradient grid-pattern overflow-hidden pt-16"
    >
      {/* Background glowing ambient blobs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-indigo-500/15 dark:bg-indigo-600/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/15 dark:bg-purple-600/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-500/10 dark:bg-indigo-900/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
        <div className="grid lg:grid-cols-12 gap-12 items-center">

          {/* Left: Text Content */}
          <div
            className={`lg:col-span-7 transition-all duration-400 ${
              animating
                ? direction > 0 ? 'opacity-0 -translate-x-8' : 'opacity-0 translate-x-8'
                : 'opacity-100 translate-x-0'
            }`}
          >
            {/* Tag Badges */}
            <div className="flex flex-wrap items-center gap-2 mb-6">
              <span className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white dark:bg-slate-900/80 text-xs font-semibold text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-800 shadow-sm backdrop-blur-md">
                {slide.icon}
                {slide.tag}
              </span>
              <span className="px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-xs font-medium text-emerald-600 dark:text-emerald-400 shadow-sm">
                {slide.badge}
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 dark:text-white leading-tight mb-4 tracking-tight">
              {current === 0 ? (
                <>
                  Hi, I'm{' '}
                  <span className="gradient-text">Kalpesh Goswami</span>
                </>
              ) : (
                <span className="gradient-text">{slide.headline}</span>
              )}
            </h1>

            {/* Subheadline & Stack Pill */}
            <div className="flex items-center gap-3 mb-6">
              <div className={`h-1.5 w-12 rounded-full bg-gradient-to-r ${slide.accent}`} />
              <p className="text-lg font-semibold text-slate-700 dark:text-slate-300">
                {slide.subheadline}{' '}
                <span className={`font-mono text-sm bg-gradient-to-r ${slide.accent} bg-clip-text text-transparent font-bold`}>
                  — {slide.stack}
                </span>
              </p>
            </div>

            {/* Description */}
            <p className="text-slate-600 dark:text-slate-300 text-base leading-relaxed mb-8 max-w-xl">
              {slide.description}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 mb-10">
              {/* Primary CTA */}
              <button
                onClick={() => handleCTA(slide.cta1.href)}
                className={`px-6 py-3.5 rounded-xl bg-gradient-to-r ${slide.accent} text-white font-semibold text-sm hover:shadow-lg hover:shadow-indigo-500/25 hover:-translate-y-0.5 transition-all duration-300 cursor-pointer border-none outline-none`}
              >
                {slide.cta1.label}
              </button>

              {/* Styled Secondary CTA Button */}
              <button
                onClick={() => handleCTA(slide.cta2.href)}
                className="px-6 py-3.5 rounded-xl bg-white dark:bg-slate-800/80 text-slate-800 dark:text-white border border-slate-300 dark:border-slate-700 hover:bg-slate-100 hover:dark:bg-slate-700 hover:-translate-y-0.5 transition-all duration-300 cursor-pointer outline-none shadow-sm font-semibold text-sm"
              >
                {slide.cta2.label}
              </button>
            </div>

            {/* Slide indicators */}
            <div className="flex items-center gap-3">
              {slides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => { goTo(i, i > current ? 1 : -1); resetTimer(); }}
                  aria-label={`Slide ${i + 1}`}
                  className={`transition-all duration-300 rounded-full border-none outline-none cursor-pointer ${
                    i === current
                      ? `w-8 h-2.5 bg-gradient-to-r ${slide.accent}`
                      : 'w-2.5 h-2.5 bg-slate-300 dark:bg-slate-700 hover:bg-slate-400 dark:hover:bg-slate-600'
                  }`}
                />
              ))}
              <span className="ml-2 text-slate-500 dark:text-slate-400 text-xs font-mono font-medium">
                {String(current + 1).padStart(2, '0')} / {String(slides.length).padStart(2, '0')}
              </span>
            </div>
          </div>

          {/* Right: Slide Visual Showcase */}
          <div
            className={`lg:col-span-5 transition-all duration-400 ${
              animating
                ? direction > 0 ? 'opacity-0 translate-x-8' : 'opacity-0 -translate-x-8'
                : 'opacity-100 translate-x-0'
            }`}
          >
            {current === 0 ? (
              /* Slide 1: Dedicated Profile Image Showcase */
              <div className="relative flex flex-col items-center justify-center p-4">
                {/* Glow ring in background */}
                <div className="absolute inset-0 max-w-[320px] max-h-[320px] m-auto rounded-full bg-gradient-to-tr from-indigo-500/30 to-purple-600/30 blur-2xl pointer-events-none" />

                <div className="relative group">
                  {/* Floating Profile Picture */}
                  <div className="animate-profile-float">
                    <div className="relative w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-full p-1.5 bg-gradient-to-tr from-indigo-500 via-purple-500 to-cyan-400 shadow-2xl shadow-indigo-500/25">
                      <div className="w-full h-full rounded-full overflow-hidden bg-slate-100 dark:bg-slate-900 ring-4 ring-offset-4 ring-offset-slate-50 dark:ring-offset-[#0a0f1e] ring-indigo-500 transition-all duration-500 group-hover:scale-[1.03]">
                        {!imgError ? (
                          <img
                            src={profileImg}
                            alt="Kalpesh Goswami - Full Stack Developer"
                            onError={() => setImgError(true)}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                          />
                        ) : (
                          <div className="w-full h-full bg-gradient-to-br from-indigo-600 via-purple-600 to-indigo-800 flex flex-col items-center justify-center text-white p-6 text-center">
                            <Code2 size={64} className="mb-2 text-indigo-200" />
                            <span className="font-bold text-xl">Kalpesh Goswami</span>
                            <span className="text-xs text-indigo-200 mt-1">Full Stack Developer</span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Floating Badge 1 - Top Left */}
                  <div className="absolute -top-3 -left-4 sm:-left-6 bg-white/95 dark:bg-slate-900/90 rounded-2xl px-4 py-2.5 border border-slate-200 dark:border-slate-800 shadow-xl dark:shadow-slate-950/50 backdrop-blur-md animate-pulse-glow flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 flex items-center justify-center">
                      <Sparkles size={16} />
                    </div>
                    <div>
                      <p className="text-slate-900 dark:text-white font-bold text-xs">MERN Stack</p>
                      <p className="text-slate-500 dark:text-slate-400 text-[10px]">Developer</p>
                    </div>
                  </div>

                  {/* Floating Badge 2 - Bottom Right */}
                  <div className="absolute -bottom-4 -right-4 sm:-right-6 bg-white/95 dark:bg-slate-900/90 rounded-2xl px-4 py-2.5 border border-slate-200 dark:border-slate-800 shadow-xl dark:shadow-slate-950/50 backdrop-blur-md flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
                      <MapPin size={16} />
                    </div>
                    <div>
                      <p className="text-slate-900 dark:text-white font-bold text-xs">Bhavnagar</p>
                      <p className="text-slate-500 dark:text-slate-400 text-[10px]">Gujarat, India</p>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              /* Slides 2 & 3: Interactive Visual Cards */
              <div className="relative">
                {/* Main Card */}
                <div className="bg-white dark:bg-slate-900/80 rounded-2xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-xl dark:shadow-slate-950/40 neon-border animate-float backdrop-blur-md">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${slide.accent} flex items-center justify-center mb-4 shadow-lg text-white`}>
                    {slide.icon}
                  </div>
                  <h3 className="text-slate-900 dark:text-white font-bold text-xl mb-2">{slide.subheadline}</h3>
                  <p className="text-slate-600 dark:text-slate-300 text-sm mb-6 leading-relaxed">{slide.description}</p>

                  {/* Skill pills */}
                  <div className="flex flex-wrap gap-2">
                    {slide.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1.5 rounded-full text-xs font-semibold bg-indigo-50 dark:bg-slate-800 border border-indigo-200/60 dark:border-slate-700 text-indigo-700 dark:text-slate-200 shadow-2xs"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Floating stat card 1 */}
                <div className="absolute -top-4 -right-4 bg-white/95 dark:bg-slate-900/90 rounded-xl px-4 py-3 border border-slate-200 dark:border-slate-800 shadow-xl dark:shadow-slate-950/50 animate-pulse-glow backdrop-blur-md">
                  <p className="text-indigo-600 dark:text-indigo-400 font-bold text-xl">10+</p>
                  <p className="text-slate-500 dark:text-slate-400 text-xs">Technologies</p>
                </div>

                {/* Floating stat card 2 */}
                <div className="absolute -bottom-4 -left-4 bg-white/95 dark:bg-slate-900/90 rounded-xl px-4 py-3 border border-slate-200 dark:border-slate-800 shadow-xl dark:shadow-slate-950/50 backdrop-blur-md">
                  <p className="text-emerald-600 dark:text-emerald-400 font-bold text-xl">3+</p>
                  <p className="text-slate-500 dark:text-slate-400 text-xs">Projects Built</p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Prev / Next Controls */}
        <div className="flex justify-end gap-3 mt-12">
          <button
            onClick={() => { prev(); resetTimer(); }}
            aria-label="Previous slide"
            className="w-11 h-11 rounded-full bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 hover:text-indigo-600 dark:hover:text-white hover:border-indigo-400 dark:hover:border-slate-600 dark:hover:bg-slate-700 flex items-center justify-center transition-all duration-200 cursor-pointer outline-none shadow-sm hover:scale-105 active:scale-95"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={() => { next(); resetTimer(); }}
            aria-label="Next slide"
            className="w-11 h-11 rounded-full bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 hover:text-indigo-600 dark:hover:text-white hover:border-indigo-400 dark:hover:border-slate-600 dark:hover:bg-slate-700 flex items-center justify-center transition-all duration-200 cursor-pointer outline-none shadow-sm hover:scale-105 active:scale-95"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
}
