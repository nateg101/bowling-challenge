'use strict';

function Bowling(){
  this._score = [[0],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null],
  [null,null],[null,null],[null,null],[null,null],[null,null]];
  this._frame = 1;
};

Bowling.prototype.getCurrentScore = function(){
  var score
  score = 0
  var i
  for(i = 1; i < this.getCurrentFrame(i); i ++){
    score += this.frameScore(i)
  }
  return score;
}

Bowling.prototype.getCurrentFrame = function(){
  return this._frame;
}

Bowling.prototype.frameScore = function(frame){
  if(this.isStrike(frame)){
    return this.strike(frame);
  } else if(this.isSpare(frame)) {
    return this.spare(frame);
  } else {
    return this.standardScore(frame);
  }
}

Bowling.prototype.standardScore = function(frame){
  return this._score[frame].reduce((a,b) => a + b, 0)
}

Bowling.prototype.isStrike = function (frame) {
  if(this._score[frame][0] == 10) { return true }
};

Bowling.prototype.isSpare = function (frame) {
  if(this.standardScore(frame) == 10) { return true }
};

Bowling.prototype.spare = function(frame){
  return 10 + this._score[frame + 1][0]
}

Bowling.prototype.strike = function(frame){
  if(this.isStrike(frame + 1)) {
    return 20 + this._score[frame + 2][0]
  }
  return 10 + this.standardScore(frame + 1)
}

Bowling.prototype.throw = function(pins){
  if(this._score[this._frame ][0] === null) {
    this._score[this._frame ][0] = pins
    if(pins == 10) {
      this._score[this._frame][1] = 0
      this._frame++
    }
  } else {
    this._score[this._frame][1] = pins
    this._frame++
  };
}
