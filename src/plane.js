function Plane() {
  this._landed =false;
};

Plane.prototype.land = function() {
  this._landed =true;
  }

  Plane.prototype.isLanded = function() {
    return this._landed;
  }

Plane.prototype.takeoff = function(){
  this._landed = false;
}
