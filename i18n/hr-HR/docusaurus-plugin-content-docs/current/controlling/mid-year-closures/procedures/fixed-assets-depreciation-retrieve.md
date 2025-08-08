---
title: Povrat amortizacije osnovnog sredstva
sidebar_position: 3
---

Unutar modula za privremena zatvaranja, nakon što je stvoreno privremeno zatvaranje, moguće je automatski vrednovati amortizaciju koja pripada ekonomskom razdoblju postavljenom unutar zatvaranja.

## Amortizacija

Pri otvaranju obrasca, u donjem dijelu obavezno je postaviti sljedeće parametre:

- Referentno **zatvaranje** (iz kojeg se čita raspon datuma ekonomske pripadnosti);

- **Datum knjiženja** zapisa unutar izvanknjigovodstvenih knjiženja;

- **Tip** temeljnice  koji će se koristiti (ovdje je također potrebno da predložak omogućuje upravljanje troškovnim centrima/projektima kako bi se mogli vrednovati unutar knjiženja).

Flag **Pojedinačno zapisivanje** omogućuje stvaranje jednog izvanknjigovodstvenog knjiženja unutar koje će biti sadržani različita podkonta amortizacije/fonda.

Važno je napomenuti da se unutar gornjih filtera za pretraživanje nalazi flag za filtriranje osnovnih sredstva koje ili pripadaju "inkrementalnim" kategorijama ili ne pripadaju.

Pokretanjem pretrage podataka, program će popuniti tablicu obrasca podacima o amortizacijama koje treba izračunati,  proporcionalno broju dana ekonomske pripadnosti zatvaranja. Konkretno, za svako osnovno sredstvo provjerava se je li amortizacija za godinu (iz godine postavljene kao parametar zatvaranja) već unesena u karticu sredstva. Ako je unesena, vrijednost
će se ponovno proporcionalno raspodijeliti na broj dana; ako nije unesena, provest će se simulacija izračuna (na temelju parametara kategorije kojoj pripada i preostalog iznosa za amortizaciju), a zatim će se i ta vrijednost proporcionalno raspodijeliti na broj dana ekonomske pripadnosti.

Potrebno je označiti sve redove u tablici kako bi se mogli vrednovati unutar zatvaranja.

## Povrat

U ovom dijelu moguće je poništiti prethodno izvršenu operaciju u kartici *Amortizacija*.