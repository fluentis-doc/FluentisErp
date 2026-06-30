---
title: Upravljanje kreditima
sidebar_position: 2
---

## Uvod

Iz ovog obrasca moguće je pretraživati i unositi nove pasivne kredite (hipotekarne kredite).
Funkcionalnost omogućava detaljan unos svih relevantnih podataka, naročito plana otplate, kako bi se kasnije omogućio automatski obračun i knjiženje rata u predviđenim rokovima.
Glavna polja prikazana u pregledu dostupna su i u detaljima kredita.

Za unos novog kredita kliknite na **Novo**.

Prvi obavezni podatak koji je potrebno uneti jeste **Vrsta kredita**, putem padajuće liste povezane sa tabelom **Vrste kredita** (kojoj se može pristupiti i desnim klikom ili komandom **Otvori obrazac**).

## Tabela Vrste kredita

:::note POLJA U TABELI VRSTA KREDITA

**Vrsta kredita**: šifra vrste kredita.

**Opis vrste kredita**: detaljan opis vrste kredita.

**Vrsta finansijskog toka / Opis**: polje za izbor vrste finansijskog toka (iz tabele **Vrste finansijskog toka**) koja će biti povezana sa ratama kredita u obradi **Cash Flow**, kako bi se rate automatski prikazivale u projekciji novčanog toka.

**Predložak**: računovodstveni predložak koji će se koristiti za automatsko knjiženje rata.

:::

## Detalji novog kredita

Pored ---
title: Upravljanje kreditima
sidebar_position: 2
---

## Uvod

Iz ovog obrasca moguće je pretraživati i unositi nove pasivne kredite (hipotekarne kredite).
Funkcionalnost omogućava detaljan unos svih relevantnih podataka, naročito plana otplate, kako bi se kasnije omogućio automatski obračun i knjiženje rata u predviđenim rokovima.
Glavna polja prikazana u pregledu dostupna su i u detaljima kredita.
Za unos novog kredita kliknite na **Novo**.
Prvi obavezni podatak koji je potrebno uneti jeste **Vrsta kredita**, putem padajuće liste povezane sa tabelom **Vrste kredita** (kojoj se može pristupiti i desnim klikom ili komandom **Otvori obrazac**).

## Tabela Vrste kredita

:::note POLJA U TABELI VRSTA KREDITA

**Vrsta kredita**: šifra vrste kredita.

**Opis vrste kredita**: detaljan opis vrste kredita.

**Vrsta finansijskog toka / Opis**: polje za izbor vrste finansijskog toka (iz tabele **Vrste finansijskog toka**) koja će biti povezana sa ratama kredita u obradi **Cash Flow**, kako bi se rate automatski prikazivale u projekciji novčanog toka.

**Predložak**: računovodstveni predložak koji će se koristiti za automatsko knjiženje rata.

:::

## Detalji novog kredita

Pored vrste kredita, obavezno je uneti opis ugovora i glavna konta koja će se koristiti prilikom računovodstvenih knjiženja:
- **Banka**: konto banke sa kojeg će se vršiti plaćanje rata.
- **Dug**: konto sa kojeg će se evidentirati **otplata glavnice** (na primer *Hipotekarne obaveze*).
- **Kamata**: konto na koji će se knjižiti kamata za svaku ratu.
- **Troškovi**: konto na koji će se knjižiti provizije ili drugi troškovi vezani za pojedinačnu ratu.

Ostala važna polja su iznos kredita i valuta (posebno kada nije u pitanju evro, jer se tada aktivira obračun po odgovarajućem kursu).

**APR**: godišnja efektivna kamatna stopa kredita. Ovaj podatak koristi se pri automatskom izračunavanju plana otplate.

Polje **Verzija** povezano je sa dugmetom **Nova verzija**, koje se nalazi u obrascu za pretragu. Ono omogućava da se, čak i nakon unosa plana otplate i knjiženja pojedinih rata, izvrše izmene plana uz arhiviranje prethodne verzije.

U tabeli sa detaljima unosi se **plan otplate**, koji sadrži sve planirane rate, uključujući:
- datum dospeća (koji će se koristiti u računovodstvenim postupcima),
- deo glavnice,
- deo kamate,
- pripadajuće provizije (kolona **Trošak**).

Kolonama označenim plavom bojom upravlja Fluentis i u njima se prikazuju:

- ukupan iznos rate,
- informacija o izvršenom knjiženju,
- referenca na generisani računovodstveni zapis.

## Procedure dostupne na traci sa alatkama

Dostupne procedure, odnosno izračun plana otplate, promena datuma rate i ažuriranje troškova rate, iste su kao i kod upravljanja **leasingom**, pa pogledajte [**odgovarajuću stranicu**](/docs/finance-area/leasing/new).

## Knjiženje rata kredita

Knjiženje rata vrši se pomoću komandi na traci sa alatkama **Knjiženje**, odnosno **Poništi knjiženje** za storniranje prethodno izvršenog knjiženja.rste kredita, obavezno je uneti opis ugovora i glavna konta koja će se koristiti prilikom računovodstvenih knjiženja:
- **Banka**: konto banke sa kojeg će se vršiti plaćanje rata.
- **Dug**: konto sa kojeg će se evidentirati **otplata glavnice** (na primer *Hipotekarne obaveze*).
- **Kamata**: konto na koji će se knjižiti kamata za svaku ratu.
- **Troškovi**: konto na koji će se knjižiti provizije ili drugi troškovi vezani za pojedinačnu ratu.

Ostala važna polja su iznos kredita i valuta (posebno kada nije u pitanju evro, jer se tada aktivira obračun po odgovarajućem kursu).

**APR**: godišnja efektivna kamatna stopa kredita. Ovaj podatak koristi se pri automatskom izračunavanju plana otplate.

Polje **Verzija** povezano je sa dugmetom **Nova verzija**, koje se nalazi u obrascu za pretragu. Ono omogućava da se, čak i nakon unosa plana otplate i knjiženja pojedinih rata, izvrše izmene plana uz arhiviranje prethodne verzije.

U tabeli sa detaljima unosi se **plan otplate**, koji sadrži sve planirane rate, uključujući:
- datum dospeća (koji će se koristiti u računovodstvenim postupcima),
- deo glavnice,
- deo kamate,
- pripadajuće provizije (kolona **Trošak**).

Kolonama označenim plavom bojom upravlja Fluentis i u njima se prikazuju:
- ukupan iznos rate,
- informacija o izvršenom knjiženju,
- referenca na generisani računovodstveni zapis.

## Procedure dostupne na traci sa alatkama

Dostupne procedure, odnosno izračun plana otplate, promena datuma rate i ažuriranje troškova rate, iste su kao i kod upravljanja **leasingom**, pa pogledajte [**odgovarajuću stranicu**](/docs/finance-area/leasing/new).

## Knjiženje rata kredita

Knjiženje rata vrši se pomoću komandi na traci sa alatkama **Knjiženje**, odnosno **Poništi knjiženje** za storniranje prethodno izvršenog knjiženja.