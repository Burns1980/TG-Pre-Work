function monitorCount(rows, columns) {
  return rows * columns;
}

function costOfMonitors(rows, columns) {
  return monitorCount(rows, columns) * 200;
}

const totalCost = costOfMonitors(5, 4);

console.log(totalCost);

// Helper functions are called within anothe function. It's useful to take large tasks
// and break them into smaller tasks, which also helps with debugging.
