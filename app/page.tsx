import type { Metadata } from "next";
import Link from "next/link";
import Button from "@/components/ui/Button";
import SectionHeader from "@/components/ui/SectionHeader";
import ProfileCard from "@/components/ui/ProfileCard";
import { SITE_URL } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "Rentabilismo — El sistema para negocios realmente rentables",
  description:
    "Rentabilismo es el marco práctico para construir negocios más rentables. Sin humo, sin postureo. Método, claridad y acción real para empresarios hispanohablantes.",
  alternates: { canonical: SITE_URL },
};

// ─── Datos de la sección 5P ──────────────────────────────────────────────────
const CINCO_P = [
  {
    num: "01",
    letter: "P",
    name: "Personas",
    desc: "Las personas correctas, en el papel correcto, con las expectativas correctas. Esto lo cambia todo.",
  },
  {
    num: "02",
    letter: "P",
    name: "Producto / Servicio",
    desc: "Lo que vendes debe justificar lo que cobras. Claridad sobre qué vendes, a quién y por qué lo compran.",
  },
  {
    num: "03",
    letter: "P",
    name: "Precio",
    desc: "El precio correcto no es el más bajo. Es el que refleja valor real y genera margen real.",
  },
  {
    num: "04",
    letter: "P",
    name: "Procesos",
    desc: "Sin sistemas no hay escala. Sin escala no hay rentabilidad. Los procesos liberan, no limitan.",
  },
  {
    num: "05",
    letter: "P",
    name: "Promoción",
    desc: "Dar a conocer lo que funciona, no maquillar lo que falla. La promoción honesta no necesita ruido.",
  },
];

// ─── Datos de la sección Pilares ─────────────────────────────────────────────
const PILARES = [
  {
    name: "Claridad",
    desc: "Saber exactamente dónde estás y hacia dónde vas. Sin claridad, todo esfuerzo es ruido.",
  },
  {
    name: "Orden",
    desc: "Primero lo que importa, siempre. El orden no es perfeccionismo; es gestión de prioridades.",
  },
  {
    name: "Rentabilidad",
    desc: "No facturación. No crecimiento por crecer. Rentabilidad real, medible, sostenida.",
  },
  {
    name: "Acción constante",
    desc: "Pequeñas decisiones correctas tomadas de forma continua. El ritmo supera a la intensidad.",
  },
  {
    name: "Sostenibilidad",
    desc: "Lo que no puedes mantener no te sirve. Un negocio que dura es más valioso que uno que despega.",
  },
];

// ─── Perfiles ─────────────────────────────────────────────────────────────────
const PERFILES = [
  {
    index: "01",
    headline: "Tengo negocio y estoy bloqueado",
    description:
      "Llevas años trabajando duro. Factura, tiene clientes, pero los números no mejoran y no sabes bien por qué.",
    signals: [
      "Trabajas más horas que nunca pero el margen no crece",
      "Tienes clientes, pero no siempre rentables",
      "Sientes que el negocio depende demasiado de ti",
    ],
    cta: { label: "Ver mi ruta", href: "/para-quien-es#bloqueado" },
  },
  {
    index: "02",
    headline: "He probado mucho y sigo igual",
    description:
      "Has invertido en formación, en consultores, en herramientas. Cada vez con más expectativas. Cada vez con menos resultados.",
    signals: [
      "Has comprado cursos que no has podido aplicar",
      "Los consultores que contrataste no entendieron tu negocio",
      "Estás harto de promesas y buscas algo concreto",
    ],
    cta: { label: "Ver mi ruta", href: "/para-quien-es#hastiado" },
  },
  {
    index: "03",
    headline: "Quiero empezar sin hacerlo mal",
    description:
      "Tienes una idea, un proyecto o un negocio reciente. No quieres cometer los errores que comete la mayoría.",
    signals: [
      "Aún no tienes claro si tu modelo es rentable",
      "Quieres estructura antes que volumen",
      "Prefieres aprender el método desde el principio",
    ],
    cta: { label: "Ver mi ruta", href: "/para-quien-es#empezando" },
  },
];

// ─── Bloque de navegación editorial ──────────────────────────────────────────
const NAV_CARDS = [
  {
    title: "Qué es Rentabilismo",
    desc: "La definición completa, el origen del concepto y por qué existe.",
    href: "/que-es-rentabilismo",
  },
  {
    title: "Manifiesto Rentabilista",
    desc: "Los principios que definen cómo entendemos la rentabilidad y los negocios.",
    href: "/manifiesto",
  },
  {
    title: "Diccionario Rentabilista",
    desc: "El vocabulario propio del sistema. Términos precisos para pensar con claridad.",
    href: "/diccionario",
  },
];

// ─────────────────────────────────────────────────────────────────────────────
export default function HomePage() {
  return (
    <>
      {/* ── HERO ──────────────────────────────────────────────────────────── */}
      <section className="bg-r-dark py-20 md:py-28 lg:py-36">
        <div className="container-site">
          <div className="max-w-[820px]">
            <p className="label-tag mb-5 text-r-warm/50">
              Un sistema. Un método. Un resultado.
            </p>
            <h1 className="font-display text-display-xl text-r-white">
              Rentabilismo
            </h1>
            <p className="mt-6 max-w-prose text-xl leading-relaxed text-r-warm/80 md:text-2xl">
              El marco práctico para construir negocios realmente rentables.
              Sin humo, sin postureo. Solo método, claridad y acción real.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Button href="/metodo-5p" variant="primary">
                Entender el método
              </Button>
              <Button href="/manifiesto" variant="secondary">
                Leer el manifiesto
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ── PROBLEMA ──────────────────────────────────────────────────────── */}
      <section className="section bg-r-warm">
        <div className="container-site">
          <div className="grid gap-12 md:grid-cols-2 md:gap-16 lg:gap-24">
            <div>
              <p className="label-tag mb-3">El problema real</p>
              <h2 className="font-display text-display-lg text-r-dark">
                Muchos negocios trabajan más y mejoran menos.
              </h2>
            </div>
            <div className="space-y-5 text-r-dark/80">
              <p>
                Trabajas sin parar. El negocio factura. Tienes clientes, equipo,
                gastos. Pero al final del mes los números no cuadran como
                deberían, y no sabes bien por qué.
              </p>
              <p>
                No es un problema de esfuerzo. <strong>Es un problema de sistema.</strong>
              </p>
              <p>
                La mayoría de los negocios no fallan por falta de trabajo o de
                talento. Fallan por falta de método: no tienen claro qué
                funciona, por qué funciona y cómo replicarlo.
              </p>
              <p>
                Eso es lo que resuelve Rentabilismo.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── DEFINICIÓN ─────────────────────────────────────────────────────── */}
      <section className="section bg-r-white">
        <div className="container-site">

          <div className="grid gap-12 md:grid-cols-2 md:gap-16">
            {/* Qué ES */}
            <div>
              <p className="label-tag mb-5">Qué es</p>
              <div className="space-y-4 text-r-dark/85">
                <p className="text-lg font-medium text-r-dark">
                  Rentabilismo es el sistema práctico que combina mentalidad,
                  método y acción para construir negocios más rentables de forma
                  sostenible.
                </p>
                <p>
                  Es un marco mental. Un vocabulario propio. Un conjunto de
                  principios y herramientas que ayudan a empresarios y
                  emprendedores a tomar mejores decisiones, construir mejores
                  estructuras y obtener mejores resultados.
                </p>
                <p>
                  No es una teoría. Es un sistema que se aplica desde el primer
                  día, en negocios reales, con personas reales.
                </p>
              </div>
              <div className="mt-6">
                <Button href="/que-es-rentabilismo" variant="ghost">
                  Leer la definición completa →
                </Button>
              </div>
            </div>

            {/* Qué NO ES */}
            <div>
              <p className="label-tag mb-5">Qué no es</p>
              <ul className="space-y-4" role="list">
                {[
                  ["Coaching motivacional", "No vendemos actitud ni mentalidad positiva desconectada de resultados."],
                  ["Teoría de MBA", "No son conceptos académicos que suenan bien pero no se pueden aplicar."],
                  ["Marketing de gurú", "No hay promesas de éxito rápido ni fórmulas mágicas."],
                  ["Consultoría de postureo", "No hay jerga técnica para parecer importante. Solo claridad."],
                ].map(([title, desc]) => (
                  <li key={title} className="flex gap-4">
                    <span className="mt-1 block h-1.5 w-1.5 shrink-0 rounded-full bg-r-gold" />
                    <div>
                      <p className="font-semibold text-r-dark">{title}</p>
                      <p className="mt-0.5 text-sm text-r-muted">{desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>
      </section>

      {/* ── MÉTODO 5P ──────────────────────────────────────────────────────── */}
      <section className="section bg-r-dark">
        <div className="container-site">
          <SectionHeader
            tag="El método"
            title="Las 5 palancas de la rentabilidad"
            subtitle="Cinco áreas. Cada una conectada con las demás. Trabajar cualquiera de las cinco sin entender las otras es trabajar a medias."
            light
          />

          <div className="mt-14 grid gap-px border border-r-border-d bg-r-border-d md:grid-cols-5">
            {CINCO_P.map((p) => (
              <div
                key={p.num}
                className="flex flex-col gap-3 bg-r-dark p-6 md:p-7"
              >
                <span className="font-body text-xs font-semibold tracking-widest text-r-warm/40">
                  {p.num}
                </span>
                <p className="font-display text-3xl font-bold text-r-green-2">
                  {p.letter}
                </p>
                <p className="font-body text-sm font-semibold uppercase tracking-wider text-r-white">
                  {p.name}
                </p>
                <p className="text-sm leading-relaxed text-r-warm/65">
                  {p.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-10">
            <Button href="/metodo-5p" variant="secondary">
              Explorar el Método 5P completo
            </Button>
          </div>
        </div>
      </section>

      {/* ── FILOSOFÍA / PILARES ────────────────────────────────────────────── */}
      <section className="section bg-r-cream">
        <div className="container-site">
          <SectionHeader
            tag="La filosofía"
            title="Cinco pilares. Una dirección."
            subtitle="Rentabilismo no es solo un método. Es una forma de entender cómo se construyen negocios que duran."
          />

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {PILARES.map((p) => (
              <div key={p.name} className="card-accent">
                <p className="font-body text-sm font-semibold uppercase tracking-wider text-r-green">
                  {p.name}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-r-muted">
                  {p.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PARA QUIÉN ─────────────────────────────────────────────────────── */}
      <section className="section bg-r-white">
        <div className="container-site">
          <SectionHeader
            tag="¿Para quién es?"
            title="Tres perfiles. Una misma necesidad."
            subtitle="Rentabilismo está pensado para empresarios y emprendedores hispanohablantes que necesitan resultados reales."
          />

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {PERFILES.map((perfil) => (
              <ProfileCard key={perfil.index} {...perfil} />
            ))}
          </div>
        </div>
      </section>

      {/* ── ACCESO EDITORIAL ───────────────────────────────────────────────── */}
      <section className="section bg-r-warm">
        <div className="container-site">
          <p className="label-tag mb-10">Profundiza</p>
          <div className="grid gap-px border border-r-border bg-r-border md:grid-cols-3">
            {NAV_CARDS.map((card) => (
              <Link
                key={card.title}
                href={card.href}
                className="group flex flex-col gap-3 bg-r-warm p-8 no-underline transition-colors hover:bg-r-cream"
              >
                <h3 className="font-display text-lg font-semibold text-r-dark group-hover:text-r-green">
                  {card.title}
                </h3>
                <p className="text-sm leading-relaxed text-r-muted">
                  {card.desc}
                </p>
                <span className="mt-auto text-sm font-semibold text-r-green">
                  Leer →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── CIERRE ─────────────────────────────────────────────────────────── */}
      <section className="section bg-r-green">
        <div className="container-site">
          <div className="flex flex-col items-start gap-8 md:flex-row md:items-end md:justify-between">
            <div className="max-w-xl">
              <p className="label-tag mb-4 text-r-warm/50">El primer paso</p>
              <h2 className="font-display text-display-lg text-r-white">
                La rentabilidad no es suerte.<br />Es un resultado de método.
              </h2>
            </div>
            <Button href="/empieza-aqui" variant="primary">
              Empieza aquí →
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
