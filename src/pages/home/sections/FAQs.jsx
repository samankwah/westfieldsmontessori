// // src/components/sections/FAQs.jsx

// import { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import {
//   FaChevronDown,
//   FaChevronUp,
//   FaQuestion,
//   FaHeadset,
//   FaInfoCircle,
//   FaGlobe,
//   FaAccessibleIcon,
//   FaCode,
//   FaUniversalAccess,
// } from "react-icons/fa";

// const FAQItem = ({ faq, isOpen, toggleOpen, index }) => {
//   const iconMap = {
//     "What is Boafo?": <FaInfoCircle className="text-blue-400" />,
//     "What features does Boafo offer?": (
//       <FaAccessibleIcon className="text-purple-500" />
//     ),
//     "Is Boafo compatible with all platforms?": (
//       <FaGlobe className="text-green-500" />
//     ),
//     "Does Boafo support local languages?": (
//       <FaGlobe className="text-orange-500" />
//     ),
//     "How easy is it to install Boafo?": <FaCode className="text-red-500" />,
//     "Is Boafo WCAG compliant?": (
//       <FaUniversalAccess className="text-indigo-500" />
//     ),
//   };

//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 20 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       viewport={{ once: true }}
//       transition={{ duration: 0.5, delay: index * 0.1 }}
//       className={`mb-6 overflow-hidden rounded-3xl border ${
//         isOpen
//           ? "border-primaryGreen-light dark:border-primaryGreen-dark shadow-lg"
//           : "border-gray-200 dark:border-gray-700"
//       } bg-white dark:bg-gray-800 transition-all duration-300`}
//     >
//       <button
//         className="flex justify-between items-center w-full p-6 text-left"
//         onClick={toggleOpen}
//         aria-expanded={isOpen}
//         aria-controls={`faq-answer-${index}`}
//       >
//         <div className="flex items-center">
//           <h3 className="font-montserrat font-semibold text-lg sm:text-xl text-gray-800 dark:text-white">
//             {faq.question}
//           </h3>
//         </div>
//         <div
//           className={`w-8 h-8 flex items-center justify-center rounded-full transition-all duration-300 ${
//             isOpen
//               ? "bg-primaryGreen-light dark:bg-primaryGreen-dark text-white rotate-180"
//               : "bg-gray-100 dark:bg-gray-700 text-gray-500 dark:text-gray-300"
//           }`}
//         >
//           <FaChevronDown
//             className={`transition-transform duration-300 ${
//               isOpen ? "transform rotate-180" : ""
//             }`}
//           />
//         </div>
//       </button>

//       <AnimatePresence initial={false}>
//         {isOpen && (
//           <motion.div
//             key="answer"
//             initial={{ height: 0, opacity: 0 }}
//             animate={{ height: "auto", opacity: 1 }}
//             exit={{ height: 0, opacity: 0 }}
//             transition={{ duration: 0.3 }}
//             id={`faq-answer-${index}`}
//           >
//             <div className="p-6 pt-0 font-ubuntu text-gray-600 dark:text-gray-300 border-t border-gray-100 dark:border-gray-700">
//               {faq.answer}
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </motion.div>
//   );
// };

// const FAQs = () => {
//   const faqsData = [
//     {
//       question: "What is Boafo?",
//       answer:
//         "Boafo is an accessible Chrome extension designed to empower individuals with disabilities and users worldwide to engage with digital content effortlessly. By offering a comprehensive suite of accessibility tools, Boafo transforms digital experiences across the web, making online environments more inclusive for everyone",
//     },
//     {
//       question: "What features does Boafo offer?",
//       answer:
//         "Boafo offers a comprehensive suite of accessibility tools, including text-to-speech with audio descriptions for seamless listening to web content and product details; speech-to-text for effortless voice command interaction; resizable elements and image descriptions to customize interfaces for improved readability; and local language support to bridge communication gaps with languages like Twi, Frafra, French, Spanish, Dutch, and more.",
//     },
//     {
//       question: "Is Boafo compatible with all all platforms?",
//       answer:
//         "Yes, Boafo is designed to work across a wide range of websites and browsers including Chrome, Firefox, Safari, and Edge integrating seamlessly with your digital environment",
//     },
//     {
//       question: "Does Boafo support local languages?",
//       answer:
//         "Absolutely. Boafo supports local languages such as Twi and Frafra, alongside global languages, to ensure users and local traders can access content in their preferred language",
//     },
//     {
//       question: "How easy is it to install Boafo?",
//       answer:
//         "Installing Boafo is simple and straightforward. As a Chrome extension, you can easily add it directly from the Chrome Web Store with just a click. Additionally, if you want to integrate its accessibility features directly into your website, our team is on hand to provide quick and seamless support",
//     },
//     {
//       question: "Is Boafo WCAG compliant?",
//       answer:
//         "Yes, Boafo is designed with WCAG 2.1 AA compliance in mind, ensuring it meets international accessibility standards. This makes it an ideal solution for businesses looking to make their websites more accessible.",
//     },
//   ];

//   const categories = [
//     { id: "all", label: "All Questions" },
//     { id: "features", label: "Features" },
//     { id: "compatibility", label: "Compatibility" },
//     { id: "installation", label: "Installation" },
//   ];

//   const [activeCategory, setActiveCategory] = useState("all");
//   const [openIndex, setOpenIndex] = useState(0);
//   const [searchQuery, setSearchQuery] = useState("");

//   const toggleFAQ = (index) => {
//     setOpenIndex(openIndex === index ? -1 : index);
//   };

//   // Filter FAQs based on category and search query
//   const filteredFAQs = faqsData.filter((faq) => {
//     const matchesSearch =
//       faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
//       faq.answer.toLowerCase().includes(searchQuery.toLowerCase());

//     if (!matchesSearch) return false;

//     if (activeCategory === "all") return true;
//     if (activeCategory === "features" && faq.question.includes("features"))
//       return true;
//     if (
//       activeCategory === "compatibility" &&
//       (faq.question.includes("compatible") || faq.question.includes("support"))
//     )
//       return true;
//     if (activeCategory === "installation" && faq.question.includes("install"))
//       return true;

//     return false;
//   });

//   return (
//     <section id="faqs" className="py-20 relative overflow-hidden">
//       {/* Background */}
//       <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-secondaryGreen-light to-white dark:from-secondaryGreen-dark dark:to-gray-900 -z-10"></div>
//       <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-white dark:bg-gray-900 -z-10"></div>

//       {/* Decorative elements */}
//       <div className="absolute top-40 left-0 w-full h-40 bg-[url('/pattern-dots.png')] bg-repeat opacity-5 -z-5"></div>
//       <div className="hidden md:block absolute -bottom-32 -left-32 w-64 h-64 rounded-full border-8 border-primaryGreen-light dark:border-primaryGreen-dark border-opacity-10 dark:border-opacity-10 -z-5"></div>
//       <div className="hidden md:block absolute -top-20 -right-20 w-40 h-40 rounded-full border-8 border-primaryGreen-light dark:border-primaryGreen-dark border-opacity-10 dark:border-opacity-10 -z-5"></div>

//       <div className="section-container relative z-10">
//         {/* Section Header */}
//         <motion.div
//           initial={{ opacity: 0, y: -20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.5 }}
//           className="text-center mb-12"
//         >
//           <h2 className="font-montserrat font-bold text-3xl md:text-4xl mb-4 text-gray-800 dark:text-white">
//             Frequently Asked Questions
//           </h2>
//         </motion.div>

//         {/* FAQ Search and Categories */}
//         <div className="max-w-4xl mx-auto mb-10">
//           <div className="backdrop-filter backdrop-blur-sm bg-white dark:bg-gray-800 bg-opacity-70 dark:bg-opacity-30 border border-gray-200 dark:border-gray-700 rounded-3xl p-6 shadow-md">
//             {/* Search Bar */}
//             <div className="relative mb-6">
//               <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                 <svg
//                   className="w-5 h-5 text-gray-400"
//                   fill="currentColor"
//                   viewBox="0 0 20 20"
//                   xmlns="http://www.w3.org/2000/svg"
//                 >
//                   <path
//                     fillRule="evenodd"
//                     d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
//                     clipRule="evenodd"
//                   ></path>
//                 </svg>
//               </div>
//               <input
//                 type="text"
//                 className="bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white text-sm rounded-3xl focus:ring-primaryGreen-light dark:focus:ring-primaryGreen-dark focus:border-primaryGreen-light dark:focus:border-primaryGreen-dark block w-full pl-10 p-3"
//                 placeholder="Search questions..."
//                 value={searchQuery}
//                 onChange={(e) => setSearchQuery(e.target.value)}
//               />
//             </div>

//             {/* Category Tabs */}
//             <div className="flex flex-wrap justify-center gap-2">
//               {categories.map((category) => (
//                 <button
//                   key={category.id}
//                   onClick={() => setActiveCategory(category.id)}
//                   className={`px-4 py-2 rounded-3xl font-medium transition-colors ${
//                     activeCategory === category.id
//                       ? "bg-primaryGreen-light dark:bg-primaryGreen-dark text-white"
//                       : "bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600"
//                   }`}
//                 >
//                   {category.label}
//                 </button>
//               ))}
//             </div>
//           </div>
//         </div>

//         {/* FAQ List */}
//         <div className="max-w-3xl mx-auto">
//           {filteredFAQs.length > 0 ? (
//             filteredFAQs.map((faq, index) => (
//               <FAQItem
//                 key={index}
//                 faq={faq}
//                 isOpen={openIndex === index}
//                 toggleOpen={() => toggleFAQ(index)}
//                 index={index}
//               />
//             ))
//           ) : (
//             <motion.div
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               className="text-center p-8 bg-white dark:bg-gray-800 rounded-3xl shadow-md"
//             >
//               <FaQuestion className="text-gray-400 text-4xl mx-auto mb-4" />
//               <h3 className="font-montserrat font-semibold text-xl mb-2 text-gray-800 dark:text-white">
//                 No matching questions
//               </h3>
//               <p className="font-ubuntu text-gray-600 dark:text-gray-300">
//                 Try adjusting your search or category filter to find what you're
//                 looking for.
//               </p>
//             </motion.div>
//           )}
//         </div>

//         {/* Contact Support */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.5, delay: 0.2 }}
//           className="mt-16 bg-primaryGreen-light dark:bg-primaryGreen-dark bg-opacity-10 dark:bg-opacity-10 backdrop-filter backdrop-blur-sm border border-primaryGreen-light dark:border-primaryGreen-dark border-opacity-20 dark:border-opacity-20 rounded-3xl p-8 text-center max-w-3xl mx-auto"
//         >
//           <div className="inline-flex items-center justify-center w-16 h-16 bg-primaryGreen-light dark:bg-primaryGreen-dark bg-opacity-20 dark:bg-opacity-20 rounded-full mb-4">
//             <FaHeadset className="text-primaryGreen-light dark:text-primaryGreen-dark text-2xl" />
//           </div>
//           <h3 className="font-montserrat font-semibold text-xl mb-3 text-gray-800 dark:text-white">
//             Still have questions?
//           </h3>
//           <p className="font-ubuntu text-gray-600 dark:text-gray-300 mb-6 max-w-md mx-auto">
//             Our support team is ready to help you with any questions you might
//             have about Boafo.
//           </p>
//           <motion.a
//             href="#contact"
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//             className="inline-flex items-center bg-primaryGreen-light dark:bg-primaryGreen-dark text-white font-medium py-3 px-6 rounded-full shadow-md hover:bg-primaryGreen-hover-light dark:hover:bg-primaryGreen-hover-dark transition-all"
//           >
//             Contact Support
//           </motion.a>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default FAQs;

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaChevronDown,
  FaQuestion,
  FaHeadset,
  FaSchool,
  FaChalkboardTeacher,
  FaChild,
  FaCalendarAlt,
  FaBookOpen,
  FaGraduationCap,
} from "react-icons/fa";

const FAQItem = ({ faq, isOpen, toggleOpen, index }) => {
  const iconMap = {
    "What is the Montessori method?": <FaSchool className="text-blue-400" />,
    "What programs does Westfields Montessori offer?": (
      <FaChalkboardTeacher className="text-purple-500" />
    ),
    "What age groups does Westfields Montessori serve?": (
      <FaChild className="text-green-500" />
    ),
    "What are the school hours and calendar?": (
      <FaCalendarAlt className="text-orange-500" />
    ),
    "How does Westfields support individualized learning?": (
      <FaBookOpen className="text-red-500" />
    ),
    "What is the admissions process at Westfields?": (
      <FaGraduationCap className="text-indigo-500" />
    ),
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`mb-4 sm:mb-6 overflow-hidden rounded-3xl border ${
        isOpen
          ? "border-primaryGreen-light dark:border-primaryGreen-dark shadow-lg"
          : "border-gray-200 dark:border-gray-700"
      } bg-white dark:bg-gray-800 transition-all duration-300`}
    >
      <button
        className="flex justify-between items-center w-full p-4 sm:p-6 text-left"
        onClick={toggleOpen}
        aria-expanded={isOpen}
        aria-controls={`faq-answer-${index}`}
      >
        <div className="flex items-center">
          <span className="mr-2 sm:mr-3">{iconMap[faq.question]}</span>
          <h3 className="font-montserrat font-semibold text-base sm:text-lg md:text-xl text-gray-800 dark:text-white">
            {faq.question}
          </h3>
        </div>
        <div
          className={`w-6 h-6 sm:w-8 sm:h-8 flex items-center justify-center rounded-full transition-all duration-300 ${
            isOpen
              ? "bg-primaryGreen-light dark:bg-primaryGreen-dark text-white rotate-180"
              : "bg-gray-100 dark:bg-gray-700 text-gray-500 dark:text-gray-300"
          }`}
        >
          <FaChevronDown
            className={`transition-transform duration-300 ${
              isOpen ? "transform rotate-180" : ""
            }`}
          />
        </div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="answer"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            id={`faq-answer-${index}`}
          >
            <div className="p-4 sm:p-6 pt-0 font-Ubuntu text-gray-600 dark:text-gray-300 border-t border-gray-100 dark:border-gray-700 text-sm sm:text-base">
              {faq.answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const FAQs = () => {
  const faqsData = [
    {
      question: "What is the Montessori method?",
      answer:
        "The Montessori method is an educational approach that emphasizes child-led learning, hands-on activities, and a prepared environment. At Westfields Montessori School, we foster independence, creativity, and a love for learning by allowing children to explore at their own pace with guidance from trained educators.",
    },
    {
      question: "What programs does Westfields Montessori offer?",
      answer:
        "Westfields Montessori offers programs for children aged 2 to 12, including toddler, preschool, and elementary levels. Our curriculum focuses on practical life skills, sensorial activities, language, mathematics, and cultural studies, all tailored to the developmental needs of each child.",
    },
    {
      question: "What age groups does Westfields Montessori serve?",
      answer:
        "We serve children from 2 to 12 years old. Our toddler program starts at age 2, preschool at age 3, and our elementary program supports children up to age 12, providing a seamless educational journey.",
    },
    {
      question: "What are the school hours and calendar?",
      answer:
        "Westfields Montessori operates Monday through Friday, from 8:00 AM to 4:00 PM. We follow a traditional academic calendar with breaks for summer, winter, and spring. Extended care options are available for families needing before- or after-school support.",
    },
    {
      question: "How does Westfields support individualized learning?",
      answer:
        "Our Montessori method prioritizes individualized learning by allowing children to choose activities that match their interests and developmental stage. Teachers observe and guide each child, ensuring they progress at their own pace while fostering independence and critical thinking skills.",
    },
    {
      question: "What is the admissions process at Westfields?",
      answer:
        "The admissions process begins with a tour of our school, where families can meet our staff and observe our classrooms. Following the tour, you’ll submit an application, and we’ll schedule a meeting to discuss your child’s needs. Enrollment is finalized based on availability and compatibility with our programs.",
    },
  ];

  const categories = [
    { id: "all", label: "All Questions" },
    { id: "montessori", label: "Montessori Method" },
    { id: "programs", label: "Programs" },
    { id: "admissions", label: "Admissions" },
  ];

  const [activeCategory, setActiveCategory] = useState("all");
  const [openIndex, setOpenIndex] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  // Filter FAQs based on category and search query
  const filteredFAQs = faqsData.filter((faq) => {
    const matchesSearch =
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase());

    if (!matchesSearch) return false;

    if (activeCategory === "all") return true;
    if (activeCategory === "montessori" && faq.question.includes("Montessori"))
      return true;
    if (
      activeCategory === "programs" &&
      (faq.question.includes("programs") || faq.question.includes("age groups"))
    )
      return true;
    if (
      activeCategory === "admissions" &&
      (faq.question.includes("admissions") || faq.question.includes("hours"))
    )
      return true;

    return false;
  });

  return (
    <section
      id="faqs"
      className="py-12 sm:py-16 md:py-20 relative overflow-hidden"
    >
      {/* Background */}
      <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-secondaryGreen-light to-white dark:from-secondaryGreen-dark dark:to-gray-900 -z-10"></div>
      <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-white dark:bg-gray-900 -z-10"></div>

      {/* Decorative elements */}
      <div className="absolute top-20 sm:top-40 left-0 w-full h-24 sm:h-40 bg-[url('/pattern-dots.png')] bg-repeat opacity-5 -z-5"></div>
      <div className="hidden sm:block absolute -bottom-24 sm:-bottom-32 -left-24 sm:-left-32 w-48 sm:w-64 h-48 sm:h-64 rounded-full border-8 border-primaryGreen-light dark:border-primaryGreen-dark border-opacity-10 dark:border-opacity-10 -z-5"></div>
      <div className="hidden sm:block absolute -top-16 sm:-top-20 -right-16 sm:-right-20 w-32 sm:w-40 h-32 sm:h-40 rounded-full border-8 border-primaryGreen-light dark:border-primaryGreen-dark border-opacity-10 dark:border-opacity-10 -z-5"></div>

      <div className="section-container relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8 sm:mb-12"
        >
          <h2 className="font-montserrat font-bold text-2xl sm:text-3xl md:text-4xl mb-3 sm:mb-4 text-gray-800 dark:text-white">
            Frequently Asked Questions
          </h2>
        </motion.div>

        {/* FAQ Search and Categories */}
        <div className="max-w-4xl mx-auto mb-6 sm:mb-10">
          <div className="backdrop-filter backdrop-blur-sm bg-white dark:bg-gray-800 bg-opacity-70 dark:bg-opacity-30 border border-gray-200 dark:border-gray-700 rounded-3xl p-4 sm:p-6 shadow-md">
            {/* Search Bar */}
            <div className="relative mb-4 sm:mb-6">
              <div className="absolute inset-y-0 left-0 pl-2 sm:pl-3 flex items-center pointer-events-none">
                <svg
                  className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </div>
              <input
                type="text"
                className="bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white text-sm rounded-3xl focus:ring-primaryGreen-light dark:focus:ring-primaryGreen-dark focus:border-primaryGreen-light dark:focus:border-primaryGreen-dark block w-full pl-8 sm:pl-10 p-2 sm:p-3"
                placeholder="Search questions..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                aria-label="Search FAQs"
              />
            </div>

            {/* Category Tabs */}
            <div className="flex flex-wrap justify-center gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-3 sm:px-4 py-1 sm:py-2 rounded-3xl font-medium transition-colors text-sm sm:text-base ${
                    activeCategory === category.id
                      ? "bg-primaryGreen-light dark:bg-primaryGreen-dark text-white"
                      : "bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600"
                  }`}
                >
                  {category.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* FAQ List */}
        <div className="max-w-3xl mx-auto">
          {filteredFAQs.length > 0 ? (
            filteredFAQs.map((faq, index) => (
              <FAQItem
                key={index}
                faq={faq}
                isOpen={openIndex === index}
                toggleOpen={() => toggleFAQ(index)}
                index={index}
              />
            ))
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center p-6 sm:p-8 bg-white dark:bg-gray-800 rounded-3xl shadow-md"
            >
              <FaQuestion className="text-gray-400 text-3xl sm:text-4xl mx-auto mb-3 sm:mb-4" />
              <h3 className="font-montserrat font-semibold text-lg sm:text-xl mb-2 text-gray-800 dark:text-white">
                No matching questions
              </h3>
              <p className="font-Ubuntu text-sm sm:text-base text-gray-600 dark:text-gray-300">
                Try adjusting your search or category filter to find what you're
                looking for.
              </p>
            </motion.div>
          )}
        </div>

        {/* Contact Admissions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-10 sm:mt-16 bg-primaryGreen-light dark:bg-primaryGreen-dark bg-opacity-10 dark:bg-opacity-10 backdrop-filter backdrop-blur-sm border border-primaryGreen-light dark:border-primaryGreen-dark border-opacity-20 dark:border-opacity-20 rounded-3xl p-6 sm:p-8 text-center max-w-3xl mx-auto"
        >
          <div className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 bg-primaryGreen-light dark:bg-primaryGreen-dark bg-opacity-20 dark:bg-opacity-20 rounded-full mb-3 sm:mb-4">
            <FaHeadset className="text-primaryGreen-light dark:text-primaryGreen-dark text-xl sm:text-2xl" />
          </div>
          <h3 className="font-montserrat font-semibold text-lg sm:text-xl mb-2 sm:mb-3 text-gray-800 dark:text-white">
            Still have questions?
          </h3>
          <p className="font-Ubuntu text-sm sm:text-base text-gray-600 dark:text-gray-300 mb-4 sm:mb-6 max-w-md mx-auto">
            Our admissions team is ready to assist you with any inquiries about
            Westfields Montessori School.
          </p>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center bg-primaryGreen-light dark:bg-primaryGreen-dark text-white font-medium py-2 sm:py-3 px-4 sm:px-6 rounded-full shadow-md hover:bg-primaryGreen-hover-light dark:hover:bg-primaryGreen-hover-dark transition-all text-sm sm:text-base"
          >
            Contact Admissions
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQs;
