---
title: Kontni plan
sidebar_position: 3
---

Tabela [**Kontni plan**](/docs/erp-home/registers/accounting/analytic-chart-of-accounts) sadrži niz važnih funkcionalnosti povezanih sa controllingom, kako u kontekstu međugodišnjih simulacija finansijskih izvještaja tako i upravljačkog odnosno analitičkog računovodstva. U nastavku su opisane najvažnije funkcionalnosti.

## PREGLED PODKONTA

- **TIP KONTA**: povezanost sa tipom konta od ključne je važnosti. Posebno je važan tip konta sa aktiviranom opcijom **Usluga** (u **Fast Start** konfiguraciji to su *Troškovi za razgraničenje* i *Prihodi za razgraničenje*), jer omogućava automatsko upravljanje obračunatim i odgođenim troškovima/prihodima, kako u glavnoj knjizi (procedura **Knjiženja usklađenja**) tako i u međugodišnjim izvještajima kroz **Knjiženja korekcije** i **Knjiženja usklađenja**.

- **UPRAVLJANJE ORGANIZACIONIM CENTRIMA**: konta automatski koriste analitičko računovodstvo (ako to omogućava i knjigovodstvena temeljnica), dok se ovom opcijom analitika može aktivirati i za bilančna konta.

- **VARIJABILNOST**: kada preduzeće koristi controlling, upravljačko računovodstvo razlikuje fiksni i varijabilni dio troškova. Ovdje je moguće definisati podrazumijevani procenat varijabilnosti koji se koristi ako nije definisana tabela **Varijabilnost centara troškova**.

:::tip Napomena
Ako polje nije popunjeno, smatra se da je podkonto 100% fiksni trošak.
:::

- **NE KORISTI U CONTROLLINGU**: kada je controlling aktivan, ovom opcijom određuje se da se računovodstveni podaci tog podkonta ne koriste u analizama controllinga jer ih zamjenjuju planski ili vanbilansni podaci (na primjer naknade nadzornog odbora ili amortizacija).

- **VRIJEME USKLAĐENJA**: aktivira se nakon uključivanja prethodne opcije te određuje kada će se izvršiti usklađenje između upravljačkih i računovodstvenih podataka:
  - Godišnje
  - Međugodišnje

- **VRSTA USKLAĐENJA**: takođe se aktivira nakon uključivanja prethodne opcije te određuje način usklađenja:
  - **Preraspodijeli upravljačke podatke** – automatski generiše korektivne redove kako bi controlling odgovarao računovodstvenim podacima.
  - **Razlike analitike** – briše controlling podatke i zamjenjuje ih stvarnim vrijednostima i centrima korištenim u računovodstvu.

:::tip Napomena
Prva opcija koristi se kada se controlling razlikuje samo po iznosu u odnosu na računovodstvo.

Druga opcija koristi se kada se tokom stvarnog knjiženja razlikuju i iznos i centar troška u odnosu na planske podatke.
:::

- **PROCENAT PROMJENE**: kada je controlling aktivan, definiše pravilo automatske promjene vrijednosti prilikom dupliciranja upravljačkih knjiženja iz funkcionalnosti **Povijest upravljačkih knjiženja**.

- **RASPODJELA PERIODA**: definiše način raspodjele vrijednosti ovog podkonta po periodima upravljačkog računovodstva tokom obrade perioda. Ako nije definisano, **Fluentis ERP** koristi kalendarske dane obračunskog perioda.

- **GRUPE USKLAĐENJA**: kada je controlling aktivan, ovo polje ima ključnu ulogu za konta početnih i završnih zaliha te služi za grupisanje homogenih podataka u funkciji **Kontrolne vrijednosti**.

# PREGLED DODJELE CENTARA

Za svaki odabrani podkonto, na kartici **Dodjela centara** sa desne strane moguće je unaprijed definisati listu centara koji će se automatski predlagati prilikom knjiženja na taj podkonto ili prilikom obračuna prihoda i rashoda kroz prodajne i nabavne dokumente, u zavisnosti od prioriteta pojedinog modula.

Dostupna polja:

- **BROJ**: redni broj reda.

- [**CENTAR TROŠKA**](/docs/controlling/controlling-parametrization/controlling-specific-settings/cost-centers): povezuje organizacioni centar sa podkontom. Polje je obavezno u društvima koja ne koriste controlling, dok je opciono kada je controlling aktivan. U tom slučaju moguće je definisati samo dimenziju i podrazumijevanu kategoriju centra.

- **PROCENAT (%)**: procenat raspodjele, obavezno polje u rasponu od 0 do 100.

- **DIVIZIJA**: podrazumijevana divizija koja će se koristiti za analitička knjiženja.

:::tip Napomena
U slučajevima sa više preduzeća moguće je definisati dvije logike rada:

- dozvoljeno korištenje samo centara povezanih sa odabranom divizijom ili
- dozvoljeno korištenje svih centara bez obzira na diviziju kojoj pripadaju.
:::

- **DATUM POČETKA VAŽENJA** i **DATUM ZAVRŠETKA VAŽENJA**: ovaj raspon datuma trenutno se **ne provjerava** tokom obrade podataka.

- [**DIMENZIJA**](/docs/controlling/controlling-parametrization/controlling-specific-settings/dimension): polje je namijenjeno društvima sa aktivnim *controllingom*. Automatski se popunjava prema odabranom centru troška, ali se može unijeti i ručno kada centar nije definisan u redu. Koristi se u slučajevima kada određena dimenzija zahtijeva obavezno usklađenje (na primjer *upravljačka dimenzija* centara troškova), čime se korisnik prisiljava na pravilno usklađivanje sa glavnim knjiženjem.

- **KATEGORIJA CENTARA TROŠKOVA**: polje je specifično za društva sa aktivnim *controllingom*. Popunjava se prema odabranom centru troška, ali se može definisati i ručno kada centar nije naveden u redu. Služi za ograničavanje liste centara koji će biti dostupni za odabir prilikom knjiženja na ovom podkontu.

:::tip Napomena
Ako se odluči da korisnik prilikom knjiženja ručno određuje raspodjelu po centrima troškova, u kontnom planu moguće je koristiti nekoliko pristupa:

- definisati više centara sa procentom **0 %**: korisnik će tokom knjiženja vidjeti sve redove te ručno upisati odgovarajuće vrijednosti. Prilikom spremanja **Fluentis ERP** automatski briše redove koji su ostali sa iznosom 0. Ako dimenzije centara i knjigovodstvena temeljnica ne dozvoljavaju neuravnotežena knjiženja, neće biti moguće kreirati neuravnotežene zapise.

- definisati više centara sa procentom **100 %**: korisnik će pronaći unaprijed popunjene redove te može obrisati one koji nisu potrebni ili izmijeniti njihove vrijednosti prije spremanja. Ako dimenzije centara i knjigovodstvena temeljnica ne dozvoljavaju neuravnotežena knjiženja, neće biti moguće kreirati neuravnotežene zapise.

- za korisnike koji koriste upravljačko računovodstvo (*controlling*), moguće je definisati red bez konkretnog centra troška, već samo sa dimenzijom centra i, po potrebi, kategorijom centra. Tokom knjiženja korisnik će vidjeti prazan centar troška, a padajući meni prikazivaće samo centre koji pripadaju zadanoj dimenziji (i kategoriji, ako je definisana).
:::

## PREGLED DODJELE VARIJABILNOSTI

Ovaj odjeljak namijenjen je isključivo društvima sa aktivnim *controllingom* te omogućava definisanje različitog nivoa varijabilnosti za isti podkonto u zavisnosti od centra troška koji ga koristi.

Naime, određeni troškovi mogu imati različit karakter u zavisnosti od organizacione funkcije kojoj su dodijeljeni. Postavke definisane u ovoj mreži imaju prioritet nad opštim poljem **Varijabilnost** definisanim na podkontu.

:::tip Napomena
Na primjer, trošak električne energije može biti:

- **100 % varijabilan** kada je povezan sa proizvodnjom, jer bez proizvodnje nema ni potrošnje energije,
- **0 % varijabilan (potpuno fiksan)** kada je povezan sa administracijom, koja troši energiju nezavisno od obima proizvodnje.
:::