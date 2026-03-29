import { Code, Palette, Rocket, Users } from "lucide-react";
import { motion } from "motion/react";

const About = () => {
  const features = [
    {
      icon: <Palette className="text-primary" size={32} />,
      title: 'UI/UX Design',
      desc: 'Figma, Adobe XD, Prototyping, User Research.',
      color: 'bg-primary/5'
    },
    {
      icon: <Code className="text-tertiary" size={32} />,
      title: 'Development',
      desc: 'React, Tailwind CSS, JavaScript, Framer Motion.',
      color: 'bg-tertiary/5'
    },
    {
      icon: <Rocket className="text-primary" size={32} />,
      title: 'Fast Adapter',
      desc: 'Quickly mastering emerging technologies and trends.',
      color: 'bg-primary/5'
    },
    {
      icon: <Users className="text-tertiary" size={32} />,
      title: 'Collaborative',
      desc: 'Effective communication within cross-functional teams.',
      color: 'bg-tertiary/5'
    }
  ];

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
                Curating Purpose Through Design.
              </h2>
            </div>
            
            <div className="space-y-6 text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
              <p>
                As a fresh graduate, I don't just see pixels and code—I see the opportunity to solve human problems. My journey began with a curiosity about how people interact with technology, leading me to specialize in high-end UI/UX and modern frontend development.
              </p>
              <p>
                I pride myself on being a fast learner and an adaptable collaborator. Whether it's mastering a new design tool or diving into a complex React framework, I approach every challenge with precision and a curator's eye for detail.
              </p>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="p-8 bg-white dark:bg-slate-800 rounded-3xl space-y-4 shadow-sm border border-slate-100 dark:border-slate-700 hover:shadow-md transition-all"
              >
                <div className={`w-14 h-14 rounded-2xl ${item.color} flex items-center justify-center`}>
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold font-headline dark:text-white">{item.title}</h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;