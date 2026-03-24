import Button from "@/components/ui/Button";

interface ProfileCardProps {
  index: string;       // "01", "02", "03"
  headline: string;
  description: string;
  signals: string[];   // señales de identificación ("Si piensas esto...")
  cta: { label: string; href: string };
}

export default function ProfileCard({
  index,
  headline,
  description,
  signals,
  cta,
}: ProfileCardProps) {
  return (
    <div className="card flex flex-col gap-6">
      <div>
        <span className="font-body text-xs font-semibold tracking-widest text-r-muted/50">
          {index}
        </span>
        <h3 className="mt-2 font-display text-display-sm text-r-dark">
          {headline}
        </h3>
        <p className="mt-3 text-[1.0625rem] leading-relaxed text-r-muted">
          {description}
        </p>
      </div>

      {signals.length > 0 && (
        <ul className="space-y-2" role="list">
          {signals.map((signal) => (
            <li key={signal} className="flex items-start gap-3 text-sm text-r-dark/75">
              <span className="mt-1 block h-1.5 w-1.5 shrink-0 rounded-full bg-r-green" />
              {signal}
            </li>
          ))}
        </ul>
      )}

      <div className="mt-auto pt-2">
        <Button href={cta.href} variant="ghost">
          {cta.label} →
        </Button>
      </div>
    </div>
  );
}
