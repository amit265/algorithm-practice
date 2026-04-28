// 30. Convert String into Float
 
// Method 1: By using Type Conversion of JavaScript

{
  function convert_to_float(a) {
    let floatValue = +a;
    return floatValue;
  }

  let n = "55.225";

  n = convert_to_float(n);
  console.log("Converted value = " + n + " Type of " + n + " = " + typeof n);
}

// Method 2: By using parseFloat() Method

{

  function convert_to_float(a) {
    let floatValue = parseFloat(a);
    return floatValue;
  }

  let n = "245.165";

  n = convert_to_float(n);

  console.log("Converted value = " + n + " Type of " + n + " = " + typeof n);
  n = "-915.55";

  n = convert_to_float(n);

  console.log("Converted value = " + n + " Type of " + n + " = " + typeof n);
}
