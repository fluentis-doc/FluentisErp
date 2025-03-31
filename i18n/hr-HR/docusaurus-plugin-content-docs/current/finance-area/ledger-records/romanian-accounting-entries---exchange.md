---
title: Zatvaranje tečajnih razlika 
sidebar_position: 2
---

Ovaj obrazac omogućuje da se automatski izračuna, na određeni datum, tečajna razlike za valutne račune (na primjer kredite i zaduženja ili bankovne račune) i da se generiraju odgovarajući računovodstveni unose.  

**Prije svega, potrebno je odabrati valutu** (jednu po jednu) prema kojoj će se vršiti izračun, kao i (pomoću izbornika s desne strane) vrstu izračuna:

- Raspoloživost: uzima u obzir stanja (npr. banka)
- Dospijeća plaćanja: čita dugove i potražnje prema kupcima/dobavljačima
    - Aktivno: kupci
    - Pasiva: dobavljači 

Konto/podkotno i odjel su izborni filtri za sužavanje pretraživanja.  

---

U središnjem pregledu prikazuju se pojedinosti pretraživanih pozicija, iznos izražen u stranoj valuti, povijesna vrijednost u eurima - izračunata kao algebarski zbroj svih kretanja, trenutna vrijednost preračunata prema tečaju prikazanom niže te pozitivna ili negativna tečajna razlika.  

---

U području *Parametri* definiran je niz parametara s kojima će se provoditi knjiženja:

**Privremeno**: omogućuje generiranje tečajne razlike kao privremeni računovodstveni unos;

**Tečaj**: broj s kojim se izračunava ažurirana vrijednost. Program ga automatski predlaže (iz tablice mjenjačnice), ali ga korisnik može promijeniti;

**Datum** i **Broj** **dokumenta** i **Knjigovodstveni predložak** koji se odnosi na knjigovodstveno knjiženje koje treba urediti. **Uneseni datum također predstavlja datum do kojeg su odabrani računovodstveni zapisi**;

**Konto prihoda** i **rashoda**: koriste se za evidentiranje tečajnih razlika; 

---

U kartici *Poništavanje knjiženja korekcije tečaja* moguće je pregledati i vratiti rezultat obavljenih knjiženja na temelju postavljenih filtera (Od datuma/Do datuma, račun).  



| Funkcija | Značenje |
| --- | --- |
| Traži | Tipka za traženje konta koje treba podmiriti na temelju unesenih filtara. |
| Knjiženje | Tipka za izvođenje operacije knjiženja u području filtra i koji odgovaraju parametrima unesenim u relevantno područje. |
| Povrati usklađenje | Tipka za brisanje knjiženja  odabranih u pregledu rezultata. |






