import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code2, FileCode, Globe, Cpu, Coffee, FileSpreadsheet } from 'lucide-react';

const skills = [
  { name: 'C Programming', icon: Code2, level: 75 },
  { name: 'Python', icon: FileCode, level: 70 },
  { name: 'HTML & CSS', icon: Globe, level: 80 },
  { name: 'Arduino & Sensors', icon: Cpu, level: 65 },
  { name: 'DSA with Java', icon: Coffee, level: 40, learning: true },
  { name: 'MS Office', icon: FileSpreadsheet, level: 85 },
];

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="skills" className="py-20 md:py-32 relative">
      {/* Background accent */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-primary/10 rounded-full blur-[100px]" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Skills</h2>
          <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-16">
            Technologies and tools I work with
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="skill-card group"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <skill.icon className="skill-icon !text-2xl !mb-0" />
                </div>
                <div className="flex-1">
                  <h3 className="font-display font-semibold text-lg">{skill.name}</h3>
                  {skill.learning && (
                    <span className="text-xs text-secondary font-medium">Currently Learning</span>
                  )}
                </div>
              </div>
              
              {/* Skill Bar */}
              <div className="h-2 bg-muted rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={isInView ? { width: `${skill.level}%` } : {}}
                  transition={{ duration: 1, delay: 0.5 + index * 0.1, ease: 'easeOut' }}
                  className="h-full rounded-full"
                  style={{ background: 'var(--gradient-primary)' }}
                />
              </div>
              <div className="flex justify-between mt-2 text-sm text-muted-foreground">
                <span>Proficiency</span>
                <span className="text-primary font-medium">{skill.level}%</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
