import type { MetadataRoute } from "next";
import { site } from "@/lib/data";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${site.name} — Full Stack Developer`,
    short_name: site.name,
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#2563eb",
    icons: [
      { src: "/assets/favicon.svg?v=3", sizes: "any", type: "image/svg+xml" },
      { src: "/assets/profile.jpg", sizes: "480x480", type: "image/jpeg" },
    ],
  };
}
