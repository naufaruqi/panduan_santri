export function withBase(path: string): string {
  if (!path.startsWith("/") || path.startsWith("//")) {
    return path;
  }

  const baseUrl = import.meta.env.BASE_URL.replace(/\/$/, "");
  return `${baseUrl}${path}`;
}
