import Link from "next/link";

type Variant = "primary" | "secondary" | "ghost";

interface ButtonProps {
  href?: string;
  onClick?: () => void;
  children: React.ReactNode;
  variant?: Variant;
  className?: string;
  external?: boolean;
}

const variants: Record<Variant, string> = {
  primary:
    "inline-flex items-center gap-2 bg-r-green text-r-white px-7 py-3.5 text-sm font-semibold font-body tracking-wide no-underline hover:bg-r-green-2 transition-colors duration-200",
  secondary:
    "inline-flex items-center gap-2 border border-r-green text-r-green px-7 py-3.5 text-sm font-semibold font-body tracking-wide no-underline hover:bg-r-green hover:text-r-white transition-colors duration-200",
  ghost:
    "inline-flex items-center gap-2 text-r-green text-sm font-semibold font-body tracking-wide no-underline hover:text-r-green-2 transition-colors duration-200 underline underline-offset-4",
};

export default function Button({
  href,
  onClick,
  children,
  variant = "primary",
  className = "",
  external = false,
}: ButtonProps) {
  const cls = `${variants[variant]} ${className}`;

  if (href) {
    return (
      <Link
        href={href}
        className={cls}
        {...(external
          ? { target: "_blank", rel: "noopener noreferrer" }
          : {})}
      >
        {children}
      </Link>
    );
  }

  return (
    <button className={cls} onClick={onClick}>
      {children}
    </button>
  );
}
