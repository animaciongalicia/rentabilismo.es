import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/ui/Breadcrumb";
import Button from "@/components/ui/Button";
import { SITE_URL, TOOLS_FREE } from "@/lib/siteConfig";

const TOOL = TOOLS_FREE[2];
const OTHER_TOOLS = TOOLS_FREE.slice(0, 2);

export const metadata: Metadata = {
  title: "Validador de Ideas — Comprueba si tu idea tiene mercado antes de invertir | Rentabilismo",
  description:
    "Herramienta gratuita para validar ideas de negocio o nuevas líneas de producto. Framework de cinco dimensiones. Resultado inmediato. Evita invertir en lo que no funciona.",
  alternates: { canonical: `${SITE_URL}/herramientas/valida-tu-idea` },
  openGraph: {
    title: "Validador de Ideas — Comprueba si tu idea tiene mercado antes de invertir | Rentabilismo",
    description:
      "Herramienta gratuita para validar ideas de negocio antes de invertir tiempo y dinero en ellas.",
    url: `${SITE_URL}/herramientas/valida-tu-idea`,
  },
};

export default function ValidaTuIdeaPage() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section className="bg-r-dark py-20 sm:py-24 md:py-32">
        <div className="container-site">
          <Breadcrumb items={[
            { label: "Inicio", href: "/" },
            { label: "Herramientas", href: "/herramientas" },
            { label: "Validador de Ideas" },
          ]} />
          <p className="label-tag mb-4 text-r-warm/50">{TOOL.tag} · {TOOL.domain}</p>
          <h1 className="font-display text-display-xl text-r-white">
            Validador de Ideas
          </h1>
          <p className="mt-6 max-w-2xl text-xl leading-relaxed text-r-warm/75">
            Una idea que parece buena no es lo mismo que una idea que tiene
            mercado. Saber la diferencia antes de invertir es la decisión
            más rentable que puedes tomar.
          </p>
          <div className="mt-10">
            <a
              href={TOOL.externalHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-r-lime px-7 py-3.5 text-sm font-semibold text-r-dark no-underline hover:bg-r-lime/90 transition-colors"
            >
              Validar mi idea gratis ↗
            </a>
          </div>
        </div>
      </section>

      {/* ── EL PROBLEMA ──────────────────────────────────────────────────── */}
      <section className="section bg-r-white">
        <div className="container-prose">
          <p className="label-tag mb-4">El problema</p>
          <h2 className="font-display text-display-md text-r-dark">
            El entusiasmo con una idea es inversamente proporcional a la objetividad con la que la evalúas
          </h2>
          <div className="mt-6 space-y-5 text-r-dark/85">
            <p>
              Cuando tienes una idea que te parece buena, el cerebro trabaja
              en tu contra. Busca inconscientemente confirmación de que la idea
              funciona y filtra la información que la cuestiona. Las personas
              cercanas suelen ser amables, no honestas. Y el mercado no da
              su veredicto hasta que ya has invertido.
            </p>
            <p>
              El resultado es conocido: proyectos que se lanzaron con mucha
              energía y poco análisis previo. Líneas de producto que nadie
              pidió. Servicios que parecían lógicos pero que el cliente no
              percibía como prioritarios. Inversiones de tiempo y dinero que
              habrían sido evitables con unas pocas preguntas correctas antes
              de empezar.
            </p>
            <p>
              No se trata de no lanzar. Se trata de lanzar con los ojos abiertos,
              sabiendo qué hipótesis estás asumiendo y cuáles tienes que comprobar
              antes de comprometer recursos serios.
            </p>
          </div>
        </div>
      </section>

      {/* ── QUÉ ES ────────────────────────────────────────────────────────── */}
      <section className="section bg-r-warm">
        <div className="container-prose">
          <p className="label-tag mb-4">Qué es el Validador de Ideas</p>
          <h2 className="font-display text-display-md text-r-dark">
            Un análisis estructurado de la viabilidad real de tu idea
          </h2>
          <div className="mt-6 space-y-5 text-r-dark/85">
            <p>
              El Validador de Ideas de idea-rentabilismo.com aplica un framework
              de cinco dimensiones para evaluar si una idea tiene las condiciones
              mínimas de viabilidad antes de invertir en ella.
            </p>
            <p>
              No es un test de personalidad ni un cuestionario motivacional. Es
              un análisis que te obliga a articular con precisión el problema
              que resuelves, para quién lo resuelves, por qué tu solución es
              la adecuada, qué modelo de negocio lo sostiene y si los números
              tienen sentido.
            </p>
            <p>
              El resultado es una puntuación de viabilidad por dimensión, una
              identificación de los puntos débiles de la idea y las preguntas
              críticas que tienes que responder antes de comprometer recursos
              en el proyecto.
            </p>
          </div>
        </div>
      </section>

      {/* ── LAS 5 DIMENSIONES ────────────────────────────────────────────── */}
      <section className="section bg-r-cream">
        <div className="container-site">
          <p className="label-tag mb-4">El framework de validación</p>
          <h2 className="font-display text-display-md text-r-dark mb-8">
            Cinco preguntas que una idea tiene que poder responder
          </h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                letra: "01",
                titulo: "El problema",
                desc: "¿Existe un problema real que esta idea resuelve? ¿Lo reconoce como problema la persona que tiene que pagarlo? ¿Es lo suficientemente doloroso o urgente para que esa persona actúe?",
              },
              {
                letra: "02",
                titulo: "El cliente",
                desc: "¿Sabes exactamente quién tiene ese problema y tiene capacidad y disposición para pagar por resolverlo? ¿Puedes llegar a esa persona? ¿Hay suficientes de ellas?",
              },
              {
                letra: "03",
                titulo: "La solución",
                desc: "¿Tu propuesta resuelve el problema de forma suficientemente superior a las alternativas actuales? ¿Por qué te elegiría a ti en vez de a lo que ya existe?",
              },
              {
                letra: "04",
                titulo: "El modelo",
                desc: "¿Cómo genera dinero esta idea? ¿El precio que el cliente pagaría cubre los costes reales y genera margen? ¿Escala o siempre requiere el mismo esfuerzo por unidad vendida?",
              },
              {
                letra: "05",
                titulo: "La viabilidad",
                desc: "¿Tienes o puedes conseguir los recursos necesarios para ejecutar esto? ¿Cuánto tiempo hasta el primer euro? ¿Qué tiene que ser cierto para que funcione?",
              },
            ].map((dim) => (
              <div key={dim.letra} className="card">
                <p className="text-xs font-semibold tracking-widest text-r-muted/50 mb-2">{dim.letra}</p>
                <h3 className="font-display text-display-sm text-r-dark mb-3">{dim.titulo}</h3>
                <p className="text-r-dark/80 text-sm leading-relaxed">{dim.desc}</p>
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
            Tres situaciones en las que esta herramienta aporta más
          </h2>
          <div className="space-y-6">
            {[
              {
                caso: "Quieres emprender y tienes una idea",
                desc: "Antes de dejar un trabajo, pedir un préstamo o invertir meses de tu tiempo, necesitas saber si la idea tiene base real. El validador no te dice si la idea es buena. Te dice si las hipótesis sobre las que se apoya son sólidas.",
              },
              {
                caso: "Quieres lanzar una nueva línea de producto o servicio",
                desc: "Un negocio que ya funciona tiene la tentación de añadir cosas que parecen complementarias. No todas las extensiones tienen sentido. El validador identifica si la nueva línea tiene viabilidad propia o si solo parece buena idea porque ya tienes clientes.",
              },
              {
                caso: "Has lanzado cosas antes que no funcionaron",
                desc: "Si ya has pasado por el ciclo de lanzar, no funcionar, asumir pérdidas y volver a empezar, el validador te da un proceso para no repetirlo. No elimina el riesgo, pero lo hace visible antes de comprometer recursos.",
              },
            ].map((c) => (
              <div key={c.caso} className="card-accent">
                <h3 className="font-semibold text-r-dark mb-2">{c.caso}</h3>
                <p className="text-sm text-r-dark/80 leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SEÑALES ───────────────────────────────────────────────────────── */}
      <section className="section bg-r-warm">
        <div className="container-prose">
          <p className="label-tag mb-4">¿Es para ti?</p>
          <h2 className="font-display text-display-md text-r-dark mb-8">
            Señales de que necesitas validar antes de lanzar
          </h2>
          <ul className="space-y-4">
            {[
              "Tienes una idea que te parece obvia pero las personas de tu entorno no reaccionan como esperabas.",
              "No has hablado todavía con ninguna persona real del perfil que sería tu cliente.",
              "Sabes lo que vas a vender pero no sabes exactamente a quién ni a qué precio.",
              "Tu modelo de negocio depende de que mucha gente pague poco, pero no has calculado cuánta gente es 'mucha'.",
              "Has lanzado cosas antes con mucha ilusión y sin previo análisis que no funcionaron.",
              "El plan de negocio que tienes en la cabeza depende de que varias cosas optimistas sean ciertas al mismo tiempo.",
            ].map((señal) => (
              <li key={señal} className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-r-green" />
                <span className="text-r-dark/85">{señal}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── QUÉ OBTIENES ─────────────────────────────────────────────────── */}
      <section className="section bg-r-cream">
        <div className="container-prose">
          <p className="label-tag mb-4">El resultado</p>
          <h2 className="font-display text-display-md text-r-dark mb-8">
            Qué obtienes al terminar
          </h2>
          <ul className="space-y-4">
            {[
              "Puntuación de viabilidad de la idea en las cinco dimensiones del framework.",
              "Identificación de los puntos débiles con mayor riesgo para el proyecto.",
              "Las hipótesis críticas que tienes que validar antes de comprometer recursos.",
              "Preguntas clave que deberías poder responder con datos antes de avanzar.",
              "Recomendación sobre si tiene sentido seguir adelante y en qué condiciones.",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-r-green" />
                <span className="text-r-dark/85">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────────────────── */}
      <section className="section bg-r-green">
        <div className="container-prose">
          <p className="label-tag mb-4 text-r-warm/50">Antes de invertir un euro</p>
          <h2 className="font-display text-display-md text-r-white mb-4">
            Veinte minutos ahora pueden ahorrarte meses de trabajo en la dirección equivocada
          </h2>
          <p className="text-r-warm/70 mb-8 text-lg leading-relaxed">
            La herramienta es gratuita y está disponible en idea-rentabilismo.com.
            No necesitas cuenta ni suscripción. Solo una idea y honestidad para
            responder las preguntas.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href={TOOL.externalHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-r-lime px-7 py-3.5 text-sm font-semibold text-r-dark no-underline hover:bg-r-lime/90 transition-colors"
            >
              Acceder a {TOOL.domain} ↗
            </a>
            <Button href="/herramientas" variant="secondary">Ver todas las herramientas</Button>
          </div>
        </div>
      </section>

      {/* ── OTRAS HERRAMIENTAS ────────────────────────────────────────────── */}
      <section className="section-sm bg-r-dark">
        <div className="container-site">
          <p className="label-tag mb-4 text-r-warm/50">También te puede interesar</p>
          <div className="grid grid-cols-1 gap-px border border-r-border-d bg-r-border-d sm:grid-cols-2">
            {OTHER_TOOLS.map((tool) => (
              <Link
                key={tool.href}
                href={tool.href}
                className="flex flex-col gap-1 bg-r-dark px-5 py-5 no-underline transition-colors hover:bg-r-green"
              >
                <span className="text-xs font-semibold tracking-widest text-r-warm/50">{tool.num} — {tool.tag}</span>
                <span className="font-body font-semibold text-r-white">{tool.name}</span>
                <span className="text-xs text-r-warm/50 mt-1">{tool.tagline}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
