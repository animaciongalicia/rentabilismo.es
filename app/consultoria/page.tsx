import type { Metadata } from "next";
import Breadcrumb from "@/components/ui/Breadcrumb";
import { SITE_URL } from "@/lib/siteConfig";

const EXTERNAL = "https://consultoriametodo.es";
const DOMAIN   = "consultoriametodo.es";

export const metadata: Metadata = {
  title: "Consultoría 1 a 1 para empresarios y empresarias — Galicia y online | Rentabilismo",
  description:
    "Consultoría personalizada 1 a 1 con el Método 5P. Trabajo directo con tu negocio: tus números, tu equipo, tus decisiones. Presencial en Galicia y online para el resto.",
  alternates: { canonical: `${SITE_URL}/consultoria` },
};

export default function ConsultoriaPage() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section className="bg-r-green py-12 sm:py-16 md:py-20">
        <div className="container-site">
          <Breadcrumb items={[{ label: "Inicio", href: "/" }, { label: "Consultoría" }]} />
          <p className="label-tag mb-4 text-r-warm/50">Servicio 1 a 1 · {DOMAIN}</p>
          <h1 className="font-display text-display-xl text-r-white">
            Consultoría 1 a 1 para empresarios y empresarias
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-r-warm/70">
            Trabajo directo con tu negocio, tus números y tus decisiones reales.
            Sin informes de 80 páginas. Sin metodología genérica.
            Presencial en Galicia, online para el resto.
          </p>
          <div className="mt-8">
            <a
              href={EXTERNAL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-r-lime px-7 py-3.5 text-sm font-semibold text-r-dark no-underline hover:bg-r-lime/85 transition-colors"
            >
              Ver disponibilidad en {DOMAIN} ↗
            </a>
          </div>
        </div>
      </section>

      {/* ── QUÉ ES ────────────────────────────────────────────────────────── */}
      <section className="section bg-r-cream">
        <div className="container-content">
          <p className="label-tag mb-4">Qué es</p>
          <h2 className="font-display text-display-md text-r-dark">
            Una experiencia de consultoría intensiva y personalizada
          </h2>
          <div className="mt-6 space-y-4 text-r-dark/85">
            <p>
              La consultoría 1 a 1 es el servicio más directo del ecosistema
              Rentabilismo. No hay plataforma intermedia ni contenido pregrabado.
              Hay una persona —el consultor— que se sienta contigo, analiza tu
              negocio concreto y trabaja codo a codo en la mejora real.
            </p>
            <p>
              Todo el trabajo se hace con el Método 5P como estructura de
              diagnóstico y acción. Las cinco palancas se analizan con tus
              datos reales: tus márgenes, tu equipo, tus procesos, tu oferta y
              tu modelo de captación. No con ejemplos del sector ni con
              benchmarks de manual.
            </p>
            <p>
              El servicio es presencial para empresarios y empresarias en
              Galicia. Para el resto, el formato es online sin pérdida de
              profundidad: las sesiones se adaptan para trabajar con la misma
              intensidad a través de videollamada.
            </p>
          </div>
        </div>
      </section>

      {/* ── CÓMO FUNCIONA ────────────────────────────────────────────────── */}
      <section className="section bg-r-cream">
        <div className="container-content">
          <p className="label-tag mb-4">Cómo funciona</p>
          <h2 className="font-display text-display-md text-r-dark mb-8">
            Cuatro fases de trabajo
          </h2>
          <div className="grid gap-5 sm:grid-cols-2">
            {[
              {
                num:    "01",
                titulo: "Diagnóstico inicial",
                desc:   "Primera sesión de 2-3 horas. Se analiza el negocio en las cinco palancas del Método 5P con los datos reales. Al terminar hay un mapa claro de qué está funcionando, qué no y en qué orden trabajarlo.",
              },
              {
                num:    "02",
                titulo: "Plan de acción",
                desc:   "Con el diagnóstico sobre la mesa se define qué palancas trabajar, en qué orden y qué acciones concretas con responsable y fecha. Sin objetivos vagos ni recomendaciones que no puedas ejecutar tú mismo.",
              },
              {
                num:    "03",
                titulo: "Sesiones de implementación",
                desc:   "Sesiones periódicas —presenciales en Galicia u online— para revisar lo hecho, resolver bloqueos y ajustar el plan. El empresario o empresaria no implementa solo. La frecuencia se adapta al proyecto y al ritmo del negocio.",
              },
              {
                num:    "04",
                titulo: "Cierre",
                desc:   "Cuando los cambios están consolidados y el negocio funciona de forma autónoma con la nueva estructura. El objetivo es que no necesites al consultor para seguir. Un buen proceso termina con independencia, no con dependencia.",
              },
            ].map((f) => (
              <div key={f.num} className="card">
                <p className="text-xs font-semibold tracking-widest text-r-muted/50 mb-2">{f.num}</p>
                <h3 className="font-display text-display-sm text-r-dark mb-2">{f.titulo}</h3>
                <p className="text-sm text-r-dark/75 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PARA QUIÉN ───────────────────────────────────────────────────── */}
      <section className="section bg-r-cream">
        <div className="container-content">
          <p className="label-tag mb-4">Para quién es</p>
          <h2 className="font-display text-display-md text-r-dark mb-6">
            Cuándo tiene sentido este servicio
          </h2>
          <ul className="space-y-3 max-w-2xl">
            {[
              "Necesitas que alguien se siente contigo a mirar tus números reales, no que te dé un informe genérico sobre el sector.",
              "Tu situación es urgente o tiene matices que una plataforma online no puede capturar solos.",
              "Has probado herramientas y formación y el negocio sigue igual. Necesitas intervención directa y personalizada.",
              "Estás en Galicia y valoras la cercanía del trabajo presencial. O estás en cualquier otro lugar y prefieres el formato online intensivo.",
              "Eres empresario o empresaria con equipo y quieres cambios reales en el menor tiempo posible.",
            ].map((p) => (
              <li key={p} className="flex items-start gap-3 text-r-dark/85">
                <span className="mt-[5px] h-1.5 w-1.5 shrink-0 rounded-full bg-r-green" />
                <span>{p}</span>
              </li>
            ))}
          </ul>
          <p className="mt-8 text-sm text-r-muted">
            Si prefieres trabajar a tu propio ritmo sin consultor, mira la{" "}
            <a href="/plataforma" className="text-r-green no-underline hover:underline">plataforma de consultoría guiada online</a>.
          </p>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────────────────── */}
      <section className="section bg-r-green">
        <div className="container-content">
          <p className="label-tag mb-3 text-r-warm/50">Primera conversación sin compromiso</p>
          <h2 className="font-display text-display-md text-r-white mb-4">
            Una llamada para ver si encajamos
          </h2>
          <p className="text-r-warm/70 mb-7 leading-relaxed max-w-xl">
            Antes de cualquier compromiso hay una primera conversación para
            entender tu situación y ver si este es el servicio adecuado para ti
            ahora mismo. Sin presión y sin coste.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <a
              href={EXTERNAL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-r-lime px-7 py-3.5 text-sm font-semibold text-r-dark no-underline hover:bg-r-lime/85 transition-colors"
            >
              Ver disponibilidad en {DOMAIN} ↗
            </a>
          </div>
          <p className="mt-5 text-xs text-r-warm/45">
            Presencial en Galicia · Online para el resto de España y cualquier otro país
          </p>
        </div>
      </section>
    </>
  );
}
