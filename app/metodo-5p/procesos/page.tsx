import type { Metadata } from "next";
import Link from "next/link";
import Button from "@/components/ui/Button";
import Breadcrumb from "@/components/ui/Breadcrumb";
import { SITE_URL, METODO_5P_LINKS } from "@/lib/siteConfig";

const CURRENT_HREF = "/metodo-5p/procesos";

export const metadata: Metadata = {
  title: "Procesos — La cuarta palanca del Método 5P | Rentabilismo",
  description:
    "Sin sistemas no hay escala. Sin escala no hay rentabilidad. Cómo construir procesos que liberan al dueño, reducen errores y hacen el negocio más sólido.",
  alternates: { canonical: `${SITE_URL}/metodo-5p/procesos` },
  openGraph: {
    title: "Procesos — La cuarta palanca del Método 5P | Rentabilismo",
    description:
      "Sin sistemas no hay escala. Sin escala no hay rentabilidad. Cómo construir procesos que liberan al dueño, reducen errores y hacen el negocio más sólido.",
    url: `${SITE_URL}/metodo-5p/procesos`,
  },
};

export default function ProcesosPage() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section className="bg-r-dark py-20 sm:py-12 sm:py-16 md:py-20">
        <div className="container-content">
          <Breadcrumb items={[
            { label: "Inicio", href: "/" },
            { label: "Método 5P", href: "/metodo-5p" },
            { label: "Procesos" },
          ]} />
          <p className="label-tag mb-4 text-r-warm/50">Palanca 04 del Método 5P</p>
          <h1 className="font-display text-display-xl text-r-white">
            Procesos
          </h1>
          <p className="mt-6 max-w-2xl text-xl leading-relaxed text-r-warm/75">
            Un negocio que solo funciona cuando tú estás encima no está
            construido. Está improvisado.
          </p>
        </div>
      </section>

      {/* ── POR QUÉ LOS PROCESOS SON LA BASE ─────────────────────────────── */}
      <section className="section bg-r-white">
        <div className="container-content">
          <p className="label-tag mb-4">La base de la escalabilidad</p>
          <h2 className="font-display text-display-md text-r-dark">
            Por qué los procesos son lo que hace crecer un negocio sin romperse
          </h2>
          <div className="mt-6 space-y-5 text-r-dark/85">
            <p>
              Sin procesos documentados, cada tarea depende de quien la hace en
              ese momento. Eso genera inconsistencia: el resultado es bueno
              cuando lo hace una persona y mediocre cuando lo hace otra.
              Genera errores que nadie entiende por qué ocurren. Y genera una
              dependencia del dueño que no desaparece aunque contrates más gente.
            </p>
            <p>
              Cuando el dueño tiene que estar encima de todo para que funcione,
              no ha construido un negocio. Ha construido un trabajo que no puede
              dejar. No puede coger vacaciones sin que las cosas fallen. No puede
              delegar sin que el resultado baje. No puede crecer sin que el caos
              crezca al mismo ritmo.
            </p>
            <p>
              Los procesos no son burocracia. Son la forma de que el conocimiento
              del negocio deje de estar solo en la cabeza del dueño y pase a ser
              patrimonio del negocio. Eso es lo que permite delegar, contratar,
              escalar y, en algún momento, vender.
            </p>
          </div>
        </div>
      </section>

      {/* ── QUÉ MIRA RENTABILISMO ─────────────────────────────────────────── */}
      <section className="section bg-r-warm">
        <div className="container-content">
          <p className="label-tag mb-4">Qué mira Rentabilismo en Procesos</p>
          <h2 className="font-display text-display-md text-r-dark mb-8">
            Cinco preguntas que revelan el estado real de tus sistemas
          </h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div className="card">
              <p className="text-xs font-semibold tracking-widest text-r-muted/50 mb-2">A</p>
              <h3 className="font-display text-display-sm text-r-dark mb-3">Procesos críticos identificados</h3>
              <p className="text-r-dark/80 text-sm leading-relaxed">
                ¿Sabes cuáles son las 5-10 tareas que más impactan en la
                rentabilidad y en la calidad de lo que entregas? No todas las
                tareas tienen el mismo peso. Empezar por las críticas es lo
                que genera impacto real.
              </p>
            </div>
            <div className="card">
              <p className="text-xs font-semibold tracking-widest text-r-muted/50 mb-2">B</p>
              <h3 className="font-display text-display-sm text-r-dark mb-3">Documentación</h3>
              <p className="text-r-dark/80 text-sm leading-relaxed">
                ¿Están escritos de forma que otra persona pueda ejecutarlos bien
                sin necesitar preguntarte a ti? La documentación útil no es un
                manual de 50 páginas. Es una checklist o un vídeo de 5 minutos
                que elimina la ambigüedad.
              </p>
            </div>
            <div className="card">
              <p className="text-xs font-semibold tracking-widest text-r-muted/50 mb-2">C</p>
              <h3 className="font-display text-display-sm text-r-dark mb-3">Delegabilidad</h3>
              <p className="text-r-dark/80 text-sm leading-relaxed">
                ¿Hay tareas que podrías delegar hoy si tuvieras el proceso
                documentado? La falta de documentación es la razón número uno
                por la que el dueño acaba haciendo cosas que otra persona
                podría y debería hacer.
              </p>
            </div>
            <div className="card">
              <p className="text-xs font-semibold tracking-widest text-r-muted/50 mb-2">D</p>
              <h3 className="font-display text-display-sm text-r-dark mb-3">Revisión</h3>
              <p className="text-r-dark/80 text-sm leading-relaxed">
                ¿Hay procesos que ya no funcionan bien y que sigues usando por
                inercia? Los procesos envejecen. Lo que funcionaba cuando
                el negocio tenía dos personas puede ser un obstáculo cuando
                tiene diez.
              </p>
            </div>
            <div className="card">
              <p className="text-xs font-semibold tracking-widest text-r-muted/50 mb-2">E</p>
              <h3 className="font-display text-display-sm text-r-dark mb-3">Automatización</h3>
              <p className="text-r-dark/80 text-sm leading-relaxed">
                ¿Hay tareas repetitivas que podrían automatizarse con
                herramientas simples? No se trata de tecnología sofisticada.
                A veces es un formulario, una plantilla o una regla de correo
                lo que elimina una hora de trabajo manual cada semana.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── EJEMPLO CONCRETO ─────────────────────────────────────────────── */}
      <section className="section bg-r-cream">
        <div className="container-content">
          <p className="label-tag mb-4">Un caso real</p>
          <h2 className="font-display text-display-md text-r-dark">
            Documentar el onboarding de clientes: qué cambia
          </h2>
          <div className="mt-6 space-y-5 text-r-dark/85">
            <p>
              Una empresa de servicios de mantenimiento industrial tenía un
              problema recurrente: cada vez que empezaban a trabajar con un
              cliente nuevo, las primeras semanas eran un caos. Peticiones
              mal gestionadas, datos que faltaban, expectativas no alineadas,
              el técnico responsable llamando al dueño tres veces al día.
            </p>
            <p>
              El problema no era la gente. Era que no había un proceso de
              onboarding. Cada cliente nuevo era un caso distinto que se
              resolvía sobre la marcha. El dueño tenía ese proceso en la cabeza
              pero nunca lo había puesto por escrito.
            </p>
            <p>
              Dedicaron cuatro horas a documentar el proceso: qué información
              recoger antes de empezar, qué comunicar al cliente en los
              primeros tres días, qué revisar en la primera semana, quién es
              responsable de cada parte. Lo convirtieron en una checklist de
              dos páginas.
            </p>
            <p>
              El resultado fue inmediato: los nuevos clientes llegaban bien
              informados, el equipo sabía exactamente qué hacer sin preguntar
              y el dueño dejó de estar en el bucle de llamadas de la primera
              semana. Cuatro horas de trabajo que ahorraron horas cada mes.
            </p>
          </div>
        </div>
      </section>

      {/* ── PRIMERO DOCUMENTA, LUEGO AUTOMATIZA ──────────────────────────── */}
      <section className="section bg-r-white">
        <div className="container-content">
          <p className="label-tag mb-4">El orden correcto</p>
          <h2 className="font-display text-display-md text-r-dark">
            Primero documenta, luego automatiza
          </h2>
          <div className="mt-6 space-y-5 text-r-dark/85">
            <p>
              Muchos empresarios quieren automatizar antes de tener el proceso
              claro. Buscan herramientas, compran software, contratan a alguien
              para que &ldquo;digitalice&rdquo; su negocio. El resultado habitual es
              automatizar el caos: hacer más rápido lo que no funciona bien.
            </p>
            <p>
              El orden correcto es siempre el mismo: primero simplifica
              el proceso para que tenga sentido. Luego documéntalo para que
              cualquier persona pueda ejecutarlo. Luego, si tiene suficiente
              volumen y repetición, valora automatizarlo.
            </p>
            <p>
              Una tarea que se hace dos veces al mes no necesita automatización.
              Una tarea que se hace veinte veces al día, sí. La pregunta no es
              &ldquo;¿puedo automatizar esto?&rdquo; sino &ldquo;¿merece la pena el esfuerzo de
              automatizarlo dado el volumen que tiene?&rdquo;.
            </p>
          </div>
        </div>
      </section>

      {/* ── SEÑALES ───────────────────────────────────────────────────────── */}
      <section className="section bg-r-warm">
        <div className="container-content">
          <p className="label-tag mb-4">Cómo saber si es tu problema</p>
          <h2 className="font-display text-display-md text-r-dark mb-8">
            Señales de que Procesos es tu palanca bloqueada
          </h2>
          <ul className="space-y-4">
            {[
              "Cuando no estás, las cosas no se hacen o se hacen mal aunque el equipo tenga buena intención.",
              "El mismo tipo de error se repite una y otra vez sin que nadie sepa bien por qué ocurre.",
              "Incorporar a una persona nueva tarda semanas o meses porque no hay nada documentado que puedas darle.",
              "Tu equipo te pregunta cosas que deberían estar resueltas sin necesitar preguntarte.",
              "Sabes que podrías delegar ciertas tareas pero no lo haces porque te da más trabajo explicarlas que hacerlas tú.",
              "El negocio funciona bien cuando hay poco trabajo pero se descontrola cuando hay mucho.",
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
            Si tu negocio depende de que estés tú, Procesos es tu palanca
          </h2>
          <p className="text-r-warm/70 mb-8 text-lg leading-relaxed">
            El diagnóstico identifica si Procesos es lo que está limitando
            tu rentabilidad y qué procesos hay que atacar primero.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button href="/empieza-aqui" variant="primary">Hacer el diagnóstico →</Button>
            <Button href="/metodo-5p/promocion-publicidad" variant="secondary">Ver Palanca 05: Promoción/Publicidad →</Button>
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
