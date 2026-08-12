import type { MetadataRoute } from "next";
import { projects } from "@/data/projects";

export const dynamic = "force-static";

const base = "https://www.naveenanand.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/work",
    "/ai",
    "/spatial",
    "/leadership",
    "/about",
    "/resume",
    ...projects.map((p) => `/work/${p.slug}`),
  ];
  return routes.map((r) => ({
    url: `${base}${r}/`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: r === "" ? 1 : 0.7,
  }));
}
