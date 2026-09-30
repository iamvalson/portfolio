import Container from "../components/Container";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import ProjectRow from "../components/ProjectRow";
import { PROJECTS } from "../data/projects";

const Projects = () => {
  return (
    <>
      <Navbar />
      <Container>
        <main className="mb-20 flex flex-col pt-24 sm:mb-28 sm:pt-28 md:mb-40 md:pt-32">
          <header className="mb-16 max-w-2xl sm:mb-20 md:mb-24">
            <span className="mb-4 block font-space-grotesk text-sm font-semibold tracking-widest text-grey uppercase sm:mb-6 sm:text-base">
              Work
            </span>
            <h1 className="mb-4 font-space-grotesk text-4xl font-bold leading-tight tracking-tight text-black sm:mb-6 sm:text-5xl md:text-6xl">
              Selected projects
            </h1>
            <p className="font-inter text-lg font-medium leading-relaxed text-grey sm:text-xl md:text-2xl">
              Things I've built, contributed to, and experimented with.
            </p>
          </header>

          <section>
            <div className="border-t border-black/10">
              {PROJECTS.map((project) => (
                <ProjectRow key={project.id} project={project} />
              ))}
            </div>
          </section>
        </main>
      </Container>
      <Footer />
    </>
  );
};

export default Projects;
