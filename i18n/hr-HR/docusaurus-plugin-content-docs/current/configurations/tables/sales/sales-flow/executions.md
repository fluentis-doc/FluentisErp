---
title: Evidencije
sidebar_position: 7
---

Ciklus evidencija u Fluentisu služi za strukturirano i integrirano upravljanje cijelim prodajnim procesom — od početne faze ponude pa sve do završne faze fakturiranja.
Svaka faza obuhvaća specifične postupke i postavke koje omogućuju učinkovit, povezan i transparentan tijek rada.

## Pretvorba ponude u prodajni nalog

Postupak pretvorbe ponude u prodajni nalog može se pokrenuti na dva načina:  

- Iz [Pretrage ponuda](/docs/sales/offers/search-offers): Odabirom jedne ili više ponuda i klikom na gumb *Pretvorba* u alatnoj traci moguće je izvršiti grupnu (masovnu) pretvorbu.  
- Iz [Zaglavlja ponude](/docs/sales/offers/insert-offer): U okviru pojedinačne ponude klikom na gumb *Pretvorba* moguće je izravno pretvoriti tu ponudu u prodajni nalog. 

Ovaj postupak omogućuje pretvaranje prodajne ponude u stvarni prodajni nalog. Kako bi se pretvorba uspješno izvršila, potrebno je konfigurirati željeni [Tip nalog](/docs/configurations/tables/sales/sales-order-types) u tablici [Tip ponude](/docs/configurations/tables/sales/sales-offer-type). Također, ponuda mora sadržavati *Datum potvrde* u zaglavlju; ako ga nema, sustav će prikazati poruku kojom traži potvrdu ponude prije nastavka postupka.  

Tijekom pretvorbe pojavljuje se dijalog s više opcija:

- Upravljanje stavkama ponude: Ako su neke stavke ponude već prenesene u nalog, sustav pita želi li korisnik stvoriti novi nalog koristeći sve stavke ponude ili samo one koje još nisu prenesene.    
- **Kreiraj / Ažuriraj projekt:** Ova opcija omogućuje kreiranje ili ažuriranje projekta. Dostupne su mogućnosti: *Stvori novi prazan projekt*, *Stvori projekt iz ponude* ili *Stvori projekt iz ponude i predloška projekta*. Potrebno je odabrati [Vrstu projekta](/docs/configurations/tables/project-management/project-type) Ako projekt već postoji, unosi se naziv projekta koji se ažurira.  
- **Prijenos materijala / resursa:** Ako je ponuda [hijerarhijska](/docs/sales/offers/insert-offer), moguće je prenijeti materijale i resurse iz ponude kao stavke artikala u nalog.    

Nakon potvrde postupka, sustav automatski kreira novi prodajni nalog koristeći podatke iz ponude i prikazuje poruku o uspješnoj pretvorbi s podacima o broju ponude, verziji i broju generiranog naloga.  
Sve informacije koje su izmijenjene u šifrarniku tijekom izrade ponude (npr. napomene o kupcu, način isporuke, uvjeti plaćanja) prenose se i u novi nalog.  

## Isporuka iz Narudžbi u Otpremnice

Postupak isporuke iz narudžbe u otpremnicu dostupan je na dva načina:

- Masovna isporuka iz [Pretraživanja narudžb](/docs/sales/sales-orders/create-new-sales-orders/search-sales-orders): U pretraživanju narudžbi potrebno je odabrati jednu ili više narudžbi koje želite isporučiti te kliknuti na Isporuka otpremnice u traci izbornika.
- Isporuka iz [Zaglavlja](/docs/sales/sales-delivery-notes/insert-delivery-notes/sales-dn) otpremnice: U zaglavlju otpremnice koristi se tipka Isporuka iz narudžbe, kojom se otvara prozor za odabir potvrđenih narudžbi kupca koje će se prenijeti u otpremnicu.

Ovaj postupak omogućuje pretvaranje jedne ili više prodajnih narudžbi u jednu ili više otpremnica. Prije pokretanja postupka potrebno je u tablici [Vrsta narudžbe](/docs/configurations/tables/sales/sales-order-types) postaviti željenu vrstu otpremnice. Automatski postupak omogućuje kreiranje otpremnice samo ako je narudžba ispisana i potvrđena.

Uvjeti za isporuku su sljedeći:

- Kupac u narudžbi mora biti isti kao kupac u otpremnici.
- Narudžba koja se isporučuje mora imati označenu opciju Ispisano i upisan Datum potvrde narudžbe.
- U tablici Vrste otpremnica mora biti označen parametar Narudžba, koji označava da se otpremnica može generirati iz narudžbe.  
- Ako se postupak pokreće iz Pretraživanja narudžbi, vrste dokumenata moraju biti kompatibilne: u tablici Vrste narudžbi, vrsta narudžbe koja se isporučuje mora imati postavljenu odgovarajuću vrstu otpremnice.  

Nakon odabira narudžbi i postavljanja filtara, klikom na Prijenos generira se otpremnica s podacima iz narudžbe. Ako je postupak uspješno izvršen, narudžba automatski mijenja status u Isporučeno ili Djelomično isporučeno.

## Isporuka iz Otpremnice u Račune

Postupak isporuke iz otpremnice u račun može se pokrenuti na dva načina:

- Iz izbornika [Postupci](/docs/sales/sales-invoices/procedures/create-invoices-from-delivery-notes): putem *Prodaja > Računi prodaje > Postupci > Kreiranje iz otpremnica*.
- Iz [Zaglavlja](/docs/sales/sales-invoices/invoicing/sales-invoice) računa prodaje: korištenjem tipke *Isporuka otpremnice* u zaglavlju računa.

Ovaj postupak omogućuje kreiranje jednog ili više računa iz jedne ili više otpremnica. Postupak se sastoji od tri glavne kartice:

- Vrednovanje: Omogućuje postavljanje filtara za odabir otpremnica koje će se fakturirati (s oznakom Ispisano) te definiranje datuma izrade računa.  
- Parametri: Služi za konfiguriranje opcija grupiranja prilikom kreiranja jednog računa iz više otpremnica, kao što su uključivanje otpremnica iz različitih godina i razdoblja PDV-a, različitih vrsta otpremnica ili s različitim tečajevima. Također je moguće definirati način obrade uvjeta plaćanja – zadržati ih iz otpremnice ili preuzeti iz podataka o kupcu.  
- Prethodne obrade: Omogućuje pregled, filtriranje i poništavanje prethodno izvršenih fakturiranja.  

Nakon što se odaberu otpremnice i postave parametri, klikom na *Kreiraj račun iz otpremnice* pokreće se izrada računa.

Isporuka iz otpremnice u račun može se dovršiti i iz samog zaglavlja računa pomoću tipke Isporuka otpremnice.