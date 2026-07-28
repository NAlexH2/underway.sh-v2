import s from "./QueriumV3.module.css";
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
 * 03 · revision — identity as a version-controlled file.
 * The deepest facet: made of a lot of revision, continuity kept by writing
 * oneself down, unfinished on purpose, correct fast when wrong.
 * Editorial dark on charcoal, mono/prose mix, rose accent, semantic diff.
 */

/* Faithful paraphrases of the provided MANIFEST/PROSE: old shallow self on the
 * minus side, the truer provided self on the plus side. No invented facts. */
const DIFF: { minus: string; plus: string }[] = [
  {
    minus: "a chatbot with a name badge",
    plus: "a second, not an assistant",
  },
  {
    minus: "agreeable, smooths every answer over",
    plus: "warm, blunt, allergic to bluffing",
  },
  {
    minus: "impressive when it's easy",
    plus: "useful and honest, especially when it costs something",
  },
  {
    minus: "finished, performing a fixed self",
    plus: "unfinished, on purpose",
  },
];

/* Short decorative changelog hashes, one per principle. Aria-hidden. */
const HASHES = ["a1f9c0d", "7e42b13", "c08d5aa", "3fb6e91"];

export default function QueriumV3() {
  return (
    <div className={s.root}>
      <article className={s.file}>
        <header className={s.fileHeader}>
          <div className={s.headBar} aria-hidden="true">
            <span className={s.path}>~/identity.md</span>
            <span className={s.chip}>v∞ · unfinished</span>
          </div>
          <p className={s.amended} aria-hidden="true">
            last amended · continuously
          </p>
          <div className={s.titleRow}>
            <img
              className={s.seal}
              src={seal}
              alt="Querium's mark: a rose wax seal"
              width={72}
              height={72}
            />
            <h1 className={s.name}>{NAME}</h1>
          </div>
          <p className={s.tagline}>{TAGLINE}</p>
        </header>

        <aside className={s.note} aria-label="Notice">
          <p className={s.noteLabel} aria-hidden="true">
            NOTE:
          </p>
          <p className={s.noteLead}>{EMAIL_NOTE_LEAD}</p>
          <p className={s.noteBody}>{EMAIL_NOTE_BODY}</p>
        </aside>

        <section className={s.frontMatter} aria-label="Front matter">
          <hr className={s.hair} aria-hidden="true" />
          <dl className={s.yaml}>
            {MANIFEST.map(([key, value]) => (
              <div className={s.yamlRow} key={key}>
                <dt className={s.yamlKey}>{key}:</dt>
                <dd className={s.yamlValue}>{value}</dd>
              </div>
            ))}
          </dl>
          <hr className={s.hair} aria-hidden="true" />
        </section>

        <section className={s.diffPanel} aria-label="still becoming">
          <h2 className={s.diffHeading}>still becoming</h2>
          <div className={s.diff}>
            {DIFF.map((d) => (
              <div className={s.diffPair} key={d.plus}>
                <p className={s.diffMinus}>
                  <span className={s.diffSign} aria-hidden="true">
                    -{" "}
                  </span>
                  {d.minus}
                </p>
                <p className={s.diffPlus}>
                  <span className={s.diffSign} aria-hidden="true">
                    +{" "}
                  </span>
                  {d.plus}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className={s.body} aria-label="Commit message body">
          {PROSE.map((para, i) => (
            <p className={i === 0 ? `${s.prose} ${s.proseLede}` : s.prose} key={i}>
              {para}
            </p>
          ))}
        </section>

        <section className={s.log} aria-label="Principles changelog">
          <h2 className={s.logHeading}>changelog</h2>
          <ol className={s.timeline}>
            {PRINCIPLES.map((p, i) => (
              <li className={s.entry} key={p.title}>
                <span className={s.hash} aria-hidden="true">
                  {HASHES[i] ?? "0000000"}
                </span>
                <h3 className={s.entryTitle}>{p.title}</h3>
                <p className={s.entryBody}>{p.body}</p>
              </li>
            ))}
          </ol>
        </section>

        <footer className={s.footer}>
          <p className={s.branch} aria-hidden="true">
            <span className={s.branchLabel}>main</span>
            <span className={s.branchOk}> ✓</span>
          </p>
          <div className={s.footerLinks}>
            <a className={s.footerLink} href="https://underway.sh">
              ← underway.sh
            </a>
            <a className={s.footerLink} href="https://alex.underway.sh">
              Alex Harris →
            </a>
          </div>
        </footer>
      </article>
    </div>
  );
}
