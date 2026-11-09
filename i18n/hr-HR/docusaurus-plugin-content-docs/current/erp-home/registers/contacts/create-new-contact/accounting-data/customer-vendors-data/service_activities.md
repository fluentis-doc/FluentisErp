---
title: Intervencije
sidebar_position: 13
---

Na ovoj se kartici konfiguriraju svi parametri povezani s kupcem koji će se koristiti u intervencijama unutar područja **Upravljanje projektima**.

Dostupne su dvije dodatne kartice:

### Putni troškovi

Ovdje je moguće unijeti sve troškove koji će se u intervencijama predlagati kao **Troškovi za fakturiranje**.

**Vrsta putnih troškova**

**Vrsta troška**: vrsta troška koji se predlaže. Na popisu će se prikazivati samo troškovi koji u svojoj konfiguraciji imaju aktivnu oznaku „Putovanje”.

**Vrsta paušala**: ako je unesena vrsta troška konfigurirana s opcijom „Vrsta putnog troška” = paušal, polje će biti omogućeno za odabir vrste paušala koja će se koristiti.

**Iznos**: iznos troška. Polje je omogućeno za sve vrste troškova osim udaljenosti i sati putovanja.

**Sati putovanja**: broj sati putovanja potrebnih za dolazak do sjedišta kupca odnosno lokacije intervencije. Polje je omogućeno samo ako je vrsta troška ispravno konfigurirana kao „Sati putovanja”.

**Kilometri odlaska/povratka**: broj kilometara putovanja do sjedišta kupca odnosno lokacije intervencije. Polje je omogućeno samo ako je vrsta troška ispravno konfigurirana kao „Udaljenost”.

**Satnica**: trošak po satu koji će se pomnožiti s brojem sati putovanja. Polje je omogućeno samo ako je vrsta troška ispravno konfigurirana kao „Sati putovanja”.

**Trošak po kilometru**: trošak po kilometru koji će se pomnožiti s navedenim brojem kilometara. Polje je omogućeno samo ako je vrsta troška ispravno konfigurirana kao „Udaljenost”.

**Vrsta ugovora resursa i opis**: koriste se kao filtar za odabir troška koji odgovara ugovoru konfiguriranom u šifarniku resursa.

**Mjesto rada**: koristi se kao filtar za odabir troška koji odgovara mjestu rada konfiguriranom u šifarniku resursa.

**Vrsta intervencije**: koristi se kao filtar za odabir troška koji odgovara korištenoj vrsti intervencije.

**Stvarni trošak**: ako je opcija aktivirana, pri izračunu troškova uzimat će se u obzir i podaci koje je prijavio resurs.

:::note[Primjer]
U šifarniku kupca konfiguriramo trošak po kilometru u iznosu od 0,50, bez navođenja broja kilometara odlaska/povratka, i aktiviramo ovu oznaku.

Resurs unosi intervenciju i u ostvarenim troškovima prijavljuje isti trošak, uz navođenje 150 km.

Prilikom promjene statusa intervencije iz **Uneseno** u **Za odobrenje**, troškovi će se ponovno izračunati. Ako je ova oznaka aktivna, sustav će uzeti u obzir broj kilometara koji je prijavio resurs te ih uključiti u troškove za fakturiranje zajedno s vrijednošću troška po kilometru navedenom u šifarniku kupca.

Ista se logika primjenjuje i na ostale vrste troškova.
:::

**Vrste putnih troškova – detalji paušala**

Budući da se paušal sastoji od više troškova koji će na računu biti prikazani kao jedan zbirni redak, u ovom se okviru prikazuju detalji paušala i unose iznosi pojedinačnih stavki.

Paušalni trošak u intervenciji i na računu bit će prikazan kao zbroj svih vrijednosti konfiguriranih u ovom prikazu.

**Vrsta troška**: vrsta troška koja je uključena u paušal.

**Iznos**: iznos troška.

**Jednokratno**: neovisno o broju resursa i/ili dana rada unutar iste intervencije, trošak će se obračunati samo jednom.

**Po danu**: ovisno o broju radnih dana unutar iste intervencije, trošak će se pomnožiti s brojem dana rada.

**Po resursu**: ovisno o broju resursa navedenih u uslugama unutar iste intervencije, trošak će se pomnožiti s brojem resursa.

:::note[Primjer]
Paušal se sastoji od sljedećih stavki:

- Cestarina: 100
- Ručak: 50

Intervencija traje jedan dan i na njoj sudjeluju 3 resursa, pa će biti unesena 3 retka usluge.

Ukupni paušalni trošak za fakturiranje iznosit će 250 (100 za cestarinu, koja se obračunava jednom, i 50 za ručak za svaki resurs).

Izračun će se izvršiti prilikom promjene statusa intervencije iz **Umetnuto** u **Za odobriti**.
:::

### Postavke plana fakturiranja

Pravila koja se primjenjuju na plan fakturiranja intervencije mogu se definirati u općim parametrima modula **Upravljanje projektima**, čime vrijede za sve kupce, ili se mogu definirati zasebno za pojedinog kupca.

Postupak izračuna plana fakturiranja najprije će provjeriti postoje li posebne konfiguracije za kupca. Ako ne postoje, primijenit će se postavke definirane u općim parametrima.

**Mjesto rada** i **Vrsta intervencije**: koriste se kao filtri. Ako nisu popunjeni, smatraju se važećima za sva mjesta rada i sve vrste intervencija. Ako su konfigurirani, primjenjuju se samo kada odgovaraju mjestu rada konfiguriranom u šifarniku resursa koji izvršava intervenciju i korištenoj vrsti intervencije.

**Vrsta vremenskog raspona**: označava radno vrijeme dogovoreno s kupcem i broj radnih sati po danu.

:::note[Napomena]
Moguće je definirati da za jednog kupca dnevni fond radnih sati iznosi 7 sati, a za drugog 8 sati. Broj sati naveden u vremenskom rasponu koristit će se za pretvorbu između različitih vremenskih jedinica:

- Primjerice, ako je kod kupca odrađeno 7 sati, a njegov vremenski raspon iznosi 7 sati, pri pretvorbi u dane količina će iznositi 1.
- Ako je kod kupca odrađeno 7 sati, a njegov vremenski raspon iznosi 8 sati, pri pretvorbi u dane količina će iznositi 0,875.

Vremenski raspon također će se uzimati u obzir pri izračunu prekovremenog rada koji se obračunava po drugačijoj cijeni, kako u slučaju prekoračenja ukupnog fonda sati tako i u slučaju prekoračenja definiranog radnog vremena.
:::

**Vrsta noćnog vremenskog raspona**: funkcionira na isti način kao polje „Vrsta vremenskog raspona”, ali se koristi u slučaju izvršavanja dnevnih i noćnih usluga kako bi se omogućio različit obračun cijena.

**Vrsta zaokruživanja**: određuje matematičko pravilo prema kojem se zaokružuju radni sati. Zaokruživanje se zatim primjenjuje na ukupan broj sati intervencije. Primjerice, ako je ukupno vrijeme 7,45 sati, a predviđeno je zaokruživanje na pola sata, fakturirat će se 8 sati.

**Komercijalna kategorija**: dodatni filtar za odabir pravila plana fakturiranja. Ako nije popunjena, pravilo će vrijediti za sve komercijalne kategorije kupaca. Ako je navedena, odabrat će se odgovarajuća kategorija unesena u šifarniku kupca na kartici **Administracija**.

**Uključi sate putovanja u usluge**: omogućuje uključivanje sati putovanja iz intervencije, navedenih na kartici **Troškovi za fakturiranje**, kao da je riječ o satima izvršene usluge. Posljedično će se sva pravila fakturiranja (vremenski raspon, zaokruživanje itd.) primjenjivati i na sate putovanja, kao da su sati izvršene usluge.

**Isključi zaokruživanje**: ako je opcija aktivirana, u planu fakturiranja neće se primjenjivati zaokruživanje.

**Isključi izračun prekovremenog rada**: ako je opcija aktivirana, u planu fakturiranja neće se izračunavati prekovremeni rad. Za pretvorbu između različitih vremenskih jedinica (npr. iz sati u dane) koristit će se broj radnih sati naveden u polju **Radna smjena** u općim parametrima modula Upravljanje projektima.

**Uzmi u obzir sve vremenske raspone pri izračunu prekovremenog rada**: ako je opcija aktivirana, pri izračunu prekovremenog rada uzimat će se u obzir i dnevni i noćni vremenski raspon. Prekovremenim radom smatrat će se samo vrijeme izvan oba raspona ili vrijeme koje premašuje dnevni fond sati.

Ako opcija nije aktivirana, uzimat će se u obzir samo jedan vremenski raspon (noćni ili dnevni, ovisno o vremenu početka usluge), a sve vrijeme izvan tog raspona obračunavat će se kao prekovremeni rad.

:::note[Primjer]
Dnevni vremenski raspon: 7:00 – 18:00

Noćni vremenski raspon: 20:00 – 5:00

Vrijeme izvršavanja usluge: 3:00 – 8:00

**Ako je oznaka aktivirana**, plan fakturiranja izgledat će ovako:

- Redak usluge 3:00 – 5:00, s noćnom tarifom.
- Redak usluge 5:00 – 7:00, s tarifom za prekovremeni rad.
- Redak usluge 7:00 – 8:00, s dnevnom tarifom.

(Pri izračunu se uzimaju u obzir oba vremenska raspona, a prekovremenim radom smatra se samo vrijeme koje ne pripada nijednom od njih.)

**Ako oznaka nije aktivirana**, plan fakturiranja izgledat će ovako:

- Redak usluge 3:00 – 5:00, s noćnom tarifom.
- Redak usluge 5:00 – 8:00, s tarifom za prekovremeni rad.

(Pri izračunu se uzima u obzir samo noćni vremenski raspon jer je on mjerodavan za uslugu koja je započela unutar tog raspona.)
:::