---
title: Calcolo costo
sidebar_position: 1
---

La procedura di **Calcolo costo** presente nel Controlling permette di calcolare i costi degli articoli in base alla distinta base e ai cicli di lavoro.
Nella parte superiore della maschera è presente il filtro, nel quale è possibile effettuare una ricerca più mirata per gli articoli da considerare nella procedura; nella griglia con i risultati di ricerca è possibile selezionare gli articoli da considerare. La procedura viene effettuata con il pulsante della ribbon bar **Calcolo costi articoli selezionati**; i risultati della procedura di calcolo saranno riportati direttamente nella griglia degli articoli. Con il pulsante della ribbon bar **Valorizzazione assiemi**, invece, viene aperta la relativa stampa, che a sua volta conterrà le stampe di Valorizzazione Assiemi.
Gli articoli selezionati nella procedura di Calcolo Costo verranno valorizzati in base all’opzione selezionata nella sezione apposita **Valorizzazione a**:

-	**Costo ultimo** e **Costo medio**: per costo ultimo si intende l'ultimo costo di acquisto (il più recente), mentre per costo medio ponderato si intende il costo medio che deriva dalle movimentazioni di magazzino. Questo valore è presente in anagrafica articolo, tab Costi.

-	**Costo standard/costo standard successivo**: il costo standard è un costo impostato manualmente o dalla procedura di calcolo costo e indica il costo di riferimento per un dato articolo da usare durante l'anno. Solitamente è un costo che viene aggiornato all'inizio o alla fine dell'anno. Per gli articoli di acquisto solitamente corrisponde al costo medio mentre per gli altri articoli viene calcolato dalla procedura di calcolo costo che si trova nell'area Controlling, come somma dei costi dei materiali e dei costi delle fasi di produzione. Tutti questi costi possono essere usati per le valorizzazioni della distinta base, delle rimanenze di magazzino oppure (per gli articoli di acquisto) per la valorizzazione degli ordini di produzione (e relativi movimenti di carico) quando si carica a magazzino l'articolo di un ordine di produzione. Questo valore è presente in anagrafica articolo, tab Costi.

-	**Prezzo di vendita**: questo valore è presente in anagrafica articolo, tab Costi.

-	**Da prototipo**: la procedura cercherà un prototipo nel quale sia presente l’articolo selezionato, e utilizzerà questo costo.

-	**Da area gestionale**: se viene selezionata questa opzione, è necessario indicare accanto l’Area gestionale dalla quale prendere il costo. L’area gestionale è una tabella composta da due griglie: nella prima si inseriscono Codice e Descrizione; nella seconda invece è possibile imputare una serie di dati quali il Tipo costo da utilizzare per l’area. La tabella Tipo costo può contenere a sua volta svariate tipologie di costo; può anche basarsi sui listini di vendita o acquisto. 

Il flag **Aggiorna costi articoli** permette di aggiornare i costi in anagrafica articolo. Senza questo flag invece il calcolo non modificherà i valori. È possibile scegliere di Considerare i lotti economici ed è inoltre possibile inserire una data dalla quale considerare validi i nuovi costi.
La parte sinistra **Parametri strutture Distinte base e Cicli** serve a indicare quale **Versione Articolo** considerare e quale **Ciclo** considerare dell’articolo, per la procedura di Calcolo costi. Basterà selezionare il flag relativo e i relativi Versione e/o Ciclo. 

I risultati della procedura sono visibili cliccando nella ribbon bar **Calcolo costi articoli selezionati**; in base ai parametri inseriti, saranno ricalcolate solo alcune colonne.
