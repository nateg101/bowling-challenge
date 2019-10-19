'use strict';

describe('Bowling', function(){
  var bowling;

  beforeEach(function(){
    bowling = new Bowling();
  });

  it('should start with a score of 0', function(){
    expect(bowling.getCurrentScore()).toEqual(0)
  });
})
