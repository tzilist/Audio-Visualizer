var audioCtx = new AudioContext();
var audioElement = document.getElementById('audioElement');
audioElement.crossOrigin = "anonymous"
var audioSrc = audioCtx.createMediaElementSource(audioElement);
var analyser = audioCtx.createAnalyser();

// Bind our analyser to the media element source.
audioSrc.connect(analyser);
audioSrc.connect(audioCtx.destination);


var frequencyData = new Uint8Array(500);

var svgHeight = 400;
var svgWidth = 3000;
var barPadding = 0;

function createSvg(parent, height, width) {
  return d3.select(parent).append('svg').attr('height', height).attr('width', width);
}

var svgUP = createSvg('body', 400, 1910);
var svgDown = createSvg('body', 500, 1910)
              .style('background','linear-gradient(grey,black 17%)');
var x1, x2, y1, y2;
// Create our initial D3 chart.
svgUP.selectAll('rect')
  .data(frequencyData)
  .enter()
  .append('rect')
  .attr('class','up')
  .attr('x', function(d, i) {
    return i * (svgWidth / frequencyData.length);
  })
  .attr('width', (svgWidth / frequencyData.length - barPadding))
  .attr('height', function(d) {
    return 1;
  })
  .attr('fill', function(d, i) {
    return d3.hsl(i*3, 1, 0.5) + "";
  });

svgDown.selectAll('rect')
  .data(frequencyData)
  .enter()
  .append('rect')
  .attr('class','down')
  .attr('x', function(d, i) {
    return i * (svgWidth / frequencyData.length);
  })
  .attr('width', svgWidth / frequencyData.length - barPadding)
  .attr('height', function(d) {
    return 1;
  })
  .attr('fill', function(d, i) {
    return d3.hsl(i*3, 1, 0.5) + "";
  });

console.log(analyser)

// Continuously loop and update chart with frequency data.
function renderChart() {
  // Copy frequency data to frequencyData array.
  analyser.getByteFrequencyData(frequencyData);


  // Update d3 chart with new data.
  svgUP.selectAll('.up')
    .data(frequencyData)
    .transition()
    .duration(10)
    .attr('y', function(d) {
      return svgHeight-d;
    })


  svgDown.selectAll('.down')
    .data(frequencyData)
    .transition()
    .duration(10)
    .attr('y', function(d) {
      return d;
    })


    requestAnimationFrame(renderChart);
}

// Run the loop
//renderChart();
requestAnimationFrame(renderChart);
