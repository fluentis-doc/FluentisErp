---
title: Centri tvrtke
sidebar_position: 4
---

Obrazac se nalazi na putanji: **Tablice > Kontroling > Analitičko knjigovodstvo > Centri tvrtke**

:::tip Napomena
Ova je tablica relevantna samo za tvrtke u kojima je aktivna oznaka *Kontroling*.
:::

Tablica omogućuje definiranje strukture centara tvrtke na više razina, kao i definiranje njihovih obilježja.

**#### Posebni gumbi**

**Novi CDC**: omogućuje unos novog centra troška.

**Nova veza CDC-a**: omogućuje unos podrazine u odnosu na trenutačno odabranu razinu.

**Brisanje veze CDC-a**: omogućuje brisanje podrazine centra troška.

:::tip **Način unosa novih centara**
Stablo strukture za organizaciju centara i detalji pojedinih centara prikazuju se u središnjoj mreži obrasca, ali se novi centri unose popunjavanjem polja u donjem dijelu obrasca.

**POZOR:** neka se polja mogu mijenjati i izravno u retku gornje mreže nakon unosa novog centra (npr. polje *Pokretač troška*).
:::

**## Opće postavke**

**### Obvezna polja u lijevom stupcu**

- [**DIMENZIJA**](/docs/controlling/controlling-parametrization/controlling-specific-settings/dimension) kojoj centar pripada
- **ŠIFRA** – alfanumerička šifra duljine do 15 znakova
- **OPIS** centra
- **KATEGORIJA** centra

**### Neobvezna polja u lijevom stupcu**

- **DRUGI OPIS**
- **VRSTA CENTRA** (izravni/neizravni) – odabir koji ne utječe na obradu podataka

**### Neobvezna polja u desnom stupcu**

- **DATUM POČETKA / DATUM ZAVRŠETKA VALJANOSTI** – postavljanjem ovih datuma provjerava se je li centar troška valjan na datum knjiženja (ili datum dokumenta). Padajući izbornik centara prikazivat će samo centre koji su valjani na taj datum ili nemaju definirano razdoblje valjanosti.
- Oznaka **MOŽE SE VREDNOVATI** – označava može li se centar vrednovati u računovodstvu ili dokumentima ili je riječ o centru koji služi samo za logičku strukturu.
- Oznaka **VIDLJIV U PROIZVODNJI** – omogućuje prikaz centra u tablici [Centri troška](/docs/configurations/tables/production/cost-center) u modulu proizvodnje.
- **CENTAR ODGOVORNOSTI** – slobodno definirana tablica u kojoj se navodi osoba odgovorna za taj centar. Ovo polje ne utječe na logiku upravljanja analitičkim računovodstvom, ali se može koristiti za slanje obavijesti zaposleniku putem modula Supervisor u slučaju prekoračenja proračuna.

**## Postavke kontrole**

- **KONTA KOJIMA TREBA PONOVNO DODIJELITI CENTAR** – ova oznaka može biti postavljena samo na jednom centru unutar iste tvrtke. Koristi se za pomoćne centre, a posebno za generički centar „VRIJEDNOSTI S DODJELOM U KONTROLINGU”.

  Ova oznaka definira svojevrsni zadani centar kojemu financijsko računovodstvo dodjeljuje troškove koje ne može precizno rasporediti. Također, mogu postojati situacije u kojima računovodstvo u trenutku knjiženja nema dovoljno pouzdanih podataka za vrednovanje stavki ili bi njihova obrada zahtijevala previše vremena.

:::tip Napomena
Primjer: troškovi najma mogli bi se obrađivati već u kontnom planu primjenom fiksnih postotaka, ali korištenjem ovog generičkog centra možemo upravljati *pokretačem troška (Cost driver)* u kojem se, primjerice, mogu definirati kvadratni metri pojedinih centara, na temelju kojih se izračunava odgovarajući postotak. Promjenom pokretača troška ažurirat ćemo novi postotak (samo u kontrolingu), bez potrebe za izmjenama povijesnih podataka koji su već proknjiženi u računovodstvu.

Drugi primjer je potrošnja električne energije u kWh pojedinih strojeva, za koju računovodstvo ne zna gdje pronaći podatke. Stoga je praktično privremeno pohraniti te vrijednosti u ovaj generički centar, a zatim na kraju razdoblja, kada saznamo kolika je potrošnja, definirati logiku vrednovanja samo u kontrolingu, pri čemu se izračun prepušta *pokretaču troška (Cost driver)*.
:::

- **ZADANI BILANČNI CENTAR**: označava generički centar kojemu se dodjeljuju sva bilančna knjiženja iz računovodstva. Uobičajeno se analitičko računovodstvo povezuje samo s računima prihoda i rashoda, ali tvrtka može imati potrebu za potpunim usklađenjem bilančnih podataka i u analitičkom računovodstvu. Ovaj centar povezan je s oznakom za vrednovanje bilančnih stavki u kontrolingu, koja je dostupna unutar *Divizije*.

- **ZADANI CENTAR ZA PROJEKTE**: označava generički centar tvrtke kojemu se dodjeljuju izravni troškovi i prihodi projekta/naloga. Kao što je objašnjeno u tablici *Dimenzije*, postoji posebna dimenzija za analizu vrijednosti po projektima. Budući da u analitičkom računovodstvu uvijek mora postojati centar, prilikom vrednovanja izravnog troška ili prihoda projekta/naloga može se koristiti generički centar s ovom oznakom ili se može vrednovati više projektnih centara postavljanjem [TABLICE POVEZIVANJA CENTARA I PROJEKATA](/docs/configurations/tables/controlling/analytical-accounting/projects-centers-association).

- [**MODEL REKLASIFIKACIJE**](/docs/controlling/reclassifications/create-reclassification-model): omogućuje povezivanje centra tvrtke s modelom reklasifikacije radi utvrđivanja ukupnih troškova dodijeljenih centru, kako bi se izračunao njegov troškovni pokazatelj. Neki centri, uglavnom proizvodni, u pravilu se vrednuju fizičkim veličinama (npr. radnim satima ili brojem komada), pa je potrebno odrediti jediničnu stopu troška po radnom satu ili komadu. Model reklasifikacije obično određuje ukupne troškove centra, koji se zatim dijele ukupnim brojem sati (primjerice) ili komada evidentiranih za taj centar.

:::tip Napomena
Model reklasifikacije koji se povezuje s centrom tvrtke radi određivanja troškovne stope može ovisiti o teorijskom pristupu na kojem se temelji sustav kontrolinga. U svakom slučaju, model će biti usmjeren na utvrđivanje ukupnih troškova centra, uključujući i dodijeljeni udio neizravnih i zajedničkih troškova.

U detaljima modela reklasifikacije posebnom se oznakom određuje čvor (redak) koji prikazuje rezultat reklasifikacije, odnosno ukupne troškove centra. Taj iznos postaje brojnik u izračunu omjera, primjerice ukupni troškovi centra / ukupni radni sati centra, kako bi se odredio trošak po satu.

Na slikama je prikazan primjer posebnog modela pod nazivom „Pregled kontrole troškova”. Taj je model konfiguriran tako da se kao brojnik omjera koristi redak „Ukupni troškovi funkcioniranja”.
:::

![Slika](/img/it-it/configurations/tables/controlling/analytical-accounting/corporate-centers/corporate-center-model-connection.png)

![Slika](/img/it-it/configurations/tables/controlling/analytical-accounting/corporate-centers/QCC-model.png)

- **VRSTA MJERENJA**: moguće je odabrati jednu od tri metode mjerenja:
  - *fizičkom veličinom*
  - *postotkom*
  - *postotkom i fizičkom veličinom*.

  Ako odaberemo posljednju mogućnost kako bismo prikazali sve dostupne opcije, dostupna su sljedeća polja:

- **FILTAR VRIJEDNOSTI NAZIVNIKA**: za izračune u postocima ovim se poljem određuje način izračuna nazivnika za postotne pokazatelje. Dostupne su sljedeće mogućnosti:
  - *02 Ukupno duguje*
  - *03 Ukupno potražuje*
  - *04 Marže*
  - *05 Na odabranom podkontu*
  - *06 Na odabranom kontu*
  - *07 Isključujući odabrane podkonte*
  - *08 Isključujući odabrane konte*.

  Primjerice, odabirom šifre 02 „Ukupno duguje” zbrajaju se samo dugovne stavke centara navedenih u donjoj lijevoj mreži. Šifra 03 odnosi se na potražnu stranu, a šifra 04 na marže, odnosno razliku između dugovne i potražne strane. Sljedeće mogućnosti omogućuju i korištenje desne mreže za odgovarajuće filtriranje podataka centara.

- [**MJERNA JEDINICA 1**](/docs/controlling/controlling-parametrization/controlling-specific-settings/measure-units), [**MJERNA JEDINICA 2**], **FIKSNI DIO** i **VARIJABILNI DIO**. Riječ je o četiri polja povezana s izračunom prema količini, u kojima se određuje mjerna jedinica na temelju koje se dohvaća ukupna količina koja se koristi kao nazivnik fizičkog pokazatelja. Moguće je navesti dvije mjerne jedinice (MJ1 i MJ2) za izračun dvostrukog pokazatelja, dok se za fiksni i varijabilni dio prvog ili drugog pokazatelja koristi ista mjerna jedinica.

:::tip Napomena
Izračun na temelju fizičke veličine, karakterističan za proizvodne centre, omogućuje dobivanje troškovnih stopa centara, primjerice u eurima po strojnome satu ili radnom satu. Na taj se način mogu izračunati i provjeriti standardni troškovi koji se koriste u izračunu troška proizvoda, za izradu procjena troškova u sastavnici ili pripremu ponude.
:::

- **REFERENCA MJERENJA CENTRA**: omogućuje određivanje polja iz povijesti fizičkih kretanja koja treba filtrirati radi utvrđivanja količina za određeni centar. Kao kriterij može se koristiti izvorni centar, odredišni centar ili, uz prioritet odredišta, izvorni centar ako odredište nije dostupno.

**## Lokacije**

U slučaju instalacije s različitim geografskim lokacijama, odjeljak Lokacije može se koristiti za definiranje opisa na drugim jezicima. Ti se opisi, primjerice, mogu koristiti pri ispisu analize centara troška.