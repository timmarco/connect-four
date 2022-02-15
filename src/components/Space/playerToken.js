import * as d3 from 'd3';
import dropToken from './dropToken.js';
import paths from './tokenPaths.js';

function playerToken(group,row,sounds) {

  dropToken(group,row,"blue",sounds);

  group
    .attr("display","block");

  group.select("circle")
    .attr("fill","blue");

  group.select("path")
    .attr("fill","orange")
    .attr("stroke","black")
    .attr("stroke-width",1)
    .attr("d",paths.player);

}

export default playerToken;
