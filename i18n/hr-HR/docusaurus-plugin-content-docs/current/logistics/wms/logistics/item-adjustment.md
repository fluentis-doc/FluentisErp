---
title: Korekcija artikla
sidebar_position: 4
---

:::important Čemu služi
Funkcionalnost **korekcije artikla** koristi se za ispravljanje zaliha artikala u skladištu te omogućuje operateru provođenje pozitivnih ili negativnih korekcija. Putem preglednog sučelja operater može pronaći artikl koji želi korigirati, pregledati povezane podatke i izravno u mreži izmijeniti količinu. Potvrdom izmjene sustav automatski generira korektivna skladišna knjiženja, čime se osigurava točno ažuriranje stanja zaliha.
:::

Ova procedura koristi se za kreiranje pozitivnih ili negativnih korekcija artikla.

Obrazac sadrži mrežu čiji se stupci mijenjaju ovisno o filtrima korištenima tijekom pretraživanja.

Primjerice, ako se očita samo šifra lokacije, pritiskom na gumb **Traži** u donjoj mreži prikazat će se rezultati pretraživanja sa sljedećim stupcima:

> **Artikl**: prikazuje šifru artikla;  
> **Mjerna jedinica**: prikazuje mjernu jedinicu artikla;  
> **Količina**: prikazuje količinu koju operater može ručno promijeniti ili izmijeniti pomoću gumba **+** i **-**;  
> **Zaliha**: prikazuje zalihu artikla izračunatu na temelju skladišnih kretanja;  
> **Zaliha (FC)**: aktivira se samo ako je oznaka **Zadano WMS** uključena na kartici [Alternativne mjerne jedinice šifarnika artikla](/docs/erp-home/registers/items/create-new-item). Ova vrijednost prikazuje zalihu izraženu u alternativnoj mjernoj jedinici, izračunatu pomoću faktora pretvorbe;  
> **Lot**: prikazuje lot artikla;  
> **Opis artikla**: prikazuje opis artikla;  
> **Napomena**: obrazloženje koje će biti spremljeno na generirano skladišno knjiženje.

S druge strane, ako se očita artikl koji treba korigirati, pritiskom na gumb **Traži** u donjoj mreži prikazat će se rezultati pretraživanja sa sljedećim stupcima:

> **Lokacija**: prikazuje lokaciju artikla;  
> **Mjerna jedinica**: prikazuje mjernu jedinicu artikla;  
> **Količina**: prikazuje količinu koju operater može ručno promijeniti ili izmijeniti pomoću gumba **+** i **-**;  
> **Zaliha**: prikazuje zalihu artikla izračunatu na temelju skladišnih kretanja;  
> **Zaliha (FC)**: aktivira se samo ako je oznaka **Zadano WMS** uključena na kartici [Alternativne mjerne jedinice šifarnika artikla](/docs/erp-home/registers/items/create-new-item). Ova vrijednost prikazuje zalihu izraženu u alternativnoj mjernoj jedinici, izračunatu pomoću faktora pretvorbe;  
> **Lot**: prikazuje lot artikla;  
> **Napomena**: obrazloženje koje će biti spremljeno na generirano skladišno knjiženje.

:::note **Zaliha** i **Zaliha (FC)**
Važno je napomenuti da će, ako je oznaka **Zadano WMS** aktivna na kartici [Alternativne mjerne jedinice šifarnika artikla](/docs/erp-home/registers/items/create-new-item), vrijednosti u poljima **Zaliha** i **Zaliha (FC)** biti prikazane u odgovarajućoj alternativnoj mjernoj jedinici.

Međutim, ako se artiklom upravlja po lotovima, vrijednosti u poljima **Zaliha** i **Zaliha (FC)** bit će prikazane u osnovnoj mjernoj jedinici artikla, čak i kada je oznaka **Zadano WMS** aktivna.
:::

Kako bi se mogla izvršiti korekcija, u mreži rezultata mora biti prikazan samo jedan zapis.

Nakon toga operater treba promijeniti količinu ručno, izravnom izmjenom vrijednosti u mreži ili korištenjem gumba **+** i **-**. Pritiskom na gumb **Potvrdi** sustav će kreirati odgovarajuća pozitivna ili negativna korektivna knjiženja.

Također je moguće ispisati etiketu artikla pomoću gumba **Ispis** ili pregledati njezin izgled na terminalu putem gumba **Pregled**.

**Parametri ulaza/izlaza** koje je potrebno definirati u tablici [Parametri ulaza/izlaza po korisniku](/docs/configurations/parameters/general-parameters/deliverynotes-grouping).

| Područje | Modul | Obrazac |
| :-- | :-- | :-- |
| WM | Fluentis.FluentisErp.Mvvm.WM.Views | AdjustItem |
| WM | Fluentis.FluentisErp.Mvvm.WM.Views | AdjustItem |

Parametri su navedeni dva puta zato što obrazac koristi jedan skladišni predložak ulaza za pozitivne korekcije te jedan skladišni predložak izlaza za negativne korekcije.

:::note Napomena
Ako je u [Parametrima ulaza/izlaza po korisniku](/docs/configurations/parameters/general-parameters/deliverynotes-grouping) za korisnika definirano samo jedno skladište, ono će biti automatski predloženo.

Ako je definirano više skladišta, nijedno neće biti predloženo kao zadano te će korisnik moći odabrati samo jedno od skladišta navedenih u parametrima.
:::

Za sve informacije o načinu kodiranja barkodova koji se očitavaju u polju **Barkod**, pogledajte dokumentaciju za [Tokenizer barkodova](/docs/configurations/tables/general-settings/barcode-tokenizer).