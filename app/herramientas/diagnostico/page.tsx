import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/ui/Breadcrumb";
import Button from "@/components/ui/Button";
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
      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section className="bg-r-dark py-20 sm:py-24 md:py-32">
        <div className="container-site">
          <Breadcrumb items={[
            { label: "Inicio", href: "/" },
            { label: "Herramientas", href: "/herramientas" },
            { label: "Diagnóstico Empresarial" },
          ]} />
          <p className="label-tag mb-4 text-r-warm/50">{TOOL.tag} · {TOOL.domain}</p>
          <h1 className="font-display text-display-xl text-r-white">
            Diagnóstico Empresarial
          </h1>
          <p className="mt-6 max-w-2xl text-xl leading-relaxed text-r-warm/75">
            Saber qué está fallando en tu negocio es la mitad del trabajo.
            La otra mitad es saber en qué orden arreglarlo.
          </p>
          <div className="mt-10">
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

      {/* ── EL PROBLEMA QUE RESUELVE ─────────────────────────────────────── */}
      <section className="section bg-r-white">
        <div className="container-prose">
          <p className="label-tag mb-4">El problema</p>
          <h2 className="font-display text-display-md text-r-dark">
            Trabajas para mejorar el negocio pero no sabes qué mejorar primero
          </h2>
          <div className="mt-6 space-y-5 text-r-dark/85">
            <p>
              El empresario medio llega a un punto en el que sabe que algo no
              funciona bien, pero no sabe exactamente qué. Tiene varios problemas
              a la vez. Ha probado cosas que no han movido la aguja. Y sigue
              sin entender por qué, si trabaja tanto, el negocio no mejora.
            </p>
            <p>
              El problema no siempre es lo que parece. Muchas veces el empresario
              cree que el problema es de ventas o de marketing y el problema real
              es de precios. O cree que es de equipo y el problema es de procesos.
              O cree que tiene un problema de producto y tiene un problema de
              personas.
            </p>
            <p>
              Actuar sobre el síntoma sin identificar la causa raíz es el
              ciclo en el que se queda atrapado la mayoría: mucha energía,
              poco resultado, creciente frustración.
            </p>
          </div>
        </div>
      </section>

      {/* ── QUÉ ES ────────────────────────────────────────────────────────── */}
      <section className="section bg-r-warm">
        <div className="container-prose">
          <p className="label-tag mb-4">Qué es el diagnóstico</p>
          <h2 className="font-display text-display-md text-r-dark">
            Un análisis estructurado de las cinco palancas de tu negocio
          </h2>
          <div className="mt-6 space-y-5 text-r-dark/85">
            <p>
              El Diagnóstico Empresarial de rentabilismo.online es un cuestionario
              guiado que analiza tu negocio desde las cinco dimensiones del
              Método 5P: Personas, Producto/Servicio, Precios, Procesos y
              Promoción/Publicidad.
            </p>
            <p>
              Cada dimensión tiene un conjunto de preguntas concretas. Las
              respuestas construyen un mapa de tu negocio tal como está hoy,
              no como te gustaría que estuviera. El sistema identifica cuál de
              las cinco palancas está más bloqueada y cuál tiene mayor impacto
              potencial si se trabaja.
            </p>
            <p>
              El resultado no es un listado genérico de recomendaciones. Es un
              diagnóstico específico de tu situación con acciones ordenadas por
              prioridad e impacto estimado.
            </p>
          </div>
        </div>
      </section>

      {/* ── CÓMO FUNCIONA ────────────────────────────────────────────────── */}
      <section className="section bg-r-cream">
        <div className="container-site">
          <p className="label-tag mb-4">El proceso</p>
          <h2 className="font-display text-display-md text-r-dark mb-8">
            Cómo funciona en tres pasos
          </h2>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                num: "01",
                title: "Respondes el cuestionario",
                desc: "12-15 minutos. Preguntas directas sobre cómo funciona tu negocio ahora mismo. Sin tecnicismos. Sin trampa. Cuanto más honesto seas, más útil es el resultado.",
              },
              {
                num: "02",
                title: "El sistema analiza tus respuestas",
                desc: "Las respuestas se cruzan con el modelo del Método 5P. Se puntúa cada palanca y se identifica el patrón de bloqueo más frecuente en tu tipo de negocio.",
              },
              {
                num: "03",
                title: "Recibes tu informe de diagnóstico",
                desc: "Un informe personalizado con la palanca prioritaria, las señales de alerta y tres acciones concretas para empezar. Sin vaguedades.",
              },
            ].map((paso) => (
              <div key={paso.num} className="card">
                <p className="text-xs font-semibold tracking-widest text-r-muted/50 mb-3">{paso.num}</p>
                <h3 className="font-display text-display-sm text-r-dark mb-3">{paso.title}</h3>
                <p className="text-r-dark/80 text-sm leading-relaxed">{paso.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PARA QUIÉN ───────────────────────────────────────────────────── */}
      <section className="section bg-r-white">
        <div className="container-prose">
          <p className="label-tag mb-4">Para quién es</p>
          <h2 className="font-display text-display-md text-r-dark mb-8">
            Tres perfiles que se benefician del diagnóstico
          </h2>
          <div className="space-y-6">
            {[
              {
                perfil: "El empresario estancado",
                desc: "Lleva tiempo trabajando mucho sin ver mejora proporcional en los resultados. Sabe que algo no funciona pero no tiene claro qué. Necesita claridad antes de seguir gastando energía en la dirección equivocada.",
              },
              {
                perfil: "El que acaba de probar algo que no funcionó",
                desc: "Ha invertido en formación, consultores o herramientas con poca mejora real. Antes de volver a invertir en otra solución, necesita saber si está atacando el problema correcto.",
              },
              {
                perfil: "El que quiere tomar decisiones con criterio",
                desc: "No está bloqueado, pero quiere priorizar bien su próximo movimiento. Quiere saber qué área del negocio tiene mayor potencial de mejora con el menor esfuerzo.",
              },
            ].map((p) => (
              <div key={p.perfil} className="card-accent">
                <h3 className="font-semibold text-r-dark mb-2">{p.perfil}</h3>
                <p className="text-sm text-r-dark/80 leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SEÑALES ───────────────────────────────────────────────────────── */}
      <section className="section bg-r-warm">
        <div className="container-prose">
          <p className="label-tag mb-4">¿Es para ti?</p>
          <h2 className="font-display text-display-md text-r-dark mb-8">
            Señales de que necesitas hacer el diagnóstico
          </h2>
          <ul className="space-y-4">
            {[
              "No puedes explicar con claridad por qué el negocio no va como debería.",
              "Has tomado decisiones que parecían buenas y no han cambiado nada.",
              "Tienes más de un problema a la vez y no sabes cuál resolver primero.",
              "Has contratado ayuda externa que no entendió bien tu situación.",
              "Sientes que el negocio depende demasiado de tu presencia y no sabes cómo salir de eso.",
              "Quieres una valoración objetiva de tu negocio sin tener que pagarlo.",
            ].map((señal) => (
              <li key={señal} className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-r-green" />
                <span className="text-r-dark/85">{señal}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── QUÉ OBTIENES ─────────────────────────────────────────────────── */}
      <section className="section bg-r-cream">
        <div className="container-prose">
          <p className="label-tag mb-4">El resultado</p>
          <h2 className="font-display text-display-md text-r-dark mb-8">
            Qué obtienes al terminar
          </h2>
          <ul className="space-y-4">
            {[
              "Puntuación de tu negocio en las cinco palancas del Método 5P.",
              "Identificación de la palanca más bloqueada ahora mismo.",
              "Análisis del patrón de problemas específico de tu situación.",
              "Tres acciones concretas ordenadas por impacto y esfuerzo estimado.",
              "Acceso a recursos específicos del Método 5P para trabajar tu palanca prioritaria.",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-r-green" />
                <span className="text-r-dark/85">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────────────────── */}
      <section className="section bg-r-green">
        <div className="container-prose">
          <p className="label-tag mb-4 text-r-warm/50">Empieza con claridad</p>
          <h2 className="font-display text-display-md text-r-white mb-4">
            El diagnóstico tarda menos de 15 minutos y es completamente gratuito
          </h2>
          <p className="text-r-warm/70 mb-8 text-lg leading-relaxed">
            Sin registro complicado. Sin compromiso de compra. Solo un análisis
            honesto de en qué punto está tu negocio y qué es lo primero que
            hay que mover.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href={TOOL.externalHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-r-lime px-7 py-3.5 text-sm font-semibold text-r-dark no-underline hover:bg-r-lime/90 transition-colors"
            >
              Acceder a {TOOL.domain} ↗
            </a>
            <Button href="/herramientas" variant="secondary">Ver todas las herramientas</Button>
          </div>
        </div>
      </section>

      {/* ── OTRAS HERRAMIENTAS ────────────────────────────────────────────── */}
      <section className="section-sm bg-r-dark">
        <div className="container-site">
          <p className="label-tag mb-4 text-r-warm/50">También te puede interesar</p>
          <div className="grid grid-cols-1 gap-px border border-r-border-d bg-r-border-d sm:grid-cols-2">
            {OTHER_TOOLS.map((tool) => (
              <Link
                key={tool.href}
                href={tool.href}
                className="flex flex-col gap-1 bg-r-dark px-5 py-5 no-underline transition-colors hover:bg-r-green"
              >
                <span className="text-xs font-semibold tracking-widest text-r-warm/50">{tool.num} — {tool.tag}</span>
                <span className="font-body font-semibold text-r-white">{tool.name}</span>
                <span className="text-xs text-r-warm/50 mt-1">{tool.tagline}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
