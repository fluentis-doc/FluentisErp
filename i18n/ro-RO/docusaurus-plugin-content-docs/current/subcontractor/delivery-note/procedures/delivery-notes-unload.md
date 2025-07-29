---
title: Scarico DDT di consegna
sidebar_position: 1
---

La procedura si apre tramite il percorso **Conto Lavoro > DDT di consegna > Procedure  > Scarico DDT** e permette di scaricare dal magazzino i DDT di consegna di conto lavoro già stampate e non ancora scaricate.

## Filtro

In questo tab è possibile filtrare i DDT di consegna in base al terzista a cui sono intestate, in base alla data del DDT (Da…a…), in base al numero di DDT, ecc

*Pulsanti specifici*:
> **Ricerca**: pulsante per applicare i filtri di ricerca all'intero database degli DDT di Consegna inseriti, controllati e non ancora registrati;  
> **Scarico**: richiama la procedura che esegue la registrazione della Bolla di Consegna e quindi i movimenti di magazzino ad essa correlati.  

*Campi specifici*: 

Nella zona inferiore della form compare un campo data, chiamato **Data registrazione magazzino**, impostato di default sulla data corrente. L'utente, modificando questa data, può decidere che la registrazione di magazzino venga effettuata in una data diversa dalla data corrente.

Una volta selezionati i DDT di consegna che si vogliono registrare, è possibile utilizzare il pulsante **Scarico** posto sulla ribbon bar ed eseguire i movimenti di magazzino: contestualmente a questa operazione l'applicazione esegue lo scarico dal magazzino di prelievo dei materiali da consegnare al terzista e il carico degli stessi materiali sul magazzino del terzista.


## Riepilogo

In questo tab è possibile eseguire il rollback dell'operazione di registrazione del DDT di consegna, ripristinando quindi la situazione antecedente all'operazione stessa. Nella testata di questo tab sono presenti alcuni filtri di ricerca, che consentono all'utente di selezionare le operazioni filtrando per numero scarico (Da…a…), data scarico DDT (Da…a…), numero DDT (Da…a…).

I risultati sono visibili all'interno della griglia posta nella parte superiore della finestra, denominata **Scarico DDT**.  
Tenendo selezionata una riga di questa griglia, nella griglia posta nella parte inferiore della form si possono visualizzare i DDT di consegna scaricati (nell'apposito tab *DDT*), nonché le relative registrazioni di magazzino che sono state automaticamente generate dallo scarico del DDT selezionato nel tab *DDT* (nell'apposito tab *Registrazione*).

*Pulsanti specifici*:  
> **Ricerca**: pulsante per applicare i filtri di ricerca all'intero database delle DDT di consegna inserite, stampate e già scaricate.  
> **Cancella**: richiama la procedura che esegue il rollback dell'intera operazione di scarico del DDT selezionato nella griglia *Scarico DDT*; quindi se con la stessa operazione di registrazione sono stati scaricati più DDT, tutti questi DDT saranno riportati nello stato di *non scaricate*.  
> **Ripristina DDT**: richiama la procedura che esegue il rollback della registrazione dei DDT selezionati nella griglia inferiore, nel tab *DDT*.  
> **Ripristina**: richiama la procedura che esegue la semplice cancellazione delle registrazioni di magazzino selezionate nel tab *Registrazione*, senza riportare il DDT relativo nello stato di *non scaricata*. Si consiglia di non usare mai questo tasto se non in situazioni di particolare necessità.  