---
title: Novi zahtev za intervenciju
sidebar_position: 2
---

U ovoj formi mogu se uneti podaci o **Zahtevu za intervenciju**:

**Vrsta intervencije**: sadrži [tip zahteva](/docs/configurations/tables/project-management/request-intervention-type/);

**Broj/Datum**: sadrži broj i datum zahteva;

**Kupac**: sadrži klijenta kojem je zahtev namenjen;

**Kontakt**: sadrži eventualni *Kontakt* kojem je zahtev namenjen, a koji možda još nije klijent;

**Kategorija aktivnosti**: označava eventualnu povezanu kategoriju aktivnosti sa zahtevom;

**Glavna imovina**: moguće je povezati postrojenje sa zahtevom;

**Artikal**: moguće je stavku povezati sa artiklom;

**Projekat**: sadrži povezani [Projekat](/docs/project-management/projects/search-projects-intro/);

**Tiket (zahtev za podrškom)**: sadrži tiket zahteva za intervenciju, sa pripadajućim stepenom ozbiljnosti;

**SLA**: sadrži nivo Ugovora o nivou usluge, potreban za proučavanje prioriteta;

**Status zahteva za intervenciju**: označava trenutni status zahteva, između Otvoreno, Planirano, Izdato ili Zatvoreno;

**Potvrdi datum**: sadrži datum kada je zahtev potvrđen;

**Datum zatvaranja**: sadrži eventualni datum zatvaranja zahteva.

Na ovom obrascu dostupne su i posebne kartice.

**Kartica Resursi**

Ova tabela sadrži resurse za koje se izvršava zahtev za intervenciju. Takođe su prisutne neke oznake koje označavaju obavezno ili neobavezno prisustvo Tehničara i Datuma, kao i oznaka koja pokazuje da li je Aktivnost naplativa. Ostali podaci su:

**Resurs**: sadrži resurs kodiran u Upravljanje projektima > Upravljanje resursima;

**Zaposleni**: sadrži konto Zaposlenog, obično podudaran sa resursom;

**Od traženog datuma**: sadrži datum i vreme početka aktivnosti;

**Vreme početka pauze**: sadrži datum i vreme početka pauze;

**Vreme završetka pauze**: sadrži datum i vreme završetka pauze;

**Do traženog datuma**: sadrži datum i vreme završetka aktivnosti;

**Efektivno vreme**: sadrži stvarno vreme trajanja, obračunato iz prethodnih podataka;

**Opis**: sadrži slobodan opis zahteva.

Moguće je povezati dodatne resurse u povezanoj tabeli **Povezani resursi**.

**Kartica Rešenja**

Na ovoj kartici moguće je slobodno opisati zahtev za intervenciju u poljima **Predlog rešenja** i **Beleška**.

**Kartica Procene**

U ovoj tabeli nalazi se procena povezana sa povezanim Projektom zahteva za intervenciju. Ako ne postoji povezanost, ova polja i dalje možete slobodno menjati:

**Jedinica mere**: označava jedinicu mere koja se uzima u obzir za kvantifikaciju;

**Prodajni cenovnik**: sadrži eventualni [Cenovnik](/docs/sales/sales-price-list/sales-price-list/insert-sales-price-list/) koji treba uzeti u obzir;

**Količina**: označava potrebnu količinu jedinica;

**Neto jedinična cena**: označava neto jediničnu cenu;

**Ukupan iznos**: označava ukupan iznos.

Prilikom izbora projekta automatski se predlažu sledeće vrednosti:

- Prodajni cenovnik
- Tiket
- Opis
- Kategorija aktivnosti
- Naplativo
- Aktivnost sa dodatom vrednošću
- Artikal (ako već nije unet)
- Jedinica mere (ako već nije uneta)
- Jedinična neto cena

Jedinična neto cena ažurira se vrednošću definisanom na projektu ako je artikal već prisutan na zahtevu za intervenciju i podudara se sa artiklom definisanim na projektu.

Ako artikal nije prisutan na zahtevu za intervenciju i preuzme se sa projekta, jedinična neto cena takođe će se ažurirati vrednošću definisanom na projektu.