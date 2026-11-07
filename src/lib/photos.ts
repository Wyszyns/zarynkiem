// Photos used on the page live in src/assets/photos/.
// Astro resizes them and converts them to WebP when the site is built,
// so you can drop in full-size photos — visitors get small, fast files.
import type { ImageMetadata } from 'astro';

const files = import.meta.glob<{ default: ImageMetadata }>(
  '../assets/photos/*.{jpg,jpeg,png,webp,JPG,JPEG,PNG}',
  { eager: true },
);

export function photo(name: string): ImageMetadata {
  const match = Object.entries(files).find(([path]) => path.endsWith(`/${name}`));
  if (!match) {
    throw new Error(`Photo "${name}" not found in src/assets/photos/ (check src/data/gallery.json)`);
  }
  return match[1].default;
}

// Responsive widths, never larger than the original photo
export function widthsFor(meta: ImageMetadata, wanted: number[]): number[] {
  return [...new Set(wanted.map((w) => Math.min(w, meta.width)))];
}
