"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { NAV_LINKS } from "@/lib/siteConfig";

export default function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-r-border bg-r-cream">
      <div className="container-content">
        <nav className="flex h-16 items-center justify-between md:h-[4.75rem]">

          {/* Marca */}
          <Link
            href="/"
            className="font-display text-[1.3125rem] font-semibold tracking-tight text-r-dark no-underline hover:text-r-green"
            onClick={() => setOpen(false)}
          >
            Rentabilismo<span className="text-r-lime" aria-hidden="true">.</span>
          </Link>

          {/* Desktop nav */}
          <ul className="hidden items-center gap-6 md:flex" role="list">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={[
                    "font-body text-sm font-medium no-underline transition-colors duration-200",
                    pathname === link.href
                      ? "text-r-green"
                      : "text-r-muted hover:text-r-dark",
                  ].join(" ")}
                  aria-current={pathname === link.href ? "page" : undefined}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Hamburger – mobile */}
          <button
            className="flex h-9 w-9 flex-col items-center justify-center gap-[5px] md:hidden"
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span
              className={[
                "block h-[1.5px] w-5 bg-r-dark transition-all duration-200",
                open ? "translate-y-[6.5px] rotate-45" : "",
              ].join(" ")}
            />
            <span
              className={[
                "block h-[1.5px] w-5 bg-r-dark transition-all duration-200",
                open ? "opacity-0" : "",
              ].join(" ")}
            />
            <span
              className={[
                "block h-[1.5px] w-5 bg-r-dark transition-all duration-200",
                open ? "-translate-y-[6.5px] -rotate-45" : "",
              ].join(" ")}
            />
          </button>
        </nav>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-r-border bg-r-cream md:hidden">
          <ul className="container-content flex flex-col py-4" role="list">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={[
                    "block py-3 font-body text-base font-medium no-underline transition-colors duration-200",
                    pathname === link.href
                      ? "text-r-green"
                      : "text-r-dark hover:text-r-green",
                  ].join(" ")}
                  aria-current={pathname === link.href ? "page" : undefined}
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
