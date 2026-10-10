import { useState } from 'react';
import {
  GitBranch, Send, CheckCircle, User, MessageSquare, FileText, AtSign,
} from 'lucide-react';

const contactCards = [
  {
    icon: (
      <svg className="w-5 h-5 text-emerald-500 dark:text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
    label: 'Phone',
    value: '+91 6355741841',
    href: 'tel:+916355741841',
    bgAccent: 'bg-emerald-500/10 dark:bg-emerald-500/15',
    border: 'border-emerald-500/30 dark:border-emerald-500/25',
    hoverText: 'group-hover:text-emerald-600 dark:group-hover:text-emerald-400',
  },
  {
    icon: (
      <svg className="w-5 h-5 text-indigo-500 dark:text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    label: 'Email',
    value: 'kalpeshgoswami43@gmail.com',
    href: 'mailto:kalpeshgoswami43@gmail.com',
    bgAccent: 'bg-indigo-500/10 dark:bg-indigo-500/15',
    border: 'border-indigo-500/30 dark:border-indigo-500/25',
    hoverText: 'group-hover:text-indigo-600 dark:group-hover:text-indigo-400',
  },
  {
    icon: (
      <svg className="w-5 h-5 text-rose-500 dark:text-rose-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    label: 'Location',
    value: 'Bhavnagar, Gujarat, India',
    href: 'https://maps.google.com/?q=Bhavnagar,Gujarat',
    bgAccent: 'bg-rose-500/10 dark:bg-rose-500/15',
    border: 'border-rose-500/30 dark:border-rose-500/25',
    hoverText: 'group-hover:text-rose-600 dark:group-hover:text-rose-400',
  },
  {
    icon: (
      <svg className="w-5 h-5 text-sky-500 dark:text-sky-400" fill="currentColor" viewBox="0 0 24 24">
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
      </svg>
    ),
    label: 'LinkedIn',
    value: 'linkedin.com/in/kalpeshgoswami',
    href: 'https://linkedin.com/in/kalpeshgoswami',
    bgAccent: 'bg-sky-500/10 dark:bg-sky-500/15',
    border: 'border-sky-500/30 dark:border-sky-500/25',
    hoverText: 'group-hover:text-sky-600 dark:group-hover:text-sky-400',
  },
];

const inputClasses =
  'w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-950/70 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 text-sm focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 transition-all duration-200';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle | sending | sent

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('sending');
    setTimeout(() => {
      setStatus('sent');
      setForm({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setStatus('idle'), 4000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-[500px] h-[400px] bg-indigo-500/10 dark:bg-indigo-900/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-purple-500/10 dark:bg-purple-900/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="px-3.5 py-1.5 rounded-full bg-white dark:bg-slate-900/80 border border-indigo-200 dark:border-indigo-500/30 text-indigo-600 dark:text-indigo-400 text-xs font-semibold uppercase tracking-widest shadow-2xs">
            Get In Touch
          </span>
          <h2 className="text-4xl sm:text-5xl font-black text-slate-900 dark:text-white mt-4 mb-4 tracking-tight">
            Let's{' '}
            <span className="gradient-text">Work Together</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Have a project in mind or want to collaborate? I'd love to hear from you. Drop me a message and I'll get back to you as soon as possible.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-10">
          {/* Left: Contact Info */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="text-slate-900 dark:text-white font-bold text-xl mb-6">Contact Information</h3>

            {contactCards.map((card) => (
              <a
                key={card.label}
                href={card.href}
                target={card.href.startsWith('http') ? '_blank' : undefined}
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 bg-white dark:bg-slate-900/80 rounded-xl border border-slate-200 dark:border-slate-800 card-hover group transition-all duration-300 shadow-sm dark:shadow-none backdrop-blur-md"
              >
                {/* Centered square badge container */}
                <div
                  className={`w-12 h-12 rounded-xl ${card.bgAccent} border ${card.border} flex items-center justify-center flex-shrink-0 shadow-2xs group-hover:scale-105 transition-transform duration-300`}
                >
                  {card.icon}
                </div>

                <div className="min-w-0">
                  <p className="text-slate-500 dark:text-slate-400 text-xs font-semibold uppercase tracking-wider mb-0.5">{card.label}</p>
                  <p className={`text-sm font-medium text-slate-800 dark:text-slate-200 ${card.hoverText} transition-colors duration-300 truncate`}>
                    {card.value}
                  </p>
                </div>
              </a>
            ))}

            {/* Social row */}
            <div className="pt-4">
              <p className="text-slate-500 dark:text-slate-400 text-xs font-semibold uppercase tracking-wider mb-3">Social Profiles</p>
              <div className="flex gap-3">
                <a
                  href="https://linkedin.com/in/kalpeshgoswami"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-sky-600 dark:text-sky-400 text-sm font-semibold hover:bg-slate-100 hover:dark:bg-slate-700 transition-all duration-200 shadow-2xs"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                  LinkedIn
                </a>
                <a
                  href="https://github.com/kalpeshgoswami"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 text-sm font-semibold hover:bg-slate-100 hover:dark:bg-slate-700 transition-all duration-200 shadow-2xs"
                >
                  <GitBranch size={16} />
                  GitHub
                </a>
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div className="lg:col-span-3">
            <div className="bg-white dark:bg-slate-900/80 rounded-2xl p-8 border border-slate-200 dark:border-slate-800 neon-border shadow-xl dark:shadow-none backdrop-blur-md">
              <h3 className="text-slate-900 dark:text-white font-bold text-xl mb-6">Send a Message</h3>

              {status === 'sent' ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center mb-4">
                    <CheckCircle size={32} className="text-emerald-500 dark:text-emerald-400" />
                  </div>
                  <h4 className="text-slate-900 dark:text-white font-bold text-lg mb-2">Message Sent!</h4>
                  <p className="text-slate-600 dark:text-slate-300 text-sm">Thanks for reaching out. I'll get back to you soon.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    {/* Name */}
                    <div className="relative">
                      <div className="absolute left-3.5 top-3.5 text-slate-400 dark:text-slate-500 pointer-events-none">
                        <User size={16} />
                      </div>
                      <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Your Name"
                        required
                        className={`${inputClasses} pl-10`}
                      />
                    </div>
                    {/* Email */}
                    <div className="relative">
                      <div className="absolute left-3.5 top-3.5 text-slate-400 dark:text-slate-500 pointer-events-none">
                        <AtSign size={16} />
                      </div>
                      <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="Your Email"
                        required
                        className={`${inputClasses} pl-10`}
                      />
                    </div>
                  </div>

                  {/* Subject */}
                  <div className="relative">
                    <div className="absolute left-3.5 top-3.5 text-slate-400 dark:text-slate-500 pointer-events-none">
                      <FileText size={16} />
                    </div>
                    <input
                      type="text"
                      name="subject"
                      value={form.subject}
                      onChange={handleChange}
                      placeholder="Subject"
                      required
                      className={`${inputClasses} pl-10`}
                    />
                  </div>

                  {/* Message */}
                  <div className="relative">
                    <div className="absolute left-3.5 top-3.5 text-slate-400 dark:text-slate-500 pointer-events-none">
                      <MessageSquare size={16} />
                    </div>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Your message..."
                      required
                      rows={5}
                      className={`${inputClasses} pl-10 resize-none`}
                    />
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={status === 'sending'}
                    className={`w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm text-white transition-all duration-300 cursor-pointer border-none outline-none shadow-md
                      ${status === 'sending'
                        ? 'bg-indigo-700 opacity-70 cursor-not-allowed'
                        : 'bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-indigo-500/30'
                      }`}
                  >
                    {status === 'sending' ? (
                      <>
                        <div className="w-4 h-4 rounded-full border-2 border-white/30 border-t-white animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send size={16} />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
