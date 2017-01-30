describe("Weather", function() {
  var weather;

  beforeEach(function() {
    weather = new Weather();
  });

  describe("Weather is stormy", function() {
    //spyOn(weather, 'isStormy');

    //weather.isStormy.and.returnValue(true);

    expect(weather.isStormy()).toEqual(true);
  });

});
