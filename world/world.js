var getTile = function(x, y) {
};

var initialize = function(width, height) {
  var newMap = new Array(height);
  for(var r = 0; r < height; ++r) {
    newMap[r] = new Array(width);
    for(var c = 0; c < width; ++c) {
      newMap[r][c] = {
        type: 'water',
        creatures: []
      };
    }
  }
  return newMap;
};

module.exports = function(width, height) {
  var tiles = initialize(width, height);
  return {
    tile: function(r, c) {
      return tiles[r][c];
    }
  };
}
