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
  var creatures = [];
  return {
    width: width,
    height: height,
    creatures: creatures,
    getTile: function(r, c) {
      return tiles[r][c];
    },
    getTiles: function(r1, r2, c1, c2) {
      var rows = tiles.slice(r1,r2);
      for(var row in rows) {
        rows[row] = rows[row].slice(c1,c2);
      }
      return rows;
    },
    addCreature: function(creature, r, c) {
      tiles[r][c].creatures.push(creature);
      creatures.push(creature);
      creature.row = r;
      creature.col = c;
    }
  };
};
