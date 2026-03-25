export const SITE_URL = "https://rentabilismo.es";
export const SITE_NAME = "Rentabilismo";
export const SITE_DESCRIPTION =
  "El sistema práctico para construir negocios realmente rentables. Sin humo, sin postureo. Método, claridad y acción real para empresarios hispanohablantes.";

export const NAV_LINKS = [
  { label: "Qué es",       href: "/que-es-rentabilismo" },
  { label: "Método 5P",    href: "/metodo-5p" },
  { label: "Manifiesto",   href: "/manifiesto" },
  { label: "Filosofía",    href: "/filosofia" },
  { label: "Diccionario",  href: "/diccionario" },
  { label: "Para quién",   href: "/para-quien-es" },
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

// Herramientas gratuitas — páginas internas + enlace externo
export const TOOLS_FREE = [
  {
    num:          "01",
    name:         "Diagnóstico Empresarial",
    tagline:      "Descubre qué palanca hay que mover primero en tu negocio",
    pain:         "No sé qué está fallando exactamente ni por dónde empezar",
    href:         "/herramientas/diagnostico",
    externalHref: "https://rentabilismo.online",
    domain:       "rentabilismo.online",
    tag:          "Diagnóstico · Gratis",
  },
  {
    num:          "02",
    name:         "Avatar de Cliente Ideal",
    tagline:      "Define con precisión a quién le vendes y por qué te elige",
    pain:         "Me dirijo a todo el mundo y al final no convenzo a nadie",
    href:         "/herramientas/conoce-a-tu-cliente",
    externalHref: "https://avatar-rentabilismo.com",
    domain:       "avatar-rentabilismo.com",
    tag:          "Definición de cliente · Gratis",
  },
  {
    num:          "03",
    name:         "Validador de Ideas",
    tagline:      "Comprueba si tu idea tiene mercado antes de invertir en ella",
    pain:         "No sé si mi idea es buena o solo me parece buena a mí",
    href:         "/herramientas/valida-tu-idea",
    externalHref: "https://idea-rentabilismo.com",
    domain:       "idea-rentabilismo.com",
    tag:          "Validación · Gratis",
  },
];

// Ecosistema de plataformas y servicios (incluye herramientas gratuitas)
export const ECOSYSTEM_LINKS = [
  {
    label:        "Herramientas gratuitas",
    sublabel:     "rentabilismo.online · avatar · idea",
    href:         "/herramientas",
    externalHref: "",
    description:  "Diagnóstico empresarial, cliente ideal y validación de ideas. Sin registro.",
    tag:          "Gratis",
  },
  {
    label:        "Plataforma SaaS",
    sublabel:     "rentabilismo.com",
    href:         "/plataforma",
    externalHref: "https://rentabilismo.com",
    description:  "Consultoría guiada y herramientas online para aplicar el Método 5P.",
    tag:          "Plataforma",
  },
  {
    label:        "Blog y contenidos",
    sublabel:     "focorentabilismo.com",
    href:         "/blog-recursos",
    externalHref: "https://focorentabilismo.com",
    description:  "Artículos, recursos y casos prácticos sobre rentabilidad empresarial.",
    tag:          "Recursos",
  },
  {
    label:        "Consultoría presencial",
    sublabel:     "consultoriametodo.es",
    href:         "/consultoria",
    externalHref: "https://consultoriametodo.es",
    description:  "Servicio directo en A Coruña. Trabajo con el empresario, en su negocio.",
    tag:          "Servicio",
  },
];

export const OG_IMAGE = `${SITE_URL}/og-default.png`;
