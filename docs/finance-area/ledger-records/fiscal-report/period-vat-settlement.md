---
title: Liquidazione iva periodica
sidebar_position: 5
---

Con questa procedura di stampa si procede al calcolo dell'IVA a credito/debito del periodo di riferimento: per questo report non è obbligatorio che siano già stampati i registri IVA del periodo, ma al fine di riportare l'eventuale credito del periodo precedente, ci dovrà essere stata la stampa in definitiva della liquidazione IVA del periodo precedente (oppure un caricamento manuale nella tabella **[Versamenti IVA ](/docs/finance-area/declarations/declarations/vat-payment)** che dà lo stesso risultato di bloccare il periodo IVA in contabilità). Diversamente la stampa potrà comunque essere eseguita ma senza il riporto del credito del mese o trimestre precedente.



Impostare il periodo e l'anno di riferimento (dove il periodo sarà mensile o trimestrale a seconda della periodicità della liquidazione IVA periodica impostata nei **[parametri di contabilità](/docs/configurations/parameters/finance/accounting-parameters)**); 

selezionare dalla combo box il registro iva sul quale stampare la liquidazione: 

la stampa può essere effettuata in coda al registro vendite o su un registro riepilogativo dedicato (opzione consigliata). 

:::tip[Gestione dell'acconto annuale IVA]
Nel caso in cui sia stato selezionato l'ultimo periodo dell'anno si abiliterà la possibilità di stampare attivando il flag **calcolo acconto** IVA, in base al quale il report riporterà soltanto le registrazioni fino alla data del 20/12/yyyy.

Quindi questa modalità di supporto al calcolo dell'acconto si riferisce al metodo cosiddetto ***analitico*** ed è l'unico (dei tre metodi previsti dalla normativa) supportato.

Utilizzando il flag Calcolo acconto, si consiglia di NON attivare anche il flag *definitiva*, inquanto, in particolare per contribuenti mensili, avremo la necessità di stampare anche la liquidazione completa del mese di dicembre.

Dunque abiliteremo il flag definitivo (che blocca la modifica dei dati del periodo) al momento della stampa del mese completo.

Stampando il mese di dicembre completo potremo anche **inserire manualmente il valore dell'acconto versato** al fine di detrarlo all'eventuale debito relativo al mese di dicembre.

Il campo specifico per lo scomputo dell'acconto è il rigo VP20-Acconto Versato presente nella form [**Dichiarazione IVA Periodica**](/docs/finance-area/declarations/declarations/periodical-vat-declaration)
:::



**Data versamento / Modalità di versamento**: questi campi (una data che poi viene riportata nella stringa testuale) permettono di far comparire nella stampa una dicitura relativa alla data e modalità di versamento dell'imposta (oppure, modificandoli, un'annotazione libera).

 

**Visualizza intestazione**: flag proposto di default: va tolto solo nel caso in cui la società proceda ancora a stampare su moduli DDTti. 

Stampa **definitiva**: il flag attivo renderà definitiva la stampa bloccando il periodo iva di riferimento ed aggiornando i contatori di pagina del registro sul quale si sta stampando. Permette inoltre di abilitare la sezione sottostante per i giroconti automatici. Inoltre andrà a modificare il periodo di riferimento per farlo corrispondere a quello successivo all'ultimo stampato in definitivo e sarà disabilitato il numero di copie da stampare. 

![](/img/it-it/finance-area/ledger-records/fiscal-report/period-vat-settlement/image01.png)

 

L'esecuzione dell'anteprima di stampa in definitivo non basta per bloccare il periodo e aggiornare i contatori: solo l'esecuzione del processo di stampa fisica andrà ad operare il blocco del periodo in contabilità e ad aggiornare il contatore delle pagine della tabella Registri iva (e non è rilevante che il processo di stampa vada a buon fine o meno, potrebbe essere anche una stampa su file).

La stampa definitiva abiliterà l'opzione di **contabilizzazione liquidazione** (del saldo del periodo): impostando questa opzione l'applicativo attiverà la lista dei conti da utilizzare (riprendendoli dai parametri di contabilità) e l'utente dovrà semplicemente confermare causale e date di riferimento: una volta eseguito il processo di stampa saranno aggiunti in contabilità due registrazioni di giroconto dell'iva acquisti e vendite ai sottoconti di iva a debito/credito sul conto erario C/iva.

![](/img/it-it/finance-area/ledger-records/fiscal-report/period-vat-settlement/image02.png)



| Funzione | Significato |
| --- | --- |
| Anteprima | Pulsante per eseguire l'anteprima di stampa della liquidazione. |
| Stampa | Pulsante per eseguire la stampa fisica della liquidazione. |


:::important Vedi Anche
[**VIDEO TUTORIALS SULLE STAMPE FISCALI**](/docs/video/finance/intro)
:::




