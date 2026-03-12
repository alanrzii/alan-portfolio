import { Github, Linkedin, Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="py-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">
        <div>
          <a href="#home" className="text-2xl font-bold font-display tracking-tighter">
            ALAN<span className="text-neon-purple">.</span>
          </a>
          <p className="text-slate-500 text-sm mt-2">
            Building the digital future, one pixel at a time.
          </p>
        </div>

        <div className="flex items-center gap-8">
          {[
            { icon: Github, href: 'https://github.com/alanrzii' },
            { icon: Linkedin, href: '#' }
          ].map((social, i) => (
            <a
              key={i}
              href={social.href}
              className="text-slate-500 hover:text-white transition-colors"
            >
              <social.icon size={20} />
            </a>
          ))}
        </div>

        <div className="text-slate-500 text-sm flex items-center gap-2">
          © {new Date().getFullYear()} ALAN REJI. Made with <Heart size={14} className="text-rose-500 fill-rose-500" /> by ALAN.
        </div>
      </div>
    </footer>
  );
}
