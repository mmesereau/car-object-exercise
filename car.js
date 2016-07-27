'use strict';

var Car = function (mpg) {
  this.gallons = 0;
  this.mpg = mpg;
  this.mDriven = 0;
  this.tripLog = [];
};

Car.prototype.fill = function (gallons) {
  this.gallons += gallons;
};

Car.prototype.drive = function(miles) {
  this.miles = miles;
  this.gallons -= miles / this.mpg;
  this.tripLog.push(this.miles + " miles");
};

Car.prototype.odometer = function() {
  if (this.miles) {
    this.mDriven += this.miles;
  }
  return this.mDriven;
}

Car.prototype.trips = function() {
  return this.tripLog;
}

module.exports = Car;
