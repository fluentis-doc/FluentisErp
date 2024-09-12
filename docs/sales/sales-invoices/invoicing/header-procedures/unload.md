---
title: Scarico automatico
sidebar_position: 3
---

Un'altra procedura presente in testata è lo scarico automatico da magazzino. Il pulsante si abilita se il documento è Stampato e se la fattura non è collegata ad un DDT già scaricato.      
Ricordiamo che se nei [Parametri fattura](/docs/configurations/parameters/sales/sales-invoices-parameters) è abilitato lo scarico automatico, questa procedura verrà avviata in automatico una volta Stampato il documento.      
Una volta avviata la procedura, Fluentis controlla la presenza di magazzino e causale nelle righe fattura e l'eventuale presenza di lotti e serial number se richiesti; nel caso la procedura non vada a buon fine viene avvisato l'utente con un errore.      
Se la procedura va a buon fine, viene creata la [Registrazione di magazzino](/docs/logistics/warehouse/stock-records/record) che movimenta gli articoli del documento e viene inserito il flag **Scaricato** nella testata.      
