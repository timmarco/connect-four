import * as d3 from 'd3';

function runCrown(group) {
  const lineEnd = (d,i) => {
    return {
      "x":50 + Math.cos(i/10 * Math.PI * 2) * 75,
      "y":50 + Math.sin(i/10 * Math.PI * 2) * 75
    }
  }


  const lineStart = (d,i) => {
    return {
      "x":50 + Math.cos(i/10 * Math.PI * 2) * 50,
      "y":50 + Math.sin(i/10 * Math.PI * 2) * 50
    }
  }

  group
    .selectAll(".sparkle")
    .data(d3.range(0,10))
    .enter()
    .append("line")
    .attr("stroke","gold")
    .attr("stroke-width",0)
    .attr("x1",(d,i) => { return lineStart(d,i).x })
    .attr("y1",(d,i) => { return lineStart(d,i).y })
    .attr("x2",(d,i) => { return lineStart(d,i).x })
    .attr("y2",(d,i) => { return lineStart(d,i).x })
    .transition()
    .duration(200)
    .delay((d,i) =>{  return (10 - i) * 20})
    .attr("x2",(d,i) => { return lineEnd(d,i).x })
    .attr("y2",(d,i) => { return lineEnd(d,i).y })
    .attr("stroke-width",3)
    .transition()
    .duration(250)
    .attr("stroke-width",3)
    .attr("x1",(d,i) => { return lineEnd(d,i).x })
    .attr("y1",(d,i) => { return lineEnd(d,i).y })
    .on("end",function() {
      d3.select(this)
        .remove();
    });

}

export default runCrown;
