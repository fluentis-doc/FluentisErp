---
title: Obračun amortizacije osnovnih sredstava
sidebar_position: 3
---

U okviru modula Privremena zatvaranja, nakon kreiranja privremenog zatvaranja, moguće je automatski obračunati amortizaciju koja pripada ekonomskom periodu definisanom unutar zatvaranja.

## Amortizacija

Prilikom otvaranja obrasca, u donjem delu potrebno je definisati sledeće parametre:

- Referentno **zatvaranje** (iz kojeg se preuzima period ekonomske pripadnosti);

- **Datum knjiženja** zapisa u vanbilansnim knjiženjima;

- **Tip temeljnice** koji će se koristiti (predložak mora omogućavati upravljanje troškovnim centrima/projektima kako bi oni mogli biti vrednovani u okviru knjiženja).

Opcija **Pojedinačno knjiženje** omogućava kreiranje jednog vanbilansnog knjiženja koje sadrži različita podkonta amortizacije i akumulirane amortizacije.

Važno je napomenuti da se među filterima za pretragu nalazi opcija za filtriranje osnovnih sredstava koja pripadaju ili ne pripadaju „inkrementalnim“ kategorijama.

Pokretanjem pretrage podataka program popunjava tabelu obrasca podacima o amortizaciji koju je potrebno obračunati, proporcionalno broju dana ekonomske pripadnosti zatvaranja. Konkretno, za svako osnovno sredstvo proverava se da li je amortizacija za godinu (iz godine definisane u parametrima zatvaranja) već evidentirana na kartici sredstva. Ukoliko jeste, vrednost se proporcionalno raspoređuje prema broju dana. Ukoliko nije, izvršava se simulacija obračuna (na osnovu parametara kategorije kojoj sredstvo pripada i preostale vrednosti za amortizaciju), nakon čega se i ta vrednost proporcionalno raspoređuje prema broju dana ekonomske pripadnosti.

Potrebno je označiti sve redove u tabeli kako bi mogli biti uključeni u obračun i vrednovanje unutar zatvaranja.

## Poništavanje

U ovom delu moguće je poništiti prethodno izvršenu operaciju iz kartice *Amortizacija*.