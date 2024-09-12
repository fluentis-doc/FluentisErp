---
title: Ricerca Offerte
sidebar_position: 2
---

La form si apre tramite il percorso **Vendite > Offerte > Ricerca offerte**.
Per la spiegazione delle funzionalità comuni ai documenti di vendita consultare la sezione [Vendite](/docs/sales/sales-intro).

Il primo pulsante della barra degli strumenti specifico di questa maschera è **Nuova versione**: permette la creazione di una nuova versione dell'offerta selezionata; questa funzionalità permette di mantenere lo storico delle offerte precedenti.         

Il secondo bottone è **Conversione**: permette di trasformare un'offerta di vendita in un ordine di vendita effettivo. Affinché il processo avvenga correttamente, è essenziale configurare il Tipo di ordine desiderato nella tabella dei [Tipi offerta](/docs/configurations/tables/sales/sales-offer-type). Inoltre, affinché l'offerta possa essere convertita con successo, è necessario che abbia una Data conferma in testata, altrimenti il sistema avviserà l'utente tramite un messaggio pop-up della necessità di confermare l'offerta prima di procedere. Una volta che tutti i dati richiesti sono stati inseriti, avviando la procedura uscirà un pop-up con i seguenti campi:     
- **Crea/Aggiorna progetto**: con questo flag indichiamo al sistema che oltre alla creazione dell'ordine deve procedere anche con la creazione o l'aggiornamento del progetto. Se il progetto deve essere creato, è necessario flaggare il comando *Crea Nuovo progetto vuoto*, *Crea Nuovo progetto da Offerta* oppure **Crea Nuovo progetto da Offerta e Template progetto**; in tutti i casi sarà necessario inserire il **[Tipo progetto](/docs/configurations/tables/project-management/project-type)** da creare nell'apposito campo, nell'ultimo caso verrà richiesto l'inserimento anche del  progetto **Template**. Se il progetto esiste già e deve essere aggiornato con i dati inseriti nell'offerta, invece, sarà necessario compilare il campo **Progetto**  con il progetto da aggiornare.     
- **Riporta Materiali/Risorse da righe Offerta come righe Ordine**: con questi flag vengono inserite nell'ordine delle righe articolo con le risorse e i materiali dell'offerta, se gerarchica.

Una volta confermato il pop-up, il sistema genererà quindi un nuovo Ordine cliente utilizzando i dati dell'offerta. Questo ordine può essere visualizzato e modificato nella sezione [Ricerca ordini clienti](/docs/sales/sales-orders/search-sales-orders). Inoltre, l'utente verrà informato tramite un messaggio pop-up riguardante il successo della conversione, il numero dell'offerta convertita e la versione, insieme a un messaggio contenente il numero dell'ordine cliente generato dalla conversione.     
Nella Conversione da Offerta a Ordine, gli sconti finali articolo inseriti nell’Offerta vengono riportati nelle righe articolo dell’Ordine.
