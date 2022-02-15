import * as d3 from 'd3';
import sounds from '../../utils/sounds.js';

function runClack(group,color) {

  sounds.playClack();

  const lineEnd = (d,i) => {
    return {
      "x":50 + Math.cos(i/10 * Math.PI * 2) * 75,
      "y":50 + Math.sin(i/10 * Math.PI * 2) * 75
    }
  }


  const lineStart = (d,i) => {
    return {
      "x":50 + Math.cos(i/10 * Math.PI * 2) * 60,
      "y":50 + Math.sin(i/10 * Math.PI * 2) * 60
    }
  }

  d3.select(group.node().parentNode)
    .selectAll(".sparkle")
    .data(d3.range(0,10))
    .enter()
    .append("line")
    .attr("opacity",0)
    .attr("stroke",color)
    .attr("stroke-width",0)
    .attr("x1",(d,i) => { return lineStart(d,i).x })
    .attr("y1",(d,i) => { return lineStart(d,i).y })
    .attr("x2",(d,i) => { return lineStart(d,i).x })
    .attr("y2",(d,i) => { return lineStart(d,i).x })
    .transition()
    .duration(125)
    .attr("opacity",1)
    .attr("x2",(d,i) => { return lineEnd(d,i).x })
    .attr("y2",(d,i) => { return lineEnd(d,i).y })
    .attr("stroke-width",3)
    .transition()
    .duration(500)
    .attr("stroke-width",0)
    .attr("opacity",0)
    .attr("x1",(d,i) => { return lineEnd(d,i).x })
    .attr("y1",(d,i) => { return lineEnd(d,i).y })
    .on("end",function() {
      d3.select(this)
        .remove();
    });

}

export default runClack;
