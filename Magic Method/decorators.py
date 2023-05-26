def decorators(func):
    def wrapper(*args, **kwargs):
        print("hello")
        func(*args, **kwargs)

    return wrapper

@decorators
def this_function(name="daffa"):
    print("this function " + name)

this_function()