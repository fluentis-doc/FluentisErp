---
title: Novi prijem robe
sidebar_position: 3
---

Obrazac se otvara putem izbornika **Nabava > Prijem robe > Izradite prijem robe** ili iz obrasca za pretraživanje **Prijema robe** klikom na gumb **Novo**.

## *Kako kreirati prijem robe*

<details>

<summary>Kliknite za prikaz osnovnih koraka</summary>

1. **Unesite obvezne podatke**: **Tip** i **Dobavljač**. Polja **Godina**, **Broj** i **Datum unosa** automatski će se popuniti.

2. **Unesite artikle**: dvostrukim klikom u polje **Šifra artikla** otvara se pomoćni prozor za odabir artikla, koji omogućuje pretraživanje i odabir postojećeg artikla. Svi ostali podaci retka, kao što su **mjerna jedinica**, **količina** i **cijena**, automatski se popunjavaju, ali ih je moguće izmijeniti.

   Kao alternativu moguće je odabrati **Vrstu retka** **Artikl bez klase** te ručno unijeti ostale podatke.

3. **Po potrebi unesite dodatne informacije** na karticama **Lotovi i serijski brojevi** te **Podaci artikla**.

</details>

## **1. Obvezni podaci**

Za kreiranje zaprimanja robe potrebno je unijeti sljedeće podatke:

- **Dobavljač**: može se odabrati pomoću [pomoći pri unosu](/docs/guide/common/operations-with-data/manual-entry-or-help-and-data-selection) ili unijeti [ručno](/docs/guide/common/operations-with-data/manual-entry-or-help-and-data-selection).
- **Tip dokumenta**: unaprijed je definirana u tablici [Vrste zaprimanja robe](/docs/configurations/tables/purchase/goods-receipt-types). Ovo polje određuje raspon numeracije dokumenta te automatski predlaže **Broj** na temelju datuma unosa i posljednjeg dodijeljenog broja.
- **Broj prijema**: automatski se predlaže prema odabranoj vrsti dokumenta, ali ga je moguće ručno izmijeniti uz poštivanje pravila slijeda između datuma i broja.
- **Datum prijema**: automatski se predlaže trenutni datum, ali ga je moguće ručno izmijeniti uz poštivanje pravila slijeda između datuma i broja.
- **Projekt**: nalazi se ispod tablice artikala i predstavlja projekt koji će biti povezan s dokumentom. Odabire se putem pomoći za odabir projekta.

## **2. Artikli**

- **Vrsta retka** omogućuje odabir različitih vrsta artikala iz padajućeg izbornika:
> - **Kodificirani artikl**: artikli definirani u šifarniku koji se mogu knjižiti u analitičkom računovodstvu i evidentirati u skladištu. <br />
> - **Besplatni artikl**: obrađuje se kao kodificirani ili nekodificirani artikl u poreznom i skladišnom smislu, ali se zbog toga što je riječ o besplatnom artiklu iskazuje zasebno u sažecima dokumenta. Ovisno o oznaci **Teret PDV-a**, izračunava se hoće li trošak PDV-a besplatnog artikla snositi obveznik ili ne.

:::note Napomena
Ako se unos započne izravno unosom artikla, njegova **klasa**, **šifra** i **Tip linije** (**Artikl s klasom**) popunit će se automatski.
:::

- **Šifra**: odnosi se na barkod artikla definiran u *Šifarnik artikala > kartica Barkod*.

- **Klasa / Šifra / Opis artikla**: mogu se unijeti ručno ili pomoću pomoći pri unosu, koja će ponuditi sve podatke definirane u šifarniku artikala. Nakon odabira artikla njegov će se **Opis** automatski preuzeti iz šifarnika. Ako artikl ima definirane **Varijante**, željena se varijanta može odabrati na kartici **Podaci o artiklu**.

- **Šifra / Varijanta stavke dobavljača**: odnosi se na šifru koju dobavljač koristi za identifikaciju artikla i njegove eventualne varijante. Ovaj se podatak automatski predlaže ako je u šifarniku artikla, na kartici [Preferirani dobavljači](/docs/erp-home/registers/items/create-new-item/), povezan odgovarajući artikl dobavljača.

- **Jedinica mjere**: automatski se predlaže osnovna mjerna jedinica artikla, ali ako su u šifarniku definirane alternativne mjerne jedinice, korisnik može odabrati neku od njih.

- **Količina dokumenta**: predstavlja količinu u osnovnoj mjernoj jedinici. Upisuje se količina iz izvršene narudžbe dobavljaču, ali unos nije obvezan.

- **Primljena količina**: predstavlja stvarno zaprimljenu količinu.

- **Cijena**: predstavlja **cijenu** iz narudžbe dobavljaču, ako je redak zaprimanja nastao izvršenjem retka narudžbe, odnosno **posljednji trošak** iz šifarnika artikala.

- **Referenca naloga**: ako je redak nastao izvršenjem retka narudžbe dobavljaču, prikazuje se broj izvršene narudžbe.

- **Lokacija**: ako je za predložak definirana zadana lokacija, ona će se automatski predložiti. U suprotnom se može unijeti [ručno](/docs/guide/common/operations-with-data/manual-entry-or-help-and-data-selection), ako skladište podržava upravljanje lokacijama.

#### Posebni gumbi

> **Izuzimanje iz narudžbe**: omogućuje kreiranje zaprimanja robe izvršenjem redaka narudžbe dobavljaču putem postupka [Izvršenje narudžbi dobavljačima](/docs/purchase/purchase-delivery-note/insert-purchase-delivery-note/purchase-delivery-note).
>
> **Upravljanje ambalažom**: otvara upravljanje povratnom ambalažom korištenom u dokumentu nabave. Gumb postaje aktivan nakon spremanja dokumenta, ali prije njegova knjiženja.
> Klikom na ovaj gumb otvara se odgovarajući obrazac u kojem je moguće unijeti količinu, odabrati redak te klikom na gumb **Izvrši** prenijeti odabranu ambalažu u retke artikala. U ovom se obrascu prikazuju artikli definirani s vrstom **Ambalaža** koji se nalaze u tablici [Povratna ambalaža](/docs/configurations/tables/logistics/package-to-be-returned).

### 2.1 Lotovi

U dvije tablice moguće je unijeti lotove i serijske brojeve koji će biti zaprimljeni u skladište.

Ako za artikl nije uključeno upravljanje [Lotovima i serijskim brojevima](/docs/erp-home/registers/items/create-new-item), ova će kartica biti onemogućena.

#### Posebni gumb

> **Izbriši lotove**: briše odabrani redak lota.

### 2.2 Podaci artikla

Na ovoj kartici prikazuju se i unose dodatni podaci o artiklu.

- **Artikl**: prikazuje artikl odabran u gornjoj tablici.

- **Varijanta**: u ovom je polju moguće odabrati jednu od varijanti artikla definiranih na kartici [Varijante](/docs/erp-home/registers/items/create-new-item) u šifarniku artikla. Ako su u cjeniku definirane različite cijene i/ili popusti za pojedine varijante, oni će se automatski ažurirati nakon odabira druge varijante.

- **Skladište i predložak**: omogućuje odabir skladišta i predloška koji će se koristiti za skladišno knjiženje artikla. Ako je redak artikla preuzet iz narudžbe dobavljaču, automatski će se predložiti skladište i predložak definirani u narudžbi. U suprotnom ih je moguće ručno odrediti za svaki pojedini redak artikla.

:::tip Zapamtite

Ako polja **Skladište** i **Predložak** nisu popunjena, prilikom knjiženja zaprimanja robe koristit će se vrijednosti definirane u **Parametri narudžbi dobavljačima** > kartica [Knjiženje](/docs/configurations/parameters/purchase/purchase-orders-parameters).

:::

- **Projekt**: predstavlja projekt koji će biti povezan s dokumentom. Ako je projekt odabran u zaglavlju dokumenta, automatski će se prenijeti na sve retke artikala. U suprotnom se može odabrati putem pomoći za odabir projekta.

- **Alternativna mjerna jedinica / Alternativna količina**: ako je u [šifarniku artikla](/docs/erp-home/registers/items/create-new-item) definirana alternativna mjerna jedinica s oznakom **Zadano** te je u **Parametri narudžbi dobavljačima** uključena oznaka **Automatski prijedlog alternativne mjerne jedinice**, ove će se vrijednosti automatski predložiti prilikom unosa artikla.

### 2.3 Analitika

Može sadržavati podatke o centrima troška i profitnim centrima na koje se raspoređuju vrijednosti artikala.
Ti se podaci mogu unijeti ručno ili automatski (ako su centri troška odnosno profitni centri prethodno definirani u **šifarniku kontakata**, **šifarniku artikala** ili **kontnom planu**).

#### Posebni gumbi

import DeleteCostCenter from './../../import/buttons/delete-cc.md'
import DeleteProfitCenter from './../../import/buttons/delete-pc.md'

> <DeleteCostCenter />
> <DeleteProfitCenter />

### 2.4 Extra Data

import DocItemExtraData from './../../import/sections/doc-item-extradata.md'

<DocItemExtraData />