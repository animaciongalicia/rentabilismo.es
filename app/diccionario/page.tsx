import type { Metadata } from "next";
import DictionaryCard from "@/components/ui/DictionaryCard";
import { SITE_URL } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "Diccionario Rentabilista — El vocabulario del sistema",
  description:
    "El glosario de Rentabilismo. Términos precisos para pensar con claridad sobre negocios, rentabilidad y método. Cliente rentable, precio rentable, proceso rentable y más.",
  alternates: { canonical: `${SITE_URL}/diccionario` },
  openGraph: {
    title: "Diccionario Rentabilista",
    description:
      "Términos precisos para pensar con claridad. El vocabulario propio del sistema Rentabilismo.",
    url: `${SITE_URL}/diccionario`,
  },
};

// ─── Entradas del diccionario ─────────────────────────────────────────────────
// Cada entrada puede tener: term, shortDef, definition, example, relatedTerms
const ENTRADAS = [
  {
    term: "Cliente rentable",
    shortDef: "sustantivo",
    definition:
      "Cliente cuya relación genera un margen positivo real, considerando no solo el precio de venta sino también el tiempo de atención, el coste de adquisición, la frecuencia de compra y la complejidad de la relación. Un cliente que paga bien pero requiere el triple de atención puede no ser rentable. El cliente rentable vuelve, refiere y no consume recursos desproporcionados.",
    example:
      "«Teníamos veinte clientes. Cuando analizamos cuáles eran rentables de verdad, resultaron ser seis. Sobre esos seis construimos el modelo real.»",
    relatedTerms: ["Margen rentable", "Precio rentable"],
  },
  {
    term: "Precio rentable",
    shortDef: "sustantivo",
    definition:
      "Precio que cubre todos los costes directos e indirectos de un producto o servicio y genera el margen necesario para que el negocio sea sostenible. No es el precio más alto posible ni el más competitivo del mercado: es el precio correcto para el valor que se entrega y el cliente al que se sirve. Un precio rentable requiere conocer el coste real antes de fijar el número.",
    example:
      "«Cuando calculamos el precio rentable del servicio, resultó ser un 40% más alto de lo que estábamos cobrando. Lo subimos. No perdimos el cliente que importaba.»",
    relatedTerms: ["Margen rentable", "Cliente rentable"],
  },
  {
    term: "Proceso rentable",
    shortDef: "sustantivo",
    definition:
      "Proceso que genera más valor del que consume. Un proceso rentable es documentado, delegable y mejorable. Elimina la dependencia de personas concretas, reduce el margen de error y permite escalar sin escalar el caos. Un proceso que no puede ejecutarse sin la supervisión directa del dueño no es rentable: es un cuello de botella disfrazado de método.",
    example:
      "«Documentamos el proceso de onboarding de clientes. Pasó de tardar tres horas del dueño a tardar cuarenta y cinco minutos de un junior.»",
    relatedTerms: ["Decisión rentable", "Personas"],
  },
  {
    term: "Margen rentable",
    shortDef: "sustantivo",
    definition:
      "Diferencia entre el precio de venta y el coste real total de un producto o servicio, expresada como porcentaje sobre el precio de venta. El margen rentable es el margen suficiente para pagar todos los costes del negocio, compensar el riesgo del empresario y generar capacidad de inversión. No hay un número universal: depende del tipo de negocio, el sector y la estructura de costes.",
    example:
      "«Nuestro margen bruto era del 60%, pero el margen neto real, contando todos los costes, era del 8%. Ahí estaba el problema.»",
    relatedTerms: ["Precio rentable", "Cliente rentable", "Decisión rentable"],
  },
  {
    term: "Decisión rentable",
    shortDef: "sustantivo",
    definition:
      "Decisión tomada con criterio, datos suficientes y orientada a mejorar la rentabilidad del negocio. No todas las decisiones rentables son obvias en el momento. Pero todas tienen en común que se toman con información real (no intuición ciega), dentro del sistema de las 5P y con visión de medio plazo. Una decisión que genera ingresos inmediatos pero destruye margen o equipo no es una decisión rentable.",
    example:
      "«Decidimos rechazar un proyecto grande que nos habría ocupado toda la capacidad a bajo margen. Fue una decisión rentable, aunque en ese momento dolia.»",
    relatedTerms: ["Proceso rentable", "Margen rentable"],
  },
];

// ─── Índice de términos ───────────────────────────────────────────────────────
const INDICE = ENTRADAS.map((e) => ({
  label: e.term,
  anchor: e.term.toLowerCase().replace(/\s+/g, "-"),
}));

export default function DiccionarioPage() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section className="bg-r-dark py-20 md:py-28">
        <div className="container-site">
          <p className="label-tag mb-4 text-r-warm/50">Vocabulario propio</p>
          <h1 className="font-display text-display-xl text-r-white">
            Diccionario<br />Rentabilista
          </h1>
          <p className="mt-6 max-w-2xl text-xl leading-relaxed text-r-warm/75">
            Para pensar con claridad primero hay que hablar con precisión.
            Este diccionario define los términos propios del sistema
            Rentabilismo.
          </p>
        </div>
      </section>

      {/* ── INTRO ─────────────────────────────────────────────────────────── */}
      <section className="section-sm bg-r-white">
        <div className="container-prose">
          <p className="text-r-dark/80">
            El lenguaje impreciso genera pensamiento impreciso. Cuando no
            sabemos con exactitud qué significa «rentable», «eficiente» o
            «cliente ideal», tomamos decisiones sobre conceptos vagos. Este
            diccionario define los términos que usa Rentabilismo para que el
            diagnóstico y la acción sean lo más precisos posible.
          </p>
          <p className="mt-4 text-sm text-r-muted">
            El diccionario crece de forma continua. Las entradas actuales son
            la base del vocabulario esencial del sistema.
          </p>
        </div>
      </section>

      {/* ── LAYOUT: ÍNDICE + TÉRMINOS ─────────────────────────────────────── */}
      <section className="section bg-r-cream">
        <div className="container-site">
          <div className="grid gap-12 md:grid-cols-[220px_1fr] md:gap-16 lg:grid-cols-[260px_1fr]">

            {/* Índice lateral */}
            <aside className="md:sticky md:top-24 md:h-fit">
              <p className="label-tag mb-4">Índice</p>
              <nav>
                <ul className="space-y-1.5" role="list">
                  {INDICE.map((item) => (
                    <li key={item.anchor}>
                      <a
                        href={`#${item.anchor}`}
                        className="block text-sm font-medium text-r-muted no-underline transition-colors hover:text-r-green"
                      >
                        {item.label}
                      </a>
                    </li>
                  ))}
                  <li className="pt-4">
                    <span className="text-xs text-r-muted/50">
                      + más términos próximamente
                    </span>
                  </li>
                </ul>
              </nav>

              {/* Placeholder búsqueda futura */}
              <div className="mt-8 border border-dashed border-r-border p-4">
                <p className="text-xs text-r-muted/60">
                  ↳ Próximamente: buscador de términos
                </p>
              </div>
            </aside>

            {/* Entradas */}
            <div className="space-y-12">
              {ENTRADAS.map((entrada) => (
                <DictionaryCard key={entrada.term} {...entrada} />
              ))}

              {/* Placeholder próximas entradas */}
              <div className="border-t border-r-border pt-10">
                <p className="label-tag mb-3">Próximas entradas</p>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Negocio rentable",
                    "Equipo mínimo viable",
                    "Propuesta de valor",
                    "Cuello de botella",
                    "Retención vs adquisición",
                    "Escalabilidad real",
                    "Indicador clave",
                    "Modelo de negocio",
                  ].map((term) => (
                    <span
                      key={term}
                      className="border border-r-border/60 px-3 py-1 text-xs text-r-muted/60"
                    >
                      {term}
                    </span>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
