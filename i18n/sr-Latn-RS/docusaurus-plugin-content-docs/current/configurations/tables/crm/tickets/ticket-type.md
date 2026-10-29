---
title: Tip tiketa
sidebar_position: 1
---

Tabela omogućava definisanje tipova tiketa koji se mogu koristiti prilikom unosa novog tiketa, pri čemu se unapred određuju određena svojstva tiketa koji će biti evidentirani sa tim tipom.

Sastoji se od dela za filtriranje, u kojem je moguće pretraživati prema šifri ili opisu tipa, i tabele u kojoj su navedeni svi uneti tipovi.

U istom obrascu moguće je dodati nove tipove u tabelu klikom na dugme **Novo**. Time se dodaje novi red u tabelu, u kojem je potrebno definisati sledeće parametre:

**Šifra**: šifra tipa tiketa.

**Opis**: opis tipa tiketa.

**Numerisanje**: numerisanje tipa tiketa koje se odnosi na tabelu *Numerisanje tipa*.

**Tip ponude**: sadrži [tip ponude](/docs/configurations/tables/sales/sales-offer-type) koji će biti kreiran postupkom *Kreiranje ponude iz tiketa*.

**Klasa i šifra artikla**:

**Šablon tiketa**: sadrži [šablon](/docs/configurations/tables/crm/tickets/template-ticket) koji će biti predložen za ovaj tip tiketa.

Oznake za određivanje obaveznih polja:

**Kupac**: ako je aktivirana, označava da je obavezno popuniti polje Kupac u tiketu.

**Subjekat**:

**Kontaktni subjekat**: ako je aktivirana, označava da je obavezno popuniti polje Kontaktni subjekat u tiketu.

**E-pošta kontaktnog subjekta**: ako je aktivirana, označava da je obavezno popuniti polje E-pošta kontaktnog subjekta u tiketu.

**Projekat**: ako je aktivirana, označava da je obavezno popuniti polje Projekat u tiketu.

**Nivo usluge**: ako je aktivirana, označava da je obavezno popuniti polje Nivo usluge u tiketu.

**Ozbiljnost**: ako je aktivirana, označava da je obavezno popuniti polje Ozbiljnost u tiketu.

**Prvi dodeljeni korisnik**: korisnik koji se predlaže kao podrazumevani.

Za svaki tip moguće je u donjoj tabeli navesti jedno ili više **stanja tiketa**. Ta stanja mogu se razlikovati u zavisnosti od tipa tiketa i biće ponuđena kao moguća stanja prilikom kreiranja novog tiketa tog tipa.

Za svako stanje tiketa moguće je definisati sledeće parametre:

**Šifra**: šifra stanja tiketa.

**Opis**: opis stanja tiketa.

**Datum završetka**: datum završetka važenja stanja tiketa.

**Napomena**: u ovo polje moguće je uneti dodatne napomene uz tiket.

Za svaki tip moguće je u donjoj tabeli navesti jednog ili više **korisnika**. Ova konfiguracija je obavezna ako želite da omogućite pristup svim karticama koje se mogu koristiti u tiketu. Može se konfigurisati za pojedinačnog korisnika ili za ulogu.

**Uloga**: označava ulogu za koju važi podešena konfiguracija.

**Korisnik**: navodi se umesto uloge i označava korisnika za kojeg važi podešena konfiguracija.

**Detalji tiketa**: aktivirati za prikaz odeljka/kartice Detalji tiketa u tiketu.

**Korisnici**: aktivirati za prikaz odeljka/kartice Korisnici u tiketu.

**Procena/Napor**: aktivirati za prikaz odeljka/kartice Procena/Napor u tiketu.

**Komercijalna procena**: aktivirati za prikaz odeljka/kartice Komercijalna procena u tiketu.

**Informacije o zatvaranju**: aktivirati za prikaz odeljka/kartice Informacije o zatvaranju u tiketu.

**Povezani tiketi**: aktivirati za prikaz odeljka/kartice Povezani tiketi u tiketu.

**Napomena**: aktivirati za prikaz odeljka/kartice Napomena u tiketu.

**Proizvod**: aktivirati za prikaz odeljka/kartice Proizvod u tiketu.

**Dodatni podaci**: aktivirati za prikaz odeljka/kartice Dodatni podaci u tiketu.

**Upravljanje dokumentacijom**: aktivirati za prikaz odeljka/kartice Upravljanje dokumentacijom u tiketu.

**Ponude**: aktivirati za prikaz odeljka/kartice Ponude u tiketu.