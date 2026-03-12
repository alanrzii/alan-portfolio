import { motion } from 'motion/react';
import { Code2, Layout, Settings, Database, Terminal, Cpu } from 'lucide-react';

const skillCategories = [
  {
    title: 'Full Stack Web Development',
    icon: Layout,
    description: "I build web applications using modern technologies including React and Flask. Currently pursuing a Bachelor's in Information Systems with a focus on computer science fundamentals, programming, and systems analysis.",
    skills: [
      { name: 'React', level: 95, color: 'from-blue-400 to-cyan-400' },
      { name: 'TypeScript', level: 90, color: 'from-blue-500 to-indigo-500' },
      { name: 'JavaScript', level: 92, color: 'from-yellow-400 to-yellow-600' },
      { name: 'HTML5 / CSS3 / SASS', level: 98, color: 'from-orange-400 to-red-400' },
      { name: 'Flask / Python', level: 85, color: 'from-green-400 to-emerald-400' },
      { name: 'SQL / PostgreSQL', level: 82, color: 'from-blue-600 to-indigo-600' },
      { name: 'Postman', level: 90, color: 'from-orange-500 to-orange-600' },
    ]
  },
  {
    title: 'DevOps & Automation',
    icon: Settings,
    description: "Streamlining development workflows and automating deployment processes for maximum efficiency.",
    skills: [
      { name: 'Git / GitHub', level: 92, color: 'from-slate-400 to-slate-600' },
      { name: 'Docker / CI/CD', level: 80, color: 'from-blue-400 to-blue-600' },
      { name: 'Bash Scripting', level: 75, color: 'from-green-500 to-green-700' },
    ]
  },
  {
    title: 'GenAI & Intelligent Systems',
    icon: Cpu,
    description: "Exploring the frontiers of AI, from LLM integration to building intelligent autonomous systems.",
    skills: [
      { name: 'LLM Integration', level: 85, color: 'from-purple-500 to-violet-500' },
      { name: 'Prompt Engineering', level: 90, color: 'from-pink-500 to-rose-500' },
      { name: 'AI System Design', level: 78, color: 'from-cyan-500 to-blue-500' },
    ]
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-opacity-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            Technical <span className="text-gradient">Skills</span>
          </motion.h2>
          <p className="text-secondary max-w-2xl mx-auto">
            A comprehensive overview of my technical stack and proficiency levels in various technologies.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="glass p-8 rounded-3xl flex flex-col"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-neon-purple">
                  <category.icon size={24} />
                </div>
                <h3 className="text-xl font-bold">{category.title}</h3>
              </div>

              <p className="text-sm text-secondary mb-8 leading-relaxed">
                {category.description}
              </p>

              <div className="flex flex-wrap gap-2 mt-auto">
                {category.skills.map((skill, i) => (
                  <span 
                    key={i}
                    className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-secondary hover:border-neon-purple/50 transition-colors"
                  >
                    {skill.name}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
