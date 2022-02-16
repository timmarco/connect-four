import * as d3 from 'd3';
import runCrown from './runCrown.js';

function winningToken(groupReference) {
  const group = d3.select(groupReference.current);

  group
    .attr("display","block");

  group
    .attr("transform","scale(1)")
    .transition()
    .delay(500)
    .duration(325)
    .ease(d3.easePolyIn)
    .attr("transform","translate(50,0) scale(0,1)")
    .on("end",() =>{
      group.select("circle").attr("fill","green");
      group.select("path").attr("fill","white")
    })
    .transition()
    .duration(325)
    .ease(d3.easePolyOut)
    .attr("transform","scale(1)");

    runCrown(group);
}

export default winningToken;
