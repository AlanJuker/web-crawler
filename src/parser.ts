import * as cheerio from 'cheerio';
import { Entry } from './types';

// Parse the Hacker News front page HTML into entries
export function parseEntries(html: string): Entry[] {
  const $ = cheerio.load(html);
  const entries: Entry[] = [];

  // Extract relevant information for each news item
  $('.athing').each((_, el) => {
    const number = $(el).find('.rank').text().replace('.', '');
    // Only the story link: .titleline also contains the .sitebit domain link
    const title = $(el).find('.titleline > a').first().text();
    const subtext = $(el).next().find('.subtext');
    const points = parseInt(subtext.find('.score').text()) || 0;
    const commentsText = subtext.find('a').last().text();
    const comments = /\d+/.test(commentsText) ? parseInt(commentsText) : 0;

    entries.push({ number, title, points, comments });
  });

  // Return only the first 30 entries
  return entries.slice(0, 30);
}
