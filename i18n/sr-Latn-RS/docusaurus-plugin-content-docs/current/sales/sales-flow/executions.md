---
title: Izvršenja
sidebar_position: 7
---

Ciklus realizacije u Fluentisu služi za strukturirano i integrirano upravljanje cjelokupnim operativnim prodajnim procesom – od početne faze ponude pa sve do završne faze fakturiranja. Svaka faza obilježena je specifičnim procedurama i postavkama koje osiguravaju nesmetano i povezano upravljanje radnim tijekom.

## Konverzija ponude u narudžbu

Postupak konverzije ponude u prodajnu narudžbu može se pokrenuti na dva načina:   

- Iz [Pretraga ponuda](/docs/sales/offers/search-offers): Odabirom jedne ili više ponuda i klikom na tipku *Konverzija* koja se nalazi na traci izbornika, moguće je izvršiti masovnu konverziju.  
- Iz [Zaglavlja](/docs/sales/offers/insert-offer) ponude: Unutar pojedinačne ponude, tipka *Konverzija* u zaglavlju omogućuje pretvaranje odabrane ponude u prodajnu narudžbu.  

Ova procedura omogućuje pretvaranje prodajne ponude u stvarnu prodajnu narudžbu. Kako bi se konverzija ispravno izvršila, potrebno je u tablici [Vrsta ponude](/docs/configurations/tables/sales/sales-offer-type) konfigurirati željenu [Vrstu narudžbe](/docs/configurations/tables/sales/sales-order-types). Osim toga, ponuda mora imati unesen *Datum potvrde* u zaglavlju; u suprotnom će sustav prikazati skočnu poruku (pop-up) kako bi zatražio potvrdu ponude prije nastavka postupka.  

Tijekom postupka konverzije prikazuje se skočni prozor (pop-up) s različitim opcijama:

- Upravljanje stavkama ponude: Ako su neke stavke ponude već konvertirane u narudžbu, sustav pita korisnika želi li kreirati novu narudžbu koristeći sve stavke ponude ili samo one koje još nisu referencirane.  
- Kreiraj / ažuriraj projekt: Ova opcija omogućuje kreiranje ili ažuriranje projekta. Dostupne su opcije: *Kreiraj novi prazni projekt*, *Kreiraj novi projekt iz ponude ili Kreiraj novi projekt iz ponude i predloška projekta*. Potrebno je odabrati [Vrstu projekta](/docs/configurations/tables/project-management/project-type) koja će se kreirati. Ako projekt već postoji, potrebno je unijeti naziv projekta koji se ažurira.  
- Prijenos materijala / resursa: Ova opcija omogućuje prijenos resursa i materijala s ponude, ako je ponuda [hijerarhijska](/docs/sales/offers/insert-offer), kao stavke artikala u narudžbu.

Nakon potvrde konverzije, sustav generira novu narudžbu kupca koristeći podatke iz ponude te obavještava korisnika skočnim prozorom o uspješnoj konverziji, broju konvertirane ponude, verziji i broju generirane narudžbe kupca. Podaci izmijenjeni u matičnim podacima tijekom izrade ponude (npr. Napomene o kupcu, Dostava, Plaćanja) bit će preneseni i u generiranu narudžbu.

## Isporuka iz narudžbi u otpremnice

Postupak isporuke iz narudžbe u otpremnicu dostupan je na dva načina:  

- Masovna isporuka iz [Pretrage narudžbi](/docs/sales/sales-orders/create-new-sales-orders/search-sales-orders): U pretrazi narudžbi odaberite jednu ili više narudžbi za isporuku te kliknite na Isporuka otpremnice na traci izbornika.  
- Isporuka iz [Zaglavlja](/docs/sales/sales-delivery-notes/insert-delivery-notes/sales-dn) otpremnice: U zaglavlju otpremnice koristite tipku Isporuka iz narudžbe kako biste otvorili prozor za odabir potvrđenih narudžbi kupca koje će se prenijeti u otpremnicu.  

Ovaj postupak omogućuje pretvaranje jedne ili više prodajnih narudžbi u jednu ili više otpremnica. Prije pokretanja postupka potrebno je konfigurirati željenu vrstu otpremnice u tablici [Vrste narudžbi](/docs/configurations/tables/sales/sales-order-types). Automatizirani postupak omogućuje izradu otpremnice samo ako je narudžba ispisana i potvrđena.

Uvjeti za isporuku:

- Kupac na narudžbama mora biti isti kao kupac na otpremnici.
- Narudžba za isporuku mora imati oznaku „Ispisano” i postavljen datum potvrde narudžbe.
- Tablica „Vrste otpremnica” mora imati postavljenu oznaku „Narudžba”, koja označava da se otpremnica može generirati iz narudžbe.
- Ako se postupak pokreće iz Pretrage narudžbi, vrste dokumenata moraju biti kompatibilne: u tablici „Vrste narudžbi” vrsta narudžbe koja se isporučuje mora imati definiranu odgovarajuću vrstu otpremnice.  

Nakon odabira narudžbi i postavljanja filtara, klikom na *Prijenos* generira se otpremnica s podacima iz narudžbe. Ako je postupak uspješno izvršen, status narudžbe automatski se mijenja u „Isporučeno” ili „Djelomično isporučeno”.

## Isporuka iz otpremnica u račune

Postupak isporuke iz otpremnice u račun može se pokrenuti na dva načina:

- Iz izbornika [Procedure](/docs/sales/sales-invoices/procedures/create-invoices-from-delivery-notes): Idite na *Prodaja > Računi > Procedure > Kreiranje iz otpremnica*.
- Iz [Zaglavlja](/docs/sales/sales-invoices/invoicing/sales-invoice) računa: Koristeći tipku *Izvršenje otpremnice/primke* u traci izbornika zaglavlja računa.  

Ova procedura omogućava kreiranje jednog ili više računa na temelju jedne ili više otpremnica. Procedura se sastoji od tri glavna taba:

- Vrijednovanje: Omogućava unos filtera za odabir otpremnica za fakturiranje (sa statusom "Ispisano") i definiranje datuma kreiranja računa.  
- Parametri: Konfigurira opcije grupiranja za kreiranje računa iz više otpremnica, uključujući otpremnice iz različitih godina i poreznih razdoblja, različite vrste otpremnica ili s različitim tečajevima. Također je moguće definirati način obrade plaćanja, vraćajući podatke iz kartoteke ili zadržavajući one specificirane u otpremnicama.
- Prethodni: Omogućava pregled, filtriranje i poništavanje prethodnih fakturiranja.

Nakon odabira otpremnica i postavljanja parametara, moguće je nastaviti s kreiranjem računa klikom na *Kreiranje računa iz otpremnice*.

Evidencija iz otpremnice u račun također se može dovršiti iz samog zaglavlja računa pomoću tipke Izdavanje iz otpremnice u traci izbornika.