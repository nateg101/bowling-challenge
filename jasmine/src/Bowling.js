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
  if(this.standardScore(frame) == 10) {
    return this.spare(frame);
  } else {
    return this.standardScore(frame);
  };
}

Bowling.prototype.standardScore = function(frame){
  return this._score[frame].reduce((a,b) => a + b, 0)
}

Bowling.prototype.spare = function(frame){
  return 10 + this._score[frame + 1][0]
}

Bowling.prototype.throw = function(pins){
  if(this._score[this._frame ][0] === null) {
    this._score[this._frame ][0] = pins;
  } else {
    this._score[this._frame][1] = pins
    this._frame++
  };
}
