// 4. Convert Km/hr to miles/hr and vice versa

function kmTomph(speed) {
  return `${0.6 * speed} mph`;
}

function mphTOkmph(mph) {
  return `${1.6 * mph} kmph`;
}

console.log(kmTomph(120), mphTOkmph(60));
