---
title: Reklamacije - Upravljanje nedostacima
sidebar_position: 4
---

## Upravljanje nedostacima

Ovo je popis nedostataka koje je prijavio pošiljalac dokumenta i sastoji se od sledećih informacija:

> **Sekvenca**: *sekvenca* prikaza nedostataka; predlaže se automatski rastuća sekvenca koju je moguće izmeniti.
>
> **Pronađeni nedostatak**
>> **Šifra**: šifra *Pronađenog nedostatka*; moguće je uneti samo *Nedostatke* koji su aktivni i predviđeni tipom *Reklamacije* dokumenta.
>> **Opis**: podatak samo za čitanje koji opisuje *Pronađeni nedostatak*.
>> **Beleške**: slobodne beleške o *Pronađenom nedostatku*.
>
> **Pretpostavljeni uzrok**
>> **Šifra**: šifra *Pretpostavljenog uzroka* koji je izazvao nedostatak; moguće je uneti samo *Uzroke* koji su pretpostavljeni, aktivni i predviđeni tipom *Reklamacije* dokumenta. *Pretpostavljeni uzrok* može biti potvrđen ili odbačen kao *Stvarni uzrok* nakon analize *Reklamiranih predmeta*.
>> **Opis**: podatak samo za čitanje koji opisuje *Pretpostavljeni uzrok*.
>> **Beleške**: slobodne beleške o *Pretpostavljenom uzroku*.
>
> **Faza detekcije**
>> **Šifra**: šifra *Faze detekcije* procesa u kojem je otkriven kvar; moguće je uneti samo aktivne *Faze detekcije*.
>> **Opis**: podatak samo za čitanje koji opisuje *Fazu detekcije*.
>> **Beleške**: slobodne beleške o *Fazi detekcije*.
>
> **Količina**
> Ovaj sažetak podataka koristi se isključivo kada nije potrebno detaljno navoditi *Količine* u odeljku *Reklamirani predmeti*. Ove *Količine* se ne uzimaju u obzir ni u jednom obračunu.
>> **Prodato**: količina *artikala* prodatih pošiljaocu *Reklamacije*.
>> **Osporeno**: količina *artikala* koje je pošiljalac *Reklamacije* osporio.
>> **Vraćeno**: količina *artikala* koje je vratio pošiljalac *Reklamacije*.
>
> **Referenca korektivne mere**
>> **Tip**, **Godina** i **Broj**: reference samo za pregled *Korektivne mere* povezane sa redom *Nedostatak* i kreirane pomoću dugmeta **Kreiraj korektivnu meru**.
>
> **Pod garancijom**: ručna oznaka da li je *Pronađeni nedostatak* pokriven garancijom. Ovaj podatak se ne uzima u obzir u obračunima.
> **Zatvoreno**: označava da je upravljanje *Kvarom* završeno; operater ovu oznaku postavlja ručno.
> Prilikom zatvaranja automatski se predlažu sledeći podaci: *Datum zatvaranja*, predložen kao današnji datum uz mogućnost izmene, *Ime* i *Osoba* predloženi na osnovu povezanog *A.R.M. korisnika* i *Zaposleni* povezan sa *A.R.M. korisnikom* (*Datum zatvaranja*, *Ime* i *Osoba* nalaze se na kartici *Podrazumevani podaci*).
> Zatvaranje svih *Nedostataka* ne zatvara automatski *Reklamaciju*.
> **Beleška**: slobodne beleške.

### Podaci o nedostatku

Ovo su dodatne informacije za izabrani red *Nedostatak*. Podaci kojima se upravlja su:

> **Stepen ozbiljnosti**: *Stepen ozbiljnosti* dodeljen kvaru; mogu se uneti samo aktivni *Stepeni ozbiljnosti*.
> **Stvarni uzrok**: stvarni uzrok koji je izazvao nedostatak; mogu se uneti samo *Uzroci* koji su potvrđeni, aktivni i predviđeni tipom *Reklamacije* dokumenta.
> **Beleške o stvarnom uzroku**: slobodne beleške o *stvarnom uzroku*.
> **Predloženo rešenje**: predloženo tehničko/komercijalno/administrativno rešenje koje treba primeniti; mogu se uneti samo aktivna *Rešenja*.
> **Beleške o predloženom rešenju**: beleške o *Predloženom rešenju*.
> **Doneta odluka**: tehnička/komercijalna/administrativna odluka doneta radi rešavanja nedostatka; mogu se uneti samo aktivne *Odluke*.
> **Beleške o donetoj odluci**: beleške o *Donetoj odluci*.
> **Komercijalna odluka**: komercijalna/administrativna odluka doneta radi rešavanja nedostatka; mogu se uneti samo aktivne *Odluke*.
> **Beleške o komercijalnom rešenju**: beleške o *Komercijalnom rešenju*.
> **Datum zatvaranja**: datum završetka upravljanja određenim *Nedostatkom*.
> Unošenjem datuma automatski se postavlja oznaka *Zatvoreno* u izabranom redu *Nedostatak*.
> **Ime**: *A.R.M. korisnik* koji je zatvorio *Nedostatak*. Ovaj podatak je samo za čitanje.
> **Osoba**: *Zaposleni* koji je zatvorio *Nedostatak*. Ovaj podatak je samo za čitanje.
> **Funkcija**: *Funkcija preduzeća* koja je zatvorila *Nedostatak*.

### Predmeti reklamacije

Ovo je popis *Reklamiranih artikala/predmeta* koji se mogu povezati sa izabranim *Pronađenim nedostatkom* i sastoji se od sledećih informacija:

> **Predmet**
>> **Barkod**: može se koristiti za dodavanje ili zamenu artikla, lota, serijskog broja i jedinice utovara.
>> Za sve informacije o kodiranju barkodova pogledajte stranicu [Numeracija barkodova](/docs/configurations/tables/general-settings/barcode-tokenizer).
>> **Klasa**: *Klasa artikla* za koju se podnosi reklamacija.
>> **Šifra artikla**: šifra *artikla* za koji se podnosi reklamacija.
>> **Opis artikla**: opis *artikla* za koji se podnosi reklamacija.
>> **Varijanta**: šifra varijante *artikla* za koji se podnosi reklamacija.
>> **Lot**: interna šifra *Lota* reklamiranog *Artikla*.
>> **Jedinica utovara**: originalna *Jedinica utovara* koja je sadržala reklamirani *artikal*.
>> Unošenjem *jedinice utovara* automatski se dodaju svi redovi sa detaljima *artikla* koji se u njoj nalaze.
>> Ako je u *Parametrima reklamacija i neusklađenosti*, za godinu datuma dokumenta, u odeljku *Reklamacije*, uključeno *grupisanje podataka jedinice utovara*, redovi sa istim *Artiklima* biće prikazani u jednom redu sa zbirnim količinama.
>> **Serijski broj**: *serijski broj* *artikla* za koji se podnosi reklamacija.
>
> **Količina**
>> **Jedinica mere**: *jedinica mere* reklamiranog *artikla*; podatak samo za čitanje.
>> **Prodato**: količina *Artikla* prodata pošiljaocu *Reklamacije*; ovu vrednost potrebno je uneti ručno.
>> **Osporeno**: količina *Artikla* koju je pošiljalac *Reklamacije* osporio; vrednost se unosi ručno.
>> **Vraćeno**: količina *Artikla* koju je vratio pošiljalac *Reklamacije*; vrednost se unosi ručno.
>> **Prerađeno**: količina *Artikla* koju je preradio podnosilac *Reklamacije*; ovu vrednost potrebno je uneti ručno.
>> **Prihvaćeno**: prihvaćena količina *Artikla*; ovu vrednost potrebno je uneti ručno.
>
> **Vrednost**
>> **Reklamirano**: vrednost koju je zahtevao pošiljalac *Reklamacije*; ovu vrednost potrebno je uneti ručno.
>> **Prihvaćeno**: prihvaćena vrednost; ovu vrednost potrebno je uneti ručno.
>
> **Podaci o povratu**
>> **Odobrenje za povrat**: označava da je odobren povrat vraćenog *Artikla* za *Prihvaćenu količinu*.
>> **Očekivani datum povrata**: očekivani datum povrata vraćenog *Artikla*.
>> **Lot**: povratni *lot* vraćenog *Artikla*.
>> **Serijski broj**: *serijski broj* vraćenog *Artikla*.
>> **Jedinica utovara**: *Jedinica utovara* vraćenog *Artikla*.

#### Podaci o predmetu

Ovo su dodatne informacije za izabrani red *Reklamiranog artikla/predmeta*. Podaci kojima se upravlja su:

> **Projekat**: referenca na *projekat* određenog *nedostatka*.
> **Beleške o artiklu**: beleške o *artiklu* određenog *nedostatka*.
> **Beleške o lotu**: beleške o *lotu* određenog *nedostatka*.
> **Beleške o jedinici utovara**: beleške za *Jedinicu utovara* određenog *nedostatka*.
> **Beleške**: slobodne beleške na redu određenog *nedostatka*.

> **Otpremnica kupcu**: referenca na *prodajni dokument* (*Tip*, *Godina* i *Broj*), kojim se pretpostavlja da je sporna roba ili usluga prodata.
> **Prodajni račun**: referenca na *Prodajni račun* (*Tip*, *Godina* i *Broj*) za koji se pretpostavlja da je sporna roba ili usluga fakturisana.
> **Potvrda o prijemu robe**: referenca na *Potvrdu o prijemu robe* (*Tip*, *Godina* i *Broj*), kojom pošiljalac vraća spornu robu.
> **Dokument nabavke**: referenca na *prodajni dokument* (*Tip*, *Godina* i *Broj*), kojim se pretpostavlja da je sporna roba ili usluga prodata.

#### Dodatni podaci

Mogu se uneti [Dodatni podaci](/docs/configurations/utility/extra-data/extradata/new-extradata) za izabrani *Reklamirani artikal/predmet*.

### Povezani dokumenti

U ovom pregledu mogu se dodavati i pregledati svi dokumenti priloženi izabranom *Reklamiranom artiklu*.

### Korišćeni materijali

Na ovom popisu mogu se navesti materijali korišćeni za otklanjanje izabranog *Nedostatka*.

Popis sadrži sledeće informacije:

>
> **Artikal**
>> **Klasa**: *klasa artikla*.
>> **Šifra**: šifra *artikla*.
>> **Opis**: opis *artikla*.
>> **Varijanta**: varijanta *artikla*.
>> **Lot**: interni *lot* artikla.
>> **Serijski broj**: korišćeni serijski broj.
>
> **Količina**
>> **Jedinica mere**: *jedinica mere* *artikla*; podatak samo za čitanje.
>> **Potrošena količina**: količina *artikla* upotrebljena za otklanjanje izabranog *nedostatka*.
>
> **Vrednost**
>> **Jedinična cena**: jedinična cena *artikla*; vrednost se unosi ručno.
>> **Ukupna cena**: proizvod *Potrošene količine* i *Jedinične cene*; vrednost se može menjati.
>
> **Beleška**: slobodne beleške.

### Uključeni subjekti

Kartica sadrži informacije o *Funkcijama preduzeća* i/ili *Zaposlenima* koji će biti uključeni u upravljanje izabranim *Nedostatkom*.

Popis se sastoji od sledećih informacija:

> **Sekvenca**: *sekvenca* prikaza *Uključenih subjekata*; predlaže se automatski rastući broj koji je moguće izmeniti.
>
> **Funkcija preduzeća**
>> **Šifra**: šifra uključene *Funkcije preduzeća*.
>> **Opis**: opis uključene *Funkcije preduzeća*.
>
> **Zaposleni**
>> **Šifra**: šifra uključenog *zaposlenog*.
>> **Opis**: prezime i ime uključenog *zaposlenog*.
>
> **Upravljanje angažovanjem**
>> **Opis subjekta**: beleška u slučaju da subjekt nije *Funkcija preduzeća* niti *Zaposleni*.
>> **Razlog učešća**: slobodne beleške o subjektu.
>> **Datum isteka**: datum do kojeg uključena osoba mora završiti aktivnosti povezane sa razlogom svog učešća.
>> **Odgovor**: slobodne beleške o subjektu.
>> **Zatvoreno**: označava da je angažovanje učesnika završeno.
>> Samo *Funkcija ili odgovorna osoba* za *Reklamaciju*, odnosno uključena *Funkcija preduzeća* ili *Zaposleni*, može zatvoriti angažovanje.
>> Prilikom zatvaranja automatski se predlaže *Datum zatvaranja*, postavljen na tekući datum, uz mogućnost izmene.
>> **Datum zatvaranja**: datum završetka učešća učesnika.
>> Samo *Funkcija ili odgovorna osoba* za *Reklamaciju*, odnosno uključena *Funkcija preduzeća* ili *Zaposleni*, može uneti ili izmeniti ovaj datum.
>> Unošenjem datuma automatski se postavlja oznaka *Zatvoreno*.
> **Beleška**: slobodne beleške.

### Dodatni podaci

Moguće je uneti [Dodatne podatke](/docs/configurations/utility/extra-data/extradata/new-extradata) za izabrani *Nedostatak*.

### Povezani dokumenti

U ovom popisu mogu se dodavati i pregledati svi dokumenti priloženi izabranom *Nedostatku*.

Za sve što nije detaljno opisano u ovom dokumentu o uobičajenom funkcionisanju formi, pogledajte sledeći link [Funkcionalnosti, dugmad i polja](/docs/guide/common).