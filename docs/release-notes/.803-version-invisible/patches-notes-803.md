---
title: Patch notes Versione 803
sidebar_position: 1
---

### Patch 803.0001 - 19/12/2025

> -	Allineamento tecnico Importazioni Excel della progress Bar
> -	Disable script loger
> -	MES - MES Solution - Gestione del blocco proposta fase in soluzione tramite le "Causali di sospensione". Alla sospensione di un'attività, indicando una "Causale di sospensione" con l'indicazione di "Blocco proposta fase in M.E.S.", alla successiva proposta delle fasi in lavorazione per il Centro di lavoro, la fase sospesa non verrà visualizzata. Per poter proseguire nella lavorazione della fase sospesa è necessario selezionarla, tramite il pulsante "Seleziona nuove fasi", ed effettuare una dichiarazione di ripresa (#TT05365/25).
> -	MS - Corretto bug nella procedura MRP che non generava gli ordini pianificati con la quantità corretta in alcuni casi particolari (#TT05310/25).
> -	MS - Corretto bug nella procedura MRP inerente allla creazione di ordini pianificati raggruppati per gli articoli figli (#TT04735/25).
> -	Risolti i bugs per creare una configurazione di Intercompany Importer
> -	SCM - Risolto errore che in alcuni casi impediva la cancellazione dei DDT di Acquisto per i quali era stato effettuato un tentativo di valorizzazione (#TT05568/25).
> -	SD - Electronic Payment(#TT05442/25).

### Patch 803.0001 - 18/12/2025

> -	ARM - Fix ribbon Working unit combobox
> -	CRM - WEBAPI - importazione offerte di vendita, risolto caso per cui il contatto CRM non veniva trovato in Fluentis in fase di importazione (#TT05577/25).
> -	FI - revisione contabilizzazione documenti per valorizzazione dimensione progetti, in caso di utilizzo di un centro di progetto diverso da quello di default Fluentis non inserisce più un doppione con quello di default (#TT05570/25).
> -	FI - revisione contabilizzazione fatture di acquisto con incrementi multipli sullo stesso cespite (#TT05558/25).
> -	MS - Corretto bug in pianificazione generale legato all’utilizzo di articoli fittizi in distinta base (#TT04427/25).
> -	Risolto bug di compilazione script dall’anagrafica degli script
> -	SCM - Creazione Fattura di Acquisto da Documenti di acquisto in entrata: per gli articoli privi di unità di misura nel file XML, la fattura viene generata utilizzando l’unità di misura selezionata nella procedura di creazione (#TT05445/25).
> -	SD - Conversione Offerta di Vendita in Ordine: se il cliente intestatario dell’offerta è stato bloccato nel Lock Manager la creazione dell’ordine viene bloccata (#TT05495/25).
> -	SD - Conversione Offerta in Ordine Cliente: Nel riferimento all’offerta presente sulle righe articolo dell’ordine viene ora riportata la data dell’offerta anziché la data di creazione (#TT05527/25).
> -	SD - Electronic Payment (#TT05442/25).
> -	SD - Nelle Offerte gerarchiche, la modifica dell’articolo nella sezione Materiali aggiorna ora automaticamente anche la relativa descrizione (#TT05534/25).
> -	WM - Corretto bug in fase di cancellazione delle righe di un picking creato da spedizione (#TT05488/25).

### Patch 803.0001 - 17/12/2025

> -	ARM - update post migration script  
> -	Solved problem with supervisor activities required parameters  
> -	Solved bug to create a new flow operation and documents with BizLink  
> -	Solved bug with missing GitHub parameters on script editor 
> -	SalesOffer - Fix SalesOffer import WebApi - search for CrmContact Ticket (5577/25).