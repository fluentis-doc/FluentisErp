---
title: Novi prijem robe
sidebar_position: 3
---

Obrazac se otvara putem menija **Nabavka > Prijem robe > Kreiraj prijem robe** ili iz obrasca za pretragu **Prijema robe** klikom na dugme **Novo**.

## *Kako kreirati prijem robe*

<details>

<summary>Kliknite za prikaz osnovnih koraka</summary>

1. **Unesite obavezne podatke**: **Tip** i **Dobavljač**. Polja **Godina**, **Broj** i **Datum unosa** automatski će biti popunjena.

2. **Unesite artikle**: dvostrukim klikom na polje **Šifra artikla** otvara se pomoćni prozor za izbor artikla, koji omogućava pretragu i izbor postojećeg artikla. Svi ostali podaci reda, kao što su **jedinica mere**, **količina** i **cena**, automatski se popunjavaju, ali ih je moguće izmeniti.

   Kao alternativu moguće je izabrati **Vrstu reda** **Artikal bez klase** i ručno uneti ostale podatke.

3. **Po potrebi unesite dodatne informacije** na karticama **Lotovi i serijski brojevi** i **Podaci artikla**.

</details>

## **1. Obavezni podaci**

Za kreiranje prijema robe potrebno je uneti sledeće podatke:

- **Dobavljač**: može se izabrati pomoću [pomoći pri unosu](/docs/guide/common/operations-with-data/manual-entry-or-help-and-data-selection) ili uneti [ručno](/docs/guide/common/operations-with-data/manual-entry-or-help-and-data-selection).
- **Tip dokumenta**: unapred je definisan u tabeli [Vrste prijema robe](/docs/configurations/tables/purchase/goods-receipt-types). Ovo polje određuje opseg numeracije dokumenta i automatski predlaže **Broj** na osnovu datuma unosa i poslednjeg dodeljenog broja.
- **Broj prijema**: automatski se predlaže prema izabranom tipu dokumenta, ali ga je moguće ručno izmeniti uz poštovanje pravila redosleda između datuma i broja.
- **Datum prijema**: automatski se predlaže trenutni datum, ali ga je moguće ručno izmeniti uz poštovanje pravila redosleda između datuma i broja.
- **Projekat**: nalazi se ispod tabele artikala i predstavlja projekat koji će biti povezan sa dokumentom. Bira se pomoću pomoći za izbor projekta.

## **2. Artikli**

- **Vrsta reda** omogućava izbor različitih vrsta artikala iz padajućeg menija:
> - **Kodifikovani artikal**: artikli definisani u šifarniku koji se mogu knjižiti u analitičkom računovodstvu i evidentirati u skladištu. <br />
> - **Besplatan artikal**: obrađuje se kao kodifikovani ili nekodifikovani artikal u poreskom i skladišnom smislu, ali se zbog toga što je reč o besplatnom artiklu prikazuje zasebno u sažecima dokumenta. U zavisnosti od oznake **Teret PDV-a**, obračunava se da li trošak PDV-a besplatnog artikla snosi obveznik ili ne.

:::note Napomena
Ako se unos započne direktnim unosom artikla, njegova **klasa**, **šifra** i **Tip linije** (**Artikal sa klasom**) biće automatski popunjeni.
:::

- **Šifra**: odnosi se na barkod artikla definisan u *Šifarnik artikala > kartica Barkod*.

- **Klasa / Šifra / Opis artikla**: mogu se uneti ručno ili pomoću pomoći pri unosu, koja će ponuditi sve podatke definisane u šifarniku artikala. Nakon izbora artikla njegov **Opis** automatski će se preuzeti iz šifarnika. Ako artikal ima definisane **Varijante**, željena varijanta može se izabrati na kartici **Podaci o artiklu**.

- **Šifra / Varijanta stavke dobavljača**: odnosi se na šifru koju dobavljač koristi za identifikaciju artikla i njegove eventualne varijante. Ovaj podatak automatski se predlaže ako je u šifarniku artikla, na kartici [Preferirani dobavljači](/docs/erp-home/registers/items/create-new-item/), povezan odgovarajući artikal dobavljača.

- **Jedinica mere**: automatski se predlaže osnovna jedinica mere artikla, ali ako su u šifarniku definisane alternativne jedinice mere, korisnik može izabrati neku od njih.

- **Količina dokumenta**: predstavlja količinu u osnovnoj jedinici mere. Unosi se količina iz izvršene narudžbine dobavljaču, ali unos nije obavezan.

- **Primljena količina**: predstavlja stvarno primljenu količinu.

- **Cena**: predstavlja **cenu** iz narudžbine dobavljaču, ako je red prijema nastao izvršenjem reda narudžbine, odnosno **poslednji trošak** iz šifarnika artikala.

- **Referenca naloga**: ako je red nastao izvršenjem reda narudžbine dobavljaču, prikazuje se broj izvršene narudžbine.

- **Lokacija**: ako je za predložak definisana podrazumevana lokacija, ona će biti automatski predložena. U suprotnom se može uneti [ručno](/docs/guide/common/operations-with-data/manual-entry-or-help-and-data-selection), ako skladište podržava upravljanje lokacijama.

#### Specifična dugmad

> **Preuzimanje iz narudžbine**: omogućava kreiranje prijema robe izvršenjem redova narudžbine dobavljaču putem postupka [Izvršenje narudžbina dobavljačima](/docs/purchase/purchase-delivery-note/insert-purchase-delivery-note/purchase-delivery-note).
>
> **Upravljanje ambalažom**: otvara upravljanje povratnom ambalažom korišćenom u dokumentu nabavke. Dugme postaje aktivno nakon čuvanja dokumenta, ali pre njegovog knjiženja.
> Klikom na ovo dugme otvara se odgovarajući obrazac u kojem je moguće uneti količinu, izabrati red i klikom na dugme **Izvrši** preneti izabranu ambalažu u redove artikala. U ovom obrascu prikazuju se artikli definisani sa vrstom **Ambalaža** koji se nalaze u tabeli [Povratna ambalaža](/docs/configurations/tables/logistics/package-to-be-returned).

### 2.1 Lotovi

U dve tabele moguće je uneti lotove i serijske brojeve koji će biti primljeni u skladište.

Ako za artikal nije uključeno upravljanje [Lotovima i serijskim brojevima](/docs/erp-home/registers/items/create-new-item), ova kartica biće onemogućena.

#### Specifično dugme

> **Obriši lotove**: briše izabrani red lota.

### 2.2 Podaci artikla

Na ovoj kartici prikazuju se i unose dodatni podaci o artiklu.

- **Artikal**: prikazuje artikal izabran u gornjoj tabeli.

- **Varijanta**: u ovom polju moguće je izabrati jednu od varijanti artikla definisanih na kartici [Varijante](/docs/erp-home/registers/items/create-new-item) u šifarniku artikla. Ako su u cenovniku definisane različite cene i/ili popusti za pojedine varijante, oni će se automatski ažurirati nakon izbora druge varijante.

- **Skladište i predložak**: omogućava izbor skladišta i predloška koji će se koristiti za skladišno knjiženje artikla. Ako je red artikla preuzet iz narudžbine dobavljaču, automatski će biti predloženi skladište i predložak definisani u narudžbini. U suprotnom ih je moguće ručno odrediti za svaki pojedinačni red artikla.

:::tip Zapamtite

Ako polja **Skladište** i **Predložak** nisu popunjena, prilikom knjiženja prijema robe koristiće se vrednosti definisane u **Parametri narudžbina dobavljačima** > kartica [Knjiženje](/docs/configurations/parameters/purchase/purchase-orders-parameters).

:::

- **Projekat**: predstavlja projekat koji će biti povezan sa dokumentom. Ako je projekat izabran u zaglavlju dokumenta, automatski će biti prenet na sve redove artikala. U suprotnom se može izabrati pomoću pomoći za izbor projekta.

- **Alternativna jedinica mere / Alternativna količina**: ako je u [šifarniku artikla](/docs/erp-home/registers/items/create-new-item) definisana alternativna jedinica mere sa oznakom **Podrazumevano** i ako je u **Parametri narudžbina dobavljačima** uključena oznaka **Automatski predlog alternativne jedinice mere**, ove vrednosti automatski će biti predložene prilikom unosa artikla.

### 2.3 Analitika

Može sadržati podatke o mestima troška i profitnim centrima na koje se raspoređuju vrednosti artikala.

Ovi podaci mogu se uneti ručno ili automatski (ako su mesta troška, odnosno profitni centri prethodno definisani u **šifarniku kontakata**, **šifarniku artikala** ili **kontnom planu**).

#### Specifična dugmad

import DeleteCostCenter from './../../import/buttons/delete-cc.md'
import DeleteProfitCenter from './../../import/buttons/delete-pc.md'

> <DeleteCostCenter />
> <DeleteProfitCenter />

### 2.4 Extra Data

import DocItemExtraData from './../../import/sections/doc-item-extradata.md'

<DocItemExtraData />