---
title: Kontrola osnovnih sredstava
sidebar_position: 4
---

Ovaj izveštaj omogućava proveru usklađenosti između podataka u modulu **Osnovna sredstva** i podataka u **Glavnoj knjizi**, konto po konto.

Ukupni iznosi evidentirani u modulu osnovnih sredstava upoređuju se sa odgovarajućim iznosima u glavnoj knjizi radi provere njihove usklađenosti.

Rezultat izveštaja predstavlja listu konta (definisanih u kategorijama odabranih osnovnih sredstava i korišćenih u modulu osnovnih sredstava), zajedno sa ukupnim vrednostima evidentiranim u oba Fluentis modula i eventualnim razlikama između njih.

Obrazac za definisanje parametara izveštaja sličan je ostalim izveštajima dostupnim u modulu osnovnih sredstava.

Posebno su važna sledeća polja:

**Referentni datum**  
Podrazumevano je postavljen tekući datum i predstavlja krajnji datum do kojeg Fluentis uzima podatke iz modula osnovnih sredstava.
U obračun će biti uključena sva osnovna sredstva čiji su podaci evidentirani do tog datuma, dok će amortizacija za tekuću godinu biti obračunata samo do izabranog referentnog datuma.

**Period od – do**  
Obavezno polje za pokretanje izveštaja. Definiše period u kojem će se pretraživati podaci u glavnoj knjizi.
Za svaki podkonto korišćen u odabranim kategorijama osnovnih sredstava (konto osnovnog sredstva, konto ispravke vrednosti i konto amortizacije) obračunava se saldo u okviru zadatog vremenskog perioda.

Za proveru stanja na kraju poslovne godine preporučuje se sledeće podešavanje:

- **Referentni datum:** 31.12.gggg
- **Period:** od 01.01.gggg do 31.12.gggg

**Opcija Detalji operacija**  
Aktiviranjem ove opcije izveštaj prikazuje detalje po datumima, što omogućava lakšu proveru da li za određeni datum postoji odgovarajuće kretanje u kartici osnovnog sredstva.

Izveštaj prikazuje:

- listu konta korišćenih za odabrane kategorije osnovnih sredstava;
- vrednost evidentiranu u modulu **Osnovna sredstva**;
- vrednost evidentiranu u **Glavnoj knjizi**;
- eventualne razlike između ova dva iznosa.