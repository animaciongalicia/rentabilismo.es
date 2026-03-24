import type { Metadata } from "next";
import Link from "next/link";
import Button from "@/components/ui/Button";
import { SITE_URL, METODO_5P_LINKS } from "@/lib/siteConfig";

const CURRENT_HREF = "/metodo-5p/producto-servicio";

export const metadata: Metadata = {
  title: "Producto / Servicio — La segunda palanca del Método 5P | Rentabilismo",
  description:
    "No basta con que sea bueno. Tiene que estar bien definido, dirigido al cliente correcto y diseñado para generar margen. Así funciona la palanca de Producto/Servicio.",
  alternates: { canonical: `${SITE_URL}/metodo-5p/producto-servicio` },
  openGraph: {
    title: "Producto / Servicio — La segunda palanca del Método 5P | Rentabilismo",
    description:
      "No basta con que sea bueno. Tiene que estar bien definido, dirigido al cliente correcto y diseñado para generar margen. Así funciona la palanca de Producto/Servicio.",
    url: `${SITE_URL}/metodo-5p/producto-servicio`,
  },
};

export default function ProductoServicioPage() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section className="bg-r-dark py-20 md:py-28">
        <div className="container-site">
          <p className="label-tag mb-4 text-r-warm/50">Palanca 02 del Método 5P</p>
          <h1 className="font-display text-display-xl text-r-white">
            Producto / Servicio
          </h1>
          <p className="mt-6 max-w-2xl text-xl leading-relaxed text-r-warm/75">
            Lo que vendes tiene que estar claro, bien entregado y generar margen.
          </p>
        </div>
      </section>

      {/* ── POR QUÉ VA ANTES QUE MARKETING ───────────────────────────────── */}
      <section className="section bg-r-white">
        <div className="container-prose">
          <p className="label-tag mb-4">Por qué Producto/Servicio va antes que Marketing</p>
          <h2 className="font-display text-display-md text-r-dark">
            Antes de promocionar, tienes que saber qué vendes
          </h2>
          <div className="mt-6 space-y-5 text-r-dark/85">
            <p>
              Antes de invertir en darte a conocer, tienes que saber exactamente
              qué vendes, a quién lo vendes y qué resultado produce. Sin eso,
              la promoción solo atrae clientes que no encajan, generan fricción
              y consumen más recursos de lo que aportan.
            </p>
            <p>
              Muchos negocios tienen una oferta demasiado amplia: &ldquo;sirvo a todo
              el mundo&rdquo;, &ldquo;hago de todo&rdquo;. Sin claridad de qué incluye el servicio
              y qué no, sin saber si cada línea genera margen o lo consume. El
              resultado es actividad sin rentabilidad.
            </p>
            <p>
              Una oferta amplia también dispersa la operativa, complica la
              comunicación y obliga al dueño a estar pendiente de demasiadas
              cosas distintas. La especialización no limita el negocio. Lo aclara.
            </p>
          </div>
        </div>
      </section>

      {/* ── QUÉ MIRA RENTABILISMO ─────────────────────────────────────────── */}
      <section className="section bg-r-warm">
        <div className="container-site">
          <p className="label-tag mb-4">Qué mira Rentabilismo en Producto/Servicio</p>
          <h2 className="font-display text-display-md text-r-dark mb-8">
            Cinco preguntas que revelan el estado real de tu oferta
          </h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div className="card">
              <p className="text-xs font-semibold tracking-widest text-r-muted/50 mb-2">A</p>
              <h3 className="font-display text-display-sm text-r-dark mb-3">Definición</h3>
              <p className="text-r-dark/80 text-sm leading-relaxed">
                ¿Sabes exactamente qué entregas y qué no? ¿Lo sabe tu equipo?
                ¿Lo entiende tu cliente antes de contratar? Si hay dudas en
                alguno de esos tres puntos, la oferta no está suficientemente
                definida.
              </p>
            </div>
            <div className="card">
              <p className="text-xs font-semibold tracking-widest text-r-muted/50 mb-2">B</p>
              <h3 className="font-display text-display-sm text-r-dark mb-3">Rentabilidad por producto</h3>
              <p className="text-r-dark/80 text-sm leading-relaxed">
                ¿Sabes cuáles de tus servicios o productos generan margen y
                cuáles lo consumen? Muchos negocios mantienen líneas de producto
                que no cubren sus costes reales porque &ldquo;vienen de siempre&rdquo;
                o porque &ldquo;los clientes lo piden&rdquo;.
              </p>
            </div>
            <div className="card">
              <p className="text-xs font-semibold tracking-widest text-r-muted/50 mb-2">C</p>
              <h3 className="font-display text-display-sm text-r-dark mb-3">Coherencia de oferta</h3>
              <p className="text-r-dark/80 text-sm leading-relaxed">
                ¿Tienes demasiados servicios distintos que dispersan la
                operativa y dificultan la especialización? Cuantas más cosas
                diferentes haces, más difícil es hacerlas todas bien y
                más caro es operarlas.
              </p>
            </div>
            <div className="card">
              <p className="text-xs font-semibold tracking-widest text-r-muted/50 mb-2">D</p>
              <h3 className="font-display text-display-sm text-r-dark mb-3">Entrega consistente</h3>
              <p className="text-r-dark/80 text-sm leading-relaxed">
                ¿Puedes entregar el mismo nivel de calidad siempre, no solo
                cuando tú estás encima? Si el resultado depende de quién lo
                hace en cada momento, tienes un problema de proceso, no solo
                de producto.
              </p>
            </div>
            <div className="card">
              <p className="text-xs font-semibold tracking-widest text-r-muted/50 mb-2">E</p>
              <h3 className="font-display text-display-sm text-r-dark mb-3">Encaje con el cliente ideal</h3>
              <p className="text-r-dark/80 text-sm leading-relaxed">
                ¿Tu producto resuelve un problema real del cliente correcto?
                No el problema que tú crees que tiene, sino el que él reconoce
                y por el que estaría dispuesto a pagar lo que necesitas cobrar.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── EJEMPLO CONCRETO ─────────────────────────────────────────────── */}
      <section className="section bg-r-cream">
        <div className="container-prose">
          <p className="label-tag mb-4">Un caso real</p>
          <h2 className="font-display text-display-md text-r-dark">
            Cuando reducir la oferta aumenta el margen
          </h2>
          <div className="mt-6 space-y-5 text-r-dark/85">
            <p>
              Una agencia de comunicación con ocho años de historia ofrecía
              diseño gráfico, gestión de redes sociales, fotografía de producto,
              producción de vídeo, branding, web y email marketing. Siete líneas
              de servicio para una plantilla de cuatro personas.
            </p>
            <p>
              Cuando revisaron la rentabilidad real de cada línea, descubrieron
              que el diseño gráfico y el branding generaban el 65% del margen
              con el 40% del tiempo. Las otras cinco líneas ocupaban el 60%
              del tiempo y generaban el 35% del margen, con mucha más fricción
              en la entrega y más errores.
            </p>
            <p>
              Decidieron eliminar tres líneas de servicio, subcontratar las
              otras dos cuando las pedían los clientes existentes, y centrarse
              en diseño y branding. En seis meses, la facturación bajó un 15%
              y el margen neto subió un 28%.
            </p>
            <p>
              Menos clientes, menos caos, más dinero. El negocio era el mismo.
              Lo que cambió fue la claridad sobre qué vendían realmente.
            </p>
          </div>
        </div>
      </section>

      {/* ── SEÑALES ───────────────────────────────────────────────────────── */}
      <section className="section bg-r-white">
        <div className="container-prose">
          <p className="label-tag mb-4">Cómo saber si es tu problema</p>
          <h2 className="font-display text-display-md text-r-dark mb-8">
            Señales de que Producto/Servicio es tu palanca bloqueada
          </h2>
          <ul className="space-y-4">
            {[
              "Tienes dificultad para explicar claramente qué vendes en dos frases.",
              "Cada cliente parece necesitar algo distinto y acabas adaptando la entrega cada vez.",
              "No sabes con seguridad qué servicios te dan dinero y cuáles te lo quitan.",
              "La calidad de la entrega varía según quién trabaje en el proyecto o en qué momento del mes sea.",
              "Tus clientes no entienden bien qué incluye lo que contratan hasta que empiezas a entregarlo.",
              "Dices que sí a casi cualquier encargo porque no quieres perder el cliente.",
            ].map((señal) => (
              <li key={señal} className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-r-green" />
                <span className="text-r-dark/85">{señal}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────────────────── */}
      <section className="section bg-r-dark">
        <div className="container-prose">
          <p className="label-tag mb-4 text-r-warm/50">El siguiente paso</p>
          <h2 className="font-display text-display-md text-r-white mb-4">
            Si tu oferta no está clara, todo lo demás cuesta más
          </h2>
          <p className="text-r-warm/70 mb-8 text-lg leading-relaxed">
            El diagnóstico identifica si Producto/Servicio es la palanca que
            está limitando tu rentabilidad ahora mismo.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button href="/empieza-aqui" variant="primary">Hacer el diagnóstico →</Button>
            <Button href="/metodo-5p/precios" variant="secondary">Ver Palanca 03: Precios →</Button>
          </div>
        </div>
      </section>

      {/* ── NAVEGACIÓN ENTRE LAS P ────────────────────────────────────────── */}
      <section className="section-sm bg-r-dark">
        <div className="container-site">
          <p className="label-tag mb-4 text-r-warm/50">Otras palancas del sistema</p>
          <div className="grid gap-px border border-r-border-d bg-r-border-d sm:grid-cols-4">
            {METODO_5P_LINKS.filter((l) => l.href !== CURRENT_HREF).map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="group flex flex-col gap-1 bg-r-dark px-5 py-4 no-underline hover:bg-r-green"
              >
                <span className="text-xs font-semibold tracking-widest text-r-warm/35">{link.num}</span>
                <span className="font-body font-semibold text-r-white">{link.label}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
