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

## Evasione da Ordini a DDT

La procedura di evasione da ordine a Documento di Trasporto è disponibile in due modalità:

- Dal Menù [Procedure](/docs/purchase/purchase-delivery-note/procedures/create-delivery-notes-from-orders): andando su *Acquisti > DDT di Acquisto > Procedure > Evasione da ordini*.
- Evasione dalla [Testata](/docs/purchase/purchase-delivery-note/insert-purchase-delivery-note/purchase-delivery-note) del DDT: utilizzando il pulsante *Evasione da Ordine* per aprire una finestra di selezione degli ordini confermati del fornitore da trasferire nel DDT.

Questa procedura permette di trasformare uno o più ordini di acquisto in uno o più DDT. Prima di avviare la procedura, è necessario configurare il tipo di DDT desiderato nella tabella [Tipi ordine fornitore](/docs/configurations/tables/purchase/purchase-orders-type/). La procedura automatica consente la creazione di DDT solo se l'ordine è stampato e confermato.

Le condizioni per l'evasione sono: 

- Il fornitore degli ordini deve coincidere con il fornitore del DDT.
- L'ordine da evadere deve avere il flag "Stampato" e una *Data di Conferma* ordine.
- Per la seconda procedura il *Tipo ordine* deve avere un *Tipo bolla consegna* associato.

Le condizioni di raggruppamento degli ordini in DDT possono essere definite nei [Parametri raggruppamento DDT di acquisto](/docs/configurations/parameters/purchase/dn-grouping).

Dopo aver selezionato gli ordini e impostato i filtri, cliccando su *Trasferimento* si genererà il DDT con i dati dell'ordine. Se l'evasione è stata eseguita correttamente, l'ordine cambierà automaticamente stato in *"Evaso"* o *"Parzialmente Evaso"*.

L'evasione da ordine a DDT è completabile anche dalla testata della fattura stessa tramite il pulsante *Evasione da ordine*.

## Evasione da DDT a Fatture

La procedura di evasione da DDT a fattura può essere avviata in due modalità:

- Dal Menù [Procedure](/docs/purchase/purchase-invoices/procedures/purchase-delivery-note-valorization): andando su *Acquisti > Fatture di acquisto > Procedure > Valorizzazione DDT di acquisto*. 
- Dalla [Testata] della Fattura di Vendita: utilizzando il pulsante *Evasione DDT* nella testata della fattura.

Questa procedura permette di creare una o più fatture a partire da uno o più DDT. La procedura si compone di tre tab principali:

- Valorizzazione: Consente di inserire filtri per selezionare i DDT da fatturare (con stato "Controllato") e specificare la data di creazione della fattura.
- Parametri: Configura il tipo fattura da creare, se non indicata nella tabella [Tipi DDT](/docs/configurations/tables/purchase/purchase-delivery-notes-type/) e i riferimenti DDT da riportare nella fattura.
- Precedenti: Permette di visualizzare, filtrare e annullare le operazioni di fatturazione precedenti.

Le condizioni di raggruppamento dei DDT in fattura possono essere definite nei [Parametri raggruppamento fattura di acquisto](/docs/configurations/parameters/purchase/invoice-grouping/).

Dopo aver selezionato i DDT e impostato i parametri, è possibile procedere con la creazione della fattura cliccando su *Valorizzazione DDT di acquisto*.

L'evasione da DDT a fattura è completabile anche dalla testata della fattura stessa tramite il pulsante *Evasione DDT*.