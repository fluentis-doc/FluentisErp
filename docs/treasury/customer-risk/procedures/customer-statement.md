---
title: Esposizione clienti
sidebar_position: 2
---

La maschera ‘Esposizione clienti' consente di avere un quadro generale complessivo di tutta la situazione di rischio nei confronti dei vari clienti, con la possibilità di ottenere dati per agente, nazione, raggruppando anche per gruppi societari. Vediamo in dettaglio le impostazioni presenti e i valori restituiti, considerando che i clienti presentati nella maschera sono quelli per i quali in anagrafica è stato inserito il flag ‘Esposizione clienti'.

La sezione iniziale dei parametri rischio cliente ripropone gli stessi parametri di default di calcolo impostati per il modulo, con in più il range di date registrazione utilizzato per il controllo rimesse (per i dettagli si veda il documento successivo).

Nella sezione successiva della testata è possibile filtrare per un determinato responsabile (il dipendente che è stato associato all'anagrafica cliente, primo tab ‘amministrazione'), filtrare i clienti ‘Esteri' o ‘Italia', visualizzare i dati raggruppati per ‘gruppo societario' (verrà visualizzato un solo totale per il sottoconto inserito nel campo del ‘gruppo societario' presente nel tab amministrazione dell'anagrafica cliente invece che i singoli sottoconti cliente di dettaglio) e infine raggruppare (e filtrare) i dati per agente o nazione. Sulla destra è prevista la possibilità di ordinare i dati per codice di conto/sottoconto o per descrizione (ragione sociale) del cliente.

Passiamo ora a dettagliare i dati visualizzati in griglia (nella quale saranno visualizzate in rosso le righe con scostamento):

**Insoluti**: viene qui visualizzato l'importo degli insoluti non contabilizzati, oppure (se il flag in testata è inserito) anche quelli già contabilizzati;

**Fatt. ultimi 12 mesi**: è il fatturato (dall'area vendita, fatture di vendita) dei 12 mesi precedenti alla data di riferimento;

**Scostamento giorni**: indica il numero di giorni di scostamento tra la scadenza media e la data valuta d'incasso media, secondo quanto calcolato con la logica della maschera ‘Controllo rimesse' cui si rinvia per dettagli; La particolarità è che è una media pesata sull’importo della partita. Infatti il dato è espresso in numeri creditori (come in estratto conto scalare bancario)

**Scostamento GG scad.**: indica i giorni di scostamento medi della data scadenza rispetto alla data documento; considera solo le partite scadute = SOMMA (residuo partita * giorni ad oggi di ritardo dalla data scadenza) / somma dei residui partite. Calcola dunque un valore medio dei ritardi

**Fatturato**: è il fatturato (dall'area vendita, fatture di vendita) dall'inizio dell'anno;

**DSO**: Days of Sales Outstanding, i giorni di rotazione del credito. La formula di calcolo è 365 * (Partite Dare – Partite avere + Effetti in scadenza + Insoluti + Fatture da contabilizzare) / Fatt. Ultimi 12 Mesi. Nel caso in cui il fatturato degli ultimi 12 mesi sia 0 allora anche il DSO sarà 0;

**Fido **e** Fido assicurato**: importo del fido gestionale e del fido assicurato;

**Saldo partitario**: ripropone i totali dare/avere calcolati dalle partite o dal saldo contabile;

**Pagam. da reg. provv.**: importo dei pagamenti partite collegati a registrazioni provvisorie;

**Effetti in scadenza**: importo degli effetti in maturazione (effetti emessi + presentati);

**Da contabilizzare**: sono gli importi delle fatture (dei Tipi fattura collegati al fido) stampate ma non ancora contabilizzate;

**Da fatturare**: sono gli importi dei  DDT (dei Tipi DDT collegati al fido) stampate ma non ancora fatturate;

**Tot. Esposizione**: somma di ordini aperti + ddt da fatt. +fatt. da cont. + saldo partite/cont + effetti a scadere + insoluti non contab.;

**Scaduto**: importo delle partite aperte e già scadute;

**Scaduto da reg. provv.**: come il precedente, ma derivanti da registrazioni provvisorie;

**Ordini**: sono gli importi degli ordini (dei Tipi ordine collegati al fido) stampati, confermati ma non ancora evasi.

Dalla maschera dell'esposizione clienti è possibile: effettuare una stampa dei dati visualizzati, oppure passare alla maschera del ‘Controllo rimesse' relativamente alla riga del cliente selezionato, attraverso il relativo pulsante di gestione.



| Funzione | Significato |
| --- | --- |
| Calcola | Pulsante per calcolare il rischio clienti secondo i filtri e le impostazioni indicate. |
| Anteprima | Richiama la procedura di anteprima di stampa per il calcolo effettuato. |
| Stampa | Richiama la procedura di stampa per il calcolo effettuato. |
| Controllo rimesse | Richiama la procedura per aprire la maschera di controllo rimesse. |






