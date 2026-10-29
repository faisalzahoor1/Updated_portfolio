import SplitText from "./SplitText";

export default function SectionHead({ eyebrow, title, lead }: { eyebrow: string; title: string; lead?: string }) {
  return (
    <header className="section__head">
      <span className="eyebrow" data-reveal="">{eyebrow}</span>
      <SplitText className="section__title" text={title} />
      {lead && <p className="section__lead" data-reveal="">{lead}</p>}
    </header>
  );
}
