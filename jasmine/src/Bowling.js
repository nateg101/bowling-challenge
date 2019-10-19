'use strict';

function Bowling(){
  this.START_SCORE = 0
  this._score = this.START_SCORE
  this._throwOne = false
  this._throwTwo = false
  this._frame = 1
}

Bowling.prototype.getCurrentScore = function(){
  return this._score;
}

Bowling.prototype.getCurrentFrame = function(){
  return this._frame;
}

Bowling.prototype.throw = function(pins){
  if(this._throwOne === false) {
    this._throwOne = pins;
  } else {
    this._throwTwo = pins;
    this.endFrame();
  };
}

Bowling.prototype.endFrame = function(){
  this._frame++
  this._score += this._throwOne + this._throwTwo
  this._throwOne = false
  this._throwTwo = false
}
