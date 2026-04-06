// 7. Format Numbers as Currency String

/*
    Intl.NumberFormat('en-US', {style: 'currency', currency: 'target currency'})
.format(monetary_value);  

*/

{
  let format = new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    minimumFractionDigits: 2,
  });

  console.log(format.format(4500));
}


{
  let format = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
  });

  console.log(format.format(40));
}

