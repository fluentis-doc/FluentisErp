---
title: Distinta di Presentazione
sidebar_position: 1
---

La form si trova sul percorso  **Tesoreria > Effetti > Crea Distinta** e permette la creazione di una *nuova* distinta oppure la *modifica/visualizzazione* di una distinta già esistente.

## Come creare una Distinta di presentazione

<details>

  <summary>Clicca per i passaggi fondamentali</summary>
 
  1. Richiama il **Tipo** (di distinta), se hai associato dei Sottoconti / Contropartite si caricheranno automaticamente anche questi campi, altrimenti inseriscili manualmente;  
  2. **Salva** la testata appena creata;  
  3. Usa il pulsante **Acquisizione effetti** (nella ribbon bar) per inserire in distinta effetti precedentemente creati;  
  4. Usa il pulsante **Creazione file Ri.Ba.** (nella ribbon bar) per creare il file telematico da inviare alla banca;  
  5. Apri la lista con il pulsante **Documenti** (nella ribbon br) per accedere al file telematico allegato;  
  6. Dopo aver aperto il file telematico usa **Salva allegato** per scaricare una copia sul tuo PC da inviare alla banca;  
  7. Stampa la distinta o attiva il flag **Stampato**;  
  8. Usa **Contabilizza e chiudi** se vuoi contabilizzare la distinta.

</details>

1. *Inserimento dati*:  

> 1.1. Inserisci il *Tipo della distinta* con la combo box **Tipo**: il programma crea in automatico il numero progressivo della distinta secondo il **numeratore** collegato al tipo per **l'anno** di riferimento.  
>1.2. La **data di presentazione** è proposta come data *oggi* e può essere cambiata se necessario.  
>1.3. La **divisa** della distinta viene proposta sulla base della divisa della società attiva: nel caso in cui sia assegnata una divisa differente dall'euro questa obbliga ad inserire nella distinta solo effetti con la stessa divisa.  
1.4. La sezione dei **Sottoconti / Contropartite** può essere valorizzata automaticamente sulla base dell'impostazione del [**tipo distinta**](/docs/configurations/tables/treasury/bills-portfolio-module-tables/bills-list-presentation-types) selezionato. Se non sono stati predefiniti i conti collegati al tipo distinta inseriscili manualmente nei due campi (widget): 
>> - **Banca conto corrente** (si tratta del sottoconto collegato all'anagrafica banca sul quale avverrà l'accredito finale al buon fine dell'operazione) e      
>> - **Contropartita presentato al salvo buon fine / sconto / dopo incasso** (conto transitorio di presentazione; in fase di *contabilizzazione della distinta* sarà stornato il *conto del portafoglio attivo* e accreditate le somme sul presente conto, successivamente, in fase di contabilizzazione accredito, da questo conto le somme saranno girocontate al conto *Banca conto corrente*).  
> 1.5. Se hai definito nell'anagrafica della banca un valore limite per il castelletto, l'importo concesso e residuo utilizzabile saranno visualizzati nella sezione *Situazione castelletto bancario*.  

Se hai compilato il valore del castelletto nella sezione *Differenziato* (anzichè *Globale*) imposta la tipologia di distinta in creazione con i radio buttons nella sezione **Tipo presentazione** per gestire specificamente i valori del castelletto *Concesso* e *Residuo*.

2. **Salva** la testata della distinta appena creata

3. Usa il pulsante **Acquisizione effetti** (nella ribbon bar) per inserire gli effetti precedentemente creati nella distinta.

4. Usa il pulsante **Generazione file Ri.Ba.** per creare il tracciato telematico della distinta da inviare alla banca. In alternativa, a seconda del tipo di distinta creata, sono disponibili le esportazioni per tracciati SDD (ex RID ora a livello Sepa Europeo) ed LCR (Francese).

5. Apri il documentale con il pulsante **Documenti** (nella ribbon bar) per scaricare sul tuo PC il file da inviare alla banca.  

6. Dopo aver aperto il documento nel documentale usa il pulsante **Salva allegato** per scaricare una copia sul tuo PC da inviare alla banca.

7. Una volta completata la distinta sarà possibile procedere alla **stampa** diretta della stessa (oppure attivare il flag *Stampato*). 

:::tip[Info]
Lo **stato di distinta stampata è necessaria per poter procedere alla sua contabilizzazione**, che può essere eseguita direttamente da questa maschera con il pulsante **Contabilizza e chiudi**: sarà necessario aver predefinito la causale contabile all'interno dei parametri del modulo.
:::

8. **Contabilizza e chiudi** se serve contabilizzare la distinta.

:::note[Nota]
La situazione del castelletto bancario propone i dati del castelletto sbf memorizzato in anagrafica banca *Conto corrente* e il residuo disponibile sulla base dell'importo degli effetti presentati ma non ancora accreditati.

Una serie di flag memorizza se la distinta è stata: 
- stampata (questa condizione è obbligatoria per poter procedere alla sua contabilizzazione), 
- se è stato **creato** un **File** telematico, 
- se è stata **Contabilizzata** e 
- se si tratta di una distinta **RID** relativa a **utenze** oppure LCR.
:::
