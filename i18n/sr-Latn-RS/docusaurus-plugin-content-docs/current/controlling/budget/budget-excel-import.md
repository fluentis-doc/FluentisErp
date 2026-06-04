---
title: Uvoz excel datoteka za izvanproračunske evidencije 
sidebar_position: 3
---

U izborniku alata, unutar grupe **Bizlink**, nalaze se ***uvozi na zahtjev*** uključujući ***uvoz Excel***: datoteka: među dostupnim opcijama nalazi se uvoz s šifrom **OffBalanceRecordsForArea**,(Vanbilančna knjiženja (kontroling)), koji omogućuje jednostavan uvoz izvanbilančnih zapisa za određeno područje. To su npr. knjiženja naknada odbora ili knjiženja koja služe za razradu detalja budžeta za određeni period.  

Dostupna polja za unos:
- ***Datum unosa***: obavezno, datum koji će biti dodijeljen registraciji.

- ***Datum obračuna***: obavezno, uvijek isti kao prethodno navedeni datum zapisa. 

- ***Broj zapisa***: obavezno,  preporučuje se koristiti visoke brojeve kako bi se izbjeglo preklapanje s postojećim zapisima (npr. onima generiranim automatskim postupcima poput obračuna amortizacije u kontrolingu ili knjiženja zaliha u privremenim zatvaranjima). 

- ***Predložak***: obavezno, mora biti povezan s centrima troškova.

- ***Konto i podkonto***: obavezno, konto/podkonto koji se dodjeljuje transakciji.  

- [***CENTAR TROŠKA***](/docs/controlling/controlling-parametrization/controlling-specific-settings/cost-centers): obavezno, poslovni centar koji se dodjeljuje zapisu. 

- ***Tip – Interni broj – Godina – WBS broj***: opcionalno, ako se registracija povezuje s projektom. 

- ***Duguje***: obavezno, može biti 0. 

- ***Potražuje***: obavezno, može biti 0. 

- ***Od datuma obračuna***: nije obavezno, ali se preporučuje za ekonomske transakcije.

- ***Do datuma obračuna***: nije obavezno, ali se preporučuje za ekonomske transakcije. 

- ***Divisione***: nije obavezno, ako nije navedeno, koristi se odjel postavljen u parametrima uvoza 

Nakon unosa svih potrebnih podataka, moguće je validirati raspon unesenih podataka pomoću (tipke ***Validiraj raspon podataka***), kako bi se provjerilo ima li nedostajućih ili pogrešnih šifri. Zatim se može pokrenuti uvoz podataka klikom na tipku ***Uvezite Excel tablicu***: pri čemu će biti zatražena specifikacija **Odjela**  i referentne valute operacije.


