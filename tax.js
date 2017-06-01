var salesTaxRates = {
  AB: 0.05,
  BC: 0.12,
  SK: 0.10
};
 // for(var province in salesTaxRates) {
 //  var total = salesTaxRates[province];
 // console.log(total)
 // }
var companySalesData = [
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


function calculateSalesTax(salesData, taxRates) {
  var finalObj = {};
  for (var arrObj of salesData) {
    // declares variable 'arrObj' that goes through all the objects in salesData
    if (finalObj[arrObj.name]){
      // if the object 'finalObj' has a name in it already run below
      var finalSum = 0;
      var finalTax = 0
      var salesArr = arrObj.sales;
      var tax = taxRates[arrObj.province];
      console.log(tax);
      for (var i = 0; i < salesArr.length; i++) {
        finalSum += salesArr[i];
      }
      finalTax = finalSum * tax
      finalObj[arrObj.name].totalSales += finalSum;
      finalObj[arrObj.name].totalTaxes += finalTax;
    } else {
      finalObj[arrObj.name] = {totalSales: 0, totalTaxes: 0};
      // TODO: Find the sum of sales
      var finalSum = 0;
      var finalTax = 0;
      var salesArr = arrObj.sales;
      var tax = taxRates[arrObj.province];
      for (var i = 0; i < salesArr.length; i++) {
        finalSum += salesArr[i];
      }
      finalTax = finalSum * tax;
      finalObj[arrObj.name].totalSales = finalSum;
      finalObj[arrObj.name].totalTaxes = finalTax;
    }

  }
  return finalObj;
}

var results = calculateSalesTax(companySalesData, salesTaxRates);
console.log(results);
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