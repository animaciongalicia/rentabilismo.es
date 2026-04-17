import type { Metadata } from "next";
import Button from "@/components/ui/Button";
import { SITE_URL } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "Filosofía Rentabilista — Los cinco principios del sistema",
  description:
    "Claridad, orden, rentabilidad, acción constante y sostenibilidad. Los cinco principios que guían el sistema Rentabilismo, explicados con lenguaje de negocio.",
  alternates: { canonical: `${SITE_URL}/filosofia` },
  openGraph: {
    title: "Filosofía Rentabilista — Los cinco principios",
    description:
      "No son valores de empresa para colgar en la pared. Son formas concretas de entender y operar un negocio.",
    url: `${SITE_URL}/filosofia`,
  },
};

const PRINCIPIOS = [
  {
    num: "01",
    id: "claridad",
    nombre: "Claridad",
    titular: "Sin claridad, todo esfuerzo va en la dirección equivocada.",
    resumen:
      "Claridad significa saber exactamente en qué punto está el negocio: qué genera margen, qué lo consume, qué clientes son rentables, qué procesos fallan y dónde se pierde el tiempo.",
    desarrollo: [
      "La falta de claridad no se nota de golpe. Se acumula. Primero dejas de medir porque estás ocupado. Luego tomas decisiones por intuición porque no tienes datos. Luego te sorprendes cuando los resultados no son los que esperabas.",
      "Claridad no significa tenerlo todo controlado. Significa saber qué está pasando con la información suficiente para tomar decisiones correctas.",
      "En la práctica: sabes cuál es tu margen real por producto o servicio. Sabes cuánto te cuesta adquirir un cliente y cuánto vale a lo largo del tiempo. Sabes cuáles son las tareas que realmente mueven el negocio y cuáles son las que ocupan tiempo sin retorno.",
    ],
    error: "El error habitual es confundir actividad con claridad. Estar muy ocupado no significa saber qué está pasando. De hecho, muchas veces son inversamente proporcionales.",
    pregunta: "¿Puedes responder en menos de dos minutos cuál es tu margen neto real este mes?",
  },
  {
    num: "02",
    id: "orden",
    nombre: "Orden",
    titular: "Primero lo que importa. Siempre.",
    resumen:
      "Orden no es tener la mesa limpia. Es saber qué decisiones tienen más impacto en la rentabilidad y tomar esas primero.",
    desarrollo: [
      "La mayoría de los empresarios trabajan en lo urgente, no en lo importante. Responden correos, resuelven incidencias, atienden peticiones. Al final del día han estado ocupados todo el tiempo y no han avanzado en nada que cambie el negocio.",
      "El orden en Rentabilismo es jerárquico: primero las decisiones que afectan a la estructura del negocio (pricing, selección de clientes, modelo de servicio). Luego las que mejoran la operativa. Luego las que optimizan lo que ya funciona.",
      "Sin orden, el negocio siempre está en modo apagafuegos. Con orden, hay una dirección clara y la energía se concentra donde produce más resultado.",
    ],
    error: "Pensar que estar ocupado equivale a avanzar. La agenda llena no es señal de gestión eficiente. Muchas veces es la señal de todo lo contrario.",
    pregunta: "¿Sabes cuál es la tarea que más impacto tiene en tu negocio esta semana? ¿La estás haciendo primero?",
  },
  {
    num: "03",
    id: "rentabilidad",
    nombre: "Rentabilidad",
    titular: "No facturación. No crecimiento por crecer. Margen real.",
    resumen:
      "La rentabilidad es la capacidad de un negocio de generar más valor del que consume. Es el único indicador que de verdad dice si el negocio está sano.",
    desarrollo: [
      "Facturación es un número. Rentabilidad es una realidad. Un negocio puede crecer en facturación y empeorar en rentabilidad al mismo tiempo, y ocurre más de lo que parece.",
      "En Rentabilismo, la rentabilidad se mide en tres niveles: margen bruto por producto o servicio (qué sobra después de los costes directos), margen operativo (qué sobra después de los costes fijos), y rentabilidad del tiempo del dueño (qué genera el negocio por cada hora que inviertes en él).",
      "El objetivo no es maximizar la facturación. Es maximizar el margen con la estructura que tienes, y crecer solo cuando esa estructura puede sostener el crecimiento sin romperse.",
    ],
    error: "Celebrar récords de facturación sin mirar el margen. Una empresa que factura más y gana lo mismo o menos no está creciendo. Está inflando un problema.",
    pregunta: "¿Sabes cuál es tu margen neto real después de pagarte a ti mismo y pagar todos los costes?",
  },
  {
    num: "04",
    id: "accion-constante",
    nombre: "Acción constante",
    titular: "El ritmo supera a la intensidad. Siempre.",
    resumen:
      "Las mejoras sostenidas en el tiempo son más potentes que los grandes cambios puntuales. Un negocio que mejora un poco cada semana en el lugar correcto avanza más que uno que hace una transformación anual.",
    desarrollo: [
      "El problema con los grandes cambios de golpe es que son difíciles de sostener. Requieren energía extra, generan incertidumbre en el equipo y muchas veces no se implementan bien porque hay demasiadas cosas cambiando a la vez.",
      "La acción constante no es hacer muchas cosas. Es hacer una cosa, bien, de forma continua. Es revisar los números cada semana aunque no te apetezca. Es ajustar el precio aunque dé vértigo. Es documentar un proceso aunque lleve tiempo.",
      "Los negocios más rentables no son los que hacen grandes movimientos. Son los que hacen pequeñas correcciones continuas basadas en información real.",
    ],
    error: "Esperar al momento perfecto para actuar. O hacer un sprint de cambios y luego volver exactamente a lo anterior. Los cambios que no se incorporan al sistema desaparecen.",
    pregunta: "¿Hay algo en tu negocio que llevas meses sabiendo que hay que cambiar y que no has cambiado?",
  },
  {
    num: "05",
    id: "sostenibilidad",
    nombre: "Sostenibilidad",
    titular: "Lo que no puedes mantener no te sirve.",
    resumen:
      "Un negocio sostenible es el que puede funcionar bien durante años sin requerir un sacrificio permanente de las personas que lo llevan.",
    desarrollo: [
      "Sostenibilidad no es un concepto medioambiental aquí. Es un criterio de gestión. ¿Puedes mantener este ritmo durante tres años? ¿Puede tu equipo sostener esta carga de trabajo? ¿Tu modelo de precios funciona cuando suben los costes?",
      "Un negocio que requiere que el dueño trabaje sesenta horas semanales para funcionar no es un negocio sostenible. Es un sistema frágil que depende de una persona y que se rompe en cuanto esa persona necesita parar.",
      "Sostenibilidad también aplica al modelo financiero: si el negocio solo funciona cuando todo va bien, con los clientes que pagan a tiempo y sin imprevistos, no tiene colchón para absorber la realidad.",
      "Construir de forma sostenible significa tomar decisiones que quizás generan menos resultado a corto plazo pero que construyen un negocio más sólido a medio plazo.",
    ],
    error: "Confundir sacrificio con compromiso. Que el negocio te exija todo no es señal de que lo llevas bien. Es señal de que aún no está bien construido.",
    pregunta: "Si mañana necesitaras desconectar dos semanas, ¿podría tu negocio seguir funcionando?",
  },
];

export default function FilosofiaPage() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section className="bg-r-green py-12 sm:py-16 md:py-20">
        <div className="container-wide">
          <p className="label-tag mb-4 text-r-warm/50">Los principios del sistema</p>
          <h1 className="font-display text-display-xl text-r-white">
            Filosofía<br />Rentabilista
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-r-warm/70">
            Cinco principios. No son valores para colgar en la pared. Son
            formas concretas de entender y operar un negocio.
          </p>
        </div>
      </section>

      {/* ── INTRO ─────────────────────────────────────────────────────────── */}
      <section className="section-sm bg-r-cream">
        <div className="container-content">
          <p className="text-r-dark/85">
            Antes de método, hay filosofía. Antes de herramientas, hay criterio.
            Rentabilismo se apoya en cinco principios que determinan cómo se
            piensa el negocio, cómo se toman las decisiones y qué se mide.
          </p>
          <p className="mt-4 text-r-dark/85">
            No son principios abstractos. Son observaciones extraídas de ver
            cómo operan los negocios que funcionan bien y de ver qué ocurre
            cuando alguno de estos principios falla.
          </p>
        </div>
      </section>

      {/* ── ÍNDICE RÁPIDO ─────────────────────────────────────────────────── */}
      <section className="section-sm bg-r-cream">
        <div className="container-content">
          <div className="grid gap-px border border-r-border bg-r-border sm:grid-cols-5">
            {PRINCIPIOS.map((p) => (
              <a
                key={p.id}
                href={`#${p.id}`}
                className="group flex flex-col gap-2 bg-r-warm px-5 py-4 no-underline transition-colors hover:bg-r-cream"
              >
                <span className="text-xs font-semibold tracking-widest text-r-muted/50">{p.num}</span>
                <span className="font-display text-lg font-semibold text-r-dark group-hover:text-r-green">
                  {p.nombre}
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── CADA PRINCIPIO ────────────────────────────────────────────────── */}
      {PRINCIPIOS.map((p, i) => (
        <section
          key={p.id}
          id={p.id}
          className={`section ${"bg-r-cream"}`}
        >
          <div className="container-content">
            <div className="grid gap-10 md:grid-cols-[220px_1fr] md:gap-16 lg:gap-20">

              {/* Número grande */}
              <div className="md:pt-1">
                <span className="font-body text-sm font-semibold tracking-widest text-r-muted/40">
                  {p.num} / 05
                </span>
                <p className="mt-3 font-display text-[2.5rem] font-bold leading-none text-r-green/20">
                  {p.num.replace("0", "")}
                </p>
              </div>

              {/* Contenido */}
              <div>
                <h2 className="font-display text-display-lg text-r-dark">{p.nombre}</h2>
                <p className="mt-4 text-lg font-medium leading-relaxed text-r-dark">{p.titular}</p>
                <p className="mt-3 text-[1.0625rem] leading-relaxed text-r-dark/75">{p.resumen}</p>

                <div className="mt-7 space-y-4 text-r-dark/75">
                  {p.desarrollo.map((par) => (
                    <p key={par.slice(0, 35)}>{par}</p>
                  ))}
                </div>

                {/* El error habitual */}
                <div className="mt-8 border-l-2 border-r-gold pl-5">
                  <p className="label-tag mb-2 text-r-gold">El error habitual</p>
                  <p className="text-sm leading-relaxed text-r-dark/75">{p.error}</p>
                </div>

                {/* Pregunta de diagnóstico */}
                <div className="mt-6 border border-dashed border-r-border bg-r-warm/60 p-5">
                  <p className="label-tag mb-2">Pregunta de diagnóstico</p>
                  <p className="text-sm font-medium italic text-r-dark/80">{p.pregunta}</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* ── CIERRE ────────────────────────────────────────────────────────── */}
      <section className="section bg-r-green">
        <div className="container-content">
          <p className="font-display text-display-md text-r-white">
            La filosofía sin método es intención. El método sin filosofía
            es técnica vacía. Los dos juntos son lo que hace funcionar
            a Rentabilismo.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Button href="/metodo-5p" variant="primary">Ver el Método 5P →</Button>
            <Button href="/manifiesto" variant="secondary">Leer el Manifiesto</Button>
          </div>
        </div>
      </section>
    </>
  );
}
