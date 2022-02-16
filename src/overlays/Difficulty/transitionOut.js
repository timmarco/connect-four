import * as d3 from 'd3';
function transitionOut(selection,callback,difficulty) {
  selection
    .transition()
    .duration(250)
    .delay(375)
    .style("top","100%")
    .on("end",() => {
      callback(difficulty);
      selection.style("top","0");
      d3.selectAll(".difficultyOption").style("opacity",1);
    });

}

export default transitionOut;
