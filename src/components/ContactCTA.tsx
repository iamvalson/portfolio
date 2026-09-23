import { BsArrowUpRight } from "react-icons/bs";

const ContactCTA = () => {
  return (
    <section className="max-w-2xl">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-space-grotesk font-semibold tracking-tight">
        Have something worth building?
      </h2>

      <div className="mt-4 sm:mt-6">
        <a
          href="mailto:owaidivinevalentine@gmail.com"
          className="group relative inline-flex items-center gap-1.5 sm:gap-2 sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-inter font-semibold text-text-grey max-w-full break-all sm:break-normal"
        >
          <span className="relative">
            owaidivinevalentine@gmail.com
            <span className="absolute -bottom-1 left-0 h-[1.5px] w-full bg-current" />
          </span>

          <BsArrowUpRight className="shrink-0 text-base sm:text-xl md:text-2xl lg:text-3xl transition-transform duration-300 ease-out group-hover:-translate-y-1 group-hover:translate-x-1" />
        </a>
      </div>
    </section>
  );
};
export default ContactCTA;
