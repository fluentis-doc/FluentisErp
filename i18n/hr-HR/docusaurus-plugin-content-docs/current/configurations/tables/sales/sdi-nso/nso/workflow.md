---
title: Tipovi narudžbi i promjena statusa  
sidebar_position: 6
---

Lo stato **Ricevuto** è lo stato in cui si trova un ordine che è stato ricevuto da Fluentis senza errori ma 
non è stato ancora inserito come ordine cliente.
L’ordine può essere ricevuto con lo stato “In errore”, ossia l’ordine è stato ricevuto e inserito ma 
presenta dei dati errati, quali il prezzo di una riga a 0, o mancanti, quali il codice NSO del cliente. Dovrà 
quindi essere corretto dall’utente prima di poter effettuare ulteriori passaggi di stato.
Dallo stato Ricevuto si possono eseguire 2 diversi comandi:        
- **Importa ordine** porta l’ordine allo stato *Inserito*, ossia l’ordine viene generato nei documenti di 
Fluentis;
- **Annulla documento**, che fa in modo che l’ordine non venga creato in Fluentis e passo allo stato 
*Annullata*, in quanto rifiutato dal fornitore.

## Ordinazione semplice

Nel processo di ordinazioNe semplice, dove è solo il cliente ad inviare gli ordini e il fornitore non può 
rispondere nel flusso ma lo deve fare tramite altri canali alternativi (email, fax, ..) dallo stato “Inserito” 
si può passare ai seguenti stati:
- *Attendere annullamento dal cliente*, ossia l’ordine viene messo in uno stato di sospensione in 
attesa di un annullamento da parte del cliente che probabilmente ha comunicato 
l’annullamento in precedenza mediante altri canali (mail, telefono, ecc…)
- *Attendere sostituzione dal cliente*, ossia l’ordine viene messo in uno stato di sospensione in 
attesa della ricezione di un ordine sostitutivo da parte del cliente che probabilmente ha 
comunicato la sostituzione in precedenza mediante altri canali (mail, telefono, ecc…)        

Il cliente può effettuare una richiesta di sostituzione dell’ordine.
In questo caso l’ordine originale passerà nello stato “In richiesta di sostituzione”. Da qui si potranno 
selezionare 2 cambi di stato:
- *Riporta in inserito* nel caso in cui non si accetti la sostituzione e si voglia riportare l’ordine 
nello stato “Inserito” in modo tale da poterlo evadere con i valori originali;
- *Sostituzione da cliente* nel caso in cui si voglia accettare la sostituzione dell’ordine.       

Al momento della ricezione dell’ordine sostitutivo verrà generata un’ulteriore riga con stato *In attesa di 
accettazione*, la quale fa riferimento al nuovo ordine.
Nel caso di accettazione della sostituzione del nuovo ordine all’ordine iniziale, la riga *In attesa di 
accettazione*, passerà in stato *Inserito*, mentre la riga dell’ordine originale *In richiesta di 
sostituzione* passerà allo stato *Sostituito da cliente*.

## Ordinazione completa

Nel processo di ordinazione completa, dove il cliente e il fornitore si possono inviare gli ordini tramite 
NSO, dallo stato “Inserito” si può passare ai seguenti stati:
- *Spedizione risposta di conferma* effettua l’invio di una notifica al cliente che conferma 
l’accettazione dell’ordine da parte del fornitore (IBSA). L’ordine passa nello stato “Confermato da fornitore” e verrà creata un’ulteriore riga per il file di 
risposta della conferma.
- *Spedizione risposta di diniego* invia una notifica di non accettazione dell’ordine al cliente, con 
l’ordine che passa nello stato *Annullato da Fornitore*.
- *Creazione risposta di modifica* permette di effettuare la modifica del documento per quanto 
riguarda codice articolo, quantità e prezzo delle singole righe e di inviarlo al cliente, che potrà a 
sua volta accettare o meno tale ordine modificato. Verrà mostrato un messaggio d’avviso di chiusura dell’ordine originale e di creazione di un nuovo ordine, sul quale si andranno ad operare le modifiche.
Una volta effettuate le modifiche sull’ordine, questo potrà essere inviato mediante il cambio stato *In 
risposta di modifica*. Il nuovo ordine di modifica passerà allo stato “In attesa di riscontro”. Verrà inoltre creata una nuova riga di notifica.
- *Spedizione risposta di ricevimento* invece invia una semplice notifica di ricevimento 
dell’ordine al cliente l’ordine passa nello stato *Ricevuto da fornitore*.  

## Ordinazione pre-concordata

Nell’ordinazione pre-concordata il flusso ha inizio dal fornitore che, come concordato in precedenza con 
il cliente tramite altri canali (email, fax, …), emette l’ordine NSO.         

Lo stato iniziale assunto da un ordine pre-concordato è lo stato *Creato Pre-Concordato*, dal quale si 
può effettuare il passaggio di stato *Controllo Pre-Concordato*, che porta l’ordine allo stato 
*Controllato*. Dallo stato *Controllato* è possibile effettuare 2 passaggi di stato:       
- *Riporta in stato Pre-Concordato* riporta l’ordine allo stato *Creato Pre-Concordato*       
- *Generazione Pre-Concordato* effettua la generazione del file dell’ordine pre-concordato 
passando il suo stato a *Generata*, che può a sua volta subire 2 cambi di stato:       
> - *Spedizione Pre-Concordato*, che porta l’ordine in stato *Da spedire*, ossia l’ordine
viene inviato al cliente è pronto per essere fisicamente evaso;
> - *Riporta in controllato* che riporta l’ordine in stato *Controllato*.