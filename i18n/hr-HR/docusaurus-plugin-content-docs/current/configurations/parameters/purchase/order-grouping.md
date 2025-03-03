---
title: Parametri raggruppamento Ordini di acquisto
sidebar_position: 8
---

Parametri grupiranja omogućuju definiranje kako podijeliti dokumente tijekom postupaka ispunjavanja. U tu svrhu moguće je koristiti specifične oznake za grupiranje dokumenata prema različitim svojstvima, kao što su kategorija, vrsta dokumenta ili druge relevantne karakteristike.
Ovi opći parametri grupiranja moraju se konfigurirati samo jednom i bit će automatski primijenjeni na sve postupke, a važit će za sve kupce i dobavljače. Međutim, ako kupac ili dobavljač zahtijevaju drugačije ponašanje u odnosu na ono što je postavljeno u općim parametrima, bit će potrebno prilagoditi parametre grupiranja unutar njihove specifične evidencije.  
Na taj način osigurava se fleksibilno i prilagodljivo upravljanje ispunjavanjima, omogućujući zadovoljenje specifičnih potreba svakog kupca ili dobavljača, uz zadržavanje centralizirane i dosljedne konfiguracije za većinu operacija.

U ovoj maski definiraju se pravila grupiranja za postupak:  

-  [**Kreiranje narudžbi dobavljača**](/docs/sales/sales-orders/create-new-sales-orders/search-sales-orders/) iz filtriranih Narudžbi kupaca.

Međutim, za kreiranje narudžbi dobavljača iz narudžbi kupaca preporučuje se korištenje postupka [automatskog kreiranja narudžbi](/docs/purchase/purchase-orders/procedures/create-purchase-orders-from-purchase-requests) s odgovarajućim *Parametrima*.

:::note NAPOMENA
Ako su u šifarniku dobavljača, u kartici *Parametri grupiranja za kupca/dobavljača*, uneseni različiti uvjeti grupiranja, oni će imati prioritet u odnosu na opće parametre.
:::

Kada se narudžba dobavljača kreira iz jedne narudžbe kupca, svi podaci zaglavlja prisutni u izvornoj dokumentaciji bit će preneseni. Međutim, za narudžbe za kupnju koje se kreiraju iz više narudžbi prodaje, prenose se podaci šifarnika dobavljača.

*Specifična polja*:

> **Sažetak**: ako je aktivirano, prilikom kreiranja narudžbi dobavljača iz više narudžbi kupaca bit će kreiran jedan jedini dokument za dobavljača. Ako nije aktivirano, uvijek će biti kreiran dokument za svaku narudžbu kupca. Grupiranje djeluje samo za [Tipove narudžbi kupaca](/docs/configurations/tables/sales/sales-order-types/) koji imaju kodificirani isti *Tip narudžbe dobavljača* koji se treba kreirati. Sve sljedeće oznake moraju se koristiti u kombinaciji s ovom oznakom.    
>
> **Gruppiranje po vrsti dokumenta**: ako je aktivirano, bit će grupirani u jednu narudžbu svi dokumenti koji imaju isti *Tip narudžbe kupca.*       
>
> **Gruppiranje po godini**: aktiviranjem ove oznake bit će izvršeno grupiranje prema godini unosa narudžbe kupca. 
>
> **Gruppiranje po mjesecu**: kako bi se izvršilo grupiranje prema mjesecu kreiranja narudžbe, potrebno je također aktivirati prethodnu oznaku.   
>
> **Gruppiranje po tečaju**: ako je aktivirano, dokumenti s istom valutom i istim tečajem bit će grupirani u jednu narudžbu za kupnju.     
>
> **Gruppiranje po narudžbi**: ova oznaka se koristi samo za *Kreiranje Otpremnica i faktura za prodaju iz Picking-a* (vidi [Parametre grupiranja otpremnica](/docs/configurations/parameters/sales/dn-grouping) i [fakture](/docs/configurations/parameters/sales/invoice-grouping)), stoga u ovom postupku nema smisla.    
>
> **Gruppiranje po projektu**: aktiviranjem ove oznake bit će izvršeno grupiranje po projektu. Grupiranje također djeluje za projekte unesene na razini stavke artikla; ako neke od stavki artikla nemaju pridružen projekt, bit će kreirana drugačija narudžba za sve artikle koji ga nemaju. Kada je projekt unesen u zaglavlje izvornog dokumenta, bit će prikazan i u zaglavlju odredišnog dokumenta, inače će biti zadržan samo na stavkama artikla.     
>
> **Gruppiranje po vrsti i rješenju plaćanja**: aktiviranjem ove oznake bit će izvršeno grupiranje na temelju vrste i rješenja plaćanja unesenog u narudžbu kupca; ta će informacija biti prikazana u zaglavlju kreirane narudžbe dobavljača.   
>
> **Gruppiranje po odredištu**: aktiviranjem ove oznake bit će izvršeno grupiranje na temelju odredišta unesenog unutar narudžbe kupca u kartici *Odredište*; ta će informacija biti prikazana u zaglavlju kreirane narudžbe dobavljača.   