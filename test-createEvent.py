#!/usr/bin/env python

from ethereum import tester

def init(gas_limit=700000000):
    s = tester.state()
    tester.gas_limit = gas_limit
    return tester.state()

def compile(state, filepath, gas=70000000):
    return state.abi_contract(filepath, gas=gas)

# def bin2ascii(bytearr):
#     return ''.join(map(chr, bytearr))

c = compile(init(), "test-createEvent.se")
result = c.createMarket(
    1010101,
    "What will the high temperature (in degrees Fahrenheit) be in San Francisco, California, on July 1, 2016?",
    "0x205bc01a36e2eb2",
    "0x120000000000000000",
    "0x51eb851eb851eb8",
    # ["0xa4603384f73c741ba7bc5249e106009d55653ffcbbf27ceede8cc980770341d2"]
    [1]
)

print hex(result)
# print hex(result)

# s = tester.state()
# tester.gas_limit = 700000000
# s = tester.state()

# c = s.abi_contract('def foo(): return(sha256(text("test"):str))')
# c = s.abi_contract('def foo(): return(sha256(0x74657374):bytes32)')
# print c.foo().encode("hex")
