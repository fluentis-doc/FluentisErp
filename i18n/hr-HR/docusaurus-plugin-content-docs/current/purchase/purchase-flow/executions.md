---
title: Izvršenja
sidebar_position: 5
---

Ciklus ispunjenja u Fluentisu služi za strukturirano i integrirano upravljanje cijelim operativnim tokom nabave, od početne faze zahtjeva za nabavu do završne faze fakturiranja. Svaka faza karakterizira se specifičnim postupcima i konfiguracijama koje osiguravaju glatko i integrirano upravljanje radnim tokom.

## Pretvorba ponude u narudžbu  

Postupak konverzije iz ponude dobavljača u narudžbu za kupnju može se pokrenuti:

- Iz izbornika [Procedure](/docs/purchase/offer-request/procedures/order-creation): odabirom *Nabava > Zahtjevi za ponudu > Procedure > Kreiranje narudžbe dobavljača iz ponude dobavljača*.

Za izvođenje pretvorbe potrebno je konfigurirati željeni tip narudžbe dobavljača u tablici [Tip zahtjeva za ponudu](/docs/configurations/tables/purchase/purchase-offer-type). 

Tijekom postupka pretvorbe pojavljuje se skočni prozor sa sljedećim opcijama:  
- Zahtjev za ponudu: omogućuje izradu jedne narudžbe za svaki zahtjev za ponudu.  
- Račun: omogućuje grupiranje zahtjeva za ponudu prema dobavljaču.  
- Zatvori povezane ponude: umeće *Datum zatvaranja* za sve ZOP-ove koji se pretvaraju u narudžbe.  

Nakon potvrde pretvorbe, sustav generira novu narudžbu dobavljača koristeći podatke iz zahtjeva za ponudu te korisnika obavještava putem skočnog prozora o uspjehu postupka.  

Za više detalja pogledajte odgovarajuću stranicu dokumentacije.  

## Pretvorba zahtjeva za nabavu u narudžbu  

Postupak kreiranja narudžbe dobavljača iz zahtjeva za nabavu može se pokrenuti:  

- Iz izbornika [Procedure](/docs/purchase/purchase-orders/procedures/create-purchase-orders-from-purchase-requests): *Nabava > Narudžbe dobavljača > Procedure > Automatsko kreiranje narudžbi*.

Ovaj postupak omogućuje izradu jedne ili više narudžbi iz jednog ili više zahtjeva za nabavu i sastoji se od pet kartica:  

- Filter Od: omogućuje definiranje filtera za odabir ZAN-ova (sa statusom „Odobreno“) koji se pretvaraju u narudžbu.    
- Odabir dobavljača: omogućuje odabir dobavljača kojem će se narudžba dodijeliti, prema kriterijima poput najbolje cijene nabave, preferiranog dobavljača, najboljih uvjeta plaćanja itd.  
- Prototipovi narudžbe: prikazuje sažetak narudžbi koje će se kreirati te omogućuje izradu nove narudžbe ili dodavanje stavki postojećoj narudžbi.  
- Parametri: konfigurira opcije za kreiranje narudžbe, kao što su tip narudžbe i podaci koji će se koristiti ako nisu definirani na artiklima. Također je moguće uključiti raspoloživosti iz različitih modula sustava.  
- Operacije: omogućuje prikaz, filtriranje i poništavanje prethodnih operacija.  

Nakon potvrde prototipa narudžbe, pritiskom na tipku *Generiraj narudžbe dobavljača* sustav kreira narudžbe prema odabranim parametrima.

Isti postupak može se koristiti i za kreiranje narudžbi dobavljača iz narudžbi kupaca. Više detalja dostupno je na ovoj [stranici](/docs/purchase/purchase-orders/procedures/create-purchase-orders-from-purchase-requests). 

## Evasione da narudžbi u otpremnice  

Postupak prijenosa narudžbi u otpremnicu (DDT) dostupan je na dva načina:  

- Iz izbornika [Procedure](/docs/purchase/purchase-delivery-note/procedures/create-delivery-notes-from-orders): putanja *Nabava > Otpremnice nabave > Procedure > Izvršenje iz narudžbi*.
- Izvršenje iz [Zaglavlja](/docs/purchase/purchase-delivery-note/insert-purchase-delivery-note/purchase-delivery-note) otpremnice: korištenjem tipke *Izvršenje iz narudžbe* otvara se prozor za odabir potvrđenih narudžbi dobavljača koje se mogu prenijeti u otpremnicu.  

Ovaj postupak omogućuje pretvaranje jedne ili više narudžbi u jednu ili više otpremnica. Prije pokretanja, potrebno je konfigurirati željeni tip otpremnice u tablici [Tipovi narudžbi dobavljača](/docs/configurations/tables/purchase/purchase-orders-type/). Automatsko kreiranje otpremnice moguće je samo ako je narudžba otisnuta i potvrđena.  

Uvjeti za izvršenje:   

- Dobavljač na narudžbama mora odgovarati dobavljaču na otpremnici.  
- Narudžba koja se izvršava mora imati oznaku "Otisnuto" i evidentiran *Datum potvrde*.
- Ako se izvršenje pokreće iz zaglavlja otpremnice, *Tip narudžbe* mora imati pridružen *Tip otpremnice*.

Pravila grupiranja narudžbi u otpremnice definiraju se u sljedećim parametrima: [Parametri grupiranja otpremnica nabave](/docs/configurations/parameters/purchase/dn-grouping).

Nakon odabira narudžbi i postavljanja filtera, klikom na, *Prijenos* generira se otpremnica s preuzetim podacima iz narudžbi. Ako je ispunjenje izvršeno ispravno, narudžba će automatski promijeniti stanje u *"Ispunjeno"* ili *"Djelomično ispunjeno"*.

Ispunjenje narudžbe u otpremnicu može se dovršiti i iz zaglavlja same fakture putem tipke *Ispunjenje narudžbe (Evasione da ordine)*.

## Evidentiranje otpremnica u račune

Postupak evidentiranja otpremnica u račun može se pokrenuti na dva načina:

- Iz izbornika [Procedure](/docs/purchase/purchase-invoices/procedures/purchase-delivery-note-valorization): andando su *Nabava > Ulazni računi > Procedure > Vrednovanje otpremnica*. 
- Iz [Zaglavlja] prodajnog računa: korištenjem tipke *Evidencija otpremnica* u zaglavlju računa.

Ovaj postupak omogućuje izradu jednog ili više računa na temelju jedne ili više otpremnica. Sastoji se od tri glavne kartice:

- Vrednovanje: omogućuje unos filtera za odabir otpremnica koje će se fakturirati (sa statusom „Kontrolirano”) te određivanje datuma kreiranja računa.  
- Parametri: konfigurira vrstu računa koji će se izraditi, ako nije definirana u tablici [Vrste otpremnica](/docs/configurations/tables/purchase/purchase-delivery-notes-type/) te koje će se reference otpremnice prenijeti na račun.  
- Prethodni: omogućuje pregled, filtriranje i poništavanje ranijih postupaka fakturiranja.  

Uvjeti grupiranja otpremnica u račun mogu se definirati u [Parametrima grupiranja ulaznih računa](/docs/configurations/parameters/purchase/invoice-grouping/).

Nakon odabira otpremnica i postavljanja parametara, izrada računa pokreće se klikom na *Vrednovanje otpremnica*.

Evidentiranje otpremnica u račun može se dovršiti i iz samog zaglavlja računa putem tipke *Evidencija otpremnica*.