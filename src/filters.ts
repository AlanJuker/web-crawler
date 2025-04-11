import { Entry } from './types';
import { countWords } from './utils';

//Filter entries with more than 5 words
export function filterMoreThan5Words(entries: Entry[]): Entry[] {
  return entries
    .filter(e => countWords(e.title) > 5)
    .sort((a, b) => b.comments - a.comments);
}

//Filter entries with less than 5 words
export function filter5OrLessWords(entries: Entry[]): Entry[] {
  return entries
    .filter(e => countWords(e.title) <= 5)
    .sort((a, b) => b.points - a.points);
}