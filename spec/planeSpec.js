describe("Plane", function() {
  var plane;
  var airport;

  beforeEach(function() {
    airport = new Airport();
    plane = new Plane();
  });

  // As an air traffic controller
  // So I can get passengers to a destination
  // I want to instruct a plane to land at an airport and confirm that it has landed
  describe("Land plane", function() {
    it("changes plane state to landed", function(){
      airport.land(plane);
      expect(plane.isLanded()).toEqual(true);
    });
  });

  // As an air traffic controller
  //So I can get passengers on the way to their destination
  // I want to instruct a plane to take off from an airport and confirm that it is no longer in the airport
  describe("Takeoff plane", function() {
    it("changes plane state to not landed", function(){
      airport.land(plane);
      airport.takeoff(plane);
      expect(plane.isLanded()).toEqual(false);
    });
  });
});
