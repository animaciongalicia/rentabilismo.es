import type { Metadata } from "next";
import Button from "@/components/ui/Button";
import SectionHeader from "@/components/ui/SectionHeader";
import { SITE_URL } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "Método 5P — El sistema de Rentabilismo explicado",
  description:
    "Las cinco palancas de la rentabilidad: Personas, Producto, Precio, Procesos y Promoción. Cómo funciona el Método 5P y cómo se aplica.",
  alternates: { canonical: `${SITE_URL}/metodo-5p` },
  openGraph: {
    title: "Método 5P de Rentabilismo",
    description:
      "Cinco palancas. Cada una conectada. Cuando se alinean, la rentabilidad no es un objetivo lejano: es el resultado natural.",
    url: `${SITE_URL}/metodo-5p`,
  },
};

const LAS_5P = [
  {
    num: "01",
    id: "personas",
    letter: "P",
    title: "Personas",
    intro:
      "Las personas son la primera variable del sistema. No la más obvia, pero sí la más determinante.",
    cuerpo: [
      "Un equipo mal estructurado, mal compensado o mal orientado consume más recursos de los que genera. Un equipo bien construido multiplica el resultado de las otras cuatro palancas.",
      "Esto incluye al propio dueño del negocio: su papel, sus tareas, su tiempo. En muchos negocios pequeños, el mayor cuello de botella es la persona que lo lleva.",
    ],
    aplicacion: [
      "Identificar qué roles son estratégicos y cuáles son operativos",
      "Definir con claridad qué se espera de cada persona",
      "Separar el tiempo del dueño entre operar y construir",
      "Crear un equipo mínimo viable antes de crecer",
    ],
  },
  {
    num: "02",
    id: "producto",
    letter: "P",
    title: "Producto / Servicio",
    intro:
      "Lo que vendes debe justificar lo que cobras. Eso suena obvio hasta que lo revisas en detalle.",
    cuerpo: [
      "Muchos negocios tienen productos o servicios que generan facturación pero no margen. O tienen una oferta tan amplia que no hay foco ni claridad.",
      "El trabajo sobre producto no es solo de diseño o desarrollo. Es de rentabilidad: qué vendes, a quién se lo vendes, por qué lo compran y qué margen genera cada unidad.",
    ],
    aplicacion: [
      "Auditar la cartera de productos/servicios por margen real",
      "Eliminar o rediseñar lo que no aporta",
      "Clarificar el resultado concreto que entrega cada oferta",
      "Definir a qué cliente ideal va dirigido cada producto",
    ],
  },
  {
    num: "03",
    id: "precio",
    letter: "P",
    title: "Precio",
    intro:
      "El precio correcto no es el más bajo. Es el que refleja el valor real que entregas y genera el margen que necesitas.",
    cuerpo: [
      "El precio es la palanca de rentabilidad más directa y también la más descuidada. La mayoría de los empresarios tienen precios que no reflejan ni sus costes reales ni el valor que generan.",
      "Subir un precio bien justificado no es perder clientes. Es seleccionarlos. Y seleccionar clientes es parte del trabajo de construir un negocio rentable.",
    ],
    aplicacion: [
      "Calcular el coste real (directo e indirecto) de cada producto o servicio",
      "Identificar el margen mínimo necesario para que el negocio sea sostenible",
      "Revisar si el precio actual comunica el valor que se entrega",
      "Definir una política de precios clara y consistente",
    ],
  },
  {
    num: "04",
    id: "procesos",
    letter: "P",
    title: "Procesos",
    intro:
      "Sin sistemas no hay escala. Sin escala no hay rentabilidad. Los procesos no limitan la creatividad: la liberan.",
    cuerpo: [
      "Un proceso es cualquier tarea repetible que se puede documentar, delegar y mejorar. Cuando los procesos no existen, todo depende de quien lo hace en ese momento, y eso genera ineficiencia, errores y dependencia.",
      "El objetivo no es burocratizar el negocio. Es hacer que las cosas funcionen bien sin necesitar supervisión constante.",
    ],
    aplicacion: [
      "Identificar los procesos críticos del negocio (los que más impacto tienen en la rentabilidad)",
      "Documentar cómo se hacen actualmente",
      "Simplificar y estandarizar antes de intentar automatizar",
      "Delegar con criterio: el proceso primero, la persona después",
    ],
  },
  {
    num: "05",
    id: "promocion",
    letter: "P",
    title: "Promoción",
    intro:
      "Dar a conocer lo que funciona, no maquillar lo que falla. La promoción honesta no necesita ruido para funcionar.",
    cuerpo: [
      "Promoción no es solo marketing ni solo publicidad. Es todo lo que hace que las personas correctas conozcan tu negocio, entiendan lo que ofreces y decidan comprarte.",
      "El error más común es invertir en promoción antes de tener claro el producto, el precio y el cliente. La promoción amplifica lo que ya existe: lo bueno y lo malo.",
    ],
    aplicacion: [
      "Definir con claridad a quién va dirigida la comunicación",
      "Comunicar el resultado que se entrega, no las características del servicio",
      "Elegir los canales donde está el cliente ideal, no los más de moda",
      "Medir qué funciona y eliminar lo que no genera retorno",
    ],
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
            Cinco palancas. Cada una conectada con las demás. Cuando se alinean,
            la rentabilidad no es un objetivo lejano: es el resultado natural.
          </p>
        </div>
      </section>

      {/* ── INTRO AL SISTEMA ──────────────────────────────────────────────── */}
      <section className="section bg-r-white">
        <div className="container-prose">
          <p className="label-tag mb-4">Por qué un método</p>
          <h2 className="font-display text-display-md text-r-dark">
            Un sistema, no una lista de consejos
          </h2>
          <div className="mt-6 space-y-5 text-r-dark/85">
            <p>
              El Método 5P no es una colección de buenas prácticas. Es un
              sistema donde cada elemento afecta a los demás.
            </p>
            <p>
              Puedes tener un producto excelente y un precio equivocado. Puedes
              tener un precio correcto y un proceso roto. Puedes tener todo bien
              internamente y una promoción que no comunica el valor real.
            </p>
            <p>
              El trabajo del Método 5P empieza por diagnosticar cuál de las
              cinco palancas está limitando la rentabilidad, y actuar sobre
              ella con criterio y prioridad.
            </p>
          </div>
        </div>
      </section>

      {/* ── MAPA VISUAL DE LAS 5P ─────────────────────────────────────────── */}
      <section className="section-sm bg-r-warm">
        <div className="container-site">
          <div className="grid gap-px border border-r-border bg-r-border sm:grid-cols-5">
            {LAS_5P.map((p) => (
              <a
                key={p.id}
                href={`#${p.id}`}
                className="group flex flex-col gap-2 bg-r-warm p-5 no-underline transition-colors hover:bg-r-cream"
              >
                <span className="text-xs font-semibold tracking-widest text-r-muted/50">
                  {p.num}
                </span>
                <span className="font-display text-3xl font-bold text-r-green">
                  {p.letter}
                </span>
                <span className="text-sm font-semibold text-r-dark group-hover:text-r-green">
                  {p.title}
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── CADA P ────────────────────────────────────────────────────────── */}
      {LAS_5P.map((p, i) => (
        <section
          key={p.id}
          id={p.id}
          className={`section ${i % 2 === 0 ? "bg-r-cream" : "bg-r-white"}`}
        >
          <div className="container-site">
            <div className="grid gap-10 md:grid-cols-[1fr_2fr] md:gap-16">

              {/* Número + letra */}
              <div className="md:pt-1">
                <span className="font-body text-sm font-semibold tracking-widest text-r-muted/40">
                  {p.num} / 05
                </span>
                <p className="mt-3 font-display text-[5rem] font-bold leading-none text-r-green/20">
                  {p.letter}
                </p>
              </div>

              {/* Contenido */}
              <div>
                <h2 className="font-display text-display-lg text-r-dark">
                  {p.title}
                </h2>
                <p className="mt-4 text-lg font-medium leading-relaxed text-r-dark/80">
                  {p.intro}
                </p>
                <div className="mt-6 space-y-4 text-r-dark/75">
                  {p.cuerpo.map((par) => (
                    <p key={par.slice(0, 30)}>{par}</p>
                  ))}
                </div>

                {/* Aplicación práctica */}
                <div className="mt-8 border-t border-r-border pt-8">
                  <p className="label-tag mb-4">Cómo se aplica</p>
                  <ul className="space-y-3">
                    {p.aplicacion.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-sm text-r-dark/80">
                        <span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-r-green" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Placeholder para futura subpágina */}
                <div className="mt-8 border border-dashed border-r-border p-4">
                  <p className="text-xs text-r-muted/60">
                    ↳ Próximamente: guía completa de {p.title} con casos prácticos y herramientas.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </section>
      ))}

      {/* ── CIERRE ────────────────────────────────────────────────────────── */}
      <section className="section bg-r-dark">
        <div className="container-prose">
          <SectionHeader
            tag="Próximo paso"
            title="¿Por dónde empiezas tú?"
            subtitle="El Método 5P no se aplica de golpe. Se empieza por la palanca que más limita tu rentabilidad ahora mismo."
            light
          />
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Button href="/empieza-aqui" variant="primary">
              Encontrar mi punto de partida
            </Button>
            <Button href="/para-quien-es" variant="secondary">
              Ver si esto es para mí
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
