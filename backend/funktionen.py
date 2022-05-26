def spam():
    print("1st function")

def nichts():
    pass
nichts()

def print_some_stars(lv):
    eingabe = int(input("Zahl: "))
    
    while eingabe > lv:
        print("*", end = "")
        lv += 1

print_some_stars(5)