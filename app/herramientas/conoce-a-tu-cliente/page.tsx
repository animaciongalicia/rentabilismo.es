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
    description:
      "Herramienta gratuita para construir el perfil detallado de tu cliente ideal.",
    url: `${SITE_URL}/herramientas/conoce-a-tu-cliente`,
  },
};

export default function ConoceATuClientePage() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="bg-r-dark py-20 sm:py-24 md:py-32">
        <div className="container-prose">
          <Breadcrumb items={[
            { label: "Inicio", href: "/" },
            { label: "Herramientas", href: "/herramientas" },
            { label: "Avatar de Cliente Ideal" },
          ]} />
          <p className="label-tag mb-4 text-r-warm/50">{TOOL.tag} · {TOOL.domain}</p>
          <h1 className="font-display text-display-xl text-r-white">
            Avatar de Cliente Ideal
          </h1>
          <p className="mt-5 text-xl leading-relaxed text-r-warm/75">
            Si no sabes exactamente a quién le vendes, no puedes escribir un mensaje que conecte ni fijar un precio que tenga sentido.
          </p>
          <div className="mt-8">
            <a
              href={TOOL.externalHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-r-lime px-7 py-3.5 text-sm font-semibold text-r-dark no-underline hover:bg-r-lime/90 transition-colors"
            >
              Definir mi cliente ideal gratis ↗
            </a>
          </div>
        </div>
      </section>

      {/* ── QUÉ ES ── */}
      <section className="section bg-r-white">
        <div className="container-prose">
          <h2 className="font-display text-display-md text-r-dark">
            Un perfil detallado de la persona que mejor encaja con lo que vendes
          </h2>
          <p className="mt-5 text-r-dark/80 leading-relaxed">
            No es un segmento demográfico. Es una descripción concreta de quién es, qué le duele,
            qué le frena y cómo decide comprar. La herramienta te guía por el proceso por capas.
          </p>
        </div>
      </section>

      {/* ── LAS 4 DIMENSIONES ── */}
      <section className="section bg-r-cream">
        <div className="container-prose">
          <p className="label-tag mb-6">Las cuatro dimensiones</p>
          <div className="grid gap-5 sm:grid-cols-2">
            {[
              {
                letra: "A",
                titulo: "Quién es",
                desc: "Datos observables: situación profesional, contexto, tipo de negocio si es B2B. Para poder visualizarlo con claridad.",
              },
              {
                letra: "B",
                titulo: "Qué le duele y qué desea",
                desc: "Diferencia entre el dolor declarado (lo que dice querer) y el dolor real (lo que le quita el sueño).",
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
              <div key={dim.letra} className="card">
                <p className="text-xs font-semibold tracking-widest text-r-muted/50 mb-2">{dim.letra}</p>
                <h3 className="font-display text-display-sm text-r-dark mb-2">{dim.titulo}</h3>
                <p className="text-sm text-r-dark/75 leading-relaxed">{dim.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="section bg-r-green">
        <div className="container-prose">
          <h2 className="font-display text-display-md text-r-white mb-3">
            Define a tu cliente antes de escribir una sola línea de marketing
          </h2>
          <p className="text-r-warm/70 mb-7">
            Proceso guiado, resultado inmediato. Sin formación previa ni registro.
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
