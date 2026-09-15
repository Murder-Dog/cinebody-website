// The blog rollout is scheduled from the day the new cinebody.com goes live.
// Queued posts keep their place in line (`order` in each blog-queue file);
// their actual dates are worked out from this one date.
//
// Leave null until the launch date is decided. Nothing in the queue publishes
// before it is set. Set it as 'YYYY-MM-DD' in the same change that takes the
// new site live. BLOG_LAUNCH_DATE in the build environment overrides it, which
// is handy for previewing a date on stage.
const LAUNCH_DATE_IN_CODE: string | null = null;

export const SITE_LAUNCH_DATE: string | null =
  (typeof process !== 'undefined' && process.env.BLOG_LAUNCH_DATE) || LAUNCH_DATE_IN_CODE;

/** Posts go out on Tuesdays and Thursdays (0 = Sunday). */
const PUBLISH_DAYS = [2, 4];

/** No posts on Thanksgiving or from Christmas Eve through New Year's Day. */
function isHoliday(d: Date) {
  const month = d.getUTCMonth();
  const day = d.getUTCDate();
  const thanksgiving = month === 10 && d.getUTCDay() === 4 && day >= 22 && day <= 28;
  const yearEnd = (month === 11 && day >= 24) || (month === 0 && day === 1);
  return thanksgiving || yearEnd;
}

/** The go-live date for each of `count` posts, in order, starting on the first
 *  publishing day on or after launch. Null while the launch date is unset. */
export function publishSlots(count: number, launch: string | null = SITE_LAUNCH_DATE): Date[] | null {
  if (!launch) return null;
  const day = new Date(`${launch}T00:00:00Z`);
  if (Number.isNaN(day.getTime())) throw new Error(`Invalid blog launch date: ${launch}`);
  const slots: Date[] = [];
  while (slots.length < count) {
    if (PUBLISH_DAYS.includes(day.getUTCDay()) && !isHoliday(day)) slots.push(new Date(day));
    day.setUTCDate(day.getUTCDate() + 1);
  }
  return slots;
}
