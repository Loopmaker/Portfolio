
const Footer = () => {
 return (
    <footer className="bg-slate-100 dark:bg-bg-dark py-20 px-6 md:px-12 border-t border-slate-200 dark:border-slate-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-10">
        <div className="space-y-4">
          <div className="text-xl font-black tracking-tighter font-headline dark:text-white">
            JAR
          </div>
          <p className="text-sm text-slate-500 dark:text-slate-400 font-medium">
            © 2026 Digital Curator. Built with precision.
          </p>
        </div>
        
        <div className="flex flex-wrap items-center gap-8 md:gap-12 font-headline font-bold text-sm">
          <a href="#" className="text-slate-500 dark:text-slate-400 hover:text-primary transition-colors">LinkedIn</a>
          <a href="#" className="text-slate-500 dark:text-slate-400 hover:text-primary transition-colors">GitHub</a>
          <a href="#" className="text-slate-500 dark:text-slate-400 hover:text-primary transition-colors">Email</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer