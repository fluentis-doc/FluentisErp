---
title: Duplica e manutenzione listini fornitori
sidebar_position: 3
---

Questa procedura permette di aggiornare i listini fornitori.       

### Filtri disponibili

È possibile filtrare i risultati per: *Data inizio/fine validità*, *Valuta*, *Articolo*, *Barcode* dell'articolo o solo per gli articoli che sono stati *movimentati*, cioè collegati a documenti da una certa data.     

Se il filtro per *Data inizio validità* è completato, l'applicazione visualizza solo gli articoli dei listini validi alla data inserita. In caso contrario, verranno visualizzati tutti gli articoli, anche quelli dei listini non più validi.         

### Griglia articoli

Una volta selezionati i filtri desiderati, cliccando *Ricerca* la griglia si popolerà con tutti gli articoli che soddisfano le caratteristiche richieste. Le colonne della griglia sono:      
- **Conto/Sottoconto/Descrizione**: contiene il titolare del listino, se personalizzato.       
- **Classe/Codice/Descrizione articolo**: dati identificativi dell'articolo del listino.      
- **Divisa**: riporta la divisa del listino.    
- **Unità di misura**: anche questo dato viene ripreso dal listino.      
- **Prezzo**: in questo campo viene riportato il prezzo dell'articolo presente nel listino.        
- **Sconto**: in questo campo viene riportato l'eventuale sconto presente nel listino (solo sconto fisso).
- **Prezzo netto**: in questa colonna viene riportato il *Prezzo* al netto degli *Sconti*.    
- **Data validità da**: in questo campo viene riportata la data di inizio validità del listino.      
- **Data validità a**: in questo campo viene invece riportata l'eventuale data di fine validità.      
- **Data ultimo documento**: in questo campo viene inserita la data del più recente DDT che presenta articolo e listino.    
- **Quantità**: indica la quantità a cui è riferito il prezzo.   
- **Variante/Descrizione variante**: riporta il codice e la descrizione dela variante, se presente.   
- **Movimento**: il flag attivo indica che sono stati registrati movimenti di magazzino con questo articolo e listino.   

### Barra degli strumenti

I bottoni disponibili nella ribbon bar sono i seguenti:     
- **Aggiorna**: apre un pop up per proseguire con l'aggiornamento del prezzo dell'articolo nel listino; si devono specificare:
1. **Data inizio validità** delle righe listino da aggiornare (eventualmente anche una **Data fine validità** non obbligatoria)
2. **Arrotondamento** contenente le politiche di variazione prezzi e sconti del listino, oppure
3. **Percentuale di incremento**, togliendo il codice dell'arrotondamento e inserendo manualmente la percentuale (o il valore).
4. **OK** per eseguire l'aggiornamento.

:::important Ricorda
Se non si specifica la *Data inizio validità*, l'aggiornamento non da nessun esito e non viene eseguito.
:::  

- **Chiudi**: apre un pop up in cui inserire la *Data fine validità* per le righe listino selezionate; la *Data di fine validità* deve essere maggiore alla maggior data dell'ultimo documento riferito alle righe listino da chiudere (far scadere).      
- **Duplica listini**: apre un pop up e, per le righe listini selezionate, crea o aggiunge le nuove righe ad un nuovo listino o ad un listino già esistente; è possibile, per le righe selezionate, creare un nuovo listino andando a specificare il *Fornitore*, che può essere diverso rispetto a quello del listino di partenza, la *Data validità da* e la *Divisa*; con il flag *Mantieni le stesse date del listino di origine* si crea un listino intestato ad un fornitore diverso ma con le stesse date validità.
- **Sconti**: apre un pop up per assegnare alle righe selezionate degli *Sconti* di riga, aggiungendoli a quelli presenti o sostituendoli utilizzando il check button *Cancella Sconti precedenti*.
- **Riapertura listini**: se viene usato, in caso di righe listino con *Data fine validità*, tali righe vengono riportate nel listino *senza* data fine validità.