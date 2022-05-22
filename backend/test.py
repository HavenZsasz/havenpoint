eingabe = input("Dein Name?")
if eingabe == "Tim":
    print("Guten Tag")
    mein_text = "Hallo Welt"
    print(mein_text)
    erstes_wort, zweites_wort = "Hallo", "Welt"
    ergebnis = erstes_wort + ", " + zweites_wort
    print(ergebnis)
    print(erstes_wort, zweites_wort, sep='*') #sep legt fest, wie die Worte getrennt werden -> default = LEERZEICHEN
    print(erstes_wort, end=" ")#end steuert Zeielnumbruch, default-Wert: "\n"
    print(zweites_wort)
    import sys
    print(sys.version_info)
    eggs = None
    spam = None

    print(eggs)
    multiString = "MultiString " * 10 #Strings sind hier tatsächlich mutliplizierbar (nur per Integer möglich
    
    print(multiString)
    #typecasting:
    typeCasting = int("42") + 42 #float() #str()
    