import type { Metadata } from "next";
import Link from "next/link";
import Button from "@/components/ui/Button";
import Breadcrumb from "@/components/ui/Breadcrumb";
import { SITE_URL, METODO_5P_LINKS } from "@/lib/siteConfig";

const CURRENT_HREF = "/metodo-5p/precios";

export const metadata: Metadata = {
  title: "Precios — La tercera palanca del Método 5P | Rentabilismo",
  description:
    "El precio es la palanca más directa sobre la rentabilidad y la más descuidada. Cómo calcular, fijar y defender un precio que genere margen real.",
  alternates: { canonical: `${SITE_URL}/metodo-5p/precios` },
  openGraph: {
    title: "Precios — La tercera palanca del Método 5P | Rentabilismo",
    description:
      "El precio es la palanca más directa sobre la rentabilidad y la más descuidada. Cómo calcular, fijar y defender un precio que genere margen real.",
    url: `${SITE_URL}/metodo-5p/precios`,
  },
};

export default function PreciosPage() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section className="bg-r-green py-12 sm:py-16 md:py-20">
        <div className="container-content">
          <Breadcrumb items={[
            { label: "Inicio", href: "/" },
            { label: "Método 5P", href: "/metodo-5p" },
            { label: "Precios" },
          ]} />
          <p className="label-tag mb-4 text-r-warm/50">Palanca 03 del Método 5P</p>
          <h1 className="font-display text-display-xl text-r-white">
            Precios
          </h1>
          <p className="mt-4 text-base leading-relaxed text-r-warm/70">
            El precio correcto no es el más bajo. Es el que cubre tus costes
            reales y refleja el valor que entregas.
          </p>
        </div>
      </section>

      {/* ── POR QUÉ LOS PRECIOS SON EL PROBLEMA MÁS COMÚN ────────────────── */}
      <section className="section bg-r-white">
        <div className="container-content">
          <p className="label-tag mb-4">El origen del problema</p>
          <h2 className="font-display text-display-md text-r-dark">
            Por qué la mayoría de los negocios tienen precios incorrectos
          </h2>
          <div className="mt-6 space-y-5 text-r-dark/85">
            <p>
              La mayoría de los empresarios tienen precios que se fijaron hace
              tiempo y no se han revisado desde entonces. O precios que se
              calcularon mirando a la competencia en vez de mirar los propios
              costes. En ambos casos, el resultado es el mismo: trabajan para
              cubrir gastos, no para generar margen.
            </p>
            <p>
              El precio es la palanca de rentabilidad más directa que existe.
              Una subida del 10% en el precio, manteniendo el mismo volumen,
              impacta el margen de forma mucho más significativa que reducir
              costes o aumentar ventas en la misma proporción. Sin embargo,
              es la palanca que más se evita tocar.
            </p>
            <p>
              El miedo a perder clientes, la incomodidad de defender el precio
              o simplemente la falta de tiempo para hacer los cálculos bien:
              hay muchas razones por las que los precios se quedan atrasados.
              El problema es que cada mes que pasa, ese retraso cuesta dinero
              real.
            </p>
          </div>
        </div>
      </section>

      {/* ── QUÉ MIRA RENTABILISMO ─────────────────────────────────────────── */}
      <section className="section bg-r-warm">
        <div className="container-content">
          <p className="label-tag mb-4">Qué mira Rentabilismo en Precios</p>
          <h2 className="font-display text-display-md text-r-dark mb-8">
            Cinco preguntas que revelan si tus precios funcionan
          </h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div className="card">
              <p className="text-xs font-semibold tracking-widest text-r-muted/50 mb-2">A</p>
              <h3 className="font-display text-display-sm text-r-dark mb-3">Coste real total</h3>
              <p className="text-r-dark/80 text-sm leading-relaxed">
                ¿Sabes lo que te cuesta realmente entregar cada servicio o
                producto? No solo los materiales. También el tiempo del equipo,
                el overhead, los errores y repeticiones, las horas de
                coordinación. La mayoría de los negocios subestiman su coste real.
              </p>
            </div>
            <div className="card">
              <p className="text-xs font-semibold tracking-widest text-r-muted/50 mb-2">B</p>
              <h3 className="font-display text-display-sm text-r-dark mb-3">Margen objetivo</h3>
              <p className="text-r-dark/80 text-sm leading-relaxed">
                ¿Tienes un margen mínimo definido por debajo del cual no
                trabajas? Sin un número claro, la presión del cliente o del
                mercado siempre gana. El margen mínimo no es negociable:
                es la línea que separa un trabajo rentable de uno que te cuesta dinero.
              </p>
            </div>
            <div className="card">
              <p className="text-xs font-semibold tracking-widest text-r-muted/50 mb-2">C</p>
              <h3 className="font-display text-display-sm text-r-dark mb-3">Coherencia con el valor</h3>
              <p className="text-r-dark/80 text-sm leading-relaxed">
                ¿Tu precio refleja lo que el cliente gana, no solo lo que tú
                gastas? Si ayudas a tu cliente a ahorrar 5.000€ al mes, un
                precio de 500€ es perfectamente razonable aunque tu coste
                directo sea de 100€.
              </p>
            </div>
            <div className="card">
              <p className="text-xs font-semibold tracking-widest text-r-muted/50 mb-2">D</p>
              <h3 className="font-display text-display-sm text-r-dark mb-3">Política de precios</h3>
              <p className="text-r-dark/80 text-sm leading-relaxed">
                ¿Tienes una política clara o negocias caso a caso cediendo
                siempre? Si cada presupuesto es una negociación que acaba
                en descuento, el problema no es el precio. Es que no tienes
                una política de precios y el cliente lo sabe.
              </p>
            </div>
            <div className="card">
              <p className="text-xs font-semibold tracking-widest text-r-muted/50 mb-2">E</p>
              <h3 className="font-display text-display-sm text-r-dark mb-3">Revisión periódica</h3>
              <p className="text-r-dark/80 text-sm leading-relaxed">
                ¿Cuándo fue la última vez que revisaste tus precios en serio?
                ¿Con los costes actuales? ¿Con el mercado actual? Si no
                recuerdas cuándo fue, la respuesta suele ser demasiado tiempo.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── EL MIEDO A SUBIR PRECIOS ──────────────────────────────────────── */}
      <section className="section bg-r-cream">
        <div className="container-content">
          <p className="label-tag mb-4">La conversación que nadie quiere tener</p>
          <h2 className="font-display text-display-md text-r-dark">
            El miedo a subir precios
          </h2>
          <div className="mt-6 space-y-5 text-r-dark/85">
            <p>
              El vértigo de subir precios es normal. Hay miedo a que los
              clientes se vayan, a que digan que eres caro, a perder trabajo
              en un momento en que el negocio necesita facturar. Es un miedo
              legítimo.
            </p>
            <p>
              Lo que no es legítimo es dejar que ese miedo te mantenga
              trabajando con precios que no cubren tus costes reales. Porque
              en ese caso no estás conservando clientes: estás pagando por
              tenerlos.
            </p>
            <p>
              Un caso concreto: una consultoría de recursos humanos que llevaba
              tres años con los mismos honorarios. Al hacer el cálculo de coste
              real por proyecto, descubrieron que el 30% de sus clientes les
              generaba pérdidas. Subieron precios un 20% y perdieron ese 30%.
              El margen neto subió un 35% con menos carga de trabajo.
            </p>
            <p>
              Perder al 20-30% de los clientes de precio bajo casi siempre
              mejora la rentabilidad total. El problema es que el negocio mira
              el número de clientes, no el margen por cliente.
            </p>
          </div>
        </div>
      </section>

      {/* ── LA TRAMPA DEL PRECIO COMPETITIVO ─────────────────────────────── */}
      <section className="section bg-r-white">
        <div className="container-content">
          <p className="label-tag mb-4">El error de estrategia</p>
          <h2 className="font-display text-display-md text-r-dark">
            La trampa del precio competitivo
          </h2>
          <div className="mt-6 space-y-5 text-r-dark/85">
            <p>
              Competir por precio es una carrera hacia abajo. Solo puede
              ganarla quien tiene mayor escala, mayor automatización y menores
              costes estructurales. Para un negocio pequeño o mediano, competir
              por precio es suicidio financiero lento.
            </p>
            <p>
              La frase &ldquo;tengo que estar en precio de mercado&rdquo; suena razonable
              pero no lo es. El mercado incluye empresas con estructuras de
              costes muy distintas. Estar en el precio de una empresa grande
              siendo pequeño significa trabajar sin margen.
            </p>
            <p>
              La alternativa no es cobrar el doble sin razón. La alternativa
              es construir una oferta lo suficientemente diferenciada para que
              el precio deje de ser el criterio principal de decisión. Eso es
              un trabajo de Producto/Servicio y de Comunicación, no de ajuste
              de tarifa.
            </p>
          </div>
        </div>
      </section>

      {/* ── SEÑALES ───────────────────────────────────────────────────────── */}
      <section className="section bg-r-warm">
        <div className="container-content">
          <p className="label-tag mb-4">Cómo saber si es tu problema</p>
          <h2 className="font-display text-display-md text-r-dark mb-8">
            Señales de que Precios es tu palanca bloqueada
          </h2>
          <ul className="space-y-4">
            {[
              "Tienes mucho trabajo pero el dinero no se nota al final del mes.",
              "Cuando un cliente pide descuento, sueles darlo aunque no quieras.",
              "No recuerdas cuándo fue la última vez que subiste precios.",
              "Calculaste tus tarifas mirando a la competencia, no mirando tus costes reales.",
              "Tienes clientes con los que sabes que pierdes dinero pero no quieres perderlos.",
              "Cuando presupuestas, sientes presión interna para quedarte barato y no perder el encargo.",
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
      <section className="section bg-r-green">
        <div className="container-content">
          <p className="label-tag mb-4 text-r-warm/50">El siguiente paso</p>
          <h2 className="font-display text-display-md text-r-white mb-4">
            Si tus precios no generan margen real, hay que revisarlos ya
          </h2>
          <p className="text-r-warm/70 mb-8 text-lg leading-relaxed">
            El diagnóstico identifica si Precios es la palanca que está
            limitando tu rentabilidad ahora mismo y por dónde empezar a corregirlo.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button href="/empieza-aqui" variant="primary">Hacer el diagnóstico →</Button>
            <Button href="/metodo-5p/procesos" variant="secondary">Ver Palanca 04: Procesos →</Button>
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
