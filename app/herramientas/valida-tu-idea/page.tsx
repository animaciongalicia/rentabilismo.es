import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/ui/Breadcrumb";
import { SITE_URL, TOOLS_FREE } from "@/lib/siteConfig";

const TOOL = TOOLS_FREE[2];
const OTHER_TOOLS = TOOLS_FREE.slice(0, 2);

export const metadata: Metadata = {
  title: "Validador de Ideas — Comprueba si tu idea tiene mercado antes de invertir | Rentabilismo",
  description:
    "Herramienta gratuita para validar ideas de negocio o nuevas líneas de producto. Framework de cinco dimensiones. Resultado inmediato. Evita invertir en lo que no funciona.",
  alternates: { canonical: `${SITE_URL}/herramientas/valida-tu-idea` },
  openGraph: {
    title: "Validador de Ideas — Comprueba si tu idea tiene mercado antes de invertir | Rentabilismo",
    description: "Herramienta gratuita para validar ideas de negocio antes de invertir tiempo y dinero en ellas.",
    url: `${SITE_URL}/herramientas/valida-tu-idea`,
  },
};

export default function ValidaTuIdeaPage() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="bg-r-green py-12 sm:py-16 md:py-20">
        <div className="container-content">
          <Breadcrumb items={[
            { label: "Inicio", href: "/" },
            { label: "Herramientas", href: "/herramientas" },
            { label: "Validador de Ideas" },
          ]} />
          <p className="label-tag mt-6 mb-3 text-r-warm/50">{TOOL.tag} · {TOOL.domain}</p>
          <h1 className="font-display text-display-xl text-r-white">
            Validador de Ideas
          </h1>
          <p className="mt-4 text-base leading-relaxed text-r-warm/70">
            Una idea que parece buena no es lo mismo que una idea que tiene mercado.
            Saber la diferencia antes de invertir es la decisión más rentable que puedes tomar.
          </p>
          <a
            href={TOOL.externalHref}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-7 inline-flex items-center gap-2 bg-r-lime px-6 py-3 text-sm font-semibold text-r-dark no-underline hover:bg-r-lime/90 transition-colors"
          >
            Validar mi idea gratis ↗
          </a>
        </div>
      </section>

      {/* ── CONTENIDO ── */}
      <section className="section bg-r-cream">
        <div className="container-content">
          <div className="max-w-2xl mb-10">
            <h2 className="font-display text-display-md text-r-dark">
              Cinco preguntas que toda idea viable tiene que poder responder
            </h2>
            <p className="mt-4 text-r-dark/75 leading-relaxed">
              No es un test motivacional. Es un análisis que te obliga a articular el problema que resuelves,
              para quién, por qué tu solución es superior, qué modelo lo sostiene y si los números tienen sentido.
              El resultado muestra los puntos débiles antes de comprometer recursos.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                num: "01",
                titulo: "El problema",
                desc: "¿Existe un problema real? ¿Lo reconoce quien tiene que pagarlo? ¿Es suficientemente urgente?",
              },
              {
                num: "02",
                titulo: "El cliente",
                desc: "¿Sabes quién lo tiene, tiene capacidad de pago y puedes llegar a esa persona?",
              },
              {
                num: "03",
                titulo: "La solución",
                desc: "¿Tu propuesta es suficientemente superior a lo que ya existe? ¿Por qué te elegiría a ti?",
              },
              {
                num: "04",
                titulo: "El modelo",
                desc: "¿El precio cubre costes y genera margen? ¿Escala o siempre requiere el mismo esfuerzo por venta?",
              },
              {
                num: "05",
                titulo: "La viabilidad",
                desc: "¿Tienes los recursos para ejecutarlo? ¿Cuánto tiempo hasta el primer euro? ¿Qué tiene que ser cierto?",
              },
            ].map((dim) => (
              <div key={dim.num} className="border border-r-border bg-r-white p-6">
                <p className="text-xs font-semibold tracking-widest text-r-muted/50 mb-3">{dim.num}</p>
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
            <p className="font-display text-display-sm text-r-white">Veinte minutos ahora pueden ahorrarte meses en la dirección equivocada.</p>
            <p className="mt-1 text-sm text-r-warm/65">Gratuito. Sin cuenta ni suscripción.</p>
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
