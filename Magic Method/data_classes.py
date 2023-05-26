from dataclasses import dataclass

class Fruit:
    def __init__(self, name: float, quantity: float):
        self.name = name
        self.quantity = quantity

apple = Fruit('apple', 'aaa')

print(apple)