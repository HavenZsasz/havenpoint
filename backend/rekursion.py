def zahlenVerdreher(zahl):
    if zahl > 5:
        zahl = zahl - 1
        print(zahl)
        zahl = zahlenVerdreher(zahl)
        return zahl
    return zahl

zahl = int(input())
print(zahlenVerdreher(zahl))