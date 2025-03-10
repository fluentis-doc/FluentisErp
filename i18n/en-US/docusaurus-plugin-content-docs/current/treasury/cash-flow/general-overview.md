---
title: Introduzione
sidebar_position: 1
---

Il modulo Cash Flow di Fluentis ERP è uno strumento utile per l'analisi dei flussi di cassa aziendali previsti. 

Esso permette di monitorare in modo preciso l'entrata e l'uscita di denaro, aiutando le aziende a mantenere una visione chiara e aggiornata della propria liquidità. Il modulo si integra con i dati contabili e di tesoreria per fornire un'analisi accurata e previsioni dettagliate sui flussi di cassa futuri.

Il modulo è completo della possibilità di inserire manualmente delle scadenze extra contabili riferiti a dati non presenti a sistema, quali ad esempio una proiezione futura degli stipendi dei dipendenti, un piano di rientro per un credito già stralciato dalla contabilità e così via.

**Funzionalità Principali**:

- Generazione automatica del cashflow con possibilità di includere o escludere le tipologie di flusso finanziario abilitato manovrando un semplice flag.
- Possibilità di filtro sulle date per ogni singolo flusso 
- Visualizzazione di dettaglio dell'elaborazione del cashflow con possibilità di esportazione del dato in vari formati tra i quali excel
- Esecuzione di una stampa analitica per la lettura dei risultati con evidenza dell'andamento del cashflow di ogni fine mese
- Possibilità di lettura della stampa analitica raggruppando per banca d'appoggio
- Possibilità di definire una data prevista per ogni flusso, parallela alla data di scadenza naturale

**Elenco tabelle necessarie per gestire il modulo:** 

[Tipi conto finanziario](/docs/configurations/tables/treasury/cash-flow-module-tables/financial-account-types),  

[Tipi flusso](/docs/configurations/tables/treasury/cash-flow-module-tables/flux-types),  

[Tipi scadenza](/docs/configurations/tables/treasury/cash-flow-module-tables/due-date-types),  

[Tipi ordine/bolla/fattura](/docs/configurations/tables/treasury/cash-flow-module-tables/order-dn-invoice-types)  

[Anagrafica cliente/fornitore/agente](/docs/configurations/tables/treasury/cash-flow-module-tables/customer-vendor-agent-register).

Inoltre, relativamente ad ogni tipologia di flusso finanziario che viene attivato, occorre gestire all'interno delle tabelle relative, quali ad esempio Tipi DDT, Tipi ordine (clienti e fornitori) ecc... quali tipologie specifiche di documento devono essere monitorate.

Ad esempio tipicamente si escluderà un DDT che non sia in conto vendita, quali ad esempio il conto deposito , conto visione ecc... inquanto non genereranno flusso di cassa.

 

 






