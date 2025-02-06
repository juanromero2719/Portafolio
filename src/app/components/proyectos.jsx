"use client";

import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

export default function ProjectsGrid({ projects }) {
  const router = useRouter();

  const handleProjectClick = (id) => {
    router.push(`projects/${id}`);
  };

  return (
    <section className="grid grid-cols-1 lg:grid-cols-3 gap-6 bg-transparent w-[80%] mx-auto mb-10 pb-10">
      {projects.map((project, index) => (
        <motion.div
          key={project.id}
          onClick={() => handleProjectClick(project.id)}
          className={`rounded-3xl shadow-md overflow-hidden flex flex-col justify-between cursor-pointer transition-transform transform ${
            project.bgColor
          } ${
            index % 4 === 0
              ? "lg:col-span-1"
              : index % 4 === 1 || index % 4 === 2
              ? "lg:col-span-2"
              : "lg:col-span-1"
          }`}
        >
          {/* Contenido fijo */}
          <div className="flex flex-col items-end p-4">
            <h3
              className={`text-sm ${project.textColor || "text-gray-900"} tracking-widest sm:text-base`}
            >
              {project.subtitle}
            </h3>
            <h2
              className={`text-xl font-semibold ${
                project.textColor || "text-gray-900"
              } font-Acorn sm:text-xl`}
            >
              {project.title}
            </h2>
          </div>

          {/* Imagen con animación */}
          <motion.div
            className="flex items-center justify-center w-full h-36 bg-cover bg-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            whileHover={{ scale: 1.2, rotate: 5 }}
          >
            <motion.img
              src={project.image}
              alt=""
              className="object-cover w-20 h-20 text-white-900"
              transition={{ duration: 0.3 }}
            />
          </motion.div>
        </motion.div>
      ))}
    </section>
  );
}
