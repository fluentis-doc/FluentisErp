---
title: Parametri DDMRP
sidebar_position: 5
---

Tramite questo form si definiscono i parametri necessari per la gestione di un articolo buffer cioè gestito a logica DDMRP.

Per ogni articolo buffer ci deve essere almeno un record in questa tabella, uno per ogni centro di distribuzione (vedi **struttura logistica**) in cui l'articolo è gestito a scorta DDMRP, ed eventualmente uno per la fabbrica (campo magazzino vuoto) se l'articolo è gestito a scorta DDMRP anche in fabbrica.

I parametri DDMRP da definire sono i seguenti:

- **Magazzino**, 

  è il codice magazzino associato all'unità logistica del record cioè al centro di distribuzione (o hub intermedio) e viene lasciato vuoto se il record si riferisce alla fabbrica.

- **Codice buffer (buffer profile)**, 

  è il codice del profilo di buffer di questo record

- **Fattore lead time (lead time factor)**,

  serve per forzare un valore diverso rispetto a quello previsto dal profilo di buffer associato al record

- **Fattore variabilità (variability factor)**,

  serve per forzare un valore diverso rispetto a quello previsto dal profilo di buffer associato al record

- **Consumo medio giornaliero (ADU)**, 

  è la quantità mediamente consumata ogni giorno presso l'unità logistica del record (varia quindi per ogni unità logistica) e deve tenere conto di un periodo temporale sufficientemente lungo (più volte il tempo di approvvigionamento dell'articolo).
  Questo valore influisce fortemente sul livello di scorta dell'articolo e va aggiornato periodicamente [(vedi procedura)](/docs/ddmrp/procedures/ADU-update).

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
  La zona verde determina la dimensione degli ordini (nessun ordine può essere minore della zona verde) e quindi anche la relativa fequenza di riordino, nonchè il livello medio e massimo di scorta previsti.

- **Zona gialla**,

  campo non editabile risultato della procedura di aggiornamento zone.
  La zona gialla influisce sul meccanismo di emissione degli ordini determinando se un ordine va emesso e la relativa dimensione.

- **Zona rossa**,

  campo non editabile risultato della procedura di aggiornamento zone.
  La zona rossa determina il livello di scorta di sicurezza, la giacenza minima e media previste.
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

