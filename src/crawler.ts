import axios from 'axios';
import { parseEntries } from './parser';
import { Entry } from './types';

export async function fetchEntries(): Promise<Entry[]> {
  // Fetch the html content of Hacker News
  const res = await axios.get('https://news.ycombinator.com/');
  return parseEntries(res.data);
}
