import { useState } from "react";
import { motion } from "framer-motion";
import {
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhone,
  FaClock,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";
import LegalModal from "./LegalModal";

// Placeholder data for Westfields Montessori School
const SCHOOL_DATA = {
  emails: ["admissions@westfieldsmontessori.com"],
  phones: ["+44 20 1234 5678"],
  addresses: [{ name: "123 Montessori Lane, London, UK" }],
  socials: {
    x: "https://x.com/westfieldsmontessori",
    linkedin: "https://linkedin.com/company/westfieldsmontessori",
    instagram: "https://instagram.com/westfieldsmontessori",
  },
  workingHours: "Monday–Friday: 8:00 AM–4:00 PM",
};

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [activeModal, setActiveModal] = useState(null);

  // Legal content for Westfields Montessori School
  const legalContent = {
    "Privacy Policy": (
      <>
        <h1 className="text-2xl font-bold mb-6">
          Westfields Montessori School Privacy Policy
        </h1>

        <h2 className="text-xl font-semibold mt-6 mb-4">1. Introduction</h2>
        <p>
          Welcome to <strong>Westfields Montessori School</strong> ("the
          School"), dedicated to providing an inclusive and child-centered
          education. This Privacy Policy explains how we collect, use, and
          protect your information when you interact with our website or
          services.
        </p>
        <p className="mt-2">
          By using our website or services, you agree to the practices described
          in this policy. If you do not agree, please refrain from using our
          services.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-4">
          2. Information We Collect
        </h2>
        <h3 className="text-lg font-medium mt-4 mb-2">
          2.1 Personal Information
        </h3>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>Enrollment Data:</strong> We collect names, contact details,
            and emergency contacts when you enroll a child.
          </li>
          <li>
            <strong>Communication Data:</strong> Emails or inquiries submitted
            via our website or contact forms.
          </li>
        </ul>

        <h3 className="text-lg font-medium mt-4 mb-2">
          2.2 Non-Personal Information
        </h3>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>Website Analytics:</strong> Anonymized data (e.g., page
            views) to improve our website, collected via tools like Google
            Analytics.
          </li>
        </ul>

        <h2 className="text-xl font-semibold mt-6 mb-4">
          3. How We Use Your Information
        </h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>Enrollment and Support:</strong> To process applications,
            communicate with parents, and provide educational services.
          </li>
          <li>
            <strong>Website Improvement:</strong> To analyze usage patterns and
            enhance the user experience.
          </li>
        </ul>

        <h2 className="text-xl font-semibold mt-6 mb-4">
          4. Data Sharing and Disclosure
        </h2>
        <p>
          We do not share personal information with third parties except as
          required for legal purposes or to provide services (e.g., payment
          processors).
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-4">5. Data Security</h2>
        <p>
          We use secure methods to protect your data, including encryption for
          online transactions and restricted access to records.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-4">6. Contact Us</h2>
        <p>
          For privacy concerns, contact us at:
          <br />
          <strong>Email:</strong>{" "}
          <a
            href="mailto:privacy@westfieldsmontessori.com"
            className="text-primaryGreen-light dark:text-primaryGreen-dark"
          >
            privacy@westfieldsmontessori.com
          </a>
        </p>
      </>
    ),
    "Terms of Service": (
      <>
        <h1 className="text-2xl font-bold mb-6">Terms of Service</h1>
        <p className="mb-4">
          This Terms of Service document outlines the terms and conditions for
          using Westfields Montessori School's website and services.
        </p>
        <p className="font-medium">
          This is a placeholder for the Terms of Service content. The complete
          terms would include information about:
        </p>
        <ul className="list-disc pl-6 mt-4 space-y-2">
          <li>Acceptable use of our website</li>
          <li>Enrollment policies</li>
          <li>Payment and refund terms</li>
          <li>Limitation of liability</li>
          <li>Governing law</li>
        </ul>
      </>
    ),
    "Cookies Policy": (
      <>
        <h1 className="text-2xl font-bold mb-6">Cookies Policy</h1>
        <p className="mb-4">
          This Cookies Policy explains how Westfields Montessori School uses
          cookies on our website to enhance your experience.
        </p>
        <p className="font-medium">
          This is a placeholder for the Cookies Policy content. The complete
          policy would include information about:
        </p>
        <ul className="list-disc pl-6 mt-4 space-y-2">
          <li>Types of cookies used</li>
          <li>How cookies improve our site</li>
          <li>Managing cookie preferences</li>
        </ul>
      </>
    ),
    Accessibility: (
      <>
        <h1 className="text-2xl font-bold mb-6">Accessibility Statement</h1>
        <p className="mb-4">
          Westfields Montessori School is committed to ensuring digital
          accessibility for all users, including those with disabilities. We
          strive to meet accessibility standards to provide an inclusive
          experience.
        </p>
        <h2 className="text-xl font-semibold mt-6 mb-3">Conformance Status</h2>
        <p>
          We aim to conform to WCAG 2.1 Level AA standards, ensuring our website
          is accessible to the widest possible audience.
        </p>
        <h2 className="text-xl font-semibold mt-6 mb-3">Feedback</h2>
        <p>
          Please report accessibility issues to:
          <br />
          <strong>Email:</strong>{" "}
          <a
            href="mailto:accessibility@westfieldsmontessori.com"
            className="text-primaryGreen-light dark:text-primaryGreen-dark"
          >
            accessibility@westfieldsmontessori.com
          </a>
        </p>
      </>
    ),
  };

  return (
    <footer className="pt-12 sm:pt-16 md:pt-20 relative overflow-hidden">
      {/* Enhanced Background */}
      <div className="absolute inset-0 bg-gray-50 dark:bg-gray-900 -z-10"></div>
      <div className="absolute inset-0 opacity-5 dark:opacity-10 -z-10">
        <div className="absolute top-0 w-full h-full bg-[url('/pattern-dots.png')] bg-repeat"></div>
      </div>

      {/* Decorative elements */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.15 }}
        transition={{ duration: 2, delay: 0.5 }}
        className="absolute -bottom-16 sm:-bottom-20 -right-16 sm:-right-20 w-48 sm:w-64 h-48 sm:h-64 rounded-full bg-blue-400 dark:bg-blue-600 blur-3xl opacity-10 dark:opacity-5"
      />

      <div className="section-container relative z-10">
        {/* Main Footer Content */}
        <div className="backdrop-blur-sm bg-white dark:bg-gray-800 bg-opacity-70 dark:bg-opacity-30 border border-white dark:border-gray-700 border-opacity-30 dark:border-opacity-20 rounded-3xl p-6 sm:p-8 md:p-12 shadow-xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 md:gap-10">
            {/* School Info Column */}
            <div className="space-y-4 sm:space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className="flex items-center"
              >
                <div className="h-10 sm:h-12 w-10 sm:w-12 rounded overflow-hidden bg-transparent shadow-md">
                  <img
                    className="h-full w-full object-contain"
                    src="/school-logo.webp"
                    alt="Westfields Montessori School Logo"
                  />
                </div>
                <span className="ml-2 sm:ml-3 text-lg sm:text-xl font-montserrat font-bold text-gray-900 dark:text-white">
                  Westfields Montessori School
                </span>
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 }}
                className="font-Ubuntu text-sm sm:text-base text-gray-600 dark:text-gray-300"
              >
                Nurturing independence and creativity through a child-centered
                Montessori education in a supportive community.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.2 }}
                className="flex space-x-2 sm:space-x-3"
              >
                {[
                  {
                    icon: <FaXTwitter size={14} />,
                    label: "Twitter",
                    href: SCHOOL_DATA.socials.x,
                  },
                  {
                    icon: <FaLinkedinIn size={14} />,
                    label: "LinkedIn",
                    href: SCHOOL_DATA.socials.linkedin,
                  },
                  {
                    icon: <FaInstagram size={14} />,
                    label: "Instagram",
                    href: SCHOOL_DATA.socials.instagram,
                  },
                ].map((social, index) => (
                  <a
                    target="_blank"
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className="w-8 sm:w-10 h-8 sm:h-10 rounded-xl flex items-center justify-center text-gray-600 dark:text-gray-300 hover:text-white hover:bg-primaryGreen-light dark:hover:bg-primaryGreen-dark transition-all shadow-sm bg-white dark:bg-gray-700 bg-opacity-70 dark:bg-opacity-30"
                  >
                    {social.icon}
                  </a>
                ))}
              </motion.div>
            </div>

            {/* Navigation Column */}
            <div>
              <motion.h4
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className="text-xs sm:text-sm font-montserrat font-semibold text-gray-900 dark:text-white uppercase tracking-wider mb-4 sm:mb-6"
              >
                Navigation
              </motion.h4>
              <motion.ul
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 }}
                className="space-y-3 sm:space-y-4"
              >
                {["Home", "About Us", "Programs", "Admissions", "Contact"].map(
                  (item, index) => (
                    <li key={index}>
                      <a
                        href={`/#${item.toLowerCase().replace(" ", "-")}`}
                        className="text-gray-600 dark:text-gray-400 hover:text-primaryGreen-light dark:hover:text-primaryGreen-dark transition-colors text-xs sm:text-sm block py-1 sm:py-1.5 relative group"
                      >
                        <span>{item}</span>
                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primaryGreen-light dark:bg-primaryGreen-dark transition-all duration-300 group-hover:w-full"></span>
                      </a>
                    </li>
                  )
                )}
              </motion.ul>
            </div>

            {/* Legal Column */}
            <div>
              <motion.h4
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className="text-xs sm:text-sm font-montserrat font-semibold text-gray-900 dark:text-white uppercase tracking-wider mb-4 sm:mb-6"
              >
                Legal
              </motion.h4>
              <motion.ul
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 }}
                className="space-y-3 sm:space-y-4"
              >
                <li>
                  <Link
                    to="/privacy"
                    className="text-gray-600 dark:text-gray-400 hover:text-primaryGreen-light dark:hover:text-primaryGreen-dark transition-colors text-xs sm:text-sm block py-1 sm:py-1.5 text-left w-full relative group"
                  >
                    <span>Privacy Policy</span>
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primaryGreen-light dark:bg-primaryGreen-dark transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                </li>
                {["Terms of Service", "Cookies Policy", "Accessibility"].map(
                  (item, index) => (
                    <li key={index}>
                      <button
                        onClick={() => setActiveModal(item)}
                        className="text-gray-600 dark:text-gray-400 hover:text-primaryGreen-light dark:hover:text-primaryGreen-dark transition-colors text-xs sm:text-sm block py-1 sm:py-1.5 text-left w-full relative group"
                      >
                        <span>{item}</span>
                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primaryGreen-light dark:bg-primaryGreen-dark transition-all duration-300 group-hover:w-full"></span>
                      </button>
                    </li>
                  )
                )}
              </motion.ul>
            </div>

            {/* Contact Column */}
            <div>
              <motion.h4
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className="text-xs sm:text-sm font-montserrat font-semibold text-gray-900 dark:text-white uppercase tracking-wider mb-4 sm:mb-6"
              >
                Contact
              </motion.h4>
              <motion.ul
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 }}
                className="space-y-3 sm:space-y-4 text-xs sm:text-sm text-gray-600 dark:text-gray-400"
              >
                <li className="flex items-start">
                  <FaEnvelope className="text-primaryGreen-light dark:text-primaryGreen-dark mt-1 mr-2 sm:mr-3" />
                  <div>
                    <span className="block text-xxs sm:text-xs text-gray-500 dark:text-gray-500 mb-1">
                      EMAIL
                    </span>
                    <a
                      href={`mailto:${SCHOOL_DATA.emails[0]}`}
                      className="hover:text-primaryGreen-light dark:hover:text-primaryGreen-dark transition-colors"
                    >
                      {SCHOOL_DATA.emails[0]}
                    </a>
                  </div>
                </li>
                <li className="flex items-start">
                  <FaPhone className="text-primaryGreen-light dark:text-primaryGreen-dark mt-1 mr-2 sm:mr-3" />
                  <div>
                    <span className="block text-xxs sm:text-xs text-gray-500 dark:text-gray-500 mb-1">
                      PHONE
                    </span>
                    <a
                      href={`tel:${SCHOOL_DATA.phones[0]}`}
                      className="hover:text-primaryGreen-light dark:hover:text-primaryGreen-dark transition-colors"
                    >
                      {SCHOOL_DATA.phones[0]}
                    </a>
                  </div>
                </li>
                <li className="flex items-start">
                  <FaMapMarkerAlt className="text-primaryGreen-light dark:text-primaryGreen-dark mt-1 mr-2 sm:mr-3" />
                  <div>
                    <span className="block text-xxs sm:text-xs text-gray-500 dark:text-gray-500 mb-1">
                      ADDRESS
                    </span>
                    <span>{SCHOOL_DATA.addresses[0].name}</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <FaClock className="text-primaryGreen-light dark:text-primaryGreen-dark mt-1 mr-2 sm:mr-3" />
                  <div>
                    <span className="block text-xxs sm:text-xs text-gray-500 dark:text-gray-500 mb-1">
                      HOURS
                    </span>
                    <span>{SCHOOL_DATA.workingHours}</span>
                  </div>
                </li>
              </motion.ul>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-6 sm:mt-8 md:mt-10 text-center">
          <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">
            © {currentYear} Westfields Montessori School. All rights reserved.
          </p>
        </div>
      </div>

      {/* Legal Modals */}
      {Object.entries(legalContent).map(([title, content]) => (
        <LegalModal
          key={title}
          isOpen={activeModal === title}
          onClose={() => setActiveModal(null)}
          title={title}
          content={content}
        />
      ))}
    </footer>
  );
};

export default Footer;
