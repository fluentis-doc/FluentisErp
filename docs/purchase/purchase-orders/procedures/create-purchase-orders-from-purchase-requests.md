---
title: Creazione automatica ordini
sidebar_position: 2
showLastUpdateTime: true
---

La procedura si trova nel percorso *Acquisti > Ordini Fornitori > Procedure* e permette di creare ordini fornitori partendo da **Richieste di acquisto** oppure da **Ordini clienti**.

## 1. Filtro Da

In questa tab vengono scelti i documenti di origine dai quali creare l'ordine fornitore. È necessario seguire i seguenti passaggi:

- **Filtrare la Richiesta di acquisto o l'Ordine cliente**: selezionare il documento dal quale verrà generato l'Ordine fornitore. La griglia superiore contiene la richiesta/l'ordine, mentre quella inferiore gli articoli corrispondenti.
   
- **Premere il pulsante "Genera prototipi ordine"** per passare al tab successivo.

## 2. Scelta Fornitore

Dopo aver generato il *Prototipo ordine*, è possibile confermarlo in base ai *Fornitori preferenziali* degli articoli o ai *Listini fornitori*. In questa sezione è necessario scegliere il fornitore dal quale ordinare.

- **Selezionare il fornitore per ciascun articolo**: il fornitore viene proposto automaticamente in base al parametro selezionato nella sezione superiore (per i dettagli dei flag, vedere il tab [Parametri](/docs/purchase/purchase-orders/procedures/create-purchase-orders-from-purchase-requests)).

Le righe articolo senza fornitore possono essere selezionate con il tasto destro del mouse e spostate sotto il fornitore desiderato che ha già almeno una riga articolo abbinata. In alternativa, è possibile utilizzare il pulsante *Scegli fornitore* nella ribbon bar.

- **Confermare i prototipi d'ordine selezionati**: nella griglia superiore, selezionare i prototipi o solo una parte dei loro articoli, quindi cliccare sul pulsante **Conferma i prototipi d'ordine selezionati** per generare i pre-ordini fornitori. Le griglie secondarie, *Articoli* e *Analitica*, mostreranno i dettagli della riga selezionata nella prima griglia.

#### Pulsanti specifici

> **Esplodi**: esplode tutte le righe della griglia con i documenti.  
> **Cancella il prototipo di ordine selezionato**: cancella il prototipo di ordine per gli articoli selezionati nella griglia superiore.  
> **Scegli il fornitore**: apre l'help contatti per scegliere il fornitore; attivo se è stato selezionato almeno un prototipo/articolo.  
> **Conferma i prototipi d'ordine selezionati**: genera gli ordini fornitori in base ai prototipi selezionati.

## 3. Prototipi Ordine

In questa sezione vengono visualizzati i pre-ordini per la creazione degli ordini fornitore.

La griglia superiore mostra i dettagli degli ordini fornitore che si stanno creando. Questi includono il *Tipo ordine fornitore* (proposto dai *Parametri* ma modificabile), il numero dell'ordine, la data di creazione e il fornitore.

La griglia inferiore mostra i dettagli degli articoli contenuti in ciascun ordine. I dati modificabili in questa griglia sono: *Quantità confermata*, *IVA*, e *Tipo fatturato acquisti*.

> **Quantità originale**: quantità inserita nel documento di origine (RDA o ordine cliente).  
> **Quantità disponibile**: disponibilità dell'articolo su tutti i magazzini considerati nel *Calcolo disponibilità* alla data odierna.  
> **Quantità confermata**: se la *Quantità disponibile* è minore della *Quantità originale*, viene proposta automaticamente quest'ultima. In alternativa, sarà proposta una quantità nulla, e per proseguire sarà necessario valorizzare questo campo.

5. **Generazione ordini fornitore**: l'ultimo passo è la generazione degli ordini tramite il pulsante **Genera ordini fornitore**. In alternativa, è possibile aggiungere le righe a ordini già esistenti con il pulsante **Ordini**.

## 4. Parametri

### 4.1 Scegli il fornitore a cui ordinare in base a:

- **Fornitore e listino prezzi da richiesta di acquisto**: propone il fornitore e il listino di acquisto presenti nella RDA.  
- **Fornitore e listino prezzi da fornitore preferenziale di default**: propone il fornitore preferenziale di default dell'articolo.  
- **Fornitore e prezzi da ultimo acquisto fatturato/ricevuto/ordinato**: ricerca il fornitore e i prezzi dell'articolo nell'ultima fattura di acquisto ricevuta; se non vengono gestite le fatture, cerca nei documenti di trasporto o negli ordini.  
- **Fornitore con migliore prezzo di acquisto**: seleziona il fornitore con il prezzo di acquisto minore.  
- **Fornitore con minore tempo di approvvigionamento**: seleziona il fornitore con il minor tempo di approvvigionamento tra quelli inseriti nei *Fornitori preferenziali* dell'anagrafica articoli.  
- **Fornitore con migliore condizione di pagamento**: seleziona il fornitore con la soluzione di pagamento con la scadenza massima.

### 4.2 Parametri di creazione

- **Tipo ordine fornitore da richieste di acquisto**: indica il tipo di ordine fornitore da creare a partire dalle RDA. Può essere modificato nei *Prototipi ordine*.  
- **Tipo ordine fornitore da ordini clienti**: indica il tipo di ordine fornitore da creare a partire dagli ordini clienti. Può essere modificato nei *Prototipi ordine*.  
- **Raggruppa per articolo**: raggruppa gli ordini per articolo.

### 4.3 Dati da utilizzare se non codificati per ogni articolo

- **Tipo fatturato acquisti**: se manca il tipo fatturato acquisti nella riga articolo.  
- **Aliquota IVA**: se manca il codice IVA nella riga articolo.  
- **UM (Unità di misura)**: se si vogliono creare gli ordini anche con l'unità di misura alternativa.  
- **Tempo di approvvigionamento**: per determinare le date di consegna.

### 4.4 Considera la disponibilità

Attivando questo flag nel tab *Prototipi ordine*, sarà visibile la colonna *Quantità disponibile*.

A seconda dei flag selezionati nella sezione sottostante, saranno considerate le disponibilità provenienti dalle seguenti aree: conto lavoro, acquisti, vendite, pianificazione, produzione, magazzino.

## 5. Operazioni

Questa sezione riporta lo storico di tutte le creazioni eseguite, con il dettaglio dell'operatore, gli ordini fornitori creati e i loro dettagli.

Gli ordini fornitore possono essere visualizzati con doppio clic sulle righe dei tab **Operazioni**/**Dettagli**.

##### Pulsante specifico

> **Ripristino operazioni selezionate**: annulla l'ordine fornitore creato e ripristina la richiesta di acquisto.