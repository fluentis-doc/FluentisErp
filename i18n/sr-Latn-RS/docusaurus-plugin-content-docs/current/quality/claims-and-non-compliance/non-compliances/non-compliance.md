---
title: Neusklađenost
sidebar_position: 2
---

Upravljanju se može pristupiti putem **Kvalitet > Neusklađenost > Nova neusklađenost** ili iz **Pretrage neusklađenosti**.

:::important Čemu služi
*Neusklađenosti* se koriste za identifikaciju i dokumentovanje odstupanja od utvrđenih standarda ili zahteva, bilo da se odnose na proizvodnju ili uslugu.

Ovaj proces pomaže da proizvodi, usluge ili procesi budu usklađeni i unapređeni kako bi se održali kvalitet i bezbednost. Takođe olakšava usvajanje korektivnih mera radi sprečavanja budućih problema.

*Neusklađenosti* moraju:
- utvrditi uzroke neusklađenosti;
- utvrditi da li postoje ili se mogu pojaviti slične neusklađenosti;
- proceniti potrebu za preduzimanjem mera radi uklanjanja uzroka neusklađenosti.

Sledeći izveštaji su standardno dostupni:

> **Neusklađenost**: obrazac *Neusklađenosti*;
> **8D Neusklađenost**: obrazac za popunjavanje za 8D upravljanje *Neusklađenostima*.
:::

## Kontrolna dugmad

### ![](/img/neutral/common/save.png) Sačuvaj neusklađenost

Klikom na ovo dugme čuvaju se sve izmenjene informacije o prikazanoj *Neusklađenosti*.

### ![](/img/neutral/common/new.png) Nova neusklađenost

Klikom na ovo dugme čuvaju se sve izmenjene informacije o prikazanoj *Neusklađenosti* i otvara se novi obrazac za kreiranje nove *Neusklađenosti*.

### ![](/img/neutral/common/execute.png) Valorizacija neusklađenosti

Dugme je dostupno na kartici *Zaglavlje*.

Moguće je kreirati *Odobrenje* za *Dobavljača* ili *Kupca* kojem je dodeljena *Neusklađenost*.

Dugme je dostupno samo ako je *Neusklađenost* sačuvana, odobrena, ako je *Neusklađenost* tipa *sa kupcem* ili *sa dobavljačem* i ako postoji *Vrednost za odobrenje*.

Prikazuje se zahtev za unos podataka/potvrdu za:
> **Kupac** ili **Dobavljač**: primalac novog *Odobrenja* (obavezan podatak); predlaže se *Kupac* ili *Dobavljač* iz izvorne *Neusklađenosti*.
> **Tip računa**: *Tip dokumenta* novog *Odobrenja* (obavezan podatak); predlaže se *Tip računa* definisan u *Tipu neusklađenosti* izvorne *Neusklađenosti*.
> **Opis**: opis koji će biti korišćen za red *Trošak* novog *Odobrenja* (obavezan podatak); predlaže se opis definisan u [Parametrima neusklađenosti](/docs/quality/claims-and-non-compliance/non-compliances/procedures/non-compliance-valorisation), odeljak *Reference na neusklađenosti*.
> **PDV**: *Tip PDV-a* koji će biti korišćen za red *Trošak* novog *Odobrenja*.
> Predlaže se *Tip PDV-a* prema sledećem redosledu prioriteta:
> 1. Ako postoji *Izjava o nameri*, koristi se *Tip PDV-a* iz dokumenta;
> 2. Ako *Izjava o nameri* ne postoji, koristi se *Tip PDV-a* povezan sa *Dobavljačem* *Neusklađenosti*;
> 3. Ako *Izjava o nameri* ne postoji i *Tip PDV-a* povezan sa *Dobavljačem* *Neusklađenosti* nije definisan, koristi se *Tip PDV-a* povezan sa *Tipom neusklađenosti*.
>
> Nakon toga klikne se na dugme **U redu** ili **Otkaži**, u zavisnosti od toga da li se želi nastaviti postupak kreiranja.
> Po završetku obrade prikazuje se novo kreirano *Odobrenje*.

### ![](/img/neutral/common/corrective.png) Kreiranje korektivne mere

Dugme dostupno na kartici *Upravljanje nedostacima*.

Dugme je dostupno samo ako je *Neusklađenost* sačuvana, odobrena i ako je izabran važeći red *Nedostatka*.

import CorrectiveActionPopupInsertion from './../../../import/sections/corrective-action-popup-insertion.md'

<CorrectiveActionPopupInsertion />

## Upravljanje podacima

## Podaci zaglavlja dokumenta

Podaci kojima se upravlja su:

> **Tip neusklađenosti**: *Tip* dokumenta (obavezan podatak).
> Prilikom unosa nove *Neusklađenosti* predlaže se *Tip neusklađenosti* definisan u *Parametrima neusklađenosti*, odeljak *Neusklađenosti*.
>
> **Godina/Broj/Datum**: *Godina*, *Broj* i *Datum* *Neusklađenosti* (obavezni podaci).
> Prilikom unosa nove *Neusklađenosti*:
> - *Datum* se predlaže kao tekući datum;
> - *Godina* i *Broj* predlažu se na osnovu *Datuma* i *Numeracije* povezane sa *Tipom neusklađenosti*.
>
> **Kupac** ili **Dobavljač**: referenca na *Kupca* ili *Dobavljača* kojem je *Neusklađenost* upućena (obavezno ako je *Tip neusklađenosti* *Dobavljaču* ili *Kupcu*).
> Polje *Kupac* ili *Dobavljač* dostupno je u zavisnosti od izabranog *Tipa neusklađenosti*.
>
> **Funkcija/Oblast/Odeljenje**: referenca na *Funkciju/Oblast/Odeljenje* (obavezno ako je *Tip neusklađenosti* *Interna*).
> Dostupnost zavisi od izabranog *Tipa neusklađenosti*.

## Zaglavlje

Podaci kojima se upravlja su:

> **Odgovorna osoba**: *Zaposleni* odgovoran za *Neusklađenost*.
> Prilikom unosa nove *Neusklađenosti* predlaže se *Odgovorna osoba* definisana u odeljku *Parametri neusklađenosti*, *Neusklađenosti*.
>
> **Odgovorna funkcija**: *Funkcija preduzeća* odgovorna za *Neusklađenost*.
> Prilikom unosa nove *Neusklađenosti* predlaže se *Odgovorna funkcija* definisana u odeljku *Parametri neusklađenosti*, *Neusklađenosti*.
>
> **Spoljni kontakt**: slobodne beleške o kontakt osobi *Kupca*, *Dobavljača* ili *Funkcije/Oblasti/Odeljenja* primaoca *Neusklađenosti*.
>
> **Mesto proizvodnje**: referenca na *Mesto proizvodnje* gde je pronađena *Neusklađenost*.
>
> **Razlog**: slobodne beleške o razlogu unosa *Neusklađenosti* (obavezan podatak).
>
> **Predloženo rešenje**: slobodne beleške o temi.
> Obično se koristi za označavanje predloženog rešenja primaocu *Neusklađenosti*.
>
> **Obavešteno/Datum**: ručna oznaka da li je primalac obavešten o *Neusklađenosti* i kog datuma.
>
> **Odgovor dobavljača/interni odgovor**: slobodne beleške o temi.
> Obično se koristi za evidentiranje odgovora primaoca *Neusklađenosti* na poslato obaveštenje.
>
> **Audit**: proširenje samo za čitanje u kojem su prikazani sledeći podaci:
>> **Datum kreiranja/Ime**: datum i *A.R.M. korisnik* koji je uneo *Neusklađenost*.
>> **Datum poslednje izmene/Ime**: datum i *A.R.M. korisnik* koji je izvršio poslednju izmenu *Neusklađenosti*.
>
> **Odobreno/Datum**: proširenje u koje se mogu uneti podaci o odobrenju *Neusklađenosti*:
>> Samo **Odgovorna osoba** ili **Odgovorna funkcija** može odobriti *Neusklađenost*.
>> **Odobreno**: označava da je *Neusklađenost* *Odobrena*.
>> Nakon odobravanja automatski se predlažu sledeći podaci: *Datum*, postavljen na tekući datum uz mogućnost izmene, kao i *Ime* i *Osoba*, preuzeti iz povezanog *A.R.M. korisnika* i *Zaposlenog* povezanog sa *A.R.M. korisnikom*.
>> **Datum**: datum kada je *Neusklađenost* *Odobrena*.
>> Unošenjem datuma automatski se popunjavaju *Ime* i *Osoba* na osnovu povezanog *A.R.M. korisnika* i *Zaposlenog* povezanog sa *A.R.M. korisnikom*, a postavlja se i oznaka *Odobreno*.
>> **Ime**: *A.R.M. korisnik* koji je odobrio *Neusklađenost*. Ovaj podatak je samo za čitanje.
>> **Osoba**: *Zaposleni* koji je odobrio *Neusklađenost*. Ovaj podatak je samo za čitanje.
>> **Funkcija**: *Funkcija preduzeća* koja je odobrila *Neusklađenost*.
>> Dostupno samo kada je *Neusklađenost* *Odobrena*.
>
> **Datum zatvaranja/Datum**: proširenje u koje se mogu uneti podaci o zatvaranju *Neusklađenosti*:
>> Samo **Odgovorna osoba** ili **Odgovorna funkcija** može zatvoriti *Neusklađenost*.
>> **Zatvoreno**: označava da je *Neusklađenost* *Zatvorena*.
>> Nakon zatvaranja automatski se predlažu sledeći podaci: *Datum*, postavljen na tekući datum uz mogućnost izmene, kao i *Ime* i *Osoba*, preuzeti iz povezanog *A.R.M. korisnika* i *Zaposlenog* povezanog sa *A.R.M. korisnikom*.
>> **Datum**: datum kada je *Neusklađenost* *Zatvorena*.
>> Unošenjem datuma automatski se popunjavaju *Ime* i *Osoba* na osnovu povezanog *A.R.M. korisnika* i *Zaposlenog* povezanog sa *A.R.M. korisnikom*, a postavlja se i oznaka *Zatvoreno*.
>> **Ime**: *A.R.M. korisnik* koji je zatvorio *Neusklađenost*. Ovaj podatak je samo za čitanje.
>> **Osoba**: *Zaposleni* koji je zatvorio *Neusklađenost*. Ovaj podatak je samo za čitanje.
>> **Funkcija**: *Funkcija preduzeća* koja je zatvorila *Neusklađenost*.
>> Dostupno samo kada je *Neusklađenost* *Zatvorena*.
>> **Obaveštenje o zatvaranju/Datum zatvaranja**: ručna oznaka da li je primalac obavešten o zatvaranju *Neusklađenosti* i kog datuma.

### Referenca dokumenta

Kartica sadrži informacije o dokumentima koji su doveli do upravljanja *Neusklađenošću*. Obuhvaćeni su sledeći podaci:

> **Račun**, **Otpremnica**, **Prijem robe**, **Povrat od podizvođača**, **Reklamacija**, **Godina/Narudžbina/Serija** i **Broj faze/podfaze/deklaracije**:
> Sve su to reference samo za čitanje na izvorni dokument koji je kreirao *Neusklađenost*.
> Standardno je ovo jedini dokument koji može kreirati *Neusklađenost* i automatski postavlja referencu i *Reklamaciju*.

### Beleške

Kartica sadrži opšte i specifične beleške o dokumentu. Obuhvaćeni su sledeći podaci:

> **Komercijalne beleške**: slobodne beleške rezervisane za prodajno osoblje.
> **Tehničke beleške**: slobodne beleške rezervisane za tehničko osoblje.
> **Administrativne beleške**: slobodne beleške rezervisane za administrativno osoblje.

### Dodatni podaci

Moguće je uneti opšte [Dodatne podatke](/docs/configurations/utility/extra-data/extradata/new-extradata) za *Neusklađenost*.

### Ostali troškovi

Na ovoj kartici mogu se uneti i drugi troškovi, pored onih koji proizlaze iz troškova spornih stavki i troškova upravljanja dokumentima.

> **Direktni troškovi**
> Popis troškova koji se mogu direktno pripisati ceni spornih artikala, pruženoj usluzi i trošku rada nastalom tokom upravljanja *Neusklađenošću*. Popis sadrži sledeće informacije:
>> **Stavka troška** i **Opis stavke troška**: mogu se izabrati samo *Stavke troška* sa *Tipom troška = Direktni trošak*.
>> **Tip troška**: podatak samo za čitanje koji prikazuje *Tip troška* povezan sa izabranom *Stavkom troška*.
>> **Primenjuje se na...**: podatak samo za čitanje koji prikazuje na koju komponentu troška se primenjuje *Vrednost* (ako je izražena kao procenat); moguće dodele su:
>>> *Trošak materijala*: zbir troškova stavki *Neispravnih stavki* i *Korišćenih materijala*;
>>> *Trošak mašina*, *Trošak rada* i *Trošak obrade*: zbir troškova obrade *Neispravnih stavki*;
>>> *Industrijski trošak*: zbir *Ukupno obrađenog materijala* i *Ukupno neobrađenog materijala*.
>>>
>> **Procenat / Vrednost**: podatak samo za čitanje koji određuje metod obračuna koji će biti primenjen na *Vrednost* (*Procenat* ili *Fiksna vrednost*).
>> **Vrednost**: *Procenat* koji će biti primenjen ili *Vrednost* koja će biti dodata komponenti troška navedenoj u polju *Primenjuje se na...*.
>> **Beleška**: slobodne beleške.
>>
> **Opšti troškovi**
> Popis opštih troškova koji se ne mogu direktno pripisati *Neusklađenosti* i koji podržavaju celokupan poslovni proces. Popis sadrži sledeće informacije:
>> **Stavka troška** i **Opis stavke troška**: mogu se izabrati samo *Stavke troška* sa *Tipom troška = Opšti trošak*.
>> **Tip troška**: podatak samo za čitanje koji prikazuje *Tip troška* povezan sa izabranom *Stavkom troška*.
>> **Procenat / Vrednost**: podatak samo za čitanje koji prikazuje metod obračuna koji će biti primenjen na *Vrednost* (*Procenat* ili *Fiksna vrednost*).
>> **Vrednost**: *Procenat* koji će biti primenjen ili *Vrednost* koja će biti dodata zbiru *Ukupno obrađenog materijala* i *Ukupno neobrađenog materijala*.
>> **Beleška**: slobodne beleške.
>>
> **Ostali troškovi**
> Popis ostalih troškova. Popis sadrži sledeće informacije:
>> **Stavka troška** i **Opis stavke troška**: mogu se izabrati samo *Stavke troška* sa *Tipom troška = Ostali trošak*.
>> **Tip troška**: podatak samo za čitanje koji prikazuje *Tip troška* povezan sa izabranom *Stavkom troška*.
>> **Jedinica mere**: *Jedinica mere* koja se koristi za iskazivanje *Količine*.
>> **Količina**: *Količina* *Stavke troška*.
>> **Jedinična cena**: *Jedinična cena* *Stavke troška*.
>> **Ukupna cena**: podatak samo za čitanje koji prikazuje proizvod *Količine* i *Jedinične cene*.
>> **Beleška**: slobodne beleške.

### Vrednosti

Na ovoj kartici mogu se uneti podaci koji se odnose na dugovne i potražne dokumente za *Neusklađenost*, nastale troškove, troškove koji će biti naplaćeni i troškove koje je *Dobavljač/Kupac* priznao. Obuhvaćeni su sledeći podaci:

> **Valuta**, **Kurs** i **Datum valute**: *Valuta* *Dobavljača* ili *Kupca* u kojoj su iskazane sve vrednosti dokumenta, odgovarajući kurs prema *Valuti* *Preduzeća* i *Datum valute*.
> **Valorizovano** i **Referenca dokumenta zaduženja**: podaci samo za čitanje koji prikazuju da li je *Neusklađenost* valorizovana i referencu na generisano *Odobrenje*.
> **Referenca dokumenta odobrenja**: referenca na *Odobrenje* primljeno od *Dobavljača* ili *Kupca*.
> **Beleške na dokumentu odobrenja**: slobodne beleške o temi.
>
> **Ukupno neobrađeni materijal**: podatak samo za čitanje ako je u *Parametrima reklamacija i neusklađenosti*, za godinu datuma dokumenta, u odeljku *Neusklađenosti*, uključena opcija *Automatski ponovni obračun ukupnih iznosa*; predlaže se zbir troškova stavki neobrađenih *Neispravnih stavki* i *Korišćenih materijala*.
>
> **Ukupno obrađeni materijal**: podatak samo za čitanje ako je u *Parametrima reklamacija i neusklađenosti*, za godinu datuma dokumenta, u odeljku *Neusklađenosti*, uključena opcija *Automatski ponovni obračun ukupnih iznosa*; predlaže se zbir troškova obrade obrađenih *Neispravnih stavki*.
>
> **Ukupni direktni troškovi**: podatak samo za čitanje; predstavlja zbir *Vrednosti* primenjenih sa popisa *Direktni troškovi* na kartici *Ostali troškovi*.
>
> **Ukupni opšti troškovi**: podatak samo za čitanje; predstavlja zbir *Vrednosti* primenjenih sa popisa *Opšti troškovi* na kartici *Ostali troškovi*.
>
> **Ukupni ostali troškovi**: podatak samo za čitanje; predstavlja zbir *Vrednosti* primenjenih sa popisa *Ostali troškovi* na kartici *Ostali troškovi*.
>
> **Trošak upravljanja**: *Trošak upravljanja* preuzet iz polja *Trošak upravljanja* u *Parametrima reklamacija i neusklađenosti*, za godinu datuma dokumenta, odeljak *Neusklađenosti*; vrednost se može izmeniti.
>
> **Ukupno neusklađenosti**: podatak samo za čitanje ako je u *Parametrima reklamacija i neusklađenosti*, za godinu datuma dokumenta, u odeljku *Neusklađenosti*, uključena opcija *Automatski ponovni obračun ukupnih iznosa*; u tom slučaju ukupan iznos se obračunava kao zbir: *Ukupno neobrađenog materijala*, *Ukupno obrađenog materijala*, *Ukupnih direktnih troškova*, *Ukupnih opštih troškova*, *Ukupnih ostalih troškova* i *Troška upravljanja*. Ako opcija *Automatski ponovni obračun ukupnih iznosa* nije uključena, vrednost se unosi ručno.
>
> **Vrednost za odobrenje**: *Vrednost* koja će biti odobrena *Kupcu* ili *Dobavljaču*; ako je u *Parametrima reklamacija i neusklađenosti*, za godinu datuma dokumenta, u odeljku *Neusklađenosti*, uključena opcija *Automatski ponovni obračun ukupnih iznosa*, predlaže se vrednost jednaka *Ukupnom iznosu neusklađenosti*, uz mogućnost naknadne izmene.
>
> **Priznata vrednost**: vrednost koju priznaje *Kupac* ili *Dobavljač*; unosi se ručno.

## Upravljanje nedostacima

Ovde je prikazan popis pronađenih nedostataka koji će biti prijavljeni primaocu dokumenta i obuhvata sledeće podatke:

> **Sekvenca**: *Sekvenca* po kojoj su prikazani nedostaci; prikazuje se rastući redosled uz mogućnost izmene.
>
> **Pronađeni nedostatak**
>> **Šifra**: šifra *Pronađenog nedostatka*; mogu se uneti samo aktivni *Nedostaci* obuhvaćeni *Tipom neusklađenosti* dokumenta.
>> **Opis**: podatak samo za čitanje koji opisuje *Pronađeni nedostatak*.
>> **Beleške**: slobodne beleške o *Pronađenom nedostatku*.
>
> **Pretpostavljeni uzrok**
>> **Šifra**: šifra *Pretpostavljenog uzroka* koji je izazvao nedostatak; za *Tip neusklađenosti* dokumenta mogu se uneti samo aktivni i predviđeni *Pretpostavljeni uzroci*; nakon analize *Neispravnih stavki*, *Pretpostavljeni uzrok* može, ali ne mora biti potvrđen kao *Stvarni uzrok*.
>> **Opis**: podatak samo za čitanje koji opisuje *Pretpostavljeni uzrok*.
>> **Beleške**: slobodne beleške o *Pretpostavljenom uzroku*.
>
> **Faza detekcije**
>> **Šifra**: šifra *Faze detekcije* procesa u kojoj je nedostatak otkriven; mogu se uneti samo aktivne *Faze detekcije*.
>> **Opis**: podatak samo za čitanje koji opisuje *Fazu detekcije*.
>> **Beleške**: slobodne beleške o *Fazi detekcije*.
>
> **Stepen ozbiljnosti**
>> **Šifra**: šifra *Stepena ozbiljnosti* dodeljenog nedostatku; mogu se uneti samo aktivni *Stepeni ozbiljnosti*.
>> **Opis**: podatak samo za čitanje koji opisuje *Stepen ozbiljnosti*.
>
> **Zatvaranje nedostatka**
> Samo **Odgovorna osoba** ili **Odgovorna funkcija** može zatvoriti upravljanje određenim *Nedostatkom*.
> Zatvaranje svih *Nedostataka* ne zatvara automatski *Neusklađenost*.
>> **Zatvoreno**: označava da je upravljanje određenim *Nedostatkom* završeno; operater ga mora ručno označiti.
>> Nakon zatvaranja automatski se prikazuju sledeći podaci: *Datum zatvaranja*, postavljen na tekući datum uz mogućnost izmene, kao i *Ime* i *Osoba*, preuzeti iz povezanog *A.R.M. korisnika* i *Zaposlenog* povezanog sa *A.R.M. korisnikom* (*Ime* i *Osoba* nalaze se u proširenju *Podaci o zatvaranju nedostatka* na kartici *Podaci o nedostatku*).
>> **Datum zatvaranja**: datum kada je određeni *Nedostatak* završen.
>> Unošenjem datuma automatski se postavlja oznaka *Zatvoreno*.
>
> **Referenca korektivne mere**
>> **Tip**, **Godina** i **Broj**: podaci samo za čitanje koji predstavljaju referencu na *Korektivnu meru* povezanu sa redom *Nedostatka* i kreiranu pomoću dugmeta **Kreiraj korektivnu meru**.
>
> **Beleška**: slobodne beleške za određeni red *Nedostatka*.

### Podaci o nedostatku

Ovo su dodatni podaci za izabrani red *Nedostatka*. Podaci kojima se upravlja su:

> **Stvarni uzrok**: stvarni uzrok koji je izazvao nedostatak; za *Tip neusklađenosti* dokumenta mogu se uneti samo aktivni i predviđeni *Stvarni uzroci*.
> **Beleške o stvarnom uzroku**: slobodne beleške o *Stvarnom uzroku*.
> **Predloženo rešenje**: predloženo tehničko/komercijalno/administrativno rešenje koje treba primeniti; mogu se uneti samo aktivna *Rešenja*.
> **Beleške o predloženom rešenju**: slobodne beleške o *Predloženom rešenju*.
> **Doneta odluka**: tehnička/komercijalna/administrativna odluka doneta radi rešavanja nedostatka; mogu se uneti samo aktivne *Odluke*.
> **Beleške o odluci**: slobodne beleške o *Donetoj odluci*.
> **Odgovor dobavljača/interni odgovor**: slobodne beleške o temi. Obično se koriste za evidentiranje odgovora primaoca *Neusklađenosti* u vezi sa *Nedostatkom*.
> **Podaci o zatvaranju nedostatka**: proširenje u koje se mogu uneti podaci o zatvaranju *Nedostatka*:
> **Ime**: *A.R.M. korisnik* koji je zatvorio *Nedostatak*. Ovaj podatak je samo za čitanje.
> **Osoba**: *Zaposleni* koji je zatvorio *Nedostatak*. Ovaj podatak je samo za čitanje.
> **Funkcija**: *Funkcija preduzeća* koja je zatvorila *Nedostatak*.

### Predmeti reklamacije

Ovo je popis *Reklamiranih artikala* koji se mogu povezati sa izabranim *Pronađenim nedostatkom* i sadrži sledeće podatke:

> **Predmeti/Artikli**
>> **Barkod**: može se koristiti za dodavanje ili zamenu artikla, serije, serijskog broja i jedinice utovara.
>> Za potpune informacije o kodiranju barkodova pogledajte stranicu [Numeracija barkodova](/docs/configurations/tables/general-settings/barcode-tokenizer).
>> **Klasa**: *Klasa artikla*.
>> **Šifra artikla**: šifra *Artikla*.
>> **Opis artikla**: opis *Artikla*.
>> **Varijanta**: šifra varijante *Artikla*.
>> **Lot**: interna šifra *Lota* *Artikla*.
>> **Jedinica utovara**: originalna *Jedinica utovara* koja je sadržala *Artikal*.
>> Unošenjem *Jedinice utovara* automatski se dodaju svi redovi sa detaljima *Artikla* koji se u njoj nalaze.
>> Ako je u *Parametrima reklamacija i neusklađenosti*, u odeljku *Neusklađenosti*, uključena opcija *Grupisanje podataka jedinice utovara*, redovi sa identičnim *Artiklima* biće prikazani u jednom redu sa sabranim količinama.
>> **Serijski broj**: *Serijski broj* reklamiranog *Predmeta/Artikla*.
>> **Povratna jedinica utovara**: *Jedinica utovara* koja sadrži predmet za koji se zahteva povrat.
>
> **Količina**
>> **Jedinica mere**: podatak samo za čitanje koji predstavlja *Jedinicu mere* reklamiranog *Artikla*.
>> **Primljeno**: količina primljenog *Artikla*; unosi se ručno.
>> **Reklamirano**: količina *Artikla* koja se reklamira; unosi se ručno.
>> **Neobrađeno**: količina reklamiranog i neobrađenog *Artikla*; unosi se ručno.
>> **Obrađeno**: količina reklamiranog i obrađenog *Artikla*; unosi se ručno.
>> **Vraćeno**: količina vraćenog *Artikla*; unosi se ručno.
>
> **Alternativna količina**
>> Kolone u ovoj grupi prikazuju se samo ako je u *Parametrima reklamacija i neusklađenosti*, za godinu datuma dokumenta, u odeljku *Neusklađenosti*, uključena opcija *Automatski predlog alternativne jedinice mere*.
>> **Jedinica mere**: *Alternativna jedinica mere* reklamiranog *Artikla*.
>> **Cena jedinice mere**: označava da li se *Jedinična cena materijala* odnosi na *Alternativnu jedinicu mere*.
>> **Primljeno**: količina *Artikla* primljena u *Alternativnoj jedinici mere*; unosi se ručno.
>> **Reklamirano**: količina *Artikla* koja se reklamira u *Alternativnoj jedinici mere*; unosi se ručno.
>> **Neobrađeno**: količina reklamiranog *Artikla* koja nije obrađena, izražena u *Alternativnoj jedinici mere*; unosi se ručno.
>> **Obrađeno**: količina reklamiranog *Artikla* koja je obrađena, izražena u *Alternativnoj jedinici mere*; unosi se ručno.
>> **Vraćeno**: količina vraćenog *Artikla* izražena u *Alternativnoj jedinici mere*; unosi se ručno.
>
> **Jedinična cena**
>> **Materijal**: *Jedinična cena* *Artikla*; unosi se ručno.
>> **Obrada**: *Jedinična cena* *Obrade*; postavlja se prema tarifi povezanoj sa *Centrima troška* povezanim sa *Mašinom* i *Radnom grupom* *Radnog centra*; vrednost se može izmeniti.
>
> **Sati**
>> **Radno vreme**: sati i minuti rada utrošeni na popravku neusklađenog *Artikla*; unose se ručno.

#### Podaci o predmetu

Ovo su dodatni podaci za izabrani red *Reklamiranog artikla*. Podaci kojima se upravlja su:

> **Projekat**: referenca na *Projekat* određenog *Nedostatka*.
> **Beleške o artiklu**: slobodne beleške o *Artiklu* određenog *Nedostatka*.
> **Beleške o lotu**: slobodne beleške o *Lotu* određenog *Nedostatka*.
> **Beleške o jedinici utovara**: slobodne beleške za *Jedinicu utovara* određenog *Nedostatka*.
> **Beleške**: slobodne beleške u redu određenog *Nedostatka*.
> **Radni centar**: *Radni centar* koji se koristi za popravku neusklađenog *Predmeta*.
> Izborom *Radnog centra* u polju *Jedinična cena* predlaže se tarifa koja će biti primenjena na utrošeno radno vreme.
> Predložena tarifa predstavlja zbir tarifa *Centara troška* povezanih sa *Mašinom* i *Radnom grupom* *Radnog centra*.
> **Ukupno neobrađeni materijal**: podatak samo za čitanje; predstavlja proizvod *Neobrađene količine* i *Jedinične cene materijala* izabranog *Neispravnog predmeta*.
> **Ukupno obrađeni materijal**: podatak samo za čitanje. Ova vrednost predstavlja zbir proizvoda *Obrađene količine* i *Jedinične cene materijala* i proizvoda *Radnog vremena* i zbira tarifa povezanih sa *Centrima troška* povezanim sa *Mašinom* i *Radnom grupom* *Radnog centra*.
> **Ukupni nedostaci**: podatak samo za čitanje. Ova vrednost predstavlja zbir *Ukupno neobrađenog materijala* i *Ukupno obrađenog materijala*.

#### Dodatni podaci

Moguće je uneti [Dodatne podatke](/docs/configurations/utility/extra-data/extradata/new-extradata) za izabrani *Predmet nedostatka*.

#### Povezani dokumenti

U ovom popisu mogu se dodavati i pregledati svi dokumenti priloženi izabranom *Predmetu nedostatka*.

### Korišćeni materijali

U ovom popisu mogu se navesti materijali korišćeni za otklanjanje izabranog *Nedostatka*.
Popis obuhvata sledeće podatke:
>
> **Artikal**
>> **Klasa**: *Klasa artikla*.
>> **Šifra**: šifra *Artikla*.
>> **Opis**: opis *Artikla*.
>> **Varijanta**: šifra varijante *Artikla*.
>> **Lot**: korišćena interna šifra *Lota*.
>> **Serijski broj**: korišćeni *Serijski broj*.
>
> **Količina**
>> **Jedinica mere**: podatak samo za čitanje za *Jedinicu mere* *Artikla*.
>> **Utrošena količina**: količina *Artikla* korišćena za otklanjanje izabranog *Nedostatka*.
>
> **Vrednost**
>> **Jedinična cena**: *Jedinična cena* *Artikla*; unosi se ručno.
>> **Ukupna cena**: proizvod *Utrošene količine* i *Jedinične cene*; vrednost se može izmeniti.
>
> **Beleška**: slobodne beleške.

### Uključeni subjekti

Kartica sadrži podatke o *Funkcijama preduzeća* i/ili *Zaposlenima* koji će biti uključeni u upravljanje izabranim *Nedostatkom*.

Popis obuhvata sledeće podatke:

> **Sekvenca**: *Sekvenca* prikaza *Uključenih subjekata*; predlaže se rastući broj uz mogućnost izmene.
>
> **Funkcija preduzeća**
>> **Šifra**: šifra uključene *Funkcije preduzeća*.
>> **Opis**: opis uključene *Funkcije preduzeća*.
>
> **Zaposleni**
>> **Šifra**: šifra uključenog *Zaposlenog*.
>> **Opis**: prezime i ime uključenog *Zaposlenog*.
>
> **Upravljanje angažovanjem**
>> **Opis subjekta**: slobodne beleške ako uključena osoba nije *Funkcija preduzeća* ili *Zaposleni*.
>> **Razlog učešća**: slobodne beleške o temi.
>> **Datum isteka**: datum do kojeg uključena osoba mora završiti zadatke povezane sa razlogom svog učešća.
>> **Odgovor**: slobodne beleške o temi.
>> **Zatvoreno**: označava da je angažovanje subjekta završeno.
>> Samo *Odgovorna funkcija* ili *Odgovorna osoba* za *Neusklađenost*, odnosno uključena *Funkcija preduzeća* ili *Zaposleni*, mogu zatvoriti angažovanje.
>> Nakon zatvaranja automatski se predlaže *Datum zatvaranja*, postavljen na tekući datum uz mogućnost izmene.
>> **Datum zatvaranja**: datum završetka angažovanja subjekta.
>> Samo *Odgovorna funkcija* ili *Odgovorna osoba* za *Neusklađenost*, odnosno uključena *Funkcija preduzeća* ili *Zaposleni*, mogu uneti ili izmeniti ovaj datum.
>> Unošenjem datuma automatski se postavlja oznaka *Zatvoreno*.
>
> **Beleška**: slobodne beleške.

### Dodatni podaci

Moguće je uneti [Dodatne podatke](/docs/configurations/utility/extra-data/extradata/new-extradata) za izabrani *Nedostatak*.

### Povezani dokumenti

U ovom popisu mogu se dodavati i pregledati svi dokumenti priloženi izabranom *Predmetu nedostatka*.

Za sve što nije detaljno opisano u ovom dokumentu o uobičajenom funkcionisanju obrazaca, pogledajte sledeću poveznicu [Funkcionalnosti, dugmad i polja](/docs/guide/common).