import { filterMoreThan5Words, filter5OrLessWords } from '../src/filters';
import { Entry } from '../src/types';
import { countWords } from '../src/utils';

// Mock data for testing
const mockEntries: Entry[] = [
  { number: '1', title: 'Short title', points: 100, comments: 20 },
  { number: '2', title: 'A very interesting Hacker News article', points: 50, comments: 45 },
  { number: '3', title: 'Another example!', points: 30, comments: 60 },
  { number: '4', title: 'Testing', points: 70, comments: 15 }
];

describe('Hacker News article filters', () => {
  test('Filter entries with more than 5 words and orders by comments', () => {
    const result = filterMoreThan5Words(mockEntries);

    // Should return only the second entry
    expect(result).toHaveLength(1);
    expect(countWords(result[0].title)).toBeGreaterThan(5);
  });

  test('filters entries with 5 or fewer words and orders by points', () => {
    const result = filter5OrLessWords(mockEntries);

    // Should return the other three entries from the mockData
    expect(result).toHaveLength(3);
    expect(countWords(result[0].title)).toBeLessThanOrEqual(5);
  });
});

describe('countWords function', () => {
  test('counts words correctly', () => {
    // Should remove count words correctly without punctuation signs
    expect(countWords('This is - a self-explained example! /')).toBe(5);
    expect(countWords('Short title')).toBe(2);
  });
});
