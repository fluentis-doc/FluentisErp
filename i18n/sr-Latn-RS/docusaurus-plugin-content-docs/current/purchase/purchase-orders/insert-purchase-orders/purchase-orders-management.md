---
title: Unos narudžbina dobavljača
sidebar_position: 1
---

Ovaj obrazac otvara se putem:

- putanje **Nabavka > Narudžbine dobavljačima > Nova narudžbina**
  ili putem
- dugmeta **Novo** koje se nalazi u obrascu [Pretraga narudžbina dobavljača](/docs/purchase/purchase-orders/insert-purchase-orders/search-purchase-orders).

## **1. Obavezni podaci**

Da bi se kreirala narudžbina, korisnik mora uneti obavezna polja:

**Tip narudžbine**: prethodno definisan u *Konfiguracija > Tabele > Nabavka > Tipovi narudžbina dobavljača*.  
Ovo polje određuje raspon numeracije dokumenta koji se unosi i automatski predlaže broj narudžbine dobavljača na osnovu datuma unosa i poslednjeg unetog broja. Osim toga, ako je u *Tipu narudžbine* aktivirana oznaka [Automatska potvrda narudžbine](/docs/configurations/tables/purchase/purchase-orders-type), datum potvrde narudžbine biće predložen kao jednak datumu unosa narudžbine;  
**Godina**: automatski se unosi tekuća godina, ali se može ručno menjati uz poštovanje pravila progresije između datuma i broja;  
**Broj**: automatski se predlaže prema tipu, ali se može ručno menjati uz poštovanje pravila progresije između datuma i broja;  
**Datum unosa**: automatski se predlaže tekući datum, ali se može ručno menjati uz poštovanje pravila progresije između datuma i broja;  
**Dobavljač**: unosom putem [pomoći polja](/docs/guide/common/operations-with-data/manual-entry-or-help-and-data-selection) ili [direktnim unosom](/docs/guide/common/operations-with-data/manual-entry-or-help-and-data-selection).

## **2. Zaglavlje**

Nakon izbora obaveznih podataka u gornjem delu, korisnik može nastaviti unos sledećih podataka [ručno](/docs/guide/common/operations-with-data/manual-entry-or-help-and-data-selection), pomoću [pomoći polja](/docs/guide/common/operations-with-data/manual-entry-or-help-and-data-selection), ili će aplikacija, u skladu sa izabranim procedurama, *automatski* popuniti određena polja.

:::note NAPOMENA
Ako se dokument *kreira automatski*, ovi podaci preuzimaju se iz *izvornog dokumenta* iz kojeg je generisan.
:::

### 2.1 Podaci dobavljača

Unošenjem **Dobavljača** automatski se *predlažu* svi specifični podaci sa kartice **Zaglavlje**, prema podacima prethodno definisanim u [šifarniku dobavljača](/docs/erp-home/registers/contacts/create-new-contact/accounting-data/accounting-data-intro), u odgovarajućim poljima adrese i *odeljcima*:

- **Valuta**: [Valuta](/docs/guide/common/glossary/glossary-intro#currency), [Kurs](/docs/guide/common/glossary/glossary-intro#currency-exchange), [Datum valute](/docs/guide/common/glossary/glossary-intro#currency-date).
- **Država**: [Država](/docs/guide/common/glossary/glossary-intro#country), [Jezik](/docs/guide/common/glossary/glossary-intro#language), [Zona](/docs/guide/common/glossary/glossary-intro#zone).
- **Pošiljke**: [Isporuka](/docs/guide/common/glossary/glossary-intro#shipment), [Paritet](/docs/guide/common/glossary/glossary-intro#carriage), [Pakovanje](/docs/guide/common/glossary/glossary-intro#packing), [Cenovnik](/docs/guide/common/glossary/glossary-intro#sales-price-list) i njegov [period važenja](/docs/guide/common/glossary/glossary-intro#validity-date).
- **Plaćanja**: odeljak koji sadrži podatke o plaćanjima, popustima, odredištu isporuke i prevozniku.

### 2.2 Ostali neobavezni podaci

- **Zahtevani datum isporuke** i **Datum isporuke** – ako se postave pre unosa stavki u narudžbinu, automatski će biti preneti na sve stavke dokumenta. Datumi na stavkama mogu se naknadno ažurirati korišćenjem funkcije **Zameni planirani datum isporuke u stavkama** na alatnoj traci.

- **Datum potvrde naloga** – za tipove narudžbina kod kojih nije uključena opcija automatske potvrde, u ovo polje unosi se datum potvrde narudžbine. Za realizaciju narudžbine dobavljača potrebno je uneti datum potvrde.

- **Primeni od** – datum koji se koristi kao osnova za obračun rokova dospeća plaćanja.

- **Beleške dobavljača** – polje se automatski popunjava podacima iz kartice dobavljača, ali ga je moguće i ručno izmeniti.

- **Naša/Vaša referenca** – u ova polja obično se unose interna referenca i referenca dobavljača za dokument. Ako su podaci definisani na kartici dobavljača, automatski se preuzimaju, a po potrebi ih je moguće ručno izmeniti.

  Ako je narudžbina kreirana postupkom **Realizacija po projektu**, u polja *Beleške dobavljaču* i *Naša/Vaša referenca* automatski se prenose podaci iz naloga za nabavku. Ovaj prenos moguć je samo kada je narudžbina kreirana na osnovu jednog izvornog dokumenta.

- **Početna beleška naloga** – moguće je izabrati unapred definisane beleške unete u šifarnik **Konfiguracija > Pomoćni podaci > Upravljanje predlošcima beleški**. Izbor se vrši putem pomoći za unos (Help) u polju *Početne beleške*.

- **Projekat** – dokument je moguće povezati sa projektom korišćenjem pomoći za unos. Povezivanje se odnosi na zaglavlje dokumenta. Ako je narudžbina kreirana iz dokumenta koji već sadrži projekat (na primer zahtev za nabavku), projekat se automatski prenosi.

- **Radni nalog proizvodnje** – dokument je moguće povezati sa proizvodnim nalogom korišćenjem pomoći za unos. Ako je narudžbina nastala iz planiranih naloga za nabavku, nalog za nabavku predlaže se automatski.

- **Država, jezik i zona** – podaci se automatski preuzimaju iz kartice dobavljača, ali ih je moguće ručno promeniti.

- **Operater** – definiše korisnika koji je izradio dokument. Ako je u parametrima narudžbina dobavljača uključena opcija **Obavezna šifra korisnika**, unos ovog podatka biće obavezan za čuvanje dokumenta. Operateri moraju prethodno biti evidentirani u šifarniku zaposlenih.

- **Prevoznik** – podatak se preuzima iz kartice dobavljača ako je definisan, a može se uneti i ručno.

- **Prodajni cenovnik** – ako je na kartici dobavljača definisan podrazumevani cenovnik, on će biti automatski predložen zajedno sa pripadajućim periodom važenja.

- **Ažuriranje cenovnika** – kada je opcija uključena, nabavni cenovnik automatski se ažurira prilikom čuvanja dokumenta prema podacima sa stavki. Podešavanje je moguće menjati i na nivou pojedinačne stavke.

- **Prodajna mesta** – koristi se u procesima vezanim za distributivne lance i nalazi se u oblasti logistike. Ako je narudžbina nastala prenosom robe između prodajnih mesta unutar iste organizacije, ovde će biti prikazano prodajno mesto sa kojeg roba dolazi.

- **Status izvršenja** – kada se narudžbina delimično ili u potpunosti realizuje putem prijema robe (DDT-a) ili ulaznog računa, status se automatski menja iz **Nije izvršeno** u **Delimično izvršeno** ili **Izvršeno**. Moguće je prinudno označiti narudžbinu kao realizovanu i kada nije u potpunosti obrađena. U tom slučaju datum realizacije biće sačuvan u polju *Datum realizacije*.

**Status narudžbine**: prilikom kreiranja nema aktivnih oznaka, ali se kasnije može promeniti u:
> **Odštampano**: kada se odštampa kao konačna;  
> **Istorijski**: kada korisnik sačuva dokument;  
> **Poništeno**: kada korisnik želi da otkaže dokument umesto da ga obriše, status evidentirano automatski se postavlja na svim njegovim redovima.

:::note NAPOMENA
Oznake se mogu ukloniti postupkom poništavanja operacije.
:::

#### Specifična dugmad

> **Izvršenje projekta**: pokreće postupak za kreiranje narudžbine dobavljaču iz naloga za nabavku. Opcija postaje dostupna nakon unosa dobavljača i tipa narudžbine dobavljača. Da bi nalog za nabavku mogao biti preuzet, mora biti odštampan i potvrđen.

> **Zameni planirani datum isporuke u stavkama**: omogućava, nakon definisanja polja Zahtevani datum isporuke i/ili Datum isporuke u zaglavlju narudžbine, masovnu zamenu tih datuma u svim već unetim stavkama artikala.

### 2.3 Plaćanja

**Plaćanja** se automatski preuzimaju iz *Šifarnika dobavljača > kartica Plaćanja* i korisnik ih može menjati ili brisati.

Ako je sa **Tipom plaćanja** povezan finansijski popust, iznos popusta uzima se u obzir samo u računovodstvenom smislu, odnosno prilikom određivanja datuma dospeća dokumenta, a ne u ukupnom iznosu dokumenta.

Ako dokument potiče iz narudžbine, tipovi plaćanja mogu se preuzeti iz prvog dokumenta, iz šifarnika dobavljača ili se mogu prikazati u obrascu dokumenata za obradu, pri čemu korisnik bira željeni tip plaćanja.

#### Specifično dugme

> **Otkaži plaćanja**: koristi se za brisanje izabranih redova plaćanja.

### 2.4 Popusti

Prikazuju se samo unapred definisani popusti preuzeti iz *Šifarnika klijenta > kartica Popusti* i oni koji su dodeljeni uslovima plaćanja ili određenim artiklima. Korisnik ih može menjati ili brisati.

Popusti predloženi u zaglavlju dokumenta ponovo se prikazuju prilikom svakog novog unosa stavke u dokument.

Ako se nakon unosa stavki u dokument unese novi popust u zaglavlju, on se neće preneti na već unete stavke dokumenta.

#### Specifično dugme

> **Obriši podrazumevane rabate**: koristi se za brisanje izabranih redova popusta.

### 2.5 Odredište

Ovde se prikazuju informacije unete u *Šifarniku dobavljača > kartica Isporuke*, samo ako postoje podrazumevani podaci. Padajući meni nudi sve primaoce, odredišta i prevoznike definisane u šifarniku dobavljača.

Adrese isporuke (primalac/odredište i prevoznik) mogu se uneti i samo opisno, bez prethodnog unosa među kontaktima.

### 2.6 Prevoznik

U ovom polju moguće je uneti prevoznika koji će izvršiti isporuku narudžbine. Ako je prevoznik definisan u *Šifarniku dobavljača > kartica Isporuke*, može se izabrati iz padajućeg menija u drugoj koloni.

Alternativno, dvostrukim klikom na treću kolonu (*Prevoznik*) moguće je izabrati jedan od kontakata kompanije.

Po potrebi se mogu uneti i dodatni podaci, kao što su registarska oznaka vozila prevoznika i datum i vreme prevoza.

### 2.7 Dodatni podaci

Ovde se prikazuju informacije unete u *Šifarniku dobavljača > kartica Dodatni podaci*, samo ako postoje podrazumevani podaci.

### 2.8 Izvršenje projekta (naloga)

Postupak preuzimanja naloga za nabavku omogućava delimičnu ili potpunu realizaciju narudžbine. Prikazuju se svi nalozi koji još nisu realizovani, koji nisu prinudno izvršeni ili koji su delimično izvršeni.

Da bi nalog za nabavku mogao biti preuzet, mora biti odštampan i mora imati unet datum potvrde.

Pre pokretanja preuzimanja potrebno je u zaglavlju dokumenta uneti tip narudžbine koji se želi kreirati i dobavljača. Nakon toga, klikom na dugme **Izvršenje projekta** otvara se obrazac u kojem je moguće filtrirati projekte povezane sa dobavljačem izabranim na dokumentu.

:::warning Važno
Ako je u **parametrima naloga za nabavku** uključena opcija **Obavezno izvršenje**, prilikom kreiranja nove narudžbine dobavljača automatski se otvara obrazac **Realizacija po nalogu** i nije moguće ručno dodavati stavke u narudžbinu dok se ne realizuje najmanje jedna stavka iz naloga za nabavku.
Ako je uključena opcija **Obavezno izvršenje artikala iz naloga**, nije dozvoljeno dodavanje drugih stavki u narudžbinu osim onih koje su preuzete realizacijom naloga.
:::

U oblasti filtera moguće je izabrati prikaz podataka u obliku:

- **Tabelarnog prikaza (Grid)**
- **Hijerarhijske strukture**
- Oba prikaza istovremeno

> **Hijerarhijska struktura** omogućava pregledniji prikaz naloga i pripadajućih stavki, kao i lakši masovni izbor artikala unutar naloga za nabavku.

> **Tabelarni prikaz (Grid)** omogućava veću prilagodljivost obrasca dodavanjem polja iz *Object Navigatora*. U ovom prikazu masovni izbor stavki vrši se pomoću prečica na tastaturi ili korišćenjem funkcije **Aktiviraj/Deaktiviraj samo izabrane redove** na alatnoj traci.

Nakon podešavanja željenih filtera potrebno je kliknuti na dugme **Traži**, nakon čega će se u donjem delu prikazati svi potvrđeni, a još uvek nerealizovani ili delimično realizovani nalozi za nabavku.

:::note Napomena
Postupak preuzima sve podatke definisane na nalogu za nabavku. Zbog toga će na narudžbinu biti preneti i svi uslovi nabavke definisani na nalogu, čak i ako su u međuvremenu promenjeni.
:::

U rezultatima pretrage korisnik može:

- Označiti sve ili samo pojedine predložene stavke. Dovoljno je uključiti oznaku na početku reda stavke. Količina za realizaciju automatski će biti postavljena na preostalu količinu.

- Izabrati samo deo količine pojedine stavke. U tom slučaju potrebno je ručno izmeniti polje **Količina za izvršenje**.

Za završetak postupka potrebno je kliknuti na dugme **Izvršenje**, čime će svi izabrani podaci sa naloga za nabavku biti preneti u narudžbinu dobavljača.

#### Specifična dugmad

> **Traži**: omogućava pretragu narudžbina za nabavku;  
> **Izvršenje**: omogućava prenos izabranih stavki/narudžbina;  
> **Označi/Odznači sve**: omogućava izbor/poništavanje izbora svih stavki sa liste;  
> **Aktiviraj/Deaktiviraj samo izabrane redove**: posebno korisno kod preuzimanja putem tabelarnog prikaza; omogućava aktiviranje ili deaktiviranje oznaka na svim izabranim redovima.

*Postupak ukratko*:

Za dobavljača i sve ostale filtere unete u odeljku Filter (**1**), u Grid-u će biti prikazan po jedan red za svaku narudžbinu koja je odštampana, potvrđena, a još nije realizovana ili je delimično realizovana.

:::note NAPOMENA
Postupak preuzima sve podatke prisutne u narudžbini i kao rezultat toga primenjuju se uslovi nabavke definisani u narudžbini, čak i ako su se u međuvremenu promenili.
:::

![](/img/it-it/purchase/purchase-orders/insert-purchase-orders/header-procedures/image08.png)

Koristite dugmad (**2**) za proširenje ![](/img/neutral/common/minus.png) / skupljanje ![](/img/neutral/common/plus.png) željenih narudžbina.

Koristite oznake (**3**) za izbor ![](/img/neutral/common/check.png) / poništavanje izbora ![](/img/it-it/purchase/purchase-orders/insert-purchase-orders/header-procedures/image12.png) pojedinačne stavke ili cele narudžbine.

## 3. Artikli

Na ovoj kartici unose se svi artikli sa pripadajućim podacima.

Za detalje o zajedničkom funkcionisanju obrazaca pogledajte sledeći članak: [Značajke, dugmad i zajednička polja](/docs/guide/common).

Podaci se unose **ručno**, uz **pomoć polja**, ili ih mogu automatski predložiti povezane procedure.

### 3.1 Obavezni podaci

**Red**: ovo polje popunjava se automatski i redom prilikom unosa podataka u red.

**Tip reda**: omogućava izbor različitih tipova artikala iz padajućeg menija.

> **Artikal sa klasom**: artikli kodirani u šifarniku koji se mogu knjižiti u analitičkom računovodstvu i evidentirati u skladištu.  
> **Artikal bez klase**: opisni artikli koji se mogu knjižiti u analitičkom računovodstvu, ali se ne mogu evidentirati u skladištu.  
> **Trošak**: kodirani ili nekodirani artikli koji se zasebno prikazuju u sažecima dokumenata. Ako je troškovni artikal kodiran i poreski relevantan, biće evidentiran u skladištu; ako nije kodiran ili nije poreski relevantan, neće biti evidentiran u skladištu.  
> **Stavka beleške**: opisne beleške koje se prikazuju na štampanom dokumentu; nemaju uticaja na računovodstvo niti na skladište.

:::note NAPOMENA
Ako se direktno započne unosom artikla, njegova klasa, šifra i tip reda (*Artikal sa klasom*) automatski će biti uneti.
:::

**Klasa/Artikal/Opis artikla**: mogu se uneti **ručno** ili uz **pomoć polja**, koja će predložiti sve povezane informacije definisane u Šifarniku artikala.

Nakon unosa artikla, njegov opis automatski će biti preuzet iz šifarnika. Ako artikal ima *Varijante*, potrebno je izabrati željenu varijantu iz padajućeg menija *Varijante*.

**Jedinica mere**: automatski se predlaže glavna jedinica mere artikla, ali korisnik može izabrati drugu jedinicu mere.

**Varijante**: ako izabrani artikal ima varijante, potrebno je izabrati željenu varijantu iz ovog padajućeg menija. Izbor varijante koristan je za artikle sa ovom specifičnom konfiguracijom, jer mogu imati cenu različitu od standardno definisane cene. Zbog toga cena artikla sa varijantama može biti različita od cene istog artikla bez varijanti. To može zahtevati upravljanje varijantama artikla u odgovarajućem cenovniku.

**Količina**: predstavlja količinu glavne jedinice mere, a podrazumevana vrednost je 1. Može se uneti ručno ili preuzeti iz dokumenta koji se koristi za realizaciju (npr. iz narudžbine).

**Cena**: cena se predlaže iz cenovnika definisanog u šifarniku kontakata; referentni cenovnik za artikal prikazan je na kartici *Popusti/Cenovnici*.

Isti dokument može sadržati artikle sa cenama preuzetim iz različitih cenovnika, ako je u šifarniku subjekta povezano više cenovnika u nizu (vidi **Šifarnik klijenta**).
Dvostrukim klikom na polje **Cenovnici** (kartica *Popusti/Cenovnici*) korisnik može izabrati drugi cenovnik od podrazumevanog, iz kojeg će biti preuzeta cena unetog artikla.
Ako cenovnik ne postoji, predložena vrednost može se preuzeti iz *poslednje nabavne cene* definisane u šifarniku artikla, osim ako u [Podešavanjima narudžbina dobavljača](/docs/configurations/parameters/purchase/purchase-orders-parameters) nije uključena opcija *Trošak postaviti na nulu kada ne postoji cenovnik*.

**PDV**: prioritet ima podatak unet u polje PDV u *Šifarniku kontakta*. Ako ne postoji, predlaže se vrednost iz *Šifarnika artikla*, ali korisnik može uneti i drugu vrednost. Ovo polje je obavezno.

**Iznos**: automatski se obračunava nakon primene svih popusta, odnosno prikazuje neto iznos stavke.

**Ukupan popust**: prikazuje ukupan iznos popusta definisanih na kartici *Popusti/Cenovnici* za pojedinačni red artikla.

#### Neobavezni podaci

**Tip prometa nabavke**: predložena vrednost je ona definisana na kartici **Generalno** u šifarniku artikla. Ako nije definisana, neće biti predložena nijedna vrednost. Međutim, prilikom evidentiranja računa uzeće se u obzir vrednost uneta u polje **Trošak/Prijem prema podrazumevanim podešavanjima** u šifarniku kontakata.

**Alternativna jedinica mere**: predlaže se jedinica mere definisana na kartici **Alternativne jedinice mere** u šifarniku artikla sa uključenom oznakom **Podrazumevano**. Predlog će biti prikazan samo ako je u [Podešavanjima narudžbina dobavljača](/docs/configurations/parameters/purchase/purchase-orders-parameters) aktivirana opcija **Upravljanje dvostrukim jedinicama mere**. Ova polja prikazuju količinu u alternativnoj jedinici mere ako je podatak definisan na kartici **Alternativne jedinice mere** u šifarniku artikla (koristi se ona sa oznakom **Podrazumevano**) i ako su u podešavanjima dokumenta aktivirane opcije **Upravljanje dvostrukim jedinicama mere** i **Automatski predlog alternativne jedinice mere**.

**Alternativna količina**: predlaže se vrednost za alternativnu jedinicu mere, izračunata množenjem ili deljenjem upravljačke količine (koja se odnosi na glavnu jedinicu mere) faktorom konverzije definisanim na kartici **Alternativne jedinice mere** u šifarniku artikla.

**Zahtevani datum isporuke**: datum koji označava željeni datum isporuke artikla.

**Šifra/Opis artikla dobavljača**: u ovom delu moguće je uneti šifru i opis koje dobavljač koristi za identifikaciju artikla. Ovi podaci automatski se predlažu ako je u šifarniku artikla (kartica **Preferirani dobavljači**) povezan odgovarajući artikal dobavljača.

:::note NAPOMENA
Za narudžbine generisane iz zahteva za nabavku (RDA), datum isporuke određuje se na sledeći način:
- ako je u RDA definisan **Zahtevani datum isporuke**, taj datum prenosi se na narudžbinu;
- ako **Zahtevani datum isporuke** nije definisan, koristi se zahtevani datum iz RDA.
:::

#### Specifična dugmad

> **Podeli količinu na više datuma isporuke**: koristi se za podelu reda narudžbine na više redova prema zahtevanom datumu isporuke. Ovaj postupak otvara novi obrazac u kojem je potrebno uneti novi datum isporuke i planiranu količinu za taj datum.  
> **Pakovanje**: postaje dostupno nakon čuvanja narudžbine i omogućava kreiranje UDC-a (jedinice za rukovanje teretom) na osnovu izabranog reda. Izabrani red mora sadržati šifrirani artikal koji je sačuvan u dokumentu. Korisnik mora imati odgovarajuća prava definisana u parametrima skladišnog ulaza/izlaza za kreiranje paleta. Pored toga, artikal mora biti podešen za upravljanje putem UDC-a. UDC će biti kreiran prema pravilima definisanim za tip UDC-a u šifarniku artikla, na kartici **Pakovanje**.  
> **Ažuriraj cenovnike**:
- Dugme **Ažuriraj cenovnik trenutnih cena** omogućava ažuriranje cena u trenutno važećem cenovniku za svaki izabrani red artikla.
- Dugme **Kreiraj novi cenovnik sa novim periodom važenja** otvara prozor u kojem je potrebno uneti period važenja novog cenovnika. Novi cenovnik sadržaće samo izabrane redove i biće povezan sa dobavljačem navedenim na narudžbini.

### 3.3 Popusti/Cenovnici

**Cenovnik**: prikazuje cenovnik iz kojeg je preuzeta cena artikla, zajedno sa datumom početka i završetka važenja, kao i posebnim uslovima dodeljenim artiklu u cenovniku (npr. tip količinskog razreda popusta).

**Ručna cena**: automatski se aktivira kada je cena artikla uneta ili izmenjena ručno.

**Ažurirati cenovnik**: ako je ova oznaka aktivna, cena artikla automatski će biti ažurirana u odgovarajućem nabavnom cenovniku prilikom čuvanja dokumenta.

:::important VAŽNO
Za korišćenje popusta na poresku osnovicu potrebno je u bazi podataka aktivirati opšti parametar **GEN-GlobalSettings_CalculateDiscountOnAmount** za odgovarajuću kompaniju.

Ako navedeni parametar nije aktivan, popusti na poresku osnovicu automatski će biti pretvoreni u kaskadne popuste.
:::

#### Specifično dugme

> **Obriši podrazumevane rabate**: omogućava brisanje izabranog popusta iz odgovarajućeg Grid-a.

### 3.4 Podaci o artiklu

Na ovoj kartici prikazuju se i uređuju dodatne informacije vezane za stavku artikla.

- **Varijanta** – omogućava izbor varijante artikla među prethodno definisanim varijantama na kartici artikla. Ako su za pojedine varijante definisane različite cene i/ili popusti, oni će se automatski ažurirati nakon izbora druge varijante.

- **Projekat** – predstavlja projekat povezan sa stavkom dokumenta. Ako je projekat definisan u zaglavlju dokumenta, automatski će biti prenet na sve stavke. Alternativno, projekat se može izabrati korišćenjem pomoći za unos projekata.

- **Beleške** – beleške vezane za pojedinačnu stavku artikla. Mogu se uneti ručno ili izabrati iz unapred definisanih predložaka beleški. Prenose se na sve dokumente nastale iz ove narudžbine.

- **Marka** – oznaka robne marke artikla. Podatak se preuzima iz kartice artikla ili iz cenovnika artikla.

- **Artikal proizvodnog naloga** – ako je narudžbina dobavljača povezana sa proizvodnim nalogom (na primer putem planiranog naloga za nabavku ili zahteva za nabavku), u ovom polju prikazuje se nadređeni artikal definisan na nalogu za nabavku.

- **Upit za ponudu** – ako je narudžbina kreirana iz zahteva za ponudu postupkom **Kreiranje narudžbine dobavljača iz ponude dobavljača**, u ovom polju prikazuje se referenca na izvorni zahtev za ponudu.

- **Skladište i tip skladišnog dokumenta** – definišu skladište i tip skladišnog dokumenta koji će se automatski koristiti prilikom prijema robe u skladište. Vrednosti se preuzimaju iz podešavanja tipa narudžbine, ali ih je moguće izmeniti na pojedinačnoj stavci.

- **Proizvodni nalog** – ako je narudžbina nastala iz procesa planiranja proizvodnje, u ovom polju prikazuje se povezani proizvodni nalog.

- **Cena po alternativnoj jedinici mere** – kada je opcija aktivna, uneta cena odnosi se na alternativnu jedinicu mere, a ne na osnovnu jedinicu. Ovo polje, zajedno sa poljima *Alternativna jedinica mere* i *Alternativna količina*, dostupno je samo ako je u parametrima narudžbina dobavljača uključena opcija **Upravljanje dvostrukim jedinicama mere**.

- **Alternativna jedinica mere / Alternativna količina** – ako je na kartici artikla definisana podrazumevana alternativna jedinica mere i ako je u parametrima narudžbina dobavljača uključena opcija **Automatsko predlaganje alternativne jedinice mere**, ove vrednosti automatski će biti predložene prilikom dodavanja artikla u dokument.

#### Specifično dugme

> **Otkaži**: omogućava brisanje izabranog reda varijante.

### 3.5 Analitika

Može sadržati informacije o centrima troška/profitnim centrima na koje su raspoređene vrednosti artikla.

Ovi podaci mogu se unositi ručno ili automatski (ako su centri troška/profitni centri prethodno definisani u šifarniku subjekta, šifarniku artikla ili kontnom planu).

### 3.6 Dodatni podaci

Prikazuje listu **Dodatnih podataka** povezanih sa artiklom, uz mogućnost dodavanja novih dodatnih podataka koji su korisni samo za tekući dokument, kao i mogućnost izbora, pomoću odgovarajuće oznake, koji će dodatni podaci biti odštampani.

### 3.7 Priloženi dokumenti

Prikazuje detalje eventualnih **Priloženih dokumenata** (naziv, tip dokumenta, eventualne beleške, naša/vaša referenca). Uputstva za prilaganje dokumenta nalaze se u članku *Priloži dokumente*.

### 3.8 Odeljak sa vrednostima

Odeljak prikazuje sažetak troškova koji učestvuju u formiranju konačne cene izabranog artikla u Grid-u artikala.

**Jedinična cena**: vrednost polja **Cena**;

**Količina**: vrednost polja **Količina**;

**Iznos reda**: Cena artikla × Količina artikla;

**Ukupan rabat**: zbir popusta artikla, uključujući i konačne popuste;

**Iznos**: Iznos bez popusta − Popusti;

**Porez**: Osnovica × stopa PDV-a artikla;

**Ukupno**: Osnovica + Porez.

## **4. Sažeci**

U različitim odeljcima ove kartice prikazane su glavne informacije celog dokumenta, kao i određena specifična dugmad.

### 4.1 Konačni popusti artikala

Mogu se uneti samo popusti izraženi u procentima koji se primenjuju na ukupan iznos dokumenta.

Uneti popusti u ovom odeljku obračunavaju se i prikazuju za svaki artikal u dokumentu, na kartici *Artikli > kartica Popusti/Cenovnici*.

**Tip/Opis popusta**: omogućava izbor tipova popusta (unapred definisanih u **Tipovima popusta**), pri čemu se svakom tipu dodeljuje prioritet primene popusta i određuje da li će se popust obračunavati na osnovicu ili kaskadno u odnosu na prethodno primenjene popuste.

**Prioritet**: predstavlja prioritet primene popusta; redosled primene je rastući.

**Kaskada/Iznos**: određuje da li se za obračun popusta koristi osnovica *(cena × količina) − (već obračunati popusti)* ili *(cena × količina)*.

**Vrednost**: numerička vrednost konačnog popusta koji se primenjuje.

### 4.2 Troškovi

Prikazuju se troškovi definisani u šifarniku kontakata, na kartici *Troškovi/Popusti*.

Takođe postoji mogućnost unosa troškova koji se odnose samo na tekući dokument.

**Tip/Opis**: omogućava izbor tipova troškova (unapred definisanih u **Tipovima troškova**), pri čemu se svakom tipu dodeljuje procenat troška koji će biti primenjen.  
**Procenat/Vrednost**: polje koje određuje da li će se troškovi obračunavati procentualno ili kao unapred definisan novčani iznos.  
**Procenat**: numerička vrednost procenta troška.

### 4.3 Sažetak PDV-a

Prikazuje se sažetak PDV-a dokumenta za svaku PDV šifru.

### 4.4 Sažetak dospeća

U ovoj tabeli prikazuju se rokovi dospeća plaćanja obračunati na osnovu uslova definisanih u izabranim tipovima plaćanja.

### 4.5 Ostala polja

**Konačna beleška naloga**: opisno polje koje korisnik može slobodno popuniti, uključujući korišćenje pomoći za unapred definisane (kodifikovane) beleške.

### 4.6 Svi iznosi dokumenta

**Iznos stavki bez popusta**: predstavlja zbir vrednosti svih artikala.  
**Zaduženje**: predstavlja iznos eventualne uplate na račun dokumenta.  
**Poklonjeni iznos**: predstavlja iznos gratis artikala unetih na kartici *Artikli*.  
**Ukupni primenjeni rabati**: predstavlja ukupnu vrednost popusta primenjenih na artikle, bez konačnih popusta.  
**Neto iznos artikala**: bruto iznos artikala – ukupni primenjeni popusti.  
**Konačni popusti artikala**: predstavlja vrednost konačnih popusta izraženih u procentima na bruto iznos artikala.  
**Iznos umanjen za ukupan popust**: *Neto iznos artikala - Ukupni konačni popusti*.  
**Ukupno za stavke troškova**: predstavlja vrednost troškova unetih na prethodnoj kartici kao artikli *Tipa trošak*.  
**Troškovi naplate**: predstavlja zbir unetih troškova naplate u Grid-u *Troškovi*.  
**Trošak overe**: predstavlja zbir unetih troškova marke u Grid-u *Troškovi*.  
**Ukupno troškovi/popusti/doplate**: predstavlja vrednost troškova unetih u Grid-u *Troškovi*.  
**Osnovica**: *Neto iznos artikala – Konačni popusti artikala + Ukupno za stavke troškova + Ukupno troškovi/popusti/doplate*.  
**Porez**: predstavlja zbir vrednosti sadržanih u sažecima PDV-a.  
**Ukupno**: *Osnovica + PDV*.  





