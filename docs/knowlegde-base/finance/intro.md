---
title: FAQ Amministrazione
sidebar_position: 1
---


<details>

  <summary>1. Quali fatture elettroniche vengono inserite nel folder impostato nella tabella <b>Configurazione documenti elettronici</b>?</summary>
  
Ci sono due condizioni da rispettare nell'anagrafica cliente. 

La prima condizione è il flag <b>Firma del documento</b>, che deve essere attivo.                 
La seconda condizione è il flag <b>Fatturazione elettronica firmata</b>, che è un 3-state flag:   

- Quando è 1 per il cliente si prevede la firma, indipendentemente da altre opzioni di configurazione, quindi si esporta sempre il file nel folder definito in configurazione documenti elettronici per farne la firma;           

- Quando è 0 per il cliente non si prevede la firma, indipendentemente da altre opzioni di configurazione, quindi non si esporta il file nel folder di configurazione documenti elettronici, anche se è impostato il folder;      

- Quando è Null come qui sopra (che è l’impostazione di default) vale l’impostazione nella ‘configurazione documenti elettronici’, cioè se c’è un percorso dove creare il file lo crea sempre, altrimenti non lo crea.

</details>


<details>

  <summary>2. Per i pesi, in fase di creazione fattura elettronica, Fluentis mi dice che non possono essere superiori a 9.999 come faccio a togleire questo blocco? </summary>
  
Questo blocco è legato alle regole della Fatturazione Elettronica, la quale non accetta PESI superiori
Per ovviare a questo problema è necessario scalare di UM se si dovesse superare la soglia dei 9999, in modo tale da utilizzare una UM coerente ed ottenere i valori desiderati.

</details>


<details>

  <summary>3. Come è possibile inserire il flag <b>Gruppo IVA </b> in una <b>Dichiarazione di intento</b> già creata? </summary>
  
E' necessario effettuare il seguente update, inserendo l'id della dichiarazione di intento.

update CA_DichIntMain set CADM_IsVatGroup = 1 
where CADM_Id = '[id della dichiarazione di intento]'

</details>


<details>

  <summary> 4. Come è possibile effettuare la stampa di un mastrino filtrando i movimenti in base alla competenza economica? Infatti ad esempio impostando il periodo richiesto, nella stampa dei sottoconti, nei campi "da data competenza" e "a data competenza" non viene presa in considerazione la competenza economica, ma sembrerebbe venga letta la data di competenza che nelle registrazioni contabili è posta di fianco alla data di registrazione.</summary>

Confermo che nei filtri, quando scrive da data competenza a data competenza si intende quella di competenza (per così dire "contabile") della testata. Normalmente coincidono ma può essere usata (anche se di fatto da pochi) per registrare ad esempio scritture di rettifica in data approvazione bilancio che si riferiscano al 31/12 dove a tale data magari il periodo è già bloccato per stampa definitiva del giornale e quindi non accetterebbe la data registrazione. Per quanto riguarda la data competenza economica, la stampa del mastrino e più in generale il sistema non è pensato per lavorare in quel modo. La procedura più corretta è calcolare una chiusura dei conti del periodo (chiusure infrannuali) e lanciare le relative scritture di rettifica integrazione. In alternativa posso consigliare di usare la form visualizzazione conti dove aggiungere dall'object navigator le proprietà From AccrualDate ToAccrualDate che sono le date di competenza economica (Da A) e usare il filtro posto sulla prima riga della griglia di dettaglio. In alternativa ancora occorre eseguire una personalizzazione del report e della form di lancio aggiungendo filtri e capi ecc...

</details>

<details>

  <summary> 5. Come mai, confrontando una chiusura conti infrannuale calcolata dall'1/1 al 31/12 con i risultati del modulo amministrativo, nella chiusra del controling trovo dei risconti che in amministrazione non vengono calcolati?</summary>

Il modulo controlling ragione in modo più flessibile, in alcune situazioni, rispetto al modulo amministrativo.
Infatti è in grado di rettificare qualsiasi costo ricavo (con tipo conto compatibile) anche per quote di competenza economica nel passato. Ad esempio se il costo registrato nell'anno X ha competenza parzialmente (o totalmente) nell'anno X-1, elaborando la chiusura dell'anno X si avrà comunque una rettifica (ad esempio un risconto attivo).
Occorre porre particolare attenzione alla **gestione degli assestamenti eseguiti nel modulo amministrativo**.
**Si raccomanda di eseguire il calcolo e contabilizzazione assestamenti e la chiusura e riapertura conti con riapertura assestamento tramite le procedure automatiche evitando di eseguire scritture manualmente**.
La procedura automatica impone, infatti, alle scritture di riapertura degli assestamenti la data pari alla scrittura originaria oggetto di rettifica e la competenza economica di tale scrittura pari all'anno X-1. In tale modo si evita infatti che elaborando le chiusure di periodo dell'anno X il software vada a calcolare ulteriori rettifiche, avendosi già nel saldo dell'anno X (o periodo infrannuale dell'anno X) il risultato corretto di competenza per effetto della corretta riapertura dell'assestamento precedente.  

</details>

<details>

  <summary> 6. Come mai nella maschera di gestione dell'assestamento (ratei e risconti) pur essendo sicuro di aver inserito movimenti contabili idonei non calcola nulla?</summary>

Dopo essersi accertati di aver effettivamente inserito movimenti contabili con date di competenza economica a cavallo dell'esercizio contabile, e di aver utilizzato conti di costo aventi il tipo "da rettificare" (db Fast Start) o comunque avente il flag Servizio nella tabella *tipi conto*, se ancora non vedo alcun rateo o risconto proposto, potrei aver attivato, inavvertitamente il flag *Chiusura mensile* nei parametri generali di contabilità. Questo flag attiva infatti logiche per localizzazioni estere non italiane.

</details>

<details>

  <summary> 7. Ho associato un tipo ritenuta d'acconto ad un cliente per generare la fattura elettronica completa dei tag necessari, ora voglio contabilizzare la fattura ma vedo che la scrittura contabile non è corretta e non riporta la ritenuta d'acconto, perchè?</summary>

All'interno nella tabella *Tipi Ritenuta*, aprire la tipologia associata al cliente in questione e verificare che il campo *Tipi partite* sia settato su *Partite Nette*.

</details>

<details>

  <summary> 8.Fluentis mi propone all'interno di una nuova registrazione contabile sempre l'ultima divisa utilizzata con la causale selezionata ignorando la divisa di default del cliente o fornitore, perchè? </summary>

Verificare il settaggio del parametro generale nella tabella PARAM_Parameter codice CA-RegCont-General_PurposeCurrencyByTemplate. Se il parametro è impostato a 1 verrà proposta la divisa ultima utilizzata con la causale, se impostato a 0 non verrà proposta alcuna divisa seguendo la logica base della divisa della società e poi lettura della divisa del cliente o fornitore.

</details>

<details>

  <summary> 9.ho la necessità di creare più numerazioni per le fatture si vendita. Non è chiaro se devo creare tanti registri iva vendita per quante sono le numerazioni o l'unico registro vendita può avere più numerazioni </summary>

la relazione presente nel ciclo di contabilizzazione delle vendite è Tipo Fattura > Numerazione > Causale contabile associata > Registro iva associato alla causale. In un ambiente standard si nota che possono esserci più tipologie, ma se abbinate alla stessa causale, che quindi ha lo stesso sezionale iva, la numerazione è la stessa (condivisa, quindi la FT nr 1 per il tipo A e poi per il tipo B nascerà la nr 2). Nel caso di diversi tipi fattura con diverse numerazioni concorrenti è opportuno differenziare i sezionali iva e pertanto abbinargli anche diverse causali, altrimenti la protocollazione iva andrà in conflitto. Questo inquanto normalmente nelle causali è attiva una spunta di opzione che propone il protocollo iva pari al numero del documento (in modo da non dover fare attenzione a contabilizzare le fatture nell'ordine di numero). Diversamente è necessario disattivare tale opzione

</details>