---
title: Vrste tehničkih uputstava
sidebar_position: 4
---

Tablica se nalazi na putanji **Tablice > Kvaliteta > Kontrola artikala > Vrste tehničkih uputstava (podatkovne liste)**.

U ovoj tablici moguće je definirati *vrste tehničkih uputstava*.

*Vrsta tehničkog uputstva* sastavni je dio jedinstvene šifre *tehničkog uputstva*, zajedno s *godinom*, *brojem* i *revizijom*.

Neke primjere upotrebe *vrsta tehničkih uputstava* možemo pronaći u sljedećim evidencijama:
> **Tehnička uputstva** – u *podacima zaglavlja*;
> **Parametri kontrole artikala** – na kartici *Općenito*;

kao i u svim evidencijama u kojima se upotrebljava *tehničko uputstvo*.

Tablica omogućuje unos novih zapisa ili pretraživanje postojećih zapisa radi njihova pregleda, izmjene ili brisanja.

**Pretraživanje vrsta tehničkih uputstava**

Obrazac se sastoji od područja za filtriranje i područja s rezultatima. Nakon postavljanja željenih filtara dovoljno je kliknuti gumb **Traži** kako bi se rezultati prikazali u tablici s rezultatima.

**Unos vrsta tehničkih uputstava**

Za unos novih *vrsta tehničkih uputstava* potrebno je kliknuti prvi prazan redak u tablici ili pritisnuti gumb **Novo**.

Za novi zapis potrebno je unijeti barem obvezna polja koja zahtijeva program: **Šifra** i **Opis**.

## Vrste tehničkih uputstava (podatkovne liste)

Ovo je popis u koji se unose osnovni podaci o *vrstama tehničkih uputstava*.

Popis se sastoji od sljedećih podataka:

> **Šifra**: šifra *vrste tehničkog uputstva*.
> **Opis**: opis *vrste tehničkog uputstva*.
> **Napomene**: slobodne napomene.

### Atributi vrsta tehničkog uputstva

Moguće je unijeti [dodatne podatke](/docs/configurations/utility/extra-data/extradata/search-extradata) za *vrstu tehničkog uputstva*.

Ti se *dodatni podaci* mogu naslijediti u *tehničkim uputstvima* određene vrste.

### Način šifriranja (kodiranja)

Ovo je popis u koji se unose podaci za formiranje *šifre* i *opisa* *tehničkog uputstva*.

Popis se sastoji od sljedećih podataka:

> **Sortiraj**: redoslijed primjene prilikom izrade *šifre* i *opisa* *tehničkog uputstva*.
> **Tip**: popis vrijednosti koje je unaprijed definirao sustav i koje određuju objekt na temelju kojeg se formira šifra *tehničkog uputstva*. Zadane vrijednosti su:
>> *ExtraData* – upotrebljava se samo za izradu šifre i opisa; predstavlja dodatni podatak koji se može identificirati u stupcu *Dodatni podaci*.
>> *Godina* – upotrebljava se samo za izradu šifre; predstavlja *godinu* izrade *tehničkog uputstva*. Može se prikazati s 2, 3 ili 4 znamenke, što se određuje u polju *Duljina*.
>> *Mjesec* – upotrebljava se samo za izradu šifre; predstavlja *mjesec* izrade *tehničkog uputstva*, uvijek s 2 znamenke.
>> *Dan* – upotrebljava se samo za izradu šifre; predstavlja *dan* izrade *tehničkog uputstva*, uvijek s 2 znamenke.
>> *Redni broj* – upotrebljava se samo za izradu šifre; predstavlja *redni broj* izrade *tehničkog uputstva*. Početna vrijednost, znak za popunjavanje i duljina određuju se u polju *Duljina*.
>> *Šifra vrste* – upotrebljava se samo za izradu šifre; predstavlja *šifru* *vrste tehničkog uputstva*.
>> *Opis vrste* – upotrebljava se samo za izradu opisa; predstavlja *opis* *vrste tehničkog uputstva*.
>> *Fiksna vrijednost šifre* – upotrebljava se samo za izradu šifre; predstavlja fiksne znakove koji se definiraju u stupcu *Fiksna vrijednost*.
>> *Fiksna vrijednost opisa* – upotrebljava se samo za izradu opisa; predstavlja fiksne znakove koji se definiraju u stupcu *Fiksna vrijednost*.
>
> **Dodatni podaci**: polje je omogućeno ako je u polju *Vrsta* odabrana vrijednost *ExtraData*. Predstavlja dodatni podatak koji se upotrebljava za sastavljanje *šifre* i/ili *opisa* *tehničkog uputstva*.
> **Svojstvo koda**: polje je omogućeno ako je u polju *Vrsta* odabrana vrijednost *ExtraData*. Predstavlja svojstvo *Šifra* dodatnog podatka koje se upotrebljava za sastavljanje *šifre* *tehničkog uputstva*.
> **Opis svojstva**: polje je omogućeno ako je u polju *Vrsta* odabrana vrijednost *ExtraData*. Predstavlja svojstvo *Opis* dodatnog podatka koje se upotrebljava za sastavljanje *opisa* *tehničkog uputstva*.
> **Dužina**: polje je omogućeno ako je u polju *Vrsta* odabrana vrijednost *Godina* ili *Redni broj*. Određuje duljinu odabrane *vrste*.
> **Prostor**: označava hoće li se u *šifru* umetnuti razmak između ove i sljedeće komponente *šifre*.
> **Separator**: znak koji se upotrebljava kao razdjelnik između ove i sljedeće komponente *šifre*.
> **Ispuni znak**: znak koji se upotrebljava za popunjavanje duljine *rednog broja*.
> **Progresivna vrijednost-početak**: početna vrijednost *rednog broja* prilikom unosa prvog *tehničkog uputstva*.
> **Fiksna vrijednost**: polje je omogućeno ako je u polju *Vrsta* odabrana vrijednost *Fiksna vrijednost šifre* ili *Fiksna vrijednost opisa*.

Za sve što nije detaljno opisano u ovom dokumentu, a odnosi se na zajednički način rada obrazaca, pogledajte sljedeću poveznicu: [Zajedničke funkcionalnosti, gumbi i polja](/docs/guide/common).