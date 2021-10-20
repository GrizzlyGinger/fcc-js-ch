//Sub-properties can be accessed by chaining dot or bracket notation
//obj.prop1.prop2
//obj.prop1["prop2"].prop3

var myStorage = {
  "car": {
    "inside": {
      "glove box": "maps",
      "passenger seat": "crumbs"
     },
    "outside": {
      "trunk": "jack"
    }
  }
};

var gloveBoxContents = myStorage.car.inside["glove box"];