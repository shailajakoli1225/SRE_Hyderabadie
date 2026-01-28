import { motion } from 'framer-motion';
import { Play, Heart, Share2 } from 'lucide-react';

export function SREStoriesSection() {
  const videoId = 'RMWC4JeRa2A';

  return (
    <section className="py-24 md:py-32 relative overflow-hidden bg-gradient-to-b from-background via-background to-card/30">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-secondary/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
      
      <div className="section-container relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6"
          >
            <Play className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary uppercase tracking-wider">Featured Content</span>
          </motion.div>

          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            SRE Hyderabad Stories
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Watch inspiring stories from our community members and industry experts 
            sharing their experiences, insights, and lessons learned in Site Reliability Engineering.
          </p>
        </motion.div>

        {/* Video Container */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <div className="group relative rounded-2xl overflow-hidden bg-card border border-border shadow-xl hover:shadow-2xl transition-all duration-500">
            {/* Video Iframe Wrapper */}
            <div className="aspect-video bg-black/90 flex items-center justify-center">
              <iframe
                width="100%"
                height="100%"
                src={`https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1&fs=1`}
                title="SRE Hyderabad Stories"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              />
            </div>

            {/* Hover Overlay with Actions */}
            <motion.div
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 flex items-end justify-between p-6 pointer-events-none"
            >
              <div className="flex gap-4 pointer-events-auto">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-3 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-colors border border-white/20"
                  aria-label="Like"
                >
                  <Heart className="w-5 h-5 text-white" />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-3 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-colors border border-white/20"
                  aria-label="Share"
                >
                  <Share2 className="w-5 h-5 text-white" />
                </motion.button>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Video Info Cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12"
        >
          {[
            {
              icon: '🎯',
              title: 'Real-World Insights',
              description: 'Learn from practical experiences and real production challenges',
            },
            {
              icon: '🤝',
              title: 'Community Voices',
              description: 'Hear directly from engineers within our thriving community',
            },
            {
              icon: '📈',
              title: 'Knowledge Sharing',
              description: 'Grow your skills through shared war stories and best practices',
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 + index * 0.1 }}
              whileHover={{ y: -4 }}
              className="p-6 rounded-xl bg-card border border-border hover:border-primary/30 transition-all duration-300"
            >
              <div className="text-3xl mb-3">{item.icon}</div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground">{item.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <p className="text-muted-foreground mb-6">
            Have your own story to share? We'd love to feature your experience!
          </p>
          <motion.a
            href="https://www.youtube.com/@SREHyderabad"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors font-medium"
          >
            <span>Subscribe to More Stories</span>
            <Play className="w-4 h-4" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
