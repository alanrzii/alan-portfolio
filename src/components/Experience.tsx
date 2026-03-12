import { motion } from 'motion/react';
import { Briefcase, GraduationCap } from 'lucide-react';
const timeline = [
  {
    type: 'education',
    title: 'AI & Intelligent Systems Studies',
    company: 'RNU University',
    period: 'Ongoing',
    description: 'Deep diving into artificial intelligence, neural networks, and autonomous systems to build the next generation of intelligent software.',
    icon: GraduationCap,
    color: 'text-neon-purple'
  },
  {
    type: 'education',
    title: "Bachelor's in Information Systems",
    company: 'RNU University',
    period: 'Present',
    description: 'Focusing on computer science fundamentals, programming, and systems analysis to build a strong foundation in modern information technology.',
    icon: GraduationCap,
    color: 'text-neon-blue'
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-[#030014]/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            My <span className="text-gradient">Journey</span>
          </motion.h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            A timeline of my professional experience and academic background.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-neon-purple via-neon-blue to-transparent md:-translate-x-1/2" />

          <div className="space-y-12">
            {timeline.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className={`relative flex flex-col md:flex-row items-center gap-8 ${
                  i % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Icon Circle */}
                <div className="absolute left-0 md:left-1/2 w-10 h-10 rounded-full bg-[#030014] border-2 border-white/10 flex items-center justify-center z-10 md:-translate-x-1/2">
                  <item.icon size={18} className={item.color} />
                </div>

                {/* Content Card */}
                <div className="w-full md:w-1/2 pl-12 md:pl-0">
                  <div className="glass p-8 rounded-3xl hover:border-white/20 transition-all group">
                    <span className={`text-xs font-bold uppercase tracking-widest mb-2 block ${item.color}`}>
                      {item.period}
                    </span>
                    <h3 className="text-xl font-bold text-white mb-1 group-hover:text-neon-cyan transition-colors">
                      {item.title}
                    </h3>
                    <div className="text-sm text-slate-400 font-medium mb-4">{item.company}</div>
                    <p className="text-slate-400 text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
                
                {/* Spacer for desktop */}
                <div className="hidden md:block w-1/2" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
