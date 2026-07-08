---
title: Uvod u upravljanje lotovima i serijskim brojevima
sidebar_position: 0
sidebar_label: Uvod
description: Pregled upravljanja lotovima i serijskim brojevima u sistemu Fluentis ERP, sa informacijama o konfiguraciji, sledljivosti i povezivanju sa modulima skladišta.
schema: TechArticle
tags: [Fluentis ERP, lotovi, serijski brojevi, skladište, sledljivost]
last_update:
  author: Fluentis Documentation Team
  date: 2025-11-07
author: Fluentis Documentation Team
keywords: [Fluentis ERP, lotovi, serijski brojevi, skladište, sledljivost, šifarnici lotova]
related: [/docs/logistics/lots-serial-numbers/lots-register, /docs/logistics/lots-serial-numbers/serial-number-register]
---

# Uvod u upravljanje lotovima i serijskim brojevima

U logističkom upravljanju u sistemu **Fluentis ERP** artikli se mogu pratiti i njima se može upravljati na dva glavna načina: putem **lotova** i **serijskih brojeva**.

**Lotovi** predstavljaju homogene grupe artikala, kako pri ulazu tako i pri izlazu, i omogućavaju efikasno upravljanje zalihama uz istovremeno osiguravanje potpune sledljivosti tokom proizvodnog i distributivnog procesa.  
Svaki lot identifikovan je **jedinstvenim kodom** koji omogućava pronalaženje detaljnih informacija, kao što su karakteristike, datumi proizvodnje, rokovi važenja i podaci o usklađenosti sa propisima.

**Serijski brojevi**, sa druge strane, jedinstveno identifikuju svaki pojedinačni artikl i posebno su korisni za artikle **visoke vrednosti** ili **kritične artikle**. Ovaj pristup omogućava precizno i detaljno upravljanje, korisno za praćenje i evidentiranje svakog pojedinačnog artikla u skladištu.  
Integracija oba sistema unutar platforme Fluentis poboljšava sledljivost, optimizuje upravljanje zalihama i povećava ukupnu operativnu efikasnost.

## Dokumenti kojima se upravlja

import Link from '@docusaurus/Link';

<div className="cardContainer">
  <div className="card">
  
### <Link to="/docs/logistics/lots-serial-numbers/lots-register">Šifarnici lotova</Link>

**Šifarnici lotova** u sistemu Fluentis predstavljaju ključan alat za upravljanje lotovima i njihovu sledljivost.  
Korisnici mogu pretraživati i pregledati detalje svakog lota jednostavnim dvostrukim klikom, čime se olakšava praćenje zaliha.  
Sistem takođe omogućava upravljanje **različitim statusima lota**, koji utiču na operativnu raspoloživost i kretanje artikala.

  </div>

  <div className="card">
  
### <Link to="/docs/logistics/lots-serial-numbers/serial-number-register">Šifarnici serijskih brojeva</Link>

**Šifarnici serijskih brojeva** namenjeni su upravljanju serijskim brojevima i omogućavaju **jedinstvenu sledljivost** svakog pojedinačnog artikla putem posebnog identifikacionog koda.  
Predstavljaju ključan alat za **sledljivost** i **sigurnost**, posebno za artikle visoke vrednosti ili one koji podležu kontroli kvaliteta.  
Sadrže i podatke o povezanim **dokumentima ulaza i izlaza**, čime pružaju celovit pregled upotrebe artikla tokom vremena i podržavaju **usklađenost sa propisima**.

  </div>
</div>

## Kako započeti sa upotrebom

### Šifarnici lotova

Za početak upotrebe šifarnika lotova:

1. Definišite [**Tip koda lota**](/docs/configurations/tables/logistics/lot-codes-types).  
2. Postavite parametre na kartici [**Lotovi i serijski brojevi**](/docs/erp-home/registers/items/create-new-item) u šifarnicima artikla.  
3. Ispravno konfigurišite [**Skladišne predloške**](/docs/configurations/tables/logistics/warehouse-templates) koji će se upotrebljavati.  
4. Kreirajte dokument ili [**Skladišnu evidenciju**](/docs/logistics/warehouse/stock-records/record) ulaza ili izlaza sa artiklom kojim se upravlja po lotovima kako bi se rezultat prikazao u šifarnicima lotova.

### Šifarnici serijskih brojeva

Za konfiguraciju šifarnika serijskih brojeva:

1. Definišite [**Tip koda serijskog broja**](/docs/configurations/tables/logistics/serial-numbers-code-type).  
2. Postavite parametre na kartici [**Lotovi i serijski brojevi**](/docs/erp-home/registers/items/create-new-item) u šifarnicima artikla.  
3. Definišite odgovarajuće [**Skladišne predloške**](/docs/configurations/tables/logistics/warehouse-templates).  
4. Kreirajte dokument ili [**Skladišnu evidenciju**](/docs/logistics/warehouse/stock-records/record) ulaza ili izlaza sa artiklom kojim se upravlja po serijskim brojevima kako bi se rezultat prikazao u odgovarajućim šifarnicima.

## Povezivanje sa drugim modulima

Funkcionalnosti upravljanja lotovima i serijskim brojevima usko su povezane sa sledećim oblastima:

- [**Šifarnici artikala**](/docs/erp-home/registers/items/create-new-item)  
- [**Skladišne evidencije**](/docs/logistics/warehouse/stock-records/record)  
- Svi dokumenti koji generišu skladišna kretanja **ulaza** i **izlaza**

## Sažetak i dodatne informacije

Upravljanje **lotovima** i **serijskim brojevima** u sistemu Fluentis ERP omogućava potpunu sledljivost i preciznu kontrolu zaliha, čime se poboljšava kvalitet logističkih i proizvodnih procesa.  
Ispravnim konfigurisanjem parametara artikala, skladišnih temeljnica i tipova kodova preduzeće može osigurati efikasno i sigurno upravljanje u skladu sa važećim propisima.

**Dodatne informacije:**
- [Šifarnici lotova](/docs/logistics/lots-serial-numbers/lots-register)  
- [Šifarnici serijskih brojeva](/docs/logistics/lots-serial-numbers/serial-number-register)  
- [Skladišni predlošci](/docs/configurations/tables/logistics/warehouse-templates)