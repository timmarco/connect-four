import * as d3 from 'd3';

function losingToken(group) {

  group
    .attr("opacity",1)
    .attr("transform","scale(1)")
    .transition()
    .duration(750)
    .ease(d3.easeQuadOut)
    .attr("transform","translate(50,50) scale(0)");


}

export default losingToken;
