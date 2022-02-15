import * as d3 from 'd3';
import runClack from './runClack.js';

function dropToken(group,row,color,sounds) {

  const clackSound = new Audio('click.mp3');

  const dropTimeScale = d3.scaleLinear()
    .domain([0,5])
    .range([0,750]);

  group
    .attr("transform","translate(0,-1080)")
    .transition()
    .duration(dropTimeScale(row))
    .ease(d3.easePolyIn)
    .attr("transform","translate(0,0)")
    .on("end",() => {
      runClack(group,color);
    })
    .transition()
    .duration(175)
    .ease(d3.easeBackIn.overshoot(5000))
    .attr("transform","translate(0,0.1)")
}


export default dropToken;
