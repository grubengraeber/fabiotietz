import React from 'react'

function formatDate(date: Date): string {
  const now = new Date();
  const yesterday = new Date(now.setDate(now.getDate() - 1));
  yesterday.setHours(0, 0, 0, 0);
  const dayBeforeYesterday = new Date(now.setDate(now.getDate() - 1));
  dayBeforeYesterday.setHours(0, 0, 0, 0);
  const lastWeek = new Date(now.setDate(now.getDate() - 5));
  const lastMonth = new Date(now.setMonth(now.getMonth() - 1));

  const dateMidnight: Date = new Date(date.setHours(0, 0, 0, 0));
  const diffDays = Math.ceil((dateMidnight.getTime() - dayBeforeYesterday.getTime()) / (1000 * 60 * 60 * 24));

  if (dateMidnight > dayBeforeYesterday) {
    return "Added Recently";
  } else if (dateMidnight === yesterday) {
    return "Added Yesterday";
  } else if (date > lastWeek) {
    return `Added ${diffDays} days ago`;
  } else if (date > lastMonth) {
    return "Added this month";
  } else {
    return `Added on ${date.toLocaleDateString()}`;
  }
}

function Added({date}: {date: Date}) {
  return (
    <>
      <span className="text-xs text-muted-foreground">
        {formatDate(date)}
      </span>
    </>
  )
}

export default Added