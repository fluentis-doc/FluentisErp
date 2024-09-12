---
title: Report Chiusura periodico 
sidebar_position: 3
---

In questa maschera è possibile aggiornare le [Stampe Chiusura previsioni di vendita](/docs/crm/sales-forecast-crm/report-forecast) esistenti o generarne di nuove. Ricordiamo che queste Stampe servono per confrontare le Previsioni di vendita create con il documentale.         
Nella prima griglia è possibile inserire i seguenti campi:       
**Descrizione**: contiene la descrizione del Report;      
**Utente**: contiene l'utente che creerà il Report;       
**Tipo Opportunità**: è necessario indicare quale [Tipo opportunità](/docs/configurations/tables/crm/opportunities/opportunity-type) considerare e stampare in questo report;       
**Tipo fattura di vendita**: è necessario indicare quale [Tipo fattura](/docs/configurations/tables/sales/invoices-type) considerare e stampare;       
**Tipo ordine cliente**: è necessario indicare quale [Tipo ordine](/docs/configurations/tables/sales/sales-order-types) considerare e stampare.      

Per procedere con la creazione della Stampa, è necessario selezionare la riga scelta e cliccare il bottone della barra degli strumenti *Creazione stampe chiusura previsioni di vendita*. Si aprirà quindi un pop up in cui indicare a Fluentis come eseguire la procedura, attraverso l'inserimento dei seguenti filtri:      
**Previsioni di vendita**: indicare quale [Previsione di vendita](/docs/crm/sales-forecast-crm/new-sales-forecast) inserire nel report;     
**Dettagli tipo periodo**: indicare quale *Dettaglio* del [Tipo Periodo](/docs/configurations/tables/crm/sales-forecast/period-type) utilizzare; il report considererà solo il periodo di tempo indicato in questo campo;      
**Società**: in questo campo indicare in quale società effettuare l'operazione.      
Con i relativi flag sottostanti, è necessario indicare a Fluentis quali documenti importare in questo report.          
Una volta confermati i filtri inseriti, Fluentis cercherà una [Stampa chiusura](/docs/crm/sales-forecast-crm/report-forecast) già esistente (e senza Data di chiusura all'interno) per lo stesso Utente e per lo stesso Dettaglio periodo ed inserirà al suo interno le righe, se non presenti. In mancanza di una Stampa valida preesistente, ne verrà creata una nuova. All'interno di essa si troveranno i documenti che si è deciso di importare, pronti per essere confrontati con la Previsione di vendita.   
  
Ci sono delle condizioni per l'importazioni di Fatture e Ordini nel report (le stesse del caso di importazione documenti direttamente dall'interno della [Stampa chiusura](/docs/crm/sales-forecast-crm/report-forecast)):     
- Le righe articolo dei documenti devono avere una [Classe articolo](/docs/configurations/tables/logistics/item-class) associata alla Famiglia articolo inserita nella Previsione di vendita;
- Il [Fatturato vendite](/docs/configurations/tables/sales/sales-turnover) associato alle righe articolo dei documenti deve essere associato alla Famiglia articolo inserito nella Previsione di vendita.        

Ci sono delle condizioni anche per l'importazione delle Opportunità:       
- l'Agente assegnato alla Previsione di vendita deve essere lo stesso Agente associato al Contatto intestatario dell'Opportunità;      
-  Nel Dettaglio dell'Opportunità, deve essere inserita la Famiglia prodotto prevista nella Previsione di vendita.