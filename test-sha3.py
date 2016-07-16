#!/usr/bin/env python

from ethereum import tester

def hexify(x):
    if x > 2**255: x -= 2**256
    if x < -2**255-1: x += 2**256
    return hex(x)[:-1]

c = tester.state().abi_contract("test-sha3.se")

print(hexify(c.testSha3(-0x076627fd562b1cc22a6e53ae38d5d421fb3af7fe6c1f18164d097100fba627c54)))
print(hexify(c.makeMarketID()))
