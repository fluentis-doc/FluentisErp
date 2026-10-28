---
title: Parametri grupiranja ulaznih računa
sidebar_position: 7
---

Parametri grupiranja omogućuju definiranje načina podjele dokumenata tijekom postupaka razduženja. U tu se svrhu mogu upotrebljavati posebne oznake za grupiranje dokumenata prema različitim svojstvima, kao što su kategorija, vrsta dokumenta ili druge relevantne karakteristike.

Ove opće parametre grupiranja potrebno je konfigurirati samo jednom, a oni će se automatski primjenjivati na sve postupke te će vrijediti za sve kupce i dobavljače. Međutim, ako kupac ili dobavljač zahtijeva drukčije ponašanje od onoga definiranog općim parametrima, potrebno je prilagoditi parametre grupiranja u njegovu šifarniku.

Na taj se način osigurava fleksibilno upravljanje razduženjima koje se može prilagoditi posebnim zahtjevima svakog kupca ili dobavljača, uz zadržavanje centralizirane i dosljedne konfiguracije za većinu postupaka.

U ovom se obrascu definiraju pravila grupiranja za sljedeće postupke:

- [**Vrednovanje primki**](/docs/purchase/purchase-invoices/procedures/purchase-delivery-note-valorization)
- [**Vrednovanje povratnih primki**](/docs/purchase/purchase-invoices/procedures/return-delivery-notes-valorization)

Potrebno je označiti stupce koji odgovaraju željenim načinima grupiranja za ova razduženja.

:::note[Napomena]
Ako su u šifarniku dobavljača, na kartici *Parametri grupiranja za kupca/dobavljača*, definirani drukčiji uvjeti grupiranja, oni imaju prednost pred općim parametrima.
:::

Kada se račun izrađuje na temelju jedne primke, preuzimaju se svi podaci iz zaglavlja izvornog dokumenta. Ako se račun izrađuje na temelju više primki, preuzimaju se podaci iz šifarnika dobavljača.

#### Posebna polja

- **Sažeto**: ako je opcija omogućena, pri vrednovanju više primki izradit će se jedan račun po dobavljaču. Ako nije omogućena, za svaku vrednovanu primku izradit će se zaseban račun. Grupiranje funkcionira samo za *vrste primki* (nabavne ili prodajne, ovisno o odabranoj operaciji) za koje je definirana ista *vrsta računa* koja se treba izraditi. Sve sljedeće oznake mogu se upotrebljavati samo ako je omogućena ova opcija.

- **Grupiranje prema vrsti dokumenta**: ako je opcija omogućena, svi dokumenti koji imaju istu *vrstu primke* grupirat će se u jedan račun.

- **Grupiranje prema godini**: omogućivanjem ove opcije primke će se grupirati prema godini izrade.

- **Grupiranje prema mjesecu**: za grupiranje prema mjesecu izrade primki potrebno je omogućiti i prethodnu opciju.

- **Grupiranje prema tečaju**: ako je opcija omogućena, dokumenti s istom valutom i istim tečajem grupirat će se u jedan račun.

- **Grupiranje prema nalogu**: ova se opcija upotrebljava samo za postupak *Izrada prodajnih otpremnica i računa iz Pickinga* (pogledajte [Parametri grupiranja otpremnica](/docs/configurations/parameters/sales/dn-grouping) i [Parametri grupiranja računa](/docs/configurations/parameters/sales/invoice-grouping)).

- **Grupiranje prema projektu**: omogućivanjem ove opcije dokumenti će se grupirati prema projektu. Grupiranje se primjenjuje i na projekte navedene na razini retka artikla. Ako neki retci artikala nemaju pridružen projekt, izradit će se zaseban račun za sve artikle koji nemaju pridružen projekt. Ako je projekt naveden u zaglavlju izvornog dokumenta, prenijet će se i u zaglavlje odredišnog dokumenta; u suprotnom će ostati naveden samo u recima artikala.

- **Grupiranje prema vrsti i načinu plaćanja**: omogućivanjem ove opcije dokumenti će se grupirati prema vrsti i načinu plaćanja navedenima u primci. Ti će se podaci prenijeti u zaglavlje izrađenog računa.

- **Grupiranje prema odredištu**: omogućivanjem ove opcije dokumenti će se grupirati prema odredištu navedenom u primkama na kartici *Prijevoz*. Taj će se podatak prenijeti u zaglavlje izrađenog računa, na karticu *Otprema*.