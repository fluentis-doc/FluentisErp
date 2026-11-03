---
title: Tipovi kontrolnih planova
sidebar_position: 8
---

Tabela se nalazi na putanji **Tablice > Kvalitet > Kontrola artikala > Tipovi kontrolnih planova**.

U ovoj tabeli moguće je definisati *tipove kontrolnih planova*.

*Tip kontrolnog plana* sastavni je deo jedinstvene šifre *kontrolnog plana*, zajedno sa *godinom*, *brojem* i *revizijom*.

Neke primere upotrebe *tipova kontrolnih planova* možemo pronaći u sledećim evidencijama:
> **Kontrolni planovi** – u *podacima zaglavlja*;
> **Parametri kontrole artikala** – na kartici *Opšte*;

kao i u svim evidencijama u kojima se koristi *kontrolni plan*.

Tabela sadrži vrednosti koje je sistem unapred definisao i nije ih moguće menjati ni brisati. Podrazumevane vrednosti su:

| Šifra | Opis |
|:--|:--|
| MInt | Interni |
| MNNr | Nestandardizovani |
| MNrm | Standardizovani |
| MUff | Službeni |

Tabela omogućava unos novih zapisa ili pretraživanje postojećih zapisa radi njihovog pregleda, izmene ili brisanja (ako je označeno da se mogu brisati).

**Pretraživanje tipova kontrolnih planova**

Obrazac se sastoji od područja za filtriranje i područja sa rezultatima. Nakon postavljanja željenih filtera dovoljno je kliknuti na dugme **Traži** kako bi se rezultati prikazali u tabeli sa rezultatima.

**Unos tipova kontrolnih planova**

Za unos novih *tipova kontrolnih planova* potrebno je kliknuti na prvi prazan red u tabeli ili pritisnuti dugme **Novo**.

Za novi zapis potrebno je uneti barem obavezna polja koja program zahteva: **Šifra** i **Opis**.

## Tipovi kontrolnih planova

Ovo je lista u koju se unose osnovni podaci o *tipovima kontrolnih planova*.

Lista se sastoji od sledećih podataka:

> **Šifra**: šifra *tipa kontrolnog plana*.
> **Opis**: opis *tipa kontrolnog plana*.
> **Numeracija**: šifra *numeracije*.
> **Može se brisati (obnova)**: označava da li se *tip kontrolnog plana* može brisati.
> **Napomene**: slobodne napomene.

### Dodatni podaci

Moguće je uneti [dodatne podatke](/docs/configurations/utility/extra-data/extradata/search-extradata) za *tip kontrolnog plana*.

Ti *dodatni podaci* mogu se naslediti u *kontrolnim planovima* određenog tipa.

### Planirana ispitivanja

Moguće je definisati opšte [tipove ispitivanja](/docs/configurations/tables/quality/item-control/test-type) za *tip kontrolnog plana*.

Ti *tipovi ispitivanja* nasleđuju se u *kontrolnim planovima* određenog tipa.

#### Atributi planiranih ispitivanja

Moguće je uneti opšte [dodatne podatke](/docs/configurations/utility/extra-data/extradata/search-extradata) za *planirano ispitivanje*.

Ti *dodatni podaci* mogu se naslediti u *ispitivanjima* dokumenata u kojima je predviđena upotreba atributa.

#### Planirane testne konfiguracije

Sadrže [dodatne podatke](/docs/configurations/utility/extra-data/extradata/search-extradata) potrebne operaterima za pripremu svih instrumenata potrebnih za početak određenog ispitivanja. Mogu se smatrati potrebnim konfiguracionim podešavanjima i operativnim informacijama koje prethode sprovođenju ispitivanja.

Ti *dodatni podaci* mogu se naslediti u *ispitivanjima* dokumenata za koja je predviđena konfiguracija.

Za sve što nije detaljno opisano u ovom dokumentu, a odnosi se na zajednički način rada obrazaca, pogledajte sledeću poveznicu: [Zajedničke funkcionalnosti, dugmad i polja](/docs/guide/common).