def decorators(func):
    def wrapper(*args, **kwargs):
        print("hello")
        return func(*args, **kwargs)

    return wrapper

@decorators
def this_function(name="daffa"):
    return "this function " + name

print(this_function())