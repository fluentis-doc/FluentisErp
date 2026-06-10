---
title: Kreiranje izlaznog (prodajnog) računa
sidebar_position: 1
---

Obrazac se otvara putem putanja:

1. **Prodaja > Izlazni računi > Novi račun**   
ili   
2. putem gumba **Novo** koji se nalazi u obrascu [Pretraživanje izlaznih računa](/docs/sales/sales-invoices/invoicing/search-sales-invoices).

:::note NAPOMENA
U računu se automatski predlažu trenutni **Datum** i **Godina**, ali vrijednosti se mogu promijeniti.
:::

## **1. Obavezni podaci**

Za nastavak stvaranja dokumenta, korisnik mora unijeti *obavezna* polja:

- **Vrsta računa** predefiniran u *Konfiguriranje > Tabelica > Prodaja >  [Tipovi izlaznih računa](/docs/configurations/tables/sales/invoices-type)*.

- **Broj** svakom dokumentu dodijeljen je broj prema numeraciji koje je korisnik odredio u tablici [Numeracija](/docs/configurations/tables/fluentis-numerations) i za tip dokumenta koji sadrži numeraciju.

- **Kupac**, korištenjem [polja za pomoć](/docs/guide/common/operations-with-data/manual-entry-or-help-and-data-selection) ili [izravno](/docs/guide/common/operations-with-data/manual-entry-or-help-and-data-selection) unoseći podatke.

Nastavlja se s kreiranjem unoseći barem obavezne podatke na svakom od sljedećih kartica (*tabova*).

## **2. Zaglavlje**

Nakon što su odabrani obavezni podaci u gornjem dijelu, korisnik može nastaviti unos sljedećih podataka:

- [ručni unos](/docs/guide/common/operations-with-data/manual-entry-or-help-and-data-selection)  
- [pomoćno polje](/docs/guide/common/operations-with-data/manual-entry-or-help-and-data-selection)

- automatski unos: Na temelju odabrane procedure, aplikacija može **automatski** popuniti određena polja.

:::note NAPOMENA
Ako se dokument stvara *automatski*, ovi podaci se preuzimaju iz *izvornog dokumenta* iz kojeg je generiran.
:::

Unoseći **Kupca** automatski se *nude* svi specifični podaci u **Zaglavlju**, prema prethodno postavljenim podacima u [Šifarnik klijenta](/docs/erp-home/registers/contacts/create-new-contact/accounting-data/accounting-data-intro), u odgovarajućim poljima za adresu i u sljedećim *sekcijama*: 

- **Valuta**: [Valuta](/docs/guide/common/glossary/glossary-intro#currency), [Tečaj](/docs/guide/common/glossary/glossary-intro#currency-exchange), [Datum valute](/docs/guide/common/glossary/glossary-intro#currency-date).
- **Država**: [Država](/docs/guide/common/glossary/glossary-intro#country), [Jezik](/docs/guide/common/glossary/glossary-intro#language), [Zona](/docs/guide/common/glossary/glossary-intro#zone)  
- **Pošiljka**: [Pošilja](/docs/guide/common/glossary/glossary-intro#shipment), [Paritet](/docs/guide/common/glossary/glossary-intro#carriage), [Pakiranje](/docs/guide/common/glossary/glossary-intro#packing), [Cjenik](/docs/guide/common/glossary/glossary-intro#sales-price-list) i njegov [vremenski interval](/docs/guide/common/glossary/glossary-intro#validity-date)  
- ostala polja koja se nude izborom klijenta, ali se mogu mijenjati: [Odredište](/docs/guide/common/glossary/glossary-intro#destination), [Primatelj](/docs/guide/common/glossary/glossary-intro#recipient).

#### Ostala opcionalna polja

**Status računa**: prilikom stvaranja, račun nema aktivnih oznaka.  
Ova sekcija uključuje sljedeća polja:  
> **Ispisano** aktivira se kada se račun ispisa, označava da je račun isprintan.    
> **Knjiženo**: automatski se označava kada se račun knjiži.  
> **Otkazano**: aktivna oznaka omogućuje storno računa.   
> **Istovareno**: označava da je račun otpremljen iz skladišta, ručno ili *automatski* putem postupka *automatskog otpreme*.  

:::note NAPOMENA
U slučaju računa koji je stvoren iz već obrađenog dokumenta o prijevozu, prisutan je opći parametar VE-PurchaseInvoices_VerifyLoadStatusDDT koji blokira oznaku *Preuzeto* čak i u računu.
:::

:::important VAŽNO
Oznake se mogu ukloniti postupkom **Povrati** operacije.
:::

**Bilješke kupaca**: nudi se informacija unesena u karticu klijenta, dok u slučaju automatskog stvaranja iz narudžbenice/otpremnice bit će preuzeti isti podaci iz odgovarajućeg polja izvornog dokumenta.

Moguće je i ručno unijeti podatke. Desnim klikom miša moguće je otvoriti formu kako bi se specificirao dugi tekst bilješke; ako polje sadrži vrijednost, boja pozadine polja se mijenja.

**Naša referenca/vaša referenca**: u ovim se poljima obično navodi interna referenca i referenca klijenta za određeni račun.  
U slučaju kada se račun generira putem:     
> *Stvaranja iz narudžbe kupca*, ova polja bit će popunjena informacijama koje su navedene u narudžbenici kupca. Ovaj prijenos vrijedi samo za račun stvoren uzimanjem podataka iz jedne narudžbenice;  
> *Izrade iz otpremnice*, ova polja bit će popunjena informacijama koje su navedene u otpremnici. Ovaj prijenos vrijedi samo za račun stvoren uzimanjem podataka iz jedne otpremnice.

**Početna bilješka račiun**: mogu se odabrati napomene koje su prethodno unesene u tablicu istog imena koja se nalazi u putanji *Konfiguracija > Korisnost > Upravljanje šifriranim bilješkama* Korisnik mora dvaput kliknuti na polje **Početna bilješka** kako bi otvorio pomoć *šifriranim napomenama* i odabrao podatke ili desnim klikom miša može otvoriti prozor kako bi specificirao vrlo dug tekst bilješke. Ako polje sadrži vrijednost, promijenit će se boja pozadine polja.

U slučaju *Izrade iz narudžbenice*, informacije koje su bile navedene u narudžbenici kupca bit će automatski ponovno prikazane u polju **Početna bilješka**.

**Operater**: omogućuje unos korisnika koji stvara dokument. Zaposlenici su uneseni unaprijed u tablicu *Zaposlenici* koja se nalazi u putanji *Početna stranica > Zaposlenici*. Podatak postaje **obvezan** ako je opcija postavljena u parametrima samog dokumenta.

**Projekt**: koristeći [pomoć u polju](/docs/guide/common/operations-with-data/manual-entry-or-help-and-data-selection) dokument se može povezati s projektom. Ovo povezivanje funkcionira samo na razini zaglavlja artikla.

**Audit Trail**: kao i kod svih dokumenata, ova sekcija prikazuje datum kreiranja dokumenta zajedno s operaterom koji ga je kreirao te datum posljednje izmjene dokumenta zajedno s operaterom koji je izvršio izmjenu.

**Vrsta reference**: ako je račun nastao iz drugog računa ili iz dokumenta tipa **Storno**, ovdje se prikazuje vrsta dokumenta izvora.

**Referenca računa**: ako je račun kreiran iz drugog računa, u ovom se polju prikazuju broj i datum izvornog dokumenta.

**SDI referenca**: prikazuje identifikacijske podatke računa koji je poslan putem SDI sustava.

**Knjiženje**: sadrži identifikator računovodstvenog knjiženja ako je račun već proknjižen.

**Otprema**: prikazuju se podaci o prijevozniku, ambalaži i vozilu definirani na kartici kupca. Podaci su dostupni za izmjenu.

**Cjenik**: automatski se predlaže zadani cjenik definiran na kartici **Cjenici** u kartici kupca. Taj će se cjenik koristiti za dokument, ali ga je moguće promijeniti.

**Razred popusta**: prikazuje zadani razred popusta definiran na kartici **Cjenici** za odabrani cjenik.

**Datum obračuna**: datum koji se koristi za izračun rokova dospijeća plaćanja.

**Status dokumenta**: ovaj podatak odnosi se na tablicu *Stanja dokumenta* i mora ga unijeti korisnik. Može se koristiti za postupke replikacije poslovanja, instalirane za upravljanje poslovnicom s prodajnim mjestima.

**EDI**: predstavlja datum prijenosa dokumenta iz EDI postupaka.

**Primjeni iz**: je datum početka za izračun datuma dospijeća plaćanja.

#### Posebni gumbi

> **Izvršenje iz narudžbe kupca**: pokreće postupak za stvaranje računa iz narudžbenice kupca. Aktivira se kada su uneseni klijent i tip računa.  
> **Izvršenje otpremnice**: pokreće postupak za stvaranje računa iz otpremnice. Aktivira se kada su uneseni klijent i tip računa.  
> **Automatsko preuzimanje**: ovaj postupak omogućuje istovar zaliha dokumenta ako je označeno kao Ispisano.  
> **Pomoć primatelji/odredište**: omogućuje pregled i unos primatelja/odredišta iz evidencije klijenata.  
> **Umetni agenta u linijama**: dodjeljuje Predstavnika unesenog u zaglavlje u retke stavki, u kartici Predstavnici.  
> **Zamijeni CIG/CUP u linijama**: Dodjeljuje unesene kodove u zaglavlje u retke stavki, u odgovarajući padajući izbornik.  
> **Otkaži plaćanja**: Briše plaćanja iz zaglavlja.  
> **Registar Sdi dokumenata**: Otvora SDI dokument koji se odnosi na račun, nakon Kontrolirano.

### 2.1 Plaćanja

**Uvjeti plaćanja** automatski se prenose iz *Šifarnik kupca > kartica Plaćanje* i mogu se mijenjati/brisati od strane korisnika.

Ako je uz **Vrstu plaćanja** povezan financijski popust, iznos popusta uzima se u obzir samo u računovodstvenom smislu, odnosno u rokovima plaćanja dokumenta, a ne u ukupnom iznosu otprmenice. 

Ako dokument potječe iz:

- Narudžba kupca, vrste plaćanja mogu biti preuzete iz prvog dokumenta (narudžbenica), iz klijentovih podataka ili se mogu prikazati u obrascu sva plaćanja dokumenata za izvršenje, a korisnik odabire željeni način plaćanja.  

- Plaćanja mogu biti preuzeta iz klijentove kartice ili iz pojedinačnih plaćanja prisutnih u svakoj otpremnici. U ovom slučaju, u računu će se prikazati vrsta plaćanja s istim iznosom i PDV-om kao i u otpremnici, te će se dodati nova linija za bilo kakve stavke koje nisu proizašle iz otpremnice.

### 2.2 Popusti

Ponuđeni su samo predefinirani popusti iz *Šifarnik kupca > kartica Popusti* a ne oni dodijeljeni uvjetima plaćanja ili određenim artiklima. Mogu se mijenjati/brisati od strane korisnika.

:::info Zapamti
Za korištenje popusta obračunatih na poreznu osnovicu potrebno je na razini baze podataka aktivirati opći parametar:`GEN-GlobalSettings_CalculateDiscountOnAmount`
za odgovarajuće društvo. Ako parametar nije aktivan, popusti na poreznu osnovicu automatski će se pretvoriti u kaskadne popuste.
:::

Popusti ponuđeni u zaglavlju dokumenta pojavit će se u svakom novom retku stavke u dokumentu.

Nakon što se unesu nove stavke, u zaglavlje se unese novi popust, on neće biti primijenjen na već unesene stavke.

#### Posebni gumb

> **Izbriši zadani rabat**: koristi se za brisanje odabranih redova popusta.

### 2.3 Trgovački predstavnici

Pokazuje kod agenta i njegovu proviziju za svaki redak članka. Kod i postotak definirani su u *Šifarnik kupca > kartica Predstavnici*.

Ako provizija nije povezana s kupcem na njegovoj kartici, agent se svejedno mora unijeti, ali s praznom vrijednošću provizije (**NULL**).
Ako bi provizija bila postavljena na **0 %**, to bi značilo da je agent povezan, ali nema pravo na proviziju.

U slučaju generiranja otpremnice iz narudžbe, ovi podaci naravno će se ponoviti isto kao u narudžbi klijenta.

Ovaj odjeljak bit će ponovljen za svaki redak članka u pripadajućem odjeljku Trgovački predstavnici.

### 2.4 Dodatni podaci

Ovdje se nudi informacija unesena u *Šifarnik subjekta > kartica Dodatni podaci*, samo ako postoje zadani podaci.

### Procedure zaglavlja: 

### Elektronički račun

Ova sekcija, dostupna na alatnoj traci računa, omogućuje upravljanje generiranjem i slanjem elektroničkih računa putem SDI sustava. Postupak se temelji na promjeni statusa dokumenta. Dostupni statusi su:
- **Neispitano**: početni status dokumenta prije slanja u SDI sustav. Dokument je kreiran, ali još nisu izvršene nikakve radnje vezane uz elektronički račun.
  Sljedeći mogući statusi:
  - Kontrolirano
  - Otkazano
  - Isključeno

- **Kontrolirano**: Fluentis je izvršio provjeru dokumenta. Ako nedostaju podaci potrebni za komunikaciju sa SDI sustavom, korisnik će biti obaviješten. Za dokumente u ovom statusu dostupan je gumb **Registar elektroničkih dokumenata**, gdje je moguće pregledati povijest dokumenta i eventualne XML datoteke.
Sljedeći mogući statusi:
  - Generirano

- **Generirano**: XML datoteka elektroničkog računa je kreirana. Od ovog trenutka moguće je:
  - poslati datoteku u Fluentis Business Hub
  - preuzeti XML datoteku za vanjske sustave
  Sljedeći mogući statusi:
  - Potpisano
  - Spremno za slanje

- **Potpisano**: dokument je elektronički potpisan korištenjem CAdES XAdES certifikata i ponovno učitan u Fluentis u novom formatu.
  Sljedeći mogući statusi:
  - Spremno za slanje

- **Za poslati**: koristi se kada je Fluentis Business Hub ispravno konfiguriran.
  Dokument se dodaje na popis dokumenata koje BizLink treba obraditi i poslati SDI sustavu.
  U ovom slučaju nisu potrebne dodatne ručne aktivnosti jer se slanje odvija automatski.

### Izvršenje otpremnice

U zaglavlju računa pritiskom na gumb **Izvršenje otpremnice** otvara se obrazac za pretraživanje i odabir otpremnica povezanih s kupcem dokumenta.
Ovom procedurom moguće je kreirati izlazni račun na temelju jedne ili više otpremnica. Prilikom prijenosa moguće je:
- fakturirati cijelu otpremnicu
- fakturirati pojedine stavke otpremnice
- djelomično fakturirati pojedinu stavku

#### Preduvjeti
Za korištenje procedure moraju biti zadovoljeni sljedeći uvjeti:
- kupac na otpremnici mora biti isti kao kupac na računu
- otpremnica koja se fakturira mora imati uključenu oznaku **Ispisano**

:::info Zapamti
Napomene unesene u zaglavlju otpremnice, kao što su:
- Naša/Vaša referenca
- Referenca na broj narudžbe kupca
- Početne napomene
prenose se u zaglavlje računa samo ako se podaci preuzimaju iz jedne otpremnice.
:::

#### Postupak
Filtri kupca i valute automatski se popunjavaju prema podacima odabranog računa.
Nakon postavljanja željenih filtara i pokretanja pretrage, sustav prikazuje:
- sve ispisane otpremnice
- potvrđene i još ne fakturirane otpremnice
- djelomično fakturirane otpremnice
Za svaku otpremnicu prikazuje se jedan redak u rezultatima pretrage.

:::note Napomena
Procedura preuzima sve podatke s otpremnice.
Zbog toga će se primijeniti uvjeti prodaje definirani na otpremnici čak i ako su u međuvremenu promijenjeni (primjerice promjene cjenika).
:::

:::note Napomena
Redovi tipa **Napomena** uvijek će biti vidljivi, čak i ako su već fakturirani, sve dok nisu fakturirani svi ostali redovi dokumenta.
:::

#### Mogućnosti odabira
Korisnik može:
1. odabrati cijelu otpremnicu označavanjem polja na početku retka
2. odabrati samo određene artikle iz otpremnice označavanjem pojedinačnih redaka artikala
3. odabrati djelomične količine artikala
   U tom slučaju potrebno je ručno unijeti količinu za fakturiranje.

Nakon završetka odabira potrebno je kliknuti **Prijenos**, čime se svi podaci s odabrane otpremnice prenose na račun.

#### Dostupne funkcije
- **Traži**: pretražuje dostupne dokumente.
- **Premještaj**: prenosi podatke odabranog dokumenta u novi račun.
- **Proširi**: prikazuje sve stavke sadržane u odabranoj otpremnici.
- **Sažmi**: prikazuje samo zaglavlja otpremnica i skriva njihove stavke.
- **Odaberi sve**: označava sve stavke na popisu.
- **Odznači sve**: uklanja oznake sa svih stavki na popisu.

### Izvršenje iz narudžbe kupca

U zaglavlju računa, pritiskom na gumb **Izvršenje iz narudžbe kupca** otvorit će se forma gdje je moguće filtrirati narudžbe koje se odnose na klijenta iz dokumenta.
Kroz ovaj postupak moguće je kreirati račun izvršenjem odgovarajuće narudžbe kupca. Moguće je unijeti artikle unutar računa, potpuno ili djelomično ispunjavajući cijelu narudžbu ili red.
Da bi se koristio ovaj postupak, potrebno je poštivati sljedeće početne uvjete:  
 -  klijent narudžbi mora biti isti kao i na računu;
 -  narudžba koju želite izvršiti mora imati postavljenu oznaku *Ispisano* i *Datum potvrde narudžbe*;
 - vrste dokumenata moraju biti kompatibilne: u tablici  *Tipovi narudžbi* tip narudžbe koji želite izvršiti mora imati postavljenu odgovarajuću vrstu računa, dok u tablici *Tipovi računa* mora biti prisutna oznaka za *Narudžbu* (koja označava da račun proizlazi iz narudžbe);

Zatim je potrebno postaviti u zaglavlju novi računa *Tip otpremnice* koji želite kreirati (koji se mora podudarati s onim postavljenim u tablici *Tipovi narudžbi*) i *Klijenta*. Nakon što su ovi podaci uneseni, trebat će kliknuti na gumb *Izvršenje narudžbi* kako biste otvorili obrazac za izvršenje.

#### Postupak  

Filtri za klijenta i valutu automatski će se popuniti prema odabranom klijentu na računu.
Nakon što su svi željeni *Filtri* postavljeni, klikom na gumb *Traži* prikazat će se u rešetki jedan redak za svaku narudžbu koja je ispisana, potvrđena i neizvršena ili djelomično izvršena.

:::note NAPOMENA
Postupak preuzima sve podatke prisutne u narudžbi i kao rezultat će biti primijenjeni uvjeti kupnje koji su prisutni u narudžbi, čak i ako su se ti uvjeti promijenili (npr. ažuriranje cjenika).
:::

U rešetki rezultata, korisnik ima mogućnost:
 1. odabrati *cijelu narudžbu*. Da biste to učinili, dovoljno je odabrati oznaku na početku reda narudžbe.
 2. odabrati samo *neke* od ponuđenih *artikla*. Da biste to učinili, dovoljno je odabrati oznaku na početku retka artikla.
 3. odabrati samo neke *artikle*, ali samo za *određenu količinu*. U tom slučaju, količinu za izvršenje treba promijeniti.

Za dovršetak postupka, trebat će kliknuti na gumb *Prijenos*, koji će preuzeti sve podatke prisutne u narudžbi i prenijeti ih u račun.

#### Posebni gumbi 

> **Traži**: omogućuje pretraživanje narudžbi kupca.   
> **Prijenos**: omogućuje prijenos podataka odabrane narudžbe unutar novog računa.   
> **Prisilno izvršenje narudžbe**: omogućuje prisilno izvršenje narudžbe.  
- **Proširi**: prikazuje sve stavke sadržane u odabranoj narudžbi.
> **Sažmi**: omogućuje skraćivanje prikaza redova artikla i prikazivanje samo redova narudžbe.   
> **Označi sve**: omogućuje odabir svih artikala s popisa.  
> **Odznači sve**: omogućuje poništavanje odabira svih artikala s popisa.  

### Automatsko razduženje skladišta

Druga procedura dostupna u zaglavlju računa je **Automatsko razduženje skladišta**.
Gumb postaje dostupan kada:
- dokument ima status **Ispisano**
- račun nije povezan s otpremnicom koja je već razdužena sa skladišta

Ako je u parametrima računa uključena opcija automatskog razduženja, procedura će se pokrenuti automatski nakon ispisa dokumenta.
Tijekom izvršavanja sustav provjerava:
- postojanje skladišta definiranog na stavkama računa
- postojanje skladišne knjižne sheme
- prisutnost lotova i serijskih brojeva ako su obavezni

Ako neka od provjera nije uspješna, korisnik će biti obaviješten odgovarajućom porukom o pogrešci.
Ako procedura uspješno završi:
- kreira se skladišna registracija koja evidentira kretanje artikala
- u zaglavlju dokumenta automatski se uključuje oznaka **Istovareno**

## **3. Artikli**

U ovoj kartici unose se svi artikli s pripadajućim podacima.
Za sve što nije detaljno opisano u ovom dokumentu o zajedničkom radu obrazaca, pogledajte sljedeći link [Funkcionalnosti, gumbe i zajednička polja](/docs/guide/common).
Podaci se unose [ručno](/docs/guide/common/operations-with-data/manual-entry-or-help-and-data-selection), uz [pomoćno polje](/docs/guide/common/operations-with-data/manual-entry-or-help-and-data-selection) ili ih može predložiti povezane procedure.

Za unos **Novog artikla** u mrežu dovoljno je postaviti se na redak kako biste ispunili različite podatke ili koristiti gumb **Novo** prisutan na gornjem izborniku.


### Obvezni podaci

**Red**: ovo polje automatski će se popuniti postupnim unosom podataka u redak.

**Tip linije**: pruža mogućnost odabira, iz padajućeg izbornika, artikala s različitim karakteristikama.

:::note BILJEŠKA
Ako se krene izravno s unosom artikla, njegova *klasa*, *šifra* i *vrsta retka* - *Šifrirani artikl* automatski će se unijeti.
:::

> **Artikl sa klasom**: to su artikli šifrirani u evidenciji i mogu se knjižiti u analitičkom računovodstvu te evidentirati u skladištu.  
> **Artikl bez klase**: to su opisni artikli koji se mogu knjižiti u analitičkom računovodstvu, ali ih nije moguće knjižiti u skladištu.  
> **Trošak**: to su kodirani ili nekodirani artikli koji se zasebno sažimaju u pregledima dokumenata, ako je artikl trošak kodiran i od poreznog interesa, bit će knjižen u skladištu, ako nije kodiran ili nije od poreznog interesa, neće se knjižiti u skladištu.  
> **Bilješka**: to su opisne bilješke koje se pojavljuju u ispisu dokumenta; ne utječu na knjiženje ili skladište.  
> **Gratis artikl**: artikl poklon upravlja se kao kodirani ili nekodirani artikl u porezne i skladišne svrhe, ali budući da je to poklon, zasebno se broji u pregledima dokumenta i ovisno o zastupljenosti PDV-a, obračunava se iznos PDV-a poklona na teret subjekta ili ne.  
> **Račun za predujam**: artikl depozita koristi se za izradu depozitnih računa;  
> **Storno račun**: linija artikla storno depozita zatvara liniju depozita i depoziti se mogu odabrati pomoću pomoći depozita. Ovi podaci mogu se automatski unijeti kada se unese klasa ili serija jer je automatski odabran tip reda *kodirani artikl*.

**Klasa/Šifra/Opis artikla**: mogu se unijeti [ručno](/docs/guide/common/operations-with-data/manual-entry-or-help-and-data-selection) ili uz [pomoćno polje](/docs/guide/common/operations-with-data/manual-entry-or-help-and-data-selection) koje će predložiti sve povezane podatke unesene u Šifarnik artikala.

Nakon unosa artikla, njegov će se *Opis* automatski preuzeti iz evidencije. Ako artikl ima varijante, bit će potrebno odabrati željenu varijantu iz padajućeg izbornika *Varijante*.

**Jedinica mjere**: nudi se primarna jedinica mjere artikla, ali korisnik ima mogućnost odabrati drugu jedinicu mjere.

**Količina**: predstavlja količinu osnovne mjere, a pretpostavljena vrijednost je 1; može se unijeti ručno ili se može preuzeti iz razmatranog dokumenta za izvršenje (npr. iz narudžbe dobavljača).

**Cijena**: cijena se predlaže iz cjenika unesenog u evidenciju kontakta; cjenik koji se odnosi na sami artikl prikazan je u kartici *Popusti/Cjenici*.

Isti dokument može sadržavati artikle s cijenama preuzetim iz različitih cjenika, ako su u evidenciji subjekta povezani više cjenika u kaskadi (vidi **Šifarnik kontakata**), isti dokument može sadržavati artikle iz različitih cjenika.

Dvostrukim klikom u polje **Cjenici** (kartica *Popusti/Cjenici*), korisnik ima mogućnost odabrati drugu ponudu osim zadane, iz koje će biti preuzeta cijena unesenog artikla.

U odsutnosti cjenika, predloženi podatak je **prodajna cijena** preuzeta iz *Šifarnik artikala > kartica [Troškovi](/docs/erp-home/registers/items/create-new-item)* ili će se povući prema postavkama parametara dokumenta. Ako ni to nije dostupno, bit će navedena cijena 0.

**Porezna osnovica**: u ovom se polju prikazuje jedinična cijena pomnožena s količinom artikla, umanjena za sve primijenjene popuste.

**Popusti artikla**: prikazuje ukupni iznos popusta definiranih za pojedini artikl.

**Završni popusti artikla**: prikazuje ukupan iznos završnih popusta raspoređenih na artikl iz sekcije **Sažeci** dokumenta.

**PDV**: prioritetno se koristi PDV stopa definirana u kartici kupca. Ako nije definirana, predlaže se PDV stopa iz kartice artikla, no korisnik može odabrati i drugu vrijednost. Polje je obavezno.

**Prodajni promet**: predlaže se vrijednost definirana u kartici **Općenito** na kartici artikla. Ako nije definirana, prilikom knjiženja računa koristit će se vrijednost iz polja **Zadani konto prihoda/rashoda protustavke** na kartici kupca (**Računovodstveni podaci > Administracija**). Ako ni ta vrijednost nije definirana, sustav će prikazati poruku o pogrešci.

#### Posebni gumbi

- **Ponovni izračun CONAI naknada**: ako je za dokument aktivirana CONAI evidencija, ovim gumbom moguće je ponovno izračunati vrijednosti nakon eventualnih izmjena.

- **Ažuriraj CONAI podatke u kartici artikla**: ako su na kartici **CONAI materijali** za artikl promijenjeni podaci poput mjerne jedinice i/ili težine, moguće ih je prenijeti u CONAI sekciju kartice artikla.

- **Upravljanje ambalažom**: omogućuje otvaranje obrasca za upravljanje povratnom ambalažom korištenom u dokumentu. Gumb postaje aktivan nakon spremanja dokumenta, ali prije knjiženja skladišnog izlaza.
  Klikom na gumb otvara se odgovarajući obrazac u kojem je potrebno:
  - unijeti količinu
  - odabrati redak dokumenta
  - prenijeti odabranu ambalažu na redak artikla pomoću gumba **Izvrši**
  U obrascu se prikazuju artikli definirani kao ambalaža i evidentirani u tablici povratne ambalaže.

- **Ažuriranje cjenika**: klikom na strelicu pokraj gumba dostupne su dvije procedure:
  - **Ažuriraj trenutni cjenik**: usklađuje cijenu artikla u cjeniku s eventualnom promjenom cijene unesene izravno na retku dokumenta.
  - **Izradi novi cjenik s novom valjanošću**: omogućuje kreiranje novog personaliziranog cjenika za kupca dokumenta. Sustav će zatražiti datum početka i završetka važenja novog cjenika.

- **Prikaži/Sakrij detalje**: prikazuje ili skriva dodatne kartice unutar sekcije **Artikli**.

- **Upravljanje predujmovima**: Fluentis omogućuje upravljanje računima za predujam i njihovim storno dokumentima.

#### Kreiranje računa za predujam

Računi za predujam mogu imati poseban tip dokumenta, iako se upravljanje predujmovima ne definira na razini vrste dokumenta već na razini stavki.
Postupak predviđa kreiranje standardnog izlaznog računa pri čemu je potrebno unijeti:
- tip dokumenta
- kupca
- ostale osnovne podatke zaglavlja
Nakon popunjavanja zaglavlja prelazi se na karticu **Artikli** gdje se dodaje redak tipa:

**Račun za predujam**
Za taj redak potrebno je definirati:
- opis
- PDV
- promet prodaje (konto predujmova kupaca)
- eventualne dodatne podatke

Vrijednost tog retka predstavlja iznos predujma. Nakon spremanja dokument moguće je ispisati, čime račun za predujam postaje potvrđen. Prilikom kreiranja drugih dokumenata za istog kupca Fluentis će upozoriti korisnika da postoji otvoreni račun za predujam.

#### Storno računa za predujam

Za storniranje računa za predujam potrebno je kreirati novi izlazni račun za istog kupca.
Na kartici **Artikli**, ako kupac ima barem jedan račun za predujam, aktivirat će se gumb na alatnoj traci **Upravljanje predujmovima**.
Nakon pokretanja procedure:
1. na kartici **Storno predujmova** odabire se jedan ili više predujmova za storniranje
2. klikom na gumb **Kreiraj storno** generira se storno dokument
3. generirani storno prikazuje se u donjoj tablici

Prilikom zatvaranja obrasca sustav će zatražiti potvrdu unosa nove vrijednosti storna u račun. Nakon potvrde, storno stavka bit će vidljiva na kartici **Artikli** prethodno kreiranog računa za predujam. U nastavku dokumentacije opisane su dodatne kartice povezane s ovom funkcionalnošću.

### 3.1 Popusti/Cjenici

**Popusti**: Prikazuju se sva sniženja povezana s artiklom, svako s vlastitom osnovom i načinom dodjele. Sniženja se mogu preuzeti iz: podataka o klijentu, rješenja plaćanja dodijeljenog dokumentu, cjenika povezanog s klijentom. Svi prikazani podaci mogu se mijenjati

Ako oznaka **Ručna cijena** nije uključena, cjenik, cijena i popusti na stavci izračunavaju se automatski. Ako korisnik ručno promijeni bilo koji od tih podataka, oznaka **Ručna cijena** automatski se aktivira.

**Vrijednosti cjenika**: Prikazuje se cjenik iz kojeg je preuzet artikl, s datumom početka/kraja valjanosti i posebnim prodajnim uvjetima (npr. Razinama popusta) dodijeljenim artiklu u cjeniku. 

#### Poseban gumb

> **Izbriši rabate**: omogućuje brisanje popusta povezanog s odabranim artiklom u gornjem retku.

### 3.2 Podaci artikla

**Varijante**: Prikazuju se varijante odabranog artikla, šifrirane u kartici **Varijante** u šifarnik artikla ili se mogu unijeti ručno. Omogućuje upravljanje varijantama artikla na način koji se razlikuje od onoga što je ponuđeno na retku s artiklima. Na primjer, na svakom se retku s artiklima može unijeti ukupna količina; zatim, u istoj kartici mogu se definirati različite količine za više varijanti odabranog artikla i čak za varijantu i atribut, odnosno upravljanje veličinom/bojom. Ova operacija je moguća samo ako su sve varijante artikla cijenjene po istoj cijeni kao i standardna konfiguracija artikla. 

**Alternativna mjerna jedinica**: u ovom se polju prikazuje alternativna mjerna jedinica ako je definirana na kartici **Alternativne mjerne jedinice** artikla. Koristi se mjerna jedinica označena kao zadana (**Default**) pod uvjetom da su u parametrima dokumenta uključene opcije **Upravljanje dvostrukim mjernim jedinicama** i **Automatsko predlaganje alternativne mjerne jedinice**.

**Alternativna količina**: prikazuje vrijednost alternativne mjerne jedinice. Izračunava se množenjem ili dijeljenjem osnovne količine artikla s faktorom konverzije definiranim na kartici **Alternativne mjerne jedinice** artikla.

**Cijena po alternativnoj mjernoj jedinici**: ova oznaka određuje da se za obračun stavke koristi alternativna količina artikla. Iznos stavke tada se izračunava na temelju cijene i alternativne količine.

**Skladište, predložak i lokacija**: ponuđeno je skladište i uzrok koji će se automatski pojaviti prilikom pražnjenja artikala iz skladišta. Podaci su preuzeti iz tabele *Tipovi računa*;  

**Artikl**: prikazuje odabrani artikl;     

**Projekt**: to je projekt povezan s dokumentom ili se može dodijeliti uz pomoć pomoći; 

**Pravo naplate PDV-a**: ako je postavljena, PDV na poklon bit će uzet u obzir za ukupni račun;   

**Detaljne deklaracije**: sadrži eventualnu [izjavu o namjeri ](/docs/finance-area/declarations/declarations/intent-declaration) klijenta;

**Referenca naloga**: odnosi se na narudžbu iz koje je stvoren račun;

**Marka**: prikazuje marku artikla, preuzetu iz njegove ankete ili iz cjenika artikla;

**Bilješke**: omogućuje unos bilješki za svaki artikl;

### 3.3 Trgovački predstavnici

**Trgovački predstavnici**: predstavnik povezan s odgovarajućom provizijom za odabrani artikl; podatak odgovara onome što je navedeno u *Zaglavlje > kartica Trgovački predstavnici*. Postotak se može promijeniti. 

#### Poseban gumb* 
> **Izbriši trgovačkog predstavnika**: omogućuje brisanje povezanog predstavnika s artiklom.

### 3.4 Lotovi i serijski brojevi

U oba prikaza mogu se unijeti lotovi i serijski brojevi koji se moraju isprazniti iz skladišta, a koji su povezani s artiklom u *Šifarnik Artikla > kartici [Lotovi i serijski brojevi](/docs/erp-home/registers/items/create-new-item)* ili ih se može unijeti ručno. 

Ova operacija uvjetovana je prisustvom serija i serijskih brojeva u skladištu.  

:::info Zapamti
Ako je u **Početnim parametrima skladišta** opcija **Obavezni lotovi i serijski brojevi** isključena, dokument će biti moguće spremiti bez unosa lotova i serijskih brojeva.
Također, ako je u kartici artikla definirana **metoda izdavanja lotova** kao:
- **FIFO**
- **Prema datumu isteka**
prilikom skladišne registracije računa lotovi će se automatski predložiti, ako prethodno nisu ručno uneseni.
:::

Ako artikl ne podrazumijeva upravljanje lotovima/serijskim brojevima, ovaj će se *tab* onemogućiti.  

#### Posebni gumbi
> **Izbriši lot**: omogućuje brisanje odabranog retka lota.     
> **Izbriši serijski broj**: omogućuje brisanje odabranog retka serijskog broja.

### 3.5 Analitika 

Može sadržavati informacije o troškovima/odbitku na koje su raspoređeni iznosi artikala. 

Ovi se podaci mogu unijeti ručno ili *automatski* (u slučaju da su centri troškova/profita unaprijed uneseni u *šifarnik kontakata*, *šifarnik artikla* ili *kontni plan*). 

### 3.6 Dodatni podaci 

Prikazuje se popis **Dodatnih podataka** povezanih s artiklom, s mogućnošću dodavanja novih dodatnih podataka koji su korisni samo za trenutni dokument, s mogućnošću, putem odgovarajućeg okvira, odabira dodatnih podataka koje treba ispisati. 

### 3.7 Priloženi dokumenti 

Prikazuje se pojedinosti o eventualnom **Priloženom dokumentu** (naziv, vrsta dokumenta, eventualne napomene, naše/vaše referencije). Za upute o tome kako priložiti dokument, pogledajte članak u **Priloženim dokumentima**.

### 3.8 Odjeljak o vrijednostima  

Donji desni odjeljak sadrži sažetak troškova koji doprinose formiranju konačne cijene odabranog artikla u mreži artikala. 

**Jedinična cijena**: vrijednost polja *Cijena*; 

**Količina**: vrijednost polja *Količina*; 

**Iznos u retku**: Cijena artikla * *Količina artikla*; 

**Ukupno rabat**: zbroj popusta na artiklu, uključujući i konačne popuste; 

**Osnovica**: Brutalni iznos - Popusti; 

**Porez**: Osnovica * stopa PDV-a na artiklu; 

**Ukupno**: Osnovica + Porez.

## **4. Sažeci**

U različitim dijelovima ove kartice prikazane su glavne informacije cijelog dokumenta i neki specifični gumbi. 

### 4.1 PDV/Dospijeća 

#### Sažetak PDV-a

Prikazan je pregled PDV-a dokumenta, za svaki PDV.

#### Pregled dospijeća plaćanja

Prikazuje pregled rokova dokumenta, za svaki *tip i način plaćanja*.

**Broj**: progresivna vrijednost retka.    
**Plaćanje**: predstavlja alfanumerički kod *Način plaćanja preuzet iz zaglavlja dokumenta > kartica Plaćanja*.
**Iznos**: izračunati iznos roka. Može se ručno postaviti, u kojem slučaju se automatski aktivira sljedeća oznaka *Ručno uređivanje*. (Automatski se provjeravaju i upozorenja o podudarnosti vrijednosti rokova i ukupnog računa)
**Datum dospijeća**: izračunati datum dospijeća. Može se ručno postaviti, u kojem slučaju se automatski aktivira sljedeća oznaka Ručno uređivanje.
**Troškovi naplate**: polje u kojem su prikazani izračunati troškovi inkasa.
**PDV**: koji se primjenjuje (može se postaviti i ručno)
**Predložak plaćanja**: moguće je izravno unijeti u račun računsku sljedivost koja rezultira automatskim zapisom naplate/plaćanja. Obratiti pažnju na predložak računske sljedivosti jer će koristiti prisutne račune čak i bez podračuna, zbog čega postoji sljedeće polje.
**Račun s podračunom kupca/dobavljača** koji se koristi za naplatu/plaćanje (npr. gotovina ili banka) roka, što zamjenjuje prisutni račun u računskoj kauzalnosti plaćanja (ili inkasa)
**Primka broj**: eventualni broj računa za primljene novce
**Jed.**: aktivira računovodstvo zatvaranja rokova u automatskom zapisu
**Vrsta popusta**: vrsta financijskog popusta
**Dospjela vrijednost**: vrijednost financijskog popusta po naplati
**Detaljne deklaracije**: To je referenca na izjavu namjere. PDV primijenjen na troškove inkasa može uvijek biti PDV plafond, pa je stoga potrebno moći unijeti i povezanu izjavu namjere (kao kod redaka stavki i troškova)

**ULAZNI RAČUNI**:

**Znak**: samo rokovi s ovom oznakom kasnije se obrađuju u plaćanju s postavljenim računom i računom.
**Modeli referentnog plaćanja**: model stvaranja kodova plaćanja. U nekim stranim lokalizacijama svaki rok u računu ima kod dodijeljen od strane fakturanta: ovaj se kod strukturira prema određenim specifičnim modelima (tablica MB_PaymentReferenceModels), kako bi se mogao izgraditi kod pomoću algoritma.
**Šifre modela plaćanja**: ovo je šifra (strukturirana kao prethodni model) koju treba navesti u stavci, a zatim u plaćanjima koje se šalju banci, kako bi ona obavijestila korisnika o tome koji je rok plaćen (i tako automatizirala uvoz iz bankovnih transakcija s zatvaranjem stavke). Odatle se ispunjava unutar stavke i u Sepa datoteci.
**Ograničenje datuma plaćanja unaprijed**: Ovo je polje predviđeno u SDI formatu računa, rok do kojeg se može primijeniti financijski popust.
Općenito, rokovi dospijeća ponovno se izračunavaju ako se promijeni plaćanje u zaglavlju dokumenta. Slučajevi u kojima se rokovi dospijeća ne ažuriraju ako se promijeni plaćanje u zaglavlju su sljedeći:
- Kada je račun povezan s SDI poveznicom i ima status različit od Neispitano, Kontrolirano, Otkazano, Isključeno;  
- Kada postoji barem jedan rok dospijeća s aktivnom značajkom *Ručna izmjena*;  
- Kada je račun povezan s jednim ili više efektima ili povezan s linijom FSAdvanceInvoiceMaturity;     
- Kada postoji popust na rok dospijeća koji ne dolazi iz plaćanja;   
- Kada je ukupan iznos u mreži Plaćanja veći od osnovice računa;   
- Ili ako su računi mijenjani izvan Fluentisa.  

### 4.2 Trgovački predstavnici/Rabati/Naknade

#### Konačni popusti artikala 

Mogu se unijeti samo konačni popusti izražena u postotku, koja će se primijeniti na ukupni iznos dokumenta. 
Sniženja unesena u ovom dijelu izračunavaju se i prikazuju za svaki artikl u dokumentu, u *kartici Artikli > kartici Popusti/Cjenici*.

**Vrsta/Opis popusta**: omogućuje odabir vrsta popusta (predefinirane u *Vrstama sniženja*), dodjeljujući vrsti prioritet primjene popusta i određujući je li popust na osnovicu ili se kumulativno primjenjuje s prethodno primijenjenim popustima.  
**Prioritet**: predstavlja prioritet primjene popusta; sortiranje se vrši uzlazno.  
**Kaskada/Iznos**: određuje da li se popust izračunava na (*cijena x količina*) - (*prethodno izračunati popusti*) ili (*cijena x količina*).
**Vrijednost**: numerička vrijednost završnog popusta koji se primjenjuje.  

#### Konačni troškovi/popusti/doplate

Prikazani su troškovi uneseni u šifarnik kontakta, u kartici *Troškovi/Popusti*.
Također postoji mogućnost unosa troškova koji se odnose samo na trenutni dokument. 

**Vrsta/Opis**: omogućuje odabir vrsta troškova (predefiniranih u Vrstama troškova), dodjeljujući vrsti postotak troškova koji se primjenjuje.
**Iznos troška**: prikazuje iznos troška izražen u valuti dokumenta.
**PDV**: određuje stopu PDV-a koja će se primijeniti na uneseni trošak.   
**Postotak/Vrijednost**: polje koje određuje treba li se troškovi izračunati postotkom ili unaprijed određenom novčanom vrijednošću.   
**Postotak**: numerička vrijednost postotka troškova. 

#### Ostala polja

**Završne napomene**: opisno polje koje korisnik može popuniti uz  *Pomoć za šifrirane napomene*.

### 4.3 Ukupni iznos dokumenta 

**Iznos stavki bez popusta**: predstavlja zbroj vrijednosti svih artikala; 

**Zaduženje**: predstavlja vrijednost eventualne akontacije primljene za dokument;  

**Poklonjeni iznos**: predstavlja iznos artikala tipa poklona unesenih u kartici *Artikli*. 

**Ukupni primijenjeni rabati**: predstavlja ukupnu vrijednost primijenjenih popusta na artikle, ali bez konačnih popusta. 

**Neto iznos artikala**: *Bruto iznos artikala - Ukupni primijenjeni popusti*;  

**Ukupno konačnih rabata**: predstavlja vrijednost konačnih popusta izraženih u postotku na bruto iznos artikala;   

**Iznos umanjen za ukupni popustima**: *Neto iznos artikala - Ukupno konačnih rabata*;  

**Ukupno za stavke troškova**: predstavlja vrijednost troškova unesenih u prethodnoj kartici kao artikli *Vrste troškova*;   

**Troškovi naplate**: predstavlja zbroj troškova naplate unesenih u kartici *Troškovi*;  

**Trošak ovjere**: predstavlja zbroj troškova pečata unesenih u kartici *Troškovi*;     

**Ukupno troškovi/popusti/doplate**: prikazuje ukupan iznos svih troškova evidentiranih u tablici **Troškovi**.

**Porezna osnovica**: izračunava se prema formuli: `Neto iznos artikala − Ukupno konačnih rabata + ukupni troškovi artikala + Ukupno troškovi/popusti/doplate`

**Porez**: prikazuje zbroj svih vrijednosti sadržanih u PDV sažecima dokumenta.

**Ukupno**: izračunava se prema formuli: `Porezna osnovica + PDV`

**Ukupan postotak popusta**: omogućuje unos dodatnog završnog popusta izraženog u postotku. Unosom vrijednosti automatski se popunjava i sljedeće polje.

**Ukupna vrijednost popusta**: omogućuje unos dodatnog završnog popusta u novčanom iznosu.

**Zaokruživanje**: omogućuje dodatno zaokruživanje konačnog iznosa dokumenta.

**Ukupno za platiti**: prikazuje konačan iznos dokumenta nakon primjene svih obračuna, popusta, troškova i zaokruživanja.

## **5. Prijevoz**

Ako se radi o **popratnom računu**, potrebno je popuniti karticu **Transport**.
Dostupna polja su:
- **Primatelj**: automatski se predlaže zadani primatelj definiran na kartici kupca. Ako nije definiran, koristi se adresa kupca.
- **Odredište**: automatski se predlaže zadano odredište primatelja ako je definirano na kartici kupca.
- **Broj praćenja (Tracking Number)**: slobodno polje za unos broja za praćenje pošiljke.

**Volumen**: prikazuje se ukupni volumen koji je rezultat zbroja volumena artikla (vrijednost se preuzima iz *Šifarnika artikla > Težine/dimenzije*), kada se jedinica mjere volumena artikla podudara s onom unesenom u parametrima računa. Razmatraju se samo artikli koji imaju ovaj polje ispunjeno;

**Neto težina**: prikazuje se ukupna neto težina koja je rezultat zbroja težina artikala (vrijednost se preuzima iz *Šifarnika artikla > Težine/dimenzije*), kada se jedinica mjere težine artikala podudara s onom unesenom u parametrima računa. Razmatraju se samo artikli koji imaju ovaj polje ispunjeno;

**Bruto težina**: prikazuje se ukupna bruto težina koja je rezultat zbroja težina artikala (vrijednost se preuzima iz *Šifarnika artikla > Težine/dimenzije*), kada se jedinica mjere težine artikala podudara s onom unesenom u parametrima računa. Razmatraju se samo artikli koji imaju ovaj polje ispunjeno;

**Broj paketa**: prikazuje se broj paketa, na temelju podataka unesenih u šifarniku artikala, u kartici Težine/dimenzije, u poljima *Artikli prisutni u paketu* ili *paket za oblikovanje artikla*. Razmatraju se samo artikli koji imaju ovo polje ispunjeno.

**Vrijednost ručno promijenjena**: uključivanjem ove oznake omogućuje se ručna izmjena polja **Volumen**, **Neto težina**, **Bruto težina** i **Broj paketa**, koja se inače automatski preuzimaju iz kartice artikla i nije ih moguće mijenjati.

**Prijevoz**: potrebno je odabrati subjekt odgovoran za prijevoz označavanjem jedne od opcija:
  - **Pošiljatelj**
  - **Primatelj**
  - **Prijevoznik**

Ovisno o odabranoj opciji, dostupna polja u nastavku obrasca mijenjaju se:
  - ako je prijevoz na teret **pošiljatelja**, moguće je unijeti:
    - registarsku oznaku vozila
    - prikolicu
    - datum i vrijeme početka prijevoza

  - ako je prijevoz na teret **primatelja**, moguće je unijeti:
    - registarsku oznaku vozila
    - prikolicu
    - datum i vrijeme početka prijevoza

  - ako je prijevoz na teret **prijevoznika**, dostupna su sljedeća polja:
    - kartica prijevoznika
    - registarska oznaka vozila
    - prikolica
    - datum i vrijeme prijevoza
    - naručitelj prijevoza
    - utovarivač
    - vlasnik robe
    - mjesto utovara

Napomena: Za ponovno izračunavanje vrijednosti prijevoza u sažetku dokumenta potrebno je postaviti oznaku **Ponovno izračunavanje prijevoza** u parametrima povezanog dokumenta.

## 6. Povezani dokumenti

Na ovoj kartici moguće je pregledavati dokumente povezane s trenutnim dokumentom.
Dokumente je moguće priložiti na dva načina:
- korištenjem gumba **Dokumenti** na alatnoj traci, gdje je moguće odabrati već postojeći dokument evidentiran u Fluentisu ili kreirati novi dokument za prilaganje
- izravno unutar tablice, desnim klikom miša i odabirom opcije **Priloži datoteku**, čime se otvara postupak kreiranja novog dokumenta za prilaganje