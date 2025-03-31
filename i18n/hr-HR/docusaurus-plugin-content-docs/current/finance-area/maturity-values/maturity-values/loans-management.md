---
title: Upravljanje bankarskim kreditima
sidebar_position: 2
---

### Uvod

Iz ovog obrasca moguće je pretraživati i unositi nove naplative hipoteke.

Upravljanje pasivnom hipotekom omogućuje detaljan unos svih relevantnih podataka, posebice plana otplate hipoteke, kako bi se naknadno pristupilo automatskom obračunu plaćanja obroka u predviđenim rokovima.

Glavna polja prikazana u maski također su prisutna u detaljima.

Za unos nove hipoteke pritisnite **Novo**.

Prvi obvezni podatak koji se upisuje je vrsta hipoteke, preko kombiniranog okvira koji upućuje na konkretnu tablicu Vrste hipoteka (dostupnoj i desnom tipkom i naredbom Otvori obrazac).

### Tablica vrsta kredita

:::note POLJA U TABLICI VRSTA HIPOTEKE
**Vrsta kredita**: šifra za opoziv podataka;

**Vrsta opisa bankovnog zajma**: prošireni opis podataka;

**Vrsta tijeka / opis**: polje za prisjećanje (u tablici *Vrste financijskog tijeka*) koja vrsta financijskog tijeka koja se odnosi na obradu novčanog tijeka će se kombinirati s ratama hipoteke, tako da se mogu automatski prikazati u obradi novčanog tijeka; 

**Predložak**: računovodstveni predložak kombiniran kako bi se omogućilo automatsko obračunavanje rata.
:::

### Novi detalji o kreditu

Ostala obavezna polja su opis ugovora i glavni računi za kasnije računovodstvene operacije

- Banka: za unos bankovnog računa na koji će se uplate rate;
- Debit: za unos debitnog računa s kojeg će biti otkazana **otplata glavnice** (npr. "Hipotekarne obveze");
- Kamate: za unos računa na koji će se obračunavati kamata svake rate;
- Troškovi: za unos računa na koji će se obračunavati provizija ili drugi troškovi svake rate;

Druga važna polja su plaćeni iznos, valuta (osobito ako se razlikuje od eura, aktivira relevantni tečaj)

**APR:** kamatna stopa koja se obračunava na hipoteku, podaci se koriste u postupku automatskog izračuna otplatnog plana.

Polje Verzija povezano je s tipkom  **Nova verzija** koji se nalazi u obrascu za pretraživanje koji omogućuje, čak i nakon umetanja amortizacijskog plana i obračuna nekih rata, izmjene u planu historiziranjem prethodne situacije.  

U detaljnu mrežu upisuje se amortizacijski plan koji se sastoji od svih očekivanih obroka, popunjavanja datuma (koji će biti uključeni u računovodstveni postupak), dijela kapitala i dijela kamata te pripadajućih provizija (u stupcu **Trošak**)

Sljedećim stupcima, označenim plavom bojom, upravlja Fluentis kako bi se istaknuo ukupni iznos rate, računovodstvo provedeno korištenjem odgovarajuće procedure i referenca na generirani računovodstveni zapis.

### Postupci dostupni na traci izbornika

Dostupni postupci, tj. izračun amortizacijskog plana, promjena datuma rate i ažuriranje troškova rate, isti su kao i oni dostupni za upravljanje leasingom, stoga pogledajte [**odgovarajuću stranicu**](/docs/finance-area/leasing/new).

### Knjiženje rata kredita

To se radi pomoću naredbi koje se nalaze na traci izbornika **Knjiženje** ( i **Vrati knjiženje** za poništavanje operacije)