---
title: Kreiranje i upravljanje dospijećima plaćanja
sidebar_position: 5
---

Obrazac se nalazi na putu **Riznica > Dospijeća plaćanja > Kreiraj dospijeće plaćanja** i omogućuje *ručno* kreiranje te upravljanje, izmjenu/pregled dospijeća plaćanja.

## Kako kreirati novo dospijeće plaćanja

:::tip[Pažnja]
U nastavku su prikazani koraci za ***ručno***  kreiranje dospijeća plaćanja. Međutim, **ovaj način se rijetko koristi. Preporučuje se korištenje automatskih procedura:**

[**Preuzimanje vrijednosnih papira iz dospijeća plaćanja**](/docs/treasury/bills-holding/procedures/bills-acquisition-from-maturity-values)

[**Preuzimanje vrijednosnih papira iz računa**](/docs/treasury/bills-holding/procedures/bills-acquisition-from-invoices)
:::

Iz ovog obrasca:

1. Odaberite **Vrsta računa**: program će automatski dodijeliti **broj** prema brojčaniku povezanom s odabranom vrstom dospijeća i prema **godini** na koju se odnosi, koja je zadano postavljena kao godina sistemskog datuma.
 
2. Ispunite polja **Dužnik** (s kontom glavne knjige osobe na koju glasi dospijeće plaćanja) i **Krajnji Rok** (s datumom dospijeća tog dospijeća plaćanja).

3. Spremite zaglavlje dospijeća plaćanja.

4. Unesite **Iznos u valuti** i **Iznos računa**  ručno, ili ih izračunaj automatski na temelju stavki/dospijeća odabranih iz kartica **referenci dospijeća/stavki**. Polje za iznos takse nije u upotrebi. U karticama referenci stavki ili dospijeća možeš koristiti naredbe **Unos stavki ili Unos dospijećae** kako bi pretražio i dodao stavke ili dospijeća u dospijeće plaćanja.

**Datum valute** je datum za primjenu tečaja u slučaju dospijeća plaćanja u valuti. Predlaže se jednak datumu dospijeća plaćanja.

Obvezni elementi koje je potrebno navesti su datum dospijeća, valuta i tečaj, kupac-dužnik te mjesto (popunjava se na temelju matičnih podataka povezanih s kupcem).

**Agent** je jednostavno referentno polje glavnog agenta izvorne fakture.

**Status računa** predlaže se kao *izdano* i automatski će se ažurirati na temelju operacija koje će se izvršiti za dospijeće plaćanja.

Oznaka **Ispisano** nije u upotrebi, dok *proknjiženo* i *odobreno* ovise o izvršenim postupcima knjiženja i odobrenja dospijeća plaćanja.

Polje **Referenca** je slobodno napomensko polje koje se prenosi u datoteku kao referenca operacije.

### Kartica prezentacija

Sadrži dva dijela:

**Banka**, gdje su prikazani podaci banke za naplatu kao što su **Šifre ABI/CAB** (obvezni za unos dospijeća plaćanja u platnu listu), uz *broj računa* (IBAN i SWIFT) i *CIN*, koji su potrebni samo u slučaju dospijeća plaćanja tipa RID.

**Podaci o prezentaciji**
Prikazuje podatke o platnoj listi kojom je dospijeće plaćanja predano banci (na primjer, uz odgodu ili za naplatu).

### Kartica Referencije dospijeća

Ovdje se mogu vidjeti reference na izvornu fakturu (u slučaju korištenja postupka *preuzimanja dospijeća plaćanja prema dospijećima*), ili se mogu ručno dodavati dospijeća pomoću gumba *unos dospijeća*. U ovom slučaju moguće je unijeti i dospijeća koja nisu povezana s vrstama plaćanja kojima se upravlja dospijećima plaćanja (npr. *bankovne potvrde*), kao i dospijeća povezana s odobrenjima.

### Kartica Referencije stavki

Ovdje se mogu vidjeti reference na izvorne stavke (u slučaju preuzimanja dospijeća plaćanja prema stavkama), ili se ručno mogu dodavati stavke pomoću gumba *unos stavki*.

Također je moguće unijeti i stavke koje nisu povezane s vrstama plaćanja kojima se upravlja dospijećima plaćanja (npr. *bankovne potvrde*), kao i stavke povezane s odobrenjima.

### Kartica Ostalo
Ovdje se mogu pohraniti reference na girante i avaliste.




