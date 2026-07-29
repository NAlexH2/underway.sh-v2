import { useEffect, useState, type CSSProperties } from "react";
import { Link, useLocation } from "react-router-dom";
import headshot from "@images/hs2-small.jpg";
import { SITE, type Job, type Project, type WriteupBlock } from "./profileData";
import "./Profile.css";

const getGreeting = (): string => {
  const h = new Date().getHours();
  if (h < 12) return "Good morning!";
  if (h < 16) return "Good afternoon!";
  return "Good evening!";
};

const toTop = () => window.scrollTo({ top: 0, behavior: "smooth" });
const toSection = (id: string) =>
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

const WriteupBlockView = ({ block }: { block: WriteupBlock }) => {
  if ("sub" in block) return <h4>{block.sub}</h4>;
  if ("list" in block)
    return (
      <ul className="body-list">
        {block.list.map((li, i) => (
          <li key={i} dangerouslySetInnerHTML={{ __html: li }} />
        ))}
      </ul>
    );
  return <p dangerouslySetInnerHTML={{ __html: block.p }} />;
};

const ExperienceItem = ({ job }: { job: Job }) => {
  const [open, setOpen] = useState(false);
  const sub = [job.subtitle, job.location].filter(Boolean).join(" · ");
  return (
    <div className={"proj-item" + (open ? " open" : "")}>
      <button
        type="button"
        className="proj-toggle"
        aria-expanded={open}
        onClick={() => setOpen((o) => !o)}
      >
        <span className="thead">
          <span className="tname">{job.title}</span>
          {sub && <span className="tsub">{sub}</span>}
        </span>
        <span className="tspacer" />
        <span className="tdate">{job.dates}</span>
        <span className="caret" aria-hidden="true" />
      </button>
      <div className="proj-panel">
        <div className="panel-inner">
          <div className="panel-pad">
            <ul className="body-list">
              {job.bullets.map((b, i) => (
                <li key={i} dangerouslySetInnerHTML={{ __html: b }} />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

const ProjectItem = ({ project }: { project: Project }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className={"proj-item" + (open ? " open" : "")}>
      <button
        type="button"
        className="proj-toggle"
        aria-expanded={open}
        onClick={() => setOpen((o) => !o)}
      >
        <span className="tname">{project.title}</span>
        {project.featured && <span className="featured-pip">Featured</span>}
        <span className="tspacer" />
        <span className="tdate">{project.dates}</span>
        <span className="caret" aria-hidden="true" />
      </button>
      <div className="proj-panel">
        <div className="panel-inner">
          <div className="panel-pad">
            {project.url && (
              <a
                className="repo-link"
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                View repository ↗
              </a>
            )}
            {project.stack && (
              <ul className="chips">
                {project.stack.map((s, i) => (
                  <li key={i}>{s}</li>
                ))}
              </ul>
            )}
            {project.writeup?.map((block, i) => (
              <WriteupBlockView key={i} block={block} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export const Profile = () => {
  const location = useLocation();
  const [showTop, setShowTop] = useState(false);
  const greeting = getGreeting();

  // React Router drives which section we land on: "/" -> top (Bio),
  // "/experience" and "/projects" -> scroll to that section.
  useEffect(() => {
    const path = location.pathname;
    if (path.includes("experience")) toSection("experience");
    else if (path.includes("projects")) toSection("projects");
    else toTop();
  }, [location.pathname]);

  // Reveal the back-to-top button once the reader has scrolled down.
  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 400);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const outroPhrase = "please visit my projects section";
  const [outroPre, outroPost] = SITE.beforeOutro.split(outroPhrase);

  return (
    <div className="uw">
      <header className="masthead">
        <div className="masthead-inner">
          <Link to="/" className="wordmark" onClick={toTop}>
            <span className="rose" aria-hidden="true" />
            <span>{SITE.wordmark}</span>
          </Link>
          <nav className="nav">
            <Link to="/" onClick={toTop}>
              Bio
            </Link>
            <Link to="/experience/" onClick={() => toSection("experience")}>
              Experience
            </Link>
            <Link to="/projects/" onClick={() => toSection("projects")}>
              Projects
            </Link>
          </nav>
        </div>
      </header>

      <main className="wrap">
        <section id="bio">
          <div className="bio-head">
            <div
              className="avatar"
              style={{ "--headshot": `url(${headshot})` } as CSSProperties}
              aria-hidden="true"
            />
            <h1>{greeting}</h1>
          </div>
          <div className="logline">
            {SITE.bio.map((p, i) => (
              <p key={i} dangerouslySetInnerHTML={{ __html: p }} />
            ))}
          </div>
        </section>

        <hr className="rope-divider" />

        <section id="present">
          <p className="stage-head">Present</p>
          {SITE.present.map((p, i) => (
            <p key={i} dangerouslySetInnerHTML={{ __html: p }} />
          ))}
        </section>

        <hr className="wave-divider" />

        <section id="before">
          <p className="stage-head">Before</p>
          {SITE.before.map((p, i) => (
            <p key={i} dangerouslySetInnerHTML={{ __html: p }} />
          ))}
          <p className="outro-line">
            {outroPre}
            <Link to="/projects/" onClick={() => toSection("projects")}>
              {outroPhrase}
            </Link>
            {outroPost}
          </p>
        </section>

        <hr className="rope-divider" />

        <section id="experience">
          <p className="kicker">Charted Waters</p>
          <h2>Experience</h2>
          <p className="proj-hint">Select a role to read the details.</p>
          <div className="exp-list">
            {SITE.experience.map((job, i) => (
              <ExperienceItem key={i} job={job} />
            ))}
          </div>
        </section>

        <hr className="wave-divider" />

        <section id="projects">
          <p className="kicker">Deck Log</p>
          <h2>Projects</h2>
          <p className="proj-hint">Select a passage to read its full log.</p>
          <div className="projects-list">
            {SITE.projects.map((project, i) => (
              <ProjectItem key={i} project={project} />
            ))}
          </div>
        </section>

        <footer>
          <div className="compass" aria-hidden="true" />
          <div className="foot-links">
            <a href={SITE.footer.github} target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
            <a href={SITE.footer.linkedin} target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
          </div>
        </footer>
      </main>

      <button
        type="button"
        className={"to-top" + (showTop ? " show" : "")}
        aria-label="Back to top"
        title="Back to top"
        onClick={toTop}
      >
        <span className="to-top-arrow" aria-hidden="true" />
      </button>
    </div>
  );
};

export default Profile;
