import React, { useMemo } from 'react';
import { Line } from 'react-chartjs-2';

export default function TaskTrendChart({ tasks }) {
  // Process tasks to get a count of tasks created each day
  const taskCounts = useMemo(() => {
    const counts = {};

    tasks.forEach((task) => {
      // Convert task creation date to a simple YYYY-MM-DD format
      const date = new Date(task.createdAt).toISOString().split('T')[0];
      counts[date] = (counts[date] || 0) + 1;
    });

    // Get the dates sorted in ascending order
    const sortedDates = Object.keys(counts).sort();

    // Prepare data arrays
    const labels = sortedDates;
    const data = sortedDates.map((date) => counts[date]);

    return { labels, data };
  }, [tasks]);

  const data = {
    labels: taskCounts.labels,
    datasets: [
      {
        label: 'Tasks Created Over Time',
        data: taskCounts.data,
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1,
      },
    ],
  };

  return <Line data={data} />;
}
