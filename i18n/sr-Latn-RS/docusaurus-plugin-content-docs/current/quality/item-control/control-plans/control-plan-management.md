---
title: Kontrolni planovi
sidebar_position: 2
---

Upravljanje se može pronaći na putanji **Kvalitet > Kontrole artikala > Kontrolni planovi > Novi kontrolni plan** ili se može pokrenuti iz **Pretrage kontrolnih planova**.

:::important Čemu služi
Kontrolni planovi katalogizuju sva planirana ispitivanja, kontrole, potrebna merenja i vrednosti koje treba dobiti kako bi se osiguralo da materijali i povezani proizvodi ostanu u granicama zahtevanih karakteristika.

Pomoću kontrolnih planova moguće je unapred definisati kontrole koje će se sprovoditi tokom životnog ciklusa artikla: od kontrola ulaznih materijala i povrata od kooperanata, do kontrola tokom proizvodnog procesa artikla — pre, tokom i nakon izrade proizvoda.

Kontrolni planovi, kao i tehnička uputstva, mogu biti prilagođeni za svakog kupca i/ili dobavljača. Ovaj dokument takođe omogućava upravljanje revizijama i sledljivošću između povezanih kontrolnih planova.

Za svako planirano ispitivanje moguće je definisati da li se sprovodi interno ili eksterno, kategoriju i merni instrument koji će se koristiti, vrste potrebnih vrednosti (Da/Ne ili Numerička vrednost), nominalnu vrednost, donju i gornju granicu koje mogu biti izražene procentualno ili kao apsolutna vrednost, broj merenja koja treba izvršiti i njihovu učestalost.

Neki primeri vrsta kontrolnih planova su: kontrole prijema, kontrole prijema za ključne dobavljače, proizvodne kontrole i završne inspekcije.

Standardno je dostupno izveštavanje za **Kontrolne planove**.
:::

## Dugmad za upravljanje

### ![](/img/neutral/common/save.png) Sačuvaj

Pritiskom na ovo dugme čuvaju se sve izmenjene informacije prikazanog *Kontrolnog plana*.

### ![](/img/neutral/common/duplicate.png) Dupliraj kontrolni plan

Moguće je duplirati prikazani *Kontrolni plan* u novi *Kontrolni plan* pritiskom na dugme **Dupliraj**.

Prikazaće se sledeći dijalog:

> **Vrsta kontrolnog plana**: predstavlja *Vrstu kontrolnog plana* novog *Kontrolnog plana* (obavezno polje).
>
> Predlaže se ista *Vrsta kontrolnog plana* kao kod izvornog plana.
>
> **Broj**: redni broj novog *Kontrolnog plana* (obavezno polje).
>
> Predlaže se na osnovu *Numeracije* povezane sa *Vrste kontrolnog plana* i tekućeg datuma.
>
> **Dupliraj sa sledljivošću**: označava da li se želi zadržati veza/sledljivost između novog i izvornog *Kontrolnog plana*, naročito na kartici *Povezani kontrolni planovi*.

Nakon toga potrebno je pritisnuti dugme **U redu** ili **Otkaži** kako biste nastavili ili odustali od postupka dupliranja.

Po završetku postupka prikazuje se novi *Kontrolni plan*.

### ![](/img/neutral/common/execute.png) Kreiraj novu reviziju

Za kreiranje nove *Revizije* postojećeg *Kontrolnog plana* potrebno je pritisnuti dugme **Kreiraj novu reviziju**.

Kreira se novi *Kontrolni plan* sa svim informacijama izvornog plana, ali sa uvećanim indeksom *Revizije* i *Datumom početka važenja* postavljenim na tekući datum.

Izvorni *Kontrolni plan* prestaje da važi, a *Datum završetka važenja* automatski se postavlja na tekući datum.

Po završetku postupka prikazuje se nova *Revizija Kontrolnog plana*.

### Kreiraj novo tehničko uputstvo

Iz *Kontrolnog plana* moguće je kreirati *Tehničko uputstvo* pritiskom na dugme **Kreiraj novo tehničko uputstvo**.

Kreira se novo *Tehničko uputstvo* sa svim informacijama izvornog *Kontrolnog plana*, ali sa indeksom *Revizije* postavljenim na *0* i *Datumom početka važenja* postavljenim na tekući datum.

Prikazaće se sledeći dijalog:

> **Vrsta lista**: predstavlja *Vrstu uputstva* novog *Tehničkog uputstva* (obavezno polje).
>
> **Kupac**: predstavlja *Kupca* novog *Tehničkog uputstva*. Predlaže se kupac iz izvornog *Kontrolnog plana* (samo ako je definisan kao kupac).
>
> **Nova šifra**: predstavlja *Šifru* novog *Tehničkog uputstva* (obavezno polje). Predlaže se na osnovu *Metode šifriranja* povezane sa *Vrste tehničkog uputstva*.
>
> **Rev.**: indeks *Revizije* novog *Tehničkog uputstva* (obavezno polje); postavljen je na *0*.
>
> **Kreiraj održavanje sledljivosti**: označava da li se želi održati veza/sledljivost između novog *Tehničkog uputstva* i izvornog *Kontrolnog plana*, posebno na kartici *Povezana uputstva*.

Nakon toga potrebno je pritisnuti dugme **U redu** ili **Otkaži** kako biste nastavili ili odustali od postupka kreiranja.

Po završetku postupka prikazuje se novo *Tehničko uputstvo*.

### ![](/img/neutral/common/duplicate.png) Dupliraj test

U okviru kartice *Planirani testovi* ovo dugme je omogućeno samo kada je izabran jedan red *Testa*.

Sve informacije izvornog *Planiranog testa* dupliraju se u novi *Planirani test*, koji se dodaje u redosled postojećih *Planiranih testova*.

## Podaci kojima se upravlja

### Podaci zaglavlja

Podaci kojima se upravlja su:

> **Vrsta**: predstavlja *Vrstu kontrolnog plana* (obavezno polje).
>
> Prilikom ručnog unosa novog *Kontrolnog plana* predlaže se *Vrsta kontrolnog plana* definisana u sekciji *Kontrolni planovi* na kartici *Opšte* u okviru *Parametara kontrole artikala*.
>
> **Godina/Broj**: predstavljaju *Godinu* i *Broj* *Kontrolnog plana* (obavezni podaci).
>
> Prilikom kreiranja novog *Kontrolnog plana*, *Godina* i *Broj* predlažu se na osnovu tekućeg datuma i *Numeracije* povezane sa *Vrste kontrolnog plana*.
>
> **Rev.**: predstavlja *Reviziju Kontrolnog plana* (obavezno polje).
>
> Podatak se može menjati samo prilikom kreiranja novog *Kontrolnog plana*; u suprotnom je samo za čitanje. Revizija se automatski povećava korišćenjem dugmeta *Kreiraj novu reviziju*.
>
> **Opis**: opis *Kontrolnog plana*.
>
> **Za kupca/dobavljača**: naziv kompanije *Kupca* ili *Dobavljača*. *Planirani testovi* su prilagođeni za izabranog *Kupca* ili *Dobavljača* i *Povezane artikle*.
>
> **Napomene kupca/dobavljača**: slobodne beleške.
>
> **Specifikacija kupca**:
>
>> **Datum**: datum specifikacije primljene od kupca.
>>
>> **Referenca**: slobodne beleške o referenci specifikacije kupca koja zahteva posebne kontrole nad *Povezanim artiklima*.
>>
>> **Rok važenja**: datum isteka specifikacije kupca.
>>
>> **Napomene**: slobodne beleške vezane za specifikaciju kupca.
>
> **Datum zahteva / Zahtevao**: informativni podaci o datumu i osobi koja je zahtevala kreiranje *Kontrolnog plana*.
>
> **Važenje: Početak/Kraj**: datumi početka i završetka važenja *Kontrolnog plana*.
>
> Ovim datumima sistem automatski upravlja prilikom kreiranja nove *Revizije*.
>
> **Odgovorno lice**: *Zaposleni* odgovoran za *Kontrolni plan*.
>
> Prilikom ručnog unosa novog plana predlaže se odgovorno lice definisano u parametrima sistema.
>
> **Napomene**: slobodne beleške.
>
> **Poreklo kontrolnog plana**:
>
>> **Tehničko uputstvo**: reference izvornog *Tehničkog uputstva* (*Vrsta uputstva*, *Šifra* i *Revizija*).
>>
>> **Kontrolni plan**: reference izvornog *Kontrolnog plana* (*Vrsta plana*, *Godina*, *Broj* i *Revizija*).
>>
>> **Razlog revizije**: kratak opis razloga za kreiranje revizije.
>>
>> Ovaj podatak se može menjati dok je *Kontrolni plan* važeći.

### Atributi kontrolnog plana

Moguće je uneti [Dodatne podatke](/docs/configurations/utility/extra-data/extradata/new-extradata) za svaki *Kontrolni plan*.

Oni se nasleđuju iz *Dodatnih podataka* povezanih sa *Vrste kontrolnog plana*.

### Planirani test

Sadrži *Planirane testove* artikala ili *Atribute artikala* definisane u *Kontrolnom planu*.

Lista sadrži sledeće informacije:

> **Redosled**: redosled izvršavanja *Planiranih testova*.
>
> **Vrsta testa**: šifra *Planiranog testa*.
>
> **Opis vrste testa**: opis *Planiranog testa*. Podatak je samo za čitanje.
>
> **Opis**: opis *Planiranog testa* koji se može uređivati.
>
> **Referenca standardnog kontrolnog plana**: opisno polje koje sadrži reference na međunarodno priznate kodove testova.
>
> **Interni test**: označava da li se *Test* sprovodi interno ili u eksternoj laboratoriji.
>
> **Eksterna laboratorija**: naziv kompanije *Dobavljača* koja vrši test. Polje je samo za čitanje ako je označen *Interni test*.
>
> **Kategorija mernog instrumenta**: kategorija mernog instrumenta koji se koristi za evidentiranje vrednosti testa.
>
> **Merni instrument**: instrument koji se koristi za evidentiranje vrednosti testa.
>
> **Jedinica mere**: jedinica mere za izražavanje nominalne vrednosti i granica testa.
>
> **Vrsta vrednosti**: može biti *Numerička*, *Da/Ne* ili *Tekst*.
>
> **Vrsta ograničenja**: dostupna samo za numeričke vrednosti i određuje način primene granica i tolerancija.
>
> **Nominalna vrednost**: očekivana teorijska vrednost testa.
>
> **Minimalno ograničenje**: minimalna dozvoljena vrednost.
>
> **L.min.(tol-)**: negativna tolerancija minimalne granice.
>
> **L.min.(tol+)**: pozitivna tolerancija minimalne granice.
>
> **Maksimalno ograničenje**: maksimalna dozvoljena vrednost.
>
> **L.max.(tol-)**: negativna tolerancija maksimalne granice.
>
> **L.max.(tol+)**: pozitivna tolerancija maksimalne granice.
>
> **%**: označava da li su granice izražene procentualno.
>
> **Vrsta kontrole testa**: tip kontrole koji se sprovodi nad *Planiranim testom*.
>
> **Učestalost**: slobodne beleške o učestalosti uzorkovanja.
>
> **Broj merenja**: minimalni preporučeni broj merenja.
>
> **Datum početka važenja**: datum početka važenja *Planiranog testa*.
>
> **Datum završetka važenja**: datum završetka važenja *Planiranog testa*.
>
> **Štampa se**: označava da li se informacije prikazuju u izveštaju *Kontrolni plan*.
>
> **Napomene**: slobodne beleške.
>
> **Opis kategorije mernog instrumenta**: informativni opis kategorije instrumenta.
>
> **Opis mernog instrumenta**: informativni opis korišćenog instrumenta.

Za preostale sekcije (*Planirani atributi testa*, *Planirane konfiguracije testa*, *Funkcije evidentiranja i odobravanja*, *Kupci/Dobavljači*, *Povezani artikli*, *Karakteristike artikla*, *Povezana uputstva*, *Povezani kontrolni planovi*, *Istorija revizija* i *Priloženi dokumenti*) zadržava se ista funkcionalna logika kao u izvornom dokumentu.

Za sve funkcionalnosti koje nisu detaljno opisane u ovom dokumentu, a odnose se na uobičajeno funkcionisanje obrazaca, pogledajte:

[Funkcionalnosti, dugmad i polja](/docs/guide/common).