---
title: Vrste kontrolnog plana
sidebar_position: 8
---

Tablica se nalazi na putanji **Tablice > Kvaliteta > Kontrola artikala > Vrste kontrolnog plana**.

U ovoj tablici moguće je definirati *vrste kontrolnih planova*.

*Vrsta kontrolnog plana* sastavni je dio jedinstvene šifre *kontrolnog plana*, zajedno s *godinom*, *brojem* i *revizijom*.

Neke primjere upotrebe *vrsta kontrolnih planova* možemo pronaći u sljedećim evidencijama:
> **Kontrolni planovi** – u *podacima zaglavlja*;
> **Parametri kontrole artikala** – na kartici *Općenito*;

kao i u svim evidencijama u kojima se upotrebljava *kontrolni plan*.

Tablica sadrži vrijednosti koje je unaprijed definirao sustav i nije ih moguće mijenjati ni brisati. Zadane vrijednosti su:

| Šifra | Opis |
|:--|:--|
| MInt | Interni |
| MNNr | Nestandardizirani |
| MNrm | Standardizirani |
| MUff | Službeni |

Tablica omogućuje unos novih zapisa ili pretraživanje postojećih zapisa radi njihova pregleda, izmjene ili brisanja (ako je označeno da se mogu brisati).

**Pretraživanje vrsta kontrolnih planova**

Obrazac se sastoji od područja za filtriranje i područja s rezultatima. Nakon postavljanja željenih filtara dovoljno je kliknuti gumb **Traži** kako bi se rezultati prikazali u tablici s rezultatima.

**Unos vrsta kontrolnih planova**

Za unos novih *vrsta kontrolnih planova* potrebno je kliknuti prvi prazan redak u tablici ili pritisnuti gumb **Novo**.

Za novi zapis potrebno je unijeti barem obvezna polja koja zahtijeva program: **Šifra** i **Opis**.

## Vrste kontrolnih planova

Ovo je popis u koji se unose osnovni podaci o *vrstama kontrolnih planova*.

Popis se sastoji od sljedećih podataka:

> **Šifra**: šifra *vrste kontrolnog plana*.
> **Opis**: opis *vrste kontrolnog plana*.
> **Numeracija**: šifra *numeracije*.
> **Može se brisati (obnova)**: označava može li se *vrsta kontrolnog plana* brisati.
> **Napomene**: slobodne napomene.

### Dodatni podaci

Moguće je unijeti [dodatne podatke](/docs/configurations/utility/extra-data/extradata/search-extradata) za *vrstu kontrolnog plana*.

Ti se *dodatni podaci* mogu naslijediti u *kontrolnim planovima* određene vrste.

### Planirana ispitivanja

Moguće je definirati opće [vrste ispitivanja](/docs/configurations/tables/quality/item-control/test-type) za *vrstu kontrolnog plana*.

Te se *vrste ispitivanja* nasljeđuju u *kontrolnim planovima* određene vrste.

#### Atributi planiranih ispitivanja

Moguće je unijeti opće [dodatne podatke](/docs/configurations/utility/extra-data/extradata/search-extradata) za *planirano ispitivanje*.

Ti se *dodatni podaci* mogu naslijediti u *ispitivanjima* dokumenata u kojima je predviđena upotreba atributa.

#### Planirane testne konfiguracije

Sadrži [dodatne podatke](/docs/configurations/utility/extra-data/extradata/search-extradata) potrebne operaterima za pripremu svih instrumenata potrebnih za početak određenog ispitivanja. Mogu se smatrati potrebnim konfiguracijskim postavkama i operativnim informacijama koje prethode provedbi ispitivanja.

Ti se *dodatni podaci* mogu naslijediti u *ispitivanjima* dokumenata za koja je predviđena konfiguracija.

Za sve što nije detaljno opisano u ovom dokumentu, a odnosi se na zajednički način rada obrazaca, pogledajte sljedeću poveznicu: [Zajedničke funkcionalnosti, gumbi i polja](/docs/guide/common).