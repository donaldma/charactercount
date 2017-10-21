const salesTaxRates = {
  AB: 0.05,
  BC: 0.12,
  SK: 0.10
};

const companySalesData = [
  {
    name: "Telus",
    province: "BC",
    sales: [ 100, 200, 400 ]
  },
  {
    name: "Bombardier",
    province: "AB",
    sales: [ 80, 20, 10, 100, 90, 500 ]
  },
  {
    name: "Telus",
    province: "SK",
    sales: [ 500, 100 ]
  }
];

calculateSalesTax = (salesData, taxRates) => {
  const newObj = {}

  salesData.map(saleData => {
    let eachSaleTotal = saleData.sales.reduce((a, b) => a + b, 0)
    let eachSaleTaxes = taxRates[saleData.province]
    let eachSaleTotalTax = eachSaleTotal * eachSaleTaxes
    if(newObj[saleData.name]) {
      newObj[saleData.name].totalSales += eachSaleTotal,
      newObj[saleData.name].totalTaxes += eachSaleTotalTax
    } else {
      newObj[saleData.name] = {
        totalSales: eachSaleTotal,
        totalTaxes: eachSaleTotalTax
      }
    }
  })

  return newObj
}

const results = calculateSalesTax(companySalesData, salesTaxRates);

console.log(results)

/* Expected Results:
{
  Telus: {
    totalSales: 1300
    totalTaxes: 144
  },
  Bombardier: {
    totalSales: 800,
    totalTaxes: 40
  }
}
*/