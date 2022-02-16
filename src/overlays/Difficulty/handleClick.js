import * as d3 from 'd3';
import transitionOut from './transitionOut.js';

function handleClick(ref,difficulty,callback) {
  d3
    .selectAll(".difficultyOption")
    .style("opacity",1)
    .transition()
    .ease(d3.easeQuadOut)
    .delay((d,i) => { return i * 50})
    .duration(500)
    .style("opacity",function() {
      const option = d3.select(this).attr("data-option");
      if(option == difficulty) { return 1};
      return 0;
    });

  transitionOut(d3.select(ref.current),callback,difficulty);

}

export default handleClick;
