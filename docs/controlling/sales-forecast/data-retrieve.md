---
title: Ripresa dati
sidebar_position: 3
---

:::important A cosa serve
Elaborazione per la generazione automatica dei dati del venduto e, se richiesto, delle Previsioni di vendita sulla base di dati storici provenienti dai documenti dell’area Vendite; in particolare dai documenti: Ordini clienti, DDT e Fatture di vendita.
:::

Possiamo eseguire la Ripresa dati dal menu area Controlling > Previsioni di vendita mensili.

La gestione è composta da una form di filtro per ricercare le Riprese dati precedentemente effettuate e, tramite il pulsante **Nuovo**, per poterne crearne di nuove e da una form di **Gestione ripresa dati** dove poter indicare da quali tipologie di documenti di vendita, per quale periodo riprendere i dati che diventeranno base di partenza per le Previsioni di vendita per una predefinita [Versione di Previsione di vendita](/docs/configurations/tables/controlling/forecast/pv-versions).

Elenchiamo, nel dettaglio, ogni singola informazione presente:

- **Versione**: è un dato obbligatorio e serve per memorizzare i dati ripresi in quella specifica versione;

- **Raggruppa per variante**: consente o meno di considerare il dettaglio per Variante articolo;

- **Data ultima ripresa**: viene proposta pari alla data odierna e viene aggiornata alla pressione del pulsante **Ripresa dati** con la data dell’elaborazione;

- **Considera data prevista consegna**: se indicato, per la ripresa dei soli Ordini cliente, il mese di competenza sarà il mese della Data prevista consegna e non quello della Data merce pronta;

- **Generazione Previsioni**: se indicato, la **Ripresa dati** genererà anche le Previsioni di vendita per Articolo, Variante e Versione;

- **Fatture di vendita**: nel primo elenco possiamo indicare da quali Tipi fattura riprendere le informazioni e per quale periodo (*Da data, A data*); il Tipo fattura selezionato proporrà automaticamente se è un Tipo fattura di reso o meno;

- **DDT di vendita**: nel secondo elenco possiamo indicare da quali Tipi DDT riprendere le informazioni e per quale periodo (*Da data, A data*); il Tipo DDT selezionato proporrà automaticamente se è un Tipo DDT di reso o meno;

- **Ordini cliente**: nel terzo elenco possiamo indicare da quali Tipi ordine riprendere le informazioni e per quale periodo (*Da data, A data*).

Per i periodi dei tipi fatture e DDT di vendita, all’inserimento di un nuovo tipo documento, vengono proposti: *Da data* pari al primo di gennaio dell’anno in corso, *A data* pari ad oggi, per il periodo dei tipi ordine cliente vengono proposti: *Da data* pari al primo di gennaio dell’anno in corso, *A data* pari al 31 dicembre dell’anno in corso, tutti modificabili da parte dell’operatore.

I pulsanti presenti sono:

- **Salva**: vengono memorizzate le informazioni inserite nella form per la ripresa dei dati;

- **Inserisci un nuovo tipo fattura**, **Cancella i tipi fattura selezionati**, **Inserisci un nuovo tipo DDT**, **Cancella i tipi DDTselezionati**, **Inserisci un nuovo tipo ordine**, **Cancella i tipi ordine selezionati**: sono tutti pulsanti per posizionarsi nella riga di inserimento di un nuovo tipo documento o eliminare i tipi documento selezionati;

- **Ripresa dati**: tramite questa elaborazione, tutte le righe documento che soddisfano le tipologie documento e i periodi richiesti (data fattura per le fatture, data DDT per i DDT e data merce pronta o data prevista consegna per gli ordini) andranno a generare le previsioni per la versione richiesta.
