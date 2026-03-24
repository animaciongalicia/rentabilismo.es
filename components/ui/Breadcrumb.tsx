import Link from "next/link";
import { SITE_URL } from "@/lib/siteConfig";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

export default function Breadcrumb({ items }: { items: BreadcrumbItem[] }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.label,
      ...(item.href ? { item: `${SITE_URL}${item.href}` } : {}),
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <nav aria-label="Ruta de navegación" className="mb-5">
        <ol className="flex flex-wrap items-center gap-x-2 gap-y-1" role="list">
          {items.map((item, i) => (
            <li key={i} className="flex items-center gap-2">
              {i > 0 && (
                <span aria-hidden="true" className="text-r-warm/30 text-xs">›</span>
              )}
              {item.href ? (
                <Link
                  href={item.href}
                  className="text-xs text-r-warm/50 no-underline transition-colors hover:text-r-warm/80"
                >
                  {item.label}
                </Link>
              ) : (
                <span className="text-xs text-r-warm/70" aria-current="page">
                  {item.label}
                </span>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
}
