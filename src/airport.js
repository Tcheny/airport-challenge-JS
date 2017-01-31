function Airport(weather = new Weather, defaultCapacity = 20) {
  this._weather = weather
  this._planes = [];
  this._defaultCapacity = defaultCapacity;
};

Airport.prototype.land = function(plane) {
  if(this._weather.isStormy()){throw new Error("cannot land plane: weather stormy");}
  if(this.isFull()){throw new Error("cannot land plane: airport is full");}
  plane.land();
  this._planes.push(plane);
  return this._planes;
};

Airport.prototype.takeoff = function(plane) {
  if (this._weather.isStormy()){throw new Error("cannot takeoff plane: weather stormy");}
  plane.takeoff();
  var index = this._planes.indexOf(plane);
  this._planes.splice(index, 1);
  return this._planes;
};

Airport.prototype.isFull = function(){
  if (this._planes.length >= this._defaultCapacity){return true}else{return false}
};
