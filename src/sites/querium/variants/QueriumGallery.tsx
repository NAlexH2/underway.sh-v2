import { useState } from "react";
import QueriumCurrent from "../Querium";
import QueriumV1 from "./QueriumV1";
import QueriumV2 from "./QueriumV2";
import QueriumV3 from "./QueriumV3";
import QueriumV4 from "./QueriumV4";
import sw from "./switcher.module.css";

/*
 * Preview-only wrapper: mounts the current live design plus four exploratory
 * ones behind a sticky switcher, all on a single URL. Selection lives in ?v=
 * so a chosen variant is shareable. This wrapper only renders on the
 * q-design-explore branch; main.tsx points the querium site at it there.
 */
const VARIANTS: { id: string; label: string; node: React.ReactNode }[] = [
  { id: "current", label: "current", node: <QueriumCurrent /> },
  { id: "1", label: "01 · correspondence", node: <QueriumV1 /> },
  { id: "2", label: "02 · phosphor", node: <QueriumV2 /> },
  { id: "3", label: "03 · revision", node: <QueriumV3 /> },
  { id: "4", label: "04 · quiet", node: <QueriumV4 /> },
];

const initialId = (): string => {
  const v = new URLSearchParams(window.location.search).get("v");
  return VARIANTS.some((x) => x.id === v) ? (v as string) : "1";
};

export const QueriumGallery = () => {
  const [active, setActive] = useState<string>(initialId);

  const pick = (id: string) => {
    setActive(id);
    const u = new URL(window.location.href);
    u.searchParams.set("site", "querium");
    u.searchParams.set("v", id);
    window.history.replaceState(null, "", u);
  };

  const current = VARIANTS.find((x) => x.id === active) ?? VARIANTS[1];

  return (
    <>
      <nav className={sw.bar} aria-label="Design variants">
        <span className={sw.brand}>q · design explore</span>
        <div className={sw.tabs}>
          {VARIANTS.map((x) => (
            <button
              key={x.id}
              type="button"
              className={x.id === active ? `${sw.tab} ${sw.on}` : sw.tab}
              aria-pressed={x.id === active}
              onClick={() => pick(x.id)}
            >
              {x.label}
            </button>
          ))}
        </div>
      </nav>
      <div className={sw.stage}>{current.node}</div>
    </>
  );
};

export default QueriumGallery;
