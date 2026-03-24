export const SITE_URL = "https://rentabilismo.es";
export const SITE_NAME = "Rentabilismo";
export const SITE_DESCRIPTION =
  "El sistema práctico para construir negocios realmente rentables. Sin humo, sin postureo. Método, claridad y acción real.";

export const NAV_LINKS = [
  { label: "Qué es",      href: "/que-es-rentabilismo" },
  { label: "Método 5P",   href: "/metodo-5p" },
  { label: "Manifiesto",  href: "/manifiesto" },
  { label: "Diccionario", href: "/diccionario" },
  { label: "Para quién",  href: "/para-quien-es" },
  { label: "Empieza aquí", href: "/empieza-aqui" },
];

export const ECOSYSTEM_LINKS = [
  {
    label: "Plataforma SaaS",
    href: "#",          // → rentabilismo.com (pendiente)
    description: "Consultoría guiada y herramientas online",
  },
  {
    label: "Blog y contenidos",
    href: "#",          // → focorentabilismo.com (pendiente)
    description: "Artículos, recursos y casos prácticos",
  },
  {
    label: "Consultoría presencial",
    href: "#",          // → consultoriametodo.es (pendiente)
    description: "Servicio directo en A Coruña",
  },
];

// OG defaults – cada página puede sobrescribir title y description
export const OG_IMAGE = `${SITE_URL}/og-default.png`;
