---
title: Postavke tablica za upravljanje  
sidebar_position: 4
---

Za ispravno upravljanje elektroničkom fakturacijom potrebno je provjeriti i dopuniti određene upravljačke tablice, kako bi se omogućilo generiranje XML datoteka s ispravnim kodiranjem propisanim tehničkim specifikacijama koje je objavila Porezna uprava (Agenzia delle Entrate).
Postavke zahtijevaju povezivanje uobičajenih vrijednosti korištenih u sustavu s vrijednostima predviđenima za kodiranje XML datoteke.
Primjerice, vrste dokumenata potrebne za elektroničko fakturiranje moraju biti evidentirane u Fluentisu tako da se svakoj vrsti dokumenta dodijeli odgovarajući kod prema tehničkim specifikacijama Porezne uprave.  

## Tablica Vrste dokumenata   

Za dokument faktura, u ovoj Fluentis tablici, u stupcu **Codice PA** potrebno je navesti vrstu dokumenta u alfanumeričkom formatu, duljine 4 znaka. Dozvoljene vrijednosti su:        
TD01 Faktura      
TD02 Predujam/akontacija na fakturu        
TD03 Predujam/akontacija na račun         
TD04 Knjižna obavijes      
TD05 Zadužnica       
TD06 Parcella         
TD20 Samofaktura        
         
Vrijednosti koje je potrebno povezati ili provjeriti (obvezno popuniti):  

| Tablica | Obvezne vrijednosti |   
| :-- | :-- |
| Poduzeće (Tabele > Opće postavke > Tvrtka) | Opis, PDV broj, porezni broj (obvezno ako PDV nije postavljen), šifra države, porezni režim, telefon/FAX, fiskalna adresa i poštanski broj (CAP), grad, pokrajina, članovi / status likvidacije, REA ured, REA registarski broj, temeljni kapital (s uključenim decimalama odvojenima točkom) | 
| Stopa PDV-a (Tabele > Administracija > Stopa PDV-a) | Kod javne uprave: to je kod koji jedinstveno identificira stopu PDV-a u XML datotekama; specifični kod za svaku stopu može se pronaći u Tehničkim specifikacijama koje je izdala Porezna uprava za elektroničko fakturiranje. | 
| Tablica Tipovi Dokumenta (Tabele > Administracija > Tipovi Dokumenta) | Tablica Tipovi dokumenata (Tabele > Opće postavke > Vrsta dokumenta) | Kod javne uprave: to je kod koji jedinstveno identificira Tip dokumenta na koji se XML datoteka odnosi (račun, nota o kreditu...); specifični kod za svaku stopu moguće je pronaći u Tehničkim specifikacijama koje je objavila Agencija za prihode za elektroničko fakturiranje. | 
| Tablica Tipovi Plaćanja (Tabele > Opće postavke  > Tipovi plaćanja) | Kod javne uprave: to je kod koji jedinstveno identificira Tip plaćanja u XML datoteci; specifični kod za svaku stopu moguće je pronaći u Tehničkim specifikacijama koje je objavila Agencija za prihode za elektroničko fakturiranje | 
| Tipovi računa prodaje (Tabele > Prodaje > Tipovi Faktura) | Isključeni iz El. Fakt.: provjera se mora postaviti SAMO za dokumente koje se namjerava isključiti iz toka elektroničkog fakturiranja. Na temelju te postavke, dokumenti se ne mogu obraditi za tok elektroničkog fakturiranja | 
| Tipovi odbitaka (Tabele > Administracija > Tipovi zadržavanja) | Tipovi odbitaka za elektroničko fakturiranje: to je kod koji jedinstveno identificira Tip odbitka u XML datoteci; specifični kod za svaku stopu moguće je pronaći u Tehničkim specifikacijama koje je objavila Agencija za prihode za elektroničko fakturiranje | 
| Tablica Valute (Tabele > Opće postavke > Valute) | KodIso: za valutu postavljenu na Euro, unijeti ISO kod EUR. | 
| Tablica Tipovi Dokumenata (Tabele > Opće postavke > Tip Dokumenta) | Tip dokumenta Elektroničko fakturiranje: identificira tip dokumenta vezan uz elektroničko fakturiranje. Mora biti unesen s vrijednošću KOD: *Elektroničko fakturiranje* i OPIS: *Elektroničko izdavanje računa* te ostavljajući nepromijenjene ostale predložene vrijednosti |

## Šifarnik artikala

Za ispravno upravljanje slučajevima artikala koji zahtijevaju navođenje specifičnih normativnih ili ministarskih kodova na računu, kao što su kod AIC (ministarski kod proizvoda) za neke lijekove ili kod DM0-DM1, potrebno je evidentirati u tablici **Tipovi barkoda** specifičan barkod označen flagom **Izvoz za javnu upravu** i navesti ga u kartonu artikla u panelu **Kodovi barkoda**, polje **Tip barkoda**.

## Split payment

Za ispravno upravljanje slučajem Split Payment na dokumentima upućenim javnoj upravi, tehničke specifikacije vezane uz popunjavanje XML datoteke zahtijevaju određivanje specifične vrste obveze PDV-a, u alfanumeričkom formatu dužine 1 znak. Dozvoljene vrijednosti su sljedeće:  
*I* PDV s trenutnom obvezom 
*D* PDV s odgođenom obvezom  
*S* podjela plaćanja

Stoga je u Fluentisu potrebno postaviti na računovodstvene uzroke povezane s vrstom prodajnog dokumenta prema javnoj upravi, vrstu pokreta 29 – PDV prodaje s Split Payment.
