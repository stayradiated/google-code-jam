# Overrandomized (9pts, 10pts, 17pts)

## Problem

> Note: Every time this statement says something is randomly chosen, it means
> "chosen uniformly at random across all valid possibilities, and independently
> from all other choices".

The company Banana Rocks Inc. just wrote a premium cloud-based random number
generation service that is destined to be the new gold standard of randomness.

The original design was that a group of servers would receive a request in the
form of a single positive integer M of up to U decimal digits and then respond
with an integer from the range 1 through M, inclusive, chosen at random.
However, instead of simply having the output written with digits 0 through 9 as
usual, the servers were "overrandomized". Each server has a random subset of 10
distinct uppercase English letters to use as digits, and a random mapping from
those letters to unique values between 0 and 9.

The formal description of the current situation is as follows: each server has
a digit string D composed of exactly 10 different uppercase English letters.
The digit string defines the mapping between letters and the base 10 digits:
D's j-th character from the left (counting from 0) is the base 10 digit of
value j. For example, if D were CODEJAMFUN then C would represent digit 0, O
would represent digit 1 and N would represent digit 9. The number 379009 would
be encoded as EFNCCN when using that digit string.

When receiving the i-th query with an integer parameter Mi, the server:

    chooses an integer Ni at random from the inclusive range 1 through Mi,
    writes it as a base 10 string with no leading zeroes using the j-th
    character of D (counting starting from 0) as the digit of value j, and
    returns the resulting string as the response Ri.

We collected some data that we believe we can use to recover the secret digit
string D from each server. We sent 104 queries to each server. For each query,
we chose a value Mi at random from the range 1 through 10U - 1, inclusive, and
received the response Ri, a string of up to U uppercase English letters. We
recorded the pairs (Mi, Ri). As we were moving these records to a new data
storage device, the values of all the integers Mi within the records of some
servers became corrupted and unreadable.

Can you help us find each server's digit string D?

## Input

The first line of the input gives the number of test cases, T. T test cases
follow. Each test case contains the records for one server and starts with a
line containing a single integer U, representing that 10U - 1 is the inclusive
upper bound for the range in which we chose the integers Mi to query that
server. Then, exactly 104 lines follow. Each of these lines contains an integer
Qi (in base 10 using digits 0 through 9, as usual) and a string Ri,
representing the i-th query and response, respectively. If Qi = -1, then the
integer Mi used for the i-th query is unknown. Otherwise, Qi = Mi.

## Output

For each test case, output one line containing Case #x: y, where x is the test
case number (starting from 1) and y is the digit string D for the server
examined in test case x.

## Limits

Time limit: 20 seconds per test set.
Memory limit: 1GB.
1 ≤ T ≤ 10.
D is a string of exactly 10 different uppercase English letters, chosen independently and uniformly at random from the set of all such strings.
Mi is chosen independently and uniformly at random from the range 1 through 10U - 1, inclusive, for all i.
Ni is chosen independently and uniformly at random from the range 1 through Mi, inclusive, for all i.
Ri is the base 10 representation of Ni, using the j-th digit from the left of D (counting starting from 0) as the digit of value j, for all i.

## Test Set 1 (Visible Verdict)

Qi = Mi, for all i.
U = 2.

## Test Set 2 (Visible Verdict)

Qi = Mi, for all i.
U = 16.

## Test Set 3 (Visible Verdict)

Qi = -1, for all i.
U = 16.

The sample input is too big to display inline, so we are providing downloadable files instead for the input and output.
