function Airport(weather = new Weather) {
  this._weather = weather
  this._planes = [];
};

Airport.prototype.land = function(plane) {
  plane.land();
  this._planes.push(plane);
  return this._planes;
};

Airport.prototype.takeoff = function(plane) {
  if (this._weather.isStormy()) {
    //throw('cannot takeoff plane: weather stormy');
    throw new Error('cannot takeoff plane: weather stormy');
  }
  else
  {
    plane.takeoff();
    var index = this._planes.indexOf(plane);
    this._planes.splice(index, 1);
    return this._planes;
  }
};
