weiter = "j"

while weiter == "j" or weiter == "ja" or weiter == "y" :
    preis = float(input("Der Preis: "))
    bezahlt = float(input("Bezahlt: "))
    rueckgeld = bezahlt - preis
    print("Das Rückgeld beträgt: ", rueckgeld)
    weiter = input("Weitere Eingabe?  ")
print("Kasse geschlossen")
