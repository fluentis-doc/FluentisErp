---
title: Novi zaposlenik
sidebar_position: 2
---

Ovaj prozor omogućuje unos podataka novog **zaposlenika**.

### Glavni podaci

Glavni podaci su:

**Šifra zaposlenika**: sadrži jedinstvenu šifru zaposlenika.

**Ime korisnika**: sadrži korisničko ime zaposlenika.

**Lozinka**: sadrži lozinku za prijavu korisnika.

**Korisnik**: omogućuje povezivanje operatera sa šifarnikom zaposlenika.

**Prezime**: sadrži prezime zaposlenika.

**Ime**: sadrži ime zaposlenika.

**Šifra zaposlenika na platnom spisku**: šifra koja identificira zaposlenika u modulu za obračun plaće. Obavezna je jer se u protivnom zaposlenik neće pronaći prilikom pretraživanja za obračun podataka o plaći. Ista će se šifra koristiti i u datoteci generiranoj za izvoz podataka prema sustavima izvan Fluentisa.

Prozor sadrži više kartica.

### Kartica Općenito

Kartica **Općenito** sadrži opće podatke o zaposleniku, primjerice:

**Šifra uloge**: unaprijed definirana tablica u kojoj je moguće dodijeliti šifru funkcije prema službenoj tablici šifri funkcija koja se koristi u poreznim prijavama.

**Predstavnik**: sadrži eventualni šifarnik agenta povezan sa zaposlenikom.

**OIB**: OIB zaposlenika.

**IBAN**: sadrži IBAN zaposlenika.

**Osobni podaci**: spol, datum rođenja, mjesto i županija rođenja, adresa prebivališta, adresa boravišta, mjesto prebivališta, poštanski broj prebivališta i županija prebivališta.

**Kontakt podaci**: kućni telefon, broj mobitela i e-mail adresa.

**Vrsta identifikacijskog dokumenta**: vrsta dokumenta kojim se identificira osoba, primjerice osobna iskaznica, putovnica i sl.

**Izdano od**: tijelo koje je izdalo identifikacijski dokument.

**Broj dokumenta / Datum izdavanja**: sadrži podatke o identifikacijskom dokumentu zaposlenika.

**Obveze prema zaposleniku**: sadrži konto na koji se knjiže obveze prema zaposleniku.

### Kartica Alokacija kvalifikacije

Na kartici **Alokacija kvalifikacije** moguće je definirati kvalifikacije zaposlenika putem polja kao što su **Razine ugovora o radu** i **Kvalifikacije**. Također je moguće dodijeliti **Centar troška** i **Element troška**, a ti će se podaci prenijeti i na sljedeću karticu.

### Kartica Smjene i godišnji odmori

Na kartici **Smjene i godišnji odmori** moguće je unijeti:

**Centar troška** i **Element troška**: referentni centar troška zaposlenika koji se koristi u kontrolingu.

**Radno vrijeme**: sadrži uobičajeno radno vrijeme zaposlenika.

**Razlozi zastoja u radu**: sadrži zadani predložak koji će se predlagati u prijavi aktivnosti.

**Radna smjena**: označava uobičajenu radnu smjenu zaposlenika.

**Godišnji odmori**: sadrži podatke o godišnjim odmorima iz prethodnih godina i ažurirane ukupne vrijednosti za tekuću godinu.

U donjem dijelu nalaze se tri tablice: **Godišnji odmori**, **Plaćeni dopusti** i **ROL**, s detaljnim obračunom sati za svaku godinu.

**Godina**: referentna godina obračuna.

**Godišnji obračun**: referentna vrijednost ukupnog godišnjeg fonda sati godišnjeg odmora, plaćenih dopusta ili ROL-a na koje zaposlenik ima pravo. Nakon unosa vrijednost se automatski prenosi iz godine u godinu, osim ako se ručno ne izmijeni. Ova se vrijednost koristi kao osnova za izračun stečenih sati do posljednje obračunate platne liste.

**Obračunato**: broj stečenih sati prema posljednjoj obračunatoj platnoj listi.

**Iskorišteno**: broj iskorištenih sati u tekućoj godini.

**Prethodna godina**: neiskorišteni preostali sati iz prethodne godine.

**Ostatak**: ukupan broj preostalih sati u tekućoj godini.

**Manualna izmjena**: oznaka koja pokazuje je li redak ručno izmijenio operater ili je automatski ažuriran tijekom obrade platnih lista.

Vrijednosti unesene u ovim tablicama koriste se za izračune i ukupne vrijednosti na platnim listama obrađenima u području **Projekti**.

:::note[Primjer]
Pretpostavimo da zaposlenik Mario Rossi tijekom jedne godine ima pravo na **192 sata godišnjeg odmora**.
Ako zaposlenik nema povijesne podatke, vrijednosti za prethodnu godinu potrebno je unijeti ručno.
Za sljedeću godinu (npr. **2026.**) vrijednost **Godišnji obračun** automatski se kopira iz prethodne godine (**2025.**).
Prilikom obrade platne liste za lipanj 2026. godine automatski će se izračunati broj stečenih sati godišnjeg odmora do lipnja prema sljedećoj formuli:

192 / 12 (mjeseci u godini) × 6 (mjesec posljednje obrađene platne liste) = **96 stečenih sati** do lipnja 2026.

U lipnju 2026. zaposlenik Mario Rossi iskoristio je **8 sati godišnjeg odmora**.

Sažetak će prikazati:

Godina: 2026

Godišnje stečeno: 192

Stečeno: 96

Iskorišteno: 8

Prethodna godina: 32 (primjerice, zaposlenik ima preostale 4 radna dana godišnjeg odmora)

Preostalo: 120 (trenutno ukupno stanje)
:::

### Kartica Naknada

Na kartici **Naknada** prikazane su eventualne naknade zaposlenika, definirane putem sljedećih polja:

**Šifra**: sadrži šifru naknade.

**Opis**: sadrži opis naknade.

**Vrijednost**: sadrži vrijednost naknade koja će se primijeniti.

Naknade se mogu definirati u odgovarajućem šifarniku kojem se pristupa putem gumba **Otvori obrazac**.

### Kartica Zadaci

Kartica **Zadaci** sadrži radna mjesta zaposlenika, koja se definiraju u šifarniku **Zadaci**, uz sljedeće podatke:

**Datum početka**: sadrži datum početka obavljanja radnog mjesta.

**Datum završetka**: sadrži datum završetka obavljanja radnog mjesta.

**Rang**: sadrži kategoriju radnog mjesta, definiranu u šifarniku **Kategorije radnih mjesta**, te pripadajući **Opis**.

### Kartica Obrazovanje i jezik

Na kartici **Obrazovanje i jezik** moguće je evidentirati stečeno obrazovanje zaposlenika, definirano u šifarniku **Obrazovanje**, kao i jezike koje zaposlenik poznaje, definirane u šifarniku **Poznati jezici**. Oba šifarnika dostupna su putem gumba **Otvori obrazac**.

### Kartica Nastavni plan, program i tečajevi osposobljavanja

Na kartici **Nastavni plan, program i tečajevi osposobljavanja** moguće je ručno unijeti dodatne podatke o zaposleniku u tablice **Nastavni plan** i **Pohađani tečajevi stručnog usavršavanja**. Podaci se dopunjuju poljima **Datum početka**, **Datum završetka**, eventualnim definiranim **Dobavljačem**, **Brojem sati**, **Troškom**, **Ocjenom** i drugim podacima.

### Kartica Posebne situacije

Na kartici **Posebne situacije** moguće je evidentirati posebne situacije koje nisu obuhvaćene ostalim karticama. Te se situacije definiraju u šifarniku **Posebne situacije**.

### Kartica Zapošljavanje

Na kartici **Zapošljavanje** moguće je unijeti podatke vezane uz zaposlenje zaposlenika:

**Vrsta pridruživanja**: moguće je odabrati vrstu definiranu u šifarniku **Vrste pridruživanja**.

**Trenutno u testu**: označava nalazi li se zaposlenik trenutno na probnom radu.

**Datum početka**: sadrži datum početka zaposlenja.

**Datum završetka**: sadrži datum završetka zaposlenja.

**Trajanje (dana)**: izračunava se na temelju unesenih datuma i prikazuje ukupan broj dana zaposlenja.

Moguće je evidentirati ukupno tri razdoblja zaposlenja.

### Kartica Radna povijest

Kartica **Radna povijest** sadrži povijest rada zaposlenika povezanu s pojedinim radnim mjestima. Potrebno je unijeti sljedeće podatke:

**Od datuma / Do datuma**: vremensko razdoblje tijekom kojeg je zaposlenik radio na određenom radnom mjestu.

**Pogon**: sadrži referentni pogon.

**Radno mjesto**: sadrži radno mjesto.

**Rizik**: sadrži pripadajuću razinu rizika.

### Kartica Dodatni podaci

Na kartici **Dodatni podaci** nalaze se vrijednosti **dodatnih** polja dodijeljenih zaposleniku. Više informacija dostupno je u odjeljku [Dodatni podaci](/docs/configurations/utility/extra-data/extradata/search-extradata/).