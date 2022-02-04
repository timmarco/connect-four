import * as d3 from 'd3';

function sparkDelight() {

  d3.selectAll(".winningGroup")
    .attr("transform","scale(1)")
    .transition()
    .duration(550)
    .ease(d3.easePolyIn)
    .delay((d,i) => {
      return 250 + i * 50;
    })
    .attr("transform","translate(-25,-25) scale(1.5) ")
    .transition()
    .ease(d3.easePolyOut)
    .duration(375)
    .attr("transform","scale(1)")
    .on("end",function() {
      const group = d3.select(this);
      runCrown(group);
    })


  d3
    .selectAll(".losingGroup")
    .attr("opacity",1)
    .attr("transform","scale(1)")
    .transition()
    .duration(1000)
    .ease(d3.easeQuadIn)
    .attr("opacity",0)
    .attr("transform","translate(50,50) scale(0)");


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
      .attr("stroke","black")
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

}

export default sparkDelight;
