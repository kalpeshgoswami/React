import { GitBranch, Globe, Code2, ArrowUp, Heart } from 'lucide-react';

const quickLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact', href: '#contact' },
];

const socials = [
  {
    icon: <GitBranch size={18} />,
    href: 'https://github.com/kalpeshgoswami',
    label: 'GitHub',
    hover: 'hover:border-slate-400 dark:hover:border-slate-600 hover:text-slate-900 dark:hover:text-white',
  },
  {
    icon: <Globe size={18} />,
    href: 'https://linkedin.com/in/kalpeshgoswami',
    label: 'LinkedIn',
    hover: 'hover:border-blue-400 dark:hover:border-blue-500/50 hover:text-blue-500 dark:hover:text-blue-400',
  },
];

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  const handleNav = (href) => {
    document.getElementById(href.replace('#', ''))?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="relative border-t border-slate-200 dark:border-slate-800/80 bg-slate-100/90 dark:bg-[#070d1d] transition-colors duration-300">
      {/* Top gradient separator */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-indigo-500/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-10 mb-10">

          {/* Brand Column */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center shadow-md">
                <Code2 size={18} className="text-white" />
              </div>
              <div>
                <p className="font-bold text-slate-900 dark:text-white text-sm">Kalpesh Goswami</p>
                <p className="font-mono text-xs text-indigo-600 dark:text-indigo-400 font-medium">Full Stack Dev · MERN</p>
              </div>
            </div>
            <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed max-w-xs">
              Building scalable web applications with the MERN stack. Open for freelance projects and full-time opportunities.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-slate-900 dark:text-white font-semibold text-sm mb-5 uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map(({ label, href }) => (
                <li key={label}>
                  <button
                    onClick={() => handleNav(href)}
                    className="text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 text-sm transition-colors duration-200 flex items-center gap-2 group cursor-pointer bg-transparent border-none outline-none"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 group-hover:scale-125 transition-transform" />
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Social & CTA */}
          <div>
            <h4 className="text-slate-900 dark:text-white font-semibold text-sm mb-5 uppercase tracking-wider">Connect</h4>
            <div className="flex gap-3 mb-6">
              {socials.map(({ icon, href, label, hover }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className={`w-10 h-10 rounded-xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 flex items-center justify-center text-slate-600 dark:text-slate-300 transition-all duration-200 shadow-2xs ${hover}`}
                >
                  {icon}
                </a>
              ))}
            </div>
            <a
              href="mailto:kalpeshgoswami43@gmail.com"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-xs font-semibold hover:from-indigo-500 hover:to-purple-500 transition-all duration-300 shadow-md hover:shadow-indigo-500/30 hover:-translate-y-0.5"
            >
              Hire Me →
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 dark:text-slate-400 text-xs text-center sm:text-left">
            © 2026{' '}
            <span className="text-indigo-600 dark:text-indigo-400 font-medium">Kalpesh Goswami</span>.
            All rights reserved. Made with{' '}
            <Heart size={10} className="inline text-rose-500 fill-rose-500" />
            {' '}in Bhavnagar, Gujarat.
          </p>

          {/* Scroll to top */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-white hover:border-indigo-400 dark:hover:border-slate-600 hover:dark:bg-slate-700 text-xs font-medium transition-all duration-200 group cursor-pointer outline-none shadow-2xs"
          >
            <ArrowUp size={14} className="group-hover:-translate-y-0.5 transition-transform duration-200" />
            Back to Top
          </button>
        </div>
      </div>
    </footer>
  );
}
