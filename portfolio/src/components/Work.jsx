import { useState } from 'react';
import { GitBranch, ExternalLink, Server, Shield, HelpCircle } from 'lucide-react';

const projects = [
  {
    id: 1,
    icon: <Server size={24} />,
    title: 'Food Order API',
    category: 'Backend API',
    description:
      'Developed a comprehensive backend REST API managing users, restaurants, food items, categories, orders, providers, and full admin operations with robust CRUD functionality.',
    tech: ['Node.js', 'Express.js', 'MongoDB', 'Mongoose', 'REST API'],
    github: 'https://github.com/kalpeshgoswami/Node.js-details/tree/main/14_FoodOrder',
    accent: 'from-orange-500 to-rose-500',
    bgAccent: 'from-orange-500/10 to-rose-500/10',
    border: 'border-orange-500/30 dark:border-orange-500/20',
    tag: 'Full CRUD',
  },
  {
    id: 2,
    icon: <Shield size={24} />,
    title: 'JWT Authentication API',
    category: 'Security & Auth',
    description:
      'Secure authentication API featuring user registration, login with hashed passwords, JWT-protected routes, auth middleware implementation, and logout functionality.',
    tech: ['Node.js', 'Express.js', 'MongoDB', 'JWT', 'bcrypt'],
    github: 'https://github.com/kalpeshgoswami/Node.js-details/tree/main/12_JWT_authentication',
    accent: 'from-emerald-500 to-teal-500',
    bgAccent: 'from-emerald-500/10 to-teal-500/10',
    border: 'border-emerald-500/30 dark:border-emerald-500/20',
    tag: 'Secure Auth',
  },
  {
    id: 3,
    icon: <HelpCircle size={24} />,
    title: 'Quiz Web App',
    category: 'Frontend App',
    description:
      'Interactive quiz application with multiple-choice questions fetched from an API, live score tracking, countdown timer per question, and a final review summary panel.',
    tech: ['HTML5', 'CSS3', 'Bootstrap', 'JavaScript', 'Open Trivia API'],
    github: 'https://github.com/kalpeshgoswami/JS-full-course/tree/main/Quiz-Api',
    accent: 'from-indigo-500 to-purple-500',
    bgAccent: 'from-indigo-500/10 to-purple-500/10',
    border: 'border-indigo-500/30 dark:border-indigo-500/20',
    tag: 'Interactive UI',
  },
];

const skillCategories = [
  {
    title: 'Frontend',
    icon: '🎨',
    skills: ['HTML5', 'CSS3', 'Bootstrap', 'JavaScript (ES6+)', 'TypeScript'],
  },
  {
    title: 'Backend',
    icon: '⚙️',
    skills: ['Node.js', 'Express.js', 'REST APIs', 'MVC Architecture'],
  },
  {
    title: 'Database',
    icon: '🗄️',
    skills: ['MongoDB (Atlas)', 'Mongoose', 'Compass'],
  },
  {
    title: 'AI & Tooling',
    icon: '🤖',
    skills: ['ChatGPT', 'Antigravity', 'Postman', 'Git', 'GitHub'],
  },
];

function ProjectCard({ project }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="bg-white dark:bg-slate-900/80 rounded-2xl p-6 card-hover border border-slate-200 dark:border-slate-800 shadow-lg dark:shadow-none hover:border-indigo-400/50 dark:hover:border-indigo-500/40 transition-all duration-300 flex flex-col h-full backdrop-blur-md group"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${project.bgAccent} flex items-center justify-center ${hovered ? 'scale-105' : ''} transition-all duration-300 border ${project.border}`}>
          <div className="text-slate-800 dark:text-slate-100">
            {project.icon}
          </div>
        </div>
        <div className="flex items-center gap-2">
          <span className={`px-2.5 py-1 rounded-full text-xs font-semibold bg-gradient-to-r ${project.bgAccent} border ${project.border} text-slate-800 dark:text-slate-200`}>
            {project.tag}
          </span>
        </div>
      </div>

      {/* Category */}
      <p className={`text-xs font-semibold bg-gradient-to-r ${project.accent} bg-clip-text text-transparent mb-1 uppercase tracking-wider`}>
        {project.category}
      </p>

      {/* Title */}
      <h3 className="text-slate-900 dark:text-white font-bold text-xl mb-3 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
        {project.title}
      </h3>

      {/* Description */}
      <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed mb-5 flex-1">
        {project.description}
      </p>

      {/* Tech Stack */}
      <div className="flex flex-wrap gap-2 mb-5">
        {project.tech.map((t) => (
          <span
            key={t}
            className="px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs font-medium text-slate-700 dark:text-slate-300 shadow-2xs"
          >
            {t}
          </span>
        ))}
      </div>

      {/* Actions */}
      <div className="flex gap-3 pt-4 border-t border-slate-200 dark:border-slate-800">
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className={`flex items-center gap-2 px-4 py-2.5 rounded-lg bg-gradient-to-r ${project.accent} text-white text-xs font-semibold hover:opacity-90 hover:-translate-y-0.5 transition-all duration-200 shadow-sm`}
        >
          <GitBranch size={14} />
          View Code
        </a>
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-slate-100 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-slate-800 dark:text-white hover:bg-slate-200 hover:dark:bg-slate-700 hover:-translate-y-0.5 text-xs font-semibold transition-all duration-200 shadow-2xs"
        >
          <ExternalLink size={14} />
          Live Demo
        </a>
      </div>
    </div>
  );
}

export default function Work() {
  return (
    <>
      {/* Skills Section */}
      <section id="skills" className="py-24 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-indigo-500/10 dark:bg-indigo-900/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="px-3.5 py-1.5 rounded-full bg-white dark:bg-slate-900/80 border border-indigo-200 dark:border-indigo-500/30 text-indigo-600 dark:text-indigo-400 text-xs font-semibold uppercase tracking-widest shadow-2xs">
              About & Skills
            </span>
            <h2 className="text-4xl sm:text-5xl font-black text-slate-900 dark:text-white mt-4 mb-4 tracking-tight">
              Technical{' '}
              <span className="gradient-text">Arsenal</span>
            </h2>
            <p className="text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed">
              Full stack web developer with hands-on experience building production-grade REST APIs, dynamic frontends, and scalable backend architectures.
            </p>
          </div>

          {/* Skill Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {skillCategories.map((cat) => (
              <div
                key={cat.title}
                className="bg-white dark:bg-slate-900/80 rounded-2xl p-6 card-hover border border-slate-200 dark:border-slate-800 shadow-md dark:shadow-none hover:border-indigo-400/50 dark:hover:border-indigo-500/40 transition-all duration-300 backdrop-blur-md"
              >
                <div className="text-3xl mb-3">{cat.icon}</div>
                <h3 className="text-slate-900 dark:text-white font-bold text-base mb-4">{cat.title}</h3>
                <ul className="space-y-2.5">
                  {cat.skills.map((s) => (
                    <li key={s} className="flex items-center gap-2 text-slate-600 dark:text-slate-300 text-sm">
                      <div className="w-1.5 h-1.5 rounded-full bg-indigo-500 dark:bg-indigo-400 flex-shrink-0" />
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Languages bar */}
          <div className="mt-8 bg-white dark:bg-slate-900/80 rounded-2xl p-6 border border-slate-200 dark:border-slate-800 text-center shadow-md dark:shadow-none backdrop-blur-md">
            <p className="text-slate-500 dark:text-slate-400 text-xs mb-3 font-semibold uppercase tracking-wider">
              Languages Spoken
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              {['English', 'Hindi', 'Gujarati'].map((lang) => (
                <span key={lang} className="flex items-center gap-2 text-slate-700 dark:text-slate-200 text-sm font-semibold">
                  <div className="w-2 h-2 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500" />
                  {lang}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 relative overflow-hidden">
        <div className="absolute bottom-0 right-0 w-[600px] h-[400px] bg-purple-500/10 dark:bg-purple-900/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="px-3.5 py-1.5 rounded-full bg-white dark:bg-slate-900/80 border border-purple-200 dark:border-purple-500/30 text-purple-600 dark:text-purple-400 text-xs font-semibold uppercase tracking-widest shadow-2xs">
              Portfolio
            </span>
            <h2 className="text-4xl sm:text-5xl font-black text-slate-900 dark:text-white mt-4 mb-4 tracking-tight">
              Featured{' '}
              <span className="gradient-text">Projects</span>
            </h2>
            <p className="text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed">
              A selection of projects showcasing my full-stack capabilities — from secure authentication systems to interactive frontends.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>

          {/* GitHub CTA */}
          <div className="text-center mt-12">
            <a
              href="https://github.com/kalpeshgoswami"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-white font-semibold hover:text-indigo-600 dark:hover:text-indigo-300 hover:border-indigo-400 dark:hover:border-slate-600 dark:hover:bg-slate-700 transition-all duration-300 shadow-sm hover:scale-105"
            >
              <GitBranch size={18} />
              Explore All on GitHub
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
