---
title: Sertifikati analize
sidebar_position: 2
---

Upravljanje se može pronaći na putanji **Kvalitet > Kontrola artikla > Sertifikati analize > Novi sertifikat analize** ili putem opcije **Pretraga sertifikata analize**.

:::important Čemu služi
**Sertifikat analize** potvrđuje da određeni proizvod ispunjava karakteristike navedene u Tehničkim uputstvima ili specifikacijama Kupca. Takođe potvrđuje da je proizvod testiran i da zadovoljava ograničenja definisana u Kontrolnim planovima.

Sertifikati mogu biti generički ili prilagođeni. Ako su prilagođeni, potrebno je uneti **Kupca**.

Sledeći izveštaji su standardno dostupni:

> **Sertifikat analize**: obrazac sa listom *Proizvoda* i detaljima o *izvršenim ispitivanjima*, *utvrđenim vrednostima* i dobijenim *rezultatima*.
>
> **Izjava o usaglašenosti**: obrazac kojim se potvrđuje i garantuje usaglašenost *Proizvoda*.
:::

## Dugmad za upravljanje

### ![](/img/neutral/common/save.png) Sačuvaj

Pritiskom na ovo dugme čuvaju se svi izmenjeni podaci u prikazanom *Sertifikatu analize*.

### ![](/img/neutral/common/import.png) Uvoz kontrola

Pritiskom na ovo dugme pretražuju se *Odobrene kontrole artikala* koje će biti povezane sa prikazanim *Sertifikatom analize*.

Prikazuje se alat za pretragu i izbor *Kontrola artikala* koje će biti uvezene u *Sertifikat analize*.

Prikazuju se samo *Odobrene kontrole artikala* koje zadovoljavaju zadati filter podataka.

Pritiskom na dugme *Odaberi* dupliraju se izabrane *Kontrole artikala* i prikazuju u otvorenom *Sertifikatu analize*.

### ![](/img/neutral/common/update.png) Ažuriraj

Pritiskom na ovo dugme ažuriraju se sve informacije u prikazanom *Sertifikatu analize*.

## Podaci kojima se upravlja

### Podaci zaglavlja dokumenta

Podaci kojima se upravlja su:

> **Vrsta sertifikata**: predstavlja vrstu dokumenta (obavezno polje).
>
> Prilikom unosa novog *Sertifikata analize* prikazuje se *Vrsta sertifikata* definisana u ekstenziji *Sertifikati analize* na kartici *Opšte* u okviru *Parametara kontrole artikala*.
>
> **Godina/Broj/Datum**: predstavljaju *Godinu*, *Broj* i *Datum* *Sertifikata analize* (obavezni podaci).
>
> Prilikom kreiranja novog *Sertifikata analize*:
>
> - *Datum* se postavlja na tekući datum;
> - *Godina* i *Broj* se određuju na osnovu *Datuma* i *Numeracije* povezane sa *Vrste sertifikata*.
>
> **Kupac**: naziv kompanije *Kupca* kojem će dokument biti poslat.

### Zaglavlje

Podaci kojima se upravlja su:

> **Odgovorno lice**: *Zaposleni* odgovoran za *Sertifikate analize*.
>
> Prilikom ručnog unosa novog *Sertifikata analize* prikazuje se *Odgovorno lice* definisano u ekstenziji *Sertifikati analize* na kartici *Opšte* u okviru *Parametara kontrole artikala*.
>
> **Spoljni referent**: *Poslovna funkcija* odgovorna za *Korektivnu radnju*.
>
> **Napomena kupca**: slobodne beleške.
>
> **Naša referenca**: slobodne beleške vezane za interne dokumente.
>
> **Vaša referenca**: slobodne beleške vezane za dokumente kupca.
>
> **Opis**: slobodne beleške.
>
> **Završen/Datum**: sekcija koja sadrži:
>
>> **Završen**: označava da je *Sertifikat analize* završen.
>>
>> Nakon završetka automatski se prikazuju:
>>
>> - *Datum završetka* (podrazumevano današnji datum, može se promeniti);
>> - *Završio*;
>> - *Zaposleni* povezan sa prijavljenim *A.R.M. korisnikom*.
>>
>> **Obavešten/Na datum**: označava da je *Sertifikat analize* poslat kupcu na navedeni datum.
>>
>> Nakon obaveštavanja automatski se prikazuje:
>>
>> - *Datum obaveštavanja* (podrazumevano današnji datum, može se promeniti).
>
> **Audit Trail**: sekcija samo za čitanje u kojoj su vidljive informacije o korisnicima koji su radili na dokumentu.

#### Beleške

Podaci kojima se upravlja su:

> **Interna napomena**: slobodne beleške.
>
> **Za štampu**: određuje da li će *Interne napomene* biti štampane u izveštajima *Sertifikata analize* i *Izjave o usaglašenosti*.
>
> **Napomene kontrolnog plana**: slobodne beleške povezane sa korišćenim kontrolnim planovima.
>
> **Za štampu**: određuje da li će *Napomene kontrolnog plana* biti štampane u izveštajima *Sertifikata analize* i *Izjave o usaglašenosti*.
>
> **Ostale napomene**: slobodne beleške.

#### Ostali podaci

Moguće je uneti [Dodatne podatke](/docs/configurations/utility/extra-data/extradata/new-extradata) za svaki *Sertifikat analize*.

### Kontrole i utvrđene vrednosti

Podaci kojima se upravlja su:

> **Artikal**
>
>> **Broj**: redni broj stavke dokumenta.
>>
>> **Tip reda**: vrsta reda dokumenta. U verziji *1 - Kodirani artikal* upravlja se samo ovim tipom reda.
>>
>> **Klasa**: klasa *artikla* koji se kontroliše.
>>
>> **Šifra artikla**: šifra *artikla* koji se kontroliše.
>>
>> **Opis artikla**: opis *artikla* koji se kontroliše.
>>
>> **Jedinica utovara**: .
>>
>> **Lot**: .
>>
>> **Serijski broj**: .
>>
>> **Jedinica mere**: *Jedinica mere* za *Količinu dokumenta* kontrolisanog artikla.
>>
>> **Količina**: *Količina dokumenta* kontrolisanog artikla.
>>
>> **Alternativna jedinica mere**: alternativna jedinica mere za količinu dokumenta kontrolisanog artikla.
>>
>> **Alternativna količina**: alternativna količina dokumenta kontrolisanog artikla.
>
> **Kontrola artikla**
>
>> **Tip**: šifra *Vrste kontrole artikla*.
>>
>> **Opis tipa**: opis *Vrste kontrole artikla*. Informacija je samo za čitanje.
>>
>> **Broj**: broj *Kontrole artikla*. Informacija je samo za čitanje.
>>
>> **Datum**: datum unosa *Kontrole artikla*. Informacija je samo za čitanje.
#### Utvrđene vrednosti

Sadrži listu *testova* za *artikal*.

Informacije se nasleđuju iz *testova* povezanih sa *kontrolama artikala* i mogu se menjati prema istoj logici koja se koristi u upravljanju [*kontrolama artikala*](/docs/quality/item-control/items-control/item-control-management).

Lista se sastoji od sledećih informacija:

> **Redosled**: redosled izvršavanja *Testa*.
>
> **Vrsta testa**: šifra *Testa*.
>
> **Opis vrste testa**: opis *Testa*. Ova informacija je samo za čitanje.
>
> **Jedinica mere za evidentirane vrednosti**: *Jedinica mere* koja se koristi za izražavanje *Nominalne vrednosti*, *Minimalnih i maksimalnih granica* kada su izražene kao vrednost, a ne kao procenat, kao i *Utvrđenih vrednosti*.
>
> **Vrsta vrednosti**: *Vrsta vrednosti* koja se koristi za izražavanje *Nominalne vrednosti*; moguće vrednosti su: *Numerička*, *Da/Ne* ili *Tekst*.
>
> **Vrsta ograničenja**: omogućena je kada je *Vrsta vrednosti* postavljena na *Numerička*; određuje način upravljanja poljima *Ograničenja* i *Tolerancije*.
>
> **Nominalna vrednost**: očekivana teorijska vrednost *Testa*.
>
> **Minimalno ograničenje**: minimalna dozvoljena granica u odnosu na *Nominalnu vrednost*.
>
> **Min.L. (tol-)**: negativna tolerancija minimalne granice.
>
> **Min.L. (tol+)**: pozitivna tolerancija minimalne granice.
>
> **Maksimalno ograničenje**: maksimalna dozvoljena granica u odnosu na *Nominalnu vrednost*.
>
> **Max.L. (tol-)**: negativna tolerancija maksimalne granice.
>
> **Max.L. (tol+)**: pozitivna tolerancija maksimalne granice.
>
> **%**: označava da li su *Minimalno ograničenje* i *Maksimalno ograničenje* izraženi procentualno.
>
> **Evidentirana vrednost**: konkretna vrednost utvrđena tokom *Testa* koja određuje njegov *Rezultat*.
>
> Prilikom unosa *Evidentirane vrednosti*:
>
> - polje *Utvrdio* prikazuje *Zaposlenog* povezanog sa prijavljenim *A.R.M. korisnikom*;
> - polje *Utvrdio korisnik* prikazuje prijavljenog *A.R.M. korisnika*;
> - polje *Rezultat* prikazuje rezultat *Testa* i može se naknadno menjati;
> - polje *Datum rezultata testa* prikazuje tekući datum i može se naknadno menjati.
>
> **Prosek evidentiranih vrednosti**: prosečna vrednost svih merenja unetih u sekciji *Višestruke evidentirane vrednosti* za dati *Test*.
>
> **Utvrdio**: *Zaposleni* koji je uneo *Utvrđenu vrednost*.
>
> Prilikom unosa *Evidentirane vrednosti*, ovo polje se automatski popunjava zaposlenim povezanim sa prijavljenim *A.R.M. korisnikom*.
>
> **Utvrdio korisnik**: *A.R.M. korisnik* koji je uneo *Utvrđenu vrednost*.
>
> Prilikom unosa *Evidentirane vrednosti*, ovo polje se automatski popunjava prijavljenim *A.R.M. korisnikom*.
>
> **Rezultat**: rezultat prolaska ili neuspeha *Testa*.
>
> Prilikom unosa *Rezultata*, polje *Datum rezultata testa* automatski dobija današnji datum i može se naknadno izmeniti.
>
> Prilikom unosa *Izmerene vrednosti* ili *Proseka evidentiranih vrednosti*, rezultat se predlaže na osnovu *Vrste vrednosti*, *Vrste ograničenja*, *Nominalne vrednosti*, *Ograničenja* i *Tolerancija*.
>
> **Može se štampati**: označava da li će *Test* biti uključen u štampane izveštaje.
>
> **Odobreno**: označava da su vrednosti i *Rezultat* dodeljeni *Testu* odobreni.
>
> Nakon odobrenja, *Datum odobrenja rezultata* automatski se postavlja na tekući datum i može se promeniti; svi podaci *Testa* postaju neizmenjivi.

### Višestruke evidentirane vrednosti

Sadrži listu merenja izvršenih za jedan *Test*.

Podaci se takođe nasleđuju iz *Testova* povezanih sa *Kontrolama artikala* i mogu se menjati prema istoj logici koja se koristi u upravljanju [*Kontrolama artikala*](/docs/quality/item-control/items-control/item-control-management).

Lista sadrži sledeće informacije:

> **Redosled**: redosled izvođenja merenja.
>
> **Pozicija**: slobodna napomena koja opisuje mesto merenja.
>
> **Utvrđena vrednost**: vrednost koju je registrovao operater.
>
> Ako je *Utvrđena vrednost* numeričkog tipa, prosek svih vrednosti unetih za izabrani *Test* automatski se prenosi u polje *Prosek evidentiranih vrednosti* i koristi se za određivanje *Rezultata*.
>
> Prilikom unosa *Utvrđene vrednosti*:
>
> - u polju *Utvrdio* prikazuje se *Zaposleni* povezan sa prijavljenim *A.R.M. korisnikom*;
> - u polju *Utvrdio korisnik* prikazuje se prijavljeni *A.R.M. korisnik*;
> - u polju *Datum evidentiranja* prikazuje se tekući datum.
>
> **Korišćeni merni instrument**: referenca na *Merni instrument* korišćen za dobijanje *Utvrđene vrednosti*.
>
> **Utvrdio**: *Zaposleni* koji je uneo *Utvrđenu vrednost*.
>
> Nakon unosa *Utvrđene vrednosti*, polje se automatski popunjava zaposlenim povezanim sa prijavljenim *A.R.M. korisnikom*.
>
> **Utvrdio korisnik**: *A.R.M. korisnik* koji je uneo *Utvrđenu vrednost*.
>
> Nakon unosa *Utvrđene vrednosti*, polje se automatski popunjava prijavljenim *A.R.M. korisnikom*.
>
> **Datum evidentiranja**: datum kada je operater uneo *Utvrđenu vrednost*.
>
> Nakon unosa *Utvrđene vrednosti*, automatski se postavlja na tekući datum.
>
> **Napomene**: slobodne beleške.
>
> **Opis mernog instrumenta**: opis korišćenog *Mernog instrumenta*.
### Detalji utvrđenih vrednosti

Sadrži dodatne informacije povezane sa izabranim *Testom*.

Informacije se nasleđuju iz uvezenih testova *Kontrola artikala* i mogu se menjati prema istoj logici koja se koristi u upravljanju [*Kontrolama artikala*](/docs/quality/item-control/items-control/item-control-management).

Podaci kojima se upravlja su:

> **Interni test**: označava da li je *Test* sproveden interno ili u eksternoj laboratoriji.
>
> **Datum slanja**: datum slanja materijala potrebnog za sprovođenje *Testa* u *Eksternu laboratoriju*. Polje je samo za čitanje ukoliko je označen *Interni test*.
>
> **Eksterna laboratorija**: naziv kompanije *Dobavljača* koja vrši ispitivanje. Polje je samo za čitanje ukoliko je označen *Interni test*.
>
> **Vrsta testa**: šifra i opis *Testa*.
>
> **Kategorija učestalosti**: slobodne beleške vezane za učestalost uzorkovanja.
>
> **Broj opažanja**: minimalni preporučeni broj merenja koja treba izvršiti.
>
> **Korišćeni merni instrument**: *Merni instrument* koji se koristi za određivanje konkretne vrednosti *Testa*.
>
> **Datum početka/završetka**: datumi početka i završetka *Testa*.
>
> **Datum rezultata testa**: datum dodele *Rezultata*.
>
> Prilikom unosa *Rezultata*, automatski se predlaže tekući datum, koji se može naknadno promeniti.
>
> **Opis rezultata**: slobodne beleške vezane za rezultat.
>
> **Datum odobrenja**: datum kada je *Test* odobren.
>
> Prilikom unosa ovog datuma automatski se postavlja oznaka *Odobreno*.
>
> **Opis odobrenja**: slobodne beleške vezane za odobrenje.
>
> **Napomene testa**: slobodne beleške.
>
> **Ostale napomene**: slobodne beleške.

### Ostali podaci izvršenih testova

Moguće je pregledati određene [Dodatne podatke](/docs/configurations/utility/extra-data/extradata/new-extradata) za svaki red *Utvrđenih vrednosti* u okviru reda *Artikal/Kontrola artikla*.

Ovi podaci se nasleđuju iz *Atributa testa* povezanih sa *Testovima* iz *Kontrola artikala*.

### Svojstva artikla

Moguće je uneti određene [Dodatne podatke](/docs/configurations/utility/extra-data/extradata/new-extradata) za svaki red *Utvrđenih vrednosti* u okviru reda *Artikal/Kontrola artikla*.

### Priloženi dokumenti

U ovoj listi mogu se dodavati i pregledati svi prilozi povezani sa redom *Utvrđenih vrednosti* u okviru reda *Artikal/Kontrola artikla*.

#### Detaljni podaci kontrole

Podaci kojima se upravlja su:

> **Referenca kontrolnog plana**: referenca na *Kontrolni plan* korišćen za testove i evidentirane vrednosti. Informacija je samo za čitanje.
>
> **Opis kontrole**: opis povezane *Kontrole artikla*. Informacija je samo za čitanje.
>
> **Napomena kontrole**: slobodne beleške.
>
> **Napomene artikal-kupac**: slobodne beleške.
>
> **Referenca tehničkog lista**: referenca na *Tehničko uputstvo* povezano sa korišćenim *Kontrolnim planom*. Informacija je samo za čitanje.
>
> **Vrsta izvornog dokumenta**: referenca na *Vrstu izvornog dokumenta* na osnovu koje su izvršene *Kontrole artikala*. Informacija je samo za čitanje.
>
> **Referenca izvornog dokumenta**: referenca na *Izvorni dokument* na osnovu kojeg su izvršene *Kontrole artikala*. Informacija je samo za čitanje.
>
> **Napomena**: slobodne beleške.

#### Ostali podaci kontrole

Moguće je pregledati određene [Dodatne podatke](/docs/configurations/utility/extra-data/extradata/new-extradata) za svaki red *Artikal/Kontrola artikla*.

Oni se nasleđuju iz *Svojstava kontrole* povezanih sa *Kontrolama artikala*.

#### Svojstva stavke/artikla

Moguće je uneti određene [Dodatne podatke](/docs/configurations/utility/extra-data/extradata/new-extradata) za svaki red *Artikal/Kontrola artikla*.

#### Priloženi dokumenti

U ovoj listi mogu se dodavati i pregledati svi prilozi povezani sa redom *Artikal/Kontrola artikla*.
Za sve funkcionalnosti koje nisu detaljno opisane u ovom dokumentu, a odnose se na uobičajeno funkcionisanje obrazaca, pogledajte sledeću poveznicu:

[Funkcionalnosti, dugmad i polja](/docs/guide/common).