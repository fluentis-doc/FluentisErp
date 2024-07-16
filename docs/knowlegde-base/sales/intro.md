---
title: FAQ Vendite
sidebar_position: 1
---


<details>

  <summary>1. Come è possibile fare in modo che i prezzi di Listino dei componenti di una Distinta vengano riportati nella righe articolo degli Ordini, dopo aver cliccato il pulsante della ribbon bar <b>Esplodi il primo livello distinta</b>?</summary>
  
E' necessario impostare il flag "Proponi dati comm. per dist. base esplosa manualmente", che si trova all'interno dei Parametri ordini clienti. In questo modo, i dati commerciali vengono riportati e quindi anche i prezzi di listino dei componenti.

</details>

<details>

  <summary>2. Come gestire la <b>data validità</b> della tab Listini dell’anagrafica cliente?</summary>
  
La data validità inserita nella griglia della tab Listini in anagrafica cliente serve ad indicare quali tipologie di listini sono valide da quella data per quel cliente. La ripresa prezzi nei documenti deve sapere in quali listini cercare l’articolo.
Come prima condizione, il listino da inserire nei documenti deve essere valido in questa data. 
Come seconda condizione per la scelta della tipologia di listino da inserire nei documenti, il listino scelto ha la data inizio validità strettamente minore alla data del documento.     
In questo modo è possibile creare tutti i listini che vogliamo e applicarli al cliente solo da una determinata data.
Tecnicamente, tutti i listini che vengono creati, per essere utilizzati per la ricerca prezzi devono avere:            
1. la data inizio validità maggiore o uguale alla data validità;       
2. la data inizio validità minore o uguale alla data del documento;       
3. data fine validita maggiore o uguale alla data documento oppure data fine validità nulla;              
Tra tutti i listini trovati con queste condizioni prende quello con range di validità più vicino alla data del documento.

</details>

<details>

  <summary>3. Se ho più <b>sconti</b> sullo stesso articolo in un listino qual è la **priorità**? </summary>
  
La priorità considerata è quella riportata nel tipo sconto. Ricordiamo che la tipologia di sconto è importante per la gestione della priorità è della natura sconto (Imponibile o Cascata).

</details>

<details>

  <summary>4. E’ possibile duplicare solamente alcuni articoli del listino e non tutto il listino? </summary>
  
Sì, è possibile duplicare solo alcuni articoli, utilizzando la procedura di “Duplica e Manutenzione listini di vendita” e selezionando solo gli articoli desiderati.
Il risultato sarà un nuovo listino contenente solo gli articoli modificati.
Per gli altri artioli rimarrà valido il listino precedente, in assenza di data fine validità.

</details>


<details>

  <summary>5. Per le fatture non c'è il flag <b>Controllo disponibilità</b>: in che modo possiamo escluderle dal calcolo del fabbisogno? </summary>
  
Le fatture considerate nel fabbisogno sono:
- le fatture immediate, cioè accompagnatorie;
- le fatture che derivano da DDT se il DDT non è stato scaricato a magazzino.

</details>


<details>

  <summary>6. A cosa serve il <b>Tipo scaglione</b> nelle righe articolo del listino? </summary>
  
Il tipo scaglione inserito nella riga articolo del listino viene proposto in automatico nei documenti, altrimenti sarà l'utente a scegliere manualmente il tipo di scaglione da applicare alla riga.

</details>


<details>

  <summary>7. Con BizLink posso esportare le fatture di vendita verso un altro gestionale, ad esempio quello del commercialista ? </summary>
  
Sì, è possibile creare un parser dedicato per esportare i dati, come richiesti da un altro gestionale.
Oppure, è possibile utilizzare direttamente il file XML della fatturazione elettronica, se il gestionale che acquisisce la fattura lo permette: Fluentis gestisce la creazione delle fatture importando il file XML della fatturazione elettronica.

</details>


<details>

  <summary>8. Come è possibile impostare le <b>spese di incasso</b> per le riba in modo che siano gestite automaticamente dal gestionale in base al numero di scadenze? </summary>
  
Se la spesa ha il flag "Spesa Incasso" e il tipo pagamento ha la natura effetto = 0 (RIBA), per ogni scadenza della soluzione pagamento verrà aggiunta la spesa di incasso.
Se si hanno più scadenze, ognuna avrà la sua spesa di incasso. 

</details>


<details>

  <summary>9. Quali sono le condizioni per gestire il <b>barcode</b> nei documenti? </summary>
  
I passaggi sono i seguenti.     
1. Nei Parametri del documento di vendita, inserire il flag <b>Uso barcode</b>;                            
2. In anagrafica articolo, inserire il <b>codice Barcode</b>;                    
3. Nei documenti, inserire nella colonna <b>Barcode</b> della griglia articolo il codice inserito in anagrafica cliente; se il programma riconosce il codice, inserisce in automatico l'articolo.

</details>


<details>

  <summary>10. Dove deve essere inserita la <b>Marca</b> per essere riportata nei documenti di vendita? </summary>
  
La Marca deve essere inserita nella griglia articoli dei listini di vendita per essere riportata nei documenti.

</details>


<details>

  <summary>11. E' possibile nascondere ad un utente una determinata tipologia di fattura? </summary>
  
Sì, con le <b>Restrizioni</b>. Esse impediscono agli utenti di creare, visualizzare o modificare determinate tipologie di documenti. Di seguito viene riportato l'esempio per impedire ad un utente di utilizzare il Tipo fattura con codice FVITDIF. Ricordiamo che è necessario aggiungere la Restrizione anche nel profilo Arm dell'utente, nell'appostia griglia.            


![](/img/it-IT/sales/sales-invoices/search-sales-invoices/restriction.png)


</details>


<details>

  <summary>12. La fattura risulta Scaricata anche se non ho effettuato nessun movimento di magazzino, inoltre il flag Scaricata è bloccato e non si può togliere. </summary>
  
Nel caso di fattura creata da documento di trasporto già scaricato, è presente il parametro generale VE-PurchaseInvoices_VerifyLoadStatusDDT che blocca il flag Scaricata anche nella fattura.          

</details>


<details>

  <summary>13. Come faccio a popolare i Pesi nei riepiloghi della fattura? </summary>
  
Per poter vedere il riepilogo dei pesi è necessario flaggare il parametro **Ricalcola trasporto** nei Parametri del documento. Sarà inoltre necessario selezionare l'unità di misura corretta, nei riepiloghi, per visualizzare il valore.        

</details>


<details>

  <summary>14. Perchè se raggruppo la procedura C.M.R. per Conto non posso valorizzare Destinatario e Destinazione? </summary>
  
Se si raggruppa soltanto per il Conto, non si possono valorizzare Destinatario e Destinazione perchè più righe con lo stesso cliente, ma diversi destinatari/destinazioni, creano una sola riga CMR. E' necessario quindi raggruppare sia per Destinazione che per Conto.        

</details>


<details>

  <summary>15. Come posso mantenere nel DDT il Vettore inserito nell'ordine, se passo per Picking? </summary>
  
Se nella creazione DDT da Picking viene inserito il parametro “DDT raggruppato per singolo ordine”, viene riportato il Vettore dell’ordine.

</details>


<details>

  <summary>16. Da cosa dipende la differenza di importo tra la Stampa Fatturato e la Somma nella Ricerca fatture? </summary>
  
Nella Ricerca fatture l’imponibile in EUR considera anche sconti/maggiorazioni/spese finali del documento, mentre il fatturato calcola solo i valori presenti nella lista articoli.
Nella Ricerca fatture ci sono tutti i Tipi fattura del filtro, mentre nel Fatturato solo i Tipi fattura che hanno il flag 'In statistica' attivo.

</details>