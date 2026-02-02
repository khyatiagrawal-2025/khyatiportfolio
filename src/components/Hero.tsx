import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react';

const roles = ['Developer', 'Student', 'Creator', 'Learner'];

// Floating tech particles
const TechParticle = ({ delay, duration, x, y, size }: { delay: number; duration: number; x: string; y: string; size: number }) => (
  <motion.div
    className="absolute rounded-full bg-primary/30"
    style={{ left: x, top: y, width: size, height: size }}
    animate={{
      y: [0, -30, 0],
      opacity: [0.3, 0.8, 0.3],
      scale: [1, 1.2, 1],
    }}
    transition={{
      duration,
      delay,
      repeat: Infinity,
      ease: "easeInOut",
    }}
  />
);

// Animated grid lines
const GridLine = ({ direction, position, delay }: { direction: 'horizontal' | 'vertical'; position: string; delay: number }) => (
  <motion.div
    className={`absolute ${direction === 'horizontal' ? 'h-px w-full' : 'w-px h-full'}`}
    style={direction === 'horizontal' ? { top: position, left: 0 } : { left: position, top: 0 }}
    initial={{ opacity: 0 }}
    animate={{ opacity: [0, 0.15, 0] }}
    transition={{ duration: 4, delay, repeat: Infinity }}
  >
    <div className={`${direction === 'horizontal' ? 'w-full h-full' : 'h-full w-full'} bg-gradient-to-r from-transparent via-primary to-transparent`} />
  </motion.div>
);

// Floating code brackets
const CodeSymbol = ({ symbol, x, y, delay }: { symbol: string; x: string; y: string; delay: number }) => (
  <motion.span
    className="absolute text-primary/20 font-mono text-4xl md:text-6xl font-bold select-none"
    style={{ left: x, top: y }}
    animate={{
      opacity: [0.1, 0.3, 0.1],
      rotate: [0, 5, -5, 0],
      scale: [1, 1.1, 1],
    }}
    transition={{
      duration: 6,
      delay,
      repeat: Infinity,
      ease: "easeInOut",
    }}
  >
    {symbol}
  </motion.span>
);

const Hero = () => {
  const [currentRole, setCurrentRole] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const role = roles[currentRole];
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (displayText.length < role.length) {
            setDisplayText(role.slice(0, displayText.length + 1));
          } else {
            setTimeout(() => setIsDeleting(true), 1500);
          }
        } else {
          if (displayText.length > 0) {
            setDisplayText(displayText.slice(0, -1));
          } else {
            setIsDeleting(false);
            setCurrentRole((prev) => (prev + 1) % roles.length);
          }
        }
      },
      isDeleting ? 50 : 100
    );

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentRole]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Tech Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Large glowing orbs */}
        <motion.div 
          className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[150px]"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-accent/20 rounded-full blur-[150px]"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />
        <motion.div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-secondary/15 rounded-full blur-[180px]"
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, 180, 360],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />

        {/* Tech particles */}
        <TechParticle delay={0} duration={4} x="10%" y="20%" size={8} />
        <TechParticle delay={1} duration={5} x="80%" y="30%" size={6} />
        <TechParticle delay={2} duration={4.5} x="20%" y="70%" size={10} />
        <TechParticle delay={0.5} duration={5.5} x="70%" y="80%" size={7} />
        <TechParticle delay={1.5} duration={4} x="50%" y="15%" size={9} />
        <TechParticle delay={2.5} duration={5} x="90%" y="60%" size={5} />
        <TechParticle delay={3} duration={4.5} x="5%" y="50%" size={8} />

        {/* Animated grid lines */}
        <GridLine direction="horizontal" position="20%" delay={0} />
        <GridLine direction="horizontal" position="40%" delay={1} />
        <GridLine direction="horizontal" position="60%" delay={2} />
        <GridLine direction="horizontal" position="80%" delay={3} />
        <GridLine direction="vertical" position="20%" delay={0.5} />
        <GridLine direction="vertical" position="40%" delay={1.5} />
        <GridLine direction="vertical" position="60%" delay={2.5} />
        <GridLine direction="vertical" position="80%" delay={3.5} />

        {/* Floating code symbols */}
        <CodeSymbol symbol="<" x="5%" y="25%" delay={0} />
        <CodeSymbol symbol="/>" x="90%" y="20%" delay={1} />
        <CodeSymbol symbol="{" x="8%" y="75%" delay={2} />
        <CodeSymbol symbol="}" x="88%" y="70%" delay={1.5} />
        <CodeSymbol symbol="[]" x="15%" y="45%" delay={0.5} />
        <CodeSymbol symbol="()" x="82%" y="50%" delay={2.5} />

        {/* Circuit lines */}
        <svg className="absolute inset-0 w-full h-full opacity-[0.03]">
          <motion.path
            d="M0,200 Q200,100 400,200 T800,200"
            stroke="hsl(var(--primary))"
            strokeWidth="2"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: [0, 1, 0] }}
            transition={{ duration: 8, repeat: Infinity }}
          />
          <motion.path
            d="M0,400 Q300,300 600,400 T1200,400"
            stroke="hsl(var(--accent))"
            strokeWidth="2"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: [0, 1, 0] }}
            transition={{ duration: 10, repeat: Infinity, delay: 2 }}
          />
        </svg>
      </div>

      {/* Grid Pattern Overlay */}
      <div 
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--primary)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)`,
          backgroundSize: '80px 80px',
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-center"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mb-8"
          >
            <span className="inline-block px-6 py-3 rounded-full text-base font-medium bg-primary/10 text-primary border border-primary/20">
              Welcome to my portfolio
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-bold mb-8"
          >
            Hi, I'm{' '}
            <span className="gradient-text">Khyati Agrawal</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-2xl sm:text-3xl md:text-4xl text-primary font-display font-semibold mb-10 h-12"
          >
            <span>{displayText}</span>
            <motion.span 
              className="text-primary"
              animate={{ opacity: [1, 0, 1] }}
              transition={{ duration: 0.8, repeat: Infinity }}
            >
              |
            </motion.span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed"
          >
            17-year-old BTech student at GLA University, Mathura. 
            A passionate learner who believes in consistency, creativity, and building real skills every day.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-14"
          >
            <motion.a 
              href="#contact" 
              className="btn-primary-glow text-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get in Touch
            </motion.a>
            <motion.a 
              href="#projects" 
              className="btn-outline-glow text-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View Projects
            </motion.a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="flex items-center justify-center gap-8"
          >
            <motion.a 
              href="mailto:khyatiagrawal9494@gmail.com" 
              className="p-4 rounded-full bg-muted/50 text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-300"
              aria-label="Email"
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
            >
              <Mail className="w-6 h-6" />
            </motion.a>
            <motion.a 
              href="https://github.com" 
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-full bg-muted/50 text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-300"
              aria-label="GitHub"
              whileHover={{ scale: 1.2, rotate: -5 }}
              whileTap={{ scale: 0.9 }}
            >
              <Github className="w-6 h-6" />
            </motion.a>
            <motion.a 
              href="https://www.linkedin.com/in/khyati-agrawal-1840ba377" 
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-full bg-muted/50 text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-300"
              aria-label="LinkedIn"
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
            >
              <Linkedin className="w-6 h-6" />
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.a 
            href="#about" 
            className="flex flex-col items-center text-muted-foreground hover:text-primary transition-colors"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <span className="text-sm mb-2">Scroll Down</span>
            <ChevronDown className="w-6 h-6" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
