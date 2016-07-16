#!/usr/bin/env python

from ethereum import tester

def hexify(x):
    if x > 2**255: x -= 2**256
    return hex(x)[:-1]

c = tester.state().abi_contract("test-sha3.se")

print(hexify(c.testSha3(0xc5ae448cab9178c5736640575375a753cc217a1b2a02d103d1a5d1f275fa3cb)))
print(hexify(c.makeMarketID()))
