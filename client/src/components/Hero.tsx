import { motion } from 'framer-motion';
import { AnimatedButton } from './AnimatedButton';
import { StarParticles } from './StarParticles';

export function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  return (
    <section
      id="home"
      className="relative min-h-screen w-full overflow-hidden bg-dark-900 flex items-center justify-center pt-20"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage:
            'url(https://d2xsxph8kpxj0f.cloudfront.net/310519663690878557/mtZZdfvNhhrRmmr4z3gvkv/hero-space-particles-P5P6NQQY5zyLToedfU8JpY.webp)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-dark-900/40 via-dark-900/60 to-dark-900" />
      </div>

      {/* Star Particles */}
      <StarParticles />

      {/* Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="container mx-auto px-4 relative z-10 max-w-4xl"
      >
        {/* Main Text */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left Side - Name and Intro */}
          <motion.div variants={itemVariants} className="space-y-6">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h1 className="text-5xl md:text-6xl font-bold display-font">
                <span className="bg-gradient-to-r from-yellow-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  Welcome
                </span>
              </h1>
              <p className="text-xl text-gray-300 mt-4">
                Crafting digital experiences with modern design and smooth animations
              </p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
              <AnimatedButton variant="primary">
                View My Work
              </AnimatedButton>
              <AnimatedButton variant="outline">
                Get In Touch
              </AnimatedButton>
            </motion.div>
          </motion.div>

          {/* Right Side - Decorative Element */}
          <motion.div
            variants={itemVariants}
            className="hidden md:flex justify-center items-center"
          >
            <motion.div
              animate={{
                y: [0, -20, 0],
                rotate: [0, 5, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
              }}
              className="relative w-64 h-64"
            >
              {/* Floating gradient orb */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-yellow-400/30 to-blue-500/30 blur-3xl" />
              <div className="absolute inset-0 rounded-full border-2 border-yellow-400/50 blur-sm" />
              <div className="absolute inset-8 rounded-full border border-blue-500/30" />

              {/* Center dot */}
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute top-1/2 left-1/2 w-4 h-4 -translate-x-1/2 -translate-y-1/2 rounded-full bg-yellow-400 shadow-lg shadow-yellow-400/50"
              />
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <p className="text-gray-400 text-sm">Scroll to explore</p>
          <div className="w-6 h-10 border-2 border-yellow-400/50 rounded-full flex justify-center">
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1 h-2 bg-yellow-400 rounded-full mt-2"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
