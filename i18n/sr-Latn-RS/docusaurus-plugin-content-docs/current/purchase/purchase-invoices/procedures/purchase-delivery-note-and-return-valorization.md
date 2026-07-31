---
title: Valorizacija prijema robe i povrata
sidebar_position: 5
---

Postupak se otvara putem menija **Nabavka > Ulazni računi > Procedure > Valorizacija prijema robe i povrata**.

Omogućava izvršavanje i vraćanje (poništavanje) kreiranja ulaznih računa na osnovu prijema robe ili otpremnica povrata.

### Valorizacija prijema robe i povrata

Na ovoj kartici korisnik može podesiti filtere za pretragu ulaznih i povratnih dokumenata koje treba valorizovati. Moguće je filtrirati po: dobavljaču, tipu prijema robe, tipu povrata, broju, datumu, artiklu i projektu.

Za razliku od dve slične procedure [Valorizacija prijema robe](/docs/purchase/purchase-invoices/procedures/purchase-delivery-note-valorization) i [Valorizacija (otpremnica) povrata](/docs/purchase/purchase-invoices/procedures/return-delivery-notes-valorization), u ovom obrascu prikazuje se jedan red za svaku stavku artikla u dokumentu. Time je omogućeno valorizovati čak i samo jednu stavku.

- **Broj i datum računa**: omogućavaju definisanje broja i datuma računa koji će biti kreiran.

*Specifična dugmad*:

> **Valorizacija**: valorizuje izabrane prijeme robe u pregledu, prema parametrima podešenim na sledećoj kartici *Parametri*.  
> **Prikaži samo dokumente**: uključuje/isključuje istoimenu opciju u filterima i omogućava prikaz samo zaglavlja dokumenta ili jednog reda po artiklu.

### Parametri

#### Parametri prijema robe

*Unos na račun*

- **Ponovo obračunaj centar troška/profitni centar**: koristi se u analitičkom računovodstvu za ponovni obračun centara troškova ili prihoda.
- **Poređaj dokument prema broju dokumenta dobavljača**: ako je uključeno, prijemi robe u zbirnom računu biće poređani prema *broju dokumenta dobavljača* umesto prema *internom broju*.
- **Tip ulaznog računa**: definiše tip računa koji se kreira.

*Reference otpremnice*

- **Unesi reference otpremnice**: ako je uključeno, na kartici [Artikli](/docs/purchase/purchase-invoices/insert-purchase-invoice/purchase-invoice) računa pojaviće se *stavka beleške* sa referencama otpremnice iz koje je račun kreiran. Tekst beleške unosi se u polje *Opis*, prema parametrima definisanim ovom oznakom.

    *Primer*: ![](/img/it-it/purchase/purchase-invoices/procedures/purchase-delivery-note-valorization/image06.png). Ako otpremnica ima broj 5 i datum 11.09.2024, stavka beleške na računu glasi: "Referenca otpremnice br. 5 od 11.09.2024."

#### Parametri povrata iz radnog naloga podizvođača

*Tip računa*

- **Tip računa**: definiše tip računa koji će biti kreiran.
- **Poređaj dokument prema broju dokumenta dobavljača**: ako je uključeno, povrati u zbirnom računu biće poređani prema *broju dokumenta*; u suprotnom, prema datumu.

*Reference povrata*

- **Unesi reference povrata**: ako je uključeno, na kartici [Artikli](/docs/purchase/purchase-invoices/insert-purchase-invoice/purchase-invoice) pojaviće se *stavka beleške* sa referencama povrata iz kojeg je račun kreiran. Tekst beleške unosi se u polje *Opis*, prema navedenim parametrima.

:::tip Zapamti
Za kreiranje zbirnih računa potrebno je u [Parametrima grupisanja računa](/docs/configurations/parameters/purchase/invoice-grouping/) podesiti uslove grupisanja.
:::

*Specifična dugmad*:

> **Sačuvaj parametre prijema robe**: čuva podešene parametre valorizacije prijema robe.  
> **Sačuvaj parametre povrata**: čuva podešavanja valorizacije dokumenata povrata.

Nakon izbora otpremnica (na kartici *Valorizacija*) i podešavanja parametara, račun se može kreirati dugmetom **Valorizacija**.

### Povrat

Poslednja kartica služi za vraćanje operacija: omogućava filtriranje, pregled i poništavanje izvršenih valorizacija.

U gornjem pregledu prikazuju se svi kreirani računi. Izborom jednog od njih, u donjim pregledima prikazuju se **Ime operatera**, datum valorizacije, **Prijem robe** ili **Povrat** iz kojih je račun nastao, kao i spisak valorizovanih artikala. Takođe je moguće dvostrukim klikom otvoriti prijem robe, povrat ili generisani račun.

*Specifična dugmad*:

> **Pretraga valorizacije**: pretražuje kreirane račune i valorizovane prijeme robe prema definisanim filterima. Rezultati se prikazuju u pregledu.  
> **Vrati račune**: briše izabrani račun iz donjeg pregleda.