interface DictionaryCardProps {
  term: string;
  shortDef: string;
  definition: string;
  example?: string;
  relatedTerms?: string[];
}

export default function DictionaryCard({
  term,
  shortDef,
  definition,
  example,
  relatedTerms,
}: DictionaryCardProps) {
  return (
    <article className="border-t border-r-border pt-8 first:border-t-0 first:pt-0" id={term.toLowerCase().replace(/\s+/g, "-")}>
      <header className="mb-3 flex flex-col gap-1 sm:flex-row sm:items-baseline sm:gap-4">
        <h3 className="font-display text-display-sm text-r-dark">{term}</h3>
        <p className="text-sm text-r-muted">{shortDef}</p>
      </header>

      <p className="text-[1.0625rem] leading-relaxed text-r-dark/85">{definition}</p>

      {example && (
        <blockquote className="mt-4 border-l-2 border-r-green pl-4 text-sm italic text-r-muted">
          {example}
        </blockquote>
      )}

      {relatedTerms && relatedTerms.length > 0 && (
        <div className="mt-4 flex flex-wrap items-center gap-2">
          <span className="text-xs font-semibold uppercase tracking-widest text-r-muted/60">
            Relacionados:
          </span>
          {relatedTerms.map((t) => (
            <span
              key={t}
              className="border border-r-border px-2.5 py-0.5 text-xs font-medium text-r-muted"
            >
              {t}
            </span>
          ))}
        </div>
      )}
    </article>
  );
}
