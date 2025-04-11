import axios from 'axios';
import * as cheerio from 'cheerio';
import { Entry } from './types';

export async function fetchEntries(): Promise<Entry[]> {
  // Fetch the html content of Hacker News
  const res = await axios.get('https://news.ycombinator.com/');
  const $ = cheerio.load(res.data);
  const entries: Entry[] = [];
  
  // Extract relevant information for each news item
  $('.athing').each((_, el) => {
    const number = $(el).find('.rank').text().replace('.', '');
    const title = $(el).find('.titleline a').text();
    const subtext = $(el).next().find('.subtext');
    const points = parseInt(subtext.find('.score').text()) || 0;
    const commentsText = subtext.find('a').last().text();
    const comments = /\d+/.test(commentsText) ? parseInt(commentsText) : 0;

    entries.push({ number, title, points, comments });
  });

  // Return only the first 30 entries
  return entries.slice(0, 30);
}