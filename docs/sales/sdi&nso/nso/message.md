---
title: Messaggi NSO
sidebar_position: 4
---

A fronte di ciascun Messaggio pervenuto, NSO provvede al rilascio di in Identificativo di 
transazione (IdT), e alla sua validazione.
Si rammenta che, per effetto dell’artico 3 del d.m. 7 dicembre 2018, le amministrazioni pubbliche 
non possono dar corso alla liquidazione e al successivo pagamento a fronte di Documenti contenuti 
in Messaggi che non siano stati validati da NSO.
Ogni Documento è unicamente identificato per mezzo della Tripletta di identificazione composta 
da tre elementi, che devono obbligatoriamente essere presenti: 
- l’identificativo del soggetto che lo ha emesso ( EndpointID ), che di norma coincide con il 
Mittente; 
- l’identificativo del Documento assegnato dall’emittente ( ID ); 
- la data del Documento ( IssueDate ).        

Un medesimo soggetto, pertanto, può emettere uno e un solo Documento con stesso identificativo 
e stessa data (unicità del Documento). 
La Tripletta di identificazione è utilizzata ogni volta che occorre fare riferimento ad un determinato 
Documento nelle Revoche e nelle Sostituzioni di Ordini e di Ordini preconcordati, nelle Risposte 
e negli Ordini di riscontro .
L’IdT assegnato a ciascun Messaggio da NSO è associato alla Tripletta di identificazione del 
Documento ivi contenuto.

Tutti i Messaggi (e, perciò, tutti i Documenti) validi sono ricercabili sulla Piattaforma dei crediti 
commerciali (PCC) sia tramite la Tripletta di identificazione che tramite l’IdT.

## Stati validazione NSO

In base all’esito dell’operazione richiesta, NSO può inviare al Trasmittente una o più delle 
Notifiche di sistema appresso descritte, che riportano l’Identificativo della transazione (IdT) a cui 
si riferiscono.
In entrambe le categorie di scenari (trasmissione e validazione), se il Messaggio non supera la 
validazione, NSO invia al Trasmittente la seguente Notifica di sistema: 
- Notifica di scarto: segnala al Trasmittente che il Messaggio non ha superato i controlli di 
validazione.
- Ricevuta di consegna, che informa il Trasmittente che NSO ha consegnato il Messaggio al 
Ricevente; 
- Mancata consegna, che segnala al Trasmittente la temporanea impossibilità di recapitare 
il Messaggio al Ricevente; 
- Attestazione di avvenuta trasmissione del messaggio con impossibilità di recapito, che 
segnala al Trasmittente l’impossibilità di recapitare il Messaggio al Ricevente per cause 
non imputabili a NSO.           

Nel caso in cui, dopo tre tentativi “automatici” di re-invio nell’arco di due ore, il recapito al 
Ricevente non sia andato a buon fine, NSO invia al Trasmittente una Notifica di Mancata 
consegna. Questa Notifica segnala la momentanea impossibilità di consegnare il Messaggio al 
Ricevente: si tratta, pertanto, di una comunicazione che ha valore temporaneo. Ne consegue che il 
comportamento corretto del Trasmittente sarà di attendere l’esito definitivo del processo di 
recapito. Ove tale processo abbia esito positivo il Trasmittente riceverà la Ricevuta di consegna; 
in caso contrario riceverà l’Attestazione di avvenuta trasmissione del messaggio con impossibilità 
di recapito; 
Dopo l’invio della Notifica di Mancata consegna, NSO effettua degli ulteriori tentativi di recapito 
del Messaggio.
Qualora il processo di recapito del Messaggio non vada comunque a buon fine, NSO invia al 
Trasmittente l’Attestazione di avvenuta trasmissione del messaggio con impossibilità di recapito. 
In questo caso, il Trasmittente è autorizzato a recapitare autonomamente il Messaggio al 
Ricevente. Nella sostanza si realizza una sorta di scenario di validazione diretta causato 
dell’impossibilità tecnica di recapitare il Messaggio per il tramite di NSO.        

I Clienti e i Fornitori accreditati su NSO (anche per il tramite di Intermediari), ossia quelli il cui 
indirizzo riportato nella Busta di trasmissione inizia per “NSO0:” (v. Paragrafo 2.5.3) hanno il 
vantaggio di non avere la necessità di verificare l’avvenuta validazione dei Messaggi, in quanto 
tutti i Messaggi trasmessi da NSO sono necessariamente stati validati prima di essere inoltrati al 
Ricevente.


