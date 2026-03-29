import { Mail, MapPin } from "lucide-react";
import { motion } from "motion/react";

const Contact = () => {
  return (
    <section id="contact" className="py-24 px-6 md:px-12 bg-slate-200 dark:bg-bg-dark/80 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white dark:bg-slate-900 rounded-[3.5rem] overflow-hidden shadow-2xl flex flex-col lg:flex-row-reverse transition-colors duration-300"
        >
          <div className="lg:w-1/2 p-12 md:p-20 bg-bg-dark text-white space-y-10 relative overflow-hidden">
            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-headline font-bold mb-8 leading-tight">
                Let's build something remarkable.
              </h2>
              <p className="text-white/60 text-lg max-w-sm mb-16 leading-relaxed">
                I'm currently looking for early-career opportunities. If you have a project or a role that fits, I'd love to hear from you.
              </p>
              
              <div className="space-y-8">
                <div className="flex items-center gap-5">
                  <div className="w-14 h-14 rounded-2xl bg-primary/20 flex items-center justify-center text-primary">
                    <Mail size={24} />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-white/40 uppercase tracking-widest mb-1">Email me</p>
                    <p className="text-xl font-bold font-headline">johnalvin2121@gmail.com</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-5">
                  <div className="w-14 h-14 rounded-2xl bg-tertiary/20 flex items-center justify-center text-tertiary">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-white/40 uppercase tracking-widest mb-1">Based in</p>
                    <p className="text-xl font-bold font-headline">Pasig City, Caniogan</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="absolute -right-20 -top-20 w-96 h-96 bg-primary/20 blur-[100px] rounded-full"></div>
            <div className="absolute left-10 -bottom-20 w-64 h-64 bg-tertiary/20 blur-[80px] rounded-full"></div>
          </div>

          <div className="lg:w-1/2 p-12 md:p-20">
            <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">First Name</label>
                  <input 
                    type="text" 
                    placeholder="Your FIRST NAME"
                    className="w-full px-6 py-4 bg-slate-50 dark:bg-slate-800 border-0 rounded-2xl focus:ring-2 focus:ring-primary/30 transition-all outline-none dark:text-white"
                  />
                </div>
                <div className="space-y-3">
                  <label className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Last Name</label>
                  <input 
                    type="text" 
                    placeholder="Your LAST NAME"
                    className="w-full px-6 py-4 bg-slate-50 dark:bg-slate-800 border-0 rounded-2xl focus:ring-2 focus:ring-primary/30 transition-all outline-none dark:text-white"
                  />
                </div>
              </div>
              
              <div className="space-y-3">
                <label className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Email Address</label>
                <input 
                  type="email" 
                  placeholder="Your EMAIL ADDRESS"
                  className="w-full px-6 py-4 bg-slate-50 dark:bg-slate-800 border-0 rounded-2xl focus:ring-2 focus:ring-primary/30 transition-all outline-none dark:text-white"
                />
              </div>
              
              <div className="space-y-3">
                <label className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Your Message</label>
                <textarea 
                  placeholder="Your MESSAGE" 
                  rows={4}
                  className="w-full px-6 py-4 bg-slate-50 dark:bg-slate-800 border-0 rounded-2xl focus:ring-2 focus:ring-primary/30 transition-all outline-none resize-none dark:text-white"
                ></textarea>
              </div>
              
              <button 
                type="submit"
                className="w-full btn-gradient text-white py-5 rounded-full font-bold shadow-lg shadow-primary/20 hover:scale-[1.02] active:scale-95 transition-all text-lg"
              >
                Send Message
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Contact