import * as d3 from 'd3';

function transitionIn(ref) {
  d3.select(ref.current)
    .style("display","block")
    .style("opacity",0)
    .transition()
    .duration(250)
    .style("opacity",1);
}

export default transitionIn;
