import { Fragment, type ElementType } from "react";

/**
 * Renders text as individually animated words.
 * Wrap a phrase in *asterisks* to give it the gradient accent.
 */
export default function SplitText({ text, as: Tag = "h2", className }: { text: string; as?: ElementType; className?: string }) {
  let i = 0;
  const words = (chunk: string) =>
    chunk.split(/\s+/).filter(Boolean).map((w, k, arr) => (
      <Fragment key={k}>
        <span className="word">
          <span style={{ "--i": i++ } as React.CSSProperties}>{w}</span>
        </span>
        {k < arr.length - 1 ? " " : null}
      </Fragment>
    ));

  const parts = text.split(/(\*[^*]+\*)/).filter(Boolean);
  return (
    <Tag className={className} data-split="">
      {parts.map((p, k) => {
        const lead = k > 0 && /^\s/.test(p) ? " " : "";
        const trail = k < parts.length - 1 && /\s$/.test(p) ? " " : "";
        return p.startsWith("*") ? (
          <em key={k}>{words(p.slice(1, -1))}</em>
        ) : (
          <Fragment key={k}>{lead}{words(p)}{trail}</Fragment>
        );
      })}
    </Tag>
  );
}
