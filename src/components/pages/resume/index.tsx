import React from 'react';
import { FileDown } from 'lucide-react';
import { motion } from 'framer-motion';
import pdfFilePath from "../../../assets/resume/Resume_SUMIT KUMAR KHAMARI.pdf";

export function Resume() {
  return (
    <section id="resume" className="py-16 px-4 bg-white dark:bg-gray-900">
      <div className="container mx-auto max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
            Download My Resume
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            Get a detailed overview of my experience, skills, and achievements in my comprehensive resume.
          </p>
          <motion.a
            href={pdfFilePath}
            download
            className="inline-flex items-center gap-2 px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FileDown className="w-5 h-5" />
            Download Resume
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}