---
title: Riepiloghi per cedolini
sidebar_position: 2
---

La videata di Riepilogo per cedolini è composta da diverse sezioni: 
- movimenti: sono riepilogate tutte le ore relative al dipendente, che siano lavorative, ferie, festivi, straordinari, trasferte, congedi, etc
- expander Movimenti: riepilogo ore movimenti totali per codice
- Valori: tutte le spese per cui spetta il rimborso al dipendente
- expander Valori: riepilogo totali valori per codice
- Attività risorse: possibilità di consultare tutte le dichiarazioni attività inserite per il dipendente, senza necessità di aprire altre videate, per un confronto immediato con i risultati dell'elaborazione paghe. 
-  Totali Ferie - Permessi - ROL: calcolo totali ore di ferie, permessi e ROL per il dipendente 

In rosso verranno evidenziate le ore sottoposte all'attenzione dell'utente: ore mancanti, ore straordinarie, festivi, etc. 

Le ore e le spese (solo quelle con flag da rimborsare) prese in considerazione nell'elaborazione dei cedolini verranno prese dalle dichiarazioni attività, indipendentemente che siano state inserite direttamente in area PM > dichiarazione attività o che siano state generate automaticamente dagli interventi. Per cui sarà fondamentale che ogni dichiarazione attività abbia la categoria attività inserita.

Nel caso la risorsa svolga attività nelle giornate festive come sabato o domenica non previste nel turno configurato per la risorsa, le ore verranno marcate in automatico con codice paga "Straordinario festivo". 
Nel caso la dichiarazione attività abbia flag "smartworking" attivo ed esiste un codice paga specifico, il codice esistente per l'attività verrà sostituito con quello previsto per lo smartworking. 
Tutte le ore che superano il massimo ore previsto per il turno della risorsa, verranno inserite separatamente con codice specifico per gli Straordinari se configurato. 
Se compilato il calendario dei giorni festivi, in automatico nel cedolino per i giorni specificati verrà inserito il codice paga per le festività. 

Priorità con cui vengono considerati i codici paghe: 
1.	Se si tratta di straordinari, ferie, festivi, trasferte, smartworking, etc verranno cercati codici specifici con il relativo flag abilitato. 
2.	Se non presenti codici specifici, verrà preso il codice paga configurato per la categoria attività inserita nella dichiarazione attività
3.	Se non presente il codice nella categoria attività, verrà preso il primo codice con flag "Ordinario" abilitato
5.	Se non presente il codice con flag ordinario abilitato, verrà preso il primo codice nella tabella Codici paga
6.	Se non presente alcun codice, verrà dato un messaggio bloccante di avviso. 



Le trasferte hanno una gestione specifica: 

**INTERVENTI**

- dagli interventi: nelle spese sostenute sono state dichiarate delle ore di viaggio. Se configurato nella tabella [Tipi Spese](/docs/configurations/tables/general-settings/expenses-types), allo stato approvato dell’intervento verranno generate le dichiarazioni di attività per le ore viaggio ed i servizi. Il codice paga associato alla categoria di attività delle ore viaggio, dovrà avere abilitato il flag "Rimborso viaggio"
-	In anagrafica risorsa va configurata la trasferta indicando dopo quante ore di viaggio oltre alle ordinarie scatta la trasferta

Se ad es. in anagrafica risorsa si imposta come limite "2" ore di viaggio
 scatterà il calcolo trasfera solo al superamento di 2 ore oltre alle ore ordinarie:

 8 ore ordinarie

 3 ore di viaggio

 --> nel cedolino paga nei movimenti ci saranno 2 righe: una riga con 8 ore di servizio + una riga con quantità 1 per la trasferta
 
 6 ore ordinarie

 3 ore di viaggio

--> nel cedolino paga nei movimenti ci sarà una unica riga per 8 ore ordinarie, in quanto il minimo oltre alle 8 ore sono 2 di viaggio (in questo caso invece avremmo 9 ore, quindi 1 sola ora oltre alle 8 ordinarie)

La stessa cosa accadrà se la dichiarazione attività è stata inserita manualmente separatamente per le ore ordinarie e le ore di viaggio con apposita causale attività. 

**DICHIARAZIONE ATTIVITA'**

Se le ore viaggio invece vengono dichiarate nelle spese sostenute con un importo orario, se il codice paga associato alla spesa sostenuta ha abilitato il flag "Rimborso viaggio", al superamento delle 8 ore (quindi indipendentemente dal minimo impostato in anagrafica risorsa), verrà inserita una riga separata per la trasferta, sempre con quantità 1 indipendentemente dalle ore dichiarate. 
Se il codice paga associato alla spesa sostenuta ha disabilitato il flag "Rimborso viaggio", verranno inserite 2 righe separate di ore ordinarie ed ore di viaggio effettivamente dichiarate. 

