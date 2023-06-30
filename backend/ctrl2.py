weiter = "j"

while weiter == "j" or weiter == "ja" or weiter == "y" :
    preis = float(input("Der Preis: "))
    bezahlt = float(input("Bezahlt: "))
    if bezahlt < preis: 
        print("Der gezahlte Betrag ist zu gering!")
    elif bezahlt == preis:
        print("Preis übereinstimmt genau mit der gezahlten Summe.")
        weiter = input("Weitere Eingabe?  ")
    else:
        rueckgeld = bezahlt - preis
        print("Das Rückgeld beträgt: ", rueckgeld)
        weiter = input("Weitere Eingabe?  ")        
        
    
    
    
    
print("Kasse geschlossen")
