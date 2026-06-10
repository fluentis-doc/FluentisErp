---
title: Kreiranje izlaznog (prodajnog) računa
sidebar_position: 1
---

Obrazac se otvara putem putanja:

1. **Prodaja > Izlazni računi > Novi račun**   
ili   
2. putem dugmeta **Novo** koje se nalazi u obrascu [Pretraga izlaznih računa](/docs/sales/sales-invoices/invoicing/search-sales-invoices).

:::note NAPOMENA
U računu se automatski predlažu trenutni **Datum** i **Godina**, ali vrednosti se mogu promeniti.
:::

## **1. Obavezni podaci**

Za nastavak kreiranja dokumenta, korisnik mora uneti *obavezna* polja:

- **Tip računa** predefinisan u *Konfiguracija > Tabele > Prodaja > [Tipovi izlaznih računa](/docs/configurations/tables/sales/invoices-type)*.

- **Broj** svakom dokumentu dodeljuje se broj prema numeraciji koju je korisnik definisao u tabeli [Numeracije](/docs/configurations/tables/fluentis-numerations) i za tip dokumenta koji sadrži numeraciju.

- **Kupac**, korišćenjem [pomoćnog polja](/docs/guide/common/operations-with-data/manual-entry-or-help-and-data-selection) ili [direktnim](/docs/guide/common/operations-with-data/manual-entry-or-help-and-data-selection) unosom podataka.

Nastavlja se sa kreiranjem unošenjem najmanje obaveznih podataka na svakoj od sledećih kartica (*tabova*).

## **2. Zaglavlje**

Nakon što su odabrani obavezni podaci u gornjem delu, korisnik može nastaviti unos sledećih podataka:

- [ručni unos](/docs/guide/common/operations-with-data/manual-entry-or-help-and-data-selection)  
- [pomoćno polje](/docs/guide/common/operations-with-data/manual-entry-or-help-and-data-selection)

- automatski unos: Na osnovu odabrane procedure, aplikacija može **automatski** popuniti određena polja.

:::note NAPOMENA
Ako se dokument kreira *automatski*, ovi podaci se preuzimaju iz *izvornog dokumenta* iz kog je generisan.
:::

Unošenjem **Kupca** automatski se *predlažu* svi specifični podaci u **Zaglavlju**, prema prethodno definisanim podacima u [Šifarniku kupaca](/docs/erp-home/registers/contacts/create-new-contact/accounting-data/accounting-data-intro), u odgovarajućim poljima za adresu i u sledećim *sekcijama*:

- **Valuta**: [Valuta](/docs/guide/common/glossary/glossary-intro#currency), [Kurs](/docs/guide/common/glossary/glossary-intro#currency-exchange), [Datum valute](/docs/guide/common/glossary/glossary-intro#currency-date).
- **Država**: [Država](/docs/guide/common/glossary/glossary-intro#country), [Jezik](/docs/guide/common/glossary/glossary-intro#language), [Zona](/docs/guide/common/glossary/glossary-intro#zone)  
- **Pošiljka**: [Pošiljka](/docs/guide/common/glossary/glossary-intro#shipment), [Paritet](/docs/guide/common/glossary/glossary-intro#carriage), [Pakovanje](/docs/guide/common/glossary/glossary-intro#packing), [Cenovnik](/docs/guide/common/glossary/glossary-intro#sales-price-list) i njegov [period važenja](/docs/guide/common/glossary/glossary-intro#validity-date)  
- ostala polja koja se predlažu izborom kupca, ali se mogu menjati: [Odredište](/docs/guide/common/glossary/glossary-intro#destination), [Primalac](/docs/guide/common/glossary/glossary-intro#recipient).

#### Ostala opciona polja

**Status računa**: prilikom kreiranja, račun nema aktivnih oznaka.  
Ova sekcija uključuje sledeća polja:  
> **Odštampano** aktivira se kada se račun odštampa, označava da je račun odštampan.    
> **Proknjiženo**: automatski se označava kada se račun proknjiži.  
> **Stornirano**: aktivna oznaka omogućava storno računa.   
> **Razduženo**: označava da je račun razdužen iz skladišta, ručno ili *automatski* putem procedure *automatskog razduženja*.

:::note NAPOMENA
U slučaju računa koji je kreiran iz već obrađenog transportnog dokumenta, postoji opšti parametar VE-PurchaseInvoices_VerifyLoadStatusDDT koji blokira oznaku *Preuzeto* čak i na računu.
:::

:::important VAŽNO
Oznake se mogu ukloniti procedurom **Povrati** operacije.
:::

**Napomene kupca**: predlaže se informacija uneta na kartici kupca, dok će se u slučaju automatskog kreiranja iz narudžbenice/otpremnice preuzeti isti podaci iz odgovarajućeg polja izvornog dokumenta.

Podatke je moguće uneti i ručno. Desnim klikom miša moguće je otvoriti formu za unos dužeg teksta napomene; ukoliko polje sadrži vrednost, promeniće se boja pozadine polja.

**Naša referenca/vaša referenca**: u ovim poljima se obično navode interna referenca i referenca kupca za određeni račun.  
U slučaju kada se račun generiše putem:     
> *Kreiranja iz narudžbe kupca*, ova polja će biti popunjena informacijama koje su navedene u narudžbini kupca. Ovaj prenos važi samo za račun kreiran preuzimanjem podataka iz jedne narudžbine;  
> *Kreiranja iz otpremnice*, ova polja će biti popunjena informacijama koje su navedene u otpremnici. Ovaj prenos važi samo za račun kreiran preuzimanjem podataka iz jedne otpremnice.

**Početna napomena računa**: mogu se odabrati napomene koje su prethodno unete u tabelu istog naziva koja se nalazi na putanji *Konfiguracija > Korisni alati > Upravljanje šifrovanim napomenama*. Korisnik treba dvaput da klikne na polje **Početna napomena** kako bi otvorio pomoć *šifrovanih napomena* i odabrao podatke, ili desnim klikom miša može otvoriti prozor za unos veoma dugog teksta napomene. Ako polje sadrži vrednost, promeniće se boja pozadine polja.

U slučaju *Kreiranja iz narudžbenice*, informacije koje su bile navedene u narudžbini kupca automatski će biti ponovo prikazane u polju **Početna napomena**.

**Operater**: omogućava unos korisnika koji kreira dokument. Zaposleni se unapred unose u tabelu *Zaposleni* koja se nalazi na putanji *Početna strana > Zaposleni*. Podatak postaje **obavezan** ukoliko je odgovarajuća opcija uključena u parametrima dokumenta.

**Projekat**: korišćenjem [pomoći za unos](/docs/guide/common/operations-with-data/manual-entry-or-help-and-data-selection) dokument se može povezati sa projektom. Ovo povezivanje funkcioniše samo na nivou zaglavlja dokumenta.

**Audit Trail**: kao i kod svih dokumenata, ova sekcija prikazuje datum kreiranja dokumenta zajedno sa operaterom koji ga je kreirao, kao i datum poslednje izmene dokumenta zajedno sa operaterom koji je izvršio izmenu.

**Vrsta reference**: ukoliko je račun nastao iz drugog računa ili iz dokumenta tipa **Storno**, ovde se prikazuje vrsta izvornog dokumenta.

**Referenca računa**: ukoliko je račun kreiran iz drugog računa, u ovom polju se prikazuju broj i datum izvornog dokumenta.

**SDI referenca**: prikazuje identifikacione podatke računa koji je poslat putem SDI sistema.

**Knjiženje**: sadrži identifikator računovodstvenog knjiženja ukoliko je račun već proknjižen.

**Transport**: prikazuju se podaci o prevozniku, ambalaži i vozilu definisani na kartici kupca. Podaci su dostupni za izmenu.

**Cenovnik**: automatski se predlaže podrazumevani cenovnik definisan na kartici **Cenovnici** u kartici kupca. Taj cenovnik će se koristiti za dokument, ali ga je moguće promeniti.

**Klasa popusta**: prikazuje podrazumevanu klasu popusta definisanu na kartici **Cenovnici** za izabrani cenovnik.

**Datum obračuna**: datum koji se koristi za obračun rokova dospeća plaćanja.

**Status dokumenta**: ovaj podatak se odnosi na tabelu *Statusi dokumenata* i mora ga uneti korisnik. Može se koristiti za procedure replikacije poslovanja, instalirane za upravljanje poslovnicama sa prodajnim mestima.

**EDI**: predstavlja datum prenosa dokumenta iz EDI procedura.

**Primeni od**: predstavlja početni datum za obračun datuma dospeća plaćanja.

#### Posebna dugmad

> **Izvršenje iz narudžbe kupca**: pokreće proceduru za kreiranje računa iz narudžbine kupca. Aktivira se kada su uneti kupac i tip računa.  
> **Izvršenje otpremnice**: pokreće proceduru za kreiranje računa iz otpremnice. Aktivira se kada su uneti kupac i tip računa.  
> **Automatsko razduženje**: ova procedura omogućava razduženje zaliha dokumenta ukoliko je označen kao Odštampan.  
> **Pomoć primaoci/odredište**: omogućava pregled i unos primaoca/odredišta iz evidencije kupaca.  
> **Ubaci agenta u stavke**: dodeljuje predstavnika unetog u zaglavlju svim stavkama dokumenta, na kartici Predstavnici.  
> **Zameni CIG/CUP u stavkama**: dodeljuje kodove unete u zaglavlju svim stavkama dokumenta, u odgovarajućem padajućem meniju.  
> **Otkaži plaćanja**: briše plaćanja iz zaglavlja.  
> **Registar SDI dokumenata**: otvara SDI dokument koji se odnosi na račun nakon što dobije status Kontrolisano.

### 2.1 Plaćanja

**Uslovi plaćanja** automatski se preuzimaju iz *Šifarnik kupaca > kartica Plaćanje* i korisnik ih može menjati ili brisati.

Ako je uz **Vrstu plaćanja** povezan finansijski popust, iznos popusta uzima se u obzir samo u računovodstvenom smislu, odnosno u rokovima plaćanja dokumenta, a ne u ukupnom iznosu otpremnice.

Ako dokument potiče iz:

- Narudžbine kupca, vrste plaćanja mogu biti preuzete iz prvog dokumenta (narudžbine), iz podataka kupca ili se mogu prikazati u obrascu sva plaćanja dokumenata za izvršenje, pri čemu korisnik bira željeni način plaćanja.

- Otpremnice, plaćanja mogu biti preuzeta sa kartice kupca ili iz pojedinačnih plaćanja prisutnih na svakoj otpremnici. U tom slučaju će se na računu prikazati vrsta plaćanja sa istim iznosom i PDV-om kao na otpremnici, a biće dodat i novi red za sve stavke koje nisu nastale iz otpremnice.

### 2.2 Popusti

Predlažu se samo unapred definisani popusti iz *Šifarnik kupaca > kartica Popusti*, a ne oni dodeljeni uslovima plaćanja ili pojedinačnim artiklima. Korisnik ih može menjati ili brisati.

:::info Zapamti
Za korišćenje popusta obračunatih na poresku osnovicu potrebno je na nivou baze podataka aktivirati opšti parametar: `GEN-GlobalSettings_CalculateDiscountOnAmount`
za odgovarajuće društvo. Ako parametar nije aktivan, popusti na poresku osnovicu automatski će biti pretvoreni u kaskadne popuste.
:::

Popusti predloženi u zaglavlju dokumenta pojaviće se na svakom novom redu stavke u dokumentu.

Nakon što se unesu nove stavke, ukoliko se u zaglavlju unese novi popust, on neće biti primenjen na već postojeće stavke.

#### Posebno dugme

> **Obriši podrazumevani rabat**: koristi se za brisanje izabranih redova popusta.

### 2.3 Trgovački predstavnici

Prikazuje šifru agenta i njegovu proviziju za svaki red artikla. Šifra i procenat provizije definisani su u *Šifarnik kupaca > kartica Predstavnici*.

Ako provizija nije povezana sa kupcem na njegovoj kartici, agent se ipak mora uneti, ali sa praznom vrednošću provizije (**NULL**).
Ako bi provizija bila postavljena na **0 %**, to bi značilo da je agent povezan, ali nema pravo na proviziju.

U slučaju generisanja otpremnice iz narudžbine, ovi podaci će se naravno preneti identično kao u narudžbini kupca.

Ova sekcija će biti ponovljena za svaki red artikla u odgovarajućoj sekciji Trgovački predstavnici.

### 2.4 Dodatni podaci

Ovde se prikazuju informacije unete u *Šifarnik subjekata > kartica Dodatni podaci*, samo ukoliko postoje podrazumevani podaci.

### Procedure zaglavlja:

### Elektronski račun

Ova sekcija, dostupna na alatnoj traci računa, omogućava upravljanje generisanjem i slanjem elektronskih računa putem SDI sistema. Procedura se zasniva na promeni statusa dokumenta. Dostupni statusi su:

- **Neproveren**: početni status dokumenta pre slanja u SDI sistem. Dokument je kreiran, ali još nisu izvršene nikakve aktivnosti vezane za elektronski račun.
  Sledeći mogući statusi:
  - Kontrolisan
  - Otkazan
  - Isključen

- **Kontrolisan**: Fluentis je izvršio proveru dokumenta. Ako nedostaju podaci potrebni za komunikaciju sa SDI sistemom, korisnik će biti obavešten. Za dokumente u ovom statusu dostupno je dugme **Registar elektronskih dokumenata**, gde je moguće pregledati istoriju dokumenta i eventualne XML datoteke.
Sledeći mogući statusi:
  - Generisan

- **Generisan**: XML datoteka elektronskog računa je kreirana. Od ovog trenutka moguće je:
  - poslati datoteku u Fluentis Business Hub
  - preuzeti XML datoteku za spoljne sisteme
  Sledeći mogući statusi:
  - Potpisan
  - Spreman za slanje

- **Potpisan**: dokument je elektronski potpisan korišćenjem CAdES/XAdES sertifikata i ponovo učitan u Fluentis u novom formatu.
  Sledeći mogući statusi:
  - Spreman za slanje

- **Za slanje**: koristi se kada je Fluentis Business Hub ispravno konfigurisan.
  Dokument se dodaje na listu dokumenata koje BizLink treba da obradi i pošalje SDI sistemu.
  U ovom slučaju nisu potrebne dodatne ručne aktivnosti jer se slanje obavlja automatski.

### Izvršenje otpremnice

U zaglavlju računa pritiskom na dugme **Izvršenje otpremnice** otvara se obrazac za pretragu i izbor otpremnica povezanih sa kupcem dokumenta.

Ovom procedurom moguće je kreirati izlazni račun na osnovu jedne ili više otpremnica. Prilikom prenosa moguće je:

- fakturisati celu otpremnicu
- fakturisati pojedinačne stavke otpremnice
- delimično fakturisati pojedinačnu stavku

#### Preduslovi

Za korišćenje procedure moraju biti ispunjeni sledeći uslovi:

- kupac na otpremnici mora biti isti kao kupac na računu
- otpremnica koja se fakturiše mora imati uključenu oznaku **Odštampano**

:::info Zapamti
Napomene unete u zaglavlju otpremnice, kao što su:

- Naša/Vaša referenca
- Referenca na broj narudžbine kupca
- Početne napomene

prenose se u zaglavlje računa samo ako se podaci preuzimaju iz jedne otpremnice.
:::

#### Postupak

Filteri kupca i valute automatski se popunjavaju prema podacima izabranog računa.

Nakon postavljanja željenih filtera i pokretanja pretrage, sistem prikazuje:
- sve odštampane otpremnice
- potvrđene i još nefakturisane otpremnice
- delimično fakturisane otpremnice

Za svaku otpremnicu prikazuje se jedan red u rezultatima pretrage.

:::note Napomena
Procedura preuzima sve podatke sa otpremnice.
Zbog toga će se primenjivati uslovi prodaje definisani na otpremnici čak i ako su u međuvremenu promenjeni (na primer promene cenovnika).
:::

:::note Napomena
Redovi tipa **Napomena** uvek će biti vidljivi, čak i ako su već fakturisani, sve dok nisu fakturisani svi ostali redovi dokumenta.
:::

#### Mogućnosti izbora

Korisnik može:
1. izabrati celu otpremnicu označavanjem polja na početku reda
2. izabrati samo određene artikle iz otpremnice označavanjem pojedinačnih redova artikala
3. izabrati delimične količine artikala

   U tom slučaju potrebno je ručno uneti količinu za fakturisanje.

Nakon završetka izbora potrebno je kliknuti **Prenos**, čime se svi podaci sa izabrane otpremnice prenose na račun.

#### Dostupne funkcije

- **Pretraži**: pretražuje dostupne dokumente.
- **Prenos**: prenosi podatke izabranog dokumenta u novi račun.
- **Proširi**: prikazuje sve stavke sadržane u izabranoj otpremnici.
- **Sažmi**: prikazuje samo zaglavlja otpremnica i sakriva njihove stavke.
- **Označi sve**: označava sve stavke na listi.
- **Poništi izbor**: uklanja oznake sa svih stavki na listi.

### Izvršenje iz narudžbine kupca

U zaglavlju računa, pritiskom na dugme **Izvršenje iz narudžbine kupca** otvoriće se forma gde je moguće filtrirati narudžbine koje se odnose na kupca iz dokumenta.

Kroz ovu proceduru moguće je kreirati račun izvršenjem odgovarajuće narudžbine kupca. Moguće je uneti artikle unutar računa, potpuno ili delimično izvršavajući celu narudžbinu ili stavku.

Da bi se koristila ova procedura, potrebno je ispuniti sledeće početne uslove:  
 - kupac narudžbine mora biti isti kao na računu;
 - narudžbina koju želite da izvršite mora imati postavljenu oznaku *Odštampano* i *Datum potvrde narudžbine*;
 - vrste dokumenata moraju biti kompatibilne: u tabeli *Tipovi narudžbina* tip narudžbine koji želite da izvršite mora imati postavljen odgovarajući tip računa, dok u tabeli *Tipovi računa* mora biti prisutna oznaka za *Narudžbinu* (koja označava da račun nastaje iz narudžbine);

Zatim je potrebno postaviti u zaglavlju novog računa *Tip računa* koji želite da kreirate (koji mora odgovarati onom postavljenom u tabeli *Tipovi narudžbina*) i *Kupca*. Nakon što su ovi podaci uneti, potrebno je kliknuti na dugme *Izvršenje narudžbina* kako biste otvorili obrazac za izvršenje.

#### Postupak  

Filteri za kupca i valutu automatski će se popuniti prema izabranom kupcu na računu.

Nakon što su svi željeni *Filteri* postavljeni, klikom na dugme *Pretraži* prikazaće se u mreži po jedan red za svaku narudžbinu koja je odštampana, potvrđena i neizvršena ili delimično izvršena.

:::note NAPOMENA
Procedura preuzima sve podatke prisutne na narudžbini i kao rezultat će biti primenjeni uslovi prodaje koji su prisutni na narudžbini, čak i ako su se ti uslovi promenili (npr. ažuriranje cenovnika).
:::

U mreži rezultata, korisnik ima mogućnost:
 1. da izabere *celu narudžbinu*. Da biste to uradili, dovoljno je označiti polje na početku reda narudžbine.
 2. da izabere samo *neke* od ponuđenih *artikala*. Da biste to uradili, dovoljno je označiti polje na početku reda artikla.
 3. da izabere samo neke *artikle*, ali samo za *određenu količinu*. U tom slučaju, količinu za izvršenje potrebno je promeniti.

Za završetak postupka, potrebno je kliknuti na dugme *Prenos*, koje će preuzeti sve podatke prisutne na narudžbini i preneti ih na račun.

#### Posebna dugmad

> **Pretraži**: omogućava pretragu narudžbina kupca.   
> **Prenos**: omogućava prenos podataka izabrane narudžbine u novi račun.   
> **Prinudno izvršenje narudžbine**: omogućava prinudno izvršenje narudžbine.  
> **Proširi**: prikazuje sve stavke sadržane u izabranoj narudžbini.  
> **Sažmi**: omogućava sažimanje prikaza redova artikala i prikazivanje samo redova narudžbine.   
> **Označi sve**: omogućava izbor svih artikala sa liste.  
> **Poništi izbor**: omogućava uklanjanje izbora sa svih artikala na listi.  

### Automatsko razduženje skladišta

Druga procedura dostupna u zaglavlju računa je **Automatsko razduženje skladišta**.

Dugme postaje dostupno kada:
- dokument ima status **Odštampano**
- račun nije povezan sa otpremnicom koja je već razdužena iz skladišta

Ako je u parametrima računa uključena opcija automatskog razduženja, procedura će se pokrenuti automatski nakon štampanja dokumenta.

Tokom izvršavanja sistem proverava:
- postojanje skladišta definisanog na stavkama računa
- postojanje skladišne knjižne šeme
- prisustvo lotova i serijskih brojeva ako su obavezni

Ako neka od provera nije uspešna, korisnik će biti obavešten odgovarajućom porukom o grešci.

Ako se procedura uspešno završi:
- kreira se skladišna evidencija koja registruje kretanje artikala
- u zaglavlju dokumenta automatski se uključuje oznaka **Istovareno**

## **3. Artikli**

U ovoj kartici unose se svi artikli sa pripadajućim podacima.

Za sve što nije detaljno opisano u ovom dokumentu o zajedničkom radu obrazaca, pogledajte sledeći link [Funkcionalnosti, dugmad i zajednička polja](/docs/guide/common).

Podaci se unose [ručno](/docs/guide/common/operations-with-data/manual-entry-or-help-and-data-selection), uz [pomoćno polje](/docs/guide/common/operations-with-data/manual-entry-or-help-and-data-selection) ili ih mogu predložiti povezane procedure.

Za unos **Novog artikla** u mrežu dovoljno je postaviti se na red kako biste popunili različite podatke ili koristiti dugme **Novo** prisutno u gornjem meniju.

### Obavezni podaci

**Red**: ovo polje će se automatski popunjavati rednim unosom podataka u red.

**Tip reda**: pruža mogućnost izbora, iz padajućeg menija, artikala sa različitim karakteristikama.

:::note NAPOMENA
Ako se krene direktno sa unosom artikla, njegova *klasa*, *šifra* i *tip reda* - *Šifrovani artikl* automatski će biti uneti.
:::

> **Artikl sa klasom**: to su artikli šifrovani u evidenciji i mogu se knjižiti u analitičkom računovodstvu, kao i evidentirati u skladištu.  
> **Artikl bez klase**: to su opisni artikli koji se mogu knjižiti u analitičkom računovodstvu, ali ih nije moguće knjižiti u skladištu.  
> **Trošak**: to su šifrovani ili nešifrovani artikli koji se zasebno sumiraju u pregledima dokumenata. Ako je artikl trošak šifrovan i od poreskog interesa, biće knjižen u skladištu; ako nije šifrovan ili nije od poreskog interesa, neće biti knjižen u skladištu.  
> **Napomena**: to su opisne napomene koje se pojavljuju na štampi dokumenta; ne utiču na knjiženje niti na skladište.  
> **Gratis artikl**: poklon artikl se obrađuje kao šifrovani ili nešifrovani artikl u poreske i skladišne svrhe, ali pošto je poklon, zasebno se prikazuje u pregledima dokumenta i, u zavisnosti od primene PDV-a, obračunava se iznos PDV-a poklona na teret subjekta ili ne.  
> **Račun za avans**: avansni artikl koristi se za kreiranje avansnih računa;  
> **Storno račun**: red artikla za storno avansa zatvara avansni red, a avansi se mogu izabrati pomoću pomoći za avanse. Ovi podaci mogu se automatski uneti kada se unese klasa ili serija, jer se automatski bira tip reda *šifrovani artikl*.

**Klasa/Šifra/Opis artikla**: mogu se uneti [ručno](/docs/guide/common/operations-with-data/manual-entry-or-help-and-data-selection) ili uz [pomoćno polje](/docs/guide/common/operations-with-data/manual-entry-or-help-and-data-selection) koje će predložiti sve povezane podatke unesene u Šifarnik artikala.

Nakon unosa artikla, njegov *Opis* će automatski biti preuzet iz evidencije. Ako artikl ima varijante, biće potrebno izabrati željenu varijantu iz padajućeg menija *Varijante*.

**Jedinica mere**: nudi se osnovna jedinica mere artikla, ali korisnik ima mogućnost da izabere drugu jedinicu mere.

**Količina**: predstavlja količinu osnovne jedinice mere, a podrazumevana vrednost je 1; može se uneti ručno ili preuzeti iz dokumenta koji se izvršava (npr. iz narudžbine dobavljača).

**Cena**: cena se predlaže iz cenovnika unetog u evidenciju kontakta; cenovnik koji se odnosi na sam artikl prikazan je na kartici *Popusti/Cenovnici*.

Isti dokument može sadržati artikle sa cenama preuzetim iz različitih cenovnika, ukoliko su u evidenciji subjekta povezani višestruki cenovnici u kaskadi (videti **Šifarnik kontakata**); isti dokument može sadržati artikle iz različitih cenovnika.

Dvostrukim klikom na polje **Cenovnici** (kartica *Popusti/Cenovnici*), korisnik ima mogućnost da izabere drugu ponudu osim podrazumevane, iz koje će biti preuzeta cena unetog artikla.

U odsustvu cenovnika, predložena vrednost je **prodajna cena** preuzeta iz *Šifarnik artikala > kartica [Troškovi](/docs/erp-home/registers/items/create-new-item)* ili će biti određena prema podešavanjima parametara dokumenta. Ako ni taj podatak nije dostupan, biće postavljena cena 0.

**Poreska osnovica**: u ovom polju prikazuje se jedinična cena pomnožena sa količinom artikla, umanjena za sve primenjene popuste.

**Popusti artikla**: prikazuje ukupan iznos popusta definisanih za pojedinačni artikl.

**Završni popusti artikla**: prikazuje ukupan iznos završnih popusta raspoređenih na artikl iz sekcije **Sažeci** dokumenta.

**PDV**: prioritetno se koristi stopa PDV-a definisana na kartici kupca. Ako nije definisana, predlaže se stopa PDV-a sa kartice artikla, ali korisnik može izabrati i drugu vrednost. Polje je obavezno.

**Prodajni promet**: predlaže se vrednost definisana na kartici **Opšte** u kartici artikla. Ako nije definisana, prilikom knjiženja računa koristiće se vrednost iz polja **Podrazumevani konto prihoda/rashoda protivstavke** na kartici kupca (**Računovodstveni podaci > Administracija**). Ako ni ta vrednost nije definisana, sistem će prikazati poruku o grešci.

#### Posebna dugmad

- **Ponovni obračun CONAI naknada**: ako je za dokument aktivirano CONAI praćenje, ovim dugmetom moguće je ponovo izračunati vrednosti nakon eventualnih izmena.

- **Ažuriraj CONAI podatke na kartici artikla**: ako su na kartici **CONAI materijali** za artikl promenjeni podaci kao što su merna jedinica i/ili težina, moguće ih je preneti u CONAI sekciju kartice artikla.

- **Upravljanje ambalažom**: omogućava otvaranje obrasca za upravljanje povratnom ambalažom korišćenom u dokumentu. Dugme postaje aktivno nakon snimanja dokumenta, ali pre knjiženja skladišnog izlaza.  
  Klikom na dugme otvara se odgovarajući obrazac u kojem je potrebno:
  - uneti količinu
  - izabrati red dokumenta
  - preneti izabranu ambalažu na red artikla pomoću dugmeta **Izvrši**

  U obrascu se prikazuju artikli definisani kao ambalaža i evidentirani u tabeli povratne ambalaže.

- **Ažuriranje cenovnika**: klikom na strelicu pored dugmeta dostupne su dve procedure:
  - **Ažuriraj trenutni cenovnik**: usklađuje cenu artikla u cenovniku sa eventualnom promenom cene unetom direktno na redu dokumenta.
  - **Kreiraj novi cenovnik sa novim periodom važenja**: omogućava kreiranje novog personalizovanog cenovnika za kupca dokumenta. Sistem će zatražiti datum početka i završetka važenja novog cenovnika.

- **Prikaži/Sakrij detalje**: prikazuje ili skriva dodatne kartice unutar sekcije **Artikli**.

- **Upravljanje avansima**: Fluentis omogućava upravljanje avansnim računima i njihovim storno dokumentima.

#### Kreiranje avansnog računa

Avansni računi mogu imati poseban tip dokumenta, iako se upravljanje avansima ne definiše na nivou tipa dokumenta već na nivou stavki.

Postupak predviđa kreiranje standardnog izlaznog računa pri čemu je potrebno uneti:
- tip dokumenta
- kupca
- ostale osnovne podatke zaglavlja

Nakon popunjavanja zaglavlja prelazi se na karticu **Artikli** gde se dodaje red tipa:

**Avansni račun**

Za taj red potrebno je definisati:
- opis
- PDV
- promet prodaje (konto avansa kupaca)
- eventualne dodatne podatke

Vrednost tog reda predstavlja iznos avansa. Nakon snimanja dokument je moguće odštampati, čime avansni račun postaje potvrđen. Prilikom kreiranja drugih dokumenata za istog kupca Fluentis će upozoriti korisnika da postoji otvoreni avansni račun.

#### Storno avansnog računa

Za storniranje avansnog računa potrebno je kreirati novi izlazni račun za istog kupca.

Na kartici **Artikli**, ako kupac ima bar jedan avansni račun, aktiviraće se dugme na alatnoj traci **Upravljanje avansima**.

Nakon pokretanja procedure:

1. na kartici **Storno avansa** bira se jedan ili više avansa za storniranje
2. klikom na dugme **Kreiraj storno** generiše se storno dokument
3. generisani storno prikazuje se u donjoj tabeli

Prilikom zatvaranja obrasca sistem će zatražiti potvrdu unosa nove storno vrednosti u račun. Nakon potvrde, storno stavka biće vidljiva na kartici **Artikli** prethodno kreiranog avansnog računa.

U nastavku dokumentacije opisane su dodatne kartice povezane sa ovom funkcionalnošću.

### 3.1 Popusti/Cenovnici

**Popusti**: Prikazuju se svi popusti povezani sa artiklom, svaki sa sopstvenom osnovicom i načinom dodele. Popusti se mogu preuzeti iz: podataka o kupcu, načina plaćanja dodeljenog dokumentu, cenovnika povezanog sa kupcem. Sve prikazane podatke moguće je menjati.

Ako oznaka **Ručna cena** nije uključena, cenovnik, cena i popusti na stavci izračunavaju se automatski. Ako korisnik ručno promeni bilo koji od tih podataka, oznaka **Ručna cena** automatski se aktivira.

**Vrednosti cenovnika**: Prikazuje se cenovnik iz kojeg je preuzet artikl, sa datumom početka/završetka važenja i posebnim prodajnim uslovima (npr. nivoima popusta) dodeljenim artiklu u cenovniku.

#### Posebno dugme

> **Obriši popuste**: omogućava brisanje popusta povezanog sa izabranim artiklom u gornjem redu.

### 3.2 Podaci artikla

**Varijante**: Prikazuju se varijante izabranog artikla, definisane na kartici **Varijante** u šifarniku artikala ili se mogu uneti ručno. Omogućava upravljanje varijantama artikla na način koji se razlikuje od onog ponuđenog na redu artikla. Na primer, na svakom redu artikla može se uneti ukupna količina; zatim se na istoj kartici mogu definisati različite količine za više varijanti izabranog artikla, pa čak i za varijantu i atribut, odnosno upravljanje veličinom/bojom. Ova operacija je moguća samo ako su sve varijante artikla vrednovane po istoj ceni kao standardna konfiguracija artikla.

**Alternativna merna jedinica**: u ovom polju prikazuje se alternativna merna jedinica ako je definisana na kartici **Alternativne merne jedinice** artikla. Koristi se merna jedinica označena kao podrazumevana (**Default**) pod uslovom da su u parametrima dokumenta uključene opcije **Upravljanje dvostrukim mernim jedinicama** i **Automatsko predlaganje alternativne merne jedinice**.

**Alternativna količina**: prikazuje vrednost alternativne merne jedinice. Izračunava se množenjem ili deljenjem osnovne količine artikla sa faktorom konverzije definisanim na kartici **Alternativne merne jedinice** artikla.

**Cena po alternativnoj mernoj jedinici**: ova oznaka određuje da se za obračun stavke koristi alternativna količina artikla. Iznos stavke tada se izračunava na osnovu cene i alternativne količine.

**Skladište, šablon i lokacija**: predlažu se skladište i razlog koji će se automatski pojaviti prilikom razduženja artikala iz skladišta. Podaci se preuzimaju iz tabele *Tipovi računa*.

**Artikl**: prikazuje izabrani artikl.

**Projekat**: predstavlja projekat povezan sa dokumentom ili se može dodeliti putem pomoći.

**Pravo obračuna PDV-a**: ako je uključeno, PDV na poklon biće uključen u ukupan iznos računa.

**Detalji izjave**: sadrži eventualnu [izjavu o nameri](/docs/finance-area/declarations/declarations/intent-declaration) kupca.

**Referenca naloga**: odnosi se na narudžbinu iz koje je račun kreiran.

**Brend**: prikazuje brend artikla, preuzet iz njegove kartice ili iz cenovnika artikla.

**Napomene**: omogućava unos napomena za svaki artikl.

### 3.3 Trgovački predstavnici

**Trgovački predstavnici**: predstavnik povezan sa odgovarajućom provizijom za izabrani artikl; podatak odgovara onome što je navedeno u *Zaglavlje > kartica Trgovački predstavnici*. Procenat se može promeniti.

#### Posebno dugme

> **Obriši trgovačkog predstavnika**: omogućava brisanje povezanog predstavnika sa artikla.

### 3.4 Lotovi i serijski brojevi

U oba prikaza mogu se uneti lotovi i serijski brojevi koji se moraju razdužiti iz skladišta, a koji su povezani sa artiklom u *Šifarnik artikla > kartica [Lotovi i serijski brojevi](/docs/erp-home/registers/items/create-new-item)* ili se mogu uneti ručno.

Ova operacija uslovljena je prisustvom lotova i serijskih brojeva u skladištu.

:::info Zapamti
Ako je u **Početnim parametrima skladišta** opcija **Obavezni lotovi i serijski brojevi** isključena, dokument će biti moguće sačuvati bez unosa lotova i serijskih brojeva.

Takođe, ako je na kartici artikla definisana **metoda izdavanja lotova** kao:
- **FIFO**
- **Prema datumu isteka**

prilikom skladišne registracije računa lotovi će biti automatski predloženi ako prethodno nisu ručno uneti.
:::

Ako artikl ne podrazumeva upravljanje lotovima/serijskim brojevima, ovaj *tab* će biti onemogućen.

#### Posebna dugmad

> **Obriši lot**: omogućava brisanje izabranog reda lota.  
> **Obriši serijski broj**: omogućava brisanje izabranog reda serijskog broja.

### 3.5 Analitika

Može sadržati informacije o mestima troška/profitnim centrima na koje su raspoređeni iznosi artikala.

Ovi podaci mogu se uneti ručno ili *automatski* (u slučaju da su mesta troška/profitni centri prethodno definisani u *šifarniku kontakata*, *šifarniku artikala* ili *kontnom planu*).

### 3.6 Dodatni podaci

Prikazuje se lista **Dodatnih podataka** povezanih sa artiklom, sa mogućnošću dodavanja novih dodatnih podataka koji su korisni samo za tekući dokument, uz mogućnost da se putem odgovarajuće oznake odaberu dodatni podaci koji će biti uključeni u štampu.

### 3.7 Priloženi dokumenti

Prikazuju se detalji eventualnog **Priloženog dokumenta** (naziv, vrsta dokumenta, eventualne napomene, naše/vaše reference). Za uputstva o tome kako priložiti dokument pogledajte članak u **Priloženim dokumentima**.

### 3.8 Sekcija vrednosti

Donja desna sekcija sadrži pregled vrednosti koje učestvuju u formiranju konačne cene izabranog artikla u mreži artikala.

**Jedinična cena**: vrednost polja *Cena*;

**Količina**: vrednost polja *Količina*;

**Iznos reda**: Cena artikla * Količina artikla;

**Ukupan rabat**: zbir popusta na artiklu, uključujući i završne popuste;

**Osnovica**: Bruto iznos - Popusti;

**Porez**: Osnovica * stopa PDV-a artikla;

**Ukupno**: Osnovica + Porez.

## **4. Sažeci**

U različitim delovima ove kartice prikazane su glavne informacije celog dokumenta i neka specifična dugmad.

### 4.1 PDV/Dospjeća

#### Sažetak PDV-a

Prikazan je pregled PDV-a dokumenta, za svaki PDV.

#### Pregled dospeća plaćanja

Prikazuje pregled rokova dokumenta, za svaki *tip i način plaćanja*.

**Broj**: progresivna vrednost reda.  
**Plaćanje**: predstavlja alfanumerički kod *Načina plaćanja preuzet iz zaglavlja dokumenta > kartica Plaćanja*.  
**Iznos**: obračunati iznos roka. Može se ručno postaviti, u kom slučaju se automatski aktivira sledeća oznaka *Ručno uređivanje*. (Automatski se proveravaju i upozorenja o podudaranju vrednosti rokova i ukupnog iznosa računa.)  
**Datum dospeća**: obračunati datum dospeća. Može se ručno postaviti, u kom slučaju se automatski aktivira sledeća oznaka *Ručno uređivanje*.  
**Troškovi naplate**: polje u kojem su prikazani obračunati troškovi.  
**PDV**: koji se primenjuje (može se postaviti i ručno).  
**Šablon plaćanja**: moguće je direktno uneti u račun računovodstvenu šemu koja rezultira automatskim knjiženjem naplate/plaćanja. Potrebno je obratiti pažnju na računovodstvenu šemu jer će koristiti prisutne račune čak i bez konta, zbog čega postoji sledeće polje.  
**Račun sa kontom kupca/dobavljača** koji se koristi za naplatu/plaćanje (npr. gotovina ili banka) roka.  
**Broj priznanice**: eventualni broj potvrde o prijemu novca.  
**Jed.**: aktivira računovodstveno zatvaranje rokova u automatskom knjiženju.  
**Vrsta popusta**: vrsta finansijskog popusta.  
**Vrednost popusta**: vrednost finansijskog popusta pri naplati.  
**Detalji izjave**: predstavlja referencu na izjavu o nameri. PDV primenjen na troškove može uvek biti PDV *plafond*, pa je zbog toga potrebno omogućiti unos i povezane izjave o nameri (kao kod redova artikala i troškova).

**ULAZNI RAČUNI**:

**Predznak**: samo rokovi sa ovom oznakom kasnije se obrađuju u plaćanju sa definisanim kontom i računom.  
**Model reference plaćanja**: model za generisanje šifara plaćanja. U nekim stranim lokalizacijama svaki rok na računu ima šifru dodeljenu na osnovu računa: ova šifra se formira prema određenim modelima (tabela MB_PaymentReferenceModels), kako bi se mogla generisati pomoću odgovarajućeg algoritma.  
**Šifra modela plaćanja**: predstavlja šifru (formiranu prema prethodnom modelu) koju je potrebno navesti na stavci, a zatim i u plaćanjima koja se šalju banci, kako bi banka obavestila korisnika o tome koji je rok plaćen (i tako automatizovala uvoz bankarskih izvoda sa zatvaranjem stavke). Odatle se popunjava unutar stavke i u SEPA datoteci.  
**Krajnji datum za avansno plaćanje**: ovo je polje predviđeno u SDI formatu računa, odnosno rok do kojeg se može primeniti finansijski popust.

Generalno, rokovi dospeća se ponovo obračunavaju ako se promeni način plaćanja u zaglavlju dokumenta. Slučajevi u kojima se rokovi dospeća ne ažuriraju nakon promene plaćanja u zaglavlju su sledeći:

- Kada je račun povezan sa SDI konektorom i ima status različit od Neispitano, Kontrolisano, Otkazano, Isključeno;
- Kada postoji barem jedan rok dospeća sa aktivnom opcijom *Ručna izmena*;
- Kada je račun povezan sa jednim ili više efekata ili povezan sa linijom FSAdvanceInvoiceMaturity;
- Kada postoji popust na rok dospeća koji ne potiče iz plaćanja;
- Kada je ukupan iznos u mreži Plaćanja veći od osnovice računa;
- Ili ako su računi menjani van Fluentisa.

### 4.2 Trgovački predstavnici/Popusti/Troškovi

#### Konačni popusti na artikle

Mogu se unositi samo konačni popusti izraženi u procentima, koji će biti primenjeni na ukupan iznos dokumenta.

Popusti uneti u ovom delu obračunavaju se i prikazuju za svaki artikl u dokumentu, na *kartici Artikli > kartica Popusti/Cenovnici*.

**Vrsta/Opis popusta**: omogućava izbor vrste popusta (definisane u *Vrstama popusta*), dodeljivanje prioriteta primene popusta i određivanje da li se popust obračunava na osnovicu ili se kaskadno primenjuje na prethodno obračunate popuste.  
**Prioritet**: predstavlja prioritet primene popusta; sortiranje se vrši uzlazno.  
**Kaskadno/Iznos**: određuje da li se popust obračunava na (*cena × količina*) - (*prethodno obračunati popusti*) ili na (*cena × količina*).  
**Vrednost**: numerička vrednost konačnog popusta koji se primenjuje.

#### Konačni troškovi/popusti/doplate

Prikazuju se troškovi uneti u šifarnik kontakta, na kartici *Troškovi/Popusti*.

Takođe postoji mogućnost unosa troškova koji se odnose samo na tekući dokument.

**Vrsta/Opis**: omogućava izbor vrste troška (definisane u *Vrstama troškova*), pri čemu se vrsti dodeljuje procenat troška koji se primenjuje.  
**Iznos troška**: prikazuje iznos troška izražen u valuti dokumenta.  
**PDV**: određuje stopu PDV-a koja će biti primenjena na uneti trošak.  
**Procenat/Vrednost**: polje koje određuje da li se trošak obračunava procentualno ili kao unapred definisana novčana vrednost.  
**Procenat**: numerička vrednost procenta troška.

#### Ostala polja

**Završne napomene**: opisno polje koje korisnik može popuniti uz pomoć *Pomoći za šifrovane napomene*.

### 4.3 Ukupan iznos dokumenta

**Iznos stavki bez popusta**: predstavlja zbir vrednosti svih artikala.

**Avans**: predstavlja vrednost eventualnog avansa primljenog za dokument.

**Vrednost poklona**: predstavlja iznos artikala tipa poklon unetih na kartici *Artikli*.

**Ukupno primenjeni popusti**: predstavlja ukupnu vrednost primenjenih popusta na artikle, bez konačnih popusta.

**Neto iznos artikala**: *Bruto iznos artikala - Ukupno primenjeni popusti*.

**Ukupno konačnih popusta**: predstavlja vrednost konačnih popusta izraženih procentualno na bruto iznos artikala.

**Iznos umanjen za ukupne popuste**: *Neto iznos artikala - Ukupno konačnih popusta*.

**Ukupno za stavke troškova**: predstavlja vrednost troškova unetih u prethodnoj kartici kao artikli *Vrste troška*.

**Troškovi naplate**: predstavlja zbir troškova naplate unetih na kartici *Troškovi*.

**Trošak overe**: predstavlja zbir troškova takse unetih na kartici *Troškovi*.

**Ukupno troškovi/popusti/doplate**: prikazuje ukupan iznos svih troškova evidentiranih u tabeli **Troškovi**.

**Poreska osnovica**: obračunava se prema formuli: `Neto iznos artikala − Ukupno konačnih popusta + ukupni troškovi artikala + Ukupno troškovi/popusti/doplate`

**Porez**: prikazuje zbir svih vrednosti sadržanih u PDV pregledima dokumenta.

**Ukupno**: obračunava se prema formuli: `Poreska osnovica + PDV`

**Ukupan procenat popusta**: omogućava unos dodatnog završnog popusta izraženog u procentima. Unosom vrednosti automatski se popunjava i sledeće polje.

**Ukupna vrednost popusta**: omogućava unos dodatnog završnog popusta u novčanom iznosu.

**Zaokruživanje**: omogućava dodatno zaokruživanje konačnog iznosa dokumenta.

**Ukupno za plaćanje**: prikazuje konačan iznos dokumenta nakon primene svih obračuna, popusta, troškova i zaokruživanja.

## **5. Prevoz**

Ako se radi o **pratećem računu**, potrebno je popuniti karticu **Prevoz**.

Dostupna polja su:

- **Primalac**: automatski se predlaže podrazumevani primalac definisan na kartici kupca. Ako nije definisan, koristi se adresa kupca.
- **Odredište**: automatski se predlaže podrazumevano odredište primaoca ako je definisano na kartici kupca.
- **Broj za praćenje (Tracking Number)**: slobodno polje za unos broja za praćenje pošiljke.

**Zapremina**: prikazuje se ukupna zapremina koja predstavlja zbir zapremina artikala (vrednost se preuzima iz *Šifarnika artikala > Težine/dimenzije*), kada se jedinica mere zapremine artikla podudara sa onom unetom u parametrima računa. Uzimaju se u obzir samo artikli koji imaju popunjeno ovo polje.

**Neto težina**: prikazuje se ukupna neto težina koja predstavlja zbir težina artikala (vrednost se preuzima iz *Šifarnika artikala > Težine/dimenzije*), kada se jedinica mere težine artikla podudara sa onom unetom u parametrima računa. Uzimaju se u obzir samo artikli koji imaju popunjeno ovo polje.

**Bruto težina**: prikazuje se ukupna bruto težina koja predstavlja zbir težina artikala (vrednost se preuzima iz *Šifarnika artikala > Težine/dimenzije*), kada se jedinica mere težine artikla podudara sa onom unetom u parametrima računa. Uzimaju se u obzir samo artikli koji imaju popunjeno ovo polje.

**Broj paketa**: prikazuje se broj paketa na osnovu podataka unetih u šifarniku artikala, na kartici Težine/dimenzije, u poljima *Artikli prisutni u paketu* ili *Paket za formiranje artikla*. Uzimaju se u obzir samo artikli koji imaju popunjeno ovo polje.

**Vrednost ručno izmenjena**: uključivanjem ove oznake omogućava se ručna izmena polja **Zapremina**, **Neto težina**, **Bruto težina** i **Broj paketa**, koja se inače automatski preuzimaju sa kartice artikla i nije ih moguće menjati.

**Prevoz**: potrebno je odabrati subjekt odgovoran za prevoz označavanjem jedne od opcija:

  - **Pošiljalac**
  - **Primalac**
  - **Prevoznik**

U zavisnosti od izabrane opcije, dostupna polja u nastavku obrasca se menjaju:

  - ako je prevoz na teret **pošiljaoca**, moguće je uneti:
    - registarsku oznaku vozila
    - prikolicu
    - datum i vreme početka prevoza

  - ako je prevoz na teret **primaoca**, moguće je uneti:
    - registarsku oznaku vozila
    - prikolicu
    - datum i vreme početka prevoza

  - ako je prevoz na teret **prevoznika**, dostupna su sledeća polja:
    - kartica prevoznika
    - registarska oznaka vozila
    - prikolica
    - datum i vreme prevoza
    - naručilac prevoza
    - utovarivač
    - vlasnik robe
    - mesto utovara

Napomena: Za ponovni obračun vrednosti prevoza u sažetku dokumenta potrebno je uključiti oznaku **Ponovni obračun prevoza** u parametrima povezanog dokumenta.

## 6. Povezani dokumenti

Na ovoj kartici moguće je pregledati dokumente povezane sa tekućim dokumentom.

Dokumente je moguće priložiti na dva načina:

- korišćenjem dugmeta **Dokumenti** na alatnoj traci, gde je moguće odabrati već postojeći dokument evidentiran u Fluentisu ili kreirati novi dokument za prilaganje

- direktno unutar tabele, desnim klikom miša i izborom opcije **Priloži datoteku**, čime se pokreće postupak kreiranja novog dokumenta za prilaganje