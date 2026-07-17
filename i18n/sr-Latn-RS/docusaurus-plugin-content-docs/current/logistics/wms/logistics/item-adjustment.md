---
title: Korekcija artikla
sidebar_position: 4
---

:::important Čemu služi
Funkcionalnost **korekcije artikla** koristi se za ispravljanje zaliha artikala u skladištu i omogućava operateru sprovođenje pozitivnih ili negativnih korekcija. Putem preglednog interfejsa operater može pronaći artikl koji želi korigovati, pregledati povezane podatke i direktno u mreži izmeniti količinu. Potvrdom izmene sistem automatski generiše korektivna skladišna knjiženja, čime se obezbeđuje tačno ažuriranje stanja zaliha.
:::

Ova procedura koristi se za kreiranje pozitivnih ili negativnih korekcija artikla.

Obrazac sadrži mrežu čije se kolone menjaju u zavisnosti od filtera korišćenih tokom pretrage.

Na primer, ako se očita samo šifra lokacije, pritiskom na dugme **Traži** u donjoj mreži prikazaće se rezultati pretrage sa sledećim kolonama:

> **Artikl**: prikazuje šifru artikla;  
> **Merna jedinica**: prikazuje mernu jedinicu artikla;  
> **Količina**: prikazuje količinu koju operater može ručno promeniti ili izmeniti pomoću dugmadi **+** i **-**;  
> **Zaliha**: prikazuje zalihu artikla izračunatu na osnovu skladišnih kretanja;  
> **Zaliha (FC)**: aktivira se samo ako je oznaka **Podrazumevano WMS** uključena na kartici [Alternativne merne jedinice šifarnika artikla](/docs/erp-home/registers/items/create-new-item). Ova vrednost prikazuje zalihu izraženu u alternativnoj mernoj jedinici, izračunatu pomoću faktora konverzije;  
> **Lot**: prikazuje lot artikla;  
> **Opis artikla**: prikazuje opis artikla;  
> **Napomena**: obrazloženje koje će biti sačuvano na generisanom skladišnom knjiženju.

S druge strane, ako se očita artikl koji treba korigovati, pritiskom na dugme **Traži** u donjoj mreži prikazaće se rezultati pretrage sa sledećim kolonama:

> **Lokacija**: prikazuje lokaciju artikla;  
> **Merna jedinica**: prikazuje mernu jedinicu artikla;  
> **Količina**: prikazuje količinu koju operater može ručno promeniti ili izmeniti pomoću dugmadi **+** i **-**;  
> **Zaliha**: prikazuje zalihu artikla izračunatu na osnovu skladišnih kretanja;  
> **Zaliha (FC)**: aktivira se samo ako je oznaka **Podrazumevano WMS** uključena na kartici [Alternativne merne jedinice šifarnika artikla](/docs/erp-home/registers/items/create-new-item). Ova vrednost prikazuje zalihu izraženu u alternativnoj mernoj jedinici, izračunatu pomoću faktora konverzije;  
> **Lot**: prikazuje lot artikla;  
> **Napomena**: obrazloženje koje će biti sačuvano na generisanom skladišnom knjiženju.

:::note **Zaliha** i **Zaliha (FC)**
Važno je napomenuti da će, ako je oznaka **Podrazumevano WMS** aktivna na kartici [Alternativne merne jedinice šifarnika artikla](/docs/erp-home/registers/items/create-new-item), vrednosti u poljima **Zaliha** i **Zaliha (FC)** biti prikazane u odgovarajućoj alternativnoj mernoj jedinici.

Međutim, ako se artiklom upravlja po lotovima, vrednosti u poljima **Zaliha** i **Zaliha (FC)** biće prikazane u osnovnoj mernoj jedinici artikla, čak i kada je oznaka **Podrazumevano WMS** aktivna.
:::

Kako bi se mogla izvršiti korekcija, u mreži rezultata mora biti prikazan samo jedan zapis.

Nakon toga operater treba promeniti količinu ručno, direktnom izmenom vrednosti u mreži ili korišćenjem dugmadi **+** i **-**. Pritiskom na dugme **Potvrdi** sistem će kreirati odgovarajuća pozitivna ili negativna korektivna knjiženja.

Takođe je moguće odštampati etiketu artikla pomoću dugmeta **Štampa** ili pregledati njen izgled na terminalu putem dugmeta **Pregled**.

**Parametri ulaza/izlaza** koje je potrebno definisati u tabeli [Parametri ulaza/izlaza po korisniku](/docs/configurations/parameters/general-parameters/deliverynotes-grouping).

| Područje | Modul | Obrazac |
| :-- | :-- | :-- |
| WM | Fluentis.FluentisErp.Mvvm.WM.Views | AdjustItem |
| WM | Fluentis.FluentisErp.Mvvm.WM.Views | AdjustItem |

Parametri su navedeni dva puta zato što obrazac koristi jedan skladišni predložak ulaza za pozitivne korekcije i jedan skladišni predložak izlaza za negativne korekcije.

:::note Napomena
Ako je u [Parametrima ulaza/izlaza po korisniku](/docs/configurations/parameters/general-parameters/deliverynotes-grouping) za korisnika definisano samo jedno skladište, ono će biti automatski predloženo.

Ako je definisano više skladišta, nijedno neće biti predloženo kao podrazumevano te će korisnik moći odabrati samo jedno od skladišta navedenih u parametrima.
:::

Za sve informacije o načinu kodiranja barkodova koji se očitavaju u polju **Barkod**, pogledajte dokumentaciju za [Tokenizer barkodova](/docs/configurations/tables/general-settings/barcode-tokenizer).