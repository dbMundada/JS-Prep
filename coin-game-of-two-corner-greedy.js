/*
  Coin game of two corners (Greedy Approach)
  Consider a two player coin game where each player gets turn one by one. There
  is a row of even number of coins, and a player on his/her turn can pick a coins
  from any of the two corners of the row. The player that collects coins with more
  value wins the game. Develop a strategy for the player making the first turn,
  such he/she never looses the game.

  18 20 15 30 10 14
  First Player picks 18, now row of coins is
  20 15 30 10 14
  Second player picks 20, now row of coins is
  15 30 10 14
  First Player picks 15, now row of coins is
  30 10 14
  Second player picks 30, now row of coins is
  10 14
  First Player picks 14, now row of coins is
  10
  Second player picks 10, game over.

  The total value collected by second player is more (20 +
  30 + 10) compared to first player (18 + 15 + 14).
  So the second player wins.

  Solution:
  We have a Greedy Strategy here. The idea is to count sum of values of all even
  coins and odd coins, compare the two values. The player that makes the first
  move can always make sure that the other player is never able to choose an
  even coin if sum of even coins is higher. Similarly, he/she can make sure
  that the other player is never able to choose an odd coin if sum of odd
  coins is higher.
*/
