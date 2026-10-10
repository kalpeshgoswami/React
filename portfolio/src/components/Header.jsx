import { useState, useEffect } from 'react';
import { Menu, X, GitBranch, Code2, Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/useTheme';
import profileImg from '../assets/profile.jpg';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact', href: '#contact' },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [imgError, setImgError] = useState(false);
  const { isDark, toggleTheme } = useTheme();

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = ['home', 'skills', 'projects', 'testimonials', 'contact'];
      for (const id of [...sections].reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 100) {
          setActiveSection(id);
          break;
        }
      }
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNavClick = (href) => {
    setMenuOpen(false);
    const id = href.replace('#', '');
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/85 dark:bg-slate-900/85 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 shadow-lg shadow-indigo-500/5'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* Brand Logo with Mini Circular Avatar */}
          <button
            onClick={() => handleNavClick('#home')}
            className="flex items-center gap-3 group cursor-pointer bg-transparent border-none outline-none text-left"
          >
            <div className="relative flex-shrink-0">
              {!imgError ? (
                <img
                  src={profileImg}
                  alt="Kalpesh Goswami"
                  onError={() => setImgError(true)}
                  className="w-10 h-10 rounded-full object-cover ring-2 ring-indigo-500/80 shadow-md group-hover:ring-indigo-400 group-hover:scale-105 transition-all duration-300"
                />
              ) : (
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center shadow-lg ring-2 ring-indigo-500/80">
                  <Code2 size={18} className="text-white" />
                </div>
              )}
              {/* Online status indicator */}
              <span className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-500 border-2 border-white dark:border-[#0a0f1e] rounded-full shadow-xs" />
            </div>

            <div className="flex flex-col leading-tight">
              <span className="font-bold text-slate-900 dark:text-white text-sm tracking-tight group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors duration-300">
                Kalpesh Goswami
              </span>
              <span className="font-mono text-xs text-indigo-600 dark:text-indigo-400 font-medium">
                Full Stack Dev
              </span>
            </div>
          </button>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map(({ label, href }) => {
              const id = href.replace('#', '');
              const isActive = activeSection === id;
              return (
                <button
                  key={label}
                  onClick={() => handleNavClick(href)}
                  className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 cursor-pointer border-none outline-none
                    ${isActive
                      ? 'text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-500/10 border border-indigo-200/80 dark:border-indigo-500/30 shadow-xs font-semibold'
                      : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100/80 dark:hover:bg-slate-800/60 bg-transparent'
                    }`}
                >
                  {label}
                </button>
              );
            })}
          </nav>

          {/* Desktop Actions: Theme Toggle & GitHub CTA */}
          <div className="hidden md:flex items-center gap-3">
            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              aria-label={isDark ? 'Switch to Light mode' : 'Switch to Dark mode'}
              title={isDark ? 'Switch to Light mode' : 'Switch to Dark mode'}
              className="relative p-2.5 rounded-xl border transition-all duration-300 cursor-pointer outline-none
                bg-slate-100 hover:bg-slate-200 border-slate-200 text-amber-500 shadow-2xs
                dark:bg-slate-800/80 dark:hover:bg-slate-700 dark:border-slate-700 dark:text-amber-400
                hover:scale-105 active:scale-95"
            >
              <div className="relative w-5 h-5 flex items-center justify-center">
                {isDark ? (
                  <Sun
                    size={20}
                    className="text-amber-400 transform transition-all duration-500 rotate-0 scale-100 hover:rotate-45"
                  />
                ) : (
                  <Moon
                    size={20}
                    className="text-indigo-600 transform transition-all duration-500 rotate-0 scale-100 hover:-rotate-12"
                  />
                )}
              </div>
            </button>

            {/* GitHub Profile Button */}
            <a
              href="https://github.com/kalpeshgoswami"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-sm font-semibold hover:from-indigo-500 hover:to-purple-500 transition-all duration-300 shadow-md hover:shadow-indigo-500/30 hover:-translate-y-0.5"
            >
              <GitBranch size={16} />
              GitHub
            </a>
          </div>

          {/* Mobile Controls: Theme Toggle + Hamburger */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={toggleTheme}
              aria-label={isDark ? 'Switch to Light mode' : 'Switch to Dark mode'}
              className="p-2 rounded-lg border transition-all duration-200 cursor-pointer outline-none
                bg-slate-100 border-slate-200 text-amber-500
                dark:bg-slate-800/80 dark:border-slate-700 dark:text-amber-400"
            >
              {isDark ? <Sun size={18} className="text-amber-400" /> : <Moon size={18} className="text-indigo-600" />}
            </button>

            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="p-2 rounded-lg border border-transparent text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800/60 transition-all duration-200 bg-transparent outline-none cursor-pointer"
              aria-label="Toggle menu"
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          menuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl border-t border-slate-200 dark:border-slate-800 px-4 py-4 space-y-1 shadow-xl">
          {navLinks.map(({ label, href }) => {
            const id = href.replace('#', '');
            const isActive = activeSection === id;
            return (
              <button
                key={label}
                onClick={() => handleNavClick(href)}
                className={`w-full text-left px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 cursor-pointer border-none outline-none
                  ${isActive
                    ? 'bg-indigo-50 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border border-indigo-200 dark:border-indigo-500/30 font-semibold'
                    : 'text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800/60 bg-transparent'
                  }`}
              >
                {label}
              </button>
            );
          })}
          <a
            href="https://github.com/kalpeshgoswami"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 mt-2 px-4 py-3 rounded-lg bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-sm font-semibold w-full shadow-md"
          >
            <GitBranch size={16} />
            GitHub Profile
          </a>
        </div>
      </div>
    </header>
  );
}
