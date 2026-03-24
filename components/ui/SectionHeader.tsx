interface SectionHeaderProps {
  tag?: string;        // etiqueta pequeña sobre el título
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;     // versión sobre fondo oscuro
}

export default function SectionHeader({
  tag,
  title,
  subtitle,
  centered = false,
  light = false,
}: SectionHeaderProps) {
  return (
    <div className={centered ? "text-center" : ""}>
      {tag && (
        <p
          className={[
            "label-tag mb-3 block",
            light ? "text-r-warm/60" : "text-r-muted",
          ].join(" ")}
        >
          {tag}
        </p>
      )}
      <h2
        className={[
          "font-display text-display-lg",
          light ? "text-r-white" : "text-r-dark",
        ].join(" ")}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={[
            "mt-4 max-w-2xl text-lg leading-relaxed",
            centered ? "mx-auto" : "",
            light ? "text-r-warm/75" : "text-r-muted",
          ].join(" ")}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
