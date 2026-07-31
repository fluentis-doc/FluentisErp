---
title: Reklamacija
sidebar_position: 2
---

Upravljanje reklamacijama nalazi se na putanji **Kvalitet > Reklamacije > Nova reklamacija**, a može se otvoriti i putem **Pretrage reklamacija**.

:::important Čemu služi?
Reklamacije se koriste za evidentiranje nezadovoljstva uslugom ili proizvodom, što preduzeću omogućava prepoznavanje i otklanjanje eventualnih problema. Predstavljaju alat za unapređenje kvaliteta i održavanje dobrih odnosa sa kupcima i imaju za cilj:

- utvrđivanje uzroka neusklađenosti;
- utvrđivanje da li postoje slične anomalije ili da li se mogu pojaviti;
- procenu potrebe za preduzimanjem mera radi otklanjanja uzroka koji su doveli do utvrđenih anomalija.

Standardno su dostupni sledeći izveštaji:

> **Reklamacija**: obrazac za *Reklamaciju*;
> **Reklamacija 8D**: obrazac *Reklamacije* u 8D formatu;
> **Odobrenje za povrat**: obrazac *Reklamacije* koji se koristi za odobravanje povrata proizvoda koje je vratio *Kupac*;
> **Obaveštenje o odustajanju**: obrazac *Reklamacije* koji se koristi za obaveštavanje *Kupca* o odustajanju od *Reklamacije*;
> **Popis reklamacija po kupcu**: lista reklamacija izabranih u *Pretrazi reklamacija*, grupisana po *Kupcu*;
> **Popis reklamacija po tipu**: lista reklamacija izabranih u *Pretrazi reklamacija*, grupisana po *Tipu reklamacije*.
:::

## Kontrolna dugmad

### ![](/img/neutral/common/save.png) Sačuvaj

Klikom na ovo dugme čuvaju se svi izmenjeni podaci za prikazanu *Reklamaciju*.

### ![](/img/neutral/common/execute.png) Valorizacija reklamacije

Ovo dugme se nalazi na kartici *Zaglavlje*.

Omogućava kreiranje *odobrenja* za pošiljaoca *Reklamacije*.

Dugme je dostupno samo ako je *Reklamacija* sačuvana, odobrena i ako postoji *Vrednost za odobrenje*.

Prikazuje se prozor za unos/potvrdu sledećih podataka:

> **Tip računa**: *Tip dokumenta* novog *odobrenja* (obavezan podatak); predlaže se *Tip računa* definisan u *Tipu reklamacije* izvorne *Reklamacije*.
> **Opis**: opis koji će biti korišćen za red *Stavke troška* novog *odobrenja* (obavezan podatak); koristi se opis definisan u [Parametrima valorizacije reklamacije](/docs/quality/claims-and-non-compliance/claims/procedures/claim-valorisation), odeljak *Reference reklamacije*.
> **PDV**: *Tip PDV-a* koji će biti korišćen za red *Troška* novog *odobrenja*.
> Predlaže se *Tip PDV-a* prema sledećem redosledu prioriteta:
> 1. ako postoji *Izjava o nameri*, koristi se *Tip PDV-a* iz dokumenta;
> 2. ako ne postoji *Izjava o nameri*, koristi se *Tip PDV-a* povezan sa pošiljaocem *Reklamacije*;
> 3. ako ne postoji *Izjava o nameri* i nije definisan *Tip PDV-a* povezan sa pošiljaocem *Reklamacije*, koristi se *Tip PDV-a* povezan sa *Tipom reklamacije*.
>
> Nakon toga potrebno je kliknuti na dugme **U redu** ili **Otkaži** kako bi se nastavilo ili odustalo od postupka kreiranja.
> Po završetku obrade prikazaće se novo kreirano *Odobrenje*.

### ![](/img/neutral/common/corrective.png) Kreiranje korektivne mere

Dugme je dostupno na sledećim karticama:

> *Upravljanje nedostacima* – ako je *Tip reklamacije* definisan sa *Klasičnim* *Predloškom*;
> *Mere suzbijanja*, *Trajne mere* i *Faze* – ako je *Tip reklamacije* definisan sa *Predloškom* *8D rešavanje problema*.
>
Dugme je dostupno samo ako je *Reklamacija* sačuvana, odobrena i ako je sa liste izabran odgovarajući red.

import CorrectiveActionPopupInsertion from './../../../import/sections/corrective-action-popup-insertion.md'

<CorrectiveActionPopupInsertion />

### Kreiranje nove neusklađenosti

Dugme je dostupno na sledećim karticama:

> *Upravljanje nedostacima* – ako je *Tip reklamacije* definisan sa *Klasičnim* *Predloškom*;
> *Predložak* – ako je *Tip reklamacije* definisan sa *Predloškom* *8D rešavanje problema*.
>
Dugme je dostupno samo ako je *Reklamacija* sačuvana, odobrena i ako je sa liste izabran odgovarajući red.
Prikazuje se zahtev za unos/potvrdu sledećih podataka:

> **Sesija implementacije**

> Nakon toga potrebno je kliknuti na dugme **U redu** ili **Otkaži** kako bi se nastavilo ili odustalo od postupka kreiranja.
> Po završetku obrade prikazaće se novo kreirana *Neusklađenost* kako bi se mogli dopuniti podaci koji nedostaju.

## Upravljanje podacima

## Podaci zaglavlja dokumenta

Podaci kojima se upravlja su:

> **Tip neusklađenosti**: *Tip* dokumenta (obavezan podatak).
> Prilikom unosa nove *Reklamacije* predlaže se *Tip reklamacije* definisan u *Parametrima reklamacija i neusklađenosti*, odeljak *Reklamacije*.
> Na osnovu *Predloška* definisanog u *Tipu reklamacije*, *Reklamacijom* će se upravljati u režimu *Upravljanje nedostacima* ili *8D – Rešavanje problema*.
>
> **Godina/Broj/Datum**: *Godina*, *Broj* i *Datum* *Reklamacije* (obavezni podaci).
> Prilikom unosa nove *Reklamacije*:
> - *Datum* se predlaže kao tekući datum;
> - *Godina* i *Broj* predlažu se na osnovu *Datuma* i *Numeracije* povezane sa *Tipom reklamacije*.
>
> **Kupac**, **Kontakt kupca** ili **Prodavac**: podaci o pošiljaocu (najmanje jedan od ova tri podatka je obavezan).
> *Kontakt kupca* predstavlja indirektnog kupca, definisanog u šifarniku *Kontakti*, čiju je robu ili usluge prodala treća strana.
> *Prodavac* je prikazan u informacijama na kartici *Zaglavlje*.

## Zaglavlje

Podaci kojima se upravlja su:

> **Tip obaveštenja**: način na koji je *Reklamacija* primljena ili prijavljena.
>
> **Vreme obaveštenja**: vreme (sati i minuti) prijema *Reklamacije*.
>
> **Odgovorna osoba**: *Zaposleni* odgovoran za *Neusklađenost*.
> Prilikom unosa nove *Neusklađenosti* predlaže se *Odgovorna osoba* definisana u *Parametrima reklamacija i neusklađenosti*, odeljak *Neusklađenost*.
>
> **Odgovorna funkcija**: *Funkcija preduzeća* odgovorna za *Neusklađenost*.
> Prilikom unosa nove *Neusklađenosti* predlaže se *Odgovorna funkcija* definisana u *Parametrima reklamacija i neusklađenosti*, odeljak *Neusklađenost*.
>
> **Referenca dokumenta**: proširenje u koje se mogu uneti reference na dokumente značajne za upravljanje *Reklamacijom*:
>> **Račun**: referenca na *Prodajni račun* (*Tip*, *Godina* i *Broj*) kojim se pretpostavlja da je sporna roba ili usluga fakturisana.
>> **Otpremnica**: referenca na *Prodajni dokument* (*Tip*, *Godina* i *Broj*) kojim se pretpostavlja da je sporna roba ili usluga prodata.
>> **Potvrda o prijemu robe**: referenca na *Potvrdu o prijemu robe* (*Tip*, *Godina* i *Broj*), kojom pošiljalac vraća spornu robu.
>> **Projekat**: referenca na *Projekat* sporne robe ili usluge.
>> **Naša referenca**: slobodne beleške o drugim internim referencama.
>> **Vaša referenca**: slobodne beleške o drugim referencama na dokumenta pošiljaoca *Reklamacije*.
>
> **Odobreno/Datum**: proširenje u koje se mogu uneti podaci o odobrenju *Reklamacije*:
>> Samo **Odgovorna osoba** ili **Odgovorna funkcija** može odobriti *Reklamaciju*.
>> **Odobreno**: označava da je *Reklamacija* *Odobrena*.
>> Nakon odobravanja automatski se predlažu sledeći podaci: *Datum*, postavljen na tekući datum uz mogućnost izmene, kao i *Ime* i *Osoba*, preuzeti iz povezanog *A.R.M. korisnika* i *Zaposlenog* povezanog sa *A.R.M. korisnikom*.
>> **Datum**: datum kada je *Reklamacija* *Odobrena*.
>> Unošenjem datuma automatski se popunjavaju *Ime* i *Osoba* na osnovu povezanog *A.R.M. korisnika* i *Zaposlenog* povezanog sa *A.R.M. korisnikom*, a postavlja se i oznaka *Odobreno*.
>> **Ime**: *A.R.M. korisnik* koji je odobrio *Reklamaciju*. Ovaj podatak je samo za čitanje.
>> **Osoba**: *Zaposleni* koji je odobrio *Reklamaciju*. Ovaj podatak je samo za čitanje.
>> **Funkcija**: *Funkcija preduzeća* koja je odobrila *Reklamaciju*.
>> Dostupno samo kada je *Reklamacija* *Odobrena*.
>
> **Prodavac**: podaci koji su već prethodno opisani među podacima o pošiljaocu *Reklamacije*.
>
> **Referenca kupca**: slobodne beleške o temi.
>
> **Spoljni kontakt**: slobodne beleške o kontakt osobi pošiljaoca *Reklamacije*.
>
> **Audit**: proširenje samo za čitanje u kojem su prikazani sledeći podaci:
>> **Datum kreiranja/Ime**: datum i *A.R.M. korisnik* koji je uneo *Reklamaciju*.
>> **Datum poslednje izmene/Ime**: datum i *A.R.M. korisnik* koji je izvršio poslednju izmenu *Reklamacije*.
>
> **Datum zatvaranja/objavljivanja**: proširenje u koje se mogu uneti podaci o zatvaranju *Reklamacije*:
>> Samo **Odgovorna osoba** ili **Odgovorna funkcija** može zatvoriti *Reklamaciju*.
>> **Zatvoreno**: označava da je *Reklamacija* *Zatvorena*.
>> Prilikom zatvaranja automatski se predlažu sledeći podaci: *Datum*, postavljen na tekući datum uz mogućnost izmene, kao i *Ime* i *Osoba*, preuzeti iz povezanog *A.R.M. korisnika* i *Zaposlenog* povezanog sa *A.R.M. korisnikom*.
>> **Datum**: datum kada je *Reklamacija* *Zatvorena*.
>> Unošenjem datuma automatski se popunjavaju *Ime* i *Osoba* na osnovu povezanog *A.R.M. korisnika* i *Zaposlenog* povezanog sa *A.R.M. korisnikom*, a postavlja se i oznaka *Zatvoreno*.
>> **Ime**: *A.R.M. korisnik* koji je zatvorio *Reklamaciju*. Ovaj podatak je samo za čitanje.
>> **Osoba**: *Zaposleni* koji je zatvorio *Reklamaciju*. Ovaj podatak je samo za čitanje.
>> **Funkcija**: *Funkcija preduzeća* koja je zatvorila *Reklamaciju*.
>> Dostupno samo kada je *Reklamacija* *Zatvorena*.
> **Obaveštenje o zatvaranju/Datum zatvaranja**: ručne oznake da li je pošiljalac obavešten o zatvaranju *Reklamacije* i kog datuma.

### Obaveštenja

Kartica sadrži sledeće podatke:

> **Razlog reklamacije**: opisne beleške o razlogu unosa *Reklamacije* (obavezno polje).
>
> **Mesto proizvodnje**: referenca na *mesto proizvodnje* gde je *Reklamacija* otkrivena ili za koje se sumnja da je njen izvor.
>
> **Razlog reklamacije i pronađeni nedostatak su prihvaćeni**: označava da je *Reklamacija* prihvaćena.
>
> **Razlog odbijanja**: beleške o razlogu neprihvatanja *Reklamacije*; dostupno samo ako *Reklamacija* nije prihvaćena.
>
>> **Obaveštenje/Datum**: podaci o tome da li je pošiljalac *Reklamacije* obavešten o njenom prihvatanju ili odbijanju i kog datuma.

### Beleške

Kartica sadrži opšte beleške i beleške specifične za pojedine oblasti dokumenta. Obuhvata sledeće podatke:

> **Komercijalne beleške**: beleške rezervisane za prodajno osoblje.
> **Tehničke beleške**: beleške rezervisane za tehničko osoblje.
> **Administrativne beleške**: beleške rezervisane za administrativno osoblje.

### Drugi podaci

Moguće je uneti opšte [Dodatne podatke](/docs/configurations/utility/extra-data/extradata/new-extradata) za *Reklamaciju*.

### Ostali troškovi

Na ovoj kartici mogu se uneti i drugi troškovi, pored onih koji proizlaze iz Troškova spornih stavki i Troškova upravljanja dokumentima.

> **Direktni troškovi**
> Popis troškova koji se mogu direktno pripisati ceni spornih artikala, pruženoj usluzi i trošku rada nastalom tokom rešavanja *Reklamacije*. Popis sadrži sledeće informacije:
>> **Stavka troška** i **Opis stavke troška**: mogu se izabrati samo *Stavke troška* sa *Tipom troška = Direktni trošak*.
>> **Tip troška**: podatak samo za čitanje koji prikazuje *Tip troška* povezan sa izabranom *Stavkom troška*.
>> **Primenjuje se na...**: podatak samo za čitanje koji prikazuje na koju komponentu troškova se primenjuje *Vrednost* (ako je izražena kao procenat). Kod upravljanja *Reklamacijama* ne pravi se razlika između *Troškova materijala*, *Troškova mašina*, *Troškova rada*, *Troškova obrade* i *Industrijskih troškova*; sve stavke se primenjuju na *Ukupan iznos reklamacije*.
>> **Procenat / Vrednost**: podatak samo za čitanje koji određuje metod obračuna primenjen na *Vrednost* (*Procenat* ili *Fiksna vrednost*).
>> **Vrednost**: *Procenat* koji će biti primenjen ili *Vrednost* koja će biti dodata komponenti troška navedenoj u polju *Primenjuje se na...*.
>> **Beleška**: slobodne beleške.
>>
> **Opšti troškovi**
> Popis opštih troškova koji se ne mogu direktno pripisati *Reklamaciji* i koji podržavaju celokupan poslovni proces. Popis sadrži sledeće informacije:
>> **Stavka troška** i **Opis stavke troška**: mogu se izabrati samo *Stavke troška* sa *Tipom troška = Opšti trošak*.
>> **Tip troška**: podatak samo za čitanje koji prikazuje *Tip troška* povezan sa izabranom *Stavkom troška*.
>> **Procenat / Vrednost**: podatak samo za čitanje koji prikazuje metod obračuna koji će biti primenjen na *Vrednost* (*Procenat* ili *Fiksna vrednost*).
>> **Vrednost**: *Procenat* koji će biti primenjen ili *Vrednost* koja će biti dodata *Ukupnom iznosu reklamacije*.
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

Na ovoj kartici mogu se uneti podaci koji se odnose na potražne (*odobrenja*) i dugovne (*zaduženja*) dokumente za *Reklamaciju*, nastale troškove i troškove koji će biti knjiženi pošiljaocu *Reklamacije*. Obuhvaćeni su sledeći podaci:

> **Valuta**, **Kurs** i **Datum valute**: *Valuta* pošiljaoca *Reklamacije*, u kojoj su iskazane sve vrednosti dokumenata, odgovarajući kurs prema *Valuti* *Preduzeća* i *Datum valute*.
> **Referentni dokument zaduženja**: referenca na *Zaduženje* primljeno od *Kupca*.
> **Beleška na dokumentu odobrenja**: slobodne beleške o predmetu.
>
> **Ukupan iznos reklamacije**: podatak samo za čitanje ako je u *Parametrima reklamacija i neusklađenosti*, za godinu datuma dokumenta, u odeljku *Reklamacije*, uključena opcija *Automatski ponovni obračun ukupnih iznosa*; predlaže se zbir troškova obrade obrađenih *Reklamiranih stavki*.
>
> **Ukupni direktni troškovi**: podatak samo za čitanje; predstavlja zbir *Vrednosti* primenjenih sa popisa *Direktni troškovi* na kartici *Ostali troškovi*.
>
> **Ukupni opšti troškovi**: podatak samo za čitanje; predstavlja zbir *Vrednosti* primenjenih sa popisa *Opšti troškovi* na kartici *Ostali troškovi*.
>
> **Ukupni ostali troškovi**: podatak samo za čitanje; predstavlja zbir *Vrednosti* primenjenih sa popisa *Ostali troškovi* na kartici *Ostali troškovi*.
>
> **Trošak upravljanja**: *Trošak upravljanja* preuzet iz polja *Trošak upravljanja* u *Parametrima reklamacija i neusklađenosti*, za godinu datuma dokumenta, odeljak *Reklamacije*; vrednost se može izmeniti.
>
> **Vrednost za odobrenje**: *Vrednost* koja će biti odobrena pošiljaocu *Reklamacije*; ako je u *Parametrima reklamacija i neusklađenosti*, za godinu datuma dokumenta, u odeljku *Reklamacije*, uključena opcija *Automatski ponovni obračun ukupnih iznosa*, predlaže se vrednost jednaka zbiru *Prihvaćenih vrednosti* *Reklamiranih stavki*, uz mogućnost naknadne izmene.
>
> **Valorizovano** i **Referenca dokumenta odobrenja**: podaci samo za čitanje koji prikazuju da li je *Reklamacija* valorizovana i da li je kreirana referenca na *Odobrenje*.

Dalji način upravljanja zavisi od *Predloška* definisanog u *Tipu reklamacije*: *Upravljanje nedostacima* ili *8D – Rešavanje problema*:

> ### [Upravljanje nedostacima](/docs/quality/claims-and-non-compliance/claims/claim-dm)
>
> ### [8D Rešavanje problema](/docs/quality/claims-and-non-compliance/claims/claim-8d)

Za sve što nije detaljno opisano u ovom dokumentu o uobičajenom funkcionisanju formi, pogledajte sledeći link [Funkcionalnosti, dugmad i polja](/docs/guide/common).