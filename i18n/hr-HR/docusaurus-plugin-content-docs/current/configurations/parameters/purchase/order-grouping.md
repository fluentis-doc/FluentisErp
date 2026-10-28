---
title: Parametri grupiranja narudžbi
sidebar_position: 8
---

Parametri grupiranja omogućuju definiranje načina podjele dokumenata tijekom postupaka razduženja. U tu se svrhu mogu upotrebljavati posebne oznake za grupiranje dokumenata prema različitim svojstvima, kao što su kategorija, vrsta dokumenta ili druge relevantne karakteristike.

Ove opće parametre grupiranja potrebno je konfigurirati samo jednom, a oni će se automatski primjenjivati na sve postupke te će vrijediti za sve kupce i dobavljače. Međutim, ako kupac ili dobavljač zahtijeva drukčije ponašanje od onoga definiranog općim parametrima, potrebno je prilagoditi parametre grupiranja u njegovu šifarniku.

Na taj se način osigurava fleksibilno upravljanje razduženjima koje se može prilagoditi posebnim zahtjevima svakog kupca ili dobavljača, uz zadržavanje centralizirane i dosljedne konfiguracije za većinu postupaka.

U ovom se obrascu definiraju pravila grupiranja za postupak:

- [**Izrada narudžbi dobavljača**](/docs/sales/sales-orders/create-new-sales-orders/search-sales-orders/) iz filtra za pretraživanje kupčevih narudžbi.

Za izradu narudžbi dobavljača na temelju kupčevih narudžbi ipak se preporučuje upotreba postupka [automatske izrade narudžbi](/docs/purchase/purchase-orders/procedures/create-purchase-orders-from-purchase-requests) s pripadajućim *parametrima*.

:::note[Napomena]
Ako su u šifarniku dobavljača, na kartici *Parametri grupiranja za kupca/dobavljača*, definirani drukčiji uvjeti grupiranja, oni imaju prednost pred općim parametrima.
:::

Kada se dobavljačka narudžba izrađuje na temelju jedne kupčeve narudžbe, preuzimaju se svi podaci iz zaglavlja izvornog dokumenta. Ako se nabavna narudžba izrađuje na temelju više prodajnih narudžbi, preuzimaju se podaci iz šifarnika dobavljača.

#### Posebna polja

- **Sažeto**: ako je opcija omogućena, pri izradi narudžbi dobavljača na temelju više kupčevih narudžbi izradit će se jedan dokument po dobavljaču. Ako nije omogućena, za svaku kupčevu narudžbu izradit će se zaseban dokument. Grupiranje funkcionira samo za [vrste kupčevih narudžbi](/docs/configurations/tables/sales/sales-order-types/) za koje je definirana ista *vrsta dobavljačke narudžbe* koja se treba izraditi. Sve sljedeće oznake mogu se upotrebljavati samo ako je omogućena ova opcija.

- **Grupiranje prema vrsti dokumenta**: ako je opcija omogućena, svi dokumenti koji imaju istu *vrstu kupčeve narudžbe* grupirat će se u jednu nabavnu narudžbu.

- **Grupiranje prema godini**: omogućivanjem ove opcije kupčeve će se narudžbe grupirati prema godini unosa.

- **Grupiranje prema mjesecu**: za grupiranje prema mjesecu izrade narudžbi potrebno je omogućiti i prethodnu opciju.

- **Grupiranje prema tečaju**: ako je opcija omogućena, dokumenti s istom valutom i istim tečajem grupirat će se u jednu nabavnu narudžbu.

- **Grupiranje prema narudžbi**: ova se opcija upotrebljava samo za postupak *Izrada prodajnih otpremnica i računa iz Pickinga* (pogledajte [Parametri grupiranja otpremnica](/docs/configurations/parameters/sales/dn-grouping) i [Parametri grupiranja računa](/docs/configurations/parameters/sales/invoice-grouping)), stoga nema značenja u ovom postupku.

- **Grupiranje prema projektu**: omogućivanjem ove opcije dokumenti će se grupirati prema projektu. Grupiranje se primjenjuje i na projekte navedene na razini retka artikla. Ako neki retci artikala nemaju pridružen projekt, izradit će se zasebna narudžba za sve artikle koji nemaju pridružen projekt. Ako je projekt naveden u zaglavlju izvornog dokumenta, prenijet će se i u zaglavlje odredišnog dokumenta; u suprotnom će ostati naveden samo u recima artikala.

- **Grupiranje prema vrsti i načinu plaćanja**: omogućivanjem ove opcije dokumenti će se grupirati prema vrsti i načinu plaćanja navedenima u kupčevoj narudžbi. Ti će se podaci prenijeti u zaglavlje izrađene dobavljačke narudžbe.

- **Grupiranje prema odredištu**: omogućivanjem ove opcije dokumenti će se grupirati prema odredištu navedenom na kartici *Odredište* kupčeve narudžbe. Taj će se podatak prenijeti u zaglavlje izrađene dobavljačke narudžbe.