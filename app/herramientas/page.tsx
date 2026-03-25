import type { Metadata } from "next";
import Link from "next/link";
import Button from "@/components/ui/Button";
import { SITE_URL, ECOSYSTEM_LINKS } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "Herramientas gratuitas para diagnosticar y mejorar tu negocio | Rentabilismo",
  description:
    "Tres herramientas gratuitas basadas en el Método 5P: diagnóstico empresarial, definición de cliente ideal y validación de ideas. Sin registro. Resultado inmediato.",
  alternates: { canonical: `${SITE_URL}/herramientas` },
  openGraph: {
    title: "Herramientas gratuitas para diagnosticar y mejorar tu negocio | Rentabilismo",
    description:
      "Tres herramientas gratuitas: diagnóstico empresarial, cliente ideal y validación de ideas.",
    url: `${SITE_URL}/herramientas`,
  },
};

/* ─── datos de cada herramienta ─────────────────────────────────────────── */
const TOOLS = [
  {
    num:          "01",
    id:           "diagnostico",
    name:         "Diagnóstico Empresarial",
    domain:       "rentabilismo.online",
    externalHref: "https://rentabilismo.online",
    href:         "/herramientas/diagnostico",
    tag:          "Diagnóstico · Gratis",
    tagline:      "Descubre qué palanca está limitando la rentabilidad de tu negocio ahora mismo",
    pain:         "Trabajo mucho, he probado cosas, pero el negocio no mejora como debería. No sé exactamente qué está fallando ni qué tendría que corregir primero.",
    que_es: [
      "El Diagnóstico Empresarial es un cuestionario guiado que analiza tu negocio desde las cinco dimensiones del Método 5P: Personas, Producto/Servicio, Precios, Procesos y Promoción/Publicidad.",
      "Las respuestas construyen un mapa de tu negocio tal como está hoy. El sistema identifica cuál de las cinco palancas está más bloqueada y cuál tiene mayor impacto potencial si se trabaja primero.",
      "El resultado no es un listado genérico de recomendaciones. Es un diagnóstico específico de tu situación con las acciones ordenadas por prioridad e impacto estimado.",
    ],
    pasos: [
      { num: "01", titulo: "Respondes el cuestionario", desc: "12-15 minutos. Preguntas directas sobre cómo funciona tu negocio ahora mismo. Cuanto más honesto seas, más útil es el resultado." },
      { num: "02", titulo: "El sistema analiza", desc: "Las respuestas se cruzan con el modelo del Método 5P y se identifica el patrón de bloqueo más frecuente en tu tipo de situación." },
      { num: "03", titulo: "Recibes tu informe", desc: "Puntuación por palanca, identificación del cuello de botella prioritario y tres acciones concretas para empezar. Sin vaguedades." },
    ],
    para_quien: [
      { perfil: "El empresario estancado", desc: "Lleva tiempo sin ver mejora proporcional al esfuerzo. Sabe que algo no funciona pero no tiene claro qué. Necesita claridad antes de seguir gastando energía." },
      { perfil: "El que ha probado sin resultado", desc: "Ha invertido en formación, consultores o herramientas con poca mejora real. Antes de volver a invertir, necesita saber si está atacando el problema correcto." },
      { perfil: "El que quiere priorizar bien", desc: "No está bloqueado, pero quiere tomar la siguiente decisión con criterio. Saber qué área tiene mayor potencial con el menor esfuerzo." },
    ],
    señales: [
      "No puedes explicar con claridad por qué el negocio no va como debería.",
      "Has tomado decisiones bienintencionadas que no han cambiado nada.",
      "Tienes más de un problema a la vez y no sabes cuál resolver primero.",
      "Has contratado ayuda externa que no entendió tu situación real.",
      "Sientes que el negocio depende demasiado de tu presencia.",
    ],
    obtienes: [
      "Puntuación de tu negocio en las cinco palancas del Método 5P.",
      "Identificación de la palanca más bloqueada ahora mismo.",
      "Tres acciones concretas ordenadas por impacto y esfuerzo.",
      "Acceso a recursos específicos para trabajar tu palanca prioritaria.",
    ],
    bg_hero:  "bg-r-dark",
    bg_alt:   "bg-r-warm",
  },
  {
    num:          "02",
    id:           "avatar",
    name:         "Avatar de Cliente Ideal",
    domain:       "avatar-rentabilismo.com",
    externalHref: "https://avatar-rentabilismo.com",
    href:         "/herramientas/conoce-a-tu-cliente",
    tag:          "Definición de cliente · Gratis",
    tagline:      "Define con precisión a quién le vendes, qué le duele y cómo decide",
    pain:         "Me dirijo a todo el mundo y al final no convenzo a nadie. Mi comunicación no conecta, mis anuncios no convierten y los clientes que llegan no son los que quiero.",
    que_es: [
      "El Avatar de Cliente Ideal es un perfil detallado de la persona que mejor encaja con lo que vendes. No es un segmento demográfico genérico. Es una descripción concreta de quién es, qué le pasa, cómo piensa y cómo decide.",
      "La herramienta te guía por un proceso estructurado de preguntas que construyen ese perfil por capas: datos observables (quién es), datos internos (qué le duele, qué desea, qué le frena) y datos de comportamiento (cómo busca soluciones, qué criterios usa para decidir).",
      "El resultado es un documento listo para usar en tu comunicación, tu publicidad, tu proceso de ventas y el diseño de nuevos productos o servicios.",
    ],
    pasos: [
      { num: "A", titulo: "Quién es", desc: "Datos observables: situación profesional, sector, nivel de ingresos, contexto vital. Para poder visualizarlo con claridad antes de escribirle." },
      { num: "B", titulo: "Qué le duele y qué desea", desc: "Los problemas reales que tiene ahora y los resultados que quiere conseguir. La diferencia entre el dolor declarado y el dolor real." },
      { num: "C", titulo: "Qué le frena", desc: "Las objeciones, miedos y creencias que le impiden comprar. Conocerlas permite anticiparlas en el mensaje y en el proceso de venta." },
      { num: "D", titulo: "Cómo decide", desc: "Dónde busca información, en quién confía, qué criterios usa para comparar y qué necesita para dar el paso final." },
    ],
    para_quien: [
      { perfil: "Vas a relanzar tu comunicación", desc: "Si estás a punto de crear o reformular tu web, tu presencia en redes o tus materiales de venta, el avatar tiene que estar definido antes. Todo lo demás depende de él." },
      { perfil: "Tu publicidad no convierte", desc: "Si inviertes en publicidad y los leads que llegan no encajan o no tienen presupuesto, el problema casi siempre es de segmentación. Y la segmentación parte del avatar." },
      { perfil: "Quieres mejorar tus ventas", desc: "Un vendedor o dueño que conoce en profundidad el avatar tiene conversaciones más cortas, mejores cierres y menos negociación de precio." },
    ],
    señales: [
      "Cuando te preguntan a quién va dirigido tu negocio, tu respuesta empieza por 'a cualquier persona que...'",
      "Tus mensajes hablan de lo que haces, no del problema que resuelves a una persona concreta.",
      "Los clientes que llegan piden descuento con frecuencia o no tienen presupuesto.",
      "Tardas mucho en cerrar ventas porque hay dudas que no habías anticipado.",
      "No sabes de dónde vienen tus mejores clientes ni cómo replicarlo.",
    ],
    obtienes: [
      "Ficha completa de tu cliente ideal en cuatro dimensiones.",
      "Mapa de sus dolores reales y sus deseos específicos.",
      "Lista de objeciones más comunes y cómo abordarlas.",
      "Descripción de su proceso de decisión de compra.",
      "Sugerencias de canales y mensajes para conectar con ese perfil.",
    ],
    bg_hero:  "bg-r-green",
    bg_alt:   "bg-r-cream",
  },
  {
    num:          "03",
    id:           "validador",
    name:         "Validador de Ideas",
    domain:       "idea-rentabilismo.com",
    externalHref: "https://idea-rentabilismo.com",
    href:         "/herramientas/valida-tu-idea",
    tag:          "Validación · Gratis",
    tagline:      "Comprueba si tu idea tiene mercado antes de invertir tiempo y dinero en ella",
    pain:         "He lanzado cosas antes que parecían buenas y no funcionaron. No quiero repetir el error. Necesito saber si esta idea tiene base real antes de comprometerme.",
    que_es: [
      "El Validador de Ideas aplica un framework de cinco dimensiones para evaluar si una idea tiene las condiciones mínimas de viabilidad antes de invertir en ella.",
      "No es un test de motivación ni un cuestionario optimista. Es un análisis que te obliga a articular con precisión el problema que resuelves, para quién lo resuelves, por qué tu solución es la adecuada, qué modelo de negocio lo sostiene y si los números tienen sentido.",
      "El resultado es una puntuación de viabilidad por dimensión, una identificación de los puntos débiles y las preguntas críticas que tienes que poder responder con datos antes de comprometer recursos.",
    ],
    pasos: [
      { num: "01", titulo: "El problema", desc: "¿Existe un problema real que esta idea resuelve? ¿Lo reconoce como urgente la persona que tiene que pagarlo?" },
      { num: "02", titulo: "El cliente", desc: "¿Sabes exactamente quién tiene ese problema y tiene capacidad y disposición para pagar? ¿Hay suficientes de ellas?" },
      { num: "03", titulo: "La solución", desc: "¿Tu propuesta resuelve el problema de forma superior a las alternativas actuales? ¿Por qué te elegiría a ti?" },
      { num: "04", titulo: "El modelo", desc: "¿Cómo genera dinero esta idea? ¿El precio que el cliente pagaría cubre costes y genera margen?" },
      { num: "05", titulo: "La viabilidad", desc: "¿Tienes los recursos para ejecutar? ¿Cuánto hasta el primer euro? ¿Qué tiene que ser cierto para que funcione?" },
    ],
    para_quien: [
      { perfil: "Quieres emprender", desc: "Antes de dejar un trabajo, pedir un préstamo o invertir meses de tiempo, necesitas saber si la idea tiene base real. El validador te muestra qué hipótesis son sólidas y cuáles no." },
      { perfil: "Quieres lanzar una nueva línea", desc: "No todas las extensiones de negocio tienen sentido. El validador identifica si la nueva línea tiene viabilidad propia o solo parece buena porque ya tienes clientes." },
      { perfil: "Has fallado antes con lanzamientos", desc: "Si ya has pasado por el ciclo de lanzar sin análisis previo, el validador te da un proceso para no repetirlo. No elimina el riesgo, pero lo hace visible." },
    ],
    señales: [
      "Tienes una idea que te parece obvia pero las personas de tu entorno no reaccionan como esperabas.",
      "No has hablado todavía con ninguna persona real del perfil que sería tu cliente.",
      "Sabes lo que vas a vender pero no sabes exactamente a quién ni a qué precio.",
      "Has lanzado cosas antes con mucha ilusión y sin análisis previo que no funcionaron.",
      "El plan depende de que varias cosas optimistas sean ciertas al mismo tiempo.",
    ],
    obtienes: [
      "Puntuación de viabilidad en las cinco dimensiones del framework.",
      "Identificación de los puntos débiles con mayor riesgo.",
      "Las hipótesis críticas que tienes que validar con datos antes de avanzar.",
      "Recomendación sobre si tiene sentido seguir adelante y en qué condiciones.",
    ],
    bg_hero:  "bg-r-dark",
    bg_alt:   "bg-r-warm",
  },
] as const;

/* ─── página ─────────────────────────────────────────────────────────────── */
export default function HerramientasPage() {
  return (
    <>
      {/* ── HERO PRINCIPAL ───────────────────────────────────────────────── */}
      <section className="bg-r-dark py-20 sm:py-24 md:py-32">
        <div className="container-prose">
          <p className="label-tag mb-4 text-r-warm/50">Herramientas gratuitas</p>
          <h1 className="font-display text-display-xl text-r-white">
            Tres herramientas para diagnosticar, conocer a tu cliente y validar tus ideas
          </h1>
          <p className="mt-6 max-w-2xl text-xl leading-relaxed text-r-warm/75">
            Basadas en el Método 5P. Gratuitas. Sin registro complicado. Resultado
            inmediato. Empieza por la que más encaja con donde estás ahora.
          </p>
          {/* índice rápido */}
          <div className="mt-10 flex flex-wrap gap-4">
            {TOOLS.map((t) => (
              <a
                key={t.id}
                href={`#${t.id}`}
                className="inline-flex items-center gap-2 border border-r-border-d px-4 py-2 text-sm font-medium text-r-warm/70 no-underline transition-colors hover:border-r-lime hover:text-r-white"
              >
                <span className="text-xs text-r-lime">{t.num}</span>
                {t.name}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ══ HERRAMIENTAS ═══════════════════════════════════════════════════ */}
      {TOOLS.map((tool, i) => {
        const isEven = i % 2 === 0;
        return (
          <div key={tool.id} id={tool.id}>

            {/* ── cabecera de herramienta ── */}
            <section className={`${tool.bg_hero} py-16 sm:py-20`}>
              <div className="container-site">
                <div className="flex flex-wrap items-start justify-between gap-6">
                  <div className="max-w-2xl">
                    <p className="label-tag mb-3 text-r-warm/50">{tool.tag}</p>
                    <h2 className="font-display text-display-lg text-r-white">
                      {tool.name}
                    </h2>
                    <p className="mt-4 text-lg leading-relaxed text-r-warm/75">
                      {tool.tagline}
                    </p>
                    <p className="mt-5 max-w-xl border-l-2 border-r-lime pl-4 text-sm italic text-r-warm/60">
                      &ldquo;{tool.pain}&rdquo;
                    </p>
                  </div>
                  <a
                    href={tool.externalHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="shrink-0 inline-flex items-center gap-2 bg-r-lime px-6 py-3 text-sm font-semibold text-r-dark no-underline hover:bg-r-lime/85 transition-colors"
                  >
                    Acceder gratis ↗
                  </a>
                </div>
              </div>
            </section>

            {/* ── qué es ── */}
            <section className="section bg-r-white">
              <div className="container-prose">
                <p className="label-tag mb-4">Qué es</p>
                <h3 className="font-display text-display-md text-r-dark mb-6">
                  {tool.name === "Diagnóstico Empresarial"
                    ? "Un mapa de tu negocio tal como está hoy"
                    : tool.name === "Avatar de Cliente Ideal"
                    ? "Una ficha completa de tu cliente más valioso"
                    : "Un análisis estructurado de la viabilidad real de tu idea"}
                </h3>
                <div className="space-y-5 text-r-dark/85">
                  {tool.que_es.map((p, j) => <p key={j}>{p}</p>)}
                </div>
              </div>
            </section>

            {/* ── cómo funciona ── */}
            <section className={`section ${tool.bg_alt}`}>
              <div className="container-site">
                <p className="label-tag mb-4">
                  {tool.name === "Avatar de Cliente Ideal" ? "Las cuatro dimensiones del perfil" : "Cómo funciona"}
                </p>
                <h3 className="font-display text-display-md text-r-dark mb-8">
                  {tool.name === "Diagnóstico Empresarial" ? "Tres pasos, 15 minutos, resultado concreto"
                   : tool.name === "Avatar de Cliente Ideal" ? "Del dato observable al mapa de decisión"
                   : "Las cinco preguntas que una idea tiene que poder responder"}
                </h3>
                <div className={`grid gap-5 ${tool.pasos.length >= 4 ? "md:grid-cols-2 lg:grid-cols-4" : "md:grid-cols-3"}`}>
                  {tool.pasos.map((paso) => (
                    <div key={paso.num} className="card">
                      <p className="text-xs font-semibold tracking-widest text-r-muted/50 mb-2">{paso.num}</p>
                      <h4 className="font-semibold text-r-dark mb-2">{paso.titulo}</h4>
                      <p className="text-r-dark/80 text-sm leading-relaxed">{paso.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* ── para quién + señales ── */}
            <section className="section bg-r-cream">
              <div className="container-site">
                <div className="grid gap-12 md:grid-cols-2">
                  {/* para quién */}
                  <div>
                    <p className="label-tag mb-4">Para quién es</p>
                    <h3 className="font-display text-display-md text-r-dark mb-6">
                      Quién se beneficia más
                    </h3>
                    <div className="space-y-4">
                      {tool.para_quien.map((p) => (
                        <div key={p.perfil} className="card-accent">
                          <h4 className="font-semibold text-r-dark mb-1">{p.perfil}</h4>
                          <p className="text-sm text-r-dark/80 leading-relaxed">{p.desc}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                  {/* señales + obtienes */}
                  <div className="space-y-10">
                    <div>
                      <p className="label-tag mb-4">Señales de que la necesitas</p>
                      <ul className="space-y-3">
                        {tool.señales.map((s) => (
                          <li key={s} className="flex items-start gap-3">
                            <span className="mt-[5px] h-1.5 w-1.5 shrink-0 rounded-full bg-r-green" />
                            <span className="text-sm text-r-dark/80">{s}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <p className="label-tag mb-4">Qué obtienes</p>
                      <ul className="space-y-3">
                        {tool.obtienes.map((o) => (
                          <li key={o} className="flex items-start gap-3">
                            <span className="mt-[5px] h-1.5 w-1.5 shrink-0 rounded-full bg-r-lime" />
                            <span className="text-sm text-r-dark/80">{o}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* ── CTA de herramienta ── */}
            <section className="section-sm bg-r-green">
              <div className="container-site flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
                <div>
                  <p className="label-tag mb-1 text-r-warm/50">{tool.domain}</p>
                  <p className="font-display text-display-sm text-r-white">
                    Accede gratis — sin registro complicado
                  </p>
                </div>
                <div className="flex flex-wrap gap-4 shrink-0">
                  <a
                    href={tool.externalHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-r-lime px-6 py-3 text-sm font-semibold text-r-dark no-underline hover:bg-r-lime/85 transition-colors"
                  >
                    Ir a {tool.domain} ↗
                  </a>
                  <Link
                    href={tool.href}
                    className="inline-flex items-center gap-2 border border-r-border-d px-6 py-3 text-sm font-semibold text-r-white no-underline hover:bg-r-green-2 transition-colors"
                  >
                    Más información →
                  </Link>
                </div>
              </div>
            </section>

            {/* separador entre herramientas */}
            {i < TOOLS.length - 1 && (
              <div className="divider" />
            )}
          </div>
        );
      })}

      {/* ── EL ECOSISTEMA COMPLETO ────────────────────────────────────────── */}
      <section className="section bg-r-warm">
        <div className="container-site">
          <p className="label-tag mb-4">Más allá de las herramientas gratuitas</p>
          <h2 className="font-display text-display-md text-r-dark mb-4">
            El ecosistema completo
          </h2>
          <p className="max-w-2xl text-r-muted mb-12">
            Para quien quiere ir más lejos: plataforma guiada, recursos editoriales
            de fondo y acompañamiento presencial directo.
          </p>
          <div className="grid gap-6 md:grid-cols-3">
            {ECOSYSTEM_LINKS.map((item) => (
              <Link
                key={item.sublabel}
                href={item.href}
                className="card group flex flex-col no-underline hover:border-r-green transition-colors"
              >
                <div className="mb-4 flex items-center justify-between">
                  <span className="label-tag">{item.tag}</span>
                  <span aria-hidden="true" className="text-r-muted/40 group-hover:text-r-green transition-colors">→</span>
                </div>
                <h3 className="font-display text-display-sm text-r-dark mb-1">{item.label}</h3>
                <p className="text-xs font-medium text-r-green mb-4">{item.sublabel}</p>
                <p className="text-sm text-r-dark/75 leading-relaxed flex-1">{item.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA FINAL ─────────────────────────────────────────────────────── */}
      <section className="section bg-r-dark">
        <div className="container-prose">
          <p className="label-tag mb-4 text-r-warm/50">¿Por dónde empiezo?</p>
          <h2 className="font-display text-display-md text-r-white mb-4">
            Si no sabes cuál usar primero, empieza por el diagnóstico
          </h2>
          <p className="text-r-warm/70 mb-8 text-lg leading-relaxed">
            El diagnóstico te indica cuál de las cinco palancas está limitando
            la rentabilidad de tu negocio ahora mismo. De ahí salen todas las
            decisiones siguientes.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="https://rentabilismo.online"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-r-lime px-7 py-3.5 text-sm font-semibold text-r-dark no-underline hover:bg-r-lime/85 transition-colors"
            >
              Hacer el diagnóstico gratis ↗
            </a>
            <Button href="/empieza-aqui" variant="secondary">Cómo funciona el sistema →</Button>
          </div>
        </div>
      </section>
    </>
  );
}
