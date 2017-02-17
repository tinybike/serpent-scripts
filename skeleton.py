#!/usr/bin/env python

from ethereum import tester as t

def hexify(x):
    if x > 2**255-1: x -= 2**256
    if x < -2**255: x += 2**256
    return hex(x)

s = t.state()
c = s.abi_contract("""
data Info[](description[2048], descriptionLength, creator, creationFee)

event arrayReturnValue(returnArray: arr)

macro ONE: 10^18

macro abs($a):
    if($a<0):
        $a = -$a
    $a

macro logArrayReturn($a):
    log(type=arrayReturnValue, $a)
    return($a: arr)

def foo():
    x = array(3)
    x[0] = -0x8000000000000000000000000000000000000000000000000000000000000000
    x[1] = 0
    x[2] = 1
    return(sha3(x, items=3))

def makeTradeHash(max_value, max_amount, trade_ids: arr):
    i = 0
    trades = 0
    while i < len(trade_ids):
        trades += trade_ids[i]
        i+=1
    tradeInfo = array(3)
    tradeInfo[0] = trades
    tradeInfo[1] = max_amount
    tradeInfo[2] = max_value
    tradeHash = sha3(tradeInfo, items=3)
    return(tradeHash)

def shaHash():
    s = 0x2bf6e5787b2a7a379f1b83efc34d454d6bb870565980280780fd16b75e943106 + 0xffffffffffffffffffffffffffffffffffffffff
    s = sha3(s)
    s = abs(s) / 115792089237316195423571
    return(s)

def loggington():
    logArrayReturn([1, 3, 3, 7])

def bar(x):
    return(!x)

def arrtest():
    x = array(31)
    x[0] = 2
    return(x: arr)

def setInfo(ID, description: str, creator, fee):
    if(self.Info[ID].creator == 0):
        save(self.Info[ID].description[0], description, chars=len(description))
        self.Info[ID].descriptionLength = len(description)
        self.Info[ID].creationFee = fee
        self.Info[ID].creator = creator
        return(1)
    else:
        return(0)

""")

print(c.arrtest())
# print(c.bar(0))
# print(c.bar(1))
# print(hexify(c.foo()))
# print(hexify(c.makeTradeHash(1, 0, [-0x4a79aafd3b316a3e02ae87368a79c2262bedc9c6cb58f8d05b452f6ce6f38796])))
# print(c.loggington())
