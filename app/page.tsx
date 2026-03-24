import type { Metadata } from "next";
import Link from "next/link";
import Button from "@/components/ui/Button";
import SectionHeader from "@/components/ui/SectionHeader";
import ProfileCard from "@/components/ui/ProfileCard";
import { SITE_URL, METODO_5P_LINKS } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "Rentabilismo — El sistema para negocios realmente rentables",
  description:
    "¿Trabajas mucho y tu negocio no mejora? Rentabilismo es el sistema práctico para construir negocios más rentables. Sin humo. Sin teoría vacía. Con método real.",
  alternates: { canonical: SITE_URL },
};

const PILARES = [
  { name: "Claridad",         desc: "Saber qué está pasando en tu negocio y por qué. Sin claridad, todo esfuerzo es ruido." },
  { name: "Orden",            desc: "Primero lo que importa. El orden no es perfeccionismo, es gestión de prioridades." },
  { name: "Rentabilidad",     desc: "No facturación. No volumen. Margen real, medible, sostenido." },
  { name: "Acción constante", desc: "Pequeñas decisiones correctas tomadas de forma continua. El ritmo supera a la intensidad." },
  { name: "Sostenibilidad",   desc: "Lo que no puedes mantener no te sirve. Un negocio que dura vale más que uno que explota." },
];

const PERFILES = [
  {
    index: "01",
    headline: "Tengo negocio y estoy bloqueado",
    description:
      "Factura, tiene clientes, tiene equipo. Pero los números no mejoran aunque trabajes más horas. Algo no cuadra y no sabes exactamente qué.",
    signals: [
      "Trabajas más que hace tres años y ganas proporcionalmente menos",
      "El negocio depende demasiado de ti para funcionar",
      "No tienes claro cuáles de tus productos o clientes son los más rentables",
    ],
    cta: { label: "Esta es mi situación", href: "/para-quien-es#bloqueado" },
  },
  {
    index: "02",
    headline: "He probado de todo y sigo igual",
    description:
      "Cursos, consultores, herramientas, estrategias. Cada vez con más esperanza. Cada vez con menos resultado. Buscas algo que funcione de verdad.",
    signals: [
      "Has pagado por formación que no has podido aplicar a tu negocio concreto",
      "Los consultores que contrataste no entendieron tu realidad",
      "Estás harto del humo y buscas algo práctico y honesto",
    ],
    cta: { label: "Me identifico con esto", href: "/para-quien-es#hastiado" },
  },
  {
    index: "03",
    headline: "Quiero empezar sin cometer los errores de siempre",
    description:
      "Tienes un proyecto o un negocio reciente. Aún hay margen para construir bien desde el principio. No quieres aprender a base de golpes.",
    signals: [
      "No tienes claro si tu modelo de negocio es rentable de verdad",
      "Ves muchas opciones y no sabes por cuál empezar",
      "Prefieres aprender el sistema antes de escalar sobre él",
    ],
    cta: { label: "Estoy en este punto", href: "/para-quien-es#empezando" },
  },
];

const NAV_CARDS = [
  {
    title: "Qué es Rentabilismo",
    desc: "La definición completa, el origen del concepto y en qué se diferencia de todo lo demás.",
    href: "/que-es-rentabilismo",
  },
  {
    title: "Manifiesto Rentabilista",
    desc: "Lo que creemos sobre los negocios, la rentabilidad y las personas que los sostienen.",
    href: "/manifiesto",
  },
  {
    title: "Diccionario Rentabilista",
    desc: "El vocabulario propio del sistema. Términos precisos para pensar con claridad.",
    href: "/diccionario",
  },
];

export default function HomePage() {
  return (
    <>
      {/* ── HERO ──────────────────────────────────────────────────────────── */}
      <section className="bg-r-dark py-20 md:py-28 lg:py-36">
        <div className="container-site">
          <div className="max-w-[820px]">
            <p className="label-tag mb-5 text-r-warm/50">
              Sistema · Método · Criterio
            </p>
            <h1 className="font-display text-display-xl text-r-white">
              Trabajas duro.<br />Tu negocio merece funcionar mejor.
            </h1>
            <p className="mt-6 max-w-prose text-xl leading-relaxed text-r-warm/80">
              Rentabilismo es el sistema para construir negocios realmente
              rentables. Sin teorías vacías, sin promesas de gurú. Con un método
              claro y lenguaje directo para empresarios que necesitan resultados
              de verdad.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Button href="/metodo-5p" variant="primary">
                Ver el método
              </Button>
              <Button href="/que-es-rentabilismo" variant="secondary">
                Qué es esto
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ── EL PROBLEMA ───────────────────────────────────────────────────── */}
      <section className="section bg-r-warm">
        <div className="container-site">
          <div className="grid gap-12 md:grid-cols-2 md:gap-16 lg:gap-24">
            <div>
              <p className="label-tag mb-3">El problema</p>
              <h2 className="font-display text-display-lg text-r-dark">
                Muchos negocios facturan.<br />Pocos rentabilizan.
              </h2>
            </div>
            <div className="space-y-5 text-[1.0625rem] leading-relaxed text-r-dark/80">
              <p>
                Tienes un negocio que funciona. Lleva años. Tiene clientes,
                tiene estructura. Pero al final del mes, cuando miras los
                números en serio, los márgenes no están donde deberían.
                Y no sabes bien por qué.
              </p>
              <p>
                No es que no trabajes. Trabajas demasiado. El problema es
                otro: estás operando un sistema que nadie diseñó bien.
                Empezaste resolviendo urgencias, fuiste adaptándote, fuiste
                creciendo... y ahora tienes un negocio que te necesita para
                todo y un margen que no crece.
              </p>
              <p>
                Eso no se arregla con más esfuerzo. <strong>Se arregla con más sistema.</strong>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── QUÉ ES / QUÉ NO ES ────────────────────────────────────────────── */}
      <section className="section bg-r-white">
        <div className="container-site">
          <div className="grid gap-12 md:grid-cols-2 md:gap-16">
            <div>
              <p className="label-tag mb-5">Qué es Rentabilismo</p>
              <p className="text-lg font-medium leading-relaxed text-r-dark">
                Un marco de trabajo para diagnosticar qué está fallando, ordenar
                las prioridades y actuar sobre lo que de verdad mejora la
                rentabilidad de tu negocio.
              </p>
              <div className="mt-5 space-y-4 text-r-dark/80">
                <p>
                  No es un curso con vídeos que nunca terminas. No es
                  consultoría con informes que nadie implementa. No es
                  motivación ni mentalidad positiva desconectada de resultados.
                </p>
                <p>
                  Es un sistema con cinco palancas concretas, una filosofía
                  clara y un lenguaje sin postureo. Nada más.
                </p>
              </div>
              <div className="mt-6">
                <Button href="/que-es-rentabilismo" variant="ghost">
                  Leer la definición completa →
                </Button>
              </div>
            </div>

            <div>
              <p className="label-tag mb-5">Lo que no encontrarás aquí</p>
              <ul className="space-y-5" role="list">
                {[
                  ["Promesas de resultados rápidos", "Si en dos semanas ya eres rentable, desconfía. Los sistemas reales tardan más y duran más."],
                  ["Lenguaje de gurú", "Nada de «mentalidad de abundancia», «energía de negocio» ni frases que suenan bien pero no dicen nada."],
                  ["Teoría de MBA desconectada", "Sin casos de Harvard ni frameworks imposibles de aplicar a un negocio de diez personas."],
                  ["Una solución universal", "No existe. Rentabilismo diagnostica tu negocio específico, no el negocio ideal de un manual."],
                ].map(([title, desc]) => (
                  <li key={title as string} className="flex gap-4">
                    <span className="mt-1 block h-1.5 w-1.5 shrink-0 rounded-full bg-r-gold" />
                    <div>
                      <p className="font-semibold text-r-dark">{title}</p>
                      <p className="mt-0.5 text-sm leading-relaxed text-r-muted">{desc}</p>
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
          <div className="grid gap-12 md:grid-cols-2 md:items-end md:gap-16">
            <div>
              <p className="label-tag mb-4 text-r-warm/50">El corazón del sistema</p>
              <h2 className="font-display text-display-lg text-r-white">
                El Método 5P
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-r-warm/75">
                Cinco palancas. Cuando todas funcionan bien, el negocio genera
                rentabilidad. Cuando una falla, las demás lo acusan. El trabajo
                empieza por saber cuál está fallando en tu caso.
              </p>
              <div className="mt-8">
                <Button href="/metodo-5p" variant="primary">
                  Ver el Método 5P completo
                </Button>
              </div>
            </div>
            <div className="grid gap-px border border-r-border-d bg-r-border-d">
              {METODO_5P_LINKS.map((p) => (
                <Link
                  key={p.href}
                  href={p.href}
                  className="group flex items-center gap-5 bg-r-dark px-6 py-4 no-underline transition-colors hover:bg-r-green"
                >
                  <span className="font-body w-7 shrink-0 text-xs font-semibold tracking-widest text-r-warm/35 group-hover:text-r-warm/50">
                    {p.num}
                  </span>
                  <span className="font-display text-lg font-semibold text-r-white">
                    {p.label}
                  </span>
                  <span className="ml-auto text-r-warm/30 group-hover:text-r-warm">→</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── FILOSOFÍA / PILARES ────────────────────────────────────────────── */}
      <section className="section bg-r-cream">
        <div className="container-site">
          <div className="grid gap-10 md:grid-cols-[1fr_2fr] md:gap-16">
            <div>
              <p className="label-tag mb-3">La filosofía</p>
              <h2 className="font-display text-display-lg text-r-dark">
                Cinco principios.<br />Una dirección.
              </h2>
              <p className="mt-5 leading-relaxed text-r-muted">
                Rentabilismo no es solo un método. Es una forma de entender
                cómo se construyen negocios que funcionan y que duran.
              </p>
              <div className="mt-6">
                <Button href="/filosofia" variant="ghost">
                  Ver la filosofía completa →
                </Button>
              </div>
            </div>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
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
        </div>
      </section>

      {/* ── PARA QUIÉN ─────────────────────────────────────────────────────── */}
      <section className="section bg-r-white">
        <div className="container-site">
          <SectionHeader
            tag="Para quién es"
            title="Tres situaciones. Una misma necesidad."
            subtitle="Si te identificas con alguna de estas situaciones, estás en el lugar correcto."
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
          <p className="label-tag mb-8">Profundiza en el sistema</p>
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
                <p className="text-sm leading-relaxed text-r-muted">{card.desc}</p>
                <span className="mt-auto text-sm font-semibold text-r-green">Leer →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── ECOSISTEMA ─────────────────────────────────────────────────────── */}
      <section className="section-sm bg-r-cream">
        <div className="container-site">
          <p className="label-tag mb-6">Ecosistema Rentabilismo</p>
          <div className="grid gap-6 sm:grid-cols-3">
            {[
              {
                name: "Plataforma de consultoría",
                url: "rentabilismo.com",
                desc: "Diagnósticos guiados, herramientas y acompañamiento online para aplicar el sistema a tu negocio concreto.",
              },
              {
                name: "Blog de contenidos",
                url: "focorentabilismo.com",
                desc: "Artículos prácticos, análisis y recursos para empresarios que quieren seguir aprendiendo.",
              },
              {
                name: "Consultoría presencial",
                url: "consultoriametodo.es",
                desc: "Trabajo directo con empresarios en A Coruña y por remoto para quienes prefieren acompañamiento cercano.",
              },
            ].map((item) => (
              <div key={item.name} className="border border-r-border p-6">
                <p className="text-xs font-semibold tracking-widest text-r-muted/50 uppercase">
                  {item.url}
                </p>
                <p className="mt-2 font-semibold text-r-dark">{item.name}</p>
                <p className="mt-2 text-sm leading-relaxed text-r-muted">{item.desc}</p>
                <p className="mt-4 text-xs text-r-muted/40">Próximamente disponible</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CIERRE ─────────────────────────────────────────────────────────── */}
      <section className="section bg-r-green">
        <div className="container-site">
          <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <div className="max-w-xl">
              <p className="label-tag mb-4 text-r-warm/50">Sin atajos</p>
              <h2 className="font-display text-display-lg text-r-white">
                La rentabilidad no es suerte.<br />Es el resultado de un sistema.
              </h2>
            </div>
            <Button href="/empieza-aqui" variant="primary">
              Por dónde empiezo →
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
