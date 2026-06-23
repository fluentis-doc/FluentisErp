---
title: Poreski podaci
sidebar_position: 3
---

U ovoj kartici unose se podaci i parametri pretežno fiskalne prirode.

### Polja

**Nije u kupcu/dobavljaču**: ovo polje je zastarelo i prisutno radi retrokompatibilnosti (odnosi se na Spezometar pre 2017. godine koji je ukinut). Uprkos tome, oznaka je i dalje funkcionalna, jer je još uvek prisutna godišnja funkcionalnost Spezometra (čl. 21. DL 78/2010).

**Isključi iz prijave black list**: ovo polje je zastarelo i prisutno radi retrokompatibilnosti. Fiskalna obaveza je trenutno ukinuta.

**CIG**: ova opcija aktivira odgovarajuće polje unutar izlaznih računa za unos identifikacionog koda javne nabavke (npr. za javne tendere).

**CUP**: ova opcija aktivira odgovarajuće polje unutar izlaznih računa za unos jedinstvenog projektnog koda (za fakturisanje javnim ustanovama).

**Porez po odbitku**: ova oznaka, koja se koristi zajedno sa sledećim poljem **Tip poreza po odbitku**, aktivira za trenutno otvorene matične podatke dobavljača upravljanje porezom po odbitku na naknade primaocima prihoda. Kada je ova funkcionalnost aktivna na strani dobavljača, unos dokumenata, knjiženje primljenih računa i izvršenih plaćanja obavlja se putem modula [Primaoci naknada](/docs/finance-area/professional-men/general-overview). Na taj način omogućeno je ispravno i automatsko upravljanje porezom po odbitku, kao i popunjavanje podataka za Jedinstvenu potvrdu (CU – Certificazione Unica).

**Tip poreza po odbitku**: polje (padajuća lista) povezano je sa tabelom [**Tipovi poreza po odbitku**](/docs/configurations/tables/finance/withholding-tax-types), u kojoj se definišu vrste poreza po odbitku koje treba koristiti. Za svaki red koji odgovara određenoj vrsti poreza po odbitku potrebno je popuniti polja koja omogućavaju automatski obračun i knjiženje kroz modul [**Primaoci naknada**](/docs/finance-area/professional-men/general-overview).

### Javna uprava / Elektronsko fakturisanje

Opcija **Elektronsko fakturisanje** omogućava podešavanja u donjoj tabeli koja se odnose na specifičnosti elektronskog fakturisanja za javnu upravu ili za elektronsko fakturisanje sa privatnim licima.

**Šifra kancelarije / Kod primaoca**: *IPA* kod javne ustanove primaoca računa ili (kada je aktivna opcija *Elektronsko fakturisanje*) *SDI* kod primaoca računa.

**Naziv kancelarije / Opis primaoca**: opis polja kancelarije/primaoca koji se popunjava nazivom javne ustanove ili privatnog lica.

**Naziv firme**: u ovom polju moguće je povezati već postojeći zapis u Fluentisu koji se odnosi, na primer, na javnu ustanovu zavisnu od glavnog matičnog subjekta koji se koristi (primer: odeljenje za javne radove opštine ili određena zdravstvena ustanova).

Ovaj povezani zapis treba da bude postavljen kao odredište za glavni zapis na kartici [**Dostava**](/docs/erp-home/registers/contacts/create-new-contact/accounting-data/customer-vendors-data/delivery). Na taj način će odredište (npr. odeljenje za javne radove) biti navedeno u XML datoteci zajedno sa kodom kancelarije i ostalim podacima kao što su adresa i slično.

Za pravilno upravljanje sa više šifara kancelarija (i samim tim više subjekata) povezanih sa istim glavnim zapisom, preporučuje se korišćenje i popunjavanje ovog polja (koje nije obavezno i nije potrebno u slučaju jedne šifre direktno povezane sa odgovarajućim zapisom).

**Datum početka**: određuje datum unosa stavke ili datum od kojeg je aktivan odnos isporuke sa određenom javnom upravom.

<a id="codice_articolo_fornitore_cliente" style={{ textDecoration: 'none' , color: 'inherit' }}></a>

**Datum završetka**: određuje datum završetka odnosa isporuke sa javnom upravom i čini ovu poziciju nevažećom za generisanje elektronskog računa.

**E-mail**: polje rezervisano za PEC adresu ukoliko je u polju *Tip koda* aktiviran način prijema putem PEC-a.

**Poreski režim**: polje potrebno za upravljanje elektronskim računima (posebno za ulazne račune iz EU ili za *reverse charge* postupke). Podaci se unose u XML zapise koje generiše Fluentis. Padajuća lista povezana je sa sistemskom tabelom koja sadrži dostupne poreske režime.

**Tip šifre artikla za dobavljača/kupca**: u ova dva polja moguće je uneti dodatnu oznaku uz šifru artikla koja će se koristiti u ulaznom ili izlaznom fakturisanju za potrebe XML obrasca. Funkcionalnost je korisna u različitim slučajevima, kao što je automatsko kreiranje ulaznih računa iz primljenih XML datoteka, omogućavajući prepoznavanje šifre artikla koju koristi dobavljač u odnosu na podešavanja artikla u glavnom šifarniku, u sekciji preferiranih dobavljača.

**PDV grupa / Matični zapis**: polje potrebno za upravljanje PDV grupom kojoj pripada kupac ili dobavljač. U ovom polju poziva se osnovni matični zapis (koji prethodno mora biti kreiran) glavnog subjekta kako bi se njegov poreski identifikacioni broj uneo u XML format umesto broja subjekta koji je član grupe, u skladu sa propisima.

:::tip Info: PDV GRUPA
Uvođenjem ove regulative predviđena je mogućnost da preduzeća povezana finansijskim, ekonomskim i organizacionim interesima formiraju jedinstvenu grupu koja se, za potrebe PDV-a, tretira kao jedan poreski obveznik pred poreskim organima. Takva grupa ima jedinstven poreski identifikacioni broj.

Preduzeća koja čine deo grupe fakturišu poslovne transakcije prema trećim licima koristeći zajednički PDV identifikacioni broj, odnosno PDV broj grupe.

S druge strane, prenosi dobara i pružanje usluga između članica grupe ne utiču na PDV osnovicu, jer se smatraju internim transakcijama unutar same grupe.

Drugim rečima, sve transakcije koje izvrši jedan subjekt unutar grupe smatraju se izvršenim od strane cele grupe.

Fakture i ostala dokumentacija izdaju se od strane predstavnika grupe ili pojedinačnog člana, pri čemu se na dokumentima navode i PDV identifikacioni broj grupe i poreski identifikacioni broj člana koji je izvršio konkretnu transakciju.
:::

### Ograničenje rokova plaćanja za kvarljivu robu

**Član 62**: opcija koja omogućava aktiviranje upravljanja maksimalnim rokovima plaćanja u prehrambenom sektoru za kvarljive i nekvarljive proizvode u skladu sa čl. 62 Zakonske uredbe br. 192/2012.

Prilikom unosa artikala na fakturu sistem proverava rok plaćanja u odnosu na zakonski propisane rokove za ovu vrstu proizvoda.

Podržane su sledeće opcije:

> **Nedeljno poravnanje 30 dana**: postavlja rok plaćanja od 30 dana, zanemarujući ostala podešavanja (uključujući i ona vezana za čl. 62, npr. rok od 60 dana).  
> **Nedeljno poravnanje 60 dana**: NIJE PODRŽANO / ONEMOGUĆENO

Postoje i druga podešavanja vezana za **upravljanje kvarljivom robom**:

> **Dani plaćanja za kvarljivu robu** unutar [Šifarnik artikla > kartica Opšte](/docs/erp-home/registers/items/create-new-item), gde se definiše rok koji se primenjuje.

> **Dani do prijema računa** u *Šifarnik kupca/dobavljača > kartica Opšte > kartica Alternativne adrese*, korisno za određivanje tačnog datuma prijema računa. Da bi polje bilo dostupno, tip adrese povezan sa korišćenom alternativnom adresom i definisan u tabeli [Tipovi adresa](/docs/configurations/tables/general-settings/address-types) mora imati aktiviranu oznaku *Email*.

> **Dani transporta** u tabeli *Zone*, polje koje se može definisati u *Šifarnik kupca/dobavljača > kartica [Dostava](/docs/erp-home/registers/contacts/create-new-contact/accounting-data/customer-vendors-data/delivery)*.

### Logika obračuna datuma dospeća plaćanja

Rok plaćanja predlaže se na osnovu datuma početka obračuna računa.

Datum početka obračuna automatski se određuje na sledeći način:

- inicijalno se postavlja na kasniji datum između datuma unosa i datuma računa;
- ako su za tip e-mail adrese za fakturisanje definisani dani prijema računa, oni se dodaju datumu računa, a datum početka obračuna postaje kasniji od sledeća dva datuma:
  - postojećeg datuma početka obračuna;
  - datuma računa uvećanog za dane prijema računa;
- ukoliko za tip e-mail adrese nisu definisani dani prijema računa, sistem proverava da li postoje dani transporta definisani u zoni povezanoj sa kupcem. U tom slučaju dani transporta dodaju se datumu računa, a datum početka obračuna postaje kasniji od:
  - postojećeg datuma početka obračuna;
  - datuma računa uvećanog za dane transporta;
- ako za zonu kupca nisu definisani dani transporta, datum početka obračuna odgovara kasnijem datumu između datuma unosa računa i datuma računa.

Korisnik u svakom slučaju može ručno izmeniti datum početka obračuna i uneti željeni datum. Sistem će evidentirati da je datum početka obračuna promenjen ručno.

**Da bi se pravilno prikazao datum dospeća, potrebno je definisati dve nove opcije plaćanja sa aktiviranom opcijom „DL Čl. 62“, obe sa uključenim opcijama „kraj meseca“ i „komercijalno“, jednu sa rokom od 30 dana, a drugu sa rokom od 60 dana.**

![](/img/it-it/erp-home/registers/contacts/create-new-contact/accounting-data/customer-vendors-data/fiscal-information/image04.png)

Ako su uslovi plaćanja definisani na kartici kupca povoljniji od onih izračunatih za poljoprivredne ili prehrambene proizvode, zadržavaju se uslovi plaćanja definisani za kupca.

Prilikom ručnog unosa računa (uključujući slučaj preuzimanja stavki iz narudžbine kupca), za kupca kod koga je aktivirana oznaka **Čl. 62** moguće je unositi samo artikle koji imaju istu vrstu plaćanja, odnosno:

- sve artikle sa rokom plaćanja od 30 dana,
- sve artikle sa rokom plaćanja od 60 dana,
- ili artikle bez definisanog roka plaćanja.

Sistem će prikazati upozorenje koje sprečava unos artikala sa različitim rokovima plaćanja i obavestiti korisnika da će uslovi plaćanja biti automatski prilagođeni prema rokovima definisanim na artiklima.

Prilikom kreiranja računa iz drugih dokumenata (na primer iz otpremnice), dokumenti će se automatski razdvajati prema rokovima plaćanja definisanim na artiklima. Ako isti dokument sadrži artikle sa različitim rokovima plaćanja, sistem će kreirati više zasebnih računa.

### Polja vezana za upravljanje SDD (SEPA Direct Debit – SEPA direktno zaduženje)

SEPA direktno zaduženje, koje zamenjuje nekadašnji nacionalni RID, predstavlja instrument autorizovane naplate zasnovan na ovlašćenju koje dužnik daje poveriocu.

Zasniva se na prethodnom sporazumu (mandatu) između dužnika i poverioca, kojim se poveriocu omogućava pokretanje međubankarske procedure za automatsko terećenje računa dužnika.

**Kod namene mandata**: u ovo polje potrebno je uneti *Purpose Code* (najčešće se koristi kod **GDSV** – *PurchaseSaleOfGoodsAndServices*).

**Šifra klijenta/mandata**: u ovo polje unosi se identifikacioni kod dodeljen mandatu koji je potpisao dužnik. Odgovara tehničkoj specifikaciji označenoj kao **AT-01 Unique Mandate Reference**.

Polje nije **osetljivo na velika i mala slova** (*case-sensitive*). Na primer, identifikatori `123AAa45678`, `123aaA45678`, `123aaa45678` i `123AAA45678` smatraju se identičnim.

Ne može sadržati samo razmake i mora sadržati isključivo znakove iz osnovnog latiničnog skupa.

*Primer*: `IT05394480900`

**Izmena mandata**: kartica trenutno nije podržana i treba ostati neoznačena.

**Datum potpisivanja mandata**: u ovo polje unosi se datum potpisivanja mandata.

**Datum prvog izvršenja / Datum poslednjeg izvršenja**: budući da je SDD naplata (kao i nekadašnji RID sistem) po svojoj prirodi periodična, ovaj raspon datuma određuje početak i kraj važenja naplate.

![](/img/it-it/erp-home/registers/contacts/create-new-contact/accounting-data/customer-vendors-data/fiscal-information/image05.png)

Za upravljanje SDD-om potrebno je popuniti i sledeća polja:

- **Jedinstveni kod kupca**
- **Identifikator poverioca**: na primer `IT95ZZZ0000007333890900`

u tabeli **Preduzeće**.

![](/img/it-it/erp-home/registers/contacts/create-new-contact/accounting-data/customer-vendors-data/fiscal-information/image06.png)

### OSTALO

**Upravljanje zajedničkim računima**: opcija omogućava upravljanje zajedničkim izdavanjem izlaznih računa.

Ova situacija je česta, na primer, kod prodaje fizičkim licima dobara koja mogu biti predmet poreskih olakšica ili odbitaka. Ukoliko trošak snosi više osoba, račun mora glasiti na sve učesnike kako bi svaki od njih mogao ostvariti pravo na poreski odbitak.

![](/img/it-it/erp-home/registers/contacts/create-new-contact/accounting-data/customer-vendors-data/fiscal-information/image07.png)

Kada je opcija aktivna, na računima koji se izdaju za odgovarajući matični podatak pojaviće se dodatna kartica na kojoj je moguće uneti suvlasnike.

![](/img/it-it/erp-home/registers/contacts/create-new-contact/accounting-data/customer-vendors-data/fiscal-information/image08.png)

Da bi se suvlasnici mogli koristiti na računima, potrebno ih je prethodno evidentirati u sekciji **Alternativne adrese** unutar kartice **Opšti podaci**.

U tu svrhu potrebno je unapred definisati tip adrese sa aktiviranom opcijom **Suvlasnici** u tabeli **Tipovi adresa**, na koju je povezan padajući meni polja **Tip adrese**.

![](/img/it-it/erp-home/registers/contacts/create-new-contact/accounting-data/customer-vendors-data/fiscal-information/image09.png)

![](/img/it-it/erp-home/registers/contacts/create-new-contact/accounting-data/customer-vendors-data/fiscal-information/image10.png)

![](/img/it-it/erp-home/registers/contacts/create-new-contact/accounting-data/customer-vendors-data/fiscal-information/image11.png)

Nakon toga suvlasnici se unose na računu, uz navođenje procenta raspodele troška za svakog od njih.

![](/img/it-it/erp-home/registers/contacts/create-new-contact/accounting-data/customer-vendors-data/fiscal-information/image12.png)