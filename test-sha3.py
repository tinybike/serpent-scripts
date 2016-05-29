#!/usr/bin/env python

from ethereum import tester

s = tester.state()
c = s.abi_contract("test-sha3.se")

marketID = c.makeMarketID()
print hex(marketID)
print hex(marketID + 2**256)
