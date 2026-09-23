import me from "../assets/earthtovalentine.webp";

const Hero = () => {
  return (
    <section className="pt-24 sm:pt-28 md:pt-32">
      <div className="bg-white w-fit p-1.5 sm:p-2 rounded-full mb-4 sm:mb-6 shadow-xs">
        <img
          src={me}
          alt="Image of Divine Valentine Owai"
          aria-label="Image of Divine Valentine Owai"
          className="w-20 h-20 sm:w-24 sm:h-24 rounded-full object-cover"
        />
      </div>

      <div className="max-w-2xl flex flex-col gap-10 sm:gap-14 md:gap-20">
        <div>
          <div className="mb-6 sm:mb-8">
            <h1 className="font-space-grotesk tracking-tight text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
              Hello, I'm <span className="text-text-grey">Valentine.</span>
            </h1>
            <span className="font-space-grotesk text-grey text-sm sm:text-base font-medium">
              a.k.a earthtovalentine
            </span>
          </div>

          <p className="font-inter font-medium text-grey text-lg sm:text-xl md:text-2xl leading-relaxed">
            Working across software engineering, visual storytelling, and
            creative technology. Focused on building reliable things with
            intention, from systems in code to stories captured on an iPhone.
          </p>
        </div>
        <div>
          <p className="font-inter font-medium text-grey text-base sm:text-lg md:text-xl leading-relaxed">
            Take a look at some of the things I've built on{" "}
            <a href="/projects" className="group relative text-black">
              Projects
              <span className="absolute -bottom-0.5 left-0 h-px w-full origin-left scale-x-0 bg-current transition-transform duration-300 ease-out group-hover:scale-x-100" />
            </a>
            , see the world through my lens on{" "}
            <a href="/reels" className="group relative text-black">
              Reels
              <span className="absolute -bottom-0.5 left-0 h-px w-full origin-left scale-x-0 bg-current transition-transform duration-300 ease-out group-hover:scale-x-100" />
            </a>
            , learn a little more about the person behind the work on{" "}
            <a href="/about" className="group relative text-black">
              About
              <span className="absolute -bottom-0.5 left-0 h-px w-full origin-left scale-x-0 bg-current transition-transform duration-300 ease-out group-hover:scale-x-100" />
            </a>
            , or say hello through{" "}
            <a href="/contact" className="group relative text-black">
              Contact
              <span className="absolute -bottom-0.5 left-0 h-px w-full origin-left scale-x-0 bg-current transition-transform duration-300 ease-out group-hover:scale-x-100" />
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  );
};
export default Hero;
