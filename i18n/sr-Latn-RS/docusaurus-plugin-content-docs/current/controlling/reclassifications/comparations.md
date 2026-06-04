---
title: Usporedba reklasifikacije
sidebar_position: 5
---

Usporedbe reklasifikacija omogućuju, polazeći od određenog [*modela reklasifikacije*](/docs/controlling/reclassifications/create-reclassification-model), izradu usporedbi između različitih reklasifikacija pohranjenih u ***FluentisERP-u***.


## USPOREDBE NA TEMELJU PODATAKA REKLASIFICIRANIH PRIVREMENIH ZAVRŠNICA
Potrebno je postaviti model, unijeti opis usporedbe, a na desnoj strani ne označiti status **Podaci iz kontrolinga** kako bi ***FluentisERP*** pročitao podatke reklasificiranih modela izrađenih iz podataka privremenog zatvaranja ili *konsolidacije*.

U donjem obrascu ***Detalji*** nalaze se sljedeća polja:
- *Progresivan* redni broj – identifikacijski element podatka za karticu ***Odstupanja***
- *Šifra/Zatvaranje* (s pripadajućim opisom i datumom)

Nakon spremanja ovih postavki, u kartici ***Odstupanja*** prikazat će se rezultat usporedbe. Dostupne su sljedeće opcije:

- *Prikaz odstupanja*: omogućuje prikaz postotnog odstupanja između unesenih reklasifikacija. Na desnoj strani može se postaviti u kojem stupcu (u susjednom ili fiksnom) će se izračunati odstupanje

- *Prikaži detalje podataka*: prikazuje detalje podkonta ili centara koji valoriziraju pojedini čvor modela

- *Prikaz centara*: nije aktivno za usporedbe koje nisu iz kontrolinga

- *Decimalna mjesta*: broj decimalnih mjesta za stupac odstupanja


## USPOREDBE NA TEMELJU PODATAKA IZ UPRAVLJAČKOG RAČUNOVODSTVA KONTROLINGA
Potrebno je postaviti model, unijeti opis usporedbe, a na desnoj strani označiti status **Podaci kontrolinga** kako bi ***FluentisERP*** pročitao podatke iz upravljačkog računovodstva kontrolinga.

U donjem obrascu ***Detalji*** nalaze se sljedeća polja:
- *Progresivan* redni broj – identifikacijski element podatka u kartici ***Odstupanja***
- *Područje*, (obavezno) – područje iz kojeg se čitaju podaci
- [*Dimenzija*](/docs/controlling/controlling-parametrization/controlling-specific-settings/dimension), (obavezno) – dimenzija iz koje se čitaju podaci
- [*Centar troška*](/docs/controlling/controlling-parametrization/controlling-specific-settings/cost-centers), (opcionalno) – centar za koji se žele prikazati podaci
- *Projekt*, nije u uporabi
- *Početno* i *završno razdoblje*, (obavezno) – vremenski raspon razdoblja koji se uzima u obzir
- *Početna i završna godina* (obavezno) – vremenski raspon godina koji se uzima u obzir
- *Prikaz detalja razdoblja*: omogućuje prikaz podataka za svaki period unutar definiranog raspona kao zaseban stupac
- *Centar/nalog po stucpu*: omogućuje prikaz šifre *centra* unutar naziva stupca
- *Izračun indeksa*: – opcija koja forsira trenutni izračun indeksa troškova centara. Ova opcija vrijedi prilikom usporedbe modela korištenog za mjerenje centara u tablici *Centri troškova*


Nakon spremanja ovih postavki, u kartici ***Odstupanja*** prikazat će se rezultat usporedbe. Dostupne su sljedeće opcije:

- *Prikaz odstupanja*: – omogućuje prikaz postotnog odstupanja između unesenih reklasifikacija. Na desnoj strani može se postaviti u kojem stupcu (u susjednom ili fiksnom) će se izračunati odstupanje

- *Prikaži detaljne podatke*: – prikazuje detalje podkonta ili centara koji valoriziraju pojedini čvor modela

- *Prikaz centara* – prikazuje i detalje centara povezanih s podkontima čvora

- *Prikaz ukupnih iznosa* – dodaje završni stupac sa zbrojem svih prikazanih stupaca u donjem prikazu

- *Decimalna mjesta*– broj decimalnih mjesta za stupac odstupanja

U slučaju prikaza odstupanja, dostupni su sljedeći stupci odstupanja:
- *%* – vertikalni postotak između čvora s oznakom Referentni postotak (koji će imati vrijednost 100%) i svih ostalih
- *Odstupanje* – apsolutna vrijednost odstupanja
- *% Odstupanja* – odstupanje izraženo u postotcima
- *% Odstupanja u odnosu na %* - uspoređuje postotke između dva stupca

Ako se uspoređuje model za dodjelu troškova centrima radi izračuna indeksa, a u detaljima postavki filtrirani su različiti proizvodni centri, u donjem proširenju bit će dostupni ukupni rezultati izračuna indeksa troškova za svaki od centara. Prikazani podaci uključuju:

- *UM1-F BROJNIK*: brojnik za izračun fiksnog indeksa na UM1 centra
- *UM1-F NAZIVNIK*: nazivnik za izračun fiksnog indeksa na UM1 centra
- *UM1-F VRIJEDNOST INDEKSA*: vrijednost fiksnog indeksa na UM1 centra
- *UM1-V BROJNIK*: brojnik za izračun varijabilnog indeksa na UM1 centra
- *UM1-F NAZIVNIK*: nazivnik za izračun varijabilnog indeksa na UM1 centra
- *UM1-F VRIJEDNOST INDEKSA*: vrijednost varijabilnog indeksa na UM1 centra
- *UM1 UKUPNO*: ukupni indeks UM1 centra

- *UM2-F BROJNIK*: brojnik za izračun fiksnog indeksa na UM2 centra
- *UM2-F NAZIVNIK*: nazivnik za izračun fiksnog indeksa na UM2 centra
- *UM2-F VRIJEDNOST INDEKSA*: vrijednost fiksnog indeksa na UM2 centra
- *UM2-V BROJNIK*: brojnik za izračun varijabilnog indeksa na UM2 centra
- *UM2-V NAZIVNIK*: nazivnik za izračun varijabilnog indeksa na UM2 centra
- *UM2-V VRIJEDNOST INDEKSA*: vrijednost varijabilnog indeksa na UM2 centra
- *UM2 UKUPNO*: ukupni indeks UM2 centra

- *% BROJNIK* brojnik za izračun postotnog indeksa
- *% NAZIVNIK* nazivnik za izračun postotnog indeksa
- *% POSTOTAK* vvrijednost postotnog indeksa

:::tip NAPOMENA
Prilikom obrade usporedbe u kontrolingu, ***FluentisERP*** će automatski stvoriti onoliko reklasifikacija na modelu koliko ima kombinacija centra, godine, mjeseca i detalja koje je potrebno obraditi prije prikaza rezultata. Što je lista složenija, to će obrada trajati duže.
:::