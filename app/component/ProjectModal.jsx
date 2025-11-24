"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useEffect } from "react";

export default function ProjectModal({ isOpen, onClose, project }) {
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("scrollStop");
    } else {
      document.body.classList.remove("scrollStop");
    }

    return () => document.body.classList.remove("scrollStop");
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && project && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4 backdrop-blur-md"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="dark:bg-darkTheme relative h-full w-full max-w-full overflow-auto rounded-2xl bg-white px-2.5 py-6 pt-14 shadow-xl md:h-auto md:max-w-1/2 md:px-6"
          >
            <div className="max-h-[80vh] overflow-auto">
              <button
                onClick={onClose}
                className="font20 absolute top-3 right-6 cursor-pointer dark:text-white"
              >
                X
              </button>

              <div className="mb-4 h-60 w-full overflow-hidden rounded-xl">
                <Image
                  src={project?.bgImage}
                  alt={project?.title || "Project Image"}
                  width={900}
                  height={400}
                  className="h-full w-full object-cover"
                  loading="eager"
                />
              </div>

              <h2 className="font-Outfit mb-2 text-2xl font-semibold tracking-[0.5px] dark:text-white/80">
                {project.title}
              </h2>

              <p className="font-Outfit mb-4 leading-relaxed tracking-[0.5px] text-gray-600 dark:text-white/80">
                {project.descriptionInDetail}
              </p>

              <div className="mb-6 flex flex-wrap gap-2">
                {project.techStack?.map((t, i) => (
                  <span
                    key={i}
                    className="rounded-full bg-black/10 px-3 py-1 text-sm dark:bg-white/10 dark:text-white/80"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {project.features && (
                <ul className="mb-6">
                  {project.features.map((f, index) => (
                    <li key={index} className="mb-2 flex gap-2">
                      <p className="font-Outfit w-1/2 md:w-auto font-bold text-gray-600 dark:text-white/50">
                        {f.heading}:
                      </p>
                      <p className="font-Outfit flex-1 text-gray-600 dark:text-white/50">
                        {f.details}
                      </p>
                    </li>
                  ))}
                </ul>
              )}

              <div className="flex gap-4">
                {project.liveLink && (
                  <a
                    href={project.liveLink}
                    target="_blank"
                    className="font-Outfit rounded-md bg-black px-5 py-2 text-white dark:bg-white dark:text-black"
                  >
                    Visit Project
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
