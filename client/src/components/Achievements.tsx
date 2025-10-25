import { Trophy, Award, Eye, X, ChevronLeft, ChevronRight, Play, Pause } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useState, useEffect } from 'react';

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
    images: ['/assets/tow1.jpg', '/assets/tow2.jpg', '/assets/tow3.jpg', '/assets/tow4.jpg'],
  },
];

const certifications = [
  {
    title: 'Data Analytics with Python',
    issuer: 'NPTEL',
    description: 'Completed comprehensive certification in data analytics using Python',
    pdf: '/assets/Data Analytics with Python.pdf',
  },
];

export function Achievements() {
  const [showImageGallery, setShowImageGallery] = useState(false);
  const [galleryImages, setGalleryImages] = useState<string[]>([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleViewPDF = (pdfPath: string) => {
    window.open(pdfPath, '_blank');
  };

  const handleShowGallery = (images: string[]) => {
    setGalleryImages(images);
    setCurrentSlide(0);
    setShowImageGallery(true);
  };

  const closeGallery = () => {
    setShowImageGallery(false);
    setGalleryImages([]);
    setIsPlaying(false);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % galleryImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  };

  const toggleSlideshow = () => {
    setIsPlaying(!isPlaying);
  };

  // Auto-play slideshow
  useEffect(() => {
    if (isPlaying && showImageGallery) {
      const interval = setInterval(nextSlide, 3000); // Change slide every 3 seconds
      return () => clearInterval(interval);
    }
  }, [isPlaying, showImageGallery, galleryImages.length]);

  return (
    <>
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
                  className={`p-6 hover-elevate transition-all duration-300 group ${
                    achievement.images ? 'cursor-pointer' : ''
                  }`}
                  data-testid={`achievement-${index}`}
                  onClick={() => achievement.images && handleShowGallery(achievement.images)}
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
                      {achievement.images && (
                        <p className="text-xs text-orange-500 mt-2 font-medium">
                          Click to view photos
                        </p>
                      )}
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
                      <p className="text-sm text-muted-foreground mb-3">
                        {cert.description}
                      </p>
                      {cert.pdf && (
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => handleViewPDF(cert.pdf!)}
                          className="text-blue-500 border-blue-500/20 hover:bg-blue-500/10"
                        >
                          <Eye className="h-4 w-4 mr-2" />
                          View Certificate
                        </Button>
                      )}
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Slideshow Modal */}
    {showImageGallery && (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm">
        <div className="relative max-w-4xl max-h-[90vh] w-full mx-4">
          {/* Close Button */}
          <Button
            onClick={closeGallery}
            className="absolute top-4 right-4 z-20 bg-white/20 hover:bg-white/30 text-white border-white/30"
            size="icon"
          >
            <X className="h-4 w-4" />
          </Button>

          {/* Main Image Display */}
          <div className="relative">
            <img
              src={galleryImages[currentSlide]}
              alt={`Tug of War photo ${currentSlide + 1}`}
              className="w-full h-[70vh] object-contain rounded-lg shadow-2xl"
            />
            
            {/* Navigation Arrows */}
            <Button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white border-white/30"
              size="icon"
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>
            
            <Button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white border-white/30"
              size="icon"
            >
              <ChevronRight className="h-6 w-6" />
            </Button>
          </div>

          {/* Slideshow Controls */}
          <div className="flex items-center justify-center gap-4 mt-6">
            <Button
              onClick={toggleSlideshow}
              className="bg-white/20 hover:bg-white/30 text-white border-white/30"
              size="sm"
            >
              {isPlaying ? <Pause className="h-4 w-4 mr-2" /> : <Play className="h-4 w-4 mr-2" />}
              {isPlaying ? 'Pause' : 'Play'} Slideshow
            </Button>
            
            <div className="flex gap-2">
              {galleryImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentSlide ? 'bg-white' : 'bg-white/40 hover:bg-white/60'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Image Counter */}
          <div className="text-center mt-4">
            <p className="text-white/80 text-sm">
              {currentSlide + 1} of {galleryImages.length}
            </p>
          </div>
        </div>
      </div>
    )}
    </>
  );
}
