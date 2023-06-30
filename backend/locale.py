import locale
locale.setlocale(locale.LC_ALL, "de_DE")
preis = input("Gib den Preis ein: ")
zahlung = input("Der Kunde zahlt: ")
preis = locale.atof(preis)
zahlung =  locale.atof(zahlung)
rueckgeld = zahlung - preis
print("Wechselgeld: ", locale.format_string("%.2f", rueckgeld))