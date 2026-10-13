import { parseEntries } from '../src/parser';

// Trimmed copy of a Hacker News front page row pair
const html = `
<table>
  <tr class="athing submission" id="1">
    <td class="title"><span class="rank">1.</span></td>
    <td class="title">
      <span class="titleline">
        <a href="https://example.com/post">Show HN: A tiny crawler</a>
        <span class="sitebit comhead"> (<a href="from?site=example.com"><span class="sitestr">example.com</span></a>)</span>
      </span>
    </td>
  </tr>
  <tr>
    <td class="subtext">
      <span class="subline">
        <span class="score">42 points</span>
        <a href="item?id=1">17&nbsp;comments</a>
      </span>
    </td>
  </tr>
  <tr class="athing submission" id="2">
    <td class="title"><span class="rank">2.</span></td>
    <td class="title"><span class="titleline"><a href="item?id=2">Ask HN: No domain here</a></span></td>
  </tr>
  <tr>
    <td class="subtext"><span class="subline"><a href="item?id=2">discuss</a></span></td>
  </tr>
</table>`;

describe('parseEntries', () => {
  test('reads only the story title, not the site domain', () => {
    const [first] = parseEntries(html);
    expect(first).toEqual({ number: '1', title: 'Show HN: A tiny crawler', points: 42, comments: 17 });
  });

  test('defaults points and comments to 0 when missing', () => {
    const [, second] = parseEntries(html);
    expect(second).toEqual({ number: '2', title: 'Ask HN: No domain here', points: 0, comments: 0 });
  });
});
