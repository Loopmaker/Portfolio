import { motion } from "motion/react";

const About = () => {

  return (
    <section id="about" className="py-24 px-6 md:px-12 bg-white dark:bg-bg-dark/50 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <p className="text-primary font-bold tracking-widest uppercase text-xs mb-4 font-headline">
                The Story So Far
              </p>
              <h2 className="text-4xl md:text-5xl font-headline font-bold leading-tight dark:text-white">
                Building things that matter and look good.
              </h2>
            </div>
            
            <div className="space-y-6 text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
              <p>
               Frontend Developer focused on turning ideas into interfaces people actually enjoy using. I write clean code, sweat the small stuff, and build things that work beautifully.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default About;