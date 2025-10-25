import { Badge } from '@/components/ui/badge';

const skillsData = {
  'Languages': ['C', 'C++', 'JavaScript', 'SQL', 'Java (basic)', 'Python (basic)'],
  'Databases': ['MySQL', 'PostgreSQL', 'MongoDB'],
  'Frameworks & Tools': [
    'React.js',
    'Next.js',
    'Node.js',
    'Express.js',
    'TypeScript',
    'Tailwind CSS',
    'Streamlit',
    'Laravel',
  ],
  'Other Tools': ['Git', 'GitHub', 'GitLab', 'AWS', 'Cloudinary'],
  'Soft Skills': ['Time Management', 'Problem Solving', 'Teamwork', 'Communication'],
};

export function Skills() {
  return (
    <section id="skills" className="py-16 md:py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 bg-clip-text text-transparent mb-4">
            Technical Skills
          </h2>
          <p className="text-lg text-muted-foreground">
            Tools and technologies I work with
          </p>
        </div>

        <div className="space-y-12">
          {Object.entries(skillsData).map(([category, skills]) => (
            <div key={category} data-testid={`skill-category-${category.toLowerCase().replace(/\s+/g, '-')}`}>
              <h3 className="text-2xl font-semibold mb-6 text-foreground">
                {category}
              </h3>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill) => (
                  <Badge
                    key={skill}
                    variant="outline"
                    className="px-4 py-2 text-sm font-medium cursor-default"
                    data-testid={`skill-${skill.toLowerCase().replace(/\s+/g, '-')}`}
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
