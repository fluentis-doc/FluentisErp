---
title: Uredi komponente
sidebar_position: 6
---

Ovaj obrazac omogućava masovne izmjene sastavnica koje su prethodno kreirane, koristeći tri različite procedure, u zavisnosti od vrste izmjene koju želite izvršiti: **Zamjena/Uređivanje**, **Umetanje** (dodavanje) i **Otkazivanje** (uklanjanje).

### Zamjena i uređivanje

Odabirom opcije **Zamjena/Uredi** iz padajućeg izbornika **Vrsta upravljanja**, potrebno je unijeti komponentu u područje filtera koristeći **Pomoć za izbor artikla** pored polja **Komponenta**.

Kao filter moguće je odabrati isključivo jedan artikal. Nije moguće pretraživati samo po klasi artikla ili dijelu šifre odnosno opisa. Nakon definisanja kriterija pretrage i klika na dugme **Traži**, u tabeli će biti prikazane sve sastavnice koje sadrže komponentu unesenu u filter, čime se izvršava postupak *Sažimanja komponente*.

U tabeli rezultata prikazuju se klasa, šifra, opis i varijanta sastavnice, datum početka i završetka važenja veze između komponente odabrane u filteru i prikazane sastavnice, kao i količina komponente i njena mjerna jedinica u okviru veze sastavnica–komponenta.

Odaberite jednu ili više sastavnica na kojima želite izvršiti postupak **Zamjena/Uredi**. Višestruki odabir moguć je kombinacijom tipki **CTRL + klik**.

U donjem dijelu prozora potrebno je odabrati novu komponentu koja će zamijeniti postojeću komponentu iz filtera.

Za odabir nove komponente moguće je koristiti **Pomoć za izbor artikla**, pri čemu je potrebno unijeti podatke o **klasi**, **šifri**, **opisu** i po potrebi **varijanti** nove komponente. Obavezno je unijeti i **količinu**, kao i odrediti da li je ona **fiksna** ili **varijabilna**. Po potrebi je moguće definisati i **mjernu jedinicu upotrebe**, **količinu otpada**, **pozitivno i negativno odstupanje (%)**, **datum početka i završetka važenja**, **prioritet** i **napomene** nove komponente.

Pomoću opcija **Alternative** i **Faza** moguće je odrediti da li će se zajedno s novom komponentom prenijeti i njene alternative, odnosno faze proizvodnog procesa.

Po potrebi je moguće aktivirati i opcije **Dozvoljeno kretanje** i **Fiktivni nivo**. Više informacija o ovim poljima nalazi se u dokumentu [Upravljanje sastavnicama](/docs/erp-home/registers/production/bill-of-materials/assemblies/structure-management).

Ovim postupkom moguće je odabrati istu komponentu koja je unesena u filter. U tom slučaju neće biti izvršena zamjena komponente, već samo izmjena postojećih podataka te komponente u odabranim sastavnicama.

Nakon unosa svih potrebnih podataka, postupak **Zamjena/Uređivanje** pokreće se klikom na dugme za izvršavanje ![](/img/neutral/common/execute.png).

### Umetanje

Odabirom opcije **Umetanje** iz padajućeg izbornika **Vrsta upravljanja**, potrebno je unijeti **Sastavnicu** u području filtera u koju želite dodati novu komponentu.

U ovom slučaju nije potrebno filtrirati samo jedan artikal, pa je moguće kao kriterij pretrage unijeti samo klasu artikla ili dio šifre odnosno opisa (polja za filter ista su kao i kod postupka **Zamjena/Uredi**). Nakon toga, klikom na dugme **Traži**, u tabeli će biti prikazane sve sastavnice koje odgovaraju definisanim kriterijima pretrage. U tabeli rezultata prikazuju se klasa, šifra, opis i varijanta sastavnice.

Odaberite jednu ili više prikazanih sastavnica na kojima želite izvršiti postupak **Umetanja**. Višestruki odabir moguć je kombinacijom tipki **CTRL + klik**.

U donjem dijelu prozora potrebno je odabrati novu komponentu koju želite dodati u odabrane sastavnice.

Za odabir nove komponente moguće je koristiti **Pomoć za izbor artikla**, pri čemu je potrebno unijeti podatke o **klasi**, **šifri**, **opisu** i po potrebi **varijanti** nove komponente. Obavezno je unijeti **količinu** i odrediti da li je ona **fiksna** ili **varijabilna**. Po potrebi je moguće definisati i **mjernu jedinicu upotrebe**, **količinu otpada**, **pozitivno i negativno odstupanje (%)**, **datum početka i završetka važenja**, **prioritet** i **napomene** nove komponente.

Pomoću opcija **Alternative** i **Faza** moguće je odrediti da li će zajedno s novom komponentom biti prenesene i njene alternative, odnosno faze proizvodnog procesa.

Po potrebi je moguće aktivirati i opcije **Dozvoljeno kretanje** i **Fiktivni nivo**. Više informacija o ovim poljima nalazi se u dokumentu [Upravljanje sastavnicama](/docs/erp-home/registers/production/bill-of-materials/assemblies/structure-management).

Nakon unosa svih potrebnih podataka, postupak **Umetanja** pokreće se klikom na dugme za izvršavanje ![](/img/neutral/common/execute.png).

### Otkazivanje

Odabirom opcije **Otkaži** iz padajućeg izbornika **Vrsta upravljanja**, potrebno je u polje **Komponenta** unijeti komponentu koju želite ukloniti iz sastavnica, a po potrebi unijeti i **Sastavnicu** (ili njenu klasu, odnosno dio šifre ili opisa) iz koje će komponenta biti uklonjena.

Klikom na dugme **Traži** na *ribbon* traci, u tabeli će biti prikazane sve sastavnice koje odgovaraju definisanim kriterijima pretrage. U rezultatima se prikazuju klasa, šifra, opis i varijanta sastavnice, datum početka i završetka važenja veze između odabrane komponente i sastavnice, kao i količina komponente i njena mjerna jedinica u okviru veze sastavnica–komponenta.

Odaberite jednu ili više prikazanih sastavnica na kojima želite izvršiti postupak **Otkazivanja**. Višestruki odabir moguć je kombinacijom tipki **CTRL + klik**.

Kod postupka **Otkazivanja**, donji dio prozora nije dostupan za uređivanje.

Nakon odabira komponente koju želite ukloniti, postupak **Otkazivanja** pokreće se klikom na dugme za izvršavanje ![](/img/neutral/common/execute.png).

### Specifična dugmad

> **Obrada**: pokreće postupak odabran u padajućem izborniku **Vrsta upravljanja**, odnosno **Zamjena/Uređivanje**, **Umetanje** ili **Otkazivanje**.

Za sve funkcionalnosti koje nisu detaljno opisane u ovom dokumentu, a odnose se na zajedničko ponašanje obrazaca, pogledajte dokument [Funkcionalnosti, dugmad i zajednička polja](/docs/guide/common).