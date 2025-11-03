---
title: Pretraga Ponuda  
sidebar_position: 2
---

Forma se otvara putem puta **Prodaja > Ponude > Pretraga ponuda**.   
Za objašnjenje funkcionalnosti zajedničkih za sve prodajne dokumente pogledajte sekciju [Prodaja](/docs/sales/sales-intro).

Prva tipka na alatnoj traci specifična za ovu formu je **Nova verzija**: omogućuje kreiranje nove verzije odabrane ponude; ova funkcionalnost omogućuje očuvanje povijesti prethodnih ponuda.      


Druga tipka je **Konverzija**: omogućuje pretvaranje prodajne ponude u stvarni narudžbeni dokument. Da bi proces tekao ispravno, potrebno je konfigurirati željeni Tip narudžbe u tablici[Tipovi ponuda](/docs/configurations/tables/sales/sales-offer-type). Također, da bi ponuda mogla biti uspješno konvertirana, mora imati uneseni **Datum potvrde** u zaglavlju; u suprotnom, sustav će korisniku prikazati pop-up poruku o potrebi potvrde ponude prije nastavka.  
Kada su svi potrebni podaci uneseni, pokretanjem procedure pojavljuje se pop-up s sljedećim opcijama:  
- Ako su barem neki redovi ponude već konvertirani u narudžbu, sustav će pitati korisnika želi li kreirati novu narudžbu koristeći sve redove ponude ili samo one koji još nisu referencirani.              
- **Kreiraj/Ažuriraj projekt**: ovim flagom se sustavu kaže da uz kreiranje narudžbe treba kreirati ili ažurirati projekt. Ako projekt treba biti kreiran, potrebno je označiti opciju *Kreiraj Novi prazan projekt*, *Kreiraj Novi projekt iz Ponude* ili **Kreiraj Novi projekt iz Ponude i Projektnog Templatea**;  u svim slučajevima potrebno je unijeti **[Tip projekta](/docs/configurations/tables/project-management/project-type)** u predviđeno polje, a u zadnjem slučaju sustav će zatražiti i unos projekta **Template**. Ako projekt već postoji i treba ga ažurirati podacima iz ponude, potrebno je popuniti polje **Projekt** s projektom koji se ažurira.  
- **Prenesi Materijale/Resurse iz redova Ponude kao redove Narudžbe**: ovim flagovima u narudžbu se prenose redovi artikala s resursima i materijalima iz ponude, ako je ponuda hijerarhijska.  

Nakon potvrde pop-upa, sustav će generirati novu Narudžbu kupca koristeći podatke iz ponude. Ovu narudžbu je moguće pregledavati i uređivati u sekciji [Pretraga narudžbi kupaca](/docs/sales/sales-orders/create-new-sales-orders/search-sales-orders). Korisnik će također dobiti pop-up poruku o uspješnosti konverzije, broju konvertirane ponude i verziji, te poruku s brojem narudžbe generirane konverzijom.    
Ako se u Ponudi izmijene podaci predloženi iz kartice kupca, oni će se prenijeti u Narudžbu generiranu konverzijom, uključujući: Napomene kupca, Dostavu, Plaćanja, Popuste, Agente, Odredišta i Prijevoznike.        
U slučaju konverzije više ponuda u jednu ili više narudžbi, grupiranje mora biti podešeno u [Parametri grupiranja narudžbi](/docs/configurations/parameters/sales/orders-grouping).