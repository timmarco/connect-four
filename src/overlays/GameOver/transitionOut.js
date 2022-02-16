import * as d3 from 'd3';

function transitionOut(ref,reset) {
  d3.select(ref.current)
    .transition()
    .duration(275)
    .ease(d3.easeQuadOut)
    .style("top","100%")
    .on("end",() => {
      d3.select(ref.current).style("top","0%");
      reset()
    });
}

export default transitionOut;
