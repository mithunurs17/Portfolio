import { GraduationCap } from 'lucide-react';
import { Card } from '@/components/ui/card';

const educationData = [
  {
    degree: 'B.E in Information Science and Engineering',
    institution: 'New Horizon College of Engineering, Bengaluru',
    score: 'CGPA: 9.38',
    year: '2026',
    pdfPath: '/assets/1NH22IS086_6th sem.pdf',
  },
  {
    degree: 'Pre-University (PUC)',
    institution: 'Sri Sai Angels PU College, Chikkamagaluru',
    score: 'Percentage: 97.16%',
    year: '2022',
    pdfPath: '/assets/1NH22IS086_MITHUN_PUC.pdf',
  },
  {
    degree: 'SSLC',
    institution: 'Kuvempu Vidyanikethana, Chikkamagaluru',
    score: 'Percentage: 96.48%',
    year: '2020',
    pdfPath: '/assets/1NH22IS086_MITHUN_10th.pdf',
  },
];

export function Education() {
  return (
    <section id="education" className="py-16 md:py-24 lg:py-32 bg-accent/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 bg-clip-text text-transparent mb-4">
            Education
          </h2>
          <p className="text-lg text-muted-foreground">
            Academic excellence and continuous learning
          </p>
        </div>

        <div className="max-w-4xl mx-auto relative">
          <div className="absolute left-0 md:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-orange-400 via-orange-500 to-orange-600" />

          <div className="space-y-8">
            {educationData.map((edu, index) => (
              <div
                key={index}
                className="relative pl-8 md:pl-20 group"
                data-testid={`education-item-${index}`}
              >
                <div className="absolute left-0 md:left-8 top-6 w-4 h-4 -ml-2 rounded-full bg-gradient-to-r from-orange-400 to-orange-600 ring-4 ring-background group-hover:scale-125 transition-transform" />

                <Card className="p-6 hover-elevate transition-all duration-300 hover:shadow-lg">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-orange-500/10 text-orange-500 flex-shrink-0">
                      <GraduationCap className="h-6 w-6" />
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-2">
                        <h3 
                          className="text-xl font-semibold text-foreground cursor-pointer hover:text-orange-500 transition-colors duration-200"
                          onClick={() => window.open(edu.pdfPath, '_blank')}
                        >
                          {edu.degree}
                        </h3>
                        <span className="text-sm font-medium text-orange-500 px-3 py-1 bg-orange-500/10 rounded-full self-start">
                          {edu.year}
                        </span>
                      </div>
                      <p className="text-muted-foreground mb-2">{edu.institution}</p>
                      <p className="text-lg font-semibold text-foreground">{edu.score}</p>
                    </div>
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
