import { useState } from 'react';
import { ExternalLink, Code2, Github, Star, Eye, Calendar } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const projects = [
  {
    title: 'Kalika',
    description:
      'A smart learning platform for SSLC & 2nd PUC students. Personalized lessons, interactive quizzes, streaks, and study guidance. "Kalika" (meaning "learning" in Kannada) offers an engaging learning journey.',
    tech: ['Next.js', 'TypeScript', 'React'],
    gradient: 'from-orange-400 to-orange-600',
    github: 'https://github.com/mithunurs17/Kalika',
    image: '/assets/kalika.png',
    date: '2024',
    status: 'Active',
    stars: 12,
    features: ['Personalized Learning', 'Interactive Quizzes', 'Progress Tracking', 'Study Streaks'],
  },
  {
    title: 'BioPredict',
    description:
      'AI-powered healthcare platform analyzing biomarkers from biological fluids. Preprocesses medical data and ensures secure storage using encryption. Built with a modern TypeScript stack for scalability and performance.',
    tech: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Python (scikit-learn)'],
    gradient: 'from-orange-500 to-orange-600',
    github: 'https://github.com/mithunurs17/BioPredict',
    image: '/assets/bio.png',
    date: '2024',
    status: 'Active',
    stars: 8,
    features: ['AI Analysis', 'Data Security', 'Medical Data Processing', 'Real-time Results'],
  },
  {
    title: 'PancreaScan',
    description:
      'The project uses deep learning to identify pancreatic cancer from CT and MRI images. Convolutional neural networks (CNNs) are trained to detect and classify cancerous tissues with high accuracy. This AI-powered system assists radiologists by enabling faster, more precise diagnostics, improving early detection, and ultimately enhancing patient outcomes.',
    tech: ['Streamlit', 'Python', 'Deep Learning'],
    gradient: 'from-orange-600 to-orange-700',
    github: 'https://github.com/mithunurs17/Pancreatic-Cancer-Detection-using-Deep-Learning',
    image: '/assets/pancrea.png',
    date: '2023',
    status: 'Research',
    stars: 15,
    features: ['CNN Models', 'Medical Imaging', 'Cancer Detection', 'High Accuracy'],
  },
  {
    title: 'BloodConnect',
    description:
      'Blood Connect is a platform that connects blood donors with recipients efficiently. Users can search for donors by blood type and location, while donors can register to help in emergencies. The platform ensures timely access to blood, saving lives through a reliable and community-driven network.',
    tech: ['Node.js', 'JavaScript', 'HTML', 'CSS'],
    gradient: 'from-orange-700 to-orange-800',
    github: 'https://github.com/mithunurs17/BloodConnect',
    image: '/assets/blood.png',
    date: '2023',
    status: 'Active',
    stars: 6,
    features: ['Donor Matching', 'Location-based Search', 'Emergency Alerts', 'Community Network'],
  },
];

export function Projects() {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

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

        {/* Scrolling projects container */}
        <div className="relative overflow-hidden group">
          {/* Left fade effect */}
          <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none"></div>
          {/* Right fade effect */}
          <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none"></div>
          <div className="flex animate-scroll">
            {/* First set of projects */}
            {projects.map((project, index) => (
              <div
                key={`first-${project.title}`}
                className="flex-shrink-0 mx-4 w-80"
                data-testid={`project-card-${index}`}
              >
                <Card
                  className="group relative overflow-hidden hover-elevate transition-all duration-100 hover:shadow-2xl hover:-translate-y-2 cursor-pointer h-full"
                  onClick={() => window.open(project.github, '_blank')}
                >
                  <div className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity`} />

                  {/* Project Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={project.image}
                      alt={`${project.title} project screenshot`}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t ${project.gradient} opacity-20 group-hover:opacity-30 transition-opacity`}></div>
                  </div>

                  <div className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className={`p-3 rounded-lg bg-gradient-to-r ${project.gradient} bg-opacity-10`}>
                        <Code2 className="h-6 w-6 text-foreground" />
                      </div>
                      <div className="flex gap-2">
                        <Github className="h-5 w-5 text-muted-foreground group-hover:text-orange-500 transition-colors" />
                        <ExternalLink className="h-5 w-5 text-muted-foreground group-hover:text-orange-500 transition-colors" />
                      </div>
                    </div>

                    <h3 className={`text-xl font-bold mb-3 bg-gradient-to-r ${project.gradient} bg-clip-text text-transparent`}>
                      {project.title}
                    </h3>

                    <p className="text-muted-foreground mb-4 leading-relaxed text-sm">
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
              </div>
            ))}
            {/* Duplicate set for seamless loop */}
            {projects.map((project, index) => (
              <div
                key={`second-${project.title}`}
                className="flex-shrink-0 mx-4 w-80"
                data-testid={`project-card-duplicate-${index}`}
              >
                <Card
                  className="group relative overflow-hidden hover-elevate transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 cursor-pointer h-full"
                  onClick={() => window.open(project.github, '_blank')}
                >
                  <div className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity`} />

                  {/* Project Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={project.image}
                      alt={`${project.title} project screenshot`}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t ${project.gradient} opacity-20 group-hover:opacity-30 transition-opacity`}></div>
                  </div>

                  <div className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className={`p-3 rounded-lg bg-gradient-to-r ${project.gradient} bg-opacity-10`}>
                        <Code2 className="h-6 w-6 text-foreground" />
                      </div>
                      <div className="flex gap-2">
                        <Github className="h-5 w-5 text-muted-foreground group-hover:text-orange-500 transition-colors" />
                        <ExternalLink className="h-5 w-5 text-muted-foreground group-hover:text-orange-500 transition-colors" />
                      </div>
                    </div>

                    <h3 className={`text-xl font-bold mb-3 bg-gradient-to-r ${project.gradient} bg-clip-text text-transparent`}>
                      {project.title}
                    </h3>

                    <p className="text-muted-foreground mb-4 leading-relaxed text-sm">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <Badge
                          key={tech}
                          variant="secondary"
                          className="text-xs font-medium"
                          data-testid={`tech-duplicate-${tech.toLowerCase().replace(/\s+/g, '-')}`}
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-5 transition-opacity pointer-events-none`} />
                </Card>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
