---
title: Parametri kontrole artikala
sidebar_position: 1
---

Parametri se nalaze na putanji **Parametri > Kvaliteta > Parametri kontrole artikala**.

Podaci iz ove postavke koriste se za predlaganje informacija u sljedećim evidencijama:

- **Tehnička uputstva**
- **Kontrolni planovi**
- **Kontrola artikala**
- **Certifikati analize**

#### Poseban gumb

**Spremi**: omogućuje spremanje izmijenjenih podataka.

## Općenito

Na ovoj je kartici moguće unijeti podatke koji će se prema zadanim postavkama predlagati u dokumentima modula *Kontrola artikala*.

### Vrste ispitivanja

U ovom je proširivom odjeljku moguće unijeti podatke koji će se predlagati u evidenciji *Vrste ispitivanja*.

Moguće je unijeti sljedeće podatke:

- **Vrsta vrijednosti**: vrsta vrijednosti koja će se predlagati prilikom unosa *vrste ispitivanja*.
- **Vrsta granice**: vrsta granice koja će se predlagati prilikom unosa *vrste ispitivanja*.

### Tehnička uputstva

U ovom je proširivom odjeljku moguće unijeti podatke koji će se predlagati u evidenciji *Tehnička uputstva*.

Moguće je unijeti sljedeće podatke:

- **Vrsta tehničkog uputstva**: vrsta tehničkog uputstva koja će se predlagati prilikom unosa *tehničkog uputstva*.
- **Odgovorna osoba**: *zaposlenik* koji će se predlagati kao odgovorna osoba prilikom unosa *tehničkog uputstva*.
- **Vrsta izjave u artiklima**: *vrsta izjave* koja će se predlagati prilikom unosa *povezanog artikla* u *tehničko uputstvo*.
- **Vrsta izjave pri ispisu**: *vrsta izjave* koja će se predlagati u polju *Vrsta izjave za ispis ako je artikl nema* prilikom ispisa *tehničkog uputstva*.

### Kontrolni planovi

U ovom je proširivom odjeljku moguće unijeti podatke koji će se predlagati u evidenciji *Kontrolni planovi*.

Moguće je unijeti sljedeće podatke:

- **Vrsta kontrolnog plana**: vrsta kontrolnog plana koja će se predlagati prilikom unosa *kontrolnog plana*.
- **Odgovorna osoba**: *zaposlenik* koji će se predlagati kao odgovorna osoba prilikom unosa *kontrolnog plana*.

### Certifikati analize

U ovom je proširivom odjeljku moguće unijeti podatke koji će se predlagati u evidenciji *Certifikati analize*.

Moguće je unijeti sljedeće podatke:

- **Vrsta certifikata**: *vrsta certifikata analize* koja će se predlagati prilikom unosa *certifikata analize*.
- **Odgovorna osoba**: *zaposlenik* koji će se predlagati kao odgovorna osoba prilikom unosa *certifikata analize*.

## Kontrola artikala

Na ovoj je kartici moguće unijeti podatke:

> - koji će se prema zadanim postavkama predlagati u evidenciji *Kontrola artikala*;
> - za definiranje različitih boja koje se koriste u filtru pretraživanja radi prepoznavanja različitih statusa *kontrole*;
> - za postavljanje parametara upravljanja;
> - za automatsko pretraživanje i povezivanje *kontrolnih planova* s *kontrolom artikla*.

- **Omogući višestruko evidentiranje vrijednosti**: određuje je li omogućeno evidentiranje više vrijednosti za svako ispitivanje u svim vrstama dokumenata.
- **Automatsko odobravanje evidentiranih vrijednosti**: određuje hoće li se *ispitivanje* automatski *odobriti* nakon evidentiranja *vrijednosti* i automatskog dodjeljivanja *rezultata*.
- **Prijedlog negativnog rezultata**: popis vrijednosti koje je unaprijed definirao sustav, a koje određuju način utvrđivanja nesukladnosti *ispitivanja*.

  > Ova se metoda primjenjuje samo pri evidentiranju *numeričkih* ispitivanja u okviru *višestrukog evidentiranja vrijednosti*. Zadane vrijednosti su:
  >
  > - *pri prvoj evidentiranoj nesukladnoj vrijednosti*;
  > - *na temelju aritmetičke sredine evidentiranih vrijednosti (samo numeričke vrijednosti)*.

- **Vrsta negativnog rezultata**: predložena *vrsta rezultata* u slučaju nesukladnih *ispitivanja*.
- **Vrsta pozitivnog rezultata**: predložena *vrsta rezultata* u slučaju sukladnih *ispitivanja*.

### Vrste dokumenata za uvoz

U ovom je proširivom odjeljku/popisu moguće unijeti podatke koji se uzimaju u obzir tijekom postupka *Uvoz artikala za kontrolu* i predlažu u evidenciji *Kontrola artikla*.

Tablica sadrži vrste dokumenata kojima upravlja modul *Kontrola artikala*.

Riječ je o vrstama koje je unaprijed definirao sustav. Nije moguće dodavati nove vrste ni brisati postojeće. Zadane vrijednosti su:

> - *Prijem robe*;
> - *Primka*;
> - *Ulazni račun*;
> - *Deklaracija proizvodnje*;
> - *Faze naloga za proizvodnju*;
> - *Povrat od podizvođača*;
> - *Skladišno knjiženje ulaza*.

Za svaku vrstu dokumenta na popisu moguće je unijeti sljedeće podatke:

- **Zad.**: određuje vrstu dokumenta koja se predlaže u filtrima pretraživanja. Može se odabrati samo jedna vrsta ili nijedna.
- **Detalj artikla**: popis vrijednosti koje je unaprijed definirao sustav, a koje određuju razinu detalja *artikla* koju treba kontrolirati za određenu vrstu dokumenta. Zadane vrijednosti su:
  - *Nijedan* – redak *artikla* koji se razmatra neće sadržavati podatke o detaljima;
  - *Lot* – najviša razina detalja za redak *artikla* koji se razmatra bit će *lot*;
  - *S.N.* – najviša razina detalja za redak *artikla* koji se razmatra bit će *serijski broj*;
  - *UJ* – najviša razina detalja za redak *artikla* koji se razmatra bit će *utovarna jedinica*.

- **Višestr.**: određuje hoće li za određenu vrstu dokumenta biti omogućeno *višestruko evidentiranje vrijednosti* u modulu *Kontrola artikala*.

  > Da bi se ova postavka primjenjivala, potrebno je aktivirati opći parametar *Omogući višestruko evidentiranje vrijednosti*.

- **Vrsta kontrole**: *vrsta kontrole* koja će se predlagati prilikom unosa *kontrole artikala* za određenu vrstu dokumenta.
- **Vrsta kontrolnog plana**: tijekom postupka *Uvoz artikala za kontrolu*, osim za proizvodne vrste dokumenata (*Proizvodna deklaracija* i *Operacija naloga za proizvodnju*), ovo je *vrsta kontrolnog plana* koja ima najviši prioritet pri pretraživanju *kontrolnog plana* koji će se povezati s *kontrolom artikala*.
- **Opis vrste kontrole**: opis *vrste kontrole*.
- **Opis vrste kontrolnog plana**: opis *vrste kontrolnog plana*.

### Boje redaka kontrole artikala

Na ovom je popisu moguće definirati različite boje za prepoznavanje pojedinih statusa *kontrole artikla*.

Te se boje primjenjuju u *filtru kontrola artikala*. Popis sadrži sljedeće podatke:

- **Vrsta**: status *kontrole artikla* kojem se dodjeljuju boje.

  > Tablica sadrži vrijednosti koje je unaprijed definirao sustav. Nije moguće dodavati nove vrijednosti, brisati postojeće ni mijenjati ih. Zadane vrijednosti su:
  >
  > - *Artikli koji ne podliježu kontroli*
  > - *Kontrole bez kontrolnog plana*
  > - *Kontrole s više kontrolnih planova*
  > - *Kontrole za koje još nije provedeno mjerenje*
  > - *Kontrole s nesukladnim rezultatima*
  > - *Kontrole koje još treba validirati*
  > - *Već validirane kontrole*

- **Pozadina**: boja koja se primjenjuje na pozadinu retka *kontrole artikla* s određenim statusom.
- **Tekst**: boja koja se primjenjuje na tekst retka *kontrole artikla* s određenim statusom.

### Prilagodba podataka prema vrsti dokumenta

Na ovom je popisu moguće dodati *svojstva* izvornog dokumenta na popis podataka u evidenciji *Kontrola artikla*.

Tablica sadrži iste vrste dokumenata kao i odjeljak **Vrste dokumenata za uvoz**.

Riječ je o vrstama koje je unaprijed definirao sustav. Nije moguće dodavati nove vrste ni brisati postojeće.

Za svaku vrstu podatka predviđeno je pet polja: *Tekst*, *Da/Ne*, *Cijeli broj*, *Decimalni broj* i *Datum*.

Dvostrukim klikom na ćeliju moguće je odabrati željeno *svojstvo* dokumenta.

:::tip **Primjer:**
Za vrstu dokumenta *Ulazni račun* moguće je dodati vrijednost svojstva zaglavlja *Vaša referenca*.

Budući da je *Vaša referenca* tekstualni podatak, dvostrukim klikom miša na stupac *Tekst 01* otvara se pomoć za odabir svojstava dokumenta *Ulazni račun*.

Proširite stavku *Invoice (Račun)*, odaberite svojstvo *Your reference (Vaša referenca)* i kliknite gumb *Odaberi*.

U ćeliji u kojoj je izvršen odabir prikazat će se svojstvo *YourReference*.
:::

### Prilagodba zaglavlja stupaca prema vrsti dokumenta

Na ovom je popisu moguće odrediti *naslov svojstva* koji odgovara odabranim *svojstvima* iz odjeljka **Prilagodba podataka prema vrsti dokumenta** i koji će se prikazivati na popisu podataka u evidenciji *Kontrola artikla*.

Tablica sadrži iste vrste dokumenata kao i odjeljak **Vrste dokumenata za uvoz**.

Riječ je o vrstama koje je unaprijed definirao sustav. Nije moguće dodavati nove vrste ni brisati postojeće.

Za svaku vrstu podatka predviđeno je pet polja: *Tekst*, *Da/Ne*, *Cijeli broj*, *Decimalni broj* i *Datum*.

Dvostrukim klikom na ćeliju moguće je odabrati željenu *stavku rječnika* koja će se prikazivati kao zaglavlje.

:::tip **Primjer:**
Za vrstu dokumenta *Ulazni račun* moguće je odrediti zaglavlje koje odgovara prethodno navedenom primjeru vrijednosti svojstva zaglavlja *Vaša referenca*.

Dvostrukim klikom miša na stupac *Tekst 01* ili ručnim unosom *stavke rječnika* unesite *Vaša referenca*.
:::

Za sve što nije detaljno opisano u ovom dokumentu, a odnosi se na zajedničke funkcionalnosti obrazaca, pogledajte sljedeću poveznicu [Zajedničke funkcionalnosti, gumbi i polja](/docs/guide/common).