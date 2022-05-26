weiter = "j"

while weiter == "j":
    preis = float(input("Der Preis: "))
    bezahlt = float(input("Bezahlt: "))
    rueckgeld = bezahlt - preis
    print("Das Rückgeld beträgt: ", rueckgeld)
    weiter = input("Weitere Eingabe? j=ja  ")
print("Kasse geschlossen")
