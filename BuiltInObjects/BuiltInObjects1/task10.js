/*10.
  a. Write a constructor function that creates points in space. Each point in space has
  its own x, y, and z coordinate. For example, (3, 5, 1) can be a point in space.*/

function Point(x, y, z) {
  this.x = x;
  this.y = y;
  this.z = z;
}

var pointSpace = new Point(3, 5, 1);
var secondPoint = new Point(4, 2, 9);
/*b. Write a function that calculates the distance between two points in the space.*/

function distance(p1, p2) {
  var result = Math.sqrt(
    (p1.x - p2.x) * (p1.x - p2.x) +
      (p1.y - p2.y) * (p1.y - p2.y) +
      (p1.z - p2.z) * (p1.z - p2.z)
  );

  return result.toFixed(3);
}
console.log(distance(pointSpace, secondPoint));
