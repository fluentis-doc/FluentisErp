---
title: Nova narudžba kupca
sidebar_position: 2
---

Obrazac **Nova narudžba kupca** otvara se putem izbornika **Prodaja > Narudžbe kupaca > Nova narudžba** ili pomoću gumba dostupnog u obrascu [Pretraživanje narudžbi kupaca](/docs/sales/sales-orders/create-new-sales-orders/search-sales-orders).

## Kako kreirati narudžbu kupca

## 1. Obavezni podaci

Za nastavak kreiranja narudžbe kupca potrebno je unijeti sljedeća **obavezna polja**:

- **Tip narudžbe**: definira se u **Konfiguracija > Tablice > Prodaja > [Vrste narudžbi](/docs/configurations/tables/sales/sales-order-types)**. Za unos narudžbe obavezno je da odabrana vrsta narudžbe ima definiranu numeraciju. Ovisno o konfiguraciji vrste narudžbe moguće su različite funkcionalnosti, poput automatskog kreiranja projekta, rada s cijenama koje uključuju PDV, upravljanja matricama artikala i drugih specifičnih funkcija.

- **Broj**: svakom dokumentu dodjeljuje se broj prema numeraciji definiranoj u tablici [Numeracije](/docs/configurations/tables/fluentis-numerations) i povezanoj s vrstom dokumenta. Numeracija u pravilu koristi automatsku progresiju datuma i broja te mehanizam popunjavanja eventualnih praznina u slijedu. Ako korisnik želi ručno unositi broj dokumenta, potrebno je isključiti progresiju datuma i broja, isključiti popunjavanje nedostajućih brojeva te uključiti opciju vanjske numeracije.

- **Kupac**: odabire se pomoću [pomoćne forme](/docs/guide/common/operations-with-data/manual-entry-or-help-and-data-selection) ili izravnim unosom podataka. Nakon odabira kupca automatski se popunjavaju podaci definirani u kartici kupca: valuta, država, jezik, zona, način isporuke, cjenik, popusti, uvjeti plaćanja, troškovi, agenti, odredište, prijevoznik i dodatni podaci.

- **Datum narudžbe**: predstavlja datum kreiranja narudžbe i koristi se za izračun rokova dospijeća te primjenu uvjeta plaćanja. Sustav predlaže trenutni datum, ali ga korisnik može promijeniti. Ako numeracija koristi progresiju datuma i broja, a unese se datum iz prošlosti, Fluentis će provjeriti postoje li dostupni brojevi za taj datum. Ako ih nema, korisnik će dobiti odgovarajuće upozorenje.

- **Vrsta poreza po odbitku**: polje je vidljivo samo za kupce koji koriste porez po odbitku i kod kojih je u kartici **Porezne informacije** definirana odgovarajuća postavka. Porez po odbitku predstavlja porez koji naručitelj zadržava i uplaćuje poreznoj upravi u ime primatelja naknade. Za pravilno funkcioniranje potrebno je da je u tablici vrsta poreza po odbitku ispravno definiran kod za elektroničko fakturiranje. Dokument automatski prepoznaje stavke na koje se primjenjuje porez po odbitku i izračunava pripadajući iznos.

Obrazac sadrži više kartica koje su opisane u nastavku.

## 2. Zaglavlje

Nakon unosa obaveznih podataka u gornjem dijelu obrasca, korisnik može nastaviti unos podataka ručno ili korištenjem pomoći za unos.

:::note Zapamti
Ako je dokument kreiran automatski, ovi podaci automatski se preuzimaju iz izvornog dokumenta iz kojeg je narudžba generirana.
:::

### 2.1 Podaci o kupcu

Nakon odabira **Kupca**, sustav automatski predlaže podatke definirane na kartici kupca i povezanim adresama.

- **Valuta**: sekcija koja sadrži podatke o valuti, tečaju i datumu valute.

- **Država**: sekcija koja sadrži podatke o državi, jeziku i zoni.

- **Dostava**: sekcija koja sadrži podatke o načinu dostave, paritetu isporuke, ambalaži, cjeniku i razdoblju važenja cjenika.

- **Odredište** i **Primatelj**: automatski se predlažu nakon odabira kupca, ali ih je moguće promijeniti.

### 2.2 Dodatni podaci zaglavlja

- **Datum dostave**: omogućuje unos planiranog datuma isporuke robe.

- **Datum spremne robe**: omogućuje unos datuma kada će roba biti spremna za isporuku. Ovaj datum mora biti manji ili jednak datumu isporuke.

- **Potvrđeno**: označava da je narudžba potvrđena i spremna za izvršenje. Uz oznaku se prikazuje i **Datum potvrđivanja**. Ovaj status je obavezan ako se narudžba treba izvršavati kroz naredne dokumente poput otpremnica ili računa te za potrebe planiranja proizvodnje.

- **Ispisano**: aktivira se nakon ispisa narudžbe i označava da je dokument ispisan. Ova oznaka također može biti uvjet za izvršenje narudžbe u drugim dokumentima.

- **Arhivirano**: koristi se za označavanje dokumenata koji se trebaju arhivirati.

- **Opozvano**: omogućuje poništavanje narudžbe. Status narudžbe automatski se mijenja u prisilno izvršeno kako dokument više ne bi bio dostupan za prijenos u druge dokumente.

- **CUP/CIG oznake**: ako je u poreznim podacima kupca omogućeno upravljanje CUP i CIG oznakama, podatke je moguće unijeti u dokument.

- **Bilješke kupca**: automatski se preuzimaju s kartice kupca, ali ih je moguće ručno izmijeniti.

- **Naša referenca / Vaša referenca**: koriste se za evidentiranje interne reference i reference kupca. Ako je narudžba nastala automatskim prijenosom podataka, vrijednosti se preuzimaju iz izvornog dokumenta. Prijenos se izvršava samo ako je narudžba nastala iz jednog izvornog dokumenta.

- **Početne napomene**: moguće je odabrati unaprijed definirane napomene iz šifarnika **Konfiguracija > Uslužni programi > Upravljanje kodificiranim napomenama** ili ih unijeti ručno.

- **Operater**: korisnik koji kreira dokument. Podatak postaje obavezan ako je tako definirano u parametrima narudžbe.

- **Status izvršenja**: automatski se mijenja iz **Neizvršeno** u **Djelomično izvršeno** ili **Izvršeno** nakon izvršenja narudžbe kroz otpremnice ili račune. Korisnik može prisilno zatvoriti narudžbu i tada se sprema i datum izvršenja.

:::note
Ako se aktivira status **Prisilno izvršeno**, prikazuje se poruka:
*"Prisilno izvršenje retka uzrokovat će automatsko brisanje svih planiranih proizvodnih naloga povezanih s radnim nalozima u statusu raspoređeno te izvršenje radnih naloga u statusu raspoređeno i neobrađeno. Radni nalozi i dokumenti u statusu pokrenuto ili u izvršenju neće biti izmijenjeni."*
:::

- **Datum obračuna**: datum koji se koristi za izračun rokova dospijeća plaćanja.

### Dostupne funkcije

- **Izvršenje projekta**: pokreće proceduru za kreiranje narudžbe na temelju projekta.

- **Zamijeni procijenjeni datum dostave u linijama**: nakon definiranja datuma isporuke ili planiranog datuma isporuke u zaglavlju omogućuje masovnu zamjenu tih datuma na svim već unesenim stavkama.

- **Umetni agenta u linijama**: otvara obrazac za odabir agenta koji će biti dodan svim stavkama artikala, uz eventualno zadržavanje postojećih agenata.

- **Zamijeni CIG/CUP u stavkama**: nakon unosa CIG i/ili CUP oznaka u zaglavlju omogućuje njihov masovni prijenos na sve stavke artikala.

- **Pomoć primatelji/odredišta**: otvara popis primatelja i odredišta definiranih na kartici kupca.

U zaglavlju dokumenta dostupne su i dodatne kartice koje su opisane u nastavku.

### 2.3 Plaćanja

**Uvjeti plaćanja** automatski se preuzimaju iz kartice **Plaćanja** na kartici kupca te ih korisnik može mijenjati ili brisati.
Ako je uz **Vrstu plaćanja** definiran financijski popust, njegova vrijednost uzima se u obzir isključivo u računovodstvenom dijelu dokumenta, odnosno kod obračuna dospijeća, ali ne utječe na ukupni iznos dokumenta.
Dostupna funkcija:
- **Otkaži plaćanja**: briše odabrane retke plaćanja.

### 2.4 Popusti

Prikazuju se samo zadani popusti preuzeti iz kartice **Popusti** na kartici kupca, dok se popusti povezani s uvjetima plaćanja ili pojedinim artiklima ne prikazuju.
Korisnik može mijenjati ili brisati predložene popuste.
Popusti definirani u zaglavlju dokumenta automatski se prenose na svaku novu stavku artikla dodanu u dokument.
Ako se novi popust doda u zaglavlje nakon što su stavke već unesene, taj se popust neće automatski prenijeti na postojeće stavke artikala.

:::important Zapamti
Za korištenje popusta obračunatih na poreznu osnovicu potrebno je u bazi podataka aktivirati opći parametar: `GEN-GlobalSettings_CalculateDiscountOnAmount`.
Ako parametar nije aktivan, popusti na poreznu osnovicu automatski će se pretvoriti u kaskadne popuste.
:::

Dostupna funkcija:

- **Otkaži popuste**: briše odabrane retke popusta.

### 2.5 Trgovački predstavnici (Agenti)

Prikazuje šifru agenta i pripadajuću proviziju za svaku stavku artikla.
Podaci se automatski preuzimaju iz kartice **Agenti** na kartici kupca.
Ako provizija nije definirana na kartici kupca, agent se svejedno mora unijeti, ali s vrijednošću provizije **NULL**. Vrijednost **0 %** značila bi da je agent povezan s kupcem, ali nema pravo na proviziju. Ako se iz narudžbe generira otpremnica, podaci o agentu prenose se bez izmjena.
Ista sekcija dostupna je i na razini pojedine stavke artikla.
Dostupna funkcija:

- **Otkaži agente**: briše odabrane agente.

### 2.6 Adrese za dostavu

Prikazuju se podaci definirani u kartici **Isporuke** na kartici kupca, ako postoje zadane vrijednosti. Padajući izbornik omogućuje odabir:
- primatelja
- odredišta
- prijevoznika
definiranih na kartici kupca.

Adrese isporuke moguće je unijeti i ručno, bez prethodnog kreiranja kontakta u šifarniku.
Ako na kartici kupca nije definirano zadano odredište ili primatelj, kao zadana vrijednost koristi se adresa definirana u osnovnim podacima kupca.

### 2.7 Prijevoznik

U sekciji **Prijevoznik** prikazuju se podaci definirani u kartici **Dostava** na kartici kupca. Prikazuje se subjekt koji snosi trošak prijevoza:
- pošiljatelj
- primatelj
- prijevoznik

Ovisno o odabranoj opciji mijenjaju se dostupna polja za unos. Ako je prijevoz na teret **pošiljatelja**, moguće je unijeti:
- registarsku oznaku vozila
- datum početka prijevoza
- vrijeme početka prijevoza
pri čemu se automatski predlaže adresa tvrtke.

Ako je prijevoz na teret **primatelja**, moguće je unijeti:
- registarsku oznaku vozila
- datum početka prijevoza
- vrijeme početka prijevoza
pri čemu se automatski predlaže odredište isporuke.

Ako je prijevoz na teret **prijevoznika**, dostupna su sljedeća polja:
- kartica prijevoznika
- registarska oznaka vozila
- datum prijevoza
- vrijeme prijevoza

### 2.8 Dodatni podaci

Ovdje se prikazuje informacija unesena u Matične podatke subjekta > kartica Dodatni podaci, ali samo ako postoje zadane (default) vrijednosti.

### 2.9 Upravljanje zajedničkim računima

Ova kartica dostupna je samo ako je na kartici kupca, u sekciji [Porezni podaci](/docs/erp-home/registers/contacts/create-new-contact/accounting-data/customer-vendors-data/fiscal-information), uključena opcija upravljanja zajedničkim računima.

Upravljanje suvlasnicima omogućuje da više osoba bude zajednički nositelj narudžbe.
Suvlasnici moraju biti definirani među alternativnim adresama kupca s vrstom adrese postavljenom na [Suvlasnik](/docs/configurations/tables/general-settings/address-types).
Takvi će se kontakti automatski prikazati na ovoj kartici, gdje je potrebno ručno unijeti postotak raspodjele troška za svakog suvlasnika.

## 3.a Grupirani artikli

Ova kartica dostupna je samo za [Vrste narudžbi](/docs/configurations/tables/sales/sales-order-types) kod kojih su uključene opcije **Upravljanje matricama dodatnih podataka** i odgovarajuća konfiguracija.

Kartica omogućuje generiranje varijanti artikala za sve valjane kombinacije atributa koje će zatim biti prenesene na karticu **Artikli**.
Za polja koja nisu objašnjena na ovoj stranici pogledajte dokumentaciju kartice **Artikli**.
Kada se u tablicu unese [artikl s matričnim upravljanjem](/docs/erp-home/registers/items/create-new-item), na kartici **Matrice** prikazuje se matrica povezana s karticom artikla.
U ćelije matrice moguće je unijeti naručene količine za svaku kombinaciju atributa. Moguće je unositi podatke samo za kombinacije koje su definirane kao važeće na kartici artikla.
Nakon unosa količina potrebno je kliknuti gumb **Potvrdi vrijednosti matrice** na alatnoj traci kako bi se generirale sve potrebne varijante.
Svaka generirana varijanta automatski će kreirati jedan redak na kartici **Artikli** s pripadajućom količinom.

## 3.b Artikli

Na ovoj kartici unose se svi artikli zajedno s pripadajućim podacima.

Za unos **novog artikla** dovoljno je pozicionirati se na novi redak i popuniti potrebne podatke ili koristiti gumb **Novo** na alatnoj traci.
U nastavku su opisana obavezna polja glavne tablice:

- **Red**: sadrži redni broj stavke. Vrijednost se automatski i uzastopno dodjeljuje prilikom unosa novih redaka.

- **Tip linije**: omogućuje odabir vrste stavke:

  - **Artikl s klasom**: artikl definiran u šifarniku artikala. Može se knjižiti u analitičko računovodstvo i evidentirati u skladištu.

  - **Artikl bez klase**: opisna stavka koja se može knjižiti u analitičko računovodstvo, ali ne može stvarati skladišne promjene.

  - **Trošak artikl**: može biti šifriran ili nešifriran. U sažecima dokumenta prikazuje se odvojeno. Ako je šifriran i fiskalno relevantan, evidentira se u skladištu; u suprotnom ne stvara skladišne promjene.

  - **Artikl-bilješka**: opisni redak koji se prikazuje na ispisu dokumenta. Ne utječe na računovodstvo niti skladište.

  - **Gratis artikl**: obrađuje se kao šifriran ili nešifriran artikl s poreznog i skladišnog aspekta, ali se u sažecima dokumenta prikazuje odvojeno. Ovisno o postavci prijenosa PDV-a, obračunava se ili ne obračunava PDV na besplatnu isporuku.

:::note Napomena
Ako korisnik započne unos izravnim upisivanjem artikla, sustav automatski popunjava vrstu artikla, šifru artikla i vrstu retka **Kodificirani artikl**.
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
Ako za artikl nije pronađen odgovarajući cjenik, predložena vrijednost bit će prodajna cijena definirana na kartici artikla u sekciji **Troškovi/Cijene** ili će biti određena prema postavkama parametara dokumenta. Ako ni taj podatak nije dostupan, cijena će biti postavljena na **0**.
:::

- **Porezna osnovica**: prikazuje jediničnu cijenu pomnoženu s količinom artikla, umanjenu za sve primijenjene popuste.

- **Popusti artikla**: prikazuje sve popuste primijenjene na artikl, bilo da dolaze iz zaglavlja dokumenta, cjenika ili su uneseni ručno.

- **Završni popusti artikla**: prikazuje završne popuste definirane u sažecima dokumenta koji se proporcionalno raspoređuju na sve artikle.

import ItemVat from './../../../import/fields/item-vat.md'

<ItemVat />

#### Neobavezna polja

- **Barkod / Šifra artikla kupca i Opis artikla kupca**: podaci se preuzimaju s kartice artikla. Za korištenje barkodova potrebno je aktivirati njihovo upravljanje u [Parametrima narudžbi kupaca](/docs/configurations/parameters/sales/sales-orders-parameters). Polje omogućuje pretraživanje artikla putem barkoda. Budući da je barkod jedinstven, nakon unosa barkoda definiranog na kartici artikla sustav automatski predlaže odgovarajući artikl.

- **Prodajni promet**: automatski se preuzima s kartice **Općenito** na kartici artikla. Ako vrijednost nije definirana, potrebno ju je ručno odabrati iz ponuđenih opcija. U suprotnom može doći do pogrešaka tijekom knjiženja računa generiranog iz narudžbe, ako na kartici kupca u sekciji **Administracija** nije definiran **Detaljni konto predefiniranog troška/prihoda**.

- **Prisilno izvršeno**: označava da je stavka artikla prisilno izvršena, primjerice kada kupac više ne želi artikl ili kada je isporučena manja količina od naručene, a preostala količina neće biti proizvedena niti isporučena.

:::note Napomena
Ako se koristi modul proizvodnje, prilikom aktiviranja ove oznake prikazuje se poruka:
*"Prisilno izvršenje retka uzrokovat će automatsko brisanje svih planiranih naloga povezanih s radnim nalozima u statusu raspoređeno te izvršenje radnih naloga u statusu raspoređeno i neobrađeno. Za dokumente nastale iz radnih naloga u statusu pokrenuto ili u izvršenju, radni nalozi i dokumenti neće biti izmijenjeni."*
:::

- **Datum kad je roba spremna** i **Datum dostave**: određuju datum kada će roba biti spremna za isporuku te planirani datum isporuke. Datum spremnosti robe mora biti manji ili jednak datumu isporuke.

U sekciji **Artikli** na alatnoj traci dostupne su sljedeće funkcije:

- **Sastavnica materijala (BOM)**: otvara sastavnicu odabranog artikla radi pregleda njezine strukture i komponenti.

- **Proširi prvi nivo popisa**: dodaje u narudžbu materijale i poluproizvode sadržane u prvoj razini sastavnice artikla. Funkcija se često koristi za proizvode tipa komplet (kit).

- **Ažurirajte cjenike**: omogućuje ažuriranje cijene artikla u postojećem cjeniku ili kreiranje novog cjenika s odabranim artiklom i cijenom. Dokument mora biti spremljen kako bi funkcija bila dostupna.

- **Podijeli količinu u više datuma dostave**: omogućuje raspodjelu količine jedne stavke na više redaka s različitim datumima isporuke. Odabirom stavke i pokretanjem funkcije otvara se obrazac **Različite isporuke** u kojem se prikazuju postojeći datum spremnosti robe, datum isporuke i količina. U novom retku potrebno je definirati novu količinu i datum isporuke te prilagoditi količinu u izvornom retku tako da zbroj količina ostane jednak početnoj vrijednosti. Postupak se potvrđuje gumbom **U redu**.

- **Pakiranje**: omogućuje kreiranje UDC jedinice iz odabrane stavke. Stavka mora biti kodificirani artikl i dokument mora biti spremljen. Korisnik mora imati odgovarajuća prava definirana u [Parametrima ulaza/izlaza skladišta](/docs/configurations/parameters/logistics/load-unload-parameters/load-unload-parameters-intro). Artikl također mora imati aktivirano upravljanje UDC jedinicama te će se UDC kreirati prema postavkama definiranim na kartici artikla u sekciji **Pakiranje**.

U nastavku su opisane kartice dostupne ispod tablice artikala.

### 3.b.1 Popusti / Cjenici

U polju **Cjenik** prikazuje se važeći cjenik povezan s kupcem i artiklom. Ako takav cjenik ne postoji, moguće je ručno odabrati drugi cjenik iz kojeg će se preuzeti cijena artikla.
Uz podatke o cjeniku nalazi se polje **Tip raspona**, koje određuje razred popusta za korištenje. Vrijednost se preuzima s kartice kupca ili iz samog cjenika.
Oznaka **Ručna cijena** omogućuje ručnu izmjenu cijene i popusta te osigurava da se te vrijednosti zadrže i u dokumentima nastalim iz ovog dokumenta.
U tablici se prikazuju svi popusti povezani s artiklom zajedno s pripadajućim osnovicama i pravilima obračuna.
Popusti se mogu preuzeti iz:
- kartice kupca
- načina plaćanja dodijeljenog dokumentu
- cjenika
- veze kupac–cjenik

Sve predložene vrijednosti moguće je ručno izmijeniti.
Dostupna funkcija:

- **Otkaži popuste**: briše odabrane retke popusta.

### 3.b.2 Podaci o artiklu

Na ovoj kartici prikazuju se i unose dodatni podaci povezani s artiklom.

import ItemVariant from './../../../import/fields/item-variant.md'

<ItemVariant />

import AlternativeUMQuantity from './../../../import/fields/alternative-um-quantity.md'

<AlternativeUMQuantity />

- **Skladište / Opis / Predložak**: u ovim se poljima definira skladište iz kojeg će se artikl razdužiti te pripadajuće skladišno knjiženje potrebno za razduženje robe prilikom izdavanja otpremnice ili računa. Podaci se preuzimaju iz postavki [Vrste narudžbe](/docs/configurations/tables/sales/sales-order-types).

- **Projekt**: projekt povezan s dokumentom. Kod narudžbi kupaca može se dodijeliti pomoću procedure **Izvršenje iz projekta** ili korištenjem pomoći za odabir podataka.

- **Prijenos PDV-a**: ako je opcija uključena, PDV na besplatne artikle uključuje se u ukupni iznos dokumenta.

- **Ponuda**: prikazuje referencu na ponudu kupcu ako je narudžba nastala iz [Ponude](/docs/sales/offers/search-offers).

- **Marka**: prikazuje marku artikla preuzetu s kartice artikla ili iz cjenika artikla.

- **Napomene**: omogućuju unos napomena za pojedini artikl koje se mogu prenositi u povezane dokumente.

### 3.b.3 Predstavnik

import SalesTabAgent from './../../../import/sections/sales-tab-agent.md'

<SalesTabAgent />

### 3.b.4 Lotovi i serijski brojevi

U ove dvije tablice moguće je unijeti lotove i serijske brojeve koji će biti razduženi sa skladišta.
Podaci se mogu preuzeti s kartice artikla u sekciji [Lotovi i serijski brojevi](/docs/erp-home/registers/items/create-new-item) ili unijeti ručno.
Mogućnost unosa ovisi o tome postoje li odgovarajući lotovi i serijski brojevi na skladištu.
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

### 3.b.9 Sekcija vrijednosti

import SalesValuesSection from './../../../import/sections/item-values-section.md'

<SalesValuesSection />

Polje **Status**, koje se nalazi na vrhu ove sekcije, prikazuje trenutačni status artikla u proizvodnom procesu te se automatski ažurira prema statusu povezanog radnog naloga.
Artikl može imati jedan od sljedećih statusa:
- **Uneseno**: status se dodjeljuje nakon unosa artikla u dokument.

- **Potvrđeno**: status se dodjeljuje nakon potvrde narudžbe putem odgovarajuće oznake i datuma potvrde u zaglavlju dokumenta.

- **U proizvodnji**: status se dodjeljuje nakon generiranja radnog naloga putem procedure [Generiranje proizvodnih naloga](/docs/planning/ms-master-scheduling/general-schedule) ili automatski, ako je tako definirano vrstom narudžbe.

- **Proizvedeno**: status se dodjeljuje kada povezani radni nalog dobije status izvršeno.

- **Poništeno**: status se dodjeljuje kada je stavka artikla prisilno izvršena.

## 4. Sažeci

U različitim sekcijama ove kartice prikazane su glavne informacije za cijeli dokument te pripadajuće funkcije.

### 4.1 Konačni popusti

import SummariesFinalDiscount from './../../../import/sections/summaries-final-discount.md'

<SummariesFinalDiscount />

### 4.2 Sažetak predstavnikovih provizija

U ovoj tablici prikazuje se pregled ukupnih provizija ostvarenih za agente povezane s narudžbom.
Za svakog agenta prikazuju se:
- predstavnik
- obračunana provizija

### 4.3 Konačni troškovi / popusti / doplate

import SummariesExpenses from './../../../import/sections/summaries-expenses.md'

<SummariesExpenses />

### 4.4 Sažetak PDV-a

Prikazuje se pregled PDV-a dokumenta za svaku korištenu PDV stopu.

### 4.5 Pregled dospijeća plaćanja

U ovoj tablici prikazuju se dospijeća automatski obračunata na temelju definiranih uvjeta i načina plaćanja.

### 4.6 Ostala polja

- **Završne napomene**: opisno polje koje korisnik može popuniti ručno ili korištenjem pomoći za kodificirane napomene. Moguće je unijeti dodatne informacije za kupca, primjerice upute za isporuku, koje će se prikazati na ispisu potvrde narudžbe u završnom dijelu dokumenta.

### 4.7 Ukupni iznosi dokumenta

U desnom dijelu ove kartice prikazani su ukupni sažeci dokumenta.

import SummariesDocumentTotal from './../../../import/sections/summaries-document-total.md'

<SummariesDocumentTotal />

## 5. Povezani dokumenti

Na ovoj kartici moguće je pregledavati priložene dokumente.
Dokumente je moguće priložiti na dva načina:
- korištenjem gumba **Dokumenti** na alatnoj traci, pri čemu je moguće odabrati već postojeći dokument evidentiran u Fluentisu ili kreirati novi dokument za prilaganje
- desnim klikom unutar tablice i odabirom opcije **Priloži datoteku**, čime se pokreće kreiranje novog dokumenta za prilaganje