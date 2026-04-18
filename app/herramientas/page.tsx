import type { Metadata } from "next";
import Link from "next/link";
import { SITE_URL } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "Herramientas gratuitas | Rentabilismo",
  description:
    "Tres herramientas gratuitas basadas en el Método 5P: diagnóstico empresarial, avatar de cliente ideal y validador de ideas.",
  alternates: { canonical: `${SITE_URL}/herramientas` },
};

const TOOLS = [
  {
    num:          "01",
    name:         "Diagnóstico Empresarial",
    domain:       "rentabilismo.online",
    externalHref: "https://rentabilismo.online",
    href:         "/herramientas/diagnostico",
    tag:          "Diagnóstico · Gratis",
    que:          "Cuestionario guiado de 15 minutos que analiza tu negocio en las cinco palancas del Método 5P e identifica cuál está limitando tu rentabilidad ahora mismo.",
    pain:         "Trabajo mucho pero el negocio no mejora. No sé exactamente qué está fallando ni qué corregir primero.",
    obtienes:     ["Puntuación por palanca", "Palanca prioritaria identificada", "Tres acciones concretas"],
  },
  {
    num:          "02",
    name:         "Avatar de Cliente Ideal",
    domain:       "avatar-rentabilismo.com",
    externalHref: "https://avatar-rentabilismo.com",
    href:         "/herramientas/conoce-a-tu-cliente",
    tag:          "Cliente ideal · Gratis",
    que:          "Proceso guiado para construir el perfil detallado de tu cliente ideal: quién es, qué le duele, qué le frena y cómo decide. Listo para usar en comunicación y ventas.",
    pain:         "Me dirijo a todo el mundo y al final no convenzo a nadie. Mi comunicación no conecta.",
    obtienes:     ["Ficha completa del avatar", "Mapa de dolores y objeciones", "Canales y mensajes sugeridos"],
  },
  {
    num:          "03",
    name:         "Validador de Ideas",
    domain:       "idea-rentabilismo.com",
    externalHref: "https://idea-rentabilismo.com",
    href:         "/herramientas/valida-tu-idea",
    tag:          "Validación · Gratis",
    que:          "Framework de cinco dimensiones para comprobar si una idea de negocio tiene las condiciones mínimas de viabilidad antes de invertir tiempo y dinero en ella.",
    pain:         "He lanzado cosas antes que no funcionaron. No quiero repetir el error.",
    obtienes:     ["Puntuación de viabilidad", "Puntos débiles identificados", "Hipótesis que validar antes de avanzar"],
  },
];

export default function HerramientasPage() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section className="bg-r-green py-12 sm:py-16 md:py-20">
        <div className="container-site">
          <p className="label-tag mb-4 text-r-warm/50">Ecosistema Rentabilismo · Gratis</p>
          <h1 className="font-display text-display-xl text-r-white">
            Tres herramientas para diagnosticar, conocer a tu cliente y validar ideas
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-r-warm/70">
            Basadas en el Método 5P. Sin registro complicado. Resultado inmediato.
          </p>
        </div>
      </section>

      {/* ── LAS 3 HERRAMIENTAS ────────────────────────────────────────────── */}
      <section className="section bg-r-cream">
        <div className="container-content">
          <div className="space-y-6">
            {TOOLS.map((tool) => (
              <div key={tool.num} className="card-accent">
                <div className="grid gap-8 md:grid-cols-[260px_1fr] md:gap-12">

                  {/* Columna izquierda — identidad */}
                  <div>
                    <div className="flex items-start justify-between gap-2 mb-4">
                      <span className="text-xs font-semibold tracking-widest text-r-muted/50">{tool.num}</span>
                      <span className="label-tag text-r-green">{tool.tag}</span>
                    </div>
                    <h2 className="font-display text-display-sm text-r-dark">
                      {tool.name}
                    </h2>
                    <p className="mt-4 border-l-2 border-r-lime pl-3 text-sm italic text-r-muted leading-relaxed">
                      &ldquo;{tool.pain}&rdquo;
                    </p>
                  </div>

                  {/* Columna derecha — contenido */}
                  <div className="flex flex-col gap-4">
                    <p className="text-sm text-r-dark/80 leading-relaxed">
                      {tool.que}
                    </p>
                    <ul className="space-y-1.5">
                      {tool.obtienes.map((o) => (
                        <li key={o} className="flex items-start gap-2 text-xs text-r-dark/70">
                          <span className="mt-[3px] h-1.5 w-1.5 shrink-0 rounded-full bg-r-lime" />
                          {o}
                        </li>
                      ))}
                    </ul>
                    <div className="mt-auto flex flex-wrap items-center gap-4 pt-2">
                      <a
                        href={tool.externalHref}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-r-green px-5 py-2.5 text-sm font-semibold text-r-white no-underline hover:bg-r-green-2 transition-colors"
                      >
                        Acceder a {tool.domain} ↗
                      </a>
                      <Link
                        href={tool.href}
                        className="text-sm text-r-muted no-underline hover:text-r-dark transition-colors"
                      >
                        Cómo funciona →
                      </Link>
                    </div>
                  </div>

                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── EL ECOSISTEMA ────────────────────────────────────────────────── */}
      <section className="section bg-r-cream">
        <div className="container-content">
          <p className="label-tag mb-4">El ecosistema completo</p>
          <h2 className="font-display text-display-md text-r-dark mb-4">
            Del diagnóstico a la transformación
          </h2>
          <div className="max-w-2xl space-y-3 text-r-dark/80 mb-10">
            <p>
              Las herramientas gratuitas hacen el diagnóstico: identifican qué
              palanca está fallando, quién es tu cliente ideal o si una idea
              tiene viabilidad real. Pero diagnosticar no es suficiente.
            </p>
            <p>
              El trabajo real empieza después: aplicar el sistema con tus
              números concretos, tomar decisiones con criterio y mantener el
              rumbo cuando el día a día presiona. Para eso existe el resto del
              ecosistema Rentabilismo.
            </p>
          </div>
          <div className="space-y-4">
            {[
              {
                label:    "Plataforma SaaS",
                sub:      "rentabilismo.com",
                href:     "/plataforma",
                para:     "Para el empresario que quiere estructura y acompañamiento sin consultor presencial.",
                desc:     "Aplica el Método 5P con módulos guiados, seguimiento de tus métricas reales y recursos específicos para cada palanca. Avanza a tu ritmo, con el sistema completo.",
              },
              {
                label:    "Blog y contenidos",
                sub:      "focorentabilismo.com",
                href:     "/blog-recursos",
                para:     "Para quien quiere seguir aprendiendo o necesita referencia sobre un tema concreto.",
                desc:     "Artículos de fondo, análisis de casos y recursos prácticos sobre rentabilidad empresarial. Sin motivación vacía ni teoría desconectada del negocio real.",
              },
              {
                label:    "Consultoría presencial",
                sub:      "consultoriametodo.es",
                href:     "/consultoria",
                para:     "Para quien prefiere acompañamiento directo y quiere resultados en el menor tiempo.",
                desc:     "Trabajo con tu negocio: tus números, tu equipo, tus decisiones. Presencial en A Coruña o por remoto. Sin metodología genérica ni diagnósticos de manual.",
              },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="group flex items-start justify-between gap-6 border border-r-border p-6 no-underline transition-colors hover:border-r-green"
              >
                <div className="flex-1">
                  <div className="flex items-baseline gap-3 mb-1">
                    <p className="font-semibold text-r-dark group-hover:text-r-green transition-colors">{item.label}</p>
                    <p className="text-xs text-r-green">{item.sub}</p>
                  </div>
                  <p className="text-xs font-medium text-r-muted mb-2">{item.para}</p>
                  <p className="text-sm text-r-dark/70 leading-relaxed">{item.desc}</p>
                </div>
                <span className="shrink-0 mt-1 text-r-muted/40 group-hover:text-r-green transition-colors">→</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
