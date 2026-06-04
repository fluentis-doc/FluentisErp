---
title: Izvršenja
sidebar_position: 5
---

Ciklus ispunjenja u Fluentisu služi za strukturirano i integrirano upravljanje cijelim operativnim tokom nabave, od početne faze upita za nabavu do završne faze fakturiranja. Svaka faza karakterizira se specifičnim postupcima i konfiguracijama koje osiguravaju glatko i integrirano upravljanje radnim tokom.

## Pretvorba ponude u narudžbu  

Postupak konverzije iz ponude dobavljača u narudžbu za kupnju može se pokrenuti:

- Iz izbornika [Procedure](/docs/purchase/offer-request/procedures/order-creation): odabirom *Nabava > Upit za ponudu > Procedure > Kreiranje narudžbe dobavljača iz ponude dobavljača*.

Za izvođenje pretvorbe potrebno je konfigurirati željeni tip narudžbe dobavljača u tablici [Tip upita za ponudu](/docs/configurations/tables/purchase/purchase-offer-type). 

Tijekom postupka pretvorbe pojavljuje se skočni prozor sa sljedećim opcijama:  
- Upit za ponudu: omogućuje izradu jedne narudžbe za svaki upit za ponudu.  
- Račun: omogućuje grupiranje upit za ponudu prema dobavljaču.  
- Zatvori povezane ponude: umeće *Datum zatvaranja* za sve ZOP-ove koji se pretvaraju u narudžbe.  

Nakon potvrde pretvorbe, sustav generira novu narudžbu dobavljača koristeći podatke iz upita za ponudu te korisnika obavještava putem skočnog prozora o uspjehu postupka.  

Za više detalja pogledajte odgovarajuću stranicu dokumentacije.  

## Pretvorba zahtjeva za nabavu u narudžbu  

Postupak kreiranja narudžbe dobavljača iz zahtjeva za nabavu može se pokrenuti:  

- Iz izbornika [Procedure](/docs/purchase/purchase-orders/procedures/create-purchase-orders-from-purchase-requests): *Nabava > Narudžba dobavljačima > Procedure > Automatsko kreiranje narudžbi*.

Ovaj postupak omogućuje izradu jedne ili više narudžbi iz jednog ili više zahtjeva za nabavu i sastoji se od pet kartica:  

- Filtriraj iz: omogućuje definiranje filtera za odabir dokumenata (sa statusom „Odobreno“) koji se pretvaraju u narudžbu.    
- Izbor dobavljača: omogućuje odabir dobavljača kojem će se narudžba dodijeliti, prema kriterijima poput najbolje cijene nabave, preferiranog dobavljača, najboljih uvjeta plaćanja itd.  
- Prototipovi narudžbe: prikazuje sažetak narudžbi koje će se kreirati te omogućuje izradu nove narudžbe ili dodavanje stavki postojećoj narudžbi.  
- Parametri: konfigurira opcije za kreiranje narudžbe, kao što su tip narudžbe i podaci koji će se koristiti ako nisu definirani na artiklima. Također je moguće uključiti raspoloživosti iz različitih modula sustava.  
- Operacije: omogućuje prikaz, filtriranje i poništavanje prethodnih operacija.  

Nakon potvrde prototipa narudžbe, pritiskom na tipku *Generiraj prototipove narudžbe* sustav kreira narudžbe prema odabranim parametrima.

Isti postupak može se koristiti i za kreiranje narudžbi dobavljača iz narudžbi kupaca. Više detalja dostupno je na ovoj [stranici](/docs/purchase/purchase-orders/procedures/create-purchase-orders-from-purchase-requests). 

## Prijenos iz narudžbi u primke  

Postupak prijenosa narudžbi u primku (DDT) dostupan je na dva načina:  

- Iz izbornika [Procedure](/docs/purchase/purchase-delivery-note/procedures/create-delivery-notes-from-orders): putanja *Nabava > Primke > Procedure > Izuzimanje iz narudžbe*.
- Izuzimanje iz [Zaglavlja](/docs/purchase/purchase-delivery-note/insert-purchase-delivery-note/purchase-delivery-note) narudžbe: korištenjem tipke *Premještaj* otvara se prozor za odabir potvrđenih narudžbi dobavljača koje se mogu prenijeti u otpremnicu.  

Ovaj postupak omogućuje pretvaranje jedne ili više narudžbi u jednu ili više primki. Prije pokretanja, potrebno je konfigurirati željeni tip primke u tablici [Tipovi narudžbi dobavljača](/docs/configurations/tables/purchase/purchase-orders-type/). Automatsko kreiranje primke moguće je samo ako je narudžba ispisana i potvrđena.  

Uvjeti za izvršenje:   

- Dobavljač na narudžbama mora odgovarati dobavljaču na primki.  
- Narudžba koja se izvršava mora imati oznaku "Ispisano" i evidentiran *Datum potvrde*.
- Ako se izvršenje pokreće iz zaglavlja primke, *Tip narudžbe* mora imati pridružen *Tip primke*.

Pravila grupiranja narudžbi u primke definiraju se u sljedećim parametrima: [Parametri grupiranja primke](/docs/configurations/parameters/purchase/dn-grouping).

Nakon odabira narudžbi i postavljanja filtera, klikom na, *Premještaj* generira se primka s preuzetim podacima iz narudžbi. Ako je ispunjenje izvršeno ispravno, narudžba će automatski promijeniti stanje u *"Izvršeno"* ili *"Djelomično izvršeno"*.

Ispunjenje narudžbe u primku može se dovršiti i iz zaglavlja same fakture putem tipke *Izvršenje narudžbe (Evasione da ordine)*.

## Prijenos primka u račune

Postupak evidentiranja primke u račun može se pokrenuti na dva načina:

- Iz izbornika [Procedure](/docs/purchase/purchase-invoices/procedures/purchase-delivery-note-valorization): klikom na *Nabava > Ulazni računi > Procedure > Valorizacija primke*. 
- Iz [Zaglavlja] prodajnog računa: korištenjem tipke *Izvršenje otpremnice/primke* u zaglavlju računa.

Ovaj postupak omogućuje izradu jednog ili više računa na temelju jedne ili više primki. Sastoji se od tri glavne kartice:

- Valorizacija: omogućuje unos filtera za odabir primki koje će se fakturirati (sa statusom „Kontrolirano”) te određivanje datuma kreiranja računa.  
- Parametri: konfigurira vrstu računa koji će se izraditi, ako nije definirana u tablici [Vrste primki](/docs/configurations/tables/purchase/purchase-delivery-notes-type/) te koje će se reference otpremnice prenijeti na račun.  
- Prethodni: omogućuje pregled, filtriranje i poništavanje ranijih postupaka fakturiranja.  

Uvjeti grupiranja primki u račun mogu se definirati u [Parametrima grupiranja ulaznih računa](/docs/configurations/parameters/purchase/invoice-grouping/).

Nakon odabira primki i postavljanja parametara, izrada računa pokreće se klikom na *Valorizacija primke*.

Prijenos primki u račun može se dovršiti i iz samog zaglavlja računa putem tipke *Izvršenje otpremnice/primke*.