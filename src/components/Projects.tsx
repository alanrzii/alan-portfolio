import { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'motion/react';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: 'Currency Exchanger',
    description: 'A real-time currency conversion tool with live exchange rates and a sleek, responsive interface.',
    gradient: 'linear-gradient(135deg,#0f172a 0%,#1e1b4b 40%,#312e81 70%,#4f46e5 100%)',
    icon: '💱',
    tags: ['HTML', 'CSS', 'JavaScript', 'API'],
    github: 'https://github.com/alanrzii/mini-project',
    live: 'https://alanrzii.github.io/mini-project/cp.html'
  },
  {
    title: 'FlexGen AI',
    description: 'An advanced AI-powered interface generator for rapid prototyping and design exploration.',
    gradient: 'linear-gradient(135deg,#0c0a1e 0%,#1a0533 40%,#3b0764 70%,#7c3aed 100%)',
    icon: '🤖',
    tags: ['AI', 'React', 'Generative Design'],
    github: 'https://github.com/alanrzii/flexgen',
    live: 'https://alanrzii.github.io/flexgen/flexenai4.html'
  }
];

function ProjectCard({ project, index }: { project: typeof projects[0], index: number }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["17.5deg", "-17.5deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-17.5deg", "17.5deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => { x.set(0); y.set(0); }}
      style={{ rotateY, rotateX, transformStyle: "preserve-3d" }}
      className="relative h-[450px] w-full rounded-3xl glass p-4 group cursor-pointer"
    >
      <div
        style={{ transform: "translateZ(75px)", transformStyle: "preserve-3d", background: project.gradient }}
        className="absolute inset-4 rounded-2xl overflow-hidden flex items-center justify-center"
      >
        <span className="text-8xl opacity-20 select-none">{project.icon}</span>
        <div className="absolute inset-0 bg-gradient-to-t from-[#030014] via-transparent to-transparent opacity-80" />
      </div>

      <div style={{ transform: "translateZ(50px)" }} className="absolute bottom-8 left-8 right-8">
        <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
        <p className="text-sm text-slate-300 mb-4 line-clamp-2">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.map((tag, i) => (
            <span key={i} className="px-2 py-1 rounded-md bg-white/10 text-[10px] font-bold text-neon-cyan uppercase tracking-wider">
              {tag}
            </span>
          ))}
        </div>
        <div className="flex gap-4">
          <a href={project.live} target="_blank" rel="noreferrer"
            className="p-2 rounded-lg bg-neon-purple text-white hover:shadow-[0_0_15px_rgba(168,85,247,0.5)] transition-all">
            <ExternalLink size={18} />
          </a>
          <a href={project.github} target="_blank" rel="noreferrer"
            className="p-2 rounded-lg bg-white/10 text-white hover:bg-white/20 transition-all">
            <Github size={18} />
          </a>
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold mb-4"
            >
              Featured <span className="text-gradient">Projects</span>
            </motion.h2>
            <p className="text-slate-400 max-w-xl">
              A selection of my recent work, ranging from complex web applications to experimental interfaces.
            </p>
          </div>
          <a href="https://github.com/alanrzii" target="_blank" rel="noreferrer"
            className="text-neon-purple font-bold hover:underline flex items-center gap-2">
            View All Projects <ExternalLink size={16} />
          </a>
        </div>
        <div className="grid md:grid-cols-2 gap-12">
          {projects.map((project, i) => (
            <ProjectCard key={i} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
