import type { Metadata } from "next";
import Breadcrumb from "@/components/ui/Breadcrumb";
import Button from "@/components/ui/Button";
import { SITE_URL } from "@/lib/siteConfig";

const EXTERNAL = "https://rentabilismo.com";
const DOMAIN   = "rentabilismo.com";

export const metadata: Metadata = {
  title: "Plataforma SaaS — Consultoría guiada y herramientas online | Rentabilismo",
  description:
    "Plataforma online para aplicar el Método 5P en tu negocio. Módulos guiados, seguimiento de métricas y decisiones basadas en datos reales. Sin humo. Sin teoría vacía.",
  alternates: { canonical: `${SITE_URL}/plataforma` },
  openGraph: {
    title: "Plataforma SaaS — Consultoría guiada y herramientas online | Rentabilismo",
    description:
      "Plataforma online para aplicar el Método 5P en tu negocio con estructura, seguimiento y recursos prácticos.",
    url: `${SITE_URL}/plataforma`,
  },
};

export default function PlataformaPage() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section className="bg-r-dark py-20 sm:py-24 md:py-32">
        <div className="container-site">
          <Breadcrumb items={[
            { label: "Inicio", href: "/" },
            { label: "Plataforma SaaS" },
          ]} />
          <p className="label-tag mb-4 text-r-warm/50">Plataforma · {DOMAIN}</p>
          <h1 className="font-display text-display-xl text-r-white">
            La plataforma para aplicar el Método 5P en tu negocio
          </h1>
          <p className="mt-6 max-w-2xl text-xl leading-relaxed text-r-warm/75">
            Saber el método es el primer paso. Aplicarlo de forma estructurada,
            con seguimiento real, es lo que cambia el negocio.
          </p>
          <div className="mt-10">
            <a
              href={EXTERNAL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-r-lime px-7 py-3.5 text-sm font-semibold text-r-dark no-underline hover:bg-r-lime/85 transition-colors"
            >
              Acceder a {DOMAIN} ↗
            </a>
          </div>
        </div>
      </section>

      {/* ── EL PROBLEMA ──────────────────────────────────────────────────── */}
      <section className="section bg-r-white">
        <div className="container-prose">
          <p className="label-tag mb-4">El problema</p>
          <h2 className="font-display text-display-md text-r-dark">
            El empresario que sabe qué hacer pero no lo aplica
          </h2>
          <div className="mt-6 space-y-5 text-r-dark/85">
            <p>
              La mayoría de los empresarios que quieren mejorar su negocio no
              tienen un problema de información. Tienen cursos sin terminar,
              libros subrayados, consejos de consultores que no aplicaron.
              El problema no es saber qué hay que hacer. Es hacerlo, de forma
              ordenada, con seguimiento, sin perder el hilo entre semana y semana.
            </p>
            <p>
              Las herramientas de productividad generales (gestores de tareas,
              CRMs, hojas de cálculo) no están diseñadas para mejorar la
              rentabilidad de un negocio. Te organizan el caos pero no te dicen
              qué palanca mover primero ni si lo que estás haciendo está
              funcionando.
            </p>
            <p>
              La plataforma de Rentabilismo resuelve exactamente eso: un entorno
              diseñado específicamente para aplicar el Método 5P con estructura,
              sin perderse, con el foco en lo que realmente mueve la rentabilidad.
            </p>
          </div>
        </div>
      </section>

      {/* ── QUÉ ES ────────────────────────────────────────────────────────── */}
      <section className="section bg-r-warm">
        <div className="container-prose">
          <p className="label-tag mb-4">Qué es la plataforma</p>
          <h2 className="font-display text-display-md text-r-dark">
            Consultoría guiada y herramientas online, sin necesitar un consultor físico
          </h2>
          <div className="mt-6 space-y-5 text-r-dark/85">
            <p>
              rentabilismo.com es una plataforma SaaS que lleva el Método 5P
              a un entorno digital estructurado. Combina diagnóstico, módulos
              de trabajo guiados, seguimiento de métricas y biblioteca de
              recursos en un solo lugar.
            </p>
            <p>
              Funciona como una consultoría guiada: el sistema te va indicando
              en qué trabajar, en qué orden y cómo medir si está funcionando.
              Sin necesitar un consultor presente en cada paso. Sin tener que
              saber de antemano qué hacer.
            </p>
            <p>
              Está construida para el empresario que quiere resultados reales
              y tiene tiempo limitado: sesiones de trabajo enfocadas, con
              impacto medible, sin perderse en teoría que no aplica a su negocio.
            </p>
          </div>
        </div>
      </section>

      {/* ── MÓDULOS ───────────────────────────────────────────────────────── */}
      <section className="section bg-r-cream">
        <div className="container-site">
          <p className="label-tag mb-4">Qué incluye</p>
          <h2 className="font-display text-display-md text-r-dark mb-8">
            Cinco módulos. Una metodología. Un resultado
          </h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              { num: "01", titulo: "Diagnóstico inicial",     desc: "Mapeo completo del negocio en las cinco palancas. Identifica dónde está el mayor bloqueo y define el orden de trabajo." },
              { num: "02", titulo: "Módulo Personas",         desc: "Estructura del equipo, papel del dueño, claridad de roles y productividad real. La base que hace funcionar todo lo demás." },
              { num: "03", titulo: "Módulo Producto/Servicio",desc: "Definición de la oferta, rentabilidad por línea de producto, coherencia y calidad de entrega consistente." },
              { num: "04", titulo: "Módulo Precios",          desc: "Cálculo de coste real, margen objetivo, política de precios y argumentación de valor. La palanca más directa sobre el margen." },
              { num: "05", titulo: "Módulo Procesos",         desc: "Identificación de procesos críticos, documentación, delegación y automatización donde tiene sentido." },
              { num: "06", titulo: "Módulo Promoción",        desc: "Mensaje, canal, coherencia entre promesa y entrega, y métricas de coste de adquisición. Solo cuando las otras cuatro funcionan." },
            ].map((m) => (
              <div key={m.num} className="card">
                <p className="text-xs font-semibold tracking-widest text-r-muted/50 mb-2">{m.num}</p>
                <h3 className="font-display text-display-sm text-r-dark mb-3">{m.titulo}</h3>
                <p className="text-r-dark/80 text-sm leading-relaxed">{m.desc}</p>
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
            El perfil que mejor encaja con la plataforma
          </h2>
          <div className="space-y-5">
            {[
              {
                perfil: "Quieres aplicar el método por tu cuenta",
                desc: "Prefieres trabajar a tu ritmo, sin depender de la disponibilidad de un consultor. La plataforma te da la estructura y el acompañamiento guiado para hacerlo bien.",
              },
              {
                perfil: "Has pasado por formación que no pudiste aplicar",
                desc: "Cursos, libros, talleres: sabías la teoría pero no había un sistema para llevarlo a tu negocio concreto. La plataforma está construida para la implementación, no para el aprendizaje pasivo.",
              },
              {
                perfil: "Necesitas seguimiento y métricas reales",
                desc: "No quieres solo saber qué hacer. Quieres ver si lo que estás haciendo está funcionando. La plataforma incluye seguimiento de indicadores clave por palanca.",
              },
              {
                perfil: "Tu negocio tiene entre 1 y 50 personas",
                desc: "La plataforma está calibrada para negocios pequeños y medianos donde el dueño aún tiene impacto directo en las decisiones. No para corporaciones con departamentos especializados.",
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

      {/* ── DIFERENCIA CON CONSULTORÍA ────────────────────────────────────── */}
      <section className="section bg-r-warm">
        <div className="container-prose">
          <p className="label-tag mb-4">Plataforma vs. consultoría presencial</p>
          <h2 className="font-display text-display-md text-r-dark mb-8">
            Cuándo elegir la plataforma y cuándo la consultoría directa
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="card border-l-4 border-l-r-green">
              <h3 className="font-semibold text-r-dark mb-4">Plataforma — rentabilismo.com</h3>
              <ul className="space-y-2.5 text-sm text-r-dark/80">
                {[
                  "Quieres trabajar a tu ritmo y a tu horario",
                  "Prefieres autonomía con estructura guiada",
                  "Tu situación no requiere intervención urgente",
                  "Tienes capacidad de implementar sin supervisión externa",
                  "Valoras el coste-beneficio frente al acompañamiento directo",
                ].map((p) => (
                  <li key={p} className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-r-green" />
                    {p}
                  </li>
                ))}
              </ul>
            </div>
            <div className="card border-l-4 border-l-r-gold">
              <h3 className="font-semibold text-r-dark mb-4">Consultoría directa — consultoriametodo.es</h3>
              <ul className="space-y-2.5 text-sm text-r-dark/80">
                {[
                  "Necesitas que alguien se siente contigo y mire tus números reales",
                  "Tu situación es urgente o compleja",
                  "Quieres acompañamiento en la implementación, no solo en el diagnóstico",
                  "Prefieres la interacción directa y el ajuste en tiempo real",
                  "Estás en A Coruña o Galicia y valoras el trabajo presencial",
                ].map((p) => (
                  <li key={p} className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-r-gold" />
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────────────────── */}
      <section className="section bg-r-green">
        <div className="container-prose">
          <p className="label-tag mb-4 text-r-warm/50">El siguiente paso</p>
          <h2 className="font-display text-display-md text-r-white mb-4">
            Empieza con el diagnóstico gratuito antes de entrar en la plataforma
          </h2>
          <p className="text-r-warm/70 mb-8 text-lg leading-relaxed">
            El diagnóstico en rentabilismo.online identifica cuál de las cinco
            palancas hay que trabajar primero. Con ese mapa, la plataforma tiene
            mucho más sentido desde el primer módulo.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href={EXTERNAL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-r-lime px-7 py-3.5 text-sm font-semibold text-r-dark no-underline hover:bg-r-lime/85 transition-colors"
            >
              Acceder a {DOMAIN} ↗
            </a>
            <Button href="/herramientas" variant="secondary">Ver herramientas gratuitas</Button>
          </div>
        </div>
      </section>
    </>
  );
}
