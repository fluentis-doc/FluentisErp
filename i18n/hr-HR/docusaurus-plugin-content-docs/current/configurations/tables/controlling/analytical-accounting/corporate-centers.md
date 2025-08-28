---
title: Korporativni centri
sidebar_position: 4
---


Obrazac se nalazi u: **Tablice > Kontroling > Troškovno računovodstvo > Korporativni centri**

:::tip Napomena
Ova je tablica relevantna samo za društva kod kojih je aktivirana opcija *Kontroling*.
:::

Tablica omogućuje definiranje strukture, uključujući više razina, te karakteristika poslovnih centara.

#### Specifični gumbi

**Novi CDC**: omogućuje unos novog centra troška.|
**Novi podređeni CDC**: omogućuje dodavanje podrazine (podcentra) u odnosu na razinu na kojoj se trenutno nalazite. |
**Brisanje veze CDC**: omogućuje brisanje podrazine centra troška. |


:::tip **Način unosa novih centara**
Struktura stabla koja organizira centre, kao i detalji centara, vidljiva je u središnjoj mreži forme, dok se novi centri unose popunjavanjem polja u donjem dijelu ekrana.
Upozorenje: pojedina polja moguće je mijenjati izravno u gornjoj mreži nakon što se novi centar unese (npr. polje *Cost driver*).
:::

## Opće postavke

### Obavezna polja (lijevi stupac)
- [**Dimenzija**](/docs/controlling/controlling-parametrization/controlling-specific-settings/dimension) kojoj centar pripada
- **Šifra** alfanumerička, do 15 znakova
- **Naziv konta** centra
- **Kategorija** centra

### Neobavezna polja (lijevi stupac) 
- **Drugi opis**
- **Tip centra** (direktni/indirektni) – ova postavka ne utječe na izračune.

### Neobavezna polja (desni stupac) 
- **DATUM POČETKA/DATUM ZAVRŠETKA VALJANOSTI** omogućuje provjeru je li centar troška valjan na datum knjiženja ili datum dokumenta. Padajući izbornik prikazuje samo one centre koji su važeći u zadanom razdoblju (ili bez zadanog raspona).
- FLAG **VALORIZIRAJUĆI**: označava može li se centar koristiti u knjiženjima ili dokumentima, ili je samo logička struktura.
- FLAG **VIDLJIV U PROIZVODNJI**: čini centar vidljivim u tablici [Trošak centri](/docs/configurations/tables/production/cost-center) u proizvodnji.
- **CENTAR ODGOVORNOSTI**. slobodna tablica u kojoj se može evidentirati odgovorna osoba za centar; nema izravnog utjecaja na analitičko računovodstvo, ali se može koristiti za obavještavanje zaposlenika (npr. u slučaju prekoračenja budžeta).

## Postavke kontrolinga

- **Računi koji se trebaju dodijeliti**: samo jedan centar u istoj tvrtki može imati ovaj flag. Koristi se kao generički centar (npr. "VRIJEDNOSTI ZA ATRIBUCIJU U KONTROLINGU") u koji se knjiže troškovi koji se ne mogu precizno dodijeliti. Ova opcija se primjenjuje kada: računovodstvo nema dovoljno informacija za pravilnu dodjelu u trenutku knjiženja, ili kada bi detaljna dodjela zahtijevala previše vremena.

:::tip Napomena
Primjer: trošak najma može se odmah raspodijeliti po unaprijed definiranim postocima u kontnom planu, no ako se koristi generički centar, može se primijeniti *cost driver* (npr. površina u m²) za fleksibilnije raspoređivanje troškova. Promjenom cost drivera ažuriraju se postotci unutar kontrolinga bez potrebe za izmjenama u povijesnim knjiženjima.
Drugi primjer: potrošnja kWh strojeva može se privremeno knjižiti u generički centar, a kasnije, kada su dostupni stvarni podaci, izvršiti raspodjela u kontrolingu na temelju *cost drivera*.
:::

- **Zadana centar za imovinu**: generički centar kojem se dodjeljuju sva knjiženja vezana uz imovinske stavke. Iako se analitika najčešće primjenjuje samo na ekonomske stavke, tvrtka može odabrati proširenje na imovinske zapise radi potpunijeg pregleda bilance.

- **Zadani centar za projekte**: generički centar za knjiženje izravnih troškova/prihoda po projektima/narudžbama. Ako je u analitici obavezno popuniti centar, a nema specificirane detaljne veze centara s projektima, koristi se ovaj zadani centar. Detaljna pravila postavljaju se u [TABLICI POVEZIVANJA CENTARA I PROJEKATA](/docs/configurations/tables/controlling/analytical-accounting/projects-centers-association).

- [**Model reklasifikacije**](/docs/controlling/reclassifications/create-reclassification-model): omogućuje povezivanje poslovnog centra s modelom reklasifikacije kako bi se odredio ukupni trošak dodijeljen centru i dobio pokazatelj troška samog centra. To je zato što su neki centri (uglavnom proizvodni) obično vrednovani u fizičkim veličinama (npr. radni sati ili broj korištenih komada) te je potrebno odrediti tarifu vrednovanja za trošak pojedinog radnog sata ili pojedinog komada. Model reklasifikacije obično određuje ukupne troškove centra koji se zatim dijele s ukupnom vrijednošću sati (ili komada) zabilježenih za taj centar.
:::tip Napomena
Model reklasifikacije koji se povezuje s poslovnim centrom za određivanje tarife može ovisiti o teorijskom pristupu koji želite primijeniti u svom sustavu kontrolinga, ali u svakom slučaju to će biti model koji teži odrediti ukupni trošak centra, uključujući i raspodjelu dijela neizravnih i zajedničkih troškova. U detaljima modela reklasifikacije predviđeno je označiti odgovarajući čvor (redak) koji prikazuje rezultat reklasifikacije, odnosno ukupni trošak centra, koji će postati brojnik u omjeru (npr. ukupni trošak centra / ukupni broj radnih sati centra) kako bi se odredio, primjerice, satni trošak centra. Na slikama je prikazan primjer specifičnog modela nazvanog Quadro controllo costi. Taj je model konfiguriran tako da kao brojnik koristi redak Ukupni troškovi rada.
:::

![Immagine](/img/it-it/configurations/tables/controlling/analytical-accounting/corporate-centers/corporate-center-model-connection.png)

![Immagine](/img/it-it/configurations/tables/controlling/analytical-accounting/corporate-centers/QCC-model.png)

- **Vrsta mjerenja**: mogu se koristiti tri metode:
    - *fizička dimenzija*
    - *postotak*
    - *postotak i fizička dimenzija*.

Ako odaberemo posljednju opciju, prikazat će se sve dostupne mogućnosti.

- **Filter vrijednosti nazivnika**: ovo polje koristi se u postotnim izračunima za definiranje logike izračuna nazivnika. Dostupne opcije su:
    - *02 Ukupno dugovno*
    - *03 Ukupno potražuje*
    - *04 Marža*
    - *05 Na odabrani podkonto*
    - *06 Na odabrani konto*
    - *07 Isključujući odabrane podkonte*
    - *08 Isključujući odabrane konte*

Ako, primjerice, odaberemo kod 02 Ukupno dugovno, zbrojit će se samo dugovni iznosi centara navedenih u donjoj lijevoj mreži; s kodom 03 Ukupno potražno, s 04 marže (razlika dugovno-potražno), a ostale opcije omogućuju dodatno filtriranje u desnoj mreži za preciznije podatke centara.

- [**JEDINICA MJERE 1** ](/docs/controlling/controlling-parametrization/controlling-specific-settings/measure-units), [**JEDINICA MJERE 2**], **FIKSNI DIO** i **VARIJABILNI DIO**. Četiri su polja vezana uz izračune temeljem količina, gdje se definira koja je jedinica mjere relevantna za dobivanje ukupne količine koja se koristi kao nazivnik u fizičkom indeksu. Moguće je postaviti dvije jedinice mjere (UM1 i UM2) za izračun dvostrukog indeksa, dok se ista jedinica koristi i za fiksni i za varijabilni dio prvog ili drugog indeksa.

:::tip Napomena
Izračun prema fizičkim veličinama, tipičan za proizvodne centre, omogućuje dobivanje troškovnih tarifa centara, poput €/sat rada stroja ili €/sat rada čovjeka, što omogućuje izračun i provjeru standardnih troškova korištenih u izračunu troškova proizvoda, bilo za procjene u sastavnici, bilo za ponude.
:::

- **REFERENCA MJERENJA CENTRA**: omogućuje definiranje polja iz povijesnih podataka fizičkih kretanja koja će se filtrirati radi identifikacije količina vezanih uz centar. To može biti centar podrijetla, centar odredišta ili, s prioritetom, odredište, a u suprotnom podrijetlo.

## Lokalizacije

U slučaju instalacije s različitim geografskim lokalizacijama, moguće je koristiti sekciju Lokalizacije za upravljanje opisima na alternativnim jezicima, što se može koristiti, primjerice, u ispisu izvještaja analize centara troška.