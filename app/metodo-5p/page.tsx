import type { Metadata } from "next";
import Link from "next/link";
import Button from "@/components/ui/Button";
import { SITE_URL, METODO_5P_LINKS } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "Método 5P — El sistema de Rentabilismo explicado",
  description:
    "Cinco palancas: Personas, Producto/Servicio, Precios, Procesos y Promoción/Publicidad. Cómo funciona el Método 5P, por qué si falla una cae la rentabilidad y cómo se aplica.",
  alternates: { canonical: `${SITE_URL}/metodo-5p` },
  openGraph: {
    title: "Método 5P de Rentabilismo",
    description:
      "Cinco palancas. Cuando se alinean, la rentabilidad es el resultado natural. Cuando una falla, las demás lo acusan.",
    url: `${SITE_URL}/metodo-5p`,
  },
};

const RESUMEN_5P = [
  {
    num: "01",
    nombre: "Personas",
    href: "/metodo-5p/personas",
    titular: "Las personas correctas en el papel correcto.",
    resumen:
      "Incluye al dueño, al equipo y a los colaboradores. El primer cuello de botella de la mayoría de los negocios no es de clientes ni de marketing. Es de personas mal ubicadas o sin estructura clara.",
    señal: "Tu negocio depende de ti para demasiadas cosas.",
  },
  {
    num: "02",
    nombre: "Producto / Servicio",
    href: "/metodo-5p/producto-servicio",
    titular: "Lo que vendes debe justificar lo que cobras.",
    resumen:
      "No basta con que el producto sea bueno. Tiene que estar bien definido, dirigido al cliente correcto y diseñado para generar margen. Una oferta que no se entiende o que no se puede entregar de forma consistente no es un activo.",
    señal: "No tienes claro cuáles de tus productos o servicios son los más rentables.",
  },
  {
    num: "03",
    nombre: "Precios",
    href: "/metodo-5p/precios",
    titular: "El precio correcto no es el más bajo.",
    resumen:
      "El precio es la palanca de rentabilidad más directa y la más descuidada. La mayoría de los negocios tienen precios que no cubren sus costes reales o que no reflejan el valor que entregan.",
    señal: "Sientes que no puedes subir precios aunque sabes que necesitas hacerlo.",
  },
  {
    num: "04",
    nombre: "Procesos",
    href: "/metodo-5p/procesos",
    titular: "Sin sistemas no hay escala. Sin escala no hay rentabilidad.",
    resumen:
      "Un proceso es cualquier tarea repetible que se puede documentar, delegar y mejorar. Sin procesos, el negocio depende de personas concretas, genera errores y no puede crecer sin caos.",
    señal: "Cuando no estás, las cosas fallan o las tienes que resolver tú de todos modos.",
  },
  {
    num: "05",
    nombre: "Promoción / Publicidad",
    href: "/metodo-5p/promocion-publicidad",
    titular: "Comunica lo que funciona. No maquilles lo que falla.",
    resumen:
      "Promoción no es solo publicidad ni redes sociales. Es todo lo que hace que la persona correcta conozca tu negocio y decida comprarte. El error más común es invertir en promoción antes de tener claras las otras cuatro palancas.",
    señal: "Inviertes en marketing pero los clientes que llegan no son los que quieres.",
  },
];

export default function Metodo5PPage() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section className="bg-r-dark py-20 md:py-28">
        <div className="container-site">
          <p className="label-tag mb-4 text-r-warm/50">El corazón del sistema</p>
          <h1 className="font-display text-display-xl text-r-white">
            El Método 5P
          </h1>
          <p className="mt-6 max-w-2xl text-xl leading-relaxed text-r-warm/75">
            Cinco palancas. Cuando todas funcionan bien, el negocio genera
            rentabilidad de forma natural. Cuando una falla, las demás lo
            acusan aunque no parezca obvio.
          </p>
        </div>
      </section>

      {/* ── POR QUÉ UN MÉTODO ─────────────────────────────────────────────── */}
      <section className="section bg-r-white">
        <div className="container-prose">
          <p className="label-tag mb-4">Por qué un método</p>
          <h2 className="font-display text-display-md text-r-dark">
            Un sistema, no una lista de consejos
          </h2>
          <div className="mt-6 space-y-5 text-r-dark/85">
            <p>
              El Método 5P no es una colección de buenas prácticas. Es un
              sistema donde cada área afecta a las demás. Si diagnosticas
              solo una parte y actúas solo sobre esa, el resultado es parcial.
            </p>
            <p>
              Puedes tener un producto excelente y un precio que no genera
              margen. Puedes tener un precio correcto y un proceso que lo
              consume. Puedes tener todo bien internamente y una promoción
              que atrae al cliente equivocado.
            </p>
            <p>
              El trabajo del Método 5P empieza por diagnosticar cuál de las
              cinco palancas está limitando la rentabilidad ahora mismo.
              Esa es la que hay que tocar primero. No todas a la vez.
            </p>
            <p>
              Un ejemplo concreto: una empresa de servicios que tiene buenos
              clientes, buenos procesos y buena reputación, pero cuyos precios
              llevan cinco años sin revisarse mientras los costes han subido.
              El problema es de precio, no de ventas ni de producto. Invertir
              en marketing en ese momento es desperdiciar dinero.
            </p>
          </div>
        </div>
      </section>

      {/* ── CÓMO SE RELACIONAN ────────────────────────────────────────────── */}
      <section className="section bg-r-warm">
        <div className="container-prose">
          <p className="label-tag mb-4">La conexión</p>
          <h2 className="font-display text-display-md text-r-dark">
            Por qué si falla una, sufren todas
          </h2>
          <div className="mt-6 space-y-5 text-r-dark/85">
            <p>
              Las cinco palancas no son independientes. Están conectadas,
              y los problemas de una se manifiestan como síntomas en otra.
            </p>
            <p>
              Cuando el problema es de <strong>Personas</strong>, suele
              aparecer como ineficiencia en los Procesos: las cosas se hacen
              mal o no se hacen porque la persona incorrecta está en el papel
              incorrecto.
            </p>
            <p>
              Cuando el problema es de <strong>Producto/Servicio</strong>,
              suele aparecer como dificultad en la Promoción: no sabes cómo
              explicarlo porque no está bien definido. O como problemas de
              Precio: no sabes qué cobrar porque no sabes exactamente qué estás
              entregando.
            </p>
            <p>
              Cuando el problema es de <strong>Precios</strong>, suele
              aparecer como falta de margen aunque haya volumen de ventas.
              El negocio crece pero no mejora.
            </p>
            <p>
              Cuando el problema es de <strong>Procesos</strong>, suele
              aparecer como dependencia excesiva del dueño y como imposibilidad
              de escalar sin escalar también el caos.
            </p>
            <p>
              Cuando el problema es de <strong>Promoción</strong>, suele
              aparecer como clientes equivocados, ciclos de venta largos o
              costes de adquisición que no se recuperan.
            </p>
          </div>
        </div>
      </section>

      {/* ── LAS 5P ────────────────────────────────────────────────────────── */}
      <section className="section bg-r-cream">
        <div className="container-site">
          <p className="label-tag mb-8">Las cinco palancas</p>
          <div className="grid gap-6 md:grid-cols-1">
            {RESUMEN_5P.map((p) => (
              <Link
                key={p.href}
                href={p.href}
                className="group card flex flex-col gap-0 no-underline transition-colors hover:border-r-green md:grid md:grid-cols-[5rem_1fr_auto] md:items-center md:gap-8"
              >
                <div className="mb-4 md:mb-0">
                  <span className="font-body text-xs font-semibold tracking-widest text-r-muted/50">{p.num}</span>
                  <p className="mt-1 font-display text-2xl font-bold text-r-green">{p.nombre}</p>
                </div>
                <div>
                  <p className="font-semibold text-r-dark group-hover:text-r-green">{p.titular}</p>
                  <p className="mt-2 text-sm leading-relaxed text-r-muted">{p.resumen}</p>
                  <div className="mt-3 flex items-start gap-2">
                    <span className="label-tag text-r-muted/50">Señal de problema:</span>
                    <span className="text-xs italic text-r-muted/70">{p.señal}</span>
                  </div>
                </div>
                <div className="mt-4 shrink-0 text-sm font-semibold text-r-green md:mt-0">
                  Ver en detalle →
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── NAVEGACIÓN ENTRE LAS P ────────────────────────────────────────── */}
      <section className="section-sm bg-r-dark">
        <div className="container-site">
          <p className="label-tag mb-6 text-r-warm/50">Ir directamente a</p>
          <div className="grid gap-px border border-r-border-d bg-r-border-d sm:grid-cols-5">
            {METODO_5P_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="group flex flex-col gap-2 bg-r-dark px-5 py-5 no-underline hover:bg-r-green"
              >
                <span className="text-xs font-semibold tracking-widest text-r-warm/35 group-hover:text-r-warm/60">
                  {link.num}
                </span>
                <span className="font-body font-semibold text-r-white">{link.label}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── CIERRE ────────────────────────────────────────────────────────── */}
      <section className="section bg-r-green">
        <div className="container-prose">
          <p className="font-display text-display-md text-r-white">
            El primer paso no es aplicar todas las palancas. Es saber cuál
            está fallando en tu caso.
          </p>
          <p className="mt-5 text-lg leading-relaxed text-r-warm/75">
            Eso empieza por el diagnóstico. Y el diagnóstico empieza aquí.
          </p>
          <div className="mt-10">
            <Button href="/empieza-aqui" variant="primary">Ver por dónde empezar →</Button>
          </div>
        </div>
      </section>
    </>
  );
}
