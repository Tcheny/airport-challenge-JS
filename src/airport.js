function Airport() {
  this._planes = [];
};

Airport.prototype.land = function(plane) {
  plane.land();
  this._planes.push(plane);
  return this._planes;
};

Airport.prototype.takeoff = function(plane) {
    plane.takeoff();
    var index = this._planes.indexOf(plane);
    this._planes.splice(index, 1);
    return this._planes;
};
