---
title: Poslovni centri
sidebar_position: 4
---

Obrazac se nalazi na putanji: **Tabele > Kontroling > Analitičko knjigovodstvo > Poslovni centri**

:::tip Napomena
Ova tabela je relevantna samo za preduzeća u kojima je aktivirana oznaka *Kontroling*.
:::

Tabela omogućava definisanje strukture poslovnih centara na više nivoa, kao i definisanje njihovih obeležja.

**#### Posebna dugmad**

**Novi CDC**: omogućava unos novog centra troška.

**Nova veza CDC-a**: omogućava unos podnivoa u odnosu na trenutno izabrani nivo.

**Brisanje veze CDC-a**: omogućava brisanje podnivoa centra troška.

:::tip Način unosa novih centara
Stablo strukture za organizaciju centara i detalji pojedinačnih centara prikazuju se u centralnoj mreži obrasca, ali se novi centri unose popunjavanjem polja u donjem delu obrasca.

**PAŽNJA:** neka polja mogu se menjati i direktno u redu gornje mreže nakon unosa novog centra (npr. polje *Pokretač troška*).
:::

## Opšta podešavanja

### Obavezna polja u levoj koloni

- [**DIMENZIJA**](/docs/controlling/controlling-parametrization/controlling-specific-settings/dimension) kojoj centar pripada
- **ŠIFRA** – alfanumerička šifra dužine do 15 znakova
- **OPIS** centra
- **KATEGORIJA** centra

### Opciona polja u levoj koloni

- **DRUGI OPIS**
- **VRSTA CENTRA** (direktni/indirektni) – izbor koji ne utiče na obradu podataka

### Opciona polja u desnoj koloni

- **DATUM POČETKA / DATUM ZAVRŠETKA VAŽENJA** – postavljanjem ovih datuma proverava se da li je centar troška važeći na datum knjiženja (ili datum dokumenta). Padajući meni za izbor centara prikazivaće samo centre koji važe na taj datum ili nemaju definisan period važenja.
- Oznaka **MOŽE SE VREDNOVATI** – označava da li se centar može vrednovati u računovodstvu ili dokumentima ili je reč o centru koji služi samo za logičku strukturu.
- Oznaka **VIDLJIV U PROIZVODNJI** – omogućava prikaz centra u tabeli [Centri troška](/docs/configurations/tables/production/cost-center) u modulu Proizvodnja.
- **CENTAR ODGOVORNOSTI** – slobodno definisana tabela u kojoj se navodi osoba odgovorna za taj centar. Ovo polje ne utiče na logiku upravljanja analitičkim knjigovodstvom, ali se može koristiti za slanje obaveštenja zaposlenom putem modula Supervisor u slučaju prekoračenja budžeta.

## Podešavanja kontrole

- **KONTA KOJIMA TREBA PONOVO DODELITI CENTAR** – ova oznaka može biti postavljena samo na jednom centru unutar istog preduzeća. Koristi se za pomoćne centre, a posebno za generički centar „VREDNOSTI SA DODELOM U KONTROLINGU”.

  Ova oznaka definiše neku vrstu podrazumevanog centra kojem finansijsko računovodstvo dodeljuje troškove koje ne može precizno da rasporedi. Takođe, mogu postojati situacije u kojima računovodstvo u trenutku knjiženja nema dovoljno pouzdanih podataka za vrednovanje stavki ili bi njihova obrada zahtevala previše vremena.

:::tip Napomena
Primer: troškovi zakupa mogli bi se obrađivati već u kontnom planu primenom fiksnih procenata, ali korišćenjem ovog generičkog centra možemo upravljati *pokretačem troška (Cost driver)* u kojem se, na primer, mogu definisati kvadratni metri pojedinih centara, na osnovu kojih se izračunava odgovarajući procenat. Promenom pokretača troška ažuriraćemo novi procenat (samo u kontrolingu), bez potrebe za izmenama istorijskih podataka koji su već proknjiženi u računovodstvu.

Drugi primer je potrošnja električne energije u kWh pojedinačnih mašina, za koju računovodstvo ne zna gde da pronađe podatke. Zato je praktično privremeno sačuvati te vrednosti u ovom generičkom centru, a zatim na kraju perioda, kada saznamo kolika je potrošnja, definisati logiku vrednovanja samo u kontrolingu, pri čemu se obračun prepušta *pokretaču troška (Cost driver)*.
:::

- **PODRAZUMEVANI BILANSNI CENTAR**: označava generički centar kojem se dodeljuju sva bilansna knjiženja iz računovodstva. Analitičko knjigovodstvo obično se povezuje samo sa računima prihoda i rashoda, ali preduzeće može imati potrebu za potpunim usklađivanjem bilansnih podataka i u analitičkom knjigovodstvu. Ovaj centar povezan je sa oznakom za vrednovanje bilansnih stavki u kontrolingu, koja je dostupna u okviru *Divizije*.

- **PODRAZUMEVANI CENTAR ZA PROJEKTE**: označava generički poslovni centar kojem se dodeljuju direktni troškovi i prihodi projekta/naloga. Kao što je objašnjeno u tabeli *Dimenzije*, postoji posebna dimenzija za analizu vrednosti po projektima. Budući da u analitičkom knjigovodstvu uvek mora postojati centar, prilikom vrednovanja direktnog troška ili prihoda projekta/naloga može se koristiti generički centar sa ovom oznakom ili se može vrednovati više projektnih centara podešavanjem [TABELE ZA POVEZIVANJE CENTARA I PROJEKATA](/docs/configurations/tables/controlling/analytical-accounting/projects-centers-association).

- [**MODEL REKLASIFIKACIJE**](/docs/controlling/reclassifications/create-reclassification-model): omogućava povezivanje poslovnog centra sa modelom reklasifikacije radi utvrđivanja ukupnih troškova dodeljenih centru i obračuna njegovog troškovnog pokazatelja. Neki centri, uglavnom proizvodni, obično se vrednuju fizičkim veličinama (npr. radnim satima ili brojem komada), pa je potrebno odrediti jediničnu stopu troška po radnom satu ili komadu. Model reklasifikacije obično određuje ukupne troškove centra, koji se zatim dele ukupnim brojem sati (na primer) ili komada evidentiranih za taj centar.

:::tip Napomena
Model reklasifikacije koji se povezuje sa poslovnim centrom radi određivanja troškovne stope može zavisiti od teorijskog pristupa na kojem se zasniva sistem kontrolinga. U svakom slučaju, model će biti usmeren na utvrđivanje ukupnih troškova centra, uključujući i dodeljeni udeo indirektnih i zajedničkih troškova.

U detaljima modela reklasifikacije posebnom oznakom određuje se čvor (red) koji prikazuje rezultat reklasifikacije, odnosno ukupne troškove centra. Taj iznos postaje brojilac u obračunu odnosa, na primer ukupni troškovi centra / ukupni radni sati centra, kako bi se odredio trošak po satu.

Na slikama je prikazan primer posebnog modela pod nazivom „Pregled kontrole troškova”. Ovaj model je konfigurisan tako da se kao brojilac odnosa koristi red „Ukupni troškovi funkcionisanja”.
:::

![Slika](/img/it-it/configurations/tables/controlling/analytical-accounting/corporate-centers/corporate-center-model-connection.png)

![Slika](/img/it-it/configurations/tables/controlling/analytical-accounting/corporate-centers/QCC-model.png)

- **VRSTA MERENJA**: moguće je izabrati jednu od tri metode merenja:
  - *fizičkom veličinom*
  - *procentom*
  - *procentom i fizičkom veličinom*.

  Ako izaberemo poslednju opciju kako bismo prikazali sve dostupne mogućnosti, dostupna su sledeća polja:

- **FILTER VREDNOSTI IMENIOCA**: za obračune u procentima ovim poljem određuje se način obračuna imenioca za procentualne pokazatelje. Dostupne su sledeće mogućnosti:
  - *02 Ukupno duguje*
  - *03 Ukupno potražuje*
  - *04 Marže*
  - *05 Na izabranom podkontu*
  - *06 Na izabranom kontu*
  - *07 Isključujući izabrane podkonte*
  - *08 Isključujući izabrane konte*.

  Na primer, izborom šifre 02 „Ukupno duguje” sabiraju se samo dugovne stavke centara navedenih u donjoj levoj mreži. Šifra 03 odnosi se na potražnu stranu, a šifra 04 na marže, odnosno razliku između dugovne i potražne strane. Sledeće mogućnosti omogućavaju i korišćenje desne mreže za odgovarajuće filtriranje podataka centara.

- [**MERNA JEDINICA 1**](/docs/controlling/controlling-parametrization/controlling-specific-settings/measure-units), [**MERNA JEDINICA 2**], **FIKSNI DEO** i **VARIJABILNI DEO**. Reč je o četiri polja povezana sa obračunom prema količini, u kojima se određuje merna jedinica na osnovu koje se preuzima ukupna količina koja se koristi kao imenilac fizičkog pokazatelja. Moguće je navesti dve merne jedinice (MJ1 i MJ2) za obračun dvostrukog pokazatelja, dok se za fiksni i varijabilni deo prvog ili drugog pokazatelja koristi ista merna jedinica.

:::tip Napomena
Obračun na osnovu fizičke veličine, karakterističan za proizvodne centre, omogućava dobijanje troškovnih stopa centara, na primer u evrima po mašinskom satu ili radnom satu. Na taj način mogu se obračunati i proveriti standardni troškovi koji se koriste u obračunu troška proizvoda, za izradu procena troškova u sastavnici ili pripremu ponude.
:::

- **REFERENCA MERENJA CENTRA**: omogućava određivanje polja iz istorije fizičkih kretanja koja treba filtrirati radi utvrđivanja količina za određeni centar. Kao kriterijum može se koristiti izvorni centar, odredišni centar ili, uz prioritet odredišta, izvorni centar ako odredište nije dostupno.

## Lokacije

U slučaju instalacije sa različitim geografskim lokacijama, odeljak Lokacije može se koristiti za definisanje opisa na drugim jezicima. Ti opisi se, na primer, mogu koristiti pri štampanju analize centara troška.