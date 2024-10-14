---
title: Parametri nei moduli dell'area Acquisti e Vendite
sidebar_position: 35
---

I documenti del ciclo passivo e attivo prevedono le loro impostazioni specifiche di valorizzazione dei *Centri aziendali*

## Area acquisti
Nell'area acquisti le configurazioni sono disponibili per le Richieste di acquisto, gli Ordini fornitori, le Bolle di acquisto e le Fatture di acquisto.

### Richieste di acquisto
Nei parametri del modulo, tab *Analitica*, abbiamo la possibilità di definire la priorità di valorizzazione dei centri tra
    - *Tipo fatturato* cioè rispetto al piano dei conti associato al fatturato acquisti dell'articolo
    - *Anagrafica articoli* cioè rispetto all'articolo selezionato
    - *Anagrafica* cioè fornitore associato alla riga di Richiesta
    - *Magazzino* cioè il magazzino legato alla riga articolo

### Ordini fornitori
Nei parametri del modulo, tab *Analitica*, abbiamo la possibilità di definire la priorità di valorizzazione dei centri tra
    - *Tipo fatturato* cioè rispetto al piano dei conti associato al fatturato acquisti dell'articolo
    - *Anagrafica articoli* cioè rispetto all'articolo selezionato
    - *Anagrafica* fornitore intestatario dell'ordine
    - *Magazzino* cioè il magazzino legato alla riga articolo
Sono inoltre presenti i seguenti flag:
- *Ricalcolo*: quando si crea l'ordine da un documento precedente (es. richiesta di acquisto), questo flag imposta il ricalcolo dell'analitica secondo i parametri propri del modulo di destinazione
- *Centri di costo/ricavo obbligatori*: vincola l'utente a valorizzare al 100% l'analitica della singola riga articolo
- *Valuta la priorità su ogni dimensione*: il flag è disponibile solo per le società con il *Controlling* attivo. Se **non** è presente, ***FluentisERP*** applicherà la priorità di ricerca e fermerà la sua valutazione alla prima entità che consente una qualsiasi valorizzazione dei centri aziendali. **Se è presente**, invece, ***FluentisERP*** applicherà la priorità per valorizzare tutte le possibili dimensioni che si hanno impostate nelle varie entità di origine (cioè il conto contabile, dall'articolo, dal magazzino, dal fornitore)

### Bolle di acquisto
Nei parametri del modulo, tab *Analitica*, abbiamo la possibilità di definire la priorità di valorizzazione dei centri tra
    - *Tipo fatturato* cioè rispetto al piano dei conti associato al fatturato acquisti dell'articolo
    - *Anagrafica articoli* cioè rispetto all'articolo selezionato
    - *Anagrafica* fornitore intestatario dell'ordine
    - *Magazzino* cioè il magazzino legato alla riga articolo
Sono inoltre presenti i seguenti flag:
- *Ricalcolo*: quando si crea l'ordine da un documento precedente (es. ordine fornitore), questo flag imposta il ricalcolo dell'analitica secondo i parametri propri del modulo di destinazione
- *Valuta la priorità su ogni dimensione*: il flag è disponibile solo per le società con il *Controlling* attivo. Se **non** è presente, ***FluentisERP*** applicherà la priorità di ricerca e fermerà la sua valutazione alla prima entità che consente una qualsiasi valorizzazione dei centri aziendali. **Se è presente**, invece, ***FluentisERP*** applicherà la priorità per valorizzare tutte le possibili dimensioni che si hanno impostate nelle varie entità di origine (cioè il conto contabile, dall'articolo, dal magazzino, dal fornitore)

Nella procedura ***Creazione DDT da Ricevimento Merci*** è disponibile il parametro di ***Ricalcolo centri di costo/ricavo***, che imposta il ricalcolo dell'analitica secondo i parametri propri del modulo di destinazione

### Fatture di acquisto
Nei parametri del modulo, tab *Analitica*, abbiamo la possibilità di definire la priorità di valorizzazione dei centri tra
    - *Tipo fatturato* cioè rispetto al piano dei conti associato al fatturato acquisti dell'articolo
    - *Anagrafica articoli* cioè rispetto all'articolo selezionato
    - *Anagrafica* fornitore intestatario dell'ordine
    - *Magazzino* cioè il magazzino legato alla riga articolo
Sono inoltre presenti i seguenti flag:
- *Ricalcolo*: quando si crea l'ordine da un documento precedente (es. bolla di acquisto), questo flag imposta il ricalcolo dell'analitica secondo i parametri propri del modulo di destinazione
- *Valuta la priorità su ogni dimensione*: il flag è disponibile solo per le società con il *Controlling* attivo. Se **non** è presente, ***FluentisERP*** applicherà la priorità di ricerca e fermerà la sua valutazione alla prima entità che consente una qualsiasi valorizzazione dei centri aziendali. **Se è presente**, invece, ***FluentisERP*** applicherà la priorità per valorizzare tutte le possibili dimensioni che si hanno impostate nelle varie entità di origine (cioè il conto contabile, dall'articolo, dal magazzino, dal fornitore)

Nella procedura ***Creazione Fatture da Ricevimento Merci*** è disponibile il parametro di ***Ricalcolo centri di costo/ricavo***, che imposta il ricalcolo dell'analitica secondo i parametri propri del modulo di destinazione

Nella procedura ***Valorizzazione DDT di acquisto*** è disponibile il parametro di ***Ricalcolo centri di costo/ricavo***, che imposta il ricalcolo dell'analitica secondo i parametri propri del modulo di destinazione

Nella procedura ***Valorizzazione DDT di acquisto e di rientro*** è disponibile il parametro di ***Ricalcolo centri di costo/ricavo***, che imposta il ricalcolo dell'analitica secondo i parametri propri del modulo di destinazione

## Area vendite
Nell'area vendite le configurazioni sono disponibili per gli Ordini clienti, le Bolle di vendita e le Fatture di vendita.

### Offerte di vendita

### Ordini clienti
Nei parametri del modulo, tab *Analitica*, abbiamo la possibilità di definire la priorità di valorizzazione dei centri tra
    - *Tipo fatturato* cioè rispetto al piano dei conti associato al fatturato acquisti dell'articolo
    - *Anagrafica articoli* cioè rispetto all'articolo selezionato
    - *Anagrafica* fornitore intestatario dell'ordine
    - *Magazzino* cioè il magazzino legato alla riga articolo
Sono inoltre presenti i seguenti flag:
- *Valuta la priorità su ogni dimensione*: il flag è disponibile solo per le società con il *Controlling* attivo. Se **non** è presente, ***FluentisERP*** applicherà la priorità di ricerca e fermerà la sua valutazione alla prima entità che consente una qualsiasi valorizzazione dei centri aziendali. **Se è presente**, invece, ***FluentisERP*** applicherà la priorità per valorizzare tutte le possibili dimensioni che si hanno impostate nelle varie entità di origine (cioè il conto contabile, dall'articolo, dal magazzino, dal cliente)

### Bolle di vendita
Nei parametri del modulo, tab *Analitica*, abbiamo la possibilità di definire la priorità di valorizzazione dei centri tra
    - *Tipo fatturato* cioè rispetto al piano dei conti associato al fatturato acquisti dell'articolo
    - *Anagrafica articoli* cioè rispetto all'articolo selezionato
    - *Anagrafica* fornitore intestatario dell'ordine
    - *Magazzino* cioè il magazzino legato alla riga articolo
Sono inoltre presenti i seguenti flag:
- *Valuta la priorità su ogni dimensione*: il flag è disponibile solo per le società con il *Controlling* attivo. Se **non** è presente, ***FluentisERP*** applicherà la priorità di ricerca e fermerà la sua valutazione alla prima entità che consente una qualsiasi valorizzazione dei centri aziendali. **Se è presente**, invece, ***FluentisERP*** applicherà la priorità per valorizzare tutte le possibili dimensioni che si hanno impostate nelle varie entità di origine (cioè il conto contabile, dall'articolo, dal magazzino, dal cliente)

### Fatture di vendita
Nei parametri del modulo, tab *Analitica*, abbiamo la possibilità di definire la priorità di valorizzazione dei centri tra
    - *Tipo fatturato* cioè rispetto al piano dei conti associato al fatturato acquisti dell'articolo
    - *Anagrafica articoli* cioè rispetto all'articolo selezionato
    - *Anagrafica* fornitore intestatario dell'ordine
    - *Magazzino* cioè il magazzino legato alla riga articolo
Sono inoltre presenti i seguenti flag:
- *Valuta la priorità su ogni dimensione*: il flag è disponibile solo per le società con il *Controlling* attivo. Se **non** è presente, ***FluentisERP*** applicherà la priorità di ricerca e fermerà la sua valutazione alla prima entità che consente una qualsiasi valorizzazione dei centri aziendali. **Se è presente**, invece, ***FluentisERP*** applicherà la priorità per valorizzare tutte le possibili [*dimensioni*](/docs/controlling/controlling-parametrization/controlling-specific-settings/dimension) che si hanno impostate nelle varie entità di origine (cioè il conto contabile, dall'articolo, dal magazzino, dal cliente)

Nella procedura ***Creazione da DDT*** è disponibile il parametro di ***Ricalcolo centri di costo/ricavo***, che imposta il ricalcolo dell'analitica secondo i parametri propri del modulo di destinazione
