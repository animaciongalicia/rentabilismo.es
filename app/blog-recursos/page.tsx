import type { Metadata } from "next";
import Breadcrumb from "@/components/ui/Breadcrumb";
import { SITE_URL } from "@/lib/siteConfig";

const EXTERNAL = "https://focorentabilismo.com";
const DOMAIN   = "focorentabilismo.com";

export const metadata: Metadata = {
  title: "Blog y contenidos — Artículos sobre rentabilidad empresarial | Rentabilismo",
  description:
    "focorentabilismo.com: artículos, casos prácticos y recursos sobre cómo mejorar la rentabilidad de un negocio real. Sin teoría vacía. Sin contenido aspiracional.",
  alternates: { canonical: `${SITE_URL}/blog-recursos` },
};

export default function BlogRecursosPage() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section className="bg-r-green py-12 sm:py-16 md:py-20">
        <div className="container-content">
          <Breadcrumb items={[{ label: "Inicio", href: "/" }, { label: "Blog y contenidos" }]} />
          <p className="label-tag mb-4 text-r-warm/50">Recursos · {DOMAIN}</p>
          <h1 className="font-display text-display-xl text-r-white">
            Blog y contenidos sobre rentabilidad empresarial
          </h1>
          <p className="mt-4 text-base leading-relaxed text-r-warm/70">
            Análisis honestos, casos reales y recursos concretos. El criterio
            editorial es uno: ¿puedes aplicar esto en tu negocio esta semana?
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
      <section className="section bg-r-white">
        <div className="container-content">
          <p className="label-tag mb-4">Qué es</p>
          <h2 className="font-display text-display-md text-r-dark">
            Una publicación editorial especializada en rentabilidad empresarial real
          </h2>
          <div className="mt-6 space-y-4 text-r-dark/85">
            <p>
              Focorentabilismo.com es la publicación del ecosistema Rentabilismo.
              Artículos de fondo, casos prácticos de aplicación del Método 5P,
              análisis de situaciones reales y recursos descargables.
            </p>
            <p>
              No es un blog de motivación ni una newsletter de tendencias.
              Es contenido para alguien que tiene que tomar decisiones reales
              esta semana en su negocio. Si no es aplicable, no tiene sitio aquí.
            </p>
          </div>
        </div>
      </section>

      {/* ── QUÉ ENCONTRARÁS ──────────────────────────────────────────────── */}
      <section className="section bg-r-warm">
        <div className="container-content">
          <p className="label-tag mb-4">Qué encontrarás</p>
          <h2 className="font-display text-display-md text-r-dark mb-8">
            Cuatro tipos de contenido
          </h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              { num: "01", titulo: "Casos prácticos",      desc: "Situaciones reales de empresarios que aplicaron el Método 5P. Qué hicieron, qué cambió, qué no funcionó como esperaban." },
              { num: "02", titulo: "Análisis por palanca", desc: "Artículos de fondo sobre Precios, Procesos, Personas, Producto y Promoción. Cómo diagnosticar y cómo actuar en cada una." },
              { num: "03", titulo: "Recursos y plantillas",desc: "Calculadoras de margen, plantillas de proceso, frameworks de decisión. Para usar directamente, sin adaptación teórica." },
              { num: "04", titulo: "Reflexión editorial",  desc: "Análisis de situaciones del entorno empresarial desde la perspectiva de la rentabilidad. Sin grandes declaraciones." },
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
          <ul className="space-y-3">
            {[
              "El empresario que aprende leyendo antes de tomar decisiones. No busca el truco rápido.",
              "El que no tiene tiempo para formación estructurada pero sí puede leer un análisis de 10 minutos.",
              "El que ya usa las herramientas y quiere más contexto sobre la palanca que está trabajando.",
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
            Empieza a leer
          </h2>
          <p className="text-r-warm/70 mb-7 leading-relaxed">
            Sin suscripción obligatoria. Sin barrera de entrada. Accede y empieza
            por lo que más encaja con el momento de tu negocio.
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
