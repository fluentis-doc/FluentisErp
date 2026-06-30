---
title: Dospijeća plaćanja
sidebar_position: 1
---

Ovom obrascu može se pristupiti isključivo iz obrasca **Dospijeća plaćanja** (Administracija > Dospijeća plaćanja > Dospijeća plaćanja).

Obrazac se može otvoriti na dva načina:
1. Korišćenjem komande **Novo dospijeće plaćanja**.
2. Dvostrukim klikom na dospijeće u glavnom pregledu ili izborom reda i korišćenjem komande **Izmeni dospijeće plaćanja** na traci sa alatkama.

Iz ovog obrasca moguće je:

- ručno uneti novo dospijeće (bez kreiranja računovodstvenog knjiženja),
- menjati podatke postojećeg dospijeća.

Najčešća upotreba ovog obrasca jeste blokiranje ili deblokiranje plaćanja pomoću odgovarajuće opcije.

![](/img/it-it/finance-area/maturity-values/maturity-values/maturity-values-management/image01.png)

Prilikom blokiranja plaćanja program automatski evidentira datum i korisnika koji je izvršio blokadu.

Prilikom uklanjanja blokade evidentira se i korisnik koji je izvršio deblokadu.

![](/img/it-it/finance-area/maturity-values/maturity-values/maturity-values-management/image02.png)

**Podkonto plaćanja**: ovaj podkonto povezan je sa kreiranim dospijećima kako bi bilo moguće pratiti izvršena plaćanja ili naplate kroz izveštaje i simulacije novčanog toka. Zbog toga se ovde može uneti bankovni račun preduzeća na koji se dospijeće odnosi. Kod dospijeća koja su nastala iz računovodstvenih knjiženja, polje će biti automatski popunjeno ako je odgovarajući podatak definisan u **[šifarniku dobavljača](/docs/erp-home/registers/contacts/create-new-contact/accounting-data/customer-vendors-data/finance)**.

**Predstavnik/Agent**: polje se automatski popunjava za dospijeća nastala knjiženjem izlaznih faktura i sadrži agenta povezanog sa fakturom. Ovaj podatak može se koristiti za dodatno filtriranje.

**Očekivani datum**: koristi se kao pomoć pri obradi **[Novčanog toka](/docs/treasury/cash-flow/cash-flow/cash-flow-management)** (modul Riznica). Omogućava definisanje očekivanog datuma naplate ili plaćanja koji se razlikuje od datuma dospeća i koji će biti korišćen u obračunima novčanog toka.

Ako ovo polje nije popunjeno, očekivani datum određuje se na osnovu datuma dospeća, uz eventualno dodavanje broja dana definisanih u polju **Prosečno kašnjenje plaćanja** u podacima kupca ili dobavljača.
Za ostala polja pogledajte **[Pojmovnik](/docs/guide/common/glossary/glossary-intro)**, kao i dokumentaciju za **[Karticu otvorenih stavki u računovodstvenom zapisu](/docs/finance-area/ledger-records/records/ledger-record)**.

:::note[Napomena]

Ručno kreiranje dospijeća predstavlja izuzetak, jer se ona uobičajeno automatski generišu kroz računovodstvena knjiženja.
Ručni unos može biti koristan, na primer, prilikom unošenja otvorenih stavki prenetih iz prethodnog informacionog sistema (kao alternativa masovnom uvozu podataka) ili u drugim specifičnim situacijama.
Ako se istovremeno kreira i računovodstveno knjiženje kojim se otvara stanje kupca ili dobavljača, iz ovog obrasca moguće je povezati dospijeće sa odgovarajućim računovodstvenim zapisom korišćenjem posebne komande dostupne na traci sa alatkama.

:::

## Grupisana dospijeća

Moguće je spojiti druga dospijeća sa dospijećem koje se trenutno uređuje. U tu svrhu koristi se komanda **Dodaj dospijeća za grupisanje**, koja se nalazi na traci sa alatkama.

Nakon grupisanja:

- spojena dospijeća više neće biti prikazana u pregledu dospijeća,
- dospijeće koje se uređuje preuzeće ukupnu vrednost koja predstavlja zbir njegove vrednosti i vrednosti svih pridruženih dospijeća,
- detalji svih dospijeća uključenih u grupu biće prikazani u donjoj tabeli.

![](/img/it-it/finance-area/maturity-values/maturity-values/maturity-values-management/image03.png)

**Za dodavanje dospijeća u grupu koristite komandu Dodaj dospijeća u grupu na traci sa alatkama.**

### Specifična dugmad

> **Dodaj dospijeća za grupisanje**: omogućava izbor drugih dospijeća koja će biti pridružena dospijeću koje se trenutno uređuje.
> **Obriši dospijeća iz grupisanja**: uklanja izabrano dospijeće iz grupe, vraćajući mu samostalni status u odnosu na dospijeće koje se uređuje (koje ostaje jedino vidljivo u glavnom pregledu).
> **Kreiraj dospijeće iz plaćanja**: omogućava kreiranje novog dospijeća na osnovu postojećeg plaćanja. Korisno je za usklađivanje razlika ili sprovođenje kompenzacija. Komanda otvara obrazac za pretragu plaćanja iz kojeg se može kreirati novo dospijeće. Najčešće se koristi odmah nakon ručnog kreiranja novog dospijeća iz obrasca za pretragu dospijeća.
> **Poveznica zapisivanja**: omogućava povezivanje dospijeća koje se uređuje sa odgovarajućim računovodstvenim zapisom (korisno kada je dospijeće kreirano ručno).

## Povezano plaćanje

## Dodatni podaci

Prikazuje listu povezanih dodatnih podataka, uz mogućnost dodavanja novih dodatnih podataka koji se odnose isključivo na trenutno otvoreni dokument.