---
sidebar_position: 3
title: Sustav PDV-a prema naplati
---

:::important **Fluentis Academy** 
'PDV prema naplati' definira se kao PDV koji postaje obvezan ne pri isporuci robe, već pri plaćanju računa. 
Porezni obveznik koji primjenjuje ovaj sustav obračunava PDV za sve transakcije, kako aktivne tako i pasivne, prema kriteriju naplate.
Porezni trenutak PDV-a podudara se s trenutkom plaćanja ili naplate naknada. Na taj način odstupa se od principa prema kojem je PDV obveza vezana uz dokument koji je registriran u računovodstvu.

U praksi, sustav PDV-a prema naplati omogućuje plaćanje PDV-a na iznos duga za prodaju ili pružanje usluga tek u trenutku kada kupac plati račun.
Istovremeno, omogućuje odbitak PDV-a na kupnje tek kada porezni obveznik plati račun dobavljaču. 

U svakom slučaju, obračun PDV-a mora se izvršiti unutar godine dana od prodaje ili pružanja usluge, osim u slučajevima stečaja ili uključenosti davatelja ili naručitelja u stečajni postupak.
:::

### POSTAVKE I KONFIGURACIJA RAČUNOVODSTVENIH PREDLOŽAKA 

Glavne postavke za upravljanje ovim sustavom provode se jednostavno kroz ispravnu konfiguraciju računovodstvenih predložaka.

Posebno je važno ispravno odabrati, unutar uključenih predložaka, u polju **Tip kretanja** (koje se odnosi na PDV), točnu vrstu.

U detalje:

- Predložak za knjiženje računa dobavljača imat će tip *PDV kupnje u suspenziji*
- Predložak za knjiženje računa kupca imat će tip *Prodaja s PDV-om u suspenziji*
- Predlošci za naplatu ili plaćanje neće imati poseban tip, već će kao i obično imati tip *Nema PDV-a* (bit će povezani s predlošcima koji se automatski izvršavaju za knjiženje PDV-a koji postaje dospjelo kroz polje *Automatski predložak*)
- Predložak za knjiženje PDV-a od nabave imat će tip Knjiženje PDV-a na kupnje u suspenziji
- Predložak za knjiženje PDV-a na prodaje imat će tip Knjiženje PDV-a u suspenziji

Sadržaj (predložak) predložaka koji se koriste za izlazne i ulazne račune tipično se razlikuje od standardnih predložaka po tome što se PDV knjiži na posebno konto za odgođeni PDV, različito od uobičajenih konta pretporeza i obveze PDV-a, koja se zatim prenose na konto obveze prema državi za PDV tijekom periodičnog obračuna PDV-a. Što se tiče PDV registra koji se koristi, može ostati standardni postojeći registar bez potrebe za definiranjem posebnog registra. Posebna vrsta PDV knjiženja definirana u predlošku omogućuje da se porez ne smatra potraživanjem niti obvezom sve dok se ne izvrši prijenosno knjiženje, iako će i dalje biti vidljiv u PDV evidencijama razdoblja.

Sadržaj predložaka za naplatu i plaćanje ostaje uobičajen.

Sadržaj predložaka (izvršenih automatski) za knjiženje odgođenog PDV-a, poništava specifične račune odgođenog PDV-a i knjiži na račune običnog PDV-a jer je od tog trenutka PDV postao dospjelo ili odbitno, ovisno o slučaju.

U nastavku su prikazane neke slike detalja postavki.

![](/img/it-it/finance-area/other/suspvat1.png)

![](/img/it-it/finance-area/other/suspvat2.png)

![](/img/it-it/finance-area/other/suspvat3.png)

![](/img/it-it/finance-area/other/suspvat4.png)

![](/img/it-it/finance-area/other/suspvat5.png)

### UPRAVLJANJE PDV-OM NAKON GODINU DANA OD TRANSAKCIJE AKO NIJE PLAĆENO ILI NEPLAĆENO 

Upravljanje omogućuje identifikaciju otvorenih stavki starijih od godinu dana i automatsko knjiženje prijenosa PDV-a kako bi se učinio dospjelo ili odbitno, ovisno o slučaju.

Za to je moguće koristiti (s posebnim postavkama) obrazac [**Prijenos stavki**](/docs/finance-area/maturity-values/procedures/maturity-values-giro/filter-tab)

### POSTAVKE U SLUČAJU BANKOVNIH MJENICA I NENAPLAĆENIH POTRAŽIVANJA 

Ako je u okviru prodajnog ciklusa predviđeno izdavanje bankovnih mjenica te njihovo slanje banci na naplatu ili uz klauzulu „uz dobru naplatu”, konfiguracija predložaka bit će sljedeća:

1. Izdavanje računa: knjiži se s predloškom konfiguriranim kao gore opisano;

2. Izdavanje efekta/mjenice: normalno knjićenje s uobičajenim predloškom, zatvara se otvorena stavka s računa, ali se ne izvršava nikakvo knjiženje PDV-a; 

3. Knjiženje **zbirnog naloga** za prezentaciju Ri.Ba: **Predložak korišten za ovo povezava je s automatskim prijenosom PDV-a**, prijenos PDV-a se knjiži na datum dospijeća efekata/mjenica; 

4. Knjiženje priljeva: normalno, kao i obično.

**U slučaju knjiženja nenaplaćenih potraživanja**: računovodstveni predložak koji se koristi ne zahtijeva posebna podešavanja, postupak prepoznaje stavku zatvorenu putem Ri.Ba. povezanu s PDV-om prema naplati i briše registraciju prijenosa, a umjesto ponovnog otvaranja stavke, izvršava plaćanje s iznosom na teret kako bi poništio plaćanje koje je izvršeno izdavanjem Ri.Ba., čime se ponovno otvara izvorna stavka (povezana s suspendiranim PDV-om).