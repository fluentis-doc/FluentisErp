---
title: Način plaćanja
sidebar_position: 7
---
:::tip[Fast Start]
Na ovu tabelu utiče postupak [**Fast Start**](/docs/guide/fast-start).

Ako se konfiguracija unosi ručno, potrebno je pratiti kontrolnu listu na povezanoj stranici.
:::

Tabela sadrži tipove (načine) plaćanja koji se koriste u ERP sistemu.

Omogućava unos novih zapisa ili pretraživanje postojećih radi pregleda, izmene ili brisanja.

Za unos novih zapisa kliknite na prvi prazan red u gornjoj tabeli ili pritisnite dugme **Novi**.

## Način plaćanja

**Plaćanje**: alfanumerička šifra za prepoznavanje.

**Opis**: opis plaćanja koji se uobičajeno prikazuje na različitim ispisima izlaznog i ulaznog poslovnog ciklusa.

**Količina taksi**: iznos takse.

**Procenat popusta**: omogućava povezivanje tipa popusta (odabirom iz tabele Tipovi popusta) i odgovarajućeg procenta popusta sa stavkama artikala u dokumentu, u zavisnosti od tipa plaćanja. Na primer, moguće je definisati popust od 5 % ako se koristi tip plaćanja Gotovina.

:::note[Napomena]
Ovaj popust umanjuje oporezivi iznos stavke, zajedno sa ostalim popustima koji proizlaze iz cenovnika i komercijalnih uslova definisanih u šifarniku.
:::

**Tip finansijskog popusta / Procenat finansijskog popusta**: povezani su sa dospećem fakture i ne utiču na ukupan iznos dokumenta, već se primenjuju prilikom knjiženja naplate.

**Tip hartije od vrednosti**: omogućava definisanje vrste hartije od vrednosti koja je eventualno povezana sa plaćanjem ili nekog drugog tipa plaćanja. Trenutno ovo polje ima samo informativnu ulogu, bez posebnih povezanih automatizacija, osim za tip Bankarska potvrda, koji identifikuje tip plaćanja pogodan za naknadno upravljanje kreiranjem hartije od vrednosti.

**Šifra Intra usluge**: šifra plaćanja koja se unosi u Intrastat izveštaje.

**Šifra za e-fakture**: identifikaciona šifra tipa plaćanja za e-fakture i fakture izdate javnoj upravi (na primer MP01, MP02 itd.; pogledajte uputstva nadležnog ministarstva za popunjavanje e-faktura).

**Država**: filter kojim se određuje da taj tip plaćanja bude vidljiv samo preduzećima u bazi podataka koja imaju navedenu nacionalnost. To je korisno jer je tabela, kao osnovna tabela, vidljiva svim preduzećima u istoj bazi podataka.

### Jezici

Za svaki tip plaćanja odabran u gornjoj tabeli moguće je definisati opise na različitim jezicima, koji se mogu koristiti u prilagođenim ispisima.

### Tipovi hartija od vrednosti

Za svaki tip plaćanja odabran u gornjoj tabeli moguće je unapred definisati tip hartije od vrednosti koji će se kreirati iz otvorene stavke/dospeća u modulu *Lista hartija od vrednosti*.

:::danger[Pažnja]
Povezivanje plaćanja i hartije od vrednosti služi tome da se u obrascu za kreiranje hartija od vrednosti prikazuju samo otvorene stavke koje odgovaraju odabranom tipu hartije od vrednosti. Na primer, ispravno je povezati tip plaćanja Ri.Ba. sa tipom hartije od vrednosti Bankarska potvrda, a tip plaćanja Menica sa tipom hartije od vrednosti Menica. Na taj način se u obrascu za kreiranje hartija od vrednosti iz otvorenih stavki ili dospeća neće prikazivati, na primer, otvorene stavke sa tipom plaćanja Bankarski prenos, čime se izbegava generisanje neusaglašenih podataka.
:::

Za sve što nije detaljno opisano u ovom dokumentu, a odnosi se na zajedničke funkcionalnosti obrazaca, pogledajte sledeću poveznicu: [Funkcionalnosti, dugmad i zajednička polja](/docs/guide/common).