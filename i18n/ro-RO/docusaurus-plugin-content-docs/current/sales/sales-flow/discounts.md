---
title: Ripresa prezzi e sconti
sidebar_position: 1
---

I prezzi dei prodotti possono essere definiti nei listini di vendita o direttamente nell’anagrafica articoli. Nei listini, i prezzi possono essere "ivati" o "non ivati", una differenza determinata dall’attivazione del flag "Prezzo Ivato" nella testata del listino.

**Tipologie di Listino**      
I listini si dividono in due categorie principali: generale e per cliente. I listini generali devono essere configurati nell’apposita tabella, dove è anche possibile specificare se il listino è "ivato" o "non ivato" tramite un flag. I listini per cliente utilizzano come codice il conto e sottoconto del cliente, rendendoli univoci e personalizzati.

Ogni listino è identificato da tre elementi chiave:

- Tipologia (generale o per cliente),
- Divisa,
- Date di validità (da/a).     
All'interno di ogni listino, i prezzi degli articoli possono essere specificati per l'unità di misura gestionale (obbligatoria e definita nell'anagrafica articolo) oppure per una delle unità di misura alternative. I prezzi possono essere anche associati a scaglioni di quantità (tab "Prezzo per Quantità") o a destinazioni di merce specifiche (tab "Destinazioni").

**Gestione degli Sconti**      
Gli sconti possono essere configurati in vari modi:

- Anagrafica Cliente: Gli sconti definiti nella tab "Spese/Sconti" vengono applicati automaticamente al documento di vendita quando si seleziona un cliente. È possibile associare più sconti.

- Tipo di Pagamento: Gli sconti legati al tipo di pagamento vengono recuperati automaticamente quando si seleziona o si propone un tipo di pagamento nel documento.

- Tipologia di Listino: Gli sconti possono essere associati a ogni riga della griglia listini nell’anagrafica cliente.

- Listino Articoli: Gli sconti possono essere specificati per ogni riga articolo nel listino, anche a livello di scaglione (sconti a quantità o a valore).

- Definizione Politiche di Sconto: Gli sconti possono essere configurati per articoli, clienti, classi di articoli, categorie commerciali, categorie di sconto e dettagli di categoria sconto.

**Procedura di Ripresa Prezzi e Sconti**      
Quando si inserisce un articolo in un documento di vendita, viene attivata la procedura di ripresa dei prezzi e degli sconti. Il sistema cerca un listino valido tra quelli associati al cliente, partendo dalla tipologia con il flag "default" o seguendo la priorità di ricerca impostata.

La ricerca di un listino valido si basa sui seguenti criteri:

- Il listino deve includere l'articolo con la stessa divisa del cliente.
- La data di validità del listino deve essere compresa tra la data di inizio validità della riga nel tab "Listini" e la data del documento.
Se non viene trovato un listino valido, e non è attivo il flag "Ricerca in tutti i listini predefiniti", il sistema utilizza il prezzo di vendita dell’anagrafica articoli. Se invece il flag è attivato, la ricerca continua tra le altre tipologie di listini presenti nell’anagrafica cliente, secondo l’ordine di priorità.

La ricerca dell'articolo all'interno del listino tiene conto non solo del codice articolo, ma anche della variante e dell'unità di misura. Se il prezzo è definito per un'unità di misura alternativa, il sistema lo inserisce nel documento, attivando il flag "Prezzo Unità di Misura Alternativa", e calcola i totali in base alla quantità alternativa.

Dopo aver individuato il prezzo, vengono cercati anche gli sconti e i prezzi a scaglione. Se nel tab "Listini" dell’anagrafica cliente è attivo il flag "Gestione Prezzi", il sistema ricerca eventuali sconti aggiuntivi nella configurazione "Definizione Politiche di Sconto". Tutti gli sconti trovati vengono riportati nella collezione degli sconti, con l’indicazione della loro origine.

**Considerazioni Finali**     
La stessa logica di ricerca si applica sia per documenti con prezzi "ivati" che "non ivati". Tuttavia, se un documento richiede prezzi "non ivati", la ricerca si limita ai listini con questo tipo di prezzo, e viceversa per i prezzi "ivati".

Attenzione: Se non esiste un listino valido e l’anagrafica articoli ha un prezzo di vendita definito, questo viene proposto come prezzo della riga del documento, indipendentemente dal tipo di prezzo richiesto (ivato o non ivato).

