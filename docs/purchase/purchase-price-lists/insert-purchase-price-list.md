---
title: Inserimento Listino Fornitore
sidebar_position: 3
---

La form si apre tramite il percorso **Acquisti > Listini Fornitore > Crea Listino Fornitore** oppure tramite il pulsante **Nuovo** che si trova nella form [Ricerca Listini Fornitore](/docs/purchase/purchase-price-lists/search-purchase-price-list).

## Sezione superiore

Nella form di inserimento vengono proposte automaticamente i valori dei campi **Da data validità** (viene proposta la data corrente per inizio validità) e la [Divisa](/docs/guide/glossary/glossary-intro#currency)(viene proposta la divisa della società), ma possono essere modificati.

Per continuare la creazione del listino, l'utente deve inserire:

**Fornitore**, usando l' [help di campo](/docs/guide/operations-with-data/manual-entry-or-help-and-data-selection) oppure tastando [direttamente ](/docs/guide/operations-with-data/manual-entry-or-help-and-data-selection) i dati.

**A data validità**: è un campo opzionale e viene utilizzato nel caso in cui si voglia definire una campagna promozionale o dare una data scadenza al listino.

## Articoli

Dopo aver inserito e salvato il fornitore, per inserire un nuovo articolo nella griglia basterà posizionarsi sulla riga per compilare i vari dati oppure utilizzare il pulsante *Nuovo articolo* presente nella ribbon bar.

**Variante articolo**: serve se oltre al codice articolo anche la variante contraddistingue un articolo da un altro;

**Articolo fornitore**: serve se il codice articolo del fornitore è diverso dal codice articolo della società;

**Codice variante articolo del fornitore**: serve se oltre al codice articolo fornitore anche la variante contraddistingue un articolo fornitore da un altro codice articolo fornitore;

**Unità di misura**: può essere quella gestionale dell'articolo o una delle sue unità di misura alternative;

**Marca dell'articolo** se specificata;

**Quantità**: proposta uguale a 1, è la quantità di riferimento del prezzo; se diversa da 1, quando deve essere calcolato il prezzo viene diviso per la quantità del listino;

**Prezzo** riferito alla divisa del listino;

**Valore aggiuntivo** e **Percentuale aggiuntiva**: vengono utilizzati quando si creano listini di vendita da listini fornitori; al prezzo fornitore viene aggiunto questo valore.

*Pulsante specifico*

> **Aggiorna prezzi**:

## Sconti

L'utente può inserire degli sconti da applicare alla riga articolo listino. Lo sconto deve avere un tipo sconto con una priorità di applicazione, può essere applicato in cascata rispetto agli sconti con priorità più alta oppure su imponibile indipendentemente da priorità, la percentuale di sconto.

## Sconti a quantità

L'utente può inserire degli sconti da applicare alla riga articolo listino per scaglioni di quantità acquistata. Lo sconto deve avere un tipo sconto con una priorità di applicazione, può essere applicato in cascata rispetto agli sconti con priorità più alta oppure su imponibile indipendentemente da priorità, lo scaglione di quantità e la percentuale di sconto da applicare dalla quantità di questo scaglione fino all'unità inferiore alla quantità dello scaglione successivo.

## Sconti a valore

L'utente può inserire degli sconti da applicare alla riga articolo listino per scaglioni di valore acquistato. Lo sconto deve avere un tipo sconto con una priorità di applicazione, può essere applicato in cascata rispetto agli sconti con priorità più alta oppure su imponibile indipendentemente da priorità, lo scaglione di valore e la percentuale di sconto da applicare dal valore di questo scaglione fino all'unità inferiore al valore dello scaglione successivo.

## Prezzi per quantità

L'utente può inserire dei prezzi netti da applicare alla riga articolo listino per scaglioni di quantità acquistata. Lo scaglione di quantità e il prezzo netto da applicare dalla quantità di questo scaglione fino all'unità inferiore della quantità dello scaglione successivo.

## Note

L'utente può definire delle note con la data di validità delle stesse.