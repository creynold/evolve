var tick = function(map) {
  console.log("tick");
  console.log(map.width);
};

module.exports = function(width, height, numCreatures, tickLength) {
  var map = require('./map')(width, height);
  var creature = require('../creature/creature');

  setInterval(tick, tickLength, map);

  for(var ii = 0; ii < numCreatures; ++ii) {
    map.addCreature(creature.newCreature(), parseInt(Math.random()*height),
                   parseInt(Math.random()*width));
  }

  return {
    map: map
  }
};
