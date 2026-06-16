---
title: Kontni plan
sidebar_position: 3
---

Tablica [**Kontni plan**](/docs/erp-home/registers/accounting/analytic-chart-of-accounts) sadrži niz važnih značajki povezanih s kontrolingom, kako u kontekstu međugodišnjih simulacija financijskih izvještaja tako i upravljačkog odnosno analitičkog računovodstva. U nastavku su opisane najvažnije funkcionalnosti.

## PREGLED PODKONTA

- **TIP KONTA**: poveznica s tipom konta od ključne je važnosti. Posebno je važan tip konta s aktiviranom opcijom **Usluga** (u **FastStart** konfiguraciji to su *Troškovi za razgraničenje* i *Prihodi za razgraničenje*), jer omogućuje automatsko upravljanje obračunanim i odgođenim troškovima/prihodima, kako u glavnoj knjizi (postupak **Knjiženja usklađenja**) tako i u međugodišnjim izvještajima kroz **Knjiženja korekcije** i **Knjiženja usklađenja**.

- **UPRAVLJANJE ORGANIZACIJSKIM CENTRIMA**: konta automatski koriste analitičko računovodstvo (ako to omogućuje i knjigovodstvena temeljnica), dok se ovom opcijom analitika može aktivirati i za bilančna konta.

- **VARIJABILNOST**: kada društvo koristi kontroling, upravljačko računovodstvo razlikuje fiksni i varijabilni dio troškova. Ovdje je moguće definirati zadani postotak varijabilnosti koji se koristi ako nije definirana tablica **Varijabilnost centara troškova**.

:::tip Napomena
Ako polje nije popunjeno, smatra se da je podkonto 100 % fiksni trošak.
:::

- **NE KORISTI U KONTROLINGU**: kada je kontroling aktivan, ovom opcijom određuje se da se računovodstveni podaci tog podkonta ne koriste u analizama kontrolinga jer ih zamjenjuju planski ili izvanknjižni podaci (primjerice naknade nadzornog odbora ili amortizacija).

- **VRIJEME USKLAĐENJA**: aktivira se nakon uključivanja prethodne opcije te određuje kada će se izvršiti usklađenje između upravljačkih i računovodstvenih podataka:
  - Godišnje
  - Međugodišnje

- **VRSTA USKLAĐENJA**: također se aktivira nakon uključivanja prethodne opcije te određuje način usklađenja:
  - **Preraspodijeli upravljačke podatke** – automatski generira korektivne retke kako bi kontroling odgovarao računovodstvenim podacima.
  - **Razlike analitike** – briše kontroling podatke i zamjenjuje ih stvarnim vrijednostima i centrima korištenima u računovodstvu.

:::tip Napomena
Prva opcija koristi se kada se kontroling razlikuje samo po iznosu u odnosu na računovodstvo.

Druga opcija koristi se kada se tijekom stvarnog knjiženja razlikuju i iznos i centar troška u odnosu na planirane podatke.
:::

- **POSTOTAK PROMJENE**: kada je kontroling aktivan, definira pravilo automatske promjene vrijednosti prilikom dupliciranja upravljačkih knjiženja iz funkcionalnosti **Povijest upravljačkih knjiženja**.

- **RASPODJELA RAZDOBLJA**: definira način raspodjele vrijednosti ovog podkonta po razdobljima upravljačkog računovodstva tijekom obrade razdoblja. Ako nije definirano, **Fluentis ERP** koristi kalendarske dane obračunskog razdoblja.

- **GRUPE USKLAĐENJA**: kada je kontroling aktivan, ovo polje ima ključnu ulogu za konta početnih i završnih zaliha te služi za grupiranje homogenih podataka u funkciji **Kontrolne vrijednosti**.

## PREGLED DODJELE CENTARA

Za svaki odabrani podkonto, na kartici **Dodjela centara** s desne strane moguće je unaprijed definirati popis centara koji će se automatski predlagati prilikom knjiženja na taj podkonto ili prilikom obračuna prihoda i rashoda kroz prodajne i nabavne dokumente, ovisno o prioritetima pojedinog modula.

Dostupna polja:

- **BROJ**: redni broj retka.

- [**CENTAR TROŠKA**](/docs/controlling/controlling-parametrization/controlling-specific-settings/cost-centers): povezuje organizacijski centar s podkontom. Polje je obvezno u društvima koja ne koriste controlling, dok je opcionalno kada je controlling aktivan. U tom slučaju moguće je definirati samo dimenziju i zadanu kategoriju centra.

- **POSTOTAK (%)**: postotak raspodjele, obvezno polje u rasponu od 0 do 100.

- **DIVIZIJA**: zadana divizija koja će se koristiti za analitička knjiženja.

:::tip Napomena
U slučajevima s više poduzeća moguće je definirati dvije logike rada:

- dopušteno korištenje samo centara povezanih s odabranom divizijom ili
- dopušteno korištenje svih centara bez obzira na diviziju kojoj pripadaju.
:::

- **DATUM POČETKA VALJANOSTI** i **DATUM ZAVRŠETKA VALJANOSTI**: ovaj raspon datuma trenutno se **ne provjerava** tijekom obrade podataka.

- [**DIMENZIJA**](/docs/controlling/controlling-parametrization/controlling-specific-settings/dimension): polje je namijenjeno društvima s aktivnim *kontrolingOM*. Automatski se popunjava prema odabranom centru troška, ali se može unijeti i ručno kada centar nije definiran u retku. Koristi se u slučajevima kada određena dimenzija zahtijeva obvezno usklađenje (primjerice *upravljačka dimenzija* centara troška), čime se korisnika prisiljava na pravilno usklađivanje s glavnim knjiženjem.

- **KATEGORIJA CENTARA TROŠKA**: polje je specifično za društva s aktivnim *kontrolingOM*. Popunjava se prema odabranom centru troška, ali se može definirati i ručno kada centar nije naveden u retku. Služi za ograničavanje popisa centara koji će biti dostupni za odabir prilikom knjiženja na ovom podkontu.

:::tip Napomena
Ako se odluči da korisnik prilikom knjiženja ručno određuje raspodjelu po centrima troška, u kontnom planu moguće je koristiti nekoliko pristupa:

- definirati više centara s postotkom **0 %**: korisnik će tijekom knjiženja vidjeti sve retke te ručno upisati odgovarajuće vrijednosti. Prilikom spremanja **Fluentis ERP** automatski briše retke koji su ostali s iznosom 0. Ako dimenzije centara i knjigovodstvena temeljnica ne dopuštaju neuravnotežena knjiženja, neće biti moguće stvoriti neuravnotežene zapise.

- definirati više centara s postotkom **100 %**: korisnik će pronaći unaprijed popunjene retke te može obrisati one koji nisu potrebni ili izmijeniti njihove vrijednosti prije spremanja. Ako dimenzije centara i knjigovodstvena temeljnica ne dopuštaju neuravnotežena knjiženja, neće biti moguće stvoriti neuravnotežene zapise.

- za korisnike koji koriste upravljačko računovodstvo (*kontroling*), moguće je definirati redak bez konkretnog centra troška, ali samo s dimenzijom centra i, po potrebi, kategorijom centra. Tijekom knjiženja korisnik će vidjeti prazan centar troška, a padajući izbornik prikazivat će samo centre koji pripadaju zadanoj dimenziji (i kategoriji, ako je definirana).
:::

## PREGLED DODJELE VARIJABILNOSTI

Ovaj odjeljak namijenjen je isključivo društvima s aktivnim *kontrolingOM* te omogućuje definiranje različite razine varijabilnosti za isti podkonto ovisno o centru troška koji ga koristi.

Naime, određeni troškovi mogu imati različit karakter ovisno o organizacijskoj funkciji kojoj su dodijeljeni. Postavke definirane u ovoj mreži imaju prioritet nad općim poljem **Varijabilnost** definiranim na podkontu.

:::tip Napomena
Primjerice, trošak električne energije može biti:

- **100 % varijabilan** kada je povezan s proizvodnjom, jer bez proizvodnje nema ni potrošnje energije,
- **0 % varijabilan (potpuno fiksan)** kada je povezan s administracijom, koja troši energiju neovisno o obujmu proizvodnje.
:::