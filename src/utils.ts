export function countWords(text: string): number {
    const cleaned = text.replace(/[^\w\s]/g, '');
    return cleaned.trim().split(/\s+/).length;
  }
  