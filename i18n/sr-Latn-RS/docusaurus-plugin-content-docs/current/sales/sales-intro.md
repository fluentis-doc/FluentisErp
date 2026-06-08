---
title: PRODAJA
sidebar_position: 1
---

# PRODAJA

Oblast **Prodaja** u sistemu **Fluentis ERP** osmišljena je za efikasno upravljanje kompletnim prodajnim procesom, pružajući modularnu i međusobno povezanu strukturu koja podržava sve aktivnosti – od kreiranja ponuda do analize profitabilnosti i marži.

## Početna konfiguracija oblasti

Pre korišćenja dostupnih funkcionalnosti potrebno je definisati osnovne podatke podeljene u dve glavne grupe: [**Šifrarnici**](/docs/configurations/tables/sales/agent-category) i [**Parametri**](/docs/configurations/parameters/sales/general-overview).

Alternativno, moguće je koristiti proceduru [**Fast Start**](/docs/guide/fast-start), pri čemu je potrebno definisati samo minimalni skup podataka, kao što su [**Poslovni partneri**](/docs/erp-home/registers/registers-intro).

## Moduli prodaje

import Link from '@docusaurus/Link';

<div className="cardContainer">
    <div className="card">
### <Link to="/docs/sales/offers/settings">Ponude</Link>
<p>Kreiranje, praćenje i ažuriranje prodajnih ponuda, kao i njihovo povezivanje sa narednim poslovnim procesima.</p>
    </div>
    <div className="card">
### <Link to="/docs/sales/sales-orders/settings">Narudžbine kupaca</Link>
<p>Upravljanje i organizacija procesa prijema i realizacije narudžbina kupaca.</p>
    </div>
</div>

<div className="cardContainer">
    <div className="card">
### <Link to="/docs/sales/sales-delivery-notes/general-overview">Otpremnice</Link>
<p>Praćenje i evidentiranje kretanja robe prema kupcima, kao i upravljanje izlaznim skladišnim dokumentima.</p>
    </div>
    <div className="card">
### <Link to="/docs/sales/sales-invoices/general-overview">Izlazni računi</Link>
<p>Evidentiranje prodajnih transakcija sa prikazom robe ili usluga, poreza i uslova plaćanja.</p>
    </div>
</div>

<div className="cardContainer">
    <div className="card">
### <Link to="/docs/sales/pos/general-overview">POS</Link>
<p>Upravljanje maloprodajom na kasi, izdavanje računa i automatsko ažuriranje stanja zaliha.</p>
    </div>
    <div className="card">
### <Link to="/docs/sales/agents/general-overview">Trgovački predstavnici</Link>
<p>Praćenje i obračun provizija agenata, kao i upravljanje isplatama i izveštajima o ostvarenim provizijama.</p>
    </div>
</div>

<div className="cardContainer">
    <div className="card">
### <Link to="/docs/sales/sales-price-list/general-overview">Prodajni cenovnici</Link>
<p>Upravljanje prodajnim cenama proizvoda i usluga, kao i definisanje pripadajućih popusta.</p>
    </div>
    <div className="card">
### <Link to="/docs/sales/price-control/definition">Upravljanje cenama</Link>
<p>Definisanje dodatnih popusta i pravila formiranja cena prema kategorijama kupaca i poslovnim politikama.</p>
    </div>
</div>

## Integracija sa ostalim oblastima

<div className="cardContainer">
    <div className="card">
### <Link to="/docs/sales/pos/general-overview">Logistika</Link>
<p>Automatsko ažuriranje **stanja zaliha** tokom obrade prodajnih dokumenata.</p>

<p>Mogućnost generisanja **naloga za komisioniranje** i **planova utovara** iz narudžbina kupaca, uz naknadnu transformaciju u **otpremnice** i **izlazne račune** radi efikasnijeg upravljanja isporukama.</p>
    </div>
    <div className="card">
### <Link to="/docs/sales/agents/general-overview">Planiranje i proizvodnja</Link>
<p>Podrška **planiranju potražnje (Demand Planning)** kroz integraciju prodajnih i proizvodnih procesa, posebno korisnu za proizvodne modele:</p>

<p>**Make to Order (MTO)**, **Engineering to Order (ETO)** i **Assembly to Order (ATO)**.</p>

<p>Ova integracija omogućava usklađivanje prodajnih narudžbina sa proizvodnim aktivnostima i efikasnije planiranje resursa.</p>
    </div>
</div>

<div className="cardContainer">
    <div className="card">
### <Link to="/docs/sales/sales-price-list/general-overview">Računovodstvo</Link>
<p>Integracija obezbeđuje pouzdano i automatizovano evidentiranje finansijskih transakcija nastalih iz prodajnih dokumenata, smanjujući mogućnost grešaka.</p>
    </div>
    <div className="card">
### <Link to="/docs/sales/price-control/definition">Kontroling</Link>
<p>Napredni alati za analizu omogućavaju praćenje **profitnih marži** i uspešnosti pojedinačnih prodajnih procesa.</p>

<p>Detaljna analiza prodajnih rezultata pomaže optimizaciji prodajnih strategija i povećanju profitabilnosti poslovanja.</p>
    </div>
</div>

## Tipičan poslovni proces

1. **Prikupljanje prodajnih prilika** – ponude se kreiraju i prate kroz CRM modul za postojeće i potencijalne kupce.
2. **Pretvaranje ponuda u narudžbine** – prihvaćene ponude pretvaraju se u narudžbine kupaca.
3. **Automatsko kreiranje dokumenata** – iz narudžbina se automatski generišu otpremnice i izlazni računi.
4. **Maloprodaja (POS)** – prodaja na kasi evidentira se kroz POS modul uz trenutno ažuriranje finansijskih i skladišnih podataka.
5. **Upravljanje cenama** – praćenje, ažuriranje i arhiviranje cena i popusta za artikle.
6. **Obračun provizija** – provizije agenata automatski se obračunavaju i pripremaju za isplatu.