---
title: Parametri slaganja robe 
sidebar_position: 6
---

:::important Za što se koristi  
Kroz ovu funkcionalnost korisnici mogu konfigurirati i prilagoditi sustav prema različitim operativnim potrebama, osiguravajući glatko i usklađeno funkcioniranje logističkih aktivnosti. 

U ovom odjeljku moguće je dodijeliti unaprijed definirana skladišta i uzroke otpisa, odlučiti hoće li se provjeravati dostupnost artikala te definirati treba li unos informacija poput šifre operatera biti obavezan. Ostale opcije uključuju upravljanje artiklima po lotovima ili serijskim brojevima te kontrolu količina prilikom kreiranja pickinga. Ovaj modul za parametrizaciju ne samo da olakšava operativno poslovanje, već i osigurava da su procedure u skladu s internim pravilima tvrtke i važećim propisima, omogućujući učinkovito i precizno upravljanje skladištem.
:::

Obrazac se otvara preko putanje **Parametri > Logistika > Parametri slaganja robe** e omogućuje provođenje svih parametara u vezi s operacijom komisioniranja ili otpremnih lista. Tek nakon odgovarajuće parametrizacije ove maske moguće je koristiti modul Picking.

#### Specifična tipka

> **Vrati**: tipka za vraćanje parametara na prethodno stanje. 

## Općenito 

U ovoj kartici možete parametrirati opće informacije o upravljanju komisioniranjem. Moguće je dodijeliti skladište i razlog koji će se prema zadanim postavkama koristiti za istovar robe. Da biste to učinili, jednostavno označite parametre **Prioritet parametara uzimanja sa zaliha** i označite **Skladište** i **Predložak**.  
Također je moguće odabrati hoće li se u trenutku istovara **Provjeriti raspoloživost**, **Isključiti narudžbe kupaca** iz raspoloživosti i/ili biti blokiran ako raspoloživost ne zadovoljava količinu koja se premješta (**Obavezna raspoloživost**).

Ako odlučite provjeriti dostupnost, možete odrediti kako se potonji treba izračunati na temelju **Podizvođač**, **Planirane proizvodnje**, **Nabave**, **Otpuštene proizvodnje**, **Prodaje** i/ili **Skladišta**.

Kao opće postavke moguće je odabrati da li je kod kreiranja komisioniranja obavezan unos **Šifre korisnika**, da li **Numeracija mora biti progresivna po godinama**, da li je obvezna **Šifra korisnika** koja **potvrđuje picking**.

Ako postoji određeno upravljanje artiklima, može se aktivirati **Upravljanje veličinom i bojom**.

U odjeljku **Upravljanje lotovima i serijskim brojevima** moguće je aktivirati sljedeće flagove:  

**Upravljanje lotovima / serijskim brojevima**: omogućuje upravljanje lotovima i serijskim brojevima putem odgovarajućih mreža.

**Prijedlog lotova / serijskih brojeva**: ako je aktivan, pri promjeni količine na liniji picking-a, ako je artikl upravljan lotovima s tipom preuzimanja FIFO ili prema datumu isteka, lotovi se automatski predlažu u pripadajućoj mreži.

**Automatski kretanje označenog**: ako je aktivan, u obrascima *Upravljanje označavanjem* i *Potvrdite odabir* automatski se vrši otpremanje stavke; u tom slučaju nije potrebno provoditi otpremu putem [Istovareno sa označenih redova](/docs/logistics/picking/unload-check-row-management); ako flag nije aktivan, označavanje će se provesti, ali bez pokreta koji će se tada morati izvršiti pomoću procedure [Istovareno sa označenih redova](/docs/logistics/picking/unload-check-row-management).

**Prikaz tablice izvršenja**: ako je flag aktivan, omogućuje se prikaz u obliku tablice u obrascu za izvršenje pickinga.  

**Prikaz stabla izvršenja**: ako je flag aktivan, omogućuje se prikaz u obliku stabla u obrascu za izvršenje pickinga.  

## WMS Mobile

U ovoj kartici možete definirati parametre za rad Komisioniranja u WMS Mobile. 

**Tip konta prijevoznika**: predstavlja prijevoznika koji će biti uključen u odabire koje kreira WMS Mobile,   

Također možete odabrati različite vrste slaganja.

Također je preporučljivo navesti razloge koji će se koristiti za sljedeće pokrete:  

- preuzimanje transportne jedinice za potvrdu prijenosa; 

- predloženi razlog za Picking istovar; 

- istovar za otpremno skladište; 

- utovar za odredišno skladište; 

- razlog za istovar proturadnog skladišta. 

Za sve što nije detaljno opisano u ovom dokumentu o uobičajenom funkcioniranju obrazaca, pogledajte sljedeću poveznicu [Zajedničke funkcije, tipke i polja](/docs/guide/common).