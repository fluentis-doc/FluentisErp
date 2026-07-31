---
title: Reklamacije - 8D rešavanje problema
sidebar_position: 3
---

## Predmeti reklamacije

Ovo je popis *Predmeta reklamacije* i sastoji se od sledećih informacija:

> **Predmet**
>> **Barkod**: može se koristiti za dodavanje ili zamenu artikla, lota, serijskog broja i jedinice utovara.
>> Za sve informacije o kodiranju barkodova pogledajte stranicu [Numeracija barkodova](/docs/configurations/tables/general-settings/barcode-tokenizer).
>> **Klasa**: *Klasa artikla* za koju se podnosi reklamacija.
>> **Šifra artikla**: šifra *artikla* reklamacije.
>> **Opis predmeta**: opis *predmeta* reklamacije.
>> **Varijanta**: šifra varijante *artikla*.
>> **Lot**: interna šifra *lota* reklamiranog *artikla*.
>> **Serijski broj**: *serijski broj* *artikla*.
>> **Jedinica utovara**: originalna *jedinica utovara* koja je sadržala *artikal*.
>> Unošenjem *jedinice utovara* automatski se dodaju svi redovi sa detaljima *artikala* koji se u njoj nalaze.
>> Ako je u *Parametrima neusklađenosti*, za godinu datuma dokumenta, u odeljku *Reklamacije*, označena opcija *grupisanje podataka jedinice utovara*, redovi sa istim *artiklima* biće prikazani u jednom redu sa zbirnim količinama.
>
> **Kvalitet**
>> **Jedinica mere**: *jedinica mere* reklamiranog *artikla*.
>> **Prodato**: količina *artikla* prodata pošiljaocu *Reklamacije*; ovu vrednost potrebno je uneti ručno.
>> **Osporeno**: količina *artikla* koju je pošiljalac *Reklamacije* osporio; vrednost se unosi ručno.
>> **Vraćeno**: količina *artikla* koju je vratio pošiljalac *Reklamacije*; vrednost se unosi ručno.
>> **Prerađeno**: količina *artikla* koju je preradio podnosilac *Reklamacije*; ovu vrednost potrebno je uneti ručno.
>> **Prihvaćeno**: prihvaćena količina *artikla*; ovu vrednost potrebno je uneti ručno.
>
> **Vrednost**
>> **Reklamirano**: vrednost koju je zahtevao pošiljalac *Reklamacije*; ovu vrednost potrebno je uneti ručno.
>> **Prihvaćeno**: prihvaćena vrednost; vrednost se unosi ručno.
>
> **Povrat**
>> **Odobrenje za povrat**: označava da je odobren povrat vraćenog *artikla* za *prihvaćenu količinu*.
>> **Očekivani datum povrata**: očekivani datum povrata vraćenog *artikla*.
>> **Lot**: *povratni lot* vraćenog *artikla*.
>> **Serijski broj**: *serijski broj* vraćenog *artikla*.
>> **Jedinica utovara**: *jedinica utovara* vraćenog *artikla*.

### Podaci o predmetu

Ovo su dodatne informacije za izabrani red *reklamacije*. Podaci su:

> **Projekat**: referenca na *Projekat* određenog *nedostatka*.
> **Beleške o artiklu**: slobodne beleške o *artiklu* određenog *nedostatka*.
> **Beleške o lotu**: slobodne beleške o *lotu* određenog *nedostatka*.
> **Beleške o jedinici utovara**: slobodne beleške o *jedinici utovara* određenog *nedostatka*.
> **Beleška**: beleška za određeni *nedostatak*.
> **DDT kupca**: referenca na *prodajni dokument* (*Tip*, *Godina* i *Broj*) za koji se pretpostavlja da je *artikal* prodat.
> **Prodajni račun**: referenca na *Prodajni račun* (*Tip*, *Godina* i *Broj*) za koji se pretpostavlja da je *artikal* fakturisan.
> **Prijem robe**: referenca na *Prijem robe* (*Tip*, *Godina* i *Broj*) kojim pošiljalac vraća *artikal*.
> **Prijem robe nabavke**: referenca na *Prijem robe nabavke* (*Tip*, *Godina* i *Broj*) kojim pošiljalac vraća *artikal*.

### Dodatni podaci

Moguće je uneti [Dodatne podatke](/docs/configurations/utility/extra-data/extradata/new-extradata) za izabrani *predmet reklamacije*.

### Priloženi dokumenti

Ovde je moguće uneti i pregledati sve dokumente priložene izabranom *predmetu reklamacije*.

## Upravljanje 8D

### Tim

Ovo je grupa resursa koji će učestvovati u upravljanju *Reklamacijom* i sastoji se od sledećih informacija:

> **Funkcija preduzeća**
>> **Šifra**: šifra *Funkcije preduzeća* koja će biti uključena.
>> **Opis**: opis *Funkcije preduzeća* koja će biti uključena.
>
> **Zaposleni**
>> **Šifra**: šifra *zaposlenog* koji će biti uključen.
>> **Prezime**: prezime *zaposlenog* koji će biti uključen.
>> **Ime**: ime *zaposlenog* koji će biti uključen.
>
> **Vođa**: označava da je uključena osoba *Vođa tima*.
> **Opis subjekta**: slobodna beleška ako uključeni subjekt nije *Funkcija preduzeća* niti *Zaposleni*.
> **Beleška**: slobodne beleške.

### Mere suzbijanja

To su neposredne mere koje će se preduzeti dok se ne sprovedu trajne korektivne mere.

Na taj način se obezbeđuje da se prijavljeni problem ne ponovi, a sastoje se od sledećih informacija:

> **Podaci o aktivnosti**
>> **Sekvenca**: *sekvenca* prikaza *Mera suzbijanja*; predlaže se automatski rastuća sekvenca koju je moguće izmeniti.
>> **Mera suzbijanja**: slobodna beleška o *Meri suzbijanja* koja će biti sprovedena.
>> **Rok**: datum do kojeg moraju biti završene aktivnosti povezane sa *Merom suzbijanja*.
>> **Sprovedeno**: označava da je *Mera suzbijanja* završena.
>> **Datum sprovođenja**: datum kada je *Mera suzbijanja* završena.
>
> **Funkcija preduzeća**
>> **Šifra**: šifra *Funkcije preduzeća* koja će biti uključena.
>> **Opis**: opis *Funkcije preduzeća* koja će biti uključena.
>
> **Zaposleni**
>> **Šifra**: šifra *zaposlenog* koji će biti uključen.
>> **Prezime**: prezime *zaposlenog* koji će biti uključen.
>> **Ime**: ime *zaposlenog* koji će biti uključen.
>
> **Referenca korektivne mere**
>> **Tip**, **Godina** i **Broj**: reference namenjene samo za pregled *Korektivne mere* povezane sa redom *Mere suzbijanja* i kreirane pomoću dugmeta **Kreiraj korektivnu meru**.
>
> **Opis subjekta**: beleška u slučaju da odgovorna osoba za aktivnost nije *Funkcija preduzeća* niti *Zaposleni*.
> **Beleška**: slobodne beleške.

### Uzrok

Ovo su potencijalni *uzroci* koji mogu objasniti zašto je došlo do problema, uz dodelu procenta verovatnoće.

> **Sekvenca**: *sekvenca* prikaza *Uzroka*; predlaže se automatski rastuća sekvenca koju je moguće izmeniti.
> **Uzrok** i **Opis uzroka**: uzrok koji je verovatno doveo do problema; mogu se uneti samo aktivni *Uzroci* predviđeni za *Reklamacije*.
> **Dodatni opis**: slobodne beleške o *Uzroku*.
> **Tip uzroka**: tip uzroka; postoje dva tipa: uzrok koji je omogućio nastanak *Događaja* i uzrok koji je omogućio *Propust* bez otkrivanja *Događaja*.
> **Težina (%)**: težina (izražena u procentima) svakog pojedinačnog *Uzroka*. Zbir svih težina mora biti 100%.
> **Podaci o problemu**: slobodna beleška o temi/problemu.
> **Beleška**: slobodne beleške.

### Trajne mere

To su trajne mere koje će biti sprovedene, uzimajući u obzir da, osim što će rešiti problem, neće izazvati neželjene posledice.

Popis se sastoji od sledećih informacija:

> **Podaci o aktivnosti**
>> **Sekvenca**: *sekvenca* prikaza *trajnih mera*; predlaže se automatski rastuća sekvenca koju je moguće izmeniti.
>> **Trajna mera**: slobodna beleška o *trajnoj meri* koja će biti sprovedena.
>> **Izvorni uzrok** i **Opis izvornog uzroka**: uzrok, među prethodno navedenima na kartici **Uzroci**, na osnovu kojeg će biti sprovedena *Mera*.
>> **Rok**: datum do kojeg moraju biti završene aktivnosti povezane sa *trajnom merom*.
>> **Sprovedeno**: označava da je *Trajna mera* završena i da se *Datum sprovođenja* automatski postavlja na današnji datum, uz mogućnost izmene.
>> **Datum sprovođenja**: datum kada je *Trajna mera* završena. Oznaka *Sprovedeno* se automatski postavlja kada se unese datum.
>
> **Funkcija preduzeća**
>> **Šifra**: šifra *Funkcije preduzeća* koja će biti uključena.
>> **Opis**: opis *Funkcije preduzeća* koja će biti uključena.
>
> **Zaposleni**
>> **Šifra**: šifra *zaposlenog* koji će biti uključen.
>> **Prezime**: prezime *zaposlenog* koji će biti uključen.
>> **Ime**: ime *zaposlenog* koji će biti uključen.
>
> **Referenca korektivne mere**
>> **Tip**, **Godina** i **Broj**: reference samo za pregled *Korektivne mere* povezane sa redom *Trajna mera* i kreirane pomoću dugmeta **Kreiraj korektivnu meru**.
>
> **Opis subjekta**: beleške ako odgovorna osoba za aktivnost nije *Funkcija preduzeća* niti *Zaposleni*.
> **Beleške**: slobodne beleške.

### Validacija mera

Automatski popunjen popis svih prethodno unetih i završenih *Trajnih mera*. Ovaj popis se koristi za proveru da li su *Mere* završene u planiranim rokovima, kao i za procenu njihove primene i efikasnosti. Zbog toga nije moguće dodavati nove *Mere* niti brisati postojeće sa ovog popisa.

Popis sadrži sledeće informacije:

> **Podaci o sprovedenoj meri**
>> **Sekvenca**: *sekvenca* prikaza *Trajne mere*; prikazuje se redni broj *Trajne mere*. Ovaj podatak je samo za čitanje.
>> **Trajna mera**: izvršena *Trajna mera*. Ovaj podatak je samo za čitanje.
>> **Izvorni uzrok** i **Opis izvornog uzroka**: *Izvorni uzrok* izvršene *Trajne mere*. Ovaj podatak je samo za čitanje.
>
> **Podaci o validaciji sprovedene mere**
>> **Potvrđeno**: datum kada je *Trajna mera* potvrđena. Prilikom unosa bilo kog drugog podatka automatski se postavlja tekući datum, uz mogućnost izmene.
>> **Testovi sprovedeni radi provere efikasnosti mere**: slobodna beleška.
>
> **Potvrda od strane funkcije preduzeća**
>> **Šifra**: šifra *Funkcije preduzeća* odgovorne za validaciju.
>> **Opis**: opis *Funkcije preduzeća* odgovorne za validaciju.
>
> **Potvrda od strane zaposlenog**
>> **Šifra**: šifra *zaposlenog* koji je uključen.
>> **Prezime**: prezime *zaposlenog* koji je uključen.
>> **Ime**: ime *zaposlenog* koji je uključen.
>
> **Opis subjekta**: slobodna beleška u slučaju da osoba odgovorna za *Meru* nije *Funkcija preduzeća* niti *Zaposleni*.

### Faze

Ovo su druge mere/aktivnosti u kojima je potrebno sprovesti dodatne aktivnosti. Popis sadrži sledeće informacije:

> **Identifikovane i/ili sprovedene faze**
>> **Sekvenca**: *sekvenca* prikaza *Faze*.
>> **Aktivnost koju treba sprovesti**: slobodna beleška o *Aktivnosti* koju treba sprovesti radi završetka faze.
>> **Očekivani datum sprovođenja**: očekivani datum završetka *Aktivnosti*.
>> **Sprovedena aktivnost**: beleška o *Aktivnosti* izvršenoj radi završetka faze.
>> **Datum sprovođenja**: stvarni datum završetka *Aktivnosti*.
>
> **Potvrda od strane funkcije preduzeća**
>> **Šifra**: šifra *Funkcije preduzeća* odgovorne za validaciju.
>> **Opis**: opis *Funkcije preduzeća* odgovorne za validaciju.
>
> **Potvrda od strane zaposlenog**
>> **Šifra**: šifra *zaposlenog* koji je uključen.
>> **Prezime**: prezime *zaposlenog* koji je uključen.
>> **Ime**: ime *zaposlenog* koji je uključen.
>
> **Referenca korektivne mere**
>> **Tip**, **Godina** i **Broj**: reference samo za pregled *Korektivne mere* povezane sa redom *Aktivnosti* i kreirane pomoću dugmeta **Kreiraj korektivnu meru**.
>
> **Opis subjekta**: slobodne beleške ako odgovorna osoba za *Aktivnost* nije *Funkcija preduzeća* niti *Zaposleni*.
> **Beleške**: slobodne beleške.

Za sve što nije detaljno opisano u ovom dokumentu o uobičajenom funkcionisanju formi, pogledajte sledeći link [Funkcionalnosti, dugmad i polja](/docs/guide/common).