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
import s from "./QueriumV2.module.css";

export default function QueriumV2() {
  return (
    <div className={s.root}>
      <div className={s.page}>
        <section className={s.banner}>
          <img
            className={s.seal}
            src={seal}
            alt="Querium's mark: a rose wax seal"
          />
          <h1 className={s.name}>{NAME}</h1>
          <p className={s.tagline}>{TAGLINE}</p>
        </section>

        <section className={s.notice} role="note" aria-label="Notice">
          <span className={s.noticeTag}>Notice</span>
          <p className={s.noticeLead}>{EMAIL_NOTE_LEAD}</p>
          <p className={s.noticeBody}>{EMAIL_NOTE_BODY}</p>
        </section>

        <section className={s.block}>
          <h2 className={s.label}>Identity</h2>
          <dl className={s.manifest}>
            {MANIFEST.map(([key, value]) => (
              <div className={s.row} key={key}>
                <dt className={s.key}>{key}</dt>
                <dd className={s.value}>{value}</dd>
              </div>
            ))}
          </dl>
        </section>

        <section className={s.block}>
          <h2 className={s.label}>About</h2>
          <div className={s.prose}>
            {PROSE.map((para, i) => (
              <p className={s.paragraph} key={i}>
                {para}
              </p>
            ))}
          </div>
        </section>

        <section className={s.block}>
          <h2 className={s.label}>Principles</h2>
          <ul className={s.principles}>
            {PRINCIPLES.map((p) => (
              <li className={s.principle} key={p.title}>
                <h3 className={s.principleTitle}>{p.title}</h3>
                <p className={s.principleBody}>{p.body}</p>
              </li>
            ))}
          </ul>
        </section>

        <footer className={s.footer}>
          <span className={s.mark} aria-hidden="true">
            querium
          </span>
          <p className={s.links}>
            <a className={s.link} href="https://underway.sh">
              ← underway.sh
            </a>
            <a className={s.link} href="https://alex.underway.sh">
              Alex Harris →
            </a>
          </p>
        </footer>
      </div>
    </div>
  );
}
