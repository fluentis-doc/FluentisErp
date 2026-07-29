---
title: Novi zaposleni
sidebar_position: 2
---

Ovaj prozor omogućava unos podataka novog **zaposlenog**.

### Glavni podaci

Glavni podaci su:

**Šifra zaposlenog**: sadrži jedinstvenu šifru zaposlenog.

**Korisničko ime**: sadrži korisničko ime zaposlenog.

**Lozinka**: sadrži lozinku za prijavu korisnika.

**Korisnik**: omogućava povezivanje operatera sa šifarnikom zaposlenih.

**Prezime**: sadrži prezime zaposlenog.

**Ime**: sadrži ime zaposlenog.

**Šifra zaposlenog u obračunu plata**: šifra koja identifikuje zaposlenog u modulu za obračun plata. Obavezna je jer se u suprotnom zaposleni neće pronaći prilikom pretrage za obračun podataka o platama. Ista šifra će se koristiti i u datoteci generisanoj za izvoz podataka prema sistemima van Fluentisa.

Prozor sadrži više kartica.

### Kartica Opšte

Kartica **Opšte** sadrži opšte podatke o zaposlenom, na primer:

**Šifra uloge**: unapred definisana tabela u kojoj je moguće dodeliti šifru funkcije prema zvaničnoj tabeli šifara funkcija koja se koristi u poreskim prijavama.

**Predstavnik**: sadrži eventualni šifarnik agenta povezanog sa zaposlenim.

**OIB**: OIB zaposlenog.

**IBAN**: sadrži IBAN zaposlenog.

**Lični podaci**: pol, datum rođenja, mesto i okrug rođenja, adresa prebivališta, adresa boravišta, mesto prebivališta, poštanski broj prebivališta i okrug prebivališta.

**Kontakt podaci**: kućni telefon, broj mobilnog telefona i e-mail adresa.

**Vrsta identifikacionog dokumenta**: vrsta dokumenta kojim se identifikuje osoba, na primer lična karta, pasoš i sl.

**Izdao**: organ koji je izdao identifikacioni dokument.

**Broj dokumenta / Datum izdavanja**: sadrži podatke o identifikacionom dokumentu zaposlenog.

**Obaveze prema zaposlenom**: sadrži konto na koji se knjiže obaveze prema zaposlenom.

### Kartica Alokacija kvalifikacije

Na kartici **Alokacija kvalifikacije** moguće je definisati kvalifikacije zaposlenog putem polja kao što su **Nivoi ugovora o radu** i **Kvalifikacije**. Takođe je moguće dodeliti **Centar troška** i **Element troška**, a ti podaci će biti preneti i na sledeću karticu.

### Kartica Smene i godišnji odmori

Na kartici **Smene i godišnji odmori** moguće je uneti:

**Centar troška** i **Element troška**: referentni centar troška zaposlenog koji se koristi u kontrolingu.

**Radno vreme**: sadrži uobičajeno radno vreme zaposlenog.

**Razlozi zastoja u radu**: sadrži podrazumevani predložak koji će biti predlagan u prijavi aktivnosti.

**Radna smena**: označava uobičajenu radnu smenu zaposlenog.

**Godišnji odmori**: sadrži podatke o godišnjim odmorima iz prethodnih godina i ažurirane ukupne vrednosti za tekuću godinu.

U donjem delu nalaze se tri tabele: **Godišnji odmori**, **Plaćena odsustva** i **ROL**, sa detaljnim obračunom sati za svaku godinu.

**Godina**: referentna godina obračuna.

**Godišnji obračun**: referentna vrednost ukupnog godišnjeg fonda sati godišnjeg odmora, plaćenih odsustava ili ROL-a na koje zaposleni ima pravo. Nakon unosa vrednost se automatski prenosi iz godine u godinu, osim ako se ručno ne izmeni. Ova vrednost se koristi kao osnova za obračun stečenih sati do poslednje obračunate platne liste.

**Obračunato**: broj stečenih sati prema poslednjoj obračunatoj platnoj listi.

**Iskorišćeno**: broj iskorišćenih sati u tekućoj godini.

**Prethodna godina**: neiskorišćeni preostali sati iz prethodne godine.

**Ostatak**: ukupan broj preostalih sati u tekućoj godini.

**Ručna izmena**: oznaka koja pokazuje da li je red ručno izmenio operater ili je automatski ažuriran tokom obrade platnih lista.

Vrednosti unete u ovim tabelama koriste se za obračune i ukupne vrednosti na platnim listama obrađenim u oblasti **Projekti**.

:::note[Primer]
Pretpostavimo da zaposleni Mario Rossi tokom jedne godine ima pravo na **192 sata godišnjeg odmora**.

Ako zaposleni nema istorijske podatke, vrednosti za prethodnu godinu potrebno je uneti ručno.

Za sledeću godinu (npr. **2026.**) vrednost **Godišnji obračun** automatski se kopira iz prethodne godine (**2025.**).

Prilikom obrade platne liste za jun 2026. godine automatski će se obračunati broj stečenih sati godišnjeg odmora do juna prema sledećoj formuli:

192 / 12 (meseci u godini) × 6 (mesec poslednje obrađene platne liste) = **96 stečenih sati** do juna 2026.

U junu 2026. zaposleni Mario Rossi iskoristio je **8 sati godišnjeg odmora**.

Sažetak će prikazati:

Godina: 2026

Godišnje stečeno: 192

Stečeno: 96

Iskorišćeno: 8

Prethodna godina: 32 (na primer, zaposleni ima preostala 4 radna dana godišnjeg odmora)

Preostalo: 120 (trenutno ukupno stanje)
:::

### Kartica Naknade

Na kartici **Naknade** prikazane su eventualne naknade zaposlenog, definisane putem sledećih polja:

**Šifra**: sadrži šifru naknade.

**Opis**: sadrži opis naknade.

**Vrednost**: sadrži vrednost naknade koja će biti primenjena.

Naknade se mogu definisati u odgovarajućem šifarniku kojem se pristupa putem dugmeta **Otvori obrazac**.

### Kartica Zadaci

Kartica **Zadaci** sadrži radna mesta zaposlenog, koja se definišu u šifarniku **Zadaci**, uz sledeće podatke:

**Datum početka**: sadrži datum početka obavljanja radnog mesta.

**Datum završetka**: sadrži datum završetka obavljanja radnog mesta.

**Rang**: sadrži kategoriju radnog mesta, definisanu u šifarniku **Kategorije radnih mesta**, kao i pripadajući **Opis**.

### Kartica Obrazovanje i jezici

Na kartici **Obrazovanje i jezici** moguće je evidentirati stečeno obrazovanje zaposlenog, definisano u šifarniku **Obrazovanje**, kao i jezike koje zaposleni poznaje, definisane u šifarniku **Poznati jezici**. Oba šifarnika dostupna su putem dugmeta **Otvori obrazac**.

### Kartica Nastavni plan, program i kursevi osposobljavanja

Na kartici **Nastavni plan, program i kursevi osposobljavanja** moguće je ručno uneti dodatne podatke o zaposlenom u tabele **Nastavni plan** i **Pohađani kursevi stručnog usavršavanja**. Podaci se dopunjuju poljima **Datum početka**, **Datum završetka**, eventualno definisanim **Dobavljačem**, **Brojem sati**, **Troškom**, **Ocenom** i drugim podacima.

### Kartica Posebne situacije

Na kartici **Posebne situacije** moguće je evidentirati posebne situacije koje nisu obuhvaćene ostalim karticama. Te situacije definišu se u šifarniku **Posebne situacije**.

### Kartica Zapošljavanje

Na kartici **Zapošljavanje** moguće je uneti podatke vezane za zaposlenje zaposlenog:
**Vrsta pridruživanja**: moguće je odabrati vrstu definisanu u šifarniku **Vrste pridruživanja**.

**Trenutno na probnom radu**: označava da li se zaposleni trenutno nalazi na probnom radu.

**Datum početka**: sadrži datum početka zaposlenja.

**Datum završetka**: sadrži datum završetka zaposlenja.

**Trajanje (dana)**: obračunava se na osnovu unetih datuma i prikazuje ukupan broj dana zaposlenja.

Moguće je evidentirati ukupno tri perioda zaposlenja.

### Kartica Radna istorija

Kartica **Radna istorija** sadrži istoriju rada zaposlenog povezanu sa pojedinim radnim mestima. Potrebno je uneti sledeće podatke:
**Od datuma / Do datuma**: vremenski period tokom kojeg je zaposleni radio na određenom radnom mestu.

**Pogon**: sadrži referentni pogon.

**Radno mesto**: sadrži radno mesto.

**Rizik**: sadrži pripadajući nivo rizika.

### Kartica Dodatni podaci

Na kartici **Dodatni podaci** nalaze se vrednosti **dodatnih** polja dodeljenih zaposlenom. Više informacija dostupno je u odeljku [Dodatni podaci](/docs/configurations/utility/extra-data/extradata/search-extradata/).

### Kartica Zadaci

Kartica **Zadaci** sadrži radna mesta zaposlenog, koja se definišu u šifarniku **Zadaci**, uz sledeće podatke:

**Datum početka**: sadrži datum početka obavljanja radnog mesta.

**Datum završetka**: sadrži datum završetka obavljanja radnog mesta.

**Rang**: sadrži kategoriju radnog mesta, definisanu u šifarniku **Kategorije radnih mesta**, kao i pripadajući **Opis**.

### Kartica Obrazovanje i jezici

Na kartici **Obrazovanje i jezici** moguće je evidentirati stečeno obrazovanje zaposlenog, definisano u šifarniku **Obrazovanje**, kao i jezike koje zaposleni poznaje, definisane u šifarniku **Poznati jezici**. Oba šifarnika dostupna su putem dugmeta **Otvori obrazac**.

### Kartica Nastavni plan, program i kursevi osposobljavanja

Na kartici **Nastavni plan, program i kursevi osposobljavanja** moguće je ručno uneti dodatne podatke o zaposlenom u tabele **Nastavni plan** i **Pohađani kursevi stručnog usavršavanja**. Podaci se dopunjuju poljima **Datum početka**, **Datum završetka**, eventualno definisanim **Dobavljačem**, **Brojem sati**, **Troškom**, **Ocenom** i drugim podacima.


### Kartica Posebne situacije

Na kartici **Posebne situacije** moguće je evidentirati posebne situacije koje nisu obuhvaćene ostalim karticama. Te situacije definišu se u šifarniku **Posebne situacije**.

### Kartica Zapošljavanje

Na kartici **Zapošljavanje** moguće je uneti podatke vezane za zaposlenje zaposlenog:
**Vrsta pridruživanja**: moguće je odabrati vrstu definisanu u šifarniku **Vrste pridruživanja**.

**Trenutno na probnom radu**: označava da li se zaposleni trenutno nalazi na probnom radu.

**Datum početka**: sadrži datum početka zaposlenja.

**Datum završetka**: sadrži datum završetka zaposlenja.

**Trajanje (dana)**: obračunava se na osnovu unetih datuma i prikazuje ukupan broj dana zaposlenja.

Moguće je evidentirati ukupno tri perioda zaposlenja.