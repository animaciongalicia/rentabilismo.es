import type { Metadata } from "next";
import Button from "@/components/ui/Button";
import { SITE_URL } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "Para quién es Rentabilismo — Tres perfiles, una necesidad",
  description:
    "Rentabilismo no es para todos. Es para empresarios con negocio bloqueado, hartos de probar cosas sin resultado, o que quieren empezar bien desde el principio. ¿Te identificas?",
  alternates: { canonical: `${SITE_URL}/para-quien-es` },
  openGraph: {
    title: "¿Para quién es Rentabilismo?",
    description:
      "Tres situaciones de empresario. Si te identificas con alguna, estás en el lugar correcto.",
    url: `${SITE_URL}/para-quien-es`,
  },
};

const PERFILES = [
  {
    id: "bloqueado",
    num: "A",
    headline: "Tengo un negocio y está bloqueado",
    resumen:
      "El negocio existe, tiene clientes, tiene estructura. Pero llevas tiempo sin mejorar aunque trabajes más.",
    que_le_pasa: [
      "Factura razonablemente bien, pero el margen no crece o incluso ha bajado.",
      "Tiene clientes, pero no todos son rentables y no sabe cuáles sí lo son.",
      "Trabaja muchas horas y siente que el negocio depende demasiado de él.",
      "Hay cosas que no funcionan del todo bien pero no hay tiempo para pararlas a arreglar.",
    ],
    que_piensa:
      "«Trabajo duro, tengo clientes, pero no entiendo por qué los números no mejoran. Algo está fallando y no sé exactamente qué.»",
    error:
      "Intentar resolver el problema con más ventas o más marketing antes de haber diagnosticado qué área está limitando la rentabilidad. Añadir volumen sobre una estructura deficiente solo amplía el problema.",
    necesita:
      "Un diagnóstico honesto de qué palanca está bloqueada. No más actividad general, sino acción concreta sobre el punto correcto.",
    como_ayuda:
      "El Método 5P permite identificar cuál de las cinco palancas está limitando el negocio. Una vez identificada, la acción se concentra ahí. Sin dispersión, sin intentar cambiar todo a la vez.",
    cta: { label: "Empieza por aquí", href: "/empieza-aqui#ruta-bloqueado" },
  },
  {
    id: "hastiado",
    num: "B",
    headline: "He probado mucho y sigo en el mismo punto",
    resumen:
      "Cursos comprados, consultores contratados, estrategias nuevas cada temporada. Los resultados no llegan o no duran.",
    que_le_pasa: [
      "Ha invertido en formación que tenía sentido pero que no ha podido aplicar a su negocio concreto.",
      "Ha contratado consultores o agencias que hicieron diagnósticos pero no implementaron nada.",
      "Cada nueva estrategia genera un sprint de actividad que luego se apaga.",
      "Está harto del humo, del postureo y de las promesas que no se cumplen.",
    ],
    que_piensa:
      "«Ya he pagado por demasiadas cosas que no funcionaron. Sé distinguir el humo. Si esto es más de lo mismo, no me interesa.»",
    error:
      "Creer que el problema es que aún no ha encontrado la estrategia correcta, cuando en realidad el problema es que ninguna estrategia funciona sin antes tener claras las bases: producto definido, precio correcto, procesos que funcionan.",
    necesita:
      "Un sistema que parte del diagnóstico real de su negocio, no de un framework genérico. Y que sea aplicable por él mismo, sin depender de que otro lo implemente.",
    como_ayuda:
      "Rentabilismo es un sistema, no un servicio. Puedes estudiarlo, entenderlo y aplicarlo. No depende de que ningún consultor esté presente. Es tuyo para usarlo como quieras.",
    cta: { label: "Ver cómo funciona el método", href: "/metodo-5p" },
  },
  {
    id: "empezando",
    num: "C",
    headline: "Quiero empezar sin cometer los errores de siempre",
    resumen:
      "Tienes un proyecto, una idea o un negocio reciente. Aún puedes construir bien desde el principio.",
    que_le_pasa: [
      "Tiene una idea o un negocio reciente con potencial pero sin estructura clara.",
      "Entiende que hay errores comunes que se pueden evitar si sabes cuáles son.",
      "No quiere aprender a base de golpes caros si puede aprender antes.",
      "Ve muchas opciones y herramientas y no sabe bien por dónde empezar.",
    ],
    que_piensa:
      "«No quiero repetir los errores que veo en otros negocios. Prefiero aprender el sistema antes de escalar sobre él.»",
    error:
      "Empezar por la promoción antes de tener claro el producto, el precio y el cliente ideal. O crecer en volumen antes de tener una estructura que pueda sostener ese volumen.",
    necesita:
      "Un mapa claro de qué construir primero y en qué orden. No todo a la vez, sino una prioridad lógica que evite los errores más comunes.",
    como_ayuda:
      "El Método 5P da ese orden. Empieza por las personas y el producto, luego el precio, luego los procesos, luego la promoción. No es el único orden posible, pero sí el que tiene más sentido cuando construyes desde cero.",
    cta: { label: "Empezar desde el principio", href: "/metodo-5p" },
  },
];

export default function ParaQuienEsPage() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section className="bg-r-dark py-20 md:py-28">
        <div className="container-content">
          <p className="label-tag mb-4 text-r-warm/50">Los perfiles</p>
          <h1 className="font-display text-display-xl text-r-white">
            ¿Es Rentabilismo<br />para ti?
          </h1>
          <p className="mt-6 max-w-2xl text-xl leading-relaxed text-r-warm/75">
            No está diseñado para todos. Pero si te identificas con alguno
            de estos tres perfiles, estás en el lugar correcto.
          </p>
        </div>
      </section>

      {/* ── PARA QUIÉN NO ES ──────────────────────────────────────────────── */}
      <section className="section-sm bg-r-white">
        <div className="container-content">
          <p className="label-tag mb-4">Antes de seguir</p>
          <h2 className="font-display text-display-sm text-r-dark">
            Rentabilismo no es para todo el mundo
          </h2>
          <div className="mt-4 space-y-3 text-r-dark/80">
            <p>
              No está pensado para quien busca escalar a millones en doce meses,
              para quien quiere construir una marca personal o para quien ya
              tiene un sistema que funciona bien.
            </p>
            <p>
              Está pensado para empresarios y emprendedores hispanohablantes que
              necesitan construir o mejorar la base de un negocio rentable.
              Sin atajos. Sin postureo.
            </p>
          </div>
        </div>
      </section>

      {/* ── PERFILES ──────────────────────────────────────────────────────── */}
      {PERFILES.map((perfil, i) => (
        <section
          key={perfil.id}
          id={perfil.id}
          className={`section ${i % 2 === 0 ? "bg-r-cream" : "bg-r-warm"}`}
        >
          <div className="container-content">
            <div className="grid gap-10 md:grid-cols-[auto_1fr] md:gap-14">

              {/* Indicador */}
              <div className="flex flex-col items-start gap-1 md:items-center">
                <span className="font-display text-[5rem] font-bold leading-none text-r-border">
                  {perfil.num}
                </span>
              </div>

              {/* Contenido */}
              <div>
                <h2 className="font-display text-display-lg text-r-dark">
                  {perfil.headline}
                </h2>
                <p className="mt-3 text-lg leading-relaxed text-r-dark/75">
                  {perfil.resumen}
                </p>

                <div className="mt-8 grid gap-6 md:grid-cols-2">

                  {/* Qué le pasa */}
                  <div>
                    <p className="label-tag mb-3">Qué está viviendo</p>
                    <ul className="space-y-2.5">
                      {perfil.que_le_pasa.map((s) => (
                        <li key={s} className="flex items-start gap-3 text-sm text-r-dark/80">
                          <span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-r-green" />
                          {s}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Lo que piensa */}
                  <div>
                    <p className="label-tag mb-3">Lo que piensa</p>
                    <blockquote className="border-l-2 border-r-green pl-4 text-sm italic leading-relaxed text-r-dark/75">
                      {perfil.que_piensa}
                    </blockquote>

                    <p className="label-tag mb-2 mt-5 text-r-gold">El error habitual</p>
                    <p className="text-sm leading-relaxed text-r-dark/75">{perfil.error}</p>
                  </div>

                </div>

                {/* Qué necesita + cómo ayuda */}
                <div className="mt-8 grid gap-6 border-t border-r-border pt-8 md:grid-cols-2">
                  <div>
                    <p className="label-tag mb-2">Qué necesita de verdad</p>
                    <p className="text-sm leading-relaxed text-r-dark/80">{perfil.necesita}</p>
                  </div>
                  <div>
                    <p className="label-tag mb-2 text-r-green">Cómo ayuda Rentabilismo</p>
                    <p className="text-sm leading-relaxed text-r-dark/80">{perfil.como_ayuda}</p>
                  </div>
                </div>

                <div className="mt-8">
                  <Button href={perfil.cta.href} variant="secondary">
                    {perfil.cta.label} →
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* ── CIERRE ────────────────────────────────────────────────────────── */}
      <section className="section bg-r-green">
        <div className="container-content">
          <p className="font-display text-display-md text-r-white">
            Si te has visto en alguno de estos tres perfiles, no necesitas
            más convencimiento. Solo necesitas empezar.
          </p>
          <div className="mt-10">
            <Button href="/empieza-aqui" variant="primary">Empieza aquí →</Button>
          </div>
        </div>
      </section>
    </>
  );
}
