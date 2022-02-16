import * as d3 from 'd3';
import dropToken from './dropToken.js';
import paths from './tokenPaths.js';

function botToken(groupReference,row,sounds) {
  const group = d3.select(groupReference.current);

  dropToken(group,row,"red",sounds);

  group
    .attr("display","block");

  group.select("circle")
    .attr("fill","red");

  group.select("path")
    .attr("fill","white")
    .attr("stroke","black")
    .attr("stroke-width",3)
    .attr("d",paths.bot);
}

export default botToken;
