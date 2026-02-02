import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Bot, Globe2, Code, ExternalLink, ArrowRight } from 'lucide-react';

const projects = [
  {
    title: 'Arduino-based Mini Projects',
    description: 'Hands-on electronics projects using Arduino microcontrollers and various sensors to create interactive systems.',
    icon: Bot,
    tags: ['Arduino', 'Sensors', 'Electronics'],
    color: 'from-primary to-accent',
  },
  {
    title: 'Responsive Portfolio Website',
    description: 'A modern, animated personal portfolio showcasing skills and projects with glassmorphism design.',
    icon: Globe2,
    tags: ['HTML', 'CSS', 'JavaScript'],
    color: 'from-accent to-secondary',
  },
  {
    title: 'Problem-solving in C & Python',
    description: 'Collection of algorithmic solutions and programming challenges solved using C and Python.',
    icon: Code,
    tags: ['C', 'Python', 'DSA'],
    color: 'from-secondary to-primary',
  },
];

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="projects" className="py-20 md:py-32 relative">
      {/* Background accent */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-[120px]" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Projects & Learning</h2>
          <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-16">
            What I've been building and exploring
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="glass-card group cursor-pointer"
            >
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${project.color} p-[1px] mb-6`}>
                <div className="w-full h-full rounded-2xl bg-card flex items-center justify-center">
                  <project.icon className="w-6 h-6 text-primary" />
                </div>
              </div>

              <h3 className="font-display font-semibold text-xl mb-3 group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-xs font-medium rounded-full bg-muted text-muted-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex items-center text-primary text-sm font-medium group-hover:gap-2 transition-all">
                <span>Learn More</span>
                <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
