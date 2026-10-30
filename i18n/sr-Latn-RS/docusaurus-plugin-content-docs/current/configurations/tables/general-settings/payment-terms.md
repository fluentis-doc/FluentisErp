---
title: Uslovi plaćanja
sidebar_position: 10
---

:::tip[Fast Start]
Na ovu tabelu utiče postupak [**Fast Start**](/docs/guide/fast-start).

Ako se konfiguracija unosi ručno, potrebno je pratiti kontrolnu listu na povezanoj stranici.
:::

Tabela sadrži načine (uslove) plaćanja koji se koriste u ERP sistemu za obračun datuma dospeća i otvorenih stavki.

:::danger[Pažnja]
Za ispravan unos načina plaćanja potrebno je popuniti i gornju tabelu i tabelu sa detaljima, koja definiše obračun datuma dospeća. Iako program omogućava čuvanje bez popunjene tabele sa detaljima, tako kreiran način plaćanja neće moći da se koristi.
:::

### Gornja tabela

**Uslovi plaćanja / Opis**: predstavljaju šifru i opis primenjenog odlaganja plaćanja.

**Plaćanje na kraju meseca**: ako je ova oznaka aktivna, odlaganje plaćanja pomera se na kraj meseca nakon primene broja dana definisanog u donjoj tabeli sa detaljima.

**Kraj nedelje**: ako je ova oznaka aktivna, odlaganje plaćanja pomera se na sledeći petak nakon datuma dobijenog primenom broja dana definisanog u donjoj tabeli sa detaljima.

**Dani**: broj dana koji se dodaju na kraj meseca kako bi se dobio fiksni dan dospeća. Ispravno podešavanje podrazumeva da se najpre u donjoj tabeli definiše broj dana odlaganja, uključujući i nulu ako je potrebno. Zatim se primenjuje oznaka za kraj meseca, a na kraju se dodaju dodatni dani nakon završetka meseca. Radi ujednačavanja obračuna preporučuje se uključivanje i oznake za komercijalni kalendar, kojom se svi meseci tretiraju kao da imaju 30 dana.

**Podrazumevano za čl. 62**: oznaka koja identifikuje dve rate sa dospećem od 30 i 60 dana, koje se koriste za obračun rokova plaćanja na fakturama koje sadrže lako kvarljivu robu, u skladu sa članom 62. Zakonske uredbe br. 1 od 24. januara 2012.

[**Pogledajte šifarnike kupaca i dobavljača**](/docs/erp-home/registers/contacts/create-new-contact/accounting-data/customer-vendors-data/fiscal-information)

**Država**: filter kojim se određuje da taj način plaćanja bude vidljiv samo preduzećima u bazi podataka koja imaju navedenu nacionalnost. To je korisno jer je tabela, kao osnovna tabela, vidljiva svim preduzećima u istoj bazi podataka.

### Donja tabela

Kod plaćanja na rate moguće je raspodeliti oporezivi iznos, PDV i troškove dokumenta po pojedinačnim ratama u procentima. Procenat troškova ne može se direktno primeniti na knjiženja u glavnoj knjizi. Ako se procenat ostavi na nuli, **_Fluentis_** će iznose ravnomerno raspodeliti na sve definisane rate.

**Komercijalni kalendar**: uz ovu opciju u odgovarajuće polje moguće je uneti samo višekratnike od 30 dana, koji će se obrađivati kao celi meseci.

Tipičan primer je dospeće 30 dana od kraja meseca kada je datum fakture 31. 1. Ako primenimo 30 kalendarskih dana (bez oznake „Komercijalni kalendar“), dobićemo datum dospeća 2. 3., a pomeranjem na kraj meseca datum dospeća postaje 31. 3. To znači da je rok zapravo 60 dana, a ne 30, kako je predviđeno nazivom. Ako je uključena oznaka „Komercijalni kalendar“, 30 dana se obrađuje kao dodatni mesec, nakon čega se primenjuje pravilo kraja meseca. Tako će se od datuma 31. 1. ispravno dobiti 28. ili 29. februar, u zavisnosti od kalendara.

### Jezici

Za svaki način plaćanja odabran u gornjoj tabeli moguće je definisati opise na različitim jezicima, koji se mogu koristiti u prilagođenim ispisima.