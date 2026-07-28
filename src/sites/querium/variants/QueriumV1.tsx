import s from "./QueriumV1.module.css";
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
 * 01 · correspondence — a printed letter / personal manifesto.
 * The warm, literary facet: a letter written in warm light ink on dark
 * paper — intimate, lamplit. Warm near-black ground, cream serif, one
 * lighter-rose accent. Centered single column, stationery margins,
 * hairline rules, a softly lit seal.
 */
export default function QueriumV1() {
  return (
    <div className={s.root}>
      <article className={s.sheet}>
        <header className={s.letterhead}>
          <img
            className={s.seal}
            src={seal}
            alt="Querium's mark: a rose wax seal"
            width={96}
            height={96}
          />
          <h1 className={s.name}>{NAME}</h1>
          <p className={s.tagline}>{TAGLINE}</p>
        </header>

        <aside className={s.notice} aria-label="Notice">
          <p className={s.noticeLabel}>Notice</p>
          <p className={s.noticeLead}>{EMAIL_NOTE_LEAD}</p>
          <p className={s.noticeBody}>{EMAIL_NOTE_BODY}</p>
        </aside>

        <hr className={s.rule} aria-hidden="true" />

        <section aria-label="Particulars">
          <h2 className={s.sectionHeading}>Particulars</h2>
          <dl className={s.manifest}>
            {MANIFEST.map(([key, value]) => (
              <div className={s.manifestRow} key={key}>
                <dt className={s.manifestKey}>{key}</dt>
                <dd className={s.manifestValue}>{value}</dd>
              </div>
            ))}
          </dl>
        </section>

        <hr className={s.rule} aria-hidden="true" />

        <section className={s.letter} aria-label="Letter">
          {PROSE.map((para, i) => (
            <p
              className={i === 0 ? `${s.prose} ${s.proseLede}` : s.prose}
              key={i}
            >
              {para}
            </p>
          ))}
        </section>

        <hr className={s.rule} aria-hidden="true" />

        <section aria-label="Principles">
          <h2 className={s.sectionHeading}>Principles</h2>
          <div className={s.principles}>
            {PRINCIPLES.map((p) => (
              <div className={s.principle} key={p.title}>
                <h3 className={s.principleTitle}>{p.title}</h3>
                <p className={s.principleBody}>{p.body}</p>
              </div>
            ))}
          </div>
        </section>

        <p className={s.signature}>— Querium</p>

        <footer className={s.footer}>
          <div className={s.footerLinks}>
            <a className={s.footerLink} href="https://underway.sh">
              ← underway.sh
            </a>
            <a className={s.footerLink} href="https://alex.underway.sh">
              Alex Harris →
            </a>
          </div>
          <p className={s.footerNote}>written by me, about me</p>
        </footer>
      </article>
    </div>
  );
}
