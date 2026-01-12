export function toJsonArray(input: string): string {
  return JSON.stringify(
    input
      .split(',')
      .map(i => i.trim())
      .filter(Boolean)
  );
}

export function safeParseArray(value: string): string[] {
  try {
    return JSON.parse(value);
  } catch {
    // fallback for OLD data already saved incorrectly
    return value.split(',').map(v => v.trim());
  }
}
