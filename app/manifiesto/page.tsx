import type { Metadata } from "next";
import Button from "@/components/ui/Button";
import { SITE_URL } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "Manifiesto Rentabilista — Los principios del sistema",
  description:
    "El Manifiesto Rentabilista recoge los principios que definen cómo entendemos la rentabilidad, los negocios y las personas que los construyen.",
  alternates: { canonical: `${SITE_URL}/manifiesto` },
  openGraph: {
    title: "Manifiesto Rentabilista",
    description:
      "Los principios que definen cómo entendemos la rentabilidad y los negocios. Sin humo. Sin postureo. Solo claridad.",
    url: `${SITE_URL}/manifiesto`,
  },
};

const PRINCIPIOS = [
  {
    num: "01",
    title: "La rentabilidad no es el resultado de trabajar más. Es el resultado de trabajar bien.",
    body: "El esfuerzo es necesario, pero no suficiente. Un negocio rentable no es el que más horas trabaja; es el que mejor usa las horas que trabaja.",
  },
  {
    num: "02",
    title: "Todo negocio tiene un problema de método antes de tener un problema de mercado.",
    body: "Antes de culpar al sector, a la competencia o a la economía, hay que mirar dentro. La mayoría de los problemas de rentabilidad tienen solución interna.",
  },
  {
    num: "03",
    title: "Los precios correctos no se negocian. Se justifican.",
    body: "Un precio bajo no es una estrategia. Es una señal de que algo no está claro: el valor que se entrega, el cliente al que se sirve o los costes que se asumen.",
  },
  {
    num: "04",
    title: "Los procesos no limitan la creatividad. La liberan.",
    body: "Un sistema que funciona solo no encadena, libera. Cuando los procesos funcionan, el tiempo y la energía van a lo que realmente importa.",
  },
  {
    num: "05",
    title: "La promoción honesta no necesita ruido para funcionar.",
    body: "Comunicar con claridad lo que haces, para quién y qué resultado produce es más poderoso que cualquier campaña construida sobre promesas vacías.",
  },
  {
    num: "06",
    title: "Un negocio sostenible es más valioso que un negocio que factura.",
    body: "La facturación es un indicador. La rentabilidad es el objetivo. Un negocio que genera margen, cuida a su equipo y puede mantenerse en el tiempo vale más que uno que crece sin control.",
  },
  {
    num: "07",
    title: "Claridad primero. Velocidad, después.",
    body: "Moverse rápido sin saber hacia dónde es uno de los errores más caros que puede cometer un empresario. Primero entiende. Luego actúa. Y luego mantén el ritmo.",
  },
  {
    num: "08",
    title: "El cliente rentable es el que vuelve, no el que entra.",
    body: "La adquisición tiene coste. La retención genera margen. Un negocio que trabaja para tener los clientes correctos gana más con menos esfuerzo.",
  },
  {
    num: "09",
    title: "Las personas correctas son la primera variable del sistema.",
    body: "Un equipo mal estructurado, mal compensado o mal orientado consume más recursos de los que genera. Las personas no son un coste. Son el primer activo de cualquier negocio.",
  },
  {
    num: "10",
    title: "El método no es el destino. Es el camino.",
    body: "Rentabilismo no promete un punto de llegada definitivo. Promete una forma de avanzar: con criterio, con datos y con la capacidad de corregir cuando algo no funciona.",
  },
];

export default function ManifiestoPage() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section className="bg-r-dark py-20 md:py-28">
        <div className="container-site">
          <p className="label-tag mb-4 text-r-warm/50">Declaración de principios</p>
          <h1 className="font-display text-display-xl text-r-white">
            Manifiesto<br />Rentabilista
          </h1>
          <p className="mt-6 max-w-2xl text-xl leading-relaxed text-r-warm/75">
            No es un código ético. No es una lista de valores de empresa.
            Es una declaración de cómo entendemos los negocios, la rentabilidad
            y las personas que los construyen.
          </p>
        </div>
      </section>

      {/* ── INTRO ─────────────────────────────────────────────────────────── */}
      <section className="section-sm bg-r-white">
        <div className="container-prose">
          <div className="space-y-5 text-r-dark/85">
            <p className="text-lg leading-relaxed text-r-dark">
              Creemos que la rentabilidad no es un accidente. Es el resultado
              de tomar decisiones mejores, de forma más consistente, durante
              más tiempo.
            </p>
            <p>
              Creemos que la mayoría de los empresarios no necesitan más
              motivación. Necesitan más método. Y que el método, bien aplicado,
              genera la motivación que ningún curso puede dar.
            </p>
            <p>
              Estos son los diez principios que definen Rentabilismo.
            </p>
          </div>
        </div>
      </section>

      {/* ── PRINCIPIOS ────────────────────────────────────────────────────── */}
      <section className="section bg-r-cream">
        <div className="container-site max-w-mid">
          <ol className="space-y-0" role="list">
            {PRINCIPIOS.map((p, i) => (
              <li
                key={p.num}
                className={[
                  "grid gap-6 py-10 md:grid-cols-[5rem_1fr]",
                  i < PRINCIPIOS.length - 1 ? "border-b border-r-border" : "",
                ].join(" ")}
              >
                {/* Número */}
                <span className="font-body text-sm font-semibold tracking-widest text-r-muted/40 md:pt-1">
                  {p.num}
                </span>
                {/* Contenido */}
                <div>
                  <h2 className="font-display text-display-sm text-r-dark">
                    {p.title}
                  </h2>
                  <p className="mt-4 leading-relaxed text-r-muted">{p.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ── CIERRE ────────────────────────────────────────────────────────── */}
      <section className="section bg-r-dark">
        <div className="container-prose">
          <p className="font-display text-display-md text-r-white">
            Esto no es teoría. Es lo que aplicamos, lo que enseñamos y lo que
            medimos.
          </p>
          <p className="mt-6 text-lg leading-relaxed text-r-warm/70">
            Si esto resuena contigo, el siguiente paso es conocer el método
            que lo hace posible.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Button href="/metodo-5p" variant="primary">
              Ver el Método 5P
            </Button>
            <Button href="/empieza-aqui" variant="secondary">
              Empieza aquí
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
