---
title: Cost Driver
sidebar position: 6
---

Il nocciolo fondamentale di tutte quelle che sono le attribuzioni e le reversioni che abbiamo da un centro all’altro per ottenere, il totale de costi piuttosto che i risultati, assegnare i costi alle commesse. Tutte le logiche le troviamo all'interno di questa tabella. 


![](/img/it-it/controlling/cost-driver.png)

***ESEMPIO DELLE ATTRIBUZIONI***	

**CODICE:** codice della regola che stiamo inserendo. 

**Esempi di codici della regola**

**A: ATTRIBUZIONI**. Tutte le A sono tutte quelle con il CENTRO AZIENDALE che ha il FLAG su CONTI DA RIASSEGNARE. La logica di caricamento dei cost driver, parte dal definire come attribuire questi conti generici che contabilità non sa gestire, oppure che vanno attribuiti con logiche più variabili rispetto alle logiche che un contabile conosce.

**C: COMMESSE** Bisogna tener conto che le elaborazioni che riguardano le commesse, quando la dimensione di analisi è quella delle commesse, questi sono driver che verranno applicati alla fine di tutto. Per elaborare le commesse devo aver già elaborato tutta la dimensione standard industriale, per potergli attribuire i miei costi generali devo averli calcolati, altrimenti non so come ripartirlo

**R: REVERSIONI** quando da un centro vado in un altro centro.Inizio a fare i passaaggi per ribaltare da un centro all’altro. 

***CAMPI TABELLA COST DRIVER***

***DESCRIZIONE***: inserire una descrizione 

***AREA/DESCRIZIONE***. richiama la tabella AREA 

***NUMERO CICLO:*** Fluentis ha un ordine logico nella quale vengono elaborati i dati. Parte dai movimenti fisici, poi ci sono gli ammortamenti dei cespiti e successivamente parte con le attribuzioni.
In prima istanza deve assegnare tutti i centri generici. inizia con le attribuzioni (nell'ordine del numero ciclo) e successivamente passa alle reversioni. Anche qui è fondamentale capire con che ordine logico vengono settati i dati poichè dovrò verificare la bontà dei dati del resoconto finale. 

***CONTO/SOTTOCONTO:**  per ordine di attribuzione. Prende il movimento parcheggiato nel centro ausiliare a vado a dire come andarli a riassegnare. 

 

***DATA INIZIO, DATA FINE DELLA REGOLA:*** è una regola generale multiambiente e qui dico da che data a che data vale. Bisogna stare attenti al fatto che se io ho l’area mutiambiente non posso avere lo stesso sottoconto con lo stesso range di date. 

***Nei Cost Driver l'indicazione dell'AREA È SEMPRE OBBLIGATORIA.*** 

***TIPO DI DISTRIBUZIONE:*** andiamo ad indicare come è gestita l’attribuzione. Possiamo scegliere, ad esempio,la tipologia "grandezza fisica", ma abbiamo anche altre tipologie di distribuzione. 

 
Quando inserisco la grandezza fisica, si attivano nelle colonne sulla destra 

***UNITA’ DI MISURA:*** attivazione dell’unità di misura;(i MQ ad esempio)

***ESEMPIO***

Nella tabella dei movimenti fisici, registro i metri quadri dei miei centri e so da data a data quali sono i metri quadri di competenza. Io qui sto solo dicendo che gli affitti li gestisco in metri quadri dei centri. Può essere che a budget gli affitti li gestisco a numero di persone dei centri e farò un’altra regola, valida per il budget, nel quale lo stesso centro e lo stesso conto lo uso con una regola di applicazione diversa. 


***ERRORE DI GESTIONE***


**BLOCCA:** Potrebbero esserci casi in cui invece, al contrario, la REGOLA c’è, ma ci manca il DATO. Esempio dell’energia elettrica; se nessuno nei movimenti fisici mi va a registrare quali sono le kw di quel mese come faccio ad assegnarlo? In questo caso va bloccato l’elaborato per vincolare i miei utenti a mettere KW ora dei centri in basso a sinistra. 

**VALORE DI RESIDUO:** quando non è necessario avere un dato puntuale ma voglio derivarlo dall'altro che ho inserito in altri periodi, utilizzo o il VALORE RESIDUO o la MEDIA DEI DENOMINATORI ESISTENTI. Il Valore residuo però non può essere utilizzato per le A(attribuzioni) ma solo per le R (reversioni). 

ESEMPIO: ufficio tecnico può aver lavorato per il commerciale ma può essere anche che non lo sia. Il costo lo teniamo nell’ufficio tecnico o lo assegniamo a qualcos’altro?  Se devo assegnarlo magari li dirò MEDIA DENOMITATORI ESISTENTI, ovvero faccio la media di gennaio e febbraio e a marzo valorizzo lo stesso, magari ad aprile faccio una compensazione. Altrimenti valore residuo, ovvero, il costo resta. L’ufficio tecnico si farà carico del suo costo. 

**L’ERRORE DI GESTIONE serve per capire come fluentis si deve comportare nel caso in cui il criterio del driver di quella riga si deve comportare nel caso in cui non abbia i valori per fare l’elaborazione che viene richiesta. Possiamo decidere se bloccarlo, mediarlo o lasciare lì un valore.**

Abbiamo visto quelle che sono le attribuzioni 

**ESEMPIO DELLE COMMESSE**

 
Il mio centro di partenza è il centro industriale di produzione. Come faccio a ribaltare la fase di fresatura alle singole commesse, se voglio fare un’analisi per commessa? Devo avere un driver che prende quel costo, e me lo ribalta in questo caso su produzione su commessa che andrà a vedere dalla produzione, commessa per commessa quanto è stato lavorato. A seconda della singola commessa fa il totale del costo del 1105 e lo assegna come costo, non diretto ma indiretto di commessa. 


***FLAG STORNO***: la dimensione di origine, in questo caso industriale, altrimenti dai miei dati di industriale mi mancherebbero dei costi. La dimensione di partenza non viene svuotata del dato e, mettendo il flag storno viene fatto un movimento di avere che chiude l’avere ed inserisce il dare sui centri di destinazione. 


![](/img/it-it/controlling/cost-driver-2.png)
 
***Lo storno ha senso quando la dimensione dei centri destinatari è diversa da quella sulla quale partiamo.***

***TIPI DI DISTRIBUZIONE PER LE COMMESSE***

 

Cerco di assegnare i COSTI INDIRETTI DI COMMESSA: ad esempio prendo il centro aziendale X

 
ed assegnerò il 50% del valore che ho alle commesse d tipo A ed il 50% alle commesse di tipo B; 

Dentro le commesse di TIPO A andrò a filtrare i movimenti che mi arrivano dalla produzione registrati commessa per commessa e li proporzionerò nell’uno e nell’altra con cosa? Con l’unità di misura 1.

 
***ESEMPIO DELLE REVERSIONI***

La differenza rispetto alle commesse è che le attribuzioni devono avere sia il sottoconto che il centro di riferimento. Nelle assegnazioni il sottoconto c’è sempre. Mentre nelle reversioni non è necessario che esso ci sia.


I ***TIPI DI DISTRIBUZIONE*** hanno dati in più.





**CAMPO “VALORI DA UTILIZZARE”**

 
Quali sono i dati di origine di questi centri di destinazione che devo considerare: 

**TUTTI**: mi legge tutti i movimenti assegnati a quel determinato ciclo.
**SOLO RIGHE DI ORIGINE**: solo i dati che mi arrivano dalle attribuzioni (come se fosse il CICLO 1), oppure direttamente assegnati dalla contabilità generale. 

**Mi serve per depurare i dati che devo leggere**


