import axios from 'axios';
import * as cheerio from 'cheerio';
import { Entry } from './types';

export async function fetchEntries(): Promise<Entry[]> {
  const res = await axios.get('https://news.ycombinator.com/');
  const $ = cheerio.load(res.data);
  const entries: Entry[] = [];

  $('.athing').each((_, el) => {
    const number = $(el).find('.rank').text().replace('.', '');
    const title = $(el).find('.titleline a').text();
    const subtext = $(el).next().find('.subtext');
    const points = parseInt(subtext.find('.score').text()) || 0;
    const commentsText = subtext.find('a').last().text();
    const comments = /\d+/.test(commentsText) ? parseInt(commentsText) : 0;

    entries.push({ number, title, points, comments });
  });

  return entries.slice(0, 30);
}
