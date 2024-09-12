---
title: Consegna
sidebar_position: 4
---

In questo tab vengono inseriti i materiali che devono essere consegnati al terzista. Essi possono essere inseriti automaticamente tramite la procedura di *Evasione da Ordine* oppure manualmente dall'utente.


*Pulsanti specifici*:
> **Inserisci materiale**: richiama la procedura per inserire un nuovo materiale nella griglia degli articoli del tab 'Consegne'.  
> **Cancella materiale**: richiama la procedura per cancellare un materiale dalla griglia degli articoli del tab 'Consegne'. 

*Campi specifici*:

**Ordine C/L numero e anno**: vengono visualizzati il numero e l'anno dell'ordine di conto lavoro da cui la riga articolo è stata prelevata. Se la riga è stata inserita manualmente questa colonna risulta vuota;

**Data prevista consegna**: rappresenta la data di prevista consegna del materiale, ripresa dal tab *Materiali da consegnare* dell'ordine di conto lavoro da cui è stata generata la riga articolo del DDT;

**Previsto rientro**: rappresenta la data di previsto rientro del prodotto finito che dovrà essere realizzato dal terzista utilizzando il materiale in consegna, ripresa dal tab *Articoli da Produrre* dell'ordine di conto lavoro da cui è stata generata la riga articolo del DDT;

**N. riga**: rappresenta un semplice numero progressivo della riga del documento, editabile dall'utente;

**UM**: rappresenta l'unità di misura gestionale dell'articolo in consegna;

**Fase/Sottofase**: vengono visualizzati il codice di fase e il codice di sottofase della fase di produzione dell'ordine di produzione a cui l'articolo è eventualmente legato; questo avviene se l'ordine di conto lavoro da cui è stata creata questa riga di DDT è stato generato da una fase esterna di un ordine di produzione;

**Quantità**: rappresenta la quantità che si è deciso di consegnare al terzista, editabile dall'utente;

**Magazzino**: rappresenta il codice del magazzino da cui viene prelevata la merce da consegnare al terzista. Il codice del magazzino viene proposto uguale a quello impostato nella riga del tab 'Materiali da consegnare' dell'ordine di conto lavoro da cui è stata generata la riga DDT, ma è editabile da parte dell'utente. Se invece è attivo il flag, presente nei Parametri di Conto Lavoro, chiamato 'Considera magazzini in base al tipo DDT di consegna', il magazzino proposto sarà quello impostato nella tabella dei 'Tipi Bolla di Vendita', nell'apposita colonna 'Magazzino';

**Causale**: rappresenta il codice della causale di magazzino che verrà utilizzata per effettuare il prelievo dal magazzino da cui è necessario far uscire la merce da consegnare al terzista. Il codice della causale di magazzino viene proposto uguale a quello impostato nella riga del tab 'Materiali da consegnare' dell'ordine di conto lavoro da cui è stata generata la riga DDT, ma è editabile da parte dell'utente. Se invece è attivo il flag, presente nei Parametri di Conto Lavoro, chiamato 'Considera magazzini in base al tipo DDT di consegna', la causale proposta sarà quello impostata nella tabella dei 'Tipi Bolla di Vendita', nell'apposita colonna 'Causale';

**Prezzo**: rappresenta il prezzo unitario dell'articolo. Si tratta di una colonna editabile dall'utente e non obbligatoria. Si usa solitamente quando la DDT di consegna deve passare da una dogana;

**IVA**: rappresenta il codice IVA, oppure vederlo automaticamente proposto dalla procedura che lo preleva dall'anagrafica del terzista o dall'anagrafica dell'articolo presente nella riga, a seconda dei casi. La combo box attinge dalla tabella 'Aliquote IVA' che si trova nelle 'Impostazioni Generali';

**Tipo fatturato acquisti**: rappresenta il codice del Tipo Fatturato, oppure vederlo automaticamente proposto dalla procedura che lo preleva dall'anagrafica dell'articolo presente nella riga. La combo box attinge dalla tabella 'Tipo Fatturato Acquisti' che si trova nelle 'Tabelle Area Acquisti';     

**Pesi**: vengono riportati il Peso netto e il Peso lordo totali delle righe articolo. Vengono riportati i pesi di anagrafica articolo moltiplicati per la quantità di riga.

### Scarico lotti

In questo tab viene data la possibilità di impostare, per la riga selezionata nella griglia, i lotti da scaricare dal magazzino con la quantità di articolo prelevata per l'invio al terzista, nel caso che si tratti di più lotti diversi prelevati con la stessa riga di DDT.

La griglia dei lotti consente all'utente di prelevare il lotto attingendo dall'apposito 'Help Lotti', che filtra tra i lotti disponibili dell'articolo selezionato nella griglia superiore. Le informazioni che vengono riportate nella griglia lotti sono tipo codice lotto, codice lotto, lotto fornitore, tipo lotto, data inizio e data scadenza, quantità del lotto, ubicazione, dati del fornitore del lotto (conto, sottoconto e ragione sociale). Ovviamente la somma delle quantità dei vari lotti dovrà corrispondere esattamente alla quantità consegnata della riga articolo.

### Dati materiale

In questo tab vengono visualizzate le seguenti informazioni relative alla riga selezionata nella griglia:

**Classe, codice, descrizione e variante dell'articolo, quantità da consegnare, unità di misura, Magazzino, Causale, Ordine C/L**: si tratta di una serie di informazioni semplicemente riportate dalla riga di DDT selezionata;

**Progetto**: rappresenta la commessa di vendita legata alla riga del DDT. Di solito viene richiamata la commessa di vendita inserita nella riga dell'ordine di conto lavoro da cui è stata generata la riga di DDT;

**Note**: in questo campo l'utente può inserire una nota relativa alla riga selezionata.

