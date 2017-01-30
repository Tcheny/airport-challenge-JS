describe("Airport", function() {
  var plane;
  var airport;
  var weather;

  beforeEach(function() {
    weather = new Weather();
    airport = new Airport(weather);
    plane = new Plane();
  });

  describe("Weather is not stormy", function() {
    beforeEach(function() {
      spyOn(weather, 'isStormy').and.returnValue(false);
    });
    // As an air traffic controller
    // So I can get passengers to a destination
    // I want to instruct a plane to land at an airport and confirm that it has landed
    describe("Land plane", function() {
      it("lands a plane at airport", function() {
        expect(airport.land(plane)).toContain(plane);
      });
    });
    // As an air traffic controller
    //So I can get passengers on the way to their destination
    // I want to instruct a plane to take off from an airport and confirm that it is no longer in the airport
    describe("Takeoff plane", function() {
      it("takes off a plane from an airport", function() {
        airport.land(plane);
        airport.takeoff(plane);
        expect(airport._planes).not.toContain(plane);
      });
    });
    // As an air traffic controller
    // To ensure safety
    // I want to prevent landing when the airport is full
    describe("Airport is full", function() {
      it("Won't allow a plane to land if airport is full", function(){
        for(i = 0; i < airport._defaultCapacity; i++){
          airport.land(plane);
        }
        expect(function() {airport.land(plane)}).toThrowError("cannot land plane: airport is full");
      })

      it("Allows a change in default capacity", function(){
        var airport2 = new Airport(weather, 3)
        expect(airport2._defaultCapacity).toEqual(3)
      })
    })
  });

  describe("Weather is stormy", function() {
    beforeEach(function() {
      spyOn(weather, 'isStormy').and.returnValue(true);
    });
    // As an air traffic controller
    //So I can get passengers on the way to their destination
    // I want to instruct a plane to take off from an airport and confirm that it is no longer in the airport
    describe("Takeoff plane", function() {
      it("cannot take off plane", function() {
        airport._planes.push(plane)
        expect(function() { airport.takeoff(plane)}).toThrowError("cannot takeoff plane: weather stormy");
      });
    });
    
    describe("Land plane", function() {
      it("cannot land a plane", function() {
        expect(function() { airport.land(plane)}).toThrowError("cannot land plane: weather stormy");
      });
    });
  });
});
