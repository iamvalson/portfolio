import { useEffect, useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import Container from "./Container";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Projects", href: "/projects" },
    { label: "Reels", href: "/reels" },
  ];

  // Lock body scroll while the drawer is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Close on Escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-30 w-full bg-[#f9f9f9]/95 backdrop-blur-xs">
        <Container>
          <div className="flex items-center justify-between py-4 sm:py-6">
            <a
              href="/"
              className="font-space-grotesk text-xl sm:text-2xl font-semibold tracking-tighter"
            >
              VALENTINE
            </a>

            {/* Desktop nav */}
            <nav className="hidden items-center gap-8 md:flex">
              {navLinks.map((navLink) => (
                <a
                  href={navLink.href}
                  key={navLink.href}
                  className="group relative font-space-grotesk font-medium uppercase tracking-tight"
                >
                  {navLink.label}
                  <span className="absolute -bottom-0.5 left-0 h-px w-full origin-left scale-x-0 bg-current transition-transform duration-300 ease-out group-hover:scale-x-100" />
                </a>
              ))}
              <button className="cursor-pointer bg-stone-950 px-3 py-2 font-space-grotesk font-medium uppercase text-white transition-opacity hover:opacity-90">
                Contact
              </button>
            </nav>

            {/* Hamburger — mobile only */}
            <button
              onClick={() => setIsOpen(true)}
              aria-label="Open menu"
              className="cursor-pointer p-1 text-stone-900 md:hidden"
            >
              <HiMenu className="text-2xl sm:text-3xl" />
            </button>
          </div>
        </Container>
      </header>

      {/* Backdrop covering the entire page */}
      <div
        onClick={() => setIsOpen(false)}
        className={`fixed inset-0 z-40 bg-black/60 backdrop-blur-[1px] transition-opacity duration-300 ease-out md:hidden ${
          isOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
      />

      {/* Side drawer */}
      <div
        className={`fixed top-0 right-0 z-50 flex h-dvh w-[88vw] max-w-md flex-col justify-between bg-[#f9f9f9] shadow-2xl transition-transform duration-300 ease-out md:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Top close button bar */}
        <div className="flex items-center justify-end px-6 py-5 sm:px-8 sm:py-6">
          <button
            onClick={() => setIsOpen(false)}
            aria-label="Close menu"
            className="cursor-pointer p-1 text-stone-900 transition-transform hover:scale-105 active:scale-95"
          >
            <HiX className="text-3xl sm:text-4xl" />
          </button>
        </div>

        {/* Vertically centered nav links */}
        <nav className="flex flex-col justify-center px-8 sm:px-12 gap-7 sm:gap-8 my-auto">
          {navLinks.map((navLink) => (
            <a
              href={navLink.href}
              key={navLink.href}
              onClick={() => setIsOpen(false)}
              className="group relative font-space-grotesk text-3xl sm:text-4xl font-bold uppercase tracking-tight text-stone-900 transition-colors hover:text-text-grey"
            >
              <span className="relative inline-block">
                {navLink.label}
                <span className="absolute -bottom-1 left-0 h-0.5 w-full origin-left scale-x-0 bg-current transition-transform duration-300 ease-out group-hover:scale-x-100" />
              </span>
            </a>
          ))}

          <a
            href="/contact"
            onClick={() => setIsOpen(false)}
            className="mt-4 inline-block w-full bg-stone-950 py-3.5 sm:py-4 text-center font-space-grotesk text-base sm:text-lg font-medium uppercase text-white transition-opacity hover:opacity-90"
          >
            Contact
          </a>
        </nav>

        {/* Bottom copyright */}
        <div className="px-8 pb-8 pt-4 flex flex-col gap-1">
          <span className="font-space-grotesk text-xs uppercase tracking-widest text-grey font-medium">
            Valentine Owai
          </span>
          <span className="font-space-grotesk text-xs text-grey">
            &copy; {new Date().getFullYear()} All rights reserved.
          </span>
        </div>
      </div>
    </>
  );
};
export default Navbar;
