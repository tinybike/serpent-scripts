#!/usr/bin/env python

from ethereum import tester as t

def hexify(x):
    if x > 2**255: x -= 2**256
    if x < -2**255-1: x += 2**256
    return hex(x)[:-1]

s = t.state()
c = s.abi_contract("""
macro ONE: 10^18

def foo():
    return(2^255 / ONE * 2)
""")

print(hexify(c.foo()))
