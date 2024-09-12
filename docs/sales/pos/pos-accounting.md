---
title: Contabilizzazione POS
sidebar_position: 4
---

La procedura si apre tramite il percorso **Vendite > POS > Contabilizzazione > Contabilizzazione POS**. 

Un POS, per essere contabilizzato, deve soddisfare una serie di condizioni: nella sua testata deve aver impostato il flag *Stampata* e il tipo POS deve contenere la causale generale per la contabilizzazione.

### Contabilizzazione

La form presenta nella parte superiore i filtri di ricerca per individuare e visualizzare, nella griglia, la lista dei POS da contabilizzare presenti nel sistema.

Alla base della form sono presenti alcuni parametri di gestione della contabilizzazione:

**Data registrazione uguale alla data documento**: questo flag impone la contabilizzazione di ogni singola fattura allo loro data di emissione.

Se il flag viene disabilitato, si attiva il campo successivo, **Data registrazione**, all'interno del quale è possibile impostare una data fissa di registrazione;

*Pulsanti specifici*: 
> **Ricerca**: per cercare i POS; vengono proposte tutte i POS stampati e non contabilizzati.  
> **Contabilizzazione**: esegue la contabilizzazione dei POS selezionati, secondo le impostazioni definite.  

### Precedenti

La form presenta la lista delle operazioni di contabilizzazione eseguite, al fine di visualizzarle ed eventualmente annullarle attraverso gli appositi pulsanti.

L'annullamento sarà possibile solo se il periodo è ancora modificabile.

**Contabilizzazione POS**: griglia con i dettagli delle operazioni eseguite. Viene popolata dopo la procedura di ricerca e possono essere selezionate le operazioni sulle quale applicare le funzioni del ribbon.

I dati nelle griglie in basso, **Punto di vendita** e **Registrazione contabile** corrispondono all'operazione selezionata nella griglia superiore. Un doppio click nella sezione dei punti vendita/registrazioni consentirà di visualizzare il punto vendita/la registrazione contabile relativa.

*Pulsanti specifici*:
> **Ricerca**: ricerca la lista delle contabilizzazioni eseguite.  
> **Ripristina contabilizzazione**: con questo pulsante sarà cancellata tutta la contabilizzazione effettuata, con tutti i POS associati.  
