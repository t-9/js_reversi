function drawBoard() {
  var canvas = document.getElementById('reversiBoard');
  if(canvas.getContext) {
    var context = canvas.getContext('2d');
    context.fillStyle = 'rgb(0, 0, 0)';
    var frameTop = 4;
    var frameLeft = 4;
    var outerFrameWidth = 3;
    var innerFrameWidth = 2;
    var frameLength = 512;
    var frameRight = frameLeft + frameLength - outerFrameWidth;
    var frameBottom = frameTop + frameLength - outerFrameWidth;
    var squareSize = 64;
    var circleSize = 5;
    var discSize = 25;
    context.fillRect(frameLeft, frameTop, outerFrameWidth, frameLength);
    context.fillRect(frameLeft, frameTop, frameLength, outerFrameWidth);
    context.fillRect(frameRight, frameTop, outerFrameWidth, frameLength);
    context.fillRect(frameLeft, frameBottom, frameLength, outerFrameWidth);
    var counter = 1;
    while(counter < 8) {
      context.fillRect(frameLeft + counter * squareSize, frameTop, innerFrameWidth, frameLength);
      context.fillRect(frameLeft, frameTop + counter * squareSize, frameLength, innerFrameWidth);
      counter++;
    }
    drawCircle(2, 2);
    drawCircle(2, 6);
    drawCircle(6, 2);
    drawCircle(6, 6);
    
    drawDisc(3, 3, 1);
    drawDisc(3, 4, 0);
    drawDisc(4, 3, 0);
    drawDisc(4, 4, 1);
  }
  
  function drawCircle(x, y) {
    context.beginPath();
    context.arc(frameLeft + squareSize * x + innerFrameWidth / 2,
      frameTop + squareSize * y  + innerFrameWidth / 2, circleSize, 0, Math.PI * 2, false);
    context.fill();
  }
  
  function drawDisc(x, y, discColor) {
    context.fillStyle = (discColor == 0) ? 'rgb(0, 0, 0)' : 'rgb(255, 255, 255)';
    context.beginPath();
    context.arc(frameLeft + squareSize * x + innerFrameWidth / 2 + squareSize / 2,
      frameTop + squareSize * y  + innerFrameWidth / 2 + squareSize / 2 , discSize, 0, Math.PI * 2, false);
    context.fill();
  }
}