import type { Metadata } from "next";
import { SITE_URL } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "Política de Privacidad",
  description: "Política de privacidad de Rentabilismo. Información sobre el tratamiento de datos personales conforme al RGPD y la LOPDGDD.",
  alternates: { canonical: `${SITE_URL}/privacidad` },
  robots: { index: true, follow: false },
};

export default function PrivacidadPage() {
  return (
    <section className="section bg-r-cream">
      <div className="container-prose">
        <p className="label-tag mb-4">Legal</p>
        <h1 className="font-display text-display-lg text-r-dark">Política de Privacidad</h1>
        <p className="mt-2 text-sm text-r-muted/60">Última actualización: marzo de 2026</p>

        <div className="mt-10 space-y-10 text-r-dark/85">

          <div>
            <h2 className="font-display text-display-sm text-r-dark mb-4">1. Responsable del tratamiento</h2>
            <p>
              En cumplimiento del Reglamento (UE) 2016/679 (RGPD) y la Ley Orgánica 3/2018
              de Protección de Datos Personales y garantía de los derechos digitales (LOPDGDD),
              se informa que el responsable del tratamiento de los datos personales recogidos
              a través de este sitio web es:
            </p>
            <ul className="mt-4 space-y-1 text-sm">
              <li><strong>Titular:</strong> Inversiones SHISHO SL</li>
              <li><strong>NIF/CIF:</strong> B70319223</li>
              <li><strong>Domicilio:</strong> Ronda de Montealto, 4 — 15002 A Coruña</li>
              <li><strong>Email de contacto:</strong> info@rentabilismo.es</li>
              <li><strong>Sitio web:</strong> https://rentabilismo.es</li>
            </ul>
          </div>

          <div>
            <h2 className="font-display text-display-sm text-r-dark mb-4">2. Datos que recogemos</h2>
            <p>
              En la fase actual, rentabilismo.es no recoge datos personales de los visitantes
              mediante formularios, registros de usuario ni ningún otro mecanismo de captación
              activa. El sitio es de carácter informativo.
            </p>
            <p className="mt-4">
              Si en el futuro se incorporan formularios de contacto, suscripción u otros
              mecanismos de captación, esta política se actualizará con la información
              específica sobre los datos tratados, su finalidad y base legal.
            </p>
          </div>

          <div>
            <h2 className="font-display text-display-sm text-r-dark mb-4">3. Cookies</h2>
            <p>
              Este sitio web puede utilizar cookies técnicas estrictamente necesarias para
              el correcto funcionamiento de la navegación. No se utilizan cookies de análisis,
              seguimiento ni publicidad comportamental sin el consentimiento previo del usuario.
            </p>
          </div>

          <div>
            <h2 className="font-display text-display-sm text-r-dark mb-4">4. Derechos del usuario</h2>
            <p>
              En virtud de la normativa vigente en materia de protección de datos, los usuarios
              tienen derecho a:
            </p>
            <ul className="mt-4 space-y-2 text-sm list-disc list-inside">
              <li>Acceder a sus datos personales</li>
              <li>Rectificar datos inexactos o incompletos</li>
              <li>Solicitar la supresión de sus datos cuando ya no sean necesarios</li>
              <li>Oponerse al tratamiento de sus datos</li>
              <li>Solicitar la limitación del tratamiento</li>
              <li>Solicitar la portabilidad de sus datos</li>
            </ul>
            <p className="mt-4">
              Para ejercer cualquiera de estos derechos, puede dirigirse al responsable del
              tratamiento a través de: info@rentabilismo.es
            </p>
            <p className="mt-4">
              Asimismo, tiene derecho a presentar una reclamación ante la Agencia Española
              de Protección de Datos (aepd.es) si considera que el tratamiento no se ajusta
              a la normativa vigente.
            </p>
          </div>

          <div>
            <h2 className="font-display text-display-sm text-r-dark mb-4">5. Seguridad</h2>
            <p>
              El titular adopta las medidas técnicas y organizativas necesarias para garantizar
              la seguridad de los datos personales y evitar su alteración, pérdida, tratamiento
              o acceso no autorizado, habida cuenta del estado de la tecnología, la naturaleza
              de los datos almacenados y los riesgos a que están expuestos.
            </p>
          </div>

          <div>
            <h2 className="font-display text-display-sm text-r-dark mb-4">6. Modificaciones</h2>
            <p>
              El titular se reserva el derecho a modificar la presente política de privacidad
              para adaptarla a cambios normativos, jurisprudenciales o de negocio. La versión
              vigente siempre estará disponible en esta página con la fecha de última actualización.
            </p>
          </div>

          <div>
            <h2 className="font-display text-display-sm text-r-dark mb-4">7. Legislación aplicable</h2>
            <p>
              La presente política se rige por la normativa española y europea en materia de
              protección de datos, en particular el Reglamento (UE) 2016/679 (RGPD) y la
              Ley Orgánica 3/2018 (LOPDGDD).
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
