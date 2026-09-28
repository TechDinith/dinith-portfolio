import { documents, site } from "@/lib/site";
import DocumentCard, { type DocumentItem } from "@/app/components/DocumentCard";
import MobileNav from "@/app/components/MobileNav";

const projects = [
  {
    number: "01",
    name: "ApplyForm",
    type: "Multi-Tenant CRM",
    description:
      "A student recruitment CRM for education agencies, consultants, and institutions. Worked across the full application pipeline, lead management, automated workflows, agent and counsellor management, and real-time analytics dashboards.",
    stack: ["React.js", "Spring Boot", "AWS"],
    href: "https://applyform.io",
    linkLabel: "Live product",
  },
  {
    number: "02",
    name: "Counselify.ai",
    type: "AI Product",
    description:
      "An AI-powered CV analysis product that analyses student CVs and professional profiles to generate career and academic positioning insights and study-abroad pathway recommendations.",
    stack: ["React.js", "Spring Boot", "OpenAI", "Anthropic"],
    href: "https://counselify.ai",
    linkLabel: "Live product",
  },
  {
    number: "03",
    name: "Student Portal",
    type: "Self-Service Web Application",
    description:
      "A self-service portal enabling students to track visa application progress, upload and manage documents, schedule consultations, and monitor case status in real time. The React.js frontend is built on the Elstar React admin template with Tailwind CSS, on top of a multi-tenant Spring Boot back end with AWS S3 document storage and MySQL/MongoDB persistence.",
    stack: [
      "React.js",
      "Elstar Admin",
      "Tailwind CSS",
      "Spring Boot",
      "AWS S3",
      "MySQL",
      "MongoDB",
    ],
    href: "https://portal.thestudentsvisa.com",
    linkLabel: "Live product",
  },
  {
    number: "04",
    name: "Counsellor Portal",
    type: "Internal Operations Portal",
    description:
      "An internal operations portal for licensed counsellors to manage student pipelines, track applications, schedule appointments, generate leads and view revenue analytics. Built with React.js, integrating with the student portal and a multi-tenant Spring Boot back end with AWS S3 document storage and MySQL/MongoDB persistence.",
    stack: ["React.js", "Spring Boot", "AWS S3", "MySQL", "MongoDB"],
    href: "https://counsellor.thestudentsvisa.com",
    linkLabel: "Live product",
  },
  {
    number: "05",
    name: "iTrans",
    type: "Web Studio Landing Page",
    description:
      "A marketing site for a web development studio, presenting landing-page, full-stack, and Firebase-powered service offerings for startups and small businesses.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS"],
    href: "https://itrans.vercel.app",
    repo: "https://github.com/TechDinith/i-trans",
    linkLabel: "Live product",
  },
  {
    number: "06",
    name: "IdeaCloud",
    type: "Web Application",
    description:
      "A React-based application built around idea sharing, using a modern Vite and shadcn/ui component stack with Firebase for data and authentication.",
    stack: ["React.js", "Vite", "Tailwind CSS", "shadcn/ui", "Firebase"],
    href: "https://ideacloud-itrans.vercel.app",
    repo: "https://github.com/TechDinith/ideacloud",
    linkLabel: "Live product",
  },
];

const experience = [
  {
    period: "Jul 2025 — Present",
    role: "Senior Software Engineer",
    company: "The Students Visa",
    points: [
      "Architected and maintain the multi-tenant platform infrastructure powering ApplyForm.io.",
      "Engineered Counselify.ai, an AI product for CV analysis and study-abroad pathway recommendations.",
      "Design scalable systems with React.js, Spring Boot and Redux; maintain systems on Kubernetes and AWS Lambda, ECR and S3.",
    ],
  },
  {
    period: "Jul 2024 — Jul 2025",
    role: "Software Engineer",
    company: "The Students Visa",
    points: [
      "Built and maintained full-stack features across the platform portals using React.js, Spring Boot, Tailwind CSS, Redux, MySQL and MongoDB.",
      "Integrated OpenAI APIs into the AI Counselling Assistant to automate early-stage student enquiries.",
    ],
  },
  {
    period: "Sep 2023 — Jul 2024",
    role: "Associate Software Engineer",
    company: "The Students Visa",
    points: [
      "Owned frontend modules spanning lead tracking, application management, document handling and operational dashboards.",
      "Delivered features with React.js, Tailwind CSS and Axios across multiple platform modules.",
    ],
  },
  {
    period: "Apr 2023 — Sep 2023",
    role: "Software Engineer Intern",
    company: "The Students Visa",
    points: [
      "Contributed React.js UI components, REST API integrations and Swagger-documented endpoints.",
    ],
  },
  {
    period: "Apr 2021 — Nov 2021",
    role: "Software Engineer Intern",
    company: "CabbageApps (Pvt) Ltd",
    points: [
      "Built React.js components and Nest.js REST APIs across multiple client projects in an Agile team.",
      "Managed state with Redux-Saga and wrote unit/integration tests with Jest.",
    ],
  },
];

type SkillGroup = {
  group: string;
  skills: string[];
  primary?: string[];
  primaryLabels?: Record<string, string>;
};

const skillGroups: SkillGroup[] = [
  {
    group: "Frontend",
    skills: [
      "React.js",
      "Next.js",
      "GatsbyJS",
      "React Native",
      "Redux",
      "Redux-Saga",
      "Redux-Thunk",
      "Axios",
    ],
    primary: ["React.js"],
    primaryLabels: { "React.js": "Primary frontend framework" },
  },
  {
    group: "Styling & UI",
    skills: ["Tailwind CSS", "Ant Design", "Material UI (MUI)", "Sass", "Elstar"],
    primary: ["Tailwind CSS"],
    primaryLabels: { "Tailwind CSS": "Primary styling tool" },
  },
  {
    group: "Backend",
    skills: ["Spring Boot", "NestJS", "ExpressJS", "Node.js", "REST APIs", "Swagger UI"],
    primary: ["Spring Boot"],
    primaryLabels: { "Spring Boot": "Primary backend framework" },
  },
  {
    group: "Cloud & DevOps",
    skills: [
      "AWS Amplify",
      "AWS App Runner",
      "AWS S3",
      "AWS Lambda",
      "AWS ECR",
      "AWS SQS",
      "AWS CodePipeline",
      "Git",
      "GitHub",
      "Bitbucket",
      "Docker (basics)",
      "Kubernetes (basics)",
    ],
  },
  {
    group: "Databases",
    skills: ["MySQL", "MongoDB"],
  },
  {
    group: "AI & Agents",
    skills: ["OpenAI", "Anthropic", "Claude Code", "OpenCode"],
  },
  {
    group: "Languages & Tools",
    skills: [
      "Python",
      "JavaScript",
      "TypeScript",
      "Java",
      "C#",
      "C",
      "C++",
      "PHP",
      "Firebase",
      "Jest",
      "Jira",
      "Slack",
    ],
  },
];

const languages = [
  { label: "Sinhala", level: "Native" },
  { label: "English", level: "Professional" },
];

function Arrow() {
  return <span aria-hidden="true">↗</span>;
}

export default function Home() {
  const docs = documents as readonly DocumentItem[];

  return (
    <main>
      <a className="skip-link" href="#main">
        Skip to content
      </a>

      <header className="nav-wrap">
        <nav className="nav container" aria-label="Main navigation">
          <a className="brand" href="#top" aria-label="Dinith Rukantha — back to top">
            <span className="brand-mark" aria-hidden="true">
              DR
            </span>
            <span>Dinith Rukantha</span>
          </a>
          <div className="nav-links">
            <a href="#work">Work</a>
            <a href="#experience">Experience</a>
            <a href="#skills">Stack</a>
            <a href="#resume">Résumé</a>
            <a href="#contact">Contact</a>
          </div>
          <a
            className="nav-cta"
            href="/Dinith_Rukantha_CV.pdf"
            download="Dinith_Rukantha_CV.pdf"
          >
            Download CV (PDF) <Arrow />
          </a>
          <MobileNav />
        </nav>
      </header>

      <div id="main">
        <section id="top" className="hero container">
          <div className="hero-copy">
            <p className="eyebrow">
              <span className="status-dot" aria-hidden="true" /> Full Stack
              Engineer · {site.location}
            </p>
            <h1>
              I build software that <em>scales</em> from idea to production.
            </h1>
            <p className="hero-text">
              Full Stack Engineer focused on React.js, Spring Boot, AWS,
              multi-tenant systems and AI-powered products. I enjoy taking
              ownership from architecture through production.
            </p>
            <div className="hero-actions">
              <a className="button primary" href="#work">
                View selected work <Arrow />
              </a>
              <a className="button secondary" href="#resume">
                Download CV &amp; cover letter
              </a>
              <a className="button secondary" href={`mailto:${site.email}`}>
                Get in touch
              </a>
            </div>
            <div className="proof-row" aria-label="Career highlights">
              <div>
                <strong>4 years</strong>
                <span>building software</span>
              </div>
              <div>
                <strong>React</strong>
                <span>Spring Boot · AWS</span>
              </div>
              <div>
                <strong>Cloud + AI</strong>
                <span>production-focused work</span>
              </div>
            </div>
          </div>
          <div className="hero-card" aria-label="Engineering focus">
            <div className="terminal-top">
              <span aria-hidden="true" />
              <span aria-hidden="true" />
              <span aria-hidden="true" />
              <b>focus.ts</b>
            </div>
            <div className="code">
              <p>
                <span className="muted">01</span>{" "}
                <span className="keyword">const</span> engineer = {"{"}
              </p>
              <p>
                <span className="muted">02</span> &nbsp; role:{" "}
                <span className="string">&quot;full-stack&quot;</span>,
              </p>
              <p>
                <span className="muted">03</span> &nbsp; frontend:{" "}
                <span className="string">&quot;React.js&quot;</span>,
              </p>
              <p>
                <span className="muted">04</span> &nbsp; backend:{" "}
                <span className="string">&quot;Spring Boot&quot;</span>,
              </p>
              <p>
                <span className="muted">05</span> &nbsp; styling:{" "}
                <span className="string">&quot;Tailwind CSS&quot;</span>,
              </p>
              <p>
                <span className="muted">06</span> &nbsp; cloud:{" "}
                <span className="string">&quot;AWS&quot;</span>,
              </p>
              <p>
                <span className="muted">07</span> &nbsp; systems:{" "}
                <span className="string">&quot;multi-tenant&quot;</span>,
              </p>
              <p>
                <span className="muted">08</span> &nbsp; ai: [
                <span className="string">&quot;OpenAI&quot;</span>,{" "}
                <span className="string">&quot;Anthropic&quot;</span>]
              </p>
              <p>
                <span className="muted">09</span> &nbsp; agents: [
                <span className="string">&quot;Claude Code&quot;</span>,{" "}
                <span className="string">&quot;OpenCode&quot;</span>]
              </p>
              <p>
                <span className="muted">10</span> {"}"};
              </p>
              <p className="cursor-line">
                <span className="muted">11</span> <span className="cursor" />
              </p>
            </div>
          </div>
        </section>

        <section id="work" className="section container">
          <div className="section-heading">
            <div>
              <p className="kicker">Selected work</p>
              <h2>Products I&apos;ve helped build.</h2>
            </div>
            <p>
              Real products, not tutorial clones — from multi-tenant platforms
              to AI-powered applications and independent builds.
            </p>
          </div>
          <div className="project-grid">
            {projects.map((project) => (
              <article className="project-card" key={project.name}>
                <div className="project-top">
                  <span>{project.number}</span>
                  <span>{project.type}</span>
                </div>
                <h3>{project.name}</h3>
                <p>{project.description}</p>
                <ul className="tags">
                  {project.stack.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <div className="project-links">
                  <a
                    href={project.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {project.linkLabel} <Arrow />
                  </a>
                  {project.repo && (
                    <a
                      href={project.repo}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      GitHub <Arrow />
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="experience" className="section section-dark">
          <div className="container">
            <div className="section-heading light">
              <div>
                <p className="kicker">Experience</p>
                <h2>Growing through ownership.</h2>
              </div>
              <p>
                From internship to senior engineering, with increasing
                responsibility across frontend, backend, cloud and product
                delivery.
              </p>
            </div>
            <div className="timeline">
              {experience.map((item) => (
                <article
                  className="timeline-item"
                  key={`${item.role}-${item.period}`}
                >
                  <div className="timeline-period">{item.period}</div>
                  <div className="timeline-content">
                    <h3>{item.role}</h3>
                    <p className="company">{item.company}</p>
                    <ul>
                      {item.points.map((point) => (
                        <li key={point}>{point}</li>
                      ))}
                    </ul>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="skills" className="section container">
          <div className="section-heading">
            <div>
              <p className="kicker">Technical stack</p>
              <h2>Tools I work with.</h2>
            </div>
            <p>
              A broad engineering toolkit, with React.js, Spring Boot and AWS at
              the center of my professional work and Tailwind CSS as my primary
              styling tool.
            </p>
          </div>
          <div className="skills-grid">
            {skillGroups.map((group) => (
              <div className="skill-group" key={group.group}>
                <h3>{group.group}</h3>
                <ul className="tags">
                  {group.skills.map((skill) => {
                    const isPrimary = group.primary?.includes(skill);
                    const primaryLabel = group.primaryLabels?.[skill];
                    return (
                      <li
                        key={skill}
                        className={isPrimary ? "tag-primary" : undefined}
                        title={isPrimary ? primaryLabel || "Primary technology" : undefined}
                      >
                        {skill}
                        {isPrimary && <span className="tag-flag">primary</span>}
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section id="resume" className="section resume-band">
          <div className="container">
            <div className="section-heading">
              <div>
                <p className="kicker">Résumé</p>
                <h2>Take the details with you.</h2>
              </div>
              <p>
                Both documents are PDFs with selectable, ATS-readable text. Happy
                to send a cover letter tailored to a specific role on request.
              </p>
            </div>
            <div className="doc-grid">
              {docs.map((doc) => (
                <DocumentCard doc={doc} key={doc.key} />
              ))}
            </div>
          </div>
        </section>

        <section className="about-band">
          <div className="container about-grid">
            <div>
              <p className="kicker">A little more</p>
              <h2>Engineering with ownership, clarity and curiosity.</h2>
              <figure className="portrait">
                <picture>
                  <source
                    type="image/webp"
                    srcSet="/dinith-rukantha-480.webp 480w, /dinith-rukantha-960.webp 960w"
                    sizes="(max-width: 900px) 240px, 440px"
                  />
                  <img
                    src="/dinith-rukantha-960.jpg"
                    alt="Portrait of Dinith Rukantha, Full Stack Engineer at The Students Visa"
                    width={960}
                    height={960}
                    loading="lazy"
                    decoding="async"
                  />
                </picture>
                <figcaption>
                  <strong>{site.name}</strong>
                  <span>{site.tagline}</span>
                </figcaption>
              </figure>
            </div>
            <div className="about-copy">
              <p>
                I joined The Students Visa as a Software Engineer Intern and
                progressed to Senior Software Engineer. My work has covered
                frontend modules, full-stack features, scalable platform
                infrastructure, cloud operations and AI integrations.
              </p>
              <p>
                I hold a Bachelor of Information and Communication Technology,
                specializing in Software Technologies, from South Eastern
                University of Sri Lanka, graduating with Second Class (Upper
                Division).
              </p>
              <div className="education-line">
                <span>2016—2021</span>
                <strong>South Eastern University of Sri Lanka</strong>
                <small>
                  B.ICT · Software Technologies · Second Class (Upper Division)
                </small>
              </div>
              <div className="education-line">
                <span>2016</span>
                <strong>ESOFT Metro Campus</strong>
                <small>Diploma in Software Engineering</small>
              </div>
              <div className="lang-row">
                {languages.map((item) => (
                  <span key={item.label}>
                    {item.label} <small>{item.level}</small>
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="contact container">
          <p className="kicker">Let&apos;s talk</p>
          <h2>
            Have a product to build
            <br />
            or a team to strengthen?
          </h2>
          <p className="contact-copy">
            I&apos;m open to software engineering opportunities where I can
            contribute across the stack and take meaningful ownership.
          </p>
          <div className="contact-actions">
            <a className="button primary" href={`mailto:${site.email}`}>
              {site.email} <Arrow />
            </a>
            <a
              className="button secondary"
              href={site.linkedin}
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn <Arrow />
            </a>
            <a
              className="button secondary"
              href={site.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub <Arrow />
            </a>
            <a
              className="button secondary"
              href={`tel:${site.phoneHref}`}
            >
              {site.phone} <Arrow />
            </a>
          </div>
        </section>
      </div>

      <footer className="footer">
        <div className="container footer-inner">
          <span>
            © {new Date().getFullYear()} Dinith Rukantha
          </span>
          <span className="footer-links">
            <a href={`mailto:${site.email}`}>{site.email}</a>
            <a
              href={site.linkedin}
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
            <a
              href={site.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            <a href="/Dinith_Rukantha_CV.pdf" download="Dinith_Rukantha_CV.pdf">
              CV (PDF)
            </a>
            <a
              href="/Dinith_Rukantha_Cover_Letter.pdf"
              download="Dinith_Rukantha_Cover_Letter.pdf"
            >
              Cover Letter (PDF)
            </a>
          </span>
          <a className="footer-top" href="#top">
            Back to top ↑
          </a>
        </div>
      </footer>
    </main>
  );
}
