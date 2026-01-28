import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Play, SkipBack, ChevronLeft, ChevronRight } from "lucide-react";

const FloatingImage = ({
  src,
  delay,
  duration,
  x,
  y,
  rotation,
}: {
  src: string;
  delay: number;
  duration: number;
  x: number[];
  y: number[];
  rotation: number[];
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.3 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: delay + 0.5, duration: 0.6, type: "spring" }}
      className="absolute"
    >
      <motion.div
        className="relative"
        animate={{ x, y, rotate: rotation }}
        transition={{
          duration,
          repeat: Infinity,
          ease: "easeInOut",
          delay: delay,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/40 to-purple-500/40 rounded-xl blur-lg" />
        <img
          src={src}
          alt="Floating"
          className="w-32 h-32 lg:w-44 lg:h-44 rounded-xl shadow-2xl object-cover border-2 border-white/30 backdrop-blur hover:border-white/60 transition-all"
        />
      </motion.div>
    </motion.div>
  );
};

const Particle = ({ delay, duration }: { delay: number; duration: number }) => {
  const randomX = Math.random() * 200 - 100;
  const randomY = Math.random() * 200 - 100;

  return (
    <motion.div
      initial={{ opacity: 0, x: 0, y: 0 }}
      animate={{
        opacity: [0, 1, 0],
        x: randomX,
        y: randomY,
      }}
      transition={{
        delay,
        duration,
        repeat: Infinity,
      }}
      className="absolute w-1.5 h-1.5 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full shadow-lg"
    />
  );
};

export const FloatingMediaContent = () => {
  const [showVideo, setShowVideo] = useState(false);
  const [currentImageIdx, setCurrentImageIdx] = useState(0);

  // High-quality tech/SRE community images
  const galleryImages = [
    {
      src: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop",
      title: "Team Collaboration",
      desc: "Building together",
    },
    {
      src: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&h=400&fit=crop",
      title: "Tech Workshop",
      desc: "Learning & Growth",
    },
    {
      src: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600&h=400&fit=crop",
      title: "Community Event",
      desc: "Networking Moments",
    },
    {
      src: "https://images.unsplash.com/photo-1552581234-26160f608093?w=600&h=400&fit=crop",
      title: "Infrastructure",
      desc: "Scaling Systems",
    },
  ];

  const floatingVariants = [
    {
      x: [0, 50, 0, -30, 0],
      y: [0, -40, 30, -20, 0],
      rotation: [0, 15, -10, 20, 0],
      duration: 8,
    },
    {
      x: [0, -45, 20, 40, 0],
      y: [0, 35, -25, 15, 0],
      rotation: [0, -20, 10, -15, 0],
      duration: 9,
    },
    {
      x: [0, 35, -25, 10, 0],
      y: [0, -30, 40, -10, 0],
      rotation: [0, 10, -15, 25, 0],
      duration: 10,
    },
  ];

  useEffect(() => {
    if (showVideo) return;
    
    const interval = setInterval(() => {
      setCurrentImageIdx((prev) => (prev + 1) % galleryImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [showVideo, galleryImages.length]);

  const nextImage = () => {
    setCurrentImageIdx((prev) => (prev + 1) % galleryImages.length);
  };

  const prevImage = () => {
    setCurrentImageIdx((prev) => 
      prev === 0 ? galleryImages.length - 1 : prev - 1
    );
  };

  return (
    <div className="relative w-full h-full flex items-center justify-center max-w-full overflow-hidden">
      {!showVideo ? (
        <>
          {/* Animated background elements */}
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute inset-0 bg-gradient-to-br from-blue-600/30 via-purple-600/30 to-pink-600/30 rounded-full filter blur-3xl"
          />

          {/* Rotating circle background */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 border-2 border-dashed border-blue-500/20 rounded-full"
          />

          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="absolute inset-8 border border-dashed border-purple-500/10 rounded-full"
          />

          {/* Floating Images Container */}
          <div className="relative w-full h-60 sm:h-72 md:h-80 flex items-center justify-center overflow-hidden">
            {/* Animated center glow */}
            <motion.div
              animate={{
                scale: [1, 1.15, 1],
                opacity: [0.4, 0.6, 0.4],
              }}
              transition={{
                duration: 3.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute w-48 h-48 bg-gradient-to-br from-blue-500/40 via-purple-500/40 to-pink-500/40 rounded-full filter blur-2xl"
            />

            {/* Particles */}
            {Array.from({ length: 8 }).map((_, i) => (
              <Particle
                key={`particle-${i}`}
                delay={i * 0.2}
                duration={2 + i * 0.4}
              />
            ))}

            {/* Floating Images */}
            {galleryImages.slice(0, 3).map((img, idx) => (
              <FloatingImage
                key={idx}
                src={img.src}
                delay={idx * 0.4}
                duration={floatingVariants[idx].duration}
                x={floatingVariants[idx].x}
                y={floatingVariants[idx].y}
                rotation={floatingVariants[idx].rotation}
              />
            ))}
          </div>

          {/* Image Carousel Below Floating Images */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
            className="absolute bottom-0 left-0 right-0 p-2 sm:p-4"
          >
            <div className="relative group">
              {/* Main Carousel Image */}
              <motion.div
                key={currentImageIdx}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="relative w-full max-w-xs sm:max-w-sm mx-auto rounded-lg sm:rounded-xl overflow-hidden shadow-2xl border border-white/20"
              >
                <img
                  src={galleryImages[currentImageIdx].src}
                  alt={galleryImages[currentImageIdx].title}
                  className="w-full h-32 sm:h-40 object-cover"
                />
                <motion.div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-2 sm:p-3">
                  <div className="text-white font-bold text-xs sm:text-sm">
                    {galleryImages[currentImageIdx].title}
                  </div>
                  <div className="text-white/80 text-xs">
                    {galleryImages[currentImageIdx].desc}
                  </div>
                </motion.div>
              </motion.div>

              {/* Navigation Arrows */}
              <motion.button
                whileHover={{ scale: 1.1, x: -5 }}
                whileTap={{ scale: 0.95 }}
                onClick={prevImage}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-10 sm:-translate-x-12 p-1.5 sm:p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all border border-white/20 opacity-0 group-hover:opacity-100"
              >
                <ChevronLeft size={18} className="sm:w-5 sm:h-5" />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.1, x: 5 }}
                whileTap={{ scale: 0.95 }}
                onClick={nextImage}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-10 sm:translate-x-12 p-1.5 sm:p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all border border-white/20 opacity-0 group-hover:opacity-100"
              >
                <ChevronRight size={18} className="sm:w-5 sm:h-5" />
              </motion.button>

              {/* Dots Indicator */}
              <div className="flex justify-center gap-1.5 sm:gap-2 mt-2 sm:mt-3">
                {galleryImages.map((_, idx) => (
                  <motion.button
                    key={idx}
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setCurrentImageIdx(idx)}
                    className={`h-2 rounded-full transition-all ${
                      idx === currentImageIdx
                        ? "bg-blue-500 w-8"
                        : "bg-white/30 w-2 hover:bg-white/50"
                    }`}
                  />
                ))}
              </div>
            </div>
          </motion.div>

          {/* Video Toggle Button */}
          <motion.button
            whileHover={{ scale: 1.15, rotate: 360 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setShowVideo(true)}
            className="absolute bottom-6 right-6 p-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 rounded-full text-white shadow-2xl transition-all z-10 border border-white/20"
            aria-label="Play video"
          >
            <Play size={24} fill="currentColor" />
          </motion.button>

          {/* Info text */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="absolute top-6 left-6 text-xs text-slate-300 bg-white/10 px-3 py-1 rounded-full backdrop-blur border border-white/20"
          >
            ▶ Click play to watch our story
          </motion.p>
        </>
      ) : (
        /* Video Player */
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="w-full h-full flex flex-col items-center justify-center bg-black/40 rounded-xl p-4"
        >
          <div className="relative w-full max-w-md aspect-video bg-black rounded-xl overflow-hidden shadow-2xl border-2 border-blue-500/50">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/2Y1S4vFN6XQ?autoplay=1"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="rounded-xl"
            />

            {/* Close Video Button */}
            <motion.button
              whileHover={{ scale: 1.15 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setShowVideo(false)}
              className="absolute top-3 right-3 p-2 bg-slate-900/90 hover:bg-slate-800 rounded-full text-white transition-colors z-10 backdrop-blur border border-white/20"
              aria-label="Close video"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2.5}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </motion.button>
          </div>

          {/* Toggle Back Button */}
          <motion.button
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setShowVideo(false)}
            className="mt-5 px-6 py-2 bg-gradient-to-r from-slate-700 to-slate-600 hover:from-slate-600 hover:to-slate-500 text-white rounded-lg transition-all flex items-center gap-2 border border-slate-500/30"
          >
            <SkipBack size={18} />
            Back to Gallery
          </motion.button>
        </motion.div>
      )}
    </div>
  );
};
