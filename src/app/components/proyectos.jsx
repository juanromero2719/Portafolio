"use client";

import { useRouter } from "next/navigation";

export default function ProjectsGrid({ projects }) {

  const router = useRouter();

  const handleProjectClick = (id) => {
    router.push(`projects/${id}`); 
  };

  return (

    <section className="grid grid-cols-1 lg:grid-cols-2 gap-6 bg-transparent w-[80%] mx-auto mb-10 pb-10 border">

      {projects.map((project) => (
        

        <div
          key={project.id}
          onClick={() => handleProjectClick(project.id)} 
          className={`rounded-lg shadow-md overflow-hidden flex flex-col justify-between cursor-pointer transition-transform transform hover:scale-105  ${project.bgColor}`}
        >
       
          {/* Contenido de texto */}
          <div className="flex flex-col items-end p-4">
              
            <h3
                className={`text-sm ${project.textColor || "text-gray-900"} tracking-widest`}
              >
              {project.subtitle}
            </h3>
            <h2
              className={`text-xl font-semibold ${
                project.textColor || "text-gray-900"
              } font-Acorn`}
            >
              {project.title}
            </h2>
          </div>

          

          {/* Imagen */}
          <div
            className="flex-grow bg-cover bg-center"
            style={{ backgroundImage: `url(${project.image})` }}
          ></div>

        </div>

      ))}

    </section>
  );
}
