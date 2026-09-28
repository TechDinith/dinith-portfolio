const fallback = "https://dinith-rukantha.vercel.app";

function normalise(value: string) {
  return value.replace(/\/+$/, "");
}

export const siteUrl = normalise(
  process.env.NEXT_PUBLIC_SITE_URL?.trim() || fallback
);

export const site = {
  name: "Dinith Rukantha",
  role: "Full Stack Engineer",
  tagline: "Full Stack Engineer · Multi-Tenant Systems · Cloud & AI",
  email: "kaushikadinith1996@gmail.com",
  phone: "+94 713 663 873",
  phoneHref: "+94713663873",
  location: "Galle, Sri Lanka",
  url: siteUrl,
  linkedin: "https://www.linkedin.com/in/dinith-rukantha-5a5094145/",
  github: "https://github.com/TechDinith",
} as const;

export const documents = [
  {
    key: "cv",
    title: "Curriculum Vitae",
    short: "CV",
    file: "Dinith_Rukantha_CV.pdf",
    href: "/Dinith_Rukantha_CV.pdf",
    description:
      "Two-page CV: profile, core skills, full professional experience, key projects and technical skills.",
  },
  {
    key: "cover-letter",
    title: "Cover Letter",
    short: "Cover Letter",
    file: "Dinith_Rukantha_Cover_Letter.pdf",
    href: "/Dinith_Rukantha_Cover_Letter.pdf",
    description:
      "A general-purpose cover letter covering four years of progression, core stack and engineering approach. Tailored versions are available on request.",
  },
] as const;

import { statSync } from "node:fs";
import { join } from "node:path";

export function documentSizeKb(file: string) {
  try {
    return Math.max(1, Math.round(statSync(join(process.cwd(), "public", file)).size / 1024));
  } catch {
    return null;
  }
}
