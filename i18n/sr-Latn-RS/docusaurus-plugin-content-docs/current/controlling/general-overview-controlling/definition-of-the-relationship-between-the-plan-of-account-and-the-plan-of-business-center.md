---
title: Definisanje odnosa između kontnog plana i plana poslovnih centara
sidebar_position: 2.2
---

Nakon što je definisan plan [***poslovnih centara***](/docs/controlling/controlling-parametrization/controlling-specific-settings/cost-centers), sledeći korak je povezivanje kontnog plana sa [***planom centara***](/docs/erp-home/registers/accounting/analytic-chart-of-accounts). U ovoj fazi potrebno je definisati, konto po konto, logiku raspodele pojedinačnih troškova i prihoda na različite centre.

Na primer, trošak grejanja se često raspoređuje prema kvadratnim metrima koje zauzimaju pojedini centri, dok se električna energija može raspodeljivati prema teorijskom stepenu iskorišćenosti svakog centra. Drugi primer su troškovi održavanja, koji se mogu raspodeliti na osnovu računa koje računovodstvo direktno prima.

Ukoliko se želi objektivna raspodela troškova održavanja, račun se odmah po prijemu može povezati sa odgovarajućim centrom. Zbog toga je važno precizno definisati odnose između računovodstvenih stavki i poslovnih centara kako bi se omogućilo analitičko računovodstvo koje dopunjuje glavno računovodstvo bez stvaranja dodatnog administrativnog opterećenja.

:::tip NAPOMENA
Za korisnike koji koriste kontroling u okviru upravljačkog računovodstva, umesto unapred definisane raspodele procentima u kontnom planu, preporučuje se povezivanje virtuelnog centra sa 100% troška, a zatim definisanje odgovarajućih *cost driver-a* za prenos troškova, čak i kada se koriste iste procentualne logike.

U upravljačkom računovodstvu analitički podaci preuzeti iz glavne knjige uvek se brišu i ponovo generišu za obrađivani period. Zbog toga je praktičnije pravila raspodele primenjivati naknadno putem nosilaca troškova, što omogućava promenu kriterijuma bez potrebe za ručnim izmenama već sačuvanih analitičkih zapisa.
:::

:::tip NAPOMENA
U slučaju ručne raspodele vrednosti u računovodstvu, u kontnom planu moguće je koristiti sledeće pristupe:

- definisati više centara sa procentom **0%**: korisnik će tokom unosa videti te redove i moći ručno da unese iznose za odgovarajuće centre, dok će ***FluentisERP*** prilikom snimanja automatski obrisati redove sa nulom. Ako dimenzije centara i vrsta knjiženja ne dozvoljavaju neuravnotežene unose, neće biti neslaganja.

- definisati više centara sa procentom **100%**: korisnik će videti unapred popunjene redove i moći da obriše one koji nisu relevantni ili da prilagodi iznose pre snimanja. Ako dimenzije centara i vrsta knjiženja ne dozvoljavaju neuravnotežene unose, neće biti neslaganja.

- za korisnike upravljačkog kontrolinga moguće je definisati zapis bez konkretnog centra, ali sa određenom dimenzijom centra i, po potrebi, kategorijom centara. Tokom unosa korisnik će videti prazno polje centra, a padajuća lista će prikazivati samo centre koji pripadaju definisanoj dimenziji (i kategoriji, ukoliko je postavljena).
:::

Povezivanje sa kontnim planom predstavlja samo jednu od mogućnosti za dodelu poslovnih centara. U zavisnosti od situacije, dimenzija koje treba valorizovati i logike koja se koristi, poslovni centri mogu biti povezani i sa drugim evidencijama u sistemu FluentisERP:

- šifarnikom artikala
- šifarnikom kupaca, dobavljača i agenata
- zaposlenima i kategorijama aktivnosti u modulu Projekti
- šifarnikom skladišta
- šifarnikom osnovnih sredstava

:::tip NAPOMENA
Svaki poslovni modul u svojim parametrima omogućava definisanje prioriteta pretrage centara za valorizaciju pojedinačnih stavki artikala u dokumentima, kao i pravila ponašanja tokom prenosa podataka između modula (na primer, kod kreiranja otpremnice iz porudžbine ili fakture iz otpremnice).

I ova podešavanja treba pažljivo analizirati kako bi se pravilno odredila tačka valorizacije podataka unutar poslovnog procesa.
:::

Još jedno važno podešavanje na nivou kontnog plana jeste određivanje da li će se računovodstveni podaci koristiti u kontrolingu.

Potreba za opcijom **„Ne koristiti u kontrolingu“** može se objasniti na nekoliko primera. U kontnom planu mogu postojati troškovi koji se knjiže sa odloženim efektom, kao što su naknade članovima nadzornog odbora. Takvi troškovi se u kontrolingu procenjuju na početku godine, a konačno usklađivanje vrši se tek kada računovodstveni podaci postanu dostupni.

Slično tome, preduzeće može odlučiti da u upravljačkom računovodstvu koristi tehničku amortizaciju obračunatu van računovodstvenih evidencija umesto računovodstvene amortizacije.

Kod troškova zaposlenih postoji slična situacija: računovodstvo često ne evidentira rezervisanja kontinuirano tokom godine, već samo u određenim periodima, na primer u mesecima isplate božićnica, regresa ili drugih dodatnih primanja.