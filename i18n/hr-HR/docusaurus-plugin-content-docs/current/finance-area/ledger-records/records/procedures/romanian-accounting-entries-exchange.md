---
title: Regolarizzazione Valuta
sidebar_position: 2
---

La maschera si trova in Amministrazione > Registrazioni contabili > Procedure > Regolarizzazione valuta

Questa procedura permette di calcolare in automatico, ad una certa data, le differenze cambio per i conti in valuta estera.

E' possibile gestire: 

- crediti e debiti (clienti e fornitori) 
- conti bancari

**Vengono generate le partite aperte e le registrazioni contabili di adeguamento alla differenza cambio.**

### Come calcolare e registrare le differenze cambio (ad esempio a fine anno o in altra data)

- selezionare una divisa (una per volta), rispetto alla quale sarà eseguito il calcolo, tramite la combo box **Divisa** nella testata della maschera 
- mediante i radio buttons sulla destra selezionare la tipologia di calcolo:
    - Disponibilità: considera i saldi (es. bancari)
    - Partite: legge crediti e debiti verso clienti / fornitori
        - Attiva: clienti
        - Passiva: fornitori

Il conto / sottoconto e la Divisione sono invece filtri opzionali per restringere la ricerca.

- Impostare in basso nella maschera la **data** di riferimento (ad esempio 31/12/AAAA) per la regolarizzazione (cioè il calcolo della differenza cambio)
- Il valore del **cambio** corrispondente verrà caricato in base all risultanze della tabella [**cambi valute**](/docs/configurations/tables/finance/currency-exchange)
- Premere Ricerca
---

Nella griglia centrale che espone il dettaglio delle posizioni ricercate vengono evidenziati: 

- **Conto / sottoconto** estratto dalla ricerca e da gestire 

- **Importo in valuta** (espresso nella divisa estera), pari alla somma dare meno la somma avere in valuta di tutti i movimenti avvenuti sul conto 

- **Importo (in euro) storico**, sommatoria dei movimenti dare in euro meno sommatoria dell’avere in euro, 

- **Importo corrente** che corrisponde all’importo in valuta ricalcolato al tasso di cambio attuale (esposto in basso nella maschera)

- **Differenza** cambio positiva o negativa.

---

Nella zona dei ***Parametri*** sono definiti i conti per l'utile o perdita su cambi con i quali sarà realizzata la contabilizzazione della regolarizzazione (ripresi dai parametri di contabilità generale)

- Inserire la causale contabile desiderata per creare l contabilizzazione

- Premere il comando **Contabilizzazione**

---

<details>

  <summary>Uleriori dettagli (Click to expand)</summary>
  
Il flag **Provvisorie**: permette di generare la differenza di cambio come registrazione contabile provvisorie;

**Cambio**: con il quale viene calcolato il valore aggiornato. Viene proposto in automatico dal programma (dalla tabella cambio valute), ma può essere modificato dall'utente;

**Data** e **Numero** **documento** e **Causale** **contabile** relativa alla registrazione contabile da regolarizzare. **La data inserita rappresenta anche la data fino alla quale vengono selezionate le registrazioni contabili;**

**Conti** **di ricavo** e **costo**: utilizzati per registrare le differenze di cambio;


Nella tab di *Rollback* è possibile visualizzare e ripristinare il risultato delle operazioni di regolarizzazione eseguite in base ai filtri impostati (Da data/A data, il conto).

**Ripristina regolarizzazione:** Pulsante per cancellare le operazioni di regolarizzazione selezionate nella griglia di risultato. |

</details>

:::danger[Attenzione]
Di default, ogni **anagrafica cliente fornitore** che viene creata, attiva **nel piano dei conti il flag *Gestione divisa***. Questa opzione **non deve essere disattivata**, per non bloccare la possibilità di utilizzare la presente procedura e la corretta gestione della chiusura saldi in valuta estera.

**Nella gestione del conto in valuta**, sia esso un conto cliente o fornitore, oppure un conto bancario, consigliamo di **movimentare il conto in maniera uniforme**, definendo la divisa di movimentazione, esempio il dollaro, e movimentando sempre il conto in dollari.

Il movimento in valuta avrà, quindi, il tasso di cambio, riferito ad una certa data valuta, ed il controvalore in euro che alimenterà il nostro bilancio, espresso nella divisa della società, ad esempio l’EURO.

Movimentare un conto, ad esempio di un fornitore, contemporaneamente in due divise diverse, esempio dollaro per alcuni movimenti e la divisa cinese per altri, è possibile, ma consigliamo, se possibile, il mantenimento di due conti distinti, ognuno con una singola divisa di riferimento.

**Sono** invece **da evitare**, per non compromettere la possibilità di corretto utilizzo della procedura che stiamo illustrando, **i movimenti euro su euro**, anche di giroconto o altra causale, **su un conto in divisa**.

:::








