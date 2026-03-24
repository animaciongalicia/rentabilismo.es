import type { Metadata } from "next";
import Link from "next/link";
import Button from "@/components/ui/Button";
import { SITE_URL } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "Empieza aquí — Tu punto de entrada a Rentabilismo",
  description:
    "Encuentra tu punto de partida en Rentabilismo según tu situación actual. Rutas claras para empresarios bloqueados, hartos de probar cosas, o que quieren empezar bien.",
  alternates: { canonical: `${SITE_URL}/empieza-aqui` },
  openGraph: {
    title: "Empieza aquí — Rentabilismo",
    description:
      "Tu punto de entrada al sistema. Rutas claras según tu situación.",
    url: `${SITE_URL}/empieza-aqui`,
  },
};

// ─── Rutas orientadas ─────────────────────────────────────────────────────────
const RUTAS = [
  {
    id: "ruta-bloqueado",
    num: "01",
    situacion: "Tengo negocio y estoy bloqueado",
    descripcion:
      "Tu negocio lleva tiempo sin mejorar aunque trabajes duro. Necesitas diagnóstico claro y un punto de actuación concreto.",
    pasos: [
      { label: "Entiende el sistema completo", href: "/que-es-rentabilismo" },
      { label: "Estudia el Método 5P", href: "/metodo-5p" },
      { label: "Identifica tu perfil", href: "/para-quien-es#bloqueado" },
    ],
    cta: { label: "Empezar por aquí", href: "/metodo-5p" },
  },
  {
    id: "ruta-hastiado",
    num: "02",
    situacion: "He probado mucho y sigo igual",
    descripcion:
      "Ya conoces el mercado de la formación. Sabes lo que no funciona. Buscas algo concreto, honesto y aplicable.",
    pasos: [
      { label: "Lee el Manifiesto para entender la filosofía", href: "/manifiesto" },
      { label: "Revisa en qué se diferencia esto", href: "/que-es-rentabilismo" },
      { label: "Ve al Método 5P directamente", href: "/metodo-5p" },
    ],
    cta: { label: "Leer el Manifiesto primero", href: "/manifiesto" },
  },
  {
    id: "ruta-empezando",
    num: "03",
    situacion: "Quiero empezar sin hacerlo mal",
    descripcion:
      "Estás en el inicio o en una fase temprana. Este es el mejor momento para aprender el sistema antes de construir encima.",
    pasos: [
      { label: "Entiende qué es Rentabilismo", href: "/que-es-rentabilismo" },
      { label: "Aprende el Método 5P desde cero", href: "/metodo-5p" },
      { label: "Revisa el Diccionario para el vocabulario base", href: "/diccionario" },
    ],
    cta: { label: "Empezar desde el principio", href: "/que-es-rentabilismo" },
  },
];

// ─── Recursos de referencia ───────────────────────────────────────────────────
const RECURSOS = [
  {
    title: "Qué es Rentabilismo",
    desc: "La página pilar. Definición, origen y propósito del sistema.",
    href: "/que-es-rentabilismo",
    tiempo: "10 min lectura",
  },
  {
    title: "Manifiesto Rentabilista",
    desc: "Los diez principios que definen la filosofía del sistema.",
    href: "/manifiesto",
    tiempo: "8 min lectura",
  },
  {
    title: "Método 5P",
    desc: "Las cinco palancas explicadas en detalle con aplicación práctica.",
    href: "/metodo-5p",
    tiempo: "15 min lectura",
  },
  {
    title: "Diccionario",
    desc: "El vocabulario preciso del sistema para pensar con claridad.",
    href: "/diccionario",
    tiempo: "Consulta rápida",
  },
];

export default function EmpiezaAquiPage() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section className="bg-r-green py-20 md:py-28">
        <div className="container-site">
          <p className="label-tag mb-4 text-r-warm/50">Orientación</p>
          <h1 className="font-display text-display-xl text-r-white">
            Empieza aquí
          </h1>
          <p className="mt-6 max-w-2xl text-xl leading-relaxed text-r-warm/80">
            No hay un único punto de entrada. Hay uno correcto para tu
            situación. Elige el tuyo.
          </p>
        </div>
      </section>

      {/* ── PREGUNTA ORIENTADORA ──────────────────────────────────────────── */}
      <section className="section-sm bg-r-white">
        <div className="container-prose">
          <p className="label-tag mb-4">Antes de empezar</p>
          <h2 className="font-display text-display-md text-r-dark">
            ¿Cuál es tu situación real ahora mismo?
          </h2>
          <p className="mt-4 text-r-dark/80">
            La respuesta a esa pregunta determina por dónde empiezas.
            Rentabilismo no tiene un único camino: tiene rutas distintas según
            de dónde partes.
          </p>
        </div>
      </section>

      {/* ── RUTAS ─────────────────────────────────────────────────────────── */}
      <section className="section bg-r-cream">
        <div className="container-site">
          <div className="space-y-6">
            {RUTAS.map((ruta, i) => (
              <div key={ruta.id} id={ruta.id} className="card">
                <div className="grid gap-8 md:grid-cols-[1fr_2fr_auto]">

                  {/* Situación */}
                  <div>
                    <span className="label-tag">{ruta.num}</span>
                    <h2 className="mt-2 font-display text-display-sm text-r-dark">
                      {ruta.situacion}
                    </h2>
                    <p className="mt-3 text-sm leading-relaxed text-r-muted">
                      {ruta.descripcion}
                    </p>
                  </div>

                  {/* Pasos */}
                  <div>
                    <p className="label-tag mb-3">Ruta sugerida</p>
                    <ol className="space-y-2.5" role="list">
                      {ruta.pasos.map((paso, j) => (
                        <li key={paso.href} className="flex items-start gap-3">
                          <span className="font-body mt-0.5 text-xs font-semibold tracking-widest text-r-muted/50">
                            {String(j + 1).padStart(2, "0")}
                          </span>
                          <Link
                            href={paso.href}
                            className="text-sm font-medium text-r-dark underline-offset-4 hover:text-r-green"
                          >
                            {paso.label}
                          </Link>
                        </li>
                      ))}
                    </ol>
                  </div>

                  {/* CTA */}
                  <div className="flex items-center md:justify-end">
                    <Button href={ruta.cta.href} variant="primary">
                      {ruta.cta.label}
                    </Button>
                  </div>

                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── RECURSOS ──────────────────────────────────────────────────────── */}
      <section className="section bg-r-warm">
        <div className="container-site">
          <p className="label-tag mb-8">Todos los recursos</p>
          <div className="grid gap-px border border-r-border bg-r-border sm:grid-cols-2 lg:grid-cols-4">
            {RECURSOS.map((r) => (
              <Link
                key={r.title}
                href={r.href}
                className="group flex flex-col gap-4 bg-r-warm p-7 no-underline transition-colors hover:bg-r-cream"
              >
                <div>
                  <p className="font-body text-xs font-semibold uppercase tracking-widest text-r-muted/50">
                    {r.tiempo}
                  </p>
                  <h3 className="mt-2 font-display text-lg font-semibold text-r-dark group-hover:text-r-green">
                    {r.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-r-muted">
                    {r.desc}
                  </p>
                </div>
                <span className="mt-auto text-sm font-semibold text-r-green">
                  Leer →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── ECOSISTEMA (espacios preparados) ─────────────────────────────── */}
      <section className="section bg-r-dark">
        <div className="container-site">
          <p className="label-tag mb-6 text-r-warm/50">Ecosistema Rentabilismo</p>
          <h2 className="font-display text-display-md text-r-white">
            Más allá de esta web
          </h2>
          <p className="mt-4 max-w-xl text-lg leading-relaxed text-r-warm/70">
            Rentabilismo tiene varios activos que trabajan juntos. Esta web es
            el centro conceptual. Aquí encontrarás el sistema, la filosofía
            y el método.
          </p>

          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {[
              {
                name: "Plataforma SaaS",
                url: "rentabilismo.com",
                desc: "Consultoría guiada online, herramientas y diagnósticos.",
                href: "#",
              },
              {
                name: "Blog de contenidos",
                url: "focorentabilismo.com",
                desc: "Artículos, casos prácticos y recursos actualizados.",
                href: "#",
              },
              {
                name: "Consultoría en A Coruña",
                url: "consultoriametodo.es",
                desc: "Servicio directo de consultoría presencial.",
                href: "#",
              },
            ].map((item) => (
              <div
                key={item.name}
                className="border border-r-border-d p-6"
              >
                <p className="text-xs font-semibold uppercase tracking-widest text-r-warm/40">
                  {item.url}
                </p>
                <p className="mt-2 font-semibold text-r-white">{item.name}</p>
                <p className="mt-2 text-sm leading-relaxed text-r-warm/60">
                  {item.desc}
                </p>
                <p className="mt-4 text-xs text-r-warm/30">Próximamente →</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
