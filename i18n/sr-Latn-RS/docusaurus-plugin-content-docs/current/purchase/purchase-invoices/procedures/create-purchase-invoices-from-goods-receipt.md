---
title: Kreiranje ulaznog računa iz prijema robe
sidebar_position: 2
---

Postupak se pokreće putem **Nabavka > Ulazni računi > Procedure > Kreiranje ulaznog računa iz prijema robe**.

### Filteri

Ovaj odeljak omogućava primenu filtera za pretragu prijema robe i njihov izbor za naknadno kreiranje računa.

**Broj i datum računa**: obavezna polja; omogućavaju definisanje broja i datuma računa koji će biti generisan ovim postupkom.

*Specifična dugmad*:

> **Kreiranje ulaznog računa iz prijema robe**: nakon što su podešeni potrebni parametri i izabrani redovi za valorizaciju, račun se može kreirati korišćenjem ovog dugmeta.

### Parametri

Na ovoj kartici korisnik ima mogućnost podešavanja parametara za kreiranje računa.

Obavezna polja uključuju: [Tip ulaznog računa](/docs/configurations/tables/purchase/purchase-invoices-type), [PDV](/docs/configurations/tables/finance/vat-rates) i **Tip prometa nabavke**.

**Dodatne opcije**:

> **Ponovo obračunaj centre troškova/prihoda**: omogućava izbor da li će se prilikom kreiranja računa izvršiti ponovni obračun centara troškova i/ili prihoda. Ako je opcija aktivirana, sistem će prilikom kreiranja računa ponovo odrediti raspodelu po centrima troškova/prihoda prema važećim pravilima.

### Povrat

Omogućava pretragu, pregled i poništavanje izvršenih operacija.

Za poništavanje operacije potrebno je u gornjoj tabeli izabrati red koji odgovara računu koji želite da obrišete i kliknuti na dugme **Povrat** (*Rollback*) na alatnoj traci (*Ribbon Bar*).

Svakom redu u gornjoj tabeli (koja sadrži broj dokumenta, datum i korisnika koji je kreirao račun) odgovara jedan ili više redova u donjim tabelama **Računi** i **Prijem robe**.

U ove dve tabele korisnik može dvostrukim klikom na željeni red otvoriti i pregledati upravo kreirani račun ili odgovarajući prijem robe.