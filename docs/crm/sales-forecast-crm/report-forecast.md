---
title: Stampa Chiusura Previsioni di vendita
sidebar_position: 2
---

In questa maschera è possibile importare il documentale e confrontarlo con le [Previsioni di vendita](/docs/crm/sales-forecast-crm/new-sales-forecast) precedentemente create, per capire se gli obiettivi della previsione sono stati raggiunti.      
Nella testata sono presenti i seguenti campi:     
**Operatore**: contiene l'Operatore che effettua l'operazione;     
**Tipo periodo**: questo campo si popola automaticamente andando a inserire il campo successivo, e propone il [Tipo periodo](/docs/configurations/tables/crm/sales-forecast/period-type) associato alla Previsione;      
**Previsione di vendita**: è richiesto di inserire la [Previsioni di vendita](/docs/crm/sales-forecast-crm/new-sales-forecast) che vogliamo analizzare e confrontare con il documentale;     
**Anno/Data/Numero**: questi campi sono popolati automaticamente in base alla Numerazione associata e alla Data ordierna;     
**Dettaglio tipo periodo**: questo dato è fondamentale per indicare quale Dettaglio periodo (preso dlla tabella [Tipo periodo](/docs/configurations/tables/crm/sales-forecast/period-type)) andare a prendere in considerazione;             

Nella tab **Dati** sottostante, è possibile importare il documentale servendosi dei pulsanti della barra degli strumenti. La tab presenta tre griglie, ognuna per ogni tipologia di documenti: Fatture, Ordini e Opportunità.      
Ci sono delle condizioni per l'importazioni di Fatture e Ordini:     
- Le righe articolo dei documenti devono avere una [Classe articolo](/docs/configurations/tables/logistics/item-class) associata alla Famiglia articolo inserita nella Previsione di vendita;
- Il [Fatturato vendite](/docs/configurations/tables/sales/sales-turnover) associato alle righe articolo dei documenti deve essere associato alla Famiglia articolo inserito nella Previsione di vendita;      

Ci sono delle condizioni anche per l'importazione delle Opportunità:       
- l'Agente assegnato alla Previsione di vendita deve essere lo stesso Agente associato al Contatto intestatario dell'Opportunità;      
-  Nel Dettaglio dell'Opportunità, deve essere inserita la Famiglia prodotto prevista nella Previsione di vendita.    