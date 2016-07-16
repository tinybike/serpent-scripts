#!/usr/bin/env python

from ethereum import tester

s = tester.state()
c = s.abi_contract("test-sha3.se")

def hexify(x):
    if x > 2**255: x -= 2**256
    return hex(x)[:-1]

print(hexify(c.testSha3(0xc5ae448cab9178c5736640575375a753cc217a1b2a02d103d1a5d1f275fa3cb)))

# marketID = c.makeMarketID()
# print marketID
# # print [hex(m) for m in marketID]
# print hex(marketID)
# print hex(marketID + 2**256)
