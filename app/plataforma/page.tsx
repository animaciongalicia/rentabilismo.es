import type { Metadata } from "next";
import Breadcrumb from "@/components/ui/Breadcrumb";
import { SITE_URL } from "@/lib/siteConfig";

const EXTERNAL = "https://rentabilismo.com";
const DOMAIN   = "rentabilismo.com";

export const metadata: Metadata = {
  title: "Plataforma de consultoría guiada online | Rentabilismo",
  description:
    "rentabilismo.com: consultoría guiada online para empresarios y empresarias que quieren aplicar el Método 5P a su negocio concreto. Con seguimiento real, módulos por palanca y recursos adaptados.",
  alternates: { canonical: `${SITE_URL}/plataforma` },
};

export default function PlataformaPage() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section className="bg-r-green py-12 sm:py-16 md:py-20">
        <div className="container-site">
          <Breadcrumb items={[{ label: "Inicio", href: "/" }, { label: "Plataforma" }]} />
          <p className="label-tag mb-4 text-r-warm/50">Plataforma · {DOMAIN}</p>
          <h1 className="font-display text-display-xl text-r-white">
            Consultoría guiada online para empresarios y empresarias
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-r-warm/70">
            Aplica el Método 5P a tu negocio concreto con estructura, seguimiento
            y recursos adaptados a tu situación real. Sin consultor presencial.
            Sin cursos que terminar.
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
      <section className="section bg-r-cream">
        <div className="container-content">
          <p className="label-tag mb-4">Qué es</p>
          <h2 className="font-display text-display-md text-r-dark">
            No es un curso. Es consultoría personalizada en formato digital
          </h2>
          <div className="mt-6 space-y-4 text-r-dark/85">
            <p>
              rentabilismo.com es la plataforma del ecosistema Rentabilismo.
              Lleva el Método 5P a un entorno digital estructurado: diagnóstico
              inicial, módulos de trabajo guiados por palanca, seguimiento de
              métricas clave y recursos concretos para cada situación.
            </p>
            <p>
              La diferencia con un curso es que aquí el trabajo gira en torno a
              tu negocio, no a contenido genérico. El sistema te indica qué
              trabajar, en qué orden y cómo medir si está funcionando. Lo que
              ves en la plataforma responde a tu diagnóstico, no a un temario fijo.
            </p>
            <p>
              Diseñado para empresarios y empresarias con negocios en marcha:
              desde autónomos con equipo hasta pymes de hasta 50 personas donde
              el dueño o la dueña sigue tomando las decisiones principales.
            </p>
          </div>
        </div>
      </section>

      {/* ── QUÉ INCLUYE ──────────────────────────────────────────────────── */}
      <section className="section bg-r-cream">
        <div className="container-content">
          <p className="label-tag mb-4">Qué incluye</p>
          <h2 className="font-display text-display-md text-r-dark mb-8">
            Diagnóstico + cinco módulos del Método 5P
          </h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { num: "00", titulo: "Diagnóstico inicial",    desc: "Mapeo del negocio en las cinco palancas. Define el orden de trabajo y el punto de partida real. Es el primer paso antes de entrar en cualquier módulo." },
              { num: "01", titulo: "Personas",               desc: "Papel del empresario o empresaria, estructura del equipo, claridad de roles y productividad real. La base de cualquier negocio que escala." },
              { num: "02", titulo: "Producto / Servicio",    desc: "Definición de la oferta, rentabilidad por línea y coherencia en la entrega. Qué vendes, a quién y con qué margen real." },
              { num: "03", titulo: "Precios",                desc: "Coste real, margen objetivo y política de precios. La palanca con impacto más directo e inmediato sobre la rentabilidad." },
              { num: "04", titulo: "Procesos",               desc: "Procesos críticos, documentación, delegación y automatización donde tiene sentido. Para que el negocio no dependa de una sola persona." },
              { num: "05", titulo: "Promoción / Publicidad", desc: "Mensaje, canal correcto y métricas de adquisición. Solo cuando las otras cuatro están alineadas. Antes es gasto, no inversión." },
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
          <ul className="space-y-3 max-w-2xl">
            {[
              "Tienes un negocio en marcha y quieres aplicar el método a tu ritmo, sin depender de un consultor externo.",
              "Has pasado por formación que no pudiste llevar a tu negocio concreto. Necesitas algo que trabaje con tus números reales.",
              "Eres empresario o empresaria con equipo propio y el negocio todavía depende demasiado de ti para funcionar.",
              "Sabes qué hacer en general pero no tienes un sistema claro para ejecutarlo con seguimiento y orden.",
              "Tu negocio tiene entre 1 y 50 personas y tú tomas las decisiones principales.",
            ].map((p) => (
              <li key={p} className="flex items-start gap-3 text-r-dark/85">
                <span className="mt-[5px] h-1.5 w-1.5 shrink-0 rounded-full bg-r-green" />
                <span>{p}</span>
              </li>
            ))}
          </ul>
          <p className="mt-8 text-sm text-r-muted">
            Si tu situación requiere intervención directa y cercana, mira la{" "}
            <a href="/consultoria" className="text-r-green no-underline hover:underline">consultoría 1 a 1 en Galicia y online</a>.
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
          <p className="text-r-warm/70 mb-7 leading-relaxed max-w-xl">
            Antes de entrar en la plataforma, el diagnóstico en rentabilismo.online
            identifica cuál palanca trabajar primero. Con ese mapa, el primer
            módulo tiene mucho más sentido y el trabajo es inmediatamente aplicable.
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
