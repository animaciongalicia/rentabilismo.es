import type { Metadata } from "next";
import Breadcrumb from "@/components/ui/Breadcrumb";
import { SITE_URL } from "@/lib/siteConfig";

const EXTERNAL = "https://rentabilismo.com";
const DOMAIN   = "rentabilismo.com";

export const metadata: Metadata = {
  title: "Plataforma SaaS — Consultoría guiada online | Rentabilismo",
  description:
    "rentabilismo.com: plataforma online para aplicar el Método 5P con módulos guiados, seguimiento de métricas y recursos prácticos. Para el empresario que quiere estructura sin consultor presencial.",
  alternates: { canonical: `${SITE_URL}/plataforma` },
};

export default function PlataformaPage() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section className="bg-r-dark py-20 sm:py-12 sm:py-16 md:py-20">
        <div className="container-content">
          <Breadcrumb items={[{ label: "Inicio", href: "/" }, { label: "Plataforma SaaS" }]} />
          <p className="label-tag mb-4 text-r-warm/50">Plataforma · {DOMAIN}</p>
          <h1 className="font-display text-display-xl text-r-white">
            Consultoría guiada y herramientas online
          </h1>
          <p className="mt-5 max-w-xl text-lg text-r-warm/70 leading-relaxed">
            Para el empresario que quiere aplicar el Método 5P con estructura y
            seguimiento, sin necesitar un consultor en cada paso.
          </p>
          <div className="mt-8">
            <a
              href={EXTERNAL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-r-lime px-7 py-3.5 text-sm font-semibold text-r-dark no-underline hover:bg-r-lime/85 transition-colors"
            >
              Acceder a {DOMAIN} ↗
            </a>
          </div>
        </div>
      </section>

      {/* ── QUÉ ES ────────────────────────────────────────────────────────── */}
      <section className="section bg-r-white">
        <div className="container-content">
          <p className="label-tag mb-4">Qué es</p>
          <h2 className="font-display text-display-md text-r-dark">
            El Método 5P en un entorno digital estructurado
          </h2>
          <div className="mt-6 space-y-4 text-r-dark/85">
            <p>
              rentabilismo.com lleva el Método 5P a una plataforma SaaS: diagnóstico
              inicial, módulos de trabajo guiados por palanca, seguimiento de métricas
              clave y biblioteca de recursos. Todo en un solo sitio, con un orden lógico
              de implementación.
            </p>
            <p>
              El sistema te indica en qué trabajar, en qué orden y cómo saber si está
              funcionando. No hay que saber de antemano qué hacer. No hay cursos que
              terminar ni consultores que esperar. Solo sesiones de trabajo enfocadas
              con impacto medible en tu negocio real.
            </p>
          </div>
        </div>
      </section>

      {/* ── QUÉ INCLUYE ──────────────────────────────────────────────────── */}
      <section className="section bg-r-warm">
        <div className="container-content">
          <p className="label-tag mb-4">Qué incluye</p>
          <h2 className="font-display text-display-md text-r-dark mb-8">
            Diagnóstico + cinco módulos del Método 5P
          </h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { num: "00", titulo: "Diagnóstico inicial",      desc: "Mapeo del negocio en las cinco palancas. Define el orden de trabajo y el punto de partida real." },
              { num: "01", titulo: "Personas",                 desc: "Papel del dueño, estructura del equipo, claridad de roles y productividad real." },
              { num: "02", titulo: "Producto / Servicio",      desc: "Definición de la oferta, rentabilidad por línea y coherencia en la entrega." },
              { num: "03", titulo: "Precios",                  desc: "Coste real, margen objetivo y política de precios. La palanca más directa sobre el margen." },
              { num: "04", titulo: "Procesos",                 desc: "Procesos críticos, documentación, delegación y automatización donde tiene sentido." },
              { num: "05", titulo: "Promoción / Publicidad",   desc: "Mensaje, canal correcto y métricas de adquisición. Solo cuando las otras cuatro funcionan." },
            ].map((m) => (
              <div key={m.num} className="card">
                <p className="text-xs font-semibold tracking-widest text-r-muted/50 mb-2">{m.num}</p>
                <h3 className="font-display text-display-sm text-r-dark mb-2">{m.titulo}</h3>
                <p className="text-sm text-r-dark/75 leading-relaxed">{m.desc}</p>
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
            Encaja bien si reconoces alguna de estas situaciones
          </h2>
          <ul className="space-y-3">
            {[
              "Quieres aplicar el método a tu ritmo, sin depender de un consultor externo.",
              "Has pasado por formación que no pudiste llevar a tu negocio concreto.",
              "Necesitas un sistema con seguimiento real, no solo saber qué hacer.",
              "Tu negocio tiene entre 1 y 50 personas y el dueño sigue tomando las decisiones principales.",
            ].map((p) => (
              <li key={p} className="flex items-start gap-3 text-r-dark/85">
                <span className="mt-[5px] h-1.5 w-1.5 shrink-0 rounded-full bg-r-green" />
                <span>{p}</span>
              </li>
            ))}
          </ul>
          <p className="mt-8 text-sm text-r-muted">
            Si tu situación requiere intervención directa, mira la{" "}
            <a href="/consultoria" className="text-r-green no-underline hover:underline">consultoría presencial en A Coruña</a>.
          </p>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────────────────── */}
      <section className="section bg-r-green">
        <div className="container-content">
          <p className="label-tag mb-3 text-r-warm/50">{DOMAIN}</p>
          <h2 className="font-display text-display-md text-r-white mb-4">
            Empieza con el diagnóstico gratuito
          </h2>
          <p className="text-r-warm/70 mb-7 leading-relaxed">
            Antes de entrar en la plataforma, el diagnóstico en rentabilismo.online
            identifica cuál palanca trabajar primero. Con ese mapa el primer módulo
            tiene mucho más sentido.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href={EXTERNAL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-r-lime px-7 py-3.5 text-sm font-semibold text-r-dark no-underline hover:bg-r-lime/85 transition-colors"
            >
              Ir a {DOMAIN} ↗
            </a>
            <a
              href="/herramientas"
              className="inline-flex items-center gap-2 border border-r-border-d px-7 py-3.5 text-sm font-semibold text-r-white no-underline hover:bg-r-green-2 transition-colors"
            >
              Ver herramientas gratuitas
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
