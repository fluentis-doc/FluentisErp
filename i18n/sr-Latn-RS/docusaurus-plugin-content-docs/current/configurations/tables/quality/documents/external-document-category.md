---
title: Kategorije dokumenata eksternog porekla
sidebar_position: 1
---

Tabela se nalazi na putanji **Tablice > Kvalitet > Dokumenti > Kategorije dokumenata eksternog porekla**.

:::important Čemu služi
Podaci u ovoj tabeli koriste se za kategorizaciju različitih tipova dokumenata eksternog porekla.
Podaci uneti u ovu tabelu prenose se prilikom kreiranja dokumenata eksternog porekla. 
Primer upotrebe nalazi se u modulu **Dokumenti eksternog porekla**.
:::

Tabela omogućava unos novih zapisa ili pretraživanje postojećih kako bi se mogli pregledati, izmeniti ili izbrisati.

**Pretraživanje kategorija dokumenata eksternog porekla**

Obrazac se sastoji od područja za filtriranje i područja sa rezultatima. Nakon što se postave svi željeni filteri, dovoljno je kliknuti na dugme **Traži** kako bi se rezultati prikazali u tabeli sa rezultatima.

**Unos kategorija dokumenata eksternog porekla**

Za unos novih *kategorija dokumenata eksternog porekla* potrebno je kliknuti na prvi prazan red u tabeli ili pritisnuti dugme **Novo**.

Za novi zapis potrebno je uneti najmanje obavezna polja koja zahteva program: **Šifra** i **Opis**.

**Dupliranje kategorije dokumenta eksternog porekla**

Za dupliranje postojeće *kategorije dokumenta* u novu *kategoriju dokumenta* potrebno je u mreži označiti *kategoriju dokumenta* koju želite da duplirate i pritisnuti dugme **Dupliraj**.

Prikazaće se zahtev za unos **Šifre** i **Opisa** nove *kategorije dokumenta* (oba podatka su obavezna).

Zatim pritisnite dugme **OK** za potvrdu ili **Otkaži** ako želite da prekinete postupak dupliranja.

## Kategorije dokumenata eksternog porekla

Ovo je lista u koju se unose osnovne informacije o *kategoriji dokumenta*.

Lista sadrži sledeće informacije:
> **Kategorija**: šifra *kategorije dokumenta*.
> **Opis kategorije**: opis *kategorije dokumenta*.
> **Arhiva**: označava skladište u kojem se nalazi određena kategorija.
> **Lokacija**: fizička lokacija na kojoj se uobičajeno nalazi *kategorija*; moguće je odabrati samo *lokacije* koje pripadaju odabranoj *arhivi*.
> **Opis lokacije**: ako lokacija nije šifrirana, može se ručno uneti u ovo slobodno polje.
> **Period zadržavanja**: period čuvanja koji se unosi ručno.
> **Odgovorna funkcija**: *poslovna funkcija* odgovorna za tu *kategoriju*.
> **Napomene**: slobodne napomene.

### Distribuciona lista

U ovoj listi moguće je povezati: *poslovne funkcije*, *zaposlene*, *kupce/dobavljače* i *kontakte* koji uobičajeno primaju kopiju *kategorije dokumenta*, kao i odrediti standardne načine isporuke.

Lista sadrži sledeće informacije:
> **Poslovna funkcija**
>> **Šifra**: šifra *poslovne funkcije* primaoca.
>> **Opis**: opis *poslovne funkcije* primaoca
>
> **Zaposleni**
>> **Šifra**: šifra *zaposlenog* primaoca.
>> **Prezime**: prezime *zaposlenog* primaoca.
>> **Ime**: ime *zaposlenog* primaoca.
>
> **Kupac/Dobavljač**
>> **Opis**: naziv preduzeća *klijenta* ili *dobavljača* primaoca.
>
> **Kontakt**
>> **Šifra**: šifra *kontakta* primaoca.
>> **Opis**: opis *kontakta* primaoca.
>
> **Drugi primalac**
>> **Opis**: slobodan opis primaoca koji nije šifriran.
>
> **Podaci za isporuku**
>> **Na papiru**: označava da li subjekt u trenutku distribucije (interni postupak u okviru modula *Dokumenti eksternog porekla*) želi da primi *štampanu kopiju* dokumenta ili kopiju u prilogu putem *e-pošte*.
>> **Tip obaveštenja**: označava uobičajeni način isporuke za *kategoriju dokumenta*.
>> **E-mail**: označava adresu e-pošte primaoca, ako nije definisana u matičnim podacima primaoca.
>> **Broj kopija**: označava broj štampanih kopija koje primalac želi da primi.
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

Moguće je uneti [Extra Data](/docs/configurations/utility/extra-data/extradata/new-extradata) za svaki *dokument eksternog porekla*.

Ti *Extra Data* mogu se naslediti u *eksternom dokumentu* određene kategorije.

Za sve što nije detaljno objašnjeno u ovom dokumentu o uobičajenom radu sa obrascima, pogledajte sledeći link [Funkcionalnosti, dugmad i zajednička polja](/docs/guide/common).