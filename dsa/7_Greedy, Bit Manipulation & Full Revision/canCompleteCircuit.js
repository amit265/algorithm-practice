function canCompleteCircuit(gas, cost) {
  let total = 0;
  let tank = 0;
  let start = 0;

  for (let i = 0; i < gas.length; i++) {
    let diff = gas[i] - cost[i];
    total += diff;
    tank += diff;

    if (tank < 0) {
      tank = 0;
      start = i + 1;
    }
  }
  return total >= 0 ? start : -1;
}


//“If a start fails, every station before it also fails.”