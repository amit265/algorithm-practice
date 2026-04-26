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
