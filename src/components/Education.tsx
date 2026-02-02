import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';

const Education = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="education" className="py-20 md:py-32 relative">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Education</h2>
          <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-16">
            My academic journey
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-2xl mx-auto"
        >
          <div className="glass-card relative overflow-visible">
            {/* Decorative gradient border */}
            <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-r from-primary via-accent to-secondary opacity-20" />
            
            <div className="relative bg-card rounded-2xl p-8 md:p-10">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-4 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20">
                  <GraduationCap className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-xl md:text-2xl gradient-text-primary">
                    BTech – Electronics & Computer Science
                  </h3>
                </div>
              </div>

              <div className="space-y-4 pl-4 border-l-2 border-primary/30">
                <div className="flex items-center gap-3 text-muted-foreground">
                  <MapPin className="w-5 h-5 text-primary" />
                  <span className="text-lg">GLA University, Mathura</span>
                </div>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <Calendar className="w-5 h-5 text-secondary" />
                  <span>2025 – Present</span>
                </div>
              </div>

              <div className="mt-8 p-4 rounded-xl bg-muted/30">
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Currently pursuing my bachelor's degree with a focus on electronics and computer science. 
                  Building a strong foundation in programming, digital systems, and emerging technologies.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
