const antennaPrice = 600;
const maxInstallments = 6;
for (let i = 1; i <= maxInstallments; i++) {
  const installmentvalue = antennaPrice / i;
  console.log(`${i}x of $${installmentvalue}`);
}
