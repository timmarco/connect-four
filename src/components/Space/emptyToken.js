import * as d3 from 'd3';

function emptyToken(groupReference) {
  const group = d3.select(groupReference.current);

  group
    .attr("display","none");
}

export default emptyToken;
