---
title: Dospijeća plaćanja
sidebar_position: 1
---

Ovom obrascu se može pristupiti samo iz obrasca za **Dospijeća plaćanja** (Administracija > Dospijeća plaćanja > Dospijeća plaćanja).

Pristup se odvija na dva načina:

 1. Putem naredbe *Nova dospijeća plaćanja*
 2. Dvostrukim klikom miša na dospijeće u glavnom prikazu za *Pretraživanje dospijeća* ili odabirom naredbe *Izmijeni dospijeća plaćanja* na traci izbornika.

Iz ove pozicije moguće je:

- ručno unijeti novu stavku (bez generiranja knjigovodstvenog unosa)  

- mijenjati podatke već postojećeg dospijeća.

Konkretno, obično se s ove pozicije plaćanje može dodati ili ukloniti korištenjem odgovarajuće oznake:

![](/img/it-it/finance-area/maturity-values/maturity-values/maturity-values-management/image01.png) 

Dodavanje oznake za zaključavanje (program će automatski dodati datum i korisnika koji je zaključao stavku)

ili uklanjanjem za otključavanje (u tom trenutku će se pojaviti i korisnik koji je otključao).

![](/img/it-it/finance-area/maturity-values/maturity-values/maturity-values-management/image02.png)

**Podkonto plaćanja:** ovaj podkonto je povezan s kreiranim stavkama kako bi se moglo provjeriti plaćanje/naplate u ispisima i u simulacijama novčanog toka; stoga se može ispuniti unosom bankovnog računa tvrtke na koju se stavka odnosti. Polje će se popuniti automatski, za stavke kreirane iz knjigovodstvene evidencije, ako je u **[šifarniku dobavljača](/docs/erp-home/registers/contacts/create-new-contact/accounting-data/customer-vendors-data/finance)** popunjeno odgovarajuće polje.  

**Predstavnik/Agent**: polje se popunjava automatski za zapise generirane automatskim obračunom prodajnih računa uz naznaku agenta vezanog uz sam račun. Informacije su korisne za detaljnije filtriranje.

**Očekivani datum:** ovo polje se može ispuniti kao pomoć pri obradi **[Novčanog tijeka](/docs/treasury/cash-flow/cash-flow/cash-flow-management)** (funkcionalnost prisutna u području riznice). Stoga se može naznačiti očekivani datum preuzimanja ili plaćanja koji se razlikuje od datuma isteka stavke i koji će biti prijavljen u izračunima novčanog toka (na koje se referencira). Treba imati na umu da će se u nedostatku određene naznake definirane u dotičnom polju, očekivani datum valorizirati u obradi novčanog toka počevši od datuma isteka, dodajući podatke (ako postoje) sadržane u polje **Prosječno kašnjenje dana plaćanja** prisutno u detaljima kupca ili dobavljača.  

Za ostala polja pogledati **[Pojmovnik](/docs/guide/common/glossary/glossary-intro)** i pogledati upute koje se odnose na **[Karticu stavki u računovodstvenom zapisu](/docs/finance-area/ledger-records/records/create-ledger-record/maturity-values-tab)**.

**BILJEŠKA:**

Općenito, ručni unos stavki je neuobičajena operacija jer se stavke automatski pojavljuju kroz računovodstvene evidencije. Može se izvršiti, na primjer, za ručno umetanje nekih otvorenih stavki koje proizlaze iz prijenosa podataka iz prethodnog sustava upravljanja (kao alternativa masivnim funkcijama uvoza) ili iz drugih posebnih razloga.

Ako se, primjerice, u isto vrijeme unese računovodstveni unos koji otvara stanje kupca ili dobavljača, iz dotičnog obrasca moguće je povezati računovodstveni unos koristeći određenu naredbu koja se nalazi na traci izbornika i opisana je u nastavku.

## Grupirane dospjele vrijednosti

Moguće je spojiti druga dospijeća u dospijeće koje se trenutno uređuje. Naredba se nalazi u traci izbornika.  **Dodaj dospijeća plaćanja za grupiranje**.

Rezultat će biti sljedeći:

- spojena dospijeća više neće biti vidljiva u pregledu dospijeća  

- dospijeća koja se mijenjaju će uzeti kao svoju vrijednost ukupnu svoju vrijednost plus vrijednost spojenih dospijeća

- pojedinosti o dijelovima koji su spojeni s onim dospijećem koji se mijenja, pojavit će se u donjem pregledu.

![](/img/it-it/finance-area/maturity-values/maturity-values/maturity-values-management/image03.png)

**Za dodavanje dospijeća koje će se spojiti upotrijebiti naredbu Dodaj dospijeća u grupu na traci izbornika.**

*Specifični gumbi*
> **Dodaj dospijeća plaćanja za grupiranje**: omogućuje odabir drugih dospijeća koje će se spojiti s dospijećem koje se uređuje;   
> **Izbriši dospijeća plaćanja za grupiranje**: briše odabrano dospijeće iz prikaza 'Grupiranje dospijeća' vraćajući joj autonomiju u odnosu na dospijeće koja se uređuje (koja je jedina vidljiva u usporedbi s onima koje su spojene s njom);    
> **Kreiraj iz dospijeća plaćanja/plaćanja**: omogućuje stvaranje dospijeća iz plaćanja. Korisno za usklađivanje razlika ili operacije kompenzacije. Naredba otvara obrazac za traženje plaćanja iz kojeg možete kreirati dospijeće. Obično se izvodi odmah nakon ručnog kreiranja novog dospijeća iz obrasca za pretraživanje dospijeća;   
> **Poveznica zapisivanja**: omogućuje povezivanje dospijeća koje se uređuje s računovodstvenim zapisom (korisno ako je dospijeće kreirano ručno).  

## Povezano plaćanje

## Dodatni podaci 

Prikazuje se popis povezanih Dodatnih podataka, s mogućnošću dodavanja novih Dodatnih podataka koji su korisni samo za otvoreni dokument.  