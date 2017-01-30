// As an air traffic controller
// So I can get passengers to a destination
// I want to instruct a plane to land at an airport and confirm that it has landed
describe("Airport", function() {
  var plane;
  var airport;

  beforeEach(function() {
    airport = new Airport();
    plane = new Plane();
  });

  it("lands a plane", function() {
    expect(airport.land(plane)).toContain(plane);
  });

  it("changes plane state to landed", function(){
    airport.land(plane);
    expect(plane.isLanded()).toEqual(true);
  });

  it("lets a plane take off", function() {
    airport.land(plane);
    airport.takeoff(plane);
    expect(airport._planes).not.toContain(plane);
  });

  it("changes plane state to not landed", function(){
    airport.land(plane);
    airport.takeoff(plane);
    expect(plane.isLanded()).toEqual(false);
  })
});
