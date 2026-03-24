import type { Metadata } from "next";
import Button from "@/components/ui/Button";
import { SITE_URL } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "Para quién es Rentabilismo — Tres perfiles, una necesidad",
  description:
    "Rentabilismo está pensado para empresarios y emprendedores con tres perfiles distintos: negocios bloqueados, hartos de probar cosas, o que quieren empezar bien.",
  alternates: { canonical: `${SITE_URL}/para-quien-es` },
  openGraph: {
    title: "¿Para quién es Rentabilismo?",
    description:
      "Tres perfiles de empresario que Rentabilismo ayuda. ¿Te identificas con alguno?",
    url: `${SITE_URL}/para-quien-es`,
  },
};

const PERFILES = [
  {
    id: "bloqueado",
    num: "01",
    headline: "Tengo un negocio y estoy bloqueado",
    resumen:
      "Llevas años en esto. El negocio funciona, tienes clientes, tienes equipo. Pero los números no mejoran aunque trabajes más. Y hay algo que no termina de cuadrar.",
    descripcion: [
      "Es el perfil más común. Un negocio que factura, que tiene estructura, que existe de verdad. Pero que opera sin margen real o con un margen que no crece. Y el dueño cada vez más atrapado en el día a día.",
      "El problema no es falta de trabajo ni de talento. Es que el negocio ha crecido sin sistema, y ahora ese crecimiento se ha convertido en complejidad.",
      "Rentabilismo actúa aquí con diagnóstico preciso: identificar cuál de las cinco palancas está limitando el rendimiento y actuar sobre ella con criterio.",
    ],
    senales: [
      "Tienes más clientes que hace tres años pero el margen no ha mejorado proporcionalmente",
      "El negocio depende demasiado de ti: si no estás, las cosas fallan",
      "No tienes claro cuáles son tus productos o servicios más rentables",
      "El equipo funciona, pero hay demasiadas cosas que dependen de decisiones tuyas",
      "Sientes que trabajas para pagar gastos, no para generar riqueza",
    ],
    cta: { label: "Empieza aquí si este es tu caso", href: "/empieza-aqui" },
  },
  {
    id: "hastiado",
    num: "02",
    headline: "He probado mucho y sigo igual",
    resumen:
      "Has invertido en formación, consultores, herramientas, estrategias. Con cada nueva cosa viene una nueva esperanza. Pero los resultados no llegan o no duran.",
    descripcion: [
      "Este perfil conoce bien el mercado de la formación y la consultoría. Sabe que hay mucho humo. Ha pagado por promesas que no se cumplieron.",
      "No es desconfianza injustificada. Es experiencia. Y esa experiencia dice que lo que falta no es más información ni más inspiración.",
      "Lo que falta es un sistema aplicable al negocio concreto, no uno genérico diseñado para convencer desde el marketing.",
      "Rentabilismo parte del diagnóstico real, no de la teoría. No hay fórmulas universales: hay un método que se aplica a la situación específica.",
    ],
    senales: [
      "Has comprado cursos con grandes promesas que no has podido aplicar",
      "Los consultores que contrataste no entendieron de verdad tu negocio",
      "Cada nueva estrategia genera un sprint de actividad que luego se apaga",
      "Las formaciones que haces tienen sentido, pero no sabes cómo implementarlas",
      "Buscas algo concreto, práctico y sin postureo",
    ],
    cta: { label: "Ver cómo funciona el método", href: "/metodo-5p" },
  },
  {
    id: "empezando",
    num: "03",
    headline: "Quiero empezar sin hacerlo mal",
    resumen:
      "Tienes una idea, un proyecto o un negocio reciente. Todavía hay margen para hacerlo bien desde el principio. No quieres cometer los errores que comete la mayoría.",
    descripcion: [
      "Este es el mejor momento para aplicar Rentabilismo: antes de que el negocio crezca con una estructura equivocada. Es mucho más fácil construir bien desde el principio que arreglar lo que lleva años mal.",
      "El problema no es la falta de motivación ni de ideas. Es no saber qué importa primero. El Método 5P da ese orden: qué revisar antes de escalar, qué construir antes de promocionar.",
      "Aquí el foco no está en corregir errores pasados sino en no generarlos. En construir con criterio desde el primer día.",
    ],
    senales: [
      "No tienes claro todavía si tu modelo de negocio es rentable",
      "Estás en modo exploración pero quieres estructura",
      "Prefieres aprender el sistema antes de construir encima",
      "Ves muchas opciones y no sabes bien por cuál empezar",
      "No quieres repetir los errores de negocios que ya conoces",
    ],
    cta: { label: "Ver el método desde el principio", href: "/metodo-5p" },
  },
];

export default function ParaQuienEsPage() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section className="bg-r-dark py-20 md:py-28">
        <div className="container-site">
          <p className="label-tag mb-4 text-r-warm/50">Los perfiles</p>
          <h1 className="font-display text-display-xl text-r-white">
            Para quién es<br />Rentabilismo
          </h1>
          <p className="mt-6 max-w-2xl text-xl leading-relaxed text-r-warm/75">
            Tres situaciones distintas. Una misma necesidad: operar con más
            claridad, más orden y más rentabilidad real.
          </p>
        </div>
      </section>

      {/* ── INTRO ─────────────────────────────────────────────────────────── */}
      <section className="section-sm bg-r-white">
        <div className="container-prose">
          <p className="text-r-dark/85">
            Rentabilismo no es para todos. No está diseñado para quien busca
            escalar a millones en doce meses, para quien quiere fama o para
            quien ya tiene un sistema que funciona bien y solo necesita afinar
            detalles.
          </p>
          <p className="mt-4 text-r-dark/85">
            Está pensado para empresarios y emprendedores hispanohablantes
            que necesitan construir o reconstruir la base de un negocio
            rentable. Sin atajos. Sin postureo.
          </p>
        </div>
      </section>

      {/* ── PERFILES ──────────────────────────────────────────────────────── */}
      {PERFILES.map((perfil, i) => (
        <section
          key={perfil.id}
          id={perfil.id}
          className={`section ${i % 2 === 0 ? "bg-r-cream" : "bg-r-warm"}`}
        >
          <div className="container-site">
            <div className="grid gap-10 md:grid-cols-[1fr_2fr] md:gap-16">

              {/* Número */}
              <div className="md:pt-2">
                <span className="font-body text-sm font-semibold tracking-widest text-r-muted/40">
                  Perfil {perfil.num}
                </span>
                <p className="mt-4 font-display text-[4.5rem] font-bold leading-none text-r-border">
                  {perfil.num}
                </p>
              </div>

              {/* Contenido */}
              <div>
                <h2 className="font-display text-display-lg text-r-dark">
                  {perfil.headline}
                </h2>
                <p className="mt-4 text-lg font-medium leading-relaxed text-r-dark/80">
                  {perfil.resumen}
                </p>

                <div className="mt-6 space-y-4 text-r-dark/75">
                  {perfil.descripcion.map((par) => (
                    <p key={par.slice(0, 30)}>{par}</p>
                  ))}
                </div>

                {/* Señales de identificación */}
                <div className="mt-8 border-t border-r-border pt-8">
                  <p className="label-tag mb-4">Señales de identificación</p>
                  <ul className="space-y-3">
                    {perfil.senales.map((s) => (
                      <li key={s} className="flex items-start gap-3 text-sm text-r-dark/80">
                        <span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-r-green" />
                        {s}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8">
                  <Button href={perfil.cta.href} variant="secondary">
                    {perfil.cta.label} →
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* ── PARA QUIÉN NO ES ──────────────────────────────────────────────── */}
      <section className="section bg-r-white">
        <div className="container-prose">
          <p className="label-tag mb-4">Honestidad</p>
          <h2 className="font-display text-display-md text-r-dark">
            Para quién no es Rentabilismo
          </h2>
          <div className="mt-6 space-y-4 text-r-dark/80">
            <p>
              Para quien busca resultados sin esfuerzo ni cambio real. El
              método requiere mirar al negocio con honestidad y hacer cambios
              concretos.
            </p>
            <p>
              Para quien ya tiene un sistema que funciona bien y genera margen
              suficiente. Si el negocio está sano, Rentabilismo no es lo que
              necesitas ahora.
            </p>
            <p>
              Para quien quiere escalar a velocidad máxima sin consolidar la
              base. Primero base sólida. Luego escala.
            </p>
          </div>
        </div>
      </section>

      {/* ── CIERRE ────────────────────────────────────────────────────────── */}
      <section className="section bg-r-dark">
        <div className="container-prose">
          <p className="font-display text-display-md text-r-white">
            Si te has reconocido en alguno de los tres perfiles, el siguiente
            paso es claro.
          </p>
          <div className="mt-10">
            <Button href="/empieza-aqui" variant="primary">
              Empieza aquí →
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
