---
title: PRODAJA
sidebar_position: 1
---

Područje **Prodaja** u sustavu **Fluentis ERP** osmišljeno je za učinkovito upravljanje cjelokupnim prodajnim procesom, pružajući modularnu i međusobno povezanu strukturu koja podržava sve aktivnosti – od izrade ponuda do analize profitabilnosti i marži.

## Početna konfiguracija područja

Prije korištenja dostupnih funkcionalnosti potrebno je definirati osnovne podatke podijeljene u dvije glavne skupine: [**Šifarnici**](/docs/configurations/tables/sales/agent-category) i [**Parametri**](/docs/configurations/parameters/sales/general-overview).

Alternativno je moguće koristiti proceduru [**Fast Start**](/docs/guide/fast-start), pri čemu je potrebno definirati samo minimalni skup podataka, poput [**Poslovnih partnera**](/docs/erp-home/registers/registers-intro).

## Moduli prodaje

import Link from '@docusaurus/Link';

<div className="cardContainer">
    <div className="card">
### <Link to="/docs/sales/offers/settings">Ponude</Link>
<p>Kreiranje, praćenje i ažuriranje prodajnih ponuda te njihovo povezivanje s daljnjim poslovnim procesima.</p>
    </div>
    <div className="card">
### <Link to="/docs/sales/sales-orders/settings">Narudžbe kupaca</Link>
<p>Upravljanje i organizacija procesa zaprimanja i realizacije narudžbi kupaca.</p>
    </div>
</div>

<div className="cardContainer">
    <div className="card">
### <Link to="/docs/sales/sales-delivery-notes/general-overview">Otpremnice</Link>
<p>Praćenje i evidentiranje kretanja robe prema kupcima te upravljanje izlaznim skladišnim dokumentima.</p>
    </div>
    <div className="card">
### <Link to="/docs/sales/sales-invoices/general-overview">Izlazni računi</Link>
<p>Evidentiranje prodajnih transakcija uz prikaz robe ili usluga, poreza i uvjeta plaćanja.</p>
    </div>
</div>

<div className="cardContainer">
    <div className="card">
### <Link to="/docs/sales/pos/general-overview">POS</Link>
<p>Upravljanje maloprodajom na blagajni, izdavanje računa i automatsko ažuriranje stanja zaliha.</p>
    </div>
    <div className="card">
### <Link to="/docs/sales/agents/general-overview">Trgovački predstavnici</Link>
<p>Praćenje i obračun provizija agenata te upravljanje isplatama i izvještajima o ostvarenim provizijama.</p>
    </div>
</div>

<div className="cardContainer">
    <div className="card">
### <Link to="/docs/sales/sales-price-list/general-overview">Prodajni cjenici</Link>
<p>Upravljanje prodajnim cijenama proizvoda i usluga te definiranje pripadajućih popusta.</p>
    </div>
    <div className="card">
### <Link to="/docs/sales/price-control/definition">Upravljanje cijenama</Link>
<p>Definiranje dodatnih popusta i pravila određivanja cijena prema kategorijama kupaca i poslovnim politikama.</p>
    </div>
</div>

## Integracija s ostalim područjima

<div className="cardContainer">
    <div className="card">
### <Link to="/docs/sales/pos/general-overview">Logistika</Link>
<p>Automatsko ažuriranje **stanja zaliha** tijekom obrade prodajnih dokumenata.</p>

<p>Mogućnost generiranja **naloga za komisioniranje** i **planova utovara** iz narudžbi kupaca, uz naknadnu transformaciju u **otpremnice** i **izlazne račune** radi učinkovitijeg upravljanja isporukama.</p>
    </div>
    <div className="card">
### <Link to="/docs/sales/agents/general-overview">Planiranje i proizvodnja</Link>
<p>Podrška **planiranju potražnje (Demand Planning)** kroz integraciju prodajnih i proizvodnih procesa, posebno korisna za proizvodne modele:</p>

<p>**Make to Order (MTO)**, **Engineering to Order (ETO)** i **Assembly to Order (ATO)**.</p>

<p>Ova integracija omogućuje usklađivanje prodajnih narudžbi s proizvodnim aktivnostima te učinkovitije planiranje resursa.</p>
    </div>
</div>

<div className="cardContainer">
    <div className="card">
### <Link to="/docs/sales/sales-price-list/general-overview">Računovodstvo</Link>
<p>Integracija osigurava pouzdano i automatizirano evidentiranje financijskih transakcija nastalih iz prodajnih dokumenata, smanjujući mogućnost pogrešaka.</p>
    </div>
    <div className="card">
### <Link to="/docs/sales/price-control/definition">Kontroling</Link>
<p>Napredni alati za analizu omogućuju praćenje **profitnih marži** i uspješnosti pojedinih prodajnih procesa.</p>

<p>Detaljna analiza prodajnih rezultata pomaže optimizaciji prodajnih strategija i povećanju profitabilnosti poslovanja.</p>
    </div>
</div>

## Tipični poslovni proces

1. **Prikupljanje prodajnih prilika** – ponude se kreiraju i prate kroz CRM modul za postojeće i potencijalne kupce.
2. **Pretvaranje ponuda u narudžbe** – prihvaćene ponude pretvaraju se u narudžbe kupaca.
3. **Automatsko kreiranje dokumenata** – iz narudžbi se automatski generiraju otpremnice i izlazni računi.
4. **Maloprodaja (POS)** – prodaja na blagajni evidentira se kroz POS modul uz trenutno ažuriranje financijskih i skladišnih podataka.
5. **Upravljanje cijenama** – praćenje, ažuriranje i arhiviranje cijena i popusta za artikle.
6. **Obračun provizija** – provizije agenata automatski se obračunavaju i pripremaju za isplatu.