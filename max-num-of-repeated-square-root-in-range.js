
# Maximum no. of repeated square root operations that can be performed on a no. in the range?
# Maximum number of repeated square root operations in given interval.

import math as m

A = 6000 # A must not be 1 because then infinite operations can occur, sqrt(1) = 1
B = 7000
nops = 0

a = m.ceil(m.sqrt(A))
b = m.floor(m.sqrt(B))

while b >= a:
    a = m.ceil(m.sqrt(a))
    b = m.floor(m.sqrt(b))
    nops = nops + 1

print([A, B, nops])
