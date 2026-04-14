import type { Metadata } from "next";
import Link from "next/link";
import Button from "@/components/ui/Button";
import Breadcrumb from "@/components/ui/Breadcrumb";
import { SITE_URL, METODO_5P_LINKS } from "@/lib/siteConfig";

const CURRENT_HREF = "/metodo-5p/promocion-publicidad";

export const metadata: Metadata = {
  title: "Promoción / Publicidad — La quinta palanca del Método 5P | Rentabilismo",
  description:
    "Dar a conocer lo que funciona, no maquillar lo que falla. Cómo hacer que la persona correcta conozca tu negocio sin desperdiciar presupuesto ni tiempo.",
  alternates: { canonical: `${SITE_URL}/metodo-5p/promocion-publicidad` },
  openGraph: {
    title: "Promoción / Publicidad — La quinta palanca del Método 5P | Rentabilismo",
    description:
      "Dar a conocer lo que funciona, no maquillar lo que falla. Cómo hacer que la persona correcta conozca tu negocio sin desperdiciar presupuesto ni tiempo.",
    url: `${SITE_URL}/metodo-5p/promocion-publicidad`,
  },
};

export default function PromocionPublicidadPage() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section className="bg-r-green py-12 sm:py-16 md:py-20">
        <div className="container-content">
          <Breadcrumb items={[
            { label: "Inicio", href: "/" },
            { label: "Método 5P", href: "/metodo-5p" },
            { label: "Promoción / Publicidad" },
          ]} />
          <p className="label-tag mb-4 text-r-warm/50">Palanca 05 del Método 5P</p>
          <h1 className="font-display text-display-xl text-r-white">
            Promoción / Publicidad
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-r-warm/70">
            Antes de invertir en darte a conocer, asegúrate de que lo que
            vas a dar a conocer merece la pena.
          </p>
        </div>
      </section>

      {/* ── POR QUÉ VA LA ÚLTIMA ──────────────────────────────────────────── */}
      <section className="section bg-r-cream">
        <div className="container-content">
          <h2 className="font-display text-display-md text-r-dark">
            Por qué Promoción va la última
          </h2>
          <div className="mt-6 space-y-5 text-r-dark/85">
            <p>
              No porque sea menos importante. Va la última porque depende de
              que las otras cuatro funcionen bien. Si Promoción llega antes
              de tiempo, amplifica los problemas en vez de resolverlos.
            </p>
            <p>
              Promocionar con un precio que no genera margen atrae más clientes
              no rentables. Cuantos más clientes así, más daño. Promocionar
              un servicio mal definido genera expectativas que no puedes
              cumplir: más clientes insatisfechos, más esfuerzo de gestión,
              peor reputación.
            </p>
            <p>
              Y promocionar sin procesos claros te desborda cuando funciona.
              Más demanda con la misma desorganización interna no es un buen
              problema. Es el mismo problema multiplicado.
            </p>
            <p>
              La Promoción funciona bien cuando hay algo sólido que dar a
              conocer. Cuando el producto está bien definido, el precio genera
              margen, los procesos pueden sostener el crecimiento y el equipo
              está bien organizado.
            </p>
          </div>
        </div>
      </section>

      {/* ── QUÉ MIRA RENTABILISMO ─────────────────────────────────────────── */}
      <section className="section bg-r-cream">
        <div className="container-content">
          <h2 className="font-display text-display-md text-r-dark mb-8">
            Cinco preguntas que revelan si tu promoción tiene sentido
          </h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div className="card">
              <p className="text-xs font-semibold tracking-widest text-r-muted/50 mb-2">A</p>
              <h3 className="font-display text-display-sm text-r-dark mb-3">Claridad del mensaje</h3>
              <p className="text-r-dark/80 text-sm leading-relaxed">
                ¿Tu comunicación explica qué resultado produce tu producto,
                no solo lo que es? &ldquo;Somos una agencia de marketing&rdquo; no dice
                nada. &ldquo;Ayudamos a empresas industriales a conseguir reuniones
                cualificadas con clientes nuevos&rdquo; sí.
              </p>
            </div>
            <div className="card">
              <p className="text-xs font-semibold tracking-widest text-r-muted/50 mb-2">B</p>
              <h3 className="font-display text-display-sm text-r-dark mb-3">Canal correcto</h3>
              <p className="text-r-dark/80 text-sm leading-relaxed">
                ¿Estás donde está tu cliente ideal, no donde está todo el
                mundo? LinkedIn puede ser perfecto para B2B y completamente
                irrelevante para un restaurante de barrio. El canal correcto
                depende del cliente, no de la moda.
              </p>
            </div>
            <div className="card">
              <p className="text-xs font-semibold tracking-widest text-r-muted/50 mb-2">C</p>
              <h3 className="font-display text-display-sm text-r-dark mb-3">Coherencia entre mensaje y entrega</h3>
              <p className="text-r-dark/80 text-sm leading-relaxed">
                ¿Cumples lo que prometes? La primera venta la hace el marketing.
                La segunda, la tercera y el boca a boca los hace la entrega.
                Un mensaje que no se cumple es peor que no tener mensaje:
                genera decepción activa.
              </p>
            </div>
            <div className="card">
              <p className="text-xs font-semibold tracking-widest text-r-muted/50 mb-2">D</p>
              <h3 className="font-display text-display-sm text-r-dark mb-3">Coste de adquisición</h3>
              <p className="text-r-dark/80 text-sm leading-relaxed">
                ¿Sabes cuánto te cuesta conseguir un cliente y si ese coste
                se recupera? Muchos negocios invierten en publicidad sin saber
                si cada cliente que consiguen les genera o consume margen. Sin
                ese número, la inversión en promoción es un gasto a ciegas.
              </p>
            </div>
            <div className="card">
              <p className="text-xs font-semibold tracking-widest text-r-muted/50 mb-2">E</p>
              <h3 className="font-display text-display-sm text-r-dark mb-3">Retención vs adquisición</h3>
              <p className="text-r-dark/80 text-sm leading-relaxed">
                ¿Inviertes en mantener a los clientes que ya tienes o solo en
                conseguir nuevos? Retener a un cliente existente cuesta entre
                cinco y diez veces menos que conseguir uno nuevo. Ignorar eso
                es elegir el camino más caro.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── ATRAER VS PERSEGUIR ───────────────────────────────────────────── */}
      <section className="section bg-r-cream">
        <div className="container-content">
          <h2 className="font-display text-display-md text-r-dark">
            La diferencia entre atraer y perseguir
          </h2>
          <div className="mt-6 space-y-5 text-r-dark/85">
            <p>
              Los negocios que comunican con claridad y consistencia atraen
              clientes que ya están convencidos antes de hablar con ellos.
              Llegan sabiendo qué hacen, para quién es y cuánto cuesta
              aproximadamente. La conversación de venta es corta y el cierre
              es natural.
            </p>
            <p>
              Los negocios que no tienen esa claridad persiguen clientes que
              siempre tienen dudas. Cada venta es una negociación larga, llena
              de &ldquo;lo voy a pensar&rdquo;, &ldquo;es que no sé si esto es para mí&rdquo; y
              peticiones de descuento. El problema no es el cliente: es que
              la comunicación no ha hecho el trabajo previo.
            </p>
            <p>
              Un ejemplo concreto: una asesoría fiscal que durante años
              captaba clientes principalmente por recomendaciones directas
              empezó a publicar contenido mensual explicando casos reales de
              ahorro fiscal para autónomos. En doce meses, el 40% de las
              consultas nuevas llegaban habiendo leído ya ese contenido, con
              la decisión prácticamente tomada de antemano. El tiempo medio
              de cierre bajó a la mitad.
            </p>
            <p>
              No era publicidad pagada. Era comunicación con criterio.
            </p>
          </div>
        </div>
      </section>

      {/* ── SEÑALES ───────────────────────────────────────────────────────── */}
      <section className="section bg-r-cream">
        <div className="container-content">
          <h2 className="font-display text-display-md text-r-dark mb-8">
            Señales de que Promoción es tu palanca bloqueada
          </h2>
          <ul className="space-y-4">
            {[
              "Los clientes que te llegan no son los que quieres: piden descuento, no tienen presupuesto o no encajan bien con lo que haces.",
              "No sabes con claridad de dónde vienen tus mejores clientes ni cómo replicar eso.",
              "Tienes presencia en varios canales pero ninguno funciona realmente bien.",
              "Cuando te preguntan qué haces, te cuesta explicarlo de forma que el otro lo entienda rápido.",
              "Inviertes en publicidad pero no sabes si cada euro que pones genera retorno.",
              "Dependes casi exclusivamente del boca a boca sin tener ninguna palanca que puedas controlar.",
            ].map((señal) => (
              <li key={señal} className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-r-green" />
                <span className="text-r-dark/85">{señal}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── EL ERROR DE EMPEZAR POR AQUÍ ─────────────────────────────────── */}
      <section className="section bg-r-cream">
        <div className="container-content">
          <h2 className="font-display text-display-md text-r-dark">
            El error de empezar por Promoción
          </h2>
          <div className="mt-6 space-y-5 text-r-dark/85">
            <p>
              Muchos empresarios quieren empezar por Promoción porque es lo
              más visible. Ver anuncios, conseguir seguidores, aparecer en
              prensa: da la sensación de estar haciendo algo concreto. El
              problema es que esa visibilidad no resuelve nada si lo que hay
              detrás no funciona.
            </p>
            <p>
              Si el precio es incorrecto, más clientes significa más pérdidas.
              Si el servicio está mal definido, más clientes significa más
              fricción y más trabajo de gestión. Si los procesos no pueden
              sostener el crecimiento, más volumen significa más caos.
            </p>
            <p>
              Promoción es el último paso, no el primero. No porque sea menos
              importante, sino porque su efecto depende de que todo lo demás
              esté en orden. Cuando las otras cuatro palancas funcionan,
              la Promoción multiplica. Cuando no lo hacen, solo amplifica
              el problema.
            </p>
          </div>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────────────────── */}
      <section className="section-sm bg-r-green">
        <div className="container-content">
          <p className="label-tag mb-4 text-r-warm/50">El siguiente paso</p>
          <h2 className="font-display text-display-md text-r-white mb-4">
            Antes de invertir en Promoción, comprueba que el resto funciona
          </h2>
          <p className="text-r-warm/70 mb-8 leading-relaxed">
            El diagnóstico identifica cuál de las cinco palancas está limitando
            la rentabilidad de tu negocio ahora mismo. Si es Promoción, bien.
            Si es otra, mejor saberlo antes de gastar en publicidad.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button href="/empieza-aqui" variant="primary">Hacer el diagnóstico →</Button>
            <Button href="/metodo-5p" variant="secondary">Ver el Método 5P completo →</Button>
          </div>
        </div>
      </section>

      {/* ── NAVEGACIÓN ENTRE LAS P ────────────────────────────────────────── */}
      <section className="section-sm bg-r-dark">
        <div className="container-content">
          <p className="label-tag mb-4 text-r-warm/50">Las cinco palancas del sistema</p>
          <div className="grid grid-cols-2 gap-px border border-r-border-d bg-r-border-d sm:grid-cols-5">
            {METODO_5P_LINKS.map((link) => {
              const isCurrent = link.href === CURRENT_HREF;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={[
                    "flex flex-col gap-1 px-5 py-4 no-underline transition-colors",
                    isCurrent ? "bg-r-green" : "bg-r-dark hover:bg-r-green",
                  ].join(" ")}
                  aria-current={isCurrent ? "page" : undefined}
                >
                  <span className="text-xs font-semibold tracking-widest text-r-warm/50">{link.num}</span>
                  <span className="font-body font-semibold text-r-white">{link.label}</span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
