---
title: Parametri grupisanja ulaznih faktura
sidebar_position: 7
---

Parametri grupisanja omogućavaju definisanje načina podele dokumenata tokom postupaka razduženja. U tu svrhu mogu se koristiti posebne oznake za grupisanje dokumenata prema različitim svojstvima, kao što su kategorija, vrsta dokumenta ili druge relevantne karakteristike.

Ove opšte parametre grupisanja potrebno je konfigurisati samo jednom, a oni će se automatski primenjivati na sve postupke i važiće za sve kupce i dobavljače. Međutim, ako kupac ili dobavljač zahteva drugačije ponašanje od onog definisanog opštim parametrima, potrebno je prilagoditi parametre grupisanja u njegovom šifarniku.

Na taj način obezbeđuje se fleksibilno upravljanje razduženjima koje se može prilagoditi posebnim zahtevima svakog kupca ili dobavljača, uz zadržavanje centralizovane i dosledne konfiguracije za većinu postupaka.

U ovom obrascu definišu se pravila grupisanja za sledeće postupke:

- [**Vrednovanje primki**](/docs/purchase/purchase-invoices/procedures/purchase-delivery-note-valorization)
- [**Vrednovanje povratnih primki**](/docs/purchase/purchase-invoices/procedures/return-delivery-notes-valorization)

Potrebno je označiti kolone koje odgovaraju željenim načinima grupisanja za ova razduženja.

:::note[Napomena]
Ako su u šifarniku dobavljača, na kartici *Parametri grupisanja za kupca/dobavljača*, definisani drugačiji uslovi grupisanja, oni imaju prednost u odnosu na opšte parametre.
:::

Kada se faktura kreira na osnovu jedne primke, preuzimaju se svi podaci iz zaglavlja izvornog dokumenta. Ako se faktura kreira na osnovu više primki, preuzimaju se podaci iz šifarnika dobavljača.

#### Posebna polja

- **Sažeto**: ako je opcija omogućena, pri vrednovanju više primki kreiraće se jedna faktura po dobavljaču. Ako nije omogućena, za svaku vrednovanu primku kreiraće se zasebna faktura. Grupisanje funkcioniše samo za *vrste primki* (nabavne ili prodajne, u zavisnosti od izabrane operacije) za koje je definisana ista *vrsta fakture* koju treba kreirati. Sve sledeće oznake mogu se koristiti samo ako je ova opcija omogućena.

- **Grupisanje prema vrsti dokumenta**: ako je opcija omogućena, svi dokumenti koji imaju istu *vrstu primke* grupisaće se u jednu fakturu.

- **Grupisanje prema godini**: omogućavanjem ove opcije primke će se grupisati prema godini kreiranja.

- **Grupisanje prema mesecu**: za grupisanje prema mesecu kreiranja primki potrebno je omogućiti i prethodnu opciju.

- **Grupisanje prema kursu**: ako je opcija omogućena, dokumenti sa istom valutom i istim kursom grupisaće se u jednu fakturu.

- **Grupisanje prema nalogu**: ova opcija koristi se samo za postupak *Kreiranje prodajnih otpremnica i faktura iz Pickinga* (pogledajte [Parametri grupisanja otpremnica](/docs/configurations/parameters/sales/dn-grouping) i [Parametri grupisanja faktura](/docs/configurations/parameters/sales/invoice-grouping)).

- **Grupisanje prema projektu**: omogućavanjem ove opcije dokumenti će se grupisati prema projektu. Grupisanje se primenjuje i na projekte navedene na nivou reda artikla. Ako neki redovi artikala nemaju pridružen projekat, kreiraće se zasebna faktura za sve artikle koji nemaju pridružen projekat. Ako je projekat naveden u zaglavlju izvornog dokumenta, preneće se i u zaglavlje odredišnog dokumenta; u suprotnom će ostati naveden samo u redovima artikala.

- **Grupisanje prema vrsti i načinu plaćanja**: omogućavanjem ove opcije dokumenti će se grupisati prema vrsti i načinu plaćanja navedenim u primci. Ti podaci biće preneti u zaglavlje kreirane fakture.

- **Grupisanje prema odredištu**: omogućavanjem ove opcije dokumenti će se grupisati prema odredištu navedenom u primkama na kartici *Prevoz*. Taj podatak biće prenet u zaglavlje kreirane fakture, na karticu *Otpremanje*.