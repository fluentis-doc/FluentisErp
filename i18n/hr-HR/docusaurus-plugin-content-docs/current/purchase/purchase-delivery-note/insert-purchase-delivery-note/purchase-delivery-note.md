---
title: Nova primka
sidebar_position: 2
---

Obrazac **Kreiranje primke** otvara se putem izbornika **Nabava > Primke > Nova primka** ili klikom na gumb **Novo** u obrascu [Pretraga primki](/docs/purchase/purchase-delivery-note/insert-purchase-delivery-note/search-delivery-note).

## *Kako kreirati primku*

<details>

<summary>Kliknite za prikaz osnovnih koraka</summary>

1. **Unesite obvezne podatke**: **Tip primke** i **Dobavljač**. Polja **Godina**, **Broj** i **Datum unosa** automatski će se popuniti.

2. **Unesite ili izmijenite neobvezne podatke** u zaglavlju, kao što su **popusti**, **pošiljka** i ostali podaci.

3. **Unesite artikle**: dvostrukim klikom na polje **Šifra artikla** otvara se pomoć za odabir artikala, pomoću koje možete pronaći i odabrati postojeći artikl. Svi ostali podaci retka, poput **mjerne jedinice**, **količine** i **cijene**, automatski će se popuniti, ali ih je moguće izmijeniti.

   Alternativno, kao **Tip linije** moguće je odabrati **Artikl bez klase** te ručno unijeti sve potrebne podatke.

4. **Unesite eventualne popuste ili druge dodatne informacije** na karticama **Popusti / Cjenici** i **Podaci artikla**.

5. **Dodajte podatke o prijevozu** robe na kartici **Prijevoz**.

6. **Provjerite karticu Sažeci** te po potrebi unesite dodatne troškove ili završne popuste.

7. Nakon potvrde primke **uključite oznaku *Kontrolirano* u zaglavlju** kako bi dokument bio dostupan za daljnje postupke.

</details>

## **1. Obvezni podaci**

- **Vrsta primke**: definira se u **Konfiguriranje > Tablice > Nabava > Tipovi primki**. Ovo polje određuje raspon numeracije dokumenta koji se unosi te automatski predlaže **Broj** primke na temelju datuma unosa i posljednjeg dodijeljenog broja.
- **Dobavljač**: može se unijeti pomoću [pomoći pri unosu](/docs/guide/common/operations-with-data/manual-entry-or-help-and-data-selection) ili [ručno](/docs/guide/common/operations-with-data/manual-entry-or-help-and-data-selection).
- **Interni broj**: automatski se predlaže prema vrsti dokumenta, ali se može ručno izmijeniti uz poštivanje pravila slijeda datuma i broja.
- **Datum unosa**: prema zadanim postavkama predlaže se trenutačni datum, ali se može ručno izmijeniti uz poštivanje pravila slijeda datuma i broja.
- **Broj**: u ovo je polje moguće unijeti broj dokumenta koji se može razlikovati od broja predloženog u prethodnom polju.

Obrazac sadrži više kartica.

## **2. Zaglavlje**

Nakon odabira obveznih podataka u gornjem dijelu obrasca korisnik može nastaviti unos sljedećih podataka [ručno](/docs/guide/common/operations-with-data/manual-entry-or-help-and-data-selection), pomoću [pomoći pri unosu](/docs/guide/common/operations-with-data/manual-entry-or-help-and-data-selection) ili će ih, ovisno o odabranom postupku, aplikacija popuniti *automatski*.

:::note Zapamtite

Ako je dokument *kreiran automatski*, primjerice postupkom [**Izvršenjem/Izuzimanjem narudžbi**](/docs/purchase/purchase-delivery-note/procedures/create-delivery-notes-from-orders), ovi će se podaci preuzeti iz *izvornog dokumenta* iz kojeg je generiran.

:::

### 2.1 Podaci o dobavljaču

Nakon odabira **Dobavljača**, svi podaci na kartici **Zaglavlje** automatski se popunjavaju prema postavkama definiranima u [šifarniku dobavljača](/docs/erp-home/registers/contacts/create-new-contact/accounting-data/accounting-data-intro), odnosno prema podacima njegove adrese i sljedećih odjeljaka:

- **Valuta**: odjeljak koji sadrži podatke o [Valuti](/docs/configurations/tables/general-settings/currencies), [Tečaju](/docs/guide/common/glossary/glossary-intro#currency-exchange) i [Datumu valute](/docs/guide/common/glossary/glossary-intro#currency-date).
- **Država**: odjeljak koji sadrži podatke o [Državi](/docs/guide/common/glossary/glossary-intro#country), [Jeziku](/docs/guide/common/glossary/glossary-intro#language) i [Zoni](/docs/guide/common/glossary/glossary-intro#zone).
- **Pošiljka**: odjeljak koji sadrži podatke o [Otpremi](/docs/erp-home/registers/contacts/create-new-contact/accounting-data/customer-vendors-data/delivery), [Paritetu isporuke](/docs/guide/common/glossary/glossary-intro#carriage), [Ambalaži](/docs/guide/common/glossary/glossary-intro#packing), zadanom [Cjeniku](/docs/erp-home/registers/contacts/create-new-contact/accounting-data/customer-vendors-data/price-list) i njegovom [razdoblju valjanosti](/docs/guide/common/glossary/glossary-intro#validity-date).

Korisnik može ručno obrisati ili izmijeniti sva navedena polja.

### 2.2 Neobvezni podaci zaglavlja

- **Status primke**: sljedeće oznake prikazuju status primke. Prilikom kreiranja primke nijedna od ovih oznaka nije uključena:

    > **Kontrolirano**: uključena oznaka omogućuje knjiženje / valorizaciju primke.  
    > **Valorizirano**: ova se oznaka automatski uključuje kada se primka valorizira kroz račun.  
    > **Djelomično valorizirano**: označava da je primka samo djelomično valorizirana kroz račun.  
    > **Prisilno valorizirano**: ova se oznaka uključuje ako je primka prisilno zatvorena prisilnim izvršenjem artikala, primjerice kada se preostala količina neće isporučiti pa se dokument smatra zatvorenim iako to inače ne bi bio.  
    > **Utovareno**: ova se oznaka automatski uključuje kada je dokument evidentiran u skladištu pomoću gumba **Automatsko knjiženje** na alatnoj traci ili putem [postupka knjiženja u skladište](/docs/purchase/purchase-delivery-note/procedures/load-delivery-notes-on-warehouse).  
    > **Knjiženo**: automatski se uključuje kada je primka proknjižena.  
    > **Poništen**: uključena oznaka omogućuje poništavanje primke.

:::note Napomena
Oznake je moguće ukloniti postupkom poništavanja operacije.
:::

- **Datum primitka**: u ovo se polje može unijeti datum primitka robe.

- **Datum utovara (na skladište)**: ovo se polje automatski popunjava trenutačnim datumom u trenutku knjiženja ili datumom korištenim za skladišno knjiženje, ovisno o korištenom postupku.

- **Bilješke dobavljača**: ovo se polje preuzima iz šifarnika dobavljača, a u slučaju kreiranja iz jedne narudžbe preuzimaju se podaci iz istoimenog polja narudžbe dobavljaču. Vrijednost se može unijeti i ručno.

- **Naša / Vaša referenca**: u ova se polja obično unose interna referenca i referenca dobavljača za dokument. Ako su definirane u šifarniku dobavljača, automatski će se preuzeti, a u suprotnom se mogu unijeti ručno.

  Ako je narudžba izvršena postupkom [Izvršenje narudžbi](/docs/purchase/purchase-delivery-note/procedures/create-delivery-notes-from-orders), u polja **Bilješke dobavljača** i **Naša / Vaša referenca** prenose se podaci iz istoimenih polja narudžbe dobavljaču (ovo vrijedi samo ako je primka kreirana na temelju podataka iz jedne narudžbe).

- **Početna bilješka**: moguće je odabrati napomene prethodno definirane u istoimenoj tablici koja se nalazi u izborniku **Konfiguriranje > Korisnost > Upravljanje šifriranim bilješkama**. Dvostrukim klikom na polje otvara se pomoć za odabir kodificiranih napomena, a moguće ih je unijeti i ručno.

- **Projekt**: pomoću pomoći pri unosu dokument se može povezati s projektom. Ovo povezivanje vrijedi samo na razini zaglavlja dokumenta. Projekt će se automatski popuniti ako je primka kreirana izvršenjem narudžbe koja sadrži projekt.

### 2.3 Plaćanje

**Uvjeti plaćanja** automatski se preuzimaju iz **Šifarnik dobavljača > kartica Plaćanja**, a korisnik ih može izmijeniti ili obrisati.
Ako je uz **Vrstu plaćanja** definiran financijski popust, njegov se iznos uzima u obzir isključivo u računovodstvenom dijelu, odnosno pri izračunu dospijeća plaćanja dokumenta, a ne u ukupnom iznosu primke.

:::note Napomena
Ako je dokument nastao izvršenjem jedne **Narudžbe dobavljaču** ili više narudžbi s istim uvjetima plaćanja, iz narudžbi će se preuzeti vrsta i uvjeti plaćanja.
:::

#### Posebni gumb

> **Izbriši plaćanja**: služi za brisanje odabranih redaka plaćanja.

### 2.4 Popusti

Prikazuju se samo zadani popusti preuzeti iz **Šifarnika dobavljača > kartica Popusti**, a korisnik ih može izmijeniti ili obrisati.

import TabDiscount from './../../../import/sections/tab-discount.md'

<TabDiscount />

### 2.5 Dodatni podaci

import TabExtraData from './../../../import/sections/tab-extra-data.md'

<TabExtraData />

## **Postupci zaglavlja**

### *Automatsko zaduživanje skladište*

Ovaj se postupak pokreće pomoću istoimenog gumba u zaglavlju dokumenta te se izvršava prema parametrima prethodno definiranim za primku (za više pojedinosti pogledajte isti postupak: [Knjiženje primke u skladište](/docs/purchase/purchase-delivery-note/procedures/load-delivery-notes-on-warehouse)).
Rezultat se može pregledati u **Logistika > [Zapisi](/docs/logistics/warehouse/stock-records/records)** ili u postupku [Knjiženje primke u skladište](/docs/purchase/purchase-delivery-note/procedures/load-delivery-notes-on-warehouse), na kartici **Sažetak**.

:::note Napomena
Ako je u [Parametrima nabavne primke](/docs/configurations/parameters/purchase/purchase-delivery-note-parameters) uključena oznaka **Automatski utovar/istovar**, prilikom uključivanja oznake **Kontrolirano** u zaglavlju primke automatski će se ponuditi knjiženje primke. Ovo će polje biti moguće uređivati tek nakon uključivanja oznake **Kontrolirano** i unosa **Broja** dokumenta.
:::

### *Izvršenje/Izuzimanje narudžbi*

Klikom na gumb **Izuzimanje iz narudžbe* u zaglavlju primke otvara se obrazac u kojem je moguće filtrirati narudžbe dobavljaču povezane s dobavljačem odabranim u dokumentu.

Ovim je postupkom moguće kreirati primku izvršenjem odgovarajuće narudžbe dobavljaču. Na taj se način u primku mogu prenijeti artikli uz potpuno ili djelomično izvršenje cijele narudžbe ili pojedinog retka.

Za korištenje ovog postupka moraju biti ispunjeni sljedeći uvjeti:

- dobavljač na narudžbi (ili svim narudžbama) mora biti isti kao dobavljač na primci;
- narudžba koja se izvršava mora imati uključenu oznaku **Ispisano** te mora biti **Potvrđena**.

Najprije je potrebno u zaglavlju nove primke odabrati **Tip primke** i **Dobavljača**. Nakon toga kliknite gumb **Izuzimanje iz narudžbe** kako biste otvorili obrazac za izvršenje.

#### Postupak

Filtri za dobavljača i valutu automatski će se postaviti prema dobavljaču odabranom na primci.

U području filtra moguće je odabrati prikaz podataka u obliku **Tablice**, **Hijerarhijske strukture** ili oba prikaza istodobno.

> **Struktura hijerarhije** omogućuje pregledniji prikaz pojedinih narudžbi i artikala koje sadrže. Također omogućuje masovni odabir svih artikala unutar određene narudžbe jednostavnim odabirom same narudžbe.  
> **Tablica** omogućuje veću prilagodbu obrasca dodavanjem polja iz **Navigatora objekata**. U tom se slučaju masovni odabir obavlja pomoću tipkovnice i gumba **Aktiviraj / Deaktiviraj samo odabrane retke** na alatnoj traci.

Nakon postavljanja željenih **Filtara**, klikom na gumb **Traži** u donjem će se dijelu prikazati sve ispisane, potvrđene i neizvršene ili djelomično izvršene narudžbe.

:::note Napomena
Postupak preuzima sve podatke iz narudžbe, zbog čega će se primijeniti uvjeti nabave definirani u narudžbi, čak i ako su se oni u međuvremenu promijenili.
Ako se izvršava više narudžbi koje imaju iste uvjete plaćanja i/ili isto odredište, u primku će se prenijeti podaci iz narudžbi. U suprotnom će se preuzeti podaci iz šifarnika dobavljača.
:::

U tablici rezultata korisnik može:

- odabrati sve ili samo pojedine ponuđene artikle. Dovoljno je uključiti oznaku na početku retka artikla. **Količina za izvršenje** automatski će biti jednaka **Preostaloj količini**;
- odabrati pojedine artikle za **djelomičnu količinu**. U tom je slučaju potrebno ručno izmijeniti vrijednost u polju **Količina za izvršenje**.

Za završetak postupka potrebno je kliknuti gumb **Izuzimanje**, koji će preuzeti sve podatke iz narudžbe i prenijeti ih u primku.

:::tip Zapamtite
Napomene unesene u zaglavlje narudžbe (poput **Naša / Vaša referenca** ili **Početne napomene**) prenose se u zaglavlje primke samo ako se podaci preuzimaju iz jedne narudžbe.
:::

#### Posebni gumbi

> **Traži**: omogućuje pretraživanje narudžbi dobavljaču.  
> **Izuzimanje**: prenosi podatke odabranih narudžbi u novu primku.  
> **Prisilno izvršenje narudžbe**: omogućuje prisilno izvršenje narudžbe ili odabranih redaka artikala.  
> **Označi sve**: označava sve artikle na popisu.  
> **Odznači sve**: uklanja oznaku sa svih artikala na popisu.  
> **Aktiviraj samo odabrane retke**: uključuje oznake za sve retke odabrane mišem.  
> **Deaktiviraj samo odabrane retke**: isključuje oznake za sve retke odabrane mišem.

:::important Zapamtite
Ako se za isti redak artikla unutar iste primke izvrši više djelomičnih izvršenja, moguće je odabrati hoće li se količine zbrojiti u jedan redak primke ili će ostati u zasebnim retcima. To se određuje isključivanjem ili uključivanjem oznake **Količina izvršenja artikla se ne zbraja** u tablici [Vrste primki](/docs/configurations/tables/purchase/purchase-delivery-notes-type/).
:::

## **3. Artikli**

Na ovoj kartici unose se svi artikli zajedno s pripadajućim podacima.
Podaci se mogu unijeti ručno, pomoću pomoći pri unosu ili ih mogu automatski predložiti povezani postupci ([Kreiranje primke iz zaprimanja robe](/docs/purchase/purchase-delivery-note/procedures/create-delivery-note-from-goods-receipt) ili [Kreiranje primke izvršenjem narudžbi](/docs/purchase/purchase-delivery-note/procedures/create-delivery-notes-from-orders)).
Za unos novog artikla u tablicu dovoljno je postaviti se na novi redak i unijeti potrebne podatke ili koristiti gumb **Novi artikl** na alatnoj traci.

:::note Napomena
Ako je primka kreirana izvršenjem narudžbe dobavljaču, svi će se podaci automatski preuzeti iz narudžbe.
:::

### 3.1 Obvezni podaci

import RowNumber from './../../../import/fields/row-number.md'

<RowNumber />

- **Tip linije** omogućuje odabir različitih vrsta artikala iz padajućeg izbornika:

> - *Artikl s klasom*: artikli definirani u šifarniku koji se mogu knjižiti u analitičkom računovodstvu i evidentirati u skladištu. <br />
> - *Artikl bez klase*: opisni artikli koji se mogu knjižiti u analitičkom računovodstvu, ali se ne mogu evidentirati u skladištu. <br />
> - *Artikl troška*: može biti s klasom ili bez klase. U sažecima dokumenta prikazuje se zasebno. Ako je kodificiran i porezno relevantan, evidentira se u skladištu. Ako je bez klase ili nije porezno relevantan, neće se evidentirati u skladištu. <br />
> - *Bilješka*: opisni redak koji se ispisuje na dokumentu. Ne utječe na računovodstvo niti na skladište.
> - *Gratis artikl*: obrađuje se kao artikl s klasom ili bez klase u poreznom i skladišnom smislu, ali se zbog toga što je riječ o besplatnom artiklu iskazuje zasebno u sažecima dokumenta. Ovisno o oznaci **Teret PDV-a**, izračunava se hoće li trošak PDV-a besplatnog artikla snositi obveznik ili ne.

:::note Napomena
Ako se unos započne izravno unosom artikla, njegova **klasa**, **šifra** i **vrsta retka** (**Artikl s klasom**) popunit će se automatski.
:::

import ItemClassDescription from './../../../import/sections/item-class-description.md'

<ItemClassDescription />

import UM from './../../../import/fields/item-um.md'

<UM />

import Quantity from './../../../import/fields/item-quantity.md'

<Quantity />

- **Cijena**: cijena se preuzima iz cjenika definiranog u šifarniku kontakta. Cjenik koji se koristi za pojedini artikl prikazan je na kartici **Popusti / Cjenici**. Isti dokument može sadržavati artikle čije su cijene preuzete iz različitih cjenika ako je u šifarniku kontakta definirano više uzastopno povezanih cjenika (pogledajte [Šifarnik kontakata](/docs/erp-home/registers/contacts/create-new-contact/accounting-data/customer-vendors-data/price-list)). Dvostrukim klikom na polje **Cjenici** (kartica **Popusti / Cjenici**) korisnik može odabrati drugi cjenik od zadanog, iz kojeg će se preuzeti cijena odabranog artikla.

  Ako nije definiran nijedan cjenik, predložena vrijednost može se preuzeti iz **posljednjeg troška** u šifarniku artikla, pod uvjetom da u [Parametrima nabavne primke](/docs/configurations/parameters/purchase/purchase-delivery-note-parameters) nije uključena oznaka **Trošak nula ako nedostaje cjenik**.

- **Iznos**: automatski se izračunava nakon primjene popusta.

- **Ukupni popusti**: prikazuje ukupan iznos popusta definiranih na kartici **Popusti / Cjenici** za svaki redak artikla.

- **PDV**: prednost ima vrijednost definirana u polju **PDV** u **Šifarniku kontakta**. Ako ona nije definirana, predlaže se vrijednost iz **Šifarnika artikla**, ali ju korisnik može promijeniti. Ovo je obvezno polje.

### 3.2 Neobvezni podaci o artiklu

- **Šifra / Opis artikla dobavljača**: u ovom je odjeljku moguće unijeti šifru i opis koje dobavljač koristi za identifikaciju artikla. Ovi se podaci automatski predlažu ako je u šifarniku artikla, na kartici [Preferirani dobavljači](/docs/erp-home/registers/items/create-new-item), povezan odgovarajući dobavljačev artikl.
- **Vrsta prometa nabave**: preuzima se iz kartice [Općenito](/docs/erp-home/registers/items/create-new-item) u šifarniku artikla. Ako nije definirana, neće biti predložena nikakva vrijednost, a prilikom knjiženja računa koristit će se vrijednost iz polja **Zadani konto troška/prihoda** u šifarniku kontakta.

#### Posebni gumbi

> **Preračun reciklaže**: ako je za dokument uključeno [Upravljanje Conai sustavom](/docs/sales/sales-flow/conai), ovim je gumbom moguće ponovno izračunati vrijednosti nakon eventualnih izmjena.
>
> **Upravljanje ambalažom**: omogućuje otvaranje upravljanja povratnom ambalažom korištenom u dokumentu nabave.  
> Gumb postaje aktivan nakon spremanja dokumenta, ali prije njegova knjiženja u skladište.  
> Klikom na ovaj gumb otvara se odgovarajući obrazac u kojem je potrebno unijeti količinu, odabrati redak te klikom na gumb **Execute** prenijeti odabranu ambalažu u retke artikala. U ovom se obrascu prikazuju artikli koji imaju vrstu **Ambalaža** i koji su definirani u tablici [Povratna ambalaža](/docs/configurations/tables/logistics/package-to-be-returned).
>
> **Ažuriraj lokaciju**: koristi se za ažuriranje lokacije na više redaka artikala. Gumb postaje aktivan kada su odabrana najmanje dva artikla te otvara pomoć za odabir lokacije, u kojoj je moguće odabrati novu lokaciju za sve odabrane artikle.
>
> **Storno zaprimanja**: gumb je aktivan samo za [Vrste primki](/docs/configurations/tables/purchase/purchase-delivery-notes-type/) čija je **Vrsta primke** postavljena na **Povrat**. U obrascu se prikazuju sve primke za odabranog dobavljača koje su već proknjižene u skladište. Nakon odabira redaka artikala i količina za storno dovoljno je kliknuti gumb **Storno zaprimanja** kako bi se prenijeli u primku.
>
> **Ažurirajte cjenike**: gumb **Ažuriraj cjenik trenutnih cijena** omogućuje ažuriranje cijena u trenutačnom cjeniku za svaki odabrani redak artikla.  
> Gumb **Izradite novi cjenik s novom valjanošću** otvara skočni prozor u kojem je moguće unijeti razdoblje valjanosti novog cjenika. Novi će cjenik sadržavati samo odabrane retke te će biti dodijeljen dobavljaču navedenom na primci.

:::important Zapamtite
Prilikom kreiranja ili ažuriranja cjenika ovim postupkom u cjenik se prenose samo popusti koji su ručno uneseni na primci.
:::

### 3.3 Popusti / Cjenici

- **Cjenik**: prikazuje cjenik iz kojeg je preuzeta cijena artikla, zajedno s datumom početka i završetka njegove valjanosti te posebnim uvjetima (primjerice **Tipom raspona** popusta) dodijeljenima artiklu u cjeniku.

- **Ručna cijena**: automatski se uključuje kada je cijena artikla ručno unesena ili izmijenjena.

- **Popusti**: prikazuju se svi popusti povezani s artiklom, pri čemu svaki ima vlastitu osnovicu i način primjene.

:::important Zapamtite
Kako bi bilo moguće koristiti popuste na poreznu osnovicu, potrebno je u bazi podataka za odgovarajuće društvo uključiti opći parametar **GEN-GlobalSettings_CalculateDiscountOnAmount**.

Ako taj parametar nije uključen, popusti na poreznu osnovicu automatski će se pretvoriti u kaskadne popuste.
:::

#### Posebni gumb

> **Otkaži popuste**: briše odabrani popust iz pripadajuće tablice.

### 3.4 Podaci o artiklu

Na ovoj kartici prikazuju se i unose dodatni podaci o artiklu.

- **Artikl**: prikazuje klasu, šifru i opis artikla odabranog u tablici.
- **Varijanta**: u ovom je polju moguće odabrati jednu od varijanti artikla definiranih na kartici [Varijante](/docs/erp-home/registers/items/create-new-item) u šifarniku artikla. Ako su u cjeniku definirane različite cijene i/ili popusti za pojedine varijante, oni će se automatski ažurirati nakon odabira druge varijante.
- **Bilješka**: predstavlja napomene povezane s retkom artikla. Mogu se unijeti i pomoću pomoći za odabir kodificiranih napomena. Bit će prenesene u sve dokumente koji nastanu iz ovog dokumenta.
- **Skladište i predložak**: prikazuju skladište i predložak koji će se automatski koristiti prilikom knjiženja artikala u skladište. Podaci se preuzimaju iz [Vrsta primki](/docs/configurations/tables/purchase/purchase-delivery-notes-type) ili iz narudžbe dobavljaču ako je primka nastala izvršenjem narudžbe. Za svaki redak artikla mogu se ručno izmijeniti.
- **Lokacija**: automatski se predlaže ako je uz korišteni predložak u tablici [Skladišni predlošci](/docs/configurations/tables/logistics/warehouse-templates) definirana lokacija ili ako je artikl dodijeljen u [Mapi lokacija artikala](/docs/logistics/warehouse/location/item-location-map/). Vrijednost se može unijeti ili izmijeniti ručno.
- **Valorizirano**: označava da je redak artikla valoriziran, odnosno izvršen kroz ulazni račun.
- **Djelomična valorizacija**: označava da je redak artikla valoriziran samo za dio količine.
- **Prisilno valorizirana**: označava da je redak artikla prisilno valoriziran.
- **Projekt**: predstavlja projekt koji će biti povezan s dokumentom. Ako je projekt odabran u zaglavlju dokumenta, automatski će se prenijeti na sve retke artikala. U suprotnom se može odabrati putem pomoći za odabir projekta.
- **Alternativna mjerna jedinica / Alternativna količina**: ako je u [šifarniku artikla](/docs/erp-home/registers/items/create-new-item) definirana alternativna mjerna jedinica s uključenom oznakom **Zadano** te je u parametrima narudžbi dobavljaču uključena oznaka **Automatski prijedlog alternativne mjerne jedinice**, ove će se vrijednosti automatski predložiti prilikom unosa artikla. U suprotnom je moguće odabrati neku od alternativnih mjernih jedinica definiranih za artikl.
- **Cijena alternativne mjerne jedinice**: ako je uključeno, označava da se cijena unesena na retku artikla odnosi na alternativnu, a ne na osnovnu mjernu jedinicu. Ova oznaka, zajedno s poljima **Alternativna mjerna jedinica** i **Alternativna količina**, vidljiva je samo ako je u [Parametrima narudžbi dobavljaču](/docs/configurations/parameters/purchase/purchase-orders-parameters) uključena oznaka **Upravljanje dvostrukom mjernom jedinicom**.
- **Marka**: predstavlja marku artikla preuzetu iz šifarnika artikla ili iz cjenika artikla.
- **Referenca narudžbe/naloga**: ako je primka generirana iz narudžbe, u ovom će se polju prikazati referenca na tu narudžbu.
- **Detalji izjave**: prikazuje se [Izjava o namjeri](/docs/finance-area/declarations/declarations/intent-declaration) koja je korištena za određivanje PDV-a artikla. Ako postoji više važećih izjava, iz padajućeg izbornika moguće je odabrati drugu izjavu.

### 3.5 Lotovi i serijski brojevi

U ove dvije tablice moguće je unijeti lotove i serijske brojeve koji će se evidentirati u skladištu.
Ako artikl nema omogućeno upravljanje [Lotovima i serijskim brojevima](/docs/erp-home/registers/items/create-new-item), ova će kartica biti onemogućena.

:::tip Zapamtite
Ako je u [Parametrima nabavne primke](/docs/configurations/parameters/purchase/purchase-delivery-note-parameters) isključena oznaka **Lotovi i serijski brojevi su obvaezni**, dokument će biti moguće spremiti i bez unosa lotova ili serijskih brojeva.
Prilikom knjiženja primke u skladište lotovi će se automatski predložiti ako prethodno nisu uneseni.
:::

#### Posebni gumbi

import DeleteLot from './../../../import/buttons/delete-lot.md'
import DeleteSN from './../../../import/buttons/delete-sn.md'

> <DeleteLot />
> <DeleteSN />

### 3.6 Analitika

import TabAnalytic from './../../../import/sections/tab-analytic.md'

<TabAnalytic />

#### Posebni gumbi

import DeleteCostCenter from './../../../import/buttons/delete-cc.md'
import DeleteProfitCenter from './../../../import/buttons/delete-pc.md'

> <DeleteCostCenter />
> <DeleteProfitCenter />

### 3.7 Dodatni podaci

import DocItemExtraData from './../../../import/sections/doc-item-extradata.md'

<DocItemExtraData />

### 3.8 Dokumenti u privitku

import DocAttachDocument from './../../../import/sections/doc-attach-document.md'

<DocAttachDocument />

### 3.9 Conai materijal za artikl

Ova je kartica vidljiva ako je za aktivno društvo omogućeno upravljanje Conai sustavom.

U ovom će se odjeljku prikazati ambalažni materijali od kojih se sastoji artikl, zajedno s pripadajućom mjernom jedinicom, jediničnom težinom (umanjenom za eventualni postotak oslobođenja definiran u šifarniku kupca) te ukupnom težinom dobivenom množenjem broja prodanih artikala s jediničnom težinom.
Prilikom spremanja dokumenta ili nakon klika na gumb **Preračun reciklaže**, Fluentis će automatski dodati jedan ili više redaka troška preuzimajući artikl materijala, pri čemu će količina odgovarati zbroju količina, a cijena Conai trošku za odgovarajući materijal.
Više informacija o [Upravljanju Conai sustavom](/docs/sales/sales-flow/conai) u Fluentisu dostupno je na povezanoj stranici.

### 3.9 Odjeljak vrijednosti

Odjeljak u donjem desnom dijelu prikazuje sažetak troškova koji sudjeluju u formiranju konačne cijene svakog artikla odabranog u tablici artikala. Prikazana su sljedeća polja:

- **Jedinična cijena**: vrijednost iz polja **Cijena**;
- **Količina**: vrijednost iz polja **Količina** ili **Alternativna količina**, ovisno o oznaci **Cijena alternativne mjerne jedinice**;
- **Iznos retka**: Cijena artikla × Količina artikla;
- **Ukupno rabat**: zbroj svih popusta za artikl, uključujući završne popuste;
- **Iznos**: Iznos retka − Ukupni popusti;
- **Porez**: Iznos × stopa PDV-a artikla;
- **Ukupno**: Iznos + Porez.

## **4. Sažeci**

Na različitim karticama ovog odjeljka prikazane su glavne informacije o cijelom dokumentu te pojedini posebni gumbi.

### 4.1 Konačni popusti

import SummariesFinalDiscount from './../../../import/sections/summaries-final-discount.md'

<SummariesFinalDiscount />

### 4.2 Troškovi

Prikazuju se troškovi definirani u šifarniku kontakta, na kartici **Troškovi / Popusti**. U ovoj se tablici troškovi unose kao pozitivne vrijednosti, a popusti kao negativne.
Ove se stavke primjenjuju na cijeli dokument i ne raspodjeljuju se na pojedine retke artikala. Mogu uključivati dodatne troškove, ukupne popuste ili dodatke koji se primjenjuju na cijeli dokument. Ako su definirani u šifarniku kontakta, automatski će se predložiti prilikom kreiranja dokumenta.

- **Tip / Opis**: omogućuje odabir vrste troška (definirane u tablici [Vrste troškova](/docs/configurations/tables/general-settings/expenses-types)) te određivanje postotka troška koji će se primijeniti.
- **Iznos troška**: prikazuje iznos troška izražen u valuti dokumenta.
- **PDV**: označava stopu PDV-a koja će se primijeniti na uneseni trošak.
- **Postotak / Vrijednost**: određuje hoće li se trošak izračunavati kao postotak ili kao unaprijed definirani novčani iznos. Ako je odabrana opcija **Vrijednost**, iznos se unosi u istoimeno polje.
- **Postotak**: brojčana vrijednost postotka troška.

:::note Napomena
Ako odabrana **Tip troška** ima uključenu oznaku [Raspodijeljeno](/docs/configurations/tables/general-settings/expenses-types), prilikom knjiženja primke u skladište trošak će se raspodijeliti na sve artikle prema ukupnom iznosu svakog retka artikla. Rezultat raspodjele vidljiv je u [Skladišnom knjiženju](/docs/logistics/warehouse/stock-records/record).

1. Ako artikli imaju cijenu: ukupni će se trošak proporcionalno raspodijeliti prema neto iznosu svakog artikla. Dobiveni će se iznos dodati početnoj cijeni artikla u polju **Ukupni iznos** skladišnog knjiženja. Ako je za pojedini redak iznos jednak 0, za potrebe raspodjele smatrat će se da iznosi 1 kako bi svi artikli sudjelovali u raspodjeli troška.
2. Ako svi artikli imaju cijenu 0: trošak će se ravnomjerno raspodijeliti na sve retke artikala, a na temelju te raspodjele izračunat će se **Iznos knjiženja / Upravljački iznos** u skladišnom knjiženju, uzimajući u obzir količine pojedinog artikla.
:::

### 4.3 Sažetak PDV-a

Prikazuje se sažetak PDV-a dokumenta za svaki pojedini PDV kod.

### 4.4 Sažetak dospijeća

Prikazuje sažetak dospijeća dokumenta za svaku **vrstu** i **način** plaćanja.

- **Broj**: redni broj retka.
- **Plaćanje**: alfanumerička oznaka **tipa plaćanja** preuzeta iz **Zaglavlja dokumenta > kartica Plaćanja**.
- **Iznos**: izračunati iznos dospijeća. Može se ručno promijeniti, pri čemu se automatski uključuje oznaka **Ručna izmjena**. (Sustav automatski provjerava i upozorava ako postoji neslaganje između iznosa dospijeća i ukupnog iznosa računa.)
- **Datum dospijeća**: izračunati datum dospijeća. Može se ručno promijeniti, pri čemu se automatski uključuje oznaka **Ručna izmjena**.
- **Troškovi naplate**: polje u kojem se prikazuju izračunati troškovi naplate.
- **PDV**: stopa PDV-a koja se primjenjuje na troškove naplate (može se postaviti i ručno).
- **Predlošci za knjiženje**: omogućuje izravan odabir računovodstvenog predloška u računu, na temelju kojeg će se automatski kreirati knjiženje naplate ili plaćanja. Obratite pozornost na predložak jer će koristiti definirane račune čak i ako nije naveden podkonto, zbog čega postoji sljedeće polje.
- **Konto / Podkonto kupca ili dobavljača**: konto koji se koristi za naplatu ili plaćanje dospijeća (primjerice blagajna ili banka), pri čemu se njime zamjenjuje konto definiran u računovodstvenom predlošku plaćanja (ili naplate).
- **Pojedinačno**: omogućuje knjiženje zatvaranja dospijeća u automatskom knjiženju.
- **Referentni model plaćanja**: model za generiranje šifre plaćanja. U pojedinim lokalizacijama svako dospijeće na računu ima šifru koju dodjeljuje izdavatelj računa. Ta je šifra definirana prema određenim modelima (tablica **MB_PaymentReferenceModels**) kako bi se mogla generirati odgovarajućim algoritmom.
- **Tipovi modela plaćanja**: šifra (formirana prema prethodnom modelu) koja se upisuje u dospijeće te zatim koristi u nalozima za plaćanje prema banci kako bi banka primatelju mogla javiti koje je dospijeće podmireno. Na temelju toga moguće je automatizirati uvoz bankovnih izvoda i zatvaranje dospijeća. Ova se šifra prenosi u dospijeće i u SEPA datoteku.
- **Rok za avansno plaćanje**: polje predviđeno u SDI strukturi računa koje označava krajnji datum za ostvarivanje financijskog popusta.
- **Vrsta popusta**: vrsta financijskog popusta.
- **Financijska vrijednost rabata**: iznos financijskog popusta pri naplati.

### 4.5 Ostala polja

- **Volumen**: prikazuje ukupni volumen, dobiven zbrajanjem volumena svih artikala (vrijednost se preuzima iz **Šifarnika artikla > kartica** [**Težine / Dimenzije**](/docs/erp-home/registers/items/create-new-item)), ako je mjerna jedinica volumena artikla jednaka onoj definiranoj u parametrima primke. U obzir se uzimaju samo artikli kojima je ovo polje popunjeno.

- **Neto / Bruto težina**: prikazuje ukupnu neto težinu, dobivenu zbrajanjem težina svih artikala (vrijednost se preuzima iz **Šifarnika artikla > kartica** [**Težine / Dimenzije**](/docs/erp-home/registers/items/create-new-item)), ako je mjerna jedinica težine artikla jednaka onoj definiranoj u parametrima primke. U obzir se uzimaju samo artikli kojima je ovo polje popunjeno.

- **Paketi**: prikazuje ukupan broj paketa na temelju podataka unesenih u **Šifarnik artikla > kartica** [**Težine / Dimenzije**](/docs/erp-home/registers/items/create-new-item), u poljima **Broj artikala u paketu** ili **Broj paketa za artikl**. U obzir se uzimaju samo artikli kojima je ovo polje popunjeno.

- **Vrijednosti ručno izmijenjene**: uključivanjem ove oznake moguće je ručno izmijeniti vrijednosti **Volumena**, **Neto težine**, **Bruto težine** i **Paketa**.

### 4.6 Ukupni iznosi dokumenta

import SummariesDocumentTotal from './../../../import/sections/summaries-document-total.md'

<SummariesDocumentTotal />

## **5. Prijevoz**

Ova kartica sadrži informacije o prijevozu artikala.

Padajući izbornici prikazuju sve **Primatelje**, **Odredišta** i **Prijevoznike** definirane u **Šifarniku kontakta > kartica [Otprema](/docs/erp-home/registers/contacts/create-new-contact/accounting-data/customer-vendors-data/delivery)**, ali ih je moguće unijeti i ručno.

Dostupna su sljedeća polja:

- **Pošiljatelj**: u ovom je polju moguće unijeti konto/podkonto pošiljatelja.
- **Primatelj**: automatski se predlaže zadani primatelj definiran u šifarniku kupca. Ako nije definiran, koristi se adresa kupca.
- **Odredište**: automatski se predlaže zadano odredište primatelja ako je definirano u šifarniku kupca.
- **Volumen**: prikazuje ukupni volumen, dobiven zbrajanjem volumena svih artikala (vrijednost se preuzima iz **Šifarnika artikla > kartica Težine / Dimenzije**), ako je mjerna jedinica volumena artikla jednaka onoj definiranoj u parametrima računa.
- **Neto težina**: prikazuje ukupnu neto težinu, dobivenu zbrajanjem težina svih artikala (vrijednost se preuzima iz **Šifarnika artikla > kartica Težine / Dimenzije**), ako je mjerna jedinica težine artikla jednaka onoj definiranoj u parametrima računa.
- **Bruto težina**: prikazuje ukupnu bruto težinu, dobivenu zbrajanjem težina svih artikala (vrijednost se preuzima iz **Šifarnika artikla > kartica Težine / Dimenzije**), ako je mjerna jedinica težine artikla jednaka onoj definiranoj u parametrima računa.

:::tip Zapamtite
Uvjeti za automatski izračun težina i volumena u sažetku dokumenta su:
- uključena oznaka **Preračunaj prijevoz** u [parametrima](/docs/configurations/parameters/purchase/purchase-delivery-note-parameters) dokumenta;
- definirana **zadana mjerna jedinica** za težinu i volumen u parametrima primke.
:::

- **(Vanjski) izgled robe**: padajući izbornik povezan s istoimenom tablicom u kojoj se definiraju odgovarajući podaci.
- **Paketi**: automatski se predlaže broj paketa na temelju podataka unesenih u **Šifarnik artikla > kartica Težine / Dimenzije**, u poljima **Broj artikala u paketu** ili **Broj paketa za artikl**. U obzir se uzimaju samo artikli kojima je ovo polje popunjeno.
- **Vrijednosti ručno promijenjena**: uključivanjem ove oznake moguće je ručno izmijeniti vrijednosti **Volumena**, **Neto težine**, **Bruto težine** i **Paketa**, koje se inače automatski preuzimaju iz šifarnika artikla.
- **Ulaz / Izlaz carinskog ureda**: polja koja se koriste za eTransport u rumunjskoj lokalizaciji i povezana su s tablicom **Carinski ured**.
- **Ulaz / Izlaz graničnog prijelaza**: polja koja se koriste za eTransport u rumunjskoj lokalizaciji i povezana su s tablicom **Granični prijelaz**.
- **Prijevoz**: potrebno je odabrati subjekt odgovoran za prijevoz označavanjem opcije **Pošiljatelj**, **Primatelj** ili **Prijevoznik**. Ovisno o odabiru mijenja se sadržaj donjeg dijela obrasca:
  - ako je prijevoz u nadležnosti **Pošiljatelja**, moguće je unijeti **Registracijsku oznaku vozila**, **Prikolicu**, **Datum** i **Vrijeme početka prijevoza**;
  - ako je prijevoz u nadležnosti **Primatelja**, dostupna su ista polja: **Registracijska oznaka vozila**, **Prikolica**, **Datum** i **Vrijeme početka prijevoza**;
  - ako je prijevoz u nadležnosti **Prijevoznika**, dostupna su polja **Računovodstveni kontakt prijevoznika**, **Registracijska oznaka vozila**, **Prikolica**, **Datum i vrijeme prijevoza**, kao i podaci o **Naručitelju**, **Utovarivaču**, **Vlasniku** i **Mjestu utovara**.