---
title: Kreiranje otpremnice
sidebar_position: 2
---

Forma **Kreiranje otpremnice** otvara se putem navigacije **Prodaja > Otpremnice > Nova otpremnica** ili putem dugmeta **Novo** koje se nalazi u formi **Pretraga otpremnica**.

## 1. Obavezni podaci

Prilikom otvaranja forme automatski se predlažu trenutni **datum** i **godina**, ali ih korisnik po potrebi može promeniti.
Za nastavak kreiranja otpremnice potrebno je popuniti sledeća obavezna polja:

- **Tip otpremnice**: bira se među tipovima definisanim u konfiguraciji sistema.

- **Broj**: svakom dokumentu automatski se dodeljuje broj prema definisanoj numeraciji povezanoj sa odabranim tipom dokumenta.

- **Kupac**: može se odabrati:
  - korišćenjem pomoćne forme za pretragu podataka
  - direktnim unosom podataka
  - automatski, ukoliko se otpremnica generiše iz narudžbine kupca putem procedure izvršenja narudžbine.

Nakon unosa obaveznih podataka moguće je nastaviti sa unosom dodatnih informacija kroz različite kartice dokumenta.
Forma je organizovana u više kartica koje omogućavaju unos i upravljanje svim podacima vezanim za otpremnicu.

## 2. Zaglavlje

Nakon što su uneseni obavezni podaci u gornjem delu forme, korisnik može nastaviti sa unosom sledećih podataka:
- [ručni unos](/docs/guide/common/operations-with-data/manual-entry-or-help-and-data-selection)
- [pomoćna forma](/docs/guide/common/operations-with-data/manual-entry-or-help-and-data-selection)
- automatski unos: na osnovu odabrane procedure, aplikacija može **automatski** popuniti određena polja.

:::note NAPOMENA
Ako se dokument kreira *automatski*, ovi podaci se preuzimaju iz *izvornog dokumenta* iz kojeg je generisan.
:::

Unosom **Kupca** automatski se predlažu svi specifični podaci u **Zaglavlju**, prema prethodno definisanim podacima u [Šifarniku kupaca](/docs/erp-home/registers/contacts/create-new-contact/accounting-data/accounting-data-intro), u odgovarajućim poljima za adresu i u sledećim sekcijama:

- **Valuta**: [Valuta](/docs/guide/common/glossary/glossary-intro#currency), [Kurs](/docs/guide/common/glossary/glossary-intro#currency-exchange), [Datum valute](/docs/guide/common/glossary/glossary-intro#currency-date)
- **Država**: [Država](/docs/guide/common/glossary/glossary-intro#country), [Jezik](/docs/guide/common/glossary/glossary-intro#language), [Zona](/docs/guide/common/glossary/glossary-intro#zone)
- **Isporuka**: [Isporuka](/docs/guide/common/glossary/glossary-intro#shipment), [Paritet](/docs/guide/common/glossary/glossary-intro#carriage), [Pakovanje](/docs/guide/common/glossary/glossary-intro#packing), [Cenovnik](/docs/guide/common/glossary/glossary-intro#sales-price-list) i njegov [period važenja](/docs/guide/common/glossary/glossary-intro#validity-date)
- ostala polja koja se predlažu izborom kupca, ali se mogu menjati: [Odredište](/docs/guide/common/glossary/glossary-intro#destination), [Primalac](/docs/guide/common/glossary/glossary-intro#recipient)

#### Ostala opciona polja

**Status dokumenta**: prilikom kreiranja dokument nema aktivnih oznaka.

Ova sekcija sadrži sledeća polja:
> **Odštampano**: aktivira se kada se dokument odštampa i označava da je otpremnica odštampana.  
> **Proknjiženo**: automatski se označava nakon knjiženja dokumenta.  
> **Stornirano**: aktivna oznaka omogućava storniranje dokumenta.  
> **Razduženo**: označava da je roba razdužena sa skladišta, ručno ili *automatski* putem procedure automatskog razduženja.  
> **Fakturisano**: ova oznaka se aktivira kada je otpremnica preneta u račun.  
> **Delimično fakturisano**: označava da je otpremnica samo delimično preneta u račun.  
> **Prinudno fakturisano**: ova oznaka se aktivira ukoliko je otpremnica prinudno zatvorena korišćenjem funkcije prinudnog izvršenja stavki. Na primer, kada preostala količina neće biti isporučena, dokument se može smatrati zatvorenim iako nije u potpunosti realizovan.

:::note NAPOMENA
Oznake se mogu ukloniti procedurom **Povrati**.
:::

- **Napomene kupca**: ovo polje se preuzima iz dokumenta iz kojeg je otpremnica nastala, ali ga je moguće i ručno popuniti.
- **Naša referenca / Vaša referenca**: u ova polja se obično unosi interna referenca i referenca kupca za predmetni dokument.
  Ako je otpremnica kreirana automatskom procedurom, polja se automatski popunjavaju podacima iz izvornog dokumenta.
  Prenos podataka važi samo kada je otpremnica nastala iz jednog izvornog dokumenta.

- **Referenca na broj narudžbine kupca**: automatski prikazuje broj narudžbine kupca iz koje je otpremnica nastala.
- **Referenca na datum narudžbine kupca**: automatski prikazuje datum narudžbine kupca iz koje je otpremnica nastala.
  Zajedno sa referencom na broj narudžbine koristi se za popunjavanje podataka potrebnih za elektronski račun.
  Ukoliko polja nisu popunjena, koristi se vrednost iz polja **Vaša referenca**.
- **Početne napomene otpremnice**: omogućavaju izbor unapred definisanih napomena iz šifarnika dostupnog putem menija **Konfiguracija > Alati > Upravljanje šifrovanim napomenama**.
  Napomene se mogu odabrati pomoću forme za izbor ili uneti ručno.
- **Projekat**: omogućava povezivanje dokumenta sa projektom.
- **Operater**: omogućava izbor korisnika koji je kreirao dokument. Ukoliko je uključena odgovarajuća postavka u parametrima dokumenta, ovo polje može biti obavezno.
- **Status izvršenja**: prikazuje status izvršenja dokumenta.
  Kada se otpremnica izvršava kroz dokumente kao što su računi, status se automatski menja između:
  - Neizvršen
  - Delimično izvršen
  - Izvršen
  Korisnik može prinudno zatvoriti dokument čak i kada nije u potpunosti izvršen.
  U tom slučaju čuva se i datum izvršenja.

- **Datum dospeća**: koristi se kao početni datum za izračunavanje rokova plaćanja.
- **Audit Trail**: prikazuje podatke o dokumentu, uključujući:
  - datum kreiranja i korisnika koji je kreirao dokument
  - datum poslednje izmene i korisnika koji je izvršio izmenu

#### Posebna dugmad

> **Preuzimanje iz narudžbine**: pokreće proceduru za kreiranje otpremnice iz narudžbine kupca. Aktivira se kada su uneti kupac i tip otpremnice.  
> **Automatsko razduženje skladišta**: omogućava razduženje robe sa skladišta ukoliko je dokument označen kao Odštampan.  
> **Pomoć za primaoca/odredište**: omogućava pregled i unos primalaca i odredišta iz evidencije kupaca.  
> **Prenesi agenta na stavke**: dodeljuje agenta unetog u zaglavlju svim stavkama dokumenta, na kartici Agenti.  
> **Prenesi CIG/CUP na stavke**: dodeljuje kodove unesene u zaglavlju svim stavkama dokumenta.  
> **Otkaži plaćanja**: briše sva plaćanja iz zaglavlja dokumenta.

### 2.1 Plaćanja

**Uslovi plaćanja** automatski se preuzimaju iz *Šifarnika kupaca > kartica Plaćanje* i korisnik ih može menjati ili brisati.
Ako je uz **Vrstu plaćanja** povezan finansijski rabat, iznos rabata uzima se u obzir samo u računovodstvenom smislu, odnosno kod obračuna rokova plaćanja dokumenta, a ne utiče na ukupan iznos otpremnice.

Ako dokument nastaje iz:
- **Narudžbine kupca**, vrste plaćanja mogu biti preuzete iz izvornog dokumenta (narudžbine), iz podataka kupca ili se mogu prikazati sva plaćanja dokumenata za izvršenje, nakon čega korisnik bira željeni način plaćanja.
- **Plaćanja** mogu biti preuzeta sa kartice kupca ili iz pojedinačnih plaćanja prisutnih na svakoj otpremnici. U tom slučaju na računu će biti prikazana vrsta plaćanja sa istim iznosom i PDV-om kao na otpremnici, a biće dodat i novi red za eventualne stavke koje ne potiču iz otpremnice.

### 2.2 Rabati

Prikazuju se samo unapred definisani rabati iz *Šifarnika kupaca > kartica Rabati*, dok se rabati povezani sa uslovima plaćanja ili pojedinačnim artiklima ne preuzimaju automatski.
Korisnik može menjati ili brisati predložene rabate.

:::info Zapamti
Za korišćenje rabata na poresku osnovicu potrebno je u bazi podataka aktivirati globalni parametar: `GEN-GlobalSettings_CalculateDiscountOnAmount`
Ako parametar nije aktivan, rabati obračunati na poresku osnovicu automatski će biti pretvoreni u kaskadne rabate.
:::

Rabati definisani u zaglavlju dokumenta automatski se prenose na svaku novu stavku artikla.
Ako se nakon unosa stavki u zaglavlju doda novi rabat, on neće biti automatski primenjen na već postojeće stavke.

#### Posebno dugme

> **Otkaži**: briše odabrane redove rabata.

### 2.3 Trgovački predstavnici

Prikazuje šifru agenta i njegov procenat provizije za svaku stavku artikla.
Šifra agenta i procenat provizije automatski se predlažu prema podacima definisanim na kartici **Kupac > Agenti**.
Ako agent nije povezan sa kupcem na kartici kupca, ipak ga je potrebno uneti, ali sa praznom provizijom (**NULL**).
Ako bi provizija bila postavljena na **0 %**, to bi značilo da je agent povezan sa kupcem, ali nema pravo na proviziju.
Ista sekcija dostupna je i na nivou pojedinačne stavke artikla, na kartici **Agenti**.

#### Dostupna funkcija

> **Otkaži**: omogućava brisanje odabranih agenata.

### 2.4 Dodatni podaci

Ovde se prikazuju informacije definisane u *Šifarniku subjekata > kartica Dodatni podaci*, ali samo ukoliko postoje unapred definisane podrazumevane vrednosti.

## Procedure zaglavlja

### Izuzimanje iz narudžbe

U zaglavlju otpremnice, klikom na dugme **Izuzimanje iz narudžbe**, otvara se forma u kojoj je moguće filtrirati narudžbine povezane sa kupcem dokumenta.
Ova procedura omogućava kreiranje prodajne otpremnice izvršavanjem odgovarajuće narudžbine kupca. U otpremnicu je moguće preneti stavke tako da se izvrši cela narudžbina ili samo njen deo, odnosno pojedinačne stavke.

Da bi se procedura mogla koristiti, moraju biti ispunjeni sledeći uslovi:
- kupac na narudžbini mora biti isti kao kupac na otpremnici;
- narudžbina mora imati oznaku **Odštampano** i popunjen **Datum potvrde narudžbine**;
- tipovi dokumenata moraju biti kompatibilni:
  - u tabeli **Tipovi narudžbina** tip narudžbine mora imati definisan odgovarajući tip otpremnice;
  - u tabeli **Tipovi otpremnica** mora biti uključena opcija **Narudžbina**, koja označava da otpremnica nastaje iz narudžbine.

:::note NAPOMENA
Trenutno nije moguće izvršavati narudžbine koje sadrže grupisane stavke, pa se takve narudžbine neće prikazivati u formi za izvršenje.
:::

Nakon toga potrebno je odabrati željeni **Tip otpremnice** (koji mora odgovarati tipu definisanom u tabeli **Tipovi narudžbina**) i **Kupca** u zaglavlju nove otpremnice.
Kada su ovi podaci uneseni, potrebno je kliknuti na dugme **Izvršavanje narudžbina** kako bi se otvorila forma za izvršenje.

#### Postupak

Filteri za kupca i valutu automatski se postavljaju prema podacima iz zaglavlja otpremnice.
Nakon definisanja željenih filtera i klika na dugme **Traži**, u rezultatima će biti prikazana svaka odštampana, potvrđena i neizvršena ili delimično izvršena narudžbina.

:::note NAPOMENA
Procedura preuzima sve podatke iz narudžbine, pa će biti primenjeni uslovi prodaje definisani na narudžbini čak i ako su se oni naknadno promenili.
:::

U prikazu rezultata korisnik može:
1. odabrati celu narudžbinu označavanjem polja na početku reda narudžbine;
2. odabrati samo pojedine stavke označavanjem polja na početku reda stavke;
3. odabrati određene stavke za manju količinu, pri čemu je potrebno izmeniti količinu za izvršenje.

Za završetak postupka potrebno je kliknuti na dugme **Prenos**, nakon čega će svi odabrani podaci biti preneti iz narudžbine u otpremnicu.

#### Posebna dugmad

> **Traži**: pretražuje narudžbine dostupne za izvršenje.  
> **Prenos**: prenosi podatke iz odabrane narudžbine u novu otpremnicu.  
> **Prisilno izvršenje narudžbine**: omogućava prisilno zatvaranje narudžbine.  
> **Izvršenje iz narudžbina**: pokreće proceduru izvršenja narudžbine.  
> **Proširi**: prikazuje kompletno stablo narudžbine sa svim stavkama.  
> **Sažmi**: prikazuje samo zaglavlja narudžbina bez stavki.  
> **Označi sve**: označava sve prikazane stavke.  
> **Poništi izbor**: uklanja oznake sa svih stavki.

### Automatsko razduženje skladišta

Druga procedura dostupna u zaglavlju otpremnice je **Automatsko razduženje skladišta**. Dugme postaje dostupno tek kada dokument dobije status **Odštampano**.
Ako je u parametrima uključeno automatsko skladišno razduženje, procedura će se pokrenuti automatski nakon štampanja dokumenta.

Prilikom pokretanja procedure sistem proverava:
- da li su na stavkama otpremnice definisani skladište i tip skladišnog dokumenta;
- da li postoje serijski brojevi ili lotovi, ukoliko su obavezni za artikle na dokumentu.

Ako neka od provera nije uspešna, korisniku će biti prikazana poruka o grešci.
Ako se procedura uspešno izvrši:
- kreira se skladišna evidencija za sve artikle sa otpremnice;
- u zaglavlju dokumenta automatski se aktivira oznaka **Razduženo**.

:::info Zapamti
Ako u parametrima otpremnica, na kartici **Izvršenje**, opcija **Kreiraj zapis sa datumom dokumenta** nije aktivna, skladišna evidencija će uvek biti kreirana sa trenutnim datumom.
Ako je opcija aktivna, koristiće se:
- datum transporta definisan na kartici **Transport** otpremnice, ako je popunjen;
- u suprotnom datum otpremnice.
:::

## 3. Artikli

Na ovoj kartici unose se svi artikli sa pripadajućim podacima.
Za sve što nije detaljno objašnjeno u ovom dokumentu o zajedničkom radu obrazaca, pogledajte:
[Funkcionalnosti, dugmad i zajednička polja](/docs/guide/common). Podaci se mogu unositi [ručno](/docs/guide/common/operations-with-data/manual-entry-or-help-and-data-selection), pomoću [forme za pretragu i izbor podataka](/docs/guide/common/operations-with-data/manual-entry-or-help-and-data-selection) ili ih mogu predložiti povezane procedure.

Da biste uneli **novi artikl** u tabelu, dovoljno je pozicionirati se na novi red i popuniti potrebne podatke ili koristiti dugme **Novo** koje se nalazi na gornjoj alatnoj traci.

#### Obavezni podaci

**Broj reda**: ovo polje se automatski popunjava rednim brojem prilikom unosa nove stavke.
**Tip reda** omogućava izbor artikala sa različitim karakteristikama.

:::note NAPOMENA
Ako se direktno započne unosom artikla, njegova *klasa*, *šifra* i *tip reda* – *Šifrovani artikl* automatski će biti popunjeni.
:::

> **Artikl sa klasom**: artikli evidentirani u šifrarniku koji se mogu knjižiti u analitičkom knjigovodstvu i evidentirati u skladištu.  
> **Artikl bez klase**: opisni artikli koji se mogu knjižiti u analitičkom knjigovodstvu, ali se ne mogu evidentirati u skladištu.  
> **Trošak**: šifrovani ili nešifrovani artikli koji se posebno prikazuju u rekapitulacijama dokumenata. Ako je trošak šifrovan i poreski relevantan, evidentiraće se u skladištu; u suprotnom neće.  
> **Artikl – Napomena**: tekstualne napomene koje se prikazuju na štampi dokumenta i nemaju uticaj na knjiženje niti skladište.  
> **Gratis artikl**: poklon artikl koji se obrađuje kao šifrovani ili nešifrovani artikl u poreskom i skladišnom smislu, ali se posebno prikazuje u pregledima dokumenta. U zavisnosti od PDV pravila može se obračunati PDV na teret preduzeća.

**Klasa / Artikl / Opis artikla**: mogu se uneti [ručno](/docs/guide/common/operations-with-data/manual-entry-or-help-and-data-selection) ili pomoću [forme za izbor podataka](/docs/guide/common/operations-with-data/manual-entry-or-help-and-data-selection), koja prikazuje podatke definisane u šifrarniku artikala.

- **Barkod**: ako je u parametrima otpremnica omogućeno upravljanje barkodovima, prikazuje se kolona **Barkod** u kojoj je moguće odabrati jedan od barkodova definisanih na kartici artikla.
- **Artikl kupca**: ako je omogućeno upravljanje artiklima kupca, prikazuje se kolona **Artikl kupca**. U ovom polju prikazuje se šifra artikla definisana za kupca na kartici artikla u sekciji **Kupci**.
- **Jedinica mere**: automatski se predlaže osnovna jedinica mere artikla. Ako su definisane alternativne jedinice mere, korisnik može izabrati drugu jedinicu.
- **Količina**: predstavlja količinu u osnovnoj jedinici mere. Podrazumevana vrednost je **1**, ali se može promeniti ručno ili preuzeti iz izvornog dokumenta tokom izvršenja.
- **Cena**: automatski se predlaže iz cenovnika definisanog na kartici kupca. Cenovnik iz kojeg je cena preuzeta prikazuje se na kartici **Popusti/Cenovnici**.
  U okviru istog dokumenta moguće je koristiti artikle čije su cene preuzete iz različitih cenovnika.
  Ako je za kupca definisano više cenovnika, korisnik može dvostrukim klikom na polje **Cenovnik** na kartici **Popusti/Cenovnici** izabrati drugi cenovnik iz kojeg će biti preuzeta cena artikla.

:::note Napomena
Ako za artikl nije pronađen odgovarajući cenovnik, predložena vrednost biće **prodajna cena** definisana na kartici artikla u sekciji **Troškovi/Cene** ili će biti određena prema podešavanjima parametara dokumenta.

Ako ni taj podatak nije dostupan, cena će biti postavljena na **0**.
:::

- **Poreska osnovica**: prikazuje jediničnu cenu pomnoženu sa količinom artikla, umanjenu za sve popuste primenjene na stavku.
- **Popusti artikla**: prikazuje ukupan iznos popusta definisanih za artikl.
- **Završni popusti artikla**: prikazuje ukupan iznos završnih popusta raspoređenih na stavku artikla iz sekcije **Sažeci** dokumenta.
- **PDV**: prioritetno se koristi vrednost definisana na kartici kupca. Ako na kartici kupca nije definisan PDV, predlaže se vrednost sa kartice artikla. Korisnik može odabrati drugu vrednost. Polje je obavezno.
- **Vrsta prometa prodaje**: preuzima se sa kartice artikla u sekciji **Opšte**. Ako vrednost nije definisana, tokom knjiženja koristiće se podrazumevana vrednost definisana u polju **Podrazumevani prihod/trošak protivstavke** na kartici kupca. Ako ni ta vrednost nije dostupna, sistem će prikazati poruku o grešci.
- **Na računu**: ova oznaka je uključena prema podrazumevanim podešavanjima. Može se isključiti ako stavka ne sme biti preneta na račun i ne sme se pojavljivati u procedurama izvršenja otpremnice.
- **Neto težina**: prikazuje neto težinu definisanu na kartici artikla pomnoženu sa količinom stavke.
- **Bruto težina**: prikazuje bruto težinu definisanu na kartici artikla pomnoženu sa količinom stavke.

#### Posebna dugmad

- **Preračun reciklaže**: ako je za dokument aktivirano upravljanje CONAI naknadama, ovim dugmetom moguće je ponovo izračunati vrednosti nakon izmena.
- **Ažuriraj vrednosti reciklaže iz registra artikala**: ako su na kartici CONAI materijala artikla promenjeni jedinica mere i/ili težina, moguće je preneti nove vrednosti na karticu artikla.
- **Upravljanje ambalažom**: omogućava otvaranje obrasca za upravljanje povratnom ambalažom korišćenom na dokumentu.

  Dugme je dostupno samo kada je dokument sačuvan, ali još nije razdužen. U obrascu je moguće:
  - uneti količine
  - odabrati red dokumenta
  - preneti odabranu ambalažu na stavke artikala
  Prikazuju se samo artikli označeni kao ambalaža i evidentirani u tabeli povratne ambalaže.

- **Ažuriranje cenovnika**: iz padajućeg menija dostupne su dve procedure:
  - **Ažuriraj trenutni cenovnik** – usklađuje cenu artikla u postojećem cenovniku sa novom cenom unetom na stavci dokumenta.
  - **Kreiraj novi cenovnik sa novim periodom važenja** – kreira novi prilagođeni cenovnik za kupca dokumenta. Prilikom pokretanja procedure korisnik mora uneti:
    - datum početka važenja
    - datum završetka važenja
    novog cenovnika.
- **Prikaži/Sakrij detalje**: prikazuje ili skriva interne kartice dostupne unutar sekcije **Artikli**.

### 3.1 Popusti / Cenovnici

Na ovoj kartici moguće je pregledati cenovnik i popuste povezane sa izabranom stavkom artikla.

U sekciji **Cenovnik** prikazuje se cenovnik iz kojeg je preuzeta cena artikla zajedno sa datumom početka i završetka važenja.

U polju **Tip rabatne skale** predlaže se podrazumevana rabatna skala koju kupac ima povezanu sa tim cenovnikom.

Ako podrazumevana rabatna skala nije definisana, moguće je ručno izabrati drugu.

Potrebno je imati u vidu da jedan cenovnik može sadržati više različitih rabatnih skala za isti artikl, na primer:

- količinske rabate
- opšte komercijalne rabate
- druge vrste popusta

Ako oznaka **Ručna cena** nije aktivna, znači da se:

- cenovnik
- cena
- popusti stavke

izračunavaju automatski.

Ako korisnik ručno promeni bilo koji od ovih podataka, oznaka **Ručna cena** automatski će se aktivirati.

U tabeli **Popusti** prikazuju se svi popusti povezani sa artiklom, pri čemu svaki popust ima svoju osnovicu obračuna i pravila dodele.

Popusti se mogu preuzeti iz:

- kartice kupca
- načina plaćanja dodeljenog dokumentu
- cenovnika povezanog sa kupcem

Sve predložene vrednosti mogu se ručno menjati.

#### Posebna dugmad

> **Otkaži rabat**: omogućava brisanje popusta povezanog sa izabranim artiklom.

---

### 3.2 Podaci

Na ovoj kartici prikazuju se i unose dodatni podaci povezani sa artiklom.

- **Alternativna jedinica mere**: u ovom polju prikazuje se alternativna jedinica mere definisana na kartici artikla u sekciji **Alternativne jedinice mere**.
  Prikazuje se jedinica označena kao podrazumevana (**Default**) ukoliko su u parametrima dokumenta aktivirane opcije:
  - Upravljanje dvostrukom jedinicom mere
  - Automatsko predlaganje alternativne jedinice mere

- **Alternativna količina**: prikazuje količinu izraženu u alternativnoj jedinici mere. Vrednost se izračunava množenjem ili deljenjem količine artikla sa faktorom konverzije definisanim na kartici artikla u sekciji **Alternativne jedinice mere**.

- **Cena alternativne jedinice mere**: ova oznaka određuje da se za obračun koristi alternativna količina artikla. U tom slučaju iznos stavke izračunava se na osnovu cene po alternativnoj jedinici mere.

- **Skladište i tip dokumenta**: predlažu se skladište i skladišni tip dokumenta koji će se koristiti tokom skladišnog razduženja artikala. Podaci se preuzimaju iz šifarnika **Vrste otpremnica**, ali ih je moguće i ručno promeniti.

- **Varijanta**: omogućava izbor varijante artikla definisane na kartici artikla u sekciji **Varijante**.

- **Status izvršenja**: prikazuje status stavke:
  - Valorizovano
  - Delimično valorizovano
  - Prisilno valorizovano

- **Projekat**: projekat povezan sa stavkom artikla ili izabran putem forme za pretragu.
- **Povraćaj PDV-a**: određuje da li se PDV na stavci besplatne isporuke smatra delom ukupnog iznosa dokumenta.
- **Referenca naloga**: prikazuje nalog iz kojeg je nastala otpremnica.
- **Naša referenca / Vaša referenca**: interna referenca i referenca kupca povezane sa stavkom. Ako je otpremnica nastala automatskom procedurom, podaci se automatski preuzimaju iz izvornog dokumenta.
- **Broj / Referentni datum**: prikazuju referencu na broj i datum izvornog naloga kupca.
- **Brend**: brend artikla preuzet sa kartice artikla ili iz cenovnika artikla.
- **Na računu**: oznaka je podrazumevano uključena. Može se isključiti ako se stavka ne sme preneti na račun i ne sme učestvovati u procedurama izvršenja DDT-a.
- **Napomene**: omogućava unos napomena za pojedinačnu stavku artikla.
- **Detalji izjave**: prikazuje izjavu o nameri korišćenu za određivanje PDV-a artikla. Ako postoji više važećih izjava, moguće je odabrati drugu putem padajuće liste.

### 3.3 Trgovački predstavnici (agenti)

- **Agent**: prikazuje agenta povezanog sa izabranom stavkom artikla zajedno sa pripadajućom provizijom. Podatak odgovara vrednosti definisanoj na kartici **Agenti** u zaglavlju dokumenta. Procenat provizije moguće je ručno izmeniti.

#### Posebna dugmad

- **Otkaži agente**: uklanja agenta povezanog sa izabranom stavkom artikla.

### 3.4 Lotovi i serijski brojevi

U ove dve tabele moguće je uneti lotove i serijske brojeve koji će biti razduženi sa skladišta.
Dostupnost unosa zavisi od toga da li su lotovi i serijski brojevi evidentirani na skladištu.
Ako za artikl nije uključeno upravljanje lotovima ili serijskim brojevima, ova kartica neće biti dostupna.

:::info Zapamti

Ako je u parametrima skladišta isključena opcija **Obavezni lotovi i serijski brojevi**, dokument je moguće sačuvati i bez unosa lotova ili serijskih brojeva.
Ako je na kartici artikla kao metoda izdavanja zaliha odabrano:
- **FIFO**
- **Prema datumu isteka**
prilikom knjiženja otpremnice lotovi će biti automatski predloženi ukoliko prethodno nisu ručno uneti.
:::

#### Posebna dugmad

- **Obriši lot**: briše izabrani red lota.
- **Obriši serijski broj**: briše izabrani red serijskog broja.

### 3.5 Analitika

Može sadržati podatke o mestima troška i profitnim centrima na koje se raspoređuju vrednosti artikala.
Podaci se mogu unositi:
- ručno
- automatski
Automatsko popunjavanje moguće je ukoliko su mesta troška ili profitni centri prethodno definisani na:
- kartici kupca
- kartici artikla
- kontnom planu

### 3.6 Dodatni podaci

Prikazuje listu dodatnih podataka povezanih sa artiklom.
Moguće je dodati nove dodatne podatke koji će važiti samo za dokument na kojem se radi.
Oznaka **Za štampu** omogućava izbor dodatnih podataka koji će biti uključeni na štampu dokumenta.

### 3.7 Priloženi dokumenti

Prikazuju se podaci o eventualno priloženom dokumentu:
- naziv dokumenta
- vrsta dokumenta
- napomene
- naše reference
- vaše reference
Za više informacija o dodavanju priloga pogledajte dokumentaciju **Priloži dokumente**.

### 3.8 Sažetak vrednosti

Sekcija u donjem desnom delu obrasca prikazuje pregled vrednosti koje učestvuju u obračunu konačne cene izabrane stavke artikla.
Prikazuju se sledeći podaci:
- **Jedinična cena**: vrednost iz polja **Cena**.
- **Količina**: vrednost iz polja **Količina** ili **Alternativna količina**, u zavisnosti od toga da li je uključena opcija **Cena po alternativnoj jedinici mere**.
- **Iznos stavke**: izračunava se po formuli: `Cena × Količina`
- **Ukupan rabat**: zbir svih popusta povezanih sa artiklom, uključujući završne popuste.
- **Poreska osnovica**: izračunava se po formuli: `Iznos stavke − Popusti`
- **Porez**: izračunava se po formuli: `Poreska osnovica × PDV`
- **Ukupno**: izračunava se po formuli: `Poreska osnovica + Porez`

## 4. Rezimei

U sekciji **Rezimei** prikazane su glavne informacije za ceo dokument.

### 4.1 Završni popusti na artikle

Završni popusti definisani na nivou dokumenta raspoređuju se proporcionalno na sve stavke artikala.
To znači da se ukupan iznos popusta deli između svih artikala na dokumentu, a pripadajući iznos popusta vidljiv je na svakoj pojedinačnoj stavci artikla.
- **Vrsta / Opis popusta**: omogućava izbor vrste popusta definisane u šifarniku vrsta popusta, kao i određivanje prioriteta primene i načina obračuna.
- **Prioritet**: određuje redosled primene popusta. Popusti se obračunavaju prema rastućem prioritetu.
- **Kaskadno / Osnovica**: određuje da li se popust obračunava na osnovicu umanjenu za prethodno obračunate popuste ili na puni iznos stavke.
- **Vrednost**: numerička vrednost završnog popusta koja će biti primenjena.

### 4.2 Rezime provizija trgovačkih predstavnika (agenata)

Na ovoj kartici prikazuje se pregled svih provizija obračunatih za agente uključene u dokument.

### 4.3 Završni troškovi / popusti / uvećanja

Predlažu se troškovi definisani na kartici kupca u sekciji **Troškovi / Popusti**.
U ovoj tabeli:
- troškovi se unose kao pozitivni iznosi
- popusti se unose kao negativni iznosi
Ove stavke primenjuju se na ceo dokument i ne raspoređuju se na pojedinačne artikle.
Mogu sadržati:
- dodatne troškove
- opšte popuste
- uvećanja vrednosti dokumenta
Ako su definisani na kartici kupca, automatski se predlažu prilikom kreiranja dokumenta.

#### Dostupna polja

- **Tip / Naziv**: omogućava izbor vrste troška definisane u šifarniku vrsta troškova i određivanje procenta troška.
- **Opis troška**: prikazuje iznos troška u valuti dokumenta.
- **PDV**: određuje poresku stopu koja će biti primenjena na uneti trošak.
- **Procenat / Vrednost**: određuje da li se trošak obračunava kao procenat ili kao unapred definisan novčani iznos. Ako je izabrana opcija **Vrednost**, iznos troška potrebno je uneti u polje **Iznos troška**.
- **Procenat**: numerička vrednost procenta troška.
- **Detalji izjave**: prikazuje eventualnu važeću izjavu o nameri povezanu sa kupcem.

### 4.4 Rezime PDV-a

Prikazuje pregled PDV-a dokumenta grupisan po pojedinačnim poreskim stopama.

### 4.5 Pregled dospeća plaćanja

Prikazuje pregled svih dospeća dokumenta prema vrsti i načinu plaćanja.

#### Dostupna polja

- **Redni broj**: redni broj stavke.
- **Način plaćanja**: alfanumerička šifra načina plaćanja preuzeta sa kartice **Plaćanja** u zaglavlju dokumenta.
- **Iznos**: obračunati iznos dospeća. Vrednost je moguće ručno promeniti. U tom slučaju automatski se aktivira oznaka **Ručna izmena**. Sistem takođe automatski kontroliše usklađenost između iznosa dospeća i ukupnog iznosa dokumenta.
- **Datum dospeća**: obračunati datum dospeća. Vrednost se može ručno promeniti, pri čemu se automatski aktivira oznaka **Ručna izmena**.
- **Troškovi naplate**: prikazuje obračunate troškove naplate.
- **PDV**: poreska stopa koja se primenjuje na troškove naplate. Vrednost se može ručno izmeniti.
- **Šema plaćanja**: omogućava izbor šeme koja generiše automatsko knjiženje naplate ili plaćanja. Potrebno je obratiti pažnju na šemu jer se koristi konto definisan u samoj šemi bez dodatnog konta.
- **Konto / podkonto kupca ili dobavljača**: konto koji se koristi za evidentiranje naplate ili plaćanja (npr. blagajna ili banka). Ova vrednost zamenjuje konto definisan u kontnoj šemi naplate ili plaćanja.
- **Broj računa**: eventualni broj potvrde o prijemu uplate.
- **Pojedinačno knjiženje zatvaranja**: omogućava zasebno knjiženje zatvaranja dospeća u automatskom knjiženju.
- **Vrsta popusta**: vrsta finansijskog popusta povezana sa dospećem.
- **Iznos popusta**: vrednost finansijskog popusta koja će biti primenjena prilikom naplate.
- **Detalji izjave**: referenca na izjavu o nameri. Pošto se na troškove naplate može primeniti posebna PDV stopa, potrebno je omogućiti povezivanje odgovarajuće izjave o nameri, isto kao i na stavkama artikala i troškova.

#### Dodatna polja za ulazne račune

Kod ulaznih računa dostupna su i sledeća polja:
- **Predznak**: samo dospeća koja imaju uključenu ovu oznaku mogu biti uključena u procedure plaćanja korišćenjem definisanih kontnih šema i konta.

- **Referentni model plaćanja**: model za generisanje poziva na broj. U pojedinim lokalizacijama svako dospeće na računu mora imati sopstvenu referentnu oznaku koju izdavalac računa dodeljuje prema definisanim pravilima. Primer takvog modela je **IBAN_PaymentReferenceModels**, koji omogućava automatsko generisanje odgovarajućeg poziva na broj.

- **Tip modela plaćanja**: šifra generisana prema modelu reference plaćanja. Ova šifra prenosi se na otvorenu stavku i koristi se kod elektronskih plaćanja prema banci kako bi banka mogla da prepozna koje je dospeće izmireno. Vrednost se koristi i za automatsko zatvaranje otvorenih stavki nakon uvoza bankovnih izvoda.

- **Rok za avansno plaćanje**: datum do kojeg je moguće ostvariti finansijski popust za prevremeno izmirenje obaveze. Ovo polje predviđeno je i za potrebe elektronskih računa prema SDI standardu.

### 4.6 Ukupni iznosi dokumenta

- **Iznos stavki bez popusta**: zbir vrednosti svih artikala na dokumentu.

- **Avans**: iznos eventualnog avansa povezanog sa dokumentom.

- **Vrednost poklonjenih artikala**: ukupna vrednost artikala označenih kao besplatni artikli na kartici **Artikli**.

- **Ukupni primenjeni rabati**: zbir svih popusta primenjenih na artikle, bez završnih popusta.

- **Neto vrednost artikala**: `Iznos stavki bez popusta − Ukupni primenjeni rabati`

- **Ukupno završnih rabata**: ukupna vrednost završnih popusta izraženih kao procenat na bruto vrednost artikala.

- **Iznos umanjen za ukupan popust**: `Neto vrednost artikala − Ukupno završnih rabata`

- **Ukupno za stavke troškova**: zbir vrednosti svih stavki tipa trošak definisanih na dokumentu.

- **Troškovi naplate**: ukupan iznos troškova naplate unetih u tabeli **Troškovi**.

- **Trošak takse**: ukupan iznos taksi unetih u tabeli **Troškovi**.

- **Ukupni troškovi / popusti / uvećanja**: ukupna vrednost svih troškova, popusta i uvećanja definisanih u tabeli **Troškovi**.

- **Poreska osnovica**: `Neto vrednost artikala − Ukupno završnih rabata + Ukupno za stavke troškova + Ukupni troškovi/popusti/uvećanja`

- **Porez**: zbir svih vrednosti prikazanih u pregledu PDV-a.

- **Ukupno**: `Poreska osnovica + Porez`

## 5. Transport

Dostupni podaci:

- **Primalac**: automatski se predlaže podrazumevani primalac definisan na kartici kupca. Ako nije definisan, koristi se adresa kupca.
- **Odredište**: automatski se predlaže podrazumevano odredište primaoca ukoliko je definisano na kartici kupca.
- **Broj za praćenje**: slobodno polje za unos broja pošiljke.
- **Zapremina**: prikazuje ukupnu zapreminu svih artikala na dokumentu.
  Vrednost se izračunava sabiranjem zapremina artikala definisanih na kartici artikla u sekciji **Težine/Dimenzije**, pod uslovom da jedinica mere zapremine odgovara jedinici definisanoj u parametrima DDT-a.
- **Neto težina**: prikazuje ukupnu neto težinu svih artikala na dokumentu.Vrednost se preuzima sa kartice artikla iz sekcije **Težine/Dimenzije**, pod uslovom da jedinica mere težine odgovara postavkama parametara DDT-a.
- **Bruto težina**: prikazuje ukupnu bruto težinu svih artikala na dokumentu. Vrednost se preuzima sa kartice artikla iz sekcije **Težine/Dimenzije**, pod uslovom da jedinica mere težine odgovara postavkama parametara DDT-a.
- **Spoljni izgled robe**: izbor vrednosti iz odgovarajućeg šifarnika.
- **Paketi**: automatski se predlaže broj paketa definisan na kartici artikla u sekciji **Težine/Dimenzije**, u poljima:
  - Artikli sadržani u jednom paketu
  - Paketi za formiranje artikla
  U obzir se uzimaju samo artikli za koje je ovaj podatak definisan.
- **Vrednost ručno izmenjena**: omogućava ručnu izmenu polja:
  - Zapremina
  - Neto težina
  - Bruto težina
  - Paketi
  Bez ove opcije navedene vrednosti preuzimaju se sa kartice artikla i nije ih moguće menjati.

- **Ulazni / izlazni carinski ured**: polja namenjena Transport modulu u rumunskoj lokalizaciji, povezana sa šifrarnikom carinskih ispostava.
- **Ulazni / izlazni granični prelaz**: polja namenjena Transport modulu u rumunskoj lokalizaciji, povezana sa šifrarnikom graničnih prelaza.
- **Prevoz organizuje**: potrebno je odabrati subjekt koji organizuje transport.
  Dostupne opcije:
  - Pošiljalac
  - Primalac
  - Prevoznik
  U zavisnosti od izbora menjaju se dostupna polja za unos.

  Ako prevoz organizuje **pošiljalac**, moguće je uneti:
  - registarsku oznaku vozila
  - prikolicu
  - datum početka prevoza
  - vreme početka prevoza

  Ako prevoz organizuje **primalac**, dostupna su ista polja.
  Ako prevoz organizuje **prevoznik**, dostupna su dodatna polja:

  - konto prevoznika
  - registarska oznaka vozila
  - prikolica
  - datum prevoza
  - vreme prevoza
  - naručilac prevoza
  - utovarivač
  - vlasnik robe
  - mesto utovara

## 6. Povezani dokumenti

Na ovoj kartici moguće je pregledati dokumente povezane sa DDT-om.
Dokumente je moguće priložiti na dva načina:

- korišćenjem dugmeta **Dokumenti** na alatnoj traci, gde je moguće:
  - odabrati postojeći dokument iz Fluentisa
  - kreirati novi dokument za prilaganje
- desnim klikom unutar tabele i izborom opcije **Priloži datoteku**, čime se pokreće postupak kreiranja novog dokumenta za prilaganje.