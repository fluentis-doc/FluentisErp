---
title: Pretraga kontrolnih planova
sidebar_position: 1
---

Filter se nalazi na putanji **Kvalitet > Kontrola artikala > Kontrolni planovi**.

**Kontrolni planovi** definišu nizove *Planiranih ispitivanja* koja se sprovode prilikom prijema materijala, tokom proizvodnog procesa ili tokom završne kontrole, kako bi se proverila ispravnost primljenih materijala ili proizvedenih artikala.

*Kontrolni planovi* mogu biti definisani za pojedinačne artikle ili grupe artikala, ili povezani sa *Fazama* *Ciklusa obrade*, a mogu se razlikovati prema *Kupcu* i *Dobavljaču*.

Takođe je moguće upravljati *Revizijama* *Kontrolnih planova*.

Filter podataka omogućava unos novih *Kontrolnih planova* ili pretragu postojećih radi pregleda, izmene ili brisanja.

### ![](/img/neutral/common/search.png) Pretraga kontrolnih planova

Obrazac se sastoji od dela za filtriranje i dela sa rezultatima. Nakon podešavanja željenih filtera potrebno je kliknuti na dugme **Traži** kako bi se rezultati prikazali u pregledu rezultata.

### ![](/img/neutral/common/new.png) Unos kontrolnih planova

Za unos novog *Kontrolnog plana* potrebno je pritisnuti dugme **Novo**.

### ![](/img/neutral/common/edit.png) Izmeni ili ![](/img/neutral/common/view.png) Prikaži kontrolne planove

Za otvaranje zapisa iz prikaza rezultata potrebno je dvaput kliknuti na željeni red ili, nakon izbora jednog ili više redova, pritisnuti dugme **Izmeni** ili **Prikaži**.

*Specifična dugmad:*

### ![](/img/neutral/common/duplicate.png) Dupliranje kontrolnih planova

Da biste duplirali postojeći *Kontrolni plan* u novi *Kontrolni plan*, potrebno je označiti *Kontrolni plan* koji želite da duplirate u pregledu i pritisnuti dugme **Dupliraj kontrolni plan**.

Istovremeno je moguće duplirati samo jedan *Kontrolni plan*.

Prikazaće se sledeći dijalog:

> **Vrsta kontrolnog plana**: predstavlja *Vrstu kontrolnog plana* novog *Kontrolnog plana* (obavezno polje). Predlaže se ista *Vrsta kontrolnog plana* kao kod izvornog plana.
>
> **Broj**: redni *broj* novog *Kontrolnog plana* (obavezno polje). Predlaže se na osnovu *Numeracije* povezane sa *Vrste kontrolnog plana* i tekućeg datuma.
>
> **Dupliraj sa sledljivošću**: označava da li se želi zadržati veza/sledljivost između novog i izvornog *Kontrolnog plana*, posebno na kartici *Povezani kontrolni planovi*.

Nakon toga potrebno je pritisnuti dugme **U redu** ili **Otkaži** kako biste odlučili da li želite da nastavite postupak dupliranja.

Po završetku postupka prikazuje se novi *Kontrolni plan*.

### ![](/img/neutral/common/execute.png) Kreiraj novu reviziju

Za kreiranje nove *Revizije* postojećeg *Kontrolnog plana* potrebno je označiti *Kontrolni plan* iz kojeg želite da kreirate novu *Reviziju* i pritisnuti dugme **Kreiraj novu reviziju**.

Nova *Revizija* može se kreirati samo za jedan *Kontrolni plan* istovremeno.

Novi *Kontrolni plan* kreira se sa svim informacijama iz izvornog plana, ali sa uvećanim indeksom *Revizije* i *Datumom početka važenja* postavljenim na tekući datum.

Izvorni *Kontrolni plan* prestaje da važi, a *Datum završetka važenja* automatski se postavlja na tekući datum.

Po završetku postupka prikazuje se nova *Revizija Kontrolnog plana*.

### Kreiraj novo tehničko uputstvo

Iz *Kontrolnog plana* moguće je kreirati *Tehničko uputstvo*.

Da biste to uradili, potrebno je označiti *Kontrolni plan* za koji želite da kreirate uputstvo i pritisnuti dugme **Kreiraj novo tehničko uputstvo**.

Novo *Tehničko uputstvo* može se kreirati samo za jedan *Kontrolni plan* istovremeno.

Kreira se novo *Tehničko uputstvo* sa svim informacijama iz izvornog *Kontrolnog plana*, ali sa indeksom *Revizije* postavljenim na *0* i *Datumom početka važenja* postavljenim na tekući datum.

Prikazaće se sledeći dijalog:

> **Vrsta lista**: predstavlja *Vrstu lista (uputstva)* novog *Tehničkog uputstva* (obavezno polje).
>
> **Kupac**: predstavlja *Kupca* novog *Tehničkog uputstva*. Predlaže se kupac iz izvornog *Kontrolnog plana* (samo ako je definisan kao *Kupac*).
>
> **Nova šifra**: predstavlja *Šifru* novog *Tehničkog uputstva* (obavezno polje). Predlaže se na osnovu *Metode kodiranja* povezane sa *Vrste tehničkog lista*.
>
> **Rev.**: indeks *Revizije* novog *Tehničkog uputstva* (obavezno polje); postavljen je na *0*.
>
> **Kreiraj održavanje sledljivosti**: označava da li se želi održati veza/sledljivost između novog *Tehničkog uputstva* i izvornog *Kontrolnog plana*, posebno na kartici *Povezane šeme*.

Nakon toga potrebno je pritisnuti dugme **U redu** ili **Otkaži** kako biste nastavili ili odustali od postupka kreiranja.

Po završetku postupka prikazuje se novo *Tehničko uputstvo*.

### Zahtevi za kontrolne planove

Pomoću ovog dugmeta moguće je upravljati *Zahtevima za kontrolni plan*.

Za sve funkcionalnosti koje nisu detaljno opisane u ovom dokumentu, a odnose se na uobičajeno funkcionisanje obrazaca, pogledajte sledeću poveznicu:

[Funkcionalnosti, dugmad i polja](/docs/guide/common).