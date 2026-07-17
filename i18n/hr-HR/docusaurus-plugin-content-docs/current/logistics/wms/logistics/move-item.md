---
title: Premjesti artikl
sidebar_position: 3
---

:::important Čemu služi
Funkcija **Premjesti artikl** omogućuje premještanje artikla s jedne skladišne lokacije na drugu unutar skladišta. Operater može odrediti polaznu i odredišnu skladišnu lokaciju te količinu koja se premješta. Ako se artikl vodi po lotovima, moguće je navesti i lot koji se premješta. Ova procedura automatski generira skladišno knjiženje potrebno za evidentiranje izlaza sa stare i ulaza na novu skladišnu lokaciju.
:::

Ova se procedura koristi za kreiranje knjiženja premještaja artikla s jedne skladišne lokacije na drugu. 

Prvim očitavanjem skladišne lokacije u obrascu popunit će se polje **Polazna skladišna lokacija**, dok će se drugim očitavanjem popuniti **Odredišna skladišna lokacija**.     
Svako sljedeće očitavanje skladišne lokacije mijenjat će samo odredišnu skladišnu lokaciju.     

Nakon toga moguće je unijeti količinu za premještaj pomoću gumba **+** i **-** ili izravnim unosom vrijednosti.  

Također je moguće ispisati etiketu artikla pomoću gumba **Ispis** ili prikazati pregled ispisa izravno na terminalu pomoću gumba **Pregled**.     

Gumb **Očisti sve** omogućuje brisanje svih unesenih podataka iz obrasca.      

Ako se artikl vodi po lotovima, prikazat će se dodatno polje za unos lota koji se premješta.  

U donjem dijelu obrasca nalazi se tablica koja prikazuje zalihu i raspoloživu količinu artikla, uz eventualni prikaz lota, skladišne lokacije, alternativne mjerne jedinice i zalihe izražene u alternativnoj količini.

Tablica sadrži sljedeće stupce:

> **Mjerna jedinica**: prikazuje osnovnu (glavnu) mjernu jedinicu artikla;      
> **Raspoloživo**: prikazuje raspoloživu količinu artikla (količinu koja nije rezervirana);       
> **Zaliha (osn. JM)**: prikazuje zalihu izraženu u osnovnoj mjernoj jedinici artikla;        
> **Alternativna mjerna jedinica**: prikazuje alternativnu mjernu jedinicu artikla; prikazuje se samo ako je oznaka **Zadano WMS** aktivna na kartici [Alternativne mjerne jedinice šifarnika artikla](/docs/erp-home/registers/items/create-new-item);                     
> **Zaliha**: prikazuje se samo ako je oznaka **Zadano WMS** aktivna na kartici [Alternativne mjerne jedinice šifarnika artikla](/docs/erp-home/registers/items/create-new-item). Ova vrijednost prikazuje zalihu izraženu u alternativnoj mjernoj jedinici, izračunatu na temelju skladišnih kretanja;         
> **Zaliha (FC)**: prikazuje se samo ako je oznaka **Zadano WMS** aktivna na kartici [Alternativne mjerne jedinice šifarnika artikla](/docs/erp-home/registers/items/create-new-item). Ova vrijednost prikazuje zalihu izraženu u alternativnoj mjernoj jedinici, izračunatu pomoću faktora pretvorbe;    
> **Skladišna lokacija**: prikazuje polaznu skladišnu lokaciju artikla;                      
> **Lot**: prikazuje lot artikla. Prikazuje se samo ako se artikl vodi po lotovima;     
> **Serijski broj**: prikazuje serijski broj artikla. Prikazuje se samo ako se artikl vodi po serijskim brojevima.     

Odabirom retka u tablici, podaci se automatski prenose u odgovarajuća polja obrasca.

Potvrdom unosa generira se skladišno knjiženje koje, osim glavnog knjiženja izlaza, sadrži i protustavku kojom se artikl knjiži na novu skladišnu lokaciju.

:::note Napomena
Predložak skladišta koji se koristi mora biti predložak izlaza robe s definiranim *protupredloškom* za ulaz robe.
:::

**Parametri ulaza/izlaza robe** koje je potrebno definirati u tablici [Parametri ulaza/izlaza robe po korisniku](/docs/configurations/parameters/general-parameters/deliverynotes-grouping).

| Područje | Modul | Obrazac |
| :-- | :-- | :-- |
| WM | Fluentis.FluentisErp.Mvvm.WM.Views | MoveItem |

:::note Napomena
Ako je u [Parametrima ulaza/izlaza robe po korisniku](/docs/configurations/parameters/general-parameters/deliverynotes-grouping) za korisnika povezano samo jedno skladište, ono će biti automatski predloženo. Ako je povezano više skladišta, nijedno neće biti predloženo te će korisnik moći odabrati samo jedno od definiranih skladišta.
:::

Za sve informacije o načinu kodiranja barkodova koji se očitavaju u polju **Barkod**, pogledajte dokumentaciju za [Tokenizer barkodova](/docs/configurations/tables/general-settings/barcode-tokenizer).