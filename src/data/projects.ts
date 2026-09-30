import type { ProjectType } from "../components/ProjectRow";

export const PROJECTS: ProjectType[] = [
  {
    id: "01",
    name: "BLINK",
    description: "Social media management platform",
    technologies: "Go · Next.js · PostgreSQL · Redis",
    year: "2026",
    githubLink: "https://github.com/iamvalson/blink",
    liveLink: "https://blink-beta-swart.vercel.app/",
  },
  {
    id: "02",
    name: "STROBE",
    description:
      "A high-frequency, distributed monitoring engine that provides real-time observability into service health and network latency.",
    technologies: "Go · TypeScript · Nextjs · Docker",
    year: "2026",
    githubLink: "https://github.com/iamvalson/strobe/tree/main",
    image:
      "https://media.licdn.com/dms/image/v2/D4E22AQHo83SR3Vxhbw/feedshare-image-high-res/B4EZ5YKaqgH0AU-/0/1779595592713?e=1792627200&v=beta&t=GXdtLq6NXIiUi3ITj0lFiKJ8-wwRUc9G5MfmaoLppoE",
  },
  {
    id: "03",
    name: "BT Audio Guard",
    description:
      "Automatically pause music and media when your Bluetooth headphones disconnect on Windows 10/11",
    technologies: "C#",
    year: "2026",
    githubLink:
      "https://github.com/iamvalson/auto-pause-bluetooth-audio-windows",
  },
  {
    id: "04",
    name: "SEARCH RECOMMENDATION SYSTEM",
    description:
      "A distributed, real-time search recommendation engine that re-ranks search results based on user click behaviour.",
    technologies: "Python · Docker",
    year: "2026",
    githubLink: "https://github.com/iamvalson/search-recommender",
    image:
      "https://media.licdn.com/dms/image/v2/D4E22AQFQMRUAOgaRVg/feedshare-shrink_800/B4EZ2S2sbdIcAc-/0/1776285304872?e=1792627200&v=beta&t=kx4Dpq2AxTtNlGPmQJUh-ImVyPFrmjze7DlBjGf1TdM",
  },
  {
    id: "05",
    name: "EMAIL-DIGEST",
    description:
      "Scraps your daily emails and send the summary of it to your whatsapp ranking them in terms of importance",
    technologies: "Python",
    year: "2025",
    githubLink: "https://github.com/iamvalson/email-digest",
    image:
      "https://media.licdn.com/dms/image/v2/D4D22AQH4DxyVNENx5Q/feedshare-shrink_1280/B4DZkxma_qJQAs-/0/1757473780446?e=1792627200&v=beta&t=kZG3MQTpWWrLnNNiTPMzMS-Nfo7XfDnON6My1wqzVUM",
  },
];
