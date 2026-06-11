---
title: Napredan unos cjenika
sidebar_position: 4
---

Postupak **Napredan unos cjenika** omogućuje izradu novih cjenika primjenom *Formule*, polazeći od artikala koji se nalaze u postojećim cjenicima.    
Uvjet za prikaz artikala u ovoj mreži jest postojanje [**Formule za ažuriranje politika cijena i popusta**](/docs/sales/price-control/formulas) koja ima definirani cjenik odredišta i cjenik izvora; artikl, također, mora pripadati cjeniku izvora.
Na temelju artikala iz cjenika izvora, Fluentis primjenjuje formulu i kreira cjenik odredišta.  


Tablica za pretraživanje služi samo za pregled podataka i sadrži sljedeća polja:

- **Klasa, Artikl, Opis artikla**: u ovim poljima prikazuje se artikl cjenika.
- **Formula izračuna**: prikazuje formulu definiranu u odgovarajućoj tablici.
- **(Izvorna) vrsta prodajnog cjenika**: sadrži vrstu prodajnog cjenika izvornog reda, odnosno cjenik na koji će se primijeniti formula.
- **Kupac / Podkonto / Opis (izvornog) kupca**: sadrži personalizirani cjenik koji se koristi kao izvor i kojem pripada artikl.
- **(Izvorna) vrsta dobavljačkog cjenika**: sadrži vrstu izvornog dobavljačkog cjenika.
- **Dobavljač / Podkonto / Opis (izvornog) dobavljača**: sadrži personalizirani dobavljački cjenik koji se koristi kao izvor.
- **(Odredišna) vrsta prodajnog cjenika**: sadrži vrstu prodajnog cjenika koja će biti kreirana ili izmijenjena primjenom formule iz ovog retka.
- **Kupac / Podkonto / Opis (odredišnog) prodajnog cjenika**: sadrži personalizirani prodajni cjenik koji će biti kreiran kao rezultat obrade.
- **(Odredišna) vrsta dobavljačkog cjenika**: sadrži vrstu dobavljačkog cjenika koja će biti kreirana ili izmijenjena.
- **Dobavljač / Podkonto / Opis (odredišnog) dobavljačkog cjenika**: sadrži personalizirani dobavljački cjenik koji će biti kreiran kao rezultat obrade.
- **Vrijedi od / do**: prikazuje razdoblje važenja izvornog cjenika.
- **Nova cijena**: prikazuje izračunanu cijenu novog cjenika, dobivenu primjenom formule na izvornu cijenu.
- **Prethodna cijena**: prikazuje cijenu izvornog cjenika.
- **Promjena**: prikazuje promjenu izraženu u apsolutnoj vrijednosti.
- **% promjene**: prikazuje promjenu izraženu u postotku.

U donjem dijelu obrasca moguće je definirati dodatne podatke za novi cjenik:

- **Datum početka valjanosti**: predlaže se trenutni datum, ali ga je moguće promijeniti.
- **Datum kraja valjanosti**: prema zadanim postavkama nije popunjen, no moguće je unijeti datum završetka važenja cjenika.
- **Valuta**: predlaže se valuta društva, ali ju je moguće promijeniti.
- **Zaokruživanja**(/docs/sales/sales-price-list/procedures/rounding): omogućuje definiranje maske za zaokruživanje koja će se primijeniti na raspon vrijednosti radi upravljanja decimalama.

Za pokretanje procedure potrebno je označiti željene retke artikala u tablici te kliknuti gumb **Kreiranje cjenika** na alatnoj traci.
