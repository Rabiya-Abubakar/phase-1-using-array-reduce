//const batteryBatches = [4, 5, 3, 4, 4, 6, 5];
// src/index.js

const batteries = [4, 5, 3, 4, 4, 6, 5];; // Example battery counts

// Calculate the total number of batteries using the reduce method
const totalBatteries = batteries.reduce((total, battery) => total + battery, 0);

console.log(`Total Batteries: ${totalBatteries}`); // Output the total batteries

module.exports = totalBatteries;
