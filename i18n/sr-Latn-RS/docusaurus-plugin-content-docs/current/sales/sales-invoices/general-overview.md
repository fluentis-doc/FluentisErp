---
title: Uvod
sidebar_position: 2
---

Modul **Izlaznih (prodajnih) faktura** omogućava ručno ili automatsko kreiranje faktura, preuzimanje cena i popusta iz cenovnika, unos prilagođenih podataka, upravljanje različitim vrstama faktura i numeracijama, kao i automatizaciju procesa poput knjiženja, izdavanja meničnih instrumenata i grupisanja otpremnica (DDT). Ispis je prilagodljiv, čime se obezbeđuje potpuna i sledljiva dokumentacija.

## Potrebna konfiguracija modula pre korišćenja:

- **[Numeracije](/docs/configurations/tables/fluentis-numerations)**: definisanje numeracija za fakture.  
- **[Parametri prodajnih faktura](/docs/configurations/parameters/sales/sales-invoices-parameters)**: specifična podešavanja za upravljanje fakturama.  
- **[Parametri grupisanja prodajnih faktura](/docs/configurations/parameters/sales/invoice-grouping)**: konfiguracija za objedinjavanje više otpremnica u jednu fakturu.  
- **[Promet prodaje](/docs/configurations/tables/sales/sales-turnover)**: praćenje i upravljanje podacima o prodaji.  
- **[Vrste faktura](/docs/configurations/tables/sales/invoices-type)**: kreiranje i klasifikacija vrsta faktura.

Alternativno je dostupna procedura [**Brzi početak (Fast Start)**](/docs/guide/fast-start).

## Dokumenti kojima se upravlja

import Link from '@docusaurus/Link';

<div className="cardContainer">
    <div className="card">

### Izlazne fakture

Omogućava kreiranje *ručne* fakture direktnim unosom podataka ili *automatske* fakture generisane iz *narudžbina kupaca* ili iz *otpremnica (DDT)*.

### Procedure

**Razduženje skladišta na osnovu fakture**: artikli se automatski razdužuju sa skladišta prema evidentiranim isporukama.

**Kreiranje iz otpremnice**: generisanje fakture za jednu ili više otpremnica prema operativnim potrebama.

### Knjiženje

Izdate fakture automatski se knjiže, ažurirajući finansijske evidencije i održavajući usklađenost sa poslovnim knjigama preduzeća.

### Ispisi

Prilagodljivi obrasci ispisa za svakog kupca.

Uključivanje svih potrebnih komercijalnih i računovodstvenih podataka.

    </div>
</div>