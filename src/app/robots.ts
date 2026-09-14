import type { MetadataRoute } from "next";

/* Keep in sync with SITE_URL in layout.tsx */
const SITE_URL = "https://abhishek-prajapat.vercel.app";

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
