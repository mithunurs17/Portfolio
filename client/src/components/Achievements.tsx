import { Trophy, Award } from 'lucide-react';
import { Card } from '@/components/ui/card';

const achievements = [
  {
    title: 'Participant, FOSS Hackathon 2025',
    icon: Trophy,
    description: 'Participated in the Free and Open Source Software Hackathon',
    year: '2025',
  },
  {
    title: 'Second Runner-Up, VTU State-Level Tug of War',
    icon: Award,
    description: 'Achieved second runner-up position in VTU State-Level Tug of War competition',
    year: '2024',
  },
];

const certifications = [
  {
    title: 'Data Analytics with Python',
    issuer: 'NPTEL',
    description: 'Completed comprehensive certification in data analytics using Python',
  },
];

export function Achievements() {
  return (
    <section id="achievements" className="py-16 md:py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 bg-clip-text text-transparent mb-4">
            Achievements & Certifications
          </h2>
          <p className="text-lg text-muted-foreground">
            Recognition and continuous learning
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-foreground">Achievements</h3>
            <div className="space-y-4">
              {achievements.map((achievement, index) => (
                <Card
                  key={index}
                  className="p-6 hover-elevate transition-all duration-300 group"
                  data-testid={`achievement-${index}`}
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-orange-500/10 text-orange-500 group-hover:scale-110 transition-transform">
                      <achievement.icon className="h-6 w-6" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between gap-2 mb-2">
                        <h4 className="font-semibold text-foreground">
                          {achievement.title}
                        </h4>
                        <span className="text-sm font-medium text-orange-500 px-2 py-1 bg-orange-500/10 rounded">
                          {achievement.year}
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        {achievement.description}
                      </p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-6 text-foreground">Certifications</h3>
            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <Card
                  key={index}
                  className="p-6 hover-elevate transition-all duration-300 group"
                  data-testid={`certification-${index}`}
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-blue-500/10 text-blue-500 group-hover:scale-110 transition-transform">
                      <Award className="h-6 w-6" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-foreground mb-1">
                        {cert.title}
                      </h4>
                      <p className="text-sm font-medium text-blue-500 mb-2">
                        {cert.issuer}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {cert.description}
                      </p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
