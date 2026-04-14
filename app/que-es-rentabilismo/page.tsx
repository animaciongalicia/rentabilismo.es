import type { Metadata } from "next";
import Button from "@/components/ui/Button";
import { SITE_URL } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "Qué es Rentabilismo — Definición honesta, sin rodeos",
  description:
    "Rentabilismo no es un curso, no es coaching y no es consultoría de imagen. Es un sistema concreto para mejorar la rentabilidad real de tu negocio. Aquí está la definición completa.",
  alternates: { canonical: `${SITE_URL}/que-es-rentabilismo` },
  openGraph: {
    title: "Qué es Rentabilismo — Definición honesta, sin rodeos",
    description:
      "Qué es, qué no es, por qué nace y qué problema resuelve. La definición completa del sistema.",
    url: `${SITE_URL}/que-es-rentabilismo`,
  },
};

const DIFERENCIAS = [
  {
    vs: "El curso online",
    problema: "Enseña conceptos desconectados de tu negocio concreto. Terminas con más información y las mismas dudas.",
    rentabilismo: "Parte de tu situación real. El diagnóstico va primero, la acción después.",
  },
  {
    vs: "El coaching de negocios",
    problema: "Trabaja la mentalidad pero evita meterse en los números. Cuando salen los márgenes, se vuelve difuso.",
    rentabilismo: "Mide, diagnostica y actúa sobre lo concreto. La mentalidad es consecuencia de tener claridad, no al revés.",
  },
  {
    vs: "La consultoría tradicional",
    problema: "Un informe de ochenta páginas que nadie implementa. El consultor se va. El problema se queda.",
    rentabilismo: "El sistema lo aplicas tú. La consultoría (cuando existe) acompaña la implementación, no la sustituye.",
  },
  {
    vs: "El gurú de redes sociales",
    problema: "Promete resultados que dependen de un mercado ideal que no existe en tu negocio.",
    rentabilismo: "No hay promesas de resultados. Hay un método que mejora las probabilidades de que las cosas funcionen.",
  },
];

const QUE_CAMBIA = [
  "Sabes cuáles son tus clientes más rentables y puedes tomar decisiones sobre eso.",
  "Tienes un precio que cubre tus costes reales y genera el margen que necesitas.",
  "Tus procesos funcionan sin que tengas que estar encima de todo.",
  "Tu equipo sabe qué hacer, por qué lo hace y cómo medirlo.",
  "Tu promoción comunica lo que realmente importa a quien realmente importa.",
  "Tomas decisiones con criterio y datos, no con urgencia e intuición.",
];

export default function QueEsRentabilismoPage() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section className="bg-r-green py-12 sm:py-16 md:py-20">
        <div className="container-content">
          <p className="label-tag mb-4 text-r-warm/50">Definición</p>
          <h1 className="font-display text-display-xl text-r-white">
            Qué es Rentabilismo
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-r-warm/70">
            No es un gurú, no es una academia y no es otro curso más.
            Es un sistema para pensar los negocios de forma más clara,
            más ordenada y más rentable.
          </p>
        </div>
      </section>

      {/* ── DEFINICIÓN DIRECTA ────────────────────────────────────────────── */}
      <section className="section bg-r-cream">
        <div className="container-content">
          <p className="label-tag mb-4">La definición sin adornos</p>
          <h2 className="font-display text-display-md text-r-dark">
            Qué es Rentabilismo, exactamente
          </h2>
          <div className="mt-6 space-y-5 text-r-dark/85">
            <p className="text-lg font-medium text-r-dark">
              Rentabilismo es un sistema para mejorar la rentabilidad real de
              un negocio. Combina diagnóstico, método y acción en cinco áreas
              clave: Personas, Producto/Servicio, Precios, Procesos y
              Promoción/Publicidad.
            </p>
            <p>
              No va de facturar más. Va de generar más margen con lo que ya
              tienes, eliminar lo que te cuesta sin retorno y construir una
              estructura que funcione mejor con menos intervención tuya.
            </p>
            <p>
              El eje central es el <strong>Método 5P</strong>: un marco que
              permite diagnosticar en qué área está el cuello de botella
              principal y actuar sobre él con criterio y prioridad. Sin
              intentar arreglar todo a la vez. Sin teoría desconectada.
            </p>
            <p>
              Lo que no hace Rentabilismo: no te promete que vas a ganar el
              doble en tres meses, no te da un plan genérico que sirva para
              cualquier negocio y no pretende que el problema sea solo de
              actitud.
            </p>
          </div>
        </div>
      </section>

      {/* ── POR QUÉ NACE ──────────────────────────────────────────────────── */}
      <section className="section bg-r-cream">
        <div className="container-content">
          <p className="label-tag mb-4">El origen</p>
          <h2 className="font-display text-display-md text-r-dark">
            Por qué nace este sistema
          </h2>
          <div className="mt-6 space-y-5 text-r-dark/85">
            <p>
              La mayoría de los recursos para empresarios hispanohablantes
              tienen un problema de aplicabilidad. O son demasiado teóricos
              para implementarse en un negocio real con recursos limitados,
              o están diseñados para grandes empresas con equipos especializados,
              o prometen mucho y explican poco.
            </p>
            <p>
              El empresario que tiene entre dos y veinte personas, que lleva
              el negocio con sus manos y que no tiene tiempo para teoría,
              necesita otro tipo de ayuda. Necesita un sistema que pueda
              entender, que pueda diagnosticar por sí mismo y que le diga
              por dónde empezar.
            </p>
            <p>
              Rentabilismo nace de trabajar con negocios reales, de ver qué
              falla y qué funciona y de sistematizar ese aprendizaje en algo
              que otros puedan usar. No es un sistema inventado en una
              academia. Es el resultado de ver los mismos errores repetirse
              en negocios distintos y construir el marco para evitarlos.
            </p>
          </div>
        </div>
      </section>

      {/* ── QUÉ PROBLEMA RESUELVE ─────────────────────────────────────────── */}
      <section className="section bg-r-cream">
        <div className="container-content">
          <p className="label-tag mb-4">El problema que resuelve</p>
          <h2 className="font-display text-display-md text-r-dark">
            Por qué tantos negocios trabajan mucho y mejoran poco
          </h2>
          <div className="mt-6 space-y-5 text-r-dark/85">
            <p>
              No es un problema de esfuerzo. Es un problema de sistema.
            </p>
            <p>
              La mayoría de los negocios empiezan respondiendo a la demanda:
              alguien compra, tú produces, crece la facturación. En esa fase
              no necesitas mucho orden porque el crecimiento cubre los errores.
            </p>
            <p>
              Pero llega un punto en que ese modelo deja de funcionar. Los
              costes crecen, el margen se estrecha, el dueño no puede delegar
              porque no hay sistemas claros, y cada cliente o proyecto nuevo
              añade trabajo pero no mejora la rentabilidad.
            </p>
            <p>
              El error típico es intentar resolver esto con más ventas.
              Más clientes, más canales, más marketing. Pero si el problema
              es de estructura, más volumen solo amplifica el problema.
            </p>
            <p>
              Rentabilismo resuelve el problema desde el origen: diagnostica
              qué área está limitando la rentabilidad, prioriza, actúa y mide.
            </p>
          </div>
        </div>
      </section>

      {/* ── NO VA DE HACER MÁS ────────────────────────────────────────────── */}
      <section className="section bg-r-cream">
        <div className="container-content">
          <p className="label-tag mb-4">El enfoque</p>
          <h2 className="font-display text-display-md text-r-dark">
            No va de hacer más. Va de pensar mejor.
          </h2>
          <div className="mt-6 space-y-5 text-r-dark/85">
            <p>
              La trampa del empresario moderno es creer que el problema es
              de volumen: más ventas, más clientes, más contenido, más canales,
              más herramientas.
            </p>
            <p>
              En la mayoría de los casos, el problema no es de escasez. Es de
              ineficiencia: márgenes mal calculados, clientes que no son
              rentables, procesos que consumen más recursos de los que generan,
              precios que no cubren los costes reales.
            </p>
            <p>
              Hacer más sobre una base deficiente solo amplía el problema.
              Primero claridad, luego orden, luego acción. En ese orden.
            </p>
          </div>
        </div>
      </section>

      {/* ── LAS DIFERENCIAS ────────────────────────────────────────────────── */}
      <section className="section bg-r-cream">
        <div className="container-content">
          <p className="label-tag mb-4">Las diferencias</p>
          <h2 className="font-display text-display-md text-r-dark">
            Rentabilismo frente a lo que ya conoces
          </h2>
          <p className="mt-4 max-w-xl leading-relaxed text-r-muted">
            No falta oferta de formación y consultoría. Lo que falta es que
            sirva de verdad. Esto es lo que diferencia a Rentabilismo de las
            opciones más habituales.
          </p>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {DIFERENCIAS.map((item) => (
              <div key={item.vs} className="card flex flex-col gap-4">
                <div>
                  <p className="label-tag text-r-muted/50">El problema con</p>
                  <p className="mt-1 font-semibold text-r-dark">{item.vs}</p>
                  <p className="mt-2 text-sm leading-relaxed text-r-muted">{item.problema}</p>
                </div>
                <div className="border-t border-r-border pt-4">
                  <p className="label-tag text-r-green">Rentabilismo</p>
                  <p className="mt-1 text-sm leading-relaxed text-r-dark/85">{item.rentabilismo}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── QUÉ CAMBIA ────────────────────────────────────────────────────── */}
      <section className="section bg-r-green">
        <div className="container-content">
          <p className="label-tag mb-4 text-r-warm/50">Lo que cambia</p>
          <h2 className="font-display text-display-md text-r-white">
            Qué ocurre cuando el sistema se aplica
          </h2>
          <p className="mt-4 max-w-xl text-lg leading-relaxed text-r-warm/70">
            No son promesas. Son los cambios concretos que produce aplicar
            el Método 5P de forma consistente en un negocio real.
          </p>
          <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {QUE_CAMBIA.map((item) => (
              <li
                key={item}
                className="flex items-start gap-4 border border-r-border-d p-5"
              >
                <span className="mt-1 block h-2 w-2 shrink-0 rounded-full bg-r-green-2" />
                <p className="text-[1rem] leading-relaxed text-r-warm/80">{item}</p>
              </li>
            ))}
          </ul>
          <div className="mt-12 flex flex-col gap-4 sm:flex-row">
            <Button href="/metodo-5p" variant="primary">Ver el Método 5P →</Button>
            <Button href="/manifiesto" variant="secondary">Leer el Manifiesto</Button>
          </div>
        </div>
      </section>
    </>
  );
}
