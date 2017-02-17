#!/usr/bin/env python

from ethereum import tester as t

s = t.state()
c = s.abi_contract("""
data Info[](description[2048], descriptionLength, creator, creationFee)

def getDescriptionLength(ID):
    return(self.Info[ID].descriptionLength)

def getDescription(ID):
    length = self.Info[ID].descriptionLength
    return(load(self.Info[ID].description[0], chars=length): str)

def setInfo(ID, description: str, creator, fee):
    if self.Info[ID].creator == 0:
        if len(description):
            save(self.Info[ID].description[0], description, chars=len(description))
            self.Info[ID].descriptionLength = len(description)
        self.Info[ID].creationFee = fee
        self.Info[ID].creator = creator
        return(1)
    else:
        return(0)

def callSetInfo():
    return(self.setInfo(111111, text(""), 31415, 42))

def callGetDescription():
    descriptionLength = self.getDescriptionLength(111111)
    return(self.getDescription(111111, outchars=descriptionLength): str)
""")

# print "setInfo:", c.setInfo(123456, "test description", 31415, 42)
# print "description:", c.getDescription(123456)

# print "setInfo:", c.setInfo(654321, "", 31415, 42)
# print "description:", c.getDescription(654321)

print "setInfo:", c.callSetInfo()
print "description:", c.callGetDescription()
print "descriptionLength:", c.getDescriptionLength(111111)
