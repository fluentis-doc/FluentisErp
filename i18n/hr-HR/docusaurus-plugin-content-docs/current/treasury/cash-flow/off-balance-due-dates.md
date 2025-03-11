---
title: Scadenze Extracontabili
sidebar_position: 3
---

La form si trova in Tesoreria > Cash Flow > Cash Flow > Scadenze extra-contabili


Con questa maschera è possibile gestire le scadenze extracontabili che vengono lette nell'apposito flusso di cash flow (definito nella tabella [**Tipi Flusso**](/docs/configurations/tables/treasury/cash-flow-module-tables/flux-types) dal flag *Extra contabile*), come ad esempio prevedere le uscite per tributi, salari/stipendi, ecc. ecc..

## Come inserire una scadenza extra contabile per la lettura nel cashflow

Inserire direttamente nella griglia le scadenze previste.

- Il campo **Tipi scadenza** è collegato all'omonima tabella dove poter definire liberamente una "etichetta" per rappresentare la tipologia di scadenza
- La Data scadenza definirà la rappresentazione nel cashflow (nel mese corrispondente) essendo da considerare come la data di manifestazione del flusso finanziario che stiamo inserendo
- La Divisa sarà proposta pari a quella della società (es. L'Euro) e può essere variata per inserire un flusso in divisa estera, in questo caso si gestirà anche il cambio in base alla dat scadenza.
- L'importo in valuta è quello denominato nella divisa selezionata nel campo precedente, mentre l'importo Dare (flusso finanziario positivo, esempio un credito) o Avere (flusso negativo esempio un debito) sono denominati in divisa della società (es. Euro)
- il flag **chiusa** può essere usto per non considerare più la riga nelle prossime simulazioni senza dover cancellare la riga, nel caso si voglia conservarla e memorizzarla.



**Pulsanti specifici**

**Ricerca** Pulsante per applicare i filtri di ricerca sulla lista delle scadenze extracontabili.

**Nuovo** Imposta il cursore all'inserimento di una nuova scadenza extracontabile.

**Cancella** Cancella la scadenza extracontabile selezionata.






