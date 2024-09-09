---
title: Scarico automatico
sidebar_position: 2
---

L'altra procedura presente in testata DDT è lo scarico automatico da magazzino. Il pulsante si abilita se il documento è Stampato.      
Ricordiamo che se nei [Parametri DDT](/docs/configurations/parameters/sales/dn-parameters) è abilitato lo scarico automatico, questa procedura verrà avviata in automatico una volta Stampato il documento.      
Una volta avviata la procedura, Fluentis controlla la presenza di magazzino e causale nelle righe DDT e l'eventuale presenza di lotti e serial number se richiesti; nel caso la procedura non vada a buon fine viene avvisato l'utente con un errore.      
Se la procedura va a buon fine, viene creata la [Registrazione di magazzino](/docs/logistics/warehouse/stock-records/record) che movimenta gli articoli del documento e viene inserito il flag **Scaricato** nella testata DDT.      
