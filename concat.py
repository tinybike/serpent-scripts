#!/usr/bin/env python

from ethereum import tester

def init(gas_limit=700000000):
    s = tester.state()
    tester.gas_limit = gas_limit
    return tester.state()

def compile(state, filepath, gas=70000000):
    return state.abi_contract(filepath, gas=gas)

def run(contract, fn, *args):
    return getattr(contract, fn)(*args)

def bin2ascii(bytearr):
    return ''.join(map(chr, bytearr))

c = compile(init(), "concat.se")
result = run(c, "concat")

print bin2ascii(result[2:])

# def profile(contract, fn, *args, **kwargs):
#     result = getattr(contract, fn)(*args, profiling=True)
#     print("\nProfile:")
#     print(" %i gas (%s seconds)\n" % (result['gas'], result['time']))
#     return result['output']

# result = profile(c, "concat")
# print "concat():", result
# print ''.join(map(chr, result[2:])) # convert to ASCII

# short string
# result = profile(c, "shortstring")
# print "shortstring():", hex(result)[2:-1], hex(result)[2:-1].decode("hex")
