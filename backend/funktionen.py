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
    print("\n")    

print_some_stars(5)

def print_with_paramters(zeichen, anzahl, inhalt):
 

    print(zeichen * anzahl)
    print(inhalt)
    print(zeichen * anzahl)

print_with_paramters(input("Zeichen angeben: "), int(input("Anzahl der Zeichen: ")), input("Inhalt angeben: "))