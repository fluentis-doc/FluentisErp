---
title: Kreiranje ulaznog računa iz prijema robe
sidebar_position: 2
---

Postupak se pokreće putem **Nabava > Ulazni računi > Procedure > Kreiranje ulaznog računa iz prijema robe**

### Filtri

Ova sekcija pruža mogućnost primjene filtara za pretraživanje zaprimljenih proizvoda i odabir za kasnije stvaranje računa.


**Broj i datum računa**: obvezna polja; omogućuju specificiranje broja i datuma računa koji će se generirati postupkom.

*Posebni gumbi*:

> **Kreiranje ulaznog računa iz prijema robe**: nakon što su postavljeni potrebni parametri i odabrani retci za valorizaciju, račun se može kreirati korištenjem ovog gumba.

### Parametri

U ovoj kartici korisnik ima mogućnost konfiguriranja parametara za stvaranje računa.

Obvezna polja uključuju: [Vrsta ulaznog računa](/docs/configurations/tables/purchase/purchase-invoices-type), [PDV](/docs/configurations/tables/finance/vat-rates) i Vrsta prometa nabave.

**Dodatne opcije**:

> Preračunaj centre troškova/prihoda: omogućuje odabir želi li se prilikom kreiranja računa izvršiti ponovni izračun centara troškova i/ili prihoda. Ako je opcija aktivirana, sustav će pri kreiranju računa ponovno odrediti raspodjelu po centrima troškova/prihoda prema važećim pravilima i

### Povrat

Pruža mogućnost pretraživanja, pregleda i poništavanja provedenih operacija.

Za poništavanje operacije potrebno je u gornjoj tablici odabrati redak koji odgovara računu koji se želi obrisati te kliknuti na gumb „Povrat” (Rollback) na alatnoj traci (Ribbon Bar).
Svakom retku u gornjoj tablici (koja sadrži broj dokumenta, datum i korisnika koji je kreirao račun) odgovara jedan ili više redaka u donjim tablicama Računi i Zaprimanja robe.
U tim dvjema tablicama korisnik može dvostrukim klikom na željeni redak otvoriti i pregledati upravo kreirani račun ili pripadajuće zaprimanje robe.