---
title: Kreiranje plaćanja dobavljaču 
sidebar_position: 2
---
Obrazac se nalazi u **Riznica > Plaćanja > Kreiraj plaćanja dobavljačima** i omogućuje kreiranje nove platne liste. Isti obrazac koristi se i za otvaranje već spremljene platne liste radi izmjene ili pregleda.

Iz obrasca za pretraživanje moguće je kreirati novi dokument putem gumba **> Novo plaćanje**, ili otvoriti već postojeći kako bi se pregledao i/ili izmijenio.

## Kako kreirati platnu listu

Kliknite za osnovne korake:

1. Odaberite **Vrstu plaćanja** platne liste iz prvog padajućeg polja.
2. Sljedeća se polja popunjavaju automatski:
   - **Godina**: predlaže se tekuća godina iz sustava.
   - **Broj popisa prezentacije**: progresivna numeracija platne liste.
   - **Datum izdavanja**: predlaže se današnji datum.
3. Ispunite obavezna polja zaglavlja:
   - **Banka**:  unijeti šifru analitičkog konta iz matice banaka preko kojeg se izdaje platna lista.
   - **Bankovni račun**: automatski se popunjava na temelju banke povezane s analitičkim kontom.
   - **Početne bilješke**:  slobodno polje za eventualne napomene (nije korišteno u standardu).
   - **Završne bilješke**: koristi se pri knjiženju za popunjavanje opisa kontne stavke za banku.
4. Postavite eventualne dodatne opcije:
   - **Nametni ovaj datum valute primatelja**: definira datum valute primatelja u telematskom zapisu.
5. Provjerite statuse (oznake) platne liste:
   - **Ispisano**: nije automatski upravljano od strane programa.
   - **Datoteka je izdana**: automatski se ažurira nakon izrade telematske datoteke.
6. Odaberi stavke za plaćanje:
   - Pritisni gumb **> Kreiraj plaćanje** iz stavki za odabir kontabilnih stavki koje treba zatvoriti.
   - Pažnja na korištenje oznake prikaz stavki isplatitelja: upravljanje plaćanjem mora se izvršiti iz modula isplatitelja.
   - Oznaka *Nametni banku za uplatu iz matice dobavljača* omogućuje korištenje unaprijed definirane banke iz matice dobavljača.
   - Moguće je unijeti djelomična plaćanja ili ručno dodavati retke.
   - Pažnja: ručno dodavanje može uzrokovati razlike u kontnom saldu ako nije pravilno upravljano.
8. Provjerite **Bilješke** u mreži: automatski se popunjavaju referencama plaćenih stavki i bit će prenesene u glavnu knjigu.

:::tip PAŽNJA
U zaglavlju platne liste nalazi se oznaka **Odobren** koja omogućuje izradu XML traka i izvršenje plaćanja. Ova oznaka pohranjuje korisnika i datum autorizacije. Može se unaprijed automatski aktivirati pristupom u formu **Parametri plaćanja dobavljaču** i aktiviranjem oznake *Ovlašteno prema zadanim postavkama*.
:::

9. **Pritisnite gumb Izrada SEPA datoteke** za automatsko generiranje .xml traka s popisom plaćanja i njegovo automatsko arhiviranje u dokumentacijski sustav. Datoteku možeš preuzeti iz dokumentacije i potom je prenijeti u sustav korporativnog bankarstva, bez potrebe za ručnim unosom plaćanja.

10. Pritisnite gumb **Dokumenti**, u grupi Document manager za pristup dokumentacijskom sustavu s priloženim .xml. Iz samog dokumentacijskog sučelja zatim klikni na gumb **Spremi privitak** kako bi preuzeo kopiju na lokalno računalo.

#### Specifični gumbi

> **Novo plaćanje**: Ručno umetanje red plaćanja dobavljaču.

> **Spremi**: Sprema zaglavlje platne liste nakon unosa vrste plaćanja i bankovnog analitičkog konta.

> **Izbriši označena plaćanja**: Briše plaćanja dobavljačima stvorena ručno ili putem izrade plaćanja iz stavki.

> **Kreiraj plaćanje iz stavki**: Aktivira se nakon spremanja zaglavlja, preuzima podatke iz arhive stavki.

> **Dokumenti**:  Gumb za povezivanje s dokumentacijskim sustavom.


---

### **VIDEO TUTORIALS**

<iframe width="560" height="315" src="https://www.youtube.com/embed/CDCVq0iC29s" title="YouTube video player" frameborder="0" allowfullscreen= "true"></iframe>






