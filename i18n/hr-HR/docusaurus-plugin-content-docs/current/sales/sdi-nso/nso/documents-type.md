---
title: Tipi documento
sidebar_position: 2
---

## Ordine

L’ Ordine è il Documento rappresentativo dell’ordine di acquisto di beni e servizi emesso dal 
Cliente (Mittente) e indirizzato al Fornitore (Destinatario). Un Ordine è composto da una o più 
linee d’ ordine, in cui sono indicati il bene o il servizio che si intende acquistare, la quantità e il 
prezzo.        
**L’Ordine è predisposto nel formato descritto dalla specifica PEPPOL Order transaction 3.0.**
Un Ordine può: 
- determinare, indipendentemente da altri Ordini precedentemente emessi, i beni e/o i servizi 
che il Cliente intende acquistare e le relative istruzioni per eseguire la prestazione (Ordine 
iniziale). Un Ordine iniziale non contiene riferimenti ad altri Ordini; 
- determinare, indipendentemente da altri Ordini precedentemente emessi, i beni e/o i servizi 
che il Cliente intende acquistare e le relative istruzioni per eseguire la fornitura e, tuttavia, 
essere genericamente relazionato a un altro Documento (Ordine iniziale collegato). Un 
Ordine iniziale collegato contiene il riferimento al Documento che a cui è collegato e 
l’indicazione che si tratta di un mero “collegamento;
- revocare un Ordine precedentemente emesso (Ordine di revoca). L’Ordine di revoca è un 
Ordine che contiene l’indicazione che si tratta di una “Revoca” e il riferimento all’Ordine 
che si intende revocare; 
- sostituire un Ordine precedentemente emesso (Ordine sostitutivo). La Modifica di ordine 
è un nuovo Ordine completo di tutte le linee di ordine, che contiene l’indicazione che si 
tratta di una “Modifica” e il riferimento all’Ordine che si intende modificare. 
Le Sostituzioni e le Revoche, rispettivamente, rimpiazzano e annullano sia l’Ordine ivi indicato 
sia tutte le altre Sostituzioni e Revoche, già trasmesse, riferite al relativo Ordine iniziale. 
L’Ordine iniziale collegato può essere utilizzato esclusivamente per tenere memoria che il nuovo 
processo che si intende avviare è collegato ad un processo precedente e non deve mai essere usato 
al posto degli altri strumenti (Ordine di revoca, Ordine sostitutivo e Ordine di riscontro) 
appositamente realizzati per revocare, sostituire (o integrare), confermare o rifiutare un altro 
Documento.

## Risposta

La Risposta è il Documento con cui il Fornitore (Mittente) accetta, declina o propone dei 
cambiamenti a un Ordine ricevuto dal Cliente (Destinatario). 
**La Risposta è predisposta nel formato descritto dalla specifica PEPPOL Order Response transaction 3.0.**     
Con la Risposta il Fornitore può comunicare al Cliente che: 
- ha ricevuto l’Ordine (Risposta di ricezione), ma non lo ha ancora processato. Si tratta, 
evidentemente, di una comunicazione interlocutoria che non contiene alcuna indicazione 
in merito a “se e come” il Fornitore intende dar corso all’Ordine. La Risposta di ricezione 
è una Risposta priva di linee d’ordine, che contiene l’indicazione che si tratta di una 
“ricezione” (“AB”) e il riferimento all’Ordine che si comunica di aver ricevuto 
- intende dar corso all’Ordine ricevuto (Risposta di accettazione). La Risposta di 
accettazione è una Risposta priva di linee d’ordine, che contiene l’indicazione che si 
tratta di una “Accettazione” e il riferimento all’Ordine che si intende accettare; 
- declina l’Ordine ricevuto (Risposta di diniego ). La Risposta di diniego è una Risposta 
priva di linee d’ordine, che contiene l’indicazione che si tratta di un “Rifiuto” e il 
riferimento all’Ordine che si intende rifiutare; 
- intende dar corso all’Ordine ricevuto apportando alcune modifiche (Risposta con 
modifiche). La Risposta con modifiche3, che contiene l’indicazione che si tratta di una 
“Modifica” e il riferimento all’Ordine che si intende modificare, deve contenere tutte le 
linee d’ordine, sia quelle che si intende mantenere sia quelle che si intende variare, in 
quanto integra l’Ordine precedentemente trasmesso a cui fa riferimento. 
Le Risposte con modifiche e le Risposte di diniego, rispettivamente, integrano e annullano sia 
l’Ordine ivi indicato sia tutte le altre Modifiche e Revoche, già trasmesse, riferite al medesimo 
Ordine iniziale.       

La Risposta a un Ordine revocato non ha effetti.

## Ordine di Riscontro

L’ Ordine di riscontro è il Documento con cui il Cliente (Mittente) conferma, declina o sostituisce 
(Ordine di riscontro sostitutivo) un Ordine pre-concordato oppure una Risposta inviati dal 
Fornitore (Destinatario). 
**L’Ordine di riscontro, pertanto, altro non è che un Ordine che fa riferimento a un Documento inviato dal Fornitore. Conseguentemente, è predisposto nel medesimo formato, che è descritto dalla specifica PEPPOL Order transaction 3.0.**
Con l’Ordine di riscontro il Cliente può comunicare al Fornitore: 
- che conferma un Ordine pre-concordato o una Risposta inviata dal Fornitore ( Ordine di 
riscontro per conferma ). L’Ordine di riscontro per conferma è un Ordine che contiene 
l’indicazione che si tratta di una “Conferma” e il riferimento all’Ordine pre-concordato o 
alla Risposta che si intende confermare; 
- che declina un Ordine pre-concordato o una Risposta inviata dal Fornitore ( Ordine di 
riscontro per diniego ). L’Ordine di riscontro per diniego è un Ordine che contiene 
l’indicazione che si tratta di un “Rifiuto” e il riferimento all’Ordine o alle Risposta che si 
intende rifiutare; 
- che intende sostituire un Ordine pre-concordato o una Risposta inviata dal Fornitore ( 
Ordine di riscontro sostitutivo ). L’Ordine di riscontro sostitutivo è un nuovo Ordine, 
completo di tutte le linee d’ordine, che contiene l’indicazione che si tratta di una 
“Sostituzione” e il riferimento all’Ordine o alla Risposta che si intende sostituire.        

Gli Ordini di riscontro sostitutivi e gli Ordini di riscontro per diniego, rispettivamente, rimpiazzano 
e annullano sia l’Ordine pre-concordato o la Risposta ivi indicati sia tutte le altre Sostituzioni e 
Revoche, già trasmesse, riferite al relativo Ordine iniziale.      
L’Ordine di riscontro riferito a un Ordine pre-concordato revocato non ha effetti.

## Ordine PRE-Concordato

L’ Ordine pre - concordato è il Documento rappresentativo dell’ordine di acquisto di beni e servizi, 
emesso dal Fornitore (Mittente) invece che dal Cliente (Destinatario), in accordo con quest’ultimo. 
Un Ordine pre-concordato è composto da una o più linee d’ordine , in cui sono indicati il bene o il 
servizio oggetto dell’acquisto, la quantità e il prezzo. 
**L’Ordine pre-concordato è predisposto nel formato descritto dalla specifica PEPPOL Order Agreement transaction 3.0.**
Un Ordine pre-concordato può: 
- determinare, indipendentemente da altri Ordini pre-concordati precedentemente emessi, i 
beni e/o i servizi che il Cliente intende acquistare e le relative istruzioni per eseguire la 
fornitura (Ordine pre-concordato iniziale). Un Ordine pre-concordato iniziale non 
contiene riferimenti ad altri Ordini pre-concordati
- determinare, indipendentemente da altri Ordini pre-concordati precedentemente emessi, i 
beni e/o i servizi che il Cliente intende acquistare e le relative istruzioni per eseguire la 
fornitura e, tuttavia, essere genericamente relazionato a un altro Documento (Ordine preconcordato iniziale collegato). Un Ordine pre-concordato iniziale collegato contiene il 
riferimento al Documento che a cui è collegato e l’indicazione che si tratta di un mero 
“collegamento”. 
- revocare un Ordine pre-concordato precedentemente emesso (Ordine pre-concordato di 
revoca). L’Ordine pre-concordato di revoca è un Ordine pre-concordato che contiene 
l’indicazione che si tratta di una “revoca” (“Cancelled”) e il riferimento all’Ordine preconcordato che si intende revocare, inoltre ha una sola linea d’ordine priva di contenuto.
- sostituire un Ordine pre-concordato precedentemente emesso (Ordine pre-concordato 
sostitutivo). La Modifica di ordine pre-concordato è un nuovo Ordine pre-concordato, 
completo di tutte le linee d’ordine, che contiene l’indicazione che si tratta di una 
“sostituzione” (“Revised”) e il riferimento all’Ordine pre-concordato che si intende 
modificare.        

Le Sostituzioni e le Revoche, rispettivamente, rimpiazzano e annullano sia l’Ordine preconcordato ivi indicato sia tutte le altre Sostituzioni e Revoche, già trasmesse, riferite al relativo 
Ordine pre-concordato iniziale.        
L’Ordine pre-concordato iniziale collegato può essere utilizzato esclusivamente per tenere 
memoria che il nuovo processo che si intende avviare è collegato ad un processo precedente e non 
deve mai essere usato al posto degli altri strumenti (Ordine pre-concordato di revoca, Ordine preconcordato sostitutivo e Risposta) appositamente realizzati per revocare, sostituire (o integrare), 
accettare o rifiutare un altro Documento.

## RELAZIONE CON LO STANDARD PEPPOL

Con riferimento all’Ordinazione di acquisto di beni e servizi, lo standard PEPPOL BIS versione 
3.0 definisce tre tipi di documento:        
− Order transaction 3.0;       
− Order Response transaction 3.0;     
− Order Agreement transaction 3.0;       
e tre processi (denominati profili):      
− BIS Order only 3.0;     
− BIS Ordering 3.0;      
− BIS Order Agreement 3.0.