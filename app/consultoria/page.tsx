import type { Metadata } from "next";
import Breadcrumb from "@/components/ui/Breadcrumb";
import Button from "@/components/ui/Button";
import { SITE_URL } from "@/lib/siteConfig";

const EXTERNAL = "https://consultoriametodo.es";
const DOMAIN   = "consultoriametodo.es";

export const metadata: Metadata = {
  title: "Consultoría presencial en A Coruña — Mejora empresarial directa | Rentabilismo",
  description:
    "Servicio de consultoría de mejora empresarial en A Coruña. Trabajo directo con el empresario, en su negocio, con sus números reales. Diagnóstico, plan de acción y acompañamiento en la implementación.",
  alternates: { canonical: `${SITE_URL}/consultoria` },
  openGraph: {
    title: "Consultoría presencial en A Coruña — Mejora empresarial directa | Rentabilismo",
    description:
      "Consultoría de mejora empresarial en A Coruña. Trabajo directo con el empresario y sus números reales.",
    url: `${SITE_URL}/consultoria`,
  },
};

export default function ConsultoriaPage() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section className="bg-r-dark py-20 sm:py-24 md:py-32">
        <div className="container-site">
          <Breadcrumb items={[
            { label: "Inicio", href: "/" },
            { label: "Consultoría presencial" },
          ]} />
          <p className="label-tag mb-4 text-r-warm/50">Servicio presencial · {DOMAIN}</p>
          <h1 className="font-display text-display-xl text-r-white">
            Consultoría de mejora empresarial en A Coruña
          </h1>
          <p className="mt-6 max-w-2xl text-xl leading-relaxed text-r-warm/75">
            Trabajo directo con el empresario. En su negocio. Con sus números
            reales. Sin informes de 80 páginas que nadie implementa.
          </p>
          <div className="mt-10">
            <a
              href={EXTERNAL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-r-lime px-7 py-3.5 text-sm font-semibold text-r-dark no-underline hover:bg-r-lime/85 transition-colors"
            >
              Ver disponibilidad en {DOMAIN} ↗
            </a>
          </div>
        </div>
      </section>

      {/* ── EL PROBLEMA ──────────────────────────────────────────────────── */}
      <section className="section bg-r-white">
        <div className="container-prose">
          <p className="label-tag mb-4">El problema con la consultoría tradicional</p>
          <h2 className="font-display text-display-md text-r-dark">
            El informe que nadie implementa
          </h2>
          <div className="mt-6 space-y-5 text-r-dark/85">
            <p>
              El modelo de consultoría tradicional tiene un problema estructural:
              el consultor pasa semanas analizando, entrega un informe detallado
              lleno de recomendaciones bien argumentadas, cobra sus honorarios
              y desaparece. El empresario se queda con un documento que no sabe
              cómo implementar solo.
            </p>
            <p>
              En los meses siguientes, el día a día se come el tiempo. La urgencia
              operativa gana a lo estratégico. El informe coge polvo. Y el negocio
              sigue igual que antes, con la diferencia de que el empresario ha
              gastado dinero y no ha visto resultado.
            </p>
            <p>
              El servicio de consultoría de Rentabilismo está diseñado desde el
              principio para evitar ese resultado. El foco no es el diagnóstico.
              Es la implementación. No el informe. El cambio.
            </p>
          </div>
        </div>
      </section>

      {/* ── CÓMO FUNCIONA ────────────────────────────────────────────────── */}
      <section className="section bg-r-warm">
        <div className="container-site">
          <p className="label-tag mb-4">Cómo funciona</p>
          <h2 className="font-display text-display-md text-r-dark mb-8">
            Cuatro fases de trabajo
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            {[
              {
                num: "01",
                titulo: "Diagnóstico inicial",
                desc: "Primera sesión presencial de 2-3 horas. Se analiza el negocio en las cinco palancas del Método 5P con los datos reales del empresario. Al terminar, hay un mapa claro de qué está funcionando, qué no y en qué orden trabajarlo.",
                detalle: "Presencial en A Coruña o remoto",
              },
              {
                num: "02",
                titulo: "Plan de acción",
                desc: "Con el diagnóstico sobre la mesa, se define un plan concreto: qué palancas trabajar, en qué orden, con qué acciones específicas y qué indicadores vamos a medir. Sin objetivos vagos. Sin 'mejorar la comunicación'. Acciones con responsable y fecha.",
                detalle: "Entregable escrito, no un informe",
              },
              {
                num: "03",
                titulo: "Sesiones de implementación",
                desc: "Sesiones periódicas de trabajo conjunto. Se revisa lo que se ha hecho, se resuelven los bloqueos que han aparecido, se ajusta el plan si es necesario y se define el trabajo para el siguiente periodo. El empresario no implementa solo.",
                detalle: "Frecuencia adaptada al proyecto",
              },
              {
                num: "04",
                titulo: "Seguimiento y cierre",
                desc: "Cuando las métricas muestran que los cambios están consolidados y el negocio funciona de forma autónoma con la nueva estructura, se cierra el acompañamiento. El objetivo es que el empresario no necesite al consultor para seguir avanzando.",
                detalle: "Resultado medible, no dependencia",
              },
            ].map((f) => (
              <div key={f.num} className="card">
                <p className="text-xs font-semibold tracking-widest text-r-muted/50 mb-2">{f.num}</p>
                <h3 className="font-display text-display-sm text-r-dark mb-3">{f.titulo}</h3>
                <p className="text-r-dark/80 text-sm leading-relaxed mb-3">{f.desc}</p>
                <p className="text-xs text-r-green font-medium">{f.detalle}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PARA QUIÉN ───────────────────────────────────────────────────── */}
      <section className="section bg-r-cream">
        <div className="container-prose">
          <p className="label-tag mb-4">Para quién es</p>
          <h2 className="font-display text-display-md text-r-dark mb-8">
            Quién encaja con este servicio
          </h2>
          <div className="space-y-5">
            {[
              {
                perfil: "El empresario que necesita acompañamiento directo",
                desc: "Sabe que puede mejorar su negocio pero necesita a alguien que se siente con él, entienda su situación real y le ayude a implementar, no solo a diagnosticar. Las herramientas online no son suficientes para él.",
              },
              {
                perfil: "La situación es urgente o compleja",
                desc: "No hay tiempo para trabajar a ritmo propio. El negocio tiene un problema que necesita intervención ahora: una crisis de rentabilidad, una reestructuración de equipo, una decisión estratégica de alto impacto.",
              },
              {
                perfil: "Ha contratado consultores antes sin resultado",
                desc: "Ha pasado por el proceso de informe-sin-implementación y no quiere repetirlo. Busca algo diferente: trabajo real, medible, con foco en el resultado, no en el proceso.",
              },
              {
                perfil: "Está en A Coruña o Galicia",
                desc: "El servicio está pensado para trabajo presencial en A Coruña y zona de influencia en Galicia, con la posibilidad de complementarlo con sesiones remotas según el proyecto.",
              },
            ].map((p) => (
              <div key={p.perfil} className="card-accent">
                <h3 className="font-semibold text-r-dark mb-2">{p.perfil}</h3>
                <p className="text-sm text-r-dark/80 leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── DIFERENCIA CLAVE ─────────────────────────────────────────────── */}
      <section className="section bg-r-white">
        <div className="container-prose">
          <p className="label-tag mb-4">La diferencia</p>
          <h2 className="font-display text-display-md text-r-dark">
            Por qué este servicio funciona cuando otros no funcionaron
          </h2>
          <div className="mt-6 space-y-5 text-r-dark/85">
            <p>
              El problema de la mayoría de los servicios de consultoría no es
              la calidad del análisis. Es que el análisis y la implementación
              son dos cosas distintas que requieren dos tipos de trabajo distintos.
            </p>
            <p>
              En este servicio, el diagnóstico no es el producto. Es el punto
              de partida. El producto es el cambio en el negocio. Y eso requiere
              acompañamiento en la implementación, no solo en el análisis.
            </p>
            <p>
              Eso significa presencia real: estar cuando los cambios generan
              resistencia interna, cuando aparece un bloqueo inesperado, cuando
              el equipo no reacciona como se esperaba. Las cosas raras casi
              siempre aparecen en la implementación, no en el diagnóstico.
            </p>
          </div>
        </div>
      </section>

      {/* ── SEÑALES ───────────────────────────────────────────────────────── */}
      <section className="section bg-r-warm">
        <div className="container-prose">
          <p className="label-tag mb-4">¿Es para ti?</p>
          <h2 className="font-display text-display-md text-r-dark mb-8">
            Señales de que necesitas este tipo de acompañamiento
          </h2>
          <ul className="space-y-4">
            {[
              "Has probado herramientas y formación y el negocio sigue igual.",
              "Tienes claro que necesitas cambiar algo pero no consigues implementarlo solo.",
              "Tu situación tiene matices que un cuestionario online no puede capturar.",
              "Necesitas que alguien te ayude a ver el negocio desde fuera, sin el sesgo del día a día.",
              "Quieres resultados medibles en un plazo razonable, no un proceso abierto indefinido.",
              "Estás en A Coruña o Galicia y valoras el trabajo presencial y la proximidad.",
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
        <div className="container-prose">
          <p className="label-tag mb-4 text-r-warm/50">El primer paso</p>
          <h2 className="font-display text-display-md text-r-white mb-4">
            Una primera conversación para ver si encajamos
          </h2>
          <p className="text-r-warm/70 mb-8 text-lg leading-relaxed">
            Antes de cualquier compromiso, hay una primera conversación para
            entender tu situación y ver si este es el servicio adecuado para ti
            ahora mismo. Sin presión comercial. Sin propuesta genérica.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href={EXTERNAL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-r-lime px-7 py-3.5 text-sm font-semibold text-r-dark no-underline hover:bg-r-lime/85 transition-colors"
            >
              Ver disponibilidad en {DOMAIN} ↗
            </a>
            <Button href="/herramientas" variant="secondary">Empezar con herramientas gratuitas</Button>
          </div>
          <p className="mt-6 text-sm text-r-warm/50">
            Servicio presencial en A Coruña y zona de Galicia. Complemento remoto disponible.
          </p>
        </div>
      </section>
    </>
  );
}
