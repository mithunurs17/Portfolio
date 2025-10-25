import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const blogPosts = [
  {
    id: 1,
    title: "Building Scalable AI Applications: Lessons from BioPredict",
    excerpt: "Exploring the challenges and solutions in creating healthcare AI platforms that can handle real-world data while maintaining security and performance.",
    content: "In this article, I share insights from developing BioPredict, focusing on data preprocessing, model optimization, and user experience in healthcare applications.",
    date: "2024-01-15",
    readTime: "8 min read",
    category: "AI/ML",
    tags: ["AI", "Healthcare", "Python", "Machine Learning"],
    featured: true,
    link: "#"
  },
  {
    id: 2,
    title: "The Future of Educational Technology: Insights from Kalika",
    excerpt: "How modern web technologies are transforming education, with real examples from building personalized learning platforms.",
    content: "A deep dive into creating engaging educational experiences using React, Next.js, and modern UI/UX principles.",
    date: "2024-01-08",
    readTime: "6 min read",
    category: "Education",
    tags: ["React", "Next.js", "Education", "UI/UX"],
    featured: false,
    link: "#"
  },
  {
    id: 3,
    title: "Deep Learning in Medical Imaging: PancreaScan Case Study",
    excerpt: "Technical deep-dive into implementing CNN models for pancreatic cancer detection, including data preprocessing and model optimization techniques.",
    content: "Comprehensive guide to medical AI implementation, covering everything from data collection to model deployment in healthcare settings.",
    date: "2023-12-20",
    readTime: "12 min read",
    category: "Deep Learning",
    tags: ["Deep Learning", "Medical AI", "CNN", "Python"],
    featured: true,
    link: "#"
  },
  {
    id: 4,
    title: "Building Community-Driven Platforms: BloodConnect Architecture",
    excerpt: "Designing scalable web applications that connect communities while ensuring data privacy and user safety.",
    content: "Architecture decisions and implementation strategies for building social impact platforms with Node.js and modern web technologies.",
    date: "2023-12-10",
    readTime: "7 min read",
    category: "Web Development",
    tags: ["Node.js", "Community", "Social Impact", "Architecture"],
    featured: false,
    link: "#"
  }
];

export function Blog() {
  const featuredPosts = blogPosts.filter(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);

  return (
    <section id="blog" className="py-20 bg-gradient-to-br from-muted/20 via-background to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-orange-400/10 to-orange-600/10 border border-orange-400/20 mb-6">
            <span className="text-sm font-medium text-orange-600 dark:text-orange-400">
              Latest Thoughts
            </span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Insights &{' '}
            <span className="bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 bg-clip-text text-transparent">
              Technical Articles
            </span>
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Sharing knowledge and experiences from building innovative solutions in AI, education, and healthcare.
          </p>
        </div>

        {/* Featured Posts */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 text-center">Featured Articles</h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {featuredPosts.map((post, index) => (
              <Card
                key={post.id}
                className="group relative overflow-hidden hover-elevate transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 border-0 bg-gradient-to-br from-background to-muted/5"
                style={{
                  animationDelay: `${index * 150}ms`
                }}
              >
                <div className="p-8">
                  {/* Category Badge */}
                  <div className="mb-4">
                    <Badge variant="secondary" className="bg-gradient-to-r from-orange-400/10 to-orange-600/10 text-orange-600 dark:text-orange-400 border-orange-400/20">
                      {post.category}
                    </Badge>
                  </div>

                  {/* Title */}
                  <h4 className="text-xl font-bold mb-4 group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors">
                    {post.title}
                  </h4>

                  {/* Excerpt */}
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {post.excerpt}
                  </p>


                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {post.tags.map((tag) => (
                      <Badge key={tag} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                </div>

                {/* Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 via-transparent to-orange-600/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
              </Card>
            ))}
          </div>
        </div>

        {/* Regular Posts */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 text-center">More Articles</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {regularPosts.map((post, index) => (
              <Card
                key={post.id}
                className="group relative overflow-hidden hover-elevate transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border-0 bg-gradient-to-br from-background to-muted/5"
                style={{
                  animationDelay: `${(index + featuredPosts.length) * 100}ms`
                }}
              >
                <div className="p-6">
                  {/* Category Badge */}
                  <div className="mb-3">
                    <Badge variant="secondary" className="bg-gradient-to-r from-orange-400/10 to-orange-600/10 text-orange-600 dark:text-orange-400 border-orange-400/20 text-xs">
                      {post.category}
                    </Badge>
                  </div>

                  {/* Title */}
                  <h4 className="text-lg font-bold mb-3 group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors">
                    {post.title}
                  </h4>

                  {/* Excerpt */}
                  <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                    {post.excerpt}
                  </p>


                  {/* Tags */}
                  <div className="flex flex-wrap gap-1 mb-4">
                    {post.tags.slice(0, 3).map((tag) => (
                      <Badge key={tag} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                    {post.tags.length > 3 && (
                      <Badge variant="outline" className="text-xs">
                        +{post.tags.length - 3}
                      </Badge>
                    )}
                  </div>

                </div>

                {/* Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 via-transparent to-orange-600/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
              </Card>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
