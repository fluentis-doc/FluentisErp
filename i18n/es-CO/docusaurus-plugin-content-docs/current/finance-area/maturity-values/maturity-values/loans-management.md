---
title: Gestione mutui
sidebar_position: 2
---

### Introduzione

Dalla presente form è possibile ricercare ed inserire nuovi mutui passivi.

La gestione del mutuo passivo permette, nel dettaglio, di inserire tutti i dati relativi, in particolare il piano di ammortamento del mutuo, al fine di procedere successivamente alla contabilizzazione automatica del pagamento delle rate alle scadenze previste.

I campi principali esposti nella maschera ono quelli presenti anche nel dettaglio.

Per inserire un nuovo mutuo premere **Nuovo**.

Il primo dato obbligatorio da inserire è il tipo di mutuo, tramite una combo box che rinvia all'apposita tabella *Tipi mutuo* (accessibile anche con il tasto destro e comando Apri form).

### Tabella tipi mutuo

:::note Campi della tabella Tipi Mutuo
**Tipo Mutuo**: codice per richiamare il dato

**Descrizione del tipo mutuo**: descrizione estesa del dato

**Tipo flusso / Descrizione**: campo per richiamare (nella tabella *Tipi flusso finanziario*) quale tipo di flusso finanziario relativo all'elaborazione del Cash Flow sarà abbinato alle rate mutuo, in modo tale da poterle rappresentare automaticamente nell'elaborazione dei cash flow

**Causale**: causale contabile abbinata al fine di permettere la contabilizzazione automatica delle rate
:::

### Dettaglio nuovo mutuo

Gli altri campi obbligatori sono la descrizione del contratto ed i conti principali per le successive operazioni di contabilizzazione

- Banca: per inserire il conto corrente bancario con cui saranno pagate le rate
- Debito: per inserire il conto di debito dal quale saranno stornati i pagamenti delle rate, **in linea capitale** (ad es. "Mutui passivi") 
- Interessi: per inserire il conto sul quale sarà contabilizzata la quota interessi di ogni rata
- Costi: per inserire il conto dove saà contabilizzata la commissione o gli altri costi di ogni rata

Gli altri campi importanti sono l'importo erogato, la divisa (in particolare se diversa da Euro attiva il relativo tasso di cambio)

**TAEG:** tasso di interesse praticato sul mutuo, il dato viene utilizzato dalla procedura di calcolo automatico del piano di ammortamento.

Il campo Versione si ricollega al pulsante **Nuova Versione** presente nella form di ricerca che permette, anche dopo l'inserimento del piano di ammortamento e la contabilizzazione di alcune rate, di effettuare delle modifiche nel piano storicizzando la situazione precedente.

Nella griglia di dettaglio viene inserito il piano di ammortamento composto da tutte le rate previste, compilando ola data (che sarà ripresa nella procedura di contabilizzazione), la quota capitale e la quota interessi e le relative commissioni (nella colonna **Costo**)

Le successive colonne, evidenziate in azzurro, vengono gestite da Fluentis per evidenziare il totale della rata, l'avvenuta contabilizzazione mediante procedura relativa ed il riferimento alla registrazione contabile generata.

### Procedure disponibili nella ribbon bar

Le procedure disponibili, ovvero Calcola Piano di ammortamento, Cambia date Rate e Aggiorna spese rata, sono le medesime disponibili per la gestione dei leasing, pertanto si rinvia alla [**pagina corrispondente**](/docs/finance-area/leasing/new).

### Contabilizzazione rate mutuo

Avviene utilizzando i comandi posti nella ribbon bar **Contabilizzazione** ( e **Ripristina contabilizzazione** per annullare la manovra)