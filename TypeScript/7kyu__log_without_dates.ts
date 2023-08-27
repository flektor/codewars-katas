/*
Title: Log without dates
Rank: 7 kyu
*/

// My Solution

function isAfter(now: number[], prev: number[]): boolean {
  return now[0] < prev[0] ||
    (now[0] === prev[0] && now[1] < prev[1]) ||
    (now[0] === prev[0] && now[1] === prev[1] && now[2] < prev[2]) ||
    (now[0] === prev[0] && now[1] === prev[1] && now[2] === prev[2]);
}

export function checkLogs(log: string[]): number {
  if (log.length === 0) return 0;
  let day = 1;
  let prev = log[0].split(":").map(Number);

  for (let i = 1; i < log.length; i++) {
    const now = log[i].split(":").map(Number);
    if (isAfter(now, prev)) {
      day++;
    }
    prev = now;
  }
  return day;
}
