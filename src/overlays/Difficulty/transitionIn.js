import * as d3 from 'd3';

function transitionIn(ref) {
  d3.select(ref.current)
    .style("top","100%")
    .transition()
    .duration(500)
    .style("opacity",1)
    .style("top","0%");
}

export default transitionIn;
