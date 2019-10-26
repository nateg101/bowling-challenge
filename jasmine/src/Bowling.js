'use strict';

function Bowling(){
  this.scores = [[],[false,false],[false,false],[false,false],[false,false],[false,false],[false,false],[false,false],[false,false],[false,false],[false,false],[false,false], [false,false]];
  this._frame = 1
  this.gameOver = false
};

Bowling.prototype.throw = function(pins){
  if(this.gameOver == true) { return }

  if(this.scores[this._frame][0] === false) {
    this.scores[this._frame][0] = pins;
    if(pins == 10) {
      this.scores[this._frame][1] = 0;
      this.nextFrame();
    }
  } else {
    this.scores[this._frame][1] = pins
    this.nextFrame();
  };
}

Bowling.prototype.getCurrentScore = function(){
  var score
  score = 0
  var i;
  for(i = 1; (i < this.getCurrentFrame() && i < 11); i ++){
    score += this.frameScore(i)
  }
  return score;
}

Bowling.prototype.getCurrentFrame = function(){
  return this._frame;
}

Bowling.prototype.frameScore = function(frame){
  if(this.isStrike(frame)) {
    return this.strike(frame);
  } else if(this.isSpare(frame)) {
    return this.spare(frame);
  } else {
    return this.standardScore(frame);
  }
}

Bowling.prototype.nextFrame = function() {
  if((this.isStrike(10) && this.getCurrentFrame() == 12) || (this.isSpare(10) && this.getCurrentFrame() == 11) || (this.isStandard(10) && (this.scores[10][1] !== false))) {
  this.gameOver = true
  return
}
this._frame++
}

Bowling.prototype.strike = function(frame){
  if(this.isStrike(frame + 1)) {
    return 20 + this.scores[frame + 2][0]
  }
  return 10 + this.standardScore(frame + 1)
}

Bowling.prototype.spare = function(frame){
  return 10 + this.scores[frame + 1][0]
}

Bowling.prototype.standardScore = function(frame){
  return this.scores[frame].reduce((a,b) => a + b, 0)
}

Bowling.prototype.isStrike = function(frame) {
  if(this.scores[frame][0] == 10) { return true }
};

Bowling.prototype.isSpare = function(frame) {
  if(this.standardScore(frame) == 10 && this.scores[frame][1] != 0) { return true }
};

Bowling.prototype.isStandard = function(frame) {
  if(this.standardScore(frame) < 10) { return true }
}
