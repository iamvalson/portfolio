import Container from "./Container";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/divine-owai-22823b2ab",
    },
    {
      label: "Github",
      href: "https://github.com/iamvalson",
    },
    {
      label: "X",
      href: "https://x.com/earthtovalentin",
    },
    {
      label: "Instagram",
      href: "https://instagram.com/earthtovalentinee",
    },
    {
      label: "Tiktok",
      href: "https://tiktok.com/earthtovalentine",
    },
  ];

  return (
    <footer className="bg-stone-100 py-8 sm:py-10">
      <Container>
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6">
            <a
              href="/"
              className="font-space-grotesk text-xl sm:text-2xl font-semibold tracking-tighter"
            >
              VALENTINE
            </a>
            <span className="font-space-grotesk text-xs sm:text-sm text-grey">
              &copy; {currentYear} EARTHTOVALENTINE. All rights reserved.
            </span>
          </div>

          <nav className="flex flex-wrap items-center gap-5 sm:gap-8">
            {socialLinks.map((socialLink) => (
              <a
                href={socialLink.href}
                target="_blank"
                rel="noreferrer noopener"
                key={socialLink.href}
                className="group relative uppercase font-space-grotesk text-sm sm:text-base font-medium tracking-tight"
              >
                {socialLink.label}
                <span className="absolute -bottom-0.5 left-0 h-px w-full origin-left scale-x-0 bg-current transition-transform duration-300 ease-out group-hover:scale-x-100" />
              </a>
            ))}
          </nav>
        </div>
      </Container>
    </footer>
  );
};
export default Footer;
