---
title: Gestione resi e note di credito
sidebar_position: 3
---

Nel modulo Vendite di Fluentis, la gestione dei resi e delle note di credito consente di registrare e monitorare le restituzioni di beni o servizi da parte dei clienti, generando i documenti contabili e logistici necessari. Questo processo garantisce una corretta tracciabilità delle operazioni e un aggiornamento in tempo reale delle giacenze di magazzino e delle posizioni contabili dei clienti.

Fluentis supporta diverse tipologie di reso:

- Reso con Nota di Credito: restituzione di beni con emissione di una nota di credito per stornare l'importo fatturato. La merce potrà essere resa attraverso un documento di trasporto oppure direttamente all'emissione della nota di credito, in base alle impostazioni del magazzino.

- Reso senza Nota di Credito: restituzione di beni senza emissione di nota di credito, ad esempio per sostituzione merce. In questo caso verranno tipicamente utilizzati i documenti di trasporto per movimentare il magazzino.

Il reso inoltre può essere: 

- Reso Parziale: restituzione di una parte della merce consegnata.

- Reso Totale: restituzione dell'intera fornitura.

##  Processo Operativo

I documenti di **Reso** possono essere generati in due modi:

1) *attraverso la procedura di **Storno** presente nella barra degli strumenti della ricerca DDT o fatture.* Con questa procedura è possibile stornare parzialmente o totalmente i documenti selezionati nella griglia di ricerca. Una volta cliccato il pulsante *Storno*, si aprirà un pop up dove: selezionare le righe articolo da stornare con le relative quantità, inserire il Tipo documento da creare (**sarà possibile selezionare solo tipologie di documento con natura Reso**) e inserire la Causale di storno del magazzino. 

2) *manualmente con la creazione di un nuovo DDT o fattura.* 
In questo caso, è importante inserire un Tipo documento con Natura *Reso*, il cliente e gli articoli da stornare. Creando manualmente il reso, tuttavia, non ci sarà il link con il documento di origine, che dovrà essere inserito manualmente dall'utente.

Se è stato generato un DDT, si potrà generare da esso la fattura, con la procedura o con l'evasione manuale. Al salvataggio di una nota di credito inserita manualmente, verrà avvisato l'utente di dover inserire una quantità negativa nelle note di credito. Questa funzionalità permette di avere un fatturato aggiornato, che consideri in negativo le note di credito. 

:::note Attenzione
Nella tabella [Tipi DDT](/docs/configurations/tables/sales/delivery-notes-type), al Tipo DDT *Reso* deve essere associato un [Tipo fattura](/docs/configurations/tables/sales/invoices-type) *Nota di credito*.
:::

Per la valorizzazione dei DDT di reso in nota di credito, ci possono essere diverse casistiche a seconda dei segni di quantità e prezzo, nel DDT di origine:
1)	DDT Reso       Qta   10, Prezzo  10 -> riga fattura (normale o nota di credito NC) Qta  -10, Prezzo  10
2)	DDT Reso       Qta  -10, Prezzo  10 -> riga fattura normale            Qta  10, Prezzo  10 
3)	DDT Reso       Qta  -10, Prezzo  10 -> riga fattura NC                       Qta -10, Prezzo  10 
4)	DDT Reso       Qta   10, Prezzo -10 -> riga fattura normale             Qta -10, Prezzo -10 
5)	DDT Reso       Qta   10, Prezzo -10 -> riga fattura NC                       Qta -10, Prezzo  10 
6)	DDT Reso       Qta  -10, Prezzo -10 -> riga fattura normale             Qta  10, Prezzo -10 
7)	DDT Reso       Qta  -10, Prezzo -10 -> riga fattura NC                       Qta -10, Prezzo  10 
8)	DDT Normale Qta  10, Prezzo  10 -> riga fattura NC                        Qta -10, Prezzo  10
9)	DDT Normale Qta  -10,Prezzo  10 -> riga fattura NC                        Qta -10, Prezzo  10
10)	DDT Normale Qta   10,Prezzo -10 -> riga fattura NC                        Qta -10, Prezzo  10 
11)	DDT Normale Qta  -10,Prezzo -10 -> riga fattura NC                        Qta -10, Prezzo  10 

## Configurazioni e Parametri

Per una corretta gestione dei resi e delle note di credito, assicurarsi che siano configurati i seguenti elementi:

- **Tipi Documento**: definire i tipi documento per resi e note di credito.

- **Magazzino e Causale di Magazzino**: ogni tipologia di documento che movimenta il magazzino deve avere associato il [Magazzino](/docs/configurations/tables/logistics/warehouses) e la relativa [causale](/docs/configurations/tables/logistics/warehouse-templates); generalmente, nei resi e nelle note di credito la movimentazione sarà un carico, in quanto la merce viene riconsegnata dal cliente. 

## Gestione segni misti - NOTA PER PARTNER E PROJECT MANAGER

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


