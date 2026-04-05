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
    description: "Herramienta gratuita para descubrir qué palanca del Método 5P limita la rentabilidad de tu negocio.",
    url: `${SITE_URL}/herramientas/diagnostico`,
  },
};

export default function DiagnosticoPage() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="bg-r-green py-12 sm:py-16 md:py-20">
        <div className="container-content">
          <Breadcrumb items={[
            { label: "Inicio", href: "/" },
            { label: "Herramientas", href: "/herramientas" },
            { label: "Diagnóstico Empresarial" },
          ]} />
          <p className="label-tag mt-6 mb-3 text-r-warm/50">{TOOL.tag} · {TOOL.domain}</p>
          <h1 className="font-display text-display-xl text-r-white">
            Diagnóstico Empresarial
          </h1>
          <p className="mt-4 text-base leading-relaxed text-r-warm/70">
            Saber qué está fallando es la mitad del trabajo. La otra mitad es saber en qué orden arreglarlo.
          </p>
          <a
            href={TOOL.externalHref}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-7 inline-flex items-center gap-2 bg-r-lime px-6 py-3 text-sm font-semibold text-r-dark no-underline hover:bg-r-lime/90 transition-colors"
          >
            Hacer el diagnóstico gratis ↗
          </a>
        </div>
      </section>

      {/* ── CONTENIDO ── */}
      <section className="section bg-r-cream">
        <div className="container-content">
          <div className="max-w-2xl mb-10">
            <h2 className="font-display text-display-md text-r-dark">
              Un análisis estructurado de las cinco palancas de tu negocio
            </h2>
            <p className="mt-4 text-r-dark/75 leading-relaxed">
              Cuestionario guiado que analiza tu negocio desde las cinco dimensiones del Método 5P.
              Identifica cuál está más bloqueada y cuál tiene mayor impacto si se trabaja.
              El resultado no es genérico: es específico a tu situación, con acciones ordenadas por prioridad.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            {[
              { num: "01", title: "Respondes", desc: "12-15 minutos. Preguntas directas sobre cómo funciona tu negocio ahora. Cuanto más honesto, más útil el resultado." },
              { num: "02", title: "El sistema analiza", desc: "Tus respuestas se cruzan con el modelo 5P. Se puntúa cada palanca y se identifica el patrón de bloqueo." },
              { num: "03", title: "Recibes el informe", desc: "Palanca prioritaria, señales de alerta y tres acciones concretas ordenadas por impacto estimado." },
            ].map((paso) => (
              <div key={paso.num} className="border border-r-border bg-r-white p-6">
                <p className="text-xs font-semibold tracking-widest text-r-muted/50 mb-3">{paso.num}</p>
                <h3 className="font-display text-display-sm text-r-dark mb-2">{paso.title}</h3>
                <p className="text-sm text-r-dark/70 leading-relaxed">{paso.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="section-sm bg-r-green">
        <div className="container-content flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
          <div>
            <p className="font-display text-display-sm text-r-white">Menos de 15 minutos. Completamente gratuito.</p>
            <p className="mt-1 text-sm text-r-warm/65">Sin registro. Sin compromiso. Accede directamente.</p>
          </div>
          <a
            href={TOOL.externalHref}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 inline-flex items-center gap-2 bg-r-lime px-6 py-3 text-sm font-semibold text-r-dark no-underline hover:bg-r-lime/90 transition-colors"
          >
            Acceder a {TOOL.domain} ↗
          </a>
        </div>
      </section>

      {/* ── OTRAS HERRAMIENTAS ── */}
      <section className="section-sm bg-r-dark">
        <div className="container-content">
          <p className="label-tag mb-4 text-r-warm/50">Otras herramientas gratuitas</p>
          <div className="grid grid-cols-1 gap-px border border-r-border-d bg-r-border-d sm:grid-cols-2">
            {OTHER_TOOLS.map((tool) => (
              <Link
                key={tool.href}
                href={tool.href}
                className="flex flex-col gap-1 bg-r-dark px-5 py-4 no-underline transition-colors hover:bg-r-green"
              >
                <span className="text-xs font-semibold tracking-widest text-r-warm/45">{tool.num} — {tool.domain}</span>
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
