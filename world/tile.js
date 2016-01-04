module.exports = function(x, y, width, height, up, down, left, right, things) {
  things = things || [];

  return {
    up: up,
    down: down,
    left: left,
    right: right,
    things: things,
    x: x,
    y: y,
    width: width,
    height: height
  };
}
