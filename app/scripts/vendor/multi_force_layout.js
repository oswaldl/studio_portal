var width = 960,
    height = 500;

var fill = d3.scale.category10();

var nodes = d3.range(100).map(function(i) {
  return {index: i};
});

var force = d3.layout.force()
    .nodes(nodes)
    .size([width, height])
    .on("tick", tick)
    .start();
