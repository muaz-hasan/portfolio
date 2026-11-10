import StarsCanvas from "./ui/StarBackground";
import VertexBackground from "./ui/VertexBackground";
import { projectData } from "../data/projectData";
import { FaGithub, FaXTwitter, FaInstagram } from "react-icons/fa6";
import { FiExternalLink } from "react-icons/fi";

const socials = [
  { name: "GitHub", href: "https://github.com/FunsaiSushi", icon: FaGithub },
  { name: "X", href: "https://twitter.com/FunsaiSushi", icon: FaXTwitter },
  { name: "Instagram", href: "https://instagram.com/funsai.sushi", icon: FaInstagram },
];

const projects = [
  { name: "nihonfren", link: "https://nihonfren.com", intro: "learn japanese" },
  ...[
    ["storefren", "manage your store"],
    ["boopclub", "the internet's town square"],
    ["pandaHR", "manage your team"],
    ["kreeshee", "shop fresh produce"],
  ].map(([name, intro]) => ({
    ...projectData.find((project) => project.name === name),
    intro,
  })),
];

export default function Page() {
  return (
    <div className="portfolio">
      <StarsCanvas />
      <VertexBackground
        className="pointer-events-none fixed inset-0 -z-10 h-full w-full"
        color="rgba(255, 255, 255, 0.2)"
      />
      <main className="portfolio-content">
        <header className="portfolio-header">
          <h1>muaz</h1>
          <p className="portfolio-tagline">
            the bren at{"\u00a0"}
            <a href="https://frenbren.vercel.app" target="_blank" rel="noopener noreferrer">
              frenbren
            </a>
          </p>
        </header>
        <nav aria-label="Projects" className="project-links">
          {projects.map((project) => (
            <a key={project.name} href={project.link} target="_blank" rel="noopener noreferrer">
              <span>
                {project.name.toLowerCase()}
                <span className="project-intro">: {project.intro}</span>
              </span>
              <FiExternalLink className="project-link-icon" size={12} aria-hidden="true" />
            </a>
          ))}
        </nav>
        <nav aria-label="Socials" className="social-links">
          {socials.map((social) => (
            <a key={social.name} href={social.href} aria-label={social.name} title={social.name} target="_blank" rel="noopener noreferrer">
              <social.icon size={16} aria-hidden="true" />
            </a>
          ))}
        </nav>
      </main>
    </div>
  );
}
