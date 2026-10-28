---
title: Parametri kontrole artikala
sidebar_position: 1
---

Parametri se nalaze na putanji **Parametri > Kvalitet > Parametri kontrole artikala**.

Podaci iz ovog podešavanja koriste se za predlaganje informacija u sledećim evidencijama:

- **Tehnička uputstva**
- **Kontrolni planovi**
- **Kontrola artikala**
- **Sertifikati analize**

#### Posebno dugme

**Sačuvaj**: omogućava čuvanje izmenjenih podataka.

## Opšte

Na ovoj kartici moguće je uneti podatke koji će se podrazumevano predlagati u dokumentima modula *Kontrola artikala*.

### Vrste ispitivanja

U ovom proširivom odeljku moguće je uneti podatke koji će se predlagati u evidenciji *Vrste ispitivanja*.

Moguće je uneti sledeće podatke:

- **Vrsta vrednosti**: vrsta vrednosti koja će se predlagati prilikom unosa *vrste ispitivanja*.
- **Vrsta granice**: vrsta granice koja će se predlagati prilikom unosa *vrste ispitivanja*.

### Tehnička uputstva

U ovom proširivom odeljku moguće je uneti podatke koji će se predlagati u evidenciji *Tehnička uputstva*.

Moguće je uneti sledeće podatke:

- **Vrsta tehničkog uputstva**: vrsta tehničkog uputstva koja će se predlagati prilikom unosa *tehničkog uputstva*.
- **Odgovorno lice**: *zaposleni* koji će se predlagati kao odgovorno lice prilikom unosa *tehničkog uputstva*.
- **Vrsta izjave u artiklima**: *vrsta izjave* koja će se predlagati prilikom unosa *povezanog artikla* u *tehničko uputstvo*.
- **Vrsta izjave pri štampanju**: *vrsta izjave* koja će se predlagati u polju *Vrsta izjave za štampanje ako je artikal nema* prilikom štampanja *tehničkog uputstva*.

### Kontrolni planovi

U ovom proširivom odeljku moguće je uneti podatke koji će se predlagati u evidenciji *Kontrolni planovi*.

Moguće je uneti sledeće podatke:

- **Vrsta kontrolnog plana**: vrsta kontrolnog plana koja će se predlagati prilikom unosa *kontrolnog plana*.
- **Odgovorno lice**: *zaposleni* koji će se predlagati kao odgovorno lice prilikom unosa *kontrolnog plana*.

### Sertifikati analize

U ovom proširivom odeljku moguće je uneti podatke koji će se predlagati u evidenciji *Sertifikati analize*.

Moguće je uneti sledeće podatke:

- **Vrsta sertifikata**: *vrsta sertifikata analize* koja će se predlagati prilikom unosa *sertifikata analize*.
- **Odgovorno lice**: *zaposleni* koji će se predlagati kao odgovorno lice prilikom unosa *sertifikata analize*.

## Kontrola artikala

Na ovoj kartici moguće je uneti podatke:

> - koji će se podrazumevano predlagati u evidenciji *Kontrola artikala*;
> - za definisanje različitih boja koje se koriste u filteru pretrage radi prepoznavanja različitih statusa *kontrole*;
> - za podešavanje parametara upravljanja;
> - za automatsku pretragu i povezivanje *kontrolnih planova* sa *kontrolom artikla*.

- **Omogući višestruko evidentiranje vrednosti**: određuje da li je omogućeno evidentiranje više vrednosti za svako ispitivanje u svim vrstama dokumenata.
- **Automatsko odobravanje evidentiranih vrednosti**: određuje da li će se *ispitivanje* automatski *odobriti* nakon evidentiranja *vrednosti* i automatskog dodeljivanja *rezultata*.
- **Predlog negativnog rezultata**: spisak vrednosti koje je sistem unapred definisao i koje određuju način utvrđivanja neusaglašenosti *ispitivanja*.

  > Ova metoda primenjuje se samo pri evidentiranju *numeričkih* ispitivanja u okviru *višestrukog evidentiranja vrednosti*. Podrazumevane vrednosti su:
  >
  > - *pri prvoj evidentiranoj neusaglašenoj vrednosti*;
  > - *na osnovu aritmetičke sredine evidentiranih vrednosti (samo numeričke vrednosti)*.

- **Vrsta negativnog rezultata**: predložena *vrsta rezultata* u slučaju neusaglašenih *ispitivanja*.
- **Vrsta pozitivnog rezultata**: predložena *vrsta rezultata* u slučaju usaglašenih *ispitivanja*.

### Vrste dokumenata za uvoz

U ovom proširivom odeljku odnosno spisku moguće je uneti podatke koji se uzimaju u obzir tokom postupka *Uvoz artikala za kontrolu* i predlažu u evidenciji *Kontrola artikla*.

Tabela sadrži vrste dokumenata kojima upravlja modul *Kontrola artikala*.

Reč je o vrstama koje je sistem unapred definisao. Nije moguće dodavati nove vrste niti brisati postojeće. Podrazumevane vrednosti su:

> - *Prijem robe*;
> - *Primka*;
> - *Ulazna faktura*;
> - *Deklaracija proizvodnje*;
> - *Faze naloga za proizvodnju*;
> - *Povrat od podizvođača*;
> - *Skladišno knjiženje ulaza*.

Za svaku vrstu dokumenta na spisku moguće je uneti sledeće podatke:

- **Podr.**: određuje vrstu dokumenta koja se predlaže u filterima pretrage. Može se izabrati samo jedna vrsta ili nijedna.
- **Detalj artikla**: spisak vrednosti koje je sistem unapred definisao i koje određuju nivo detalja *artikla* koji treba kontrolisati za određenu vrstu dokumenta. Podrazumevane vrednosti su:
  - *Nijedan* – red *artikla* koji se razmatra neće sadržati podatke o detaljima;
  - *Lot* – najviši nivo detalja za red *artikla* koji se razmatra biće *lot*;
  - *S.N.* – najviši nivo detalja za red *artikla* koji se razmatra biće *serijski broj*;
  - *UJ* – najviši nivo detalja za red *artikla* koji se razmatra biće *utovarna jedinica*.

- **Višestr.**: određuje da li će za određenu vrstu dokumenta biti omogućeno *višestruko evidentiranje vrednosti* u modulu *Kontrola artikala*.

  > Da bi se ova postavka primenjivala, potrebno je aktivirati opšti parametar *Omogući višestruko evidentiranje vrednosti*.

- **Vrsta kontrole**: *vrsta kontrole* koja će se predlagati prilikom unosa *kontrole artikala* za određenu vrstu dokumenta.
- **Vrsta kontrolnog plana**: tokom postupka *Uvoz artikala za kontrolu*, osim za proizvodne vrste dokumenata (*Proizvodna deklaracija* i *Operacija naloga za proizvodnju*), ovo je *vrsta kontrolnog plana* koja ima najviši prioritet pri pretrazi *kontrolnog plana* koji će se povezati sa *kontrolom artikala*.
- **Opis vrste kontrole**: opis *vrste kontrole*.
- **Opis vrste kontrolnog plana**: opis *vrste kontrolnog plana*.

### Boje redova kontrole artikala

Na ovom spisku moguće je definisati različite boje za prepoznavanje pojedinih statusa *kontrole artikla*.

Te boje se primenjuju u *filteru kontrola artikala*. Spisak sadrži sledeće podatke:

- **Vrsta**: status *kontrole artikla* kojem se dodeljuju boje.

  > Tabela sadrži vrednosti koje je sistem unapred definisao. Nije moguće dodavati nove vrednosti, brisati postojeće niti ih menjati. Podrazumevane vrednosti su:
  >
  > - *Artikli koji ne podležu kontroli*
  > - *Kontrole bez kontrolnog plana*
  > - *Kontrole sa više kontrolnih planova*
  > - *Kontrole za koje merenje još nije obavljeno*
  > - *Kontrole sa neusaglašenim rezultatima*
  > - *Kontrole koje još treba validirati*
  > - *Već validirane kontrole*

- **Pozadina**: boja koja se primenjuje na pozadinu reda *kontrole artikla* sa određenim statusom.
- **Tekst**: boja koja se primenjuje na tekst reda *kontrole artikla* sa određenim statusom.

### Prilagođavanje podataka prema vrsti dokumenta

Na ovom spisku moguće je dodati *svojstva* izvornog dokumenta na spisak podataka u evidenciji *Kontrola artikla*.

Tabela sadrži iste vrste dokumenata kao i odeljak **Vrste dokumenata za uvoz**.

Reč je o vrstama koje je sistem unapred definisao. Nije moguće dodavati nove vrste niti brisati postojeće.

Za svaku vrstu podatka predviđeno je pet polja: *Tekst*, *Da/Ne*, *Ceo broj*, *Decimalni broj* i *Datum*.

Dvostrukim klikom na ćeliju moguće je izabrati željeno *svojstvo* dokumenta.

:::tip **Primer:**
Za vrstu dokumenta *Ulazna faktura* moguće je dodati vrednost svojstva zaglavlja *Vaša referenca*.

Budući da je *Vaša referenca* tekstualni podatak, dvostrukim klikom miša na kolonu *Tekst 01* otvara se pomoć za izbor svojstava dokumenta *Ulazna faktura*.

Proširite stavku *Invoice (Račun)*, izaberite svojstvo *Your reference (Vaša referenca)* i kliknite na dugme *Izaberi*.

U ćeliji u kojoj je izvršen izbor prikazaće se svojstvo *YourReference*.
:::

### Prilagođavanje zaglavlja kolona prema vrsti dokumenta

Na ovom spisku moguće je odrediti *naslov svojstva* koji odgovara izabranim *svojstvima* iz odeljka **Prilagođavanje podataka prema vrsti dokumenta** i koji će se prikazivati na spisku podataka u evidenciji *Kontrola artikla*.

Tabela sadrži iste vrste dokumenata kao i odeljak **Vrste dokumenata za uvoz**.

Reč je o vrstama koje je sistem unapred definisao. Nije moguće dodavati nove vrste niti brisati postojeće.

Za svaku vrstu podatka predviđeno je pet polja: *Tekst*, *Da/Ne*, *Ceo broj*, *Decimalni broj* i *Datum*.

Dvostrukim klikom na ćeliju moguće je izabrati željenu *stavku rečnika* koja će se prikazivati kao zaglavlje.

:::tip **Primer:**
Za vrstu dokumenta *Ulazna faktura* moguće je odrediti zaglavlje koje odgovara prethodno navedenom primeru vrednosti svojstva zaglavlja *Vaša referenca*.

Dvostrukim klikom miša na kolonu *Tekst 01* ili ručnim unosom *stavke rečnika* unesite *Vaša referenca*.
:::

Za sve što nije detaljno opisano u ovom dokumentu, a odnosi se na zajedničke funkcionalnosti obrazaca, pogledajte sledeću vezu: [Zajedničke funkcionalnosti, dugmad i polja](/docs/guide/common).