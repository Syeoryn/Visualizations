var options = {
  width: window.innerWidth,
  height: window.innerHeight,
  speed: 1,
  colors: ['blue','orange','white']
}

var canvas = d3.select('body').append('svg')
               .attr('class','canvas')
               .style('width', options.width)
               .style('height', options.height)
               .style('background-color','black');

d3.select('.canvas').on('mousedown', function(){
  var coord = d3.mouse(this);
  addCircle(coord[0],coord[1]);
});


var addCircle = function(x,y){
  var color = options.colors[Math.floor(Math.random() * options.colors.length)];
  var circle = canvas.append('svg:circle')
                     .attr('cx',x)
                     .attr('cy',y)
                     .attr('r',1e-6)
                     .style('fill',color)
                   .transition()
                     .duration(1000 * options.speed)
                     .attr('r',20);
  d3.selectAll('circle').call(drag);
};


var drag = d3.behavior.drag().on('drag',function(){
  d3.select(this)
    .attr('cx',function(){return d3.event.x;})
    .attr('cy',function(){return d3.event.y});
});

