---
title: Regolarizzazione Valuta
sidebar_position: 2
---

Questa maschera permette di calcolare in automatico, ad una certa data, le differenze di cambio per i conti in valuta (ad esempio crediti e debiti oppure conti bancari) e per generare le partite e le registrazioni contabili di regolarizzazione.

**Occorre, prima di tutto selezionare una divisa** (una per volta) rispetto alla quale sarà eseguito il calcolo, oltre (mediante i radio buttons sulla destra) alla tipologia di 
calcolo:

- Disponibilità: considera saldi (es. bancari)
- Partite: legge crediti e debiti verso clienti / fornitori
    - Attiva: clienti
    - Passiva: fornitori

Il conto / sottoconto e la Divisione sono invece filtri opzionali per restringere la ricerca.

---

Nella griglia centrale che espone il dettaglio delle posizioni ricercate vengono evidenziati, conto per conto, l'importo espresso nella divisa estera, il controvalore in euro storico, calcolato come somma algebrica di tutti i movimenti, il controvalore corrente ricalcolato al cambio esposto più in basso nella maschera, la differenza cambio positiva o negativa.

---

Nella zona dei *Parametri* sono definiti una serie di parametri con i quali sarà realizzata la contabilizzazione della regolarizzazione:

**Provvisorie**: permette di generare la differenza di cambio come registrazione contabile provvisorie;

**Cambio**: con il quale viene calcolato il valore aggiornato. Viene proposto in automatico dal programma (dalla tabella cambio valute), ma può essere cambiato dall'utente;

**Data** e **Numero** **documento** e **Causale** **contabile** relativa alla registrazione contabile da regolarizzare. **La data inserita rappresenta anche la data fino alla quale vengono selezionate le registrazioni contabili;**

**Conti** **di ricavo** e **costo**: utilizzati per registrare le differenze di cambio;

---

Nella tab di *Ripristino* è possibile visualizzare e ripristinare il risultato delle operazioni di regolarizzazione eseguite in base ai filtri impostati (Da data/A data, il conto).



| Funzione | Significato |
| --- | --- |
| Cerca | Pulsante per cercare i conti da regolarizzare in base ai filtri inseriti. |
| Contabilizzazione | Pulsante per eseguire l'operazione di regolarizzazione dei conti selezionati nella zona dei filtri e in corrispondenza ai parametri inseriti nella zona relativa. |
| Ripristina regolarizzazione | Pulsante per cancellare le operazioni di regolarizzazione selezionate nella griglia di risultato. |






