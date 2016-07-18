#!/usr/bin/env python

from ethereum import tester as t

def hexify(x):
    if x > 2**255-1: x -= 2**256
    if x < -2**255: x += 2**256
    return hex(x)

s = t.state()
c = s.abi_contract("""
macro ONE: 10^18

macro abs($a):
    if($a<0):
        $a = -$a
    $a

def foo():
    s = 0x2bf6e5787b2a7a379f1b83efc34d454d6bb870565980280780fd16b75e943106 + 0xffffffffffffffffffffffffffffffffffffffff
    s = sha3(s)
    s = abs(s) / 115792089237316195423571
    return(s)
""")

a = c.foo()

print(a)
print(hexify(a))
