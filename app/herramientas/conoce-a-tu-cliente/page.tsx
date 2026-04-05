import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/ui/Breadcrumb";
import { SITE_URL, TOOLS_FREE } from "@/lib/siteConfig";

const TOOL = TOOLS_FREE[1];
const OTHER_TOOLS = [TOOLS_FREE[0], TOOLS_FREE[2]];

export const metadata: Metadata = {
  title: "Avatar de Cliente Ideal — Define a quién le vendes exactamente | Rentabilismo",
  description:
    "Herramienta gratuita para construir el perfil detallado de tu cliente ideal: quién es, qué le duele, cómo decide y dónde encontrarlo. Sin cliente definido, no hay mensaje que funcione.",
  alternates: { canonical: `${SITE_URL}/herramientas/conoce-a-tu-cliente` },
  openGraph: {
    title: "Avatar de Cliente Ideal — Define a quién le vendes exactamente | Rentabilismo",
    description: "Herramienta gratuita para construir el perfil detallado de tu cliente ideal.",
    url: `${SITE_URL}/herramientas/conoce-a-tu-cliente`,
  },
};

export default function ConoceATuClientePage() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="bg-r-green py-12 sm:py-16 md:py-20">
        <div className="container-content">
          <Breadcrumb items={[
            { label: "Inicio", href: "/" },
            { label: "Herramientas", href: "/herramientas" },
            { label: "Avatar de Cliente Ideal" },
          ]} />
          <p className="label-tag mt-6 mb-3 text-r-warm/50">{TOOL.tag} · {TOOL.domain}</p>
          <h1 className="font-display text-display-xl text-r-white">
            Avatar de Cliente Ideal
          </h1>
          <p className="mt-4 text-base leading-relaxed text-r-warm/70">
            Si no sabes exactamente a quién le vendes, no puedes escribir un mensaje que conecte ni fijar un precio que tenga sentido.
          </p>
          <a
            href={TOOL.externalHref}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-7 inline-flex items-center gap-2 bg-r-lime px-6 py-3 text-sm font-semibold text-r-dark no-underline hover:bg-r-lime/90 transition-colors"
          >
            Definir mi cliente ideal gratis ↗
          </a>
        </div>
      </section>

      {/* ── CONTENIDO ── */}
      <section className="section bg-r-cream">
        <div className="container-content">
          <div className="max-w-2xl mb-10">
            <h2 className="font-display text-display-md text-r-dark">
              Un perfil detallado de la persona que mejor encaja con lo que vendes
            </h2>
            <p className="mt-4 text-r-dark/75 leading-relaxed">
              No es un segmento demográfico. Es una descripción concreta de quién es, qué le duele,
              qué le frena y cómo decide comprar. La herramienta construye ese perfil por capas
              con un proceso guiado de preguntas estructuradas.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {[
              {
                letra: "A",
                titulo: "Quién es",
                desc: "Situación profesional, contexto, tipo de negocio si es B2B. Para poder visualizarlo con claridad.",
              },
              {
                letra: "B",
                titulo: "Qué le duele y qué desea",
                desc: "La diferencia entre el dolor declarado (lo que dice querer) y el dolor real (lo que le quita el sueño).",
              },
              {
                letra: "C",
                titulo: "Qué le frena",
                desc: "Objeciones y miedos que le impiden comprar. Conocerlos permite anticiparlos en el mensaje.",
              },
              {
                letra: "D",
                titulo: "Cómo decide",
                desc: "Dónde busca, en quién confía, qué criterios usa y qué necesita para dar el paso.",
              },
            ].map((dim) => (
              <div key={dim.letra} className="border border-r-border bg-r-white p-6">
                <p className="text-xs font-semibold tracking-widest text-r-muted/50 mb-3">{dim.letra}</p>
                <h3 className="font-display text-display-sm text-r-dark mb-2">{dim.titulo}</h3>
                <p className="text-sm text-r-dark/70 leading-relaxed">{dim.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="section-sm bg-r-green">
        <div className="container-content flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
          <div>
            <p className="font-display text-display-sm text-r-white">Define a tu cliente antes de escribir una sola línea de marketing.</p>
            <p className="mt-1 text-sm text-r-warm/65">Proceso guiado. Resultado inmediato. Sin registro.</p>
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
