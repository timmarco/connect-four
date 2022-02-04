import * as d3 from 'd3';

function DifficultyOverlay(props) {

  const transitionIn = () => {
    d3.select("#difficultyOverlay")
      .style("top","100%")
      .transition()
      .duration(500)
      .style("opacity",1)
      .style("top","0%");
  }

  if(props.visible === undefined) { transitionIn() }

  const handleClick = (difficulty) => {

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

    d3
      .select("#difficultyOverlay")
      .transition()
      .duration(250)
      .delay(375)
      .style("top","100%")
      .on("end",() => {
        props.click(difficulty);
        d3.select("#difficultyOverlay").style("top","0");
        d3.selectAll(".difficultyOption").style("opacity",1);
      });

  };

  return(
    <div
    className='overlay'
    id='difficultyOverlay'
    style={{
      "backgroundColor":"white",
      "color":"black",
      "display":props.visible === undefined ? "block" : "none"
    }}>
      <div className='overlayBody'>
      <div className='overlayTitle'>
        SELECT DIFFICULTY
      </div>

      <div className='overlayOptions'>
        <div className='overlayOption difficultyOption' data-option='easy' style={{"borderRight":"1px solid #aaa"}} onClick={() => { handleClick("easy") }}>
          <div className='overlayOptionTitle'>Easy</div>
          <div className='overlayDescription'>Like playing against a toddler... but without the temper tantrums</div>
        </div>

        <div className='overlayOption difficultyOption' data-option='medium' style={{"borderRight":"1px solid #aaa"}} onClick={() => { handleClick("medium") }}>
          <div className='overlayOptionTitle'>Medium</div>
          <div className='overlayDescription'>Like playing against an adult... but with fewer temper tantrums</div>
        </div>

        <div className='overlayOption difficultyOption' data-option='hard' onClick={() => { handleClick("hard") }}>
          <div className='overlayOptionTitle'>Hard</div>
          <div className='overlayDescription'>This bot's got brains!</div>
        </div>

      </div>
      </div>
    </div>

  )
}

export default DifficultyOverlay;
