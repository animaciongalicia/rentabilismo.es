import type { Metadata } from "next";
import Breadcrumb from "@/components/ui/Breadcrumb";
import { SITE_URL } from "@/lib/siteConfig";

const EXTERNAL = "https://consultoriametodo.es";
const DOMAIN   = "consultoriametodo.es";

export const metadata: Metadata = {
  title: "Consultoría presencial en A Coruña — Mejora empresarial directa | Rentabilismo",
  description:
    "Consultoría de mejora empresarial en A Coruña. Trabajo directo con el empresario, en su negocio, con sus números reales. Diagnóstico, plan de acción e implementación.",
  alternates: { canonical: `${SITE_URL}/consultoria` },
};

export default function ConsultoriaPage() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section className="bg-r-dark py-20 sm:py-24 md:py-32">
        <div className="container-prose">
          <Breadcrumb items={[{ label: "Inicio", href: "/" }, { label: "Consultoría presencial" }]} />
          <p className="label-tag mb-4 text-r-warm/50">Servicio presencial · {DOMAIN}</p>
          <h1 className="font-display text-display-xl text-r-white">
            Consultoría de mejora empresarial en A Coruña
          </h1>
          <p className="mt-5 max-w-xl text-lg text-r-warm/70 leading-relaxed">
            Trabajo directo con el empresario. En su negocio. Con sus números reales.
            Sin informes de 80 páginas que nadie implementa.
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

      {/* ── CÓMO FUNCIONA ────────────────────────────────────────────────── */}
      <section className="section bg-r-white">
        <div className="container-site">
          <p className="label-tag mb-4">Cómo funciona</p>
          <h2 className="font-display text-display-md text-r-dark mb-8">
            Cuatro fases de trabajo
          </h2>
          <div className="grid gap-5 sm:grid-cols-2">
            {[
              {
                num: "01",
                titulo: "Diagnóstico inicial",
                desc:   "Primera sesión de 2-3 horas. Se analiza el negocio en las cinco palancas del Método 5P con los datos reales. Al terminar hay un mapa claro de qué está funcionando, qué no y en qué orden trabajarlo.",
              },
              {
                num: "02",
                titulo: "Plan de acción",
                desc:   "Con el diagnóstico sobre la mesa se define qué palancas trabajar, en qué orden y qué acciones concretas con responsable y fecha. Sin objetivos vagos ni recomendaciones genéricas.",
              },
              {
                num: "03",
                titulo: "Sesiones de implementación",
                desc:   "Sesiones periódicas para revisar lo hecho, resolver bloqueos y ajustar el plan. El empresario no implementa solo. La frecuencia se adapta al proyecto.",
              },
              {
                num: "04",
                titulo: "Cierre",
                desc:   "Cuando los cambios están consolidados y el negocio funciona de forma autónoma con la nueva estructura. El objetivo es que el empresario no necesite al consultor para seguir.",
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
      <section className="section bg-r-warm">
        <div className="container-prose">
          <p className="label-tag mb-4">Para quién es</p>
          <h2 className="font-display text-display-md text-r-dark mb-6">
            Cuándo tiene sentido este servicio
          </h2>
          <ul className="space-y-3">
            {[
              "Necesitas que alguien se siente contigo y mire tus números reales, no un informe genérico.",
              "Tu situación es urgente o tiene matices que un cuestionario online no puede capturar.",
              "Has probado herramientas y formación y el negocio sigue igual. Necesitas intervención directa.",
              "Estás en A Coruña o Galicia y valoras el trabajo presencial.",
            ].map((p) => (
              <li key={p} className="flex items-start gap-3 text-r-dark/85">
                <span className="mt-[5px] h-1.5 w-1.5 shrink-0 rounded-full bg-r-green" />
                <span>{p}</span>
              </li>
            ))}
          </ul>
          <p className="mt-8 text-sm text-r-muted">
            Si prefieres trabajar a tu ritmo, mira la{" "}
            <a href="/plataforma" className="text-r-green no-underline hover:underline">plataforma SaaS</a>.
          </p>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────────────────── */}
      <section className="section bg-r-green">
        <div className="container-prose">
          <p className="label-tag mb-3 text-r-warm/50">Primera conversación sin compromiso</p>
          <h2 className="font-display text-display-md text-r-white mb-4">
            Una llamada para ver si encajamos
          </h2>
          <p className="text-r-warm/70 mb-7 leading-relaxed">
            Antes de cualquier compromiso hay una primera conversación para
            entender tu situación y ver si este es el servicio adecuado para ti
            ahora mismo.
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
            Servicio presencial en A Coruña y zona de Galicia. Complemento remoto disponible.
          </p>
        </div>
      </section>
    </>
  );
}
