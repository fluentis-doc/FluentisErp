---
title: Parametri fatture di acquisto
sidebar_position: 7
tags: [fatture di acquisto]
keywords: [fatture di acquisto]
---

I parametri delle fatture di acquisto permettono l'impostazione di base per gestire correttamente e secondo le specifiche richieste da ogni singola società.

*Pulsanti*:

> **Salva**: permette di salvare i parametri impostati.  
> **Ripristina**: permette di ripristinare i parametri ai valori iniziali.

### Generale

**Gestione doppia unità misura**:quando è settato si abilita il combo box UM Alt e la colonna quantità alternative nella griglia articoli della fattura di acquisto.

**Proposta automatica UM alternativa:** questo check si abilita solo se 'Gestione doppia unita misura' è attivo. Quando viene inserito un articolo che ha nella sua anagrafica tab UM Alternative una UM Alternativa di default, questa UM viene automaticamente proposta come UM Alt dell'articolo e viene calcolata anche la quantità alternativa usando il fattore di conversione della medesima;

**Costo zero in assenza di listini**: se attivo, in assenza di un listino valido popola il prezzo con il valore zero. Nel caso in cui questa voce non fosse spuntata, il campo sarebbe valorizzato con il costo ultimo dell'articolo, se presente;

**'Tipo fattura', 'Aliquota IVA', 'Tipo fatturato acquisti'**: questi parametri vengono usati come default nella creazione delle fatture da ordini.

**Lotti e S.N. (Serial Number) obbligatori:** se attivo obbliga l'utente ad inserire a livello di riga articolo il lotto ed il serial number per tutti gli articoli per cui è prevista questa gestione. Se non attivo , il lotto ed il serial number non risultano dati obbligatori. Si consiglia l'accensione di questo flag qualora si utilizzi la gestione articoli con lotto.

**Ricerca prezzi articoli in tutti i listini predefiniti**: questo parametro è utilizzato per la ricerca del prezzo nei listini fornitori; la ricerca avviene nei listini del tipo predefinito in anagrafica fornitore anche se i listini non sono validi (i listini validi sono quelli che hanno data inizio validità \<= alla data odierna e hanno data fine validità nulla o \>= alla data odierna)

**Consentire sconti per articoli omaggio**: se attivo, permette l'inserimento di sconti su righe omaggio;

**Uso articolo fornitore**: se attivo, nella griglia articoli del documento viene proposto anche il campo per inserire il codice articolo fornitore. Se non attivo questo campo non sarà visibile;

**Verifica articoli in esaurimento:** se attivato, il sistema fa un controllo sulla disponibilità degli articoli in riga documento ed avvisa qualora l'articolo fosse in esaurimento;

**Contabilizzazione imballi**: consente di poter contabilizzare, in contabilità generale, anche le righe con articoli di natura imballo che solitamente vengono gestiti per avere la verifica delle giacenze degli imballi a rendere. La gestione delle imballi a rendere verranno spiegati nel video relativo.

**Mantieni prezzi da ordini per gli scaglioni**: è utilizzato in evasione degli ordini in DDT nel caso in cui la quantità evasa sia diversa (solitamente parziale) della quantità ordinata per la quale è stato inserito un prezzo o uno sconto a scaglione di quantità. Se il prezzo o lo sconto non dipendono dalla quantità consegnata ma solo dalla quantità in ordine questo flag deve essere attivato, se invece il prezzo o sconto a scaglione non deve essere inserito nel documento di consegna nel caso l'evasione non avvenga per la quantità totale dell'ordine il flag non deve essere attivato.

### Carico

**Crea registrazione con la data del documento**:quando è settato. la registrazione di magazzino viene fatta con la stessa data della fattura di acquisto, e non sarà necessario specificare la data registrazione nella form di carico.

**Priorità magazzino e causale di carico**: quando questo parametro è settato, il magazzino e la causale di carico vengono letti dalle righe della fattura di acquisto e se non ci sono dai parametri della form carico. Qualora questi parametri non fossero settati, verranno usati i valori impostati nei due campi successivi inserendo il **Magazzino** che si intende utilizzare e la relativa **Causale**.

**Carico/Scarico Automatico**: se attivo, permette di effettuare il carico automatico del magazzino direttamente dalla fattura di acquisto mediante il pulsante “Carico automatico da magazzino”, senza che sia necessario passare dalla funzione per il carico a magazzino della fattura.

**Avviso articoli fittizi**: controlla che, in fase di carico a magazzino, siano presenti o meno nelle righe della fattura degli articoli fittizi. Nel caso siano presenti sarà richiesto se effettuare comunque il carico, ovviamente senza tali articoli, oppure se non effettuare totalmente il movimento di magazzino. L'articolo fittizio può essere senza distinta base di primo livello se nei parametri MRP è dichiarato con tipo approvvigionamento di acquisto altrimenti la registrazione di carico darà un messaggio di errore nel caso ci siano degli articoli fittizi nel documento da caricare.

### Analitica

In questo tab si specifica con che priorità recuperare il centro di costo (CdC) o centro di profitto (CdP) nella riga documento.

È possibile modificare le priorità utilizzando i pulsanti:

> **Sposta su** ![](/img/neutral/common/move-up.png) e 
> **Sposta giù**![](/img/neutral/common/delete-cc.png).

*Valori di default*: il CDC o CDP viene recuperato dal tipo fatturato qualora presente. Per approfondimenti fare riferimento a tabella [Tipo Fatturato Acquisti](/docs/configurations/tables/purchase/purchase-invoices-type). Qualora non fosse presente nel tipo fatturato il sistema lo cercherà in *Anagrafica fornitore*. Se non presente verrà cercato in *Anagrafica articolo* e successivamente a livello di *Magazzino*.

**Ricalcolo**: se attivo, questo flag, ricalcola i centri di costo/profitto secondo la priorità scelta.

Una volta impostati i parametri come meglio conviene, sarà necessario salvarli perché questi diventino effettivi, cliccando sul pulsante **Salva**.