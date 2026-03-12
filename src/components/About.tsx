import { motion } from 'motion/react';

export default function About() {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              About <span className="text-gradient">ALAN</span>
            </h2>
            <div className="glass p-8 rounded-3xl space-y-6">
              <p className="text-secondary leading-relaxed">
                I am ALAN REJI, a passionate Full Stack Developer with a keen eye for design and a love for building innovative digital solutions. Currently based in Riga, I'm pursuing my studies in AI & Intelligent Systems at RNU University.
              </p>
              <p className="text-secondary leading-relaxed">
                My approach combines technical expertise with a creative mindset, ensuring that every project I touch is not only functional but also visually stunning and user-friendly. I'm constantly exploring new technologies like GenAI and pushing the boundaries of what's possible on the web.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-square rounded-3xl overflow-hidden glass p-4">
              <div className="w-full h-full rounded-2xl overflow-hidden relative group">
                <img 
                  src="/alan-profile.png"
                  alt="Alan Reji" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#030014] via-transparent to-transparent opacity-60" />
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="text-sm font-bold text-neon-cyan uppercase tracking-widest mb-2">Current Focus</div>
                  <div className="text-xl font-bold text-white">Building the future of Web3 & AI interfaces</div>
                </div>
              </div>
            </div>
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-neon-purple/20 blur-3xl rounded-full" />
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-neon-blue/20 blur-3xl rounded-full" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
