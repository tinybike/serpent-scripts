#!/usr/bin/env python
import sys
import os
from pprint import pprint
import numpy as np
from ethereum import tester as t

ROOT = os.path.join(os.path.dirname(os.path.realpath(__file__)))

np.set_printoptions(linewidth=225,
                    suppress=True,
                    formatter={"float": "{: 0.6f}".format})

def init_chain(gas_limit=700000000):
    s = t.state()
    t.gas_limit = gas_limit
    return t.state()

def compile_contract(state, filename, root=ROOT, gas=70000000):
    return state.abi_contract(os.path.join(root, filename), gas=gas)

def profile(contract, fn, *args, **kwargs):
    result = getattr(contract, fn)(*args, profiling=True)
    print("\nProfile:")
    print(" %i gas (%s seconds)\n" % (result['gas'], result['time']))
    return result['output']

s = init_chain()
c = compile_contract(s, "test.se")

result = profile(c, "start")
print "start():", result

result = profile(c, "getStuff", 0)
print "getStuff(0):", result

c = compile_contract(s, "load_problem.se")

result = profile(c, "load_stuff")
print "load_stuff():", result
