/**
 * Calculates the time elapsed between a given date and the current time,
 * returning a human-readable string describing the duration (e.g., "2 years ago").
 *
 * @param date - The past date to compare with the current time.
 * @returns A string describing how long ago the date was.
 */
export default function timeSince(date: Date): string {
  const now = new Date();
  const seconds = Math.floor((now.getTime() - date.getTime()) / 1000);

  let interval = seconds / 31536000; // Years
  if (interval > 1) {
    return Math.floor(interval) + " years ago";
  }

  interval = seconds / 2592000; // Months
  if (interval > 1) {
    return Math.floor(interval) + " months ago";
  }

  interval = seconds / 86400; // Days
  if (interval > 1) {
    return Math.floor(interval) + " days ago";
  }

  interval = seconds / 3600; // Hours
  if (interval > 1) {
    return Math.floor(interval) + " hours ago";
  }

  interval = seconds / 60; // Minutes
  if (interval > 1) {
    return Math.floor(interval) + " minutes ago";
  }

  return Math.floor(seconds) + " seconds ago";
}
