import { useState } from 'react';
import { motion } from 'motion/react';
import { Send, Mail, MapPin, Phone, Github, Linkedin } from 'lucide-react';

export default function Contact() {
  const [sent, setSent] = useState(false);

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 3000);
  };

  return (
    <section id="contact" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16">
          <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              Let's <span className="text-gradient">Connect</span>
            </h2>
            <p className="text-slate-400 mb-12 text-lg">
              Have a project in mind or just want to say hi? Feel free to reach out. 
              I'm always open to new opportunities and collaborations.
            </p>
            <div className="space-y-8">
              {[
                { icon: Mail, label: 'Email', value: 'alanlv1819@gmail.com', color: 'text-neon-purple' },
                { icon: Phone, label: 'Phone', value: '+371 26188902', color: 'text-neon-blue' },
                { icon: MapPin, label: 'Location', value: 'Riga, Latvia', color: 'text-neon-cyan' }
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-6 group">
                  <div className="p-4 rounded-2xl bg-white/5 border border-white/10 group-hover:border-white/20 transition-all">
                    <item.icon size={24} className={item.color} />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-1">{item.label}</div>
                    <div className="text-lg font-medium">{item.value}</div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-16">
              <div className="text-sm font-bold text-slate-500 uppercase tracking-widest mb-6">Follow Me</div>
              <div className="flex gap-4">
                <a href="https://github.com/alanrzii" target="_blank" rel="noreferrer"
                  className="p-4 rounded-2xl bg-white/5 border border-white/10 text-slate-400 hover:text-white hover:border-white/20 transition-all">
                  <Github size={20} />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noreferrer"
                  className="p-4 rounded-2xl bg-white/5 border border-white/10 text-slate-400 hover:text-white hover:border-white/20 transition-all">
                  <Linkedin size={20} />
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
            className="glass p-10 rounded-3xl">
            <form className="space-y-6" onSubmit={handleSend}>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-400 ml-1">Name</label>
                  <input type="text" placeholder="John Doe"
                    className="w-full px-6 py-4 rounded-2xl bg-white/5 border border-white/10 text-white placeholder:text-slate-600 focus:outline-none focus:border-neon-purple/50 focus:ring-1 focus:ring-neon-purple/50 transition-all" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-400 ml-1">Email</label>
                  <input type="email" placeholder="john@example.com"
                    className="w-full px-6 py-4 rounded-2xl bg-white/5 border border-white/10 text-white placeholder:text-slate-600 focus:outline-none focus:border-neon-blue/50 focus:ring-1 focus:ring-neon-blue/50 transition-all" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-400 ml-1">Subject</label>
                <input type="text" placeholder="Project Inquiry"
                  className="w-full px-6 py-4 rounded-2xl bg-white/5 border border-white/10 text-white placeholder:text-slate-600 focus:outline-none focus:border-neon-cyan/50 focus:ring-1 focus:ring-neon-cyan/50 transition-all" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-400 ml-1">Message</label>
                <textarea rows={5} placeholder="Tell me about your project..."
                  className="w-full px-6 py-4 rounded-2xl bg-white/5 border border-white/10 text-white placeholder:text-slate-600 focus:outline-none focus:border-neon-purple/50 focus:ring-1 focus:ring-neon-purple/50 transition-all resize-none" />
              </div>
              <button type="submit"
                className={`w-full group relative px-8 py-4 rounded-2xl font-bold text-white overflow-hidden transition-all ${sent ? 'bg-green-500 shadow-[0_0_20px_rgba(34,197,94,0.5)]' : 'bg-neon-purple hover:shadow-[0_0_20px_rgba(168,85,247,0.5)]'}`}>
                <span className="relative z-10 flex items-center justify-center gap-2">
                  {sent ? 'Message Sent! ✓' : (<>Send Message <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" /></>)}
                </span>
                {!sent && <div className="absolute inset-0 bg-gradient-to-r from-neon-purple to-neon-blue opacity-0 group-hover:opacity-100 transition-opacity" />}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
