---
title: Način plaćanja
sidebar_position: 7
---
:::tip[Fast Start]
Na tablicu utječe postupak [**Fast Start**](/docs/guide/fast-start).

Ako se konfiguracija unosi ručno, potrebno je slijediti kontrolni popis na povezanoj stranici.
:::

Tablica sadrži vrste (načine) plaćanja koje se koriste u ERP sustavu.

Omogućuje unos novih zapisa ili pretraživanje postojećih zapisa radi pregleda, izmjene ili brisanja.

Za unos novih zapisa kliknite na prvi prazni redak u gornjoj tablici ili pritisnite gumb **Novi**.

## Način plaćanja

**Plaćanje**: Alfanumerička šifra za prepoznavanje.

**Opis**: Opis plaćanja koji se uobičajeno prikazuje na različitim ispisima izlaznog i ulaznog poslovnog ciklusa.

**Količina markica**: Iznos biljega.

**Postotak popusta**: Omogućuje povezivanje vrste popusta (odabirom iz tablice Vrste popusta) i pripadajućeg postotka popusta sa stavkama artikala na dokumentu, ovisno o vrsti plaćanja. Primjerice, moguće je definirati popust od 5 % ako se koristi vrsta plaćanja Gotovina.

:::note Napomena
Ovaj popust umanjuje oporezivi iznos stavke, zajedno s ostalim popustima koji proizlaze iz cjenika i komercijalnih uvjeta definiranih u šifarniku.
:::

**Tip financijskog popusta / Postotak financijskog popusta**: Povezani su s dospijećem računa i ne utječu na ukupni iznos dokumenta, već se primjenjuju prilikom knjiženja naplate.

**Tip vrijednosnog papira**: Omogućuje definiranje vrste vrijednosnog papira koji je eventualno povezan s plaćanjem ili neke druge vrste plaćanja. Trenutačno ovo polje ima samo informativnu ulogu, bez posebnih povezanih automatizacija, osim za vrstu Bankovna potvrda, koja identificira vrstu plaćanja prikladnu za naknadno upravljanje kreiranjem vrijednosnog papira.

**Šifra Intra usluge**: Šifra plaćanja koja se unosi u Intrastat izvješća.

**Šifra za e-račune**: Identifikacijska šifra vrste plaćanja za e-račune i račune izdane javnoj upravi (primjerice MP01, MP02 itd.; pogledajte upute nadležnog ministarstva za popunjavanje e-računa).

**Država**: Filtar kojim se određuje da ta vrsta plaćanja bude vidljiva samo poduzećima u bazi podataka koja imaju navedenu nacionalnost. To je korisno jer je tablica, kao osnovna tablica, vidljiva svim poduzećima u istoj bazi podataka.

### Jezici

Za svaku vrstu plaćanja odabranu u gornjoj tablici moguće je definirati opise na različitim jezicima, koji se mogu koristiti u prilagođenim ispisima.

### Tipovi vrijednosnih papira

Za svaku vrstu plaćanja odabranu u gornjoj tablici moguće je unaprijed definirati vrstu vrijednosnog papira koji će se kreirati iz otvorene stavke/dospijeća u modulu *Popis vrijednosnih papira*.

:::danger Pažnja
Povezivanje plaćanja i vrijednosnog papira služi tome da se u obrascu za kreiranje vrijednosnih papira prikazuju samo otvorene stavke koje odgovaraju odabranoj vrsti vrijednosnog papira. Primjerice, ispravno je povezati vrstu plaćanja Ri.Ba. s vrstom vrijednosnog papira Bankovna potvrda, a vrstu plaćanja Mjenica s vrstom vrijednosnog papira Mjenica. Na taj se način u obrascu za kreiranje vrijednosnih papira iz otvorenih stavki ili dospijeća neće prikazivati, primjerice, otvorene stavke s vrstom plaćanja Bankovni prijenos, čime se izbjegava generiranje neusklađenih podataka.
:::

Za sve što nije detaljno opisano u ovom dokumentu, a odnosi se na zajedničke funkcionalnosti obrazaca, pogledajte sljedeću poveznicu: [Funkcionalnosti, gumbi i zajednička polja](/docs/guide/common).