import type { Metadata } from "next";
import Button from "@/components/ui/Button";
import SectionHeader from "@/components/ui/SectionHeader";
import { SITE_URL } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "Qué es Rentabilismo — Definición, origen y propósito",
  description:
    "Rentabilismo es el sistema práctico para construir negocios más rentables. Conoce su definición completa, su origen, a quién sirve y qué cambia cuando se aplica.",
  alternates: { canonical: `${SITE_URL}/que-es-rentabilismo` },
  openGraph: {
    title: "Qué es Rentabilismo — Definición, origen y propósito",
    description:
      "El marco mental y el método para construir negocios realmente rentables. Sin teoría vacía, sin promesas infundadas.",
    url: `${SITE_URL}/que-es-rentabilismo`,
  },
};

// ─── Diferencias ─────────────────────────────────────────────────────────────
const DIFERENCIAS = [
  {
    vs: "Coaching motivacional",
    rentabilismo:
      "No te ayuda a sentirte mejor, te ayuda a operar mejor. Los resultados son la medida, no las sensaciones.",
  },
  {
    vs: "Formación online genérica",
    rentabilismo:
      "No hay contenido universal. El sistema se aplica a tu negocio concreto, con tus números y tus problemas.",
  },
  {
    vs: "Consultoría clásica",
    rentabilismo:
      "No hay informes de 80 páginas que nadie implementa. Hay diagnóstico, método y acción concreta.",
  },
  {
    vs: "Marketing de gurú",
    rentabilismo:
      "No hay promesas de éxito rápido, fórmulas mágicas ni mensajes aspiracionales vacíos.",
  },
];

// ─── Qué cambia ───────────────────────────────────────────────────────────────
const QUE_CAMBIA = [
  "Sabes cuáles son tus clientes más rentables y por qué.",
  "Tienes un precio que refleja valor real y genera margen real.",
  "Tus procesos funcionan sin que estés encima de todo.",
  "Tu equipo sabe qué hacer y por qué lo hace.",
  "Tu promoción comunica lo que realmente importa.",
  "Tomas decisiones con criterio, no con intuición ciega.",
];

export default function QueEsRentabilismoPage() {
  return (
    <>
      {/* ── HERO / DEFINICIÓN ─────────────────────────────────────────────── */}
      <section className="bg-r-dark py-20 md:py-28">
        <div className="container-site">
          <p className="label-tag mb-4 text-r-warm/50">Página pilar</p>
          <h1 className="font-display text-display-xl text-r-white">
            Qué es Rentabilismo
          </h1>
          <p className="mt-6 max-w-2xl text-xl leading-relaxed text-r-warm/80">
            No es un movimiento. No es una academia. No es otro curso.
            Es un sistema práctico para construir negocios que generan
            rentabilidad real, sostenida y con sentido.
          </p>
        </div>
      </section>

      {/* ── DEFINICIÓN COMPLETA ───────────────────────────────────────────── */}
      <section className="section bg-r-white">
        <div className="container-prose">
          <p className="label-tag mb-4">La definición</p>
          <h2 className="font-display text-display-md text-r-dark">
            Rentabilismo, definido con precisión
          </h2>
          <div className="divider mt-6 pt-8 space-y-5 text-r-dark/85">
            <p className="text-lg font-medium text-r-dark">
              <strong>Rentabilismo</strong> es el sistema práctico que combina
              mentalidad estratégica, método estructurado y acción continua para
              construir negocios más rentables de forma sostenible.
            </p>
            <p>
              Es un marco mental que cambia la forma en que un empresario
              o emprendedor entiende su negocio: qué medir, qué decidir, qué
              priorizar y cómo ejecutar.
            </p>
            <p>
              El eje central es el <strong>Método 5P</strong>: cinco palancas
              —Personas, Producto/Servicio, Precio, Procesos y Promoción— que
              interactúan entre sí y que, cuando se alinean correctamente,
              producen mejoras de rentabilidad reales y medibles.
            </p>
            <p>
              No se trata de optimizar una sola área. Se trata de entender el
              negocio como un sistema, identificar dónde están los cuellos de
              botella y actuar con criterio, en orden y de forma continua.
            </p>
          </div>
        </div>
      </section>

      {/* ── ORIGEN ───────────────────────────────────────────────────────────── */}
      <section className="section bg-r-warm">
        <div className="container-prose">
          <p className="label-tag mb-4">El origen</p>
          <h2 className="font-display text-display-md text-r-dark">
            Por qué existe este sistema
          </h2>
          <div className="mt-6 space-y-5 text-r-dark/85">
            <p>
              Rentabilismo nace de una observación repetida durante años de
              trabajo con negocios reales: la mayoría de los empresarios
              trabajan bien y trabajan duro, pero operan sin sistema.
            </p>
            <p>
              Toman decisiones basadas en intuición o en urgencia. No tienen
              un modelo claro de qué genera margen y qué lo consume. No saben
              con precisión cuáles son sus palancas de mejora.
            </p>
            <p>
              El mercado de la formación y la consultoría no lo resuelve
              bien: o vende demasiado teórico, o demasiado aspiracional,
              o demasiado específico para grandes empresas.
            </p>
            <p>
              Rentabilismo cubre ese espacio vacío: un sistema práctico,
              en español, para empresarios y emprendedores de verdad.
            </p>
          </div>
        </div>
      </section>

      {/* ── PROPÓSITO ─────────────────────────────────────────────────────── */}
      <section className="section bg-r-cream">
        <div className="container-prose">
          <p className="label-tag mb-4">El propósito</p>
          <h2 className="font-display text-display-md text-r-dark">
            Para qué sirve Rentabilismo
          </h2>
          <div className="mt-6 space-y-5 text-r-dark/85">
            <p>
              El propósito de Rentabilismo es simple: que quien lo aplique
              construya un negocio más rentable. No más grande, no más famoso,
              no más «escalable en teoría». Más rentable.
            </p>
            <p>
              Un negocio rentable genera margen suficiente para pagar bien,
              invertir en lo importante, tomar decisiones sin presión constante
              y funcionar con cierta independencia del dueño.
            </p>
            <p>
              Eso no es el punto de llegada de un negocio. Es la base desde
              la que se construye todo lo demás.
            </p>
          </div>
        </div>
      </section>

      {/* ── DIFERENCIAS ────────────────────────────────────────────────────── */}
      <section className="section bg-r-white">
        <div className="container-site">
          <SectionHeader
            tag="Las diferencias"
            title="Rentabilismo vs el resto"
            subtitle="Muchas cosas prometen mejorar tu negocio. Esto es lo que diferencia a Rentabilismo de las alternativas más comunes."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {DIFERENCIAS.map((item) => (
              <div key={item.vs} className="card">
                <p className="label-tag mb-3 text-r-muted/60">Vs. {item.vs}</p>
                <p className="text-[1.0625rem] leading-relaxed text-r-dark/85">
                  {item.rentabilismo}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── POR QUÉ IMPORTA HOY ───────────────────────────────────────────── */}
      <section className="section bg-r-warm">
        <div className="container-prose">
          <p className="label-tag mb-4">El momento</p>
          <h2 className="font-display text-display-md text-r-dark">
            Por qué importa ahora
          </h2>
          <div className="mt-6 space-y-5 text-r-dark/85">
            <p>
              Los costes suben. Los márgenes se estrechan. La competencia no
              desaparece. Y el ruido —cursos, herramientas, tendencias,
              estrategias del momento— no para de crecer.
            </p>
            <p>
              En ese contexto, la capacidad de operar con claridad, orden y
              criterio es una ventaja competitiva real. No en teoría. En práctica.
            </p>
            <p>
              Rentabilismo es la respuesta a ese entorno: un sistema que ayuda
              a los empresarios a centrarse en lo que realmente mueve la aguja
              y a ignorar el resto con confianza.
            </p>
          </div>
        </div>
      </section>

      {/* ── PARA QUIÉN ────────────────────────────────────────────────────── */}
      <section className="section bg-r-cream">
        <div className="container-prose">
          <p className="label-tag mb-4">El perfil</p>
          <h2 className="font-display text-display-md text-r-dark">
            Para quién es Rentabilismo
          </h2>
          <div className="mt-6 space-y-5 text-r-dark/85">
            <p>
              Para empresarios con un negocio en marcha que factura pero no
              mejora. Para emprendedores que quieren construir bien desde el
              principio. Para quien ya ha probado otras cosas y necesita algo
              que funcione de verdad.
            </p>
            <p>
              Prioritariamente hispanohablante. Prioritariamente en la fase
              de operación y mejora, no en la de hipercrecimiento o salida a
              mercados internacionales.
            </p>
            <p>
              No es para quien busca escalar a millones en doce meses. Es para
              quien quiere un negocio sano, ordenado y rentable que pueda
              mantener y mejorar de forma continua.
            </p>
          </div>
          <div className="mt-8">
            <Button href="/para-quien-es" variant="secondary">
              Ver los tres perfiles →
            </Button>
          </div>
        </div>
      </section>

      {/* ── QUÉ CAMBIA ────────────────────────────────────────────────────── */}
      <section className="section bg-r-dark">
        <div className="container-site">
          <SectionHeader
            tag="El resultado"
            title="Qué cambia cuando se aplica"
            light
          />
          <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {QUE_CAMBIA.map((item) => (
              <li
                key={item}
                className="flex items-start gap-4 border border-r-border-d p-5"
              >
                <span className="mt-1 block h-2 w-2 shrink-0 rounded-full bg-r-green-2" />
                <p className="text-[1rem] leading-relaxed text-r-warm/80">
                  {item}
                </p>
              </li>
            ))}
          </ul>
          <div className="mt-12">
            <Button href="/metodo-5p" variant="primary">
              Ver el Método 5P →
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
