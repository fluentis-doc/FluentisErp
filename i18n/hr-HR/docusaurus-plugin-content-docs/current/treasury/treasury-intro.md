---
title: RIZNICA
sidebar_position: 1
---

## Funkcionalnosti

Područje Riznice unutar sustava **Fluentis ERP** obuhvaća niz modula i procedura koje poduzeću omogućuju analizu tijeka planiranih novčanih tokova, procjenu pripadajućih rizika te upravljanje komunikacijom s financijskim institucijama – kako za ulazne, tako i za izlazne tokove.

Uz ove funkcionalnosti praćenja i analize, dostupne su i različite procedure za svakodnevno operativno upravljanje transakcijama plaćanja i naplate, izdavanja te prezentacije mjenica i bankovnih priznanica na naplatu ili inkaso, kao i za upravljanje predujmovima na temelju izdanih računa prema banci.

Modul je usko povezan s modulom Financije, što omogućuje čitanje otvorenih stavki iz dospijeća radi generiranja naloga za plaćanje i doznaka koje treba izvršiti, ili pak za izdavanje mjenica i bankovnih priznanica (Ri.Ba.).

Nakon obrade podataka, iste procedure omogućuju automatsko generiranje računovodstvenih zapisa za knjiženje raznih uplata i isplata, kao i za izdavanje, prezentaciju i naplatu mjenica i Ri.Ba. dokumenata.


### Detaljan pregled funkcionalnosti


import Link from '@docusaurus/Link';

<div className="cardContainer">
    <div className="card">
###   <Link to="/docs/treasury/cash-flow/general-overview/">Novčani tok (Cash Flow)</Link>
        <p>za provođenje preventivne analize potencijalnog novčanog toka, s mogućnošću kreiranja više scenarija uključivanjem ili isključivanjem određenih vrsta financijskih tokova (npr. s ili bez narudžbi kupaca, za više ili manje konsolidiran prikaz CF-a)</p>
        <p>Uključuje i</p>
        <p><Link to="/docs/treasury/cash-flow/off-balance-due-dates" className="bold-link">Vanjskobilančne dospjelosti</Link></p>
        <p>za ručno uključivanje izvan-sustavnih predviđenih tokova u novčani tok</p>
        <p><Link to="/docs/treasury/cash-flow/reports" className="bold-link">Analitički ispis novčanog toka</Link></p>
        <p>za cjeloviti prikaz očekivanih budućih rezultata</p>
    </div>
    <div className="card">
###   <Link to="/docs/treasury/advance/advances-collections">Predujmovi po fakturama</Link>
        <p>Specifični modul za bankovno predfinanciranje temeljem izdanih faktura (obično za inozemne kupce)</p>
    </div>
</div>

<div className="cardContainer">
    <div className="card">
###   <Link to="/docs/treasury/bills-holding/general-overview">Portfelj mjenica</Link>
        <p>za izdavanje, predaju i naplatu mjenica i bankovnih priznanica, uključujući njihovo automatsko knjiženje, kao i upravljanje nepodmirenim mjenicama i povezanim knjiženjima</p>
        <p><Link to="/docs/treasury/bills-holding/procedures/bills-acquisition-from-invoices/" className="bold-link">Kreiranje mjenica iz faktura</Link></p>
        <p><Link to="/docs/treasury/bills-holding/procedures/bills-acquisition-from-maturity-values/" className="bold-link">Kreiranje mjenica iz otvorenih stavaka</Link></p>
    </div>
    <div className="card">
###   <Link to="/docs/treasury/vendors-payments/general-overview">Plaćanja dobavljačima</Link>
        <p>za upravljanje nalozima za plaćanje putem bankovnog transfera, SDD naloga i pasivnih Ri.Ba. obavijesti, s automatskim knjiženjem</p>
        <p><Link to="/docs/treasury/vendors-payments/procedures/block-passive-maturity-values" className="bold-link">Blokiranje pasivnih stavaka</Link></p>
        <p>masovno upravljanje blokadom autorizacije za plaćanje pasivnih stavaka</p>
        <p><Link to="/docs/treasury/vendors-payments/procedures/payments-support-management" className="bold-link">Upravljanje bankama za plaćanja</Link></p>
        <p>upravljanje podacima o bankama predviđenima za izvršenje plaćanja</p>
    </div>
</div>
<div className="cardContainer">
    <div className="card">
###   <Link to="/docs/treasury/bank-account/bank-movements">Bankovni računi</Link>
        <p>za uvoz elektroničkih bankovnih izvoda i njihovo usklađivanje s računovodstvom, ili za korištenje istih pri generiranju knjiženja</p>
    </div>
    <div className="card">
###   <Link to="/docs/treasury/customer-risk/general-overview">Kreditni rizik kupaca</Link>
        <p>za upravljanje kreditnim limitom kod isporuka na odgodu plaćanja, nadzor ili blokadu u slučaju prekoračenja limita, analizu izloženosti kreditnom riziku putem raznih panela i pokazatelja</p>
        <p><Link to="/docs/treasury/customer-risk/procedures/lock-manager" className="bold-link">Lock manager za autorizaciju prekoračenja</Link></p>
        <p><Link to="/docs/treasury/customer-risk/procedures/customer-statement" className="bold-link">Izloženost kupaca</Link></p>
        <p><Link to="/docs/treasury/customer-risk/procedures/remittances-check" className="bold-link">Upravljanje doznakama</Link></p>
        <p>Za kontrolu prosječnog kašnjenja u plaćanjima</p>
    </div>
</div>
<div className="cardContainer">
    <div className="card">
###     <Link to="/docs/treasury/docfinance/general-overview">DocFinance i Piteco</Link>
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

Ostale funkcionalnosti predstavljaju softversku obradu na temelju postojećih podataka, npr. Cashflow s procedurom automatskog kreiranja (iako postoji mogućnost ručnog kreiranja pozivanjem financijskih tokova jedan po jedan, što se rijetko koristi) ili podaci izdvojeni iz modula Upravljanje rizikom kupaca.

## Tipičan tijek rada u području riznice

- "Trenutne" procedure: 
    - izvršavanje plaćanja dobavljačima čitanjem otvorenih stavki i automatsko knjiženje samog plaćanja s zatvaranjem stavki
    - izdavanje aktivnih mjenica (često bankovnih priznanica) čitanjem računa ili otvorenih stavki te automatsko knjiženje izdanih dokumenata
    - izrada zbirnih naloga za prezentaciju mjenica (Ri.Ba.) na naplatu ili po principu "salvo buon fine" te izvoz telematske datoteke za slanje banci; automatsko knjiženje prezentacije
    - naplata mjenica po principu automatsko preknjiženje
    - eventualno pojavljivanje nepodmirenih potraživanja s ponovnim otvaranjem potraživanja kupca i automatskim knjiženjem
    - izrada zbirnih naloga za predočenje faktura na diskont temeljem dospijeća, automatsko knjiženje predujma i naknadne potpune naplate

- Procedure "na zahtjev":
    - izrada novčanog toka (cash flow) na temelju postojećih podataka u sustavu (stanja, stavki, dokumenata iz ciklusa nabave i prodaje, mjenica, dokumenata kooperacije i proizvodnje)
    - izrada statistika korištenja kreditnih limita kupaca ili kašnjenja u plaćanjima