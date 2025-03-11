---
title: Creazione e gestione insoluti
sidebar_position: 6
---

La form si trova sul percorso  **Tesoreria > Effetti > Crea Insoluto** e permette la creazione di una *nuovo* insoluto.

## Come creare un Insoluto

1. Dopo l'apertura della form, sebbene sia possibile compilare i campi manualmente, **utilizza** il comando ***Acquisizione dati*** (nella ribbon bar) per richiamare l'effetto che risulterà insoluto, tramite l'apposita finestra di dialogo e ricerca che viene aperta.

2. Dalla finestra di dialogo che è stata aperta, seleziona l'effetto, dopo aver utilizzato eventualmente i filtri presenti, e premi **Seleziona**. Tutti i dettagli dell'insoluto vengono compilati automaticamente, quali ad esempio importo, debitore, numero , tipo effetto ecc.... leggendoli dall'effetto stesso.

3. **Aggiungi** manualmente le **Spese** Bancarie e gli altri valori nel tab **Nota di addebito** per poter procedere successivamente alla contabilizzazione ed al riaddebito al debitore anche di questi importi. Alcuni di questi campi possono essere automatizzati, quali ad esempio gli interessi moratori e le spese bancarie, configurando opportunamente l'anagrafica della banca di presentazione e i [**parametri generali del modulo**](/docs/configurations/parameters/treasury/unpaids-parameters) insoluti (campo Tipo Interesse)

4. **Salva** l'insoluto creato

La form **Gestione insoluto** presenta una testata fissa con i dati principali dell'insoluto e poi, nella parte inferiore, è suddivisa in 4 tab di dettaglio più un quinto per allegare documenti:

## 1. Testata fissa

Contiene i dati generali dell'insoluto, in particolare: 

- il campo delle **spese bancarie** per un'ulteriore modifica manuale 
- il **numero** dell'insoluto che è uguale al numero dell'effetto d'origine. 
- vari **flag di stato** a seconda delle operazioni effettuate sull'insoluto, quali ad esempio al contabilizzazione, la stampa , l'incasso definitivo delle somme dovute ecc...

### 1.1 Nota debito

E' gestita per quanto riguarda: 
- il calcolo interessi con relativo **tasso** e **interessi di mora** (sulla base del tipo tasso inserito nei parametri del modulo e il differenziale di **giorni** tra data scadenza e data creazione dell'insoluto).
- **Spese amministrative** di rivalsa (da compilare manualmente) che saranno riaddebitate con l'emissione not di addebito
- **Recupero bolli** (da compilare manualmente) che saranno riaddebitate con l'emissione not di addebito

### 1.2 Presentazione
Visualizza gli estremi della distinta di presentazione associata all'effetto di origine.

### 1.3 Riferimento insoluto

Questo tab visualizza le partite create con la contabilizzazione dell'insoluto, con i pagamenti associati.

### 1.4 Rif. doc originale

Visualizza i riferimenti dei documenti (partite/fatture) di origine degli effetti creati.