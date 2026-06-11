---
title: Nova narudžba kupca
sidebar_position: 2
---

Obrazac **Nova narudžba kupca** otvara se putem menija **Prodaja > Narudžbe kupaca > Nova narudžba** ili pomoću dugmeta dostupnog u obrascu [Pretraga narudžbi kupaca](/docs/sales/sales-orders/create-new-sales-orders/search-sales-orders).

## Kako kreirati narudžbu kupca

## 1. Obavezni podaci

Za nastavak kreiranja narudžbe kupca potrebno je uneti sledeća **obavezna polja**:

- **Tip narudžbe**: definiše se u **Konfiguracija > Tabele > Prodaja > [Tipovi narudžbi](/docs/configurations/tables/sales/sales-order-types)**. Za unos narudžbe obavezno je da odabrani tip narudžbe ima definisanu numeraciju. U zavisnosti od konfiguracije tipa narudžbe moguće su različite funkcionalnosti, poput automatskog kreiranja projekta, rada sa cenama koje uključuju PDV, upravljanja matricama artikala i drugih specifičnih funkcionalnosti.

- **Broj**: svakom dokumentu dodeljuje se broj prema numeraciji definisanoj u tabeli [Numeracije](/docs/configurations/tables/fluentis-numerations) i povezanoj sa tipom dokumenta. Numeracija po pravilu koristi automatsku progresiju datuma i broja, kao i mehanizam popunjavanja eventualnih praznina u nizu. Ako korisnik želi ručno da unosi broj dokumenta, potrebno je isključiti progresiju datuma i broja, isključiti popunjavanje nedostajućih brojeva i uključiti opciju eksterne numeracije.

- **Kupac**: bira se pomoću [pomoćne forme](/docs/guide/common/operations-with-data/manual-entry-or-help-and-data-selection) ili direktnim unosom podataka. Nakon izbora kupca automatski se popunjavaju podaci definisani na kartici kupca: valuta, država, jezik, zona, način isporuke, cenovnik, popusti, uslovi plaćanja, troškovi, agenti, odredište, prevoznik i dodatni podaci.

- **Datum narudžbe**: predstavlja datum kreiranja narudžbe i koristi se za obračun rokova dospeća i primenu uslova plaćanja. Sistem predlaže trenutni datum, ali ga korisnik može promeniti. Ako numeracija koristi progresiju datuma i broja, a unese se datum iz prošlosti, Fluentis će proveriti da li postoje dostupni brojevi za taj datum. Ako ne postoje, korisnik će dobiti odgovarajuće upozorenje.

- **Vrsta poreza po odbitku**: polje je vidljivo samo za kupce koji koriste porez po odbitku i kod kojih je na kartici **Poreske informacije** definisana odgovarajuća postavka. Porez po odbitku predstavlja porez koji naručilac zadržava i uplaćuje poreskoj upravi u ime primaoca naknade. Za ispravno funkcionisanje potrebno je da u tabeli vrsta poreza po odbitku bude pravilno definisan kod za elektronsko fakturisanje. Dokument automatski prepoznaje stavke na koje se primenjuje porez po odbitku i obračunava pripadajući iznos.

Obrazac sadrži više kartica koje su opisane u nastavku.

## 2. Zaglavlje

Nakon unosa obaveznih podataka u gornjem delu obrasca, korisnik može nastaviti unos podataka ručno ili korišćenjem pomoći za unos.

:::note Zapamti
Ako je dokument kreiran automatski, ovi podaci se automatski preuzimaju iz izvornog dokumenta iz kojeg je narudžba generisana.
:::

### 2.1 Podaci o kupcu

Nakon izbora **Kupca**, sistem automatski predlaže podatke definisane na kartici kupca i povezanim adresama.

- **Valuta**: sekcija koja sadrži podatke o valuti, kursu i datumu valute.

- **Država**: sekcija koja sadrži podatke o državi, jeziku i zoni.

- **Dostava**: sekcija koja sadrži podatke o načinu dostave, paritetu isporuke, ambalaži, cenovniku i periodu važenja cenovnika.

- **Odredište** i **Primalac**: automatski se predlažu nakon izbora kupca, ali ih je moguće promeniti.

### 2.2 Dodatni podaci zaglavlja

- **Datum isporuke**: omogućava unos planiranog datuma isporuke robe.

- **Datum spremnosti robe**: omogućava unos datuma kada će roba biti spremna za isporuku. Ovaj datum mora biti manji ili jednak datumu isporuke.

- **Potvrđeno**: označava da je narudžba potvrđena i spremna za izvršenje. Uz oznaku se prikazuje i **Datum potvrde**. Ovaj status je obavezan ako se narudžba treba izvršavati kroz naredne dokumente poput otpremnica ili računa, kao i za potrebe planiranja proizvodnje.

- **Štampano**: aktivira se nakon štampanja narudžbe i označava da je dokument odštampan. Ova oznaka takođe može biti uslov za izvršenje narudžbe u drugim dokumentima.

- **Arhivirano**: koristi se za označavanje dokumenata koji treba da budu arhivirani.

- **Opozvano**: omogućava poništavanje narudžbe. Status narudžbe se automatski menja u prinudno izvršeno kako dokument više ne bi bio dostupan za prenos u druge dokumente.

- **CUP/CIG oznake**: ako je u poreskim podacima kupca omogućeno upravljanje CUP i CIG oznakama, podatke je moguće uneti u dokument.

- **Napomene kupca**: automatski se preuzimaju sa kartice kupca, ali ih je moguće ručno izmeniti.

- **Naša referenca / Vaša referenca**: koriste se za evidentiranje interne reference i reference kupca. Ako je narudžba nastala automatskim prenosom podataka, vrednosti se preuzimaju iz izvornog dokumenta. Prenos se izvršava samo ako je narudžba nastala iz jednog izvornog dokumenta.

- **Početne napomene**: moguće je odabrati unapred definisane napomene iz šifarnika **Konfiguracija > Uslužni programi > Upravljanje kodifikovanim napomenama** ili ih uneti ručno.

- **Operater**: korisnik koji kreira dokument. Podatak postaje obavezan ako je tako definisano u parametrima narudžbe.

- **Status izvršenja**: automatski se menja iz **Neizvršeno** u **Delimično izvršeno** ili **Izvršeno** nakon izvršenja narudžbe kroz otpremnice ili račune. Korisnik može prinudno zatvoriti narudžbu i tada se čuva i datum izvršenja.

:::note
Ako se aktivira status **Prinudno izvršeno**, prikazuje se poruka:

*"Prinudno izvršenje reda izazvaće automatsko brisanje svih planiranih proizvodnih naloga povezanih sa radnim nalozima u statusu raspoređeno, kao i izvršenje radnih naloga u statusu raspoređeno i neobrađeno. Radni nalozi i dokumenti u statusu pokrenuto ili u izvršenju neće biti izmenjeni."*
:::

- **Datum obračuna**: datum koji se koristi za obračun rokova dospeća plaćanja.

### Dostupne funkcije

- **Izvršenje projekta**: pokreće proceduru za kreiranje narudžbe na osnovu projekta.

- **Zameni procenjeni datum isporuke u stavkama**: nakon definisanja datuma isporuke ili planiranog datuma isporuke u zaglavlju omogućava masovnu zamenu tih datuma na svim već unetim stavkama.

- **Dodaj agenta u stavke**: otvara formu za izbor agenta koji će biti dodat svim stavkama artikala, uz mogućnost zadržavanja postojećih agenata.

- **Zameni CIG/CUP u stavkama**: nakon unosa CIG i/ili CUP oznaka u zaglavlju omogućava njihov masovni prenos na sve stavke artikala.

- **Pomoć primaoci/odredišta**: otvara listu primalaca i odredišta definisanih na kartici kupca.

U zaglavlju dokumenta dostupne su i dodatne kartice koje su opisane u nastavku.

### 2.3 Plaćanja

**Uslovi plaćanja** automatski se preuzimaju sa kartice **Plaćanja** na kartici kupca i korisnik ih može menjati ili brisati.

Ako je uz **Vrstu plaćanja** definisan finansijski popust, njegova vrednost uzima se u obzir isključivo u računovodstvenom delu dokumenta, odnosno prilikom obračuna dospeća, ali ne utiče na ukupan iznos dokumenta.

Dostupna funkcija:

- **Otkaži plaćanja**: briše odabrane redove plaćanja.

### 2.4 Popusti

Prikazuju se samo podrazumevani popusti preuzeti sa kartice **Popusti** na kartici kupca, dok se popusti povezani sa uslovima plaćanja ili pojedinačnim artiklima ne prikazuju.
Korisnik može menjati ili brisati predložene popuste.
Popusti definisani u zaglavlju dokumenta automatski se prenose na svaku novu stavku artikla dodatu u dokument.
Ako se novi popust doda u zaglavlje nakon što su stavke već unesene, taj popust se neće automatski preneti na postojeće stavke artikala.

:::important Zapamti
Za korišćenje popusta obračunatih na poresku osnovicu potrebno je u bazi podataka aktivirati opšti parametar: `GEN-GlobalSettings_CalculateDiscountOnAmount`.
Ako parametar nije aktivan, popusti na poresku osnovicu automatski će biti pretvoreni u kaskadne popuste.
:::

Dostupna funkcija:

- **Otkaži popuste**: briše odabrane redove popusta.

### 2.5 Trgovački predstavnici (Agenti)

Prikazuje šifru agenta i pripadajuću proviziju za svaku stavku artikla.
Podaci se automatski preuzimaju sa kartice **Agenti** na kartici kupca.
Ako provizija nije definisana na kartici kupca, agent se ipak mora uneti, ali sa vrednošću provizije **NULL**. Vrednost **0 %** značila bi da je agent povezan sa kupcem, ali nema pravo na proviziju.
Ako se iz narudžbe generiše otpremnica, podaci o agentu prenose se bez izmena.
Ista sekcija dostupna je i na nivou pojedinačne stavke artikla.
Dostupna funkcija:

- **Otkaži agente**: briše odabrane agente.

### 2.6 Adrese za isporuku

Prikazuju se podaci definisani na kartici **Isporuke** na kartici kupca, ukoliko postoje podrazumevane vrednosti.
Padajući meni omogućava izbor:
- primaoca
- odredišta
- prevoznika

definisanih na kartici kupca.

Adrese isporuke moguće je uneti i ručno, bez prethodnog kreiranja kontakta u šifarniku.
Ako na kartici kupca nije definisano podrazumevano odredište ili primalac, kao podrazumevana vrednost koristi se adresa definisana u osnovnim podacima kupca.

### 2.7 Prevoznik

U sekciji **Prevoznik** prikazuju se podaci definisani na kartici **Dostava** na kartici kupca.
Prikazuje se subjekt koji snosi trošak prevoza:
- pošiljalac
- primalac
- prevoznik

U zavisnosti od odabrane opcije menjaju se dostupna polja za unos.
Ako je prevoz na teret **pošiljaoca**, moguće je uneti:
- registarsku oznaku vozila
- datum početka prevoza
- vreme početka prevoza
pri čemu se automatski predlaže adresa kompanije.

Ako je prevoz na teret **primaoca**, moguće je uneti:
- registarsku oznaku vozila
- datum početka prevoza
- vreme početka prevoza
pri čemu se automatski predlaže odredište isporuke.

Ako je prevoz na teret **prevoznika**, dostupna su sledeća polja:
- kartica prevoznika
- registarska oznaka vozila
- datum prevoza
- vreme prevoza

### 2.8 Dodatni podaci

Ovde se prikazuje informacija uneta u Matične podatke subjekta > kartica Dodatni podaci, ali samo ako postoje podrazumevane (default) vrednosti.

### 2.9 Upravljanje zajedničkim računima

Ova kartica dostupna je samo ako je na kartici kupca, u sekciji [Poreski podaci](/docs/erp-home/registers/contacts/create-new-contact/accounting-data/customer-vendors-data/fiscal-information), uključena opcija upravljanja zajedničkim računima.

Upravljanje suvlasnicima omogućava da više osoba bude zajednički nosilac narudžbe.
Suvlasnici moraju biti definisani među alternativnim adresama kupca sa vrstom adrese postavljenom na [Suvlasnik](/docs/configurations/tables/general-settings/address-types).
Takvi kontakti će se automatski prikazati na ovoj kartici, gde je potrebno ručno uneti procenat raspodele troška za svakog suvlasnika.

## 3.a Grupisani artikli

Ova kartica dostupna je samo za [Vrste narudžbi](/docs/configurations/tables/sales/sales-order-types) kod kojih su uključene opcije **Upravljanje matricama dodatnih podataka** i odgovarajuća konfiguracija.
Kartica omogućava generisanje varijanti artikala za sve važeće kombinacije atributa koje će zatim biti prenete na karticu **Artikli**.
Za polja koja nisu objašnjena na ovoj stranici pogledajte dokumentaciju kartice **Artikli**.
Kada se u tabelu unese [artikl sa matričnim upravljanjem](/docs/erp-home/registers/items/create-new-item), na kartici **Matrice** prikazuje se matrica povezana sa karticom artikla.
U ćelije matrice moguće je uneti naručene količine za svaku kombinaciju atributa. Moguće je unositi podatke samo za kombinacije koje su definisane kao važeće na kartici artikla.
Nakon unosa količina potrebno je kliknuti dugme **Potvrdi vrednosti matrice** na alatnoj traci kako bi se generisale sve potrebne varijante.
Svaka generisana varijanta automatski će kreirati jedan red na kartici **Artikli** sa pripadajućom količinom.

## 3.b Artikli

Na ovoj kartici unose se svi artikli zajedno sa pripadajućim podacima.
Za unos **novog artikla** dovoljno je pozicionirati se na novi red i popuniti potrebne podatke ili koristiti dugme **Novo** na alatnoj traci.
U nastavku su opisana obavezna polja glavne tabele:
- **Red**: sadrži redni broj stavke. Vrednost se automatski i uzastopno dodeljuje prilikom unosa novih redova.

- **Tip linije**: omogućava izbor vrste stavke:

  - **Artikl sa klasom**: artikl definisan u šifarniku artikala. Može se knjižiti u analitičko računovodstvo i evidentirati u skladištu.

  - **Artikl bez klase**: opisna stavka koja se može knjižiti u analitičko računovodstvo, ali ne može stvarati skladišne promene.

  - **Trošak artikl**: može biti šifriran ili nešifriran. U sažecima dokumenta prikazuje se odvojeno. Ako je šifriran i fiskalno relevantan, evidentira se u skladištu; u suprotnom ne stvara skladišne promene.

  - **Artikl-bilješka**: opisni red koji se prikazuje na štampi dokumenta. Ne utiče na računovodstvo niti skladište.

  - **Gratis artikl**: obrađuje se kao šifriran ili nešifriran artikl sa poreskog i skladišnog aspekta, ali se u sažecima dokumenta prikazuje odvojeno. U zavisnosti od postavke prenosa PDV-a, obračunava se ili ne obračunava PDV na besplatnu isporuku.

:::note Napomena
Ako korisnik započne unos direktnim upisivanjem artikla, sistem automatski popunjava vrstu artikla, šifru artikla i vrstu reda **Kodifikovani artikl**.
:::

import ItemClassDescription from './../../../import/sections/item-class-description.md'

<ItemClassDescription />

import ItemUM from './../../../import/fields/item-um.md'

<ItemUM />

import ItemQuantity from './../../../import/fields/item-quantity.md'

<ItemQuantity />

import ItemPrice from './../../../import/fields/item-price.md'

<ItemPrice />

:::note Napomena
Ako za artikl nije pronađen odgovarajući cenovnik, predložena vrednost biće prodajna cena definisana na kartici artikla u sekciji **Troškovi/Cene** ili će biti određena prema postavkama parametara dokumenta. Ako ni taj podatak nije dostupan, cena će biti postavljena na **0**.
:::

- **Poreska osnovica**: prikazuje jediničnu cenu pomnoženu sa količinom artikla, umanjenu za sve primenjene popuste.

- **Popusti artikla**: prikazuje sve popuste primenjene na artikl, bilo da dolaze iz zaglavlja dokumenta, cenovnika ili su uneti ručno.

- **Završni popusti artikla**: prikazuje završne popuste definisane u sažecima dokumenta koji se proporcionalno raspoređuju na sve artikle.

import ItemVat from './../../../import/fields/item-vat.md'

<ItemVat />

#### Neobavezna polja

- **Barkod / Šifra artikla kupca i Opis artikla kupca**: podaci se preuzimaju sa kartice artikla. Za korišćenje barkodova potrebno je aktivirati njihovo upravljanje u [Parametrima narudžbi kupaca](/docs/configurations/parameters/sales/sales-orders-parameters). Polje omogućava pretragu artikla putem barkoda. Pošto je barkod jedinstven, nakon unosa barkoda definisanog na kartici artikla sistem automatski predlaže odgovarajući artikl.

- **Prodajni promet**: automatski se preuzima sa kartice **Opšte** na kartici artikla. Ako vrednost nije definisana, potrebno ju je ručno odabrati iz ponuđenih opcija. U suprotnom može doći do grešaka tokom knjiženja računa generisanog iz narudžbe, ako na kartici kupca u sekciji **Administracija** nije definisan **Detaljni konto predefinisanog troška/prihoda**.

- **Prisilno izvršeno**: označava da je stavka artikla prisilno izvršena, na primer kada kupac više ne želi artikl ili kada je isporučena manja količina od naručene, a preostala količina neće biti proizvedena niti isporučena.

:::note Napomena
Ako se koristi modul proizvodnje, prilikom aktiviranja ove oznake prikazuje se poruka:
*"Prisilno izvršenje reda uzrokovaće automatsko brisanje svih planiranih naloga povezanih sa radnim nalozima u statusu raspoređeno, kao i izvršenje radnih naloga u statusu raspoređeno i neobrađeno. Za dokumente nastale iz radnih naloga u statusu pokrenuto ili u izvršenju, radni nalozi i dokumenti neće biti izmenjeni."*
:::

- **Datum kada je roba spremna** i **Datum isporuke**: određuju datum kada će roba biti spremna za isporuku i planirani datum isporuke. Datum spremnosti robe mora biti manji ili jednak datumu isporuke.
U sekciji **Artikli** na alatnoj traci dostupne su sledeće funkcije:

- **Sastavnica materijala (BOM)**: otvara sastavnicu odabranog artikla radi pregleda njene strukture i komponenti.

- **Proširi prvi nivo popisa**: dodaje u narudžbu materijale i poluproizvode sadržane u prvom nivou sastavnice artikla. Funkcija se često koristi za proizvode tipa komplet (kit).

- **Ažuriraj cenovnike**: omogućava ažuriranje cene artikla u postojećem cenovniku ili kreiranje novog cenovnika sa odabranim artiklom i cenom. Dokument mora biti sačuvan kako bi funkcija bila dostupna.

- **Podeli količinu na više datuma isporuke**: omogućava raspodelu količine jedne stavke na više redova sa različitim datumima isporuke. Odabirom stavke i pokretanjem funkcije otvara se obrazac **Različite isporuke** u kojem se prikazuju postojeći datum spremnosti robe, datum isporuke i količina. U novom redu potrebno je definisati novu količinu i datum isporuke te prilagoditi količinu u izvornom redu tako da zbir količina ostane jednak početnoj vrednosti. Postupak se potvrđuje dugmetom **U redu**.

- **Pakovanje**: omogućava kreiranje UDC jedinice iz odabrane stavke. Stavka mora biti kodifikovani artikl i dokument mora biti sačuvan. Korisnik mora imati odgovarajuća prava definisana u [Parametrima ulaza/izlaza skladišta](/docs/configurations/parameters/logistics/load-unload-parameters/load-unload-parameters-intro). Artikl takođe mora imati aktivirano upravljanje UDC jedinicama te će se UDC kreirati prema postavkama definisanim na kartici artikla u sekciji **Pakovanje**.

U nastavku su opisane kartice dostupne ispod tabele artikala.

### 3.b.1 Popusti / Cenovnici

U polju **Cenovnik** prikazuje se važeći cenovnik povezan sa kupcem i artiklom. Ako takav cenovnik ne postoji, moguće je ručno odabrati drugi cenovnik iz kojeg će se preuzeti cena artikla.
Uz podatke o cenovniku nalazi se polje **Tip raspona**, koje određuje razred popusta za korišćenje. Vrednost se preuzima sa kartice kupca ili iz samog cenovnika.
Oznaka **Ručna cena** omogućava ručnu izmenu cene i popusta te osigurava da se te vrednosti zadrže i u dokumentima nastalim iz ovog dokumenta.
U tabeli se prikazuju svi popusti povezani sa artiklom zajedno sa pripadajućim osnovicama i pravilima obračuna.
Popusti se mogu preuzeti iz:
- kartice kupca
- načina plaćanja dodeljenog dokumentu
- cenovnika
- veze kupac–cenovnik

Sve predložene vrednosti moguće je ručno izmeniti.
Dostupna funkcija:

- **Otkaži popuste**: briše odabrane redove popusta.

### 3.b.2 Podaci o artiklu

Na ovoj kartici prikazuju se i unose dodatni podaci povezani sa artiklom.

import ItemVariant from './../../../import/fields/item-variant.md'

<ItemVariant />

import AlternativeUMQuantity from './../../../import/fields/alternative-um-quantity.md'

<AlternativeUMQuantity />

- **Skladište / Opis / Predložak**: u ovim poljima definiše se skladište iz kojeg će se artikl razdužiti, kao i pripadajuće skladišno knjiženje potrebno za razduženje robe prilikom izdavanja otpremnice ili računa. Podaci se preuzimaju iz postavki [Vrste narudžbe](/docs/configurations/tables/sales/sales-order-types).

- **Projekat**: projekat povezan sa dokumentom. Kod narudžbi kupaca može se dodeliti pomoću procedure **Izvršenje iz projekta** ili korišćenjem pomoći za izbor podataka.

- **Prenos PDV-a**: ako je opcija uključena, PDV na besplatne artikle uključuje se u ukupan iznos dokumenta.

- **Ponuda**: prikazuje referencu na ponudu kupcu ako je narudžba nastala iz [Ponude](/docs/sales/offers/search-offers).

- **Marka**: prikazuje marku artikla preuzetu sa kartice artikla ili iz cenovnika artikla.

- **Napomene**: omogućavaju unos napomena za pojedinačni artikl koje se mogu prenositi u povezane dokumente.

### 3.b.3 Predstavnik

import SalesTabAgent from './../../../import/sections/sales-tab-agent.md'

<SalesTabAgent />

### 3.b.4 Lotovi i serijski brojevi

U ove dve tabele moguće je uneti lotove i serijske brojeve koji će biti razduženi sa skladišta.
Podaci se mogu preuzeti sa kartice artikla u sekciji [Lotovi i serijski brojevi](/docs/erp-home/registers/items/create-new-item) ili uneti ručno.
Mogućnost unosa zavisi od toga da li postoje odgovarajući lotovi i serijski brojevi na skladištu.
Ako artikl nema uključeno upravljanje lotovima ili serijskim brojevima, ova kartica neće biti dostupna.

#### Dostupne funkcije

import DeleteLot from './../../../import/buttons/delete-lot.md'
import DeleteSN from './../../../import/buttons/delete-sn.md'

> <DeleteLot />
> <DeleteSN />

### 3.b.5 Analitika

import TabAnalytic from './../../../import/sections/tab-analytic.md'

<TabAnalytic />

### 3.b.6 Dodatni podaci

import DocItemExtraData from './../../../import/sections/doc-item-extradata.md'

<DocItemExtraData />

### 3.b.7 Priloženi dokumenti

import DocAttachDocument from './../../../import/sections/doc-attach-document.md'

<DocAttachDocument />

### 3.b.8 Matrice

Ova kartica prikazuje se isključivo za [Vrste narudžbi](/docs/configurations/tables/sales/sales-order-types) kod kojih je uključena opcija upravljanja matricama dodatnih podataka.

### 3.b.9 Sekcija vrednosti

import SalesValuesSection from './../../../import/sections/item-values-section.md'

<SalesValuesSection />

Polje **Status**, koje se nalazi na vrhu ove sekcije, prikazuje trenutni status artikla u proizvodnom procesu i automatski se ažurira prema statusu povezanog radnog naloga.
Artikl može imati jedan od sledećih statusa:
- **Uneseno**: status se dodeljuje nakon unosa artikla u dokument.

- **Potvrđeno**: status se dodeljuje nakon potvrde narudžbe putem odgovarajuće oznake i datuma potvrde u zaglavlju dokumenta.

- **U proizvodnji**: status se dodeljuje nakon generisanja radnog naloga putem procedure [Generisanje proizvodnih naloga](/docs/planning/ms-master-scheduling/general-schedule) ili automatski, ako je tako definisano vrstom narudžbe.

- **Proizvedeno**: status se dodeljuje kada povezani radni nalog dobije status izvršeno.

- **Poništeno**: status se dodeljuje kada je stavka artikla prisilno izvršena.

## 4. Sažeci

U različitim sekcijama ove kartice prikazane su glavne informacije za ceo dokument i pripadajuće funkcije.

### 4.1 Završni popusti

import SummariesFinalDiscount from './../../../import/sections/summaries-final-discount.md'

<SummariesFinalDiscount />

### 4.2 Sažetak provizija predstavnika

U ovoj tabeli prikazuje se pregled ukupnih provizija ostvarenih za agente povezane sa narudžbom.
Za svakog agenta prikazuju se:
- predstavnik
- obračunata provizija

### 4.3 Završni troškovi / popusti / doplate

import SummariesExpenses from './../../../import/sections/summaries-expenses.md'

<SummariesExpenses />

### 4.4 Sažetak PDV-a

Prikazuje se pregled PDV-a dokumenta za svaku korišćenu PDV stopu.

### 4.5 Pregled dospeća plaćanja

U ovoj tabeli prikazuju se dospeća automatski obračunata na osnovu definisanih uslova i načina plaćanja.

### 4.6 Ostala polja

- **Završne napomene**: opisno polje koje korisnik može popuniti ručno ili korišćenjem pomoći za kodifikovane napomene. Moguće je uneti dodatne informacije za kupca, na primer uputstva za isporuku, koja će se prikazati na štampi potvrde narudžbe u završnom delu dokumenta.

### 4.7 Ukupni iznosi dokumenta

U desnom delu ove kartice prikazani su ukupni sažeci dokumenta.

import SummariesDocumentTotal from './../../../import/sections/summaries-document-total.md'

<SummariesDocumentTotal />

## 5. Povezani dokumenti

Na ovoj kartici moguće je pregledati priložene dokumente.
Dokumente je moguće priložiti na dva načina:
- korišćenjem dugmeta **Dokumenti** na alatnoj traci, pri čemu je moguće odabrati već postojeći dokument evidentiran u Fluentisu ili kreirati novi dokument za prilaganje

- desnim klikom unutar tabele i odabirom opcije **Priloži datoteku**, čime se pokreće kreiranje novog dokumenta za prilaganje