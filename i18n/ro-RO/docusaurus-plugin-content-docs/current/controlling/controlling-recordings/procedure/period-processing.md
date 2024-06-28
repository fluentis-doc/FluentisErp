---
title: Elaborazione periodi 
sidebar position: 3
--- 
![](/img/it-it/controlling/PROCESSING.png)

L'elaborazione periodi va ad effettuare tre elaborazioni distinte: 

**ELABORAZIONE MOVIMENTI FISICI** 
in questa elaborazione vengono letti i movimenti fisici. 
Una volta effettuata l'elaborazione nello **STORICO FLUSSO FISICO** (CONTROLLING --> REGISTRAZIONI --> STORICO) andrò a trovare la base di tutti i movimenti fisici dettagliati che ci serviranno per applicare i DRIVER. 

**ELABORAZIONE STORICO AMMORTAMENTI** 
in questa elaborazione cambio i parametri, dovendo sempre specificare sia su quale **AREA** andremo a generare i dati, sia lìanno di riferimento. la necessità di cambiare i parametri deriva dal dover specificare al sistema su quale periodo elaborare gli **AMMORTAMENTI PER IL CONTROLLING**
una volta effettuata l'elaborazione nello **STORICO AMMORTAMENTI** troveremo per singoli cespiti la percentuale.  Oltre ad aver creato uno **STORICO**(CONTROLLING --> REGISTRAZIONI --> STORICO), viene creata nache una prima nota degli ammortamenti. 

Ogni che lanciamo questa elaborazione viene cancellato lo storico e viene ricreato per l'anno che abbiamo preso in considerazione. 

**ELABORAZIONE DATI CONTABILI** 
in questa elaborazione vengono letti i **DATI CONTABILI** 
Vado sempre a scegliere l'**AREA** e, se stiamo elaborando un **CONSUNTIVO** devo inserire in maniera OBBLIGATORIA la chiusura INFRANNUALE (quando creo la CHIUSURA INFRANNUALE  vado a memorizzare i conti non utilizzati per il controlling in una tabella. Posso dire quindi se un conto lo voglio o meno utilizzare all'interno del controlling)
COMPLEATO L'INSERIMENTO VADO A LANCIARE L'ELABORAZIONE CHIUSURA INFRANNUALE. 
Anche in questo caso viene creato uno **STORICO REGISTRAZIONI GESTIONALI** (CONTROLLING --> REGISTRAZIONI --> STORICO)

Da qui, terminata l'elaborazione iniziano i CICLI presenti nei COST DRIVER partendo dalle **ATTRIBUZIONI** che considera i dati SORGENTI per arrivare alle **REVERSIONI** ovvero tutte le operazioni **CEDUTE** o **RICEVUTE**


