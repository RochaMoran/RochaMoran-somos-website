export function formatNumber(value: number, fractions = false): string {
  return value.toLocaleString("en-US", {
    minimumFractionDigits: fractions ? 2 : 0,
    maximumFractionDigits: 2,
    useGrouping: true,
  });
}
