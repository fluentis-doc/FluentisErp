---
title: Riordina protocolli IVA
sidebar_position: 10
---

La funzionalità gestita tramite questa form consente di modificare massivamente i protocolli iva assegnati alle registrazioni contabili (di tipo IVA, ad esempio per fatture ricevute o emesse) al fine di correggere eventuali errori o per esigenze particolari.

In prima battuta la ricerca dei dati possibile con questa form può essere utile anche come controllo ad esempio di numeri di protocollo mancanti o di sfasature (per quanto riguarda ad esempio le fatture di vendita) tra il numero di protocollo ed il numero del documento che rappresentano evidentemente delle irregolarità dal punto di vista fiscale.

All'apertura della form è necessario selezionare il registro IVA da controllare e/o modificare ed il range di date di interesse (per un controllo generale si consiglia di partire dall'inizio dell'anno). Tale selezione viene fatta nella parte più alta della form.


A questo punto è possibile avviare la ricerca tramite il comando **Cerca** presente nella ribbon bar.

I dati sono visualizzati nella prima griglia immediatamente sottostante rispetto all'area di filtro.

![](/img/it-it/finance-area/ledger-records/records/rearrange-vat-reference-number/image02.png)

Poiché al fine di operare i controlli potrebbe essere interessante ordinare i dati non solo in base al numero di protocollo, ma ad esempio in base al numero di documento, ed essendo il numero di documento di per se una stringa alfanumerica, è presente nella zona di filtro il flag apposito **Considera numero documento come numero** che consente un corretto criterio di ordinamento.

Esempio:

- con flag disattivato si avrà (ordinando per numero di documento) 1, 10, 100, 2, 20, 200 .....

- con flag attivo si avrà (ordinando per numero di documento) 1, 2, 3, ... 10 ... 20 ... 100 ... 200

Selezionando una riga dalla griglia del risultato (Registrazioni contabili) saranno visualizzati i relativi dettagli riguardanti il registro IVA ed il libro giornale nelle due **ulteriori griglie sottostanti** (tali dati costituiscono chiaramente i dettagli della registrazione contabile inseriti dall'utente o dalla procedura automatica di contabilizzazione fatture).

**POSSIBILI MODALITA' DI RINUMERAZIONE / RIORDINO**:

- Parziale: a titolo di esempio si supponga di dover "slittare" in avanti di un numero di protocollo tutte le registrazioni a partire dalla nr. 3 (in modo da creare un "buco" nella numerazione per inserire magari una scrittura mancante).


 1. Selezionare le righe interessate dalla rinumerazione (ad esempio dalla registrazione con nr. di protocollo 3 in poi), si può utilizzare il tasto Shift della tastiera o fare Click & drag col mouse;
 2. Inserire il numero di protocollo di partenza nel apposito campo **Numero di partenza** situato nella parte bassa della form (ad esempio 4);
 3. Premere il tasto **Numerazione automatica** situato nella ribbon bar;
 4. Saranno proposti i nuovi protocolli come si vede nell'immagine;
 5. Premere **Salva** (situato nella ribbon bar) per confermare la modifica.

![](/img/it-it/finance-area/ledger-records/records/rearrange-vat-reference-number/image03.png)  ![](/img/it-it/finance-area/ledger-records/records/rearrange-vat-reference-number/image04.png)

In alternativa (consigliabile solo per modifiche a singole righe o poche righe)


 1. Posizionarsi, in corrispondenza della riga relativa alla registrazione con protocollo nr. 3, sul campo Nuovo prot. IVA e digitare il nuovo protocollo (es. 4);
 2. Premere **Salva** (situato nella ribbon bar) per confermare la modifica.

- Totale: dovendo procedere a rinumerare tutte le registrazioni, ad esempio perché sfasata rispetto al numero documento o per mancanza di coerenza tra l'ordine di protocollo e la data registrazione (ad esempio perché non è stato attivato il controllo di coerenza data-protocollo).


 1. Selezionare tutte le righe del risultato ottenuto grazie al filtro (ad esempio tutte le registrazioni dall'inizio dell'anno ad oggi) tramite il mouse oppure con la combinazione Ctrl A;
 2. Inserire il numero di protocollo di partenza nel apposito campo **Numero di partenza** situato nella parte bassa della form (in questo caso 1);
 3. Premere il tasto **Numerazione automatica** situato nella ribbon bar;
 4. Saranno proposti i nuovi protocolli come si vede nell'immagine;
 5. Premere **Salva** (situato nella ribbon bar) per confermare la modifica.

E' possibile variare il criterio di ordinamento utilizzato nell'operazione di rinumerazione selezionando, in alternativa tra quelli proposti in basso nella form.

![](/img/it-it/finance-area/ledger-records/records/rearrange-vat-reference-number/image05.png)

Data / Numero Registrazione: sarà attribuito il numero di protocollo in relazione alla progressione della data registrazione, e a parità di data del numero di registrazione.

Data / Numero Documento: sarà attribuito il numero di protocollo in relazione alla progressione della data registrazione, e a parità di data del numero di documento.

Tipo / Data / Numero Documento: sarà attribuito il numero di protocollo in relazione al tipo documento (esempio fatture, poi note di accredito), a parità di tipo documento, in base alla progressione della data registrazione, e a parità di data del numero di documento.

Il flag **Riscrivi descrizioni**, se attivo, in fase di rinumerazione aggiorna la descrizione del movimento laddove, in base alle impostazioni definite nella **[causale contabile](/docs/configurations/tables/finance/ledger-records-templates/insert-ledger-records-templates)**, preveda la lettura automatica del protocollo IVA. 






