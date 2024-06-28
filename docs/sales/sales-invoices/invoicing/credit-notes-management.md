---
title: Gestione note di accredito
sidebar_position: 7
---

### Inserimento con segno meno

Dalla versione 607 le note di credito devono essere inserite con il segno meno.

Al momento del salvataggio del documento, Fluentis cambierà il segno degli articoli e acvviserà l'utente con un pop up. Al salvataggio di una nota di credito, anche tutti i Tipi spesa vengono inseriti con segno negativo, tranne le spese Bollo.

La gestione della contabilizzazione del documento non cambia rispetto al passato inquanto il documento negativo continua ad essere defalcato dal registro iva (prima veniva convertito in negativo al momento della contabilizzazione).

L'invio del documento allo sdi tramite generazione del file .xml prevede un nuovo cambio di segno in conformità alle specifiche tecniche per la fatturazione elettronica.

La modifica in commento si è resa necessaria, pertanto, soprattutto per una migliore gestione delle statistiche di vendita e le elaborazioni connesse.


### Gestione segni misti

Nella presente sezione illustriamo anche la particolare gestione di note di accredito con segni "misti" ovvero righe positive e negative (ad esempio perchè avviene comunque un riaddebito dell'mposta di bollo).


**La possibilità di contabilizzare il documento con segni misti va abilitata appositamente mediante uno script SQL.**

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


