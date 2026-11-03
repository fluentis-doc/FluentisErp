---
title: Kategorije dokumenata internog porekla
sidebar_position: 2
---

Tabela se nalazi na putanji **Tablice > Kvalitet > Dokumenti > Kategorije dokumenata internog porekla**.

:::important Čemu služi
Podaci u ovoj tabeli koriste se za katalogizaciju različitih tipova dokumenata internog porekla.
Podaci uneti u ove tabele prenose se prilikom kreiranja dokumenata internog porekla.
Primer upotrebe nalazi se u modulu **Dokumenti internog porekla**.
:::

Tabela omogućava unos novih zapisa ili pretraživanje postojećih radi pregleda, izmene ili brisanja.

**Pretraživanje kategorija dokumenata internog porekla**

Obrazac se sastoji od područja za filtriranje i područja sa rezultatima. Nakon što se postave svi željeni filteri, dovoljno je kliknuti na dugme **Traži** kako bi se rezultati prikazali u tabeli sa rezultatima.

**Unos kategorija dokumenata internog porekla**

Za unos novih *kategorija dokumenata internog porekla* potrebno je kliknuti na prvi prazan red u tabeli ili pritisnuti dugme **Novo**.

Za novi zapis potrebno je uneti barem obavezna polja koja program zahteva: **Šifra** i **Opis**.

**Dupliranje kategorija dokumenata internog porekla**

Za dupliranje postojeće *kategorije dokumenta* u novu *kategoriju dokumenta* potrebno je kliknuti na *kategoriju dokumenta* koju želite da duplirate i pritisnuti dugme **Dupliraj**.

Zatim će se prikazati zahtev za unos **šifre** i **opisa** nove *kategorije dokumenta* (oba podatka su obavezna).

Nakon toga pritisnite dugme **OK** ili **Odustani**, u zavisnosti od toga da li želite da nastavite sa dupliranjem ili ne.

## Kategorije dokumenata internog porekla

Ovo je lista u koju se unose osnovne informacije o *kategoriji dokumenta*.

Lista se sastoji od sledećih informacija:
> **Kategorija**: šifra *kategorije dokumenta*.
> **Opis kategorije**: opis *kategorije dokumenta*.
> **Redosled**: redosled prikaza na listi *kategorija dokumenata*.
> **Obavezni dokument**: označava da li je obavezno priložiti dokument.
> **Automatsko šifriranje**: označava da li se želi omogućiti automatsko šifriranje dokumenta; šifra će se sastojati od *šifre kategorije* i progresivnog broja sa određenim brojem cifara, počevši od broja navedenog u polju *Početni progresivni broj*.
> **Broj progresivnih cifara**: omogućeno ako je uključeno *automatsko šifriranje*, određuje broj cifara koje čine šifru dokumenta.
> **Početni progresivni broj**: ako je uključeno *automatsko šifriranje*, predstavlja početni broj koji će biti predložen prilikom unosa prvog dokumenta.
> **Funkcija provere/odobrenja**: *poslovna funkcija* odgovorna za proveru/odobrenje dokumenta.
> **Funkcija kreiranja/izdavanja**: *poslovna funkcija* odgovorna za kreiranje/izdavanje dokumenta.
> **Tip dokumenta**: šifra *tipa dokumenta* predloženog za šifriranje priloženog dokumenta u *upravljanju dokumentima*.
> **Opis tipa dokumenta**: opis *tipa dokumenta* predloženog za šifriranje priloženog dokumenta u *upravljanju dokumentima*.
> **Arhiva**: polje u kojem se dodeljuje skladište povezano sa određenom kategorijom.
> **Izvorna lokacija**: označava fizičku lokaciju povezanu sa *kategorijom*; moguće je odabrati samo *lokacije* koje pripadaju odabranoj *arhivi*.
> **Opis lokacije**: ako lokacija nije šifrirana, može se ručno uneti u ovo slobodno polje.
> **Period zadržavanja**: period čuvanja koji se unosi ručno.
> **Odgovorna funkcija**: *poslovna funkcija* odgovorna za *kategoriju*.
> **Napomene**: slobodne napomene.

### Distribuciona lista

U ovoj listi moguće je povezati *poslovne funkcije*, *zaposlene*, *kupce/dobavljače* i *kontakte* koji redovno primaju kopiju odabrane *kategorije dokumenta*, kao i odrediti uobičajene načine prijema dokumenta.

Lista se sastoji od sledećih podataka:
> **Grupa**
>> **Šifra**: šifra *ARM uloge* primaoca.
>> **Opis**: opis *ARM uloge* primaoca.
>
> **Korisnik**
>> **Šifra**: šifra *ARM korisnika* primaoca.
>> **Opis**: opis *ARM korisnika* primaoca.
>
> **Funkcija preduzeća**
>> **Šifra**: šifra *poslovne funkcije* primaoca.
>> **Opis**: opis *poslovne funkcije* primaoca.
>
> **Zaposleni**
>> **Šifra**: šifra *zaposlenog* primaoca.
>> **Prezime**: prezime *zaposlenog* primaoca.
>> **Ime**: ime *zaposlenog* primaoca.
>
> **Kupac/Dobavljač**
>> **Opis**: naziv *klijenta/dobavljača* primaoca.
>
> **Kontakt**
>> **Šifra**: šifra *kontakta* primaoca.
>> **Opis**: opis *kontakta* primaoca.
>
> **Drugi primalac**
>> **Opis**: slobodan opis primaoca koji nije šifriran.
>
> **Podaci za isporuku**
>> **Na papiru**: označava da li primalac prilikom distribucije (interni postupak u upravljanju *dokumentima internog porekla*) želi da primi štampanu kopiju dokumenta ili da ga primi kao prilog putem *e-pošte*.
>> **Tip obaveštenja**: uobičajeni način isporuke *kategorije dokumenta*.
>> **E-mail**: adresa e-pošte ako nije šifrirana u evidenciji primaoca.
>> **Broj kopija**: broj štampanih kopija koje primalac želi da primi.
>> **Napomene**: slobodne napomene.

*Specifična dugmad*:

**Novi primalac**: umeće novi red u listu.

**Izbriši primaoca**: briše odabrani red iz liste.

### Dozvoljen pristup funkcijama

U ovu listu mogu se uneti *poslovne funkcije* kojima će biti dodeljena prava pristupa.

Ako se u ovoj tabeli ne unese nijedan red, pristup je omogućen svima.

Lista se sastoji od sledećih informacija:
> **Funkcija**: šifra *poslovne funkcije*.
> **Opis funkcije**: opis *poslovne funkcije*.
> **Napomene**: slobodne napomene.

*Specifična dugmad*:

**Nova funkcija pristupa (prijave)**: umeće novi red u listu.

**Izbriši funkciju pristupa (prijave)**: briše odabrani red iz liste.

### Dodatni podaci

Moguće je uneti [Extra Data](/docs/configurations/utility/extra-data/extradata/new-extradata) za svaki *dokument internog porekla*.

Ti *dodatni podaci* mogu se naslediti u *internom dokumentu* određene kategorije.

Za sve što nije detaljno objašnjeno u ovom dokumentu o uobičajenom radu sa obrascima, pogledajte sledeći link [Funkcionalnosti, dugmad i zajednička polja](/docs/guide/common).