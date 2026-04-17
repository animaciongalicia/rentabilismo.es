import type { Metadata } from "next";
import Button from "@/components/ui/Button";
import { SITE_URL } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "Manifiesto Rentabilista — Lo que creemos sobre los negocios",
  description:
    "Una declaración sobre los negocios reales, la rentabilidad y las personas que los sostienen. Sin frases vacías. Sin promesas. Solo lo que creemos de verdad.",
  alternates: { canonical: `${SITE_URL}/manifiesto` },
  openGraph: {
    title: "Manifiesto Rentabilista",
    description:
      "Lo que creemos sobre los negocios reales, la rentabilidad y las personas que los sostienen.",
    url: `${SITE_URL}/manifiesto`,
  },
};

const PRINCIPIOS = [
  {
    num: "01",
    title: "No te falta esfuerzo. Te falta sistema.",
    body: "El trabajo duro es necesario. Pero el trabajo duro sin sistema produce agotamiento, no resultados. Hemos visto negocios que trabajan el doble que su competencia y ganan la mitad. La diferencia no era el esfuerzo. Era la estructura. Deja de trabajar más. Empieza a trabajar mejor.",
  },
  {
    num: "02",
    title: "Los márgenes importan más que la facturación.",
    body: "Un negocio que factura un millón con el 3% de margen tiene un problema más serio que uno que factura trescientos mil con el 30%. Pero el primero parece más exitoso en cualquier red social. La facturación es un número visible. El margen es la realidad que sostiene el negocio. No te engañes con el primero para evitar mirar el segundo.",
  },
  {
    num: "03",
    title: "No todos tus clientes son buenos para tu negocio.",
    body: "Un cliente que paga tarde, exige mucho, ocupa demasiado tiempo y genera poco margen no es un activo. Es un pasivo con nombre. La calidad de tu cartera de clientes determina la calidad de tu negocio. Elegir a quién sirves es una decisión estratégica, no un lujo.",
  },
  {
    num: "04",
    title: "Tu precio comunica lo que piensas de tu propio trabajo.",
    body: "Un precio bajo no es humildad ni estrategia. Es una señal de que algo no está claro: el valor que entregas, el cliente al que sirves o los costes que asumes. El precio correcto no es el más alto posible. Es el que refleja el valor real y genera el margen que el negocio necesita para funcionar.",
  },
  {
    num: "05",
    title: "Si tu negocio depende de ti para todo, no tienes un negocio. Tienes un empleo.",
    body: "Si mañana no puedes trabajar, ¿qué pasa? Si la respuesta es «se para» o «entra en caos», tienes un problema que ninguna estrategia de ventas va a resolver. Un negocio que solo funciona contigo no es un activo. Es un trabajo disfrazado con tu propio nombre.",
  },
  {
    num: "06",
    title: "Los procesos no limitan la creatividad. La liberan.",
    body: "Cuando tienes sistemas que funcionan solos, tienes tiempo y energía para lo que realmente importa. El caos no es señal de dinamismo. Es señal de un negocio que no está construido. Los procesos dan libertad. La improvisación permanente da agotamiento.",
  },
  {
    num: "07",
    title: "La promoción honesta no necesita ruido para funcionar.",
    body: "Comunicar con claridad qué haces, para quién lo haces y qué resultado produce es más poderoso que cualquier campaña construida sobre promesas exageradas. El ruido atrae clientes equivocados. La claridad atrae clientes rentables.",
  },
  {
    num: "08",
    title: "Medir duele. No medir cuesta más.",
    body: "Cuando no mides, decides por intuición y urgencia. Cuando mides, decides por datos e información. La primera opción parece más cómoda a corto plazo. A medio plazo, es la más cara. Medir no es burocracia. Es la única forma de saber si lo que haces funciona.",
  },
  {
    num: "09",
    title: "Mejorar de forma continua es más potente que transformar de golpe.",
    body: "Los grandes cambios de negocio en muy poco tiempo suelen ser inestables. Las mejoras pequeñas, tomadas de forma continua y sostenida, construyen negocios más sólidos. El ritmo supera a la intensidad. Siempre.",
  },
  {
    num: "10",
    title: "Un negocio sostenible es más valioso que uno que explota.",
    body: "Un negocio que genera margen consistente, que cuida a su equipo, que sirve bien a sus clientes y que puede mantenerse en el tiempo vale más que uno que crece sin control y se rompe con la primera crisis. Construye para que dure. No para que impresione.",
  },
];

export default function ManifiestoPage() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section className="bg-r-green py-12 sm:py-16 md:py-20">
        <div className="container-wide">
          <p className="label-tag mb-4 text-r-warm/50">Declaración de principios</p>
          <h1 className="font-display text-display-xl text-r-white">
            Manifiesto<br />Rentabilista
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-r-warm/70">
            Esto no es motivación. No hay metáforas de vuelos ni referencias
            al éxito de otros. Es una declaración de lo que creemos sobre los
            negocios, el trabajo y la rentabilidad.
          </p>
        </div>
      </section>

      {/* ── INTRO ─────────────────────────────────────────────────────────── */}
      <section className="section-sm bg-r-cream">
        <div className="container-content">
          <p className="text-lg leading-relaxed text-r-dark">
            Creemos en los negocios reales. No en los ideales de las
            presentaciones de inversión. En los negocios con nóminas que pagar,
            con clientes que se quejan y con meses en los que los números no
            cuadran.
          </p>
          <p className="mt-4 leading-relaxed text-r-dark/80">
            En los negocios donde hay una persona que toma decisiones sola,
            a veces sin datos suficientes, muchas veces cansada, siempre
            responsable de lo que ocurre.
          </p>
          <p className="mt-4 leading-relaxed text-r-dark/80">
            Ese es nuestro universo. Estos son los diez principios que
            definen cómo lo entendemos.
          </p>
        </div>
      </section>

      {/* ── PRINCIPIOS ────────────────────────────────────────────────────── */}
      <section className="section bg-r-cream">
        <div className="container-content">
          <ol className="space-y-0" role="list">
            {PRINCIPIOS.map((p, i) => (
              <li
                key={p.num}
                className={[
                  "grid gap-6 py-10 md:grid-cols-[5rem_1fr]",
                  i < PRINCIPIOS.length - 1 ? "border-b border-r-border" : "",
                ].join(" ")}
              >
                <span className="font-body text-sm font-semibold tracking-widest text-r-muted/40 md:pt-1">
                  {p.num}
                </span>
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
      <section className="section bg-r-green">
        <div className="container-content">
          <p className="font-display text-display-md text-r-white">
            Esto no es teoría. Es lo que aplicamos, enseñamos y medimos.
          </p>
          <p className="mt-5 text-lg leading-relaxed text-r-warm/70">
            Si algo de esto resuena con lo que has vivido en tu negocio,
            el siguiente paso es conocer el método concreto que lo hace posible.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Button href="/metodo-5p" variant="primary">Ver el Método 5P</Button>
            <Button href="/filosofia" variant="secondary">La filosofía del sistema</Button>
          </div>
        </div>
      </section>
    </>
  );
}
