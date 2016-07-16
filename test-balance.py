#!/usr/bin/env python

from ethereum import tester as t
s = t.state()
s.block.number = 5555555
c1 = s.abi_contract("""
data v
event Happy(balance)
event Rage(balance)

def feh():
    log(type=Rage, self.balance)
    return(1)

def foo():
    log(type=Happy, self.balance)
    self.v += 1
    return(self.v)
""")

c2 = s.abi_contract("""
extern c1: [foo:[]:int256,feh:[]:int256]
data v
data callee
event Happeh(balance)

def set_callee(addr:address):
    self.callee = addr

def bar():
    self.callee.feh(call=delegate)
    log(type=Happeh, self.balance)
    self.callee.foo(call=delegate)
    log(type=Happeh, self.balance)

def baz():
    return(self.v)
""")

c2.set_callee(c1.address)
c2.bar(value=500)
