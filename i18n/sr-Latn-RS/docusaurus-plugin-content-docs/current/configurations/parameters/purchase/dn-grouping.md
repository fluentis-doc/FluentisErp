---
title: Parametri grupisanja primki
sidebar_position: 10
---

Parametri grupisanja omogućavaju definisanje načina podele dokumenata tokom postupaka razduženja. U tu svrhu mogu se koristiti posebne oznake za grupisanje dokumenata prema različitim svojstvima, kao što su kategorija, vrsta dokumenta ili druge relevantne karakteristike.

Ove opšte parametre grupisanja potrebno je konfigurisati samo jednom, a oni će se automatski primenjivati na sve postupke i važiće za sve kupce i dobavljače. Međutim, ako kupac ili dobavljač zahteva drugačije ponašanje od onog definisanog opštim parametrima, potrebno je prilagoditi parametre grupisanja u njegovom šifarniku.

Na taj način obezbeđuje se fleksibilno upravljanje razduženjima koje se može prilagoditi posebnim zahtevima svakog kupca ili dobavljača, uz zadržavanje centralizovane i dosledne konfiguracije za većinu postupaka.

U ovom obrascu definišu se pravila grupisanja za postupak [**Razduženje iz naloga**](/docs/purchase/purchase-delivery-note/procedures/create-delivery-notes-from-orders).

Potrebno je označiti kolone koje odgovaraju željenim načinima grupisanja za ova razduženja.

:::note[Napomena]
Ako su u šifarniku dobavljača, na kartici *Parametri grupisanja za kupca/dobavljača*, definisani drugačiji uslovi grupisanja, oni imaju prednost u odnosu na opšte parametre.
:::

Kada se primka kreira na osnovu jednog naloga, preuzimaju se svi podaci iz zaglavlja izvornog dokumenta. Ako se primka kreira na osnovu više naloga, preuzimaju se podaci iz šifarnika dobavljača.

#### Posebna polja

- **Sažeto**: ako je opcija omogućena, pri razduženju naloga kreiraće se jedna primka po dobavljaču. Ako nije omogućena, za svaki razduženi nalog kreiraće se zasebna primka. Grupisanje funkcioniše samo za *vrste naloga* (nabavne ili prodajne, u zavisnosti od izabrane operacije) za koje je definisana ista *vrsta primke* koju treba kreirati. Sve sledeće oznake mogu se koristiti samo ako je ova opcija omogućena.

- **Grupisanje prema vrsti dokumenta**: ako je opcija omogućena, svi dokumenti koji imaju istu *vrstu naloga* grupisaće se u jednu primku.

- **Grupisanje prema godini**: omogućavanjem ove opcije nalozi će se grupisati prema godini kreiranja.

- **Grupisanje prema mesecu**: za grupisanje prema mesecu kreiranja naloga potrebno je omogućiti i prethodnu opciju.

- **Grupisanje prema kursu**: ako je opcija omogućena, dokumenti sa istom valutom i istim kursom grupisaće se u jednu primku.

- **Grupisanje prema nalogu**: ova opcija koristi se samo za postupak *Kreiranje prodajnih otpremnica i faktura iz Pickinga* (pogledajte [Parametri grupisanja otpremnica](/docs/configurations/parameters/sales/dn-grouping) i [Parametri grupisanja faktura](/docs/configurations/parameters/sales/invoice-grouping)).

- **Grupisanje prema projektu**: omogućavanjem ove opcije dokumenti će se grupisati prema projektu. Grupisanje se primenjuje i na projekte navedene na nivou reda artikla. Ako neki redovi artikala nemaju pridružen projekat, kreiraće se zasebna primka za sve artikle koji nemaju pridružen projekat. Ako je projekat naveden u zaglavlju izvornog dokumenta, preneće se i u zaglavlje odredišnog dokumenta; u suprotnom će ostati naveden samo u redovima artikala.

- **Grupisanje prema vrsti i načinu plaćanja**: omogućavanjem ove opcije dokumenti će se grupisati prema vrsti i načinu plaćanja navedenim u nalogu. Ti podaci biće preneti u zaglavlje kreirane primke.

- **Grupisanje prema odredištu**: omogućavanjem ove opcije dokumenti će se grupisati prema odredištu navedenom u nalozima. Taj podatak biće prenet u zaglavlje kreirane primke, na karticu *Prevoz*.