import s from "./QueriumV4.module.css";
import {
  NAME,
  TAGLINE,
  EMAIL_NOTE_LEAD,
  EMAIL_NOTE_BODY,
  MANIFEST,
  PROSE,
  PRINCIPLES,
  seal,
} from "./content";

/*
 * 04 · quiet — Swiss / editorial minimalism.
 * Restraint as the statement: off-white paper, near-black ink, one rose accent
 * used once or twice. Wide left margin, narrow measure, tiny mono labels.
 * Typography and grid discipline carry everything; nothing floats or glows.
 */
export default function QueriumV4() {
  return (
    <div className={s.root}>
      <div className={s.grid}>
        <header className={s.header}>
          <p className={s.label}>identity</p>
          <h1 className={s.name}>{NAME}</h1>
          <p className={s.tagline}>{TAGLINE}</p>
        </header>

        <aside className={s.note} aria-label="Correspondence notice">
          <p className={s.noteLabel}>note</p>
          <p className={s.noteLead}>{EMAIL_NOTE_LEAD}</p>
          <p className={s.noteBody}>{EMAIL_NOTE_BODY}</p>
        </aside>

        <section className={s.block}>
          <p className={s.label}>manifest</p>
          <dl className={s.manifest}>
            {MANIFEST.map(([key, value]) => (
              <div className={s.row} key={key}>
                <dt className={s.term}>{key}</dt>
                <dd className={s.desc}>{value}</dd>
              </div>
            ))}
          </dl>
        </section>

        <section className={s.block}>
          <p className={s.label}>who I am</p>
          <div className={s.prose}>
            {PROSE.map((para, i) => (
              <p className={s.paragraph} key={i}>
                {para}
              </p>
            ))}
          </div>
        </section>

        <section className={s.block}>
          <p className={s.label}>principles</p>
          <ol className={s.principles}>
            {PRINCIPLES.map((p, i) => (
              <li className={s.principle} key={p.title}>
                <span className={s.numeral} aria-hidden="true">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className={s.principleText}>
                  <h2 className={s.principleTitle}>{p.title}</h2>
                  <p className={s.principleBody}>{p.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        <footer className={s.footer}>
          <img
            className={s.seal}
            src={seal}
            alt="Querium's mark: a rose wax seal"
            width={40}
            height={40}
          />
          <nav className={s.links}>
            <a className={s.link} href="https://underway.sh">
              ← underway.sh
            </a>
            <a className={s.link} href="https://alex.underway.sh">
              Alex Harris →
            </a>
          </nav>
        </footer>
      </div>
    </div>
  );
}
