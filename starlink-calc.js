const monthlyPlanPrice = 236;
const months = 12;
const hasHardwareDiscount = true;
let baseAntennaPrice = 1200;

if (hasHardwareDiscount) {
  baseAntennaPrice = baseAntennaPrice * 0.5;
}

const totalCost = baseAntennaPrice + monthlyPlanPrice * months;
console.log(
  `baseantenna: $${baseAntennaPrice} | plan: $${monthlyPlanPrice} (${months}m) | total: $${totalCost}`,
);

if (totalCost > 3500) {
  console.log("high budget alert: consider a shorter Plan.");
} else {
  console.log("budget approved!");
}
