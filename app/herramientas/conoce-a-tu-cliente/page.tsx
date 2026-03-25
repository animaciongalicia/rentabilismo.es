import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/ui/Breadcrumb";
import Button from "@/components/ui/Button";
import { SITE_URL, TOOLS_FREE } from "@/lib/siteConfig";

const TOOL = TOOLS_FREE[1];
const OTHER_TOOLS = [TOOLS_FREE[0], TOOLS_FREE[2]];

export const metadata: Metadata = {
  title: "Avatar de Cliente Ideal — Define a quién le vendes exactamente | Rentabilismo",
  description:
    "Herramienta gratuita para construir el perfil detallado de tu cliente ideal: quién es, qué le duele, cómo decide y dónde encontrarlo. Sin cliente definido, no hay mensaje que funcione.",
  alternates: { canonical: `${SITE_URL}/herramientas/conoce-a-tu-cliente` },
  openGraph: {
    title: "Avatar de Cliente Ideal — Define a quién le vendes exactamente | Rentabilismo",
    description:
      "Herramienta gratuita para construir el perfil detallado de tu cliente ideal.",
    url: `${SITE_URL}/herramientas/conoce-a-tu-cliente`,
  },
};

export default function ConoceATuClientePage() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section className="bg-r-dark py-20 sm:py-24 md:py-32">
        <div className="container-site">
          <Breadcrumb items={[
            { label: "Inicio", href: "/" },
            { label: "Herramientas", href: "/herramientas" },
            { label: "Avatar de Cliente Ideal" },
          ]} />
          <p className="label-tag mb-4 text-r-warm/50">{TOOL.tag} · {TOOL.domain}</p>
          <h1 className="font-display text-display-xl text-r-white">
            Avatar de Cliente Ideal
          </h1>
          <p className="mt-6 max-w-2xl text-xl leading-relaxed text-r-warm/75">
            Si no sabes exactamente a quién le vendes, no puedes escribir
            un mensaje que conecte, ni elegir el canal correcto, ni fijar
            un precio que tenga sentido para esa persona.
          </p>
          <div className="mt-10">
            <a
              href={TOOL.externalHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-r-lime px-7 py-3.5 text-sm font-semibold text-r-dark no-underline hover:bg-r-lime/90 transition-colors"
            >
              Definir mi cliente ideal gratis ↗
            </a>
          </div>
        </div>
      </section>

      {/* ── EL PROBLEMA ──────────────────────────────────────────────────── */}
      <section className="section bg-r-white">
        <div className="container-prose">
          <p className="label-tag mb-4">El problema</p>
          <h2 className="font-display text-display-md text-r-dark">
            &ldquo;Me dirijo a todo el mundo&rdquo; es la manera más segura de no convencer a nadie
          </h2>
          <div className="mt-6 space-y-5 text-r-dark/85">
            <p>
              Cuando un negocio no tiene definido su cliente ideal, todo se
              resiente. Los mensajes son genéricos y no conectan. La publicidad
              atrae a personas que no tienen el perfil. Las reuniones de ventas
              se alargan porque el cliente no estaba cualificado. Y el equipo
              de atención dedica energía a clientes que nunca estuvieron bien
              encajados desde el principio.
            </p>
            <p>
              El problema no es que no haya suficientes clientes. El problema
              es que no hay claridad sobre qué tipo de cliente hace que el
              negocio funcione. Cuál es el cliente que paga bien, recomienda,
              vuelve y genera menos fricción en la entrega.
            </p>
            <p>
              La respuesta instintiva de muchos empresarios es &ldquo;no quiero
              limitar mi mercado&rdquo;. Pero la paradoja es la contraria: cuanto
              más específico eres sobre a quién te diriges, más fácil es que
              esa persona específica te elija a ti sobre cualquier otro.
            </p>
          </div>
        </div>
      </section>

      {/* ── QUÉ ES ────────────────────────────────────────────────────────── */}
      <section className="section bg-r-warm">
        <div className="container-prose">
          <p className="label-tag mb-4">Qué es el Avatar de Cliente Ideal</p>
          <h2 className="font-display text-display-md text-r-dark">
            Una ficha completa de tu cliente más valioso
          </h2>
          <div className="mt-6 space-y-5 text-r-dark/85">
            <p>
              El Avatar de Cliente Ideal es un perfil detallado de la persona
              (o empresa) que mejor encaja con lo que vendes. No es un
              segmento demográfico genérico. Es una descripción concreta
              de quién es, qué le pasa, cómo piensa y cómo decide.
            </p>
            <p>
              La herramienta en avatar-rentabilismo.com te guía por un proceso
              estructurado de preguntas que construyen ese perfil por capas:
              primero los datos observables (quién es), luego los datos internos
              (qué le duele, qué desea, qué le frena) y finalmente los datos
              de comportamiento (cómo busca soluciones, qué criterios usa para
              decidir, qué objeciones tiene).
            </p>
            <p>
              El resultado es un documento que puedes usar directamente en tu
              comunicación, en tu publicidad, en tu proceso de ventas y en el
              diseño de nuevos productos o servicios.
            </p>
          </div>
        </div>
      </section>

      {/* ── CÓMO FUNCIONA ────────────────────────────────────────────────── */}
      <section className="section bg-r-cream">
        <div className="container-site">
          <p className="label-tag mb-4">El proceso</p>
          <h2 className="font-display text-display-md text-r-dark mb-8">
            Cuatro dimensiones del perfil
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            {[
              {
                letra: "A",
                titulo: "Quién es",
                desc: "Datos observables: edad, situación profesional, sector, tamaño de negocio si es B2B, nivel de ingresos, contexto vital. No es para reducirlo a una estadística, sino para poder visualizarlo con claridad.",
              },
              {
                letra: "B",
                titulo: "Qué le duele y qué desea",
                desc: "Los problemas reales que tiene ahora mismo y los resultados que quiere conseguir. La diferencia entre el dolor declarado (lo que dice que quiere) y el dolor real (lo que realmente le quita el sueño).",
              },
              {
                letra: "C",
                titulo: "Qué le frena",
                desc: "Las objeciones, miedos y creencias que le impiden comprar o actuar. Cada objeción no resuelta es una venta perdida. Conocerlas antes permite anticiparlas en el mensaje y en el proceso de venta.",
              },
              {
                letra: "D",
                titulo: "Cómo decide",
                desc: "Dónde busca información, en quién confía, qué criterios usa para comparar opciones, cuánto tarda en decidir y qué necesita para dar el paso. El mapa de su proceso de decisión.",
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
            Cuándo tiene más sentido usar esta herramienta
          </h2>
          <div className="space-y-6">
            {[
              {
                caso: "Vas a lanzar o relanzar tu comunicación",
                desc: "Si estás a punto de crear o reformular tu web, tu presencia en redes o tus materiales de venta, el avatar tiene que estar definido antes. Todo lo demás depende de él.",
              },
              {
                caso: "Tu publicidad no convierte o atrae al perfil equivocado",
                desc: "Si inviertes en publicidad y los leads que llegan no encajan o no tienen presupuesto, el problema casi siempre es de segmentación. Y la segmentación parte del avatar.",
              },
              {
                caso: "Tus clientes son muy distintos entre sí",
                desc: "Si cada cliente parece un caso diferente, o si tienes tipos de clientes muy distintos con necesidades incompatibles, necesitas decidir cuál es el perfil al que quieres servir mejor.",
              },
              {
                caso: "Quieres mejorar tu proceso de ventas",
                desc: "Un vendedor o dueño que conoce en profundidad el avatar de su cliente tiene conversaciones de venta más cortas, mejores cierres y menos negociación de precio.",
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
            Señales de que necesitas definir tu avatar
          </h2>
          <ul className="space-y-4">
            {[
              "Cuando te preguntan a quién va dirigido tu negocio, tu respuesta empieza por 'a cualquier persona que...'",
              "Tus mensajes de marketing hablan de lo que haces, no del problema que resuelves a una persona concreta.",
              "Los clientes que llegan piden descuento con frecuencia o no tienen presupuesto para lo que ofreces.",
              "Tardas mucho en cerrar ventas porque hay muchas dudas que no habías anticipado.",
              "No sabes exactamente de dónde vienen tus mejores clientes ni cómo replicarlo.",
              "Cada proyecto o encargo parece diferente al anterior porque no tienes un tipo de cliente definido.",
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
              "Ficha completa de tu cliente ideal en las cuatro dimensiones.",
              "Mapa de sus dolores reales y sus deseos específicos.",
              "Lista de objeciones más comunes y cómo abordarlas.",
              "Descripción de su proceso de decisión de compra.",
              "Sugerencias de canales y mensajes para conectar con ese perfil.",
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
          <p className="label-tag mb-4 text-r-warm/50">El siguiente paso</p>
          <h2 className="font-display text-display-md text-r-white mb-4">
            Define a tu cliente ideal antes de escribir una sola línea de marketing
          </h2>
          <p className="text-r-warm/70 mb-8 text-lg leading-relaxed">
            La herramienta está disponible de forma gratuita en avatar-rentabilismo.com.
            Proceso guiado, resultado inmediato, sin necesidad de formación previa.
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
