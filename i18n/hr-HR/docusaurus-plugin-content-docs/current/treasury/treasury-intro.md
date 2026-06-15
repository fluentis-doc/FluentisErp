---
title: RIZNICA
sidebar_position: 1
---

## Funkcionalnosti

Područje Riznice unutar sustava **Fluentis ERP** obuhvaća niz modula i procedura koje poduzeću omogućuju analizu tijeka planiranih novčanih tokova, procjenu pripadajućih rizika te upravljanje komunikacijom s financijskim institucijama – kako za ulazne, tako i za izlazne tokove.

Uz navedene funkcionalnosti praćenja i analize, sustav nudi i različite postupke za svakodnevno upravljanje procesima plaćanja i naplate, izdavanje i predaju mjenica i bankovnih naplatnih instrumenata na naplatu ili uz klauzulu „uz naplatu po dospijeću”, kao i postupke financiranja putem otkupa (avansiranja) izlaznih računa kod banke.

Modul je usko povezan s modulom Administracije (Financija), što omogućuje čitanje otvorenih stavki iz dospijeća radi generiranja naloga za plaćanje i doznaka koje treba izvršiti, ili pak za izdavanje mjenica i bankovnih priznanica (Ri.Ba.).

Nakon obrade podataka, iste procedure omogućuju automatsko generiranje računovodstvenih zapisa za knjiženje raznih uplata i isplata, kao i za izdavanje, prezentaciju i naplatu mjenica i Ri.Ba. dokumenata.

### Detaljan pregled funkcionalnosti

import Link from '@docusaurus/Link';

<div className="cardContainer">
    <div className="card">
###   <Link to="/docs/treasury/cash-flow/general-overview/">Novčani tok (Cash Flow)</Link>
        <p>Za provođenje preventivne analize potencijalnog novčanog toka, s mogućnošću kreiranja više scenarija uključivanjem ili isključivanjem određenih vrsta financijskih tokova (npr. s ili bez narudžbi kupaca, za više ili manje konsolidiran prikaz CF-a)</p>
        <p>Uključuje i</p>
        <p><Link to="/docs/treasury/cash-flow/off-balance-due-dates" className="bold-link">Datum dospijeća vanbilančnih konta</Link></p>
        <p>Za ručnu dopunu novčanog toka (cash flowa) prognoziranim tokovima koji nisu evidentirani u sustavu.</p>
        <p><Link to="/docs/treasury/cash-flow/reports" className="bold-link">Analitički ispis novčanog toka</Link></p>
        <p>Za cjeloviti prikaz očekivanih budućih rezultata</p>
    </div>
    <div className="card">
###   <Link to="/docs/treasury/advance/advances-collections">Avansi i naplata</Link>
        <p>Specijalizirani modul za bankovno financiranje (avansiranje) potraživanja po računima, najčešće za inozemne izlazne račune.</p>
    </div>
</div>

<div className="cardContainer">
    <div className="card">
###   <Link to="/docs/treasury/bills-holding/general-overview">Portfelj</Link>
        <p>Za izdavanje, predaju i naplatu mjenica i bankovnih priznanica, uključujući njihovo automatsko knjiženje, kao i upravljanje nepodmirenim mjenicama i povezanim knjiženjima</p>
        <p><Link to="/docs/treasury/bills-holding/procedures/bills-acquisition-from-invoices/" className="bold-link">Kreiranje mjenica iz faktura</Link></p>
        <p><Link to="/docs/treasury/bills-holding/procedures/bills-acquisition-from-maturity-values/" className="bold-link">Kreiranje mjenica iz otvorenih stavaka</Link></p>
    </div>
    <div className="card">
###   <Link to="/docs/treasury/vendors-payments/general-overview">Plaćanja dobavljačima</Link>
        <p>Za upravljanje nalozima za plaćanje putem bankovnog transfera i naloga, s automatskim knjiženjem</p>
        <p><Link to="/docs/treasury/vendors-payments/procedures/block-passive-maturity-values" className="bold-link">Blokiranje pasivnih dospijeća plaćanja</Link></p>
        <p>Masovno upravljanje blokadom odobrenja za plaćanje obveza.</p>
        <p><Link to="/docs/treasury/vendors-payments/procedures/payments-support-management" className="bold-link">Upravljanje bankovnim plaćanjima</Link></p>
        <p>Upravljanje bankovni podacima predviđenima za izvršenje plaćanja</p>
    </div>
</div>
<div className="cardContainer">
    <div className="card">
###   <Link to="/docs/treasury/bank-account/bank-movements">Bankovni računi</Link>
        <p>Za uvoz elektroničkih bankovnih izvoda i njihovo usklađivanje s računovodstvom, ili za korištenje istih pri generiranju knjiženja</p>
    </div>
    <div className="card">
###   <Link to="/docs/treasury/customer-risk/general-overview">(Kreditni) rizik kupaca</Link>
        <p>za upravljanje kreditnim limitom kod isporuka na odgodu plaćanja, nadzor ili blokadu u slučaju prekoračenja limita, analizu izloženosti kreditnom riziku putem raznih panela i pokazatelja</p>
        <p><Link to="/docs/treasury/customer-risk/procedures/lock-manager" className="bold-link">Upravljanje autorizacijom prekoračenja</Link></p>
        <p><Link to="/docs/treasury/customer-risk/procedures/customer-statement" className="bold-link">Izloženost kupaca</Link></p>
        <p><Link to="/docs/treasury/customer-risk/procedures/remittances-check" className="bold-link">Upravljanje doznakama</Link></p>
        <p>Za kontrolu prosječnog kašnjenja u plaćanjima</p>
    </div>
</div>
<div className="cardContainer">
    <div className="card">
###     <Link to="/docs/treasury/docfinance/general-overview">DocFinance i Piteco (Italija)</Link>
        <p>za upravljanje uvozom i izvozom podataka prema najpoznatijim specijaliziranim softverima za trezor.</p>
    </div>
</div>

## Osnovni podaci
:::danger[Pažnja]
Prije korištenja dostupnih funkcionalnosti potrebno je upravljati nizom osnovnih podataka: oni su podijeljeni u dvije velike skupine, [**Tablice**](/docs/configurations/tables/finance/general-overview) i [**Parametri**](/docs/configurations/parameters/finance/general-overview).

Alternativno je dostupna procedura **Fast Start** opisana u nastavku.
:::

## Procedura Fast Start

:::important[**Fast Start**]
I područje Riznice može biti konfigurirano kao [**FastStart okruženje potpuno spremno za korištenje**](/docs/guide/fast-start) i omogućiti odmah upotrebu.
:::

## Tijek unosa podataka

Iako je moguće ručno unositi podatke kao što su izrada bankovne priznanice ili liste za plaćanje, obično se koriste **automatske procedure** za kreiranje (npr. *kreiranje efekata iz stavki ili računa*) ili za pripremu uplata na temelju otvorenih stavki.

Također se općenito koriste automatske procedure za knjiženje portfelja ili izvršenih uplata.

Ostale funkcionalnosti predstavljaju softversku obradu na temelju postojećih podataka, npr. *Cashflow* s procedurom automatskog kreiranja (iako postoji mogućnost ručnog kreiranja pozivanjem financijskih tokova jedan po jedan, što se rijetko koristi) ili podaci izdvojeni iz modula Upravljanje rizikom kupaca.

## Tipični tijek rada – područje financija i trezora

### Redovne procedure

- Izvršavanje plaćanja dobavljačima na temelju otvorenih stavki uz automatsko knjiženje plaćanja i zatvaranje otvorenih stavki.
- Generiranje naplativih instrumenata (najčešće bankovnih mjenica) na temelju računa ili otvorenih stavki te automatsko knjiženje izdavanja.
- Kreiranje prezentacijskih lista za naplative instrumente (Ri.Ba.) za naplatu po dospijeću ili uz klauzulu „uz naplatu po dospijeću” te izvoz elektroničke datoteke za slanje banci uz automatsko knjiženje prezentacije.
- Naplata instrumenata po dospijeću uz automatski prijenos sredstava.
- Eventualno izdavanje zamjenskih instrumenata za nepodmirena potraživanja kupaca uz automatsko knjiženje.
- Kreiranje prezentacijskih lista računa za diskontiranje na temelju dospjelih računa, uz automatsko knjiženje predujma i kasnije potpune naplate.

### Procedure na zahtjev

- Izrada novčanog toka (*cash flow*) korištenjem podataka dostupnih u sustavu (stanja računa, otvorene stavke, dokumenti prodajnog i nabavnog ciklusa, naplativi instrumenti, dokumenti kooperacije i proizvodnje).
- Izrada statističkih analiza korištenja kreditnih limita kupaca i kašnjenja u plaćanjima.