'use strict';

describe('Bowling', function(){
  var bowling;

  beforeEach(function(){
    bowling = new Bowling();
  });

  describe('Scoring', function(){

    it('should start with a score of 0', function(){
      expect(bowling.getCurrentScore()).toEqual(0)
    });

    it('the score is increased after one frame', function(){
      bowling.throw(2)
      bowling.throw(4)
      expect(bowling.getCurrentScore()).toEqual(6)
    });

    it('score increases correctly after more than one frame', function(){
      bowling.throw(1)
      bowling.throw(3)
      bowling.throw(4)
      bowling.throw(5)
      expect(bowling.getCurrentScore()).toEqual(13)
    });

    it('delivers correct score after a spare', function(){
      bowling.throw(4)
      bowling.throw(6)
      bowling.throw(3)
      expect(bowling.getCurrentScore()).toEqual(13)
    });
  })

  describe('increasing frame number', function(){
    it('increases the frame number after two throws', function(){
      bowling.throw(3)
      bowling.throw(3)
      expect(bowling.getCurrentFrame()).toEqual(2)
    });
  });

})
