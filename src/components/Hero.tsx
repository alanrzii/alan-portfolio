import { motion } from 'motion/react';
import { Typewriter } from 'react-simple-typewriter';
import { ArrowRight, Github, Linkedin } from 'lucide-react';

const scrollTo = (id: string) => {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
};

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center z-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-block py-1 px-3 rounded-full bg-neon-purple/10 border border-neon-purple/20 text-neon-purple text-xs font-bold tracking-widest uppercase mb-6"
          >
            Available for Projects
          </motion.span>
          
          <h1 className="text-6xl md:text-8xl font-bold leading-tight mb-4">
            <span className="text-gradient">ALAN REJI</span>
          </h1>
          
          <div className="text-xl md:text-2xl text-secondary font-display mb-8 h-8">
            <Typewriter
              words={['Web Developer', 'UI Designer', 'Creative Thinker', 'Problem Solver']}
              loop={0}
              cursor
              cursorStyle="_"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </div>

          <p className="text-secondary text-lg mb-10 max-w-lg">
            Crafting immersive digital experiences with cutting-edge technologies. 
            Focused on building scalable, performant, and beautiful web applications.
          </p>

          <div className="flex flex-wrap gap-4">
            <button 
              onClick={() => scrollTo('projects')}
              className="group relative px-8 py-4 bg-neon-purple rounded-xl font-bold text-white overflow-hidden transition-all hover:shadow-[0_0_20px_rgba(168,85,247,0.5)]"
            >
              <span className="relative z-10 flex items-center gap-2">
                View Projects <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-neon-purple to-neon-blue opacity-0 group-hover:opacity-100 transition-opacity" />
            </button>
            
            <button 
              onClick={() => scrollTo('contact')}
              className="px-8 py-4 rounded-xl font-bold border border-white/10 hover:bg-white/5 transition-all"
            >
              Contact Me
            </button>
          </div>

          <div className="mt-12 flex items-center gap-6">
            {[
              { icon: Github, href: 'https://github.com/alanrzii' },
              { icon: Linkedin, href: 'https://linkedin.com' }
            ].map((social, i) => (
              <motion.a
                key={i}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                whileHover={{ y: -5 }}
                className="p-3 rounded-lg bg-white/5 border border-white/10 text-slate-400 hover:text-white hover:border-white/20 transition-all"
              >
                <social.icon size={20} />
              </motion.a>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative flex justify-center"
        >
          <div className="relative w-72 h-72 md:w-96 md:h-96">
            <div className="absolute inset-0 rounded-full border-2 border-neon-purple/20 animate-[spin_10s_linear_infinite]" />
            <div className="absolute inset-4 rounded-full border-2 border-neon-blue/20 animate-[spin_15s_linear_infinite_reverse]" />
            <div className="absolute inset-8 rounded-full border-2 border-neon-cyan/20 animate-[spin_20s_linear_infinite]" />
            <div className="absolute inset-16 rounded-full overflow-hidden neon-border bg-white/5">
              <img 
                src="/alan-profile.png"
                alt="Alan Reji" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <div className="w-6 h-10 rounded-full border-2 border-white/20 flex justify-center p-1">
          <div className="w-1 h-2 bg-neon-purple rounded-full" />
        </div>
        <span className="text-[10px] uppercase tracking-widest text-slate-500 font-bold">Scroll</span>
      </motion.div>
    </section>
  );
}
