# Overexcited Fan (4pts, 6pts, 12pts)

Today will be the day—today will be the day that you finally get a picture with
Peppurr the cat!

It has just been announced that Peppurr will be touring your city. The city has
infinitely many infinitely-long streets running north-south and infinitely many
infinitely-long streets running east-west. An intersection is any point at
which a north-south street and an east-west street meet. From any given
intersection, the closest intersection in each of the four directions (north,
east, south and west) is exactly one block away.

You know the exact path that Peppurr's tour will take along those streets. Your
goal is to be at one of the intersections on Peppurr's tour at the same time
that Peppurr is there, and you want to do so as fast as possible. This is how
you will get your picture with Peppurr!

Peppurr's tour starts at an intersection that is X blocks east and Y blocks
north of the intersection where you are currently located. Both you and Peppurr
take exactly one minute to walk one full block, and must finish each minute at
an intersection; neither of you can walk partial blocks.

Peppurr moves along a predefined path. Every minute, you can choose to stand
still for the minute, or use it to walk a single block in any of the 4
directions (north, east, south or west). Both you and Peppurr only walk along
the streets.

If you and Peppurr are at the same intersection at the same time, you can take
a picture, even at the last intersection of the tour. However, Peppurr is
unavailable for pictures after the tour ends, so arriving at the tour's final
intersection even a single minute after the tour finishes means you will not
get a picture.

Is it possible to get a picture with Peppurr? If so, how soon can you do it?
Input

The first line of the input gives the number of test cases, T. T test cases
follow. Each case consists of one line containing two integers, X and Y, and a
string of characters M. This represents that Peppurr's tour starts exactly X
blocks east and Y blocks north of you. The string M is the sequence of moves
that Peppurr will make. The i-th character in M is one of N, E, S or W, and
corresponds to the direction (north, east, south, or west, respectively) in
which Peppurr will walk one block during the tour's i-th minute. Output

For each test case, output one line with Case #x: y, where x is the test case
number (starting from 1). If there is no way to get a picture with Peppurr, y
is IMPOSSIBLE. Otherwise, y is the smallest number of minutes from the start of
the tour needed to get a picture with Peppurr. Limits

1 ≤ T ≤ 100.
Time limit: 20 seconds per test set.
Memory limit: 1GB.
(X, Y) ≠ (0, 0). (The tour does not start in the same intersection as you.)
Test Set 1 (Visible Verdict)

0 ≤ X ≤ 10.
0 ≤ Y ≤ 10.
1 ≤ length of M ≤ 8.
Each character in M is an uppercase letter — either N or S.
Test Set 2 (Visible Verdict)

0 ≤ X ≤ 1000.
0 ≤ Y ≤ 1000.
1 ≤ length of M ≤ 1000.
Each character in M is an uppercase letter — either N or S.
Test Set 3 (Visible Verdict)

0 ≤ X ≤ 1000.
0 ≤ Y ≤ 1000.
1 ≤ length of M ≤ 1000.
Each character in M is an uppercase letter — either N, E, S or W.
Sample

Input Output

5
4 4 SSSS Case #1: 4
3 0 SNSS Case #2: IMPOSSIBLE
2 10 NSNNSN Case #3: IMPOSSIBLE
0 1 S Case #4: 1
2 7 SSSSSSSS Case #5: 5

In Sample Case #1, you can walk east four blocks and you will be able to take a
picture with Peppurr on the tour's last intersection.

In Sample Case #2, the tour starts off exactly three blocks to the east of you.
No matter how you move, you cannot get a picture with Peppurr.

In Sample Case #3, the tour is too far north for you to get the picture before
the tour ends.

In Sample Case #4, the tour will come to you after one minute, so you don't
even have to move! Enjoy the picture with Peppurr! Remember that you can only
take pictures in intersections, so if you moved north while the tour moved
south, which would cause you to cross paths with Peppurr outside of an
intersection, you could not get your picture in 0.5 minutes.

In Sample Case #5, you can move north twice, then east twice. Then, you can
stay still and you will be able to take a picture with Peppurr in the next
minute. There are other paths you can take which can get you a picture with
Peppurr in 5 minutes, but none which can do it sooner than that.

The following two cases could not appear in Test Set 1 or Test Set 2, but could
appear in Test Set 3:

2
3 2 SSSW Case #1: 4
4 0 NESW Case #2: 4

Note that in Case #1, you can take a picture with Peppurr one block to the
south and two blocks to the east of your original starting point.

In Case #2, Peppurr travels in a small square. You can take a picture when
Peppurr returns to the starting point of that square.
