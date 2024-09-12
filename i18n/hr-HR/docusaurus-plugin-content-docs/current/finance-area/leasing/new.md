---
title: Nuovo Leasing
sidebar_position: 3
---

Inserendo un nuovo contratto di leasing è necessario definire, oltre ai campi indicati con la crocetta rossa, prima di tutto il **Tipo Leasing**. Questo campo rimanda alla tabella **[Tipo leasing](/docs/finance-area/leasing/search)**  (vedere dettaglio nella documentazione della form Ricerca) dove precedentemente devono essere state definite una o più tipologie.

Richiamando un Tipo Leasing vengono proposti i dati relativi nei campi per l'aliquota iva ed i conti da utilizzare per contabilizzare i canoni (quota capitale) gli interessi (quota interessi dei canoni) ed i costi (esempio spese di incasso dei singoli canoni).

![](/img/it-it/finance-area/leasing/new/image01.png)

![](/img/it-it/finance-area/leasing/new/image02.png)

## TESTATA:

Devono essere inseriti i campi relativi a:

**Conto/ sottoconto Banca**: relativo alla banca che sarà utilizzta nelle scritture di pagamento dei canoni;

**Conto / sottoconto società concedente**: relativo al conto del fornitore (società di leasing concedente) che sarà utilizzato nelle scritture relative ai canoni pagati;

**Data stipula**: proposta di default come data odierna (modificabile) rappresenta la data dalla quale saranno calcolati i giorni di competenza del leasing;

**Numero**: numero interno del contratto di leasing gestito da un numeratore Fluentis;

**Descrizione**: descrizione del contratto;

**Data estinzione**: inserire la data prevista per l'estinzione al fine di permettere il calcolo automatico dei giorni totali di contratto e dunque dei giorni di competenza per il risconto del maxicanone e delle quote non di competenza.

:::danger Attenzione
Tale data, anche se inserita dall'utente, dovrebbe coincidere normalmente con la data finale del piano di ammortamento, pertanto è stato posto un controllo con messaggio di avviso quando si utilizza la procedura di calcolo automatico piano di ammortamento. Il disallineamento di queste date potrebbe portare ad un calcolo del risconto annuo del maxicanone (e della quota non di competenza) non corretto
:::

**Tasso interno di attualizzazione**: permette di utilizzare il tasso indicato per calcolare automaticamente il piano di ammortamento del leasing (ammortamento a rata costante) inserire il tasso annuo, questo tasso sarà automaticamente calcolato per determinare il tasso periodale in base alla periodicità delle rate ed alla durata del leasing.

**Valore del Bene**: Valore del bene concesso in leasing.

**Valore di Riscatto**: Normalmente al termine del leasing è previsto un corrispettivo per acquisire la proprietà definitiva del bene.

**Spese riscatto**: Eventuali spese accessorie per il riscatto.

**Maxicanone iniziale**: Normalmente nei contratti di leasing è previsto un maxicanone iniziale.

**Spese istruttoria e pratica**: Accessorie rispetto al maxicanone ed eventualmente previste una tantum all'inizio del contratto.



## CAMPI NON EDITABILI (calcolati):

**Debito residuo**: Valore del bene al netto della sommatoria delle quote capitale dei canoni pagate (rileva la presenza del flag Contabilizzato in corrispondenza della rata di canone).

**Valore totale del contratto**: Maxicanone iniziale + spese istruttoria e pratica + Sommatoria dei canoni (quota capitale + quota interessi + spese incasso / spese della rata)

**Importo finanziato**: Valore del bene al netto (meno) del Maxicanone iniziale.



## GRIGLIA DI DETTAGLIO:

In questa sezione è possibile inserire manualmente il piano di ammortamento dei canoni di leasing (escluso il maxicanone iniziale già indicato nei dati di testata). In alternativa è disponibile nella ribbon bar l'apposita procedura per calcolare automaticamente il piano di ammortamento a partire dai dati di base del leasing già inseriti nella testata.

![](/img/it-it/finance-area/leasing/new/image03.png)

**Data**: la data da inserire è quella prevista per la scadenza del canone, sarà utilizzata per proporla nella registrazione contabile con la quale viene rilevato il ricevimento della fattura per il canone da parte della società concedente;

**Quota capitale**, rappresenta la quota in linea capitale della rata e sarà contabilizzata sul conto contabile definito nella tabella Tipi Leasing;

**Quota interessi,** rappresenta la componente degli interessi relativi alla rata e sarà contabilizzata sullo specifico conto definito nella tabella Tipi leasing;

**Costo rata**, rappresenta ad esempio la quota addebitata a titolo di spese di incasso e sarà contabilizzata anch'essa nello specifico conto definito nella tabella Tipi Leasing;

**Totale**: non editabile calcola il totale delle coponenti della rata;

**Contabilizzata**: il flag si attiva quando viene eseguita la contabilizzazione del canone e influenza sia il calcolo del debito residuo sia il calcolo del risconto del maxicanone;

**Numero / Data Registrazione**: vengono riportati i riferimenti della registrazione generata dalla procedura di contabilizzazione canoni.



## PROCEDURE ATTIVABILI DALLA RIBBON BAR:

### Le procedure **contabili** 

attivabili dall'interno della form Dettagli Leasing sono le stesse accessibili anche dalla lista delle procedure contabili relative al modulo Leasing.

La differenza consiste nel fatto che da questa posizione si andrà ad operare solo sullo specifico leasing del quale siamo entrati nel dettaglio, mentre nel caso delle procedure contabili del modulo, nella relativa form dedicata, saranno ricercabili e selezionabili tutti i canoni ancora da scadere di tutti i leasing presenti nella base dati.

La contabilizzazione del maxicanone viene eseguita una volta sola (anche dopo e indipendentemente dalla contabilizzazione canoni).

Per la contabilizzazione canoni è possibile selezionare la rata da contabilizzare e, una volta confermato di procedere sarà richiesto di compilare un dialog box con il nr documento e data documento nel quale inserire i riferimenti alla fattura ricevuta per canone in scadenza.

La causale contabile da utilizzare è stata definita nella tabella Tipi leasing, ma lo schema della registrazione è fisso e guidato dalla logica della procedura.

Entrambe le procedure sono ripristinabili anche da questa posizione con le consuete logiche di rollback.

### Calcola piano di ammortamento

Premendo questo tasto la procedura, sulla base dei campi principale della testata ovvero data stipula, numero rate valore del bene, tasso di interesse (tass interno di attualizzazione)  andrà a calcolare il piano di ammortamento con il metodo della rata costante (ammortamento alla francese).

:::tip ATTENZIONE:
 non prende in considerazione il maxicanone inserito in testata che va considerato come un canone iniziale anticipato ulteriore (spesso pari ad uno o due canoni in termini di valore).
:::

Si apre un dialogo in cui inserire (nuovamente se diversa da quella già inserita in testata) la **data del primo canone**, il numero di **mesi di scostamento** tra una rata e l'altra (che determina la periodicità della rata, ad esempio 1 = mensile, 2 = bimestrale, 3= trimestrale ecc...). ATTENZIONE la periodicità tiene conto del tempo tra una rata e l'altra e calcola comunque tante rate quante sono state inserite nella testata.

Il **costo rata**: ad esempio spese di incasso ecc... che vengono aggiunte per ogni rata nell'apposita colonna del dettaglio. 

Questo bottone può essere utilizzato anche per ricalcolare, aggiornando, il piano di ammortamento, a patto che non siano stati ancora contabilizzati i canoni.

**Cambia date rate**: serve per variare unicamente le date dei canoni e/o la relativa periodicità senza ricalcolare l'intero piano (dove potrebbero essere state fatte anche variazioni manuali nei valori). Vengono richiesti unicamente la data primo canone e la periodicità

**Aggiorna spese rata**: serve per cambiare la commissione (esempio spese incasso rata) su tutte le righe senza ricalcolare tutto il piano o  dover aggiornare manualmente tutte le righe (sempre possibile). Il dialogo richiede unicamente il nuovo valore della commissione rata (Costo rata).
