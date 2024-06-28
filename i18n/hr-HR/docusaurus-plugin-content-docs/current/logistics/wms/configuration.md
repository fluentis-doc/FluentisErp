---
title: Konfiguriranje
sidebar_position: 2
---

**Instalacija na uređaj**

Da biste instalirali aplikaciju na uređaju, potrebno je koristiti datoteku .apk.

**Preuzimanje ažuriranja**

Ako se klijentsko okruženje ažurira, nije potrebno ponovno instalirati aplikaciju, jer će aplikacija automatski povući sve informacije s poslužitelja i preuzeti ažuriranja. Postoje specifični slučajevi u kojima je ipak potrebno zamijeniti .apk datoteku na uređaju, pa će biti potrebno ponovno instalirati aplikaciju.

**Konfiguracija u WPF-u**

- **Izbornik/Korisnik**: stvaranje prilagođenog *Izbornika* u kojem se prikazuju samo obrasci koje treba koristiti. Korisnik WMS-a mora imati označenu oznaku za  *Fluentis WMS rješenje*.

- **Parametri skladišta za unos/iznos po korisniku**: ovi parametri služe za postavljanje ograničenja za korisnike i mogu se postaviti u tablici [Parametri skladišta za unos/iznos po korisniku](/docs/configurations/parameters/general-parameters/deliverynotes-grouping) koja se nalazi u *Postavke > Opći parametri*. Ako ti parametri nisu postavljeni, korisnik može obavljati operacije premještanja na bilo kojem skladištu, ali to podrazumijeva odabir skladišta u pojedinim obrascima s odgovarajućom uzrokom. Ova operacija nije ispravna i nije upravljiva od strane operatera. U ovim parametrima moguće je navesti za svaki obrazac i svakog operatera, skladište i zadanu uzroku koja će biti automatski unesena prilikom otvaranja obrasca.       

- **Barkod tokenizator**: barkodovi se mogu konfigurirati unutar obrasca [Barkod toneknizator](/docs/configurations/tables/general-settings/barcode-tokenizer), koji se nalazi u: Tablice > Opće postavke > Barkod tokenizator. To omogućuje programu da "tumači" barkodove i izvršava određene radnje.

- **Alternativna J.M. - Zadano WMS-u**: samo za obrasce *Utovar artikla*, *Istovar artikla*, *Premještanje artikla*, *Korekcija artikla*, *Zaliha* i *Inventar*, uvedena je mogućnost manipuliranja robom putem Alternativne J.M.. Konfiguracija se postiže aktiviranjem oznake  *Zadano WMS-u* u kartici [Alternativna J.M.](/docs/erp-home/registers/items/create-new-items/item-registry/alternative-um) u *Šifraniku Artikla*. U navedenim obrascima prikazuje se samo Alternativna J.M. u polju Mjerna jedinica, a stvorene manipulacije imaju Alternativnu Mjernu jedinicu i količinu Alternativne J.M. popunjenu prema faktoru pretvorbe.

- **Obrasci u WPF-u**: za pristup obrascima u WPF-u potrebno je imati F21-WMS rješenje na korisniku. 

- **Licenca WMS**: WMS ima posvećene licence. Na kartici Licenca u wpf-u moguće je provjeriti broj licenci posvećenih WMS-u. Licenca se koristi od strane korisnika koji koristi F21-WMS rješenje. Dakle, ako se pristupi putem mobilnog uređaja, ili putem wpf-a s tim rješenjem.









  

