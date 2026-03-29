import { ArrowDown, GraduationCap } from "lucide-react"
import { motion } from "motion/react"

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6 md:px-12 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex-1 space-y-8"
        >
          
          
          <h2 className="text-5xl md:text-7xl font-headline font-extrabold tracking-tighter leading-[1.1] dark:text-white">
            Clean, <span className="text-gradient">Responsive</span> and User-Focused
          </h2>
          
          <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-400 max-w-2xl leading-relaxed">Hello! my name is John Alvin Rivera and I'm a  <span className="font-semibold text-slate-900 dark:text-white">Frontend Developer</span> Building clean, responsive web experiences. I care about the details and it shows.
          </p>
          
          <div className="flex flex-wrap gap-4 pt-4">
            <a 
              href="#projects" 
              className="btn-gradient text-white px-8 py-4 rounded-full font-bold flex items-center gap-2 hover:shadow-lg hover:shadow-primary/20 transition-all active:scale-95"
            >
              View Projects
              <ArrowDown size={20} />
            </a>
            <a 
              href="#contact" 
              className="bg-slate-200 dark:bg-slate-800 text-slate-900 dark:text-white px-8 py-4 rounded-full font-bold hover:bg-slate-300 dark:hover:bg-slate-700 transition-all active:scale-95"
            >
              Contact Me
            </a>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex-1 relative"
        >
          <div className="relative w-full aspect-square max-w-lg mx-auto">
            <div className="absolute inset-0 bg-primary/10 rounded-[3rem] rotate-6 scale-105"></div>
            <img 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDUB4uNVcUUVrkun6-AABSvQ6cs1BomKzoiO55bohcxgkJZjpmP3tnyn1RJHUroUFwakHrf-Q-pFC_wvR_OCgA4NdBttRLZsfywymQWnztoFa27FxmC6AhFhx33CGTMNhx-0i6zduKedzGio9yGtGAt2xJexDHHBECIbN3aNFD06GsHpZORURMPkXk7vj38kCKYiRmK_k2Xb2nDaMjTLoHmx-1DzM_sn5Mf08OffpbB6FT-HuXpyPAnrj6NFyTwnMdd7lmyxMW7NLpo" 
              alt="Creative Professional" 
              className="relative z-10 w-full h-full object-cover rounded-[3rem] shadow-2xl"
              referrerPolicy="no-referrer"
            />
            
            {/* Stats Floating Card */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="absolute -bottom-6 -left-6 z-20 bg-white/90 dark:bg-bg-dark/90 backdrop-blur-md p-6 rounded-2xl shadow-xl hidden md:block border border-slate-100 dark:border-slate-800"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-tertiary/10 flex items-center justify-center text-tertiary">
                  <GraduationCap size={24} />
                </div>
                <div>
                  <p className="text-[10px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Graduate</p>
                  <p className="text-lg font-bold text-slate-900 dark:text-white">Class of 2025</p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Decorative Background Elements */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-96 h-96 bg-primary/5 blur-[120px] rounded-full -z-10"></div>
      <div className="absolute top-1/4 left-0 w-64 h-64 bg-tertiary/5 blur-[100px] rounded-full -z-10"></div>
    </section>
  )
}

export default Hero