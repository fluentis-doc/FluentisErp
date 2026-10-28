---
title: Parametri grupisanja narudžbi
sidebar_position: 8
---

Parametri grupisanja omogućavaju definisanje načina podele dokumenata tokom postupaka razduženja. U tu svrhu mogu se koristiti posebne oznake za grupisanje dokumenata prema različitim svojstvima, kao što su kategorija, vrsta dokumenta ili druge relevantne karakteristike.

Ove opšte parametre grupisanja potrebno je konfigurisati samo jednom, a oni će se automatski primenjivati na sve postupke i važiće za sve kupce i dobavljače. Međutim, ako kupac ili dobavljač zahteva drugačije ponašanje od onog definisanog opštim parametrima, potrebno je prilagoditi parametre grupisanja u njegovom šifarniku.

Na taj način obezbeđuje se fleksibilno upravljanje razduženjima koje se može prilagoditi posebnim zahtevima svakog kupca ili dobavljača, uz zadržavanje centralizovane i dosledne konfiguracije za većinu postupaka.

U ovom obrascu definišu se pravila grupisanja za postupak:

- [**Kreiranje narudžbi dobavljača**](/docs/sales/sales-orders/create-new-sales-orders/search-sales-orders/) iz filtera za pretragu kupčevih narudžbina.

Za kreiranje narudžbi dobavljača na osnovu kupčevih narudžbina ipak se preporučuje korišćenje postupka [automatskog kreiranja narudžbina](/docs/purchase/purchase-orders/procedures/create-purchase-orders-from-purchase-requests) sa pripadajućim *parametrima*.

:::note[Napomena]
Ako su u šifarniku dobavljača, na kartici *Parametri grupisanja za kupca/dobavljača*, definisani drugačiji uslovi grupisanja, oni imaju prednost u odnosu na opšte parametre.
:::

Kada se dobavljačka narudžbina kreira na osnovu jedne kupčeve narudžbine, preuzimaju se svi podaci iz zaglavlja izvornog dokumenta. Ako se nabavna narudžbina kreira na osnovu više prodajnih narudžbina, preuzimaju se podaci iz šifarnika dobavljača.

#### Posebna polja

- **Sažeto**: ako je opcija omogućena, pri kreiranju narudžbi dobavljača na osnovu više kupčevih narudžbina kreiraće se jedan dokument po dobavljaču. Ako nije omogućena, za svaku kupčevu narudžbinu kreiraće se zaseban dokument. Grupisanje funkcioniše samo za [vrste kupčevih narudžbina](/docs/configurations/tables/sales/sales-order-types/) za koje je definisana ista *vrsta dobavljačke narudžbine* koju treba kreirati. Sve sledeće oznake mogu se koristiti samo ako je ova opcija omogućena.

- **Grupisanje prema vrsti dokumenta**: ako je opcija omogućena, svi dokumenti koji imaju istu *vrstu kupčeve narudžbine* grupisaće se u jednu nabavnu narudžbinu.

- **Grupisanje prema godini**: omogućavanjem ove opcije kupčeve narudžbine grupisaće se prema godini unosa.

- **Grupisanje prema mesecu**: za grupisanje prema mesecu kreiranja narudžbina potrebno je omogućiti i prethodnu opciju.

- **Grupisanje prema kursu**: ako je opcija omogućena, dokumenti sa istom valutom i istim kursom grupisaće se u jednu nabavnu narudžbinu.

- **Grupisanje prema narudžbini**: ova opcija koristi se samo za postupak *Kreiranje prodajnih otpremnica i faktura iz Pickinga* (pogledajte [Parametri grupisanja otpremnica](/docs/configurations/parameters/sales/dn-grouping) i [Parametri grupisanja faktura](/docs/configurations/parameters/sales/invoice-grouping)), pa nema značaja u ovom postupku.

- **Grupisanje prema projektu**: omogućavanjem ove opcije dokumenti će se grupisati prema projektu. Grupisanje se primenjuje i na projekte navedene na nivou reda artikla. Ako neki redovi artikala nemaju pridružen projekat, kreiraće se zasebna narudžbina za sve artikle koji nemaju pridružen projekat. Ako je projekat naveden u zaglavlju izvornog dokumenta, preneće se i u zaglavlje odredišnog dokumenta; u suprotnom će ostati naveden samo u redovima artikala.

- **Grupisanje prema vrsti i načinu plaćanja**: omogućavanjem ove opcije dokumenti će se grupisati prema vrsti i načinu plaćanja navedenim u kupčevoj narudžbini. Ti podaci biće preneti u zaglavlje kreirane dobavljačke narudžbine.

- **Grupisanje prema odredištu**: omogućavanjem ove opcije dokumenti će se grupisati prema odredištu navedenom na kartici *Odredište* kupčeve narudžbine. Taj podatak biće prenet u zaglavlje kreirane dobavljačke narudžbine.