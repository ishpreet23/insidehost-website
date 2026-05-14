export function formatDate(date: string) {
  return new Date(date).toLocaleDateString("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
}

export function truncateText(
  text: string,
  limit: number
) {
  if (text.length <= limit) return text;

  return text.slice(0, limit) + "...";
}