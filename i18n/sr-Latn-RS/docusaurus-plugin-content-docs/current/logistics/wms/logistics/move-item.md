---
title: Premesti artikl
sidebar_position: 3
---

:::important Čemu služi
Funkcija **Premesti artikl** omogućava premeštanje artikla sa jedne skladišne lokacije na drugu unutar skladišta. Operater može odrediti polaznu i odredišnu skladišnu lokaciju, kao i količinu koja se premešta. Ako se artikl vodi po lotovima, moguće je navesti i lot koji se premešta. Ova procedura automatski generiše skladišno knjiženje potrebno za evidentiranje izlaza sa stare i ulaza na novu skladišnu lokaciju.
:::

Ova procedura koristi se za kreiranje knjiženja premeštaja artikla sa jedne skladišne lokacije na drugu.

Prvim očitavanjem skladišne lokacije u obrascu popuniće se polje **Polazna skladišna lokacija**, dok će se drugim očitavanjem popuniti **Odredišna skladišna lokacija**.

Svako naredno očitavanje skladišne lokacije menjaće samo odredišnu skladišnu lokaciju.

Nakon toga moguće je uneti količinu za premeštaj pomoću dugmadi **+** i **-** ili direktnim unosom vrednosti.

Takođe je moguće odštampati etiketu artikla pomoću dugmeta **Štampa** ili prikazati pregled štampe direktno na terminalu pomoću dugmeta **Pregled**.

Dugme **Obriši sve** omogućava brisanje svih unetih podataka iz obrasca.

Ako se artikl vodi po lotovima, prikazaće se dodatno polje za unos lota koji se premešta.

U donjem delu obrasca nalazi se tabela koja prikazuje zalihu i raspoloživu količinu artikla, uz eventualni prikaz lota, skladišne lokacije, alternativne merne jedinice i zalihe izražene u alternativnoj količini.

Tabela sadrži sledeće kolone:

> **Merna jedinica**: prikazuje osnovnu (glavnu) mernu jedinicu artikla;      
> **Raspoloživo**: prikazuje raspoloživu količinu artikla (količinu koja nije rezervisana);       
> **Zaliha (osn. JM)**: prikazuje zalihu izraženu u osnovnoj mernoj jedinici artikla;        
> **Alternativna merna jedinica**: prikazuje alternativnu mernu jedinicu artikla; prikazuje se samo ako je oznaka **Podrazumevano WMS** aktivna na kartici [Alternativne merne jedinice šifarnika artikla](/docs/erp-home/registers/items/create-new-item);                     
> **Zaliha**: prikazuje se samo ako je oznaka **Podrazumevano WMS** aktivna na kartici [Alternativne merne jedinice šifarnika artikla](/docs/erp-home/registers/items/create-new-item). Ova vrednost prikazuje zalihu izraženu u alternativnoj mernoj jedinici, izračunatu na osnovu skladišnih kretanja;         
> **Zaliha (FC)**: prikazuje se samo ako je oznaka **Podrazumevano WMS** aktivna na kartici [Alternativne merne jedinice šifarnika artikla](/docs/erp-home/registers/items/create-new-item). Ova vrednost prikazuje zalihu izraženu u alternativnoj mernoj jedinici, izračunatu pomoću faktora konverzije;    
> **Skladišna lokacija**: prikazuje polaznu skladišnu lokaciju artikla;                      
> **Lot**: prikazuje lot artikla. Prikazuje se samo ako se artikl vodi po lotovima;     
> **Serijski broj**: prikazuje serijski broj artikla. Prikazuje se samo ako se artikl vodi po serijskim brojevima.     

Odabirom reda u tabeli, podaci se automatski prenose u odgovarajuća polja obrasca.

Potvrdom unosa generiše se skladišno knjiženje koje, osim glavnog knjiženja izlaza, sadrži i protustavku kojom se artikl knjiži na novu skladišnu lokaciju.

:::note Napomena
Predložak skladišta koji se koristi mora biti predložak izlaza robe sa definisanim *protupredloškom* za ulaz robe.
:::

**Parametri ulaza/izlaza robe** koje je potrebno definisati u tabeli [Parametri ulaza/izlaza robe po korisniku](/docs/configurations/parameters/general-parameters/deliverynotes-grouping).

| Područje | Modul | Obrazac |
| :-- | :-- | :-- |
| WM | Fluentis.FluentisErp.Mvvm.WM.Views | MoveItem |

:::note Napomena
Ako je u [Parametrima ulaza/izlaza robe po korisniku](/docs/configurations/parameters/general-parameters/deliverynotes-grouping) za korisnika povezano samo jedno skladište, ono će biti automatski predloženo. Ako je povezano više skladišta, nijedno neće biti predloženo te će korisnik moći da odabere samo jedno od definisanih skladišta.
:::

Za sve informacije o načinu kodiranja barkodova koji se očitavaju u polju **Barkod**, pogledajte dokumentaciju za [Tokenizer barkodova](/docs/configurations/tables/general-settings/barcode-tokenizer).