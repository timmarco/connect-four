import * as d3 from 'd3';

function BotThinkingOverlay(props) {
  const selection = d3.select("#botThinkingOverlay");

  const transitionIn = () => {

    selection
      .style("display","block")
      .style("opacity",0)
      .transition()
      .duration(250)
      .style("opacity",1);
  }

  const transitionOut = () => {
    selection
      .style("opacity",1)
      .transition()
      .duration(250)
      .style("opacity",0)
      .on("end",() => {
        selection.style("display","none");
      });
  }

  if(props.waiting == true) { transitionIn(); }
  if(props.waiting == false) { transitionOut(); }

  return (
    <div
      id='botThinkingOverlay'
      className='overlay'
      style={{
        'opacity':0,
        'display':'none',
        'backgroundColor':'rgba(0,0,0,0.25)'
      }}
    >
    <div style={{"position":"relative", "height":"100%"}}>
      <div style={{
        "position":"absolute",
        "bottom":"0"
        }}
      >
        <h1>BOT IS THINKING...</h1>
      </div>
      </div>
    </div>
  )
}

export default BotThinkingOverlay;
