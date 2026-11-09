---
title: Intervencije
sidebar_position: 13
---

Na ovoj kartici konfigurišu se svi parametri povezani sa kupcem koji će se koristiti u intervencijama unutar oblasti **Upravljanje projektima**.

Dostupne su dve dodatne kartice:

### Putni troškovi

Ovde je moguće uneti sve troškove koji će se u intervencijama predlagati kao **Troškovi za fakturisanje**.

**Tip putnih troškova**

**Tip troška**: tip troška koji se predlaže. Na listi će se prikazivati samo troškovi koji u svojoj konfiguraciji imaju aktivnu oznaku „Putovanje”.

**Tip paušala**: ako je uneti tip troška konfigurisan sa opcijom „Tip putnog troška” = paušal, polje će biti omogućeno za izbor tipa paušala koji će se koristiti.

**Iznos**: iznos troška. Polje je omogućeno za sve tipove troškova osim udaljenosti i sati putovanja.

**Sati putovanja**: broj sati putovanja potrebnih za dolazak do sedišta kupca, odnosno lokacije intervencije. Polje je omogućeno samo ako je tip troška ispravno konfigurisan kao „Sati putovanja”.

**Kilometri odlaska/povratka**: broj kilometara putovanja do sedišta kupca, odnosno lokacije intervencije. Polje je omogućeno samo ako je tip troška ispravno konfigurisan kao „Udaljenost”.

**Satnica**: trošak po satu koji će se pomnožiti sa brojem sati putovanja. Polje je omogućeno samo ako je tip troška ispravno konfigurisan kao „Sati putovanja”.

**Trošak po kilometru**: trošak po kilometru koji će se pomnožiti sa navedenim brojem kilometara. Polje je omogućeno samo ako je tip troška ispravno konfigurisan kao „Udaljenost”.

**Tip ugovora resursa i opis**: koriste se kao filter za izbor troška koji odgovara ugovoru konfigurisanom u šifarniku resursa.

**Mesto rada**: koristi se kao filter za izbor troška koji odgovara mestu rada konfigurisanom u šifarniku resursa.

**Tip intervencije**: koristi se kao filter za izbor troška koji odgovara korišćenom tipu intervencije.

**Stvarni trošak**: ako je opcija aktivirana, pri izračunavanju troškova u obzir će se uzimati i podaci koje je prijavio resurs.

:::note[Primer]
U šifarniku kupca konfigurišemo trošak po kilometru u iznosu od 0,50, bez navođenja broja kilometara odlaska/povratka, i aktiviramo ovu oznaku.

Resurs unosi intervenciju i u ostvarenim troškovima prijavljuje isti trošak, uz navođenje 150 km.

Prilikom promene statusa intervencije iz **Uneto** u **Za odobrenje**, troškovi će se ponovo izračunati. Ako je ova oznaka aktivna, sistem će uzeti u obzir broj kilometara koji je prijavio resurs i uključiti ih u troškove za fakturisanje, zajedno sa vrednošću troška po kilometru navedenom u šifarniku kupca.

Ista logika primenjuje se i na ostale tipove troškova.
:::

**Tipovi putnih troškova – detalji paušala**

Budući da se paušal sastoji od više troškova koji će na fakturi biti prikazani kao jedan zbirni red, u ovom okviru prikazuju se detalji paušala i unose iznosi pojedinačnih stavki.

Paušalni trošak u intervenciji i na fakturi biće prikazan kao zbir svih vrednosti konfigurisanih u ovom prikazu.

**Tip troška**: tip troška koji je uključen u paušal.

**Iznos**: iznos troška.

**Jednokratno**: nezavisno od broja resursa i/ili dana rada unutar iste intervencije, trošak će biti obračunat samo jednom.

**Po danu**: u zavisnosti od broja radnih dana unutar iste intervencije, trošak će se pomnožiti brojem dana rada.

**Po resursu**: u zavisnosti od broja resursa navedenih u uslugama unutar iste intervencije, trošak će se pomnožiti brojem resursa.

:::note[Primer]
Paušal se sastoji od sledećih stavki:

- Putarina: 100
- Ručak: 50

Intervencija traje jedan dan i na njoj učestvuju 3 resursa, pa će biti uneta 3 reda usluge.

Ukupan paušalni trošak za fakturisanje iznosiće 250 (100 za putarinu, koja se obračunava jednom, i 50 za ručak za svaki resurs).

Izračunavanje će se izvršiti prilikom promene statusa intervencije iz **Uneto** u **Za odobrenje**.
:::

### Podešavanja plana fakturisanja

Pravila koja se primenjuju na plan fakturisanja intervencije mogu se definisati u opštim parametrima modula **Upravljanje projektima**, čime važe za sve kupce, ili se mogu definisati zasebno za pojedinačnog kupca.

Postupak izračunavanja plana fakturisanja najpre će proveriti da li postoje posebne konfiguracije za kupca. Ako ne postoje, primeniće se podešavanja definisana u opštim parametrima.

**Mesto rada** i **Tip intervencije**: koriste se kao filteri. Ako nisu popunjeni, smatraju se važećim za sva mesta rada i sve tipove intervencija. Ako su konfigurisani, primenjuju se samo kada odgovaraju mestu rada konfigurisanom u šifarniku resursa koji izvršava intervenciju i korišćenom tipu intervencije.

**Tip vremenskog raspona**: označava radno vreme dogovoreno sa kupcem i broj radnih sati po danu.

:::note[Napomena]
Moguće je definisati da za jednog kupca dnevni fond radnih sati iznosi 7 sati, a za drugog 8 sati. Broj sati naveden u vremenskom rasponu koristiće se za konverziju između različitih vremenskih jedinica:

- Na primer, ako je kod kupca odrađeno 7 sati, a njegov vremenski raspon iznosi 7 sati, pri konverziji u dane količina će iznositi 1.
- Ako je kod kupca odrađeno 7 sati, a njegov vremenski raspon iznosi 8 sati, pri konverziji u dane količina će iznositi 0,875.

Vremenski raspon takođe će se uzimati u obzir pri izračunavanju prekovremenog rada koji se obračunava po drugačijoj ceni, kako u slučaju prekoračenja ukupnog fonda sati, tako i u slučaju prekoračenja definisanog radnog vremena.
:::

**Tip noćnog vremenskog raspona**: funkcioniše na isti način kao polje „Tip vremenskog raspona”, ali se koristi u slučaju izvršavanja dnevnih i noćnih usluga kako bi se omogućio različit obračun cena.

**Tip zaokruživanja**: određuje matematičko pravilo prema kojem se zaokružuju radni sati. Zaokruživanje se zatim primenjuje na ukupan broj sati intervencije. Na primer, ako je ukupno vreme 7,45 sati, a predviđeno je zaokruživanje na pola sata, fakturisaće se 8 sati.

**Komercijalna kategorija**: dodatni filter za izbor pravila plana fakturisanja. Ako nije popunjena, pravilo će važiti za sve komercijalne kategorije kupaca. Ako je navedena, odabraće se odgovarajuća kategorija uneta u šifarniku kupca na kartici **Administracija**.

**Uključi sate putovanja u usluge**: omogućava uključivanje sati putovanja iz intervencije, navedenih na kartici **Troškovi za fakturisanje**, kao da je reč o satima izvršene usluge. Posledično će se sva pravila fakturisanja (vremenski raspon, zaokruživanje itd.) primenjivati i na sate putovanja, kao da su sati izvršene usluge.

**Isključi zaokruživanje**: ako je opcija aktivirana, u planu fakturisanja neće se primenjivati zaokruživanje.

**Isključi izračunavanje prekovremenog rada**: ako je opcija aktivirana, u planu fakturisanja neće se izračunavati prekovremeni rad. Za konverziju između različitih vremenskih jedinica (npr. iz sati u dane) koristiće se broj radnih sati naveden u polju **Radna smena** u opštim parametrima modula Upravljanje projektima.

**Uzmi u obzir sve vremenske raspone pri izračunavanju prekovremenog rada**: ako je opcija aktivirana, pri izračunavanju prekovremenog rada u obzir će se uzimati i dnevni i noćni vremenski raspon. Prekovremenim radom smatraće se samo vreme izvan oba raspona ili vreme koje premašuje dnevni fond sati.

Ako opcija nije aktivirana, u obzir će se uzimati samo jedan vremenski raspon (noćni ili dnevni, u zavisnosti od vremena početka usluge), a sve vreme izvan tog raspona obračunavaće se kao prekovremeni rad.

:::note[Primer]
Dnevni vremenski raspon: 7:00 – 18:00

Noćni vremenski raspon: 20:00 – 5:00

Vreme izvršavanja usluge: 3:00 – 8:00

**Ako je oznaka aktivirana**, plan fakturisanja izgledaće ovako:

- Red usluge 3:00 – 5:00, sa noćnom tarifom.
- Red usluge 5:00 – 7:00, sa tarifom za prekovremeni rad.
- Red usluge 7:00 – 8:00, sa dnevnom tarifom.

(Pri izračunavanju se uzimaju u obzir oba vremenska raspona, a prekovremenim radom smatra se samo vreme koje ne pripada nijednom od njih.)

**Ako oznaka nije aktivirana**, plan fakturisanja izgledaće ovako:

- Red usluge 3:00 – 5:00, sa noćnom tarifom.
- Red usluge 5:00 – 8:00, sa tarifom za prekovremeni rad.

(Pri izračunavanju se uzima u obzir samo noćni vremenski raspon jer je on merodavan za uslugu koja je započela unutar tog raspona.)
:::