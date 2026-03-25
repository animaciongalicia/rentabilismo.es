import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/ui/Breadcrumb";
import { SITE_URL, TOOLS_FREE } from "@/lib/siteConfig";

const TOOL = TOOLS_FREE[0];
const OTHER_TOOLS = TOOLS_FREE.slice(1);

export const metadata: Metadata = {
  title: "Diagnóstico Empresarial — Identifica tu palanca bloqueada | Rentabilismo",
  description:
    "Herramienta gratuita para descubrir qué palanca del Método 5P limita la rentabilidad de tu negocio. Cuestionario guiado de 12 minutos. Informe inmediato.",
  alternates: { canonical: `${SITE_URL}/herramientas/diagnostico` },
  openGraph: {
    title: "Diagnóstico Empresarial — Identifica tu palanca bloqueada | Rentabilismo",
    description:
      "Herramienta gratuita para descubrir qué palanca del Método 5P limita la rentabilidad de tu negocio.",
    url: `${SITE_URL}/herramientas/diagnostico`,
  },
};

export default function DiagnosticoPage() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="bg-r-dark py-20 sm:py-24 md:py-32">
        <div className="container-prose">
          <Breadcrumb items={[
            { label: "Inicio", href: "/" },
            { label: "Herramientas", href: "/herramientas" },
            { label: "Diagnóstico Empresarial" },
          ]} />
          <p className="label-tag mb-4 text-r-warm/50">{TOOL.tag} · {TOOL.domain}</p>
          <h1 className="font-display text-display-xl text-r-white">
            Diagnóstico Empresarial
          </h1>
          <p className="mt-5 text-xl leading-relaxed text-r-warm/75">
            Saber qué está fallando es la mitad del trabajo. La otra mitad es saber en qué orden arreglarlo.
          </p>
          <div className="mt-8">
            <a
              href={TOOL.externalHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-r-lime px-7 py-3.5 text-sm font-semibold text-r-dark no-underline hover:bg-r-lime/90 transition-colors"
            >
              Hacer el diagnóstico gratis ↗
            </a>
          </div>
        </div>
      </section>

      {/* ── QUÉ ES ── */}
      <section className="section bg-r-white">
        <div className="container-prose">
          <h2 className="font-display text-display-md text-r-dark">
            Un análisis estructurado de las cinco palancas de tu negocio
          </h2>
          <p className="mt-5 text-r-dark/80 leading-relaxed">
            Cuestionario guiado que analiza tu negocio desde las cinco dimensiones del Método 5P.
            Identifica cuál está más bloqueada y cuál tiene mayor impacto potencial si se trabaja.
          </p>
          <ul className="mt-6 space-y-3">
            {[
              "Puntuación de tu negocio en las cinco palancas.",
              "Palanca prioritaria y patrón de bloqueo específico.",
              "Tres acciones concretas ordenadas por impacto.",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-r-lime" />
                <span className="text-r-dark/80">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── CÓMO FUNCIONA ── */}
      <section className="section bg-r-cream">
        <div className="container-prose">
          <p className="label-tag mb-6">El proceso</p>
          <div className="grid gap-5 sm:grid-cols-3">
            {[
              { num: "01", title: "Respondes", desc: "12-15 minutos. Preguntas directas sobre cómo funciona tu negocio ahora." },
              { num: "02", title: "El sistema analiza", desc: "Se cruzan tus respuestas con el modelo 5P y se puntúa cada palanca." },
              { num: "03", title: "Recibes el informe", desc: "Palanca prioritaria, señales de alerta y tres acciones concretas." },
            ].map((paso) => (
              <div key={paso.num} className="card">
                <p className="text-xs font-semibold tracking-widest text-r-muted/50 mb-3">{paso.num}</p>
                <h3 className="font-display text-display-sm text-r-dark mb-2">{paso.title}</h3>
                <p className="text-sm text-r-dark/75 leading-relaxed">{paso.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="section bg-r-green">
        <div className="container-prose">
          <h2 className="font-display text-display-md text-r-white mb-3">
            Menos de 15 minutos. Completamente gratuito.
          </h2>
          <p className="text-r-warm/70 mb-7">
            Sin registro. Sin compromiso. Solo un análisis honesto de en qué punto está tu negocio.
          </p>
          <a
            href={TOOL.externalHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-r-lime px-7 py-3.5 text-sm font-semibold text-r-dark no-underline hover:bg-r-lime/90 transition-colors"
          >
            Acceder a {TOOL.domain} ↗
          </a>
        </div>
      </section>

      {/* ── OTRAS HERRAMIENTAS ── */}
      <section className="section-sm bg-r-dark">
        <div className="container-prose">
          <p className="label-tag mb-4 text-r-warm/50">Otras herramientas gratuitas</p>
          <div className="grid grid-cols-1 gap-px border border-r-border-d bg-r-border-d sm:grid-cols-2">
            {OTHER_TOOLS.map((tool) => (
              <Link
                key={tool.href}
                href={tool.href}
                className="flex flex-col gap-1 bg-r-dark px-5 py-5 no-underline transition-colors hover:bg-r-green"
              >
                <span className="text-xs font-semibold tracking-widest text-r-warm/50">{tool.num} — {tool.domain}</span>
                <span className="font-body font-semibold text-r-white">{tool.name}</span>
                <span className="text-xs text-r-warm/50 mt-0.5">{tool.tagline}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
