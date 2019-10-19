
Bowling Challenge
=================

## Request:

* Create a bowling scorecard for one player.
* The game consists of 10 frames where the player tries to knock down 10 pins.
* Each frame consists of one or two throws, depending on strikes and spares.
* The score of each frame is the number of pins knocked down plus strike and spare bonuses.
* Pins are reset after each frame.


### User Story 1

```
As a player
So I can start my Bowling game
I want to start with a score of 0.
```

### User Story 2

```
As a player
So I know how I'm playing
I want my score to be displayed.
```

### User Story 3

```
As a player
So I know how long I have left
I want the frame to be displayed.
```

### User Story 4

```
As a player
So I know if I've got a spare
I want a spare to be displayed with a '/'.
```

### User Story 5

```
As a player
So my score is correct
I want a spare to count for 10 points plus the score of the next throw.
```

### User Story 6

```
As a player
So I know if I've got a strike
I want a spare to be displayed with a 'X'.
```

### User Story 7

```
As a player
So my score is correct
I want a strike to count for 10 points plus the score of the next two throws.
```

### User Story 8

```
As a player
So I am playing correctly
I want a strike to end the frame.
```

## Bowling — how does it work?

### Strikes

The player has a strike if he knocks down all 10 pins with the first roll in a frame. The frame ends immediately (since there are no pins left for a second roll). The bonus for that frame is the number of pins knocked down by the next two rolls. That would be the next frame, unless the player rolls another strike.

### Spares

The player has a spare if the knocks down all 10 pins with the two rolls of a frame. The bonus for that frame is the number of pins knocked down by the next roll (first roll of next frame).

### 10th frame

If the player rolls a strike or spare in the 10th frame they can roll the additional balls for the bonus. But they can never roll more than 3 balls in the 10th frame. The additional rolls only count for the bonus not for the regular frame count.

    10, 10, 10 in the 10th frame gives 30 points (10 points for the regular first strike and 20 points for the bonus).
    1, 9, 10 in the 10th frame gives 20 points (10 points for the regular spare and 10 points for the bonus).

### Gutter Game

A Gutter Game is when the player never hits a pin (20 zero scores).

### Perfect Game

A Perfect Game is when the player rolls 12 strikes (10 regular strikes and 2 strikes for the bonus in the 10th frame). The Perfect Game scores 300 points.

In the image below you can find some score examples.

More about ten pin bowling here: http://en.wikipedia.org/wiki/Ten-pin_bowling

![Ten Pin Score Example](images/example_ten_pin_scoring.png)
