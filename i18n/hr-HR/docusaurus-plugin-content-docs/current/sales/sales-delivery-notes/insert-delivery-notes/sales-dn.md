---
title: Stvaranje otpremnice
sidebar_position: 2
---

Obrazac za **Stvaranje otpremnice** otvara se putem navigacije **Prodaja > Otpremnice > Nova otpremnica** ili putem gumba ![](/img/neutral/common/new.png) koji se nalazi u obrascu [Pretraži otpremnice](/docs/sales/sales-delivery-notes/insert-delivery-notes/search-sales-dn).

## **1. Obavezni podaci**

U obrascu za unos automatski se nude trenutni **Datum** i **Godina**, ali ih korisnik može promijeniti.
Za nastavak stvaranja otpremnice, korisnik mora unijeti  **obavezna** polja:
- **Tip otpremnice** definiran u *Konfiguracija > Tablice > Prodaja > [Tipovi otpremnice](/docs/configurations/tables/sales/delivery-notes-type)*

- **Broj** svakom dokumentu dodijeljen je broj prema numeraciji specificiranoj od strane korisnika u tablici [Numeracija otpremnica](/docs/configurations/tables/fluentis-numerations) i za tip dokumenta koji sadrži numeraciju. Također se pogledajte članak  [Parametri otpremnice](/docs/configurations/parameters/sales/dn-parameters) za specifične parametre za dobivanje brojeva.

- **Kupac**, korištenjem [pomoćne forme](/docs/guide/common/operations-with-data/manual-entry-or-help-and-data-selection) ili [izravno](/docs/guide/common/operations-with-data/manual-entry-or-help-and-data-selection) unosom podataka ili korištenjem automatskog postupka, ako se odluči kreirati dokumente putem [Izvršenja otpremnice iz narudžbenice klijenta](/docs/sales/sales-delivery-notes/insert-delivery-notes/sales-dn).

Obrazac sadrži niz kartica.

## **2. Zaglavlje**

Nakon što su odabrani obavezni podaci u gornjem dijelu, korisnik može nastaviti unos sljedećih podataka:
- [ručni unos](/docs/guide/common/operations-with-data/manual-entry-or-help-and-data-selection)  
- [pomoćna forma](/docs/guide/common/operations-with-data/manual-entry-or-help-and-data-selection)
- automatski unos: Na temelju odabrane procedure, aplikacija može **automatski** popuniti određena polja.

:::note NAPOMENA
Ako se dokument stvara *automatski*, ovi podaci se preuzimaju iz *izvornog dokumenta* iz kojeg je generiran.
:::

Unoseći **Kupca** automatski se *nude* svi specifični podaci u **Zaglavlju**, prema prethodno postavljenim podacima u [Šifarnik klijenta](/docs/erp-home/registers/contacts/create-new-contact/accounting-data/accounting-data-intro), u odgovarajućim poljima za adresu i u sljedećim *sekcijama*: 

- **Valuta**: [Valuta](/docs/guide/common/glossary/glossary-intro#currency), [Tečaj](/docs/guide/common/glossary/glossary-intro#currency-exchange), [Datum valute](/docs/guide/common/glossary/glossary-intro#currency-date).
- **Država**: [Država](/docs/guide/common/glossary/glossary-intro#country), [Jezik](/docs/guide/common/glossary/glossary-intro#language), [Zona](/docs/guide/common/glossary/glossary-intro#zone)
- **Pošiljka**: [Dostava](/docs/guide/common/glossary/glossary-intro#shipment), [Paritet](/docs/guide/common/glossary/glossary-intro#carriage), [Pakiranje](/docs/guide/common/glossary/glossary-intro#packing), [Cjenik](/docs/guide/common/glossary/glossary-intro#sales-price-list) i njegov [vremenski interval](/docs/guide/common/glossary/glossary-intro#validity-date)
- ostala polja koja se nude izborom klijenta, ali se mogu mijenjati: [Odredište](/docs/guide/common/glossary/glossary-intro#destination), [Primatelj](/docs/guide/common/glossary/glossary-intro#recipient).

#### Ostala opcionalna polja

**Status dokumenta**: prilikom stvaranja, račun nema aktivnih oznaka.
Ova sekcija uključuje sljedeća polja:  
> **Ispisano** aktivira se kada se račun ispisa, označava da je račun isprintan.    
> **Knjiženo**: automatski se označava kada se račun knjiži.  
> **Otkazano**: aktivna oznaka omogućuje storno računa.   
> **Istovareno**: označava da je račun otpremljen iz skladišta, ručno ili *automatski* putem postupka *automatskog otpreme*.
> **Valorizirano**: ova oznaka aktivira se kada se otpremnica prenese u račun.
> **Djelomično valorizirano**: označava da je otpremnica samo djelomično prenesena u račun.
> **Prisilno valorizirano**: ova oznaka aktivira se ako je otpremnica prisilno zatvorena korištenjem funkcije prisilnog izvršenja stavki. Primjerice, kada preostala količina neće biti isporučena, dokument se može smatrati zatvorenim iako uobičajeno ne bi bio zatvoren.  

:::note NAPOMENA
Oznake se mogu ukloniti postupkom **Povrati** operacije
:::

- **Bilješke kupca**: ovo polje preuzima se iz naloga iz kojeg je nastala otpremnica, ali se može i ručno popuniti.

- **Naša referenca / Vaša referenca**: u ova polja obično se unosi interna referenca i referenca kupca za predmetni dokument.
  Ako je otpremnica nastala automatskom procedurom, polja se automatski popunjavaju podacima iz izvornog dokumenta.
  Prijenos podataka vrijedi samo kada je otpremnica nastala iz jednog izvornog dokumenta.

- **Referenca na broj narudžbi kupca**: automatski prikazuje broj naloga kupca iz kojeg je otpremnica nastala.

- **Referenca na datum narudžbi kupca**: automatski prikazuje datum naloga kupca iz kojeg je otpremnica nastala.
  Zajedno s referencom na broj naloga koristi se za popunjavanje podataka potrebnih za elektronički račun.
  Ako polja nisu popunjena, koristi se vrijednost iz polja **Vaša referenca**.

- **Početne bilješke otpremnice**: omogućuju odabir unaprijed definiranih napomena iz šifrarnika dostupnog putem izbornika **Konfiguracija > Korisnost > Upravljanje šifriranim bilješkama**.
  Napomene se mogu odabrati pomoću pomoći za unos ili unijeti ručno.

- **Projekt**: omogućuje povezivanje dokumenta s projektom.

- **Operater**: omogućuje odabir korisnika koji je kreirao dokument.
  Ako je uključena odgovarajuća postavka u parametrima dokumenta, ovo polje može biti obavezno.

- **Status izvršenja**: prikazuje stanje izvršenja dokumenta.

  Kada se otpremnica izvrši kroz dokumente kao što su računi, status se automatski mijenja iz:
  - Neizvršen
  - Djelomično izvršen
  - Izvršen
  Korisnik može prisilno zatvoriti dokument čak i ako nije u potpunosti izvršen.
  U tom slučaju sprema se i datum izvršenja.

- **Datum dospijeća**: koristi se kao početni datum za izračun rokova plaćanja.

- **Audit Trail**: prikazuje podatke o dokumentu, uključujući:
  - datum kreiranja i korisnika koji je kreirao dokument
  - datum posljednje izmjene i korisnika koji je izvršio izmjenu

#### Posebni gumbi

> **Izuzimanje iz narudžbe**: pokreće postupak za stvaranje računa iz narudžbe kupca. Aktivira se kada su uneseni klijent i tip računa.  
> **Automatsko razduženje skladišta**: ovaj postupak omogućuje istovar zaliha dokumenta ako je označeno kao Ispisano.  
> **Pomoć za primatelja/odredište**: omogućuje pregled i unos primatelja/odredišta iz evidencije klijenata.  
> **Umetni agenta u linijama**: dodjeljuje Predstavnika unesenog u zaglavlje u retke stavki, u kartici Predstavnici.  
> **Umetni CIG/CUP u linijama**: Dodjeljuje unesene kodove u zaglavlje u retke stavki, u odgovarajući padajući izbornik.  
> **Otkaži (plaćanja)**: Briše plaćanja iz zaglavlja.  

### 2.1 Plaćanja

**Uvjeti plaćanja** automatski se prenose iz *Šifarnik kupca > kartica Plaćanje* i mogu se mijenjati/brisati od strane korisnika.

Ako je uz **Vrstu plaćanja** povezan financijski popust, iznos popusta uzima se u obzir samo u računovodstvenom smislu, odnosno u rokovima plaćanja dokumenta, a ne u ukupnom iznosu otpremnice.

Ako dokument potječe iz:

- Narudžbe kupca, vrste plaćanja mogu biti preuzete iz prvog dokumenta (narudžbenica), iz klijentovih podataka ili se mogu prikazati u obrascu sva plaćanja dokumenata za izvršenje, a korisnik odabire željeni način plaćanja.  

- Plaćanja mogu biti preuzeta iz klijentove kartice ili iz pojedinačnih plaćanja prisutnih u svakoj otpremnici. U ovom slučaju, u računu će se prikazati vrsta plaćanja s istim iznosom i PDV-om kao i u otpremnici, te će se dodati nova linija za bilo kakve stavke koje nisu proizašle iz otpremnice.

### 2.2 Popusti

Ponuđeni su samo definirani popusti iz *Šifarnik kupca > kartica Popusti* a ne oni dodijeljeni uvjetima plaćanja ili određenim artiklima. Mogu se mijenjati/brisati od strane korisnika.

:::info Zapamti

Za korištenje popusta na poreznu osnovicu potrebno je u bazi podataka aktivirati opći parametar: `GEN-GlobalSettings_CalculateDiscountOnAmount`. Ako parametar nije aktivan, popusti obračunati na poreznu osnovicu automatski će se pretvoriti u kaskadne popuste.
:::

Popusti ponuđeni u zaglavlju dokumenta pojavit će se u svakom novom retku stavke u dokumentu.
Nakon što se unesu nove stavke, u zaglavlje se unese novi popust, on neće biti primijenjen na već unesene stavke.

#### Posebni gumb   

> **Otkaži**: koristi se za brisanje odabranih redova popusta.

### 2.3 Trgovački predstavnici

Prikazuje šifru agenta i njegovu proviziju za svaku stavku artikla.
Šifra agenta i postotak provizije automatski se predlažu prema podacima definiranim na kartici **Kupac > Agenti**.
Ako agent nije povezan s kupcem na kartici kupca, agent se ipak mora unijeti, ali s praznom provizijom (**NULL**).
Ako bi provizija bila postavljena na **0 %**, to bi značilo da je agent povezan s kupcem, ali nema pravo na proviziju.
Ista sekcija dostupna je i na razini pojedine stavke artikla, na kartici **Agenti**.

### Dostupna funkcija

- **Otkaži**: omogućuje brisanje odabranih agenata.

### 2.4 Dodatni podaci

Ovdje se nudi informacija unesena u *Šifarnik subjekta > kartica Dodatni podaci*, samo ako postoje zadani podaci.

## Procedure zaglavlja:

### *Izuzimanje iz narudžbe*

Na zaglavlju otpremnice, pritiskom na gumb **Izuzimanje iz narudžbe** otvorit će se obrazac gdje je moguće filtrirati narudžbe koje se odnose na klijenta dokumenta.
Kroz ovaj postupak moguće je stvoriti prodajnu otpremnicu izvršavanjem odgovarajuće narudžbe kupca. Moguće je unijeti stavke u otpremnicu, potpuno ili djelomično izvršavajući cijelu narudžbu ili jednu stavku.

Da bi se koristio ovaj postupak, postoje početni uvjeti koji se moraju poštivati:

 -  klijent narudžbi mora biti isti kao i u otpremnici;
 -  narudžba koju želite izvršiti mora imati postavljen znak *Isprintano* i *Datum potvrde narudžbe*;
 -  vrste dokumenata moraju biti kompatibilne: u tablici *Vrste narudžbi* vrsta narudžbe koju želite izvršiti mora imati postavljenu odgovarajuću vrstu otpremnice, dok u tablici *Vrste otpremnica* mora biti prisutan znak za *Narudžbu* (koji označava da otpremnica potječe iz narudžbe).

:::note NAPOMENA  
Trenutno se narudžbe koje sadrže grupirane stavke ne mogu izvršiti ovim postupkom; stoga ih neće biti moguće pronaći u obrascu za izvršavanje narudžbi.
:::
Zatim će biti potrebno postaviti željenu *Vrstu otpremnice* (koja mora odgovarati onoj postavljenoj u tablici *Vrste narudžbi*) i *Klijenta* u zaglavlju nove otpremnice. Nakon unosa ovih podataka, trebat će kliknuti na gumb *Izvršavanje narudžbi* kako bi se otvorio obrazac za izvršavanje.

#### Postupak

Filteri za klijenta i valutu bit će automatski postavljeni prema odabranom klijentu u otpremnici.
Nakon postavljanja svih željenih *Filtara* klikom na gumb *Traži* bit će prikazan redak za svaku isprintanu, potvrđenu i neizvršenu ili djelomično izvršenu narudžbu u rešetki.

:::note NAPOMENA
Postupak uzima sve podatke iz narudžbe i kao rezultat toga primjenjivat će se uvjeti kupnje iz narudžbe, čak i ako su se ti uvjeti promijenili.  
:::

U prikazu rezultata, korisnik ima mogućnost:  
 1. odabrati *cijelu narudžbu*. Za to će biti dovoljno označiti znak na početku reda narudžbe.  
 2. odabrati samo *neke* od ponuđenih *stavki*. Za to će biti dovoljno označiti znak na početku retka stavke.  
 3. odabrati samo *neke stavke* za *određenu količinu*. U tom slučaju, količinu koja se treba izvršiti trebat će promijeniti.

Kako bi se postupak dovršio, bit će potrebno kliknuti na gumb *Prijenos*, koji će preuzeti sve podatke iz narudžbe i prenijeti ih u otpremnicu.

#### Posebni gumbi

> **Traži** omogućuje pretraživanje dobavljačkih narudžbi.   
> **Prijenos** omogućuje prenošenje podataka odabrane narudžbe u novu otpremnicu.    
> **Prisilno izvršenje narudžbe** omogućuje prisilno izvršavanje narudžbe. 
> **Izvršenje iz narudžbi** omogućuje izvršavanje narudžbe.   
> **Proširi** omogućuje proširenje cijelog stabla narudžbi u donjoj rešetki kako bi se prikazale sadržane stavke.  
> **Sažmi** omogućuje smanjenje prikaza redaka stavki i prikaz samo redaka narudžbe.  
> **Označi sve** omogućuje odabir svih stavki s popisa.  
> **Odznači sve** omogućuje poništenje odabira svih stavki s popisa.  

### Automatsko razduženje skladišta

Druga procedura dostupna u zaglavlju otpremnice je **Automatsko razduženje skladišta**.
Gumb postaje dostupan tek kada dokument dobije status **Ispisano**.
Ako je u parametrima omogućeno automatsko skladišno razduženje, ova će se procedura pokrenuti automatski nakon ispisa dokumenta.

Prilikom pokretanja procedure sustav provjerava:
- postojanje skladišta i skladišne vrste dokumenta na stavkama DDT-a
- eventualnu prisutnost serijskih brojeva ili lotova ako su obavezni za artikle na dokumentu

Ako neka od provjera ne prođe uspješno, korisniku se prikazuje poruka o pogrešci.
Ako se procedura uspješno izvrši:
- kreira se skladišna evidencija za artikle sadržane na DDT-u
- u zaglavlju otpremnice automatski se aktivira oznaka **Istovareno**

:::info Zapamti
Ako u parametrima otpremnica, na kartici **Izuzimanje**, opcija **Kreiraj zapis s datumom dokumenta** nije aktivna, skladišna evidencija uvijek će biti kreirana s trenutnim datumom.
Ako je opcija aktivna, evidencija će biti kreirana koristeći:
- datum prijevoza definiran na kartici **Transport** otpremnice, ako je popunjen
- u suprotnom datum otpremnice
:::

## **3. Artikli**

U ovoj se kartici unose svi artikli s pripadajućim podacima.
Za sve što nije detaljno objašnjeno u ovom dokumentu o zajedničkom radu obrazaca, obratite se na sljedeći link [Funkcionalnosti, gumbi i zajednička polja](/docs/guide/common).
Podaci se mogu unositi [ručno](/docs/guide/common/operations-with-data/manual-entry-or-help-and-data-selection), uz [pomoćno polje](/docs/guide/common/operations-with-data/manual-entry-or-help-and-data-selection) ili ih mogu predložiti povezane procedure.

Da bi se unio **Novi artikl** u tablicu, dovoljno je postaviti se na red (liniju) kako bi se ispunili različite podaci ili se može koristiti gumb **Novo** koji se nalazi na gornjem izborniku.

#### Obvezni podaci

**Broj linije**: ovo će se polje automatski popuniti progresivno prilikom unosa podataka u red.

**Tip linije** pruža mogućnost odabira artikala s različitim karakteristikama. 

:::note BILJEŠKA
Ako se krene izravno s unosom artikla, njegova *klasa*, *šifra* i *vrsta retka* - *Šifrirani artikl* automatski će se unijeti.
:::

> **Artikl sa klasom**: to su artikli šifrirani u evidenciji i mogu se knjižiti u analitičkom računovodstvu te evidentirati u skladištu.  
> **Artikl bez klase**: to su opisni artikli koji se mogu knjižiti u analitičkom računovodstvu, ali ih nije moguće knjižiti u skladištu.  
> **Trošak**: to su kodirani ili nekodirani artikli koji se zasebno sažimaju u pregledima dokumenata, ako je artikl trošak kodiran i od poreznog interesa, bit će knjižen u skladištu, ako nije kodiran ili nije od poreznog interesa, neće se knjižiti u skladištu.  
> **Artikl - Bilješka**: to su opisne bilješke koje se pojavljuju u ispisu dokumenta; ne utječu na knjiženje ili skladište.  
> **Gratis artikl**: artikl poklon upravlja se kao kodirani ili nekodirani artikl u porezne i skladišne svrhe, ali budući da je to poklon, zasebno se broji u pregledima dokumenta i ovisno o zastupljenosti PDV-a, obračunava se iznos PDV-a poklona na teret subjekta ili ne.  

**Klasa/Artikl/Opis artikla**: mogu se unijeti [ručno](/docs/guide/common/operations-with-data/manual-entry-or-help-and-data-selection) ili uz [pomoćno polje](/docs/guide/common/operations-with-data/manual-entry-or-help-and-data-selection) koje će ponuditi sve relativne podatke unesene u šifarnik artikla.

- **Barkod**: ako je u parametrima otpremnica omogućeno upravljanje barkodovima, prikazuje se stupac **Barkod** u kojem je moguće odabrati jedan od barkodova definiranih na kartici artikla.

- **Artikl kupca**: ako je u parametrima otpremnica omogućeno upravljanje artiklima kupca, prikazuje se stupac **Artikl kupca**.
  U tom se polju prikazuje šifra artikla definirana za kupca na kartici artikla u sekciji **Kupci**.

- **Jedinica mjere**: automatski se predlaže osnovna jedinica mjere artikla.
  Ako su na kartici artikla definirane alternativne jedinice mjere, korisnik može odabrati drugu jedinicu.

- **Količina**: predstavlja količinu u osnovnoj jedinici mjere.
  Zadana vrijednost je **1**, ali se može ručno promijeniti ili preuzeti iz izvornog dokumenta tijekom izvršenja.

- **Cijena**: automatski se predlaže iz cjenika definiranog na kartici kupca.
  Cjenik iz kojeg je cijena preuzeta vidljiv je na kartici **Popusti/Cjenici**.
  Unutar istog dokumenta moguće je koristiti artikle čije su cijene preuzete iz različitih cjenika.
  Ako je za kupca definirano više cjenika, korisnik može dvostrukim klikom na polje **Cjenik** na kartici **Popusti/Cjenici** odabrati drugi cjenik iz kojeg će se preuzeti cijena artikla.

:::note Napomena
Ako za artikl nije pronađen odgovarajući cjenik, predložena vrijednost bit će **prodajna cijena** definirana na kartici artikla u sekciji **Troškovi/Cijene** ili će biti određena prema postavkama parametara dokumenta.
Ako ni taj podatak nije dostupan, cijena će biti postavljena na **0**.
:::

- **Porezna osnovica**: prikazuje jediničnu cijenu pomnoženu s količinom artikla, umanjenu za sve popuste primijenjene na stavku.

- **Popusti artikla**: prikazuje ukupan iznos popusta definiranih za artikl.

- **Završni popusti artikla**: prikazuje ukupan iznos završnih popusta raspoređenih na stavku artikla iz sekcije **Sažeci** dokumenta.

- **PDV**: prioritetno se koristi vrijednost definirana na kartici kupca. Ako na kartici kupca nije definiran PDV, predlaže se vrijednost s kartice artikla. Korisnik može odabrati drugu vrijednost. Polje je obavezno.

- **Vrsta prometa prodaje**: preuzima se s kartice artikla u sekciji **Općenito**. Ako vrijednost nije definirana, tijekom knjiženja koristit će se zadana vrijednost definirana u polju **Zadani prihod/trošak protustavke** na kartici kupca. Ako ni ta vrijednost nije dostupna, sustav će prikazati poruku o pogrešci.

- **Na računu**: ova oznaka je uključena prema zadanim postavkama.

  Može se isključiti ako se stavka ne smije prenijeti u račun te se ne smije pojavljivati u procedurama izvršenja DDT-a.

- **Neto težina**: prikazuje neto težinu definiranu na kartici artikla pomnoženu s količinom stavke.

- **Bruto težina**: prikazuje bruto težinu definiranu na kartici artikla pomnoženu s količinom stavke.

#### Posebni gumbi

- **Preračun reciklaže**: ako je za dokument aktivirano upravljanje CONAI naknadama, ovim gumbom moguće je ponovno izračunati vrijednosti nakon izmjena.

- **Ažurirajte vrijednosti recikliranja registra predmeta**: ako su na kartici CONAI materijala artikla promijenjene jedinica mjere i/ili težina, moguće je prenijeti nove vrijednosti na karticu artikla.

- **Upravljanje ambalažom**: omogućuje otvaranje obrasca za upravljanje povratnom ambalažom korištenom na dokumentu.
  Gumb je dostupan samo kada je dokument spremljen, ali još nije razdužen.
  U obrascu je moguće:
  - unijeti količine
  - odabrati redak dokumenta
  - prenijeti odabranu ambalažu na stavke artikala

  Prikazuju se samo artikli označeni kao ambalaža i evidentirani u tablici ambalaže za povrat.

- **Ažuriranje cjenika**: iz padajućeg izbornika dostupne su dvije procedure:

  - **Ažuriraj trenutni cjenik** – usklađuje cijenu artikla u postojećem cjeniku s novom cijenom unesenom na stavci dokumenta.

  - **Izradite novi cjenik s novom valjanošću** – kreira novi prilagođeni cjenik za kupca dokumenta.
    Prilikom pokretanja procedure korisnik mora unijeti:
    - datum početka važenja
    - datum završetka važenja
    novog cjenika.

- **Prikaži/Sakrij detalje**: prikazuje ili skriva interne kartice dostupne unutar sekcije **Artikli**.

### 3.1 Popusti / Cjenici

Na ovoj kartici moguće je pregledavati cjenik i popuste povezane s odabranom stavkom artikla.
U sekciji **Cjenik** prikazuje se cjenik iz kojeg je preuzeta cijena artikla zajedno s datumom početka i završetka važenja.
U polju **Tip raspona** predlaže se zadana rabatna ljestvica koju kupac ima povezanu s tim cjenikom.
Ako nije definirana zadana rabatna ljestvica, moguće je ručno odabrati drugu.
Potrebno je imati na umu da jedan cjenik može imati više različitih rabatnih ljestvica za isti artikl, primjerice:
- količinske popuste
- opće komercijalne popuste
- druge vrste popusta

Ako oznaka **Ručna cijena** nije aktivna, znači da se:
- cjenik
- cijena
- popusti stavke
izračunavaju automatski.

Ako korisnik ručno promijeni bilo koji od tih podataka, oznaka **Ručna cijena** automatski se aktivira.
U tablici **Popusti** prikazuju se svi popusti povezani s artiklom, pri čemu svaki popust ima vlastitu osnovicu obračuna i pravila dodjele.
Popusti se mogu preuzeti iz:
- kartice kupca
- načina plaćanja dodijeljenog dokumentu
- cjenika povezanog s kupcem
Svi predloženi podaci mogu se ručno mijenjati.

#### Posebni gumbi

> **Otkaži rabat**: omogućuje brisanje popusta povezanog s odabranim artiklom u gornjem izborniku.

### 3.2 Podaci

Na ovoj kartici prikazuju se i unose dodatni podaci povezani s artiklom.

- **Alternativna jedinica mjere**: u ovom polju prikazuje se alternativna jedinica mjere definirana na kartici artikla u sekciji **Alternativne jedinice mjere**.
  Prikazuje se jedinica označena kao zadana (**Default**) ako su u parametrima dokumenta aktivirane opcije:
  - Upravljanje dvostrukom jedinicom mjere
  - Automatski prijedlog alternativne jedinice mjere

- **Alternativna količina**: prikazuje količinu izraženu u alternativnoj jedinici mjere.
  Vrijednost se izračunava množenjem ili dijeljenjem količine artikla s faktorom konverzije definiranim na kartici artikla u sekciji **Alternativne jedinice mjere**.

- **Cijena alternativne jedinice mjere**: ova oznaka određuje da se za obračun koristi alternativna količina artikla.
  U tom slučaju iznos stavke izračunava se kao cijena po alternativnoj jedinici mjere.

- **Skladište i predložak**: predlažu se skladište i skladišna vrsta dokumenta koji će se koristiti tijekom skladišnog razduženja artikala.
  Podaci se preuzimaju iz šifrarnika **Vrste otpremnica**, ali ih je moguće i ručno unijeti.

- **Varijante**: omogućuje odabir varijante artikla definirane na kartici artikla u sekciji **Varijante**.

- **Status izvršenja**: prikazuje je li stavka:

  - Valorizirano
  - Djelomična valorizacija
  - Prisilno valorizacija

- **Projekt**: projekt povezan sa stavkom artikla ili dodijeljen pomoću pomoći za unos.

- **Povrat PDV-a**: određuje smatra li se PDV na stavci besplatne isporuke dijelom ukupnog iznosa dokumenta.

- **Referenca naloga**: prikazuje nalog iz kojeg je nastala otpremnica.

- **Naša referenca / Vaša referenca**: interna referenca i referenca kupca povezane sa stavkom.

  Ako je otpremnica nastala automatskom procedurom, podaci se automatski preuzimaju iz izvornog dokumenta.

- **Broj / referentni datum**: prikazuju referencu na broj i datum izvornog naloga kupca.

- **Marka**: marka artikla preuzeta s kartice artikla ili iz cjenika artikla.

- **Na računu**: oznaka je uključena prema zadanim postavkama.

  Može se isključiti ako se stavka ne smije prenijeti u račun i ne smije sudjelovati u procedurama izvršenja DDT-a.

- **Napomene**: omogućuje unos napomena za pojedinu stavku artikla.

- **Detalji izjave**: prikazuje izjavu o namjeri korištenu za određivanje PDV-a artikla.

  Ako postoji više važećih izjava, moguće je odabrati drugu putem padajućeg izbornika.

### 3.3 Trgovački predstavnici (agenti)

- **Agent**: prikazuje agenta povezanog s odabranom stavkom artikla zajedno s pripadajućom provizijom.
  Podatak odgovara vrijednosti definiranoj na kartici **Agenti** u zaglavlju dokumenta.
  Postotak provizije moguće je ručno promijeniti.

#### Posebni gumbi

- **Otkaži agente**: uklanja agenta povezanog s odabranom stavkom artikla.

### 3.4 Lotovi i serijski brojevi

U ove dvije tablice moguće je unijeti lotove i serijske brojeve koji će biti razduženi sa skladišta.
Dostupnost unosa ovisi o tome postoje li lotovi i serijski brojevi evidentirani na skladištu.
Ako artikl nema uključeno upravljanje lotovima ili serijskim brojevima, ova kartica neće biti dostupna.

:::info Zapamti
Ako je u parametrima skladišta isključena opcija **Obavezni lotovi i serijski brojevi**, dokument je moguće spremiti i bez unosa lotova ili serijskih brojeva.
Ako je na kartici artikla kao metoda izdavanja zaliha odabrano:
- **FIFO**
- **Prema datumu isteka**
prilikom knjiženja otpremnica lotovi će se automatski predložiti ako prethodno nisu ručno uneseni.
:::

#### Posebni gumbi

- **Obriši lot**: briše odabrani redak lota.

- **Obriši serijski broj**: briše odabrani redak serijskog broja.

### 3.5 Analitika

Može sadržavati podatke o mjestima troška i profitnim centrima na koje se raspoređuju vrijednosti artikala.
Podaci se mogu unositi:
- ručno
- automatski

Automatsko popunjavanje moguće je ako su mjesta troška ili profitni centri prethodno definirani na:
- kartici kupca
- kartici artikla
- kontnom planu

### 3.6 Dodatni podaci

Prikazuje popis dodatnih podataka povezanih s artiklom.
Moguće je dodati nove dodatne podatke koji će vrijediti samo za dokument na kojem se radi.
Oznaka **Za ispis** omogućuje odabir dodatnih podataka koji će biti uključeni na ispis dokumenta.

### 3.7 Priloženi dokumenti

Prikazuju se podaci o eventualno priloženom dokumentu:
- naziv dokumenta
- vrsta dokumenta
- napomene
- naše reference
- vaše reference
Za više informacija o dodavanju priloga pogledajte dokumentaciju **Priloži dokumente**.

### 3.8 Sažetak vrijednosti
Sekcija u donjem desnom dijelu obrasca prikazuje pregled vrijednosti koje sudjeluju u izračunu konačne cijene odabranog artikla.
Prikazuju se sljedeći podaci:
- **Jedinična cijena**: vrijednost iz polja **Cijena**.
- **Količina**: vrijednost iz polja **Količina** ili **Alternativna količina**, ovisno o tome je li uključena opcija **Cijena po alternativnoj jedinici mjere**.
- **Iznos retka**: izračunava se kao: `Cijena × Količina`
- **Ukupno rabat**: zbroj svih popusta povezanih s artiklom, uključujući završne popuste.
- **Porezna osnovica**: izračunava se kao: `Iznos retka − Popusti`
- **Porez**: izračunava se kao: `Porezna osnovica × PDV`
- **Ukupno**: izračunava se kao: `Porezna osnovica + Porez`

## 4. Sažeci

U sekciji **Sažeci** prikazane su glavne informacije za cijeli dokument.

### 4.1 Konačni popusti na artikle

Završni popusti definirani na razini dokumenta raspoređuju se proporcionalno na sve stavke artikala.

To znači da se ukupni iznos popusta dijeli između svih artikala na dokumentu, a pripadajući iznos popusta vidljiv je na svakoj pojedinoj stavci artikla.

- **Vrsta / Opis popusta**: omogućuje odabir vrste popusta definirane u šifrarniku vrsta popusta te određivanje prioriteta primjene i načina obračuna.

- **Prioritet**: određuje redoslijed primjene popusta. Popusti se obračunavaju prema rastućem prioritetu.

- **Kaskadno / Iznos**: određuje obračunava li se popust na osnovicu umanjenu za prethodno obračunate popuste ili na puni iznos stavke.

- **Vrijednost**: numerička vrijednost završnog popusta koja će se primijeniti.

### 4.2 Sažetak provizija predstavnika (agenata)

Na ovoj kartici prikazuje se pregled svih provizija obračunatih za agente uključene u dokument.

### 4.3 Konačni troškovi / popusti / uvećanja

Predlažu se troškovi definirani na kartici kupca u sekciji **Troškovi / Popusti**.
U ovoj tablici:
- troškovi se unose kao pozitivni iznosi
- popusti se unose kao negativni iznosi

Ove stavke primjenjuju se na cijeli dokument i ne raspoređuju se na pojedine artikle.
Mogu sadržavati:
- dodatne troškove
- opće popuste
- uvećanja vrijednosti dokumenta
Ako su definirani na kartici kupca, automatski se predlažu prilikom kreiranja dokumenta.

Dostupna polja:
- **Tip / Naziv**: omogućuje odabir vrste troška definirane u šifrarniku vrsta troškova te određivanje postotka troška.
- **Opis troška**: prikazuje iznos troška u valuti dokumenta.
- **PDV**: određuje poreznu stopu koja će se primijeniti na uneseni trošak.
- **Postotak / Vrijednost**: određuje obračunava li se trošak kao postotak ili kao unaprijed definirani novčani iznos.
  Ako se odabere opcija **Vrijednost**, iznos troška potrebno je unijeti u polje **Iznos troška**.
- **Postotak**: numerička vrijednost postotka troška.
- **Detalji izjave**: prikazuje eventualnu važeću izjavu o namjeri povezanu s kupcem.

### 4.4 Sažetak PDV-a

Prikazuje pregled PDV-a dokumenta grupiran po pojedinim poreznim stopama.

### 4.5 Pregled dospijeća plaćanja

Prikazuje pregled svih dospijeća dokumenta prema vrsti i načinu plaćanja.

Dostupna polja:

- **Redni broj**: redni broj stavke.
- **Način plaćanja**: alfanumerička šifra načina plaćanja preuzeta s kartice **Plaćanja** u zaglavlju dokumenta.
- **Iznos**: obračunati iznos dospijeća.
  Vrijednost je moguće ručno promijeniti. U tom slučaju automatski se aktivira oznaka **Ručna izmjena**.
  Sustav također automatski provodi kontrolu usklađenosti između iznosa dospijeća i ukupnog iznosa dokumenta.

- **Datum dospijeća**: obračunati datum dospijeća.
  Vrijednost se može ručno promijeniti, pri čemu se automatski aktivira oznaka **Ručno uređivanje**.

- **Troškovi naplate**: prikazuje obračunate troškove naplate.
- **PDV**: porezna stopa koja se primjenjuje na troškove naplate.
  Vrijednost se može ručno izmijeniti.

- **Predložak plaćanja**: omogućuje odabir predloška koji generira automatsko knjiženje naplate ili plaćanja.
  Potrebno je obratiti pažnju na predložak jer se koristi konto definiran u samoj shemi bez konta.

- **Konto / podkonto kupca ili dobavljača**: konto koji se koristi za evidentiranje naplate ili plaćanja (primjerice blagajna ili banka).
  Ova vrijednost zamjenjuje konto definiran u kontnoj shemi plaćanja ili naplate.

- **Broj računa**: eventualni broj potvrde o primitku uplate.
- **Jedinični zapis zatvaranja**: omogućuje zasebno knjiženje zatvaranja dospijeća u automatskoj knjižnoj stavci.
- **Vrsta popusta**: vrsta financijskog popusta povezana s dospijećem.
- **Iznos popusta**: vrijednost financijskog popusta koja će se primijeniti pri naplati.
- **Detalji izjave**: referenca na izjavu o namjeri.

  Budući da se na troškove naplate može primijeniti posebna PDV stopa, potrebno je omogućiti povezivanje i odgovarajuće izjave o namjeri, jednako kao i na stavkama artikala i troškova.

#### Dodatna polja za ulazne račune

Kod ulaznih računa dostupna su i sljedeća polja:

- **Predznak**: samo dospijeća koja imaju uključenu ovu oznaku mogu biti uključena u postupke plaćanja korištenjem definiranih kontnih shema i konta.
- **Referentni model plaćanja**: model za generiranje poziva na broj.
  U nekim lokalizacijama svako dospijeće na računu mora imati vlastiti kod koji izdavatelj računa dodjeljuje prema definiranim pravilima.
  Primjer takvog modela je **IBAN_PaymentReferenceModels**, koji omogućuje automatsko generiranje odgovarajućeg poziva na broj.
- **Tipovi modela plaćanja**: šifra generirana prema modelu reference plaćanja.
  Ova šifra prenosi se na otvorenu stavku i koristi se kod elektroničkih plaćanja prema banci kako bi banka mogla prepoznati koje je dospijeće podmireno.
  Vrijednost se koristi i za automatsko zatvaranje otvorenih stavaka nakon uvoza bankovnih izvoda.
- **Rok za avansno plaćanje**: datum do kojeg je moguće ostvariti financijski popust za prijevremeno podmirenje obveze.
  Ovo polje predviđeno je i za potrebe elektroničkih računa prema standardu SDI.

## 4.6 Ukupni iznosi dokumenta

- **Iznos stavki bez popusta**: zbroj vrijednosti svih artikala na dokumentu.

- **Predujam**: iznos eventualnog predujma povezanog s dokumentom.

- **Poklonjeni iznos**: ukupna vrijednost artikala označenih kao besplatni artikli na kartici **Artikli**.

- **Ukupni primijenjeni rabati**: zbroj svih popusta primijenjenih na artikle, ne uključujući završne popuste.

- **Neto vrijednost artikala**: `Iznos stavki bez popusta − Ukupni primijenjeni rabati`

- **Ukupno konačnih rabata**: ukupna vrijednost završnih popusta izraženih kao postotak na bruto vrijednost artikala.

- **Iznos umanjen za ukupni popust**: `Neto vrijednost artikala − Ukupno konačnih rabata`

- **Ukupno za stavke troškova**: zbroj vrijednosti svih stavki tipa trošak definiranih na dokumentu.

- **Troškovi naplate**: ukupni iznos troškova naplate unesenih u tablici **Troškovi**.

- **Trošak ovjere**: ukupni iznos troškova biljega unesenih u tablici **Troškovi**.

- **Ukupni troškovi/popusti/doplate**: ukupna vrijednost svih troškova, popusta i uvećanja definiranih u tablici **Troškovi**.

- **Porezna osnovica**:  `Neto vrijednost artikala − Ukupno konačnih rabata + Ukupno za stavke troškova + Ukupni troškovi/popusti/doplate`

- **Porez**: zbroj svih vrijednosti sadržanih u pregledima PDV-a.

- **Ukupno**: `Porezna osnovica + Porez`

## 5. Prijevoz

Dostupni podaci:

- **Primatelj**: automatski se predlaže zadani primatelj definiran na kartici kupca. Ako nije definiran, koristi se adresa kupca.
- **Odredište**: automatski se predlaže zadano odredište primatelja ako je definirano na kartici kupca.
- **Broj praćenja**: slobodno polje za unos broja paketa.
- **Volumen**: prikazuje ukupni volumen svih artikala na dokumentu.
  Vrijednost se izračunava zbrajanjem volumena artikala definiranih na kartici artikla u sekciji **Težine/Dimenzije**, pod uvjetom da jedinica mjere volumena odgovara jedinici definiranoj u parametrima DDT-a.
- **Neto težina**: prikazuje ukupnu neto težinu svih artikala na dokumentu. Vrijednost se preuzima s kartice artikla iz sekcije **Težine/Dimenzije**, pod uvjetom da jedinica mjere težine odgovara postavkama parametara DDT-a.
- **Bruto težina**: prikazuje ukupnu bruto težinu svih artikala na dokumentu. Vrijednost se preuzima s kartice artikla iz sekcije **Težine/Dimenzije**, pod uvjetom da jedinica mjere težine odgovara postavkama parametara DDT-a.
- **Vanjski izgled robe**: odabir vrijednosti iz odgovarajućeg šifarnika.
- **Paketi**: automatski se predlaže broj paketa definiran na kartici artikla u sekciji **Težine/Dimenzije**, u poljima:
  - Artikli sadržani u jednom paketu
  - Paketi za formiranje artikla
  U obzir se uzimaju samo artikli za koje je ovaj podatak definiran.
- **Vrijednost ručno promijenjena**: omogućuje ručnu izmjenu polja:
  - Volumen
  - Neto težina
  - Bruto težina
  - Paketi
  Bez ove opcije navedene vrijednosti preuzimaju se iz kartice artikla i nije ih moguće uređivati.
- **Ulaz / izlaz carinskog ureda**: polja namijenjena Transport modulu u rumunjskoj lokalizaciji, povezana sa šifrarnikom carinskih ureda.
- **Ulaz / izlaz graničnog prijelaza**: polja namijenjena Transport modulu u rumunjskoj lokalizaciji, povezana sa šifrarnikom graničnih prijelaza.
- **Pošiljatelj**: potrebno je odabrati subjekt koji obavlja prijevoz.
  Dostupne opcije:
  - Pošiljatelj
  - Primatelj
  - Prijevoznik
  Ovisno o odabiru mijenjaju se dostupna polja za unos.
  Ako prijevoz organizira **pošiljatelj**, moguće je unijeti:
  - registarsku oznaku vozila
  - prikolicu
  - datum početka prijevoza
  - vrijeme početka prijevoza
  Ako prijevoz organizira **primatelj**, dostupna su ista polja.
  Ako prijevoz organizira **prijevoznik**, dostupna su dodatna polja:
  - konto prijevoznika
  - registarska oznaka vozila
  - prikolica
  - datum prijevoza
  - vrijeme prijevoza
  - naručitelj prijevoza
  - utovarivač
  - vlasnik robe
  - mjesto utovara

## 6. Povezani dokumenti

Na ovoj kartici moguće je pregledavati dokumente povezane s DDT-om.
Dokumente je moguće priložiti na dva načina:
- korištenjem gumba **Dokumenti** na alatnoj traci, gdje se može:
  - odabrati već postojeći dokument iz Fluentisa
  - kreirati novi dokument za prilaganje
- desnim klikom unutar tablice i odabirom opcije **Priloži datoteku**, čime se otvara postupak kreiranja novog dokumenta za prilaganje