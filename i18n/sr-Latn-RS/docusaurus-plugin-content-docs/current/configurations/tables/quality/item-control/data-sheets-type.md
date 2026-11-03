---
title: Tipovi tehničkih uputstava
sidebar_position: 4
---

Tabela se nalazi na putanji **Tablice > Kvalitet > Kontrola artikala > Tipovi tehničkih uputstava (liste podataka)**.

U ovoj tabeli moguće je definisati *tipove tehničkih uputstava*.

*Tip tehničkog uputstva* sastavni je deo jedinstvene šifre *tehničkog uputstva*, zajedno sa *godinom*, *brojem* i *revizijom*.

Neke primere upotrebe *tipova tehničkih uputstava* možemo pronaći u sledećim evidencijama:
> **Tehnička uputstva** – u *podacima zaglavlja*;
> **Parametri kontrole artikala** – na kartici *Opšte*;

kao i u svim evidencijama u kojima se koristi *tehničko uputstvo*.

Tabela omogućava unos novih zapisa ili pretraživanje postojećih zapisa radi njihovog pregleda, izmene ili brisanja.

**Pretraživanje tipova tehničkih uputstava**

Obrazac se sastoji od područja za filtriranje i područja sa rezultatima. Nakon postavljanja željenih filtera dovoljno je kliknuti na dugme **Traži** kako bi se rezultati prikazali u tabeli sa rezultatima.

**Unos tipova tehničkih uputstava**

Za unos novih *tipova tehničkih uputstava* potrebno je kliknuti na prvi prazan red u tabeli ili pritisnuti dugme **Novo**.

Za novi zapis potrebno je uneti barem obavezna polja koja program zahteva: **Šifra** i **Opis**.

## Tipovi tehničkih uputstava (liste podataka)

Ovo je lista u koju se unose osnovni podaci o *tipovima tehničkih uputstava*.

Lista se sastoji od sledećih podataka:

> **Šifra**: šifra *tipa tehničkog uputstva*.
> **Opis**: opis *tipa tehničkog uputstva*.
> **Napomene**: slobodne napomene.

### Atributi tipova tehničkih uputstava

Moguće je uneti [dodatne podatke](/docs/configurations/utility/extra-data/extradata/search-extradata) za *tip tehničkog uputstva*.

Ti *dodatni podaci* mogu se naslediti u *tehničkim uputstvima* određenog tipa.

### Način šifriranja (kodiranja)

Ovo je lista u koju se unose podaci za formiranje *šifre* i *opisa* *tehničkog uputstva*.

Lista se sastoji od sledećih podataka:

> **Sortiraj**: redosled primene prilikom izrade *šifre* i *opisa* *tehničkog uputstva*.
> **Tip**: lista vrednosti koje je sistem unapred definisao i koje određuju objekat na osnovu kojeg se formira šifra *tehničkog uputstva*. Podrazumevane vrednosti su:
>> *ExtraData* – koristi se samo za izradu šifre i opisa; predstavlja dodatni podatak koji se može identifikovati u koloni *Dodatni podaci*.
>> *Godina* – koristi se samo za izradu šifre; predstavlja *godinu* izrade *tehničkog uputstva*. Može se prikazati sa 2, 3 ili 4 cifre, što se određuje u polju *Dužina*.
>> *Mesec* – koristi se samo za izradu šifre; predstavlja *mesec* izrade *tehničkog uputstva*, uvek sa 2 cifre.
>> *Dan* – koristi se samo za izradu šifre; predstavlja *dan* izrade *tehničkog uputstva*, uvek sa 2 cifre.
>> *Redni broj* – koristi se samo za izradu šifre; predstavlja *redni broj* izrade *tehničkog uputstva*. Početna vrednost, znak za popunjavanje i dužina određuju se u polju *Dužina*.
>> *Šifra tipa* – koristi se samo za izradu šifre; predstavlja *šifru* *tipa tehničkog uputstva*.
>> *Opis tipa* – koristi se samo za izradu opisa; predstavlja *opis* *tipa tehničkog uputstva*.
>> *Fiksna vrednost šifre* – koristi se samo za izradu šifre; predstavlja fiksne znakove koji se definišu u koloni *Fiksna vrednost*.
>> *Fiksna vrednost opisa* – koristi se samo za izradu opisa; predstavlja fiksne znakove koji se definišu u koloni *Fiksna vrednost*.

> **Dodatni podaci**: polje je omogućeno ako je u polju *Tip* odabrana vrednost *ExtraData*. Predstavlja dodatni podatak koji se koristi za sastavljanje *šifre* i/ili *opisa* *tehničkog uputstva*.
> **Svojstvo šifre**: polje je omogućeno ako je u polju *Tip* odabrana vrednost *ExtraData*. Predstavlja svojstvo *Šifra* dodatnog podatka koje se koristi za sastavljanje *šifre* *tehničkog uputstva*.
> **Opis svojstva**: polje je omogućeno ako je u polju *Tip* odabrana vrednost *ExtraData*. Predstavlja svojstvo *Opis* dodatnog podatka koje se koristi za sastavljanje *opisa* *tehničkog uputstva*.
> **Dužina**: polje je omogućeno ako je u polju *Tip* odabrana vrednost *Godina* ili *Redni broj*. Određuje dužinu odabranog *tipa*.
> **Razmak**: označava da li će se u *šifru* umetnuti razmak između ove i sledeće komponente *šifre*.
> **Separator**: znak koji se koristi kao razdelnik između ove i sledeće komponente *šifre*.
> **Znak za popunjavanje**: znak koji se koristi za popunjavanje dužine *rednog broja*.
> **Progresivna vrednost – početak**: početna vrednost *rednog broja* prilikom unosa prvog *tehničkog uputstva*.
> **Fiksna vrednost**: polje je omogućeno ako je u polju *Tip* odabrana vrednost *Fiksna vrednost šifre* ili *Fiksna vrednost opisa*.

Za sve što nije detaljno opisano u ovom dokumentu, a odnosi se na zajednički način rada obrazaca, pogledajte sledeću poveznicu: [Zajedničke funkcionalnosti, dugmad i polja](/docs/guide/common).