---
title: Ricerca Picking
sidebar_position: 2
---

La form si apre tramite il percorso **Logistica > Picking**.

import SearchForm from './../../import/sections/search-form.md'

<SearchForm />

*Ricerca avanzata*
Nella sezione *Ricerca avanzata* è possibile applicare dei filtri allo stato del picking.

*Tutti*: Attivando questo flag si spengono tutti gli altri e non viene applicato nessun filtro di questa sezione.
*(Non) Stampati*:  Nel caso venga attivato uno di questi due flag vengono visualizzati solo i picking stampati o non stampati.
*(Non) Scaricati*: Nel caso venga attivato uno di questi due flag vengono visualizzati solo i picking scaricati o non scaricati.
*(Non) Spedito*:   Nel caso venga attivato uno di questi due flag vengono visualizzati solo i picking da cui sono stati generati documenti di spedizione (DDT/Fattura) o meno.

:::note Nota
A differenza dello [Scarico picking](/docs/logistics/picking/unload-picking), questa procedura permette di eseguire le stesse funzioni ma solamente per le righe spuntate.
:::

*Pulsanti specifici*  
**DDT**: apre la procedura per la creazione dei *DDT di vendita* a partire dai picking selezionati.
**Fattura**: apre la procedura per la creazione delle *Fatture di vendita* a partire dai picking selezionati.
**Lista di prelievo**: apre la procedura per la creazione di una *Lista di prelievo* a partire dai picking selezionati.

In fase di creazione *DDT* e *Fattura* da picking, è stato aggiunto un nuovo flag: **Utilizza magazzino e causale da tipo DDT** e **Utilizza magazzino e causale da tipo Fattura**.       
Se attivo fa si che la procedura utilizzerà per le righe del DDT / Fattura magazzino e causale presi da quelli indicati nel tipo DDT / Fattura.         
Ovviamente deve esserci giacenze disponibile nel magazzino / ubicazione preso dalla causale DDT/fattura.        

Sempre da questa form è possibile [Creare un nuovo picking](/docs/logistics/picking/picking-management), cliccando sul pulsante **Nuovo**. 