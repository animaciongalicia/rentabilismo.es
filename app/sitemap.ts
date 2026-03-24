import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/siteConfig";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const routes = [
    { url: "/",                      priority: 1.0,  changeFrequency: "monthly" as const },
    { url: "/que-es-rentabilismo",   priority: 0.9,  changeFrequency: "monthly" as const },
    { url: "/metodo-5p",             priority: 0.9,  changeFrequency: "monthly" as const },
    { url: "/manifiesto",            priority: 0.8,  changeFrequency: "monthly" as const },
    { url: "/diccionario",           priority: 0.85, changeFrequency: "weekly"  as const },
    { url: "/para-quien-es",         priority: 0.8,  changeFrequency: "monthly" as const },
    { url: "/empieza-aqui",          priority: 0.8,  changeFrequency: "monthly" as const },
  ];

  return routes.map((route) => ({
    url: `${SITE_URL}${route.url}`,
    lastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
