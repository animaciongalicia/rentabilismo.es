import type { Metadata } from "next";
import Link from "next/link";
import Button from "@/components/ui/Button";
import { SITE_URL, METODO_5P_LINKS } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "Empieza aquí — Tu punto de entrada a Rentabilismo",
  description:
    "No hay un único sitio por donde empezar. Hay uno correcto para tu situación. Elige la ruta que encaja con donde estás ahora.",
  alternates: { canonical: `${SITE_URL}/empieza-aqui` },
  openGraph: {
    title: "Empieza aquí — Rentabilismo",
    description:
      "Tres rutas según tu situación. Elige la tuya.",
    url: `${SITE_URL}/empieza-aqui`,
  },
};

const RUTAS = [
  {
    id: "ruta-bloqueado",
    situacion: "Si tu negocio existe pero no mejora",
    descripcion:
      "Facturas, tienes clientes, pero los márgenes no crecen aunque trabajes más. Necesitas saber qué palanca está limitando el negocio antes de hacer cualquier otra cosa.",
    orden: [
      { paso: "Lee qué es Rentabilismo", href: "/que-es-rentabilismo", desc: "Para entender el marco antes de aplicarlo." },
      { paso: "Estudia el Método 5P completo", href: "/metodo-5p", desc: "Para identificar cuál de las cinco palancas es tu cuello de botella." },
      { paso: "Lee la Filosofía", href: "/filosofia", desc: "Para entender el criterio con el que se toman las decisiones." },
    ],
    cta: { label: "Empezar por Qué es Rentabilismo", href: "/que-es-rentabilismo" },
  },
  {
    id: "ruta-hastiado",
    situacion: "Si ya has probado muchas cosas sin resultado",
    descripcion:
      "Conoces el mercado de la formación y la consultoría. Sabes distinguir el humo. Lo que buscas es algo concreto, sin promesas vacías y que puedas aplicar tú mismo.",
    orden: [
      { paso: "Lee el Manifiesto", href: "/manifiesto", desc: "Para ver si lo que defendemos encaja con lo que buscas." },
      { paso: "Revisa en qué se diferencia esto", href: "/que-es-rentabilismo", desc: "La sección «Frente a lo que ya conoces» responde directamente a tu escepticismo." },
      { paso: "Entra al Método 5P", href: "/metodo-5p", desc: "Sin preámbulos. A ver si el sistema tiene sentido para tu negocio concreto." },
    ],
    cta: { label: "Empezar por el Manifiesto", href: "/manifiesto" },
  },
  {
    id: "ruta-empezando",
    situacion: "Si estás empezando y no quieres hacerlo mal",
    descripcion:
      "Tienes un proyecto o un negocio reciente. Este es el mejor momento: construir bien desde el principio es mucho más fácil que arreglar lo que lleva años mal.",
    orden: [
      { paso: "Entiende el sistema completo", href: "/que-es-rentabilismo", desc: "El marco general antes de entrar en el método." },
      { paso: "Aprende el Método 5P de principio a fin", href: "/metodo-5p", desc: "En ese orden: Personas, Producto, Precios, Procesos, Promoción." },
      { paso: "Usa el Diccionario como referencia", href: "/diccionario", desc: "Para tener el vocabulario claro desde el inicio." },
    ],
    cta: { label: "Empezar por Qué es Rentabilismo", href: "/que-es-rentabilismo" },
  },
];

const RECURSOS_RAPIDOS = [
  { title: "Qué es Rentabilismo", href: "/que-es-rentabilismo", tiempo: "10 min" },
  { title: "Manifiesto", href: "/manifiesto", tiempo: "8 min" },
  { title: "Filosofía", href: "/filosofia", tiempo: "12 min" },
  { title: "Método 5P", href: "/metodo-5p", tiempo: "15 min" },
  { title: "Para quién es", href: "/para-quien-es", tiempo: "7 min" },
  { title: "Diccionario", href: "/diccionario", tiempo: "Consulta" },
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
            situación. Identifica cuál es la tuya y sigue esa ruta.
          </p>
        </div>
      </section>

      {/* ── PREGUNTA ORIENTADORA ──────────────────────────────────────────── */}
      <section className="section-sm bg-r-white">
        <div className="container-prose">
          <h2 className="font-display text-display-md text-r-dark">
            ¿Cuál es tu situación ahora mismo?
          </h2>
          <p className="mt-4 leading-relaxed text-r-dark/80">
            Esa pregunta determina por dónde empiezas. Rentabilismo tiene
            rutas distintas para situaciones distintas. Leer en el orden
            correcto ahorra tiempo y aumenta la probabilidad de que lo que
            lees sea útil de verdad.
          </p>
        </div>
      </section>

      {/* ── LAS TRES RUTAS ────────────────────────────────────────────────── */}
      <section className="section bg-r-cream">
        <div className="container-site max-w-mid">
          <div className="space-y-8">
            {RUTAS.map((ruta) => (
              <div key={ruta.id} id={ruta.id} className="card">
                <h2 className="font-display text-display-sm text-r-dark">
                  {ruta.situacion}
                </h2>
                <p className="mt-3 leading-relaxed text-r-dark/75">
                  {ruta.descripcion}
                </p>

                <div className="mt-7 border-t border-r-border pt-7">
                  <p className="label-tag mb-4">Ruta sugerida</p>
                  <ol className="space-y-4">
                    {ruta.orden.map((item, j) => (
                      <li key={item.href} className="grid grid-cols-[2rem_1fr] gap-3">
                        <span className="font-body mt-0.5 text-xs font-semibold tracking-widest text-r-muted/40">
                          {String(j + 1).padStart(2, "0")}
                        </span>
                        <div>
                          <Link
                            href={item.href}
                            className="font-medium text-r-dark underline-offset-4 hover:text-r-green"
                          >
                            {item.paso}
                          </Link>
                          <p className="mt-0.5 text-sm text-r-muted">{item.desc}</p>
                        </div>
                      </li>
                    ))}
                  </ol>
                </div>

                <div className="mt-7">
                  <Button href={ruta.cta.href} variant="primary">
                    {ruta.cta.label} →
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TODAS LAS PÁGINAS ─────────────────────────────────────────────── */}
      <section className="section bg-r-warm">
        <div className="container-site">
          <p className="label-tag mb-6">Todo el contenido disponible</p>
          <div className="grid gap-px border border-r-border bg-r-border sm:grid-cols-2 lg:grid-cols-3">
            {RECURSOS_RAPIDOS.map((r) => (
              <Link
                key={r.href}
                href={r.href}
                className="group flex items-center justify-between gap-4 bg-r-warm px-6 py-5 no-underline transition-colors hover:bg-r-cream"
              >
                <span className="font-body font-medium text-r-dark group-hover:text-r-green">
                  {r.title}
                </span>
                <span className="shrink-0 text-xs text-r-muted/60">{r.tiempo}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── LAS 5P RÁPIDO ─────────────────────────────────────────────────── */}
      <section className="section bg-r-white">
        <div className="container-site">
          <p className="label-tag mb-6">El Método 5P — acceso directo</p>
          <div className="grid gap-px border border-r-border bg-r-border sm:grid-cols-5">
            {METODO_5P_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="group flex flex-col gap-2 bg-r-white px-5 py-5 no-underline transition-colors hover:bg-r-cream"
              >
                <span className="text-xs font-semibold tracking-widest text-r-muted/50">{link.num}</span>
                <span className="font-body font-semibold text-r-dark group-hover:text-r-green">
                  {link.label}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── ECOSISTEMA ────────────────────────────────────────────────────── */}
      <section className="section bg-r-dark">
        <div className="container-site">
          <p className="label-tag mb-6 text-r-warm/50">Más allá de esta web</p>
          <h2 className="font-display text-display-md text-r-white">
            El ecosistema Rentabilismo
          </h2>
          <p className="mt-4 max-w-xl leading-relaxed text-r-warm/65">
            Esta web es el centro conceptual: el sistema, la filosofía y el
            método. Hay otros activos para quien quiera ir más lejos.
          </p>
          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {[
              {
                nombre: "Plataforma de consultoría",
                url: "rentabilismo.com",
                desc: "Diagnósticos guiados, herramientas y acompañamiento online.",
              },
              {
                nombre: "Blog de contenidos",
                url: "focorentabilismo.com",
                desc: "Artículos prácticos y recursos para seguir aprendiendo.",
              },
              {
                nombre: "Consultoría presencial",
                url: "consultoriametodo.es",
                desc: "Trabajo directo con empresarios en A Coruña y por remoto.",
              },
            ].map((item) => (
              <div key={item.nombre} className="border border-r-border-d p-6">
                <p className="text-xs font-semibold uppercase tracking-widest text-r-warm/35">
                  {item.url}
                </p>
                <p className="mt-2 font-semibold text-r-white">{item.nombre}</p>
                <p className="mt-2 text-sm leading-relaxed text-r-warm/55">{item.desc}</p>
                <p className="mt-4 text-xs text-r-warm/25">Próximamente →</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
