import { fetchEntries } from './src/crawler';
import { filterMoreThan5Words, filter5OrLessWords } from './src/filters';
import { logUsage } from './src/logger';

const entries = await fetchEntries();

// Check the CLI argument
const isShort = process.argv[2] === 'short';

//Call the respective filter based on the argument chose
const filtered = isShort
  ? filter5OrLessWords(entries)
  : filterMoreThan5Words(entries);

console.log(filtered);
