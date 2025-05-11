import { useRef } from "react";
import { motion } from "framer-motion";
import { FaHistory } from "react-icons/fa";

const SchoolTimeline = () => {
  const containerRef = useRef(null);

  const timelineEvents = [
    {
      year: "2005",
      title: "Foundation",
      description:
        "Westfields Montessori School was founded in London with a vision to provide authentic Montessori education in a nurturing environment.",
      image: "/timeline/foundation.webp",
      imageAlt:
        "Original Westfields Montessori School building with founding staff",
      highlight: "Started with just 2 classrooms and 15 children",
    },
    {
      year: "2008",
      title: "First Graduates",
      description:
        "Our first cohort of primary students graduated, demonstrating the success of our Montessori approach to education.",
      image: "/timeline/graduates.webp",
      imageAlt: "First graduating class at Westfields Montessori",
      highlight:
        "100% of graduates transitioned successfully to traditional schools",
    },
    {
      year: "2012",
      title: "Curriculum Enhancement",
      description:
        "Expanded our curriculum to include specialized arts and music programs while maintaining Montessori principles.",
      image: "/timeline/curriculum.webp",
      imageAlt: "Students engaged in music and arts activities",
      highlight: "Introduced 7 new specialized learning areas",
    },
    {
      year: "2015",
      title: "Campus Expansion",
      description:
        "Opened our expanded campus with purpose-built classrooms, a children's garden, and natural play spaces.",
      image: "/timeline/expansion.webp",
      imageAlt: "New campus opening ceremony",
      highlight:
        "Created 5,000 square feet of Montessori-inspired learning environments",
    },
    {
      year: "2020",
      title: "Pandemic Adaptation",
      description:
        "Successfully transitioned to a hybrid learning model during the global pandemic, supporting children's education at home and school.",
      image: "/timeline/adaptation.webp",
      imageAlt: "Teachers preparing home learning materials",
      highlight:
        "Developed innovative home learning materials for 120 families",
    },
    {
      year: "2024",
      title: "Educational Innovation",
      description:
        "Westfields has evolved into a center for Montessori excellence, combining traditional Montessori methods with thoughtful integration of technology. We've expanded our teacher training program, launched parent education workshops, and created community outreach initiatives. Our bilingual program now supports children in English, French, and Spanish immersion environments.",
      image: "/timeline/innovation.webp",
      imageAlt:
        "Modern Montessori classroom with natural materials and thoughtful technology integration",
      highlight:
        "Supporting holistic development across 3 languages and multiple intelligences",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="relative backdrop-blur-xl bg-white dark:bg-gray-800 bg-opacity-60 dark:bg-opacity-20 border border-white border-opacity-40 dark:border-gray-700 rounded-2xl p-8 shadow-lg overflow-hidden"
      ref={containerRef}
    >
      {/* Custom background patterns */}
      <div className="absolute inset-0 pointer-events-none -z-10">
        {/* Light mode patterns */}
        <div className="absolute inset-0 bg-gradient-to-b from-amber-50 to-pink-50 dark:from-transparent dark:to-transparent opacity-30"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[url('/pattern-dots.png')] bg-repeat opacity-5 dark:opacity-10"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-primary-light dark:bg-primary-dark rounded-full filter blur-3xl opacity-5 dark:opacity-10 -z-10"></div>
        <div className="absolute top-0 left-0 w-64 h-64 bg-amber-300 dark:bg-amber-700 rounded-full filter blur-3xl opacity-5 dark:opacity-10 -z-10"></div>
      </div>
      <div className="flex flex-col items-center justify-center mb-12">
        <div className="h-px bg-gradient-to-r from-transparent via-primary-light dark:via-primary-dark to-transparent w-1/4"></div>
        <div className="mx-4 flex items-center">
          <FaHistory className="text-primary-light dark:text-primary-dark mr-2" />
          <h3 className="font-montserrat font-semibold text-3xl text-gray-800 dark:text-white">
            Our Heritage
          </h3>
        </div>
        <div className="h-px bg-gradient-to-r from-transparent via-primary-light dark:via-primary-dark to-transparent w-1/4"></div>
      </div>

      {/* Custom timeline with side-by-side layout */}
      <div className="space-y-24 relative">
        {/* Central timeline line with gradient */}
        <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary-light via-amber-400 to-primary-hover-light dark:from-primary-dark dark:via-amber-500 dark:to-primary-hover-dark transform -translate-x-1/2 rounded-full"></div>

        {timelineEvents.map((event, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="relative"
          >
            {/* Year indicator that breaks the timeline */}
            <motion.div
              initial={{ scale: 0.8 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.2 + 0.1 }}
              className="absolute left-1/2 top-0 transform -translate-x-1/2 -translate-y-4 z-20"
            >
              <div className="bg-gradient-to-r from-primary-light to-primary-hover-light dark:from-primary-dark dark:to-primary-hover-dark text-black dark:text-white font-bold text-lg px-5 py-2 rounded-full shadow-lg">
                {event.year}
              </div>
            </motion.div>

            {/* Content row with image and text side by side */}
            <div
              className={`flex flex-col ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              } items-center gap-6 pt-10`}
            >
              {/* Image side */}
              <motion.div
                initial={{ x: index % 2 === 0 ? -50 : 50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 + 0.3 }}
                className="md:w-1/2"
              >
                <div className="relative group overflow-hidden rounded-xl shadow-lg">
                  <div className="absolute inset-0 bg-primary-light dark:bg-primary-dark opacity-30 group-hover:opacity-0 transition-opacity duration-300"></div>
                  <img
                    src={event.image}
                    alt={event.imageAlt}
                    className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60"></div>
                  {/* Decorative corner accent */}
                  <div className="absolute bottom-0 right-0 w-16 h-16 bg-gradient-to-tl from-primary-light to-transparent dark:from-primary-dark opacity-40 rounded-tl-3xl"></div>
                </div>
              </motion.div>

              {/* Content side */}
              <motion.div
                initial={{ x: index % 2 === 0 ? 50 : -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 + 0.3 }}
                className="md:w-1/2"
              >
                <div
                  className={`bg-white dark:bg-gray-900 bg-opacity-80 dark:bg-opacity-70 backdrop-blur-sm border border-gray-100 dark:border-gray-800 p-6 rounded-xl shadow-md ${
                    index % 2 === 0 ? "md:ml-6" : "md:mr-6"
                  } relative`}
                >
                  {/* Decorative accent */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary-light via-amber-400 to-primary-hover-light dark:from-primary-dark dark:via-amber-500 dark:to-primary-hover-dark rounded-t-xl"></div>
                  <h4 className="font-montessori font-semibold text-xl mb-3 text-gray-800 dark:text-white">
                    {event.title}
                  </h4>
                  <p className="font-ubuntu text-gray-600 dark:text-gray-300 mb-4">
                    {event.description}
                  </p>

                  {/* Highlight fact */}
                  <div className="mt-4 bg-gray-50 dark:bg-gray-800 border-l-4 border-primary-light dark:border-primary-dark p-3 rounded-r-md">
                    <p className="font-ubuntu italic text-sm text-gray-600 dark:text-gray-400">
                      {event.highlight}
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Future milestone */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="mt-12 text-center"
      >
        <div className="inline-block bg-primary-light dark:bg-primary-dark bg-opacity-10 dark:bg-opacity-20 border border-primary-light dark:border-primary-dark border-opacity-30 rounded-full px-6 py-3">
          <span className="text-primary-light dark:text-primary-dark font-medium">
            Our journey continues as we nurture the next generation of lifelong
            learners...
          </span>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default SchoolTimeline;
