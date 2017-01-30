describe("Plane", function() {
  var plane;
  var airport;
  var weather;

  beforeEach(function() {
    weather = new Weather();
    airport = new Airport(weather);
    plane = new Plane();
  });

  // As an air traffic controller
  // So I can get passengers to a destination
  // I want to instruct a plane to land at an airport and confirm that it has landed
  describe("Land plane", function() {
    it("changes plane state to landed", function(){
      spyOn(weather, 'isStormy').and.returnValue(false);
      airport.land(plane);
      expect(plane.isLanded()).toEqual(true);
    });
  });

  // As an air traffic controller
  //So I can get passengers on the way to their destination
  // I want to instruct a plane to take off from an airport and confirm that it is no longer in the airport
  describe("Takeoff plane", function() {
    it("changes plane state to not landed", function(){
      spyOn(weather, 'isStormy').and.returnValue(false);
      airport.land(plane);
      airport.takeoff(plane);
      expect(plane.isLanded()).toEqual(false);
    });
  });
});
