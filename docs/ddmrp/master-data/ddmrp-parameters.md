---
title: Parametri DDMRP articoli
sidebar_position: 5
---

Tramite questo form si definiscono i parametri necessari per la gestione di un articolo buffer cioè gestito a logica DDMRP.

Per ogni articolo buffer ci deve essere almeno un record in questa tabella, uno per ogni centro di distribuzione (vedi **struttura logistica**) in cui l'articolo è gestito a scorta DDMRP, ed eventualmente uno per la fabbrica (campo magazzino vuoto) se l'articolo è gestito a scorta DDMRP anche in fabbrica.

I parametri DDMRP da definire sono i seguenti:

- **Magazzino**, 

  è il codice magazzino associato all'unità logistica del record cioè al centro di distribuzione (o hub intermedio) e viene lasciato vuoto se il record si riferisce alla fabbrica.

- **Fornitore**

  indica il fornitore dal quale rifornire questo articolo in questa unità logistica.

  Per default l'unità logistica fornitrice è indicata nella tabella della struttura logistica, con questo campo si possono gestire delle eccezioni per singolo articolo.

  Per esempio normalmente gli articoli presso questa unità logistica vengono forniti da un Hub ma alcuni articoli vengono forniti da un altro hub o dalla fabbrica direttamente.

  Nel caso il fornitore non sia presente nella tabella delle unità logistiche, si tratta di un fornitore esterno e quindi verrà emesso un comune ordine d'acquisto a tale fornitore.

- **Giorni per trasporto**

  se il campo fornitore è compilato, va compilato anche questo, che rappresenta il tempo necessario per approvvigionare la merce dall'unità logistica o fornitore esterno indicato nel campo fornitore.


- **Codice profilo (buffer profile)**, 

  è il codice del profilo di buffer associato a questo articolo nell'unità logistica indicata nel campo magazzino.

- **Fattore lead time (lead time factor)**,

  serve per forzare un valore diverso rispetto a quello previsto dal profilo di buffer associato al record.

- **Fattore variabilità (variability factor)**,

  serve per forzare un valore diverso rispetto a quello previsto dal profilo di buffer associato al record.

- **Consumo medio giornaliero (ADU)**, 

  è la quantità mediamente consumata ogni giorno presso l'unità logistica del record (varia quindi per ogni unità logistica) e deve tenere conto di un periodo temporale sufficientemente lungo (più volte il tempo di approvvigionamento dell'articolo) sul quale eseguire la media.
  
  Questo valore influisce fortemente sul livello di scorta dell'articolo e va aggiornato periodicamente [(vedi procedura)](/docs/ddmrp/procedures/adu-update).

- **Lead time disaccoppiato (DLT)**,

  campo non editabile risultato del calcolo della relativa procedura.

  E' il tempo necessario per approvvigionare l'articolo considerando la presenza di altri buffer nella sua distinta o rete logistica.

  Nel caso di un centro di distribuzione è dato dalla somma del tempo di trasporto dall'unità logistica fornitrice e dall'eventuale tempo di produzione se l'unità fornitrice è la fabbrica e l'articolo non è un buffer in fabbrica (non c'è quindi una scorta).

- **Lead time cumulativo (CLT)**,

  campo non editabile risultato del calcolo della procedura calcolo DLT.

  E' il tempo necessario per approvvigionare l'articolo in fabbrica se nessuno degli articoli della sua distinta è un buffer, quindi è il tempo di produzione in caso di assenza totale di scorte per i suoi elementi di distinta base.

- **Ciclo di riordino desiderato (DOC)**,

  va espresso in giorni e rappresenta il numero di giorni che si desidera passino tra un ordine ed il successivo.

  Il suo valore viene preso in esame nel calcolo della zona verde di questo articolo.

- **Quantità minima ordinabile (MOQ)**,

  se esiste una quantità minima ordinabile imposta da fornitore o imposta internamente (sopratutto per minimizzare i setup di produzione) va indicata in questo campo.

  Il suo valore viene preso in esame nel calcolo della zona verde di questo articolo.

- **Zona verde**,

  campo non editabile risultato della procedura di aggiornamento zone.

  La zona verde determina la dimensione degli ordini (nessun ordine proposto dal DDMRP può avere una quantità inferiore alla zona verde) e quindi anche la relativa fequenza di riordino, pari al rapporto tra zona verde e ADU, nonchè il livello medio e massimo di scorta previsti.

- **Zona gialla**,

  campo non editabile risultato della procedura di aggiornamento zone.

  La zona gialla rappresenta il consumo medio nel periodo di tempo necessario a rifornire l'articolo (DLT). 
  

- **Zona rossa**,

  campo non editabile risultato della procedura di aggiornamento zone.

  La zona rossa determina il livello di scorta di sicurezza, la giacenza minima e massima previste.

  La sua dimensione cresce al crescere della variabilità associata al buffer (vedi profilo di buffer).

- **Soglia picco ordini (OST)**,

  viene utilizzato nel calcolo NFP (Net Flow Position).

  Quando la domanda totale in un giorno (all'interno dell'orizzonte dei picchi) supera tale valore viene considerata nel calcolo NFP.

  Si consiglia di utilizzare un valore compreso tra il 50% ed il 100% della zona rossa dell'articolo.

  Un valore troppo piccolo porterebbe a considerare picchi di domanda delle normali oscillazioni della stessa e di conseguenza verrebbero emessi ordini troppo spesso con una giacenza media più elevata del necessario.

  Un valore troppo grande porterebbe spesso a non riconoscere picchi di domanda (rilevanti ma non enormi), e di conseguenza la scorta sarebbe più bassa del necessario con conseguente profonda erosione della zona rossa o addirittura rottura di stock.

  **Orizzonte picchi ordini (OSH)**,

  orizzonte temporale a partire da oggi entro il quale verificare se ci sono picchi di domanda (calcolo NFP).

  Tale valore non deve essere inferiore al valore del DLT (lead time disaccoppiato) poichè è necessario accorgersi di eventuali picchi di domanda con sufficiente anticipo, quindi con un anticipo pari almeno al tempo necessario ad approvvigionare l'articolo.

- **Metodo di previsione consumo medio giornaliero**,

  selezionare uno tra i seguenti metodi che verrà applicato dalla relativa procedura di aggiornamento ADU (consumo medio giornaliero):

  - 0) nessun aggiornamento
  - 1) media aritmetica sul passato (vengono analizzati i consumi effettivi del passato e tutti i consumi hanno lo stesso peso)
  - 2) media pesata sul passato (i consumi recenti pesano più di quelli passati)
  - 3) media aritmetica sul futuro (viene analizzata la tabella delle previsioni di consumo giornaliero)
  - 4) media aritmetica del passato e del futuro (combinazione dei metodi 1 e 3)
  - 5) passato pesato e futuro aritmetico (combinazione dei metodi 2 e 3)


- **Giorni nel passato**,

  periodo di tempo nel passato in cui eseguire la media di consumo giornaliero

- **Giorni nel futuro**,

  periodo di tempo nel futuro in cui eseguire la previsione media di consumo giornaliero

- **Tipo scorta**

  definisce il tipo di scorta DDMRP

  - 1 = Replenished (scorta dinamica)
  - 2 = Replenished override (scorta statica)
  - 3 = Min-max (scorta min—max)



**Pulsante importa**

Consente di inserire i parametri DDMRP per una combinazione articolo-variante-magazzino dove il codice magazzino identifica una [**unità logistica**](/docs/ddmrp/master-data/facilities) come un centro di distribuzione o un hub o la fabbrica (in questo caso il campo è vuoto).

Prima di tutto scegliere un magazzino dalla relativa combo box, in questo modo verranno mostrati gli articoli per i quali non esiste già un record nei parametri DDMRP per tale magazzino (per la fabbrica scegliere uno qualunque di quelli ad essa associati poichè per il sistema tutti i magazzini di fabbrica equivalgono al magazzino con codice nullo).

Scegliere quindi un profilo di buffer da associare al nuovo record per poter abilitare il pulsante "inserisci".

A questo punto scegliere le righe da importare e premere il pulsante "inserisci" quindi aprire i nuovi record per completare l'inserimento dati.

**Pulante sostituzione parametri**

Funziona selezionando righe del form con lo stesso valore del campo Magazzino.

Se si deve agire su più magazzini farlo uno alla volta.

Una volta selezionate più righe, viene abilitato il pulsante e questo apre un form tramite il quale è possibile modificare uno o più parametri per i record selezionati.

La modifica avviene solo se il flag a fianco del parametro viene attivato.

**Pulsante cancella**

Permette di eliminare una riga e quindi di far si che l'articolo nel magazzino indicato non sia più considerato un buffer DDMRP.

I valori storici relativi all'articolo-magazzino verranno comunque conservati e saranno visionabili sia dallo storico parametri DDMRP sia dallo storico Net Flow Position.



