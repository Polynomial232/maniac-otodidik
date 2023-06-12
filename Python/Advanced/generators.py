import sys

def mygenerator(n):
    for x in range(n):
        yield x ** 3

values = mygenerator(10)
print(sys.getsizeof)

print(next(values))
print(next(values))
print(next(values))
print(next(values))

