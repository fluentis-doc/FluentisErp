---
title: Parametri grupiranja primki
sidebar_position: 10
---

Parametri grupiranja omogućuju definiranje načina podjele dokumenata tijekom postupaka razduženja. U tu se svrhu mogu upotrebljavati posebne oznake za grupiranje dokumenata prema različitim svojstvima, kao što su kategorija, vrsta dokumenta ili druge relevantne karakteristike.

Ove opće parametre grupiranja potrebno je konfigurirati samo jednom, a oni će se automatski primjenjivati na sve postupke te će vrijediti za sve kupce i dobavljače. Međutim, ako kupac ili dobavljač zahtijeva drukčije ponašanje od onoga definiranog općim parametrima, potrebno je prilagoditi parametre grupiranja u njegovu šifarniku.

Na taj se način osigurava fleksibilno upravljanje razduženjima koje se može prilagoditi posebnim zahtjevima svakog kupca ili dobavljača, uz zadržavanje centralizirane i dosljedne konfiguracije za većinu postupaka.

U ovom se obrascu definiraju pravila grupiranja za postupak [**Razduženje iz naloga**](/docs/purchase/purchase-delivery-note/procedures/create-delivery-notes-from-orders).

Potrebno je označiti stupce koji odgovaraju željenim načinima grupiranja za ova razduženja.

:::note[Napomena]
Ako su u šifarniku dobavljača, na kartici *Parametri grupiranja za kupca/dobavljača*, definirani drukčiji uvjeti grupiranja, oni imaju prednost pred općim parametrima.
:::

Kada se primka izrađuje na temelju jednog naloga, preuzimaju se svi podaci iz zaglavlja izvornog dokumenta. Ako se primka izrađuje na temelju više naloga, preuzimaju se podaci iz šifarnika dobavljača.

#### Posebna polja

- **Sažeto**: ako je opcija omogućena, pri razduženju naloga izradit će se jedna primka po dobavljaču. Ako nije omogućena, za svaki razduženi nalog izradit će se zasebna primka. Grupiranje funkcionira samo za *vrste naloga* (nabavne ili prodajne, ovisno o odabranoj operaciji) za koje je definirana ista *vrsta primke* koja se treba izraditi. Sve sljedeće oznake mogu se upotrebljavati samo ako je omogućena ova opcija.

- **Grupiranje prema vrsti dokumenta**: ako je opcija omogućena, svi dokumenti koji imaju istu *vrstu naloga* grupirat će se u jednu primku.

- **Grupiranje prema godini**: omogućivanjem ove opcije nalozi će se grupirati prema godini izrade.

- **Grupiranje prema mjesecu**: za grupiranje prema mjesecu izrade naloga potrebno je omogućiti i prethodnu opciju.

- **Grupiranje prema tečaju**: ako je opcija omogućena, dokumenti s istom valutom i istim tečajem grupirat će se u jednu primku.

- **Grupiranje prema nalogu**: ova se opcija upotrebljava samo za postupak *Izrada prodajnih otpremnica i računa iz Pickinga* (pogledajte [Parametri grupiranja otpremnica](/docs/configurations/parameters/sales/dn-grouping) i [Parametri grupiranja računa](/docs/configurations/parameters/sales/invoice-grouping)).

- **Grupiranje prema projektu**: omogućivanjem ove opcije dokumenti će se grupirati prema projektu. Grupiranje se primjenjuje i na projekte navedene na razini retka artikla. Ako neki retci artikala nemaju pridružen projekt, izradit će se zasebna primka za sve artikle koji nemaju pridružen projekt. Ako je projekt naveden u zaglavlju izvornog dokumenta, prenijet će se i u zaglavlje odredišnog dokumenta; u suprotnom će ostati naveden samo u recima artikala.

- **Grupiranje prema vrsti i načinu plaćanja**: omogućivanjem ove opcije dokumenti će se grupirati prema vrsti i načinu plaćanja navedenima u nalogu. Ti će se podaci prenijeti u zaglavlje izrađene primke.

- **Grupiranje prema odredištu**: omogućivanjem ove opcije dokumenti će se grupirati prema odredištu navedenom u nalozima. Taj će se podatak prenijeti u zaglavlje izrađene primke, na karticu *Prijevoz*.