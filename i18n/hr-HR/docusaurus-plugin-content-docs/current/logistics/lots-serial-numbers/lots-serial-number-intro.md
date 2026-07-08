---
title: Uvod u upravljanje lotovima i serijskim brojevima
sidebar_position: 0
sidebar_label: Uvod
description: Pregled upravljanja lotovima i serijskim brojevima u sustavu Fluentis ERP, s informacijama o konfiguraciji, sljedivosti i povezivanju s modulima skladišta.
schema: TechArticle
tags: [Fluentis ERP, lotovi, serijski brojevi, skladište, sljedivost]
last_update:
  author: Fluentis Documentation Team
  date: 2025-11-07
author: Fluentis Documentation Team
keywords: [Fluentis ERP, lotovi, serijski brojevi, skladište, sljedivost, šifarnici lotova]
related: [/docs/logistics/lots-serial-numbers/lots-register, /docs/logistics/lots-serial-numbers/serial-number-register]
---

# Uvod u upravljanje lotovima i serijskim brojevima

U logističkom upravljanju u sustavu **Fluentis ERP** artikli se mogu pratiti i njima se može upravljati na dva glavna načina: putem **lotova** i **serijskih brojeva**.

**Lotovi** predstavljaju homogene skupine artikala, kako pri ulazu tako i pri izlazu, te omogućuju učinkovito upravljanje zalihama uz istodobno osiguravanje potpune sljedivosti tijekom proizvodnog i distribucijskog procesa.  
Svaki lot identificiran je **jedinstvenim kodom** koji omogućuje dohvat detaljnih informacija, kao što su karakteristike, datumi proizvodnje, rokovi valjanosti i podaci o usklađenosti s propisima.

**Serijski brojevi**, s druge strane, jedinstveno identificiraju svaki pojedini artikl te su posebno korisni za artikle **visoke vrijednosti** ili **kritične artikle**. Ovaj pristup omogućuje precizno i detaljno upravljanje, korisno za praćenje i evidentiranje svakog pojedinog artikla u skladištu.  
Integracija obaju sustava unutar platforme Fluentis poboljšava sljedivost, optimizira upravljanje zalihama i povećava ukupnu operativnu učinkovitost.

## Dokumenti kojima se upravlja

import Link from '@docusaurus/Link';

<div className="cardContainer">
  <div className="card">
  
### <Link to="/docs/logistics/lots-serial-numbers/lots-register">Šifarnici lotova</Link>

**Šifarnici lotova** u sustavu Fluentis predstavljaju ključan alat za upravljanje lotovima i njihovu sljedivost.  
Korisnici mogu pretraživati i pregledavati detalje svakog lota jednostavnim dvostrukim klikom, čime se olakšava praćenje zaliha.  
Sustav također omogućuje upravljanje **različitim statusima lota**, koji utječu na operativnu raspoloživost i kretanje artikala.

  </div>

  <div className="card">
  
### <Link to="/docs/logistics/lots-serial-numbers/serial-number-register">Šifarnici serijskih brojeva</Link>

**Šifarnici serijskih brojeva** namijenjeni su upravljanju serijskim brojevima i omogućuju **jedinstvenu sljedivost** svakog pojedinog artikla putem posebnog identifikacijskog koda.  
Predstavljaju ključan alat za **sljedivost** i **sigurnost**, posebno za artikle visoke vrijednosti ili one koji podliježu kontroli kvalitete.  
Sadrže i podatke o povezanim **dokumentima ulaza i izlaza**, čime pružaju cjelovit pregled upotrebe artikla tijekom vremena i podržavaju **usklađenost s propisima**.

  </div>
</div>

## Kako započeti s upotrebom

### Šifarnici lotova

Za početak upotrebe sifarnika lotova:

1. Definirajte [**Tip koda lota**](/docs/configurations/tables/logistics/lot-codes-types).  
2. Postavite parametre na kartici [**Lotovi i serijski brojevi**](/docs/erp-home/registers/items/create-new-item) u šifarnicima artikla.  
3. Ispravno konfigurirajte [**Skladišni predlošci**](/docs/configurations/tables/logistics/warehouse-templates) koje će se upotrebljavati.  
4. Izradite dokument ili [**Skladišnu evidenciju**](/docs/logistics/warehouse/stock-records/record) ulaza ili izlaza s artiklom kojim se upravlja po lotovima kako bi se rezultat prikazao u šifarnicima lota.

### Šifarnici serijskih brojeva

Za konfiguraciju šifarnika serijskih brojeva:

1. Definirajte [**Tip koda serijskog broja**](/docs/configurations/tables/logistics/serial-numbers-code-type).  
2. Postavite parametre na kartici [**Lotovi i serijski brojevi**](/docs/erp-home/registers/items/create-new-item) u šifarnicima artikla.  
3. Definirajte odgovarajuće [**Skladišni predlošci**](/docs/configurations/tables/logistics/warehouse-templates).  
4. Izradite dokument ili [**Skladišnu evidenciju**](/docs/logistics/warehouse/stock-records/record) ulaza ili izlaza s artiklom kojim se upravlja po serijskim brojevima kako bi se rezultat prikazao u odgovarajućim šifarnicima.

## Povezivanje s drugim modulima

Funkcionalnosti upravljanja lotovima i serijskim brojevima usko su povezane sa sljedećim područjima:

- [**Šifarnici artikala**](/docs/erp-home/registers/items/create-new-item)  
- [**Skladišne evidencije**](/docs/logistics/warehouse/stock-records/record)  
- Svi dokumenti koji generiraju skladišne pokrete **ulaza** i **izlaza**

## Sažetak i dodatne informacije

Upravljanje **lotovima** i **serijskim brojevima** u sustavu Fluentis ERP omogućuje potpunu sljedivost i preciznu kontrolu zaliha, čime se poboljšava kvaliteta logističkih i proizvodnih procesa.  
Ispravnim konfiguriranjem parametara artikala, skladišnih temeljnica i tipova kodova poduzeće može osigurati učinkovito i sigurno upravljanje u skladu s važećim propisima.

**Dodatne informacije:**
- [Šifarnici lotova](/docs/logistics/lots-serial-numbers/lots-register)  
- [Šifarnici serijskih brojeva](/docs/logistics/lots-serial-numbers/serial-number-register)  
- [Skladišni predlošci](/docs/configurations/tables/logistics/warehouse-templates)