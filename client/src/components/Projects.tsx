import { ExternalLink, Code2 } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const projects = [
  {
    title: 'Kalika',
    description:
      'A smart learning platform for SSLC & 2nd PUC students. Personalized lessons, interactive quizzes, streaks, and study guidance. "Kalika" (meaning "learning" in Kannada) offers an engaging learning journey.',
    tech: ['Next.js', 'TypeScript', 'React'],
    gradient: 'from-orange-400 to-orange-600',
  },
  {
    title: 'BioPredict',
    description:
      'AI-powered healthcare platform analyzing biomarkers from biological fluids. Preprocesses medical data and ensures secure storage using encryption. Built with a modern TypeScript stack for scalability and performance.',
    tech: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Python (scikit-learn)'],
    gradient: 'from-orange-500 to-orange-600',
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-16 md:py-24 lg:py-32 bg-accent/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 bg-clip-text text-transparent mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-muted-foreground">
            Innovative solutions that make a difference
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card
              key={project.title}
              className="group relative overflow-hidden hover-elevate transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
              data-testid={`project-card-${index}`}
            >
              <div className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity`} />

              <div className="p-8">
                <div className="flex items-start justify-between mb-4">
                  <div className={`p-3 rounded-lg bg-gradient-to-r ${project.gradient} bg-opacity-10`}>
                    <Code2 className="h-6 w-6 text-foreground" />
                  </div>
                  <ExternalLink className="h-5 w-5 text-muted-foreground group-hover:text-orange-500 transition-colors" />
                </div>

                <h3 className={`text-2xl font-bold mb-3 bg-gradient-to-r ${project.gradient} bg-clip-text text-transparent`}>
                  {project.title}
                </h3>

                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <Badge
                      key={tech}
                      variant="secondary"
                      className="text-xs font-medium"
                      data-testid={`tech-${tech.toLowerCase().replace(/\s+/g, '-')}`}
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>

              <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-5 transition-opacity pointer-events-none`} />
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
