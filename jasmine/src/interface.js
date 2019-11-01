$( document ).ready(function() {
  var bowling;
  bowling = new Bowling()

  $("#submit").click(function() {
    var score = parseInt($("#throw").val());
    bowling.throw(score);
    if(bowling.isFirstThrow() == true) {
      addRow()
    }
  })

  var addRow = function(){
    var frame = bowling.getCurrentFrame() - 1
    addFrame(frame)
    addThrow1(frame)
    addThrow2(frame)
    addFrameScore(frame)
    addGetCurrentScore()
  }

  var addFrame = function(frame){
    $('#frame').text(frame)
  }

  var addThrow1 = function(frame){
    $('#throw1').text(bowling.scores[frame][0])
  }

  var addThrow2 = function(frame){
    $('#throw2').text(bowling.scores[frame][1])
  }

  var addFrameScore = function(frame){
    $('#score').text(bowling.displayScore(frame))
  }

  var addGetCurrentScore = function(frame){
    $('#total').text(bowling.getCurrentScore())
  }
})
