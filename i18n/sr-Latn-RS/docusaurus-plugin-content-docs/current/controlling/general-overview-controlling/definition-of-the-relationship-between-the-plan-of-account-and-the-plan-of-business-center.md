---
title: Definicija odnosa između kontnog plana i plana poslovnih centara
sidebar_position: 2.2
---

Nakon što se izradio plan [***poslovnih centara***](/docs/controlling/controlling-parametrization/controlling-specific-settings/cost-centers) sljedeći korak je uzeti kontni plan i povezati ga s [***planom centara***](/docs/erp-home/registers/accounting/analytic-chart-of-accounts). . U ovoj fazi potrebno je definirati, konto po konto, logiku pripisivanja pojedinih stavki različitim
centrima. Na primjer, trošak grijanja često se raspoređuje prema kvadratnim metrima koje zauzimaju centri, dok se električna energija može rasporediti prema teorijskom stupnju korištenja svakog centra. Drugi primjer je održavanje koje se raspoređuje prema
računima koje računovodstvo izravno zaprima. Ako se želi objektivno pripisivanje troškova održavanja, čim se zaprimi račun, može se ispravno povezati s odgovarajućim centrom. Potrebno je precizno definirati odnose između računovodstvenih stavki i poslovnih
centara kako bi se omogućilo analitičko računovodstvo koje nadopunjuje opće računovodstvo bez prekomjernog administrativnog opterećenja.

:::tip NAPOMENA
Za korisnike koji koriste upravljanje kontrolingom u okviru upravljačkog računovodstva, umjesto unaprijed definire raspodjele na temelju postotaka u planu računa, preporučuje se povezivanje virtualnog centra sa 100% troška, a zatim definiranje specifičnih *cost drivera* za prijenos troškova, čak i ako se koriste iste postotne logike. U upravljačkom računovodstvu analitički podaci
iz općeg računovodstva uvijek se brišu i ponovno generiraju za obrađivani period. Stoga je praktičnije primijeniti pravilo cost drivera kasnije, što omogućuje fleksibilnost u promjeni kriterija bez potrebe za ručnim izmjenama već pohranjenih analitičkih unosa.

:::

:::tip NAPOMENA
U slučaju ručnog dodjeljivanja vrijednosti u računovodstvu, u planu računa može se odabrati:
- unos više centara s postotkom 0: korisnik će u unosu pronaći te retke i moći će ručno unijeti iznos za odgovarajući centar, dok će ***FluentisERP*** prilikom spremanja automatski izbrisati retke s nulom. Ako dimenzije centara i vrsta knjiženja ne dopuštaju neuravnotežene unose, neće biti neslaganja.
- unos više centara s postotkom 100: korisnik će vidjeti sve retke s unaprijed unesenim vrijednostima i moći će izbrisati one koji nisu relevantni ili prilagoditi iznose prije spremanja. Ako dimenzije centara i vrsta knjiženja ne dopuštaju neuravnotežene unose, neće biti neslaganja.
- Za korisnike kontrolinga upravljačkog računovodstva, moguće je unijeti postavku bez određenog centra, ali s definiranom
dimenzijom centara i opcionalno kategorijom centara koja se želi koristiti za taj konto. Korisnik će u unosu vidjeti prazan centar i moći će iz padajućeg izbornika odabrati samo centre koji pripadaju odgovarajućoj dimenziji (i kategoriji, ako je postavljena).
:::

Povezivanje s kontnim planom samo je jedna od mogućnosti za povezivanje centara: ovisno o situaciji, dimenzijama koje treba valorizirati i primijenjenim logikama, može biti korisno povezati poslovne centre s drugim evidencijama u FluentisERP sustavu. Poslovne centre može povezati s:
- evidencijama artikala
- evidencijama kupaca/dobavljača/agenta
- zaposlenicima i kategorijama aktivnosti osoblja u modulu Projekti
- evidencijama skladišta
- evidencijama dugotrajne imovine

:::tip NAPOMENA
Svaki modul poslovanja u svojim parametrima konfiguracije omogućuje definiranje logičkog redoslijeda pretraživanja centara za vrednovanje pojedinih stavki artikala u dokumentima, kao i pravila ponašanja u različitim procesima prijenosa podataka
između modula (npr. kako se obrađuje isporuka narudžbe ili generiranje faktura iz otpremnica). I ove postavke potrebno je pažljivo razmotriti kako bi se ispravno odredila točka valorizacije podataka u dokumentacijskom ciklusu.

:::

Još jedna važna postavka na razini kontnog plana je određivanje hoće li se računovodstveni podaci koristiti u kontrolingu. Neki primjeri mogu pojasniti potrebu za postavljanjem opcije „Ne koristiti u kontrolingu“ zajedno s eventualnim korektivnim kriterijima.
U kontnom planu mogu postojati troškovi s odgođenim knjiženjem, kao što su naknade nadzornog odbora, koje se u kontrolingu procjenjuju na početku godine, ali se konačno usklađuju na kraju godine kada su računovodstveni podaci dostupni. Također, tvrtka može odlučiti koristiti računovodstvenu amortizaciju za upravljačko računovodstvo umjesto primjene tehničke amortizacije izvan računovodstvenih evidencija.
Slično tome, kod troškova za zaposlenike, računovodstvo ne bilježi redovito rezerve koje se iskazuju samo u određenim razdobljima godine (npr. u mjesecima isplate božićnica ili dodatnih mjesečnih plaća).