import { ArrowRight, Code, ExternalLink, Sparkles } from "lucide-react";
import { motion } from "motion/react";


const Projects = () => {
  const projects = [
    {
      id: '01',
      title: 'Expense Tracker',
      desc: 'A clean and simple expense tracker web app. Users can enter transactions, see their current balance, income, and expenses, and view a list of recent transactions helping them easily track their spending and money flow in one place.',
      image: 'expense-tracker.png',
      tags: ['HTML', 'CSS', 'JavaScript'],
      link: 'https://loopmaker.github.io/Expense-Tracker/',
      source: 'https://github.com/Loopmaker/Expense-Tracker'
    },
    {
      id: '02',
      title: 'Pokédex',
      desc: 'A Pokédex web application. It fetches real Pokémon data from an external API and displays details like name, image, and type for each Pokémon. Users can scroll through and explore Pokémon information in a responsive and engaging interface.',
      image: 'pokedex.png',
      tags: ['React', 'JavaScript', 'PokeAPI'],
      link: 'https://pokedex-rose-psi.vercel.app/',
      source: 'https://github.com/Loopmaker/Pokedex'
    }
  ];

  return (
    <section id="projects" className="py-24 px-6 md:px-12 bg-white dark:bg-bg-dark transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
          <div className="max-w-xl">
            <p className="text-primary font-bold tracking-widest uppercase text-xs mb-4 font-headline">
              Selected Works
            </p>
            <h2 className="text-4xl md:text-6xl font-headline font-bold tracking-tight dark:text-white">
              Featured Work
            </h2>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {projects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className="group bg-slate-50 dark:bg-slate-800/50 rounded-3xl overflow-hidden border border-slate-100 dark:border-slate-800 hover:shadow-2xl transition-all duration-500"
            >
              <div className="relative md:aspect-[4/3] overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-300 flex items-center justify-center gap-4">
                  <a 
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer" 
                    className="flex items-center gap-2 px-6 py-3 border-2 border-white text-white rounded-xl font-bold hover:bg-primary hover:border-primary transition-all active:scale-95"
                  >
                    <ExternalLink size={18} />
                    Live
                  </a>
                  <a 
                    href={project.source}
                    target="_blank"
                    rel="noopener noreferrer"  
                    className="flex items-center gap-2 px-6 py-3 border-2 border-white text-white rounded-xl font-bold hover:bg-primary hover:border-primary transition-all active:scale-95"
                  >
                    <Code size={18} />
                    Code
                  </a>
                </div>
              </div>
              
              <div className="p-10 space-y-6">
                <div className="flex justify-between items-center">
                  <span className="text-primary font-bold font-headline text-lg">{project.id}</span>
                  <div className="flex gap-2">
                    {project.tags.map(tag => (
                      <span key={tag} className="px-3 py-1 rounded-full border border-primary/20 text-primary text-[10px] font-bold uppercase tracking-wider">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                
                <h3 className="text-2xl font-headline font-extrabold text-slate-900 dark:text-white">{project.title}</h3>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm">
                  {project.desc}
                </p>
                
                <div className="flex gap-6 pt-4 border-t border-slate-200 dark:border-slate-700">
                  <a href={project.link} className="text-primary font-bold text-sm flex items-center gap-1 hover:gap-2 transition-all" target="_blank" rel="noopener noreferrer">
                    Live demo <ArrowRight size={16} />
                  </a>
                  <a href={project.source} className="text-primary font-bold text-sm flex items-center gap-1 hover:gap-2 transition-all" target="_blank" rel="noopener noreferrer">
                    Source <ArrowRight size={16} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Currently Curating Section */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-slate-100 dark:bg-slate-800/50 rounded-[2.5rem] p-8 md:p-16 flex flex-col md:flex-row items-center gap-12 relative overflow-hidden transition-colors duration-300"
        >
          <div className="relative z-10 flex-1 space-y-6">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-primary/10 rounded-lg text-primary">
                <Sparkles size={24} />
              </div>
              <h3 className="text-2xl font-headline font-bold dark:text-white">Currently Exploring</h3>
            </div>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-xl leading-relaxed">
              I’m currently focusing on <span className="text-primary font-bold uppercase tracking-tight">TypeScript</span> and <span className="text-tertiary font-bold uppercase tracking-tight">Tailwind CSS</span> to build scalable, well-structured, and responsive user interfaces.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="bg-white dark:bg-slate-800 p-4 rounded-2xl shadow-sm border border-slate-200/50 dark:border-slate-700/50 min-w-[140px]">
                <p className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-1">Learning</p>
                <p className="font-bold font-headline text-sm dark:text-white">TypeScript</p>
              </div>
              <div className="bg-white dark:bg-slate-800 p-4 rounded-2xl shadow-sm border border-slate-200/50 dark:border-slate-700/50 min-w-[140px]">
                <p className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-1">Learning</p>
                <p className="font-bold font-headline text-sm dark:text-white">Tailwind CSS</p>
              </div>
            </div>
          </div>
          
          <div className="flex-1 hidden lg:block">
            <img 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAxuBkSbdY7kwQDMvkwgveQ3lQz0M-GcV2_jtrLzB2FanoQihq_wOvlcUzWLffZjNaDdbewkuOBJyV5cM0BojL9GHpJjrxIT4XHsTaMYKkEgseSc-qfB1WWa552k0ZRqXy_fHm3x11PzMPDQP_xrP6aUJIr9cOQ6s2Yy7YWwdHMkrDEjlb4OEvDqVaPrNVJz3uIYH6czNdoW9xrJfKYgOKAnuES4EOMRzmV4ArJuD92BVq_33cQV-JW_Zi6AZllMWR-Mhd3sA9285XU" 
              alt="Curating" 
              className="w-full h-auto max-w-md rounded-3xl shadow-xl rotate-2"
              referrerPolicy="no-referrer"
            />
          </div>
          
          <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-primary/5 blur-[80px] rounded-full"></div>
        </motion.div>
      </div>
    </section>
  );
}

export default Projects