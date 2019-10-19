'use strict';

function Bowling(){
  this.START_SCORE = 0
  this._score = this.START_SCORE
}

Bowling.prototype.getCurrentScore = function() {
  return this._score;
};
