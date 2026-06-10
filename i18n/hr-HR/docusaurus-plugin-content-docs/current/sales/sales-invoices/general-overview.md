---
title: Uvod
sidebar_position: 2
---

Modul **Izlaznih (prodajnih) računa (faktura)** omogućuje ručno ili automatsko kreiranje računa, dohvat cijena i popusta iz cjenika, unos prilagođenih detalja, upravljanje različitim vrstama računa i numeracijama te automatizaciju procesa kao što su knjiženje, izdavanje mjeničnih instrumenata i grupiranje otpremnica (DDT). Ispis je prilagodljiv, osiguravajući potpunu i sljedivu dokumentaciju.

## Potrebna konfiguracija modula prije korištenja:

- **[Numeracije](/docs/configurations/tables/fluentis-numerations)**: definiranje numeracija za račune.  
- **[Parametri prodajnih računa](/docs/configurations/parameters/sales/sales-invoices-parameters)**: specifične postavke za upravljanje računima.  
- **[Parametri grupiranja prodajnih računa](/docs/configurations/parameters/sales/invoice-grouping)**: konfiguracija za objedinjavanje više otpremnica u jednu fakturu.  
- **[Promet prodaje](/docs/configurations/tables/sales/sales-turnover)**: praćenje i upravljanje podacima o prodaji.  
- **[Vrste računa](/docs/configurations/tables/sales/invoices-type)**: kreiranje i klasifikacija vrsta računa.

Alternativno je dostupna procedura [**Brzi početak (Fast Start)**](/docs/guide/fast-start).

## Dokumenti kojima se upravlja

import Link from '@docusaurus/Link';

<div className="cardContainer">
    <div className="card">

### Izlazni računi

Omogućuje kreiranje *ručne* fakture izravnim unosom podataka ili *automatske* fakture generirane iz *narudžbi kupaca* ili iz *otpremnica (DDT)*.  

### Postupci

**Razduženje skladišta na osnovni računa**: artikli se automatski umanjuju na skladištu prema evidentiranim otpremama.  

**Izrada iz otpremnice**: generiranje računa za jedan ili više otpremnica prema operativnim potrebama.  

### Knjiženje

Izdane fakture automatski se knjiže, ažurirajući financijske evidencije i održavajući usklađenost s poslovnim knjigama poduzeća.  

### Ispisi

Prilagodljivi predlošci za svakog kupca.  

Uključivanje svih potrebnih komercijalnih i računovodstvenih podataka.  

    </div>
</div>