import Link from "next/link";
import { NAV_LINKS, ECOSYSTEM_LINKS, SITE_NAME } from "@/lib/siteConfig";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-r-border bg-r-dark text-r-white">

      {/* Bloque principal */}
      <div className="container-site py-14 md:py-16">
        <div className="grid gap-12 md:grid-cols-3 md:gap-8 lg:gap-16">

          {/* Columna 1 – Identidad */}
          <div className="md:col-span-1">
            <Link
              href="/"
              className="font-display text-[1.25rem] font-semibold text-r-white no-underline hover:text-r-warm"
            >
              Rentabilismo<span className="text-r-lime" aria-hidden="true">.</span>
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-r-warm/70">
              El sistema práctico para construir negocios realmente rentables.
              Sin humo. Sin postureo. Solo método, claridad y acción real.
            </p>
          </div>

          {/* Columna 2 – Páginas */}
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-r-warm/50">
              Contenido
            </p>
            <ul className="space-y-2.5" role="list">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-r-warm/75 no-underline transition-colors hover:text-r-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Columna 3 – Ecosistema */}
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-r-warm/50">
              Ecosistema
            </p>
            <ul className="space-y-4" role="list">
              {ECOSYSTEM_LINKS.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="block text-sm font-medium text-r-warm/75 no-underline transition-colors hover:text-r-white"
                  >
                    {item.label}
                  </Link>
                  <p className="mt-0.5 text-xs text-r-warm/45">
                    {item.description}
                  </p>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>

      {/* Barra inferior */}
      <div className="border-t border-r-border-d">
        <div className="container-site flex flex-col items-start gap-3 py-5 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-r-warm/40">
            © {year} {SITE_NAME}. Todos los derechos reservados.
          </p>
          <div className="flex gap-5">
            <Link
              href="/aviso-legal"
              className="text-xs text-r-warm/40 no-underline hover:text-r-warm/70"
            >
              Aviso legal
            </Link>
            <Link
              href="/privacidad"
              className="text-xs text-r-warm/40 no-underline hover:text-r-warm/70"
            >
              Privacidad
            </Link>
          </div>
        </div>
      </div>

    </footer>
  );
}
