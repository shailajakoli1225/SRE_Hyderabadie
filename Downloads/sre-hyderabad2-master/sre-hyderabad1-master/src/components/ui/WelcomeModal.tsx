import { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowRight, Zap, Users, Lightbulb, Rocket } from "lucide-react";
import { FloatingMediaContent } from "./FloatingMediaContent";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import { useNavigate, useLocation } from "react-router-dom";

interface WelcomeModalProps {
  autoOpen?: boolean;
  showFrequency?: "onPageLoad" | "onRouteChange";
}

export const WelcomeModal = ({
  autoOpen = true,
  showFrequency = "onRouteChange",
}: WelcomeModalProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<"about" | "community">("about");
  const navigate = useNavigate();
  const location = useLocation();
  const hasShownOnCurrentPage = useRef(false);

  // Smart display logic: show once per page visit
  useEffect(() => {
    if (!autoOpen) return;

    // Reset the flag when route changes
    if (showFrequency === "onRouteChange") {
      hasShownOnCurrentPage.current = false;
    }

    // Show modal only once per page
    if (!hasShownOnCurrentPage.current) {
      const timer = setTimeout(() => {
        setIsOpen(true);
        hasShownOnCurrentPage.current = true;
      }, 500);

      return () => clearTimeout(timer);
    }
  }, [autoOpen, showFrequency, location.pathname]);

  const handleClose = useCallback(() => {
    setIsOpen(false);
  }, []);

  const handleNavigate = useCallback((path: string) => {
    handleClose();
    navigate(path);
  }, [navigate, handleClose]);

  const stats = [
    { value: "2K+", label: "Members", icon: Users },
    { value: "50+", label: "Events", icon: Rocket },
    { value: "100+", label: "Experts", icon: Lightbulb },
  ];

  const features = [
    {
      icon: "🚀",
      title: "Networking",
      desc: "Connect with SRE professionals and tech leaders",
    },
    {
      icon: "💡",
      title: "Knowledge Sharing",
      desc: "Learn from industry best practices and experiences",
    },
    {
      icon: "🤝",
      title: "Collaboration",
      desc: "Join projects and build solutions together",
    },
    {
      icon: "🎓",
      title: "Growth",
      desc: "Upskill with workshops, talks, and mentorship",
    },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          key="welcome-modal-backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="fixed inset-0 z-50 bg-black/70 backdrop-blur-xl flex items-center justify-center p-4 pt-24"
          onClick={handleClose}
        >
          {/* Animated background orbs */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <motion.div
              animate={{ x: [0, 100, 0], y: [0, 50, 0] }}
              transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-0 left-0 w-96 h-96 bg-blue-600 rounded-full mix-blend-screen filter blur-3xl opacity-20"
            />
            <motion.div
              animate={{ x: [0, -100, 0], y: [0, -50, 0] }}
              transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
              className="absolute bottom-0 right-0 w-96 h-96 bg-purple-600 rounded-full mix-blend-screen filter blur-3xl opacity-20"
            />
            <motion.div
              animate={{ scale: [1, 1.1, 1], opacity: [0.1, 0.2, 0.1] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-pink-600 rounded-full mix-blend-screen filter blur-3xl"
            />
          </div>

          <motion.div
            key="welcome-modal-content"
            initial={{ scale: 0.8, opacity: 0, y: 40 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.8, opacity: 0, y: 40 }}
            transition={{
              type: "spring",
              damping: 20,
              stiffness: 300,
              mass: 1,
            }}
            className="relative w-full max-w-sm sm:max-w-2xl md:max-w-3xl max-h-[90vh] sm:max-h-[85vh] md:max-h-[80vh] overflow-hidden rounded-2xl sm:rounded-3xl shadow-2xl border border-white/10 backdrop-blur-xl bg-gradient-to-br from-slate-950/90 via-slate-900/80 to-slate-950/90"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Animated gradient top bar */}
            <motion.div
              animate={{ opacity: [0.5, 1, 0.5], x: [0, 10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600"
            />

            {/* Close Button */}
            <motion.button
              whileHover={{ scale: 1.15, rotate: 90 }}
              whileTap={{ scale: 0.9 }}
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                handleClose();
              }}
              className="absolute top-4 sm:top-6 right-4 sm:right-6 z-50 p-2 sm:p-3 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-md border border-white/40 text-white transition-all cursor-pointer"
              type="button"
              aria-label="Close modal"
            >
              <X size={20} className="sm:w-6 sm:h-6" />
            </motion.button>

            {/* Main Content */}
            <div className="flex flex-col lg:flex-row h-full max-h-[90vh] sm:max-h-[85vh] md:max-h-[80vh] overflow-y-auto sm:overflow-hidden">
              {/* Left Section - Text & Content */}
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.15, duration: 0.6 }}
                className="flex-1 min-w-0 p-5 lg:p-8 flex flex-col justify-between bg-gradient-to-br from-slate-900/50 to-transparent overflow-y-auto"
              >
                {/* Header */}
                <div>
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-600/20 border border-blue-500/30 mb-6"
                  >
                    <Zap size={16} className="text-yellow-400" />
                    <span className="text-sm font-semibold text-blue-300">
                      Welcome to SRE Community
                    </span>
                  </motion.div>

                  <motion.h2
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.25 }}
                    className="text-3xl lg:text-4xl font-black text-white mb-3 leading-tight"
                  >
                    Scale Infrastructure with{" "}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
                      Experts
                    </span>
                  </motion.h2>

                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="text-sm text-slate-300 mb-5 leading-relaxed max-w-xl"
                  >
                    Join Hyderabad's premier SRE community. Learn reliability engineering, DevOps practices, and cloud infrastructure from industry leaders.
                  </motion.p>
                </div>

                {/* Stats */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.35 }}
                  className="grid grid-cols-3 gap-3 mb-6"
                >
                  {stats.map((stat, idx) => (
                    <motion.div
                      key={idx}
                      whileHover={{ scale: 1.05, y: -5 }}
                      className="p-3 rounded-lg bg-white/5 border border-white/10 hover:border-white/20 transition-all text-center"
                    >
                      <div className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                        {stat.value}
                      </div>
                      <div className="text-xs text-slate-400 mt-1">{stat.label}</div>
                    </motion.div>
                  ))}
                </motion.div>

                {/* Tab Navigation */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="flex gap-2 mb-5 border-b border-white/10"
                >
                  {["about", "community"].map((tab) => (
                    <motion.button
                      key={tab}
                      onClick={() => setActiveTab(tab as "about" | "community")}
                      className={`px-3 py-1.5 font-semibold text-xs transition-colors ${
                        activeTab === tab
                          ? "text-blue-400 border-b-2 border-blue-400"
                          : "text-slate-400 hover:text-slate-300"
                      }`}
                      whileHover={{ color: "#e0e7ff" }}
                    >
                      {tab === "about" ? "Why Join?" : "Community"}
                    </motion.button>
                  ))}
                </motion.div>

                {/* Tab Content */}
                <AnimatePresence mode="wait">
                  {activeTab === "about" ? (
                    <motion.div
                      key="about-content"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="grid grid-cols-2 gap-3 mb-6"
                    >
                      {features.slice(0, 4).map((feature, idx) => (
                        <motion.div
                          key={idx}
                          whileHover={{ scale: 1.05, y: -3 }}
                          className="p-3 rounded-lg bg-white/5 border border-white/10 hover:border-blue-500/30 transition-all"
                        >
                          <div className="text-2xl mb-1.5">{feature.icon}</div>
                          <div className="font-bold text-white text-xs mb-0.5">
                            {feature.title}
                          </div>
                          <div className="text-[10px] text-slate-400">
                            {feature.desc}
                          </div>
                        </motion.div>
                      ))}
                    </motion.div>
                  ) : (
                    <motion.div
                      key="community-content"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 20 }}
                      className="space-y-2 mb-6"
                    >
                      <motion.div className="p-3 rounded-lg bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/30">
                        <div className="font-bold text-white text-sm mb-0.5">🎯 Weekly Meetups</div>
                        <div className="text-xs text-slate-300">Connect with 200+ members every week</div>
                      </motion.div>
                      <motion.div className="p-3 rounded-lg bg-gradient-to-r from-purple-600/20 to-pink-600/20 border border-purple-500/30">
                        <div className="font-bold text-white text-sm mb-0.5">🚀 Technical Workshops</div>
                        <div className="text-xs text-slate-300">Learn K8s, monitoring, incident response & more</div>
                      </motion.div>
                      <motion.div className="p-3 rounded-lg bg-gradient-to-r from-pink-600/20 to-blue-600/20 border border-pink-500/30">
                        <div className="font-bold text-white text-sm mb-0.5">🤝 Mentorship Program</div>
                        <div className="text-xs text-slate-300">Get guidance from industry experts</div>
                      </motion.div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Action Buttons */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.45 }}
                  className="flex gap-2 flex-wrap"
                >
                  <motion.button
                    whileHover={{
                      scale: 1.08,
                      boxShadow: "0 15px 20px -5px rgba(34, 197, 94, 0.3)",
                    }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => handleNavigate("/join")}
                    className="px-5 py-2 bg-gradient-to-r from-green-600 to-green-700 text-white rounded-lg font-bold text-xs flex items-center gap-2 transition-all hover:from-green-500 hover:to-green-600"
                  >
                    Join Community <ArrowRight size={14} />
                  </motion.button>
                  <motion.button
                    whileHover={{
                      scale: 1.08,
                      boxShadow: "0 15px 20px -5px rgba(59, 130, 246, 0.3)",
                    }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => handleNavigate("/community")}
                    className="px-5 py-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg font-bold text-xs flex items-center gap-2 transition-all hover:from-blue-500 hover:to-blue-600"
                  >
                    Explore <ArrowRight size={14} />
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.08 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => handleNavigate("/events")}
                    className="px-5 py-2 bg-white/10 hover:bg-white/20 text-white rounded-lg font-bold text-xs transition-all border border-white/20 hover:border-white/40"
                  >
                    Events
                  </motion.button>
                </motion.div>
              </motion.div>

              {/* Right Section - Media */}
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="flex-1 min-w-0 p-5 lg:p-7 flex items-center justify-center min-h-72 lg:min-h-auto bg-gradient-to-bl from-slate-800/40 via-transparent to-slate-900/40 overflow-hidden"
              >
                <FloatingMediaContent />
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
