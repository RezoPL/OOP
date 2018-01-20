// Zadanie 11.4
function Phone(brand, model, price, color,) {
  this.brand = brand;
  this.model = model;
  this.price = price;
  this.color = color;
};

Phone.prototype.printInfo = function() {
  console.log(
    "The phone brand is " +
      this.brand +
      ", model is " +
      this.model +
      ", color is " +
      this.color +
      " and the price is " +
      this.price +
      "."
  );
};
var samsungGalaxyS6 = new Phone("Samsung", "Galaxy S6", "1970 $", "White",);
var iPhone6S = new Phone("Apple", "6S", "2250 $", "silver", "");
var onePlusOne = new Phone("OnePlus", "ONE", "790 $", "Grey");
var lgK10LTE = new Phone("LG", "K10", "1220 $", "Black");

samsungGalaxyS6.printInfo();
iPhone6S.printInfo();
onePlusOne.printInfo();
lgK10LTE.printInfo();
