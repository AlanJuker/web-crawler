import { fetchEntries } from './src/crawler';
import { filterMoreThan5Words, filter5OrLessWords } from './src/filters';
import { logUsage } from './src/logger';

const entries = await fetchEntries();