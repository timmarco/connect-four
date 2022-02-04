import * as d3 from 'd3';

function resetSvgs() {
  d3.selectAll("g")
    .attr("transform","scale(1)")
    .attr("opacity",1);
}

export default resetSvgs;
