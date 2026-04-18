import type { Metadata } from "next";
import Breadcrumb from "@/components/ui/Breadcrumb";
import { SITE_URL } from "@/lib/siteConfig";

const EXTERNAL = "https://focorentabilismo.com";
const DOMAIN   = "focorentabilismo.com";

export const metadata: Metadata = {
  title: "Foco Rentabilismo — Central de casos prácticos y herramientas | Rentabilismo",
  description:
    "focorentabilismo.com: central de casos prácticos, herramientas descargables y análisis de rentabilidad empresarial. Contenido aplicable a negocios reales, sin teoría vacía.",
  alternates: { canonical: `${SITE_URL}/blog-recursos` },
};

export default function BlogRecursosPage() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section className="bg-r-green py-12 sm:py-16 md:py-20">
        <div className="container-site">
          <Breadcrumb items={[{ label: "Inicio", href: "/" }, { label: "Blog y recursos" }]} />
          <p className="label-tag mb-4 text-r-warm/50">Recursos · {DOMAIN}</p>
          <h1 className="font-display text-display-xl text-r-white">
            Central de casos prácticos y herramientas
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-r-warm/70">
            Casos reales de aplicación del Método 5P, herramientas descargables
            y análisis de rentabilidad empresarial. El criterio es uno: ¿puedes
            aplicar esto en tu negocio esta semana?
          </p>
          <div className="mt-8">
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

      {/* ── QUÉ ES ────────────────────────────────────────────────────────── */}
      <section className="section bg-r-cream">
        <div className="container-content">
          <p className="label-tag mb-4">Qué es</p>
          <h2 className="font-display text-display-md text-r-dark">
            Una central de recursos para el empresario que trabaja con sus propios números
          </h2>
          <div className="mt-6 space-y-4 text-r-dark/85">
            <p>
              Focorentabilismo.com es la central de contenido y herramientas del
              ecosistema Rentabilismo. No es un blog de motivación ni una newsletter
              de tendencias del mercado. Es un repositorio práctico: casos de
              aplicación del Método 5P, herramientas para usar directamente y
              análisis de situaciones reales desde la perspectiva de la rentabilidad.
            </p>
            <p>
              Cada recurso responde a una situación concreta que un empresario o
              empresaria puede estar viviendo ahora mismo: cómo calcular el margen
              real de un producto, cómo estructurar el equipo para que el negocio
              no dependa de una sola persona, cómo decidir si vale la pena
              invertir en un canal de captación antes de optimizar el cierre.
            </p>
            <p>
              El criterio de publicación es estricto: si no es aplicable esta
              semana, no tiene sitio aquí.
            </p>
          </div>
        </div>
      </section>

      {/* ── QUÉ ENCONTRARÁS ──────────────────────────────────────────────── */}
      <section className="section bg-r-cream">
        <div className="container-content">
          <p className="label-tag mb-4">Qué encontrarás</p>
          <h2 className="font-display text-display-md text-r-dark mb-8">
            Cuatro tipos de contenido
          </h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              {
                num:    "01",
                titulo: "Casos prácticos",
                desc:   "Situaciones reales de empresarios y empresarias que aplicaron el Método 5P a su negocio. Qué hicieron, qué cambió, qué salió distinto de lo esperado y qué aprendieron. Sin maquillar los resultados.",
              },
              {
                num:    "02",
                titulo: "Análisis por palanca",
                desc:   "Artículos de fondo sobre Precios, Procesos, Personas, Producto y Promoción. Cómo diagnosticar cada palanca, qué señales indican que está fallando y qué acciones tienen más impacto.",
              },
              {
                num:    "03",
                titulo: "Herramientas y plantillas",
                desc:   "Calculadoras de margen, plantillas de proceso, frameworks de decisión y recursos descargables. Listos para usar directamente en el negocio, sin adaptación teórica previa.",
              },
              {
                num:    "04",
                titulo: "Reflexión editorial",
                desc:   "Análisis del entorno empresarial desde la perspectiva de la rentabilidad real. Sin grandes declaraciones ni tendencias de gurú. Con datos, criterio y aplicación práctica.",
              },
            ].map((c) => (
              <div key={c.num} className="card">
                <p className="text-xs font-semibold tracking-widest text-r-muted/50 mb-2">{c.num}</p>
                <h3 className="font-display text-display-sm text-r-dark mb-2">{c.titulo}</h3>
                <p className="text-sm text-r-dark/75 leading-relaxed">{c.desc}</p>
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
            Quién aprovecha más este contenido
          </h2>
          <ul className="space-y-3 max-w-2xl">
            {[
              "El empresario o empresaria que toma decisiones mejor cuando ha leído análisis reales, no resúmenes de tendencias.",
              "El que no tiene tiempo para formación estructurada pero sí puede leer un caso práctico de diez minutos.",
              "El que ya usa las herramientas gratuitas y quiere más contexto sobre la palanca que está trabajando.",
              "El que busca una herramienta concreta — una calculadora, una plantilla, un framework — sin tener que construirla desde cero.",
            ].map((p) => (
              <li key={p} className="flex items-start gap-3 text-r-dark/85">
                <span className="mt-[5px] h-1.5 w-1.5 shrink-0 rounded-full bg-r-green" />
                <span>{p}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────────────────── */}
      <section className="section bg-r-green">
        <div className="container-content">
          <p className="label-tag mb-3 text-r-warm/50">{DOMAIN}</p>
          <h2 className="font-display text-display-md text-r-white mb-4">
            Accede a los recursos
          </h2>
          <p className="text-r-warm/70 mb-7 leading-relaxed max-w-xl">
            Sin suscripción obligatoria. Sin barrera de entrada. Accede directamente
            y empieza por el caso práctico o la herramienta que más encaje con el
            momento de tu negocio ahora mismo.
          </p>
          <a
            href={EXTERNAL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-r-lime px-7 py-3.5 text-sm font-semibold text-r-dark no-underline hover:bg-r-lime/85 transition-colors"
          >
            Ir a {DOMAIN} ↗
          </a>
        </div>
      </section>
    </>
  );
}
