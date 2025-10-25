import { Badge } from '@/components/ui/badge';

// Skills with logos instead of text names
const allSkills = [
  { name: 'C', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg' },
  { name: 'C++', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg' },
  { name: 'JavaScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
  { name: 'SQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
  { name: 'Java', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
  { name: 'Python', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
  { name: 'MySQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
  { name: 'PostgreSQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
  { name: 'MongoDB', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
  { name: 'React', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
  { name: 'Next.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg' },
  { name: 'Node.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
  { name: 'Express', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg' },
  { name: 'TypeScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
  { name: 'Tailwind CSS', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg' },
  { name: 'Streamlit', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/streamlit/streamlit-original.svg' },
  { name: 'Laravel', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg' },
  { name: 'Git', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
  { name: 'GitHub', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' },
  { name: 'GitLab', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gitlab/gitlab-original.svg' },
  { name: 'AWS', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg' },
  { name: 'Cloudinary', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cloudinary/cloudinary-original-wordmark.svg' },
];

// Arrange skills in irregular lines: 2, 4, 3, 4, 3, 4, 2
const skillGroups = [
  allSkills.slice(0, 2),   // 2 skills
  allSkills.slice(2, 6),   // 4 skills
  allSkills.slice(6, 9),   // 3 skills
  allSkills.slice(9, 13),  // 4 skills
  allSkills.slice(13, 16), // 3 skills
  allSkills.slice(16, 20), // 4 skills
  allSkills.slice(20, 22), // 2 skills
];

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

        {/* Scrolling skills container */}
        <div className="relative overflow-hidden h-96">
          {/* Top fade effect */}
          <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-background to-transparent z-10 pointer-events-none"></div>
          {/* Bottom fade effect */}
          <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-background to-transparent z-10 pointer-events-none"></div>
          <div className="flex flex-col animate-credits-slow">
            {/* First set of grouped skills */}
            {skillGroups.map((group, groupIndex) => (
              <div
                key={`group-${groupIndex}`}
                className="flex-shrink-0 my-8 flex justify-center items-center gap-4 hover:pause-group"
                style={{
                  gap: group.length === 2 ? '8rem' : group.length === 3 ? '4rem' : '2rem',
                }}
              >
                {group.map((skill, skillIndex) => (
                  <div
                    key={`${groupIndex}-${skill.name}`}
                    className="flex flex-col items-center justify-center hover:scale-110 transition-transform duration-300 hover:pause-skill"
                    data-testid={`skill-${skill.name.toLowerCase().replace(/\s+/g, '-')}`}
                  >
                    <div className="w-16 h-16 bg-background border border-border rounded-full hover:border-orange-500/50 transition-colors duration-200 flex items-center justify-center mb-2 shadow-lg hover:shadow-xl hover:shadow-orange-500/20">
                      <img
                        src={skill.logo}
                        alt={skill.name}
                        className="w-8 h-8 object-contain"
                      />
                    </div>
                    <span className="text-xs font-medium text-muted-foreground text-center whitespace-nowrap">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            ))}
            {/* Duplicate groups for seamless loop */}
            {skillGroups.map((group, groupIndex) => (
              <div
                key={`duplicate-group-${groupIndex}`}
                className="flex-shrink-0 my-8 flex justify-center items-center gap-4 hover:pause-group"
                style={{
                  gap: group.length === 2 ? '8rem' : group.length === 3 ? '4rem' : '2rem',
                }}
              >
                {group.map((skill, skillIndex) => (
                  <div
                    key={`duplicate-${groupIndex}-${skill.name}`}
                    className="flex flex-col items-center justify-center hover:scale-110 transition-transform duration-300 hover:pause-skill"
                    data-testid={`skill-duplicate-${skill.name.toLowerCase().replace(/\s+/g, '-')}`}
                  >
                    <div className="w-16 h-16 bg-background border border-border rounded-full hover:border-orange-500/50 transition-colors duration-200 flex items-center justify-center mb-2 shadow-lg hover:shadow-xl hover:shadow-orange-500/20">
                      <img
                        src={skill.logo}
                        alt={skill.name}
                        className="w-8 h-8 object-contain"
                      />
                    </div>
                    <span className="text-xs font-medium text-muted-foreground text-center whitespace-nowrap">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
