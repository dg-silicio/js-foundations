const monthlyPlanPrice = 236;
const months = 12;
const hashardwareDiscount = true;
let baseAntennaPrice = 1200;

if (hashardwareDiscount) {
  baseAntennaPrice = baseAntennaPrice * 0.5;
}

const totalcost = baseAntennaPrice + monthlyPlanPrice * months;
console.log(
  `baseantenna: $${baseAntennaPrice} | plan: $${monthlyPlanPrice} (${months}m) | total: $${totalcost}`,
);

if (totalcost > 3500) {
  console.log("high budget alert: consider a shorter Plan.");
} else {
  console.log("budget approved!");
}
