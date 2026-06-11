---
title: Napredni unos cenovnika
sidebar_position: 4
---

Procedura **Napredni unos cenovnika** omogućava kreiranje novih cenovnika primenom *Formule*, polazeći od artikala koji se nalaze u postojećim cenovnicima.    
Uslov za prikaz artikala u ovoj mreži jeste postojanje [**Formule za ažuriranje politika cena i popusta**](/docs/sales/price-control/formulas) koja ima definisan odredišni cenovnik i izvorni cenovnik; artikl takođe mora pripadati izvornom cenovniku.
Na osnovu artikala iz izvornog cenovnika, Fluentis primenjuje formulu i kreira odredišni cenovnik.  


Tabela za pretragu služi samo za pregled podataka i sadrži sledeća polja:

- **Klasa, Artikl, Opis artikla**: u ovim poljima prikazuje se artikl cenovnika.
- **Formula obračuna**: prikazuje formulu definisanu u odgovarajućoj tabeli.
- **(Izvorna) vrsta prodajnog cenovnika**: sadrži vrstu prodajnog cenovnika izvornog reda, odnosno cenovnik na koji će se primeniti formula.
- **Kupac / Podkonto / Opis (izvornog) kupca**: sadrži personalizovani cenovnik koji se koristi kao izvor i kojem pripada artikl.
- **(Izvorna) vrsta dobavljačkog cenovnika**: sadrži vrstu izvornog dobavljačkog cenovnika.
- **Dobavljač / Podkonto / Opis (izvornog) dobavljača**: sadrži personalizovani dobavljački cenovnik koji se koristi kao izvor.
- **(Odredišna) vrsta prodajnog cenovnika**: sadrži vrstu prodajnog cenovnika koja će biti kreirana ili izmenjena primenom formule iz ovog reda.
- **Kupac / Podkonto / Opis (odredišnog) prodajnog cenovnika**: sadrži personalizovani prodajni cenovnik koji će biti kreiran kao rezultat obrade.
- **(Odredišna) vrsta dobavljačkog cenovnika**: sadrži vrstu dobavljačkog cenovnika koja će biti kreirana ili izmenjena.
- **Dobavljač / Podkonto / Opis (odredišnog) dobavljačkog cenovnika**: sadrži personalizovani dobavljački cenovnik koji će biti kreiran kao rezultat obrade.
- **Važi od / do**: prikazuje period važenja izvornog cenovnika.
- **Nova cena**: prikazuje obračunatu cenu novog cenovnika, dobijenu primenom formule na izvornu cenu.
- **Prethodna cena**: prikazuje cenu izvornog cenovnika.
- **Promena**: prikazuje promenu izraženu u apsolutnoj vrednosti.
- **% promene**: prikazuje promenu izraženu u procentima.

U donjem delu obrasca moguće je definisati dodatne podatke za novi cenovnik:

- **Datum početka važenja**: predlaže se trenutni datum, ali ga je moguće promeniti.
- **Datum kraja važenja**: prema podrazumevanim podešavanjima nije popunjen, ali je moguće uneti datum završetka važenja cenovnika.
- **Valuta**: predlaže se valuta društva, ali ju je moguće promeniti.
- **Zaokruživanja**(/docs/sales/sales-price-list/procedures/rounding): omogućava definisanje maske za zaokruživanje koja će se primeniti na opseg vrednosti radi upravljanja decimalama.

Za pokretanje procedure potrebno je označiti željene redove artikala u tabeli i kliknuti dugme **Kreiranje cenovnika** na alatnoj traci.