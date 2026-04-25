import { existsSync, mkdirSync, writeFileSync, readFileSync } from "node:fs";
import { join } from "node:path";

const slug = process.argv[2];

if (!slug || !/^[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/.test(slug)) {
  console.error("Usage: npm run new-page -- <slug>");
  console.error("  slug must be lowercase letters, digits, hyphens (DNS-safe)");
  process.exit(1);
}

const root = process.cwd();
const dir = join(root, "app", slug);
const registryPath = join(root, "pages.json");

if (existsSync(dir)) {
  console.error(`Error: app/${slug}/ already exists.`);
  process.exit(1);
}

const registry = JSON.parse(readFileSync(registryPath, "utf-8")) as {
  baseDomain: string;
  rootRedirectSlug: string;
  pages: Array<{
    slug: string;
    title: string;
    purpose: string;
    url: string;
    status: "draft" | "live";
    createdAt: string;
    updatedAt: string;
  }>;
};

if (registry.pages.some((p) => p.slug === slug)) {
  console.error(`Error: slug "${slug}" already exists in pages.json.`);
  process.exit(1);
}

mkdirSync(dir, { recursive: true });

writeFileSync(
  join(dir, "content.ts"),
  `export const content = {
  title: "${slug}",
  description: "",
};
`,
);

const componentName = slug
  .split("-")
  .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
  .join("");

writeFileSync(
  join(dir, "page.tsx"),
  `import type { Metadata } from "next";
import { content } from "./content";

export const metadata: Metadata = {
  title: content.title,
  description: content.description,
};

export default function ${componentName}Page() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="text-3xl font-bold">{content.title}</h1>
      <p className="mt-4 text-gray-600">{content.description}</p>
    </main>
  );
}
`,
);

const now = new Date().toISOString();
registry.pages.push({
  slug,
  title: slug,
  purpose: "",
  url: `https://${slug}.${registry.baseDomain}`,
  status: "draft",
  createdAt: now,
  updatedAt: now,
});

writeFileSync(registryPath, JSON.stringify(registry, null, 2) + "\n");

console.log(`Scaffolded app/${slug}/`);
console.log(`Updated pages.json`);
console.log("");
console.log("Next steps:");
console.log(`  1. Edit app/${slug}/content.ts with your content`);
console.log(`  2. Edit app/${slug}/page.tsx with your design`);
console.log(`  3. Local check: npm run dev → http://${slug}.localtest.me:3000`);
console.log(`  4. Push to main → Vercel auto-deploys`);
console.log(`  5. In Vercel dashboard:`);
console.log(`     Project Settings → Domains → Add: ${slug}.${registry.baseDomain}`);
console.log(`     (Hobby plan requires per-subdomain registration)`);
