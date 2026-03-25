import type { Metadata } from "next";
import Link from "next/link";
import { SITE_URL } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "Herramientas gratuitas | Rentabilismo",
  description:
    "Tres herramientas gratuitas basadas en el Método 5P: diagnóstico empresarial, avatar de cliente ideal y validador de ideas.",
  alternates: { canonical: `${SITE_URL}/herramientas` },
};

const TOOLS = [
  {
    num:          "01",
    name:         "Diagnóstico Empresarial",
    domain:       "rentabilismo.online",
    externalHref: "https://rentabilismo.online",
    href:         "/herramientas/diagnostico",
    tag:          "Diagnóstico · Gratis",
    que:          "Cuestionario guiado de 15 minutos que analiza tu negocio en las cinco palancas del Método 5P e identifica cuál está limitando tu rentabilidad ahora mismo.",
    pain:         "Trabajo mucho pero el negocio no mejora. No sé exactamente qué está fallando ni qué corregir primero.",
    obtienes:     ["Puntuación por palanca", "Palanca prioritaria identificada", "Tres acciones concretas"],
  },
  {
    num:          "02",
    name:         "Avatar de Cliente Ideal",
    domain:       "avatar-rentabilismo.com",
    externalHref: "https://avatar-rentabilismo.com",
    href:         "/herramientas/conoce-a-tu-cliente",
    tag:          "Cliente ideal · Gratis",
    que:          "Proceso guiado para construir el perfil detallado de tu cliente ideal: quién es, qué le duele, qué le frena y cómo decide. Listo para usar en comunicación y ventas.",
    pain:         "Me dirijo a todo el mundo y al final no convenzo a nadie. Mi comunicación no conecta.",
    obtienes:     ["Ficha completa del avatar", "Mapa de dolores y objeciones", "Canales y mensajes sugeridos"],
  },
  {
    num:          "03",
    name:         "Validador de Ideas",
    domain:       "idea-rentabilismo.com",
    externalHref: "https://idea-rentabilismo.com",
    href:         "/herramientas/valida-tu-idea",
    tag:          "Validación · Gratis",
    que:          "Framework de cinco dimensiones para comprobar si una idea de negocio tiene las condiciones mínimas de viabilidad antes de invertir tiempo y dinero en ella.",
    pain:         "He lanzado cosas antes que no funcionaron. No quiero repetir el error.",
    obtienes:     ["Puntuación de viabilidad", "Puntos débiles identificados", "Hipótesis que validar antes de avanzar"],
  },
];

export default function HerramientasPage() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section className="bg-r-dark py-20 sm:py-24 md:py-32">
        <div className="container-content">
          <p className="label-tag mb-4 text-r-warm/50">Ecosistema Rentabilismo · Gratis</p>
          <h1 className="font-display text-display-xl text-r-white">
            Tres herramientas para diagnosticar, conocer a tu cliente y validar ideas
          </h1>
          <p className="mt-5 text-lg text-r-warm/70 leading-relaxed">
            Basadas en el Método 5P. Sin registro complicado. Resultado inmediato.
          </p>
        </div>
      </section>

      {/* ── LAS 3 HERRAMIENTAS ────────────────────────────────────────────── */}
      <section className="section bg-r-cream">
        <div className="container-content">
          <div className="grid gap-8 md:grid-cols-3">
            {TOOLS.map((tool) => (
              <div key={tool.num} className="card-accent flex flex-col gap-5">

                {/* cabecera */}
                <div className="flex items-start justify-between gap-2">
                  <span className="text-xs font-semibold tracking-widest text-r-muted/50">{tool.num}</span>
                  <span className="label-tag text-r-green">{tool.tag}</span>
                </div>

                {/* nombre */}
                <h2 className="font-display text-display-sm text-r-dark">
                  {tool.name}
                </h2>

                {/* dolor */}
                <p className="border-l-2 border-r-lime pl-3 text-sm italic text-r-muted leading-relaxed">
                  &ldquo;{tool.pain}&rdquo;
                </p>

                {/* qué es */}
                <p className="text-sm text-r-dark/80 leading-relaxed">
                  {tool.que}
                </p>

                {/* obtienes */}
                <ul className="space-y-1.5">
                  {tool.obtienes.map((o) => (
                    <li key={o} className="flex items-start gap-2 text-xs text-r-dark/70">
                      <span className="mt-[3px] h-1.5 w-1.5 shrink-0 rounded-full bg-r-lime" />
                      {o}
                    </li>
                  ))}
                </ul>

                {/* CTAs */}
                <div className="mt-auto flex flex-col gap-2.5 pt-2">
                  <a
                    href={tool.externalHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 bg-r-green px-5 py-2.5 text-sm font-semibold text-r-white no-underline hover:bg-r-green-2 transition-colors"
                  >
                    Acceder a {tool.domain} ↗
                  </a>
                  <Link
                    href={tool.href}
                    className="text-center text-xs text-r-muted no-underline hover:text-r-dark transition-colors"
                  >
                    Cómo funciona →
                  </Link>
                </div>

              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── EL ECOSISTEMA ────────────────────────────────────────────────── */}
      <section className="section bg-r-white">
        <div className="container-content">
          <p className="label-tag mb-4">El ecosistema completo</p>
          <h2 className="font-display text-display-md text-r-dark mb-2">
            Para ir más lejos
          </h2>
          <p className="text-r-muted mb-10">
            Las herramientas gratuitas son el punto de entrada. El ecosistema
            incluye plataforma guiada, contenidos de fondo y consultoría directa.
          </p>
          <div className="space-y-3">
            {[
              { label: "Plataforma SaaS",      sub: "rentabilismo.com",     href: "/plataforma",    desc: "Aplica el Método 5P con módulos guiados y seguimiento real." },
              { label: "Blog y contenidos",    sub: "focorentabilismo.com", href: "/blog-recursos", desc: "Artículos y casos prácticos sobre rentabilidad empresarial." },
              { label: "Consultoría presencial", sub: "consultoriametodo.es", href: "/consultoria",   desc: "Trabajo directo en A Coruña. Con tus números reales." },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="flex items-center justify-between gap-4 border border-r-border p-4 no-underline hover:border-r-green transition-colors group"
              >
                <div>
                  <p className="font-medium text-r-dark group-hover:text-r-green transition-colors">{item.label}</p>
                  <p className="text-xs text-r-green mt-0.5">{item.sub}</p>
                  <p className="text-xs text-r-muted mt-1">{item.desc}</p>
                </div>
                <span className="shrink-0 text-r-muted/40 group-hover:text-r-green transition-colors">→</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
