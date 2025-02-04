import { DATA } from "@/data/resume";
import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Portfolio of Trung Pham",
    short_name: "Trung Pham's Portfolio",
    description: DATA.description,
    start_url: "/",
    display: "standalone",
    background_color: "#fff",
    theme_color: "#fff",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
      {
        src: "assets/icon-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "assets/icon-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
      {
        src: "assets/apple-icon.png",
        sizes: "any",
        type: "image/png",
      },
    ],
  };
}
