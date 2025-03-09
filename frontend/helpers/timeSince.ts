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
    const years = Math.floor(interval);
    return `${years} year${years > 1 ? "s" : ""} ago`;
  }

  interval = seconds / 2592000; // Months
  if (interval > 1) {
    const months = Math.floor(interval);
    return `${months} month${months > 1 ? "s" : ""} ago`;
  }

  interval = seconds / 86400; // Days
  if (interval > 1) {
    const days = Math.floor(interval);
    return `${days} day${days > 1 ? "s" : ""} ago`;
  }

  interval = seconds / 3600; // Hours
  if (interval > 1) {
    const hours = Math.floor(interval);
    return `${hours} hour${hours > 1 ? "s" : ""} ago`;
  }

  interval = seconds / 60; // Minutes
  if (interval > 1) {
    const minutes = Math.floor(interval);
    return `${minutes} minute${minutes > 1 ? "s" : ""} ago`;
  }

  return Math.floor(seconds) + " seconds ago";
}
