import type { Metadata } from "next";
import { SITE_URL } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "Aviso Legal",
  description: "Aviso legal de Rentabilismo. Información de identificación del titular conforme a la LSSI-CE.",
  alternates: { canonical: `${SITE_URL}/aviso-legal` },
  robots: { index: true, follow: false },
};

export default function AvisoLegalPage() {
  return (
    <section className="section bg-r-cream">
      <div className="container-prose">
        <p className="label-tag mb-4">Legal</p>
        <h1 className="font-display text-display-lg text-r-dark">Aviso Legal</h1>
        <p className="mt-2 text-sm text-r-muted/60">Última actualización: marzo de 2026</p>

        <div className="mt-10 space-y-10 text-r-dark/85">

          <div>
            <h2 className="font-display text-display-sm text-r-dark mb-4">1. Titular del sitio web</h2>
            <p>
              En cumplimiento de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad
              de la Información y del Comercio Electrónico (LSSI-CE), se facilitan a
              continuación los datos identificativos del titular de este sitio web:
            </p>
            <ul className="mt-4 space-y-1 text-sm">
              <li><strong>Titular:</strong> Inversiones SHISHO SL</li>
              <li><strong>NIF/CIF:</strong> B70319223</li>
              <li><strong>Domicilio social:</strong> Ronda de Montealto, 4 — 15002 A Coruña</li>
              <li><strong>Email:</strong> info@rentabilismo.es</li>
              <li><strong>Sitio web:</strong> https://rentabilismo.es</li>
              <li><strong>Inscripción registral:</strong> Registro Mercantil de A Coruña</li>
            </ul>
          </div>

          <div>
            <h2 className="font-display text-display-sm text-r-dark mb-4">2. Objeto y condiciones de uso</h2>
            <p>
              El presente Aviso Legal regula el acceso y uso del sitio web rentabilismo.es.
              El acceso a este sitio web y la utilización de sus contenidos implica la
              aceptación plena de las condiciones recogidas en este aviso legal.
            </p>
            <p className="mt-4">
              El titular se reserva el derecho a modificar, en cualquier momento y sin
              previo aviso, la presentación, configuración y contenidos del sitio web,
              así como las condiciones requeridas para su acceso y uso.
            </p>
          </div>

          <div>
            <h2 className="font-display text-display-sm text-r-dark mb-4">3. Propiedad intelectual e industrial</h2>
            <p>
              Los contenidos del sitio web rentabilismo.es — incluyendo, sin carácter
              limitativo, textos, diseño gráfico, código fuente, logotipos, marcas y
              cualquier otro elemento — están protegidos por los derechos de propiedad
              intelectual e industrial del titular o de terceros que han autorizado su uso.
            </p>
            <p className="mt-4">
              Queda expresamente prohibida la reproducción, distribución, comunicación
              pública, transformación o cualquier otra forma de explotación de dichos
              contenidos sin la autorización previa y por escrito del titular.
            </p>
          </div>

          <div>
            <h2 className="font-display text-display-sm text-r-dark mb-4">4. Exclusión de responsabilidad</h2>
            <p>
              El titular no garantiza la disponibilidad, continuidad ni infalibilidad del
              funcionamiento del sitio web, ni que los contenidos estén actualizados en todo
              momento. El titular queda eximido de cualquier responsabilidad por daños y
              perjuicios de cualquier naturaleza que pudieran deberse a la falta de
              disponibilidad o de continuidad del funcionamiento del sitio.
            </p>
            <p className="mt-4">
              El titular no se hace responsable de los contenidos de terceros a los que
              se pueda acceder mediante enlaces o referencias incluidos en este sitio web.
            </p>
          </div>

          <div>
            <h2 className="font-display text-display-sm text-r-dark mb-4">5. Legislación aplicable y jurisdicción</h2>
            <p>
              El presente aviso legal se rige por la legislación española vigente. Para
              la resolución de cualquier controversia o conflicto derivado del acceso o
              uso de este sitio web, las partes, con renuncia expresa a cualquier otro
              fuero que pudiera corresponderles, se someten a los juzgados y tribunales
              de A Coruña.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
