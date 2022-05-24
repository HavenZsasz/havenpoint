eingabePreis = float(input("Preis eintragen: "))
eingabeBezahlt = float(input("Vom Kunden bekommenes Geld: "))
eingabeRabattInProzent = int(input("Rabatt in %: ")) 
rabattInFKZ = eingabeRabattInProzent / 100
rabattGgs = 1 - rabattInFKZ
preis = eingabePreis * rabattGgs
print("Der Preis beträgt: ", preis)
 
rueckgeld = eingabeBezahlt - preis
print("Das Rückgeld beträgt:", rueckgeld)