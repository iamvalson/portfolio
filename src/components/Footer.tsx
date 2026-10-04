import {
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaTiktok,
  FaXTwitter,
} from "react-icons/fa6";
import Container from "./Container";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/divine-owai-22823b2ab",
      Icon: FaLinkedin,
    },
    {
      label: "Github",
      href: "https://github.com/iamvalson",
      Icon: FaGithub,
    },
    {
      label: "X (Twitter)",
      href: "https://x.com/earthtovalentin",
      Icon: FaXTwitter,
    },
    {
      label: "Instagram",
      href: "https://instagram.com/earthtovalentinee",
      Icon: FaInstagram,
    },
    {
      label: "Tiktok",
      href: "https://www.tiktok.com/@earthtovalentine",
      Icon: FaTiktok,
    },
  ];

  return (
    <footer className="bg-surface py-8 sm:py-10">
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

          <nav className="flex flex-wrap items-center gap-5 sm:gap-8 mt-2 sm:mt-0">
            {socialLinks.map((socialLink) => (
              <a
                href={socialLink.href}
                target="_blank"
                rel="noreferrer noopener"
                key={socialLink.href}
                className="group relative flex flex-col items-center uppercase font-space-grotesk text-sm sm:text-base font-medium tracking-tight"
              >
                <div className="absolute -top-6 pointer-events-none translate-y-2 opacity-0 transition-all duration-300 ease-out group-hover:-translate-y-1 group-hover:opacity-100">
                  <socialLink.Icon className="text-xl sm:text-2xl" />
                </div>
                <span>{socialLink.label}</span>
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
