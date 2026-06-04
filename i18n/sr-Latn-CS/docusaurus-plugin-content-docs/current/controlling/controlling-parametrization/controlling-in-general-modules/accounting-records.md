---
title: Knjigovodstvene evidencije i funkcionalnosti u općem računovodstvu 
sidebar_position: 10
---

U svakoj knjigovodstvenoj evidenciji s predlošcima knjiženja koja ima aktiviran flag za upravljanje *Centrima troškova*, bit će vidljiv tab „Analitika“, posvećen vrednovanju analitičkog računovodstva po centru troškova. 

:::tip NAPOMENA
Flag za upravljanje *Projektima* prisutan u predlošcima knjiženja, ponašat će se različito ovisno o tome je li u poduzeću aktiviran *Kontroling*: 
- ako **nije aktiviran**, flag će omogućiti prikaz posebne kartice za upravljanje izravnim troškovima/prihodima projekta, koja je odvojena od analitičkog računovodstva. 
- ako **è attivo**, il flag renderà visibile il campo progetti all'interno della scheda di gestione a centri di costo dell'analitica: il campo sarà editabile solo per dimensioni legate alla dimensione progetti
:::

Unutar analitičke kartice bit će dostupna potpuna vidljivost i mogućnost uređivanja svih redaka koje ***FluentisERP*** automatski vrednuje prilikom unosa evidencije ili koje su prenesene iz izvornog dokumenta knjiženja. Bit će moguće mijenjati iznose, dodavati nove redove ili uklanjati postojeće, u skladu s konfiguracijskim pravilima dimenzije pojedinog centra, kontnog plana i uzročnosti.

Po završetku knjiženja, podaci će biti vidljivi u određenim procedurama i ispisima općeg računovodstva. 

## POSTUPCI OPĆEG RAČUNOVODSTVA 
- ***Postupak pregleda knjiženja po centru troška***: pretražuje zapise analitike unutar knjigovodstvenih evidencija, uz mogućnost uređivanja same evidencije. 

- ***Postupak pregleda stanja računa po mjestu troška***: omogućuje pregled ukupnih iznosa po centrima, kao i po centru i podkontu, uz zbrajanje unutar strukture kontnog plana. 

## IZVJEŠTAJI OPĆEG RAČUNOVODSTVA
Unutar grupe *Ispisa analitike* dostupni su sljedeći izvještaji:
- ispis ***Analize centara troškova***: omogućuje grupiranje podataka o zapisima analitike prema unaprijed definiranim svojstvima, povlačenjem u rešetku za grupiranje.  
- ispis ***Analize profitnih centara***: ovaj izvještaj sličan je prethodnom, ali čita podatke o zapisima  *Centara profita*.  
- ispis ***Analize knjiženja za centre troškova***: prikazuje detalje kretanja pojedinih podkonta, specificirajući u kojim su centrima evidentirana.  

- ispis ***kontrole neuravnoteženosti Centara troškova/Profitnog centra/Projekata***: u poduzećima s aktiviranim kontrolingom, ovaj ispis omogućuje provjeru usklađenosti podataka analitičkog računovodstva centara troškova, filtrirajući po određenoj [*dimenziji*](/docs/controlling/controlling-parametrization/controlling-specific-settings/dimension). Ako kontroling nije aktiviran, dostupni su flagovi za podešavanje pretrage neuravnoteženosti centara troškova, centara prihoda ili projektne sekcije knjigovodstvenih evidencija.  