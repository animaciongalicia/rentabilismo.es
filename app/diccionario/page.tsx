import type { Metadata } from "next";
import DictionaryCard from "@/components/ui/DictionaryCard";
import { SITE_URL } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "Diccionario Rentabilista — El vocabulario del sistema",
  description:
    "Términos precisos para pensar con claridad sobre tu negocio. Cliente rentable, precio rentable, proceso rentable, margen rentable, decisión rentable. El glosario de Rentabilismo.",
  alternates: { canonical: `${SITE_URL}/diccionario` },
  openGraph: {
    title: "Diccionario Rentabilista — El vocabulario del sistema",
    description:
      "Para pensar con claridad hay que hablar con precisión. El glosario completo de Rentabilismo.",
    url: `${SITE_URL}/diccionario`,
  },
};

const ENTRADAS = [
  {
    term: "Cliente rentable",
    shortDef: "sustantivo",
    definition:
      "Cliente cuya relación genera un margen positivo real, una vez considerados el precio de venta, el coste de adquisición, el tiempo de atención, la frecuencia de compra y la complejidad de la relación. Un cliente que paga bien pero exige el triple de recursos que el resto puede no ser rentable. El cliente rentable no es el que más factura: es el que más margen neto genera con menos coste operativo.",
    error:
      "Medir la rentabilidad de un cliente solo por lo que paga, sin contar el tiempo que consume, los errores que genera o el coste de mantenerlo. Muchos negocios tienen clientes «importantes» por volumen que en realidad son una carga.",
    example:
      "Una empresa de servicios tenía a su cliente más grande dedicándole el 40% del tiempo del equipo pero generando el 18% del margen total. Cuando lo calcularon bien, resultó ser el menos rentable de la cartera.",
    relatedTerms: ["Margen rentable", "Precio rentable", "Decisión rentable"],
  },
  {
    term: "Precio rentable",
    shortDef: "sustantivo",
    definition:
      "Precio que cubre la totalidad de los costes reales de entrega (directos e indirectos) y genera el margen necesario para que el negocio sea sostenible. No es el precio más alto posible ni el más competitivo del mercado: es el precio correcto para el valor entregado y el cliente al que se sirve. Un precio rentable requiere conocer el coste total antes de fijar el número, incluyendo tiempo, overhead, errores y coste de adquisición del cliente.",
    error:
      "Fijar el precio mirando a la competencia o usando el instinto, sin calcular primero lo que cuesta realmente entregar el producto o servicio. El resultado habitual: un precio que parece razonable pero que no genera el margen que el negocio necesita.",
    example:
      "Un consultor cobraba 800 euros por proyecto. Al calcular las horas reales invertidas (incluyendo reuniones, correcciones y seguimiento), el precio por hora efectiva era inferior al de un empleado junior. El precio rentable estaba en 1.400 euros.",
    relatedTerms: ["Margen rentable", "Cliente rentable"],
  },
  {
    term: "Proceso rentable",
    shortDef: "sustantivo",
    definition:
      "Proceso que genera más valor del que consume en términos de tiempo, dinero y energía. Un proceso rentable es documentado (cualquier persona puede entenderlo), delegable (cualquier persona competente puede ejecutarlo), y mejorable (tiene métricas que permiten saber si funciona bien). Un proceso que no puede ejecutarse sin supervisión directa del dueño no es un proceso rentable: es un cuello de botella con nombre.",
    error:
      "Creer que documentar procesos es burocracia o pérdida de tiempo. La falta de procesos claros es una de las principales razones por las que el dueño no puede delegar, el negocio no puede crecer y los errores se repiten.",
    example:
      "Una agencia de comunicación documentó su proceso de alta de clientes nuevos. Lo que tardaba tres horas del fundador pasó a tardar cuarenta y cinco minutos de un coordinador júnior, con menos errores y mejor experiencia del cliente.",
    relatedTerms: ["Decisión rentable", "Cliente rentable"],
  },
  {
    term: "Margen rentable",
    shortDef: "sustantivo",
    definition:
      "Diferencia entre el precio de venta y el coste total real (directos e indirectos) de un producto o servicio, expresada como porcentaje. El margen rentable no es solo el margen bruto: es el margen que queda después de todos los costes, incluyendo los que se suelen ignorar (tiempo del dueño, costes de error, coste de adquisición, overhead). No hay un porcentaje universal: depende del modelo de negocio, el sector y la estructura de costes específica.",
    error:
      "Confundir margen bruto con margen real. Un negocio puede tener un margen bruto del 60% y un margen neto del 5% si los costes indirectos son altos. Mirar solo el bruto es ver la mitad de la película.",
    example:
      "Una tienda online tenía un margen bruto del 45% por producto. Cuando se añadieron los costes de devoluciones (12%), logística (8%), atención al cliente (6%) y publicidad (9%), el margen neto real era del 10%. Cambiaron el mix de producto para elevar ese número.",
    relatedTerms: ["Precio rentable", "Cliente rentable", "Decisión rentable"],
  },
  {
    term: "Decisión rentable",
    shortDef: "sustantivo",
    definition:
      "Decisión tomada con criterio y datos suficientes, orientada a mejorar la rentabilidad del negocio a medio plazo. Una decisión rentable no siempre genera más ingresos inmediatos; a veces genera menos. Lo que la distingue es que mejora la estructura del negocio: el margen, la eficiencia, la selección de clientes o la capacidad operativa. Una decisión que genera ingresos rápidos pero destruye margen, equipo o reputación no es una decisión rentable.",
    error:
      "Tomar decisiones por urgencia o por miedo en lugar de por criterio. La urgencia y el miedo empujan hacia la opción más cómoda a corto plazo, que raramente es la más rentable a medio plazo.",
    example:
      "Una empresa de catering rechazó un evento grande que les habría ocupado toda su capacidad durante tres semanas a un precio inferior a su mínimo rentable. El mes siguiente consiguieron tres eventos más pequeños con mejor margen total. Fue una decisión rentable aunque en el momento daba vértigo.",
    relatedTerms: ["Margen rentable", "Proceso rentable", "Cliente rentable"],
  },
];

const PROXIMAS_ENTRADAS = [
  "Negocio rentable",
  "Equipo mínimo viable",
  "Propuesta de valor real",
  "Cuello de botella",
  "Retención vs adquisición",
  "Coste de oportunidad",
  "Escalabilidad real",
  "Indicador de rentabilidad",
  "Modelo de negocio sostenible",
  "Ticket medio rentable",
];

const INDICE = ENTRADAS.map((e) => ({
  label: e.term,
  anchor: e.term.toLowerCase().replace(/\s+/g, "-"),
}));

export default function DiccionarioPage() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section className="bg-r-green py-12 sm:py-16 md:py-20">
        <div className="container-content">
          <p className="label-tag mb-4 text-r-warm/50">Vocabulario propio</p>
          <h1 className="font-display text-display-xl text-r-white">
            Diccionario<br />Rentabilista
          </h1>
          <p className="mt-4 text-base leading-relaxed text-r-warm/70">
            Para pensar con claridad hay que hablar con precisión. Cuando los
            conceptos son vagos, las decisiones también lo son.
          </p>
        </div>
      </section>

      {/* ── INTRO ─────────────────────────────────────────────────────────── */}
      <section className="section-sm bg-r-white">
        <div className="container-content">
          <p className="label-tag mb-3">Por qué existe este diccionario</p>
          <div className="space-y-4 text-r-dark/85">
            <p>
              El lenguaje impreciso genera pensamiento impreciso. En los
              negocios, usar términos vagos lleva a tomar decisiones sobre
              conceptos que cada persona entiende de forma distinta.
            </p>
            <p>
              ¿Qué significa exactamente que un cliente sea «bueno»? ¿Que
              un precio sea «competitivo»? ¿Que un negocio «funcione»?
              Sin definiciones claras, esas palabras no dicen nada.
            </p>
            <p>
              Este diccionario define los términos que usa Rentabilismo
              con la precisión necesaria para que el diagnóstico y la
              acción sean lo más concretos posible.
            </p>
          </div>
        </div>
      </section>

      {/* ── LAYOUT: ÍNDICE + TÉRMINOS ─────────────────────────────────────── */}
      <section className="section bg-r-cream">
        <div className="container-content">
          <div className="grid gap-12 md:grid-cols-[220px_1fr] md:gap-16 lg:grid-cols-[260px_1fr]">

            {/* Índice lateral */}
            <aside className="md:sticky md:top-24 md:h-fit">
              <p className="label-tag mb-4">Términos actuales</p>
              <nav aria-label="Índice del diccionario">
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
                </ul>
              </nav>

              <div className="mt-8 border-t border-r-border pt-6">
                <p className="label-tag mb-3 text-r-muted/50">Próximamente</p>
                <div className="space-y-1.5">
                  {PROXIMAS_ENTRADAS.slice(0, 5).map((t) => (
                    <p key={t} className="text-xs text-r-muted/50">{t}</p>
                  ))}
                  <p className="text-xs text-r-muted/40">+ más en desarrollo</p>
                </div>
              </div>
            </aside>

            {/* Entradas */}
            <div className="space-y-14">
              {ENTRADAS.map((entrada) => (
                <DictionaryCard key={entrada.term} {...entrada} />
              ))}

              {/* Próximas entradas visual */}
              <div className="border-t border-r-border pt-10">
                <p className="label-tag mb-4">Próximas entradas</p>
                <p className="mb-5 text-sm text-r-muted">
                  El diccionario crece de forma continua. Cada nuevo término
                  es una definición operativa, no un glosario académico.
                </p>
                <div className="flex flex-wrap gap-2">
                  {PROXIMAS_ENTRADAS.map((term) => (
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
