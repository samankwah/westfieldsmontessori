import { useState, useRef, useEffect } from "react";
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useSpring,
  useTransform,
  useAnimationControls,
} from "framer-motion";
import {
  FaHandHoldingHeart,
  FaChalkboardTeacher,
  FaGlobeAmericas,
  FaPlay,
  FaTimes,
  FaChevronRight,
  FaQuoteLeft,
} from "react-icons/fa";

// Component to animate individual numbers
const AnimatedNumber = ({ value, duration = 2 }) => {
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    stiffness: 50,
    damping: 20,
  });
  const controls = useAnimationControls();

  useEffect(() => {
    controls.start({
      to: value,
      transition: { duration: duration },
    });
  }, [controls, value, duration]);

  const displayValue = useTransform(springValue, (val) =>
    Math.floor(val).toString()
  );

  return <motion.span animate={controls}>{displayValue}</motion.span>;
};

// Component to handle different stat formats
const AnimatedStat = ({ stat }) => {
  if (stat.number.includes("-")) {
    // Handle "3-6" format
    const [start, end] = stat.number.split("-").map(Number);
    return (
      <>
        <AnimatedNumber value={start} />-<AnimatedNumber value={end} />
      </>
    );
  } else if (stat.number.includes("%")) {
    // Handle "100%" format
    const value = parseInt(stat.number);
    return (
      <>
        <AnimatedNumber value={value} />
        <span>%</span>
      </>
    );
  } else if (stat.number.includes("+")) {
    // Handle "15+" format
    const value = parseInt(stat.number);
    return (
      <>
        <AnimatedNumber value={value} />
        <span>+</span>
      </>
    );
  }
  return <span>{stat.number}</span>;
};

// Modal components
const Modal = ({ isOpen, onClose, children, title }) => {
  const overlayRef = useRef(null);

  const handleOverlayClick = (e) => {
    if (e.target === overlayRef.current) {
      onClose();
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-70 backdrop-blur-sm"
          onClick={handleOverlayClick}
          ref={overlayRef}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative w-full max-w-4xl max-h-[90vh] overflow-auto bg-white dark:bg-gray-800 rounded-xl shadow-2xl"
          >
            <div className="sticky top-0 z-10 flex items-center justify-between p-5 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
              <h3 className="text-xl font-semibold font-montessori text-gray-800 dark:text-white">
                {title}
              </h3>
              <button
                onClick={onClose}
                className="p-2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-white rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                aria-label="Close modal"
              >
                <FaTimes />
              </button>
            </div>
            <div className="p-6">{children}</div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

// Video player with modal
const VideoPlayer = ({ videoSrc, posterSrc, title, description }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const videoRef = useRef(null);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    if (videoRef.current) {
      videoRef.current.pause();
    }
    setIsPlaying(false);
    setModalOpen(false);
  };

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <>
      {/* Video Card Preview */}
      <div
        onClick={openModal}
        className="group relative overflow-hidden rounded-xl shadow-lg transition-transform duration-300 hover:-translate-y-1 cursor-pointer"
      >
        <div className="relative aspect-video">
          <img
            src={posterSrc}
            alt={`${title} preview`}
            className="w-full h-full object-cover rounded-xl"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 rounded-xl group-hover:bg-opacity-50 transition-all duration-300">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-14 h-14 bg-primary-light bg-opacity-20 backdrop-blur-md rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                <FaPlay className="text-white ml-1" />
              </div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent">
              <p className="text-white font-medium truncate">{title}</p>
            </div>
          </div>
        </div>
        <div className="absolute inset-0 border border-white border-opacity-20 dark:border-gray-700 rounded-xl pointer-events-none"></div>
      </div>

      {/* Video Modal */}
      <Modal isOpen={modalOpen} onClose={closeModal} title={title}>
        <div className="mb-4">
          <div className="relative rounded-lg overflow-hidden shadow-inner bg-black">
            <video
              ref={videoRef}
              className="w-full aspect-video"
              poster={posterSrc}
              controls
              onEnded={() => setIsPlaying(false)}
              onPause={() => setIsPlaying(false)}
              onPlay={() => setIsPlaying(true)}
            >
              <source src={videoSrc} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            {!isPlaying && (
              <button
                onClick={togglePlay}
                className="absolute inset-0 flex items-center justify-center focus:outline-none"
                aria-label={isPlaying ? "Pause video" : "Play video"}
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-20 h-20 bg-white bg-opacity-20 backdrop-blur-md rounded-full flex items-center justify-center shadow-xl"
                >
                  <FaPlay className="text-white ml-1 text-xl" />
                </motion.div>
              </button>
            )}
          </div>
          <p className="mt-6 text-gray-700 dark:text-gray-300 font-ubuntu">
            {description}
          </p>
        </div>
      </Modal>
    </>
  );
};

// Montessori approach modal content
const ApproachContent = () => {
  const approaches = [
    {
      icon: (
        <FaChalkboardTeacher className="text-primary-light dark:text-primary-dark" />
      ),
      title: "Prepared Environment",
      description:
        "Classrooms are designed with hands-on materials that isolate concepts, fostering independence and concentration.",
    },
    {
      icon: (
        <FaHandHoldingHeart className="text-montessori-blue dark:text-montessori-blue" />
      ),
      title: "Child-Centered Learning",
      description:
        "Children learn at their own pace, guided by their natural curiosity and supported by trained educators.",
    },
    {
      icon: (
        <FaGlobeAmericas className="text-montessori-yellow dark:text-montessori-yellow" />
      ),
      title: "Global Awareness",
      description:
        "Encourages respect for diverse cultures and the environment, preparing children as global citizens.",
    },
  ];

  return (
    <div className="space-y-8">
      <p className="text-gray-700 dark:text-gray-300 font-ubuntu text-lg leading-relaxed">
        Westfields Montessori School leverages the Montessori method to create a
        nurturing environment that supports each child's intellectual, physical,
        and emotional growth. Our approach is grounded in authentic Montessori
        principles tailored to modern education needs.
      </p>

      <div className="grid md:grid-cols-3 gap-6 mt-8">
        {approaches.map((approach, index) => (
          <div
            key={index}
            className="bg-gray-50 dark:bg-gray-700 rounded-xl p-6 shadow-sm"
          >
            <div className="text-2xl mb-4">{approach.icon}</div>
            <h4 className="font-montessori font-semibold text-lg mb-2 text-gray-800 dark:text-white">
              {approach.title}
            </h4>
            <p className="font-ubuntu text-sm text-gray-600 dark:text-gray-400">
              {approach.description}
            </p>
          </div>
        ))}
      </div>

      <div className="bg-primary-light bg-opacity-10 dark:bg-primary-dark dark:bg-opacity-10 border-l-4 border-primary-light dark:border-primary-dark rounded-r-lg p-4 mt-8">
        <h4 className="font-montessori font-semibold text-gray-800 dark:text-white mb-2">
          Teacher Training
        </h4>
        <p className="font-ubuntu text-gray-600 dark:text-gray-400">
          Our educators hold AMI or AMS Montessori credentials and participate
          in ongoing professional development to ensure excellence in teaching.
        </p>
      </div>

      <div className="mt-8 text-center">
        <a
          href="#contact"
          className="inline-flex items-center justify-center px-6 py-3 bg-primary-light hover:bg-primary-hover-light dark:bg-primary-dark dark:hover:bg-primary-hover-dark text-white font-medium rounded-lg shadow-sm transition-colors"
        >
          Contact Us for More Information
        </a>
      </div>
    </div>
  );
};

const AboutUs = () => {
  const [approachModalOpen, setApproachModalOpen] = useState(false);

  const benefits = [
    {
      icon: <FaHandHoldingHeart />,
      title: "Holistic Development",
      description:
        "Nurtures intellectual, physical, emotional, and social growth in every child.",
    },
    {
      icon: <FaChalkboardTeacher />,
      title: "Self-Directed Learning",
      description:
        "Encourages children to explore and learn at their own pace with guidance.",
    },
    {
      icon: <FaGlobeAmericas />,
      title: "Global Citizenship",
      description:
        "Fosters respect for diversity and environmental stewardship.",
    },
  ];

  const videos = [
    {
      title: "Montessori Method Overview",
      description:
        "This video introduces the Montessori philosophy as practiced at Westfields, highlighting how children engage with hands-on materials to develop concentration, coordination, and independence. See how the method respects each child's unique learning path within a structured environment.",
      videoSrc: "/videos/montessori-method.mp4",
      posterSrc: "/illustrations/text-to-speech-preview.webp",
    },
    {
      title: "A Day in the Classroom",
      description:
        "Follow a typical day at Westfields, showcasing the uninterrupted work cycle where children choose activities, collaborate, and learn through Montessori materials. Observe practical life, sensorial, and academic exercises in action.",
      videoSrc: "/videos/day-in-classroom.mp4",
      posterSrc: "/illustrations/speech-recognition-preview.webp",
    },
    {
      title: "Prepared Environment Tour",
      description:
        "Explore the thoughtfully designed classrooms at Westfields, featuring child-sized furniture, accessible materials, and learning areas that promote independence and joy in learning.",
      videoSrc: "/videos/prepared-environment.mp4",
      posterSrc: "/illustrations/language-translation-preview.webp",
    },
  ];

  return (
    <section id="about" className="pb-16 sm:pb-24 relative overflow-hidden">
      {/* Background with warm Montessori-inspired colors */}
      <div className="absolute inset-0 bg-gradient-to-br from-montessori-beige via-white to-montessori-beige dark:from-background-dark dark:via-gray-800 dark:to-background-dark opacity-80 -z-10"></div>
      <div className="absolute inset-0 bg-[url('/pattern-natural.png')] bg-repeat opacity-10 -z-10"></div>

      {/* Glass elements - more subtle for light mode */}
      <div className="absolute top-32 sm:top-40 -left-32 sm:-left-40 w-64 sm:w-80 h-64 sm:h-80 bg-primary-light dark:bg-primary-dark rounded-full mix-blend-multiply dark:mix-blend-screen blur-5xl opacity-10 dark:opacity-20 animate-pulse"></div>
      <div className="absolute bottom-32 sm:bottom-40 -right-32 sm:-right-40 w-76 sm:w-96 h-76 sm:h-96 bg-montessori-blue dark:bg-montessori-blue rounded-full mix-blend-multiply dark:mix-blend-screen blur-5xl opacity-10 dark:opacity-20 animate-pulse"></div>

      <div className="section-container relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="font-montessori font-bold text-3xl sm:text-4xl md:text-4xl mb-4 text-gray-800 dark:text-white">
            Discover {""}
            <span className="bg-gradient-to-r from-primaryGreen-light to-primaryGreen-hover-light dark:from-primaryGreen-dark dark:to-primaryGreen-hover-dark bg-clip-text text-transparent">
              Westfields
            </span>
          </h2>
          <p className="font-ubuntu text-base sm:text-lg max-w-2xl mx-auto text-gray-600 dark:text-gray-300">
            A nurturing Montessori environment that fosters lifelong learning,
            independence, and global citizenship.
          </p>
        </motion.div>

        {/* Main Content Area */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center mb-16 sm:mb-20">
          {/* Montessori Materials Display */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-2 lg:order-1"
          >
            <div className="relative">
              {/* Background elements */}
              <div className="absolute -top-4 sm:-top-6 -left-4 sm:-left-6 w-48 sm:w-64 h-48 sm:h-64 bg-primary-light dark:bg-primary-dark rounded-full mix-blend-multiply dark:mix-blend-screen blur-xl opacity-10 dark:opacity-20 animate-pulse"></div>
              <div className="absolute -bottom-4 sm:-bottom-6 -right-4 sm:-right-6 w-48 sm:w-64 h-48 sm:h-64 bg-montessori-blue dark:bg-montessori-blue rounded-full mix-blend-multiply dark:mix-blend-screen blur-xl opacity-10 dark:opacity-20 animate-pulse"></div>

              {/* Main image with glass effect */}
              <motion.div
                whileHover={{ rotate: 0 }}
                className="overflow-hidden rounded-xl shadow-xl transform rotate-3 transition-transform duration-500 border border-gray-200 dark:border-gray-700"
              >
                <div className="backdrop-blur-xl bg-white dark:bg-gray-900 bg-opacity-60 dark:bg-opacity-30 p-1 sm:p-1.5">
                  <img
                    src="/about-product3.webp"
                    alt="Montessori materials demonstration"
                    className="w-full h-auto rounded-lg"
                  />
                </div>
              </motion.div>

              {/* Floating quote */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="absolute -bottom-8 sm:-bottom-10 -right-4 sm:-right-5 max-w-[220px] sm:max-w-[260px] bg-white dark:bg-gray-800 backdrop-blur-sm p-4 sm:p-5 rounded-xl shadow-lg border border-montessori-beige dark:border-gray-700"
              >
                <FaQuoteLeft className="text-primary-light dark:text-primary-dark mb-2 opacity-50" />
                <p className="text-sm italic font-handwriting text-gray-700 dark:text-gray-300">
                  "Education is a natural process carried out by the child and
                  is not acquired by listening to words but by experiences in
                  the environment."
                </p>
                <p className="mt-2 text-xs text-right font-medium text-primary-light dark:text-primary-dark">
                  — Maria Montessori
                </p>
              </motion.div>
            </div>
          </motion.div>

          {/* About Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-1 lg:order-2"
          >
            <div className="bg-white dark:bg-gray-900 bg-opacity-90 dark:bg-opacity-30 border border-gray-200 dark:border-gray-700 rounded-xl p-6 sm:p-8 shadow-lg">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-center mb-6 sm:mb-8"
              >
                <h3 className="font-montessori font-semibold text-2xl sm:text-2xl mb-3 sm:mb-4 text-gray-800 dark:text-white">
                  Why Westfields Montessori?
                </h3>
              </motion.div>
              <p className="font-ubuntu text-gray-700 dark:text-gray-300 mb-6 sm:mb-8 leading-relaxed">
                At Westfields, we nurture the whole child through a Montessori
                approach that promotes independence, creativity, and a love for
                learning in a supportive community.
              </p>

              <div className="space-y-5 sm:space-y-6">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex items-start"
                  >
                    <div className="bg-primary-light dark:bg-primary-dark text-black dark:text-white rounded-full p-2.5 sm:p-3 mr-3 sm:mr-4 flex-shrink-0 shadow-md">
                      {benefit.icon}
                    </div>
                    <div>
                      <h3 className="font-montessori font-semibold text-xl sm:text-xl mb-2 text-gray-800 dark:text-white">
                        {benefit.title}
                      </h3>
                      <p className="font-ubuntu text-gray-600 dark:text-gray-400">
                        {benefit.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <motion.button
                onClick={() => setApproachModalOpen(true)}
                whileHover={{ x: 5 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center mt-6 sm:mt-8 text-primary-light dark:text-primary-dark font-medium hover:underline"
              >
                <span>Learn more about our approach</span>
                <FaChevronRight className="ml-2" />
              </motion.button>
            </div>
          </motion.div>
        </div>

        {/* Video Demonstrations Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-8 sm:mb-10"
        >
          <h3 className="font-montessori font-bold text-2xl sm:text-3xl mb-4 text-center text-gray-800 dark:text-white">
            See{" "}
            <span className="bg-gradient-to-r from-primaryGreen-light to-primaryGreen-hover-light dark:from-primaryGreen-dark dark:to-primaryGreen-hover-dark bg-clip-text text-transparent">
              Community
            </span>{" "}
            in Action
          </h3>
        </motion.div>

        {/* Video Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {videos.map((video, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-transparent bg-opacity-80 dark:bg-opacity-20 rounded-xl p-4 sm:p-5 shadow-md hover:shadow-lg transition-shadow"
            >
              <VideoPlayer
                videoSrc={video.videoSrc}
                posterSrc={video.posterSrc}
                title={video.title}
                description={video.description}
              />
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mt-16 sm:mt-20">
          {[
            {
              number: "3-6",
              label: "Age Range",
              description: "Catering to preschool and kindergarten",
            },
            {
              number: "100%",
              label: "Montessori Certified",
              description: "All lead teachers are AMI/AMS trained",
            },
            {
              number: "15+",
              label: "Years of Excellence",
              description: "Serving the community since 2010",
            },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              className="bg-white dark:bg-gray-900 bg-opacity-80 dark:bg-opacity-20 border border-gray-200 dark:border-gray-700 rounded-xl p-5 sm:p-6 text-center shadow-md hover:shadow-lg transition-shadow"
            >
              <h3 className="font-montessori font-bold text-2xl sm:text-3xl mb-2 bg-gradient-to-r from-primary-light to-primary-hover-light dark:from-primary-dark dark:to-primary-hover-dark bg-clip-text text-transparent">
                <AnimatedStat stat={stat} />
              </h3>
              <p className="font-Ubuntu font-medium text-gray-800 dark:text-white mb-1">
                {stat.label}
              </p>
              <p className="font-Ubuntu text-xs text-gray-500 dark:text-gray-400">
                {stat.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Approach Modal */}
      <Modal
        isOpen={approachModalOpen}
        onClose={() => setApproachModalOpen(false)}
        title="Westfields Montessori Approach"
      >
        <ApproachContent />
      </Modal>
    </section>
  );
};

export default AboutUs;
