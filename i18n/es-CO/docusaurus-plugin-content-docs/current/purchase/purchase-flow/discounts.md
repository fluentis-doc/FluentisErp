---
title: Ripresa prezzi e sconti
sidebar_position: 1
---

La ripresa di **prezzi e sconti** è un processo automatizzato che garantisce l'allineamento dei documenti di acquisto con i listini fornitori aggiornati. Quando un articolo viene inserito in un documento, il sistema verifica i listini disponibili, considerando fornitori, valute e date di validità, e applica i prezzi e gli sconti appropriati. 

## Listini fornitore

Ogni **listino fornitore** è identificato da tre elementi chiave:

- **Fornitore**
- **Divisa**
- **Date di validità** (da/a)

All'interno di ogni listino, i prezzi degli articoli possono essere specificati per l'unità di misura gestionale (obbligatoria e definita nell'anagrafica articolo) oppure per una delle unità di misura alternative. I prezzi possono essere anche associati a scaglioni di quantità (tab "Prezzo per Quantità") o a destinazioni di merce specifiche (tab "Destinazioni").

## Gestione degli Sconti

Gli **sconti** possono essere configurati in vari modi:

- **Anagrafica Fornitore**: Gli sconti definiti nella tab "Spese/Sconti" vengono applicati automaticamente al documento di acquisto quando si seleziona un fornitore. È possibile associare più sconti.
- **Tipo di Pagamento**: Gli sconti legati al tipo di pagamento vengono recuperati automaticamente quando si seleziona o si propone un tipo di pagamento nel documento.
- **Listino**: Gli sconti possono essere associati a ogni riga della griglia listini nell’anagrafica fornitore.
- **Listino Articoli**: Gli sconti possono essere specificati per ogni riga articolo nel listino, anche a livello di scaglione (sconti a quantità o a valore).
- **Definizione Politiche di Sconto**: Gli sconti possono essere configurati per fornitori, classi di articoli, categorie di sconto e dettagli di categoria sconto.

:::important Ricorda
Per poter gestire gli **sconti su imponibile** è necessario attivare da database il parametro generale GEN-GlobalSettings_CalculateDiscountOnAmount per la società di interesse.     
Se tale parametro non è attivo, gli sconti su imponibile saranno trasformati in sconti a cascata. 
:::

## Procedura di Ripresa Prezzi e Sconti

Quando si inserisce un articolo in un documento di acquisto, viene attivata la procedura di **ripresa dei prezzi e degli sconti**. Il sistema cerca un listino valido tra quelli associati al fornitore, partendo dalla tipologia con il flag "default" o seguendo la priorità di ricerca impostata.

La ricerca di un listino valido si basa sui seguenti criteri:

- Il listino deve includere l'articolo con la stessa divisa del fornitore.
- La data di validità del listino deve essere compresa tra la data di inizio validità della riga nel tab "Listini" e la data del documento.

Se non viene trovato un listino valido, e il flag [Ricerca in tutti i listini predefiniti](/docs/configurations/parameters/purchase/purchase-orders-parameters/) è attivato, la ricerca continua tra gli altri listini presenti nell’anagrafica fornitore, secondo l’ordine di priorità. Se il precedente flag non è attivo, ma il flag "Costo zero in assenza di listini" è attivato, l'articolo sarà inserito con prezzo a zero. In alternativa, il sistema utilizza il *costo ultimo* dell’anagrafica articoli.

La ricerca dell'articolo all'interno del listino tiene conto non solo del codice articolo, ma anche della variante e dell'unità di misura. Se il prezzo è definito per un'unità di misura alternativa, il sistema lo inserisce nel documento, attivando il flag "Prezzo Unità di Misura Alternativa", e calcola i totali in base alla quantità alternativa.

Dopo aver individuato il prezzo, vengono cercati anche gli sconti e i prezzi a scaglione. Se nel tab "Listini" dell’anagrafica fornitore è attivo il flag "Gestione Prezzi", il sistema ricerca eventuali sconti aggiuntivi nella configurazione "Definizione Politiche di Sconto". Tutti gli sconti trovati vengono riportati nella collezione degli sconti, con l’indicazione della loro origine.
