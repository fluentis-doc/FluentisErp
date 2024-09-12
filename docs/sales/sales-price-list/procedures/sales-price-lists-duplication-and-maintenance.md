---
title: Duplica e manutenzione listini di vendita
sidebar_position: 6
---

Questa procedura permette di aggiornare gli articoli dei listini di vendita.       

### Filtri disponibili

Nella parte di filtri si può scegliere di visualizzare:           
- **Tutte** le tipologie di listino,       
- solo i listini di tipo **Generico** o        
- solo i listini **Personalizzati per cliente**.        

In base alla scelta, nella parte destra si attiva la ricerca per **Tipo listino** oppure per **Cliente**.         
Se il filtro per *Data inizio validità* è completato, l'applicazione visualizza gli articoli dei listini validi alla data inserita. In caso contrario, verranno visualizzati tutti gli articoli, anche quelli dei listini non più validi.         
E' possibile filtrare anche per: Data fine validità, Divisa, Articolo, Barcode dell'articolo o solo per gli articoli che sono stati movimentati, cioè collegati a documenti da una certa data.

### Griglia articoli

Una volta selezionati i filtri desiderati, cliccando Ricerca la griglia si popolerà con tutti gli articoli che soddisfano le caratteristiche richieste. Le colonne della griglia sono:      
- **Tipo listino**: riporta il tipo listino, se generico, con la relativa **Descrizione**.      
- **Conto/Sottoconto/Descrizione**: contiene il titolare del listino, se personalizzato.       
- **Classe/Codice/Descrizione articolo**: dati identificativi dell'articolo del listino.      
- **Codice divisa**: riporta la Divisa del listino.    
- **Codice Unità di misura**: anche questo dato viene ripreso dal listino.      
- **Prezzo**: in questo campo viene riportato il prezzo dell'articolo presente nel listino.        
- **Sconto**: in questo campo viene riportato l'eventuale sconto presente nel listino (solo sconto fisso).
- **Prezzo netto**: in questa colonna viene riportato il Prezzo al netto degli Sconti.    
- **Data validità da**: in questo campo viene riportata la data di inizio validità del listino.      
- **Data validità a**: in questo campo viene invece riportata l'eventuale data di fine validità.      
- **Data ultimo documento**: in questo campo viene inserita la data del più recente DDT che presenta articolo e listino.    

### Barra degli strumenti

I bottoni disponibili nella ribbon bar sono i seguenti:     
- **Aggiorna**: apre un pop up per proseguire con l'aggiornamento del prezzo dell'articolo nel listino; si devono specificare:
1. **Data inizio validità** delle righe listino da aggiornare (eventualmente anche una **Data fine validità** non obbligatoria)
2. **Arrotondamento** contenente le politiche di variazione prezzi e sconti del listino, oppure
3. **Percentuale di incremento**, togliendo il codice dell'arrotondamento e inserendo manualmente la percentuale.
4. **OK** per eseguire l'aggiornamento.

:::note Nota
Se non si specifica la Data inizio validità, l'aggiornamento non da nessun esito e non viene eseguito.
:::  

- **Chiudi Listini**: apre una nuova form per forzare la *Data fine validità* per le righe listino selezionate; la *Data di fine validità* deve essere maggiore alla maggior data dell'ultimo documento riferito alle righe listino da chiudere (far scadere).      
- **Duplica listini**: apre un pop up e, per le righe listini selezionate, crea o aggiunge le nuove righe ad un nuovo listino o ad un listino già esistente; è possibile, per le righe selezionate, creare un nuovo listino andando a specificare: se si vuole creare un listino *Generale* o *Personalizzato*, il *Tipo listino*, la *Data validità da* e la *Divisa*; con il flag *Mantieni le stesse date del listino di origine* si crea un listino con tipologia diversa ma con stesse date validità.
- **Sconti**: apre un pop up per assegnare alle righe selezionate degli *Sconti* di riga, aggiungendoli a quelli presenti o sostituendoli utilizzando il check button *Cancella Sconti precedenti*.
- **Riapertura listini**: se viene usato, in caso di righe listino con *Data fine validità*, tali righe vengono riportate nel listino *senza* data fine validità.