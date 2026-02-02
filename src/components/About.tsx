import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Lightbulb, Target, Rocket } from 'lucide-react';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const highlights = [
    {
      icon: Lightbulb,
      title: 'Curious Mind',
      description: 'Always eager to learn new technologies and solve complex problems.',
    },
    {
      icon: Target,
      title: 'Goal-Oriented',
      description: 'Focused on building practical skills that create real impact.',
    },
    {
      icon: Rocket,
      title: 'Growth Mindset',
      description: 'Committed to daily improvement and consistent progress.',
    },
  ];

  return (
    <section id="about" className="py-20 md:py-32 relative">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">About Me</h2>
          <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-16">
            Get to know me better
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass-card"
          >
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              I am a first-year <span className="text-foreground font-semibold">BTech student</span> in Electronics & Computer Science, 
              deeply interested in technology, problem-solving, and creative development.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Currently building strong fundamentals in programming, data structures, and electronics, 
              while also exploring content creation and personal branding.
            </p>
            <p className="text-lg leading-relaxed">
              My goal is simple: <span className="gradient-text-primary font-semibold">learn daily, build projects, and grow consistently</span>.
            </p>
          </motion.div>

          <div className="grid gap-4">
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="glass-card flex items-start gap-4 !p-5"
              >
                <div className="p-3 rounded-xl bg-primary/10">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-lg mb-1">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
