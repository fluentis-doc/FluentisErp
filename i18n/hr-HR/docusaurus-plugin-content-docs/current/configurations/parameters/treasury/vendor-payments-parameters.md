---
title: Parametri plaćanja dobavljača 
sidebar_position: 3
---

Parametri modula **Plaćanja Dobavljača** nalaze se u **Parametri > Riznica**.

U parametrima modula Plaćanja dobavljača možete unaprijed postaviti zadane elemente koji će se predložiti u procedurama modula. 

- **Putanja praćenja doznake u gotovini**: postavka standardne direktorije za kreiranje telematičkog zapisa za bankovne transfere u Italiji. Preporučuje se kreiranje zajedničke mrežne direktorije unutar servera, kako bi se moglo pristupiti sa svih radnih mjesta unutar procedure. PAŽNJA: polje je obavezno, ali ***FluentisERP*** koristi sustav integriranog upravljanja dokumentima za pohranu .xml datoteke telematičkog zapisa za popise plaćanja. Datoteka će se stoga moći preuzeti izravno iz obrasca popisa plaćanja.
- **HUB aplikacijski centar:**: zastarjelo 
- **Koristite tečaj iz dokumenta**: ako je ova opcija uključena, kod otvorenih stavki u stranoj valuti protuvrijednost u valuti poduzeća bit će obračunata po povijesnom tečaju iz dokumenta, bez evidentiranja tečajnih razlika.  
- **Umetnite banku prisutnu u registru dobavljača**: s aktivnim flagom bit će nametnuta upotreba banke podrške unesene u kartonu dobavljača u odnosu na banku podrške definiranu u računovodstvenoj evidenciji, a koja je povezana s otvorenom stavkom, putem mreže Tipovi Plačanja u kartonu. Parametar je vidljiv (i ponovno deaktivabilan svaki put) u postupku Automatsko Kreiranje Plaćanja Dobavljačima. Međutim, nije vidljiv ako se stvara nova isplata (Plaćanja Dobavljačima > Kreiraj Plaćanje Dobavljaču) i stoga se u tom slučaju mora upravljati odavde.    
- **Knjiženje iz plaćanja dobavljača**: postavljeno kao zadano za knjiženje operacije iz modula Plaćanja dobavljačima i isključivanje zatvaranja stavke prisutne u popisu za knjiženje.  
- **Upravljanje referencama IBAN-a**: postavka obveze upravljanja IBAN kodovima: u ovom slučaju, trag neće biti kreiran ako nedostaju IBAN-ovi za neka plaćanja u popisu.  
- **Tipovi plaćanja za primljene obavijesti**: u slučaju da se uvoze obavijesti o pasivnim Riba, potrebno je navesti zadanu vrstu plaćanja koja će se dodijeliti stvorenom popisu.  