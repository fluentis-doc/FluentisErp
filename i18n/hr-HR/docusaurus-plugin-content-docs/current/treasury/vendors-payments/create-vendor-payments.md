---
title: Kreiranje plaćanja dobavljaču 
sidebar_position: 2
---
Obrazac se nalazi u **Riznica > Plaćanja dobavljaču > Unos plaćanja dobavljačima** i omogućuje kreiranje nove liste za plaćanje. Isti obrazac koristi se i za otvaranje već spremljene liste za plaćanje radi izmjene ili pregleda.

Iz obrasca za pretraživanje moguće je kreirati novi dokument putem gumba **> Novo plaćanje**, ili otvoriti već postojeći kako bi se pregledao i/ili izmijenio.

## Kako kreirati listu za plaćanje

Osnovni koraci:

1. Odabrati **Vrstu (način) plaćanja** liste za plaćanje iz prvog padajućeg polja.
2. Sljedeća se polja popunjavaju automatski:
   - **Datum izdavanja**: predlaže se današnji datum.
   - **Godina**: predlaže se tekuća godina iz sustava.
   - **Broj**: progresivna numeracija liste za plaćanje.
3. Ispuniti obavezna polja zaglavlja:
   - **Banka**:  unijeti šifru analitičkog konta iz matice banaka preko kojeg se izdaje lista za plaćanje.
   - **Bankovni račun**: automatski se popunjava na temelju banke povezane s analitičkim kontom.
   - **Početne bilješke**: slobodno polje za eventualne napomene (nije korišteno u standardu).
   - **Završne napomene**: koristi se pri knjiženju za popunjavanje opisa kontne stavke za banku.
4. Postaviti eventualne dodatne opcije:
   - **Postavi ovaj korisnički datum valute**: definira datum valute primatelja u zapisu.
5. Provjeriti statuse (oznake) liste za plaćanje:
   - **Ispisano**: nije automatski upravljano od strane programa.
   - **Datoteka je izdana**: automatski se ažurira nakon izrade datoteke.
6. Odabrati stavke za plaćanje:
   - Pritisnuti gumb **> Kreiraj plaćanje iz dospijeća plaćanja** za odabir otvorenih stavaka koje treba zatvoriti.
   - Ako je aktivirana opcija „Prikaži dospjele vrijednosti zaposlenika”, plaćanja se moraju obrađivati isključivo kroz modul Obračuna trgovačkih predstavnika.
   - Oznaka *Nametni banku za uplatu iz šifarnika dobavljača* omogućuje korištenje unaprijed definirane banke iz matice dobavljača.

7. Moguće je unijeti djelomična plaćanja ili ručno dodavati retke.
   - Pažnja: ručno dodavanje može uzrokovati razlike u kontnom saldu ako nije pravilno upravljano.

8. Provjeriti **Bilješke** u tablici: automatski se popunjavaju referencama plaćenih stavki i bit će prenesene u glavnu knjigu.

:::tip PAŽNJA
U zaglavlju liste za plaćanje nalazi se oznaka **Odobren** koja omogućuje izradu XML traka i izvršenje plaćanja. Ova oznaka pohranjuje korisnika i datum autorizacije. Može se unaprijed automatski aktivirati pristupom u formu **Parametri plaćanja dobavljaču** i aktiviranjem oznake *Ovlašteno prema zadanim postavkama*.
:::

9. Pritisnuti gumb **Kreiraj datoteku SEPA** za automatsko generiranje .xml datoteke s popisom plaćanja i automatsko arhiviranje u dokumentacijski sustav. Datoteku se može preuzeti iz dokumentacije (meni Dokumenti) i potom prenijeti u sustav online bankarstva, bez potrebe za ručnim unosom plaćanja.

10. Pritisnuti gumb **Dokumenti**, u grupi Upravljanje dokumentima za pristup sustavu dokumenata s priloženim .xml-om. Iz samog dokumentacijskog sučelja zatim klikni na gumb **Spremi privitak** kako bi se preuzela kopiju na lokalno računalo.

#### Specifični gumbi

> **Novo plaćanje**: Ručno umetanje red plaćanja dobavljaču.

> **Spremi**: Sprema zaglavlje liste za plaćanje nakon unosa vrste plaćanja i bankovnog analitičkog konta.

> **Izbriši označena plaćanja**: Briše plaćanja dobavljačima stvorena ručno ili putem izrade plaćanja iz stavki.

> **Kreiraj plaćanje iz dospijeća plaćanja**: Aktivira se nakon spremanja zaglavlja, preuzima podatke iz arhive stavki.

> **Dokumenti**:  Gumb za povezivanje s dokumentacijskim sustavom.

> **Kreiraj SEPA / inozemstvo SEPA / Piteco / zadužna plaćanja**: funkcije za izvoz odgovarajućih bankovnih datoteka u propisanom formatu.

> **Knjiženje / Povrati knjiženje**: funkcije za izravno knjiženje liste za plaćanje ili poništavanje prethodno izvršenog knjiženja. Knjiženje se izvršava za odabrani redak ili više odabranih redaka.

Prilikom pokretanja knjiženja otvara se dijaloški okvir za unos svih parametara potrebnih za generiranje knjiženja, poput datuma knjiženja, kontne sheme i knjigovodstvene temeljnice.

Dostupna je posebna opcija **Pokreni knjiženje za sve retke plaćanja**. Kada je aktivirana, sustav knjiži sve detalje liste za plaćanje koji još nisu knjiženi. Ako nije aktivirana, knjiže se samo redci prethodno označeni mišem prije pokretanja funkcije.

Funkcija poništavanja knjiženja odnosi se isključivo na trenutno odabrani redak.

Podaci o izvršenom knjiženju evidentiraju se i u postupku [**Knjiženje plaćanja dobavljačima**](/docs/treasury/vendors-payments/accounting/vendor-payments-accounting), što omogućuje naknadno poništavanje knjiženja i iz tog modula.

:::note Informacija: SEPA kontrola primatelja plaćanja
SEPA standard u određenim slučajevima provjerava podudarnost između vlasnika bankovnog računa i naziva primatelja plaćanja. Ako postoji razlika između naziva evidentiranog u matičnim podacima i naziva koji treba poslati banci, moguće je koristiti [**Alternativnu adresu**](/docs/configurations/tables/general-settings/address-types) s aktiviranom opcijom **Koristi se za SEPA**.
:::

:::note Specifično polje – Razina usluge
Omogućuje odabir unaprijed definiranog tipa usluge za bankovne transfere, primjerice:

- Trenutno plaćanje,
- PagoPA,
- Hitno plaćanje,
- ostale dostupne vrste usluga.

Odabrana vrijednost prenosi se u XML bankovnu datoteku.

Zadana vrijednost definira se u [**Parametrima plaćanja dobavljačima**](/docs/configurations/parameters/treasury/vendor-payments-parameters).
:::


---

### **VIDEO TUTORIALS**

<iframe width="560" height="315" src="https://www.youtube.com/embed/CDCVq0iC29s" title="YouTube video player" frameborder="0" allowfullscreen= "true"></iframe>






