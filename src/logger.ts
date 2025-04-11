import { Low, JSONFile } from 'lowdb';

type LogEntry = {
  timestamp: string;
  filter: string;
  entries_returned: number;
};

const adapter = new JSONFile<LogEntry[]>('./data/logs.json');
const db = new Low<LogEntry[]>(adapter);

export async function logUsage(filter: string, count: number): Promise<void> {
  await db.read();
  db.data ||= [];
  db.data.push({
    timestamp: new Date().toISOString(),
    filter,
    entries_returned: count
  });
  await db.write();
}
