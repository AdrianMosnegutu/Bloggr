/**
 * Formats a number into a human-readable string with appropriate units (k for thousands, M for millions).
 *
 * @param num - The number to format.
 * @returns A formatted string representing the number with the appropriate unit (e.g., "12k", "1.5M").
 */
export default function formatNumber(num: number): string {
  if (num < 1000) {
    return num.toString();
  }

  if (num < 1_000_000) {
    const thousands = Math.floor(num / 1000);
    const remainder = num % 1000;
    const remainderStr =
      remainder !== 0 ? `.${Math.floor(remainder / 100)}` : "";
    return `${thousands}${remainderStr}k`;
  }

  const millions = Math.floor(num / 1_000_000);
  const remainder = num % 1_000_000;
  const remainderStr =
    remainder !== 0 ? `.${Math.floor(remainder / 100_000)}` : "";
  return `${millions}${remainderStr}M`;
}
