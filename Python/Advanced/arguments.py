import sys

def myarguments(*args, **kwargs):
    print(args)
    print(kwargs)

# myarguments('aa', 'bbb', True, 29, data1=9, data2="ccc")

print(sys.argv)