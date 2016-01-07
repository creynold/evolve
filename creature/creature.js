var Traits = require('./traits');
var traitRanges = Traits.traitRanges;

/* Box-Muller transform to generate normal distribution */
var randNormal = function(sigma, mu) {
  var mu = mu || 0;
  var sigma = sigma || 1;

  var u1 = Math.random();
  var u2 = Math.random();

  var z0 = Math.sqrt(-2*Math.log(u1))*Math.cos(2*Math.PI*u2);

  return z0 * sigma + mu;
};

/* Average parents' traits together if both defined, else
 * take parent1's traits, otherwise take midvalue of trait range.
 * Then apply normally distributed deviation to trait value */
var genTraits = function(parent1, parent2) {
  var traits = {};

  for(var trait in traitRanges) {
    var traitVal;
    var range = traitRanges[trait];
    var deviation = randNormal();

    if(parent1) {
      var inherited = parent1.traits[trait];
      if(parent2) {
        inherited = (inherited + parent2.traits[trait])/2;
      }
      traitVal = inherited;
    } else {
      var startVal = (range[1] + range[0])/2;
      traitVal = startVal;
    }

    while(!((traitVal + deviation) >= range[0]) ||
          !((traitVal + deviation) <= range[1])) {
      deviation = randNormal();
    }

    traits[trait] = traitVal + deviation;
  }

  return traits;
};

exports.newCreature = function(parent1, parent2) {
  return {
    age: 0,
    traits: genTraits(parent1, parent2),
    energy: 100,
    water: 100,
    health: 100
  };
};
