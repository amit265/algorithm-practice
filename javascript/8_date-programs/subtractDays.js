// 1. Subtract Days from Date Object

{
  {
    let today = new Date();
    // console.log(today.getTime());

    console.log("Todays's date = " + today);

    Date.prototype.subtractDays = function (d) {
      this.setTime(this.getTime() - d * 24 * 60 * 1000);
    };

    return this;
  }

  let a = new Date();
  a.subtractDays(4);
  console.log(a);
}

{
  let today = new Date();
  console.log("Today's date = " + today);

  Date.prototype.subtractDays = function (d) {
    this.setDate(this.getDate() - d);
    return this;
  };

  let a = new Date();
  a.subtractDays(365);

  console.log(a);
  console.log("amit")
}
// sdasdassdfsd