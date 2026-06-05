---
title: Tehnička uputstva
sidebar_position: 2
---

Upravljanje se nalazi na putanji **Kvalitet > Kontrola artikla > Tehnička uputstva > Novo tehničko uputstvo** ili se može pokrenuti putem **Pretrage tehničkih uputstava**. :contentReference[oaicite:0]{index=0}

:::important Čemu služi
Tehnička uputstva katalogizuju sve informacije koje opisuju karakteristike proizvoda kao usklađene sa ugovorom, funkcionalnom specifikacijom ili određenom namenom.

Tehnička uputstva mogu biti prilagođena pojedinačnom *Kupcu*.

Omogućeno je upravljanje revizijama i sledljivošću između povezanih *Tehničkih uputstava*.

Standardno su dostupni sledeći izveštaji:

> **Tehničko uputstvo**: obrazac sa listom *Svojstava* i povezanih *Normi i zakona* (za internu upotrebu).
>
> **Kartica proizvoda**: obrazac sa podacima o *Proizvodu* i njegovim *Svojstvima* (za komercijalnu upotrebu).
:::

## Dugmad za upravljanje

### ![](/img/neutral/common/save.png) Sačuvaj

Pritiskom na ovo dugme čuvaju se sve izmene prikazanog *Tehničkog uputstva*.

### ![](/img/neutral/common/duplicate.png) Dupliraj karticu

Moguće je duplirati prikazano *Tehničko uputstvo* u novo *Tehničko uputstvo* pritiskom na dugme **Dupliraj**.

Prikazaće se dijalog za unos sledećih podataka:

> **Vrsta liste**: predstavlja *Vrstu uputstva* novog *Tehničkog uputstva* (obavezno polje). Predlaže se vrednost iz izvornog dokumenta.
>
> **Kupac**: predstavlja *Kupca* novog *Tehničkog uputstva*. Predlaže se kupac iz izvornog dokumenta.
>
> **Dodatni podaci**: lista dodatnih podataka definisanih za izabranu *Vrstu uputstva*.
>
> **Nova šifra**: predstavlja *Šifru* novog *Tehničkog uputstva* (obavezno polje), predloženu na osnovu *Metode kodiranja* povezane sa *Vrste tehničkog uputstva*.
>
> **Dupliraj sa sledljivošću**: označava da li se želi zadržati veza/sledljivost između izvornog i novog *Tehničkog uputstva*:
>
> - u izvornom dokumentu na kartici *Povezane stavke*;
> - u novom dokumentu u sekciji *Izvor podataka kartice* u zaglavlju dokumenta.

*Vrsta liste* i *Kupac* predlažu se iz izvornog dokumenta, dok se *Šifra* predlaže ako je za izabranu *Vrstu uputstva* definisana *Metoda kodiranja*.

Nakon toga potrebno je pritisnuti dugme **U redu** ili **Otkaži** kako biste nastavili ili odustali od postupka.

Novo *Tehničko uputstvo* biće kreirano sa *Revizijom* postavljenom na *0*.

Po završetku postupka prikazuje se novo *Tehničko uputstvo*.

### ![](/img/neutral/common/execute.png) Kreiraj novu reviziju

Za kreiranje nove *Revizije* postojećeg *Tehničkog uputstva* potrebno je pritisnuti dugme **Kreiraj novu reviziju**.

Nova *Revizija* može se kreirati samo za jedno *Tehničko uputstvo* istovremeno.

Kreira se novo *Tehničko uputstvo* sa svim informacijama iz izvornog dokumenta, ali sa:

- uvećanim indeksom *Revizije*;
- *Datumom početka važenja* postavljenim na tekući datum.

Izvorno *Tehničko uputstvo* prestaje da važi, a *Datum završetka važenja* automatski se postavlja na tekući datum.

Po završetku postupka prikazuje se nova *Revizija Tehničkog uputstva*.

### ![](/img/neutral/common/item-web.png) Kreiraj kontrolni plan

Iz *Tehničkog uputstva* moguće je kreirati *Kontrolni plan*.

Za to je potrebno izabrati *Tehničko uputstvo* i pritisnuti dugme **Kreiraj kontrolni plan**.

Novi *Kontrolni plan* može se kreirati samo za jedno *Tehničko uputstvo* istovremeno.

Kopiraju se samo *Svojstva* koja imaju oznaku *Merenja koja treba izvršiti*, dok se ostale informacije preuzimaju iz izvornog *Tehničkog uputstva*. Novi plan se kreira sa:

- indeksom *Revizije* postavljenim na *0*;
- *Datumom početka važenja* postavljenim na tekući datum.

Prikazaće se dijalog za unos sledećih podataka:

> **Vrsta kontrolnog plana**: predstavlja *Vrstu kontrolnog plana* novog *Kontrolnog plana* (obavezno polje).
>
> **Broj**: redni broj novog *Kontrolnog plana* (obavezno polje), predložen na osnovu *Numeracije* povezane sa *Vrste kontrolnog plana* i tekućeg datuma.
>
> **Kreiraj održavanje sledljivosti**: označava da li će se zadržati veza/sledljivost između izvornog *Tehničkog uputstva* i novog *Kontrolnog plana*, u sekciji *Izvor kontrolnog plana* u zaglavlju dokumenta.

Nakon toga potrebno je pritisnuti dugme **U redu** ili **Otkaži** kako biste nastavili ili odustali od postupka.

Po završetku postupka prikazuje se novi *Kontrolni plan*.

### ![](/img/neutral/common/duplicate.png) Dupliraj svojstvo

Na kartici *Svojstva* ovo dugme je omogućeno samo kada je izabrano jedno *Svojstvo*.

Sve informacije izvornog *Svojstva* dupliraju se u novo *Svojstvo*, koje se dodaje na kraj postojeće *Sekvence svojstava*.

## Upravljanje podacima

### Podaci zaglavlja

Upravljaju se sledeće informacije:

> **Vrsta liste**: predstavlja *Vrstu tehničke kartice* (obavezno polje).
>
> Prilikom ručnog unosa novog *Tehničkog uputstva* predlaže se vrednost definisana u *Parametrima kontrole artikala*.
>
> **Šifra**: predstavlja *Šifru Tehničkog uputstva* (obavezno polje).
>
> Predlaže se na osnovu *Metode kodiranja* povezane sa *Vrste tehničke kartice*.
>
> **Revizija**: predstavlja *Reviziju Tehničkog uputstva* (obavezno polje).
>
> Može se menjati samo prilikom kreiranja novog dokumenta. U ostalim slučajevima je samo za čitanje i menja se korišćenjem funkcije *Kreiraj novu reviziju*.
>
> **Opis**: opis *Tehničkog uputstva*.
>
> **Trgovački naziv**: komercijalni naziv *Tehničkog uputstva*.
>
> **Kupac**: naziv *Kupca*. *Svojstva* mogu biti prilagođena za *Kupca* i *Povezane artikle*.
>
> **Datum zahteva / Zahtevao**: informativni podaci o zahtevu za kreiranje dokumenta.
>
> **Važenje: Početak/Kraj**: datumi početka i završetka važenja *Tehničkog uputstva*.
>
> Sistem njima automatski upravlja prilikom kreiranja nove *Revizije*.
>
> **Odgovorno lice**: *Zaposleni* odgovoran za *Tehničko uputstvo*.
>
> Prilikom kreiranja novog dokumenta predlaže se odgovorno lice definisano u parametrima sistema.
>
> **Izvor podataka kartice**:
>
>> **Vrsta / Izvorna kartica / Rev.**: reference na izvorno *Tehničko uputstvo*.
>>
>> **Razlog revizije**: kratak opis razloga za kreiranje revizije.
>>
>> Ovaj podatak može se menjati dok je dokument važeći.
>
> **Napomene**: slobodne beleške.

### Atributi svojstva

Moguće je uneti [Dodatne podatke](/docs/configurations/utility/extra-data/extradata/new-extradata) za svako *Tehničko uputstvo*.

Oni se nasleđuju iz *Atributa tehničke kartice* povezanih sa *Vrste tehničke kartice*.

### Svojstva

Sadrži *Svojstva* artikala ili *Atribute artikala* definisane u *Tehničkom uputstvu*.

Lista sadrži sledeće informacije:

> **Redosled**: redosled prikaza ili prioriteta *Svojstva*.
>
> **Vrsta testa**: šifra *Svojstva*.
>
> **Opis vrste testa**: opis *Svojstva*. Informacija je samo za čitanje.
>
> **Opis**: opis *Svojstva* koji se može uređivati.
>
> **Referenca standardnog kontrolnog plana**: opisno polje sa referencama na međunarodno priznate standarde ispitivanja.
>
> **Kategorija mernog instrumenta**: kategorija instrumenta koji se koristi za očitavanje vrednosti.
>
> **Test za evidentiranje**: označava da li je *Svojstvo* potrebno evidentirati.
>
> Prilikom kreiranja *Kontrolnog plana*, takvo *Svojstvo* biće preneto u listu *Planiranih testova*.
>
> **Jedinica mere**, **Vrsta vrednosti**, **Vrsta ograničenja**, **Nominalna vrednost**, **Minimalno ograničenje**, **Maksimalno ograničenje**, **Tolerancije**, **%**, **Datum početka važenja**, **Datum završetka važenja**, **Štampa se** i **Napomene** imaju isto značenje kao i u upravljanju *Kontrolnim planovima*.

Pozitivne i negativne tolerancije granica obično proizlaze iz greške korišćenog *Mernog instrumenta*. U ovoj verziji unose se ručno.

### Norme i zakoni

Sadrži reference na *Norme* i *Zakone* primenljive na *Svojstva* tehničkog uputstva.

Lista sadrži:

> **Vrsta**: vrsta norme ili zakona.
>
> **Šifra**: oznaka norme ili zakona.
>
> **Opis**: opis norme ili zakona.
>
> **Napomene**: slobodne beleške.

### Kupci

Sadrži *Kupce* i *Krajnje kupce* zainteresovane za artikle sa istim ili sličnim svojstvima.

Lista sadrži:

> **Kupac**
>
> **Krajnji kupac**
>
> **Napomene**

### Povezani artikli

Sadrži *Artikle* povezane sa definisanim *Svojstvima*.

Lista sadrži:

> **Klasa**
>
> **Šifra artikla**
>
> **Opis artikla**
>
> **Varijanta**
>
> **Opis varijante**
>
> **Vrsta izjave**
>
> **Napomene**

### Svojstva artikla

Kao alternativa listi *Povezani artikli*, moguće je uneti karakteristike u obliku [Dodatnih podataka](/docs/configurations/utility/extra-data/extradata/new-extradata) za koje su *Svojstva Tehničkog uputstva* važeća.

### Povezane šeme

U ovoj listi moguće je pregledati *Tehnička uputstva* nastala dupliranjem sa sledljivošću.

Dvostrukim klikom na red otvara se odgovarajuće *Tehničko uputstvo*.

### Istorija revizija

U ovoj listi prikazana je istorija prethodnih *Revizija* vezanih za trenutno *Tehničko uputstvo*.

Dvostrukim klikom na red otvara se odgovarajuće *Tehničko uputstvo*.

### Povezani dokumenti

U ovoj listi moguće je dodavati i pregledati priloge povezane sa dokumentom, uključujući pregled sadržaja.

Za sve funkcionalnosti koje nisu detaljno opisane u ovom dokumentu, a odnose se na uobičajeno funkcionisanje obrazaca, pogledajte sledeću poveznicu:

[Funkcionalnosti, dugmad i polja](/docs/guide/common).