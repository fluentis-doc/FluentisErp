---
title: Gestione resi e note di credito
sidebar_position: 3
---

Il meccanismo di gestione dei resi e delle note di credito permette di amministrare i flussi di ritorno delle merci e i relativi aggiustamenti finanziari. Ecco come funziona tipicamente:

**Registrazione del Reso**: Quando un cliente restituisce un prodotto, il processo inizia con la creazione di un documento di reso nel gestionale. Questo documento può essere creato manualmente (inserendo un DDT con Natura *Reso* o una fattura con Natura *Nota di credito*), oppure automaticamente con la procedura di **Storno** presente nella [Ricerca](/docs/sales/sales-delivery-notes/insert-delivery-notes/search-sales-dn) dei documenti. Nel caso in cui venga creato il DDT di reso, da esso potrà essere automaticamente creata la nota di credito con le apposite procedure.     

**Aggiornamento delle Scorte**: una volta movimentato a magazzino il documento di storno, il sistema aggiorna automaticamente le scorte del magazzino per riflettere il rientro della merce, riportando i prodotti resi come disponibili.      

**Dettagli della Nota di Credito**: La nota di credito include dettagli come l’importo accreditato e può essere controllata prima di essere inviata al cliente. Al salvataggio di una nota di credito, tutti i Tipi spesa vengono inseriti con segno negativo, tranne le spese Bollo     

**Aggiornamento della Contabilità**: Una volta contabilizzata, la nota di credito aggiorna i registri contabili, riducendo l’importo dovuto dal cliente; questo può riflettersi in una diminuzione del saldo aperto o in un rimborso, a seconda degli accordi con il cliente.

:::note Note
Dalla versione 607 le note di credito vengono gestite con il segno meno.      
Al momento del salvataggio del documento, infatti, Fluentis cambierà il segno degli articoli e avviserà l'utente con un pop up. Anche tutte le spese vengono convertite con segno negativo, tranne le spese Bollo.    
La gestione della contabilizzazione del documento non cambia rispetto al passato in quanto il documento negativo continua ad essere defalcato dal registro iva (prima veniva convertito in negativo al momento della contabilizzazione).
L'invio del documento allo sdi tramite generazione del file .xml prevede un nuovo cambio di segno in conformità alle specifiche tecniche per la fatturazione elettronica.       
La modifica in commento si è resa necessaria, pertanto, soprattutto per una migliore gestione delle statistiche di vendita e le elaborazioni connesse.
:::

### Gestione segni misti

La possibilità di contabilizzare il documento con segni misti va abilitata appositamente mediante uno script SQL.

:::note Nota tecnica per attivazione
Di seguito lo script da eseguire:

ATTENZIONE: Il parametro di seguito che controlla la modalità di gestione dei segni va ora posto a +1 differentemente dal passato a fronte del cambio di politica dei gestione segni di cui sopra.

    select * from [Fluentis].[SH_LocalizationParameters] where [SH_LocalizationParameters].[SHLP_Code] like 'VE-SalesInvoice_CreditNotesPostingSigns'

individuare l'Id del parametro in questione

Nella ricerca 

    select * from [Fluentis].[SH_CompanyParameters] where [SH_CompanyParameters].[SHCP_Parameter_SHLP_Id] = ..... individuare la riga per la società in uso attraverso il campo SHCP_Company_SHC_Id

ed eseguire un update al campo SHCP_Value

VALORI DEL PARAMETRO:

0 = così com'è, non permette i segni misti (le NC sono forzate sempre negative)

-1 = NC sempre invertite (il + diventa meno e il - diventa +)

+1 = Tipologia attualmente richiesta per il segno misto, sia FT che NC vengono contabilizzate con i segni esistenti , il + resta + e il - resta -.
:::


