---
title: Novi upit za ponudu
sidebar_position: 3
---

Obrazac se otvara putem izbornika **Nabava > Upit za ponudu > Novi upit za ponudu** ili iz obrasca za pretraživanje **upita za ponudu** klikom na gumb **Novo**.

## *Kako kreirati upit za ponudu*

<details>

<summary>Kliknite za prikaz osnovnih koraka</summary>

1. **Unesite obvezne podatke**: **Tip upita za ponudom** i **Dobavljač**. Polja **Godina**, **Broj** i **Datum** automatski će se popuniti.

2. **Unesite ili izmijenite neobvezne podatke** zaglavlja, kao što su datum isporuke, eventualni **popusti**, **odredište** i slično.

3. **Unesite artikle**: dvostrukim klikom u polje **Šifra artikla** otvara se pomoćni prozor za odabir artikla koji omogućuje pretraživanje i odabir postojećeg artikla. Ostali podaci retka, poput **mjerne jedinice**, **količine** i **cijene**, automatski će se popuniti, ali ih je moguće izmijeniti.

   Kao alternativu moguće je odabrati **Vrstu retka** **Artikl bez klase** te ručno unijeti ostale podatke.

4. **Po potrebi unesite popuste ili druge dodatne informacije** na karticama **Popusti** i **Podaci o artiklu**.

5. **Provjerite odjeljak Sažeci** i po potrebi unesite završne popuste.

6. Nakon provjere i potvrde ponude **unesite Datum potvrde u zaglavlje** kako bi dokument postao dostupan za pretvaranje u narudžbu.

</details>

## **1. Gornji dio** {#upper-section}

Obvezna polja za unos upita za ponudom su:
- **Tip**: obvezno polje. Ovisno o odabranoj [Vrsti upita za ponudom](/docs/configurations/tables/purchase/purchase-offer-type), bit će dostupne određene funkcionalnosti, primjerice **Upravljanje dugotrajnom imovinom**.
- **Datum / Godina**: prema zadanim postavkama predlaže se trenutni datum, ali ga je moguće ručno izmijeniti.
- **Broj**: automatski se predlaže prema odabranoj vrsti upita za ponudom.
- **Dobavljač**: sadrži kontakt kojem se šalje upit za ponudom.
- **Verzija**: označava verziju ponude. Nova verzija može se kreirati pomoću gumba **Nova verzija** na alatnoj traci.

:::note Zapamtite
Ako je dokument **automatski kreiran** iz **upita za ponudu**, navedeni podaci automatski će se preuzeti iz **izvornog dokumenta**.
:::

## **2. Zaglavlje** {#header}

### 2.1 Podaci o dobavljaču

Nakon odabira **Dobavljača**, svi podaci na kartici **Zaglavlje** automatski se popunjavaju prema postavkama definiranima u [šifarniku dobavljača](/docs/erp-home/registers/contacts/create-new-contact/accounting-data/accounting-data-intro), odnosno prema podacima njegove adrese i sljedećih odjeljaka:

> - **Valuta**: odjeljak koji sadrži podatke o [Valuti](/docs/configurations/tables/general-settings/currencies), [Tečaju](/docs/guide/common/glossary/glossary-intro#currency-exchange) i [Datumu valute](/docs/guide/common/glossary/glossary-intro#currency-date).
> - **Pošiljka**: odjeljak koji sadrži podatke o [Otpremi](/docs/erp-home/registers/contacts/create-new-contact/accounting-data/customer-vendors-data/delivery), [Paritetu isporuke](/docs/guide/common/glossary/glossary-intro#carriage), [Ambalaži](/docs/guide/common/glossary/glossary-intro#packing), zadanom [Cjeniku](/docs/erp-home/registers/contacts/create-new-contact/accounting-data/customer-vendors-data/price-list) i njegovom [razdoblju valjanosti](/docs/guide/common/glossary/glossary-intro#validity-date).
> - **Država**: odjeljak koji sadrži podatke o [Državi](/docs/guide/common/glossary/glossary-intro#country), [Jeziku](/docs/guide/common/glossary/glossary-intro#language) i [Zoni](/docs/guide/common/glossary/glossary-intro#zone).
> - **Plaćanja**: odjeljak koji sadrži podatke o [Načinima plaćanja](/docs/erp-home/registers/contacts/create-new-contact/accounting-data/customer-vendors-data/payments), **Popustima**, **Odredištu** i **Prijevozniku**.

Korisnik može ručno obrisati ili izmijeniti sva navedena polja.

### 2.2 Neobvezni podaci zaglavlja

- **Bilješke**: ovo se polje preuzima iz šifarnika dobavljača ili, ako je primjenjivo, iz upita za ponudu, ali se može unijeti i ručno.
- **Naša / Vaša referenca**: u ova se polja obično unose interna referenca i referenca dobavljača za dokument. Ako je definirana u šifarniku dobavljača, automatski će se preuzeti, a u suprotnom se može unijeti ručno.
- **Početne / Završne bilješke**: moguće je odabrati napomene prethodno definirane u tablici **Konfiguracija > Uslužni programi > Upravljanje kodificiranim napomenama**. Dvostrukim klikom na polje **Početne / Završne napomene** otvara se pomoć za odabir kodificiranih napomena.
- **Projekt**: pomoću pomoći pri unosu dokument se može povezati s projektom. Ovo povezivanje vrijedi samo na razini zaglavlja dokumenta. Projekt će se automatski popuniti ako je upit za ponudom nastao iz upita za ponudu koji već sadrži projekt.
- **Datum potvrde ponude**: omogućuje unos datuma potvrde ponude, ali nije obvezan podatak. U postupku [Kreiranja narudžbe dobavljaču iz ponude dobavljača](/docs/purchase/offer-request/procedures/order-creation) moguće je prikazati i pretvoriti i nepotvrđene upite za ponudom uključivanjem odgovarajuće oznake u području filtra.
- **Procijenjenu datum dostave**: ako se unese prije dodavanja artikala u upit za ponudom, automatski će se prenijeti na sve retke artikala. U suprotnom je dovoljno kliknuti gumb **Zamijeni planirani datum isporuke u stavkama** na alatnoj traci kako bi se datumi ažurirali u svim postojećim retcima.
- **Datum zatvaranja**: prilikom pretvaranja upita za ponudom u narudžbu dobavljaču automatski se popunjava trenutnim datumom ako je uključena opcija za automatsko zatvaranje pretvorenih ponuda.
- **Valjanost ponude**: omogućuje definiranje datuma isteka valjanosti upita za ponudom.

#### Posebni gumbi

> **Zamijeni planirani datum isporuke u stavkama**: nakon definiranja planiranog datuma isporuke u zaglavlju omogućuje masovno ažuriranje tog datuma u već unesenim retcima artikala.

### 2.3 Plaćanja

[Uvjeti plaćanja](/docs/configurations/tables/general-settings/payment-terms) automatski se preuzimaju iz **Šifarnik dobavljača > kartica Plaćanja**, a korisnik ih može izmijeniti ili obrisati.
Ako je uz [Vrstu plaćanja](/docs/configurations/tables/general-settings/payment-types) definiran financijski popust, njegov se iznos uzima u obzir isključivo u računovodstvenom dijelu, odnosno pri izračunu dospijeća plaćanja dokumenta, a ne u ukupnom iznosu otpremnice.

#### Posebni gumbi

> **Otkaži plaćanja**: služi za brisanje odabranih redaka plaćanja.

### 2.4 Popusti

Prikazuju se samo zadani popusti preuzeti iz **Šifarnika dobavljača > kartica Popusti**, dok se popusti definirani u uvjetima plaćanja ili na pojedinim artiklima ne preuzimaju. Korisnik ih može izmijeniti ili obrisati.

Popusti definirani u zaglavlju dokumenta automatski se prenose na svaki novi redak artikla dodan u dokument. Ako se novi popust unese u zaglavlje nakon što su retci artikala već dodani, on se neće automatski primijeniti na postojeće retke.

#### Posebni gumbi

> **Izbriši zadane popuste**: služi za brisanje odabranih popusta.

### 2.5 Dodatni podaci

Na ovoj kartici prikazuju se podaci definirani u **Šifarniku kontakta > kartica Dodatni podaci**, ali samo ako postoje zadane vrijednosti.

## **3. Artikli** {#items}

Za unos **Novog artikla** u tablicu dovoljno je postaviti se na novi redak i unijeti potrebne podatke ili koristiti gumb **Novi artikl** na alatnoj traci.

### 3.1 Obvezni podaci

import RowNumber from './../../../import/fields/row-number.md'

<RowNumber />

- **Tip linije** omogućuje odabir različitih vrsta artikala iz padajućeg izbornika:

> - **Artikl s klasom**: artikli definirani u šifarniku koji se mogu knjižiti u analitičkom računovodstvu i evidentirati u skladištu.
> - **Artikl bez klase**: opisni artikli koji se mogu knjižiti u analitičkom računovodstvu, ali se ne mogu evidentirati u skladištu.
> - **Trošak**: može biti s klasom ili bez klase. U sažecima dokumenta prikazuje se zasebno. Ako je kodificiran i porezno relevantan, evidentira se u skladištu. Ako je bez klase ili nije porezno relevantan, neće se evidentirati u skladištu.
> - **Bilješke**: opisni redak koji se ispisuje na dokumentu. Ne utječe na računovodstvo niti na skladište.
> - **Gratis artikl**: obrađuje se kao artikl s klasom ili bez klase u poreznom i skladišnom smislu, ali se zbog toga što je riječ o besplatnom artiklu iskazuje zasebno u sažecima dokumenta. Ovisno o oznaci **Teret PDV-a**, izračunava se hoće li trošak PDV-a besplatnog artikla snositi obveznik ili ne.

:::note Napomena
Ako se unos započne izravno unosom artikla, njegova **klasa**, **šifra** i **tip linije** (**artikl s klasom**) popunit će se automatski.
:::

- **Klasa / Šifra / Opis stavke**: mogu se unijeti ručno ili pomoću pomoći pri unosu, koja će ponuditi sve podatke definirane u šifarniku artikala. Nakon odabira artikla njegov će se **Opis** automatski preuzeti iz šifarnika. Ako artikl ima definirane **Varijante**, željena se varijanta može odabrati na kartici **Podaci o artiklu**.

- **Jedinica mjere**: automatski se predlaže osnovna mjerna jedinica artikla, ali ako su u šifarniku definirane alternativne mjerne jedinice, korisnik može odabrati neku od njih.

- **Količina**: predstavlja količinu u osnovnoj mjernoj jedinici i prema zadanim postavkama iznosi **1**. Može se ručno izmijeniti ili preuzeti iz dokumenta koji se izvršava.

- **Cijena**: cijena se preuzima iz cjenika definiranog u šifarniku kontakta. Cjenik koji se koristi za pojedini artikl prikazan je na kartici **Podaci o artiklu**. Isti dokument može sadržavati artikle čije su cijene preuzete iz različitih cjenika ako je u šifarniku kontakta definirano više uzastopno povezanih cjenika. Dvostrukim klikom na polje **Cjenik** korisnik može odabrati drugi cjenik od zadanog, iz kojeg će se preuzeti cijena odabranog artikla.

  Ako nije definiran nijedan cjenik, predložit će se **posljednji trošak** iz šifarnika artikla.

- **PDV**: prednost ima vrijednost definirana u polju **PDV** u šifarniku kontakta. Ako ona nije definirana, predlaže se vrijednost iz šifarnika artikla, ali ju korisnik može promijeniti.

- **Jedinična cijena**: automatski se izračunava nakon primjene popusta.

### 3.2 Neobvezni podaci

- **Promet nabave**: preuzima se iz kartice **Općenito** u šifarniku artikla.

- **Datum zatvaranja**: označava datum zatvaranja ponude. Automatski se popunjava ako je tijekom postupka [Kreiranja narudžbe dobavljaču iz ponude dobavljača](/docs/purchase/offer-request/procedures/order-creation) uključena opcija zatvaranja ponuda.

- **Procijenjeni datum dostave**: označava predviđeni datum isporuke robe. Automatski se predlaže ako je na kartici **Zaglavlje** popunjeno polje **Planirani datum isporuke**.

- **Očekivnao razdoblje isporuke**: slobodno opisno polje u koje je moguće unijeti očekivano razdoblje isporuke robe.

### 3.3 Popusti {#discount}

- **Tip raspona**: prikazuje cjenovni razred popusta koji će se koristiti, a preuzima se iz šifarnika dobavljača ili iz cjenika.

- **Ručna cijena**: automatski se uključuje kada je cijena artikla ručno unesena ili izmijenjena.

U tablici se prikazuju svi popusti povezani s artiklom, pri čemu svaki ima vlastitu osnovicu i način primjene. Popusti se mogu preuzeti iz šifarnika dobavljača, uvjeta plaćanja dodijeljenih dokumentu, cjenika ili [Definicije politika popusta](/docs/purchase/price-control/definition). Sve predložene vrijednosti moguće je izmijeniti.

#### Posebni gumbi

> **Izbriši popuste**: briše odabrani popust iz pripadajuće tablice.

### 3.4 Podaci artikla {#items-data}

Na ovoj kartici prikazuju se i unose dodatni podaci o artiklu.

> - **Artikl**: prikazuje artikl odabran u gornjoj tablici.
> - **Varijanta**: u ovom je polju moguće odabrati jednu od varijanti artikla definiranih na kartici [Varijante](/docs/erp-home/registers/items/create-new-item) u šifarniku artikla. Ako su u cjeniku definirane različite cijene i/ili popusti za pojedine varijante, oni će se automatski ažurirati nakon odabira druge varijante.
> - **Bilješka**: predstavlja napomene povezane s retkom artikla. Mogu se unijeti i pomoću pomoći za odabir kodificiranih napomena. Bit će prenesene u sve dokumente koji nastanu iz ovog dokumenta.
> - **Skladište i predložak**: prikazuju skladište i predložak koji će se automatski koristiti prilikom skladišnog knjiženja odgovarajućih artikala.
>
> - **Projekt**: predstavlja projekt koji će biti povezan s dokumentom. Ako je projekt odabran u zaglavlju dokumenta, automatski će se prenijeti na sve retke artikala. U suprotnom se može odabrati putem pomoći za odabir projekta.
> - **Cjenik**: prikazuje cjenik iz kojeg je preuzeta cijena artikla, zajedno s datumom početka i završetka njegove valjanosti.
>
> - **Alternativna mjerna jedinica / Alternativna količina**: omogućuje postavljanje alternativne mjerne jedinice i pripadajuće količine za artikl odabran u tablici.
> - **Cijena alternativne mjerne jedinice**: ako je uključena, označava da se cijena unesena na retku artikla odnosi na alternativnu, a ne na osnovnu mjernu jedinicu.
>
> - **Marka**: predstavlja marku artikla preuzetu iz šifarnika artikla ili iz cjenika artikla.
> - **Zahtjev za nabavom**: ako je ponuda nastala iz zahtjeva za nabavom, prikazuje se pripadajući [Zahtjev za nabavom](/docs/purchase/purchase-requests/purchase-request/insert-purchase-request).

#### 3.4 Dodatni podaci {#extra-data}

import DocItemExtraData from './../../../import/sections/doc-item-extradata.md'

<DocItemExtraData />

#### 3.5 Dokumenti u privitku {#attached-documents}

import DocAttachDocument from './../../../import/sections/doc-attach-document.md'

<DocAttachDocument />

## **4. Sažeci** {#summaries}

U odjeljcima ove kartice prikazane su glavne informacije za cijeli dokument.

### 4.1 KOnačni popusti na artikle

Završni popusti primijenjeni na razini pojedinog artikla raspoređuju se (odnosno proporcionalno raspodjeljuju) na svaki redak artikla u dokumentu. To znači da se iznos popusta razmjerno dijeli između svih artikala u dokumentu, a pripadajući popust bit će vidljiv na kartici **Artikli** za svaki pojedini redak.

- **Vrsta / Opis popusta**: omogućuje odabir vrste popusta (definirane u [Vrste popusta](/docs/configurations/tables/general-settings/discount-types)), pri čemu se određuje redoslijed primjene popusta te hoće li se popust obračunavati na poreznu osnovicu ili kaskadno na prethodno primijenjene popuste.

- **Prioritet**: određuje redoslijed primjene popusta. Popusti se primjenjuju uzlaznim redoslijedom prioriteta.

- **Kaskada / Iznos**: određuje hoće li se popust obračunavati na osnovicu *(cijena × količina) − (već obračunati popusti)* ili na osnovicu *(cijena × količina)*.

- **Vrijednost**: numerička vrijednost završnog popusta koji će se primijeniti.

### 4.2 Ukupni iznosi dokumenta

- **Iznos stavki bez popusta**: predstavlja zbroj vrijednosti svih artikala.

- **Zaduženje**: predstavlja vrijednost eventualnog predujma zaprimljenog za dokument.

- **Poklonjeni iznos**: predstavlja ukupnu vrijednost artikala vrste **Besplatni artikl** unesenih na kartici **Artikli**.

- **Ukupni primijenjeni popusti**: predstavlja ukupnu vrijednost popusta primijenjenih na artikle, bez završnih popusta.

- **Neto iznos artikala**: **Iznos stavki bez popusta** − **Ukupni primijenjeni popusti**.

- **Konačni popusti artikala**: predstavlja vrijednost završnih popusta izraženu kao postotak bruto iznosa artikala.

- **Iznos umanjen za ukupni popust**: **Neto iznos artikala** − **Konačni popusti artikala**.

- **Ukupno za stavke troška**: predstavlja ukupnu vrijednost artikala vrste **Artikl troška** unesenih na prethodnoj kartici.

- **Troškovi naplate**: predstavlja zbroj troškova naplate unesenih u tablici **Troškovi**.

- **Trošak ovjere**: predstavlja zbroj troškova biljega unesenih u tablici **Troškovi**.

- **Ukupno troškovi / popusti / doplate**: predstavlja ukupnu vrijednost svih stavki unesenih u tablici **Troškovi**.

- **Porezna osnovica**: **Neto iznos artikala** − **Konačni popusti artikala** + **Ukupno za stavke troška** + **Ukupno troškovi / popusti / doplate**.

- **Porez**: predstavlja zbroj vrijednosti prikazanih u sažecima PDV-a.

- **Ukupno**: **Porezna osnovica** + **Porez**.