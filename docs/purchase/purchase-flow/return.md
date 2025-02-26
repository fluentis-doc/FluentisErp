---
title: Gestione Resi e Note di Accredito
sidebar_position: 3
--- 

La gestione dei resi a fornitore e delle note di accredito consente di amministrare i flussi di ritorno delle merci e i relativi aggiustamenti finanziari con i fornitori.   

:::important Ricorda
I resi fornitore si differenziano dalle altre tipologie di fatture perchè la *Natura fattura* (presente nella tabella [Tipi fatture di acquisto](/docs/configurations/tables/purchase/purchase-invoices-type)) è **Nota accredito da Fornitore**. Analogamente, il DDT di reso avrà [Natura](/docs/configurations/tables/purchase/purchase-delivery-notes-type) **Reso**. 
::: 

#### Creazione del Reso fornitore

Quando viene restituito un prodotto a un fornitore, il processo inizia con la creazione di un documento di reso nel gestionale. Questo documento può essere inserito manualmente (creando un DDT di *Reso* o una *Nota di accredito* e inserendo manualmente gli articoli da stornare), oppure automaticamente tramite la procedura di *Storno* disponibile nella ricerca dei documenti. 

Nella ribbon bar della [Ricerca fatture di acquisto](/docs/purchase/purchase-invoices/search-purchase-invoices) è presente il pulsante **Storno fatturazione** (analogamente, nella [Ricerca DDT di acquisto](/docs/purchase/purchase-delivery-note/insert-purchase-delivery-note/search-delivery-note) è presente il pulsante **Storno**). Questo pulsante permette di creare un reso collegato alla fattura di acquisto selezionata.    
Una volta selezionata la fattura da stornare e premuto il bottone, si apre la maschera **Storno documento**, nella quale è necessario flaggare gli articoli da rendere e indicare la [tipologia](/docs/configurations/tables/purchase/purchase-invoices-type) di documento da creare (vengono proposti solo i documenti con Natura *Nota accredito da fornitore*). Una volta confermata la procedura, verrà creata la fattura di storno, visibile dalla Ricerca fatture. La fattura viene creata con la data odierna e avrà l'importo totale degli articoli da stornare preso dalla fattura di partenza.   

Se viene creato un DDT di reso, invece, il sistema può generare automaticamente la nota di accredito corrispondente utilizzando le procedure di [Valorizzazione DDT di Acquisto](/docs/purchase/purchase-invoices/procedures/purchase-delivery-note-valorization) oppure mediante l'[Evasione DDT](/docs/purchase/purchase-invoices/insert-purchase-invoice/header-procedures/execution-from-purchase-delivery-note) dall'interno di una nuova *Nota di Accredito*.

Prima di essere finalizzata, la nota di accredito può essere controllata e modificata, se necessario. Al salvataggio di una nota di accredito, viene proposta la modifica dei segni di tutti i tipi di spesa associati, ma è possibile decidere liberamente se accettare la modifica o meno.    

Anche per i resi è possibile utilizzare le diverse **Stampe** previste dal modulo, basterà filtrare per la tipologia di documento prescelto. 

#### Aggiornamento delle Scorte

Dopo aver registrato a magazzino il documento di storno, il sistema aggiorna automaticamente le scorte del magazzino per riflettere il rientro della merce, diminuendo la giacenza e la disponibilità degli articoli resi.   

#### Aggiornamento della Contabilità

Una volta contabilizzata, la nota di accredito aggiorna i registri contabili, riducendo l’importo dovuto al fornitore. Questo può comportare una diminuzione del saldo aperto o un rimborso, a seconda degli accordi contrattuali con il fornitore.   

:::note Nota
Dalla versione 607 le *Note di accredito* vengono gestite con il segno meno. Al momento del salvataggio della fattura Fluentis cambierà il segno degli articoli e delle spese avvisando l'utente con un pop up.    
La gestione della contabilizzazione del documento non cambia rispetto al passato in quanto il documento negativo continua ad essere defalcato dal registro iva (prima veniva convertito in negativo al momento della contabilizzazione). L'invio del documento allo sdi tramite generazione del file .xml prevede un nuovo cambio di segno in conformità alle specifiche tecniche per la fatturazione elettronica.   
La modifica in commento si è resa necessaria, pertanto, soprattutto per una migliore gestione delle statistiche e delle elaborazioni connesse.
:::
