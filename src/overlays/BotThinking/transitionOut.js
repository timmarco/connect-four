import * as d3 from 'd3';

function transitionOut(ref) {
  d3.select(ref.current)
    .style("opacity",1)
    .transition()
    .duration(250)
    .style("opacity",0)
    .on("end",() => {
      d3.select(ref.current).style("display","none");
    });
}

export default transitionOut;
