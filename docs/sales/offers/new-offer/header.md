---
title: Testata Offerta
sidebar_position: 2
---

Dopo aver inserito i dati nella sezione superiore, è possibile procedere con i dati di testata:      

- **Spedizione**: viene proposta la modalità di [Spedizione](/docs/configurations/tables/general-settings/shipments) dall'anagrafica cliente.      

- **Listino di vendita**: viene proposto il listino di default presente in anagrafica cliente, con il relativo Tipo scaglione previsto per il cliente.     

- **Annotazioni clienti**: in questa sezione è possibile inserire i Riferimenti del cliente, eventuali Note iniziali/finali; il campo *Annotazioni cliente* riporta le Note inserite nei [Dati anagrafici del cliente](/docs/erp-home/registers/contacts/create-new-contact/general).     

- **Data conferma offerta**: indica la data nella quale l'offerta è stata confermata e quindi potrà essere convertita in ordine.     

- **Data prevista consegna**: è la data nella quale è previsto che la merce verrà consegnata; questo dato viene riportato nell'ordine creato da offerta.     

- **Data chiusura**: indica la data in cui l'offerta è stata chiusa.

- **Data annullamento**: la data nella quale l'Offerta verrà considerata nulla se non è diventata Ordine.

- **Validità Offerta**: data limite di validità dell'offerta; è un campo informativo.

Nella barra degli strumenti sono presenti i seguenti bottoni:    

> **Nuova versione**: genera una nuova versione dell'offerta, incrementando il campo *Versione*. Le versioni successive di un’Offerta ereditano i Documenti allegati.       

> **Sostituisci data prevista consegna nelle righe**: sostituisce in tutte le righe articolo la Data prevista consegna inserita in testata.       

> **Conversione**:  permette di trasformare un'offerta di vendita in un ordine di vendita effettivo. Affinché il processo avvenga correttamente, è essenziale configurare il Tipo di ordine desiderato nella tabella dei [Tipi offerta](/docs/configurations/tables/sales/sales-offer-type). Inoltre, affinché l'offerta possa essere convertita con successo, è necessario che abbia una Data conferma in testata, altrimenti il sistema avviserà l'utente tramite un messaggio pop-up della necessità di confermare l'offerta prima di procedere. Una volta che tutti i dati richiesti sono stati inseriti, avviando la procedura uscirà un pop-up con i seguenti campi:     
> - se almeno alcune righe dell'offerta sono già state convertite in ordine, verrà chiesto all'utente se vuole creare un nuovo ordine utilizzando tutte le righe offerta oppure solo le righe non ancora referenziate.             
> - **Crea/Aggiorna progetto**: con questo flag indichiamo al sistema che oltre alla creazione dell'ordine deve procedere anche con la creazione o l'aggiornamento del progetto. Se il progetto deve essere creato, è necessario flaggare il comando *Crea Nuovo progetto vuoto*, *Crea Nuovo progetto da Offerta* oppure **Crea Nuovo progetto da Offerta e Template progetto**; in tutti i casi sarà necessario inserire il **[Tipo progetto](/docs/configurations/tables/project-management/project-type)** da creare nell'apposito campo, nell'ultimo caso verrà richiesto l'inserimento anche del  progetto **Template**. Se il progetto esiste già e deve essere aggiornato con i dati inseriti nell'offerta, invece, sarà necessario compilare il campo **Progetto**  con il progetto da aggiornare.     
> - **Riporta Materiali/Risorse da righe Offerta come righe Ordine**: con questi flag vengono inserite nell'ordine delle righe articolo con le risorse e i materiali dell'offerta, se gerarchica.              
Una volta confermato il pop-up, il sistema genererà quindi un nuovo Ordine cliente utilizzando i dati dell'offerta. Questo ordine può essere visualizzato e modificato nella sezione [Ricerca ordini clienti](/docs/sales/sales-orders/search-sales-orders). Inoltre, l'utente verrà informato tramite un messaggio pop-up riguardante il successo della conversione, il numero dell'offerta convertita e la versione, insieme a un messaggio contenente il numero dell'ordine cliente generato dalla conversione.        
Se nell'Offerta vengono modificati i dati proposti dall'anagrafica, essi vengono riportati nell'Ordine generato dalla conversione: Annotazioni cliente, Spedizione, Pagamenti, Sconti, Agenti, Destinazioni, Vettori.      

Le tab sottostanti vengono popolate con i campi presi dall'anagrafica cliente/contatto, modificabili:

- Pagamenti
- Sconti
- Destinatari
- Vettori
- Agenti
- Extra Data
- Informazioni email
