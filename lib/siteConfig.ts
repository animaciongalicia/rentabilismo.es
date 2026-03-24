export const SITE_URL = "https://rentabilismo.es";
export const SITE_NAME = "Rentabilismo";
export const SITE_DESCRIPTION =
  "El sistema práctico para construir negocios realmente rentables. Sin humo, sin postureo. Método, claridad y acción real para empresarios hispanohablantes.";

export const NAV_LINKS = [
  { label: "Qué es",      href: "/que-es-rentabilismo" },
  { label: "Método 5P",   href: "/metodo-5p" },
  { label: "Manifiesto",  href: "/manifiesto" },
  { label: "Filosofía",   href: "/filosofia" },
  { label: "Diccionario", href: "/diccionario" },
  { label: "Para quién",  href: "/para-quien-es" },
  { label: "Empieza aquí", href: "/empieza-aqui" },
];

// Sub-navegación del Método 5P (para uso interno en esas páginas)
export const METODO_5P_LINKS = [
  { num: "01", label: "Personas",              href: "/metodo-5p/personas" },
  { num: "02", label: "Producto / Servicio",   href: "/metodo-5p/producto-servicio" },
  { num: "03", label: "Precios",               href: "/metodo-5p/precios" },
  { num: "04", label: "Procesos",              href: "/metodo-5p/procesos" },
  { num: "05", label: "Promoción / Publicidad",href: "/metodo-5p/promocion-publicidad" },
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

export const OG_IMAGE = `${SITE_URL}/og-default.png`;
