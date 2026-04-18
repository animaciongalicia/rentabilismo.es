import type { Metadata } from "next";
import Link from "next/link";
import Button from "@/components/ui/Button";
import Breadcrumb from "@/components/ui/Breadcrumb";
import { SITE_URL, METODO_5P_LINKS } from "@/lib/siteConfig";

const CURRENT_HREF = "/metodo-5p/personas";

export const metadata: Metadata = {
  title: "Personas — La primera palanca del Método 5P | Rentabilismo",
  description:
    "El cuello de botella más común de un negocio no es de clientes ni de marketing. Es de personas: mal ubicadas, sin claridad de rol, o el propio dueño atrapado en lo operativo.",
  alternates: { canonical: `${SITE_URL}/metodo-5p/personas` },
  openGraph: {
    title: "Personas — La primera palanca del Método 5P | Rentabilismo",
    description:
      "El cuello de botella más común de un negocio no es de clientes ni de marketing. Es de personas: mal ubicadas, sin claridad de rol, o el propio dueño atrapado en lo operativo.",
    url: `${SITE_URL}/metodo-5p/personas`,
  },
};

export default function PersonasPage() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section className="bg-r-green py-12 sm:py-16 md:py-20">
        <div className="container-site">
          <Breadcrumb items={[
            { label: "Inicio", href: "/" },
            { label: "Método 5P", href: "/metodo-5p" },
            { label: "Personas" },
          ]} />
          <p className="label-tag mb-4 text-r-warm/50">Palanca 01 del Método 5P</p>
          <h1 className="font-display text-display-xl text-r-white">
            Personas
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-r-warm/70">
            Las personas correctas en el papel correcto. Empezando por ti.
          </p>
        </div>
      </section>

      {/* ── POR QUÉ ES LA PRIMERA ─────────────────────────────────────────── */}
      <section className="section bg-r-cream">
        <div className="container-content">
          <h2 className="font-display text-display-md text-r-dark">
            El problema rara vez está donde crees
          </h2>
          <div className="mt-6 space-y-5 text-r-dark/85">
            <p>
              El error más común es creer que el problema del negocio es de
              marketing o de ventas. Que si traes más clientes, todo mejora.
              En la mayoría de los casos, el problema es anterior: la persona
              incorrecta en el papel incorrecto.
            </p>
            <p>
              Eso incluye al dueño. De hecho, el dueño suele ser el primer
              caso de persona mal ubicada. Hace demasiadas cosas operativas,
              no delega lo que podría delegar y no tiene tiempo para lo que
              solo él puede hacer.
            </p>
            <p>
              Traer más clientes a un negocio con ese problema no lo resuelve.
              Lo agranda. Más ventas con las mismas personas mal ubicadas
              significa más caos, más errores y más agotamiento.
            </p>
            <p>
              Por eso Personas va primera. Si la estructura humana del negocio
              no funciona bien, todo lo demás se resiente.
            </p>
          </div>
        </div>
      </section>

      {/* ── QUÉ MIRA RENTABILISMO ─────────────────────────────────────────── */}
      <section className="section bg-r-cream">
        <div className="container-content">
          <h2 className="font-display text-display-md text-r-dark mb-8">
            Cinco áreas concretas
          </h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div className="card">
              <p className="text-xs font-semibold tracking-widest text-r-muted/50 mb-2">A</p>
              <h3 className="font-display text-display-sm text-r-dark mb-3">El papel del dueño</h3>
              <p className="text-r-dark/80 text-sm leading-relaxed">
                ¿Opera o dirige? ¿Cuánto tiempo dedica a tareas que otra persona
                podría hacer? El dueño que pasa el día resolviendo urgencias
                operativas no tiene espacio para tomar decisiones de fondo.
              </p>
            </div>
            <div className="card">
              <p className="text-xs font-semibold tracking-widest text-r-muted/50 mb-2">B</p>
              <h3 className="font-display text-display-sm text-r-dark mb-3">Estructura del equipo</h3>
              <p className="text-r-dark/80 text-sm leading-relaxed">
                ¿Hay claridad de roles? ¿Sabe cada persona exactamente qué se
                espera de ella, qué decisiones puede tomar sola y cuáles tiene
                que escalar? Sin esa claridad, la delegación no funciona.
              </p>
            </div>
            <div className="card">
              <p className="text-xs font-semibold tracking-widest text-r-muted/50 mb-2">C</p>
              <h3 className="font-display text-display-sm text-r-dark mb-3">Productividad real</h3>
              <p className="text-r-dark/80 text-sm leading-relaxed">
                ¿Hay personas que generan resultado y personas que consumen
                recursos sin retorno visible? No toda hora trabajada tiene el
                mismo valor. La productividad real mide resultado, no actividad.
              </p>
            </div>
            <div className="card">
              <p className="text-xs font-semibold tracking-widest text-r-muted/50 mb-2">D</p>
              <h3 className="font-display text-display-sm text-r-dark mb-3">Selección</h3>
              <p className="text-r-dark/80 text-sm leading-relaxed">
                ¿Contratas por urgencia o por criterio? La mayoría de los malos
                fichajes ocurren cuando hay prisa. Una mala contratación cuesta
                mucho más que el tiempo que tardas en contratar bien.
              </p>
            </div>
            <div className="card">
              <p className="text-xs font-semibold tracking-widest text-r-muted/50 mb-2">E</p>
              <h3 className="font-display text-display-sm text-r-dark mb-3">Compensación</h3>
              <p className="text-r-dark/80 text-sm leading-relaxed">
                ¿Tu estructura de costes de personal es sostenible con el margen
                actual? ¿Hay personas cuya retribución ya no está alineada con
                el valor que generan en esta fase del negocio?
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── EL ERROR MÁS CARO ─────────────────────────────────────────────── */}
      <section className="section bg-r-cream">
        <div className="container-content">
          <h2 className="font-display text-display-md text-r-dark">
            El dueño que hace de todo
          </h2>
          <div className="mt-6 space-y-5 text-r-dark/85">
            <p>
              Cuando el dueño lo hace todo, no tiene tiempo para hacer lo que
              solo él puede hacer. Eso parece obvio escrito así. Pero es el
              patrón más repetido en negocios pequeños y medianos.
            </p>
            <p>
              Ejemplo concreto: un empresario de servicios de instalaciones
              que pasa el 70% de su tiempo coordinando trabajos, gestionando
              proveedores, respondiendo correos de clientes y apagando fuegos
              del día a día. Tareas que, con un proceso claro, podría hacer
              un perfil administrativo de 1.500€ al mes.
            </p>
            <p>
              El resultado es que ese empresario no tiene tiempo para visitar
              nuevos clientes, revisar los márgenes de cada proyecto ni
              decidir en qué tipo de trabajo quiere especializarse. Que son
              exactamente las cosas que harían crecer el negocio.
            </p>
            <p>
              No se trata de que el dueño trabaje menos. Se trata de que trabaje
              en lo correcto. La diferencia entre un dueño que opera y uno que
              dirige es la diferencia entre un negocio estancado y uno que avanza.
            </p>
          </div>
        </div>
      </section>

      {/* ── SEÑALES Y QUÉ CAMBIA ─────────────────────────────────────────── */}
      <section className="section bg-r-cream">
        <div className="container-content">
          <div className="grid gap-12 md:grid-cols-2">
            <div>
              <h2 className="font-display text-display-md text-r-dark mb-8">
                Señales de que Personas es tu palanca bloqueada
              </h2>
              <ul className="space-y-4">
                {[
                  "Cuando no estás, las cosas se paran o se hacen mal.",
                  "Tu equipo te pregunta cosas que debería poder resolver solo.",
                  "Has contratado a alguien que no funciona bien pero no sabes cómo abordar la situación.",
                  "Tienes la sensación de que trabajas más horas que cualquiera de tu equipo y ganas lo mismo o menos.",
                  "No tienes claro quién hace qué en tu empresa. Y tu equipo tampoco.",
                  "Las personas buenas se van y las que se quedan no siempre son las más productivas.",
                ].map((señal) => (
                  <li key={señal} className="flex items-start gap-3">
                    <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-r-green" />
                    <span className="text-r-dark/85">{señal}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="font-display text-display-md text-r-dark mb-8">
                Qué cambia cuando funciona bien
              </h2>
              <ul className="space-y-4">
                {[
                  "El dueño tiene tiempo para hacer lo que solo él puede hacer: decidir, vender, diseñar la estrategia.",
                  "El equipo funciona sin necesitar supervisión constante porque los roles y expectativas están claros.",
                  "Las tareas operativas se hacen bien y a tiempo sin que el dueño tenga que estar encima.",
                  "Contratar deja de ser un parche de urgencia y se convierte en una decisión con criterio.",
                  "El coste de personal tiene sentido porque cada persona genera un retorno medible.",
                ].map((cambio) => (
                  <li key={cambio} className="flex items-start gap-3">
                    <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-r-green" />
                    <span className="text-r-dark/85">{cambio}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────────────────── */}
      <section className="section-sm bg-r-green">
        <div className="container-content">
          <p className="label-tag mb-4 text-r-warm/50">El siguiente paso</p>
          <h2 className="font-display text-display-md text-r-white mb-4">
            Si Personas es tu cuello de botella, hay que empezar por ahí
          </h2>
          <p className="text-r-warm/70 mb-8 leading-relaxed">
            El diagnóstico te ayuda a identificar si Personas es tu palanca
            más limitante ahora mismo, antes de tocar nada más.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button href="/empieza-aqui" variant="primary">Hacer el diagnóstico →</Button>
            <Button href="/metodo-5p/producto-servicio" variant="secondary">Ver Palanca 02: Producto/Servicio →</Button>
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
