import { useEffect, useState } from "react";
import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";

export interface ProjectType {
  id: string;
  name: string;
  description: string;
  technologies: string;
  year: string;
  githubLink: string;
  liveLink?: string;
  image?: string;
}

interface ProjectRowProps {
  project: ProjectType;
}

const ProjectRow = ({ project }: ProjectRowProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const {
    id,
    name,
    description,
    technologies,
    year,
    githubLink,
    liveLink,
    image,
  } = project;

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsModalOpen(false);
    };
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKey);
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKey);
    };
  }, [isModalOpen]);

  return (
    <>
      <div
        className="group relative block border-b border-black/10 py-10 transition-colors duration-500 hover:bg-black/2 sm:py-14 px-4 sm:px-6 lg:px-8 -mx-4 sm:-mx-6 lg:-mx-8"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="relative z-10 flex flex-col justify-between gap-6 md:flex-row md:items-start">
          {/* Mobile ID */}
          <div className="mb-2 flex items-center justify-between md:hidden">
            <span className="font-space-grotesk text-xl font-light text-grey/60">
              {id}
            </span>
          </div>

          <div className="flex w-full flex-col gap-4 md:w-auto md:flex-row md:gap-12 lg:gap-24">
            {/* Desktop ID */}
            <div className="hidden pt-2 md:block">
              <span className="font-space-grotesk text-xl font-light text-grey/60 sm:text-2xl">
                {id}
              </span>
            </div>

            <div className="max-w-xl transition-transform duration-500 ease-out group-hover:translate-x-3">
              <div className="mb-4 flex flex-wrap items-baseline gap-3">
                <h2 className="font-space-grotesk text-3xl font-bold text-black sm:text-4xl md:text-5xl">
                  {name}
                </h2>
                <span className="font-space-grotesk text-base font-medium text-grey/50">
                  — {year}
                </span>
              </div>

              <p className="mb-3 font-inter text-lg text-text-grey sm:text-xl">
                {description}
              </p>

              <ul className="mb-8 flex flex-wrap gap-2">
                {technologies.split(" · ").map((tech) => (
                  <li
                    key={tech}
                    className="rounded-full border border-black/10 px-3 py-1 font-space-grotesk text-xs font-medium text-grey"
                  >
                    {tech}
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap items-center gap-6 font-inter text-sm font-semibold text-black">
                <a
                  href={githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/link flex items-center gap-2 transition-colors hover:text-grey"
                >
                  <FaGithub className="text-lg" />
                  GitHub
                </a>
                {liveLink && (
                  <a
                    href={liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/link flex items-center gap-2 transition-colors hover:text-grey"
                  >
                    <FiExternalLink className="text-lg" />
                    Live site
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>

        {image && (
          <>
            {/* Image Preview - Desktop */}
            <button
              onClick={() => setIsModalOpen(true)}
              title="View full image"
              className={`absolute right-4 top-1/2 z-20 hidden h-60 w-90 -translate-y-1/2 cursor-zoom-in overflow-hidden shadow-2xl transition-all duration-700 ease-out xl:right-16 xl:h-70 xl:w-105 lg:block ${
                isHovered
                  ? "translate-x-0 opacity-100"
                  : "translate-x-8 opacity-0 pointer-events-none"
              }`}
            >
              <img
                src={image}
                alt={`${name} preview`}
                className="h-full w-full bg-[#f4f4f4] object-cover opacity-90 grayscale transition-all duration-700 hover:scale-105 group-hover:opacity-100 group-hover:grayscale-0"
              />
            </button>

            {/* Image preview - Mobile */}
            <button
              onClick={() => setIsModalOpen(true)}
              className="mt-8 block h-55 w-full overflow-hidden bg-[#f4f4f4] sm:h-75 lg:hidden"
            >
              <img
                src={image}
                alt={`${name} preview`}
                className="h-full w-full object-cover opacity-80 grayscale"
              />
            </button>
          </>
        )}
      </div>

      {/* Fullscreen Image Modal */}
      {image && (
        <div
          className={`fixed inset-0 z-100 flex items-center justify-center bg-black/80 p-4 sm:p-8 transition-all duration-500 ease-out ${
            isModalOpen
              ? "opacity-100 backdrop-blur-sm"
              : "pointer-events-none opacity-0"
          }`}
          onClick={() => setIsModalOpen(false)}
        >
          {/* Close button lives outside stopPropagation so clicking it works from the backdrop too */}
          <button
            onClick={() => setIsModalOpen(false)}
            className="absolute right-6 top-6 z-10 text-sm font-medium uppercase tracking-widest text-white/60 transition-colors hover:text-white font-space-grotesk sm:right-10 sm:top-8"
          >
            Close ✕
          </button>

          {/* Only the image itself stops propagation */}
          <div className="relative flex h-full max-h-[90vh] w-full max-w-6xl items-center justify-center perspective-distant">
            <img
              src={image}
              alt={`${name} full view`}
              onClick={(e) => e.stopPropagation()}
              className={`max-h-full max-w-full cursor-default rounded-sm object-contain shadow-2xl transition-all duration-700 ease-out origin-center ${
                isModalOpen
                  ? "opacity-100 transform-[rotateX(0deg)_scale(1)]"
                  : "opacity-0 transform-[rotateX(60deg)_scale(0.8)]"
              }`}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default ProjectRow;
