import type { Metadata } from "next";
import Breadcrumb from "@/components/ui/Breadcrumb";
import Button from "@/components/ui/Button";
import { SITE_URL } from "@/lib/siteConfig";

const EXTERNAL = "https://focorentabilismo.com";
const DOMAIN   = "focorentabilismo.com";

export const metadata: Metadata = {
  title: "Blog y contenidos — Artículos y recursos sobre rentabilidad empresarial | Rentabilismo",
  description:
    "Focorentabilismo.com: artículos, casos prácticos y recursos sobre cómo mejorar la rentabilidad de un negocio real. Sin teoría vacía. Solo lo que puedes aplicar.",
  alternates: { canonical: `${SITE_URL}/blog-recursos` },
  openGraph: {
    title: "Blog y contenidos — Artículos y recursos sobre rentabilidad empresarial | Rentabilismo",
    description:
      "Artículos, casos prácticos y recursos sobre rentabilidad empresarial. Sin teoría vacía.",
    url: `${SITE_URL}/blog-recursos`,
  },
};

export default function BlogRecursosPage() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section className="bg-r-dark py-20 sm:py-24 md:py-32">
        <div className="container-site">
          <Breadcrumb items={[
            { label: "Inicio", href: "/" },
            { label: "Blog y contenidos" },
          ]} />
          <p className="label-tag mb-4 text-r-warm/50">Recursos · {DOMAIN}</p>
          <h1 className="font-display text-display-xl text-r-white">
            Contenido sobre rentabilidad empresarial que puedes aplicar esta semana
          </h1>
          <p className="mt-6 max-w-2xl text-xl leading-relaxed text-r-warm/75">
            Sin grandes revelaciones. Sin postureo de LinkedIn. Análisis honestos,
            casos reales y recursos concretos para empresarios que quieren
            mejorar su negocio con criterio.
          </p>
          <div className="mt-10">
            <a
              href={EXTERNAL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-r-lime px-7 py-3.5 text-sm font-semibold text-r-dark no-underline hover:bg-r-lime/85 transition-colors"
            >
              Ir a {DOMAIN} ↗
            </a>
          </div>
        </div>
      </section>

      {/* ── EL PROBLEMA ──────────────────────────────────────────────────── */}
      <section className="section bg-r-white">
        <div className="container-prose">
          <p className="label-tag mb-4">El problema con el contenido de negocio</p>
          <h2 className="font-display text-display-md text-r-dark">
            Todo parece relevante pero nada es aplicable
          </h2>
          <div className="mt-6 space-y-5 text-r-dark/85">
            <p>
              El empresario medio consume más contenido sobre negocios que hace
              diez años. Pódcasts, newsletters, vídeos de YouTube, hilos de
              Twitter. Y sin embargo, la mayoría de ese contenido no cambia
              nada en su negocio. Lo consume, lo encuentra interesante, lo
              olvida al día siguiente.
            </p>
            <p>
              El problema no es la cantidad. Es que la mayor parte del contenido
              disponible está pensado para entretener o para vender algo, no
              para ayudar a un empresario concreto a tomar una decisión concreta
              en su negocio concreto.
            </p>
            <p>
              El contenido aspiracional (&ldquo;los hábitos de los empresarios exitosos&rdquo;)
              no ayuda. El contenido genérico (&ldquo;cómo mejorar tu productividad&rdquo;)
              tampoco. Lo que ayuda es el análisis específico de una situación
              real con las decisiones que tomó y el resultado que tuvo.
            </p>
          </div>
        </div>
      </section>

      {/* ── QUÉ ES ────────────────────────────────────────────────────────── */}
      <section className="section bg-r-warm">
        <div className="container-prose">
          <p className="label-tag mb-4">Qué es Foco Rentabilismo</p>
          <h2 className="font-display text-display-md text-r-dark">
            Una publicación editorial especializada en rentabilidad empresarial real
          </h2>
          <div className="mt-6 space-y-5 text-r-dark/85">
            <p>
              Focorentabilismo.com es la publicación editorial del ecosistema
              Rentabilismo. Artículos de fondo, análisis de situaciones reales,
              casos prácticos de aplicación del Método 5P y recursos descargables
              para empresarios que quieren mejorar su negocio con criterio.
            </p>
            <p>
              No es un blog de motivación. No es una newsletter de tendencias
              del sector. Es análisis honesto de lo que funciona y lo que no
              en negocios reales, escrito para alguien que tiene que tomar
              decisiones reales esta semana.
            </p>
            <p>
              El criterio editorial es siempre el mismo: ¿un empresario puede
              leer esto el lunes y hacer algo diferente el martes? Si la
              respuesta es no, el contenido no tiene sitio aquí.
            </p>
          </div>
        </div>
      </section>

      {/* ── QUÉ ENCONTRARÁS ──────────────────────────────────────────────── */}
      <section className="section bg-r-cream">
        <div className="container-site">
          <p className="label-tag mb-4">Qué encontrarás</p>
          <h2 className="font-display text-display-md text-r-dark mb-8">
            Cuatro tipos de contenido
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            {[
              {
                tipo: "Casos prácticos",
                desc: "Situaciones reales de empresarios que aplicaron el Método 5P. Qué hicieron, qué cambió, qué no funcionó como esperaban. Sin nombres cuando hay confidencialidad. Con datos cuando los hay.",
                icon: "01",
              },
              {
                tipo: "Análisis por palanca",
                desc: "Artículos de fondo sobre cada una de las cinco palancas del Método 5P. Precios, procesos, personas, producto, promoción. Cómo diagnosticar, qué señales buscar, cómo actuar.",
                icon: "02",
              },
              {
                tipo: "Recursos y plantillas",
                desc: "Herramientas descargables para aplicar directamente: calculadoras de margen, plantillas de proceso, frameworks de toma de decisiones. Nada que requiera adaptación teórica.",
                icon: "03",
              },
              {
                tipo: "Reflexiones editoriales",
                desc: "Análisis de situaciones del entorno empresarial desde la perspectiva de la rentabilidad. Sin posicionamiento político. Sin grandes declaraciones. Solo observación honesta.",
                icon: "04",
              },
            ].map((c) => (
              <div key={c.tipo} className="card">
                <p className="text-xs font-semibold tracking-widest text-r-muted/50 mb-2">{c.icon}</p>
                <h3 className="font-display text-display-sm text-r-dark mb-3">{c.tipo}</h3>
                <p className="text-r-dark/80 text-sm leading-relaxed">{c.desc}</p>
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
            Quién aprovecha más este contenido
          </h2>
          <div className="space-y-5">
            {[
              {
                perfil: "El empresario que aprende leyendo",
                desc: "Prefiere consumir contenido de calidad a su ritmo antes de tomar decisiones. No busca el truco rápido. Busca entender bien para decidir bien.",
              },
              {
                perfil: "El que quiere formarse sin cursos",
                desc: "No tiene tiempo ni presupuesto para formación estructurada ahora mismo, pero sí puede leer un análisis de 10 minutos que le ayude a pensar mejor su negocio.",
              },
              {
                perfil: "El que ya usa las herramientas y quiere más contexto",
                desc: "Complementa el diagnóstico o la plataforma con lecturas más profundas sobre la palanca que está trabajando en su negocio ahora mismo.",
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

      {/* ── LO QUE NO ENCONTRARÁS ────────────────────────────────────────── */}
      <section className="section bg-r-warm">
        <div className="container-prose">
          <p className="label-tag mb-4">El estilo editorial</p>
          <h2 className="font-display text-display-md text-r-dark mb-6">
            Lo que no encontrarás aquí
          </h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {[
              "Listas de hábitos de emprendedores millonarios",
              "Promesas de resultados en 30 días",
              "Técnicas de productividad sin contexto empresarial",
              "Contenido patrocinado que no añade valor",
              "Resúmenes de libros de negocio americanos",
              "Posicionamiento aspiracional sin datos que lo soporten",
            ].map((item) => (
              <div key={item} className="flex items-start gap-3">
                <span className="mt-1 text-r-muted/40 text-lg leading-none">✕</span>
                <span className="text-sm text-r-dark/80">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────────────────── */}
      <section className="section bg-r-green">
        <div className="container-prose">
          <p className="label-tag mb-4 text-r-warm/50">Empieza a leer</p>
          <h2 className="font-display text-display-md text-r-white mb-4">
            Contenido que puedes aplicar esta semana en tu negocio
          </h2>
          <p className="text-r-warm/70 mb-8 text-lg leading-relaxed">
            Sin suscripción obligatoria. Sin barrera de entrada. Solo accede
            y empieza a leer lo que más encaja con el momento de tu negocio.
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
            <Button href="/herramientas" variant="secondary">Ver herramientas gratuitas</Button>
          </div>
        </div>
      </section>
    </>
  );
}
