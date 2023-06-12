from typing import Any


class SpecialMethods:
    """
        docstring
    """

    def __init__(self, fn, ln):
        self.first_name = fn
        self.last_name = ln

    def __setattr__(self, name, value):
        print(f">>> Set {name} = {value}")
        self.__dict__[name] = value

    def __getattr__(self, name):
        print(f">>> Get Attribute {name}")
        if name == 'full_name':
            return f"{self.first_name} {self.last_name}"
        else:
            raise AttributeError("tidak ada attribut")
    
    def __str__(self):
        return f"{self.first_name} {self.last_name}"
    
    def __lt__(self, other):
        print(f">>> Comp {self} with {other}")

special_methods = SpecialMethods("muhammad daffa", "ulhaq")

print(dir(special_methods))

print(special_methods.__doc__)

special_methods.middle_name = "dhiya"

print(special_methods.__dict__)

print(special_methods.last_name)
print(special_methods.full_name)
