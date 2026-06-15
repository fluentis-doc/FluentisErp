---
title: BLAGAJNA
sidebar_position: 1
---

## Funkcionalnosti

Oblast **Blagajne** u okviru sistema **Fluentis ERP** obuhvata niz modula i procedura koje preduzeću omogućavaju analizu planiranih novčanih tokova, procenu povezanih rizika i upravljanje komunikacijom sa finansijskim institucijama, kako za prilive tako i za odlive sredstava.

Pored funkcionalnosti praćenja i analize, sistem nudi i različite procedure za svakodnevno upravljanje procesima plaćanja i naplate, izdavanje i predaju menica i bankarskih instrumenata naplate na realizaciju ili uz klauzulu „na naplatu po dospeću“, kao i postupke finansiranja putem otkupa (avansiranja) izlaznih faktura kod banke.

Modul je тесно povezan sa modulom Administracije (Finansija), što omogućava preuzimanje otvorenih stavki iz dospeća radi generisanja naloga za plaćanje i doznaka koje treba izvršiti, kao i za izdavanje menica i bankarskih naloga (Ri.Ba.).

Nakon obrade podataka, iste procedure omogućavaju automatsko generisanje računovodstvenih knjiženja za različite prilive i odlive sredstava, kao i za izdavanje, prezentaciju i naplatu menica i Ri.Ba. dokumenata.

### Detaljan pregled funkcionalnosti

import Link from '@docusaurus/Link';

<div className="cardContainer">
    <div className="card">
###   <Link to="/docs/treasury/cash-flow/general-overview/">Novčani tok (Cash Flow)</Link>
        <p>Za sprovođenje preventivne analize potencijalnog novčanog toka, uz mogućnost kreiranja više scenarija uključivanjem ili isključivanjem određenih vrsta finansijskih tokova (npr. sa ili bez narudžbina kupaca, za više ili manje konsolidovan prikaz novčanog toka).</p>
        <p>Uključuje i</p>
        <p><Link to="/docs/treasury/cash-flow/off-balance-due-dates" className="bold-link">Datume dospeća vanbilansnih konta</Link></p>
        <p>Za ručno dopunjavanje novčanog toka procenjenim tokovima koji nisu evidentirani u sistemu.</p>
        <p><Link to="/docs/treasury/cash-flow/reports" className="bold-link">Analitički izveštaj novčanog toka</Link></p>
        <p>Za sveobuhvatan prikaz očekivanih budućih rezultata.</p>
    </div>
    <div className="card">
###   <Link to="/docs/treasury/advance/advances-collections">Avansi i naplata</Link>
        <p>Specijalizovani modul za bankarsko finansiranje (avansiranje) potraživanja po fakturama, najčešće za inostrane izlazne fakture.</p>
    </div>
</div>

<div className="cardContainer">
    <div className="card">
###   <Link to="/docs/treasury/bills-holding/general-overview">Portfelj</Link>
        <p>Za izdavanje, predaju i naplatu menica i bankarskih naloga, uključujući njihovo automatsko knjiženje, kao i upravljanje nenaplaćenim menicama i povezanim knjiženjima.</p>
        <p><Link to="/docs/treasury/bills-holding/procedures/bills-acquisition-from-invoices/" className="bold-link">Kreiranje menica iz faktura</Link></p>
        <p><Link to="/docs/treasury/bills-holding/procedures/bills-acquisition-from-maturity-values/" className="bold-link">Kreiranje menica iz otvorenih stavki</Link></p>
    </div>
    <div className="card">
###   <Link to="/docs/treasury/vendors-payments/general-overview">Plaćanja dobavljačima</Link>
        <p>Za upravljanje nalozima za plaćanje putem bankarskih transfera i naloga, uz automatsko knjiženje.</p>
        <p><Link to="/docs/treasury/vendors-payments/procedures/block-passive-maturity-values" className="bold-link">Blokiranje pasivnih dospeća plaćanja</Link></p>
        <p>Masovno upravljanje blokadom odobrenja za plaćanje obaveza.</p>
        <p><Link to="/docs/treasury/vendors-payments/procedures/payments-support-management" className="bold-link">Upravljanje bankarskim plaćanjima</Link></p>
        <p>Upravljanje bankarskim podacima predviđenim za izvršenje plaćanja.</p>
    </div>
</div>

<div className="cardContainer">
    <div className="card">
###   <Link to="/docs/treasury/bank-account/bank-movements">Bankovni računi</Link>
        <p>Za uvoz elektronskih bankovnih izvoda i njihovo usklađivanje sa računovodstvom, kao i za korišćenje tih podataka pri generisanju knjiženja.</p>
    </div>
    <div className="card">
###   <Link to="/docs/treasury/customer-risk/general-overview">Kreditni rizik kupaca</Link>
        <p>Za upravljanje kreditnim limitima kod isporuka sa odloženim plaćanjem, nadzor ili blokadu u slučaju prekoračenja limita, kao i analizu izloženosti kreditnom riziku putem različitih panela i pokazatelja.</p>
        <p><Link to="/docs/treasury/customer-risk/procedures/lock-manager" className="bold-link">Upravljanje odobrenjima prekoračenja</Link></p>
        <p><Link to="/docs/treasury/customer-risk/procedures/customer-statement" className="bold-link">Izloženost kupaca</Link></p>
        <p><Link to="/docs/treasury/customer-risk/procedures/remittances-check" className="bold-link">Upravljanje doznakama</Link></p>
        <p>Za kontrolu prosečnog kašnjenja u plaćanjima.</p>
    </div>
</div>

<div className="cardContainer">
    <div className="card">
### <Link to="/docs/treasury/docfinance/general-overview">DocFinance i Piteco (Italija)</Link>
        <p>Za upravljanje uvozom i izvozom podataka prema najpoznatijim specijalizovanim softverskim rešenjima za blagajničko i trezorsko poslovanje.</p>
    </div>
</div>

## Osnovni podaci

:::danger[Pažnja]
Prije korišćenja dostupnih funkcionalnosti potrebno je definisati i održavati osnovne podatke. Oni su podijeljeni u dvije glavne grupe: [**Tabele**](/docs/configurations/tables/finance/general-overview) i [**Parametri**](/docs/configurations/parameters/finance/general-overview).

Alternativno, dostupna je procedura **Fast Start** opisana u nastavku.
:::

## Fast Start procedura

:::important[**Fast Start**]
I oblast **Blagajne** može biti konfigurisana kao [**Fast Start okruženje potpuno spremno za korišćenje**](/docs/guide/fast-start), čime se omogućava trenutni početak rada.
:::

## Tok unosa podataka

Iako je moguće ručno unositi podatke, kao što su kreiranje bankarskih naloga ili lista za plaćanje, u praksi se uglavnom koriste **automatske procedure** za njihovo generisanje (npr. *kreiranje instrumenata naplate iz stavki ili faktura*) ili za pripremu plaćanja na osnovu otvorenih stavki.

Takođe se uobičajeno koriste automatske procedure za knjiženje portfelja i izvršenih uplata.

Ostale funkcionalnosti predstavljaju obradu postojećih podataka u sistemu, kao što je *Novčani tok (Cash Flow)* sa procedurom automatskog generisanja (iako postoji mogućnost ručnog kreiranja pozivanjem pojedinačnih finansijskih tokova, što se rijetko koristi), kao i podaci preuzeti iz modula za upravljanje kreditnim rizikom kupaca.

## Tipičan tok rada – oblast finansija i blagajne

### Redovne procedure

- Izvršavanje plaćanja dobavljačima na osnovu otvorenih stavki, uz automatsko knjiženje plaćanja i zatvaranje otvorenih stavki.
- Generisanje instrumenata naplate (najčešće bankarskih mjenica) na osnovu faktura ili otvorenih stavki, uz automatsko knjiženje izdavanja.
- Kreiranje prezentacionih lista za instrumente naplate (Ri.Ba.) radi naplate po dospijeću ili uz klauzulu „na naplatu po dospijeću“, kao i izvoz elektronske datoteke za slanje banci uz automatsko knjiženje prezentacije.
- Naplata instrumenata po dospijeću uz automatski prenos sredstava.
- Po potrebi, izdavanje zamjenskih instrumenata za nenaplaćena potraživanja kupaca uz automatsko knjiženje.
- Kreiranje prezentacionih lista faktura za diskontovanje na osnovu dospjelih faktura, uz automatsko knjiženje avansa i kasnije konačne naplate.

### Procedure na zahtjev

- Izrada novčanog toka (*Cash Flow*) korišćenjem podataka dostupnih u sistemu (stanja računa, otvorene stavke, dokumenti prodajnog i nabavnog ciklusa, instrumenti naplate, dokumenti kooperacije i proizvodnje).
- Izrada statističkih analiza korišćenja kreditnih limita kupaca i kašnjenja u plaćanju.