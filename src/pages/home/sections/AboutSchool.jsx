import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import {
  FaCheckCircle,
  FaQuoteRight,
  FaLightbulb,
  FaGlobeAfrica,
  FaHandshake,
  FaUsers,
  FaHistory,
} from "react-icons/fa";
import SchoolTimeline from "../components/SchoolTimeline";

const AboutSchool = () => {
  const [activeTab, setActiveTab] = useState("history");
  const [isTabsSticky, setIsTabsSticky] = useState(false);
  const tabsRef = useRef(null);
  const tabsSentinelRef = useRef(null);
  const sectionRef = useRef(null);

  const values = [
    {
      text: "Child-centered learning approach",
      icon: (
        <FaUsers className="text-primaryGreen-light dark:text-primaryGreen-dark mr-3 flex-shrink-0" />
      ),
    },
    {
      text: "Holistic development of each child",
      icon: (
        <FaLightbulb className="text-primaryGreen-light dark:text-primaryGreen-dark mr-3 flex-shrink-0" />
      ),
    },
    {
      text: "Respect for individual learning pace",
      icon: (
        <FaHandshake className="text-primaryGreen-light dark:text-primaryGreen-dark mr-3 flex-shrink-0" />
      ),
    },
    {
      text: "Nurturing global citizenship",
      icon: (
        <FaGlobeAfrica className="text-primaryGreen-light dark:text-primaryGreen-dark mr-3 flex-shrink-0" />
      ),
    },
  ];

  const teamMembers = [
    {
      name: "Dr. Eleanor Wright",
      role: "Founder & Head of School",
      image: "/testimonials/kofi.webp",
      quote:
        "Education should inspire a lifelong passion for learning in every child.",
    },
    {
      name: "Mrs. Sarah Chen",
      role: "Lead Montessori Directress",
      image: "/testimonials/ama.webp",
      quote:
        "We follow the child, recognizing that each has their own unique path.",
    },
    {
      name: "Mr. James Okafor",
      role: "Curriculum Coordinator",
      image: "/testimonials/kwame.webp",
      quote:
        "Our classrooms are living laboratories where children discover their potential.",
    },
  ];

  const tabs = [
    {
      id: "history",
      label: "Our History",
      icon: <FaHistory className="mr-2" />,
    },
    { id: "team", label: "Our Educators", icon: <FaUsers className="mr-2" /> },
    {
      id: "mission",
      label: "Mission & Philosophy",
      icon: <FaLightbulb className="mr-2" />,
    },
  ];

  useEffect(() => {
    const tabsElement = tabsRef.current;
    const sentinelElement = tabsSentinelRef.current;
    const sectionElement = sectionRef.current;

    if (!tabsElement || !sentinelElement || !sectionElement) return;

    const startObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            if (!isTabsSticky) {
              setIsTabsSticky(true);
            }
          } else {
            setIsTabsSticky(false);
          }
        });
      },
      { threshold: 0 }
    );

    const endObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            setIsTabsSticky(false);
          }
        });
      },
      { threshold: 0, rootMargin: "0px 0px -100% 0px" }
    );

    startObserver.observe(sentinelElement);
    endObserver.observe(sectionElement);

    return () => {
      if (sentinelElement) startObserver.unobserve(sentinelElement);
      if (sectionElement) endObserver.unobserve(sectionElement);
    };
  }, [isTabsSticky]);

  return (
    <section
      id="about"
      className="py-20 relative overflow-hidden"
      ref={sectionRef}
    >
      <div className="absolute inset-0 bg-gray-50 dark:bg-gray-900 -z-10"></div>
      <div className="absolute inset-0 opacity-5 -z-10">
        <div className="absolute top-0 w-full h-full bg-[url('/pattern-circuit.png')] bg-repeat"></div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.4 }}
        transition={{ duration: 2 }}
        className="absolute -top-20 -left-20 w-80 h-80 rounded-full bg-primaryGreen-light dark:bg-primaryGreen-dark blur-3xl opacity-20 mix-blend-multiply dark:mix-blend-screen"
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.2 }}
        transition={{ duration: 2, delay: 0.5 }}
        className="absolute -bottom-20 -right-20 w-80 h-80 rounded-full bg-blue-500 dark:bg-blue-600 blur-3xl opacity-20 mix-blend-multiply dark:mix-blend-screen"
      />

      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="font-montserrat font-bold text-3xl md:text-4xl mb-4 text-gray-800 dark:text-white">
            The Heart of{" "}
            <span className="bg-gradient-to-r from-primaryGreen-light to-primaryGreen-hover-light dark:from-primaryGreen-dark dark:to-primaryGreen-hover-dark bg-clip-text text-transparent">
              Westfields Montessori
            </span>
          </h2>
          <p className="font-ubuntu text-lg max-w-2xl mx-auto text-gray-600 dark:text-gray-300">
            A nurturing educational environment where children thrive through
            discovery, creativity, and respect.
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative mb-16"
          >
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-primaryGreen-light dark:bg-primaryGreen-dark rounded-full mix-blend-multiply dark:mix-blend-screen blur-3xl opacity-10"></div>

            <div className="backdrop-blur-xl bg-white dark:bg-gray-800 bg-opacity-70 dark:bg-opacity-20 border border-white border-opacity-40 dark:border-gray-700 rounded-2xl p-8 flex flex-col md:flex-row items-center gap-8 shadow-xl">
              <div className="backdrop-blur-xl bg-white dark:bg-gray-900 bg-opacity-60 dark:bg-opacity-50 border border-white border-opacity-40 dark:border-gray-700 rounded-full shadow-lg">
                <div className="w-32 h-28 flex items-center justify-center">
                  <img
                    src="/school-logo.webp"
                    alt="Westfields Montessori School Logo"
                    className="w-28 h-28"
                  />
                </div>
              </div>

              <div>
                <h3 className="font-montserrat font-semibold text-2xl mb-3 text-gray-800 dark:text-white">
                  Westfields Montessori School
                </h3>
                <p className="font-ubuntu text-gray-600 dark:text-gray-300">
                  Established in 2024 in the heart of Accra, Westfields
                  Montessori School is a premier educational institution
                  dedicated to authentic Montessori pedagogy. We nurture each
                  child's intrinsic desire to learn and grow in a prepared
                  environment that fosters independence, creativity, and a
                  lifelong love of learning.
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  <div className="bg-primaryGreen-light dark:bg-primaryGreen-dark bg-opacity-10 dark:bg-opacity-20 rounded-full px-1 py-1">
                    <span className="text-sm font-medium text-primaryGreen-light dark:text-primaryGreen-dark">
                      Est. 2024
                    </span>
                  </div>
                  <div className="bg-primaryGreen-light dark:bg-primaryGreen-dark bg-opacity-10 dark:bg-opacity-20 rounded-full px-1 py-1">
                    <span className="text-sm font-medium text-primaryGreen-light dark:text-primaryGreen-dark">
                      Accra, Ghana
                    </span>
                  </div>
                  <div className="bg-primaryGreen-light dark:bg-primaryGreen-dark bg-opacity-10 dark:bg-opacity-20 rounded-full px-1 py-1">
                    <span className="text-sm font-medium text-primaryGreen-light dark:text-primaryGreen-dark">
                      Ages 3-12
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <div id="tabs-sentinel" className="h-20"></div>
          <div ref={tabsSentinelRef} className="h-0 w-full"></div>

          <div
            ref={tabsRef}
            className={`flex flex-wrap justify-center mb-8 gap-4 py-4 z-30 transition-all duration-300 w-full ${
              isTabsSticky
                ? "fixed top-20 left-0 right-0 shadow-md border-b border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900 bg-opacity-90 dark:bg-opacity-90 backdrop-blur-sm"
                : ""
            }`}
            style={{
              visibility: isTabsSticky ? "visible" : "visible",
              position: isTabsSticky ? "fixed" : "relative",
            }}
          >
            {tabs.map((tab) => (
              <motion.a
                href="#tabs-sentinel"
                key={tab.id}
                onClick={(e) => {
                  e.preventDefault();
                  setActiveTab(tab.id);
                }}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                className={`px-2 py-3 rounded-full font-medium transition-all flex items-center ${
                  activeTab === tab.id
                    ? "bg-primaryGreen-light dark:bg-primaryGreen-dark text-white shadow-md"
                    : "backdrop-blur-sm bg-white dark:bg-gray-800 bg-opacity-60 dark:bg-opacity-30 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700"
                }`}
              >
                {tab.icon}
                {tab.label}
              </motion.a>
            ))}
          </div>

          {isTabsSticky && <div className="h-16 mb-8"></div>}

          <div className={`${isTabsSticky ? "mt-48" : "mt-8"}`}>
            {activeTab === "history" && <SchoolTimeline />}
            {activeTab === "team" && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="backdrop-blur-xl bg-white dark:bg-gray-800 bg-opacity-60 dark:bg-opacity-20 border border-white border-opacity-40 dark:border-gray-700 rounded-2xl p-8 shadow-lg"
              >
                <div className="flex items-center justify-center mb-12">
                  <div className="h-px bg-gradient-to-r from-transparent via-primaryGreen-light dark:via-primaryGreen-dark to-transparent w-1/4"></div>
                  <div className="mx-4 flex items-center">
                    <FaUsers className="text-primaryGreen-light dark:text-primaryGreen-dark mr-2" />
                    <h3 className="font-montserrat font-semibold text-2xl text-gray-800 dark:text-white">
                      Our Dedicated Educators
                    </h3>
                  </div>
                  <div className="h-px bg-gradient-to-r from-transparent via-primaryGreen-light dark:via-primaryGreen-dark to-transparent w-1/4"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {teamMembers.map((member, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      whileHover={{ y: -5, transition: { duration: 0.3 } }}
                      className="backdrop-blur-xl bg-white dark:bg-gray-900 bg-opacity-50 dark:bg-opacity-30 border border-white border-opacity-40 dark:border-gray-700 rounded-xl overflow-hidden shadow-lg group"
                    >
                      <div className="relative h-60 overflow-hidden">
                        <img
                          src={member.image}
                          alt={member.name}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60"></div>
                        <div className="absolute bottom-0 left-0 right-0 p-4">
                          <h4 className="font-montserrat font-semibold text-lg text-white">
                            {member.name}
                          </h4>
                          <p className="font-ubuntu text-sm text-white text-opacity-90">
                            {member.role}
                          </p>
                        </div>
                      </div>
                      <div className="p-5">
                        <div className="flex">
                          <FaQuoteRight className="text-primaryGreen-light dark:text-primaryGreen-dark opacity-20 text-2xl mr-3 flex-shrink-0" />
                          <p className="font-ubuntu italic text-gray-600 dark:text-gray-300">{`"${member.quote}"`}</p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="mt-12 text-center"
                >
                  <p className="font-ubuntu text-gray-600 dark:text-gray-300 mb-4">
                    Interested in joining our teaching team?
                  </p>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                    className="bg-primaryGreen-light dark:bg-primaryGreen-dark text-white font-medium py-2 px-6 rounded-full shadow-md"
                  >
                    View Careers
                  </motion.button>
                </motion.div>
              </motion.div>
            )}
            {activeTab === "mission" && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-8"
              >
                <div className="backdrop-blur-xl bg-white dark:bg-gray-800 bg-opacity-60 dark:bg-opacity-20 border border-white border-opacity-40 dark:border-gray-700 rounded-2xl p-8 shadow-lg">
                  <div className="mb-10">
                    <span className="inline-block w-12 h-1 bg-primaryGreen-light dark:bg-primaryGreen-dark mb-4"></span>
                    <h3 className="font-montserrat font-semibold text-2xl mb-4 text-gray-800 dark:text-white">
                      Our Mission
                    </h3>
                    <p className="font-ubuntu text-gray-600 dark:text-gray-300">
                      To nurture each child's natural curiosity and love of
                      learning through an authentic Montessori environment that
                      respects individual development, fosters independence, and
                      cultivates compassionate global citizens prepared for
                      lifelong success.
                    </p>
                  </div>

                  <div>
                    <span className="inline-block w-12 h-1 bg-primaryGreen-light dark:bg-primaryGreen-dark mb-4"></span>
                    <h3 className="font-montserrat font-semibold text-2xl mb-4 text-gray-800 dark:text-white">
                      Our Vision
                    </h3>
                    <p className="font-ubuntu text-gray-600 dark:text-gray-300">
                      A world where children develop into confident,
                      compassionate, and creative individuals who pursue
                      knowledge with joy, embrace challenges with resilience,
                      and contribute meaningfully to their communities and the
                      planet.
                    </p>
                  </div>
                </div>

                <div className="backdrop-blur-xl bg-white dark:bg-gray-800 bg-opacity-60 dark:bg-opacity-20 border border-white border-opacity-40 dark:border-gray-700 rounded-2xl p-8 shadow-lg">
                  <span className="inline-block w-12 h-1 bg-primaryGreen-light dark:bg-primaryGreen-dark mb-4"></span>
                  <h3 className="font-montserrat font-semibold text-2xl mb-6 text-gray-800 dark:text-white">
                    Our Montessori Philosophy
                  </h3>

                  <div className="space-y-6">
                    {values.map((value, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                        className="flex items-start bg-white dark:bg-gray-900 bg-opacity-50 dark:bg-opacity-30 rounded-xl p-4 shadow-md"
                      >
                        {value.icon}
                        <div>
                          <p className="font-ubuntu font-medium text-gray-800 dark:text-white">
                            {value.text}
                          </p>
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  <div className="mt-8 p-5 border-t border-gray-200 dark:border-gray-700">
                    <p className="font-ubuntu text-gray-600 dark:text-gray-400 text-center italic">
                      "The greatest sign of success for a teacher is to be able
                      to say, 'The children are now working as if I did not
                      exist.'" - Maria Montessori
                    </p>
                  </div>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSchool;
