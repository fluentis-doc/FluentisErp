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
- Kreiraj / ažuriraj projekt: Ova opcija omogućuje kreiranje ili ažuriranje projekta. Sono disponibili le opzioni: *Crea Nuovo Progetto Vuoto*, *Crea Nuovo Progetto da Offerta*, o *Crea Nuovo Progetto da Offerta e Template Progetto*. È necessario specificare il [Tipo Progetto](/docs/configurations/tables/project-management/project-type) da creare. Se il progetto esiste già, bisogna inserire il nome del progetto da aggiornare.
- Trasferimento Materiali/Risorse: Questa opzione consente di trasferire le risorse e i materiali dell'offerta, se [gerarchica](/docs/sales/offers/insert-offer), come righe articolo nell'ordine.

Una volta confermata la conversione, il sistema genera un nuovo ordine cliente utilizzando i dati dell'offerta e avvisa l'utente con un messaggio pop-up riguardante il successo della conversione, il numero dell'offerta convertita, la versione e il numero dell'ordine cliente generato. Le informazioni modificate in anagrafica durante la creazione dell'offerta (ad es. Annotazioni Cliente, Spedizione, Pagamenti) saranno riportate anche nell'ordine generato.

## Evasione da Ordini a DDT

La procedura di evasione da ordine a Documento di Trasporto è disponibile in due modalità:

- Evasione Massiva dalla [Ricerca Ordini](/docs/sales/sales-orders/create-new-sales-orders/search-sales-orders): Nella Ricerca Ordini, selezionare uno o più ordini da evadere e cliccare su Evasione DDT nella barra degli strumenti.
- Evasione dalla [Testata](/docs/sales/sales-delivery-notes/insert-delivery-notes/sales-dn) del DDT: Nella Testata del DDT, utilizzare il pulsante Evasione da Ordine per aprire una finestra di selezione degli ordini confermati del cliente da trasferire nel DDT.

Questa procedura permette di trasformare uno o più ordini di vendita in uno o più DDT. Prima di avviare la procedura, è necessario configurare il tipo di DDT desiderato nella tabella [Tipo di ordine](/docs/configurations/tables/sales/sales-order-types). La procedura automatica consente la creazione di DDT solo se l'ordine è stampato e confermato.

Le condizioni per l'evasione sono:

- Il cliente degli ordini deve coincidere con il cliente del DDT.
- L'ordine da evadere deve avere il flag "Stampato" e una Data di Conferma Ordine.
- La tabella "Tipi DDT" deve avere il flag "Ordine", che indica che il DDT può essere generato a partire da un ordine.
- Se la procedura è avviata dalla Ricerca Ordini, i tipi di documento devono essere compatibili: nella tabella "Tipi Ordine", il tipo ordine da evadere deve avere impostato il tipo DDT corrispondente.

Dopo aver selezionato gli ordini e impostato i filtri, cliccando su *Trasferimento* si genererà il DDT con i dati dell'ordine. Se eseguita correttamente, l'ordine cambierà automaticamente stato in "Evaso" o "Parzialmente Evaso".

## Evasione da DDT a Fatture

La procedura di evasione da DDT a fattura può essere avviata in due modalità:

- Dal Menu [Procedure](/docs/sales/sales-invoices/procedures/create-invoices-from-delivery-notes): Andando su *Vendite > Fatture di Vendita > Procedure > Creazione da DDT*.
- Dalla [Testata](/docs/sales/sales-invoices/invoicing/sales-invoice) della Fattura di Vendita: Utilizzando il pulsante *Evasione DDT* nella testata della fattura.

Questa procedura permette di creare una o più fatture a partire da uno o più DDT. La procedura si compone di tre tab principali:

- Valorizzazione: Consente di inserire filtri per selezionare i DDT da fatturare (con stato "Stampato") e specificare la data di creazione della fattura.
- Parametri: Configura le opzioni di raggruppamento per la creazione di una fattura da più DDT, come l'inclusione di DDT di anni e periodi IVA diversi, tipi di DDT diversi o con tassi di cambio diversi. È possibile anche definire il trattamento dei pagamenti, ripristinando quelli dell'anagrafica o mantenendo quelli specificati nei DDT.
- Precedenti: Permette di visualizzare, filtrare e annullare le operazioni di fatturazione precedenti.

Dopo aver selezionato i DDT e impostato i parametri, è possibile procedere con la creazione della fattura cliccando su *Creazione Fattura da DDT*.

L'evasione da DDT a fattura è completabile anche dalla testata della fattura stessa tramite il pulsante Evasione DDT.