---
title: Nova primka
sidebar_position: 2
---

Obrazac **Kreiranje primke** otvara se putem menija **Nabavka > Primke > Nova primka** ili klikom na dugme **Novo** u obrascu [Pretraga primki](/docs/purchase/purchase-delivery-note/insert-purchase-delivery-note/search-delivery-note).

## *Kako kreirati primku*

<details>

<summary>Kliknite za prikaz osnovnih koraka</summary>

1. **Unesite obavezne podatke**: **Tip primke** i **Dobavljač**. Polja **Godina**, **Broj** i **Datum unosa** automatski će biti popunjena.

2. **Unesite ili izmenite neobavezne podatke** u zaglavlju, kao što su **popusti**, **pošiljka** i ostali podaci.

3. **Unesite artikle**: dvostrukim klikom na polje **Šifra artikla** otvara se pomoć za izbor artikala, pomoću koje možete pronaći i izabrati postojeći artikal. Svi ostali podaci reda, kao što su **jedinica mere**, **količina** i **cena**, automatski će biti popunjeni, ali ih je moguće izmeniti.

   Alternativno, kao **Tip linije** moguće je izabrati **Artikal bez klase** i ručno uneti sve potrebne podatke.

4. **Unesite eventualne popuste ili druge dodatne informacije** na karticama **Popusti / Cenovnici** i **Podaci artikla**.

5. **Dodajte podatke o prevozu** robe na kartici **Prevoz**.

6. **Proverite karticu Sažeci** i po potrebi unesite dodatne troškove ili završne popuste.

7. Nakon potvrde primke **uključite oznaku *Kontrolisano* u zaglavlju** kako bi dokument bio dostupan za dalje postupke.

</details>

## **1. Obavezni podaci**

- **Tip primke**: definiše se u **Konfigurisanje > Tabele > Nabavka > Tipovi primki**. Ovo polje određuje opseg numeracije dokumenta koji se unosi i automatski predlaže **Broj** primke na osnovu datuma unosa i poslednjeg dodeljenog broja.
- **Dobavljač**: može se uneti pomoću [pomoći pri unosu](/docs/guide/common/operations-with-data/manual-entry-or-help-and-data-selection) ili [ručno](/docs/guide/common/operations-with-data/manual-entry-or-help-and-data-selection).
- **Interni broj**: automatski se predlaže prema vrsti dokumenta, ali se može ručno izmeniti uz poštovanje pravila redosleda datuma i broja.
- **Datum unosa**: prema podrazumevanim podešavanjima predlaže se trenutni datum, ali se može ručno izmeniti uz poštovanje pravila redosleda datuma i broja.
- **Broj**: u ovo polje moguće je uneti broj dokumenta koji se može razlikovati od broja predloženog u prethodnom polju.

Obrazac sadrži više kartica.

## **2. Zaglavlje**

Nakon izbora obaveznih podataka u gornjem delu obrasca korisnik može nastaviti unos sledećih podataka [ručno](/docs/guide/common/operations-with-data/manual-entry-or-help-and-data-selection), pomoću [pomoći pri unosu](/docs/guide/common/operations-with-data/manual-entry-or-help-and-data-selection) ili će ih, u zavisnosti od izabranog postupka, aplikacija popuniti *automatski*.

:::note Zapamtite

Ako je dokument *kreiran automatski*, na primer postupkom [**Izvršenjem/Preuzimanjem narudžbina**](/docs/purchase/purchase-delivery-note/procedures/create-delivery-notes-from-orders), ovi podaci će biti preuzeti iz *izvornog dokumenta* iz kojeg je generisan.

:::

### 2.1 Podaci o dobavljaču

Nakon izbora **Dobavljača**, svi podaci na kartici **Zaglavlje** automatski se popunjavaju prema podešavanjima definisanim u [šifarniku dobavljača](/docs/erp-home/registers/contacts/create-new-contact/accounting-data/accounting-data-intro), odnosno prema podacima njegove adrese i sledećih odeljaka:

- **Valuta**: odeljak koji sadrži podatke o [Valuti](/docs/configurations/tables/general-settings/currencies), [Kursu](/docs/guide/common/glossary/glossary-intro#currency-exchange) i [Datumu valute](/docs/guide/common/glossary/glossary-intro#currency-date).
- **Država**: odeljak koji sadrži podatke o [Državi](/docs/guide/common/glossary/glossary-intro#country), [Jeziku](/docs/guide/common/glossary/glossary-intro#language) i [Zoni](/docs/guide/common/glossary/glossary-intro#zone).
- **Pošiljka**: odeljak koji sadrži podatke o [Otpremi](/docs/erp-home/registers/contacts/create-new-contact/accounting-data/customer-vendors-data/delivery), [Paritetu isporuke](/docs/guide/common/glossary/glossary-intro#carriage), [Ambalaži](/docs/guide/common/glossary/glossary-intro#packing), podrazumevanom [Cenovniku](/docs/erp-home/registers/contacts/create-new-contact/accounting-data/customer-vendors-data/price-list) i njegovom [periodu važenja](/docs/guide/common/glossary/glossary-intro#validity-date).

Korisnik može ručno obrisati ili izmeniti sva navedena polja.

### 2.2 Neobavezni podaci zaglavlja

- **Status primke**: sledeće oznake prikazuju status primke. Prilikom kreiranja primke nijedna od ovih oznaka nije uključena:

    > **Kontrolisano**: uključena oznaka omogućava knjiženje / valorizaciju primke.  
    > **Valorizovano**: ova oznaka automatski se uključuje kada se primka valorizuje kroz račun.  
    > **Delimično valorizovano**: označava da je primka samo delimično valorizovana kroz račun.  
    > **Prinudno valorizovano**: ova oznaka uključuje se ako je primka prinudno zatvorena prinudnim izvršenjem artikala, na primer kada preostala količina neće biti isporučena pa se dokument smatra zatvorenim iako to inače ne bi bio.  
    > **Utovareno**: ova oznaka automatski se uključuje kada je dokument evidentiran u skladištu pomoću dugmeta **Automatsko knjiženje** na alatnoj traci ili putem [postupka knjiženja u skladište](/docs/purchase/purchase-delivery-note/procedures/load-delivery-notes-on-warehouse).  
    > **Knjiženo**: automatski se uključuje kada je primka proknjižena.  
    > **Poništeno**: uključena oznaka omogućava poništavanje primke.

:::note Napomena
Oznake je moguće ukloniti postupkom poništavanja operacije.
:::

- **Datum prijema**: u ovo polje može se uneti datum prijema robe.

- **Datum utovara (u skladište)**: ovo polje automatski se popunjava trenutnim datumom u trenutku knjiženja ili datumom korišćenim za skladišno knjiženje, u zavisnosti od korišćenog postupka.

- **Beleške dobavljača**: ovo polje preuzima se iz šifarnika dobavljača, a u slučaju kreiranja iz jedne narudžbine preuzimaju se podaci iz istoimenog polja narudžbine dobavljaču. Vrednost se može uneti i ručno.

- **Naša / Vaša referenca**: u ova polja obično se unose interna referenca i referenca dobavljača za dokument. Ako su definisane u šifarniku dobavljača, automatski će biti preuzete, a u suprotnom se mogu uneti ručno.

  Ako je narudžbina izvršena postupkom [Izvršenje narudžbina](/docs/purchase/purchase-delivery-note/procedures/create-delivery-notes-from-orders), u polja **Beleške dobavljača** i **Naša / Vaša referenca** prenose se podaci iz istoimenih polja narudžbine dobavljaču (ovo važi samo ako je primka kreirana na osnovu podataka iz jedne narudžbine).

- **Početna beleška**: moguće je izabrati napomene prethodno definisane u istoimenoj tabeli koja se nalazi u meniju **Konfigurisanje > Korisnost > Upravljanje šifrovanim beleškama**. Dvostrukim klikom na polje otvara se pomoć za izbor kodifikovanih napomena, a moguće ih je uneti i ručno.

- **Projekat**: pomoću pomoći pri unosu dokument se može povezati sa projektom. Ovo povezivanje važi samo na nivou zaglavlja dokumenta. Projekat će biti automatski popunjen ako je primka kreirana izvršenjem narudžbine koja sadrži projekat.

### 2.3 Plaćanje

**Uslovi plaćanja** automatski se preuzimaju iz **Šifarnika dobavljača > kartica Plaćanja**, a korisnik ih može izmeniti ili obrisati.

Ako je uz **Vrstu plaćanja** definisan finansijski popust, njegov iznos uzima se u obzir isključivo u računovodstvenom delu, odnosno prilikom obračuna dospeća plaćanja dokumenta, a ne u ukupnom iznosu primke.

:::note Napomena
Ako je dokument nastao izvršenjem jedne **Narudžbine dobavljaču** ili više narudžbina sa istim uslovima plaćanja, iz narudžbina će biti preuzeti vrsta i uslovi plaćanja.
:::

#### Specifično dugme

> **Obriši plaćanja**: služi za brisanje izabranih redova plaćanja.

### 2.4 Popusti

Prikazuju se samo podrazumevani popusti preuzeti iz **Šifarnika dobavljača > kartica Popusti**, a korisnik ih može izmeniti ili obrisati.

import TabDiscount from './../../../import/sections/tab-discount.md'

<TabDiscount />

### 2.5 Dodatni podaci

import TabExtraData from './../../../import/sections/tab-extra-data.md'

<TabExtraData />

## **Postupci zaglavlja**

### *Automatsko zaduživanje skladišta*

Ovaj postupak pokreće se pomoću istoimenog dugmeta u zaglavlju dokumenta i izvršava se prema parametrima prethodno definisanim za primku (za više detalja pogledajte isti postupak: [Knjiženje primke u skladište](/docs/purchase/purchase-delivery-note/procedures/load-delivery-notes-on-warehouse)).
Rezultat se može pregledati u **Logistika > [Zapisi](/docs/logistics/warehouse/stock-records/records)** ili u postupku [Knjiženje primke u skladište](/docs/purchase/purchase-delivery-note/procedures/load-delivery-notes-on-warehouse), na kartici **Sažetak**.

:::note Napomena
Ako je u [Parametrima nabavne primke](/docs/configurations/parameters/purchase/purchase-delivery-note-parameters) uključena oznaka **Automatski utovar/istovar**, prilikom uključivanja oznake **Kontrolisano** u zaglavlju primke automatski će biti ponuđeno knjiženje primke. Ovo polje biće moguće uređivati tek nakon uključivanja oznake **Kontrolisano** i unosa **Broja** dokumenta.
:::

### *Izvršenje/Preuzimanje narudžbina*

Klikom na dugme **Preuzimanje iz narudžbine** u zaglavlju primke otvara se obrazac u kojem je moguće filtrirati narudžbine dobavljaču povezane sa dobavljačem izabranim u dokumentu.

Ovim postupkom moguće je kreirati primku izvršenjem odgovarajuće narudžbine dobavljaču. Na taj način u primku se mogu preneti artikli uz potpuno ili delimično izvršenje cele narudžbine ili pojedinog reda.

Za korišćenje ovog postupka moraju biti ispunjeni sledeći uslovi:

- dobavljač na narudžbini (ili svim narudžbinama) mora biti isti kao dobavljač na primci;
- narudžbina koja se izvršava mora imati uključenu oznaku **Odštampano** i mora biti **Potvrđena**.

Najpre je potrebno u zaglavlju nove primke izabrati **Tip primke** i **Dobavljača**. Nakon toga kliknite dugme **Preuzimanje iz narudžbine** kako biste otvorili obrazac za izvršenje.

#### Postupak

Filteri za dobavljača i valutu automatski će biti postavljeni prema dobavljaču izabranom na primci.
U oblasti filtera moguće je izabrati prikaz podataka u obliku **Tabele**, **Hijerarhijske strukture** ili oba prikaza istovremeno.

> **Hijerarhijska struktura** omogućava pregledniji prikaz pojedinačnih narudžbina i artikala koje sadrže. Takođe omogućava grupni izbor svih artikala unutar određene narudžbine jednostavnim izborom same narudžbine.  
> **Tabela** omogućava veću prilagodbu obrasca dodavanjem polja iz **Navigatora objekata**. U tom slučaju grupni izbor obavlja se pomoću tastature i dugmeta **Aktiviraj / Deaktiviraj samo izabrane redove** na alatnoj traci.

Nakon podešavanja željenih **Filtera**, klikom na dugme **Traži** u donjem delu biće prikazane sve odštampane, potvrđene i neizvršene ili delimično izvršene narudžbine.

:::note Napomena
Postupak preuzima sve podatke iz narudžbine, zbog čega će biti primenjeni uslovi nabavke definisani u narudžbini, čak i ako su se oni u međuvremenu promenili.
Ako se izvršava više narudžbina koje imaju iste uslove plaćanja i/ili isto odredište, u primku će biti preneti podaci iz narudžbina. U suprotnom će biti preuzeti podaci iz šifarnika dobavljača.
:::

U tabeli rezultata korisnik može:

- izabrati sve ili samo pojedine ponuđene artikle. Dovoljno je uključiti oznaku na početku reda artikla. **Količina za izvršenje** automatski će biti jednaka **Preostaloj količini**;
- izabrati pojedine artikle za **delimičnu količinu**. U tom slučaju potrebno je ručno izmeniti vrednost u polju **Količina za izvršenje**.

Za završetak postupka potrebno je kliknuti dugme **Preuzimanje**, koje će preuzeti sve podatke iz narudžbine i preneti ih u primku.

:::tip Zapamtite
Napomene unete u zaglavlje narudžbine (kao što su **Naša / Vaša referenca** ili **Početne napomene**) prenose se u zaglavlje primke samo ako se podaci preuzimaju iz jedne narudžbine.
:::

#### Specifična dugmad

> **Traži**: omogućava pretragu narudžbina dobavljaču.  
> **Preuzimanje**: prenosi podatke izabranih narudžbina u novu primku.  
> **Prinudno izvršenje narudžbine**: omogućava prinudno izvršenje narudžbine ili izabranih redova artikala.  
> **Označi sve**: označava sve artikle na listi.  
> **Odznači sve**: uklanja oznaku sa svih artikala na listi.  
> **Aktiviraj samo izabrane redove**: uključuje oznake za sve redove izabrane mišem.  
> **Deaktiviraj samo izabrane redove**: isključuje oznake za sve redove izabrane mišem.

:::important Zapamtite
Ako se za isti red artikla unutar iste primke izvrši više delimičnih izvršenja, moguće je izabrati da li će količine biti sabrane u jedan red primke ili će ostati u zasebnim redovima. To se određuje isključivanjem ili uključivanjem oznake **Količina izvršenja artikla se ne sabira** u tabeli [Tipovi primki](/docs/configurations/tables/purchase/purchase-delivery-notes-type/).
:::

## **3. Artikli**

Na ovoj kartici unose se svi artikli zajedno sa pripadajućim podacima.

Podaci se mogu uneti ručno, pomoću pomoći pri unosu ili ih mogu automatski predložiti povezani postupci ([Kreiranje primke iz prijema robe](/docs/purchase/purchase-delivery-note/procedures/create-delivery-note-from-goods-receipt) ili [Kreiranje primke izvršenjem narudžbina](/docs/purchase/purchase-delivery-note/procedures/create-delivery-notes-from-orders)).
Za unos novog artikla u tabelu dovoljno je postaviti se na novi red i uneti potrebne podatke ili koristiti dugme **Novi artikal** na alatnoj traci.

:::note Napomena
Ako je primka kreirana izvršenjem narudžbine dobavljaču, svi podaci će biti automatski preuzeti iz narudžbine.
:::

### 3.1 Obavezni podaci

import RowNumber from './../../../import/fields/row-number.md'

<RowNumber />

- **Tip linije** omogućava izbor različitih vrsta artikala iz padajućeg menija:
> - *Artikal sa klasom*: artikli definisani u šifarniku koji se mogu knjižiti u analitičkom računovodstvu i evidentirati u skladištu. <br />
> - *Artikal bez klase*: opisni artikli koji se mogu knjižiti u analitičkom računovodstvu, ali se ne mogu evidentirati u skladištu. <br />
> - *Artikal troška*: može biti sa klasom ili bez klase. U sažecima dokumenta prikazuje se zasebno. Ako je kodifikovan i poreski relevantan, evidentira se u skladištu. Ako je bez klase ili nije poreski relevantan, neće biti evidentiran u skladištu. <br />
> - *Beleška*: opisni red koji se štampa na dokumentu. Ne utiče na računovodstvo niti na skladište.
> - *Besplatan artikal*: obrađuje se kao artikal sa klasom ili bez klase u poreskom i skladišnom smislu, ali se zbog toga što je reč o besplatnom artiklu iskazuje zasebno u sažecima dokumenta. U zavisnosti od oznake **Teret PDV-a**, obračunava se da li će trošak PDV-a besplatnog artikla snositi obveznik ili ne.

:::note Napomena
Ako se unos započne direktnim unosom artikla, njegova **klasa**, **šifra** i **tip reda** (**Artikal sa klasom**) biće automatski popunjeni.
:::

import ItemClassDescription from './../../../import/sections/item-class-description.md'

<ItemClassDescription />

import UM from './../../../import/fields/item-um.md'

<UM />

import Quantity from './../../../import/fields/item-quantity.md'

<Quantity />

- **Cena**: cena se preuzima iz cenovnika definisanog u šifarniku kontakta. Cenovnik koji se koristi za pojedini artikal prikazan je na kartici **Popusti / Cenovnici**. Isti dokument može sadržati artikle čije su cene preuzete iz različitih cenovnika ako je u šifarniku kontakta definisano više uzastopno povezanih cenovnika (pogledajte [Šifarnik kontakata](/docs/erp-home/registers/contacts/create-new-contact/accounting-data/customer-vendors-data/price-list)). Dvostrukim klikom na polje **Cenovnici** (kartica **Popusti / Cenovnici**) korisnik može izabrati drugi cenovnik umesto podrazumevanog, iz kojeg će biti preuzeta cena izabranog artikla.

  Ako nije definisan nijedan cenovnik, predložena vrednost može biti preuzeta iz **poslednjeg troška** u šifarniku artikla, pod uslovom da u [Parametrima nabavne primke](/docs/configurations/parameters/purchase/purchase-delivery-note-parameters) nije uključena oznaka **Trošak nula ako nedostaje cenovnik**.

- **Iznos**: automatski se obračunava nakon primene popusta.

- **Ukupni popusti**: prikazuje ukupan iznos popusta definisanih na kartici **Popusti / Cenovnici** za svaki red artikla.

- **PDV**: prednost ima vrednost definisana u polju **PDV** u **Šifarniku kontakta**. Ako ona nije definisana, predlaže se vrednost iz **Šifarnika artikla**, ali je korisnik može promeniti. Ovo je obavezno polje.

### 3.2 Neobavezni podaci o artiklu

- **Šifra / Opis artikla dobavljača**: u ovom odeljku moguće je uneti šifru i opis koje dobavljač koristi za identifikaciju artikla. Ovi podaci automatski se predlažu ako je u šifarniku artikla, na kartici [Preferirani dobavljači](/docs/erp-home/registers/items/create-new-item), povezan odgovarajući dobavljačev artikal.
- **Vrsta prometa nabavke**: preuzima se sa kartice [Opšte](/docs/erp-home/registers/items/create-new-item) u šifarniku artikla. Ako nije definisana, neće biti predložena nijedna vrednost, a prilikom knjiženja računa koristiće se vrednost iz polja **Podrazumevani konto troška/prihoda** u šifarniku kontakta.

#### Specifična dugmad

> **Preračun reciklaže**: ako je za dokument uključeno [Upravljanje Conai sistemom](/docs/sales/sales-flow/conai), ovim dugmetom moguće je ponovo obračunati vrednosti nakon eventualnih izmena.
>
> **Upravljanje ambalažom**: omogućava otvaranje upravljanja povratnom ambalažom korišćenom u dokumentu nabavke.  
> Dugme postaje aktivno nakon čuvanja dokumenta, ali pre njegovog knjiženja u skladište.  
> Klikom na ovo dugme otvara se odgovarajući obrazac u kojem je potrebno uneti količinu, izabrati red i klikom na dugme **Execute** preneti izabranu ambalažu u redove artikala. U ovom obrascu prikazuju se artikli koji imaju vrstu **Ambalaža** i koji su definisani u tabeli [Povratna ambalaža](/docs/configurations/tables/logistics/package-to-be-returned).
>
> **Ažuriraj lokaciju**: koristi se za ažuriranje lokacije na više redova artikala. Dugme postaje aktivno kada su izabrana najmanje dva artikla i otvara pomoć za izbor lokacije, u kojoj je moguće izabrati novu lokaciju za sve izabrane artikle.
>
> **Storno prijema**: dugme je aktivno samo za [Tipove primki](/docs/configurations/tables/purchase/purchase-delivery-notes-type/) čiji je **Tip primke** postavljen na **Povrat**. U obrascu se prikazuju sve primke za izabranog dobavljača koje su već proknjižene u skladište. Nakon izbora redova artikala i količina za storno dovoljno je kliknuti dugme **Storno prijema** kako bi bili preneti u primku.
>
> **Ažurirajte cenovnike**: dugme **Ažuriraj cenovnik trenutnih cena** omogućava ažuriranje cena u trenutnom cenovniku za svaki izabrani red artikla.  
> Dugme **Kreirajte novi cenovnik sa novim periodom važenja** otvara iskačući prozor u kojem je moguće uneti period važenja novog cenovnika. Novi cenovnik sadržaće samo izabrane redove i biće dodeljen dobavljaču navedenom na primci.

:::important Zapamtite
Prilikom kreiranja ili ažuriranja cenovnika ovim postupkom u cenovnik se prenose samo popusti koji su ručno uneti na primci.
:::

### 3.3 Popusti / Cenovnici

- **Cenovnik**: prikazuje cenovnik iz kojeg je preuzeta cena artikla, zajedno sa datumom početka i završetka njegovog važenja i posebnim uslovima (na primer **Tipom raspona** popusta) dodeljenim artiklu u cenovniku.

- **Ručna cena**: automatski se uključuje kada je cena artikla ručno uneta ili izmenjena.

- **Popusti**: prikazuju se svi popusti povezani sa artiklom, pri čemu svaki ima svoju osnovicu i način primene.

:::important Zapamtite
Kako bi bilo moguće koristiti popuste na poresku osnovicu, potrebno je u bazi podataka za odgovarajuće društvo uključiti opšti parametar **GEN-GlobalSettings_CalculateDiscountOnAmount**.

Ako taj parametar nije uključen, popusti na poresku osnovicu automatski će biti pretvoreni u kaskadne popuste.
:::

#### Specifično dugme

> **Otkaži popuste**: briše izabrani popust iz odgovarajuće tabele.

### 3.4 Podaci o artiklu

Na ovoj kartici prikazuju se i unose dodatni podaci o artiklu.

- **Artikal**: prikazuje klasu, šifru i opis artikla izabranog u tabeli.
- **Varijanta**: u ovom polju moguće je izabrati jednu od varijanti artikla definisanih na kartici [Varijante](/docs/erp-home/registers/items/create-new-item) u šifarniku artikla. Ako su u cenovniku definisane različite cene i/ili popusti za pojedine varijante, oni će biti automatski ažurirani nakon izbora druge varijante.
- **Beleška**: predstavlja napomene povezane sa redom artikla. Mogu se uneti i pomoću pomoći za izbor kodifikovanih napomena. Biće prenete u sve dokumente koji nastanu iz ovog dokumenta.
- **Skladište i predložak**: prikazuju skladište i predložak koji će se automatski koristiti prilikom knjiženja artikala u skladište. Podaci se preuzimaju iz [Tipova primki](/docs/configurations/tables/purchase/purchase-delivery-notes-type) ili iz narudžbine dobavljaču ako je primka nastala izvršenjem narudžbine. Za svaki red artikla mogu se ručno izmeniti.
- **Lokacija**: automatski se predlaže ako je uz korišćeni predložak u tabeli [Skladišni predlošci](/docs/configurations/tables/logistics/warehouse-templates) definisana lokacija ili ako je artikal dodeljen u [Mapi lokacija artikala](/docs/logistics/warehouse/location/item-location-map/). Vrednost se može uneti ili izmeniti ručno.
- **Valorizovano**: označava da je red artikla valorizovan, odnosno izvršen kroz ulazni račun.
- **Delimična valorizacija**: označava da je red artikla valorizovan samo za deo količine.
- **Prinudno valorizovano**: označava da je red artikla prinudno valorizovan.
- **Projekat**: predstavlja projekat koji će biti povezan sa dokumentom. Ako je projekat izabran u zaglavlju dokumenta, automatski će biti prenet na sve redove artikala. U suprotnom se može izabrati putem pomoći za izbor projekta.
- **Alternativna jedinica mere / Alternativna količina**: ako je u [šifarniku artikla](/docs/erp-home/registers/items/create-new-item) definisana alternativna jedinica mere sa uključenom oznakom **Podrazumevano** i ako je u parametrima narudžbina dobavljaču uključena oznaka **Automatski predlog alternativne jedinice mere**, ove vrednosti će biti automatski predložene prilikom unosa artikla. U suprotnom je moguće izabrati neku od alternativnih jedinica mere definisanih za artikal.
- **Cena alternativne jedinice mere**: ako je uključeno, označava da se cena uneta na redu artikla odnosi na alternativnu, a ne na osnovnu jedinicu mere. Ova oznaka, zajedno sa poljima **Alternativna jedinica mere** i **Alternativna količina**, vidljiva je samo ako je u [Parametrima narudžbina dobavljaču](/docs/configurations/parameters/purchase/purchase-orders-parameters) uključena oznaka **Upravljanje dvostrukom jedinicom mere**.
- **Marka**: predstavlja marku artikla preuzetu iz šifarnika artikla ili iz cenovnika artikla.
- **Referenca narudžbine/naloga**: ako je primka generisana iz narudžbine, u ovom polju biće prikazana referenca na tu narudžbinu.
- **Detalji izjave**: prikazuje se [Izjava o nameri](/docs/finance-area/declarations/declarations/intent-declaration) koja je korišćena za određivanje PDV-a artikla. Ako postoji više važećih izjava, iz padajućeg menija moguće je izabrati drugu izjavu.

### 3.5 Lotovi i serijski brojevi

U ove dve tabele moguće je uneti lotove i serijske brojeve koji će biti evidentirani u skladištu.
Ako artikal nema omogućeno upravljanje [Lotovima i serijskim brojevima](/docs/erp-home/registers/items/create-new-item), ova kartica će biti onemogućena.

:::tip Zapamtite
Ako je u [Parametrima nabavne primke](/docs/configurations/parameters/purchase/purchase-delivery-note-parameters) isključena oznaka **Lotovi i serijski brojevi su obavezni**, dokument će biti moguće sačuvati i bez unosa lotova ili serijskih brojeva.
Prilikom knjiženja primke u skladište lotovi će biti automatski predloženi ako prethodno nisu uneti.
:::

#### Specifična dugmad

import DeleteLot from './../../../import/buttons/delete-lot.md'
import DeleteSN from './../../../import/buttons/delete-sn.md'

> <DeleteLot />
> <DeleteSN />

### 3.6 Analitika

import TabAnalytic from './../../../import/sections/tab-analytic.md'

<TabAnalytic />

#### Specifična dugmad

import DeleteCostCenter from './../../../import/buttons/delete-cc.md'
import DeleteProfitCenter from './../../../import/buttons/delete-pc.md'

> <DeleteCostCenter />
> <DeleteProfitCenter />

### 3.7 Dodatni podaci

import DocItemExtraData from './../../../import/sections/doc-item-extradata.md'

<DocItemExtraData />

### 3.8 Dokumenti u prilogu

import DocAttachDocument from './../../../import/sections/doc-attach-document.md'

<DocAttachDocument />

### 3.9 Conai materijal za artikal

Ova kartica je vidljiva ako je za aktivno društvo omogućeno upravljanje Conai sistemom.

U ovom odeljku biće prikazani ambalažni materijali od kojih se sastoji artikal, zajedno sa pripadajućom jedinicom mere, jediničnom težinom (umanjenom za eventualni procenat oslobođenja definisan u šifarniku kupca) i ukupnom težinom dobijenom množenjem broja prodatih artikala sa jediničnom težinom.
Prilikom čuvanja dokumenta ili nakon klika na dugme **Preračun reciklaže**, Fluentis će automatski dodati jedan ili više redova troška preuzimajući artikal materijala, pri čemu će količina odgovarati zbiru količina, a cena Conai trošku za odgovarajući materijal.
Više informacija o [Upravljanju Conai sistemom](/docs/sales/sales-flow/conai) u Fluentisu dostupno je na povezanoj stranici.

### 3.9 Odeljak vrednosti

Odeljak u donjem desnom delu prikazuje sažetak troškova koji učestvuju u formiranju konačne cene svakog artikla izabranog u tabeli artikala. Prikazana su sledeća polja:
- **Jedinična cena**: vrednost iz polja **Cena**;
- **Količina**: vrednost iz polja **Količina** ili **Alternativna količina**, u zavisnosti od oznake **Cena alternativne jedinice mere**;
- **Iznos reda**: Cena artikla × Količina artikla;
- **Ukupan rabat**: zbir svih popusta za artikal, uključujući završne popuste;
- **Iznos**: Iznos reda − Ukupni popusti;
- **Porez**: Iznos × stopa PDV-a artikla;
- **Ukupno**: Iznos + Porez.

## **4. Sažeci**

Na različitim karticama ovog odeljka prikazane su glavne informacije o celom dokumentu i pojedina specifična dugmad.

### 4.1 Konačni popusti

import SummariesFinalDiscount from './../../../import/sections/summaries-final-discount.md'

<SummariesFinalDiscount />

### 4.2 Troškovi

Prikazuju se troškovi definisani u šifarniku kontakta, na kartici **Troškovi / Popusti**. U ovoj tabeli troškovi se unose kao pozitivne vrednosti, a popusti kao negativne.
Ove stavke primenjuju se na ceo dokument i ne raspodeljuju se na pojedine redove artikala. Mogu uključivati dodatne troškove, ukupne popuste ili dodatke koji se primenjuju na ceo dokument. Ako su definisani u šifarniku kontakta, automatski će biti predloženi prilikom kreiranja dokumenta.

- **Tip / Opis**: omogućava izbor vrste troška (definisane u tabeli [Tipovi troškova](/docs/configurations/tables/general-settings/expenses-types)) i određivanje procenta troška koji će biti primenjen.
- **Iznos troška**: prikazuje iznos troška izražen u valuti dokumenta.
- **PDV**: označava stopu PDV-a koja će biti primenjena na uneti trošak.
- **Procenat / Vrednost**: određuje da li će se trošak obračunavati kao procenat ili kao unapred definisani novčani iznos. Ako je izabrana opcija **Vrednost**, iznos se unosi u istoimeno polje.
- **Procenat**: brojčana vrednost procenta troška.

:::note Napomena
Ako izabrani **Tip troška** ima uključenu oznaku [Raspodeljeno](/docs/configurations/tables/general-settings/expenses-types), prilikom knjiženja primke u skladište trošak će biti raspodeljen na sve artikle prema ukupnom iznosu svakog reda artikla. Rezultat raspodele vidljiv je u [Skladišnom knjiženju](/docs/logistics/warehouse/stock-records/record).

1. Ako artikli imaju cenu: ukupan trošak biće proporcionalno raspodeljen prema neto iznosu svakog artikla. Dobijeni iznos biće dodat početnoj ceni artikla u polju **Ukupan iznos** skladišnog knjiženja. Ako je za pojedini red iznos jednak 0, za potrebe raspodele smatraće se da iznosi 1 kako bi svi artikli učestvovali u raspodeli troška.
2. Ako svi artikli imaju cenu 0: trošak će biti ravnomerno raspodeljen na sve redove artikala, a na osnovu te raspodele biće obračunat **Iznos knjiženja / Upravljački iznos** u skladišnom knjiženju, uzimajući u obzir količine pojedinog artikla.
:::

### 4.3 Sažetak PDV-a

Prikazuje se sažetak PDV-a dokumenta za svaki pojedinačni PDV kod.

### 4.4 Sažetak dospeća

Prikazuje sažetak dospeća dokumenta za svaki **tip** i **način** plaćanja.

- **Broj**: redni broj reda.
- **Plaćanje**: alfanumerička oznaka **tipa plaćanja** preuzeta iz **Zaglavlja dokumenta > kartica Plaćanja**.
- **Iznos**: obračunati iznos dospeća. Može se ručno promeniti, pri čemu se automatski uključuje oznaka **Ručna izmena**. (Sistem automatski proverava i upozorava ako postoji neslaganje između iznosa dospeća i ukupnog iznosa računa.)
- **Datum dospeća**: obračunati datum dospeća. Može se ručno promeniti, pri čemu se automatski uključuje oznaka **Ručna izmena**.
- **Troškovi naplate**: polje u kojem se prikazuju obračunati troškovi naplate.
- **PDV**: stopa PDV-a koja se primenjuje na troškove naplate (može se postaviti i ručno).
- **Predlošci za knjiženje**: omogućava direktan izbor računovodstvenog predloška u računu, na osnovu kojeg će automatski biti kreirano knjiženje naplate ili plaćanja. Obratite pažnju na predložak jer će koristiti definisane račune čak i ako nije naveden podkonto, zbog čega postoji sledeće polje.
- **Konto / Podkonto kupca ili dobavljača**: konto koji se koristi za naplatu ili plaćanje dospeća (na primer blagajna ili banka), pri čemu njime zamenjuje konto definisan u računovodstvenom predlošku plaćanja (ili naplate).
- **Pojedinačno**: omogućava knjiženje zatvaranja dospeća u automatskom knjiženju.
- **Referentni model plaćanja**: model za generisanje šifre plaćanja. U pojedinim lokalizacijama svako dospeće na računu ima šifru koju dodeljuje izdavalac računa. Ta šifra definisana je prema određenim modelima (tabela **MB_PaymentReferenceModels**) kako bi mogla biti generisana odgovarajućim algoritmom.
- **Tipovi modela plaćanja**: šifra (formirana prema prethodnom modelu) koja se upisuje u dospeće i zatim koristi u nalozima za plaćanje prema banci kako bi banka primaocu mogla javiti koje je dospeće izmireno. Na osnovu toga moguće je automatizovati uvoz bankovnih izvoda i zatvaranje dospeća. Ova šifra prenosi se u dospeće i u SEPA datoteku.
- **Rok za avansno plaćanje**: polje predviđeno u SDI strukturi računa koje označava krajnji datum za ostvarivanje finansijskog popusta.
- **Tip popusta**: tip finansijskog popusta.
- **Finansijska vrednost rabata**: iznos finansijskog popusta prilikom naplate.

### 4.5 Ostala polja

- **Volumen**: prikazuje ukupan volumen, dobijen sabiranjem volumena svih artikala (vrednost se preuzima iz **Šifarnika artikla > kartica** [**Težine / Dimenzije**](/docs/erp-home/registers/items/create-new-item)), ako je jedinica mere volumena artikla jednaka onoj definisanoj u parametrima primke. U obzir se uzimaju samo artikli kojima je ovo polje popunjeno.

- **Neto / Bruto težina**: prikazuje ukupnu neto težinu, dobijenu sabiranjem težina svih artikala (vrednost se preuzima iz **Šifarnika artikla > kartica** [**Težine / Dimenzije**](/docs/erp-home/registers/items/create-new-item)), ako je jedinica mere težine artikla jednaka onoj definisanoj u parametrima primke. U obzir se uzimaju samo artikli kojima je ovo polje popunjeno.

- **Paketi**: prikazuje ukupan broj paketa na osnovu podataka unetih u **Šifarnik artikla > kartica** [**Težine / Dimenzije**](/docs/erp-home/registers/items/create-new-item), u poljima **Broj artikala u paketu** ili **Broj paketa za artikal**. U obzir se uzimaju samo artikli kojima je ovo polje popunjeno.

- **Vrednosti ručno izmenjene**: uključivanjem ove oznake moguće je ručno izmeniti vrednosti **Volumena**, **Neto težine**, **Bruto težine** i **Paketa**.

### 4.6 Ukupni iznosi dokumenta

import SummariesDocumentTotal from './../../../import/sections/summaries-document-total.md'

<SummariesDocumentTotal />

## **5. Prevoz**

Ova kartica sadrži informacije o prevozu artikala.

Padajući meniji prikazuju sve **Primaoce**, **Odredišta** i **Prevoznike** definisane u **Šifarniku kontakta > kartica [Otprema](/docs/erp-home/registers/contacts/create-new-contact/accounting-data/customer-vendors-data/delivery)**, ali ih je moguće uneti i ručno.

Dostupna su sledeća polja:

- **Pošiljalac**: u ovom polju moguće je uneti konto/podkonto pošiljaoca.
- **Primalac**: automatski se predlaže podrazumevani primalac definisan u šifarniku kupca. Ako nije definisan, koristi se adresa kupca.
- **Odredište**: automatski se predlaže podrazumevano odredište primaoca ako je definisano u šifarniku kupca.
- **Volumen**: prikazuje ukupan volumen, dobijen sabiranjem volumena svih artikala (vrednost se preuzima iz **Šifarnika artikla > kartica Težine / Dimenzije**), ako je jedinica mere volumena artikla jednaka onoj definisanoj u parametrima računa.
- **Neto težina**: prikazuje ukupnu neto težinu, dobijenu sabiranjem težina svih artikala (vrednost se preuzima iz **Šifarnika artikla > kartica Težine / Dimenzije**), ako je jedinica mere težine artikla jednaka onoj definisanoj u parametrima računa.
- **Bruto težina**: prikazuje ukupnu bruto težinu, dobijenu sabiranjem težina svih artikala (vrednost se preuzima iz **Šifarnika artikla > kartica Težine / Dimenzije**), ako je jedinica mere težine artikla jednaka onoj definisanoj u parametrima računa.

:::tip Zapamtite
Uslovi za automatski obračun težina i volumena u sažetku dokumenta su:
- uključena oznaka **Preračunaj prevoz** u [parametrima](/docs/configurations/parameters/purchase/purchase-delivery-note-parameters) dokumenta;
- definisana **podrazumevana jedinica mere** za težinu i volumen u parametrima primke.
:::

- **(Spoljašnji) izgled robe**: padajući meni povezan sa istoimenom tabelom u kojoj se definišu odgovarajući podaci.
- **Paketi**: automatski se predlaže broj paketa na osnovu podataka unetih u **Šifarnik artikla > kartica Težine / Dimenzije**, u poljima **Broj artikala u paketu** ili **Broj paketa za artikal**. U obzir se uzimaju samo artikli kojima je ovo polje popunjeno.
- **Vrednosti ručno promenjene**: uključivanjem ove oznake moguće je ručno izmeniti vrednosti **Volumena**, **Neto težine**, **Bruto težine** i **Paketa**, koje se inače automatski preuzimaju iz šifarnika artikla.
- **Ulaz / Izlaz carinske ispostave**: polja koja se koriste za eTransport u rumunskoj lokalizaciji i povezana su sa tabelom **Carinska ispostava**.
- **Ulaz / Izlaz graničnog prelaza**: polja koja se koriste za eTransport u rumunskoj lokalizaciji i povezana su sa tabelom **Granični prelaz**.
- **Prevoz**: potrebno je izabrati subjekt odgovoran za prevoz označavanjem opcije **Pošiljalac**, **Primalac** ili **Prevoznik**. U zavisnosti od izbora menja se sadržaj donjeg dela obrasca:
  - ako je prevoz u nadležnosti **Pošiljaoca**, moguće je uneti **Registarsku oznaku vozila**, **Prikolicu**, **Datum** i **Vreme početka prevoza**;
  - ako je prevoz u nadležnosti **Primaoca**, dostupna su ista polja: **Registarska oznaka vozila**, **Prikolica**, **Datum** i **Vreme početka prevoza**;
  - ako je prevoz u nadležnosti **Prevoznika**, dostupna su polja **Računovodstveni kontakt prevoznika**, **Registarska oznaka vozila**, **Prikolica**, **Datum i vreme prevoza**, kao i podaci o **Naručiocu**, **Utovarivaču**, **Vlasniku** i **Mestu utovara**.