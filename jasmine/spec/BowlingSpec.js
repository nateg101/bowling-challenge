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

    it('scores one strike correctly', function(){
      bowling.throw(10)
      bowling.throw(4)
      bowling.throw(1)
      expect(bowling.getCurrentScore()).toEqual(20)
    });

    it('scores correctly after a double strike', function(){
      bowling.throw(10)
      bowling.throw(10)
      bowling.throw(4)
      bowling.throw(2)
      expect(bowling.getCurrentScore()).toEqual(46)
    });
  })

  describe('increasing frame number', function(){
    it('increases the frame number after two throws', function(){
      bowling.throw(3)
      bowling.throw(3)
      expect(bowling.getCurrentFrame()).toEqual(2)
    });
  });

  describe('ending the game', function(){
    it('after 20 throws', function() {
      var i;
      for(i = 1; i <= 20; i++) {
        bowling.throw(0)
      }
      expect(bowling.getCurrentFrame()).toEqual(10)
      expect(bowling.getCurrentScore()).toEqual(0)
      expect(bowling.gameOver).toEqual(true)
    })

    it('after 12 Strikes', function(){
      var i;
      for(i = 1; i <= 12; i++) {
        bowling.throw(10)
      }
      expect(bowling.getCurrentFrame()).toEqual(12)
      expect(bowling.getCurrentScore()).toEqual(300)
      expect(bowling.gameOver).toEqual(true)
    })

    it('after 10 spares', function(){
      var i;
      for(i = 1; i <= 21; i++) {
        bowling.throw(5)
        bowling.throw(5)
      }
      expect(bowling.getCurrentFrame()).toEqual(11)
      expect(bowling.getCurrentScore()).toEqual(150)
      expect(bowling.gameOver).toEqual(true)
    })
  });

})
