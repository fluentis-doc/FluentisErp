---
title: Novi obračun
sidebar_position: 3
---

# Novi obračun

Forma se otvara putem putanje **Prodaja > Trgovački predstavnici > Obračun trgovačkih predstavnika > Obračun trgovačkih predstavnika** klikom na dugme **Novo**.

## Obračuni

Unos novog obračuna zahteva sledeće podatke:

- *Predstavnik* koji je vlasnik obračuna (mora imati definisan podrazumevani tip i način plaćanja u svojoj kartici).
- *Broj* i *Godina* automatski se popunjavaju.
- *Datum obračuna* (podrazumevano se predlaže trenutni datum).
- *Opis obračuna* (na primer: obračun za prvi kvartal 2012. godine).
- *Mesec/Godina* koji se koriste za obračun Enasarco doprinosa.

### Sažetak

Ova kartica prikazuje sve elemente obračuna provizije.

#### Sažetak provizija

Prikazani su ukupni iznosi provizija po valutama.

Dostupna su sledeća polja:

> **Valuta**: valuta obračuna, podrazumevano preuzeta iz kartice predstavnika.  
> **Kurs**: kurs koji se koristi za obračun.  
> **Datum kursa**: datum važenja kursa.  
> **PDV**: stopa PDV-a koja se primenjuje na osnovicu provizije, podrazumevano preuzeta iz kartice predstavnika.  
> **Ukupan dokument**: ukupan iznos obračuna.

#### Sažetak obračuna poreza po odbitku

Ovaj pregled omogućava prikaz:

- primljenih naknada koje se smatraju avansima za tekući obračun;
- *Vrste poreza* koja se primenjuje;
- pripadajućih procenata i iznosa poreza po odbitku.

*Vrsta poreza* preuzima se prioritetno iz kartice predstavnika ili iz kategorije predstavnika.

Ako je aktivirana opcija **Ručni obračun**, podaci za upravljanje porezom mogu se unositi ručno.

### Plaćanja

Na ovoj kartici sistem prikazuje podrazumevani način plaćanja definisan u kartici predstavnika u okviru **Liste plaćanja**, koji se po potrebi može menjati.

U tabeli **Lista dospeća** automatski se obračunavaju odgovarajući rokovi dospeća.

:::important
Ako se menjaju podaci obračuna, potrebno je ručno uskladiti iznose dospeća kako bi odgovarali stvarnom iznosu za isplatu.
:::

#### Specifična dugmad

##### Umetni plaćanja

Postavlja kursor za unos novog reda u listu načina plaćanja.

##### Obriši plaćanja

Briše izabrane načine plaćanja.

##### Umetni dospeća

Postavlja kursor za unos novog reda u listu dospeća obračuna.

##### Obriši dospeća

Briše izabrane rokove dospeća.

## Računi / Otpremnice / Narudžbine

U zavisnosti od vrednosti polja *Vrsta dokumenta koja se koristi za osnovicu provizije* definisane u *Šifarniku predstavnika*, prikazuje se odgovarajuća kartica:

- **Računi**
- **Otpremnice**
- **Narudžbine**

U gornjoj tabeli rezultata, nakon izvršene pretrage, prikazuju se dokumenti koji ulaze u obračun provizije izabranog predstavnika.

Pomoću sledećih funkcija moguće je ručno upravljati dokumentima uključenim u obračun:

- **Poveži dokument sa obračunom**
- **Obriši veze sa obračunom**

Na taj način moguće je:

- ručno dodati nove dokumente u obračun;
- ukloniti dokumente iz tekućeg obračuna kako bi bili uključeni u naredni obračunski period.

### Specifična dugmad

##### Traži

Pokreće pretragu dokumenata uključenih u aktivni obračun.

##### Poveži dokument sa obračunom

Otvara prozor za ručnu pretragu i dodavanje dokumenata u aktivni obračun.

##### Obriši veze sa obračunom

Uklanja izabrani dokument iz aktivnog obračuna.

## Sažetak i dodatne informacije

Funkcionalnost **Novi obračun** omogućava kreiranje i upravljanje obračunima provizija trgovačkih predstavnika, uključujući obračun provizija, poreza po odbitku, PDV-a i rokova plaćanja.

Povezane funkcionalnosti:

- Obračun trgovačkih predstavnika
- Kartica predstavnika
- Upravljanje provizijama
- Naknade predstavnicima
- Isplate i obračun poreza po odbitku

Za više informacija o zajedničkim funkcijama formi pogledajte: [Funkcionalnosti, dugmad i polja](/docs/guide/common).